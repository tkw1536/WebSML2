(function($){

	var init_run_ui, init_loader, output; 

	init_loader = function(){
		$("#ui, #topbar").hide().removeClass("hidden");
		$("#msgbox").center(); 

		$(window).resize(function(){
			$("#ui").height($(window).height()-50); 
		}).resize(); 
		

		runLoader(function(percent, line1, line2){
			$(".bar").width(Math.round(percent)+"%");
			$("#msgline1").text(line1); 
			$("#msgline2").text(line2);
			$("#msgbox").center();  
		}, function(){
			$("#msgbox").fadeOut(1000, function(){
				$(this).remove();
			}); 

			init_run_ui(); 
		});
	}; 
	

	init_run_ui = function(){
		$("#ui, #topbar")
		.fadeIn(1000); 

		$("#code, #right, #compressed").niceScroll();

		$("#clear").click(function(){
			$('#right')
			.html("")
			.append(
			'<span class="label label-info">Output cleared. </span><br>'
			); 
		}); 

		var Interpreter = window.Interpreter = new SMLC(); 

		Interpreter.on("output", function(e, chunk, italic){
			output(chunk, true);
		})

		$("#run").click(function(){
			output("Running new program").addClass("label label-success"); 

			Interpreter.run($("#code").val(), function(allText, state){
				
				if(state == 0){
					output("Program finished").addClass("label label-success"); 
				} else {
					output("Program failed").addClass("label label-important"); 
				}
			}); 
		});

		var already_compressed = false; 

		var compress = function(){
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
		}

		$("#compress_only").click(function(){
			var compressed = compress(); 

			$("#compressed").val(compressed?compressed:"(* Compress failed *)"); 

			already_compressed = compress?true:false; 
			$("#compress_close").text(compress?"Save": "Compress & Save");
		});

		$("#compress_close").click(function(){
			var compressed = compress(); 
			if(compressed){
				$("#code").val(already_compressed?$("#compressed").val():compressed); 
				$("#compressdialog").modal("hide"); 
			} else {
				$("#compressed").val("(* Compress failed *)");
			}
			
		});

		$("#restore_code").click(function(){
			already_compressed = false; 
			$("#compress_close").text("Compress & Save");
			$("#compressed").val($("#code").val()); 
		})

		$("#compressdialog").on("shown", function(){
			$("#restore_code").click(); 
		});
	};


	output = function(chunk, br){
		var res = $("<span>").text(chunk).appendTo("#right"); 
		$(" <br> ").appendTo("#right");

		$('#right').scrollTop($('#right')[0].scrollHeight);
		return res; 
	}

	$(init_loader); 
})(jQuery); 