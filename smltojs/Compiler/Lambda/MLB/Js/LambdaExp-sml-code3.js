if ((typeof(compiler_objects$LambdaExp$$3)) == "undefined") {compiler_objects$LambdaExp$$3 = {};
};
(function(){compiler_objects$LambdaExp$$3.eq_bal$1025 = function(v$1027,v$1028){switch (v$1027) { case 0: {switch (v$1028) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1028) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1028) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
compiler_objects$LambdaExp$$3.s$j$133 = function(v$1396,v$1397){return v$1396 < v$1397;
};
compiler_objects$LambdaExp$$3.s$kk$140 = function(v$149,v$150){return ((v$149 < v$150)?true:(v$150 < v$149))?false:true;
};
compiler_objects$LambdaExp$$3.en$Impossible$151 = new String("Impossible");
compiler_objects$LambdaExp$$3.impossible$152 = function(s$155){var s$156 = "Impossible.OrderSet." + s$155;
basis$General$.print$156(s$156);
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,s$156];
};
compiler_objects$LambdaExp$$3.empty$164 = null;
compiler_objects$LambdaExp$$3.singleton$165 = function(i$168){return [i$168,null,null,2];
};
var fix$1400 = {};
fix$1400.$size = function(v$172){if (v$172 == null) {return 0;
} else {var v$179 = v$172;
var v$180 = v$179[1];
var v$181 = v$179[2];
return SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(1 + (fix$1400.$size(v$180)))) + (fix$1400.$size(v$181)));
};
};
compiler_objects$LambdaExp$$3.size$169 = fix$1400.$size;
compiler_objects$LambdaExp$$3.isEmpty$182 = function(v$185){return (v$185 == null)?true:false;
};
compiler_objects$LambdaExp$$3.member$190 = function(i$193,s$196){var fix$1401 = {};
fix$1401.$search = function(v$200){lab$search: while (true) {if (v$200 == null) {return false;
} else {var v$216 = v$200;
var v$217 = v$216[0];
var v$218 = v$216[1];
var v$219 = v$216[2];
if (((i$193 < v$217)?true:(v$217 < i$193))?false:true) {return true;
} else {if (i$193 < v$217) {var t$1402 = v$218;
var v$200 = t$1402;
continue lab$search;
} else {var t$1403 = v$219;
var v$200 = t$1403;
continue lab$search;
};
};
};
};
};
var search$197 = fix$1401.$search;
return search$197(s$196);
};
compiler_objects$LambdaExp$$3.eq$220 = function(s1$223,s2$226){if ((compiler_objects$LambdaExp$$3.size$169(s1$223)) == (compiler_objects$LambdaExp$$3.size$169(s2$226))) {var fix$1404 = {};
fix$1404.$eq$ = function(v$234){if (v$234 == null) {return true;
} else {var v$250 = v$234;
var v$251 = v$250[0];
var v$252 = v$250[1];
var v$253 = v$250[2];
var t$1408;
var fix$1405 = {};
fix$1405.$search = function(v$1325){lab$search: while (true) {if (v$1325 == null) {return false;
} else {var v$1326 = v$1325;
var v$1327 = v$1326[0];
var v$1328 = v$1326[1];
var v$1329 = v$1326[2];
if (((v$251 < v$1327)?true:(v$1327 < v$251))?false:true) {return true;
} else {if (v$251 < v$1327) {var t$1406 = v$1328;
var v$1325 = t$1406;
continue lab$search;
} else {var t$1407 = v$1329;
var v$1325 = t$1407;
continue lab$search;
};
};
};
};
};
var search$1324 = fix$1405.$search;
t$1408 = (search$1324(s2$226));
if (t$1408) {if (fix$1404.$eq$(v$252)) {return fix$1404.$eq$(v$253);
} else {return false;
};
} else {return false;
};
};
};
var eq$$231 = fix$1404.$eq$;
return eq$$231(s1$223);
} else {return false;
};
};
compiler_objects$LambdaExp$$3.en$ALREADYTHERE$254 = new String("ALREADYTHERE");
compiler_objects$LambdaExp$$3.exn$ALREADYTHERE$254 = [compiler_objects$LambdaExp$$3.en$ALREADYTHERE$254];
compiler_objects$LambdaExp$$3.insert$255 = function(k0$258,t$261){var fix$1409 = {};
fix$1409.$ins = function(v$265){if (v$265 == null) {return [true,[k0$258,null,null,2]];
} else {var v$418 = v$265;
var v$419 = v$418[0];
var v$420 = v$418[1];
var v$421 = v$418[2];
var v$422 = v$418[3];
if (((k0$258 < v$419)?true:(v$419 < k0$258))?false:true) {throw compiler_objects$LambdaExp$$3.exn$ALREADYTHERE$254;
} else {if (k0$258 < v$419) {var v$347 = fix$1409.$ins(v$420);
var v$348 = v$347[0];
var v$349 = v$347[1];
switch (v$422) { case 2: {return v$348?[true,[v$419,v$349,v$421,1]]:[false,[v$419,v$349,v$421,2]];
 break; }case 0: {return v$348?[false,[v$419,v$349,v$421,2]]:[false,[v$419,v$349,v$421,0]];
 break; }default: {if (v$348) {var v$335;
if (v$349 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree01!");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.empty tree01!"];
} else {v$335 = v$349;
};
var v$336 = v$335[0];
var v$337 = v$335[1];
var v$338 = v$335[2];
var v$339 = v$335[3];
var t$1412;
var v$1259 = 1;
switch (v$339) { case 0: {switch (v$1259) { case 0: {t$1412 = true;
 break; }default: {t$1412 = false;
} };
 break; }case 1: {switch (v$1259) { case 1: {t$1412 = true;
 break; }default: {t$1412 = false;
} };
 break; }case 2: {switch (v$1259) { case 2: {t$1412 = true;
 break; }default: {t$1412 = false;
} };
 break; } };
if (t$1412) {return [false,[v$336,v$337,[v$419,v$338,v$421,2],2]];
} else {var v$323;
if (v$338 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree02!");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.empty tree02!"];
} else {v$323 = v$338;
};
var v$324 = v$323[0];
var v$325 = v$323[1];
var v$326 = v$323[2];
var v$327 = v$323[3];
var t$1430 = false;
var t$1429;
var t$1428;
var t$1427 = v$324;
var t$1426;
var t$1425;
var t$1424 = v$336;
var t$1423 = v$337;
var t$1422 = v$325;
var t$1421;
var t$1420;
var v$1263 = 0;
switch (v$327) { case 0: {switch (v$1263) { case 0: {t$1420 = true;
 break; }default: {t$1420 = false;
} };
 break; }case 1: {switch (v$1263) { case 1: {t$1420 = true;
 break; }default: {t$1420 = false;
} };
 break; }case 2: {switch (v$1263) { case 2: {t$1420 = true;
 break; }default: {t$1420 = false;
} };
 break; } };
t$1421 = (t$1420?1:2);
t$1425 = [t$1424,t$1423,t$1422,t$1421];
t$1426 = t$1425;
var t$1419;
var t$1418;
var t$1417 = v$419;
var t$1416 = v$326;
var t$1415 = v$421;
var t$1414;
var t$1413;
var v$1265 = 1;
switch (v$327) { case 0: {switch (v$1265) { case 0: {t$1413 = true;
 break; }default: {t$1413 = false;
} };
 break; }case 1: {switch (v$1265) { case 1: {t$1413 = true;
 break; }default: {t$1413 = false;
} };
 break; }case 2: {switch (v$1265) { case 2: {t$1413 = true;
 break; }default: {t$1413 = false;
} };
 break; } };
t$1414 = (t$1413?0:2);
t$1418 = [t$1417,t$1416,t$1415,t$1414];
t$1419 = t$1418;
t$1428 = [t$1427,t$1426,t$1419,2];
t$1429 = t$1428;
return [t$1430,t$1429];
};
} else {return [false,[v$419,v$349,v$421,1]];
};
} };
} else {var v$415 = fix$1409.$ins(v$421);
var v$416 = v$415[0];
var v$417 = v$415[1];
switch (v$422) { case 2: {return v$416?[true,[v$419,v$420,v$417,0]]:[false,[v$419,v$420,v$417,2]];
 break; }case 1: {return v$416?[false,[v$419,v$420,v$417,2]]:[false,[v$419,v$420,v$417,1]];
 break; }default: {if (v$416) {var v$403;
if (v$417 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree03!");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.empty tree03!"];
} else {v$403 = v$417;
};
var v$404 = v$403[0];
var v$405 = v$403[1];
var v$406 = v$403[2];
var v$407 = v$403[3];
var t$1431;
var v$1271 = 0;
switch (v$407) { case 0: {switch (v$1271) { case 0: {t$1431 = true;
 break; }default: {t$1431 = false;
} };
 break; }case 1: {switch (v$1271) { case 1: {t$1431 = true;
 break; }default: {t$1431 = false;
} };
 break; }case 2: {switch (v$1271) { case 2: {t$1431 = true;
 break; }default: {t$1431 = false;
} };
 break; } };
if (t$1431) {return [false,[v$404,[v$419,v$420,v$405,2],v$406,2]];
} else {var v$391;
if (v$405 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree04!");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.empty tree04!"];
} else {v$391 = v$405;
};
var v$392 = v$391[0];
var v$393 = v$391[1];
var v$394 = v$391[2];
var v$395 = v$391[3];
var t$1449 = false;
var t$1448;
var t$1447;
var t$1446 = v$392;
var t$1445;
var t$1444;
var t$1443 = v$419;
var t$1442 = v$420;
var t$1441 = v$393;
var t$1440;
var t$1439;
var v$1275 = 0;
switch (v$395) { case 0: {switch (v$1275) { case 0: {t$1439 = true;
 break; }default: {t$1439 = false;
} };
 break; }case 1: {switch (v$1275) { case 1: {t$1439 = true;
 break; }default: {t$1439 = false;
} };
 break; }case 2: {switch (v$1275) { case 2: {t$1439 = true;
 break; }default: {t$1439 = false;
} };
 break; } };
t$1440 = (t$1439?1:2);
t$1444 = [t$1443,t$1442,t$1441,t$1440];
t$1445 = t$1444;
var t$1438;
var t$1437;
var t$1436 = v$404;
var t$1435 = v$394;
var t$1434 = v$406;
var t$1433;
var t$1432;
var v$1277 = 1;
switch (v$395) { case 0: {switch (v$1277) { case 0: {t$1432 = true;
 break; }default: {t$1432 = false;
} };
 break; }case 1: {switch (v$1277) { case 1: {t$1432 = true;
 break; }default: {t$1432 = false;
} };
 break; }case 2: {switch (v$1277) { case 2: {t$1432 = true;
 break; }default: {t$1432 = false;
} };
 break; } };
t$1433 = (t$1432?0:2);
t$1437 = [t$1436,t$1435,t$1434,t$1433];
t$1438 = t$1437;
t$1447 = [t$1446,t$1445,t$1438,2];
t$1448 = t$1447;
return [t$1449,t$1448];
};
} else {return [false,[v$419,v$420,v$417,0]];
};
} };
};
};
};
};
var ins$262 = fix$1409.$ins;
try {return (ins$262(t$261))[1];
} catch(v$1410) {return (function(ALREADYTHERE$429){var t$1411 = ALREADYTHERE$429;
if (t$1411[0] == compiler_objects$LambdaExp$$3.en$ALREADYTHERE$254) {return t$261;
} else {throw ALREADYTHERE$429;
};
})(v$1410);
};
};
compiler_objects$LambdaExp$$3.list$430 = function(s$433){var fix$1450 = {};
fix$1450.$f = function(v$437,v$440){lab$f: while (true) {if (v$437 == null) {return v$440;
} else {var v$452 = v$437;
var v$453 = v$452[0];
var v$454 = v$452[1];
var v$455 = v$452[2];
var t$1451 = v$454;
var t$1452 = [v$453,fix$1450.$f(v$455,v$440)];
var v$437 = t$1451;
var v$440 = t$1452;
continue lab$f;
};
};
};
var f$434 = fix$1450.$f;
return f$434(s$433,null);
};
var fix$1453 = {};
fix$1453.$fromList = function(l$460){lab$fromList: while (true) {if (l$460 == null) {return compiler_objects$LambdaExp$$3.empty$164;
} else {var v$467 = l$460;
var v$468 = v$467[0];
var v$469 = v$467[1];
return compiler_objects$LambdaExp$$3.insert$255(v$468,fix$1453.$fromList(v$469));
};
};
};
compiler_objects$LambdaExp$$3.fromList$457 = fix$1453.$fromList;
var fix$1454 = {};
fix$1454.$union = function(s1$473,s2$476){lab$union: while (true) {if (s2$476 == null) {return s1$473;
} else {var v$484 = s2$476;
var v$485 = v$484[0];
var v$486 = v$484[1];
var v$487 = v$484[2];
var t$1455 = fix$1454.$union(compiler_objects$LambdaExp$$3.insert$255(v$485,s1$473),v$486);
var t$1456 = v$487;
var s1$473 = t$1455;
var s2$476 = t$1456;
continue lab$union;
};
};
};
compiler_objects$LambdaExp$$3.union$470 = fix$1454.$union;
var fix$1457 = {};
fix$1457.$addList = function(v$491,v$494){lab$addList: while (true) {if (v$491 == null) {return v$494;
} else {var v$505 = v$491;
var v$506 = v$505[0];
var v$507 = v$505[1];
var t$1458 = v$507;
var t$1459 = compiler_objects$LambdaExp$$3.insert$255(v$506,v$494);
var v$491 = t$1458;
var v$494 = t$1459;
continue lab$addList;
};
};
};
compiler_objects$LambdaExp$$3.addList$488 = fix$1457.$addList;
compiler_objects$LambdaExp$$3.en$NOTFOUND$509 = new String("NOTFOUND");
compiler_objects$LambdaExp$$3.exn$NOTFOUND$509 = [compiler_objects$LambdaExp$$3.en$NOTFOUND$509];
compiler_objects$LambdaExp$$3.remove$510 = function(k0$513,t$516){var balance1$517 = function(v$520){if (v$520 == null) {basis$General$.print$156("Impossible.OrderSet.(balance1 on an empty tree)");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.(balance1 on an empty tree)"];
} else {var v$585 = v$520;
var v$586 = v$585[0];
var v$587 = v$585[1];
var v$588 = v$585[2];
switch (v$585[3]) { case 1: {return [[v$586,v$587,v$588,2],true];
 break; }case 2: {return [[v$586,v$587,v$588,0],false];
 break; }default: {var v$573;
if (v$588 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree11!");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.empty tree11!"];
} else {v$573 = v$588;
};
var v$574 = v$573[0];
var v$575 = v$573[1];
var v$576 = v$573[2];
switch (v$573[3]) { case 1: {var v$561;
if (v$575 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree12!");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.empty tree12!"];
} else {v$561 = v$575;
};
var v$562 = v$561[0];
var v$563 = v$561[1];
var v$564 = v$561[2];
var v$565 = v$561[3];
var t$1476;
var t$1475;
var t$1474 = v$562;
var t$1473;
var t$1472;
var t$1471 = v$586;
var t$1470 = v$587;
var t$1469 = v$563;
var t$1468;
var t$1467;
var v$1289 = 0;
switch (v$565) { case 0: {switch (v$1289) { case 0: {t$1467 = true;
 break; }default: {t$1467 = false;
} };
 break; }case 1: {switch (v$1289) { case 1: {t$1467 = true;
 break; }default: {t$1467 = false;
} };
 break; }case 2: {switch (v$1289) { case 2: {t$1467 = true;
 break; }default: {t$1467 = false;
} };
 break; } };
t$1468 = (t$1467?1:2);
t$1472 = [t$1471,t$1470,t$1469,t$1468];
t$1473 = t$1472;
var t$1466;
var t$1465;
var t$1464 = v$574;
var t$1463 = v$564;
var t$1462 = v$576;
var t$1461;
var t$1460;
var v$1291 = 1;
switch (v$565) { case 0: {switch (v$1291) { case 0: {t$1460 = true;
 break; }default: {t$1460 = false;
} };
 break; }case 1: {switch (v$1291) { case 1: {t$1460 = true;
 break; }default: {t$1460 = false;
} };
 break; }case 2: {switch (v$1291) { case 2: {t$1460 = true;
 break; }default: {t$1460 = false;
} };
 break; } };
t$1461 = (t$1460?0:2);
t$1465 = [t$1464,t$1463,t$1462,t$1461];
t$1466 = t$1465;
t$1475 = [t$1474,t$1473,t$1466,2];
t$1476 = t$1475;
return [t$1476,true];
 break; }case 2: {return [[v$574,[v$586,v$587,v$575,0],v$576,1],false];
 break; }default: {return [[v$574,[v$586,v$587,v$575,2],v$576,2],true];
} };
} };
};
};
var balance2$590 = function(v$593){if (v$593 == null) {basis$General$.print$156("Impossible.OrderSet.(balance2 on an empty tree)");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.(balance2 on an empty tree)"];
} else {var v$658 = v$593;
var v$659 = v$658[0];
var v$660 = v$658[1];
var v$661 = v$658[2];
switch (v$658[3]) { case 0: {return [[v$659,v$660,v$661,2],true];
 break; }case 2: {return [[v$659,v$660,v$661,1],false];
 break; }default: {var v$646;
if (v$660 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree21!");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.empty tree21!"];
} else {v$646 = v$660;
};
var v$647 = v$646[0];
var v$648 = v$646[1];
var v$649 = v$646[2];
switch (v$646[3]) { case 0: {var v$634;
if (v$649 == null) {basis$General$.print$156("Impossible.OrderSet.empty tree22!");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.empty tree22!"];
} else {v$634 = v$649;
};
var v$635 = v$634[0];
var v$636 = v$634[1];
var v$637 = v$634[2];
var v$638 = v$634[3];
var t$1493;
var t$1492;
var t$1491 = v$635;
var t$1490;
var t$1489;
var t$1488 = v$647;
var t$1487 = v$648;
var t$1486 = v$636;
var t$1485;
var t$1484;
var v$1301 = 0;
switch (v$638) { case 0: {switch (v$1301) { case 0: {t$1484 = true;
 break; }default: {t$1484 = false;
} };
 break; }case 1: {switch (v$1301) { case 1: {t$1484 = true;
 break; }default: {t$1484 = false;
} };
 break; }case 2: {switch (v$1301) { case 2: {t$1484 = true;
 break; }default: {t$1484 = false;
} };
 break; } };
t$1485 = (t$1484?1:2);
t$1489 = [t$1488,t$1487,t$1486,t$1485];
t$1490 = t$1489;
var t$1483;
var t$1482;
var t$1481 = v$659;
var t$1480 = v$637;
var t$1479 = v$661;
var t$1478;
var t$1477;
var v$1299 = 1;
switch (v$638) { case 0: {switch (v$1299) { case 0: {t$1477 = true;
 break; }default: {t$1477 = false;
} };
 break; }case 1: {switch (v$1299) { case 1: {t$1477 = true;
 break; }default: {t$1477 = false;
} };
 break; }case 2: {switch (v$1299) { case 2: {t$1477 = true;
 break; }default: {t$1477 = false;
} };
 break; } };
t$1478 = (t$1477?0:2);
t$1482 = [t$1481,t$1480,t$1479,t$1478];
t$1483 = t$1482;
t$1492 = [t$1491,t$1490,t$1483,2];
t$1493 = t$1492;
return [t$1493,true];
 break; }case 2: {return [[v$647,v$648,[v$659,v$649,v$661,1],0],false];
 break; }default: {return [[v$647,v$648,[v$659,v$649,v$661,2],2],true];
} };
} };
};
};
var fix$1494 = {};
fix$1494.$remove_rightmost = function(v$666){if (v$666 == null) {basis$General$.print$156("Impossible.OrderSet.(remove_rightmost on empty tree)");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.(remove_rightmost on empty tree)"];
} else {var v$680 = v$666;
var v$681 = v$680[2];
if (v$681 == null) {return [v$680[1],v$680[0],true];
} else {var v$703 = v$680[0];
var v$704 = v$680[1];
var v$705 = v$680[3];
var v$699 = fix$1494.$remove_rightmost(v$681);
var v$700 = v$699[0];
var v$701 = v$699[1];
if (v$699[2]) {var v$696 = balance2$590([v$703,v$704,v$700,v$705]);
return [v$696[0],v$701,v$696[1]];
} else {return [[v$703,v$704,v$700,v$705],v$701,false];
};
};
};
};
var remove_rightmost$663 = fix$1494.$remove_rightmost;
var fix$1495 = {};
fix$1495.$del = function(v$709){lab$del: while (true) {if (v$709 == null) {throw compiler_objects$LambdaExp$$3.exn$NOTFOUND$509;
} else {var v$766 = v$709;
var v$767 = v$766[0];
var v$768 = v$766[1];
var v$769 = v$766[2];
var v$770 = v$766[3];
if (k0$513 < v$767) {var v$729 = fix$1495.$del(v$768);
var v$730 = v$729[0];
if (v$729[1]) {return balance1$517([v$767,v$730,v$769,v$770]);
} else {return [[v$767,v$730,v$769,v$770],false];
};
} else {if (v$767 < k0$513) {var v$743 = fix$1495.$del(v$769);
var v$744 = v$743[0];
if (v$743[1]) {return balance2$590([v$767,v$768,v$744,v$770]);
} else {return [[v$767,v$768,v$744,v$770],false];
};
} else {if (v$769 == null) {return [v$768,true];
} else {if (v$768 == null) {return [v$769,true];
} else {var v$762 = remove_rightmost$663(v$768);
var v$763 = v$762[0];
var v$764 = v$762[1];
if (v$762[2]) {return balance1$517([v$764,v$763,v$769,v$770]);
} else {return [[v$764,v$763,v$769,v$770],false];
};
};
};
};
};
};
};
};
var del$706 = fix$1495.$del;
try {return (del$706(t$516))[0];
} catch(v$1496) {return (function(NOTFOUND$777){var t$1497 = NOTFOUND$777;
if (t$1497[0] == compiler_objects$LambdaExp$$3.en$NOTFOUND$509) {return t$516;
} else {throw NOTFOUND$777;
};
})(v$1496);
};
};
var fix$1498 = {};
fix$1498.$difference = function(s1$781,s2$784){lab$difference: while (true) {if (s1$781 == null) {return null;
} else {if (s2$784 == null) {return s1$781;
} else {var v$796 = s2$784;
var v$797 = v$796[0];
var v$798 = v$796[1];
var v$799 = v$796[2];
var t$1499 = fix$1498.$difference(compiler_objects$LambdaExp$$3.remove$510(v$797,s1$781),v$798);
var t$1500 = v$799;
var s1$781 = t$1499;
var s2$784 = t$1500;
continue lab$difference;
};
};
};
};
compiler_objects$LambdaExp$$3.difference$778 = fix$1498.$difference;
compiler_objects$LambdaExp$$3.intersect$800 = function(s1$803,s2$806){var fix$1501 = {};
fix$1501.$inters = function(v$810,v$813){if (v$810 == null) {return v$813;
} else {var v$829 = v$810;
var v$830 = v$829[0];
var v$831 = v$829[1];
var v$832 = v$829[2];
var t$1511 = fix$1501.$inters;
var t$1510 = v$831;
var t$1509;
var t$1508 = fix$1501.$inters;
var t$1507 = v$832;
var t$1506;
var t$1505;
var fix$1502 = {};
fix$1502.$search = function(v$1363){lab$search: while (true) {if (v$1363 == null) {return false;
} else {var v$1364 = v$1363;
var v$1365 = v$1364[0];
var v$1366 = v$1364[1];
var v$1367 = v$1364[2];
if (((v$830 < v$1365)?true:(v$1365 < v$830))?false:true) {return true;
} else {if (v$830 < v$1365) {var t$1503 = v$1366;
var v$1363 = t$1503;
continue lab$search;
} else {var t$1504 = v$1367;
var v$1363 = t$1504;
continue lab$search;
};
};
};
};
};
var search$1362 = fix$1502.$search;
t$1505 = (search$1362(s2$806));
t$1506 = (t$1505?(compiler_objects$LambdaExp$$3.insert$255(v$830,v$813)):v$813);
t$1509 = (t$1508(t$1507,t$1506));
return t$1511(t$1510,t$1509);
};
};
var inters$807 = fix$1501.$inters;
return inters$807(s1$803,compiler_objects$LambdaExp$$3.empty$164);
};
compiler_objects$LambdaExp$$3.partition$834 = function(f$837,s$840){var fix$1512 = {};
fix$1512.$g = function(v$844,v$847){lab$g: while (true) {if (v$844 == null) {return v$847;
} else {var v$865 = v$844;
var v$866 = v$865[0];
var v$867 = v$865[1];
var v$868 = v$865[2];
var v$870 = v$847[0];
var v$871 = v$847[1];
var b$860 = (f$837(v$866))?[compiler_objects$LambdaExp$$3.insert$255(v$866,v$870),v$871]:[v$870,compiler_objects$LambdaExp$$3.insert$255(v$866,v$871)];
var t$1513 = v$868;
var t$1514 = fix$1512.$g(v$867,b$860);
var v$844 = t$1513;
var v$847 = t$1514;
continue lab$g;
};
};
};
var g$841 = fix$1512.$g;
return g$841(s$840,[compiler_objects$LambdaExp$$3.empty$164,compiler_objects$LambdaExp$$3.empty$164]);
};
compiler_objects$LambdaExp$$3.fold$872 = function(f$875,e$878,t$881){var fix$1515 = {};
fix$1515.$fold$ = function(v$885,v$888){lab$fold$: while (true) {if (v$885 == null) {return v$888;
} else {var v$900 = v$885;
var v$901 = v$900[0];
var v$902 = v$900[1];
var v$903 = v$900[2];
var t$1516 = v$903;
var t$1517 = (f$875(v$901))(fix$1515.$fold$(v$902,v$888));
var v$885 = t$1516;
var v$888 = t$1517;
continue lab$fold$;
};
};
};
var fold$$882 = fix$1515.$fold$;
return fold$$882(t$881,e$878);
};
compiler_objects$LambdaExp$$3.listmap$905 = function(f$1176,l$1177){var fix$1518 = {};
fix$1518.$map = function(v$1179){if (v$1179 == null) {return null;
} else {var v$1180 = v$1179;
var v$1181 = v$1180[0];
var v$1182 = v$1180[1];
return [f$1176(v$1181),fix$1518.$map(v$1182)];
};
};
var map$1178 = fix$1518.$map;
return map$1178(l$1177);
};
compiler_objects$LambdaExp$$3.map$906 = function(f$909,t$912){var t$1524 = compiler_objects$LambdaExp$$3.fromList$457;
var t$1522;
var l$1184;
var fix$1519 = {};
fix$1519.$f = function(v$1192,v$1193){lab$f: while (true) {if (v$1192 == null) {return v$1193;
} else {var v$1196 = v$1192;
var v$1197 = v$1196[0];
var v$1198 = v$1196[1];
var v$1199 = v$1196[2];
var t$1520 = v$1198;
var t$1521 = [v$1197,fix$1519.$f(v$1199,v$1193)];
var v$1192 = t$1520;
var v$1193 = t$1521;
continue lab$f;
};
};
};
var f$1191 = fix$1519.$f;
l$1184 = (f$1191(t$912,null));
var fix$1523 = {};
fix$1523.$map = function(v$1186){if (v$1186 == null) {return null;
} else {var v$1187 = v$1186;
var v$1188 = v$1187[0];
var v$1189 = v$1187[1];
return [f$909(v$1188),fix$1523.$map(v$1189)];
};
};
var map$1185 = fix$1523.$map;
t$1522 = (map$1185(l$1184));
return t$1524(t$1522);
};
compiler_objects$LambdaExp$$3.subst$913 = function(v$925,v$926){return function(s$920){var t$1528;
var fix$1525 = {};
fix$1525.$search = function(v$1371){lab$search: while (true) {if (v$1371 == null) {return false;
} else {var v$1372 = v$1371;
var v$1373 = v$1372[0];
var v$1374 = v$1372[1];
var v$1375 = v$1372[2];
if (((v$926 < v$1373)?true:(v$1373 < v$926))?false:true) {return true;
} else {if (v$926 < v$1373) {var t$1526 = v$1374;
var v$1371 = t$1526;
continue lab$search;
} else {var t$1527 = v$1375;
var v$1371 = t$1527;
continue lab$search;
};
};
};
};
};
var search$1370 = fix$1525.$search;
t$1528 = (search$1370(s$920));
if (t$1528) {return compiler_objects$LambdaExp$$3.insert$255(v$925,compiler_objects$LambdaExp$$3.remove$510(v$926,s$920));
} else {return s$920;
};
};
};
compiler_objects$LambdaExp$$3.apply$927 = function(f$930,s$933){var fix$1529 = {};
fix$1529.$appl = function(v$937){lab$appl: while (true) {if (v$937 == null) {return 0;
} else {var v$949 = v$937;
var v$950 = v$949[0];
var v$951 = v$949[1];
var v$952 = v$949[2];
fix$1529.$appl(v$951);
f$930(v$950);
var t$1530 = v$952;
var v$937 = t$1530;
continue lab$appl;
};
};
};
var appl$934 = fix$1529.$appl;
return appl$934(s$933);
};
compiler_objects$LambdaExp$$3.layoutSet$953 = function(v$972,v$971,v$970){return function(layoutItem$961){return function(s$964){var t$1531;
var v$968 = [0,v$971];
var t$1535;
var l$1202;
var fix$1532 = {};
fix$1532.$f = function(v$1210,v$1211){lab$f: while (true) {if (v$1210 == null) {return v$1211;
} else {var v$1214 = v$1210;
var v$1215 = v$1214[0];
var v$1216 = v$1214[1];
var v$1217 = v$1214[2];
var t$1533 = v$1216;
var t$1534 = [v$1215,fix$1532.$f(v$1217,v$1211)];
var v$1210 = t$1533;
var v$1211 = t$1534;
continue lab$f;
};
};
};
var f$1209 = fix$1532.$f;
l$1202 = (f$1209(s$964,null));
var fix$1536 = {};
fix$1536.$map = function(v$1204){if (v$1204 == null) {return null;
} else {var v$1205 = v$1204;
var v$1206 = v$1205[0];
var v$1207 = v$1205[1];
return [layoutItem$961(v$1206),fix$1536.$map(v$1207)];
};
};
var map$1203 = fix$1536.$map;
t$1535 = (map$1203(l$1202));
t$1531 = [t$1535,v$968,v$972,3,v$970];
return [0,t$1531];
};
};
};
compiler_objects$LambdaExp$$3.pu_bal$973 = pickle$pickle$.enumGen$2149(function(v$1219){var v$1220 = v$1219[0];
var v$1221 = v$1219[1];
switch (v$1220) { case 0: {switch (v$1221) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1221) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1221) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderSet.bal",[1,[2,[0,null]]]]);
compiler_objects$LambdaExp$$3.pu$974 = function(pu_elt$977){var funE$986;
var v$1398 = null;
funE$986 = (function(v$1399){return pickle$pickle$.con0$1979(v$1398,v$1399);
});
return pickle$pickle$.dataGen$1479(["OrderSet.Set",function(v$1225){return (v$1225 == null)?0:1;
},[funE$986,[function(pu$1226){return pickle$pickle$.con1$2005(function(v$1227){return v$1227;
},function(v$1228){if (v$1228 == null) {basis$General$.print$156("Impossible.OrderSet.pu.N");
throw [compiler_objects$LambdaExp$$3.en$Impossible$151,"Impossible.OrderSet.pu.N"];
} else {return v$1228;
};
},pickle$pickle$.tup4Gen0$2368(pu_elt$977,pu$1226,pu$1226,compiler_objects$LambdaExp$$3.pu_bal$973));
},null]]]);
};
return 0;
})();
