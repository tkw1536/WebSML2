if ((typeof(compiler0$CompBasisToLamb$)) == "undefined") {compiler0$CompBasisToLamb$ = {};
};
(function(){var debug_man_enrich$60 = tools$Flags$$6.lookup_flag_entry$5029("debug_man_enrich");
var quotation$61 = tools$Flags$$6.is_on0$5026("quotation");
compiler0$CompBasisToLamb$.mk_CompBasis$62 = function(a$65){return a$65;
};
compiler0$CompBasisToLamb$.de_CompBasis$66 = function(a$69){return a$69;
};
compiler0$CompBasisToLamb$.empty$70 = [compiler0$EliminateEq$$4.empty$2638,compiler_objects$LambdaBasics$.empty$2784,compiler0$OptLambda$$14.empty$16657(0),compiler0$LambdaStatSem$.empty$200];
compiler0$CompBasisToLamb$.initial$75 = [compiler0$EliminateEq$$4.initial$2639,compiler_objects$LambdaBasics$.initial$2785,compiler0$OptLambda$$14.initial$16658(0),compiler0$LambdaStatSem$.initial$246];
compiler0$CompBasisToLamb$.plus$80 = function(v$95,v$648){var v$96 = v$95[3];
var v$97 = v$95[0];
var v$98 = v$95[2];
var v$99 = v$95[1];
var v$101 = v$648[3];
var v$102 = v$648[0];
var v$103 = v$648[2];
var v$104 = v$648[1];
var v$91 = compiler0$LambdaStatSem$.plus$252(v$96,v$101);
var v$92 = compiler0$EliminateEq$$4.plus$2640(v$97,v$102);
var v$93 = compiler0$OptLambda$$14.plus$16659(v$98,v$103);
return [v$92,compiler_objects$LambdaBasics$.plus$2786([v$99,v$104]),v$93,v$91];
};
compiler0$CompBasisToLamb$.layout_CompBasis$105 = function(v$118,v$120,v$119,v$117){var t$659;
var v$115 = [0,"; "];
t$659 = [[compiler0$EliminateEq$$4.layout_env$2672(v$118[0],v$118[1],v$118[2]),[compiler0$OptLambda$$14.layout_env$16797(v$119[0],v$119[1],v$119[2],v$119[3],v$119[4],v$119[5]),[compiler0$LambdaStatSem$.layout_env$580(v$117[0],v$117[1],v$117[2],v$117[3],v$117[4]),[compiler_objects$LambdaBasics$.layout$2817(v$120),null]]]],v$115,"}",1,"{"];
return [0,t$659];
};
compiler0$CompBasisToLamb$.enrich$154 = function(v$177,v$649){var v$179 = v$177[0];
var v$180 = v$177[2];
var v$181 = v$177[1];
var v$184 = v$649[0];
var v$185 = v$649[2];
var v$186 = v$649[1];
var t$662;
var v$641 = compiler0$EliminateEq$$4.enrich$2649(v$179,v$184);
if (debug_man_enrich$60[0]) {v$641?(basis$TextIO$.output$101([0],"\nEqEnv: enrich succeeded.")):(basis$TextIO$.output$101([0],"\nEqEnv: enrich failed."));
t$662 = v$641;
} else {t$662 = v$641;
};
if (t$662) {var t$661;
if (debug_man_enrich$60[0]) {basis$TextIO$.output$101([0],"\nTCEnv: enrich succeeded.");
t$661 = true;
} else {t$661 = true;
};
if (t$661) {var t$660;
var v$645 = compiler0$OptLambda$$14.enrich$16748(v$180,v$185);
if (debug_man_enrich$60[0]) {v$645?(basis$TextIO$.output$101([0],"\nOEnv: enrich succeeded.")):(basis$TextIO$.output$101([0],"\nOEnv: enrich failed."));
t$660 = v$645;
} else {t$660 = v$645;
};
if (t$660) {var v$647 = compiler_objects$LambdaBasics$.enrich$2794(v$181,v$186);
if (debug_man_enrich$60[0]) {v$647?(basis$TextIO$.output$101([0],"\nNEnv: enrich succeeded.")):(basis$TextIO$.output$101([0],"\nNEnv: enrich failed."));
return v$647;
} else {return v$647;
};
} else {return false;
};
} else {return false;
};
} else {return false;
};
};
compiler0$CompBasisToLamb$.match$187 = function(v$203,v$650){var v$204 = v$203[3];
var v$205 = v$203[0];
var v$206 = v$203[2];
var v$207 = v$203[1];
var v$210 = v$650[0];
return [compiler0$EliminateEq$$4.match$2650(v$205,v$210),v$207,v$206,v$204];
};
compiler0$CompBasisToLamb$.restrict$213 = function(v$284,v$651){var v$285 = v$284[0];
var v$286 = v$284[2];
var v$287 = v$284[3];
var v$288 = v$284[1];
var v$290 = v$651[0];
var v$291 = v$651[1];
var v$292 = v$651[2];
var v$293 = v$651[3];
var excons$224 = [compiler_objects$Excon$$1.ex_DIV$108,[compiler_objects$Excon$$1.ex_MATCH$109,[compiler_objects$Excon$$1.ex_BIND$110,v$293]]];
var cons$225 = [compiler_objects$Con$$1.con_NIL$120,[compiler_objects$Con$$1.con_CONS$121,[compiler_objects$Con$$1.con_TRUE$118,[compiler_objects$Con$$1.con_FALSE$119,[compiler_objects$Con$$1.con_INTINF$124,v$292]]]]];
var cons$226 = (quotation$61(0))?[compiler_objects$Con$$1.con_QUOTE$122,[compiler_objects$Con$$1.con_ANTIQUOTE$123,cons$225]]:cons$225;
var tynames$231 = [special_objects$TyName$$1.tyName_LIST$242,[special_objects$TyName$$1.tyName_INTINF$214,[special_objects$TyName$$1.tyName_BOOL$202,[special_objects$TyName$$1.tyName_VECTOR$258,[special_objects$TyName$$1.tyName_CHARARRAY$262,v$291]]]]];
var tynames$232 = (quotation$61(0))?[special_objects$TyName$$1.tyName_FRAG$246,tynames$231]:tynames$231;
var NEnv1$237;
try {NEnv1$237 = (compiler_objects$LambdaBasics$.restrict$2787(v$288,v$290));
} catch(v$663) {NEnv1$237 = ((function(x$240){basis$TextIO$.output$101([0],"CompBasisToLamb.restrict: Normalize.restrict failed\n");
basis$TextIO$.output$101([0],"Normalize environment is:\n");
tools$PrettyPrint$.outputTree$1071([function(s$461){return basis$TextIO$.output$101([0],s$461);
},compiler_objects$LambdaBasics$.layout$2817(v$288),100]);
basis$TextIO$.output$101([0],"(end of normalize environment)\n");
throw x$240;
})(v$663));
};
var v$270;
try {v$270 = (compiler0$EliminateEq$$4.restrict$2651(v$285,[v$290,tynames$232]));
} catch(v$664) {v$270 = ((function(x$275){basis$TextIO$.output$101([0],"CompBasisToLamb.restrict: ElimiateEq.restrict failed\n");
basis$TextIO$.output$101([0],"Equality environment is:\n");
tools$PrettyPrint$.outputTree$1071([function(s$469){return basis$TextIO$.output$101([0],s$469);
},compiler0$EliminateEq$$4.layout_env$2672(v$285[0],v$285[1],v$285[2]),100]);
basis$TextIO$.output$101([0],"(end of equality environment)\n");
throw x$275;
})(v$664));
};
var v$271 = v$270[0];
var v$272 = v$270[1];
var lvars$252 = basis$List$.s$n$645([v$271,v$290]);
var v$266 = compiler0$OptLambda$$14.restrict$16688(v$286,lvars$252,cons$226,tynames$232);
var v$267 = v$266[0];
var v$268 = v$266[1];
var v$269 = v$266[2];
return [[v$272,NEnv1$237,v$267,compiler0$LambdaStatSem$.restrict$596(v$287,[v$268,excons$224,lvars$252,v$269])],lvars$252,v$269,v$268,excons$224];
};
var subtractPredefinedCons$294 = function(cons$297){return edlib$Set$.list$109(edlib$Set$.difference$362(function(a$489){return function(b$490){var v$494 = a$489[0];
var v$495 = b$490[0];
var v$496 = v$494[0][1];
var v$497 = v$495[0][1];
return (v$496[0] == v$497[0])?(v$496[1] == v$497[1]):false;
};
},edlib$Set$.fromList$117(function(a$499){return function(b$500){var v$504 = a$499[0];
var v$505 = b$500[0];
var v$506 = v$504[0][1];
var v$507 = v$505[0][1];
return (v$506[0] == v$507[0])?(v$506[1] == v$507[1]):false;
};
},cons$297),edlib$Set$.fromList$117(function(a$509){return function(b$510){var v$514 = a$509[0];
var v$515 = b$510[0];
var v$516 = v$514[0][1];
var v$517 = v$515[0][1];
return (v$516[0] == v$517[0])?(v$516[1] == v$517[1]):false;
};
},compiler_objects$Con$$1.consPredefined$125)));
};
compiler0$CompBasisToLamb$.restrict0$328 = function(v$369,v$652){var v$370 = v$369[0];
var v$371 = v$369[2];
var v$372 = v$369[3];
var v$373 = v$369[1];
var v$375 = v$652[0];
var v$376 = v$652[1];
var v$377 = v$652[2];
var v$378 = v$652[3];
var tynames$339 = special_objects$TyName$$3.list$2937(special_objects$TyName$$3.difference$2679(special_objects$TyName$$3.fromList$2946(v$376),special_objects$TyName$$3.fromList$2946(special_objects$TyName$$1.tynamesPredefined$274)));
var cons$340 = subtractPredefinedCons$294(v$377);
var excons$341 = edlib$Set$.list$109(edlib$Set$.difference$362(function(a$565){return function(b$566){var v$570 = a$565[0];
var v$571 = b$566[0];
var v$572 = v$570[0][1];
var v$573 = v$571[0][1];
return (v$572[0] == v$573[0])?(v$572[1] == v$573[1]):false;
};
},edlib$Set$.fromList$117(function(a$575){return function(b$576){var v$580 = a$575[0];
var v$581 = b$576[0];
var v$582 = v$580[0][1];
var v$583 = v$581[0][1];
return (v$582[0] == v$583[0])?(v$582[1] == v$583[1]):false;
};
},v$378),edlib$Set$.fromList$117(function(a$585){return function(b$586){var v$590 = a$585[0];
var v$591 = b$586[0];
var v$592 = v$590[0][1];
var v$593 = v$591[0][1];
return (v$592[0] == v$593[0])?(v$592[1] == v$593[1]):false;
};
},compiler_objects$Excon$$1.exconsPredefined$113)));
var NEnv1$342 = compiler_objects$LambdaBasics$.restrict$2787(v$373,v$375);
var v$366 = compiler0$EliminateEq$$4.restrict$2651(v$370,[v$375,tynames$339]);
var v$367 = v$366[0];
var v$368 = v$366[1];
var lvars$346 = basis$List$.s$n$645([v$367,v$375]);
var v$362 = compiler0$OptLambda$$14.restrict$16688(v$371,lvars$346,cons$340,tynames$339);
var v$363 = v$362[0];
var v$364 = v$362[1];
var v$365 = v$362[2];
var tynames$351 = special_objects$TyName$$3.list$2937(special_objects$TyName$$3.difference$2679(special_objects$TyName$$3.fromList$2946(v$365),special_objects$TyName$$3.fromList$2946(special_objects$TyName$$1.tynamesPredefined$274)));
var cons$352 = subtractPredefinedCons$294(v$364);
return [[v$368,NEnv1$342,v$363,compiler0$LambdaStatSem$.restrict$596(v$372,[cons$352,excons$341,lvars$346,tynames$351])],lvars$346,tynames$351,cons$352,excons$341];
};
compiler0$CompBasisToLamb$.eq$379 = function(v$388,v$389){if (compiler0$CompBasisToLamb$.enrich$154(v$388,v$389)) {return compiler0$CompBasisToLamb$.enrich$154(v$389,v$388);
} else {return false;
};
};
compiler0$CompBasisToLamb$.pu$390 = pickle$pickle$.convert$2333([function(v$595){var v$596 = v$595[0];
var v$597 = v$595[1];
var v$598 = v$595[2];
return [v$597,v$598[1],v$598[0],v$596];
},function(v$599){return [v$599[3],v$599[0],[v$599[2],v$599[1]]];
}],pickle$pickle$.tup3Gen0$2340(compiler0$LambdaStatSem$.pu$700,compiler0$EliminateEq$$4.pu$4198,pickle$pickle$.pairGen0$974(compiler0$OptLambda$$14.pu$16915,compiler_objects$LambdaBasics$.pu$2829)));
return 0;
})();
