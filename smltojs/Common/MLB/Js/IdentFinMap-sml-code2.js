if ((typeof(syntax_objects$IdentFinMap$$2)) == "undefined") {syntax_objects$IdentFinMap$$2 = {};
};
(function(){syntax_objects$IdentFinMap$$2.eq_bal$1357 = function(v$1359,v$1360){switch (v$1359) { case 0: {switch (v$1360) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1360) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1360) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
var fix$1979 = {};
fix$1979.$eq_tree = function(v$1365,v$1366,v$1362){lab$eq_tree: while (true) {var v$1363 = v$1362[0];
var v$1364 = v$1362[1];
if (v$1363 == null) {return (v$1364 == null)?true:false;
} else {if (v$1364 == null) {return false;
} else {var v$1367 = v$1363;
var v$1368 = v$1364;
if (v$1365([v$1367[0],v$1368[0]])) {if (v$1366([v$1367[1],v$1368[1]])) {if (fix$1979.$eq_tree(v$1365,v$1366,[v$1367[2],v$1368[2]])) {var t$1980 = v$1365;
var t$1981 = v$1366;
var t$1982 = [v$1367[3],v$1368[3]];
var v$1365 = t$1980;
var v$1366 = t$1981;
var v$1362 = t$1982;
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
syntax_objects$IdentFinMap$$2.eq_tree$1361 = fix$1979.$eq_tree;
syntax_objects$IdentFinMap$$2.die$88 = function(s$91){return tools$Crash$.impossible$50("OrderFinMap." + s$91);
};
syntax_objects$IdentFinMap$$2.s$j$92 = function(v$97,v$98){return syntax_objects$IdentFinMap$$1.lt$46(v$97,v$98);
};
syntax_objects$IdentFinMap$$2.lt$99 = function(v$1372,v$1373){return syntax_objects$IdentFinMap$$1.lt$46(v$1372,v$1373);
};
syntax_objects$IdentFinMap$$2.eq$100 = function(v$109,v$110){return ((syntax_objects$IdentFinMap$$1.lt$46(v$109,v$110))?true:(syntax_objects$IdentFinMap$$1.lt$46(v$110,v$109)))?false:true;
};
syntax_objects$IdentFinMap$$2.empty$116 = function(v$1978){return null;
};
syntax_objects$IdentFinMap$$2.singleton$117 = function(v$1970,v$1971){return [v$1970,v$1971,null,null,2];
};
syntax_objects$IdentFinMap$$2.isEmpty$124 = function(v$127){return (v$127 == null)?true:false;
};
syntax_objects$IdentFinMap$$2.lookup$132 = function(t$135,key$138){var fix$1983 = {};
fix$1983.$search = function(v$142){lab$search: while (true) {if (v$142 == null) {return [1];
} else {var v$159 = v$142;
var v$160 = v$159[0];
var v$161 = v$159[1];
var v$162 = v$159[2];
var v$163 = v$159[3];
if (syntax_objects$IdentFinMap$$1.lt$46(key$138,v$160)) {var t$1984 = v$162;
var v$142 = t$1984;
continue lab$search;
} else {if (syntax_objects$IdentFinMap$$1.lt$46(v$160,key$138)) {var t$1985 = v$163;
var v$142 = t$1985;
continue lab$search;
} else {return [0,v$161];
};
};
};
};
};
var search$139 = fix$1983.$search;
return search$139(t$135);
};
syntax_objects$IdentFinMap$$2.en$Impossible$164 = new String("Impossible");
syntax_objects$IdentFinMap$$2.impossible$165 = function(s$168){throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMap" + s$168];
};
var en$ALREADYTHERE$169 = new String("ALREADYTHERE");
var exn$ALREADYTHERE$169 = [en$ALREADYTHERE$169];
syntax_objects$IdentFinMap$$2.add$392 = function(v$401,v$402,v$403){try {var fix$1987 = {};
fix$1987.$ins = function(v$1458){if (v$1458 == null) {return [true,[v$401,v$402,null,null,2]];
} else {var v$1459 = v$1458;
var v$1460 = v$1459[0];
var v$1461 = v$1459[1];
var v$1462 = v$1459[2];
var v$1463 = v$1459[3];
var v$1464 = v$1459[4];
if (syntax_objects$IdentFinMap$$1.lt$46(v$401,v$1460)) {var v$1468 = fix$1987.$ins(v$1462);
var v$1469 = v$1468[0];
var v$1470 = v$1468[1];
switch (v$1464) { case 2: {return v$1469?[true,[v$1460,v$1461,v$1470,v$1463,1]]:[false,[v$1460,v$1461,v$1470,v$1463,2]];
 break; }case 0: {return v$1469?[false,[v$1460,v$1461,v$1470,v$1463,2]]:[false,[v$1460,v$1461,v$1470,v$1463,0]];
 break; }default: {if (v$1469) {var v$1472;
if (v$1470 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMapAVLfinmap 1"];
} else {v$1472 = v$1470;
};
var v$1475 = v$1472[0];
var v$1476 = v$1472[1];
var v$1477 = v$1472[2];
var v$1478 = v$1472[3];
var v$1479 = v$1472[4];
var t$1988;
var v$1725 = 1;
switch (v$1479) { case 0: {switch (v$1725) { case 0: {t$1988 = true;
 break; }default: {t$1988 = false;
} };
 break; }case 1: {switch (v$1725) { case 1: {t$1988 = true;
 break; }default: {t$1988 = false;
} };
 break; }case 2: {switch (v$1725) { case 2: {t$1988 = true;
 break; }default: {t$1988 = false;
} };
 break; } };
if (t$1988) {return [false,[v$1475,v$1476,v$1477,[v$1460,v$1461,v$1478,v$1463,2],2]];
} else {var v$1487;
if (v$1478 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMapAVLfinmap 2"];
} else {v$1487 = v$1478;
};
var v$1490 = v$1487[0];
var v$1491 = v$1487[1];
var v$1492 = v$1487[2];
var v$1493 = v$1487[3];
var v$1494 = v$1487[4];
var t$2009 = false;
var t$2008;
var t$2007;
var t$2006 = v$1490;
var t$2005 = v$1491;
var t$2004;
var t$2003;
var t$2002 = v$1475;
var t$2001 = v$1476;
var t$2000 = v$1477;
var t$1999 = v$1492;
var t$1998;
var t$1997;
var v$1731 = 0;
switch (v$1494) { case 0: {switch (v$1731) { case 0: {t$1997 = true;
 break; }default: {t$1997 = false;
} };
 break; }case 1: {switch (v$1731) { case 1: {t$1997 = true;
 break; }default: {t$1997 = false;
} };
 break; }case 2: {switch (v$1731) { case 2: {t$1997 = true;
 break; }default: {t$1997 = false;
} };
 break; } };
t$1998 = (t$1997?1:2);
t$2003 = [t$2002,t$2001,t$2000,t$1999,t$1998];
t$2004 = t$2003;
var t$1996;
var t$1995;
var t$1994 = v$1460;
var t$1993 = v$1461;
var t$1992 = v$1493;
var t$1991 = v$1463;
var t$1990;
var t$1989;
var v$1735 = 1;
switch (v$1494) { case 0: {switch (v$1735) { case 0: {t$1989 = true;
 break; }default: {t$1989 = false;
} };
 break; }case 1: {switch (v$1735) { case 1: {t$1989 = true;
 break; }default: {t$1989 = false;
} };
 break; }case 2: {switch (v$1735) { case 2: {t$1989 = true;
 break; }default: {t$1989 = false;
} };
 break; } };
t$1990 = (t$1989?0:2);
t$1995 = [t$1994,t$1993,t$1992,t$1991,t$1990];
t$1996 = t$1995;
t$2007 = [t$2006,t$2005,t$2004,t$1996,2];
t$2008 = t$2007;
return [t$2009,t$2008];
};
} else {return [false,[v$1460,v$1461,v$1470,v$1463,1]];
};
} };
} else {if (syntax_objects$IdentFinMap$$1.lt$46(v$1460,v$401)) {var v$1512 = fix$1987.$ins(v$1463);
var v$1513 = v$1512[0];
var v$1514 = v$1512[1];
switch (v$1464) { case 2: {return v$1513?[true,[v$1460,v$1461,v$1462,v$1514,0]]:[false,[v$1460,v$1461,v$1462,v$1514,2]];
 break; }case 1: {return v$1513?[false,[v$1460,v$1461,v$1462,v$1514,2]]:[false,[v$1460,v$1461,v$1462,v$1514,1]];
 break; }default: {if (v$1513) {var v$1516;
if (v$1514 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMapAVLfinmap 3"];
} else {v$1516 = v$1514;
};
var v$1519 = v$1516[0];
var v$1520 = v$1516[1];
var v$1521 = v$1516[2];
var v$1522 = v$1516[3];
var v$1523 = v$1516[4];
var t$2010;
var v$1745 = 0;
switch (v$1523) { case 0: {switch (v$1745) { case 0: {t$2010 = true;
 break; }default: {t$2010 = false;
} };
 break; }case 1: {switch (v$1745) { case 1: {t$2010 = true;
 break; }default: {t$2010 = false;
} };
 break; }case 2: {switch (v$1745) { case 2: {t$2010 = true;
 break; }default: {t$2010 = false;
} };
 break; } };
if (t$2010) {return [false,[v$1519,v$1520,[v$1460,v$1461,v$1462,v$1521,2],v$1522,2]];
} else {var v$1531;
if (v$1521 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMapAVLfinmap 4"];
} else {v$1531 = v$1521;
};
var v$1534 = v$1531[0];
var v$1535 = v$1531[1];
var v$1536 = v$1531[2];
var v$1537 = v$1531[3];
var v$1538 = v$1531[4];
var t$2031 = false;
var t$2030;
var t$2029;
var t$2028 = v$1534;
var t$2027 = v$1535;
var t$2026;
var t$2025;
var t$2024 = v$1460;
var t$2023 = v$1461;
var t$2022 = v$1462;
var t$2021 = v$1536;
var t$2020;
var t$2019;
var v$1751 = 0;
switch (v$1538) { case 0: {switch (v$1751) { case 0: {t$2019 = true;
 break; }default: {t$2019 = false;
} };
 break; }case 1: {switch (v$1751) { case 1: {t$2019 = true;
 break; }default: {t$2019 = false;
} };
 break; }case 2: {switch (v$1751) { case 2: {t$2019 = true;
 break; }default: {t$2019 = false;
} };
 break; } };
t$2020 = (t$2019?1:2);
t$2025 = [t$2024,t$2023,t$2022,t$2021,t$2020];
t$2026 = t$2025;
var t$2018;
var t$2017;
var t$2016 = v$1519;
var t$2015 = v$1520;
var t$2014 = v$1537;
var t$2013 = v$1522;
var t$2012;
var t$2011;
var v$1755 = 1;
switch (v$1538) { case 0: {switch (v$1755) { case 0: {t$2011 = true;
 break; }default: {t$2011 = false;
} };
 break; }case 1: {switch (v$1755) { case 1: {t$2011 = true;
 break; }default: {t$2011 = false;
} };
 break; }case 2: {switch (v$1755) { case 2: {t$2011 = true;
 break; }default: {t$2011 = false;
} };
 break; } };
t$2012 = (t$2011?0:2);
t$2017 = [t$2016,t$2015,t$2014,t$2013,t$2012];
t$2018 = t$2017;
t$2029 = [t$2028,t$2027,t$2026,t$2018,2];
t$2030 = t$2029;
return [t$2031,t$2030];
};
} else {return [false,[v$1460,v$1461,v$1462,v$1514,0]];
};
} };
} else {throw exn$ALREADYTHERE$169;
};
};
};
};
var ins$1457 = fix$1987.$ins;
return (ins$1457(v$403))[1];
} catch(v$1986) {return (function(ALREADYTHERE$400){var t$2032 = ALREADYTHERE$400;
if (t$2032[0] == en$ALREADYTHERE$169) {var fix$2033 = {};
fix$2033.$repl = function(v$1577){if (v$1577 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMapAVLupdate.repl"];
} else {var v$1580 = v$1577;
var v$1581 = v$1580[0];
var v$1582 = v$1580[1];
var v$1583 = v$1580[2];
var v$1584 = v$1580[3];
var v$1585 = v$1580[4];
return (syntax_objects$IdentFinMap$$1.lt$46(v$401,v$1581))?[v$1581,v$1582,fix$2033.$repl(v$1583),v$1584,v$1585]:((syntax_objects$IdentFinMap$$1.lt$46(v$1581,v$401))?[v$1581,v$1582,v$1583,fix$2033.$repl(v$1584),v$1585]:[v$1581,v$402,v$1583,v$1584,v$1585]);
};
};
var repl$1576 = fix$2033.$repl;
return repl$1576(v$403);
} else {throw ALREADYTHERE$400;
};
})(v$1986);
};
};
var fix$2034 = {};
fix$2034.$plus = function(v$422,v$423){lab$plus: while (true) {if (v$423 == null) {return v$422;
} else {var v$417 = v$423;
var v$418 = v$417[0];
var v$419 = v$417[1];
var v$420 = v$417[2];
var v$421 = v$417[3];
var t$2035 = fix$2034.$plus(syntax_objects$IdentFinMap$$2.add$392(v$418,v$419,v$422),v$420);
var t$2036 = v$421;
var v$422 = t$2035;
var v$423 = t$2036;
continue lab$plus;
};
};
};
syntax_objects$IdentFinMap$$2.plus$404 = fix$2034.$plus;
var en$NOTFOUND$424 = new String("NOTFOUND");
var exn$NOTFOUND$424 = [en$NOTFOUND$424];
var delete$425 = function(v$710,v$711){var balance1$430 = function(v$433){if (v$433 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMap(balance1 on an empty map)"];
} else {var v$503 = v$433;
var v$504 = v$503[0];
var v$505 = v$503[1];
var v$506 = v$503[2];
var v$507 = v$503[3];
switch (v$503[4]) { case 1: {return [[v$504,v$505,v$506,v$507,2],true];
 break; }case 2: {return [[v$504,v$505,v$506,v$507,0],false];
 break; }default: {var v$490;
if (v$507 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMapAVLfinmap 5"];
} else {v$490 = v$507;
};
var v$491 = v$490[0];
var v$492 = v$490[1];
var v$493 = v$490[2];
var v$494 = v$490[3];
switch (v$490[4]) { case 1: {var v$477;
if (v$493 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMapAVLfinmap 6"];
} else {v$477 = v$493;
};
var v$478 = v$477[0];
var v$479 = v$477[1];
var v$480 = v$477[2];
var v$481 = v$477[3];
var v$482 = v$477[4];
var t$2056;
var t$2055;
var t$2054 = v$478;
var t$2053 = v$479;
var t$2052;
var t$2051;
var t$2050 = v$504;
var t$2049 = v$505;
var t$2048 = v$506;
var t$2047 = v$480;
var t$2046;
var t$2045;
var v$1773 = 0;
switch (v$482) { case 0: {switch (v$1773) { case 0: {t$2045 = true;
 break; }default: {t$2045 = false;
} };
 break; }case 1: {switch (v$1773) { case 1: {t$2045 = true;
 break; }default: {t$2045 = false;
} };
 break; }case 2: {switch (v$1773) { case 2: {t$2045 = true;
 break; }default: {t$2045 = false;
} };
 break; } };
t$2046 = (t$2045?1:2);
t$2051 = [t$2050,t$2049,t$2048,t$2047,t$2046];
t$2052 = t$2051;
var t$2044;
var t$2043;
var t$2042 = v$491;
var t$2041 = v$492;
var t$2040 = v$481;
var t$2039 = v$494;
var t$2038;
var t$2037;
var v$1775 = 1;
switch (v$482) { case 0: {switch (v$1775) { case 0: {t$2037 = true;
 break; }default: {t$2037 = false;
} };
 break; }case 1: {switch (v$1775) { case 1: {t$2037 = true;
 break; }default: {t$2037 = false;
} };
 break; }case 2: {switch (v$1775) { case 2: {t$2037 = true;
 break; }default: {t$2037 = false;
} };
 break; } };
t$2038 = (t$2037?0:2);
t$2043 = [t$2042,t$2041,t$2040,t$2039,t$2038];
t$2044 = t$2043;
t$2055 = [t$2054,t$2053,t$2052,t$2044,2];
t$2056 = t$2055;
return [t$2056,true];
 break; }case 2: {return [[v$491,v$492,[v$504,v$505,v$506,v$493,0],v$494,1],false];
 break; }default: {return [[v$491,v$492,[v$504,v$505,v$506,v$493,2],v$494,2],true];
} };
} };
};
};
var balance2$509 = function(v$512){if (v$512 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMap(balance2 on an empty map)"];
} else {var v$582 = v$512;
var v$583 = v$582[0];
var v$584 = v$582[1];
var v$585 = v$582[2];
var v$586 = v$582[3];
switch (v$582[4]) { case 0: {return [[v$583,v$584,v$585,v$586,2],true];
 break; }case 2: {return [[v$583,v$584,v$585,v$586,1],false];
 break; }default: {var v$569;
if (v$585 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMapAVLfinmap 7"];
} else {v$569 = v$585;
};
var v$570 = v$569[0];
var v$571 = v$569[1];
var v$572 = v$569[2];
var v$573 = v$569[3];
switch (v$569[4]) { case 0: {var v$556;
if (v$573 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMapAVLfinmap 8"];
} else {v$556 = v$573;
};
var v$557 = v$556[0];
var v$558 = v$556[1];
var v$559 = v$556[2];
var v$560 = v$556[3];
var v$561 = v$556[4];
var t$2076;
var t$2075;
var t$2074 = v$557;
var t$2073 = v$558;
var t$2072;
var t$2071;
var t$2070 = v$570;
var t$2069 = v$571;
var t$2068 = v$572;
var t$2067 = v$559;
var t$2066;
var t$2065;
var v$1785 = 0;
switch (v$561) { case 0: {switch (v$1785) { case 0: {t$2065 = true;
 break; }default: {t$2065 = false;
} };
 break; }case 1: {switch (v$1785) { case 1: {t$2065 = true;
 break; }default: {t$2065 = false;
} };
 break; }case 2: {switch (v$1785) { case 2: {t$2065 = true;
 break; }default: {t$2065 = false;
} };
 break; } };
t$2066 = (t$2065?1:2);
t$2071 = [t$2070,t$2069,t$2068,t$2067,t$2066];
t$2072 = t$2071;
var t$2064;
var t$2063;
var t$2062 = v$583;
var t$2061 = v$584;
var t$2060 = v$560;
var t$2059 = v$586;
var t$2058;
var t$2057;
var v$1783 = 1;
switch (v$561) { case 0: {switch (v$1783) { case 0: {t$2057 = true;
 break; }default: {t$2057 = false;
} };
 break; }case 1: {switch (v$1783) { case 1: {t$2057 = true;
 break; }default: {t$2057 = false;
} };
 break; }case 2: {switch (v$1783) { case 2: {t$2057 = true;
 break; }default: {t$2057 = false;
} };
 break; } };
t$2058 = (t$2057?0:2);
t$2063 = [t$2062,t$2061,t$2060,t$2059,t$2058];
t$2064 = t$2063;
t$2075 = [t$2074,t$2073,t$2072,t$2064,2];
t$2076 = t$2075;
return [t$2076,true];
 break; }case 2: {return [[v$570,v$571,v$572,[v$583,v$584,v$573,v$586,1],0],false];
 break; }default: {return [[v$570,v$571,v$572,[v$583,v$584,v$573,v$586,2],2],true];
} };
} };
};
};
var fix$2077 = {};
fix$2077.$remove_rightmost = function(v$591){if (v$591 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMap(remove_rightmost on empty map)"];
} else {var v$607 = v$591;
var v$608 = v$607[3];
if (v$608 == null) {return [v$607[2],v$607[0],v$607[1],true];
} else {var v$633 = v$607[0];
var v$634 = v$607[1];
var v$635 = v$607[2];
var v$636 = v$607[4];
var v$628 = fix$2077.$remove_rightmost(v$608);
var v$629 = v$628[0];
var v$630 = v$628[1];
var v$631 = v$628[2];
if (v$628[3]) {var v$625 = balance2$509([v$633,v$634,v$635,v$629,v$636]);
return [v$625[0],v$630,v$631,v$625[1]];
} else {return [[v$633,v$634,v$635,v$629,v$636],v$630,v$631,false];
};
};
};
};
var remove_rightmost$588 = fix$2077.$remove_rightmost;
var fix$2078 = {};
fix$2078.$del = function(v$640){lab$del: while (true) {if (v$640 == null) {throw exn$NOTFOUND$424;
} else {var v$700 = v$640;
var v$701 = v$700[0];
var v$702 = v$700[1];
var v$703 = v$700[2];
var v$704 = v$700[3];
var v$705 = v$700[4];
if (syntax_objects$IdentFinMap$$1.lt$46(v$710,v$701)) {var v$661 = fix$2078.$del(v$703);
var v$662 = v$661[0];
if (v$661[1]) {return balance1$430([v$701,v$702,v$662,v$704,v$705]);
} else {return [[v$701,v$702,v$662,v$704,v$705],false];
};
} else {if (syntax_objects$IdentFinMap$$1.lt$46(v$701,v$710)) {var v$675 = fix$2078.$del(v$704);
var v$676 = v$675[0];
if (v$675[1]) {return balance2$509([v$701,v$702,v$703,v$676,v$705]);
} else {return [[v$701,v$702,v$703,v$676,v$705],false];
};
} else {if (v$704 == null) {return [v$703,true];
} else {if (v$703 == null) {return [v$704,true];
} else {var v$695 = remove_rightmost$588(v$703);
var v$696 = v$695[0];
var v$697 = v$695[1];
var v$698 = v$695[2];
if (v$695[3]) {return balance1$430([v$697,v$698,v$696,v$704,v$705]);
} else {return [[v$697,v$698,v$696,v$704,v$705],false];
};
};
};
};
};
};
};
};
var del$637 = fix$2078.$del;
return (del$637(v$711))[0];
};
syntax_objects$IdentFinMap$$2.remove$712 = function(v$720,v$721){try {return [0,delete$425(v$720,v$721)];
} catch(v$2079) {return (function(NOTFOUND$719){var t$2080 = NOTFOUND$719;
if (t$2080[0] == en$NOTFOUND$424) {return [1];
} else {throw NOTFOUND$719;
};
})(v$2079);
};
};
syntax_objects$IdentFinMap$$2.delete$722 = function(v$730,v$731){try {return delete$425(v$730,v$731);
} catch(v$2081) {return (function(NOTFOUND$729){var t$2082 = NOTFOUND$729;
if (t$2082[0] == en$NOTFOUND$424) {return v$731;
} else {throw NOTFOUND$729;
};
})(v$2081);
};
};
syntax_objects$IdentFinMap$$2.dom$732 = function(m$735){var fix$2083 = {};
fix$2083.$dom$ = function(v$739,v$742){lab$dom$: while (true) {if (v$739 == null) {return v$742;
} else {var v$754 = v$739;
var v$755 = v$754[0];
var v$756 = v$754[2];
var v$757 = v$754[3];
var t$2084 = v$756;
var t$2085 = [v$755,fix$2083.$dom$(v$757,v$742)];
var v$739 = t$2084;
var v$742 = t$2085;
continue lab$dom$;
};
};
};
var dom$$736 = fix$2083.$dom$;
return dom$$736(m$735,null);
};
syntax_objects$IdentFinMap$$2.range$759 = function(m$762){var fix$2086 = {};
fix$2086.$ran = function(v$766,v$769){lab$ran: while (true) {if (v$766 == null) {return v$769;
} else {var v$781 = v$766;
var v$782 = v$781[1];
var v$783 = v$781[2];
var v$784 = v$781[3];
var t$2087 = v$783;
var t$2088 = [v$782,fix$2086.$ran(v$784,v$769)];
var v$766 = t$2087;
var v$769 = t$2088;
continue lab$ran;
};
};
};
var ran$763 = fix$2086.$ran;
return ran$763(m$762,null);
};
syntax_objects$IdentFinMap$$2.list$786 = function(m$789){var fix$2089 = {};
fix$2089.$li = function(v$793,v$796){lab$li: while (true) {if (v$793 == null) {return v$796;
} else {var v$809 = v$793;
var v$810 = v$809[0];
var v$811 = v$809[1];
var v$812 = v$809[2];
var v$813 = v$809[3];
var t$2090 = v$812;
var t$2091 = [[v$810,v$811],fix$2089.$li(v$813,v$796)];
var v$793 = t$2090;
var v$796 = t$2091;
continue lab$li;
};
};
};
var li$790 = fix$2089.$li;
return li$790(m$789,null);
};
var fix$2092 = {};
fix$2092.$composemap = function(f$818,t$821){if (t$821 == null) {return null;
} else {var v$832 = t$821;
var v$833 = v$832[0];
var v$834 = v$832[1];
var v$835 = v$832[2];
var v$836 = v$832[3];
var v$837 = v$832[4];
var l$$831 = fix$2092.$composemap(f$818,v$835);
return [v$833,f$818(v$834),l$$831,fix$2092.$composemap(f$818,v$836),v$837];
};
};
syntax_objects$IdentFinMap$$2.composemap$815 = fix$2092.$composemap;
var fix$2093 = {};
fix$2093.$ComposeMap = function(f$841,t$844){if (t$844 == null) {return null;
} else {var v$855 = t$844;
var v$856 = v$855[0];
var v$857 = v$855[1];
var v$858 = v$855[2];
var v$859 = v$855[3];
var v$860 = v$855[4];
var l$$854 = fix$2093.$ComposeMap(f$841,v$858);
return [v$856,f$841([v$856,v$857]),l$$854,fix$2093.$ComposeMap(f$841,v$859),v$860];
};
};
syntax_objects$IdentFinMap$$2.ComposeMap$838 = fix$2093.$ComposeMap;
syntax_objects$IdentFinMap$$2.fold$861 = function(f$864,e$867,t$870){var fix$2094 = {};
fix$2094.$fold$ = function(v$874,v$877){lab$fold$: while (true) {if (v$874 == null) {return v$877;
} else {var v$889 = v$874;
var v$890 = v$889[1];
var v$891 = v$889[2];
var v$892 = v$889[3];
var t$2095 = v$892;
var t$2096 = f$864([v$890,fix$2094.$fold$(v$891,v$877)]);
var v$874 = t$2095;
var v$877 = t$2096;
continue lab$fold$;
};
};
};
var fold$$871 = fix$2094.$fold$;
return fold$$871(t$870,e$867);
};
syntax_objects$IdentFinMap$$2.Fold$894 = function(f$897,e$900,t$903){var fix$2097 = {};
fix$2097.$fold$ = function(v$907,v$910){lab$fold$: while (true) {if (v$907 == null) {return v$910;
} else {var v$923 = v$907;
var v$924 = v$923[0];
var v$925 = v$923[1];
var v$926 = v$923[2];
var v$927 = v$923[3];
var t$2098 = v$927;
var t$2099 = f$897([[v$924,v$925],fix$2097.$fold$(v$926,v$910)]);
var v$907 = t$2098;
var v$910 = t$2099;
continue lab$fold$;
};
};
};
var fold$$904 = fix$2097.$fold$;
return fold$$904(t$903,e$900);
};
syntax_objects$IdentFinMap$$2.filter$929 = function(f$932,t$935){var fix$2100 = {};
fix$2100.$fold$ = function(v$1832,v$1833){lab$fold$: while (true) {if (v$1832 == null) {return v$1833;
} else {var v$1834 = v$1832;
var v$1835 = v$1834[0];
var v$1836 = v$1834[1];
var v$1837 = v$1834[2];
var v$1838 = v$1834[3];
var t$2102 = v$1838;
var t$2101;
var v$1963 = fix$2100.$fold$(v$1837,v$1833);
t$2101 = ((f$932([v$1835,v$1836]))?(syntax_objects$IdentFinMap$$2.add$392(v$1835,v$1836,v$1963)):v$1963);
var t$2103 = t$2102;
var t$2104 = t$2101;
var v$1832 = t$2103;
var v$1833 = t$2104;
continue lab$fold$;
};
};
};
var fold$$1831 = fix$2100.$fold$;
return fold$$1831(t$935,syntax_objects$IdentFinMap$$2.empty$116(0));
};
var fix$2105 = {};
fix$2105.$addList = function(v$952,v$955){lab$addList: while (true) {if (v$952 == null) {return v$955;
} else {var v$967 = v$952;
var v$968 = v$967[0];
var v$969 = v$968[0];
var v$970 = v$968[1];
var v$971 = v$967[1];
var t$2106 = v$971;
var t$2107 = syntax_objects$IdentFinMap$$2.add$392(v$969,v$970,v$955);
var v$952 = t$2106;
var v$955 = t$2107;
continue lab$addList;
};
};
};
syntax_objects$IdentFinMap$$2.addList$949 = fix$2105.$addList;
syntax_objects$IdentFinMap$$2.fromList$973 = function(l$976){return syntax_objects$IdentFinMap$$2.addList$949(l$976,syntax_objects$IdentFinMap$$2.empty$116(0));
};
syntax_objects$IdentFinMap$$2.fromSortedList$977 = function(l$980){var fix$2108 = {};
fix$2108.$build = function(v$1009,v$1972){switch (v$1009) { case 0: {return [v$1972,null];
 break; }default: {var n$$1011 = SmlPrims.div_i32(v$1009,2,CompilerInitial.exn$Div$40);
var v$1042 = fix$2108.$build(n$$1011,v$1972);
var v$1043 = v$1042[0];
var v$1044 = v$1042[1];
var v$1025;
if (v$1043 == null) {throw [syntax_objects$IdentFinMap$$2.en$Impossible$164,"OrderFinMapbuild"];
} else {var v$1037 = v$1043;
var v$1038 = v$1037[0];
v$1025 = [v$1038[0],v$1038[1],v$1037[1]];
};
var v$1026 = v$1025[0];
var v$1027 = v$1025[1];
var v$1028 = v$1025[2];
var v$1022 = fix$2108.$build(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$1009 - n$$1011)) - 1),v$1028);
return [v$1022[0],[v$1026,v$1027,v$1044,v$1022[1]]];
} };
};
var build$998 = fix$2108.$build;
var fix$2109 = {};
fix$2109.$mk_avl = function(v$1060){if (v$1060 == null) {return [null,0];
} else {var v$1089 = v$1060;
var v$1090 = v$1089[0];
var v$1091 = v$1089[1];
var v$1092 = v$1089[2];
var v$1093 = v$1089[3];
var v$1086 = fix$2109.$mk_avl(v$1092);
var v$1087 = v$1086[0];
var v$1088 = v$1086[1];
var v$1083 = fix$2109.$mk_avl(v$1093);
var v$1084 = v$1083[0];
var v$1085 = v$1083[1];
return [[v$1090,v$1091,v$1087,v$1084,(v$1088 == v$1085)?2:((v$1088 > v$1085)?1:0)],SmlPrims.chk_ovf_i32(1 + ((v$1088 > v$1085)?v$1088:v$1085))];
};
};
var mk_avl$1057 = fix$2109.$mk_avl;
var t$2118;
var t$2117 = mk_avl$1057;
var t$2116;
var t$2115;
var t$2114 = build$998;
var t$2113;
var fix$2110 = {};
fix$2110.$acc = function(v$1647,v$1648){lab$acc: while (true) {if (v$1647 == null) {return v$1648;
} else {var v$1649 = v$1647;
var v$1650 = v$1649[1];
var t$2111 = v$1650;
var t$2112 = SmlPrims.chk_ovf_i32(v$1648 + 1);
var v$1647 = t$2111;
var v$1648 = t$2112;
continue lab$acc;
};
};
};
var acc$1646 = fix$2110.$acc;
t$2113 = (acc$1646(l$980,0));
t$2115 = (t$2114(t$2113,l$980));
t$2116 = t$2115[1];
t$2118 = (t$2117(t$2116));
return t$2118[0];
};
syntax_objects$IdentFinMap$$2.mergeMap$1102 = function(f$1105,t1$1108,t2$1111){var fix$2119 = {};
fix$2119.$merge = function(v$1132,v$1973){if (v$1132 == null) {return v$1973;
} else {if (v$1973 == null) {return v$1132;
} else {var v$1143 = v$1132;
var v$1144 = v$1143[0];
var v$1145 = v$1144[0];
var v$1146 = v$1144[1];
var v$1147 = v$1143[1];
var v$1148 = v$1973;
var v$1149 = v$1148[0];
var v$1150 = v$1149[0];
var v$1151 = v$1149[1];
var v$1152 = v$1148[1];
return (syntax_objects$IdentFinMap$$1.lt$46(v$1145,v$1150))?[[v$1145,v$1146],fix$2119.$merge(v$1147,v$1973)]:((syntax_objects$IdentFinMap$$1.lt$46(v$1150,v$1145))?[[v$1150,v$1151],fix$2119.$merge(v$1132,v$1152)]:[[v$1145,f$1105([v$1146,v$1151])],fix$2119.$merge(v$1147,v$1152)]);
};
};
};
var merge$1112 = fix$2119.$merge;
var t$2130 = syntax_objects$IdentFinMap$$2.fromSortedList$977;
var t$2129;
var t$2128 = merge$1112;
var t$2127;
var fix$2124 = {};
fix$2124.$li = function(v$1841,v$1842){lab$li: while (true) {if (v$1841 == null) {return v$1842;
} else {var v$1843 = v$1841;
var v$1844 = v$1843[0];
var v$1845 = v$1843[1];
var v$1846 = v$1843[2];
var v$1847 = v$1843[3];
var t$2125 = v$1846;
var t$2126 = [[v$1844,v$1845],fix$2124.$li(v$1847,v$1842)];
var v$1841 = t$2125;
var v$1842 = t$2126;
continue lab$li;
};
};
};
var li$1840 = fix$2124.$li;
t$2127 = (li$1840(t1$1108,null));
var t$2123;
var fix$2120 = {};
fix$2120.$li = function(v$1850,v$1851){lab$li: while (true) {if (v$1850 == null) {return v$1851;
} else {var v$1852 = v$1850;
var v$1853 = v$1852[0];
var v$1854 = v$1852[1];
var v$1855 = v$1852[2];
var v$1856 = v$1852[3];
var t$2121 = v$1855;
var t$2122 = [[v$1853,v$1854],fix$2120.$li(v$1856,v$1851)];
var v$1850 = t$2121;
var v$1851 = t$2122;
continue lab$li;
};
};
};
var li$1849 = fix$2120.$li;
t$2123 = (li$1849(t2$1111,null));
t$2129 = (t$2128(t$2127,t$2123));
return t$2130(t$2129);
};
var fix$2131 = {};
fix$2131.$oneForWhich = function(f$1156,t$1159){lab$oneForWhich: while (true) {if (t$1159 == null) {return [1];
} else {var v$1179 = t$1159;
var v$1180 = v$1179[0];
var v$1181 = v$1179[1];
var v$1182 = v$1179[2];
var v$1183 = v$1179[3];
if (f$1156([v$1180,v$1181])) {return [0,[v$1180,v$1181]];
} else {var v$1176 = fix$2131.$oneForWhich(f$1156,v$1182);
switch (v$1176[0]) { case 0: {var v$1178 = v$1176[1];
return [0,v$1178];
 break; }default: {var t$2132 = f$1156;
var t$2133 = v$1183;
var f$1156 = t$2132;
var t$1159 = t$2133;
continue lab$oneForWhich;
} };
};
};
};
};
syntax_objects$IdentFinMap$$2.oneForWhich$1153 = fix$2131.$oneForWhich;
syntax_objects$IdentFinMap$$2.en$Restrict$1184 = new String("Restrict");
syntax_objects$IdentFinMap$$2.restrict$1185 = function(v$1204,v$1205,v$1206){var fix$2134 = {};
fix$2134.$foldl = function(v$1661,v$1662){if (v$1662 == null) {return v$1661;
} else {var v$1663 = v$1662;
var v$1664 = v$1663[0];
var v$1665 = v$1663[1];
var t$2139 = fix$2134.$foldl;
var t$2138;
var v$1869;
var fix$2135 = {};
fix$2135.$search = function(v$1873){lab$search: while (true) {if (v$1873 == null) {return [1];
} else {var v$1874 = v$1873;
var v$1875 = v$1874[0];
var v$1876 = v$1874[1];
var v$1877 = v$1874[2];
var v$1878 = v$1874[3];
if (syntax_objects$IdentFinMap$$1.lt$46(v$1664,v$1875)) {var t$2136 = v$1877;
var v$1873 = t$2136;
continue lab$search;
} else {if (syntax_objects$IdentFinMap$$1.lt$46(v$1875,v$1664)) {var t$2137 = v$1878;
var v$1873 = t$2137;
continue lab$search;
} else {return [0,v$1876];
};
};
};
};
};
var search$1872 = fix$2135.$search;
v$1869 = (search$1872(v$1205));
switch (v$1869[0]) { case 0: {var v$1879 = v$1869[1];
t$2138 = (syntax_objects$IdentFinMap$$2.add$392(v$1664,v$1879,v$1661));
 break; }default: {throw [syntax_objects$IdentFinMap$$2.en$Restrict$1184,v$1204(v$1664)];
} };
return t$2139(t$2138,v$1665);
};
};
var foldl$1660 = fix$2134.$foldl;
return foldl$1660(syntax_objects$IdentFinMap$$2.empty$116(0),v$1206);
};
syntax_objects$IdentFinMap$$2.enrich$1207 = function(en$1210,v$1214){var v$1235 = v$1214[0];
var v$1236 = v$1214[1];
var fix$2140 = {};
fix$2140.$fold$ = function(v$1884,v$1885){if (v$1884 == null) {return v$1885;
} else {var v$1886 = v$1884;
var v$1887 = v$1886[0];
var v$1888 = v$1886[1];
var v$1889 = v$1886[2];
var v$1890 = v$1886[3];
var t$2146 = fix$2140.$fold$;
var t$2145 = v$1890;
var t$2144;
if (fix$2140.$fold$(v$1889,v$1885)) {var v$1953;
var fix$2141 = {};
fix$2141.$search = function(v$1955){lab$search: while (true) {if (v$1955 == null) {return [1];
} else {var v$1956 = v$1955;
var v$1957 = v$1956[0];
var v$1958 = v$1956[1];
var v$1959 = v$1956[2];
var v$1960 = v$1956[3];
if (syntax_objects$IdentFinMap$$1.lt$46(v$1887,v$1957)) {var t$2142 = v$1959;
var v$1955 = t$2142;
continue lab$search;
} else {if (syntax_objects$IdentFinMap$$1.lt$46(v$1957,v$1887)) {var t$2143 = v$1960;
var v$1955 = t$2143;
continue lab$search;
} else {return [0,v$1958];
};
};
};
};
};
var search$1954 = fix$2141.$search;
v$1953 = (search$1954(v$1235));
switch (v$1953[0]) { case 0: {var v$1961 = v$1953[1];
t$2144 = (en$1210([v$1961,v$1888]));
 break; }default: {t$2144 = false;
} };
} else {t$2144 = false;
};
return t$2146(t$2145,t$2144);
};
};
var fold$$1883 = fix$2140.$fold$;
return fold$$1883(v$1236,true);
};
syntax_objects$IdentFinMap$$2.layoutMap$1237 = function(v$1270,v$1272,v$1271,v$1269){return function(layoutDom$1246){return function(layoutRan$1249){return function(m$1252){var t$2154;
var t$2150;
var l$1667;
var fix$2147 = {};
fix$2147.$li = function(v$1902,v$1903){lab$li: while (true) {if (v$1902 == null) {return v$1903;
} else {var v$1904 = v$1902;
var v$1905 = v$1904[0];
var v$1906 = v$1904[1];
var v$1907 = v$1904[2];
var v$1908 = v$1904[3];
var t$2148 = v$1907;
var t$2149 = [[v$1905,v$1906],fix$2147.$li(v$1908,v$1903)];
var v$1902 = t$2148;
var v$1903 = t$2149;
continue lab$li;
};
};
};
var li$1901 = fix$2147.$li;
l$1667 = (li$1901(m$1252,null));
var fix$2151 = {};
fix$2151.$map = function(v$1669){if (v$1669 == null) {return null;
} else {var v$1670 = v$1669;
var v$1671 = v$1670[0];
var v$1672 = v$1670[1];
var t$2153;
var t$2152;
var v$1910 = v$1671[0];
var v$1911 = v$1671[1];
t$2152 = [0,[[layoutDom$1246(v$1910),[layoutRan$1249(v$1911),null]],[0,v$1270],"",3,""]];
t$2153 = [t$2152,fix$2151.$map(v$1672)];
return t$2153;
};
};
var map$1668 = fix$2151.$map;
t$2150 = (map$1668(l$1667));
t$2154 = [t$2150,[0,v$1271],v$1272,3,v$1269];
return [0,t$2154];
};
};
};
};
syntax_objects$IdentFinMap$$2.reportMap$1273 = function(f$1276,t$1279){var t$2160 = tools$Report$.flatten$78;
var t$2158;
var l$1674;
var fix$2155 = {};
fix$2155.$li = function(v$1914,v$1915){lab$li: while (true) {if (v$1914 == null) {return v$1915;
} else {var v$1916 = v$1914;
var v$1917 = v$1916[0];
var v$1918 = v$1916[1];
var v$1919 = v$1916[2];
var v$1920 = v$1916[3];
var t$2156 = v$1919;
var t$2157 = [[v$1917,v$1918],fix$2155.$li(v$1920,v$1915)];
var v$1914 = t$2156;
var v$1915 = t$2157;
continue lab$li;
};
};
};
var li$1913 = fix$2155.$li;
l$1674 = (li$1913(t$1279,null));
var fix$2159 = {};
fix$2159.$map = function(v$1676){if (v$1676 == null) {return null;
} else {var v$1677 = v$1676;
var v$1678 = v$1677[0];
var v$1679 = v$1677[1];
return [f$1276(v$1678),fix$2159.$map(v$1679)];
};
};
var map$1675 = fix$2159.$map;
t$2158 = (map$1675(l$1674));
return t$2160(t$2158);
};
syntax_objects$IdentFinMap$$2.reportMapSORTED$1280 = function(f$1680,t$1681){var t$2166 = tools$Report$.flatten$78;
var t$2164;
var l$1683;
var fix$2161 = {};
fix$2161.$li = function(v$1923,v$1924){lab$li: while (true) {if (v$1923 == null) {return v$1924;
} else {var v$1925 = v$1923;
var v$1926 = v$1925[0];
var v$1927 = v$1925[1];
var v$1928 = v$1925[2];
var v$1929 = v$1925[3];
var t$2162 = v$1928;
var t$2163 = [[v$1926,v$1927],fix$2161.$li(v$1929,v$1924)];
var v$1923 = t$2162;
var v$1924 = t$2163;
continue lab$li;
};
};
};
var li$1922 = fix$2161.$li;
l$1683 = (li$1922(t$1681,null));
var fix$2165 = {};
fix$2165.$map = function(v$1685){if (v$1685 == null) {return null;
} else {var v$1686 = v$1685;
var v$1687 = v$1686[0];
var v$1688 = v$1686[1];
return [f$1680(v$1687),fix$2165.$map(v$1688)];
};
};
var map$1684 = fix$2165.$map;
t$2164 = (map$1684(l$1683));
return t$2166(t$2164);
};
syntax_objects$IdentFinMap$$2.pu_bal$1281 = pickle$pickle$.enumGen$2149(function(v$1689){var v$1690 = v$1689[0];
var v$1691 = v$1689[1];
switch (v$1690) { case 0: {switch (v$1691) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1691) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1691) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderFinMap.bal",[1,[2,[0,null]]]]);
syntax_objects$IdentFinMap$$2.pu$1282 = function(pu_dom$1285,pu_r$1288){var fun_E$1297;
var v$1976 = null;
fun_E$1297 = (function(v$1977){return pickle$pickle$.con0$1979(v$1976,v$1977);
});
return pickle$pickle$.dataGen$1479(["OrderFinMap.map",function(v$1694){return (v$1694 == null)?0:1;
},[fun_E$1297,[function(pu$1695){return pickle$pickle$.con1$2005(function(v$1696){var v$1697 = v$1696[0];
return [v$1697[0],v$1697[1],v$1697[2],v$1697[3],v$1696[1]];
},function(v$1698){if (v$1698 == null) {return tools$Crash$.impossible$50("OrderFinMap.pu.fun_N");
} else {var v$1699 = v$1698;
return [[v$1699[0],v$1699[1],v$1699[2],v$1699[3]],v$1699[4]];
};
},pickle$pickle$.pairGen0$974(pickle$pickle$.tup4Gen0$2368(pu_dom$1285,pu_r$1288,pu$1695,pu$1695),syntax_objects$IdentFinMap$$2.pu_bal$1281));
},null]]]);
};
return 0;
})();
