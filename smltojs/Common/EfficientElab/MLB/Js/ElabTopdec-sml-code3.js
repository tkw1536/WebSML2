if ((typeof(basics$ElabTopdec$$3)) == "undefined") {basics$ElabTopdec$$3 = {};
};
(function(){basics$ElabTopdec$$3.eq_bal$2040 = function(v$2042,v$2043){switch (v$2042) { case 0: {switch (v$2043) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$2043) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$2043) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
basics$ElabTopdec$$3.s$j$1148 = function(v$1153,v$1154){return basics$ElabTopdec$$2.lt$1109(v$1153,v$1154);
};
basics$ElabTopdec$$3.s$kk$1155 = function(v$1164,v$1165){return ((basics$ElabTopdec$$2.lt$1109(v$1164,v$1165))?true:(basics$ElabTopdec$$2.lt$1109(v$1165,v$1164)))?false:true;
};
basics$ElabTopdec$$3.en$Impossible$1166 = new String("Impossible");
basics$ElabTopdec$$3.impossible$1167 = function(s$1170){var s$1171 = "Impossible.OrderSet." + s$1170;
basis$General$.print$156(s$1171);
throw [basics$ElabTopdec$$3.en$Impossible$1166,s$1171];
};
basics$ElabTopdec$$3.empty$1179 = null;
basics$ElabTopdec$$3.singleton$1180 = function(i$1183){return [i$1183,null,null,2];
};
var fix$2383 = {};
fix$2383.$size = function(v$1187){if (v$1187 == null) {return 0;
} else {var v$1194 = v$1187;
var v$1195 = v$1194[1];
var v$1196 = v$1194[2];
return SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(1 + (fix$2383.$size(v$1195)))) + (fix$2383.$size(v$1196)));
};
};
basics$ElabTopdec$$3.size$1184 = fix$2383.$size;
basics$ElabTopdec$$3.isEmpty$1197 = function(v$1200){return (v$1200 == null)?true:false;
};
basics$ElabTopdec$$3.member$1205 = function(i$1208,s$1211){var fix$2384 = {};
fix$2384.$search = function(v$1215){lab$search: while (true) {if (v$1215 == null) {return false;
} else {var v$1231 = v$1215;
var v$1232 = v$1231[0];
var v$1233 = v$1231[1];
var v$1234 = v$1231[2];
if (((basics$ElabTopdec$$2.lt$1109(i$1208,v$1232))?true:(basics$ElabTopdec$$2.lt$1109(v$1232,i$1208)))?false:true) {return true;
} else {if (basics$ElabTopdec$$2.lt$1109(i$1208,v$1232)) {var t$2385 = v$1233;
var v$1215 = t$2385;
continue lab$search;
} else {var t$2386 = v$1234;
var v$1215 = t$2386;
continue lab$search;
};
};
};
};
};
var search$1212 = fix$2384.$search;
return search$1212(s$1211);
};
basics$ElabTopdec$$3.eq$1235 = function(s1$1238,s2$1241){if ((basics$ElabTopdec$$3.size$1184(s1$1238)) == (basics$ElabTopdec$$3.size$1184(s2$1241))) {var fix$2387 = {};
fix$2387.$eq$ = function(v$1249){lab$eq$: while (true) {if (v$1249 == null) {return true;
} else {var v$1265 = v$1249;
var v$1266 = v$1265[0];
var v$1267 = v$1265[1];
var v$1268 = v$1265[2];
if (basics$ElabTopdec$$3.member$1205(v$1266,s2$1241)) {if (fix$2387.$eq$(v$1267)) {var t$2388 = v$1268;
var v$1249 = t$2388;
continue lab$eq$;
} else {return false;
};
} else {return false;
};
};
};
};
var eq$$1246 = fix$2387.$eq$;
return eq$$1246(s1$1238);
} else {return false;
};
};
basics$ElabTopdec$$3.en$ALREADYTHERE$1269 = new String("ALREADYTHERE");
basics$ElabTopdec$$3.exn$ALREADYTHERE$1269 = [basics$ElabTopdec$$3.en$ALREADYTHERE$1269];
basics$ElabTopdec$$3.insert$1270 = function(k0$1273,t$1276){var fix$2389 = {};
fix$2389.$ins = function(v$1280){if (v$1280 == null) {return [true,[k0$1273,null,null,2]];
} else {var v$1433 = v$1280;
var v$1434 = v$1433[0];
var v$1435 = v$1433[1];
var v$1436 = v$1433[2];
var v$1437 = v$1433[3];
if (((basics$ElabTopdec$$2.lt$1109(k0$1273,v$1434))?true:(basics$ElabTopdec$$2.lt$1109(v$1434,k0$1273)))?false:true) {throw basics$ElabTopdec$$3.exn$ALREADYTHERE$1269;
} else {if (basics$ElabTopdec$$2.lt$1109(k0$1273,v$1434)) {var v$1362 = fix$2389.$ins(v$1435);
var v$1363 = v$1362[0];
var v$1364 = v$1362[1];
switch (v$1437) { case 2: {return v$1363?[true,[v$1434,v$1364,v$1436,1]]:[false,[v$1434,v$1364,v$1436,2]];
 break; }case 0: {return v$1363?[false,[v$1434,v$1364,v$1436,2]]:[false,[v$1434,v$1364,v$1436,0]];
 break; }default: {if (v$1363) {var v$1350;
if (v$1364 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree01!");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.empty tree01!"];
} else {v$1350 = v$1364;
};
var v$1351 = v$1350[0];
var v$1352 = v$1350[1];
var v$1353 = v$1350[2];
var v$1354 = v$1350[3];
var t$2392;
var v$2268 = 1;
switch (v$1354) { case 0: {switch (v$2268) { case 0: {t$2392 = true;
 break; }default: {t$2392 = false;
} };
 break; }case 1: {switch (v$2268) { case 1: {t$2392 = true;
 break; }default: {t$2392 = false;
} };
 break; }case 2: {switch (v$2268) { case 2: {t$2392 = true;
 break; }default: {t$2392 = false;
} };
 break; } };
if (t$2392) {return [false,[v$1351,v$1352,[v$1434,v$1353,v$1436,2],2]];
} else {var v$1338;
if (v$1353 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree02!");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.empty tree02!"];
} else {v$1338 = v$1353;
};
var v$1339 = v$1338[0];
var v$1340 = v$1338[1];
var v$1341 = v$1338[2];
var v$1342 = v$1338[3];
var t$2410 = false;
var t$2409;
var t$2408;
var t$2407 = v$1339;
var t$2406;
var t$2405;
var t$2404 = v$1351;
var t$2403 = v$1352;
var t$2402 = v$1340;
var t$2401;
var t$2400;
var v$2272 = 0;
switch (v$1342) { case 0: {switch (v$2272) { case 0: {t$2400 = true;
 break; }default: {t$2400 = false;
} };
 break; }case 1: {switch (v$2272) { case 1: {t$2400 = true;
 break; }default: {t$2400 = false;
} };
 break; }case 2: {switch (v$2272) { case 2: {t$2400 = true;
 break; }default: {t$2400 = false;
} };
 break; } };
t$2401 = (t$2400?1:2);
t$2405 = [t$2404,t$2403,t$2402,t$2401];
t$2406 = t$2405;
var t$2399;
var t$2398;
var t$2397 = v$1434;
var t$2396 = v$1341;
var t$2395 = v$1436;
var t$2394;
var t$2393;
var v$2274 = 1;
switch (v$1342) { case 0: {switch (v$2274) { case 0: {t$2393 = true;
 break; }default: {t$2393 = false;
} };
 break; }case 1: {switch (v$2274) { case 1: {t$2393 = true;
 break; }default: {t$2393 = false;
} };
 break; }case 2: {switch (v$2274) { case 2: {t$2393 = true;
 break; }default: {t$2393 = false;
} };
 break; } };
t$2394 = (t$2393?0:2);
t$2398 = [t$2397,t$2396,t$2395,t$2394];
t$2399 = t$2398;
t$2408 = [t$2407,t$2406,t$2399,2];
t$2409 = t$2408;
return [t$2410,t$2409];
};
} else {return [false,[v$1434,v$1364,v$1436,1]];
};
} };
} else {var v$1430 = fix$2389.$ins(v$1436);
var v$1431 = v$1430[0];
var v$1432 = v$1430[1];
switch (v$1437) { case 2: {return v$1431?[true,[v$1434,v$1435,v$1432,0]]:[false,[v$1434,v$1435,v$1432,2]];
 break; }case 1: {return v$1431?[false,[v$1434,v$1435,v$1432,2]]:[false,[v$1434,v$1435,v$1432,1]];
 break; }default: {if (v$1431) {var v$1418;
if (v$1432 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree03!");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.empty tree03!"];
} else {v$1418 = v$1432;
};
var v$1419 = v$1418[0];
var v$1420 = v$1418[1];
var v$1421 = v$1418[2];
var v$1422 = v$1418[3];
var t$2411;
var v$2280 = 0;
switch (v$1422) { case 0: {switch (v$2280) { case 0: {t$2411 = true;
 break; }default: {t$2411 = false;
} };
 break; }case 1: {switch (v$2280) { case 1: {t$2411 = true;
 break; }default: {t$2411 = false;
} };
 break; }case 2: {switch (v$2280) { case 2: {t$2411 = true;
 break; }default: {t$2411 = false;
} };
 break; } };
if (t$2411) {return [false,[v$1419,[v$1434,v$1435,v$1420,2],v$1421,2]];
} else {var v$1406;
if (v$1420 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree04!");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.empty tree04!"];
} else {v$1406 = v$1420;
};
var v$1407 = v$1406[0];
var v$1408 = v$1406[1];
var v$1409 = v$1406[2];
var v$1410 = v$1406[3];
var t$2429 = false;
var t$2428;
var t$2427;
var t$2426 = v$1407;
var t$2425;
var t$2424;
var t$2423 = v$1434;
var t$2422 = v$1435;
var t$2421 = v$1408;
var t$2420;
var t$2419;
var v$2284 = 0;
switch (v$1410) { case 0: {switch (v$2284) { case 0: {t$2419 = true;
 break; }default: {t$2419 = false;
} };
 break; }case 1: {switch (v$2284) { case 1: {t$2419 = true;
 break; }default: {t$2419 = false;
} };
 break; }case 2: {switch (v$2284) { case 2: {t$2419 = true;
 break; }default: {t$2419 = false;
} };
 break; } };
t$2420 = (t$2419?1:2);
t$2424 = [t$2423,t$2422,t$2421,t$2420];
t$2425 = t$2424;
var t$2418;
var t$2417;
var t$2416 = v$1419;
var t$2415 = v$1409;
var t$2414 = v$1421;
var t$2413;
var t$2412;
var v$2286 = 1;
switch (v$1410) { case 0: {switch (v$2286) { case 0: {t$2412 = true;
 break; }default: {t$2412 = false;
} };
 break; }case 1: {switch (v$2286) { case 1: {t$2412 = true;
 break; }default: {t$2412 = false;
} };
 break; }case 2: {switch (v$2286) { case 2: {t$2412 = true;
 break; }default: {t$2412 = false;
} };
 break; } };
t$2413 = (t$2412?0:2);
t$2417 = [t$2416,t$2415,t$2414,t$2413];
t$2418 = t$2417;
t$2427 = [t$2426,t$2425,t$2418,2];
t$2428 = t$2427;
return [t$2429,t$2428];
};
} else {return [false,[v$1434,v$1435,v$1432,0]];
};
} };
};
};
};
};
var ins$1277 = fix$2389.$ins;
try {return (ins$1277(t$1276))[1];
} catch(v$2390) {return (function(ALREADYTHERE$1444){var t$2391 = ALREADYTHERE$1444;
if (t$2391[0] == basics$ElabTopdec$$3.en$ALREADYTHERE$1269) {return t$1276;
} else {throw ALREADYTHERE$1444;
};
})(v$2390);
};
};
basics$ElabTopdec$$3.list$1445 = function(s$1448){var fix$2430 = {};
fix$2430.$f = function(v$1452,v$1455){lab$f: while (true) {if (v$1452 == null) {return v$1455;
} else {var v$1467 = v$1452;
var v$1468 = v$1467[0];
var v$1469 = v$1467[1];
var v$1470 = v$1467[2];
var t$2431 = v$1469;
var t$2432 = [v$1468,fix$2430.$f(v$1470,v$1455)];
var v$1452 = t$2431;
var v$1455 = t$2432;
continue lab$f;
};
};
};
var f$1449 = fix$2430.$f;
return f$1449(s$1448,null);
};
var fix$2433 = {};
fix$2433.$fromList = function(l$1475){lab$fromList: while (true) {if (l$1475 == null) {return basics$ElabTopdec$$3.empty$1179;
} else {var v$1482 = l$1475;
var v$1483 = v$1482[0];
var v$1484 = v$1482[1];
return basics$ElabTopdec$$3.insert$1270(v$1483,fix$2433.$fromList(v$1484));
};
};
};
basics$ElabTopdec$$3.fromList$1472 = fix$2433.$fromList;
var fix$2434 = {};
fix$2434.$union = function(s1$1488,s2$1491){lab$union: while (true) {if (s2$1491 == null) {return s1$1488;
} else {var v$1499 = s2$1491;
var v$1500 = v$1499[0];
var v$1501 = v$1499[1];
var v$1502 = v$1499[2];
var t$2435 = fix$2434.$union(basics$ElabTopdec$$3.insert$1270(v$1500,s1$1488),v$1501);
var t$2436 = v$1502;
var s1$1488 = t$2435;
var s2$1491 = t$2436;
continue lab$union;
};
};
};
basics$ElabTopdec$$3.union$1485 = fix$2434.$union;
var fix$2437 = {};
fix$2437.$addList = function(v$1506,v$1509){lab$addList: while (true) {if (v$1506 == null) {return v$1509;
} else {var v$1520 = v$1506;
var v$1521 = v$1520[0];
var v$1522 = v$1520[1];
var t$2438 = v$1522;
var t$2439 = basics$ElabTopdec$$3.insert$1270(v$1521,v$1509);
var v$1506 = t$2438;
var v$1509 = t$2439;
continue lab$addList;
};
};
};
basics$ElabTopdec$$3.addList$1503 = fix$2437.$addList;
basics$ElabTopdec$$3.en$NOTFOUND$1524 = new String("NOTFOUND");
basics$ElabTopdec$$3.exn$NOTFOUND$1524 = [basics$ElabTopdec$$3.en$NOTFOUND$1524];
basics$ElabTopdec$$3.remove$1525 = function(k0$1528,t$1531){var balance1$1532 = function(v$1535){if (v$1535 == null) {basis$General$.print$156("Impossible.OrderSet.(balance1 on an empty tree)");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.(balance1 on an empty tree)"];
} else {var v$1600 = v$1535;
var v$1601 = v$1600[0];
var v$1602 = v$1600[1];
var v$1603 = v$1600[2];
switch (v$1600[3]) { case 1: {return [[v$1601,v$1602,v$1603,2],true];
 break; }case 2: {return [[v$1601,v$1602,v$1603,0],false];
 break; }default: {var v$1588;
if (v$1603 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree11!");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.empty tree11!"];
} else {v$1588 = v$1603;
};
var v$1589 = v$1588[0];
var v$1590 = v$1588[1];
var v$1591 = v$1588[2];
switch (v$1588[3]) { case 1: {var v$1576;
if (v$1590 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree12!");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.empty tree12!"];
} else {v$1576 = v$1590;
};
var v$1577 = v$1576[0];
var v$1578 = v$1576[1];
var v$1579 = v$1576[2];
var v$1580 = v$1576[3];
var t$2456;
var t$2455;
var t$2454 = v$1577;
var t$2453;
var t$2452;
var t$2451 = v$1601;
var t$2450 = v$1602;
var t$2449 = v$1578;
var t$2448;
var t$2447;
var v$2298 = 0;
switch (v$1580) { case 0: {switch (v$2298) { case 0: {t$2447 = true;
 break; }default: {t$2447 = false;
} };
 break; }case 1: {switch (v$2298) { case 1: {t$2447 = true;
 break; }default: {t$2447 = false;
} };
 break; }case 2: {switch (v$2298) { case 2: {t$2447 = true;
 break; }default: {t$2447 = false;
} };
 break; } };
t$2448 = (t$2447?1:2);
t$2452 = [t$2451,t$2450,t$2449,t$2448];
t$2453 = t$2452;
var t$2446;
var t$2445;
var t$2444 = v$1589;
var t$2443 = v$1579;
var t$2442 = v$1591;
var t$2441;
var t$2440;
var v$2300 = 1;
switch (v$1580) { case 0: {switch (v$2300) { case 0: {t$2440 = true;
 break; }default: {t$2440 = false;
} };
 break; }case 1: {switch (v$2300) { case 1: {t$2440 = true;
 break; }default: {t$2440 = false;
} };
 break; }case 2: {switch (v$2300) { case 2: {t$2440 = true;
 break; }default: {t$2440 = false;
} };
 break; } };
t$2441 = (t$2440?0:2);
t$2445 = [t$2444,t$2443,t$2442,t$2441];
t$2446 = t$2445;
t$2455 = [t$2454,t$2453,t$2446,2];
t$2456 = t$2455;
return [t$2456,true];
 break; }case 2: {return [[v$1589,[v$1601,v$1602,v$1590,0],v$1591,1],false];
 break; }default: {return [[v$1589,[v$1601,v$1602,v$1590,2],v$1591,2],true];
} };
} };
};
};
var balance2$1605 = function(v$1608){if (v$1608 == null) {basis$General$.print$156("Impossible.OrderSet.(balance2 on an empty tree)");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.(balance2 on an empty tree)"];
} else {var v$1673 = v$1608;
var v$1674 = v$1673[0];
var v$1675 = v$1673[1];
var v$1676 = v$1673[2];
switch (v$1673[3]) { case 0: {return [[v$1674,v$1675,v$1676,2],true];
 break; }case 2: {return [[v$1674,v$1675,v$1676,1],false];
 break; }default: {var v$1661;
if (v$1675 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree21!");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.empty tree21!"];
} else {v$1661 = v$1675;
};
var v$1662 = v$1661[0];
var v$1663 = v$1661[1];
var v$1664 = v$1661[2];
switch (v$1661[3]) { case 0: {var v$1649;
if (v$1664 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree22!");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.empty tree22!"];
} else {v$1649 = v$1664;
};
var v$1650 = v$1649[0];
var v$1651 = v$1649[1];
var v$1652 = v$1649[2];
var v$1653 = v$1649[3];
var t$2473;
var t$2472;
var t$2471 = v$1650;
var t$2470;
var t$2469;
var t$2468 = v$1662;
var t$2467 = v$1663;
var t$2466 = v$1651;
var t$2465;
var t$2464;
var v$2310 = 0;
switch (v$1653) { case 0: {switch (v$2310) { case 0: {t$2464 = true;
 break; }default: {t$2464 = false;
} };
 break; }case 1: {switch (v$2310) { case 1: {t$2464 = true;
 break; }default: {t$2464 = false;
} };
 break; }case 2: {switch (v$2310) { case 2: {t$2464 = true;
 break; }default: {t$2464 = false;
} };
 break; } };
t$2465 = (t$2464?1:2);
t$2469 = [t$2468,t$2467,t$2466,t$2465];
t$2470 = t$2469;
var t$2463;
var t$2462;
var t$2461 = v$1674;
var t$2460 = v$1652;
var t$2459 = v$1676;
var t$2458;
var t$2457;
var v$2308 = 1;
switch (v$1653) { case 0: {switch (v$2308) { case 0: {t$2457 = true;
 break; }default: {t$2457 = false;
} };
 break; }case 1: {switch (v$2308) { case 1: {t$2457 = true;
 break; }default: {t$2457 = false;
} };
 break; }case 2: {switch (v$2308) { case 2: {t$2457 = true;
 break; }default: {t$2457 = false;
} };
 break; } };
t$2458 = (t$2457?0:2);
t$2462 = [t$2461,t$2460,t$2459,t$2458];
t$2463 = t$2462;
t$2472 = [t$2471,t$2470,t$2463,2];
t$2473 = t$2472;
return [t$2473,true];
 break; }case 2: {return [[v$1662,v$1663,[v$1674,v$1664,v$1676,1],0],false];
 break; }default: {return [[v$1662,v$1663,[v$1674,v$1664,v$1676,2],2],true];
} };
} };
};
};
var fix$2474 = {};
fix$2474.$remove_rightmost = function(v$1681){if (v$1681 == null) {basis$General$.print$156("Impossible.OrderSet.(remove_rightmost on empty tree)");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.(remove_rightmost on empty tree)"];
} else {var v$1695 = v$1681;
var v$1696 = v$1695[2];
if (v$1696 == null) {return [v$1695[1],v$1695[0],true];
} else {var v$1718 = v$1695[0];
var v$1719 = v$1695[1];
var v$1720 = v$1695[3];
var v$1714 = fix$2474.$remove_rightmost(v$1696);
var v$1715 = v$1714[0];
var v$1716 = v$1714[1];
if (v$1714[2]) {var v$1711 = balance2$1605([v$1718,v$1719,v$1715,v$1720]);
return [v$1711[0],v$1716,v$1711[1]];
} else {return [[v$1718,v$1719,v$1715,v$1720],v$1716,false];
};
};
};
};
var remove_rightmost$1678 = fix$2474.$remove_rightmost;
var fix$2475 = {};
fix$2475.$del = function(v$1724){lab$del: while (true) {if (v$1724 == null) {throw basics$ElabTopdec$$3.exn$NOTFOUND$1524;
} else {var v$1781 = v$1724;
var v$1782 = v$1781[0];
var v$1783 = v$1781[1];
var v$1784 = v$1781[2];
var v$1785 = v$1781[3];
if (basics$ElabTopdec$$2.lt$1109(k0$1528,v$1782)) {var v$1744 = fix$2475.$del(v$1783);
var v$1745 = v$1744[0];
if (v$1744[1]) {return balance1$1532([v$1782,v$1745,v$1784,v$1785]);
} else {return [[v$1782,v$1745,v$1784,v$1785],false];
};
} else {if (basics$ElabTopdec$$2.lt$1109(v$1782,k0$1528)) {var v$1758 = fix$2475.$del(v$1784);
var v$1759 = v$1758[0];
if (v$1758[1]) {return balance2$1605([v$1782,v$1783,v$1759,v$1785]);
} else {return [[v$1782,v$1783,v$1759,v$1785],false];
};
} else {if (v$1784 == null) {return [v$1783,true];
} else {if (v$1783 == null) {return [v$1784,true];
} else {var v$1777 = remove_rightmost$1678(v$1783);
var v$1778 = v$1777[0];
var v$1779 = v$1777[1];
if (v$1777[2]) {return balance1$1532([v$1779,v$1778,v$1784,v$1785]);
} else {return [[v$1779,v$1778,v$1784,v$1785],false];
};
};
};
};
};
};
};
};
var del$1721 = fix$2475.$del;
try {return (del$1721(t$1531))[0];
} catch(v$2476) {return (function(NOTFOUND$1792){var t$2477 = NOTFOUND$1792;
if (t$2477[0] == basics$ElabTopdec$$3.en$NOTFOUND$1524) {return t$1531;
} else {throw NOTFOUND$1792;
};
})(v$2476);
};
};
var fix$2478 = {};
fix$2478.$difference = function(s1$1796,s2$1799){lab$difference: while (true) {if (s1$1796 == null) {return null;
} else {if (s2$1799 == null) {return s1$1796;
} else {var v$1811 = s2$1799;
var v$1812 = v$1811[0];
var v$1813 = v$1811[1];
var v$1814 = v$1811[2];
var t$2479 = fix$2478.$difference(basics$ElabTopdec$$3.remove$1525(v$1812,s1$1796),v$1813);
var t$2480 = v$1814;
var s1$1796 = t$2479;
var s2$1799 = t$2480;
continue lab$difference;
};
};
};
};
basics$ElabTopdec$$3.difference$1793 = fix$2478.$difference;
basics$ElabTopdec$$3.intersect$1815 = function(s1$1818,s2$1821){var fix$2481 = {};
fix$2481.$inters = function(v$1825,v$1828){lab$inters: while (true) {if (v$1825 == null) {return v$1828;
} else {var v$1844 = v$1825;
var v$1845 = v$1844[0];
var v$1846 = v$1844[1];
var v$1847 = v$1844[2];
var t$2482 = v$1846;
var t$2483 = fix$2481.$inters(v$1847,(basics$ElabTopdec$$3.member$1205(v$1845,s2$1821))?(basics$ElabTopdec$$3.insert$1270(v$1845,v$1828)):v$1828);
var v$1825 = t$2482;
var v$1828 = t$2483;
continue lab$inters;
};
};
};
var inters$1822 = fix$2481.$inters;
return inters$1822(s1$1818,basics$ElabTopdec$$3.empty$1179);
};
basics$ElabTopdec$$3.partition$1849 = function(f$1852,s$1855){var fix$2484 = {};
fix$2484.$g = function(v$1859,v$1862){lab$g: while (true) {if (v$1859 == null) {return v$1862;
} else {var v$1880 = v$1859;
var v$1881 = v$1880[0];
var v$1882 = v$1880[1];
var v$1883 = v$1880[2];
var v$1885 = v$1862[0];
var v$1886 = v$1862[1];
var b$1875 = (f$1852(v$1881))?[basics$ElabTopdec$$3.insert$1270(v$1881,v$1885),v$1886]:[v$1885,basics$ElabTopdec$$3.insert$1270(v$1881,v$1886)];
var t$2485 = v$1883;
var t$2486 = fix$2484.$g(v$1882,b$1875);
var v$1859 = t$2485;
var v$1862 = t$2486;
continue lab$g;
};
};
};
var g$1856 = fix$2484.$g;
return g$1856(s$1855,[basics$ElabTopdec$$3.empty$1179,basics$ElabTopdec$$3.empty$1179]);
};
basics$ElabTopdec$$3.fold$1887 = function(f$1890,e$1893,t$1896){var fix$2487 = {};
fix$2487.$fold$ = function(v$1900,v$1903){lab$fold$: while (true) {if (v$1900 == null) {return v$1903;
} else {var v$1915 = v$1900;
var v$1916 = v$1915[0];
var v$1917 = v$1915[1];
var v$1918 = v$1915[2];
var t$2488 = v$1918;
var t$2489 = (f$1890(v$1916))(fix$2487.$fold$(v$1917,v$1903));
var v$1900 = t$2488;
var v$1903 = t$2489;
continue lab$fold$;
};
};
};
var fold$$1897 = fix$2487.$fold$;
return fold$$1897(t$1896,e$1893);
};
basics$ElabTopdec$$3.listmap$1920 = function(f$2185,l$2186){var fix$2490 = {};
fix$2490.$map = function(v$2188){if (v$2188 == null) {return null;
} else {var v$2189 = v$2188;
var v$2190 = v$2189[0];
var v$2191 = v$2189[1];
return [f$2185(v$2190),fix$2490.$map(v$2191)];
};
};
var map$2187 = fix$2490.$map;
return map$2187(l$2186);
};
basics$ElabTopdec$$3.map$1921 = function(f$1924,t$1927){var t$2496 = basics$ElabTopdec$$3.fromList$1472;
var t$2494;
var l$2193;
var fix$2491 = {};
fix$2491.$f = function(v$2201,v$2202){lab$f: while (true) {if (v$2201 == null) {return v$2202;
} else {var v$2205 = v$2201;
var v$2206 = v$2205[0];
var v$2207 = v$2205[1];
var v$2208 = v$2205[2];
var t$2492 = v$2207;
var t$2493 = [v$2206,fix$2491.$f(v$2208,v$2202)];
var v$2201 = t$2492;
var v$2202 = t$2493;
continue lab$f;
};
};
};
var f$2200 = fix$2491.$f;
l$2193 = (f$2200(t$1927,null));
var fix$2495 = {};
fix$2495.$map = function(v$2195){if (v$2195 == null) {return null;
} else {var v$2196 = v$2195;
var v$2197 = v$2196[0];
var v$2198 = v$2196[1];
return [f$1924(v$2197),fix$2495.$map(v$2198)];
};
};
var map$2194 = fix$2495.$map;
t$2494 = (map$2194(l$2193));
return t$2496(t$2494);
};
basics$ElabTopdec$$3.subst$1928 = function(v$1940,v$1941){return function(s$1935){if (basics$ElabTopdec$$3.member$1205(v$1941,s$1935)) {return basics$ElabTopdec$$3.insert$1270(v$1940,basics$ElabTopdec$$3.remove$1525(v$1941,s$1935));
} else {return s$1935;
};
};
};
basics$ElabTopdec$$3.apply$1942 = function(f$1945,s$1948){var fix$2497 = {};
fix$2497.$appl = function(v$1952){lab$appl: while (true) {if (v$1952 == null) {return 0;
} else {var v$1964 = v$1952;
var v$1965 = v$1964[0];
var v$1966 = v$1964[1];
var v$1967 = v$1964[2];
fix$2497.$appl(v$1966);
f$1945(v$1965);
var t$2498 = v$1967;
var v$1952 = t$2498;
continue lab$appl;
};
};
};
var appl$1949 = fix$2497.$appl;
return appl$1949(s$1948);
};
basics$ElabTopdec$$3.layoutSet$1968 = function(v$1987,v$1986,v$1985){return function(layoutItem$1976){return function(s$1979){var t$2499;
var v$1983 = [0,v$1986];
var t$2503;
var l$2211;
var fix$2500 = {};
fix$2500.$f = function(v$2219,v$2220){lab$f: while (true) {if (v$2219 == null) {return v$2220;
} else {var v$2223 = v$2219;
var v$2224 = v$2223[0];
var v$2225 = v$2223[1];
var v$2226 = v$2223[2];
var t$2501 = v$2225;
var t$2502 = [v$2224,fix$2500.$f(v$2226,v$2220)];
var v$2219 = t$2501;
var v$2220 = t$2502;
continue lab$f;
};
};
};
var f$2218 = fix$2500.$f;
l$2211 = (f$2218(s$1979,null));
var fix$2504 = {};
fix$2504.$map = function(v$2213){if (v$2213 == null) {return null;
} else {var v$2214 = v$2213;
var v$2215 = v$2214[0];
var v$2216 = v$2214[1];
return [layoutItem$1976(v$2215),fix$2504.$map(v$2216)];
};
};
var map$2212 = fix$2504.$map;
t$2503 = (map$2212(l$2211));
t$2499 = [t$2503,v$1983,v$1987,3,v$1985];
return [0,t$2499];
};
};
};
basics$ElabTopdec$$3.pu_bal$1988 = pickle$pickle$.enumGen$2149(function(v$2228){var v$2229 = v$2228[0];
var v$2230 = v$2228[1];
switch (v$2229) { case 0: {switch (v$2230) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$2230) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$2230) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderSet.bal",[1,[2,[0,null]]]]);
basics$ElabTopdec$$3.pu$1989 = function(pu_elt$1992){var funE$2001;
var v$2381 = null;
funE$2001 = (function(v$2382){return pickle$pickle$.con0$1979(v$2381,v$2382);
});
return pickle$pickle$.dataGen$1479(["OrderSet.Set",function(v$2234){return (v$2234 == null)?0:1;
},[funE$2001,[function(pu$2235){return pickle$pickle$.con1$2005(function(v$2236){return v$2236;
},function(v$2237){if (v$2237 == null) {basis$General$.print$156("Impossible.OrderSet.pu.N");
throw [basics$ElabTopdec$$3.en$Impossible$1166,"Impossible.OrderSet.pu.N"];
} else {return v$2237;
};
},pickle$pickle$.tup4Gen0$2368(pu_elt$1992,pu$2235,pu$2235,basics$ElabTopdec$$3.pu_bal$1988));
},null]]]);
};
return 0;
})();
