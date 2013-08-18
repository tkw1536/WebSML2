if ((typeof(tools$Flags$$6)) == "undefined") {tools$Flags$$6 = {};
};
(function(){tools$Flags$$6.eq_compiler_mode$5076 = function(v$5078,v$5079){switch (v$5078[0]) { case 0: {switch (v$5079[0]) { case 0: {var v$5080 = v$5078[1];
var v$5081 = v$5079[1];
var fix$5450 = {};
fix$5450.$eq_list = function(v$5090,v$5091){lab$eq_list: while (true) {if (v$5090 == null) {return (v$5091 == null)?true:false;
} else {if (v$5091 == null) {return false;
} else {var v$5092 = v$5090;
var v$5093 = v$5091;
if (v$5092[0] == v$5093[0]) {var t$5451 = v$5092[1];
var t$5452 = v$5093[1];
var v$5090 = t$5451;
var v$5091 = t$5452;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$5088 = fix$5450.$eq_list;
return eq_list$5088(v$5080,v$5081);
 break; }default: {return false;
} };
 break; }case 1: {switch (v$5079[0]) { case 1: {var v$5083 = v$5078[1];
var v$5084 = v$5079[1];
var fix$5447 = {};
fix$5447.$eq_list = function(v$5100,v$5101){lab$eq_list: while (true) {if (v$5100 == null) {return (v$5101 == null)?true:false;
} else {if (v$5101 == null) {return false;
} else {var v$5102 = v$5100;
var v$5103 = v$5101;
if (v$5102[0] == v$5103[0]) {var t$5448 = v$5102[1];
var t$5449 = v$5103[1];
var v$5100 = t$5448;
var v$5101 = t$5449;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$5098 = fix$5447.$eq_list;
return eq_list$5098(v$5083,v$5084);
 break; }default: {return false;
} };
 break; } };
};
tools$Flags$$6.add_bool_entry$4699 = function(e$4702){return tools$Flags$$5.bool_entry$2455(e$4702);
};
tools$Flags$$6.add_string_entry$4712 = function(e$4715){return tools$Flags$$5.string_entry$2528(e$4715);
};
tools$Flags$$6.add_stringlist_entry$4725 = function(e$4728){return tools$Flags$$5.stringlist_entry$2569(e$4728);
};
tools$Flags$$6.add_int_entry$4738 = function(e$4741){return tools$Flags$$5.int_entry$2610(e$4741);
};
tools$Flags$$6.add_bool_entry0$4751 = function(v$4762,v$4763){var e$5106 = ["",v$4763,v$4762,null,false,[1]];
return tools$Flags$$5.bool_entry$2455(e$5106);
};
tools$Flags$$6.add_string_entry0$4764 = function(v$4774,v$4775){var e$5107 = ["",v$4775,v$4774,null,[1]];
return tools$Flags$$5.string_entry$2528(e$5107);
};
tools$Flags$$6.add_bool_action_entry$4776 = function(e$4779){return tools$Flags$$5.bool_action_entry$2496(e$4779);
};
var v$5343 = [0,"Pole"];
var e$5115 = ["Print Lambda Expression after optimisation.",tools$Flags$$1.print_opt_lambda_expression$82,"print_opt_lambda_expression",["Printing of intermediate forms",["print optimised lambda expression",null]],false,v$5343];
tools$Flags$$5.bool_entry$2455(e$5115);
0;
var l$5118 = [["print_types",[0,"Ptypes"],"print types",tools$Flags$$1.print_types$80,"Print types when printing intermediate forms. For Lambda\nExpressions, ordinary ML types are printed, whereas for\nRegion Expressions, region types are printed."],null];
var fix$5453 = {};
fix$5453.$app = function(v$5120){lab$app: while (true) {if (v$5120 == null) {return 0;
} else {var v$5121 = v$5120;
var v$5122 = v$5121[0];
var v$5123 = v$5121[1];
var v$5414 = v$5122[0];
var v$5415 = v$5122[1];
var v$5416 = v$5122[2];
var v$5417 = v$5122[3];
var v$5418 = v$5122[4];
var e$5419 = [v$5418,v$5417,v$5414,["Layout",[v$5416,null]],false,v$5415];
tools$Flags$$5.bool_entry$2455(e$5419);
0;
var t$5454 = v$5123;
var v$5120 = t$5454;
continue lab$app;
};
};
};
var app$5119 = fix$5453.$app;
app$5119(l$5118);
var v$5348 = [1];
var e$5139 = ["Use ragged right margin in pretty-printing of\nexpressions and types.",tools$Flags$$1.raggedRight$75,"raggedRight",["Layout",["ragged right margin in pretty-printing",null]],true,v$5348];
tools$Flags$$5.bool_entry$2455(e$5139);
0;
var e$5140 = ["Column width used when pretty printing intermediate code.",tools$Flags$$1.colwidth$91,"width",["Layout",["text width in pretty-printing",null]],[0,"w"]];
tools$Flags$$5.int_entry$2610(e$5140);
tools$Flags$$6.recompile_basislib$4855 = [false];
var e$5141 = ["Recompile basis library from scratch. This option\nis useful together with other options that control\ncode generation.",tools$Flags$$6.recompile_basislib$4855,"recompile_basislib",["Control",["recompile basis library",null]],false,[0,"scratch"]];
tools$Flags$$5.bool_entry$2455(e$5141);
tools$Flags$$6.preserve_tail_calls$4862 = [false];
var e$5142 = ["Avoid the wrapping of letregion constructs around\ntail calls. Turning on garbage collection\nautomatically turns on this option.",tools$Flags$$6.preserve_tail_calls$4862,"preserve_tail_calls",["Control",["preserve tail calls",null]],true,[0,"ptc"]];
tools$Flags$$5.bool_entry$2455(e$5142);
tools$Flags$$6.dangling_pointers$4869 = [true];
var e$5143 = ["When this option is disabled, dangling pointers\nare avoided by forcing values captured in\nclosures to live at-least as long as the closure\nitself. So as to make garbage collection sound,\nthis option is disabled by default when garbage\ncollection is enabled.",tools$Flags$$6.dangling_pointers$4869,"dangling_pointers",["Control",["dangling pointers",null]],true,[0,"dangle"]];
tools$Flags$$5.bool_entry$2455(e$5143);
tools$Flags$$6.tag_values$4876 = [false];
var e$5144 = ["Enable tagging of values as used when garbage\ncollection is enabled for implementing pointer\ntraversal.",tools$Flags$$6.tag_values$4876,"tag_values",["Control",["tag values",null]],false,[0,"tag"]];
tools$Flags$$5.bool_entry$2455(e$5144);
var e$5145;
var v$4884 = [1];
e$5145 = ["Use a tagged representation of pairs for garbage\ncollection. Garbage collection works fine with a\ntag-free representation of pairs, so this option\nis here for measurement purposes.",[false],"tag_pairs",["Control",["tag pairs",null]],false,v$4884];
tools$Flags$$5.bool_entry$2455(e$5145);
var gc$4889 = [false];
var gengc$4890 = [false];
var e$5166 = ["Enable garbage collection. When enabled, regions are\ngarbage collected during execution of the program. When\ngarbage collection is enabled, all values are tagged. Due\nto region inference, for most programs, the garbage\ncollector is invoked less often than for systems based\nonly on garbage collection. When garbage collection is\nenabled, introduction of dangling pointers are avoided by\nforcing values captured in closures to live at-least as\nlong as the closure. Moreover, enabling garbage\ncollection implicitly enables the preservation of tail\ncalls (see the option ``preserve_tail_calls''.)",gc$4889,"garbage_collection",["Control",["garbage collection",null]],function(v$5177){(gc$4889[0] = false,0);
(tools$Flags$$6.preserve_tail_calls$4862[0] = false,0);
(tools$Flags$$6.dangling_pointers$4869[0] = true,0);
return (tools$Flags$$6.tag_values$4876[0] = false,0);
},function(v$5182){(gc$4889[0] = true,0);
(tools$Flags$$6.preserve_tail_calls$4862[0] = true,0);
(tools$Flags$$6.dangling_pointers$4869[0] = false,0);
return (tools$Flags$$6.tag_values$4876[0] = true,0);
},[0,"gc"]];
tools$Flags$$5.bool_action_entry$2496(e$5166);
var e$5187 = ["Enable generational garbage collection. Same as option\ngarbage collection except that two generations are used\nfor each region.",gengc$4890,"generational_garbage_collection",["Control",["generational garbage collection",null]],function(v$5200){(gc$4889[0] = false,0);
(tools$Flags$$6.preserve_tail_calls$4862[0] = false,0);
(tools$Flags$$6.dangling_pointers$4869[0] = true,0);
(tools$Flags$$6.tag_values$4876[0] = false,0);
return (gengc$4890[0] = false,0);
},function(v$5206){(gc$4889[0] = true,0);
(tools$Flags$$6.preserve_tail_calls$4862[0] = true,0);
(tools$Flags$$6.dangling_pointers$4869[0] = false,0);
(tools$Flags$$6.tag_values$4876[0] = true,0);
return (gengc$4890[0] = true,0);
},[0,"gengc"]];
tools$Flags$$5.bool_action_entry$2496(e$5187);
var l$5214 = [["report_file_sig",[0,"sig"],"report signatures",[false],"Report signatures for each file read."],[["quotation",[0,"quot"],"quotation support",[false],"Enable support for quotations and anti-quotations.\nWhen enabled, the datatype\n   datatype 'a frag = QUOTE of string\n                    | ANTIQUOTE 'a\nis available in the initial environment. Moreover,\nvalues of this datatype may be constructed using\nthe quotation/antiquotation syntax:\n   val s = \"world\" \n   val a : string frag list = `hello ^s - goodbye`"],null]];
var fix$5455 = {};
fix$5455.$app = function(v$5216){lab$app: while (true) {if (v$5216 == null) {return 0;
} else {var v$5217 = v$5216;
var v$5218 = v$5217[0];
var v$5219 = v$5217[1];
var v$5421 = v$5218[0];
var v$5422 = v$5218[1];
var v$5423 = v$5218[2];
var v$5424 = v$5218[3];
var v$5425 = v$5218[4];
var e$5426 = [v$5425,v$5424,v$5421,["Control",[v$5423,null]],false,v$5422];
tools$Flags$$5.bool_entry$2455(e$5426);
0;
var t$5456 = v$5219;
var v$5216 = t$5456;
continue lab$app;
};
};
};
var app$5215 = fix$5455.$app;
app$5215(l$5214);
var v$5389 = [0,"basislib"];
var e$5235 = ["Import Basis Library automatically in your projects. If \nyou wish to make use of the Standard ML Basis Library\nin your projects, this option should be turned on, unless\nyou wish to import the Basis Library manually in your\nprojects.",tools$Flags$$1.import_basislib$98,"import_basislib",["Control",["import Basis Library",null]],true,v$5389];
tools$Flags$$5.bool_entry$2455(e$5235);
0;
var v$5394 = [0,"ri"];
var e$5243 = ["With this flag disabled, all values are allocated in\nglobal regions.",tools$Flags$$1.region_inference$81,"region_inference",["Control",["region_inference",null]],true,v$5394];
tools$Flags$$5.bool_entry$2455(e$5243);
0;
var v$5399 = [0,"rep"];
var v$5401 = [true];
var e$5251 = ["Use in-memory repository to avoid unnecessary\nrecompilation. This flag should be disabled when\ncompiling mlb-files, which make use of the file system\nas a repository.",v$5401,"repository",["Control",["repository",null]],true,v$5399];
tools$Flags$$5.bool_entry$2455(e$5251);
0;
var e$5252 = ["Log to files instead of stdout.",tools$Flags$$1.log_to_file$89,"log_to_file",["File",["Log to file",null]],false,[1]];
tools$Flags$$5.bool_entry$2455(e$5252);
var e$5253 = ["Installation directory for the MLKit standard library. For normal\nexecution you should not modify this value. However,\nif you wish to use the MLKit with an altered runtime\nsystem you can update this\nsetting and the system will try to link to a runtime\nsystem found in the new install\ndirectory.",tools$Flags$$1.install_dir$74,"SML_LIB",["File",["installation directory",null]],[1]];
tools$Flags$$5.string_entry$2528(e$5253);
var l$5256 = [["region_profiling",[0,"prof"],"region profiling",tools$Flags$$1.region_profiling$84,"Enable region profiling. Object code stemming\nfrom compiling a program with region profiling enabled\nis instrumented with profiling information. When a program\ncompiled with region profiling enabled is run, the program\nproduces a profile file run.rp, which can then be read\nby the profiling tool rp2ps that comes with the MLKit to\nproduce profiling graphs of various forms."],[["print_region_flow_graph",[0,"Prfg"],"print region flow graph",tools$Flags$$1.print_region_flow_graph$85,"Print a region flow graph for the program fragment\nand generate a .vcg-file, which can be viewed using\nthe xvcg program."],[["print_all_program_points",[0,"Ppp"],"print all program points",tools$Flags$$1.print_all_program_points$86,"Print all program points when printing physical size\ninference expressions."],null]]];
var fix$5457 = {};
fix$5457.$app = function(v$5258){lab$app: while (true) {if (v$5258 == null) {return 0;
} else {var v$5259 = v$5258;
var v$5260 = v$5259[0];
var v$5261 = v$5259[1];
var v$5428 = v$5260[0];
var v$5429 = v$5260[1];
var v$5430 = v$5260[2];
var v$5431 = v$5260[3];
var v$5432 = v$5260[4];
var e$5433 = [v$5432,v$5431,v$5428,["Profiling",[v$5430,null]],false,v$5429];
tools$Flags$$5.bool_entry$2455(e$5433);
0;
var t$5458 = v$5261;
var v$5258 = t$5458;
continue lab$app;
};
};
};
var app$5257 = fix$5457.$app;
app$5257(l$5256);
var f$5271;
var p$5278 = ["Debug",["Lambda",null]];
f$5271 = (function(v$5280){var v$5281 = v$5280[0];
var v$5282 = v$5280[1];
var v$5283 = v$5280[2];
var v$5284 = v$5280[3];
var v$5285 = v$5280[4];
var e$5286 = [v$5285,v$5284,v$5281,basis$List$.s$n$645([p$5278,[v$5283,null]]),true,v$5282];
tools$Flags$$5.bool_entry$2455(e$5286);
return 0;
});
var l$5272 = [["type_check_lambda",[1],"type check lambda expressions",tools$Flags$$1.type_check_lambda$78,"Type check lambda expression prior to performing region\ninference. Type checking is very fast and for normal use\nyou should not disable this option. Type checking\nintermediate forms is very powerful for eliminating bugs\nin the compiler."],null];
var fix$5459 = {};
fix$5459.$app = function(v$5274){lab$app: while (true) {if (v$5274 == null) {return 0;
} else {var v$5275 = v$5274;
var v$5276 = v$5275[0];
var v$5277 = v$5275[1];
f$5271(v$5276);
var t$5460 = v$5277;
var v$5274 = t$5460;
continue lab$app;
};
};
};
var app$5273 = fix$5459.$app;
app$5273(l$5272);
var f$5287;
var p$5294 = ["Debug",["Manager",null]];
f$5287 = (function(v$5296){var v$5297 = v$5296[0];
var v$5298 = v$5296[1];
var v$5299 = v$5296[2];
var v$5300 = v$5296[3];
var v$5301 = v$5296[4];
var e$5302 = [v$5301,v$5300,v$5297,basis$List$.s$n$645([p$5294,[v$5299,null]]),false,v$5298];
tools$Flags$$5.bool_entry$2455(e$5302);
return 0;
});
var l$5288 = [["debug_linking",[1],"debug_linking",[false],"Debug linking of target code by showing which object\nfiles are linked together."],[["debug_man_enrich",[1],"debug compilation manager enrichment",[false],"Show information about why a program unit need be\nrecompiled. A program unit (or a functor body)\nis recompiled if either (a) the program unit is\nmodified, or (b) information about an identifier\nfor which the program unit depends upon has changed."],null]];
var fix$5461 = {};
fix$5461.$app = function(v$5290){lab$app: while (true) {if (v$5290 == null) {return 0;
} else {var v$5291 = v$5290;
var v$5292 = v$5291[0];
var v$5293 = v$5291[1];
f$5287(v$5292);
var t$5462 = v$5293;
var v$5290 = t$5462;
continue lab$app;
};
};
};
var app$5289 = fix$5461.$app;
app$5289(l$5288);
var f$5303;
var p$5310 = ["Debug",null];
f$5303 = (function(v$5312){var v$5313 = v$5312[0];
var v$5314 = v$5312[1];
var v$5315 = v$5312[2];
var v$5316 = v$5312[3];
var v$5317 = v$5312[4];
var e$5318 = [v$5317,v$5316,v$5313,basis$List$.s$n$645([p$5310,[v$5315,null]]),false,v$5314];
tools$Flags$$5.bool_entry$2455(e$5318);
return 0;
});
var l$5304 = [["chat",[0,"verbose"],"chat",tools$Flags$$1.chat$77,"Print a message for each compilation step in the compiler."],[["debug_compiler",[0,"debug"],"debug compiler",tools$Flags$$1.DEBUG_COMPILER$76,"Print intermediate forms of a program during compilation."],null]];
var fix$5463 = {};
fix$5463.$app = function(v$5306){lab$app: while (true) {if (v$5306 == null) {return 0;
} else {var v$5307 = v$5306;
var v$5308 = v$5307[0];
var v$5309 = v$5307[1];
f$5303(v$5308);
var t$5464 = v$5309;
var v$5306 = t$5464;
continue lab$app;
};
};
};
var app$5305 = fix$5463.$app;
app$5305(l$5304);
var e$5322 = ["",tools$Flags$$1.c_compiler$90,"c_compiler",null,[1]];
tools$Flags$$5.string_entry$2528(e$5322);
var e$5326 = ["",tools$Flags$$1.enhanced_atbot_analysis$83,"enhanced_atbot_analysis",null,false,[1]];
tools$Flags$$5.bool_entry$2455(e$5326);
var e$5330 = ["",tools$Flags$$1.eliminate_polymorphic_equality$79,"eliminate_polymorphic_equality",null,false,[1]];
tools$Flags$$5.bool_entry$2455(e$5330);
var e$5331;
var v$5020 = [0,"c"];
var v$5021 = ["Control",["compile only",null]];
e$5331 = ["Compile only. Suppresses generation of executable",[false],"compile_only",v$5021,false,v$5020];
tools$Flags$$5.bool_entry$2455(e$5331);
tools$Flags$$6.is_on$5025 = function(v$5435){return tools$Flags$$5.is_on$2755(v$5435);
};
tools$Flags$$6.is_on0$5026 = function(v$5436){return tools$Flags$$5.is_on0$2729(v$5436);
};
tools$Flags$$6.turn_on$5027 = function(v$5437){return tools$Flags$$5.turn_on$2759(v$5437);
};
tools$Flags$$6.turn_off$5028 = function(v$5438){return tools$Flags$$5.turn_off$2787(v$5438);
};
tools$Flags$$6.lookup_flag_entry$5029 = function(v$5439){return tools$Flags$$5.lookup_flag_entry$2651(v$5439);
};
tools$Flags$$6.get_string_entry$5030 = function(v$5440){return tools$Flags$$5.get_string_entry$2727(v$5440);
};
tools$Flags$$6.get_stringlist_entry$5031 = function(v$5441){return tools$Flags$$5.get_stringlist_entry$2728(v$5441);
};
tools$Flags$$6.lookup_string_entry$5032 = function(v$5442){return tools$Flags$$5.lookup_string_entry$2670(v$5442);
};
tools$Flags$$6.lookup_stringlist_entry$5033 = function(v$5443){return tools$Flags$$5.lookup_stringlist_entry$2689(v$5443);
};
tools$Flags$$6.lookup_int_entry$5034 = function(v$5444){return tools$Flags$$5.lookup_int_entry$2708(v$5444);
};
tools$Flags$$6.read_options$5035 = function(v$5434){return tools$Flags$$5.read_options$2994(v$5434[0],v$5434[1],v$5434[2]);
};
tools$Flags$$6.help$5036 = function(v$5445){return tools$Flags$$5.help$3565(v$5445);
};
tools$Flags$$6.help_all$5037 = function(v$5446){return tools$Flags$$5.help_all$3694(v$5446);
};
tools$Flags$$6.getOptions$5038 = tools$Flags$$5.getOptions$3697;
tools$Flags$$6.SMLserver$5039 = [false];
tools$Flags$$6.compiler_mode$5042 = [[0,null]];
tools$Flags$$6.no_dangling_pointers_changes$5043 = [0];
tools$Flags$$6.no_dangling_pointers_changes_total$5044 = [0];
tools$Flags$$6.reset$5045 = function(v$5047){(tools$Flags$$6.no_dangling_pointers_changes$5043[0] = 0,0);
return (tools$Flags$$6.no_dangling_pointers_changes_total$5044[0] = 0,0);
};
return 0;
})();