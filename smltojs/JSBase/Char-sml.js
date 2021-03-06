if ((typeof(basis$Char$)) == "undefined") {basis$Char$ = {};
};
(function(){basis$Char$.sub_unsafe$45 = function(v$466,v$467){return v$466.charCodeAt(v$467);
};
basis$Char$.size$52 = function(s$55){return s$55.length;
};
basis$Char$.ord$56 = function(c$59){return c$59;
};
basis$Char$.unsafe_chr$60 = function(i$63){return i$63;
};
basis$Char$.chr$64 = function(i$67){if ((i$67 >= 0)?(i$67 < 256):false) {return i$67;
} else {throw basis$General$.exn$Chr$55;
};
};
basis$Char$.not$76 = function(v$79){return v$79?false:true;
};
basis$Char$.minChar$84 = 0;
basis$Char$.maxChar$85 = 255;
basis$Char$.maxOrd$86 = 255;
basis$Char$.succ$87 = function(c$90){var i$91 = c$90;
if (i$91 < 255) {return SmlPrims.chk_ovf_i32(i$91 + 1);
} else {throw basis$General$.exn$Chr$55;
};
};
basis$Char$.pred$96 = function(c$99){var i$100 = c$99;
if (i$100 > 0) {return SmlPrims.chk_ovf_i32(i$100 - 1);
} else {throw basis$General$.exn$Chr$55;
};
};
basis$Char$.contains$105 = function(s$108,c$111){var sz$112 = s$108.length;
var fix$476 = {};
fix$476.$loop = function(j$116){lab$loop: while (true) {if (j$116 >= sz$112) {return false;
} else {if ((s$108.charCodeAt(j$116)) == c$111) {return true;
} else {var t$477 = SmlPrims.chk_ovf_i32(j$116 + 1);
var j$116 = t$477;
continue lab$loop;
};
};
};
};
var loop$113 = fix$476.$loop;
return loop$113(0);
};
basis$Char$.notContains$125 = function(s$128,c$131){var t$478;
var sz$418 = s$128.length;
var fix$479 = {};
fix$479.$loop = function(j$420){lab$loop: while (true) {if (j$420 >= sz$418) {return false;
} else {if ((s$128.charCodeAt(j$420)) == c$131) {return true;
} else {var t$480 = SmlPrims.chk_ovf_i32(j$420 + 1);
var j$420 = t$480;
continue lab$loop;
};
};
};
};
var loop$419 = fix$479.$loop;
t$478 = (loop$419(0));
return t$478?false:true;
};
basis$Char$.isLower$132 = function(c$135){return (97 <= c$135)?(c$135 <= 122):false;
};
basis$Char$.isUpper$140 = function(c$143){return (65 <= c$143)?(c$143 <= 90):false;
};
basis$Char$.isDigit$148 = function(c$151){return (48 <= c$151)?(c$151 <= 57):false;
};
basis$Char$.isAlpha$156 = function(c$159){return ((97 <= c$159)?(c$159 <= 122):false)?true:((65 <= c$159)?(c$159 <= 90):false);
};
basis$Char$.isHexDigit$164 = function(c$167){return ((48 <= c$167)?(c$167 <= 57):false)?true:(((97 <= c$167)?(c$167 <= 102):false)?true:((65 <= c$167)?(c$167 <= 70):false));
};
basis$Char$.isAlphaNum$188 = function(c$191){return (((97 <= c$191)?(c$191 <= 122):false)?true:((65 <= c$191)?(c$191 <= 90):false))?true:((48 <= c$191)?(c$191 <= 57):false);
};
basis$Char$.isPrint$196 = function(c$199){return (c$199 >= 32)?(c$199 < 127):false;
};
basis$Char$.isSpace$204 = function(c$207){return (c$207 == 32)?true:((9 <= c$207)?(c$207 <= 13):false);
};
basis$Char$.isGraph$216 = function(c$219){return ((c$219 >= 32)?(c$219 < 127):false)?(((c$219 == 32)?true:((9 <= c$219)?(c$219 <= 13):false))?false:true):false;
};
basis$Char$.isPunct$224 = function(c$227){return (((c$227 >= 32)?(c$227 < 127):false)?(((c$227 == 32)?true:((9 <= c$227)?(c$227 <= 13):false))?false:true):false)?(((((97 <= c$227)?(c$227 <= 122):false)?true:((65 <= c$227)?(c$227 <= 90):false))?true:((48 <= c$227)?(c$227 <= 57):false))?false:true):false;
};
basis$Char$.isAscii$232 = function(c$235){return c$235 <= 127;
};
basis$Char$.isCntrl$236 = function(c$239){return (c$239 < 32)?true:(c$239 >= 127);
};
basis$Char$.toLower$244 = function(c$247){return ((65 <= c$247)?(c$247 <= 90):false)?(SmlPrims.chk_ovf_i32(c$247 + 32)):c$247;
};
basis$Char$.toUpper$256 = function(c$259){return ((97 <= c$259)?(c$259 <= 122):false)?(SmlPrims.chk_ovf_i32(c$259 - 32)):c$259;
};
basis$Char$.toString$268 = function(c$271){return basis$StrBase$.toMLescape$617(c$271);
};
basis$Char$.scan$272 = function(getc$275,s$278){var v$286 = getc$275(s$278);
switch (v$286[0]) { case 1: {return [1];
 break; }default: {var v$287 = v$286[1];
switch (v$287[0]) { case 92: {var v$295 = v$287[1];
var v$293 = basis$StrBase$.fromMLescape$458(getc$275,v$295);
switch (v$293[0]) { case 1: {return [1];
 break; }default: {var v$294 = v$293[1];
return [0,v$294];
} };
 break; }default: {return [0,v$287];
} };
} };
};
basis$Char$.fromString$296 = function(s$299){var v$315 = (0 < s$299.length)?[0,[s$299.charCodeAt(0),SmlPrims.chk_ovf_i32(0 + 1)]]:[1];
switch (v$315[0]) { case 1: {return [1];
 break; }default: {var v$316 = v$315[1];
var v$317 = v$316[0];
switch (v$317) { case 92: {var v$325 = v$316[1];
var v$322 = basis$StrBase$.fromMLescape$458(function(i$446){return (i$446 < s$299.length)?[0,[s$299.charCodeAt(i$446),SmlPrims.chk_ovf_i32(i$446 + 1)]]:[1];
},v$325);
switch (v$322[0]) { case 1: {return [1];
 break; }default: {var v$323 = v$322[1];
var v$324 = v$323[0];
return [0,v$324];
} };
 break; }default: {return [0,v$317];
} };
} };
};
basis$Char$.fromCString$326 = function(s$329){var v$345 = (0 < s$329.length)?[0,[s$329.charCodeAt(0),SmlPrims.chk_ovf_i32(0 + 1)]]:[1];
switch (v$345[0]) { case 1: {return [1];
 break; }default: {var v$346 = v$345[1];
var v$347 = v$346[0];
switch (v$347) { case 92: {var v$355 = v$346[1];
var v$352 = basis$StrBase$.fromCescape$827(function(i$452){return (i$452 < s$329.length)?[0,[s$329.charCodeAt(i$452),SmlPrims.chk_ovf_i32(i$452 + 1)]]:[1];
},v$355);
switch (v$352[0]) { case 1: {return [1];
 break; }default: {var v$353 = v$352[1];
var v$354 = v$353[0];
return [0,v$354];
} };
 break; }default: {return [0,v$347];
} };
} };
};
basis$Char$.toCString$356 = function(c$359){return basis$StrBase$.toCescape$653(c$359);
};
basis$Char$.compare$360 = function(v$373,v$374){return (v$373 < v$374)?0:((v$373 > v$374)?1:2);
};
basis$Char$.s$j$375 = function(v$468,v$469){return v$468 < v$469;
};
basis$Char$.s$jk$377 = function(v$470,v$471){return v$470 <= v$471;
};
basis$Char$.s$l$379 = function(v$472,v$473){return v$472 > v$473;
};
basis$Char$.s$lk$381 = function(v$474,v$475){return v$474 >= v$475;
};
return 0;
})();
