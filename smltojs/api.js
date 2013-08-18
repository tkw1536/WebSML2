
var root = window; //The root node, only window supported so far

var environment_reference = []; //the basic reference to the SML environment
var initial_environment = smltojs0$SmlToJsComp$$5.initial$2423(0); // the initial library
var has_loaded = false; 
var ready_cache = []; 

/*
    SMLC - basic constructor
    Creates a new instance for the SML Compiler
*/
var SMLC = root.SMLC = function(func){

    if(typeof func == "function"){
        return SMLC.ready(func); 
    }

	var me = this; //reference to me

	var EventEmitter = $("<div>"); //Used as an Event Emitter

	//Event Emitter Functions
	this.on = function(evt, cb){
		EventEmitter.on(evt, function(){
			cb.apply(me, arguments);
		})
	};

	this.once = function(evt, cb){
		EventEmitter.one(evt, function(){
			cb.apply(me, arguments);
		})
	};

	this.off = function(evt){
		EventEmitter.off(evt); 
	};

	this.trigger = function(evt, args){
		EventEmitter.trigger(evt, args); 
	};

    /* Running some code */

	this.run = function(code, options){
        if(!has_loaded){
            return false; 
        }
		var options = (typeof options == "undefined")?{}:options; 
        var allText = ""; 

		if(typeof options == "function"){
			options = {
				"finish": options
			};
		}

		var on_output = (typeof options.output == "function")?options.output:function(chunk){}; //Once there is some output
		var on_finish = (typeof options.finish == "function")?options.finish:function(all_text, success){}; //Once we are ready 


        var result, exec_result, compiled; //cache for the result

		basis$General$.print$156 = function(chunk){
			on_output(chunk); 
			me.trigger("output", [chunk]); 
            allText += chunk; 
		};

        var res_state = 0; 
        /*
        	Result States: 
        	0: OK
        	1: General failure to run program (load_env not ready ?)
        	2: Uncaught exception while running code
        */

        try {
            compiled = smltojs0$SmlToJsComp$$9.compile$4889(environment_reference, code); //compile the code

            try {
                exec_result = smltojs0$SmlToJsComp$$9.execute$4951(compiled[1]);
            	res_state = 0; //OK
            }
            catch (err) {
                //general uncaught exception - set other state
                res_state = 2; 
                basis$General$.print$156(("Uncaught exception " + err[0]) + "\n");
            };
        }
        catch (f) {
            res_state = 1; 
        };

        on_finish(allText, res_state);
        me.trigger("finish", [allText, res_state]); 
        return true; 
	}
};

/* === Loading the libs === */

SMLC.baseLibs = ["Initial", "General", "Option", "List", "ListPair", "Vector", "VectorSlice", "Array", "ArraySlice", "Array2", "ByteTable", "ByteSlice", "StringCvt", "String2", "Substring", "Text", "Bool", "IntInfRep", "Word32", "Word8", "Word31", "Pack32Little", "Pack32Big", "Byte", "Int32", "Int31", "Math", "Real", "IntInf", "Time", "Random", "Path", "Date", "Timer", "TextIO", "JsCore", "Js"]; 

SMLC.loadLibs = function(cb){
    var getLoadUrl = function(l){return "js/basis/MLB/Js/" + l + ".sml.o.eb.js"; }; 

    var load = function (env, libs) {
        var unpickled; 


        while(libs.length > 0){
            var lib = libs.shift(); 
            try{
                unpickled = pickle$pickle$.unpickle$2262(smltojs0$SmlToJsComp$$5.pu$2431, root[lib+"_sml_eb"]);
            } catch(e){
                return 1; 
            }

            env = smltojs0$SmlToJsComp$$5.plus$2424([env, unpickled]); 

        }
        
        environment_reference = env; //we are done
        return 0; 
    };

    has_loaded = load(initial_environment, SMLC.baseLibs.slice(0)) == 0; 

    while(ready_cache.length > 0){
        ready_cache.pop()(); 
    }

};

$(SMLC.loadLibs); //load the libraruies once ready. 

SMLC.ready = function(cb){
    if(has_loaded){
        cb(); 
    } else {
        ready_cache.push(cb); 
    }
};


/* === VARIOUS === */
SMLC.toString = function(){return "function magic() { [native code] }"}
SMLC.toString.toString = SMLC.toString; 