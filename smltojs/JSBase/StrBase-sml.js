if ((typeof(basis$StrBase$)) == "undefined") {basis$StrBase$ = {};
};
(function(){basis$StrBase$.explode$88 = function(s$91){var fix$1211 = {};
fix$1211.$h = function(v$101,v$102){lab$h: while (true) {if (v$101 < 0) {return v$102;
} else {var t$1212 = SmlPrims.chk_ovf_i32(v$101 - 1);
var t$1213 = [s$91.charCodeAt(v$101),v$102];
var v$101 = t$1212;
var v$102 = t$1213;
continue lab$h;
};
};
};
var h$92 = fix$1211.$h;
return h$92(SmlPrims.chk_ovf_i32(s$91.length - 1),null);
};
var scanr$150 = function(v$171,v$172,v$173){var v$174 = v$173[0];
var v$175 = v$173[1];
var v$176 = v$173[2];
var stop$158 = SmlPrims.chk_ovf_i32(v$175 - 1);
var fix$1214 = {};
fix$1214.$scan = function(j$162){lab$scan: while (true) {if ((j$162 > stop$158)?(v$172(v$174.charCodeAt(j$162))):false) {var t$1215 = SmlPrims.chk_ovf_i32(j$162 - 1);
var j$162 = t$1215;
continue lab$scan;
} else {return j$162;
};
};
};
var scan$159 = fix$1214.$scan;
return v$171([v$174,v$175,v$176,SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32((scan$159(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$175 + v$176)) - 1))) - v$175)) + 1)]);
};
basis$StrBase$.dropl$177 = function(p$180,ss$183){var v$923 = ss$183[0];
var v$924 = ss$183[1];
var v$925 = ss$183[2];
var v$1148;
var t$1216;
var v$1185 = SmlPrims.chk_ovf_i32(v$924 + v$925);
var fix$1217 = {};
fix$1217.$scan0 = function(v$1163,v$1164,v$1165){lab$scan0: while (true) {if ((v$1163 < v$1164)?(p$180(v$1165.charCodeAt(v$1163))):false) {var t$1218 = SmlPrims.chk_ovf_i32(v$1163 + 1);
var t$1219 = v$1164;
var t$1220 = v$1165;
var v$1163 = t$1218;
var v$1164 = t$1219;
var v$1165 = t$1220;
continue lab$scan0;
} else {return v$1163;
};
};
};
var scan0$1161 = fix$1217.$scan0;
t$1216 = (scan0$1161(v$924,v$1185,v$923));
v$1148 = (SmlPrims.chk_ovf_i32(t$1216 - v$924));
return [v$923,SmlPrims.chk_ovf_i32(v$924 + v$1148),SmlPrims.chk_ovf_i32(v$925 - v$1148)];
};
basis$StrBase$.dropr$194 = function(p$197,ss$200){return scanr$150(function(v$206){return [v$206[0],v$206[1],v$206[3]];
},p$197,ss$200);
};
basis$StrBase$.takel$211 = function(p$214,ss$217){var v$930 = ss$217[0];
var v$931 = ss$217[1];
var v$932 = ss$217[2];
var t$1228 = v$930;
var t$1227 = v$931;
var t$1226;
var t$1221;
var v$1188 = SmlPrims.chk_ovf_i32(v$931 + v$932);
var fix$1222 = {};
fix$1222.$scan0 = function(v$1172,v$1173,v$1174){lab$scan0: while (true) {if ((v$1172 < v$1173)?(p$214(v$1174.charCodeAt(v$1172))):false) {var t$1223 = SmlPrims.chk_ovf_i32(v$1172 + 1);
var t$1224 = v$1173;
var t$1225 = v$1174;
var v$1172 = t$1223;
var v$1173 = t$1224;
var v$1174 = t$1225;
continue lab$scan0;
} else {return v$1172;
};
};
};
var scan0$1170 = fix$1222.$scan0;
t$1221 = (scan0$1170(v$931,v$1188,v$930));
t$1226 = (SmlPrims.chk_ovf_i32(t$1221 - v$931));
return [t$1228,t$1227,t$1226];
};
basis$StrBase$.taker$228 = function(p$231,ss$234){return scanr$150(function(v$240){var v$241 = v$240[0];
var v$242 = v$240[1];
var v$243 = v$240[2];
var v$244 = v$240[3];
return [v$241,SmlPrims.chk_ovf_i32(v$242 + v$244),SmlPrims.chk_ovf_i32(v$243 - v$244)];
},p$231,ss$234);
};
basis$StrBase$.splitl$245 = function(p$248,ss$251){var v$937 = ss$251[0];
var v$938 = ss$251[1];
var v$939 = ss$251[2];
var v$1156;
var t$1229;
var v$1191 = SmlPrims.chk_ovf_i32(v$938 + v$939);
var fix$1230 = {};
fix$1230.$scan0 = function(v$1181,v$1182,v$1183){lab$scan0: while (true) {if ((v$1181 < v$1182)?(p$248(v$1183.charCodeAt(v$1181))):false) {var t$1231 = SmlPrims.chk_ovf_i32(v$1181 + 1);
var t$1232 = v$1182;
var t$1233 = v$1183;
var v$1181 = t$1231;
var v$1182 = t$1232;
var v$1183 = t$1233;
continue lab$scan0;
} else {return v$1181;
};
};
};
var scan0$1179 = fix$1230.$scan0;
t$1229 = (scan0$1179(v$938,v$1191,v$937));
v$1156 = (SmlPrims.chk_ovf_i32(t$1229 - v$938));
return [[v$937,v$938,v$1156],[v$937,SmlPrims.chk_ovf_i32(v$938 + v$1156),SmlPrims.chk_ovf_i32(v$939 - v$1156)]];
};
basis$StrBase$.splitr$262 = function(p$265,ss$268){return scanr$150(function(v$274){var v$275 = v$274[0];
var v$276 = v$274[1];
var v$277 = v$274[2];
var v$278 = v$274[3];
return [[v$275,v$276,v$278],[v$275,SmlPrims.chk_ovf_i32(v$276 + v$278),SmlPrims.chk_ovf_i32(v$277 - v$278)]];
},p$265,ss$268);
};
basis$StrBase$.translate$279 = function(f$282,v$287){var v$300 = v$287[0];
var v$301 = v$287[1];
var v$302 = v$287[2];
var stop$288 = SmlPrims.chk_ovf_i32(v$301 + v$302);
var fix$1234 = {};
fix$1234.$h = function(v$298,v$299){lab$h: while (true) {if (v$298 >= stop$288) {return v$299;
} else {var t$1235 = SmlPrims.chk_ovf_i32(v$298 + 1);
var t$1236 = [f$282(v$300.charCodeAt(v$298)),v$299];
var v$298 = t$1235;
var v$299 = t$1236;
continue lab$h;
};
};
};
var h$289 = fix$1234.$h;
return SmlPrims.concat(basis$List$.rev$641(h$289(v$301,null)));
};
basis$StrBase$.tokens$303 = function(isDelim$306,ss$309){var fix$1237 = {};
fix$1237.$h = function(remains$318){var v$335 = remains$318[2];
return function(res$321){if (v$335 == 0) {return basis$List$.rev$641(res$321);
} else {var v$329 = basis$StrBase$.splitl$245(function(c$334){return (isDelim$306(c$334))?false:true;
},remains$318);
var v$330 = v$329[0];
var v$331 = v$329[1];
return (fix$1237.$h(basis$StrBase$.dropl$177(isDelim$306,v$331)))([v$330,res$321]);
};
};
};
var h$314 = fix$1237.$h;
return (h$314(basis$StrBase$.dropl$177(isDelim$306,ss$309)))(null);
};
basis$StrBase$.fields$336 = function(isDelim$339,ss$342){var fix$1238 = {};
fix$1238.$h = function(ss$360,res$363){var v$372 = basis$StrBase$.splitl$245(function(c$378){return (isDelim$339(c$378))?false:true;
},ss$360);
var v$373 = v$372[0];
var v$374 = v$372[1];
var v$375 = v$374[2];
if (v$375 == 0) {return basis$List$.rev$641([v$373,res$363]);
} else {var t$1240 = fix$1238.$h;
var t$1239;
var v$947 = v$374[0];
var v$948 = v$374[1];
var v$949 = v$374[2];
t$1239 = ((v$949 == 0)?v$374:[v$947,SmlPrims.chk_ovf_i32(v$948 + 1),SmlPrims.chk_ovf_i32(v$949 - 1)]);
return t$1240(t$1239,[v$373,res$363]);
};
};
var h$357 = fix$1238.$h;
return h$357(ss$342,null);
};
basis$StrBase$.foldl$379 = function(f$382,e$385,v$390){var v$403 = v$390[0];
var v$404 = v$390[1];
var v$405 = v$390[2];
var stop$391 = SmlPrims.chk_ovf_i32(v$404 + v$405);
var fix$1241 = {};
fix$1241.$h = function(v$401,v$402){lab$h: while (true) {if (v$401 >= stop$391) {return v$402;
} else {var t$1242 = SmlPrims.chk_ovf_i32(v$401 + 1);
var t$1243 = f$382([v$403.charCodeAt(v$401),v$402]);
var v$401 = t$1242;
var v$402 = t$1243;
continue lab$h;
};
};
};
var h$392 = fix$1241.$h;
return h$392(v$404,e$385);
};
var fix$1244 = {};
fix$1244.$fromMLescape = function(getc$461,source$464){var fix$1298 = {};
fix$1298.$skipform = function(src$502){lab$skipform: while (true) {var v$511 = getc$461(src$502);
switch (v$511[0]) { case 1: {return [1];
 break; }default: {var v$512 = v$511[1];
var v$513 = v$512[0];
switch (v$513) { case 92: {var v$525 = v$512[1];
var v$521 = getc$461(v$525);
switch (v$521[0]) { case 1: {return [1];
 break; }default: {var v$522 = v$521[1];
switch (v$522[0]) { case 92: {var v$524 = v$522[1];
return fix$1244.$fromMLescape(getc$461,v$524);
 break; }default: {return v$521;
} };
} };
 break; }default: {var v$538 = v$512[1];
if ((v$513 == 32)?true:((9 <= v$513)?(v$513 <= 13):false)) {var t$1299 = v$538;
var src$502 = t$1299;
continue lab$skipform;
} else {return [1];
};
} };
} };
};
};
var skipform$499 = fix$1298.$skipform;
var v$581 = getc$461(source$464);
switch (v$581[0]) { case 1: {return [1];
 break; }default: {var v$582 = v$581[1];
switch (v$582[0]) { case 97: {return [0,[7,v$582[1]]];
 break; }case 98: {return [0,[8,v$582[1]]];
 break; }case 116: {return [0,[9,v$582[1]]];
 break; }case 110: {return [0,[10,v$582[1]]];
 break; }case 114: {return [0,[13,v$582[1]]];
 break; }case 118: {return [0,[11,v$582[1]]];
 break; }case 102: {return [0,[12,v$582[1]]];
 break; }case 34: {return [0,[34,v$582[1]]];
 break; }case 92: {return [0,[92,v$582[1]]];
 break; }case 32: {var v$604 = v$582[1];
return skipform$499(v$604);
 break; }case 10: {var v$603 = v$582[1];
return skipform$499(v$603);
 break; }case 9: {var v$602 = v$582[1];
return skipform$499(v$602);
 break; }case 94: {var v$601 = v$582[1];
var v$589 = getc$461(v$601);
switch (v$589[0]) { case 1: {return [1];
 break; }default: {var v$598 = v$589[1];
var v$599 = v$598[0];
var v$600 = v$598[1];
if ((64 <= v$599)?(v$599 <= 95):false) {var t$1301;
var t$1300;
var i$978 = SmlPrims.chk_ovf_i32(v$599 - 64);
if ((i$978 >= 0)?(i$978 < 256):false) {t$1300 = i$978;
} else {throw basis$General$.exn$Chr$55;
};
t$1301 = [t$1300,v$600];
return [0,t$1301];
} else {return [1];
};
} };
 break; }default: {try {var t$1303;
var v$1000 = getc$461(source$464);
switch (v$1000[0]) { case 1: {throw basis$General$.exn$Chr$55;
 break; }default: {var v$1001 = v$1000[1];
var v$1002 = v$1001[0];
var v$1003 = v$1001[1];
if ((48 <= v$1002)?(v$1002 <= 57):false) {var code$1015 = SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(0 * 10)) + v$1002)) - 48);
var v$1016 = getc$461(v$1003);
switch (v$1016[0]) { case 1: {throw basis$General$.exn$Chr$55;
 break; }default: {var v$1017 = v$1016[1];
var v$1018 = v$1017[0];
var v$1019 = v$1017[1];
if ((48 <= v$1018)?(v$1018 <= 57):false) {var code$1021 = SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(code$1015 * 10)) + v$1018)) - 48);
var v$1022 = getc$461(v$1019);
switch (v$1022[0]) { case 1: {throw basis$General$.exn$Chr$55;
 break; }default: {var v$1023 = v$1022[1];
var v$1024 = v$1023[0];
var v$1025 = v$1023[1];
if ((48 <= v$1024)?(v$1024 <= 57):false) {var code$1026 = SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(code$1021 * 10)) + v$1024)) - 48);
var t$1304;
if ((code$1026 >= 0)?(code$1026 < 256):false) {t$1304 = code$1026;
} else {throw basis$General$.exn$Chr$55;
};
t$1303 = [t$1304,v$1025];
} else {throw basis$General$.exn$Chr$55;
};
} };
} else {throw basis$General$.exn$Chr$55;
};
} };
} else {throw basis$General$.exn$Chr$55;
};
} };
return [0,t$1303];
} catch(v$1302) {return (function(BadEscape$616){var t$1305 = BadEscape$616;
if (t$1305[0] == basis$General$.en$Chr$55) {return [1];
} else {throw BadEscape$616;
};
})(v$1302);
};
} };
} };
};
basis$StrBase$.fromMLescape$458 = fix$1244.$fromMLescape;
basis$StrBase$.toMLescape$617 = function(c$620){switch (c$620) { case 92: {return "\\\\";
 break; }case 34: {return "\\\"";
 break; }default: {if (32 <= c$620) {if (c$620 <= 126) {return SmlPrims.implode([c$620,null]);
} else {var n$635 = c$620;
var t$1256;
var t$1255;
var t$1254 = 92;
var t$1253;
var t$1252;
var t$1251;
var n$1030 = SmlPrims.div_i32(n$635,100,CompilerInitial.exn$Div$40);
var i$1031 = SmlPrims.chk_ovf_i32(48 + n$1030);
if ((i$1031 >= 0)?(i$1031 < 256):false) {t$1251 = i$1031;
} else {throw basis$General$.exn$Chr$55;
};
var t$1250;
var t$1249;
var t$1248;
var n$1032 = SmlPrims.mod_i32(SmlPrims.div_i32(n$635,10,CompilerInitial.exn$Div$40),10,CompilerInitial.exn$Div$40);
var i$1033 = SmlPrims.chk_ovf_i32(48 + n$1032);
if ((i$1033 >= 0)?(i$1033 < 256):false) {t$1248 = i$1033;
} else {throw basis$General$.exn$Chr$55;
};
var t$1247;
var t$1246;
var t$1245;
var n$1034 = SmlPrims.mod_i32(n$635,10,CompilerInitial.exn$Div$40);
var i$1035 = SmlPrims.chk_ovf_i32(48 + n$1034);
if ((i$1035 >= 0)?(i$1035 < 256):false) {t$1245 = i$1035;
} else {throw basis$General$.exn$Chr$55;
};
t$1246 = [t$1245,null];
t$1247 = t$1246;
t$1249 = [t$1248,t$1247];
t$1250 = t$1249;
t$1252 = [t$1251,t$1250];
t$1253 = t$1252;
t$1255 = [t$1254,t$1253];
t$1256 = t$1255;
return SmlPrims.implode(t$1256);
};
} else {switch (c$620) { case 7: {return "\\a";
 break; }case 8: {return "\\b";
 break; }case 9: {return "\\t";
 break; }case 10: {return "\\n";
 break; }case 13: {return "\\r";
 break; }case 11: {return "\\v";
 break; }case 12: {return "\\f";
 break; }default: {var t$1265;
var t$1264;
var t$1263 = 92;
var t$1262;
var t$1261;
var t$1260 = 94;
var t$1259;
var t$1258;
var t$1257;
var i$1038 = SmlPrims.chk_ovf_i32(c$620 + 64);
if ((i$1038 >= 0)?(i$1038 < 256):false) {t$1257 = i$1038;
} else {throw basis$General$.exn$Chr$55;
};
t$1258 = [t$1257,null];
t$1259 = t$1258;
t$1261 = [t$1260,t$1259];
t$1262 = t$1261;
t$1264 = [t$1263,t$1262];
t$1265 = t$1264;
return SmlPrims.implode(t$1265);
} };
};
} };
};
basis$StrBase$.toCescape$653 = function(c$656){switch (c$656) { case 92: {return "\\\\";
 break; }case 63: {return "\\?";
 break; }case 39: {return "\\'";
 break; }case 34: {return "\\\"";
 break; }default: {if ((32 <= c$656)?(c$656 <= 126):false) {return SmlPrims.implode([c$656,null]);
} else {switch (c$656) { case 10: {return "\\n";
 break; }case 13: {return "\\r";
 break; }case 9: {return "\\t";
 break; }case 11: {return "\\v";
 break; }case 8: {return "\\b";
 break; }case 12: {return "\\f";
 break; }case 7: {return "\\a";
 break; }default: {var n$687 = c$656;
var t$1277;
var t$1276;
var t$1275 = 92;
var t$1274;
var t$1273;
var t$1272;
var n$1043 = SmlPrims.div_i32(n$687,64,CompilerInitial.exn$Div$40);
var i$1044 = SmlPrims.chk_ovf_i32(48 + n$1043);
if ((i$1044 >= 0)?(i$1044 < 256):false) {t$1272 = i$1044;
} else {throw basis$General$.exn$Chr$55;
};
var t$1271;
var t$1270;
var t$1269;
var n$1045 = SmlPrims.mod_i32(SmlPrims.div_i32(n$687,8,CompilerInitial.exn$Div$40),8,CompilerInitial.exn$Div$40);
var i$1046 = SmlPrims.chk_ovf_i32(48 + n$1045);
if ((i$1046 >= 0)?(i$1046 < 256):false) {t$1269 = i$1046;
} else {throw basis$General$.exn$Chr$55;
};
var t$1268;
var t$1267;
var t$1266;
var n$1047 = SmlPrims.mod_i32(n$687,8,CompilerInitial.exn$Div$40);
var i$1048 = SmlPrims.chk_ovf_i32(48 + n$1047);
if ((i$1048 >= 0)?(i$1048 < 256):false) {t$1266 = i$1048;
} else {throw basis$General$.exn$Chr$55;
};
t$1267 = [t$1266,null];
t$1268 = t$1267;
t$1270 = [t$1269,t$1268];
t$1271 = t$1270;
t$1273 = [t$1272,t$1271];
t$1274 = t$1273;
t$1276 = [t$1275,t$1274];
t$1277 = t$1276;
return SmlPrims.implode(t$1277);
} };
};
} };
};
var fromCescape$$692 = function(getc$695,src$698){var fix$1278 = {};
fix$1278.$fromHex = function(src$702,code$705){lab$fromHex: while (true) {var v$711 = getc$695(src$702);
switch (v$711[0]) { case 1: {var t$1279;
if ((code$705 >= 0)?(code$705 < 256):false) {t$1279 = code$705;
} else {throw basis$General$.exn$Chr$55;
};
return [t$1279,src$702];
 break; }default: {var v$716 = v$711[1];
var v$717 = v$716[0];
var v$718 = v$716[1];
if (((48 <= v$717)?(v$717 <= 57):false)?true:(((97 <= v$717)?(v$717 <= 102):false)?true:((65 <= v$717)?(v$717 <= 70):false))) {var t$1281 = v$718;
var t$1282 = SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(code$705 * 16)) + (((48 <= v$717)?(v$717 <= 57):false)?(SmlPrims.chk_ovf_i32(v$717 - 48)):(SmlPrims.mod_i32(SmlPrims.chk_ovf_i32(v$717 - 55),32,CompilerInitial.exn$Div$40))));
var src$702 = t$1281;
var code$705 = t$1282;
continue lab$fromHex;
} else {var t$1280;
if ((code$705 >= 0)?(code$705 < 256):false) {t$1280 = code$705;
} else {throw basis$General$.exn$Chr$55;
};
return [t$1280,src$702];
};
} };
};
};
var fromHex$699 = fix$1278.$fromHex;
var octalOpt$719 = function(cont$722,src$725,code$728){var v$734 = getc$695(src$725);
switch (v$734[0]) { case 1: {var t$1283;
if ((code$728 >= 0)?(code$728 < 256):false) {t$1283 = code$728;
} else {throw basis$General$.exn$Chr$55;
};
return [t$1283,src$725];
 break; }default: {var v$743 = v$734[1];
var v$744 = v$743[0];
var v$745 = v$743[1];
if ((48 <= v$744)?(v$744 <= 55):false) {return (cont$722(v$745))(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(code$728 * 8)) + v$744)) - 48));
} else {var t$1284;
if ((code$728 >= 0)?(code$728 < 256):false) {t$1284 = code$728;
} else {throw basis$General$.exn$Chr$55;
};
return [t$1284,src$725];
};
} };
};
var v$794 = getc$695(src$698);
switch (v$794[0]) { case 1: {throw basis$General$.exn$Chr$55;
 break; }default: {var v$795 = v$794[1];
var v$796 = v$795[0];
switch (v$796) { case 110: {return [10,v$795[1]];
 break; }case 114: {return [13,v$795[1]];
 break; }case 116: {return [9,v$795[1]];
 break; }case 118: {return [11,v$795[1]];
 break; }case 98: {return [8,v$795[1]];
 break; }case 102: {return [12,v$795[1]];
 break; }case 97: {return [7,v$795[1]];
 break; }case 92: {return [92,v$795[1]];
 break; }case 63: {return [63,v$795[1]];
 break; }case 39: {return [39,v$795[1]];
 break; }case 34: {return [34,v$795[1]];
 break; }case 120: {var v$810 = v$795[1];
var v$802 = getc$695(v$810);
switch (v$802[0]) { case 1: {throw basis$General$.exn$Chr$55;
 break; }default: {var v$807 = v$802[1];
var v$808 = v$807[0];
var v$809 = v$807[1];
if (((48 <= v$808)?(v$808 <= 57):false)?true:(((97 <= v$808)?(v$808 <= 102):false)?true:((65 <= v$808)?(v$808 <= 70):false))) {return fromHex$699(v$809,((48 <= v$808)?(v$808 <= 57):false)?(SmlPrims.chk_ovf_i32(v$808 - 48)):(SmlPrims.mod_i32(SmlPrims.chk_ovf_i32(v$808 - 55),32,CompilerInitial.exn$Div$40)));
} else {throw basis$General$.exn$Chr$55;
};
} };
 break; }default: {var v$826 = v$795[1];
if ((48 <= v$796)?(v$796 <= 55):false) {var v$1206 = SmlPrims.chk_ovf_i32(v$796 - 48);
return octalOpt$719(function(v$1207){return function(v$1208){return octalOpt$719(function(src$1209){return function(code$1210){var t$1285;
if ((code$1210 >= 0)?(code$1210 < 256):false) {t$1285 = code$1210;
} else {throw basis$General$.exn$Chr$55;
};
return [t$1285,src$1209];
};
},v$1207,v$1208);
};
},v$826,v$1206);
} else {throw basis$General$.exn$Chr$55;
};
} };
} };
};
basis$StrBase$.fromCescape$827 = function(getc$830,src$833){try {return [0,fromCescape$$692(getc$830,src$833)];
} catch(v$1286) {return (function(v$838){var t$1287 = v$838;
if (t$1287[0] == basis$General$.en$Chr$55) {return [1];
} else {if (t$1287[0] == CompilerInitial.en$Overflow$43) {return [1];
} else {throw v$838;
};
};
})(v$1286);
};
};
basis$StrBase$.fromCString$839 = function(s$842){var fix$1288 = {};
fix$1288.$h = function(acc$860,src$863){var v$872;
if (src$863 == null) {v$872 = [1];
} else {var v$1062 = src$863;
v$872 = [0,[v$1062[0],v$1062[1]]];
};
switch (v$872[0]) { case 1: {return SmlPrims.implode(basis$List$.rev$641(acc$860));
 break; }default: {var v$873 = v$872[1];
var v$874 = v$873[0];
switch (v$874) { case 92: {var v$881 = v$873[1];
var v$878 = fromCescape$$692(function(v$1064){if (v$1064 == null) {return [1];
} else {var v$1065 = v$1064;
return [0,[v$1065[0],v$1065[1]]];
};
},v$881);
var v$879 = v$878[0];
var v$880 = v$878[1];
return fix$1288.$h([v$879,acc$860],v$880);
 break; }default: {var v$882 = v$873[1];
return fix$1288.$h([v$874,acc$860],v$882);
} };
} };
};
var h$857 = fix$1288.$h;
try {var t$1296;
var t$1295 = h$857;
var t$1294 = null;
var t$1293;
var fix$1290 = {};
fix$1290.$h = function(v$1069,v$1070){lab$h: while (true) {if (v$1069 < 0) {return v$1070;
} else {var t$1291 = SmlPrims.chk_ovf_i32(v$1069 - 1);
var t$1292 = [s$842.charCodeAt(v$1069),v$1070];
var v$1069 = t$1291;
var v$1070 = t$1292;
continue lab$h;
};
};
};
var h$1067 = fix$1290.$h;
t$1293 = (h$1067(SmlPrims.chk_ovf_i32(s$842.length - 1),null));
t$1296 = (t$1295(t$1294,t$1293));
return [0,t$1296];
} catch(v$1289) {return (function(v$887){var t$1297 = v$887;
if (t$1297[0] == basis$General$.en$Chr$55) {return [1];
} else {if (t$1297[0] == CompilerInitial.en$Overflow$43) {return [1];
} else {throw v$887;
};
};
})(v$1289);
};
};
return 0;
})();