
(function(){

    var files, length, count; 

    count = 0;  

    function loadScript(url, callback){
    //adapted from http://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript/
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
    }

    var steptext = "Initialising ... "

    window.runLoader = function(step, finish){
    var loadNext = function(){
        if(files.length == 0){
            step(100, "Finished", "");
            finish(); 
        } else {
            
            var fn = files.shift(); 
            if(fn === 0){
                steptext = files.shift();
                fn = files.shift(); 
            }
            step(100* (count/length), steptext, fn); 
            count++; 
            loadScript(fn, loadNext); 
        }
    };
    loadNext(); 
    }



    files = [

    0, "Loading SML Obfuscator ... ", //=== Obfuscator ===

    "smlobfuscator/sml.js", 
    "smlobfuscator/sml.random.js", 

    0, "Loading SML Interpreter ... ", //=== Interpreter ===

    "smltojs/prims.js", 
    "smltojs/JSBase/Initial-sml.js", 
    "smltojs/JSBase/General-sml.js", 
    "smltojs/JSBase/Option-sml.js", 
    "smltojs/JSBase/List-sml.js", 
    "smltojs/JSBase/ListPair-sml.js", 
    "smltojs/JSBase/Vector-sml-code3.js", 
    "smltojs/JSBase/Array-sml-code3.js", 
    "smltojs/JSBase/ByteTable-sml-code5.js", 
    "smltojs/JSBase/ByteTable-sml-code16.js", 
    "smltojs/JSBase/ByteTable-sml-code22.js", 
    "smltojs/JSBase/ByteSlice-sml-code3.js", 
    "smltojs/JSBase/ByteSlice-sml-code12.js", 
    "smltojs/JSBase/StringCvt-sml.js", 
    "smltojs/JSBase/StrBase-sml.js", 
    "smltojs/JSBase/Char-sml.js", 
    "smltojs/JSBase/String-sml.js", 
    "smltojs/JSBase/Substring-sml.js", 
    "smltojs/JSBase/IntInfRep-sml.js", 
    "smltojs/JSBase/Word32-sml.js", 
    "smltojs/JSBase/Pack32Little-sml.js", 
    "smltojs/JSBase/Int32-sml.js", 
    "smltojs/JSBase/Int31-sml.js", 
    "smltojs/JSBase/Real-sml.js", 
    "smltojs/JSBase/IntInf-sml.js", 
    "smltojs/JSBase/Time-sml.js", 
    "smltojs/JSBase/Path-sml.js", 
    "smltojs/JSBase/Date-sml.js", 
    "smltojs/JSBase/Timer-sml.js", 
    "smltojs/JSBase/TextIO-sml.js", 
    "smltojs/JSBase/IO-sml.js", 
    "smltojs/JSBase/Control-sml.js", 
    "smltojs/Edlib/MLB/Js/edList-sml.js", 
    "smltojs/Edlib/MLB/Js/edListPair-sml.js", 
    "smltojs/Edlib/MLB/Js/ListSort-sml.js", 
    "smltojs/Edlib/MLB/Js/Set-sml.js", 
    "smltojs/Edlib/MLB/Js/EqSet-sml.js", 
    "smltojs/Pickle/MLB/Js/Polyhash-sml.js", 
    "smltojs/Pickle/MLB/Js/eqhashdyn2-sml.js", 
    "smltojs/Pickle/MLB/Js/bitstream-sml.js", 
    "smltojs/Pickle/MLB/Js/pickle-sml.js", 
    "smltojs/Kitlib/MLB/Js/Listsort-sml.js", 
    "smltojs/Common/MLB/Js/Crash-sml.js", 
    "smltojs/Common/MLB/Js/Report-sml.js", 
    "smltojs/Common/MLB/Js/Timestamp-sml.js", 
    "smltojs/Common/MLB/Js/PrettyPrint-sml.js", 
    "smltojs/Common/MLB/Js/IntFinMapPT-sml.js", 
    "smltojs/Common/MLB/Js/BasisCompat-sml.js", 
    "smltojs/Common/MLB/Js/Flags-sml-code1.js", 
    "smltojs/Common/MLB/Js/Flags-sml-code4.js", 
    "smltojs/Common/MLB/Js/Flags-sml-code5.js", 
    "smltojs/Common/MLB/Js/Flags-sml-code6.js", 
    "smltojs/Common/MLB/Js/Flags-sml.js", 
    "smltojs/Common/MLB/Js/StringFinMap-sml-code2.js", 
    "smltojs/Common/MLB/Js/IntStringFinMap-sml.js", 
    "smltojs/Common/MLB/Js/FinMapEq-sml.js", 
    "smltojs/Common/MLB/Js/FinMap-sml.js", 
    "smltojs/Common/MLB/Js/SortedFinMap-sml.js", 
    "smltojs/Common/MLB/Js/Timing-sml.js", 
    "smltojs/Common/MLB/Js/IntSet-sml.js", 
    "smltojs/Common/MLB/Js/NatSet-sml.js", 
    "smltojs/Common/MLB/Js/UnionFindPoly-sml.js", 
    "smltojs/Common/MLB/Js/DiGraph-sml.js", 
    "smltojs/Common/MLB/Js/StrId-sml.js", 
    "smltojs/Common/MLB/Js/Ident-sml.js", 
    "smltojs/Common/MLB/Js/IdentFinMap-sml-code1.js", 
    "smltojs/Common/MLB/Js/IdentFinMap-sml-code2.js", 
    "smltojs/Common/MLB/Js/SigId-sml.js", 
    "smltojs/Common/MLB/Js/FunId-sml.js", 
    "smltojs/Common/MLB/Js/Lab-sml.js", 
    "smltojs/Common/MLB/Js/SyntaxTyVar-sml.js", 
    "smltojs/Common/MLB/Js/SCon-sml.js", 
    "smltojs/Common/MLB/Js/TyCon-sml.js", 
    "smltojs/Common/MLB/Js/Name-sml.js", 
    "smltojs/Common/MLB/Js/TyName-sml-code1.js", 
    "smltojs/Common/MLB/Js/TyName-sml-code2.js", 
    "smltojs/Common/MLB/Js/TyName-sml-code3.js", 
    "smltojs/Common/MLB/Js/TyName-sml-code4.js", 
    "smltojs/Common/MLB/Js/InfixBasis-sml.js", 
    "smltojs/Parsing/MLB/Js/LexBasics-sml.js", 
    "smltojs/Common/MLB/Js/DFInfo-sml.js", 
    "smltojs/Common/MLB/Js/SourceInfo-sml.js", 
    "smltojs/Common/MLB/Js/ParseInfo-sml.js", 
    "smltojs/Common/MLB/Js/PreElabDecGrammar-sml-code1.js", 
    "smltojs/Common/MLB/Js/PreElabDecGrammar-sml-code2.js", 
    "smltojs/Common/MLB/Js/PreElabTopdecGrammar-sml-code1.js", 
    "smltojs/Common/EfficientElab/MLB/Js/StatObject-sml.js", 
    "smltojs/Common/EfficientElab/MLB/Js/Environments-sml.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ModuleStatObject-sml.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ModuleEnvironments-sml.js", 
    "smltojs/Manager/MLB/Js/OpacityEnv-sml-code1.js", 
    "smltojs/Manager/MLB/Js/OpacityEnv-sml-code2.js", 
    "smltojs/Manager/MLB/Js/OpacityEnv-sml-code3.js", 
    "smltojs/Manager/MLB/Js/OpacityEnv-sml-code4.js", 
    "smltojs/Common/MLB/Js/TypeInfo-sml.js", 
    "smltojs/Common/MLB/Js/OverloadingInfo-sml.js", 
    "smltojs/Common/MLB/Js/ErrorInfo-sml.js", 
    "smltojs/Common/MLB/Js/ElabInfo-sml.js", 
    "smltojs/Parsing/MLB/Js/GrammarUtils-sml.js", 
    "smltojs/Parsing/MLB/Js/Infixing-sml-code1.js", 
    "smltojs/Parsing/MLB/Js/Infixing-sml-code2.js", 
    "smltojs/Parsing/MLB/Js/Infixing-sml-code4.js", 
    "smltojs/Parsing/MLB/Js/Infixing-sml-code5.js", 
    "smltojs/Parsing/MLB/Js/Infixing-sml-code7.js", 
    "smltojs/Parsing/MLB/Js/Infixing-sml-code8.js", 
    "smltojs/Parsing/MLB/Js/Parse-sml-code2.js", 
    "smltojs/Parsing/MLB/Js/Parse-sml-code4.js", 
    "smltojs/Parsing/MLB/Js/Parse-sml-code7.js", 
    "smltojs/Parsing/MLB/Js/Parse-sml-code8.js", 
    "smltojs/Parsing/MLB/Js/Parse-sml-code9.js", 
    "smltojs/Parsing/MLB/Js/Parse-sml-code13.js", 
    "smltojs/Parsing/MLB/Js/Parse-sml-code16.js", 
    "smltojs/Parsing/MLB/Js/Parse-sml-code17.js", 
    "smltojs/Common/MLB/Js/PostElabGrammar-sml-code1.js", 
    "smltojs/Common/MLB/Js/PostElabGrammar-sml-code2.js", 
    "smltojs/Common/MLB/Js/PostElabGrammar-sml-code3.js", 
    "smltojs/Common/MLB/Js/ElabDec-sml.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ElabTopdec-sml-code1.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ElabTopdec-sml-code2.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ElabTopdec-sml-code3.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ElabTopdec-sml-code4.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ElabTopdec-sml-code5.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ElabTopdec-sml-code6.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ElabTopdec-sml-code7.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ElabTopdec-sml-code8.js", 
    "smltojs/Common/EfficientElab/MLB/Js/ElabTopdec-sml-code9.js", 
    "smltojs/Common/MLB/Js/ErrorTraverse-sml.js", 
    "smltojs/Common/MLB/Js/TopLevelReport-sml.js", 
    "smltojs/Manager/MLB/Js/ParseElab-sml.js", 
    "smltojs/Manager/MLB/Js/OpacityElim-sml.js", 
    "smltojs/Manager/MLB/Js/FreeIds-sml.js", 
    "smltojs/Compiler/Lambda/MLB/Js/Lvars-sml-code1.js", 
    "smltojs/Compiler/Lambda/MLB/Js/Lvars-sml-code2.js", 
    "smltojs/Compiler/Lambda/MLB/Js/Lvars-sml-code3.js", 
    "smltojs/Compiler/Lambda/MLB/Js/Con-sml-code1.js", 
    "smltojs/Compiler/Lambda/MLB/Js/Con-sml-code2.js", 
    "smltojs/Compiler/Lambda/MLB/Js/Excon-sml-code1.js", 
    "smltojs/Compiler/Lambda/MLB/Js/Excon-sml-code2.js", 
    "smltojs/Compiler/Regions/MLB/Js/AddressLabels-sml.js", 
    "smltojs/Compiler/Lambda/MLB/Js/LambdaExp-sml-code3.js", 
    "smltojs/Compiler/Lambda/MLB/Js/LambdaExp-sml-code4.js", 
    "smltojs/Compiler/Lambda/MLB/Js/LambdaBasics-sml.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompilerEnv-sml-code1.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompilerEnv-sml-code2.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompilerEnv-sml-code3.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompilerEnv-sml-code5.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompilerEnv-sml-code6.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompilerEnv-sml-code7.js", 
    "smltojs/Common/MLB/Js/MD5-sml.js", 
    "smltojs/Compiler/Lambda/MLB/Js/OptLambda-sml-code5.js", 
    "smltojs/Compiler/Lambda/MLB/Js/OptLambda-sml-code6.js", 
    "smltojs/Compiler/Lambda/MLB/Js/OptLambda-sml-code11.js", 
    "smltojs/Compiler/Lambda/MLB/Js/OptLambda-sml-code12.js", 
    "smltojs/Compiler/Lambda/MLB/Js/OptLambda-sml-code13.js", 
    "smltojs/Compiler/Lambda/MLB/Js/OptLambda-sml-code14.js", 
    "smltojs/Compiler/Lambda/MLB/Js/LambdaStatSem-sml.js", 
    "smltojs/Compiler/Lambda/MLB/Js/EliminateEq-sml-code3.js", 
    "smltojs/Compiler/Lambda/MLB/Js/EliminateEq-sml-code4.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code1.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code2.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code3.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code4.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code5.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code6.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code7.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code8.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code9.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code10.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code11.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code13.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code14.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code15.js", 
    "smltojs/Compiler/Lambda/MLB/Js/CompileDec-sml-code16.js", 
    "smltojs/Compiler/MLB/Js/CompBasisToLamb-sml.js", 
    "smltojs/Compiler/MLB/Js/CompileToLamb-sml.js", 
    "smltojs/Compiler/Backend/JS/MLB/Js/ExpToJs-sml.js", 
    "smltojs/Compiler/Backend/JS/MLB/Js/CompileJS-sml.js", 
    "smltojs/Compiler/Backend/JS/MLB/Js/CompileBasisJS-sml.js", 
    "smltojs/Compiler/Backend/JS/MLB/Js/ExecutionJS-sml.js", 
    "smltojs/JSBase/JsCore-sml.js", 
    "smltojs/JSBase/Js-sml.js", 
    "smltojs/JSBase/Html-sml.js", 
    "smltojs/JSBase/Parsercomb-sml.js", 
    "smltojs/JSBase/WSeq-sml.js", 
    "smltojs/JSBase/XMLrpcClient-sml-code1.js", 
    "smltojs/JSBase/XMLrpcClient-sml-code2.js", 
    "smltojs/JSBase/XMLrpcClient-sml-code3.js", 
    "smltojs/Compiler/Backend/JS/MLB/Js/SmlToJsComp-sml-code1.js", 
    "smltojs/Compiler/Backend/JS/MLB/Js/SmlToJsComp-sml-code4.js", 
    "smltojs/Compiler/Backend/JS/MLB/Js/SmlToJsComp-sml-code5.js", 
    "smltojs/Compiler/Backend/JS/MLB/Js/SmlToJsComp-sml-code8.js", 
    "smltojs/Compiler/Backend/JS/MLB/Js/SmlToJsComp-sml-code9.js", 

    0, "Loading SML Libraries ... ", //=== Libs ===

    "smltojs/SMLLibs/Initial.sml.o.eb.js", 
    "smltojs/SMLLibs/General.sml.o.eb.js", 
    "smltojs/SMLLibs/Option.sml.o.eb.js", 
    "smltojs/SMLLibs/List.sml.o.eb.js", 
    "smltojs/SMLLibs/ListPair.sml.o.eb.js", 
    "smltojs/SMLLibs/Vector.sml.o.eb.js", 
    "smltojs/SMLLibs/VectorSlice.sml.o.eb.js", 
    "smltojs/SMLLibs/Array.sml.o.eb.js", 
    "smltojs/SMLLibs/ArraySlice.sml.o.eb.js", 
    "smltojs/SMLLibs/Array2.sml.o.eb.js", 
    "smltojs/SMLLibs/ByteTable.sml.o.eb.js", 
    "smltojs/SMLLibs/ByteSlice.sml.o.eb.js", 
    "smltojs/SMLLibs/StringCvt.sml.o.eb.js", 
    "smltojs/SMLLibs/String2.sml.o.eb.js", 
    "smltojs/SMLLibs/Substring.sml.o.eb.js", 
    "smltojs/SMLLibs/Text.sml.o.eb.js", 
    "smltojs/SMLLibs/Bool.sml.o.eb.js", 
    "smltojs/SMLLibs/IntInfRep.sml.o.eb.js", 
    "smltojs/SMLLibs/Word32.sml.o.eb.js", 
    "smltojs/SMLLibs/Word8.sml.o.eb.js", 
    "smltojs/SMLLibs/Word31.sml.o.eb.js", 
    "smltojs/SMLLibs/Pack32Little.sml.o.eb.js", 
    "smltojs/SMLLibs/Pack32Big.sml.o.eb.js", 
    "smltojs/SMLLibs/Byte.sml.o.eb.js", 
    "smltojs/SMLLibs/Int32.sml.o.eb.js", 
    "smltojs/SMLLibs/Int31.sml.o.eb.js", 
    "smltojs/SMLLibs/Math.sml.o.eb.js", 
    "smltojs/SMLLibs/Real.sml.o.eb.js", 
    "smltojs/SMLLibs/IntInf.sml.o.eb.js", 
    "smltojs/SMLLibs/Time.sml.o.eb.js", 
    "smltojs/SMLLibs/Random.sml.o.eb.js", 
    "smltojs/SMLLibs/Path.sml.o.eb.js", 
    "smltojs/SMLLibs/Date.sml.o.eb.js", 
    "smltojs/SMLLibs/Timer.sml.o.eb.js", 
    "smltojs/SMLLibs/TextIO.sml.o.eb.js", 
    "smltojs/SMLLibs/JsCore.sml.o.eb.js", 
    "smltojs/SMLLibs/Js.sml.o.eb.js", 
    "smltojs/SMLLibs/Html.sml.o.eb.js", 
    "smltojs/SMLLibs/Rwp.sml.o.eb.js", 

    0, "Loading SML API ... (this might take a while)", //=== API ===

    "smltojs/api.js"];

    length = files.length - 4;
})();