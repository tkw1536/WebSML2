/*
    WebSML2 - Running SML online
    Copyright (C) 2013  Tom Wiesing

    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License 
    version 2 as published by the Free Software Foundation

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

jQuery(function($){

	var Instance, 
	output, 
	compress_button, 
	already_compressed, 
	compress, 
	compress_only, 
	compress_close, 
	compress_restore; 

	//set the progressbar
	$("#progressbar").progressbar({value: false});

	//center the message box
	$("#msgbox").center(); 

	//hide the non-visible UI components
	$("#ui, #topbar").hide(); 

	//make the nice scroll uis
	$("#code, #right, #compressed").niceScroll();

	//Create dialogs
	$("#about").dialog({
		autoOpen: false, 
		modal: true
	}); 

	//Create menu buttons
	$("#runbtn").button({
		icons: {
			primary: "ui-icon-play"
     	}
	});

	$("#compressbtn, #aboutbtn, #clearbtn").button(); 

	//the compress button + dialog
	$("#compressdialog").hide().dialog({
		autoOpen: false, 
		modal: true,
		resize: false,
		buttons: {
			"Compress & Save": function(){
				compress_close(); 
			},
			"Compress": function(){
				compress_only(); 
			},
			"Restore": function(){
				compress_restore(); 
			},
			"Cancel": function(){
				$(this).dialog("close"); 
			}
		}
	}); 

	compress_button = $("#compressdialog").parent().find(".ui-button-text").eq(1); 

	already_compressed = false; 

	compress = function(){
		try{
			return SML($(already_compressed?"#compressed":"#code").val(), {
				"exceptions": $("#ignore_funcs").val().split(" ").join("").split(","),
				"dicGenerator": SML.dicGenerator[$("#replacer").val()],
				"removeComments": $("#remove_comments").is(":checked"),
				"simpleOptimize": $("#simple_optimize").is(":checked"),
				"removeLineBreaks": $("#remove_lines").is(":checked"),
				"preOptimize": function(code){
					return ($("#add_garbage").is(":checked"))?SML.addRandomComments(code):code;
				}
			});
		} catch(e){
			return false; 
		}

		$("#compressed").val(res); 
	};

	compress_only = function(){
		var compressed = compress(); 

		$("#compressed").val(compressed?compressed:"(* Compress failed *)"); 

		already_compressed = compress?true:false; 
		compress_button.text(compress?"Save": "Compress & Save");
	};



	compress_close = function(){
		var compressed = compress(); 
		if(compressed){
			$("#code").val(already_compressed?$("#compressed").val():compressed); 
			$("#compressdialog").dialog("close"); 
		} else {
			$("#compressed").val("(* Compress failed *)");
		}
		
	};

	compress_restore = function(){
		already_compressed = false; 
		compress_button.text("Compress & Save");
		$("#compressed").val($("#code").val()); 
	};

	$("#compressbtn").click(function(){
		compress_restore(); 
		$("#compressdialog")
		.dialog("open"); 
	});

	//the about button + dialog
	$("#aboutdialog").find("a").button(); //create buttons

	$("#aboutdialog").hide().dialog({
		autoOpen: false, 
		modal: true,
		resize: false,
		buttons: {
			"Close": function(){
				$(this).dialog("close"); 
			}
		}
	}); 

	$("#aboutbtn").click(function(){
		$("#aboutdialog").dialog("open"); 
	});

	// the clear button

	$("#clearbtn").click(function(){
		$("#right").empty(); 

		output("Output cleared. ").addClass("label label-clear");
	});

	//the run button
	$("#runbtn").click(function(){
		output("Running new program").addClass("label label-new"); 

		Interpreter.run($("#code").val(), function(allText, state){
			
			if(state == 0){
				output("Program finished").addClass("label label-finish"); 
			} else {
				output("Program failed").addClass("label label-fail"); 
			}
		}); 
	});

	//bind resize hacks
	$(window).resize(function(){
			$(".left, .right").height($(window).height()-$(".top").height());

			$("#compressdialog, #aboutdialog")
			.dialog("option", "width", 0.8*$(window).width())
			.dialog("option", "height", 0.8*$(window).height());
	}).resize(); 

	


	//start loading after showing the license text for 1 second
	window.setTimeout(function(){
		$("#progressbar > span").remove(); //remove the license stuff

		runLoader(function(percent, line1, line2){
			$("#progressbar").progressbar({value: Math.round(percent)}); 
			$("#msgline1").text(line1); 
			$("#msgline2").text(line2);
			$("#msgbox").center();  
		}, function(){
			$("#msgbox").fadeOut(1000, function(){
				$(this).remove();
			}); 

			$("#ui, #topbar") //fade these in
			.fadeIn(1000); 


			//set the interpreter
			Interpreter = window.Interpreter = new SMLC(); 
			Interpreter.on("output", function(e, chunk, italic){
				output(chunk, true);
			});

		});
	}, 1000); 


	output = function(chunk){
		var res = $("<span>").text(chunk).appendTo("#right"); 
		$(" <br> ").appendTo("#right");

		$('#right').scrollTop($('#right')[0].scrollHeight);
		return res; 
	}
}); 