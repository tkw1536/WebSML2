if ((typeof(basics$Infixing$$7)) == "undefined") {basics$Infixing$$7 = {};
};
(function(){basics$Infixing$$7.eq_StackEntry$1310 = function(v$1312,v$1313){switch (v$1312[0]) { case 0: {switch (v$1313[0]) { case 0: {var v$1314 = v$1312[1];
var v$1315 = v$1313[1];
return (syntax_objects$Ident$.eq_id$237(v$1314[0],v$1315[0]))?(v$1314[1] == v$1315[1]):false;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1313[0]) { case 1: {var v$1318 = v$1312[1];
var v$1319 = v$1313[1];
return (syntax_objects$Ident$.eq_id$237(v$1318[0],v$1319[0]))?(v$1318[1] == v$1319[1]):false;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1313[0]) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
basics$Infixing$$7.eq_LastObj$1322 = function(v$1324,v$1325){switch (v$1324) { case 0: {switch (v$1325) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1325) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1325) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
basics$Infixing$$7.impossible$943 = function(s$946){return tools$Crash$.impossible$50("InfixStack." + s$946);
};
basics$Infixing$$7.full$952 = function(v$968){switch (v$968[0]) { case 1: {var v$976 = v$968[1];
return basics$Infixing$$5.atomToFull$807(v$976);
 break; }default: {return v$968[1];
} };
};
basics$Infixing$$7.atom$953 = function(v$956){switch (v$956[0]) { case 1: {return v$956[1];
 break; }default: {var v$965 = v$956[1];
return basics$Infixing$$5.fullToAtom$811(v$965);
} };
};
basics$Infixing$$7.side$982 = function(v$1106){switch (v$1106[0]) { case 0: {return "left";
 break; }case 1: {return "right";
 break; }default: {return tools$Crash$.impossible$50("InfixStack.side");
} };
};
basics$Infixing$$7.op_as_string$983 = function(v$1085){switch (v$1085[0]) { case 0: {var v$1101 = v$1085[1];
var v$1102 = v$1101[0];
return basics$Infixing$$5.pr_id$806(v$1102);
 break; }case 1: {var v$1097 = v$1085[1];
var v$1098 = v$1097[0];
return basics$Infixing$$5.pr_id$806(v$1098);
 break; }default: {return tools$Crash$.impossible$50("InfixStack.op_as_string");
} };
};
basics$Infixing$$7.both_associate_left$981 = function(v$1474,v$1475){var rhs2$1130 = function(obj$1148){var t$1493;
var t$1492;
var t$1491;
var t$1490;
var t$1489;
var t$1488;
var t$1487;
var t$1486;
var t$1485;
var t$1484 = "Insert parentheses.  `";
var t$1483;
switch (v$1474[0]) { case 0: {var v$1340 = v$1474[1];
var v$1341 = v$1340[0];
t$1483 = (basics$Infixing$$5.pr_id$806(v$1341));
 break; }case 1: {var v$1342 = v$1474[1];
var v$1343 = v$1342[0];
t$1483 = (basics$Infixing$$5.pr_id$806(v$1343));
 break; }default: {t$1483 = (tools$Crash$.impossible$50("InfixStack.op_as_string"));
} };
t$1485 = (t$1484 + t$1483);
t$1486 = (t$1485 + "' and `");
var t$1482;
switch (v$1475[0]) { case 0: {var v$1347 = v$1475[1];
var v$1348 = v$1347[0];
t$1482 = (basics$Infixing$$5.pr_id$806(v$1348));
 break; }case 1: {var v$1349 = v$1475[1];
var v$1350 = v$1349[0];
t$1482 = (basics$Infixing$$5.pr_id$806(v$1350));
 break; }default: {t$1482 = (tools$Crash$.impossible$50("InfixStack.op_as_string"));
} };
t$1487 = (t$1486 + t$1482);
t$1488 = (t$1487 + "' have the same precedence\nbut associate ");
var t$1481;
switch (v$1474[0]) { case 0: {t$1481 = "left";
 break; }case 1: {t$1481 = "right";
 break; }default: {t$1481 = (tools$Crash$.impossible$50("InfixStack.side"));
} };
t$1489 = (t$1488 + t$1481);
t$1490 = (t$1489 + " and ");
var t$1480;
switch (v$1475[0]) { case 0: {t$1480 = "left";
 break; }case 1: {t$1480 = "right";
 break; }default: {t$1480 = (tools$Crash$.impossible$50("InfixStack.side"));
} };
t$1491 = (t$1490 + t$1480);
t$1492 = (t$1491 + ", respectively.");
t$1493 = [basics$Infixing$$1.en$InfixStack_error$59,t$1492];
throw t$1493;
};
switch (v$1474[0]) { case 0: {switch (v$1475[0]) { case 0: {return true;
 break; }default: {return rhs2$1130(0);
} };
 break; }case 1: {switch (v$1475[0]) { case 1: {return false;
 break; }default: {return rhs2$1130(0);
} };
 break; }default: {return rhs2$1130(0);
} };
};
basics$Infixing$$7.precedence$984 = function(v$1064){switch (v$1064[0]) { case 1: {return v$1064[1][1];
 break; }case 0: {return v$1064[1][1];
 break; }default: {return tools$Crash$.impossible$50("InfixStack.precedence");
} };
};
basics$Infixing$$7.assocLeft$985 = function(v$1052,v$1476){switch (v$1052[0]) { case 2: {return true;
 break; }default: {switch (v$1476[0]) { case 2: {return false;
 break; }default: {var t$1499;
var t$1498;
switch (v$1052[0]) { case 1: {t$1498 = v$1052[1][1];
 break; }case 0: {t$1498 = v$1052[1][1];
 break; }default: {t$1498 = (tools$Crash$.impossible$50("InfixStack.precedence"));
} };
var t$1497;
switch (v$1476[0]) { case 1: {t$1497 = v$1476[1][1];
 break; }case 0: {t$1497 = v$1476[1][1];
 break; }default: {t$1497 = (tools$Crash$.impossible$50("InfixStack.precedence"));
} };
t$1499 = (t$1498 > t$1497);
if (t$1499) {return true;
} else {var t$1496;
var t$1495;
switch (v$1052[0]) { case 1: {t$1495 = v$1052[1][1];
 break; }case 0: {t$1495 = v$1052[1][1];
 break; }default: {t$1495 = (tools$Crash$.impossible$50("InfixStack.precedence"));
} };
var t$1494;
switch (v$1476[0]) { case 1: {t$1494 = v$1476[1][1];
 break; }case 0: {t$1494 = v$1476[1][1];
 break; }default: {t$1494 = (tools$Crash$.impossible$50("InfixStack.precedence"));
} };
t$1496 = (t$1495 == t$1494);
if (t$1496) {return basics$Infixing$$7.both_associate_left$981(v$1052,v$1476);
} else {return false;
};
};
} };
} };
};
basics$Infixing$$7.apply$986 = function(v$1477,v$1000){if (v$1000 == null) {var t$1503;
var t$1502;
var t$1501 = "Give ";
var t$1500;
switch (v$1477[0]) { case 0: {var v$1470 = v$1477[1];
var v$1471 = v$1470[0];
t$1500 = (("the infix `" + (basics$Infixing$$5.pr_id$806(v$1471))) + "' more arguments.");
 break; }case 1: {var v$1472 = v$1477[1];
var v$1473 = v$1472[0];
t$1500 = (("the infixr `" + (basics$Infixing$$5.pr_id$806(v$1473))) + "' more arguments.");
 break; }default: {t$1500 = (tools$Crash$.impossible$50("InfixStack.apply"));
} };
t$1502 = (t$1501 + t$1500);
t$1503 = [basics$Infixing$$1.en$InfixStack_error$59,t$1502];
throw t$1503;
} else {var v$1002 = v$1000;
var v$1003 = v$1002[1];
if (v$1003 == null) {var t$1507;
var t$1506;
var t$1505 = "Give ";
var t$1504;
switch (v$1477[0]) { case 0: {var v$1464 = v$1477[1];
var v$1465 = v$1464[0];
t$1504 = (("the infix `" + (basics$Infixing$$5.pr_id$806(v$1465))) + "' more arguments.");
 break; }case 1: {var v$1466 = v$1477[1];
var v$1467 = v$1466[0];
t$1504 = (("the infixr `" + (basics$Infixing$$5.pr_id$806(v$1467))) + "' more arguments.");
 break; }default: {t$1504 = (tools$Crash$.impossible$50("InfixStack.apply"));
} };
t$1506 = (t$1505 + t$1504);
t$1507 = [basics$Infixing$$1.en$InfixStack_error$59,t$1506];
throw t$1507;
} else {var v$1021 = v$1002[0];
var v$1022 = v$1003;
var v$1023 = v$1022[0];
var v$1024 = v$1022[1];
var thePair$1005;
var t$1510 = basics$Infixing$$5.pair$815;
var t$1509;
switch (v$1023[0]) { case 1: {var v$1381 = v$1023[1];
t$1509 = (basics$Infixing$$5.atomToFull$807(v$1381));
 break; }default: {t$1509 = v$1023[1];
} };
var t$1508;
switch (v$1021[0]) { case 1: {var v$1383 = v$1021[1];
t$1508 = (basics$Infixing$$5.atomToFull$807(v$1383));
 break; }default: {t$1508 = v$1021[1];
} };
thePair$1005 = (t$1510(t$1509,t$1508));
var t$1516;
var t$1515;
var t$1511;
switch (v$1477[0]) { case 0: {var v$1018 = v$1477[1];
var v$1019 = v$1018[0];
t$1511 = (basics$Infixing$$5.applyId$846(v$1019,thePair$1005));
 break; }case 1: {var v$1015 = v$1477[1];
var v$1016 = v$1015[0];
t$1511 = (basics$Infixing$$5.applyId$846(v$1016,thePair$1005));
 break; }default: {var t$1514 = basics$Infixing$$5.applyObj$854;
var t$1513;
switch (v$1023[0]) { case 1: {var v$1385 = v$1023[1];
t$1513 = (basics$Infixing$$5.atomToFull$807(v$1385));
 break; }default: {t$1513 = v$1023[1];
} };
var t$1512;
switch (v$1021[0]) { case 1: {t$1512 = v$1021[1];
 break; }default: {var v$1387 = v$1021[1];
t$1512 = (basics$Infixing$$5.fullToAtom$811(v$1387));
} };
t$1511 = (t$1514(t$1513,t$1512));
} };
t$1515 = [0,t$1511];
t$1516 = [t$1515,v$1024];
return t$1516;
};
};
};
var fix$1517 = {};
fix$1517.$flushHigher = function(v$1177,v$1178,v$1179){lab$flushHigher: while (true) {if (v$1178 == null) {return [null,v$1179];
} else {var v$1174 = v$1178;
var v$1175 = v$1174[0];
var v$1176 = v$1174[1];
if (basics$Infixing$$7.assocLeft$985(v$1175,v$1177)) {var t$1518 = v$1177;
var t$1519 = v$1176;
var t$1520 = basics$Infixing$$7.apply$986(v$1175,v$1179);
var v$1177 = t$1518;
var v$1178 = t$1519;
var v$1179 = t$1520;
continue lab$flushHigher;
} else {return [v$1178,v$1179];
};
};
};
};
basics$Infixing$$7.flushHigher$1158 = fix$1517.$flushHigher;
var fix$1521 = {};
fix$1521.$flushAll = function(v$1196,v$1478){lab$flushAll: while (true) {if (v$1196 == null) {if (v$1478 == null) {return tools$Crash$.impossible$50("InfixStack.flushAll");
} else {var v$1199 = v$1478;
if (v$1199[1] == null) {return v$1199[0];
} else {return tools$Crash$.impossible$50("InfixStack.flushAll");
};
};
} else {var v$1204 = v$1196;
var v$1205 = v$1204[0];
var v$1206 = v$1204[1];
var t$1522 = v$1206;
var t$1523 = basics$Infixing$$7.apply$986(v$1205,v$1478);
var v$1196 = t$1522;
var v$1478 = t$1523;
continue lab$flushAll;
};
};
};
basics$Infixing$$7.flushAll$1180 = fix$1521.$flushAll;
var fix$1524 = {};
fix$1524.$process = function(v$1254,v$1255,v$1256,v$1257,v$1258){if (v$1255 == null) {return basics$Infixing$$7.flushAll$1180(v$1256,v$1258);
} else {var v$1251 = v$1255;
var v$1252 = v$1251[0];
var v$1253 = v$1251[1];
var v$1228 = basics$Infixing$$5.asId$822(v$1252);
switch (v$1228[0]) { case 0: {var v$1246 = v$1228[1];
var v$1237 = basics$InfixBasis$.lookup$98(function(v$1479){return syntax_objects$Ident$.eq_id$237(v$1479[0],v$1479[1]);
},v$1254,v$1246);
switch (v$1237[0]) { case 2: {var v$1241 = v$1237[1];
return fix$1524.$operator(v$1254,[0,[v$1246,v$1241]],v$1253,v$1256,v$1258);
 break; }case 1: {var v$1239 = v$1237[1];
return fix$1524.$operator(v$1254,[1,[v$1246,v$1239]],v$1253,v$1256,v$1258);
 break; }default: {switch (v$1257) { case 2: {return fix$1524.$operator(v$1254,[2],v$1255,v$1256,v$1258);
 break; }default: {return fix$1524.$process(v$1254,v$1253,v$1256,2,[[1,v$1252],v$1258]);
} };
} };
 break; }default: {switch (v$1257) { case 2: {return fix$1524.$operator(v$1254,[2],v$1255,v$1256,v$1258);
 break; }default: {return fix$1524.$process(v$1254,v$1253,v$1256,2,[[1,v$1252],v$1258]);
} };
} };
};
};
fix$1524.$operator = function(v$1272,v$1273,v$1274,v$1275,v$1276){var v$1269 = basics$Infixing$$7.flushHigher$1158(v$1273,v$1275,v$1276);
var v$1270 = v$1269[0];
var v$1271 = v$1269[1];
return fix$1524.$process(v$1272,v$1274,[v$1273,v$1270],1,v$1271);
};
basics$Infixing$$7.process$1209 = fix$1524.$process;
basics$Infixing$$7.operator$1208 = fix$1524.$operator;
basics$Infixing$$7.resolveInfix$1277 = function(v$1282,v$1283){var v$1396 = basics$Infixing$$7.process$1209(v$1282,v$1283,null,0,null);
switch (v$1396[0]) { case 1: {var v$1397 = v$1396[1];
return basics$Infixing$$5.atomToFull$807(v$1397);
 break; }default: {return v$1396[1];
} };
};
return 0;
})();
