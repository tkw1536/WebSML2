if ((typeof(tools$Flags$$1)) == "undefined") {tools$Flags$$1 = {};
};
(function(){tools$Flags$$1.outLine$52 = function(s$55){return basis$General$.print$156(s$55 + "\n");
};
tools$Flags$$1.quote$56 = function(s$59){return ("\"" + (basis$String$.toString$437(s$59))) + "\"";
};
tools$Flags$$1.die$60 = function(s$63){return tools$Crash$.impossible$50("Flags." + s$63);
};
tools$Flags$$1.has_sml_source_ext$64 = function(s$67){switch (s$67) { case "sml": {return true;
 break; }case "sig": {return true;
 break; }default: {return false;
} };
};
tools$Flags$$1.install_dir$74 = ["You_did_not_set_path_to_install_dir"];
tools$Flags$$1.raggedRight$75 = tools$PrettyPrint$.raggedRight$55;
tools$Flags$$1.DEBUG_COMPILER$76 = [false];
tools$Flags$$1.chat$77 = [false];
tools$Flags$$1.type_check_lambda$78 = [true];
tools$Flags$$1.eliminate_polymorphic_equality$79 = [true];
tools$Flags$$1.print_types$80 = [false];
tools$Flags$$1.region_inference$81 = [true];
tools$Flags$$1.print_opt_lambda_expression$82 = [false];
tools$Flags$$1.enhanced_atbot_analysis$83 = [false];
tools$Flags$$1.region_profiling$84 = [false];
tools$Flags$$1.print_region_flow_graph$85 = [false];
tools$Flags$$1.print_all_program_points$86 = [false];
tools$Flags$$1.program_points$87 = [null];
tools$Flags$$1.region_paths$88 = [null];
tools$Flags$$1.log_to_file$89 = [false];
tools$Flags$$1.c_compiler$90 = ["gcc"];
tools$Flags$$1.colwidth$91 = tools$PrettyPrint$.colwidth$56;
tools$Flags$$1.log$92 = [[0]];
tools$Flags$$1.dummy$93 = function(v$95){return basis$General$.print$156("uninitialised function reference in Flags!");
};
tools$Flags$$1.comp_ref$96 = [function(v$216){return basis$General$.print$156("uninitialised function reference in Flags!");
}];
tools$Flags$$1.current_source_file$97 = ["sources.pm"];
tools$Flags$$1.import_basislib$98 = [true];
tools$Flags$$1.timings_stream$99 = [[1]];
var warnings$100 = [null];
tools$Flags$$1.reset_warnings$101 = function(v$103){return (warnings$100[0] = null,0);
};
tools$Flags$$1.warn$104 = function(report$107){return (warnings$100[0] = [report$107,warnings$100[0]],0);
};
tools$Flags$$1.warn_string$108 = function(x$223){return (warnings$100[0] = [tools$Report$.line$51(x$223),warnings$100[0]],0);
};
tools$Flags$$1.report_warnings$109 = function(v$111){var v$116 = warnings$100[0];
if (v$116 == null) {return 0;
} else {if (tools$Flags$$1.log_to_file$89[0]) {var t$282 = basis$General$.print$156;
var t$281;
var t$280;
var t$279;
var t$278;
var t$277 = "\n*** ";
var t$276;
var t$275 = basis$Int32$.toString$449;
var t$274;
var fix$271 = {};
fix$271.$acc = function(v$234,v$235){lab$acc: while (true) {if (v$234 == null) {return v$235;
} else {var v$236 = v$234;
var v$237 = v$236[1];
var t$272 = v$237;
var t$273 = SmlPrims.chk_ovf_i32(v$235 + 1);
var v$234 = t$272;
var v$235 = t$273;
continue lab$acc;
};
};
};
var acc$233 = fix$271.$acc;
t$274 = (acc$233(v$116,0));
t$276 = (t$275(t$274));
t$278 = (t$277 + t$276);
t$279 = (t$278 + " warning");
var t$270;
if (v$116 == null) {t$270 = "s";
} else {var v$131 = v$116;
t$270 = ((v$131[1] == null)?"":"s");
};
t$280 = (t$279 + t$270);
t$281 = (t$280 + " printed on log file\n");
t$282(t$281);
} else {0;
};
var reports$119 = basis$List$.rev$641(v$116);
var report$120 = tools$Report$.s$hh$55(tools$Report$.line$51(" *** Warnings ***"),tools$Report$.flatten$78(reports$119));
return tools$Report$.print$$233(report$120,tools$Flags$$1.log$92[0]);
};
};
tools$Flags$$1.scan_string$134 = function(getc$137,cs$140){var fix$283 = {};
fix$283.$loop = function(v$160,v$161){lab$loop: while (true) {var v$154 = getc$137(v$160);
switch (v$154[0]) { case 0: {var v$156 = v$154[1];
var v$157 = v$156[0];
switch (v$157) { case 34: {var v$158 = v$156[1];
return [0,[SmlPrims.implode(basis$List$.rev$641(v$161)),v$158]];
 break; }default: {var v$159 = v$156[1];
var t$284 = v$159;
var t$285 = [v$157,v$161];
var v$160 = t$284;
var v$161 = t$285;
continue lab$loop;
} };
 break; }default: {return [1];
} };
};
};
var loop$141 = fix$283.$loop;
var v$167 = getc$137(basis$StringCvt$.skipWS$267(getc$137,cs$140));
switch (v$167[0]) { case 0: {var v$169 = v$167[1];
switch (v$169[0]) { case 34: {var v$171 = v$169[1];
return loop$141(v$171,null);
 break; }default: {return [1];
} };
 break; }default: {return [1];
} };
};
tools$Flags$$1.getc$173 = function(v$176){if (v$176 == null) {return [1];
} else {var v$183 = v$176;
return [0,[v$183[0],v$183[1]]];
};
};
return 0;
})();