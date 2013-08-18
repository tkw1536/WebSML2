if ((typeof(compiler0$CompileToLamb$)) == "undefined") {compiler0$CompileToLamb$ = {};
};
(function(){var eliminate_polymorphic_equality_p$57 = tools$Flags$$6.is_on0$5026("eliminate_polymorphic_equality");
var type_check_lambda_p$58 = tools$Flags$$6.is_on0$5026("type_check_lambda");
var print_opt_lambda_expression$59 = tools$Flags$$6.is_on0$5026("print_opt_lambda_expression");
var safeLinkTimeElimination$60;
var t$610 = tools$Flags$$6.add_bool_entry$4699;
var t$609;
var v$62 = [1];
var v$63 = ["Control",["safeLinkTimeElimination",null]];
t$609 = ["Treat this module as a library in the sense that\nthe code can be eliminated if it is not used,\neven if the code has side effects.",[false],"safeLinkTimeElimination",v$63,false,v$62];
safeLinkTimeElimination$60 = (t$610(t$609));
var optimise_p$233 = tools$Flags$$6.is_on0$5026("optimiser");
compiler0$CompileToLamb$.compile$269 = function(fe$272,v$277){var v$329 = v$277[0];
var v$330 = v$277[1];
var v$331 = v$277[2];
var v$325 = v$330[3];
var v$326 = v$330[0];
var v$327 = v$330[2];
var v$328 = v$330[1];
var v$318;
if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"[Compiling abstract syntax tree into lambda language..\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
compiler_objects$LambdaExp$$4.reset$1586(0);
var v$457 = compiler0$CompileDec$$16.compileStrdecs$15164(fe$272,v$329,v$331);
var v$458 = v$457[0];
var v$459 = v$457[1];
var declared_lvars$460 = compiler_objects$CompilerEnv$$7.lvarsOfCEnv$5207(v$458);
var declared_excons$461 = compiler_objects$CompilerEnv$$7.exconsOfCEnv$5209(v$458);
if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],".\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
var v$465 = compiler_objects$LambdaBasics$.norm$3215(v$328,v$459);
var v$466 = v$465[0];
var v$467 = v$465[1];
if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],".\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
var lamb$471 = compiler_objects$LambdaBasics$.close$2766(v$466);
if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"]\n\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
if (tools$Flags$$1.DEBUG_COMPILER$76[0]) {var v$571 = compiler_objects$LambdaExp$$4.layoutLambdaPgm$4421(lamb$471);
var stringtree$488 = [0,[[v$571,null],[1],"",3,"Report: UnOpt: "]];
tools$PrettyPrint$.outputTree$1071([function(s$490){return basis$TextIO$.output$101(tools$Flags$$1.log$92[0],s$490);
},stringtree$488,tools$Flags$$1.colwidth$91[0]]);
basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"\n\n");
} else {0;
};
v$318 = [lamb$471,v$458,v$467,declared_lvars$460,declared_excons$461];
var v$319 = v$318[0];
var v$320 = v$318[1];
var v$321 = v$318[2];
var v$315;
if (eliminate_polymorphic_equality_p$57(0)) {if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"[Eliminating polymorphic equality...\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
tools$Timing$.timing_begin$102(0);
var v$497 = tools$Timing$.timing_end_res$261("ElimEq",compiler0$EliminateEq$$4.elim_eq$4153(v$326,v$319));
var v$498 = v$497[0];
var v$499 = v$497[1];
if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"]\n\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
if (tools$Flags$$1.DEBUG_COMPILER$76[0]) {var v$581 = compiler_objects$LambdaExp$$4.layoutLambdaPgm$4421(v$498);
var stringtree$506 = [0,[[v$581,null],[1],"",3,"Lambda Program After Elimination of Pol. Eq.: "]];
tools$PrettyPrint$.outputTree$1071([function(s$508){return basis$TextIO$.output$101(tools$Flags$$1.log$92[0],s$508);
},stringtree$506,tools$Flags$$1.colwidth$91[0]]);
basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"\n\n");
var v$585 = compiler0$EliminateEq$$4.layout_env$2672(v$499[0],v$499[1],v$499[2]);
var stringtree$512 = [0,[[v$585,null],[1],"",3,"Pol. Eq. Environment: "]];
tools$PrettyPrint$.outputTree$1071([function(s$514){return basis$TextIO$.output$101(tools$Flags$$1.log$92[0],s$514);
},stringtree$512,tools$Flags$$1.colwidth$91[0]]);
basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"\n\n");
} else {0;
};
v$315 = [v$498,v$499];
} else {v$315 = [v$319,compiler0$EliminateEq$$4.empty$2638];
};
var v$316 = v$315[0];
var v$317 = v$315[1];
var v$312;
if (optimise_p$233(0)) {if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"[Optimising lambda term...\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
} else {if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"[Rewriting lambda term...\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
};
tools$Timing$.timing_begin$102(0);
var v$524 = tools$Timing$.timing_end_res$261("OptLam",compiler0$OptLambda$$14.optimise$16851(v$327,v$316));
var v$525 = v$524[0];
var v$526 = v$524[1];
if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"]\n\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
if (tools$Flags$$1.DEBUG_COMPILER$76[0]?true:(print_opt_lambda_expression$59(0))) {var v$597 = compiler_objects$LambdaExp$$4.layoutLambdaPgm$4421(v$525);
var stringtree$533 = [0,[[v$597,null],[1],"",3,"Report: Opt: "]];
tools$PrettyPrint$.outputTree$1071([function(s$535){return basis$TextIO$.output$101(tools$Flags$$1.log$92[0],s$535);
},stringtree$533,tools$Flags$$1.colwidth$91[0]]);
basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"\n\n");
} else {0;
};
v$312 = [v$525,v$526];
var v$313 = v$312[0];
var v$314 = v$312[1];
var TCEnv1$295;
if (type_check_lambda_p$58(0)) {if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"[Type checking lambda term...\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
tools$Timing$.timing_begin$102(0);
var env$$542 = tools$Timing$.timing_end_res$261("CheckLam",compiler0$LambdaStatSem$.type_check$2256(v$325,false,v$313));
if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"]\n\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
TCEnv1$295 = env$$542;
} else {TCEnv1$295 = compiler0$LambdaStatSem$.empty$200;
};
var t$611;
var v$547 = v$313[1];
var v$548 = v$547[0];
var v$549 = v$548[1];
if (v$549 == null) {var v$553 = v$547[1];
switch (v$553[0]) { case 14: {var v$554 = v$553[1];
t$611 = ((v$554[0] == null)?((v$554[1] == null)?true:false):false);
 break; }default: {t$611 = false;
} };
} else {var v$550 = v$549;
if (v$550[0] == null) {if (v$550[1] == null) {var v$551 = v$547[1];
switch (v$551[0]) { case 14: {var v$552 = v$551[1];
t$611 = ((v$552[0] == null)?((v$552[1] == null)?true:false):false);
 break; }default: {t$611 = false;
} };
} else {t$611 = false;
};
} else {t$611 = false;
};
};
if (t$611) {if (tools$Flags$$1.chat$77[0]) {basis$TextIO$.output$101(tools$Flags$$1.log$92[0],"Empty lambda program; skipping code generation.\n");
tools$Flags$$1.log$92[0];
0;
} else {0;
};
return [1,v$320];
} else {var safe$302 = compiler_objects$LambdaExp$$4.safeLambdaPgm$2239(v$313);
return [0,[v$320,[v$317,v$321,v$314,TCEnv1$295],v$313,safe$302?true:(safeLinkTimeElimination$60(0))]];
};
};
compiler0$CompileToLamb$.preHook$332 = function(v$334){return 0;
};
compiler0$CompileToLamb$.postHook$335 = function(v$608){return 0;
};
return 0;
})();