if ((typeof(tools$Report$)) == "undefined") {tools$Report$ = {};
};
(function(){var fix$432 = {};
fix$432.$eq_Report = function(v$289,v$290){switch (v$289[0]) { case 0: {switch (v$290[0]) { case 0: {var v$291 = v$289[1];
var v$292 = v$290[1];
if (fix$432.$eq_Report(v$291[0],v$292[0])) {return fix$432.$eq_Report(v$291[1],v$292[1]);
} else {return false;
};
 break; }default: {return false;
} };
 break; }case 1: {switch (v$290[0]) { case 1: {var v$294 = v$289[1];
var v$295 = v$290[1];
var fix$461 = {};
fix$461.$eq_list = function(v$301,v$302){lab$eq_list: while (true) {if (v$301 == null) {return (v$302 == null)?true:false;
} else {if (v$302 == null) {return false;
} else {var v$303 = v$301;
var v$304 = v$302;
if (v$303[0] == v$304[0]) {var t$462 = v$303[1];
var t$463 = v$304[1];
var v$301 = t$462;
var v$302 = t$463;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$299 = fix$461.$eq_list;
return eq_list$299(v$294,v$295);
 break; }default: {return false;
} };
 break; } };
};
tools$Report$.eq_Report$287 = fix$432.$eq_Report;
tools$Report$.null$50 = [1,null];
tools$Report$.line$51 = function(s$54){return [1,[s$54,null]];
};
tools$Report$.s$hh$55 = function(v$76,v$77){switch (v$76[0]) { case 1: {if (v$76[1] == null) {return v$77;
} else {switch (v$77[0]) { case 1: {return (v$77[1] == null)?v$76:[0,[v$76,v$77]];
 break; }default: {return [0,[v$76,v$77]];
} };
};
 break; }default: {switch (v$77[0]) { case 1: {return (v$77[1] == null)?v$76:[0,[v$76,v$77]];
 break; }default: {return [0,[v$76,v$77]];
} };
} };
};
tools$Report$.flatten$78 = function(c$315){var fix$433 = {};
fix$433.$foldr = function(v$317){if (v$317 == null) {return tools$Report$.null$50;
} else {var v$318 = v$317;
var v$319 = v$318[0];
var v$320 = v$318[1];
var v$427 = fix$433.$foldr(v$320);
switch (v$319[0]) { case 1: {if (v$319[1] == null) {return v$427;
} else {switch (v$427[0]) { case 1: {return (v$427[1] == null)?v$319:[0,[v$319,v$427]];
 break; }default: {return [0,[v$319,v$427]];
} };
};
 break; }default: {switch (v$427[0]) { case 1: {return (v$427[1] == null)?v$319:[0,[v$319,v$427]];
 break; }default: {return [0,[v$319,v$427]];
} };
} };
};
};
var foldr$316 = fix$433.$foldr;
return foldr$316(c$315);
};
var fix$434 = {};
fix$434.$indent = function(v$428,v$92){switch (v$92[0]) { case 1: {var v$98 = v$92[1];
var t$456;
var fix$455 = {};
fix$455.$map = function(v$324){if (v$324 == null) {return null;
} else {var v$325 = v$324;
var v$326 = v$325[0];
var v$327 = v$325[1];
var t$460;
var t$459;
var t$457;
var ssize$420 = "".length;
var fix$458 = {};
fix$458.$f = function(v$422){switch (v$422) { case 0: {return null;
 break; }default: {return [32,fix$458.$f(SmlPrims.chk_ovf_i32(v$422 - 1))];
} };
};
var f$421 = fix$458.$f;
t$457 = ((v$428 <= ssize$420)?"":(SmlPrims.concat([SmlPrims.implode(f$421(SmlPrims.chk_ovf_i32(v$428 - ssize$420))),["",null]])));
t$459 = (t$457 + v$326);
t$460 = [t$459,fix$455.$map(v$327)];
return t$460;
};
};
var map$323 = fix$455.$map;
t$456 = (map$323(v$98));
return [1,t$456];
 break; }default: {var v$100 = v$92[1];
var v$101 = v$100[0];
var v$102 = v$100[1];
return [0,[fix$434.$indent(v$428,v$101),fix$434.$indent(v$428,v$102)]];
} };
};
tools$Report$.indent$79 = fix$434.$indent;
var fix$435 = {};
fix$435.$adjust = function(v$429,v$120){switch (v$120[0]) { case 1: {var v$122 = v$120[1];
if (v$122 == null) {return [1,null];
} else {var v$129 = v$122;
var v$130 = v$129[0];
var v$131 = v$129[1];
var t$454;
if (v$429 < 0) {t$454 = [basis$String$.extract$107(v$130,SmlPrims.chk_ovf_i32(-(v$429)),[1]),v$131];
} else {var t$453;
var t$452;
var t$450;
var ssize$339 = "".length;
var fix$451 = {};
fix$451.$f = function(v$341){switch (v$341) { case 0: {return null;
 break; }default: {return [32,fix$451.$f(SmlPrims.chk_ovf_i32(v$341 - 1))];
} };
};
var f$340 = fix$451.$f;
t$450 = ((v$429 <= ssize$339)?"":(SmlPrims.concat([SmlPrims.implode(f$340(SmlPrims.chk_ovf_i32(v$429 - ssize$339))),["",null]])));
t$452 = (t$450 + v$130);
t$453 = [t$452,v$131];
t$454 = t$453;
};
return [1,t$454];
};
 break; }default: {var v$133 = v$120[1];
var v$134 = v$133[0];
var v$135 = v$133[1];
return [0,[fix$435.$adjust(v$429,v$134),fix$435.$adjust(v$429,v$135)]];
} };
};
tools$Report$.adjust$103 = fix$435.$adjust;
var fix$436 = {};
fix$436.$lines0 = function(v$139,v$142){lab$lines0: while (true) {switch (v$139[0]) { case 1: {var v$154 = v$139[1];
return basis$List$.s$n$645([v$154,v$142]);
 break; }default: {var v$156 = v$139[1];
var v$157 = v$156[0];
var v$158 = v$156[1];
var t$437 = v$157;
var t$438 = fix$436.$lines0(v$158,v$142);
var v$139 = t$437;
var v$142 = t$438;
continue lab$lines0;
} };
};
};
var lines0$136 = fix$436.$lines0;
tools$Report$.decorate$164 = function(v$430,v$431){var rhs1$172 = function(obj$199){var include_text$180 = [true];
var space$181;
var n$343 = v$430.length;
var ssize$345 = "".length;
var fix$439 = {};
fix$439.$f = function(v$347){switch (v$347) { case 0: {return null;
 break; }default: {return [32,fix$439.$f(SmlPrims.chk_ovf_i32(v$347 - 1))];
} };
};
var f$346 = fix$439.$f;
space$181 = ((n$343 <= ssize$345)?"":(SmlPrims.concat([SmlPrims.implode(f$346(SmlPrims.chk_ovf_i32(n$343 - ssize$345))),["",null]])));
var t$440;
var v$196 = lines0$136(v$431,null);
if (v$196 == null) {t$440 = [v$430,null];
} else {var fix$441 = {};
fix$441.$map = function(v$357){if (v$357 == null) {return null;
} else {var v$358 = v$357;
var v$359 = v$358[0];
var v$360 = v$358[1];
var t$443;
var t$442;
if (include_text$180[0]) {(include_text$180[0] = false,0);
t$442 = (v$430 + v$359);
} else {t$442 = (space$181 + v$359);
};
t$443 = [t$442,fix$441.$map(v$360)];
return t$443;
};
};
var map$356 = fix$441.$map;
t$440 = (map$356(v$196));
};
return [1,t$440];
};
switch (v$431[0]) { case 1: {if (v$431[1] == null) {return [1,[v$430,null]];
} else {return rhs1$172(0);
};
 break; }default: {return rhs1$172(0);
} };
};
var fix$444 = {};
fix$444.$print = function(v$216){switch (v$216[0]) { case 1: {var v$227 = v$216[1];
var fix$449 = {};
fix$449.$map = function(v$371){if (v$371 == null) {return null;
} else {var v$372 = v$371;
var v$373 = v$372[0];
var v$374 = v$372[1];
return [basis$General$.print$156(v$373 + "\n"),fix$449.$map(v$374)];
};
};
var map$370 = fix$449.$map;
map$370(v$227);
return 0;
 break; }default: {var v$230 = v$216[1];
var v$231 = v$230[0];
var v$232 = v$230[1];
fix$444.$print(v$231);
return fix$444.$print(v$232);
} };
};
tools$Report$.print$213 = fix$444.$print;
var fix$445 = {};
fix$445.$print$ = function(v$236,v$239){switch (v$236[0]) { case 1: {var v$253 = v$236[1];
var fix$446 = {};
fix$446.$map = function(v$380){if (v$380 == null) {return null;
} else {var v$381 = v$380;
var v$382 = v$381[0];
var v$383 = v$381[1];
var t$448;
var t$447;
basis$TextIO$.output$101(v$239,v$382 + "\n");
t$447 = 0;
t$448 = [t$447,fix$446.$map(v$383)];
return t$448;
};
};
var map$379 = fix$446.$map;
map$379(v$253);
return 0;
 break; }default: {var v$257 = v$236[1];
var v$258 = v$257[0];
var v$259 = v$257[1];
fix$445.$print$(v$258,v$239);
return fix$445.$print$(v$259,v$239);
} };
};
tools$Report$.print$$233 = fix$445.$print$;
return 0;
})();
