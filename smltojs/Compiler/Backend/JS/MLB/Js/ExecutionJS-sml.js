if ((typeof(smltojs0$ExecutionJS$)) == "undefined") {smltojs0$ExecutionJS$ = {};
};
(function(){smltojs0$ExecutionJS$.backend_name$53 = "SmlToJs";
smltojs0$ExecutionJS$.pr_lab$55 = function(s$58){return s$58;
};
smltojs0$ExecutionJS$.code_label_of_linkinfo$60 = function(v$313,v$314,v$315){return "__DUMMYDUMMY";
};
smltojs0$ExecutionJS$.imports_of_linkinfo$63 = function(v$316,v$317,v$318){return [v$317,null];
};
smltojs0$ExecutionJS$.exports_of_linkinfo$71 = function(v$319,v$320,v$321){return [v$319,null];
};
smltojs0$ExecutionJS$.unsafe_linkinfo$79 = function(v$322,v$323,v$324){return v$324;
};
smltojs0$ExecutionJS$.preHook$87 = function(v$256){return 0;
};
smltojs0$ExecutionJS$.postHook$88 = function(v$325){return 0;
};
smltojs0$ExecutionJS$.compile$91 = function(fe$94,v$100){var v$136 = v$100[0];
var v$137 = v$100[1];
var v$138 = v$100[2];
var v$135 = v$137[0];
var v$111 = smltojs0$CompileJS$.compile$71(fe$94,[v$136,v$135,v$138]);
switch (v$111[0]) { case 1: {var v$113 = v$111[1];
return [1,v$113];
 break; }default: {var v$129 = v$111[1];
var v$130 = v$129[0];
var v$131 = v$129[1];
var v$132 = v$129[2];
var v$133 = v$129[3];
var v$122 = v$132[1];
return [0,[v$130,[v$131,0],v$132,[v$122[0],v$122[1],v$133?false:true]]];
} };
};
smltojs0$ExecutionJS$.generate_link_code$140 = function(v$326){return [1];
};
smltojs0$ExecutionJS$.emit$141 = function(a$144){return smltojs0$CompileJS$.emit$112(a$144[0],a$144[1]);
};
smltojs0$ExecutionJS$.be_rigid$145 = true;
var get_jslibs$147;
var t$328 = tools$Flags$$6.add_stringlist_entry$4725;
var t$327;
var v$149 = [0,"jslibs"];
var v$150 = ["Control",["JavaScript library paths",null]];
t$327 = ["Use this option to add javascript library paths\nto the generated html and thereby allow for SML\ncode to reference existing JavaScript libraries.",[null],"javascript_library_paths",v$150,v$149];
get_jslibs$147 = (t$328(t$327));
var js_path_compress$153;
var t$330 = tools$Flags$$6.add_bool_entry$4699;
var t$329;
var v$155 = [1];
var v$156 = ["File",["js path compress",null]];
t$329 = ["Compress (make canonical) Javascript file path\nreferences in the resulting run.html file.",[false],"js_path_compress",v$156,false,v$155];
js_path_compress$153 = (t$330(t$329));
var js_path_prefix$160;
var t$332 = tools$Flags$$6.add_string_entry$4712;
var t$331;
var v$162 = [1];
var v$163 = ["File",["js path prefix",null]];
t$331 = ["Prefix to add to each Javascript file path in the\nresulting run.html file.",[""],"js_path_prefix",v$163,v$162];
js_path_prefix$160 = (t$332(t$331));
smltojs0$ExecutionJS$.link_files_with_runtime_system$166 = function(files$169,run$172){var html_file$173 = run$172 + ".html";
var os$174 = basis$TextIO$.openOut$99(html_file$173);
var jslibs$189 = get_jslibs$147(0);
var files$190 = basis$List$.s$n$645([jslibs$189,files$169]);
try {basis$TextIO$.output$101(os$174,"<!-- JavaScript generated by SmlToJs - Standard ML to JavaScript Compiler -->\n");
basis$TextIO$.output$101(os$174,"<!-- See http://www.itu.dk/people/mael/smltojs -->\n");
var f$269 = basis$Path$.concat$209(tools$Flags$$1.install_dir$74[0],"prims.js");
var f$270 = basis$Path$.concat$209(js_path_prefix$160(0),f$269);
var f$271 = (js_path_compress$153(0))?(basis$Path$.mkCanonical$309(f$270)):f$270;
var s$272 = ("<script type=\"text/javascript\" src=\"" + f$271) + "\"></script>\n";
basis$TextIO$.output$101(os$174,s$272);
var fix$334 = {};
fix$334.$app = function(v$279){lab$app: while (true) {if (v$279 == null) {return 0;
} else {var v$280 = v$279;
var v$281 = v$280[0];
var v$282 = v$280[1];
var f$310 = basis$Path$.concat$209(js_path_prefix$160(0),v$281);
var f$311 = (js_path_compress$153(0))?(basis$Path$.mkCanonical$309(f$310)):f$310;
var s$312 = ("<script type=\"text/javascript\" src=\"" + f$311) + "\"></script>\n";
basis$TextIO$.output$101(os$174,s$312);
var t$335 = v$282;
var v$279 = t$335;
continue lab$app;
};
};
};
var app$278 = fix$334.$app;
app$278(files$190);
basis$TextIO$.closeOut$120(os$174);
return basis$General$.print$156(("[Created file " + html_file$173) + "]\n");
} catch(v$333) {return (function(X$203){basis$TextIO$.closeOut$120(os$174);
throw X$203;
})(v$333);
};
};
smltojs0$ExecutionJS$.mlbdir$206 = function(v$208){return basis$Path$.concat$209("MLB","Js");
};
smltojs0$ExecutionJS$.pu_linkinfo$209;
var pu_sList$210 = pickle$pickle$.listGen$2100(pickle$pickle$.string$900);
smltojs0$ExecutionJS$.pu_linkinfo$209 = (pickle$pickle$.convert$2333([function(v$215){return [v$215[1],v$215[0],v$215[2]];
},function(v$226){return [v$226[1],v$226[0],v$226[2]];
}],pickle$pickle$.tup3Gen$2403(pu_sList$210,pu_sList$210,pickle$pickle$.bool$723)));
return 0;
})();
