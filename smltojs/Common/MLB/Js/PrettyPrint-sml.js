if ((typeof(tools$PrettyPrint$)) == "undefined") {tools$PrettyPrint$ = {};
};
(function(){tools$PrettyPrint$.eq_childsep$1127 = function(v$1129,v$1130){switch (v$1129[0]) { case 0: {switch (v$1130[0]) { case 0: {return v$1129[1] == v$1130[1];
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1130[0]) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1130[0]) { case 2: {return v$1129[1] == v$1130[1];
 break; }default: {return false;
} };
 break; } };
};
var fix$1744 = {};
fix$1744.$eq_StringTree = function(v$1139,v$1140){switch (v$1139[0]) { case 0: {switch (v$1140[0]) { case 0: {var v$1141 = v$1139[1];
var v$1142 = v$1140[1];
var t$1874;
var fix$1871 = {};
fix$1871.$eq_list = function(v$1174,v$1175){lab$eq_list: while (true) {if (v$1174 == null) {return (v$1175 == null)?true:false;
} else {if (v$1175 == null) {return false;
} else {var v$1176 = v$1174;
var v$1177 = v$1175;
if (fix$1744.$eq_StringTree(v$1176[0],v$1177[0])) {var t$1872 = v$1176[1];
var t$1873 = v$1177[1];
var v$1174 = t$1872;
var v$1175 = t$1873;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$1172 = fix$1871.$eq_list;
t$1874 = (eq_list$1172(v$1141[0],v$1142[0]));
if (t$1874) {var t$1870;
var v$1567 = v$1141[1];
var v$1568 = v$1142[1];
switch (v$1567[0]) { case 0: {switch (v$1568[0]) { case 0: {t$1870 = (v$1567[1] == v$1568[1]);
 break; }default: {t$1870 = false;
} };
 break; }case 1: {switch (v$1568[0]) { case 1: {t$1870 = true;
 break; }default: {t$1870 = false;
} };
 break; }case 2: {switch (v$1568[0]) { case 2: {t$1870 = (v$1567[1] == v$1568[1]);
 break; }default: {t$1870 = false;
} };
 break; } };
return t$1870?((v$1141[2] == v$1142[2])?((v$1141[3] == v$1142[3])?(v$1141[4] == v$1142[4]):false):false):false;
} else {return false;
};
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1140[0]) { case 1: {return v$1139[1] == v$1140[1];
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1140[0]) { case 2: {var v$1150 = v$1139[1];
var v$1151 = v$1140[1];
var t$1869;
var fix$1866 = {};
fix$1866.$eq_list = function(v$1191,v$1192){lab$eq_list: while (true) {if (v$1191 == null) {return (v$1192 == null)?true:false;
} else {if (v$1192 == null) {return false;
} else {var v$1193 = v$1191;
var v$1194 = v$1192;
if (fix$1744.$eq_StringTree(v$1193[0],v$1194[0])) {var t$1867 = v$1193[1];
var t$1868 = v$1194[1];
var v$1191 = t$1867;
var v$1192 = t$1868;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$1189 = fix$1866.$eq_list;
t$1869 = (eq_list$1189(v$1150[0],v$1151[0]));
if (t$1869) {var t$1865;
var v$1585 = v$1150[1];
var v$1586 = v$1151[1];
switch (v$1585[0]) { case 0: {switch (v$1586[0]) { case 0: {t$1865 = (v$1585[1] == v$1586[1]);
 break; }default: {t$1865 = false;
} };
 break; }case 1: {switch (v$1586[0]) { case 1: {t$1865 = true;
 break; }default: {t$1865 = false;
} };
 break; }case 2: {switch (v$1586[0]) { case 2: {t$1865 = (v$1585[1] == v$1586[1]);
 break; }default: {t$1865 = false;
} };
 break; } };
return t$1865?((v$1150[2] == v$1151[2])?(v$1150[3] == v$1151[3]):false):false;
} else {return false;
};
 break; }default: {return false;
} };
 break; } };
};
tools$PrettyPrint$.eq_StringTree$1137 = fix$1744.$eq_StringTree;
var fix$1745 = {};
fix$1745.$eq_minipage = function(v$1157,v$1158){switch (v$1157[0]) { case 0: {switch (v$1158[0]) { case 0: {var v$1159 = v$1157[1];
var v$1160 = v$1158[1];
if (fix$1745.$eq_minipage(v$1159[0],v$1160[0])) {return fix$1745.$eq_minipage(v$1159[1],v$1160[1]);
} else {return false;
};
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1158[0]) { case 1: {var v$1162 = v$1157[1];
var v$1163 = v$1158[1];
var fix$1862 = {};
fix$1862.$eq_list = function(v$1209,v$1210){lab$eq_list: while (true) {if (v$1209 == null) {return (v$1210 == null)?true:false;
} else {if (v$1210 == null) {return false;
} else {var v$1211 = v$1209;
var v$1212 = v$1210;
if (v$1211[0] == v$1212[0]) {var t$1863 = v$1211[1];
var t$1864 = v$1212[1];
var v$1209 = t$1863;
var v$1210 = t$1864;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$1207 = fix$1862.$eq_list;
return eq_list$1207(v$1162,v$1163);
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1158[0]) { case 2: {var v$1165 = v$1157[1];
var v$1166 = v$1158[1];
if (v$1165[0] == v$1166[0]) {return fix$1745.$eq_minipage(v$1165[1],v$1166[1]);
} else {return false;
};
 break; }default: {return false;
} };
 break; } };
};
tools$PrettyPrint$.eq_minipage$1155 = fix$1745.$eq_minipage;
tools$PrettyPrint$.raggedRight$55 = [true];
tools$PrettyPrint$.colwidth$56 = [100];
var fix$1746 = {};
fix$1746.$intersperce = function(v$110,v$113,v$116){if (v$116 == null) {return null;
} else {var v$138 = v$116;
var v$139 = v$138[1];
if (v$139 == null) {return [v$138[0],null];
} else {if (v$110) {return [v$138[0] + v$113,fix$1746.$intersperce(true,v$113,v$139)];
} else {var v$147 = v$138[0];
var v$148 = v$139;
var v$149 = v$148[0];
var v$150 = v$148[1];
return [v$147,fix$1746.$intersperce(false,v$113,[v$113 + v$149,v$150])];
};
};
};
};
var intersperce$107 = fix$1746.$intersperce;
tools$PrettyPrint$.layoutAtom$176 = function(f$179,x$182){return [1,f$179(x$182)];
};
tools$PrettyPrint$.layoutSet$183 = function(f$186,set$189){var t$1747;
var v$193 = [0,", "];
var t$1748;
var l$1219 = edlib$EqSet$.list$98(set$189);
var fix$1749 = {};
fix$1749.$map = function(v$1221){if (v$1221 == null) {return null;
} else {var v$1222 = v$1221;
var v$1223 = v$1222[0];
var v$1224 = v$1222[1];
return [f$186(v$1223),fix$1749.$map(v$1224)];
};
};
var map$1220 = fix$1749.$map;
t$1748 = (map$1220(l$1219));
t$1747 = [t$1748,v$193,"}",1,"{"];
return [0,t$1747];
};
tools$PrettyPrint$.layout_opt$195 = function(v$198,v$201){switch (v$201[0]) { case 0: {var v$212 = v$201[1];
return v$198(v$212);
 break; }default: {return [1,"_|_"];
} };
};
tools$PrettyPrint$.layout_pair$214 = function(layout_x$217,layout_y$220,v$224){var v$230 = v$224[0];
var v$231 = v$224[1];
var t$1750;
var v$227 = [0,","];
t$1750 = [[layout_x$217(v$230),[layout_y$220(v$231),null]],v$227,")",1,"("];
return [0,t$1750];
};
tools$PrettyPrint$.layout_list$232 = function(layout$235,xs$238){var t$1751;
var v$242 = [0,", "];
var t$1753;
var fix$1752 = {};
fix$1752.$map = function(v$1228){if (v$1228 == null) {return null;
} else {var v$1229 = v$1228;
var v$1230 = v$1229[0];
var v$1231 = v$1229[1];
return [layout$235(v$1230),fix$1752.$map(v$1231)];
};
};
var map$1227 = fix$1752.$map;
t$1753 = (map$1227(xs$238));
t$1751 = [t$1753,v$242,"]",1,"["];
return [0,t$1751];
};
tools$PrettyPrint$.layout_together$244 = function(children$247,indent$250){return [0,[children$247,[1],"",indent$250,""]];
};
var en$FlatString$256 = new String("FlatString");
var exn$FlatString$256 = [en$FlatString$256];
var fix$1754 = {};
fix$1754.$fold = function(v$276,v$279){var v$303 = v$279[0];
switch (v$303[0]) { case 1: {var v$315 = v$303[1];
var v$316 = v$279[1];
return v$276([v$315,v$316]);
 break; }case 0: {var v$306 = v$303[1];
var v$307 = v$306[4];
var v$308 = v$306[2];
var v$310 = v$306[0];
var v$311 = v$306[1];
var v$312 = v$279[1];
return v$276([v$308,fix$1754.$foldChildren(v$276,[v$310,v$311,v$276([v$307,v$312])])]);
 break; }default: {var v$318 = v$303[1];
var v$319 = v$318[3];
var v$320 = v$318[2];
var v$321 = v$318[0];
var v$322 = v$318[1];
var v$323 = v$279[1];
return v$276([v$320,fix$1754.$foldChildren(v$276,[v$321,v$322,v$276([v$319,v$323])])]);
} };
};
fix$1754.$foldChildren = function(v$326,v$329){var v$361 = v$329[0];
if (v$361 == null) {return v$329[2];
} else {var v$365 = v$361;
var v$366 = v$365[1];
if (v$366 == null) {var v$368 = v$365[0];
var v$369 = v$329[2];
return fix$1754.$fold(v$326,[v$368,v$369]);
} else {var v$370 = v$329[1];
switch (v$370[0]) { case 1: {var v$377 = v$365[0];
var v$378 = v$329[2];
return fix$1754.$foldChildren(v$326,[v$366,[1],fix$1754.$fold(v$326,[v$377,v$378])]);
 break; }case 0: {var v$373 = v$365[0];
var v$374 = v$370[1];
var v$375 = v$329[2];
return fix$1754.$foldChildren(v$326,[v$366,[0,v$374],v$326([v$374,fix$1754.$fold(v$326,[v$373,v$375])])]);
 break; }default: {var v$380 = v$365[0];
var v$381 = v$370[1];
var v$382 = v$329[2];
return fix$1754.$foldChildren(v$326,[v$366,[2,v$381],v$326([v$381,fix$1754.$fold(v$326,[v$380,v$382])])]);
} };
};
};
};
var fold$273 = fix$1754.$fold;
var foldChildren$272 = fix$1754.$foldChildren;
tools$PrettyPrint$.flatten1$388 = function(x$1236){return SmlPrims.concat(basis$List$.rev$641(fold$273(function(v$1661){return v$1661;
},[x$1236,null])));
};
tools$PrettyPrint$.oneLiner$400 = function(f$403,x$406){var x$1662 = f$403(x$406);
return SmlPrims.concat(basis$List$.rev$641(fold$273(function(v$1664){return v$1664;
},[x$1662,null])));
};
var pilePages$410;
var b$1248 = [1,null];
pilePages$410 = (function(c$1249){var fix$1755 = {};
fix$1755.$foldr = function(v$1251){if (v$1251 == null) {return b$1248;
} else {var v$1252 = v$1251;
var v$1253 = v$1252[0];
var v$1254 = v$1252[1];
var v$1665 = [v$1253,fix$1755.$foldr(v$1254)];
return [0,v$1665];
};
};
var foldr$1250 = fix$1755.$foldr;
return foldr$1250(c$1249);
});
var fix$1756 = {};
fix$1756.$blanks = function(n$440){return (n$440 <= 0)?"":(" " + (fix$1756.$blanks(SmlPrims.chk_ovf_i32(n$440 - 1))));
};
var blanks$437 = fix$1756.$blanks;
var get_first_line$452 = function(m$455){var fix$1757 = {};
fix$1757.$loop = function(v$496,v$497){lab$loop: while (true) {switch (v$497[0]) { case 1: {var v$480 = v$497[1];
if (v$480 == null) {return [1];
} else {var v$481 = v$480;
var v$482 = v$481[0];
var v$483 = v$481[1];
var t$1762;
var t$1761 = (blanks$437(v$496)) + v$482;
var t$1760;
var m$1261 = [1,v$483];
switch (m$1261[0]) { case 1: {t$1760 = [2,[v$496,m$1261]];
 break; }case 2: {var v$1262 = m$1261[1];
var v$1263 = v$1262[0];
var v$1264 = v$1262[1];
t$1760 = [2,[SmlPrims.chk_ovf_i32(v$496 + v$1263),v$1264]];
 break; }default: {t$1760 = [2,[v$496,m$1261]];
} };
t$1762 = [t$1761,t$1760];
return [0,t$1762];
};
 break; }case 2: {var v$476 = v$497[1];
var v$477 = v$476[0];
var v$478 = v$476[1];
var t$1758 = SmlPrims.chk_ovf_i32(v$496 + v$477);
var t$1759 = v$478;
var v$496 = t$1758;
var v$497 = t$1759;
continue lab$loop;
 break; }default: {var v$493 = v$497[1];
var v$494 = v$493[0];
var v$495 = v$493[1];
var v$489 = fix$1757.$loop(v$496,v$494);
switch (v$489[0]) { case 1: {var t$1763 = v$496;
var t$1764 = v$495;
var v$496 = t$1763;
var v$497 = t$1764;
continue lab$loop;
 break; }default: {var v$490 = v$489[1];
var t$1770;
var t$1769 = v$490[0];
var t$1768;
var t$1767;
var t$1766 = v$490[1];
var t$1765;
switch (v$495[0]) { case 1: {t$1765 = [2,[v$496,v$495]];
 break; }case 2: {var v$1267 = v$495[1];
var v$1268 = v$1267[0];
var v$1269 = v$1267[1];
t$1765 = [2,[SmlPrims.chk_ovf_i32(v$496 + v$1268),v$1269]];
 break; }default: {t$1765 = [2,[v$496,v$495]];
} };
t$1767 = [t$1766,t$1765];
t$1768 = [0,t$1767];
t$1770 = [t$1769,t$1768];
return [0,t$1770];
} };
} };
};
};
var loop$456 = fix$1757.$loop;
return loop$456(0,m$455);
};
var smash$546 = function(v$584,v$585,v$586){var en$No$552 = new String("No");
var exn$No$552 = [en$No$552];
var fix$1771 = {};
fix$1771.$try = function(v$570,v$1717){if (v$570 == null) {return v$1717;
} else {if (v$1717 == null) {return v$570;
} else {var v$574 = v$1717;
switch (v$574[0]) { case 32: {var v$576 = v$570;
var v$577 = v$576[0];
var v$578 = v$576[1];
var v$579 = v$574[1];
return [v$577,fix$1771.$try(v$578,v$579)];
 break; }default: {throw exn$No$552;
} };
};
};
};
var try$553 = fix$1771.$try;
try {var t$1787;
var t$1786;
var t$1785;
var t$1784;
var t$1783;
var t$1782;
var t$1781 = try$553;
var t$1780;
var fix$1777 = {};
fix$1777.$h = function(v$1287,v$1288){lab$h: while (true) {if (v$1287 < 0) {return v$1288;
} else {var t$1778 = SmlPrims.chk_ovf_i32(v$1287 - 1);
var t$1779 = [v$584.charCodeAt(v$1287),v$1288];
var v$1287 = t$1778;
var v$1288 = t$1779;
continue lab$h;
};
};
};
var h$1285 = fix$1777.$h;
t$1780 = (h$1285(SmlPrims.chk_ovf_i32(v$584.length - 1),null));
var t$1776;
var fix$1773 = {};
fix$1773.$h = function(v$1292,v$1293){lab$h: while (true) {if (v$1292 < 0) {return v$1293;
} else {var t$1774 = SmlPrims.chk_ovf_i32(v$1292 - 1);
var t$1775 = [v$585.charCodeAt(v$1292),v$1293];
var v$1292 = t$1774;
var v$1293 = t$1775;
continue lab$h;
};
};
};
var h$1290 = fix$1773.$h;
t$1776 = (h$1290(SmlPrims.chk_ovf_i32(v$585.length - 1),null));
t$1782 = (t$1781(t$1780,t$1776));
t$1783 = (SmlPrims.implode(t$1782));
t$1784 = [t$1783,null];
t$1785 = t$1784;
t$1786 = [1,t$1785];
t$1787 = [t$1786,v$586];
return [0,t$1787];
} catch(v$1772) {return (function(No$583){var t$1788 = No$583;
if (t$1788[0] == en$No$552) {return [0,[[1,[v$584,[v$585,null]]],v$586]];
} else {throw No$583;
};
})(v$1772);
};
};
var botRightConcat$603 = function(s$606,m$609){var v$615;
var fix$1789 = {};
fix$1789.$loop = function(v$1297,v$1298){lab$loop: while (true) {switch (v$1298[0]) { case 1: {var v$1299 = v$1298[1];
if (v$1299 == null) {return [1];
} else {var v$1300 = edlib$edList$.removeLast$482(v$1299);
var v$1301 = v$1300[0];
var v$1302 = v$1300[1];
var t$1794;
var t$1793 = (blanks$437(v$1297)) + v$1301;
var t$1792;
var m$1307 = [1,v$1302];
switch (m$1307[0]) { case 1: {t$1792 = [2,[v$1297,m$1307]];
 break; }case 2: {var v$1308 = m$1307[1];
var v$1309 = v$1308[0];
var v$1310 = v$1308[1];
t$1792 = [2,[SmlPrims.chk_ovf_i32(v$1297 + v$1309),v$1310]];
 break; }default: {t$1792 = [2,[v$1297,m$1307]];
} };
t$1794 = [t$1793,t$1792];
return [0,t$1794];
};
 break; }case 2: {var v$1311 = v$1298[1];
var v$1312 = v$1311[0];
var v$1313 = v$1311[1];
var t$1790 = SmlPrims.chk_ovf_i32(v$1297 + v$1312);
var t$1791 = v$1313;
var v$1297 = t$1790;
var v$1298 = t$1791;
continue lab$loop;
 break; }default: {var v$1314 = v$1298[1];
var v$1315 = v$1314[0];
var v$1316 = v$1314[1];
var v$1317 = fix$1789.$loop(v$1297,v$1316);
switch (v$1317[0]) { case 1: {var t$1795 = v$1297;
var t$1796 = v$1315;
var v$1297 = t$1795;
var v$1298 = t$1796;
continue lab$loop;
 break; }default: {var v$1318 = v$1317[1];
var v$1319 = v$1318[0];
var v$1320 = v$1318[1];
var t$1801;
var t$1800 = v$1319;
var t$1799;
var t$1798;
var t$1797;
switch (v$1315[0]) { case 1: {t$1797 = [2,[v$1297,v$1315]];
 break; }case 2: {var v$1323 = v$1315[1];
var v$1324 = v$1323[0];
var v$1325 = v$1323[1];
t$1797 = [2,[SmlPrims.chk_ovf_i32(v$1297 + v$1324),v$1325]];
 break; }default: {t$1797 = [2,[v$1297,v$1315]];
} };
t$1798 = [t$1797,v$1320];
t$1799 = [0,t$1798];
t$1801 = [t$1800,t$1799];
return [0,t$1801];
} };
} };
};
};
var loop$1295 = fix$1789.$loop;
v$615 = (loop$1295(0,m$609));
switch (v$615[0]) { case 1: {return [1,null];
 break; }default: {var v$616 = v$615[1];
return [0,[v$616[1],[1,[v$616[0] + s$606,null]]]];
} };
};
var strip$619 = function(s$622){var fix$1802 = {};
fix$1802.$strip$ = function(v$626){lab$strip$: while (true) {if (v$626 == null) {return v$626;
} else {var v$635 = v$626;
switch (v$635[0]) { case 32: {var v$637 = v$635[1];
var t$1803 = v$637;
var v$626 = t$1803;
continue lab$strip$;
 break; }default: {return v$626;
} };
};
};
};
var strip$$623 = fix$1802.$strip$;
var x$1674;
var fix$1804 = {};
fix$1804.$h = function(v$1678,v$1679){lab$h: while (true) {if (v$1678 < 0) {return v$1679;
} else {var t$1805 = SmlPrims.chk_ovf_i32(v$1678 - 1);
var t$1806 = [s$622.charCodeAt(v$1678),v$1679];
var v$1678 = t$1805;
var v$1679 = t$1806;
continue lab$h;
};
};
};
var h$1676 = fix$1804.$h;
x$1674 = (h$1676(SmlPrims.chk_ovf_i32(s$622.length - 1),null));
return SmlPrims.implode(strip$$623(x$1674));
};
var fix$1807 = {};
fix$1807.$print = function(v$643,v$646){switch (v$646[0]) { case 1: {var v$716 = v$646[1];
return ((v$716.length <= v$643)?true:tools$PrettyPrint$.raggedRight$55[0])?[1,[v$716,null]]:[1,["...",null]];
 break; }case 2: {var v$701 = v$646[1];
var v$702 = v$701[3];
var v$703 = v$701[2];
var v$704 = v$701[0];
var v$705 = v$701[1];
var width$$670 = tools$PrettyPrint$.raggedRight$55[0]?tools$PrettyPrint$.colwidth$56[0]:v$643;
if ((SmlPrims.chk_ovf_i32(width$$670 - v$702.length)) >= 0) {var t$1857 = botRightConcat$603;
var t$1856 = v$703;
var t$1840;
var stringLists$679;
var v$1439;
var fix$1839 = {};
fix$1839.$map = function(v$1449){if (v$1449 == null) {return null;
} else {var v$1450 = v$1449;
var v$1451 = v$1450[0];
var v$1452 = v$1450[1];
return [SmlPrims.concat(basis$List$.rev$641(fold$273(function(v$1697){return v$1697;
},[v$1451,null]))),fix$1839.$map(v$1452)];
};
};
var map$1448 = fix$1839.$map;
v$1439 = (map$1448(v$704));
switch (v$705[0]) { case 1: {stringLists$679 = v$1439;
 break; }case 0: {var v$1442 = v$705[1];
stringLists$679 = (intersperce$107(true,v$1442,v$1439));
 break; }default: {var v$1444 = v$705[1];
stringLists$679 = (intersperce$107(false,v$1444,v$1439));
} };
var stringLists$$680;
var v$1639;
var textwidth$1453 = SmlPrims.chk_ovf_i32(width$$670 - v$702.length);
var fix$1841 = {};
fix$1841.$loop = function(v$1721,v$1722,v$1723,v$1457){lab$loop: while (true) {if (v$1457 == null) {var v$1460 = basis$List$.rev$641(v$1722);
if (v$1460 == null) {return basis$List$.rev$641(v$1723);
} else {return basis$List$.rev$641([v$1460,v$1723]);
};
} else {var v$1464 = v$1457;
var v$1465 = v$1464[0];
var v$1466 = v$1464[1];
if (v$1721 <= 0) {var t$1842 = textwidth$1453;
var t$1843 = null;
var t$1844 = [basis$List$.rev$641(v$1722),v$1723];
var t$1845 = [v$1465,v$1466];
var v$1721 = t$1842;
var v$1722 = t$1843;
var v$1723 = t$1844;
var v$1457 = t$1845;
continue lab$loop;
} else {var t$1846 = SmlPrims.chk_ovf_i32(v$1721 - v$1465.length);
var t$1847 = [v$1465,v$1722];
var t$1848 = v$1723;
var t$1849 = v$1466;
var v$1721 = t$1846;
var v$1722 = t$1847;
var v$1723 = t$1848;
var v$1457 = t$1849;
continue lab$loop;
};
};
};
};
var loop$1455 = fix$1841.$loop;
v$1639 = (loop$1455(textwidth$1453,null,null,stringLists$679));
switch (v$702) { case "": {stringLists$$680 = v$1639;
 break; }default: {if (v$1639 == null) {stringLists$$680 = [[v$702,null],null];
} else {var v$697 = v$1639;
var v$698 = v$697[0];
var v$699 = v$697[1];
var t$1853;
var t$1852 = [v$702,v$698];
var t$1850;
var ind$693 = blanks$437(v$702.length);
var fix$1851 = {};
fix$1851.$map = function(v$1472){if (v$1472 == null) {return null;
} else {var v$1473 = v$1472;
var v$1474 = v$1473[0];
var v$1475 = v$1473[1];
return [[ind$693,v$1474],fix$1851.$map(v$1475)];
};
};
var map$1471 = fix$1851.$map;
t$1850 = (map$1471(v$699));
t$1853 = [t$1852,t$1850];
stringLists$$680 = t$1853;
};
} };
var t$1855;
var fix$1854 = {};
fix$1854.$map = function(v$1479){if (v$1479 == null) {return null;
} else {var v$1480 = v$1479;
var v$1481 = v$1480[0];
var v$1482 = v$1480[1];
return [SmlPrims.concat(v$1481),fix$1854.$map(v$1482)];
};
};
var map$1478 = fix$1854.$map;
t$1855 = (map$1478(stringLists$$680));
t$1840 = [1,t$1855];
return t$1857(t$1856,t$1840);
} else {return [1,["...",null]];
};
 break; }default: {var v$773 = v$646[1];
var v$774 = v$773[4];
var v$775 = v$773[2];
var v$776 = v$773[3];
var v$777 = v$773[0];
var v$778 = v$773[1];
try {var width$$717 = tools$PrettyPrint$.raggedRight$55[0]?tools$PrettyPrint$.colwidth$56[0]:v$643;
return [1,[SmlPrims.concat(basis$List$.rev$641((fold$273(function(v$1489){var v$1490 = v$1489[0];
var v$1491 = v$1489[1];
var v$1492 = v$1491[0];
var v$1493 = v$1491[1];
var n$1494 = v$1490.length;
if (n$1494 <= v$1493) {return [[v$1490,v$1492],SmlPrims.chk_ovf_i32(v$1493 - n$1494)];
} else {throw exn$FlatString$256;
};
},[v$646,[null,width$$717]]))[0])),null]];
} catch(v$1858) {return (function(FlatString$725){var t$1859 = FlatString$725;
if (t$1859[0] == en$FlatString$256) {var startLines$726 = (v$774 == "")?[1,null]:[1,[v$774,null]];
var finishLines$731 = (v$775 == "")?[1,null]:[1,[strip$619(v$775),null]];
if (((v$774.length <= v$643)?(v$775.length <= v$643):false)?true:tools$PrettyPrint$.raggedRight$55[0]) {if (((SmlPrims.chk_ovf_i32(v$643 - v$776)) >= 3)?true:tools$PrettyPrint$.raggedRight$55[0]) {var childrenLines$744 = fix$1807.$pileChildren(v$643,v$776,v$778,v$777);
var t$1861;
var t$1860;
var v$751 = get_first_line$452(childrenLines$744);
switch (v$751[0]) { case 1: {t$1860 = startLines$726;
 break; }default: {var v$752 = v$751[1];
var v$753 = v$752[0];
var v$754 = v$752[1];
t$1860 = (smash$546(v$774,v$753,v$754));
} };
t$1861 = [t$1860,finishLines$731];
return [0,t$1861];
} else {return (v$777 == null)?[0,[startLines$726,finishLines$731]]:[0,[startLines$726,[0,[[1,["...",null]],finishLines$731]]]];
};
} else {return [1,["...",null]];
};
} else {throw FlatString$725;
};
})(v$1858);
};
} };
};
fix$1807.$pileChildren = function(v$1718,v$1719,v$1720,v$811){if (v$811 == null) {return [1,null];
} else {var v$815 = v$811;
var v$816 = v$815[1];
if (v$816 == null) {var v$820 = v$815[0];
var m$1344 = fix$1807.$print(SmlPrims.chk_ovf_i32(v$1718 - v$1719),v$820);
switch (m$1344[0]) { case 1: {return [2,[v$1719,m$1344]];
 break; }case 2: {var v$1345 = m$1344[1];
var v$1346 = v$1345[0];
var v$1347 = v$1345[1];
return [2,[SmlPrims.chk_ovf_i32(v$1719 + v$1346),v$1347]];
 break; }default: {return [2,[v$1719,m$1344]];
} };
} else {switch (v$1720[0]) { case 1: {var m$1349;
var t$1834 = pilePages$410;
var t$1832;
var f$1353;
var v$1724 = SmlPrims.chk_ovf_i32(v$1718 - v$1719);
f$1353 = (function(v$1725){return fix$1807.$print(v$1724,v$1725);
});
var fix$1833 = {};
fix$1833.$map = function(v$1356){if (v$1356 == null) {return null;
} else {var v$1357 = v$1356;
var v$1358 = v$1357[0];
var v$1359 = v$1357[1];
return [f$1353(v$1358),fix$1833.$map(v$1359)];
};
};
var map$1355 = fix$1833.$map;
t$1832 = (map$1355(v$811));
m$1349 = (t$1834(t$1832));
switch (m$1349[0]) { case 1: {return [2,[v$1719,m$1349]];
 break; }case 2: {var v$1350 = m$1349[1];
var v$1351 = v$1350[0];
var v$1352 = v$1350[1];
return [2,[SmlPrims.chk_ovf_i32(v$1719 + v$1351),v$1352]];
 break; }default: {return [2,[v$1719,m$1349]];
} };
 break; }case 2: {var v$851 = v$1720[1];
var v$852 = v$815[0];
var s$823 = strip$619(v$851);
var firstWidth$824 = tools$PrettyPrint$.raggedRight$55[0]?v$1718:(SmlPrims.chk_ovf_i32(v$1718 - v$1719));
var restWidth$829 = tools$PrettyPrint$.raggedRight$55[0]?v$1718:(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$1718 - v$1719)) - s$823.length));
if ((restWidth$829 < 3)?(tools$PrettyPrint$.raggedRight$55[0]?false:true):false) {var m$1366 = [1,["...",null]];
switch (m$1366[0]) { case 1: {return [2,[v$1719,m$1366]];
 break; }case 2: {var v$1367 = m$1366[1];
var v$1368 = v$1367[0];
var v$1369 = v$1367[1];
return [2,[SmlPrims.chk_ovf_i32(v$1719 + v$1368),v$1369]];
 break; }default: {return [2,[v$1719,m$1366]];
} };
} else {var restPages$838;
var fix$1824 = {};
fix$1824.$map = function(v$1373){if (v$1373 == null) {return null;
} else {var v$1374 = v$1373;
var v$1375 = v$1374[0];
var v$1376 = v$1374[1];
var t$1826;
var t$1825;
var m$1737 = fix$1807.$print(restWidth$829,v$1375);
switch (m$1737[0]) { case 1: {t$1825 = [2,[v$1719,m$1737]];
 break; }case 2: {var v$1739 = m$1737[1];
var v$1740 = v$1739[0];
var v$1741 = v$1739[1];
t$1825 = [2,[SmlPrims.chk_ovf_i32(v$1719 + v$1740),v$1741]];
 break; }default: {t$1825 = [2,[v$1719,m$1737]];
} };
t$1826 = [t$1825,fix$1824.$map(v$1376)];
return t$1826;
};
};
var map$1372 = fix$1824.$map;
restPages$838 = (map$1372(v$816));
var restPages$$839;
var fix$1827 = {};
fix$1827.$map = function(v$1389){if (v$1389 == null) {return null;
} else {var v$1390 = v$1389;
var v$1391 = v$1390[0];
var v$1392 = v$1390[1];
var t$1829;
var t$1828;
var v$1689 = get_first_line$452(v$1391);
switch (v$1689[0]) { case 1: {t$1828 = [1,null];
 break; }default: {var v$1690 = v$1689[1];
var v$1691 = v$1690[0];
var v$1692 = v$1690[1];
t$1828 = (smash$546(s$823,v$1691,v$1692));
} };
t$1829 = [t$1828,fix$1827.$map(v$1392)];
return t$1829;
};
};
var map$1388 = fix$1827.$map;
restPages$$839 = (map$1388(restPages$838));
var firstWidth$$840 = tools$PrettyPrint$.raggedRight$55[0]?firstWidth$824:(SmlPrims.chk_ovf_i32(firstWidth$824 + s$823.length));
var t$1831;
var t$1830;
var m$1402 = fix$1807.$print(firstWidth$$840,v$852);
switch (m$1402[0]) { case 1: {t$1830 = [2,[v$1719,m$1402]];
 break; }case 2: {var v$1403 = m$1402[1];
var v$1404 = v$1403[0];
var v$1405 = v$1403[1];
t$1830 = [2,[SmlPrims.chk_ovf_i32(v$1719 + v$1404),v$1405]];
 break; }default: {t$1830 = [2,[v$1719,m$1402]];
} };
t$1831 = [t$1830,pilePages$410(restPages$$839)];
return [0,t$1831];
};
 break; }default: {var v$881 = v$1720[1];
var myWidth$855 = tools$PrettyPrint$.raggedRight$55[0]?v$1718:(SmlPrims.chk_ovf_i32(v$1718 - v$1719));
if ((myWidth$855 < 3)?(tools$PrettyPrint$.raggedRight$55[0]?false:true):false) {var m$1410 = [1,["...",null]];
switch (m$1410[0]) { case 1: {return [2,[v$1719,m$1410]];
 break; }case 2: {var v$1411 = m$1410[1];
var v$1412 = v$1411[0];
var v$1413 = v$1411[1];
return [2,[SmlPrims.chk_ovf_i32(v$1719 + v$1412),v$1413]];
 break; }default: {return [2,[v$1719,m$1410]];
} };
} else {try {var v$869 = edlib$edList$.removeLast$482(v$811);
var v$870 = v$869[0];
var v$871 = v$869[1];
var firstNPages$867;
var fix$1836 = {};
fix$1836.$map = function(v$1417){if (v$1417 == null) {return null;
} else {var v$1418 = v$1417;
var v$1419 = v$1418[0];
var v$1420 = v$1418[1];
return [fix$1807.$print(myWidth$855,v$1419),fix$1836.$map(v$1420)];
};
};
var map$1416 = fix$1836.$map;
firstNPages$867 = (map$1416(v$871));
var firstNPages$$868;
var fix$1837 = {};
fix$1837.$map = function(v$1424){if (v$1424 == null) {return null;
} else {var v$1425 = v$1424;
var v$1426 = v$1425[0];
var v$1427 = v$1425[1];
return [botRightConcat$603(v$881,v$1426),fix$1837.$map(v$1427)];
};
};
var map$1423 = fix$1837.$map;
firstNPages$$868 = (map$1423(firstNPages$867));
var m$1429 = [0,[pilePages$410(firstNPages$$868),fix$1807.$print(myWidth$855,v$870)]];
switch (m$1429[0]) { case 1: {return [2,[v$1719,m$1429]];
 break; }case 2: {var v$1430 = m$1429[1];
var v$1431 = v$1430[0];
var v$1432 = v$1430[1];
return [2,[SmlPrims.chk_ovf_i32(v$1719 + v$1431),v$1432]];
 break; }default: {return [2,[v$1719,m$1429]];
} };
} catch(v$1835) {return (function(v$874){var t$1838 = v$874;
if (t$1838[0] == edlib$edList$.en$Empty$447) {return tools$Crash$.impossible$50("PrettyPrint.pileChildren");
} else {throw v$874;
};
})(v$1835);
};
};
} };
};
};
};
var print$640 = fix$1807.$print;
var pileChildren$639 = fix$1807.$pileChildren;
var fix$1808 = {};
fix$1808.$interpret = function(v$929,v$930,v$931){switch (v$930[0]) { case 2: {var v$923 = v$930[1];
var v$924 = v$923[0];
var v$925 = v$923[1];
return fix$1808.$interpret(SmlPrims.chk_ovf_i32(v$929 + v$924),v$925,v$931);
 break; }case 1: {var v$921 = v$930[1];
var fix$1823 = {};
fix$1823.$foldr = function(v$1511){if (v$1511 == null) {return v$931;
} else {var v$1512 = v$1511;
var v$1513 = v$1512[0];
var v$1514 = v$1512[1];
var v$1716 = fix$1823.$foldr(v$1514);
return [(blanks$437(v$929)) + v$1513,v$1716];
};
};
var foldr$1510 = fix$1823.$foldr;
return foldr$1510(v$921);
 break; }default: {var v$926 = v$930[1];
var v$927 = v$926[0];
var v$928 = v$926[1];
return fix$1808.$interpret(v$929,v$927,fix$1808.$interpret(v$929,v$928,v$931));
} };
};
var interpret$897 = fix$1808.$interpret;
tools$PrettyPrint$.flatten$932 = function(v$946){switch (v$946[0]) { case 1: {var v$956 = v$946[1];
var t$1812;
var t$1811 = "";
var t$1810;
var fix$1809 = {};
fix$1809.$str = function(v$1524,v$1525,v$1526){if (v$1524 == null) {return "";
} else {var v$1527 = v$1524;
var v$1528 = v$1527[0];
var v$1529 = v$1527[1];
var s$1530 = v$1528 + (fix$1809.$str(v$1529,v$1525,true));
return v$1526?(v$1525 + s$1530):s$1530;
};
};
var str$1523 = fix$1809.$str;
t$1810 = (str$1523(v$956,"\n",false));
t$1812 = (t$1811 + t$1810);
return t$1812 + "";
 break; }default: {return tools$Crash$.impossible$50("PrettyPrint.flatten");
} };
};
tools$PrettyPrint$.format$933 = function(v$942,v$943){if (v$942 < 3) {return tools$Crash$.impossible$50("PrettyPrint.format: width too small");
} else {return [1,interpret$897(0,print$640(v$942,v$943),null)];
};
};
tools$PrettyPrint$.outputTree$$965 = function(blanks$968,v$973){var v$1068 = v$973[0];
var v$1069 = v$973[1];
var v$1070 = v$973[2];
var fix$1813 = {};
fix$1813.$output_minipage = function(v$1065,v$1066){switch (v$1066[0]) { case 1: {var v$1059 = v$1066[1];
if (v$1059 == null) {return 0;
} else {var fix$1814 = {};
fix$1814.$app = function(v$1533){if (v$1533 == null) {return 0;
} else {var v$1534 = v$1533;
var v$1535 = v$1534[0];
var v$1536 = v$1534[1];
var fix$1815 = {};
fix$1815.$loop = function(n$1708){lab$loop: while (true) {if (n$1708 >= 64) {var v$1709 = SmlPrims.div_i32(n$1708,64,CompilerInitial.exn$Div$40);
var v$1710 = SmlPrims.mod_i32(n$1708,64,CompilerInitial.exn$Div$40);
v$1068(blanks$968(SmlPrims.chk_ovf_i32(v$1709 * 64)));
var t$1816 = v$1710;
var n$1708 = t$1816;
continue lab$loop;
} else {if (n$1708 >= 32) {v$1068("                                ");
var t$1817 = SmlPrims.chk_ovf_i32(n$1708 - 32);
var n$1708 = t$1817;
continue lab$loop;
} else {if (n$1708 >= 16) {v$1068("                ");
var t$1818 = SmlPrims.chk_ovf_i32(n$1708 - 16);
var n$1708 = t$1818;
continue lab$loop;
} else {if (n$1708 >= 8) {v$1068("        ");
var t$1819 = SmlPrims.chk_ovf_i32(n$1708 - 8);
var n$1708 = t$1819;
continue lab$loop;
} else {if (n$1708 >= 4) {v$1068("    ");
var t$1820 = SmlPrims.chk_ovf_i32(n$1708 - 4);
var n$1708 = t$1820;
continue lab$loop;
} else {if (n$1708 >= 2) {v$1068("  ");
var t$1821 = SmlPrims.chk_ovf_i32(n$1708 - 2);
var n$1708 = t$1821;
continue lab$loop;
} else {if (n$1708 == 1) {return v$1068(" ");
} else {return 0;
};
};
};
};
};
};
};
};
};
var loop$1707 = fix$1815.$loop;
v$1068("\n");
loop$1707(v$1065);
v$1068(v$1535);
return fix$1814.$app(v$1536);
};
};
var app$1532 = fix$1814.$app;
return app$1532(v$1059);
};
 break; }case 2: {var v$1055 = v$1066[1];
var v$1056 = v$1055[0];
var v$1057 = v$1055[1];
return fix$1813.$output_minipage(SmlPrims.chk_ovf_i32(v$1056 + v$1065),v$1057);
 break; }default: {var v$1062 = v$1066[1];
var v$1063 = v$1062[0];
var v$1064 = v$1062[1];
fix$1813.$output_minipage(v$1065,v$1063);
return fix$1813.$output_minipage(v$1065,v$1064);
} };
};
var output_minipage$1036 = fix$1813.$output_minipage;
var minipage$1067 = print$640(v$1070,v$1069);
return output_minipage$1036(0,minipage$1067);
};
tools$PrettyPrint$.outputTree$1071 = function(a$1074){return tools$PrettyPrint$.outputTree$$965(function(n$1077){return "b" + (basis$Int32$.toString$449(n$1077));
},a$1074);
};
tools$PrettyPrint$.printTree$1078 = function(t$1081){var a$1545 = [basis$TextIO$.print$155,t$1081,tools$PrettyPrint$.colwidth$56[0]];
return tools$PrettyPrint$.outputTree$$965(function(n$1546){return "b" + (basis$Int32$.toString$449(n$1546));
},a$1545);
};
tools$PrettyPrint$.reportStringTree$$1082 = function(width$1085,tree$1088){var v$1093 = (width$1085 < 3)?(tools$Crash$.impossible$50("PrettyPrint.format: width too small")):[1,interpret$897(0,print$640(width$1085,tree$1088),null)];
switch (v$1093[0]) { case 1: {var v$1096 = v$1093[1];
var lines$1095;
var fix$1822 = {};
fix$1822.$map = function(v$1555){if (v$1555 == null) {return null;
} else {var v$1556 = v$1555;
var v$1557 = v$1556[0];
var v$1558 = v$1556[1];
return [tools$Report$.line$51(v$1557),fix$1822.$map(v$1558)];
};
};
var map$1554 = fix$1822.$map;
lines$1095 = (map$1554(v$1096));
return tools$Report$.flatten$78(lines$1095);
 break; }default: {return tools$Crash$.impossible$50("PrettyPrint.reportStringTree'");
} };
};
tools$PrettyPrint$.reportStringTree$1097 = function(tree$1100){return tools$PrettyPrint$.reportStringTree$$1082(75,tree$1100);
};
return 0;
})();