if ((typeof(smltojs0$SmlToJsComp$$4)) == "undefined") {smltojs0$SmlToJsComp$$4 = {};
};
(function(){smltojs0$SmlToJsComp$$4.die$172 = function(s$175){return tools$Crash$.impossible$50("ManagerObjects." + s$175);
};
smltojs0$SmlToJsComp$$4.chat$176 = function(s$179){if (tools$Flags$$1.chat$77[0]) {return basis$General$.print$156(s$179 + "\n");
} else {return 0;
};
};
smltojs0$SmlToJsComp$$4.layoutIntSigEnv$196 = function(v$199){var v$212 = v$199[1];
return (((tools$FinMap$.layoutMap$552(function(v$2238){return syntax_objects$SigId$.eq_sigid$100(v$2238[0],v$2238[1]);
},["->","]",", ","IntSigEnv = ["]))(function(x$1539){var v$2151 = syntax_objects$SigId$.pr_SigId$51(x$1539);
return [1,v$2151];
}))((special_objects$TyName$$3.layoutSet$3021("}",", ","{"))(function(x$1543){var v$2153 = special_objects$TyName$$1.pr_TyName$289(x$1543[0],x$1543[1],x$1543[2],x$1543[3],x$1543[4],x$1543[5]);
return [1,v$2153];
})))(v$212);
};
var fix$2332 = {};
fix$2332.$layoutIntBasis = function(v$218){var v$230 = v$218[1];
var v$231 = v$230[0];
var v$232 = v$230[1];
var v$233 = v$230[2];
var v$234 = v$230[3];
var t$2415;
var v$228 = [0,", "];
var t$2421;
var t$2420;
var t$2419 = fix$2332.$layoutIntFunEnv(v$231);
var t$2418;
var t$2417;
var t$2416;
var v$2157 = v$232[1];
t$2416 = ((((tools$FinMap$.layoutMap$552(function(v$2245){return syntax_objects$SigId$.eq_sigid$100(v$2245[0],v$2245[1]);
},["->","]",", ","IntSigEnv = ["]))(function(x$2158){var v$2159 = syntax_objects$SigId$.pr_SigId$51(x$2158);
return [1,v$2159];
}))((special_objects$TyName$$3.layoutSet$3021("}",", ","{"))(function(x$2160){var v$2161 = special_objects$TyName$$1.pr_TyName$289(x$2160[0],x$2160[1],x$2160[2],x$2160[3],x$2160[4],x$2160[5]);
return [1,v$2161];
})))(v$2157));
t$2417 = [t$2416,[compiler_objects$CompilerEnv$$7.layoutCEnv$6173(v$233),[smltojs0$CompileBasisJS$.layout_CompileBasis$82(v$234[0],v$234[1]),null]]];
t$2418 = t$2417;
t$2420 = [t$2419,t$2418];
t$2421 = t$2420;
t$2415 = [t$2421,v$228,"]",1,"IntBasis = ["];
return [0,t$2415];
};
fix$2332.$layoutClos = function(v$2241,v$2242,v$2243,v$2244,v$254){var t$2414;
var v$246 = [0,", "];
t$2414 = [[[0,[null,[0,", "],">",2,"BBC=<todo"]],[fix$2332.$layoutIntBasis(v$254),null]],v$246,">",2,"<"];
return [0,t$2414];
};
fix$2332.$layoutIntFunEnv = function(v$257){var v$266 = v$257[1];
return (((tools$FinMap$.layoutMap$552(function(v$2239){return syntax_objects$FunId$.eq_funid$100(v$2239[0],v$2239[1]);
},["->","]",", ","IntFunEnv = ["]))(function(x$1547){var v$2155 = syntax_objects$FunId$.pr_FunId$51(x$1547);
return [1,v$2155];
}))(function(v$2240){return fix$2332.$layoutClos(v$2240[0],v$2240[1],v$2240[2],v$2240[3],v$2240[4]);
}))(v$266);
};
smltojs0$SmlToJsComp$$4.layoutIntBasis$215 = fix$2332.$layoutIntBasis;
smltojs0$SmlToJsComp$$4.layoutClos$214 = fix$2332.$layoutClos;
smltojs0$SmlToJsComp$$4.layoutIntFunEnv$213 = fix$2332.$layoutIntFunEnv;
smltojs0$SmlToJsComp$$4.pu_BodyBuilderClos$267 = pickle$pickle$.convert$2333([function(v$1549){var v$1550 = v$1549[0];
var v$1551 = v$1550[0];
var v$1552 = v$1550[1];
var v$1553 = v$1550[2];
var v$1554 = v$1549[1];
var v$1555 = v$1554[0];
var v$1556 = v$1554[1];
var v$1557 = v$1549[2];
return [v$1556,v$1553,v$1552,v$1557[1],v$1557[2],v$1551,v$1555,v$1557[0]];
},function(v$1558){return [[v$1558[5],v$1558[2],v$1558[1]],[v$1558[6],v$1558[0]],[v$1558[7],v$1558[3],v$1558[4]]];
}],pickle$pickle$.tup3Gen0$2340(pickle$pickle$.tup3Gen0$2340(basics$InfixBasis$.pu$181,basics$ModuleEnvironments$.pu$917,basics$ModuleEnvironments$.pu_absprjid$231),pickle$pickle$.pairGen0$974(basics$OpacityEnv$$4.pu$2374,pickle$pickle$.listGen$2100(special_objects$TyName$$1.pu$366)),pickle$pickle$.tup3Gen0$2340(basics$Environments$.pu$3085,pickle$pickle$.string$900,pickle$pickle$.string$900)));
smltojs0$SmlToJsComp$$4.pu_IntSigEnv$317 = pickle$pickle$.convert$2333([function(v$318){return [0,v$318];
},function(v$321){return v$321[1];
}],tools$FinMap$.pu$593(function(v$2246){return syntax_objects$SigId$.eq_sigid$100(v$2246[0],v$2246[1]);
},[syntax_objects$SigId$.pu$68,special_objects$TyName$$3.pu$3087(special_objects$TyName$$1.pu$366)]));
var v$1446 = pickle$pickle$.data2Gen$1483("IntFunEnv",function(v$1559){return 0;
},[function(v$1560){var v$1561 = v$1560[1];
return pickle$pickle$.con1$2005(function(v$1562){return [0,v$1562];
},function(v$1563){return v$1563[1];
},tools$FinMap$.pu$593(function(v$2247){return syntax_objects$FunId$.eq_funid$100(v$2247[0],v$2247[1]);
},[syntax_objects$FunId$.pu$68,pickle$pickle$.convert$2333([function(v$1564){var v$1565 = v$1564[0];
var v$1566 = v$1565[0];
var v$1567 = v$1565[1];
var v$1568 = v$1564[1];
return [v$1566,v$1567,v$1568[0],v$1568[1],v$1568[2]];
},function(v$1569){return [[v$1569[0],v$1569[1]],[v$1569[2],v$1569[3],v$1569[4]]];
}],pickle$pickle$.pairGen0$974(pickle$pickle$.pairGen0$974(basics$ModuleEnvironments$.pu_absprjid$231,syntax_objects$StrId$.pu$134),pickle$pickle$.tup3Gen0$2340(basics$Environments$.pu$3085,smltojs0$SmlToJsComp$$4.pu_BodyBuilderClos$267,v$1561)))]));
},null],"IntBasis",function(v$1570){return 0;
},[function(v$1571){var v$1572 = v$1571[0];
return pickle$pickle$.con1$2005(function(v$1573){return [0,v$1573];
},function(v$1574){return v$1574[1];
},pickle$pickle$.tup4Gen0$2368(v$1572,smltojs0$SmlToJsComp$$4.pu_IntSigEnv$317,compiler_objects$CompilerEnv$$7.pu$6402,smltojs0$CompileBasisJS$.pu$201));
},null]);
var v$1447 = v$1446[0];
var v$1448 = v$1446[1];
smltojs0$SmlToJsComp$$4.pu_IntBasis$323 = v$1448;
smltojs0$SmlToJsComp$$4.pu_IntFunEnv$324 = v$1447;
smltojs0$SmlToJsComp$$4.empty$326 = [0,tools$FinMap$.empty$52(function(v$2248){return syntax_objects$FunId$.eq_funid$100(v$2248[0],v$2248[1]);
})];
smltojs0$SmlToJsComp$$4.initial$327 = [0,tools$FinMap$.empty$52(function(v$2249){return syntax_objects$FunId$.eq_funid$100(v$2249[0],v$2249[1]);
})];
smltojs0$SmlToJsComp$$4.plus$328 = function(v$336,v$2250){var v$337 = v$336[1];
var v$339 = v$2250[1];
return [0,tools$FinMap$.plus$146(function(v$2251){return syntax_objects$FunId$.eq_funid$100(v$2251[0],v$2251[1]);
},[v$337,v$339])];
};
smltojs0$SmlToJsComp$$4.add$340 = function(v$349,v$350,v$351){var v$352 = v$351[1];
return [0,tools$FinMap$.add$132(function(v$2252){return syntax_objects$FunId$.eq_funid$100(v$2252[0],v$2252[1]);
},[v$349,v$350,v$352])];
};
smltojs0$SmlToJsComp$$4.lookup$353 = function(v$356,funid$359){var v$372 = v$356[1];
var v$368 = tools$FinMap$.lookup$67(function(v$2253){return syntax_objects$FunId$.eq_funid$100(v$2253[0],v$2253[1]);
},v$372,funid$359);
switch (v$368[0]) { case 0: {return v$368[1];
 break; }default: {var s$1575 = "IntFunEnv.lookup: could not find funid " + (syntax_objects$FunId$.pr_FunId$51(funid$359));
return tools$Crash$.impossible$50("ManagerObjects." + s$1575);
} };
};
smltojs0$SmlToJsComp$$4.restrict$374 = function(v$395,v$2254){var v$396 = v$395[1];
var t$2333;
var b$1579 = tools$FinMap$.empty$52(function(v$2255){return syntax_objects$FunId$.eq_funid$100(v$2255[0],v$2255[1]);
});
var fix$2334 = {};
fix$2334.$foldl = function(v$1582,v$1583){if (v$1583 == null) {return v$1582;
} else {var v$1584 = v$1583;
var v$1585 = v$1584[0];
var v$1586 = v$1584[1];
var t$2336 = fix$2334.$foldl;
var t$2335;
var v$2165 = tools$FinMap$.lookup$67(function(v$2256){return syntax_objects$FunId$.eq_funid$100(v$2256[0],v$2256[1]);
},v$396,v$1585);
switch (v$2165[0]) { case 0: {var v$2166 = v$2165[1];
t$2335 = (tools$FinMap$.add$132(function(v$2257){return syntax_objects$FunId$.eq_funid$100(v$2257[0],v$2257[1]);
},[v$1585,v$2166,v$1582]));
 break; }default: {var s$2167 = "IntFunEnv.restrict: could not find funid " + (syntax_objects$FunId$.pr_FunId$51(v$1585));
t$2335 = (tools$Crash$.impossible$50("ManagerObjects." + s$2167));
} };
return t$2336(t$2335,v$1586);
};
};
var foldl$1581 = fix$2334.$foldl;
t$2333 = (foldl$1581(b$1579,v$2254));
return [0,t$2333];
};
smltojs0$SmlToJsComp$$4.enrich$398 = function(v$454,v$2258){var v$455 = v$454[1];
var v$457 = v$2258[1];
return tools$FinMap$.Fold$472(function(v$2259){return syntax_objects$FunId$.eq_funid$100(v$2259[0],v$2259[1]);
},function(v$410){var v$450 = v$410[0];
var v$451 = v$450[0];
var v$452 = v$450[1];
if (v$410[1]) {var v$419 = tools$FinMap$.lookup$67(function(v$2260){return syntax_objects$FunId$.eq_funid$100(v$2260[0],v$2260[1]);
},v$455,v$451);
switch (v$419[0]) { case 0: {var v$449 = v$419[1];
return (v$452[0] == v$449[0])?(v$452[3][3] == v$449[3][3]):false;
 break; }default: {return false;
} };
} else {return false;
};
},true,v$457);
};
smltojs0$SmlToJsComp$$4.layout$458 = function(v$2329){return smltojs0$SmlToJsComp$$4.layoutIntFunEnv$213(v$2329);
};
smltojs0$SmlToJsComp$$4.fold$459 = function(f$462,i$465,v$468){var v$477 = v$468[1];
return tools$FinMap$.Fold$472(function(v$2261){return syntax_objects$FunId$.eq_funid$100(v$2261[0],v$2261[1]);
},f$462,i$465,v$477);
};
smltojs0$SmlToJsComp$$4.pu$478 = v$1447;
smltojs0$SmlToJsComp$$4.empty$479 = [0,tools$FinMap$.empty$52(function(v$2262){return syntax_objects$SigId$.eq_sigid$100(v$2262[0],v$2262[1]);
})];
smltojs0$SmlToJsComp$$4.initial$480 = smltojs0$SmlToJsComp$$4.empty$479;
smltojs0$SmlToJsComp$$4.plus$481 = function(v$489,v$2263){var v$490 = v$489[1];
var v$492 = v$2263[1];
return [0,tools$FinMap$.plus$146(function(v$2264){return syntax_objects$SigId$.eq_sigid$100(v$2264[0],v$2264[1]);
},[v$490,v$492])];
};
smltojs0$SmlToJsComp$$4.add$493 = function(v$502,v$503,v$504){var v$505 = v$504[1];
return [0,tools$FinMap$.add$132(function(v$2265){return syntax_objects$SigId$.eq_sigid$100(v$2265[0],v$2265[1]);
},[v$502,v$503,v$505])];
};
smltojs0$SmlToJsComp$$4.lookup$506 = function(v$509,sigid$512){var v$525 = v$509[1];
var v$521 = tools$FinMap$.lookup$67(function(v$2266){return syntax_objects$SigId$.eq_sigid$100(v$2266[0],v$2266[1]);
},v$525,sigid$512);
switch (v$521[0]) { case 0: {return v$521[1];
 break; }default: {var s$1598 = "IntSigEnv.lookup: could not find sigid " + (syntax_objects$SigId$.pr_SigId$51(sigid$512));
return tools$Crash$.impossible$50("ManagerObjects." + s$1598);
} };
};
smltojs0$SmlToJsComp$$4.restrict$527 = function(v$548,v$2267){var v$549 = v$548[1];
var t$2337;
var b$1602 = tools$FinMap$.empty$52(function(v$2268){return syntax_objects$SigId$.eq_sigid$100(v$2268[0],v$2268[1]);
});
var fix$2338 = {};
fix$2338.$foldl = function(v$1605,v$1606){if (v$1606 == null) {return v$1605;
} else {var v$1607 = v$1606;
var v$1608 = v$1607[0];
var v$1609 = v$1607[1];
var t$2340 = fix$2338.$foldl;
var t$2339;
var v$2173 = tools$FinMap$.lookup$67(function(v$2269){return syntax_objects$SigId$.eq_sigid$100(v$2269[0],v$2269[1]);
},v$549,v$1608);
switch (v$2173[0]) { case 0: {var v$2174 = v$2173[1];
t$2339 = (tools$FinMap$.add$132(function(v$2270){return syntax_objects$SigId$.eq_sigid$100(v$2270[0],v$2270[1]);
},[v$1608,v$2174,v$1605]));
 break; }default: {var s$2175 = "IntSigEnv.restrict: could not find sigid " + (syntax_objects$SigId$.pr_SigId$51(v$1608));
t$2339 = (tools$Crash$.impossible$50("ManagerObjects." + s$2175));
} };
return t$2340(t$2339,v$1609);
};
};
var foldl$1604 = fix$2338.$foldl;
t$2337 = (foldl$1604(b$1602,v$2267));
return [0,t$2337];
};
smltojs0$SmlToJsComp$$4.enrich$551 = function(v$579,v$2271){var v$580 = v$579[1];
var v$582 = v$2271[1];
return tools$FinMap$.Fold$472(function(v$2272){return syntax_objects$SigId$.eq_sigid$100(v$2272[0],v$2272[1]);
},function(v$563){var v$575 = v$563[0];
var v$576 = v$575[0];
var v$577 = v$575[1];
if (v$563[1]) {var v$572 = tools$FinMap$.lookup$67(function(v$2273){return syntax_objects$SigId$.eq_sigid$100(v$2273[0],v$2273[1]);
},v$580,v$576);
switch (v$572[0]) { case 0: {var v$574 = v$572[1];
return special_objects$TyName$$3.eq$2996(v$577,v$574);
 break; }default: {return false;
} };
} else {return false;
};
},true,v$582);
};
smltojs0$SmlToJsComp$$4.layout$583 = function(v$2176){var v$2177 = v$2176[1];
return (((tools$FinMap$.layoutMap$552(function(v$2274){return syntax_objects$SigId$.eq_sigid$100(v$2274[0],v$2274[1]);
},["->","]",", ","IntSigEnv = ["]))(function(x$2178){var v$2179 = syntax_objects$SigId$.pr_SigId$51(x$2178);
return [1,v$2179];
}))((special_objects$TyName$$3.layoutSet$3021("}",", ","{"))(function(x$2180){var v$2181 = special_objects$TyName$$1.pr_TyName$289(x$2180[0],x$2180[1],x$2180[2],x$2180[3],x$2180[4],x$2180[5]);
return [1,v$2181];
})))(v$2177);
};
smltojs0$SmlToJsComp$$4.tynames$584 = function(v$587){var v$597 = v$587[1];
return tools$FinMap$.fold$453(function(v$2275){return syntax_objects$SigId$.eq_sigid$100(v$2275[0],v$2275[1]);
},function(v$594){var v$595 = v$594[0];
var v$596 = v$594[1];
return special_objects$TyName$$3.union$2587(v$595,v$596);
},special_objects$TyName$$3.empty$2399,v$597);
};
smltojs0$SmlToJsComp$$4.pu$598 = smltojs0$SmlToJsComp$$4.pu_IntSigEnv$317;
smltojs0$SmlToJsComp$$4.mk$599 = function(v$600){return [0,v$600];
};
smltojs0$SmlToJsComp$$4.un$601 = function(v$604){return v$604[1];
};
smltojs0$SmlToJsComp$$4.empty$609 = [0,[smltojs0$SmlToJsComp$$4.empty$326,smltojs0$SmlToJsComp$$4.empty$479,compiler_objects$CompilerEnv$$7.emptyCEnv$4533,smltojs0$CompileBasisJS$.empty$65]];
smltojs0$SmlToJsComp$$4.plus$610 = function(v$624,v$2276){var v$625 = v$624[1];
var v$626 = v$625[0];
var v$627 = v$625[1];
var v$628 = v$625[2];
var v$629 = v$625[3];
var v$631 = v$2276[1];
var v$632 = v$631[0];
var v$633 = v$631[1];
var v$634 = v$631[2];
var v$635 = v$631[3];
var t$2343;
var t$2342;
var v$1615 = v$626[1];
var v$1617 = v$632[1];
t$2342 = [0,tools$FinMap$.plus$146(function(v$2277){return syntax_objects$FunId$.eq_funid$100(v$2277[0],v$2277[1]);
},[v$1615,v$1617])];
var t$2341;
var v$1620 = v$627[1];
var v$1622 = v$633[1];
t$2341 = [0,tools$FinMap$.plus$146(function(v$2278){return syntax_objects$SigId$.eq_sigid$100(v$2278[0],v$2278[1]);
},[v$1620,v$1622])];
t$2343 = [t$2342,t$2341,compiler_objects$CompilerEnv$$7.plus$4805(v$628,v$634),smltojs0$CompileBasisJS$.plus$67(v$629,v$635)];
return [0,t$2343];
};
smltojs0$SmlToJsComp$$4.pp_tynames$636 = function(s$639,tns$642){basis$General$.print$156(("\n" + s$639) + ":\n  ");
var t$2350 = basis$General$.print$156;
var t$2349;
var t$2348;
var t$2347 = basis$String$.concatWith$173;
var t$2346 = ",";
var t$2345;
var fix$2344 = {};
fix$2344.$map = function(v$1629){if (v$1629 == null) {return null;
} else {var v$1630 = v$1629;
var v$1631 = v$1630[0];
var v$1632 = v$1630[1];
return [special_objects$TyName$$1.pr_TyName$289(v$1631[0],v$1631[1],v$1631[2],v$1631[3],v$1631[4],v$1631[5]),fix$2344.$map(v$1632)];
};
};
var map$1628 = fix$2344.$map;
t$2345 = (map$1628(tns$642));
t$2348 = (t$2347(t$2346,t$2345));
t$2349 = (t$2348 + "\n");
return t$2350(t$2349);
};
smltojs0$SmlToJsComp$$4.restrict0$645 = function(v$697,v$2279,v$2280){var v$698 = v$697[1];
var v$699 = v$698[0];
var v$700 = v$698[1];
var v$701 = v$698[2];
var v$702 = v$698[3];
var v$704 = v$2279[0];
var v$705 = v$2279[4];
var v$706 = v$2279[1];
var v$707 = v$2279[3];
var v$708 = v$2279[2];
var ife$$661 = smltojs0$SmlToJsComp$$4.restrict$374(v$699,v$704);
var ise$$662 = smltojs0$SmlToJsComp$$4.restrict$527(v$700,v$705);
var ce$$663 = compiler_objects$CompilerEnv$$7.restrictCEnv$5382(v$701,[v$706,v$708,v$707]);
var lvars$667 = compiler_objects$CompilerEnv$$7.lvarsOfCEnv$5207(ce$$663);
var tynames$691;
var t$2367 = special_objects$TyName$$3.union$2587;
var t$2366;
var v$1651 = ise$$662[1];
t$2366 = (tools$FinMap$.fold$453(function(v$2281){return syntax_objects$SigId$.eq_sigid$100(v$2281[0],v$2281[1]);
},function(v$1652){var v$1653 = v$1652[0];
var v$1654 = v$1652[1];
return special_objects$TyName$$3.union$2587(v$1653,v$1654);
},special_objects$TyName$$3.empty$2399,v$1651));
var t$2365;
var t$2364 = special_objects$TyName$$3.fromList$2946;
var t$2363;
var t$2362 = basis$List$.s$n$645;
var t$2361;
var t$2360 = compiler_objects$CompilerEnv$$7.tynamesOfCEnv$5210(ce$$663);
var t$2359;
var t$2358 = basis$List$.s$n$645;
var t$2357;
var t$2351;
var v$1656 = ife$$661[1];
t$2351 = (tools$FinMap$.fold$453(function(v$2282){return syntax_objects$FunId$.eq_funid$100(v$2282[0],v$2282[1]);
},function(v$1657){var v$1658 = v$1657[0];
var v$1659 = v$1658[4];
var v$1660 = v$1657[1];
var v$1661 = v$1659[1];
var v$1662 = v$1661[1];
var v$1663 = v$1661[2];
var t$2356 = basis$List$.s$n$645;
var t$2355;
var t$2354;
var t$2353 = special_objects$TyName$$3.list$2937;
var t$2352;
var v$1664 = v$1662[1];
t$2352 = (tools$FinMap$.fold$453(function(v$2283){return syntax_objects$SigId$.eq_sigid$100(v$2283[0],v$2283[1]);
},function(v$1665){var v$1666 = v$1665[0];
var v$1667 = v$1665[1];
return special_objects$TyName$$3.union$2587(v$1666,v$1667);
},special_objects$TyName$$3.empty$2399,v$1664));
t$2354 = (t$2353(t$2352));
t$2355 = [t$2354,basis$List$.s$n$645([compiler_objects$CompilerEnv$$7.tynamesOfCEnv$5210(v$1663),v$1660])];
return t$2356(t$2355);
},null,v$1656));
t$2357 = [t$2351,v$2280];
t$2359 = (t$2358(t$2357));
t$2361 = [t$2360,t$2359];
t$2363 = (t$2362(t$2361));
t$2365 = (t$2364(t$2363));
tynames$691 = (t$2367(t$2366,t$2365));
var tynames$692 = special_objects$TyName$$3.list$2937(special_objects$TyName$$3.difference$2679(tynames$691,special_objects$TyName$$3.fromList$2946(special_objects$TyName$$1.tynamesPredefined$274)));
var cons$693 = compiler_objects$CompilerEnv$$7.consOfCEnv$5208(ce$$663);
var excons$694 = compiler_objects$CompilerEnv$$7.exconsOfCEnv$5209(ce$$663);
return [0,[ife$$661,ise$$662,ce$$663,smltojs0$CompileBasisJS$.restrict0$166(v$702,[lvars$667,tynames$692,cons$693,excons$694])]];
};
smltojs0$SmlToJsComp$$4.restrict$710 = function(v$802,v$803,v$804){var tynames$716 = basis$List$.s$n$645([[special_objects$TyName$$1.tyName_EXN$270,[special_objects$TyName$$1.tyName_INT31$206,[special_objects$TyName$$1.tyName_INT32$210,[special_objects$TyName$$1.tyName_INTINF$214,[special_objects$TyName$$1.tyName_WORD8$218,[special_objects$TyName$$1.tyName_WORD31$222,[special_objects$TyName$$1.tyName_WORD32$226,[special_objects$TyName$$1.tyName_STRING$234,[special_objects$TyName$$1.tyName_CHAR$238,[special_objects$TyName$$1.tyName_REF$250,[special_objects$TyName$$1.tyName_REAL$230,null]]]]]]]]]]],special_objects$TyName$$3.list$2937(v$804)]);
var v$797 = v$802[1];
var v$798 = v$797[0];
var v$799 = v$797[1];
var v$800 = v$797[2];
var v$801 = v$797[3];
var v$791 = v$803[0];
var v$792 = v$803[4];
var v$793 = v$803[1];
var v$794 = v$803[3];
var v$795 = v$803[2];
var longstrids$728 = [syntax_objects$StrId$.mk_LongStrId$96(["IntInfRep",null]),v$793];
var ife$$729 = smltojs0$SmlToJsComp$$4.restrict$374(v$798,v$791);
var ise$$730 = smltojs0$SmlToJsComp$$4.restrict$527(v$799,v$792);
var ce$$731 = compiler_objects$CompilerEnv$$7.restrictCEnv$5382(v$800,[longstrids$728,v$795,v$794]);
if (tools$Flags$$1.chat$77[0]) {basis$General$.print$156("\n RESTRICTED CE:\n");
tools$PrettyPrint$.outputTree$1071([function(v$2330){return basis$General$.print$156(v$2330);
},compiler_objects$CompilerEnv$$7.layoutCEnv$6173(ce$$731),100]);
} else {0;
};
var lvars$741 = compiler_objects$CompilerEnv$$7.lvarsOfCEnv$5207(ce$$731);
var tynames$765;
var t$2384 = special_objects$TyName$$3.union$2587;
var t$2383;
var v$1687 = ise$$730[1];
t$2383 = (tools$FinMap$.fold$453(function(v$2284){return syntax_objects$SigId$.eq_sigid$100(v$2284[0],v$2284[1]);
},function(v$1688){var v$1689 = v$1688[0];
var v$1690 = v$1688[1];
return special_objects$TyName$$3.union$2587(v$1689,v$1690);
},special_objects$TyName$$3.empty$2399,v$1687));
var t$2382;
var t$2381 = special_objects$TyName$$3.fromList$2946;
var t$2380;
var t$2379 = basis$List$.s$n$645;
var t$2378;
var t$2377 = compiler_objects$CompilerEnv$$7.tynamesOfCEnv$5210(ce$$731);
var t$2376;
var t$2375 = basis$List$.s$n$645;
var t$2374;
var t$2368;
var v$1692 = ife$$729[1];
t$2368 = (tools$FinMap$.fold$453(function(v$2285){return syntax_objects$FunId$.eq_funid$100(v$2285[0],v$2285[1]);
},function(v$1693){var v$1694 = v$1693[0];
var v$1695 = v$1694[4];
var v$1696 = v$1693[1];
var v$1697 = v$1695[1];
var v$1698 = v$1697[1];
var v$1699 = v$1697[2];
var t$2373 = basis$List$.s$n$645;
var t$2372;
var t$2371;
var t$2370 = special_objects$TyName$$3.list$2937;
var t$2369;
var v$1700 = v$1698[1];
t$2369 = (tools$FinMap$.fold$453(function(v$2286){return syntax_objects$SigId$.eq_sigid$100(v$2286[0],v$2286[1]);
},function(v$1701){var v$1702 = v$1701[0];
var v$1703 = v$1701[1];
return special_objects$TyName$$3.union$2587(v$1702,v$1703);
},special_objects$TyName$$3.empty$2399,v$1700));
t$2371 = (t$2370(t$2369));
t$2372 = [t$2371,basis$List$.s$n$645([compiler_objects$CompilerEnv$$7.tynamesOfCEnv$5210(v$1699),v$1696])];
return t$2373(t$2372);
},null,v$1692));
t$2374 = [t$2368,tynames$716];
t$2376 = (t$2375(t$2374));
t$2378 = [t$2377,t$2376];
t$2380 = (t$2379(t$2378));
t$2382 = (t$2381(t$2380));
tynames$765 = (t$2384(t$2383,t$2382));
var tynames$766 = special_objects$TyName$$3.list$2937(tynames$765);
var cons$767 = compiler_objects$CompilerEnv$$7.consOfCEnv$5208(ce$$731);
var excons$768 = compiler_objects$CompilerEnv$$7.exconsOfCEnv$5209(ce$$731);
var cb$$769 = smltojs0$CompileBasisJS$.restrict$142(v$801,[lvars$741,tynames$766,cons$767,excons$768]);
var t$2389;
var t$2388 = ife$$729;
var t$2387 = ise$$730;
var t$2386 = ce$$731;
var t$2385;
var v$1711 = ife$$729[1];
t$2385 = (tools$FinMap$.Fold$472(function(v$2287){return syntax_objects$FunId$.eq_funid$100(v$2287[0],v$2287[1]);
},function(v$2194){var v$2195 = v$2194[0];
var v$2196 = v$2195[1];
var v$2197 = v$2194[1];
var v$2198 = v$2196[4];
var v$2199 = v$2198[1];
return smltojs0$CompileBasisJS$.plus$67(v$2197,v$2199[3]);
},cb$$769,v$1711));
t$2389 = [t$2388,t$2387,t$2386,t$2385];
return [0,t$2389];
};
smltojs0$SmlToJsComp$$4.match$805 = function(v$820,v$2288){var v$821 = v$820[1];
var v$822 = v$821[0];
var v$823 = v$821[1];
var v$824 = v$821[2];
var v$825 = v$821[3];
var v$827 = v$2288[1];
var v$830 = v$827[2];
var v$831 = v$827[3];
compiler_objects$CompilerEnv$$7.match$5831([v$824,v$830]);
return [0,[v$822,v$823,v$824,smltojs0$CompileBasisJS$.match$128(v$825,v$831)]];
};
smltojs0$SmlToJsComp$$4.enrich$864 = function(v$890,v$2289){var v$891 = v$890[1];
var v$892 = v$891[0];
var v$893 = v$891[1];
var v$894 = v$891[2];
var v$895 = v$891[3];
var v$897 = v$2289[1];
var v$898 = v$897[0];
var v$899 = v$897[1];
var v$900 = v$897[2];
var v$901 = v$897[3];
if ((smltojs0$SmlToJsComp$$4.enrich$398(v$892,v$898))?true:[false,basis$General$.print$156("IntBasis.enrich:IntFunEnv false\n")][0]) {if ((smltojs0$SmlToJsComp$$4.enrich$551(v$893,v$899))?true:[false,basis$General$.print$156("IntBasis.enrich:IntSigEnv false\n")][0]) {var t$2390;
var a$1753 = [v$894,v$900];
t$2390 = ((compiler_objects$CompilerEnv$$7.enrichCEnv$5719(a$1753))?true:[false,basis$General$.print$156("IntBasis.enrich:CompilerEnv false\n")][0]);
return t$2390?((smltojs0$CompileBasisJS$.enrich$109(v$895,v$901))?true:[false,basis$General$.print$156("IntBasis.enrich:CompileBasis false\n")][0]):false;
} else {return false;
};
} else {return false;
};
};
var fix$2391 = {};
fix$2391.$agree2 = function(v$952,v$2290,v$2291){lab$agree2: while (true) {if (v$952 == null) {return true;
} else {var v$957 = v$952;
var v$958 = v$957[0];
var v$959 = v$957[1];
var t$2392;
var v$1782 = v$2290[2];
var v$1783 = v$2290[3];
var v$1785 = v$2291[2];
var v$1786 = v$2291[3];
var ce1$1787 = compiler_objects$CompilerEnv$$7.lookup_longstrid$4944(v$1782,v$958);
var ce2$1788 = compiler_objects$CompilerEnv$$7.lookup_longstrid$4944(v$1785,v$958);
if (compiler_objects$CompilerEnv$$7.enrichCEnv$5719([ce1$1787,ce2$1788])) {if (compiler_objects$CompilerEnv$$7.enrichCEnv$5719([ce2$1788,ce1$1787])) {var cb1$1789;
var lvars$1792 = compiler_objects$CompilerEnv$$7.lvarsOfCEnv$5207(ce1$1787);
var tynames$1793 = compiler_objects$CompilerEnv$$7.tynamesOfCEnv$5210(ce1$1787);
var cons$1794 = compiler_objects$CompilerEnv$$7.consOfCEnv$5208(ce1$1787);
var excons$1795 = compiler_objects$CompilerEnv$$7.exconsOfCEnv$5209(ce1$1787);
cb1$1789 = (smltojs0$CompileBasisJS$.restrict$142(v$1783,[lvars$1792,tynames$1793,cons$1794,excons$1795]));
var cb2$1796;
var lvars$1799 = compiler_objects$CompilerEnv$$7.lvarsOfCEnv$5207(ce2$1788);
var tynames$1800 = compiler_objects$CompilerEnv$$7.tynamesOfCEnv$5210(ce2$1788);
var cons$1801 = compiler_objects$CompilerEnv$$7.consOfCEnv$5208(ce2$1788);
var excons$1802 = compiler_objects$CompilerEnv$$7.exconsOfCEnv$5209(ce2$1788);
cb2$1796 = (smltojs0$CompileBasisJS$.restrict$142(v$1786,[lvars$1799,tynames$1800,cons$1801,excons$1802]));
t$2392 = (smltojs0$CompileBasisJS$.eq$190(cb1$1789,cb2$1796));
} else {t$2392 = false;
};
} else {t$2392 = false;
};
if (t$2392) {var t$2393 = v$959;
var t$2394 = v$2290;
var t$2395 = v$2291;
var v$952 = t$2393;
var v$2290 = t$2394;
var v$2291 = t$2395;
continue lab$agree2;
} else {return false;
};
};
};
};
var agree2$940 = fix$2391.$agree2;
smltojs0$SmlToJsComp$$4.agree$962 = function(v$971,v$972,v$2292){var v$973 = v$972[1];
var v$975 = v$2292[1];
return agree2$940(v$971,v$973,v$975);
};
smltojs0$SmlToJsComp$$4.layout$976 = function(v$2331){return smltojs0$SmlToJsComp$$4.layoutIntBasis$215(v$2331);
};
smltojs0$SmlToJsComp$$4.initial$977 = function(v$979){return [0,[smltojs0$SmlToJsComp$$4.initial$327,smltojs0$SmlToJsComp$$4.empty$479,compiler_objects$CompilerEnv$$7.initialCEnv$4599(0),smltojs0$CompileBasisJS$.initial$66]];
};
smltojs0$SmlToJsComp$$4.pu$980 = v$1448;
smltojs0$SmlToJsComp$$4.closure$981 = function(tynames$984,dom$987,v$991){var v$992 = v$991[0];
var v$993 = v$991[1];
return smltojs0$SmlToJsComp$$4.restrict0$645(smltojs0$SmlToJsComp$$4.plus$610(v$992,v$993),dom$987,tynames$984);
};
smltojs0$SmlToJsComp$$4.empty$995 = [0,[basics$InfixBasis$.emptyB$74(function(v$2293){return syntax_objects$Ident$.eq_id$237(v$2293[0],v$2293[1]);
}),basics$ModuleEnvironments$.empty$395,basics$OpacityEnv$$4.empty$2235(0),smltojs0$SmlToJsComp$$4.empty$609]];
smltojs0$SmlToJsComp$$4.mk$996 = function(b$999){return [0,b$999];
};
smltojs0$SmlToJsComp$$4.un$1000 = function(v$1003){return v$1003[1];
};
smltojs0$SmlToJsComp$$4.plus$1008 = function(v$1022,v$2294){var v$1023 = v$1022[1];
var v$1024 = v$1023[0];
var v$1025 = v$1023[1];
var v$1026 = v$1023[2];
var v$1027 = v$1023[3];
var v$1029 = v$2294[1];
var v$1030 = v$1029[0];
var v$1031 = v$1029[1];
var v$1032 = v$1029[2];
var v$1033 = v$1029[3];
return [0,[basics$InfixBasis$.compose$112(function(v$2295){return syntax_objects$Ident$.eq_id$237(v$2295[0],v$2295[1]);
},[v$1024,v$1030]),basics$ModuleEnvironments$.plus$406(v$1025,v$1031),basics$OpacityEnv$$4.plus$2237(v$1026,v$1032),smltojs0$SmlToJsComp$$4.plus$610(v$1027,v$1033)]];
};
smltojs0$SmlToJsComp$$4.debug_man_enrich$1034 = tools$Flags$$6.lookup_flag_entry$5029("debug_man_enrich");
smltojs0$SmlToJsComp$$4.log$1035 = function(s$1038){return basis$TextIO$.output$101([0],s$1038);
};
smltojs0$SmlToJsComp$$4.debug$1039 = function(v$1054,v$1055){if (smltojs0$SmlToJsComp$$4.debug_man_enrich$1034[0]) {if (v$1055) {var s$1804 = ("\n" + v$1054) + ": enrich succeeded.";
basis$TextIO$.output$101([0],s$1804);
} else {var s$1807 = ("\n" + v$1054) + ": enrich failed.";
basis$TextIO$.output$101([0],s$1807);
};
return v$1055;
} else {return v$1055;
};
};
smltojs0$SmlToJsComp$$4.enrich$1072 = function(v$1099,v$2296){var v$1100 = v$1099[1];
var v$1101 = v$1100[0];
var v$1102 = v$1100[1];
var v$1103 = v$1100[2];
var v$1104 = v$1100[3];
var v$1106 = v$2296[0];
var v$1107 = v$1106[1];
var v$1108 = v$1107[0];
var v$1109 = v$1107[1];
var v$1110 = v$1107[2];
var v$1111 = v$1107[3];
var v$1112 = v$2296[1];
var t$2398;
var v$2231;
var a$1810 = [v$1101,v$1108];
v$2231 = (basics$InfixBasis$.eq$116(function(v$2297){return basics$InfixBasis$.eq_InfixEntry$208(v$2297[0],v$2297[1]);
},a$1810));
if (smltojs0$SmlToJsComp$$4.debug_man_enrich$1034[0]) {v$2231?(basis$TextIO$.output$101([0],"\nInfixBasis: enrich succeeded.")):(basis$TextIO$.output$101([0],"\nInfixBasis: enrich failed."));
t$2398 = v$2231;
} else {t$2398 = v$2231;
};
if (t$2398) {var t$2397;
var v$2233 = basics$ModuleEnvironments$.enrich$817(v$1102,v$1109);
if (smltojs0$SmlToJsComp$$4.debug_man_enrich$1034[0]) {v$2233?(basis$TextIO$.output$101([0],"\nElabBasis: enrich succeeded.")):(basis$TextIO$.output$101([0],"\nElabBasis: enrich failed."));
t$2397 = v$2233;
} else {t$2397 = v$2233;
};
if (t$2397) {var t$2396;
var v$2235;
var v$2326 = [v$1110,v$1112];
v$2235 = (basics$OpacityEnv$$4.enrich$2267(v$1103,v$2326));
if (smltojs0$SmlToJsComp$$4.debug_man_enrich$1034[0]) {v$2235?(basis$TextIO$.output$101([0],"\nOpacityEnv: enrich succeeded.")):(basis$TextIO$.output$101([0],"\nOpacityEnv: enrich failed."));
t$2396 = v$2235;
} else {t$2396 = v$2235;
};
if (t$2396) {var v$2237 = smltojs0$SmlToJsComp$$4.enrich$864(v$1104,v$1111);
if (smltojs0$SmlToJsComp$$4.debug_man_enrich$1034[0]) {v$2237?(basis$TextIO$.output$101([0],"\nIntBasis: enrich succeeded.")):(basis$TextIO$.output$101([0],"\nIntBasis: enrich failed."));
return v$2237;
} else {return v$2237;
};
} else {return false;
};
} else {return false;
};
} else {return false;
};
};
smltojs0$SmlToJsComp$$4.agree$1113 = function(v$1131,v$1132,v$2298){var v$1133 = v$1132[1];
var v$1134 = v$1133[1];
var v$1136 = v$1133[3];
var v$1138 = v$2298[0];
var v$1139 = v$1138[1];
var v$1140 = v$1139[1];
var v$1142 = v$1139[3];
if (basics$ModuleEnvironments$.agree$859(v$1131,v$1134,v$1140)) {var v$1817 = v$1136[1];
var v$1819 = v$1142[1];
return agree2$940(v$1131,v$1817,v$1819);
} else {return false;
};
};
smltojs0$SmlToJsComp$$4.restrict$1144 = function(v$1165,v$2299){var v$1166 = v$1165[1];
var v$1167 = v$1166[0];
var v$1168 = v$1166[1];
var v$1169 = v$1166[2];
var v$1170 = v$1166[3];
tools$Flags$$1.chat$77[0]?(basis$General$.print$156("[restricting elaboration basis begin...]\n")):0;
var eB$$1155 = basics$ModuleEnvironments$.restrict$818(v$1168,v$2299);
tools$Flags$$1.chat$77[0]?(basis$General$.print$156("[restricting elaboration basis end...]\n")):0;
tools$Flags$$1.chat$77[0]?(basis$General$.print$156("[finding tynames in elaboration basis begin...]\n")):0;
var tynames_eB$$1156 = basics$ModuleEnvironments$.tynames$484(eB$$1155);
tools$Flags$$1.chat$77[0]?(basis$General$.print$156("[finding tynames in elaboration basis end...]\n")):0;
tools$Flags$$1.chat$77[0]?(basis$General$.print$156("[restricting opacity env begin...]\n")):0;
var oe$$1157 = basics$OpacityEnv$$4.restrict$2308(v$1169,[v$2299[0],tynames_eB$$1156]);
var tynames_oe$$1162 = basics$StatObject$.tynamesRng$4097(oe$$1157[1]);
var tynames$1163 = special_objects$TyName$$3.union$2587(tynames_oe$$1162,tynames_eB$$1156);
tools$Flags$$1.chat$77[0]?(basis$General$.print$156("[restricting opacity env end...]\n")):0;
tools$Flags$$1.chat$77[0]?(basis$General$.print$156("[restricting interpretation basis begin...]\n")):0;
var iB$$1164 = smltojs0$SmlToJsComp$$4.restrict$710(v$1170,v$2299,tynames_oe$$1162);
tools$Flags$$1.chat$77[0]?(basis$General$.print$156("[restricting interpretation basis end...]\n")):0;
return [[0,[v$1167,eB$$1155,oe$$1157,iB$$1164]],tynames$1163];
};
smltojs0$SmlToJsComp$$4.match$1172 = function(v$1187,v$2300){var v$1188 = v$1187[1];
var v$1189 = v$1188[0];
var v$1190 = v$1188[1];
var v$1191 = v$1188[2];
var v$1192 = v$1188[3];
var v$1194 = v$2300[1];
var v$1196 = v$1194[1];
var v$1197 = v$1194[2];
var v$1198 = v$1194[3];
basics$ModuleEnvironments$.match$895(v$1190,v$1196);
basics$OpacityEnv$$4.match$2325(v$1191,v$1197);
var t$2403;
var t$2402 = v$1189;
var t$2401 = v$1190;
var t$2400 = v$1191;
var t$2399;
var v$1839 = v$1192[1];
var v$1840 = v$1839[0];
var v$1841 = v$1839[1];
var v$1842 = v$1839[2];
var v$1843 = v$1839[3];
var v$1845 = v$1198[1];
var v$1846 = v$1845[2];
var v$1847 = v$1845[3];
compiler_objects$CompilerEnv$$7.match$5831([v$1842,v$1846]);
t$2399 = [0,[v$1840,v$1841,v$1842,smltojs0$CompileBasisJS$.match$128(v$1843,v$1847)]];
t$2403 = [t$2402,t$2401,t$2400,t$2399];
return [0,t$2403];
};
smltojs0$SmlToJsComp$$4.domain$1199 = function(v$1202){var v$1206 = v$1202[1];
var v$1207 = v$1206[1];
return basics$ModuleEnvironments$.domain$822(v$1207);
};
smltojs0$SmlToJsComp$$4.db_f$1208 = function(v$1211,v$1214){return v$1214?true:[false,basis$General$.print$156(("Basis.eq:" + v$1211) + " false\n")][0];
};
smltojs0$SmlToJsComp$$4.eq$1224 = function(v$1258,v$2301){var v$1259 = v$1258[1];
var v$1260 = v$1259[0];
var v$1261 = v$1259[1];
var v$1262 = v$1259[2];
var v$1263 = v$1259[3];
var v$1265 = v$2301[1];
var v$1266 = v$1265[0];
var v$1267 = v$1265[1];
var v$1268 = v$1265[2];
var v$1269 = v$1265[3];
return ((basics$InfixBasis$.eq$116(function(v$2302){return basics$InfixBasis$.eq_InfixEntry$208(v$2302[0],v$2302[1]);
},[v$1260,v$1266]))?true:[false,basis$General$.print$156("Basis.eq:InfixBasis false\n")][0])?(((basics$ModuleEnvironments$.enrich$817(v$1261,v$1267))?true:[false,basis$General$.print$156("Basis.eq:B_l false\n")][0])?(((basics$ModuleEnvironments$.enrich$817(v$1267,v$1261))?true:[false,basis$General$.print$156("Basis.eq:B_r false\n")][0])?(((basics$OpacityEnv$$4.eq$2287(v$1262,v$1268))?true:[false,basis$General$.print$156("Basis.eq:OpacityEnv false\n")][0])?(((smltojs0$SmlToJsComp$$4.enrich$864(v$1263,v$1269))?true:[false,basis$General$.print$156("Basis.eq:IB_l false\n")][0])?((smltojs0$SmlToJsComp$$4.enrich$864(v$1269,v$1263))?true:[false,basis$General$.print$156("Basis.eq:IB_r false\n")][0]):false):false):false):false):false;
};
smltojs0$SmlToJsComp$$4.layout$1270 = function(v$1273){var v$1285 = v$1273[1];
var v$1286 = v$1285[0];
var v$1287 = v$1285[1];
var v$1288 = v$1285[2];
var v$1289 = v$1285[3];
var t$2404;
var v$1283 = [0,", "];
t$2404 = [[basics$InfixBasis$.layoutBasis$141(v$1286),[basics$ModuleEnvironments$.layout$510(v$1287),[basics$OpacityEnv$$4.layout$2362(v$1288[0],v$1288[1]),[smltojs0$SmlToJsComp$$4.layoutIntBasis$215(v$1289),null]]]],v$1283,")",1,"BASIS("];
return [0,t$2404];
};
smltojs0$SmlToJsComp$$4.closure$1290 = function(v$1332,v$1333){var v$1327 = v$1332[1];
var v$1330 = v$1327[2];
var v$1331 = v$1327[3];
var v$1321 = v$1333[1];
var v$1322 = v$1321[0];
var v$1323 = v$1321[1];
var v$1324 = v$1321[2];
var v$1325 = v$1321[3];
var dom$1305;
var v$1888 = v$1333[1];
var v$1889 = v$1888[1];
dom$1305 = (basics$ModuleEnvironments$.domain$822(v$1889));
var tynames_eB$1310;
var tns$1890 = basics$ModuleEnvironments$.tynames$484(v$1323);
tynames_eB$1310 = (special_objects$TyName$$3.difference$2679(tns$1890,special_objects$TyName$$3.fromList$2946(special_objects$TyName$$1.tynamesPredefined$274)));
var oe1$1311 = basics$OpacityEnv$$4.plus$2237(v$1330,v$1324);
var oe2$1312 = basics$OpacityEnv$$4.restrict$2308(oe1$1311,[dom$1305[0],tynames_eB$1310]);
var tynames_oe2$1317 = basics$StatObject$.tynamesRng$4097(oe2$1312[1]);
special_objects$TyName$$3.union$2587(tynames_oe2$1317,tynames_eB$1310);
var t$2409;
var t$2408 = v$1322;
var t$2407 = v$1323;
var t$2406 = oe2$1312;
var t$2405;
var tynames$1892 = special_objects$TyName$$3.list$2937(tynames_oe2$1317);
t$2405 = (smltojs0$SmlToJsComp$$4.restrict0$645(smltojs0$SmlToJsComp$$4.plus$610(v$1331,v$1325),dom$1305,tynames$1892));
t$2409 = [t$2408,t$2407,t$2406,t$2405];
return [0,t$2409];
};
smltojs0$SmlToJsComp$$4.initial$1334 = function(v$1336){return [0,[basics$InfixBasis$.emptyB$74(function(v$2303){return syntax_objects$Ident$.eq_id$237(v$2303[0],v$2303[1]);
}),basics$ModuleEnvironments$.initial$399(0),basics$OpacityEnv$$4.initial$2236(0),[0,[smltojs0$SmlToJsComp$$4.initial$327,smltojs0$SmlToJsComp$$4.empty$479,compiler_objects$CompilerEnv$$7.initialCEnv$4599(0),smltojs0$CompileBasisJS$.initial$66]]]];
};
var l$1899 = special_objects$Name$.bucket$135[0];
var fix$2410 = {};
fix$2410.$app = function(v$1901){lab$app: while (true) {if (v$1901 == null) {return 0;
} else {var v$1902 = v$1901;
var v$1903 = v$1902[0];
var v$1904 = v$1902[1];
if (v$1903[0][2]) {0;
} else {var v$2221 = v$1903[0][1];
(v$1903[0] = [[false],v$2221,true],0);
};
var t$2411 = v$1904;
var v$1901 = t$2411;
continue lab$app;
};
};
};
var app$1900 = fix$2410.$app;
app$1900(l$1899);
smltojs0$SmlToJsComp$$4.pu$1337 = pickle$pickle$.convert$2333([function(v$1338){return [0,v$1338];
},function(v$1341){return v$1341[1];
}],pickle$pickle$.tup4Gen0$2368(basics$InfixBasis$.pu$181,basics$ModuleEnvironments$.pu$917,basics$OpacityEnv$$4.pu$2374,v$1448));
smltojs0$SmlToJsComp$$4.pu_Basis0$1343 = pickle$pickle$.pairGen$1044([basics$InfixBasis$.pu$181,basics$ModuleEnvironments$.pu$917]);
smltojs0$SmlToJsComp$$4.plusBasis0$1344 = function(v$1351,v$2304){var v$1352 = v$1351[0];
var v$1353 = v$1351[1];
var v$1355 = v$2304[0];
var v$1356 = v$2304[1];
return [basics$InfixBasis$.compose$112(function(v$2305){return syntax_objects$Ident$.eq_id$237(v$2305[0],v$2305[1]);
},[v$1352,v$1355]),basics$ModuleEnvironments$.plus$406(v$1353,v$1356)];
};
smltojs0$SmlToJsComp$$4.initialBasis0$1357 = function(v$1359){return [basics$InfixBasis$.emptyB$74(function(v$2306){return syntax_objects$Ident$.eq_id$237(v$2306[0],v$2306[1]);
}),basics$ModuleEnvironments$.initial$399(0)];
};
smltojs0$SmlToJsComp$$4.matchBasis0$1360 = function(v$1367,v$2307){var v$1368 = v$1367[0];
var v$1369 = v$1367[1];
var v$1372 = v$2307[1];
basics$ModuleEnvironments$.match$895(v$1369,v$1372);
return [v$1368,v$1369];
};
smltojs0$SmlToJsComp$$4.eqBasis0$1373 = function(v$1388,v$2308){var v$1389 = v$1388[0];
var v$1390 = v$1388[1];
var v$1392 = v$2308[0];
var v$1393 = v$2308[1];
return ((basics$InfixBasis$.eq$116(function(v$2309){return basics$InfixBasis$.eq_InfixEntry$208(v$2309[0],v$2309[1]);
},[v$1389,v$1392]))?true:[false,basis$General$.print$156("Basis.eq:InfixBasis false\n")][0])?(((basics$ModuleEnvironments$.enrich$817(v$1390,v$1393))?true:[false,basis$General$.print$156("Basis.eq:B_l false\n")][0])?((basics$ModuleEnvironments$.enrich$817(v$1393,v$1390))?true:[false,basis$General$.print$156("Basis.eq:B_r false\n")][0]):false):false;
};
smltojs0$SmlToJsComp$$4.pu_Basis1$1394 = pickle$pickle$.pairGen$1044([basics$OpacityEnv$$4.pu$2374,v$1448]);
smltojs0$SmlToJsComp$$4.plusBasis1$1395 = function(v$1402,v$2310){var v$1403 = v$1402[0];
var v$1404 = v$1402[1];
var v$1406 = v$2310[0];
var v$1407 = v$2310[1];
return [basics$OpacityEnv$$4.plus$2237(v$1403,v$1406),smltojs0$SmlToJsComp$$4.plus$610(v$1404,v$1407)];
};
smltojs0$SmlToJsComp$$4.initialBasis1$1408 = function(v$1410){return [basics$OpacityEnv$$4.initial$2236(0),[0,[smltojs0$SmlToJsComp$$4.initial$327,smltojs0$SmlToJsComp$$4.empty$479,compiler_objects$CompilerEnv$$7.initialCEnv$4599(0),smltojs0$CompileBasisJS$.initial$66]]];
};
smltojs0$SmlToJsComp$$4.matchBasis1$1411 = function(v$1419,v$2311){var v$1420 = v$1419[0];
var v$1421 = v$1419[1];
var v$1423 = v$2311[0];
var v$1424 = v$2311[1];
basics$OpacityEnv$$4.match$2325(v$1420,v$1423);
var t$2413 = v$1420;
var t$2412;
var v$1935 = v$1421[1];
var v$1936 = v$1935[0];
var v$1937 = v$1935[1];
var v$1938 = v$1935[2];
var v$1939 = v$1935[3];
var v$1941 = v$1424[1];
var v$1942 = v$1941[2];
var v$1943 = v$1941[3];
compiler_objects$CompilerEnv$$7.match$5831([v$1938,v$1942]);
t$2412 = [0,[v$1936,v$1937,v$1938,smltojs0$CompileBasisJS$.match$128(v$1939,v$1943)]];
return [t$2413,t$2412];
};
smltojs0$SmlToJsComp$$4.eqBasis1$1425 = function(v$1440,v$2312){var v$1441 = v$1440[0];
var v$1442 = v$1440[1];
var v$1444 = v$2312[0];
var v$1445 = v$2312[1];
return ((basics$OpacityEnv$$4.eq$2287(v$1441,v$1444))?true:[false,basis$General$.print$156("Basis.eq:OpacityEnv false\n")][0])?(((smltojs0$SmlToJsComp$$4.enrich$864(v$1442,v$1445))?true:[false,basis$General$.print$156("Basis.eq:IB_l false\n")][0])?((smltojs0$SmlToJsComp$$4.enrich$864(v$1445,v$1442))?true:[false,basis$General$.print$156("Basis.eq:IB_r false\n")][0]):false):false;
};
return 0;
})();
