if ((typeof(tools$Flags$$4)) == "undefined") {tools$Flags$$4 = {};
};
(function(){tools$Flags$$4.eq_bal$1628 = function(v$1630,v$1631){switch (v$1630) { case 0: {switch (v$1631) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1631) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1631) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
var fix$2266 = {};
fix$2266.$eq_tree = function(v$1636,v$1637,v$1633){lab$eq_tree: while (true) {var v$1634 = v$1633[0];
var v$1635 = v$1633[1];
if (v$1634 == null) {return (v$1635 == null)?true:false;
} else {if (v$1635 == null) {return false;
} else {var v$1638 = v$1634;
var v$1639 = v$1635;
if (v$1636([v$1638[0],v$1639[0]])) {if (v$1637([v$1638[1],v$1639[1]])) {if (fix$2266.$eq_tree(v$1636,v$1637,[v$1638[2],v$1639[2]])) {var t$2267 = v$1636;
var t$2268 = v$1637;
var t$2269 = [v$1638[3],v$1639[3]];
var v$1636 = t$2267;
var v$1637 = t$2268;
var v$1633 = t$2269;
continue lab$eq_tree;
} else {return false;
};
} else {return false;
};
} else {return false;
};
};
};
};
};
tools$Flags$$4.eq_tree$1632 = fix$2266.$eq_tree;
tools$Flags$$4.die$359 = function(s$362){return tools$Crash$.impossible$50("OrderFinMap." + s$362);
};
tools$Flags$$4.s$j$363 = function(v$2253,v$2254){return v$2253 < v$2254;
};
tools$Flags$$4.lt$370 = function(v$2255,v$2256){return v$2255 < v$2256;
};
tools$Flags$$4.eq$371 = function(v$380,v$381){return ((v$380 < v$381)?true:(v$381 < v$380))?false:true;
};
tools$Flags$$4.empty$387 = function(v$2265){return null;
};
tools$Flags$$4.singleton$388 = function(v$2257,v$2258){return [v$2257,v$2258,null,null,2];
};
tools$Flags$$4.isEmpty$395 = function(v$398){return (v$398 == null)?true:false;
};
tools$Flags$$4.lookup$403 = function(t$406,key$409){var fix$2270 = {};
fix$2270.$search = function(v$413){lab$search: while (true) {if (v$413 == null) {return [1];
} else {var v$430 = v$413;
var v$431 = v$430[0];
var v$432 = v$430[1];
var v$433 = v$430[2];
var v$434 = v$430[3];
if (key$409 < v$431) {var t$2271 = v$433;
var v$413 = t$2271;
continue lab$search;
} else {if (v$431 < key$409) {var t$2272 = v$434;
var v$413 = t$2272;
continue lab$search;
} else {return [0,v$432];
};
};
};
};
};
var search$410 = fix$2270.$search;
return search$410(t$406);
};
tools$Flags$$4.en$Impossible$435 = new String("Impossible");
tools$Flags$$4.impossible$436 = function(s$439){throw [tools$Flags$$4.en$Impossible$435,"OrderFinMap" + s$439];
};
var en$ALREADYTHERE$440 = new String("ALREADYTHERE");
var exn$ALREADYTHERE$440 = [en$ALREADYTHERE$440];
tools$Flags$$4.add$663 = function(v$672,v$673,v$674){try {var fix$2274 = {};
fix$2274.$ins = function(v$1749){if (v$1749 == null) {return [true,[v$672,v$673,null,null,2]];
} else {var v$1750 = v$1749;
var v$1751 = v$1750[0];
var v$1752 = v$1750[1];
var v$1753 = v$1750[2];
var v$1754 = v$1750[3];
var v$1755 = v$1750[4];
if (v$672 < v$1751) {var v$1757 = fix$2274.$ins(v$1753);
var v$1758 = v$1757[0];
var v$1759 = v$1757[1];
switch (v$1755) { case 2: {return v$1758?[true,[v$1751,v$1752,v$1759,v$1754,1]]:[false,[v$1751,v$1752,v$1759,v$1754,2]];
 break; }case 0: {return v$1758?[false,[v$1751,v$1752,v$1759,v$1754,2]]:[false,[v$1751,v$1752,v$1759,v$1754,0]];
 break; }default: {if (v$1758) {var v$1761;
if (v$1759 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMapAVLfinmap 1"];
} else {v$1761 = v$1759;
};
var v$1764 = v$1761[0];
var v$1765 = v$1761[1];
var v$1766 = v$1761[2];
var v$1767 = v$1761[3];
var v$1768 = v$1761[4];
var t$2275;
var v$2008 = 1;
switch (v$1768) { case 0: {switch (v$2008) { case 0: {t$2275 = true;
 break; }default: {t$2275 = false;
} };
 break; }case 1: {switch (v$2008) { case 1: {t$2275 = true;
 break; }default: {t$2275 = false;
} };
 break; }case 2: {switch (v$2008) { case 2: {t$2275 = true;
 break; }default: {t$2275 = false;
} };
 break; } };
if (t$2275) {return [false,[v$1764,v$1765,v$1766,[v$1751,v$1752,v$1767,v$1754,2],2]];
} else {var v$1776;
if (v$1767 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMapAVLfinmap 2"];
} else {v$1776 = v$1767;
};
var v$1779 = v$1776[0];
var v$1780 = v$1776[1];
var v$1781 = v$1776[2];
var v$1782 = v$1776[3];
var v$1783 = v$1776[4];
var t$2296 = false;
var t$2295;
var t$2294;
var t$2293 = v$1779;
var t$2292 = v$1780;
var t$2291;
var t$2290;
var t$2289 = v$1764;
var t$2288 = v$1765;
var t$2287 = v$1766;
var t$2286 = v$1781;
var t$2285;
var t$2284;
var v$2014 = 0;
switch (v$1783) { case 0: {switch (v$2014) { case 0: {t$2284 = true;
 break; }default: {t$2284 = false;
} };
 break; }case 1: {switch (v$2014) { case 1: {t$2284 = true;
 break; }default: {t$2284 = false;
} };
 break; }case 2: {switch (v$2014) { case 2: {t$2284 = true;
 break; }default: {t$2284 = false;
} };
 break; } };
t$2285 = (t$2284?1:2);
t$2290 = [t$2289,t$2288,t$2287,t$2286,t$2285];
t$2291 = t$2290;
var t$2283;
var t$2282;
var t$2281 = v$1751;
var t$2280 = v$1752;
var t$2279 = v$1782;
var t$2278 = v$1754;
var t$2277;
var t$2276;
var v$2018 = 1;
switch (v$1783) { case 0: {switch (v$2018) { case 0: {t$2276 = true;
 break; }default: {t$2276 = false;
} };
 break; }case 1: {switch (v$2018) { case 1: {t$2276 = true;
 break; }default: {t$2276 = false;
} };
 break; }case 2: {switch (v$2018) { case 2: {t$2276 = true;
 break; }default: {t$2276 = false;
} };
 break; } };
t$2277 = (t$2276?0:2);
t$2282 = [t$2281,t$2280,t$2279,t$2278,t$2277];
t$2283 = t$2282;
t$2294 = [t$2293,t$2292,t$2291,t$2283,2];
t$2295 = t$2294;
return [t$2296,t$2295];
};
} else {return [false,[v$1751,v$1752,v$1759,v$1754,1]];
};
} };
} else {if (v$1751 < v$672) {var v$1799 = fix$2274.$ins(v$1754);
var v$1800 = v$1799[0];
var v$1801 = v$1799[1];
switch (v$1755) { case 2: {return v$1800?[true,[v$1751,v$1752,v$1753,v$1801,0]]:[false,[v$1751,v$1752,v$1753,v$1801,2]];
 break; }case 1: {return v$1800?[false,[v$1751,v$1752,v$1753,v$1801,2]]:[false,[v$1751,v$1752,v$1753,v$1801,1]];
 break; }default: {if (v$1800) {var v$1803;
if (v$1801 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMapAVLfinmap 3"];
} else {v$1803 = v$1801;
};
var v$1806 = v$1803[0];
var v$1807 = v$1803[1];
var v$1808 = v$1803[2];
var v$1809 = v$1803[3];
var v$1810 = v$1803[4];
var t$2297;
var v$2028 = 0;
switch (v$1810) { case 0: {switch (v$2028) { case 0: {t$2297 = true;
 break; }default: {t$2297 = false;
} };
 break; }case 1: {switch (v$2028) { case 1: {t$2297 = true;
 break; }default: {t$2297 = false;
} };
 break; }case 2: {switch (v$2028) { case 2: {t$2297 = true;
 break; }default: {t$2297 = false;
} };
 break; } };
if (t$2297) {return [false,[v$1806,v$1807,[v$1751,v$1752,v$1753,v$1808,2],v$1809,2]];
} else {var v$1818;
if (v$1808 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMapAVLfinmap 4"];
} else {v$1818 = v$1808;
};
var v$1821 = v$1818[0];
var v$1822 = v$1818[1];
var v$1823 = v$1818[2];
var v$1824 = v$1818[3];
var v$1825 = v$1818[4];
var t$2318 = false;
var t$2317;
var t$2316;
var t$2315 = v$1821;
var t$2314 = v$1822;
var t$2313;
var t$2312;
var t$2311 = v$1751;
var t$2310 = v$1752;
var t$2309 = v$1753;
var t$2308 = v$1823;
var t$2307;
var t$2306;
var v$2034 = 0;
switch (v$1825) { case 0: {switch (v$2034) { case 0: {t$2306 = true;
 break; }default: {t$2306 = false;
} };
 break; }case 1: {switch (v$2034) { case 1: {t$2306 = true;
 break; }default: {t$2306 = false;
} };
 break; }case 2: {switch (v$2034) { case 2: {t$2306 = true;
 break; }default: {t$2306 = false;
} };
 break; } };
t$2307 = (t$2306?1:2);
t$2312 = [t$2311,t$2310,t$2309,t$2308,t$2307];
t$2313 = t$2312;
var t$2305;
var t$2304;
var t$2303 = v$1806;
var t$2302 = v$1807;
var t$2301 = v$1824;
var t$2300 = v$1809;
var t$2299;
var t$2298;
var v$2038 = 1;
switch (v$1825) { case 0: {switch (v$2038) { case 0: {t$2298 = true;
 break; }default: {t$2298 = false;
} };
 break; }case 1: {switch (v$2038) { case 1: {t$2298 = true;
 break; }default: {t$2298 = false;
} };
 break; }case 2: {switch (v$2038) { case 2: {t$2298 = true;
 break; }default: {t$2298 = false;
} };
 break; } };
t$2299 = (t$2298?0:2);
t$2304 = [t$2303,t$2302,t$2301,t$2300,t$2299];
t$2305 = t$2304;
t$2316 = [t$2315,t$2314,t$2313,t$2305,2];
t$2317 = t$2316;
return [t$2318,t$2317];
};
} else {return [false,[v$1751,v$1752,v$1753,v$1801,0]];
};
} };
} else {throw exn$ALREADYTHERE$440;
};
};
};
};
var ins$1748 = fix$2274.$ins;
return (ins$1748(v$674))[1];
} catch(v$2273) {return (function(ALREADYTHERE$671){var t$2319 = ALREADYTHERE$671;
if (t$2319[0] == en$ALREADYTHERE$440) {var fix$2320 = {};
fix$2320.$repl = function(v$1864){if (v$1864 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMapAVLupdate.repl"];
} else {var v$1867 = v$1864;
var v$1868 = v$1867[0];
var v$1869 = v$1867[1];
var v$1870 = v$1867[2];
var v$1871 = v$1867[3];
var v$1872 = v$1867[4];
return (v$672 < v$1868)?[v$1868,v$1869,fix$2320.$repl(v$1870),v$1871,v$1872]:((v$1868 < v$672)?[v$1868,v$1869,v$1870,fix$2320.$repl(v$1871),v$1872]:[v$1868,v$673,v$1870,v$1871,v$1872]);
};
};
var repl$1863 = fix$2320.$repl;
return repl$1863(v$674);
} else {throw ALREADYTHERE$671;
};
})(v$2273);
};
};
var fix$2321 = {};
fix$2321.$plus = function(v$693,v$694){lab$plus: while (true) {if (v$694 == null) {return v$693;
} else {var v$688 = v$694;
var v$689 = v$688[0];
var v$690 = v$688[1];
var v$691 = v$688[2];
var v$692 = v$688[3];
var t$2322 = fix$2321.$plus(tools$Flags$$4.add$663(v$689,v$690,v$693),v$691);
var t$2323 = v$692;
var v$693 = t$2322;
var v$694 = t$2323;
continue lab$plus;
};
};
};
tools$Flags$$4.plus$675 = fix$2321.$plus;
var en$NOTFOUND$695 = new String("NOTFOUND");
var exn$NOTFOUND$695 = [en$NOTFOUND$695];
var delete$696 = function(v$981,v$982){var balance1$701 = function(v$704){if (v$704 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMap(balance1 on an empty map)"];
} else {var v$774 = v$704;
var v$775 = v$774[0];
var v$776 = v$774[1];
var v$777 = v$774[2];
var v$778 = v$774[3];
switch (v$774[4]) { case 1: {return [[v$775,v$776,v$777,v$778,2],true];
 break; }case 2: {return [[v$775,v$776,v$777,v$778,0],false];
 break; }default: {var v$761;
if (v$778 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMapAVLfinmap 5"];
} else {v$761 = v$778;
};
var v$762 = v$761[0];
var v$763 = v$761[1];
var v$764 = v$761[2];
var v$765 = v$761[3];
switch (v$761[4]) { case 1: {var v$748;
if (v$764 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMapAVLfinmap 6"];
} else {v$748 = v$764;
};
var v$749 = v$748[0];
var v$750 = v$748[1];
var v$751 = v$748[2];
var v$752 = v$748[3];
var v$753 = v$748[4];
var t$2343;
var t$2342;
var t$2341 = v$749;
var t$2340 = v$750;
var t$2339;
var t$2338;
var t$2337 = v$775;
var t$2336 = v$776;
var t$2335 = v$777;
var t$2334 = v$751;
var t$2333;
var t$2332;
var v$2056 = 0;
switch (v$753) { case 0: {switch (v$2056) { case 0: {t$2332 = true;
 break; }default: {t$2332 = false;
} };
 break; }case 1: {switch (v$2056) { case 1: {t$2332 = true;
 break; }default: {t$2332 = false;
} };
 break; }case 2: {switch (v$2056) { case 2: {t$2332 = true;
 break; }default: {t$2332 = false;
} };
 break; } };
t$2333 = (t$2332?1:2);
t$2338 = [t$2337,t$2336,t$2335,t$2334,t$2333];
t$2339 = t$2338;
var t$2331;
var t$2330;
var t$2329 = v$762;
var t$2328 = v$763;
var t$2327 = v$752;
var t$2326 = v$765;
var t$2325;
var t$2324;
var v$2058 = 1;
switch (v$753) { case 0: {switch (v$2058) { case 0: {t$2324 = true;
 break; }default: {t$2324 = false;
} };
 break; }case 1: {switch (v$2058) { case 1: {t$2324 = true;
 break; }default: {t$2324 = false;
} };
 break; }case 2: {switch (v$2058) { case 2: {t$2324 = true;
 break; }default: {t$2324 = false;
} };
 break; } };
t$2325 = (t$2324?0:2);
t$2330 = [t$2329,t$2328,t$2327,t$2326,t$2325];
t$2331 = t$2330;
t$2342 = [t$2341,t$2340,t$2339,t$2331,2];
t$2343 = t$2342;
return [t$2343,true];
 break; }case 2: {return [[v$762,v$763,[v$775,v$776,v$777,v$764,0],v$765,1],false];
 break; }default: {return [[v$762,v$763,[v$775,v$776,v$777,v$764,2],v$765,2],true];
} };
} };
};
};
var balance2$780 = function(v$783){if (v$783 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMap(balance2 on an empty map)"];
} else {var v$853 = v$783;
var v$854 = v$853[0];
var v$855 = v$853[1];
var v$856 = v$853[2];
var v$857 = v$853[3];
switch (v$853[4]) { case 0: {return [[v$854,v$855,v$856,v$857,2],true];
 break; }case 2: {return [[v$854,v$855,v$856,v$857,1],false];
 break; }default: {var v$840;
if (v$856 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMapAVLfinmap 7"];
} else {v$840 = v$856;
};
var v$841 = v$840[0];
var v$842 = v$840[1];
var v$843 = v$840[2];
var v$844 = v$840[3];
switch (v$840[4]) { case 0: {var v$827;
if (v$844 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMapAVLfinmap 8"];
} else {v$827 = v$844;
};
var v$828 = v$827[0];
var v$829 = v$827[1];
var v$830 = v$827[2];
var v$831 = v$827[3];
var v$832 = v$827[4];
var t$2363;
var t$2362;
var t$2361 = v$828;
var t$2360 = v$829;
var t$2359;
var t$2358;
var t$2357 = v$841;
var t$2356 = v$842;
var t$2355 = v$843;
var t$2354 = v$830;
var t$2353;
var t$2352;
var v$2068 = 0;
switch (v$832) { case 0: {switch (v$2068) { case 0: {t$2352 = true;
 break; }default: {t$2352 = false;
} };
 break; }case 1: {switch (v$2068) { case 1: {t$2352 = true;
 break; }default: {t$2352 = false;
} };
 break; }case 2: {switch (v$2068) { case 2: {t$2352 = true;
 break; }default: {t$2352 = false;
} };
 break; } };
t$2353 = (t$2352?1:2);
t$2358 = [t$2357,t$2356,t$2355,t$2354,t$2353];
t$2359 = t$2358;
var t$2351;
var t$2350;
var t$2349 = v$854;
var t$2348 = v$855;
var t$2347 = v$831;
var t$2346 = v$857;
var t$2345;
var t$2344;
var v$2066 = 1;
switch (v$832) { case 0: {switch (v$2066) { case 0: {t$2344 = true;
 break; }default: {t$2344 = false;
} };
 break; }case 1: {switch (v$2066) { case 1: {t$2344 = true;
 break; }default: {t$2344 = false;
} };
 break; }case 2: {switch (v$2066) { case 2: {t$2344 = true;
 break; }default: {t$2344 = false;
} };
 break; } };
t$2345 = (t$2344?0:2);
t$2350 = [t$2349,t$2348,t$2347,t$2346,t$2345];
t$2351 = t$2350;
t$2362 = [t$2361,t$2360,t$2359,t$2351,2];
t$2363 = t$2362;
return [t$2363,true];
 break; }case 2: {return [[v$841,v$842,v$843,[v$854,v$855,v$844,v$857,1],0],false];
 break; }default: {return [[v$841,v$842,v$843,[v$854,v$855,v$844,v$857,2],2],true];
} };
} };
};
};
var fix$2364 = {};
fix$2364.$remove_rightmost = function(v$862){if (v$862 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMap(remove_rightmost on empty map)"];
} else {var v$878 = v$862;
var v$879 = v$878[3];
if (v$879 == null) {return [v$878[2],v$878[0],v$878[1],true];
} else {var v$904 = v$878[0];
var v$905 = v$878[1];
var v$906 = v$878[2];
var v$907 = v$878[4];
var v$899 = fix$2364.$remove_rightmost(v$879);
var v$900 = v$899[0];
var v$901 = v$899[1];
var v$902 = v$899[2];
if (v$899[3]) {var v$896 = balance2$780([v$904,v$905,v$906,v$900,v$907]);
return [v$896[0],v$901,v$902,v$896[1]];
} else {return [[v$904,v$905,v$906,v$900,v$907],v$901,v$902,false];
};
};
};
};
var remove_rightmost$859 = fix$2364.$remove_rightmost;
var fix$2365 = {};
fix$2365.$del = function(v$911){lab$del: while (true) {if (v$911 == null) {throw exn$NOTFOUND$695;
} else {var v$971 = v$911;
var v$972 = v$971[0];
var v$973 = v$971[1];
var v$974 = v$971[2];
var v$975 = v$971[3];
var v$976 = v$971[4];
if (v$981 < v$972) {var v$932 = fix$2365.$del(v$974);
var v$933 = v$932[0];
if (v$932[1]) {return balance1$701([v$972,v$973,v$933,v$975,v$976]);
} else {return [[v$972,v$973,v$933,v$975,v$976],false];
};
} else {if (v$972 < v$981) {var v$946 = fix$2365.$del(v$975);
var v$947 = v$946[0];
if (v$946[1]) {return balance2$780([v$972,v$973,v$974,v$947,v$976]);
} else {return [[v$972,v$973,v$974,v$947,v$976],false];
};
} else {if (v$975 == null) {return [v$974,true];
} else {if (v$974 == null) {return [v$975,true];
} else {var v$966 = remove_rightmost$859(v$974);
var v$967 = v$966[0];
var v$968 = v$966[1];
var v$969 = v$966[2];
if (v$966[3]) {return balance1$701([v$968,v$969,v$967,v$975,v$976]);
} else {return [[v$968,v$969,v$967,v$975,v$976],false];
};
};
};
};
};
};
};
};
var del$908 = fix$2365.$del;
return (del$908(v$982))[0];
};
tools$Flags$$4.remove$983 = function(v$991,v$992){try {return [0,delete$696(v$991,v$992)];
} catch(v$2366) {return (function(NOTFOUND$990){var t$2367 = NOTFOUND$990;
if (t$2367[0] == en$NOTFOUND$695) {return [1];
} else {throw NOTFOUND$990;
};
})(v$2366);
};
};
tools$Flags$$4.delete$993 = function(v$1001,v$1002){try {return delete$696(v$1001,v$1002);
} catch(v$2368) {return (function(NOTFOUND$1000){var t$2369 = NOTFOUND$1000;
if (t$2369[0] == en$NOTFOUND$695) {return v$1002;
} else {throw NOTFOUND$1000;
};
})(v$2368);
};
};
tools$Flags$$4.dom$1003 = function(m$1006){var fix$2370 = {};
fix$2370.$dom$ = function(v$1010,v$1013){lab$dom$: while (true) {if (v$1010 == null) {return v$1013;
} else {var v$1025 = v$1010;
var v$1026 = v$1025[0];
var v$1027 = v$1025[2];
var v$1028 = v$1025[3];
var t$2371 = v$1027;
var t$2372 = [v$1026,fix$2370.$dom$(v$1028,v$1013)];
var v$1010 = t$2371;
var v$1013 = t$2372;
continue lab$dom$;
};
};
};
var dom$$1007 = fix$2370.$dom$;
return dom$$1007(m$1006,null);
};
tools$Flags$$4.range$1030 = function(m$1033){var fix$2373 = {};
fix$2373.$ran = function(v$1037,v$1040){lab$ran: while (true) {if (v$1037 == null) {return v$1040;
} else {var v$1052 = v$1037;
var v$1053 = v$1052[1];
var v$1054 = v$1052[2];
var v$1055 = v$1052[3];
var t$2374 = v$1054;
var t$2375 = [v$1053,fix$2373.$ran(v$1055,v$1040)];
var v$1037 = t$2374;
var v$1040 = t$2375;
continue lab$ran;
};
};
};
var ran$1034 = fix$2373.$ran;
return ran$1034(m$1033,null);
};
tools$Flags$$4.list$1057 = function(m$1060){var fix$2376 = {};
fix$2376.$li = function(v$1064,v$1067){lab$li: while (true) {if (v$1064 == null) {return v$1067;
} else {var v$1080 = v$1064;
var v$1081 = v$1080[0];
var v$1082 = v$1080[1];
var v$1083 = v$1080[2];
var v$1084 = v$1080[3];
var t$2377 = v$1083;
var t$2378 = [[v$1081,v$1082],fix$2376.$li(v$1084,v$1067)];
var v$1064 = t$2377;
var v$1067 = t$2378;
continue lab$li;
};
};
};
var li$1061 = fix$2376.$li;
return li$1061(m$1060,null);
};
var fix$2379 = {};
fix$2379.$composemap = function(f$1089,t$1092){if (t$1092 == null) {return null;
} else {var v$1103 = t$1092;
var v$1104 = v$1103[0];
var v$1105 = v$1103[1];
var v$1106 = v$1103[2];
var v$1107 = v$1103[3];
var v$1108 = v$1103[4];
var l$$1102 = fix$2379.$composemap(f$1089,v$1106);
return [v$1104,f$1089(v$1105),l$$1102,fix$2379.$composemap(f$1089,v$1107),v$1108];
};
};
tools$Flags$$4.composemap$1086 = fix$2379.$composemap;
var fix$2380 = {};
fix$2380.$ComposeMap = function(f$1112,t$1115){if (t$1115 == null) {return null;
} else {var v$1126 = t$1115;
var v$1127 = v$1126[0];
var v$1128 = v$1126[1];
var v$1129 = v$1126[2];
var v$1130 = v$1126[3];
var v$1131 = v$1126[4];
var l$$1125 = fix$2380.$ComposeMap(f$1112,v$1129);
return [v$1127,f$1112([v$1127,v$1128]),l$$1125,fix$2380.$ComposeMap(f$1112,v$1130),v$1131];
};
};
tools$Flags$$4.ComposeMap$1109 = fix$2380.$ComposeMap;
tools$Flags$$4.fold$1132 = function(f$1135,e$1138,t$1141){var fix$2381 = {};
fix$2381.$fold$ = function(v$1145,v$1148){lab$fold$: while (true) {if (v$1145 == null) {return v$1148;
} else {var v$1160 = v$1145;
var v$1161 = v$1160[1];
var v$1162 = v$1160[2];
var v$1163 = v$1160[3];
var t$2382 = v$1163;
var t$2383 = f$1135([v$1161,fix$2381.$fold$(v$1162,v$1148)]);
var v$1145 = t$2382;
var v$1148 = t$2383;
continue lab$fold$;
};
};
};
var fold$$1142 = fix$2381.$fold$;
return fold$$1142(t$1141,e$1138);
};
tools$Flags$$4.Fold$1165 = function(f$1168,e$1171,t$1174){var fix$2384 = {};
fix$2384.$fold$ = function(v$1178,v$1181){lab$fold$: while (true) {if (v$1178 == null) {return v$1181;
} else {var v$1194 = v$1178;
var v$1195 = v$1194[0];
var v$1196 = v$1194[1];
var v$1197 = v$1194[2];
var v$1198 = v$1194[3];
var t$2385 = v$1198;
var t$2386 = f$1168([[v$1195,v$1196],fix$2384.$fold$(v$1197,v$1181)]);
var v$1178 = t$2385;
var v$1181 = t$2386;
continue lab$fold$;
};
};
};
var fold$$1175 = fix$2384.$fold$;
return fold$$1175(t$1174,e$1171);
};
tools$Flags$$4.filter$1200 = function(f$1203,t$1206){var fix$2387 = {};
fix$2387.$fold$ = function(v$2115,v$2116){lab$fold$: while (true) {if (v$2115 == null) {return v$2116;
} else {var v$2117 = v$2115;
var v$2118 = v$2117[0];
var v$2119 = v$2117[1];
var v$2120 = v$2117[2];
var v$2121 = v$2117[3];
var t$2389 = v$2121;
var t$2388;
var v$2246 = fix$2387.$fold$(v$2120,v$2116);
t$2388 = ((f$1203([v$2118,v$2119]))?(tools$Flags$$4.add$663(v$2118,v$2119,v$2246)):v$2246);
var t$2390 = t$2389;
var t$2391 = t$2388;
var v$2115 = t$2390;
var v$2116 = t$2391;
continue lab$fold$;
};
};
};
var fold$$2114 = fix$2387.$fold$;
return fold$$2114(t$1206,tools$Flags$$4.empty$387(0));
};
var fix$2392 = {};
fix$2392.$addList = function(v$1223,v$1226){lab$addList: while (true) {if (v$1223 == null) {return v$1226;
} else {var v$1238 = v$1223;
var v$1239 = v$1238[0];
var v$1240 = v$1239[0];
var v$1241 = v$1239[1];
var v$1242 = v$1238[1];
var t$2393 = v$1242;
var t$2394 = tools$Flags$$4.add$663(v$1240,v$1241,v$1226);
var v$1223 = t$2393;
var v$1226 = t$2394;
continue lab$addList;
};
};
};
tools$Flags$$4.addList$1220 = fix$2392.$addList;
tools$Flags$$4.fromList$1244 = function(l$1247){return tools$Flags$$4.addList$1220(l$1247,tools$Flags$$4.empty$387(0));
};
tools$Flags$$4.fromSortedList$1248 = function(l$1251){var fix$2395 = {};
fix$2395.$build = function(v$1280,v$2259){switch (v$1280) { case 0: {return [v$2259,null];
 break; }default: {var n$$1282 = SmlPrims.div_i32(v$1280,2,CompilerInitial.exn$Div$40);
var v$1313 = fix$2395.$build(n$$1282,v$2259);
var v$1314 = v$1313[0];
var v$1315 = v$1313[1];
var v$1296;
if (v$1314 == null) {throw [tools$Flags$$4.en$Impossible$435,"OrderFinMapbuild"];
} else {var v$1308 = v$1314;
var v$1309 = v$1308[0];
v$1296 = [v$1309[0],v$1309[1],v$1308[1]];
};
var v$1297 = v$1296[0];
var v$1298 = v$1296[1];
var v$1299 = v$1296[2];
var v$1293 = fix$2395.$build(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$1280 - n$$1282)) - 1),v$1299);
return [v$1293[0],[v$1297,v$1298,v$1315,v$1293[1]]];
} };
};
var build$1269 = fix$2395.$build;
var fix$2396 = {};
fix$2396.$mk_avl = function(v$1331){if (v$1331 == null) {return [null,0];
} else {var v$1360 = v$1331;
var v$1361 = v$1360[0];
var v$1362 = v$1360[1];
var v$1363 = v$1360[2];
var v$1364 = v$1360[3];
var v$1357 = fix$2396.$mk_avl(v$1363);
var v$1358 = v$1357[0];
var v$1359 = v$1357[1];
var v$1354 = fix$2396.$mk_avl(v$1364);
var v$1355 = v$1354[0];
var v$1356 = v$1354[1];
return [[v$1361,v$1362,v$1358,v$1355,(v$1359 == v$1356)?2:((v$1359 > v$1356)?1:0)],SmlPrims.chk_ovf_i32(1 + ((v$1359 > v$1356)?v$1359:v$1356))];
};
};
var mk_avl$1328 = fix$2396.$mk_avl;
var t$2405;
var t$2404 = mk_avl$1328;
var t$2403;
var t$2402;
var t$2401 = build$1269;
var t$2400;
var fix$2397 = {};
fix$2397.$acc = function(v$1934,v$1935){lab$acc: while (true) {if (v$1934 == null) {return v$1935;
} else {var v$1936 = v$1934;
var v$1937 = v$1936[1];
var t$2398 = v$1937;
var t$2399 = SmlPrims.chk_ovf_i32(v$1935 + 1);
var v$1934 = t$2398;
var v$1935 = t$2399;
continue lab$acc;
};
};
};
var acc$1933 = fix$2397.$acc;
t$2400 = (acc$1933(l$1251,0));
t$2402 = (t$2401(t$2400,l$1251));
t$2403 = t$2402[1];
t$2405 = (t$2404(t$2403));
return t$2405[0];
};
tools$Flags$$4.mergeMap$1373 = function(f$1376,t1$1379,t2$1382){var fix$2406 = {};
fix$2406.$merge = function(v$1403,v$2260){if (v$1403 == null) {return v$2260;
} else {if (v$2260 == null) {return v$1403;
} else {var v$1414 = v$1403;
var v$1415 = v$1414[0];
var v$1416 = v$1415[0];
var v$1417 = v$1415[1];
var v$1418 = v$1414[1];
var v$1419 = v$2260;
var v$1420 = v$1419[0];
var v$1421 = v$1420[0];
var v$1422 = v$1420[1];
var v$1423 = v$1419[1];
return (v$1416 < v$1421)?[[v$1416,v$1417],fix$2406.$merge(v$1418,v$2260)]:((v$1421 < v$1416)?[[v$1421,v$1422],fix$2406.$merge(v$1403,v$1423)]:[[v$1416,f$1376([v$1417,v$1422])],fix$2406.$merge(v$1418,v$1423)]);
};
};
};
var merge$1383 = fix$2406.$merge;
var t$2417 = tools$Flags$$4.fromSortedList$1248;
var t$2416;
var t$2415 = merge$1383;
var t$2414;
var fix$2411 = {};
fix$2411.$li = function(v$2124,v$2125){lab$li: while (true) {if (v$2124 == null) {return v$2125;
} else {var v$2126 = v$2124;
var v$2127 = v$2126[0];
var v$2128 = v$2126[1];
var v$2129 = v$2126[2];
var v$2130 = v$2126[3];
var t$2412 = v$2129;
var t$2413 = [[v$2127,v$2128],fix$2411.$li(v$2130,v$2125)];
var v$2124 = t$2412;
var v$2125 = t$2413;
continue lab$li;
};
};
};
var li$2123 = fix$2411.$li;
t$2414 = (li$2123(t1$1379,null));
var t$2410;
var fix$2407 = {};
fix$2407.$li = function(v$2133,v$2134){lab$li: while (true) {if (v$2133 == null) {return v$2134;
} else {var v$2135 = v$2133;
var v$2136 = v$2135[0];
var v$2137 = v$2135[1];
var v$2138 = v$2135[2];
var v$2139 = v$2135[3];
var t$2408 = v$2138;
var t$2409 = [[v$2136,v$2137],fix$2407.$li(v$2139,v$2134)];
var v$2133 = t$2408;
var v$2134 = t$2409;
continue lab$li;
};
};
};
var li$2132 = fix$2407.$li;
t$2410 = (li$2132(t2$1382,null));
t$2416 = (t$2415(t$2414,t$2410));
return t$2417(t$2416);
};
var fix$2418 = {};
fix$2418.$oneForWhich = function(f$1427,t$1430){lab$oneForWhich: while (true) {if (t$1430 == null) {return [1];
} else {var v$1450 = t$1430;
var v$1451 = v$1450[0];
var v$1452 = v$1450[1];
var v$1453 = v$1450[2];
var v$1454 = v$1450[3];
if (f$1427([v$1451,v$1452])) {return [0,[v$1451,v$1452]];
} else {var v$1447 = fix$2418.$oneForWhich(f$1427,v$1453);
switch (v$1447[0]) { case 0: {var v$1449 = v$1447[1];
return [0,v$1449];
 break; }default: {var t$2419 = f$1427;
var t$2420 = v$1454;
var f$1427 = t$2419;
var t$1430 = t$2420;
continue lab$oneForWhich;
} };
};
};
};
};
tools$Flags$$4.oneForWhich$1424 = fix$2418.$oneForWhich;
tools$Flags$$4.en$Restrict$1455 = new String("Restrict");
tools$Flags$$4.restrict$1456 = function(v$1475,v$1476,v$1477){var fix$2421 = {};
fix$2421.$foldl = function(v$1944,v$1945){if (v$1945 == null) {return v$1944;
} else {var v$1946 = v$1945;
var v$1947 = v$1946[0];
var v$1948 = v$1946[1];
var t$2426 = fix$2421.$foldl;
var t$2425;
var v$2152;
var fix$2422 = {};
fix$2422.$search = function(v$2156){lab$search: while (true) {if (v$2156 == null) {return [1];
} else {var v$2157 = v$2156;
var v$2158 = v$2157[0];
var v$2159 = v$2157[1];
var v$2160 = v$2157[2];
var v$2161 = v$2157[3];
if (v$1947 < v$2158) {var t$2423 = v$2160;
var v$2156 = t$2423;
continue lab$search;
} else {if (v$2158 < v$1947) {var t$2424 = v$2161;
var v$2156 = t$2424;
continue lab$search;
} else {return [0,v$2159];
};
};
};
};
};
var search$2155 = fix$2422.$search;
v$2152 = (search$2155(v$1476));
switch (v$2152[0]) { case 0: {var v$2162 = v$2152[1];
t$2425 = (tools$Flags$$4.add$663(v$1947,v$2162,v$1944));
 break; }default: {throw [tools$Flags$$4.en$Restrict$1455,v$1475(v$1947)];
} };
return t$2426(t$2425,v$1948);
};
};
var foldl$1943 = fix$2421.$foldl;
return foldl$1943(tools$Flags$$4.empty$387(0),v$1477);
};
tools$Flags$$4.enrich$1478 = function(en$1481,v$1485){var v$1506 = v$1485[0];
var v$1507 = v$1485[1];
var fix$2427 = {};
fix$2427.$fold$ = function(v$2167,v$2168){if (v$2167 == null) {return v$2168;
} else {var v$2169 = v$2167;
var v$2170 = v$2169[0];
var v$2171 = v$2169[1];
var v$2172 = v$2169[2];
var v$2173 = v$2169[3];
var t$2433 = fix$2427.$fold$;
var t$2432 = v$2173;
var t$2431;
if (fix$2427.$fold$(v$2172,v$2168)) {var v$2236;
var fix$2428 = {};
fix$2428.$search = function(v$2238){lab$search: while (true) {if (v$2238 == null) {return [1];
} else {var v$2239 = v$2238;
var v$2240 = v$2239[0];
var v$2241 = v$2239[1];
var v$2242 = v$2239[2];
var v$2243 = v$2239[3];
if (v$2170 < v$2240) {var t$2429 = v$2242;
var v$2238 = t$2429;
continue lab$search;
} else {if (v$2240 < v$2170) {var t$2430 = v$2243;
var v$2238 = t$2430;
continue lab$search;
} else {return [0,v$2241];
};
};
};
};
};
var search$2237 = fix$2428.$search;
v$2236 = (search$2237(v$1506));
switch (v$2236[0]) { case 0: {var v$2244 = v$2236[1];
t$2431 = (en$1481([v$2244,v$2171]));
 break; }default: {t$2431 = false;
} };
} else {t$2431 = false;
};
return t$2433(t$2432,t$2431);
};
};
var fold$$2166 = fix$2427.$fold$;
return fold$$2166(v$1507,true);
};
tools$Flags$$4.layoutMap$1508 = function(v$1541,v$1543,v$1542,v$1540){return function(layoutDom$1517){return function(layoutRan$1520){return function(m$1523){var t$2441;
var t$2437;
var l$1950;
var fix$2434 = {};
fix$2434.$li = function(v$2185,v$2186){lab$li: while (true) {if (v$2185 == null) {return v$2186;
} else {var v$2187 = v$2185;
var v$2188 = v$2187[0];
var v$2189 = v$2187[1];
var v$2190 = v$2187[2];
var v$2191 = v$2187[3];
var t$2435 = v$2190;
var t$2436 = [[v$2188,v$2189],fix$2434.$li(v$2191,v$2186)];
var v$2185 = t$2435;
var v$2186 = t$2436;
continue lab$li;
};
};
};
var li$2184 = fix$2434.$li;
l$1950 = (li$2184(m$1523,null));
var fix$2438 = {};
fix$2438.$map = function(v$1952){if (v$1952 == null) {return null;
} else {var v$1953 = v$1952;
var v$1954 = v$1953[0];
var v$1955 = v$1953[1];
var t$2440;
var t$2439;
var v$2193 = v$1954[0];
var v$2194 = v$1954[1];
t$2439 = [0,[[layoutDom$1517(v$2193),[layoutRan$1520(v$2194),null]],[0,v$1541],"",3,""]];
t$2440 = [t$2439,fix$2438.$map(v$1955)];
return t$2440;
};
};
var map$1951 = fix$2438.$map;
t$2437 = (map$1951(l$1950));
t$2441 = [t$2437,[0,v$1542],v$1543,3,v$1540];
return [0,t$2441];
};
};
};
};
tools$Flags$$4.reportMap$1544 = function(f$1547,t$1550){var t$2447 = tools$Report$.flatten$78;
var t$2445;
var l$1957;
var fix$2442 = {};
fix$2442.$li = function(v$2197,v$2198){lab$li: while (true) {if (v$2197 == null) {return v$2198;
} else {var v$2199 = v$2197;
var v$2200 = v$2199[0];
var v$2201 = v$2199[1];
var v$2202 = v$2199[2];
var v$2203 = v$2199[3];
var t$2443 = v$2202;
var t$2444 = [[v$2200,v$2201],fix$2442.$li(v$2203,v$2198)];
var v$2197 = t$2443;
var v$2198 = t$2444;
continue lab$li;
};
};
};
var li$2196 = fix$2442.$li;
l$1957 = (li$2196(t$1550,null));
var fix$2446 = {};
fix$2446.$map = function(v$1959){if (v$1959 == null) {return null;
} else {var v$1960 = v$1959;
var v$1961 = v$1960[0];
var v$1962 = v$1960[1];
return [f$1547(v$1961),fix$2446.$map(v$1962)];
};
};
var map$1958 = fix$2446.$map;
t$2445 = (map$1958(l$1957));
return t$2447(t$2445);
};
tools$Flags$$4.reportMapSORTED$1551 = function(f$1963,t$1964){var t$2453 = tools$Report$.flatten$78;
var t$2451;
var l$1966;
var fix$2448 = {};
fix$2448.$li = function(v$2206,v$2207){lab$li: while (true) {if (v$2206 == null) {return v$2207;
} else {var v$2208 = v$2206;
var v$2209 = v$2208[0];
var v$2210 = v$2208[1];
var v$2211 = v$2208[2];
var v$2212 = v$2208[3];
var t$2449 = v$2211;
var t$2450 = [[v$2209,v$2210],fix$2448.$li(v$2212,v$2207)];
var v$2206 = t$2449;
var v$2207 = t$2450;
continue lab$li;
};
};
};
var li$2205 = fix$2448.$li;
l$1966 = (li$2205(t$1964,null));
var fix$2452 = {};
fix$2452.$map = function(v$1968){if (v$1968 == null) {return null;
} else {var v$1969 = v$1968;
var v$1970 = v$1969[0];
var v$1971 = v$1969[1];
return [f$1963(v$1970),fix$2452.$map(v$1971)];
};
};
var map$1967 = fix$2452.$map;
t$2451 = (map$1967(l$1966));
return t$2453(t$2451);
};
tools$Flags$$4.pu_bal$1552 = pickle$pickle$.enumGen$2149(function(v$1972){var v$1973 = v$1972[0];
var v$1974 = v$1972[1];
switch (v$1973) { case 0: {switch (v$1974) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1974) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1974) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderFinMap.bal",[1,[2,[0,null]]]]);
tools$Flags$$4.pu$1553 = function(pu_dom$1556,pu_r$1559){var fun_E$1568;
var v$2263 = null;
fun_E$1568 = (function(v$2264){return pickle$pickle$.con0$1979(v$2263,v$2264);
});
return pickle$pickle$.dataGen$1479(["OrderFinMap.map",function(v$1977){return (v$1977 == null)?0:1;
},[fun_E$1568,[function(pu$1978){return pickle$pickle$.con1$2005(function(v$1979){var v$1980 = v$1979[0];
return [v$1980[0],v$1980[1],v$1980[2],v$1980[3],v$1979[1]];
},function(v$1981){if (v$1981 == null) {return tools$Crash$.impossible$50("OrderFinMap.pu.fun_N");
} else {var v$1982 = v$1981;
return [[v$1982[0],v$1982[1],v$1982[2],v$1982[3]],v$1982[4]];
};
},pickle$pickle$.pairGen0$974(pickle$pickle$.tup4Gen0$2368(pu_dom$1556,pu_r$1559,pu$1978,pu$1978),tools$Flags$$4.pu_bal$1552));
},null]]]);
};
return 0;
})();