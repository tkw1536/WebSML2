if ((typeof(basis$Substring$)) == "undefined") {basis$Substring$ = {};
};
(function(){var blit_unsafe$76 = function(v$99,v$100,v$101,v$102,v$103){var fix$1079 = {};
fix$1079.$loop = function(v$96,v$97,v$98){lab$loop: while (true) {if (v$98 > 0) {(v$101[v$97] = (v$99.charCodeAt(v$96)),0);
var t$1080 = SmlPrims.chk_ovf_i32(v$96 + 1);
var t$1081 = SmlPrims.chk_ovf_i32(v$97 + 1);
var t$1082 = SmlPrims.chk_ovf_i32(v$98 - 1);
var v$96 = t$1080;
var v$97 = t$1081;
var v$98 = t$1082;
continue lab$loop;
} else {return 0;
};
};
};
var loop$84 = fix$1079.$loop;
return loop$84(v$100,v$102,v$103);
};
basis$Substring$.base$104 = function(arg$107){return arg$107;
};
basis$Substring$.string$108 = function(v$117,v$118,v$119){var newstr$114 = Array(v$119);
blit_unsafe$76(v$117,v$118,newstr$114,0,v$119);
return SmlPrims.charArrayToString(newstr$114);
};
basis$Substring$.extract$120 = function(v$1046,v$1047,v$133){switch (v$133[0]) { case 1: {if ((0 <= v$1047)?(v$1047 <= v$1046.length):false) {return [v$1046,v$1047,SmlPrims.chk_ovf_i32(v$1046.length - v$1047)];
} else {throw basis$General$.exn$Subscript$51;
};
 break; }default: {var v$158 = v$133[1];
if ((0 <= v$1047)?((0 <= v$158)?(v$158 <= (SmlPrims.chk_ovf_i32(v$1046.length - v$1047))):false):false) {return [v$1046,v$1047,v$158];
} else {throw basis$General$.exn$Subscript$51;
};
} };
};
basis$Substring$.substring$159 = function(v$165,v$166,v$167){return basis$Substring$.extract$120(v$165,v$166,[0,v$167]);
};
basis$Substring$.full$168 = function(s$171){return [s$171,0,s$171.length];
};
basis$Substring$.getc$172 = function(v$1048,v$1049,v$185){switch (v$185) { case 0: {return [1];
 break; }default: {return [0,[v$1048.charCodeAt(v$1049),[v$1048,SmlPrims.chk_ovf_i32(v$1049 + 1),SmlPrims.chk_ovf_i32(v$185 - 1)]]];
} };
};
basis$Substring$.first$190 = function(v$200,v$201,v$202){return (v$202 == 0)?[1]:[0,v$200.charCodeAt(v$201)];
};
basis$Substring$.isEmpty$203 = function(v$1050,v$1051,v$1052){return v$1052 == 0;
};
basis$Substring$.triml$212 = function(k$215){if (k$215 < 0) {throw basis$General$.exn$Subscript$51;
} else {return function(v$224){var v$229 = v$224[0];
var v$230 = v$224[1];
var v$231 = v$224[2];
return (k$215 > v$231)?[v$229,SmlPrims.chk_ovf_i32(v$230 + v$231),0]:[v$229,SmlPrims.chk_ovf_i32(v$230 + k$215),SmlPrims.chk_ovf_i32(v$231 - k$215)];
};
};
};
basis$Substring$.trimr$232 = function(k$235){if (k$235 < 0) {throw basis$General$.exn$Subscript$51;
} else {return function(v$244){var v$249 = v$244[0];
var v$250 = v$244[1];
var v$251 = v$244[2];
return (k$235 > v$251)?[v$249,v$250,0]:[v$249,v$250,SmlPrims.chk_ovf_i32(v$251 - k$235)];
};
};
};
basis$Substring$.sub$252 = function(v$267,v$1053){var v$268 = v$267[0];
var v$269 = v$267[1];
var v$270 = v$267[2];
if ((v$1053 < 0)?true:(v$1053 >= v$270)) {throw basis$General$.exn$Subscript$51;
} else {return v$268.charCodeAt(SmlPrims.chk_ovf_i32(v$269 + v$1053));
};
};
basis$Substring$.size$272 = function(v$1054,v$1055,v$1056){return v$1056;
};
basis$Substring$.slice$277 = function(v$1057,v$1058,v$294){switch (v$294[0]) { case 1: {var v$304 = v$1057[0];
var v$305 = v$1057[1];
var v$306 = v$1057[2];
if ((0 <= v$1058)?(v$1058 <= v$306):false) {return [v$304,SmlPrims.chk_ovf_i32(v$305 + v$1058),SmlPrims.chk_ovf_i32(v$306 - v$1058)];
} else {throw basis$General$.exn$Subscript$51;
};
 break; }default: {var v$321 = v$1057[0];
var v$322 = v$1057[1];
var v$323 = v$1057[2];
var v$325 = v$294[1];
if ((0 <= v$1058)?((0 <= v$325)?((SmlPrims.chk_ovf_i32(v$1058 + v$325)) <= v$323):false):false) {return [v$321,SmlPrims.chk_ovf_i32(v$322 + v$1058),v$325];
} else {throw basis$General$.exn$Subscript$51;
};
} };
};
basis$Substring$.splitAt$326 = function(v$341,v$1059){var v$342 = v$341[0];
var v$343 = v$341[1];
var v$344 = v$341[2];
if ((v$1059 < 0)?true:(v$1059 > v$344)) {throw basis$General$.exn$Subscript$51;
} else {return [[v$342,v$343,v$1059],[v$342,SmlPrims.chk_ovf_i32(v$343 + v$1059),SmlPrims.chk_ovf_i32(v$344 - v$1059)]];
};
};
basis$Substring$.concat$346 = function(strs$349){var fix$1083 = {};
fix$1083.$acc = function(v$353,v$356){lab$acc: while (true) {if (v$353 == null) {return v$356;
} else {var v$367 = v$353;
var v$368 = v$367[0];
var v$369 = v$368[2];
var v$370 = v$367[1];
var t$1084 = v$370;
var t$1085 = SmlPrims.chk_ovf_i32(v$369 + v$356);
var v$353 = t$1084;
var v$356 = t$1085;
continue lab$acc;
};
};
};
var acc$350 = fix$1083.$acc;
var len$372 = acc$350(strs$349,0);
var newstr$373;
if (len$372 > 16777211) {throw basis$General$.exn$Size$53;
} else {newstr$373 = (Array(len$372));
};
var fix$1086 = {};
fix$1086.$copyall = function(v$381,v$384){lab$copyall: while (true) {if (v$384 == null) {return 0;
} else {var v$400 = v$384;
var v$401 = v$400[0];
var v$402 = v$401[0];
var v$403 = v$401[1];
var v$404 = v$401[2];
var v$405 = v$400[1];
blit_unsafe$76(v$402,v$403,newstr$373,v$381,v$404);
var t$1087 = SmlPrims.chk_ovf_i32(v$381 + v$404);
var t$1088 = v$405;
var v$381 = t$1087;
var v$384 = t$1088;
continue lab$copyall;
};
};
};
var copyall$378 = fix$1086.$copyall;
copyall$378(0,strs$349);
return SmlPrims.charArrayToString(newstr$373);
};
basis$Substring$.concatWith$408 = function(v$411,v$414){if (v$414 == null) {return "";
} else {var v$490 = v$414;
var v$491 = v$490[0];
var v$492 = v$491[0];
var v$493 = v$491[1];
var v$494 = v$491[2];
var v$495 = v$490[1];
var seplen$427 = v$411.length;
var fix$1089 = {};
fix$1089.$acc = function(v$431,v$434){lab$acc: while (true) {if (v$431 == null) {return v$434;
} else {var v$445 = v$431;
var v$446 = v$445[0];
var v$447 = v$445[1];
var t$1090 = v$447;
var t$1091 = SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$446[2] + seplen$427)) + v$434);
var v$431 = t$1090;
var v$434 = t$1091;
continue lab$acc;
};
};
};
var acc$428 = fix$1089.$acc;
var len$449 = acc$428(v$495,v$494);
var newstr$450;
if (len$449 > 16777211) {throw basis$General$.exn$Size$53;
} else {newstr$450 = (Array(len$449));
};
var fix$1092 = {};
fix$1092.$copyall = function(v$458,v$461){lab$copyall: while (true) {if (v$461 == null) {return 0;
} else {var v$479 = v$461;
var v$480 = v$479[0];
var v$481 = v$480[0];
var v$482 = v$480[1];
var v$483 = v$480[2];
var v$484 = v$479[1];
blit_unsafe$76(v$411,0,newstr$450,v$458,seplen$427);
blit_unsafe$76(v$481,v$482,newstr$450,SmlPrims.chk_ovf_i32(v$458 + seplen$427),v$483);
var t$1093 = SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$458 + seplen$427)) + v$483);
var t$1094 = v$484;
var v$458 = t$1093;
var v$461 = t$1094;
continue lab$copyall;
};
};
};
var copyall$455 = fix$1092.$copyall;
blit_unsafe$76(v$492,v$493,newstr$450,0,v$494);
copyall$455(v$494,v$495);
return SmlPrims.charArrayToString(newstr$450);
};
};
basis$Substring$.compare$496 = function(v$536,v$1060){var v$537 = v$536[0];
var v$538 = v$536[1];
var v$539 = v$536[2];
var v$541 = v$1060[0];
var v$542 = v$1060[1];
var v$543 = v$1060[2];
var stop$505 = (v$539 < v$543)?v$539:v$543;
var fix$1095 = {};
fix$1095.$h = function(j$513){lab$h: while (true) {if (j$513 == stop$505) {return (v$539 < v$543)?0:((v$539 > v$543)?1:2);
} else {var c1$526 = v$537.charCodeAt(SmlPrims.chk_ovf_i32(v$538 + j$513));
var c2$527 = v$541.charCodeAt(SmlPrims.chk_ovf_i32(v$542 + j$513));
if (c1$526 < c2$527) {return 0;
} else {if (c1$526 > c2$527) {return 1;
} else {var t$1096 = SmlPrims.chk_ovf_i32(j$513 + 1);
var j$513 = t$1096;
continue lab$h;
};
};
};
};
};
var h$510 = fix$1095.$h;
return h$510(0);
};
basis$Substring$.isPrefix$544 = function(s1$547,v$552){var v$575 = v$552[0];
var v$576 = v$552[1];
var v$577 = v$552[2];
var n1$553 = s1$547.length;
var stop$554 = (n1$553 < v$577)?n1$553:v$577;
var fix$1097 = {};
fix$1097.$h = function(j$562){lab$h: while (true) {if (j$562 == stop$554) {return true;
} else {if ((s1$547.charCodeAt(j$562)) == (v$575.charCodeAt(SmlPrims.chk_ovf_i32(v$576 + j$562)))) {var t$1098 = SmlPrims.chk_ovf_i32(j$562 + 1);
var j$562 = t$1098;
continue lab$h;
} else {return false;
};
};
};
};
var h$559 = fix$1097.$h;
if (n1$553 <= v$577) {return h$559(0);
} else {return false;
};
};
basis$Substring$.isSuffix$578 = function(s1$581,v$586){var v$605 = v$586[0];
var v$606 = v$586[1];
var v$607 = v$586[2];
var n1$587 = s1$581.length;
var offset$588 = SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$606 + v$607)) - n1$587);
var fix$1099 = {};
fix$1099.$h = function(j$592){lab$h: while (true) {if (j$592 == n1$587) {return true;
} else {if ((s1$581.charCodeAt(j$592)) == (v$605.charCodeAt(SmlPrims.chk_ovf_i32(j$592 + offset$588)))) {var t$1100 = SmlPrims.chk_ovf_i32(j$592 + 1);
var j$592 = t$1100;
continue lab$h;
} else {return false;
};
};
};
};
var h$589 = fix$1099.$h;
if (n1$587 <= v$607) {return h$589(0);
} else {return false;
};
};
basis$Substring$.isSubstring$608 = function(v$611,v$614){switch (v$611) { case "": {return true;
 break; }default: {var v$669 = v$614[0];
var v$670 = v$614[1];
var v$671 = v$614[2];
var n1$633 = v$611.length;
var stop1$634 = SmlPrims.chk_ovf_i32(n1$633 - 1);
var stop2$635 = SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$670 + v$671)) - n1$633);
var fix$1101 = {};
fix$1101.$issub = function(offset$655){if (offset$655 <= stop2$635) {var t$1104;
if ((v$611.charCodeAt(stop1$634)) == (v$669.charCodeAt(SmlPrims.chk_ovf_i32(stop1$634 + offset$655)))) {var fix$1102 = {};
fix$1102.$h = function(j$953){lab$h: while (true) {if (j$953 >= stop1$634) {return true;
} else {if ((v$611.charCodeAt(j$953)) == (v$669.charCodeAt(SmlPrims.chk_ovf_i32(j$953 + offset$655)))) {var t$1103 = SmlPrims.chk_ovf_i32(j$953 + 1);
var j$953 = t$1103;
continue lab$h;
} else {return false;
};
};
};
};
var h$952 = fix$1102.$h;
t$1104 = (h$952(0));
} else {t$1104 = false;
};
if (t$1104) {return true;
} else {return fix$1101.$issub(SmlPrims.chk_ovf_i32(offset$655 + 1));
};
} else {return false;
};
};
var issub$652 = fix$1101.$issub;
return issub$652(v$670);
} };
};
basis$Substring$.collate$672 = function(cmp$675,v$683){var v$711 = v$683[0];
var v$712 = v$711[0];
var v$713 = v$711[1];
var v$714 = v$711[2];
var v$715 = v$683[1];
var v$716 = v$715[0];
var v$717 = v$715[1];
var v$718 = v$715[2];
var stop$684 = (v$714 < v$718)?v$714:v$718;
var fix$1105 = {};
fix$1105.$h = function(j$692){lab$h: while (true) {if (j$692 == stop$684) {return (v$714 < v$718)?0:((v$714 > v$718)?1:2);
} else {switch (cmp$675([v$712.charCodeAt(SmlPrims.chk_ovf_i32(v$713 + j$692)),v$716.charCodeAt(SmlPrims.chk_ovf_i32(v$717 + j$692))])) { case 0: {return 0;
 break; }case 1: {return 1;
 break; }default: {var t$1106 = SmlPrims.chk_ovf_i32(j$692 + 1);
var j$692 = t$1106;
continue lab$h;
} };
};
};
};
var h$689 = fix$1105.$h;
return h$689(0);
};
basis$Substring$.foldl$719 = function(f$722,e$725,sus$728){var v$961 = sus$728[0];
var v$962 = sus$728[1];
var v$963 = sus$728[2];
var stop$964 = SmlPrims.chk_ovf_i32(v$962 + v$963);
var fix$1107 = {};
fix$1107.$h = function(v$967,v$968){lab$h: while (true) {if (v$967 >= stop$964) {return v$968;
} else {var t$1108 = SmlPrims.chk_ovf_i32(v$967 + 1);
var t$1109 = f$722([v$961.charCodeAt(v$967),v$968]);
var v$967 = t$1108;
var v$968 = t$1109;
continue lab$h;
};
};
};
var h$965 = fix$1107.$h;
return h$965(v$962,e$725);
};
basis$Substring$.foldr$729 = function(f$732,e$735,v$740){var v$752 = v$740[0];
var v$753 = v$740[1];
var v$754 = v$740[2];
var fix$1110 = {};
fix$1110.$h = function(j$744,res$747){lab$h: while (true) {if (j$744 < v$753) {return res$747;
} else {var t$1111 = SmlPrims.chk_ovf_i32(j$744 - 1);
var t$1112 = f$732([v$752.charCodeAt(j$744),res$747]);
var j$744 = t$1111;
var res$747 = t$1112;
continue lab$h;
};
};
};
var h$741 = fix$1110.$h;
return h$741(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$753 + v$754)) - 1),e$735);
};
basis$Substring$.explode$755 = function(v$772,v$773,v$774){var fix$1113 = {};
fix$1113.$h = function(j$764,res$767){lab$h: while (true) {if (j$764 < v$773) {return res$767;
} else {var t$1114 = SmlPrims.chk_ovf_i32(j$764 - 1);
var t$1115 = [v$772.charCodeAt(j$764),res$767];
var j$764 = t$1114;
var res$767 = t$1115;
continue lab$h;
};
};
};
var h$761 = fix$1113.$h;
return h$761(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$773 + v$774)) - 1),null);
};
basis$Substring$.app$775 = function(f$778,v$783){var v$795 = v$783[0];
var v$796 = v$783[1];
var v$797 = v$783[2];
var stop$784 = SmlPrims.chk_ovf_i32(v$796 + v$797);
var fix$1116 = {};
fix$1116.$h = function(j$788){lab$h: while (true) {if (j$788 >= stop$784) {return 0;
} else {f$778(v$795.charCodeAt(j$788));
var t$1117 = SmlPrims.chk_ovf_i32(j$788 + 1);
var j$788 = t$1117;
continue lab$h;
};
};
};
var h$785 = fix$1116.$h;
return h$785(v$796);
};
basis$Substring$.span$798 = function(v$920,v$806){var v$815 = v$806[0];
var v$816 = v$815[0];
var v$817 = v$815[1];
var v$819 = v$806[1];
var v$820 = v$819[0];
var v$821 = v$819[1];
var v$822 = v$819[2];
if ((v$817 > (SmlPrims.chk_ovf_i32(v$821 + v$822)))?true:((v$920([v$816,v$820]))?false:true)) {throw basis$General$.exn$Span$52;
} else {return [v$816,v$817,SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$821 + v$822)) - v$817)];
};
};
basis$Substring$.splitl$823 = function(v$1061,v$1062){return basis$StrBase$.splitl$245(v$1061,v$1062);
};
basis$Substring$.splitr$824 = function(v$1063,v$1064){return basis$StrBase$.splitr$262(v$1063,v$1064);
};
basis$Substring$.dropl$825 = function(v$1065,v$1066){return basis$StrBase$.dropl$177(v$1065,v$1066);
};
basis$Substring$.dropr$826 = function(v$1067,v$1068){return basis$StrBase$.dropr$194(v$1067,v$1068);
};
basis$Substring$.takel$827 = function(v$1069,v$1070){return basis$StrBase$.takel$211(v$1069,v$1070);
};
basis$Substring$.taker$828 = function(v$1071,v$1072){return basis$StrBase$.taker$228(v$1071,v$1072);
};
basis$Substring$.translate$829 = function(v$1073,v$1074){return basis$StrBase$.translate$279(v$1073,v$1074);
};
basis$Substring$.tokens$830 = function(v$1075,v$1076){return basis$StrBase$.tokens$303(v$1075,v$1076);
};
basis$Substring$.fields$831 = function(v$1077,v$1078){return basis$StrBase$.fields$336(v$1077,v$1078);
};
basis$Substring$.position$832 = function(v$835,v$838){switch (v$835) { case "": {return [[v$838[0],v$838[1],0],v$838];
 break; }default: {var v$891 = v$838[0];
var v$892 = v$838[1];
var v$893 = v$838[2];
var len1$857 = SmlPrims.chk_ovf_i32(v$835.length - 1);
var fix$1118 = {};
fix$1118.$eq = function(j$861,k$864){lab$eq: while (true) {if (j$861 >= len1$857) {return true;
} else {if ((v$835.charCodeAt(j$861)) == (v$891.charCodeAt(k$864))) {var t$1119 = SmlPrims.chk_ovf_i32(j$861 + 1);
var t$1120 = SmlPrims.chk_ovf_i32(k$864 + 1);
var j$861 = t$1119;
var k$864 = t$1120;
continue lab$eq;
} else {return false;
};
};
};
};
var eq$858 = fix$1118.$eq;
var stop$873 = SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$892 + v$893)) - len1$857)) - 1);
var fix$1121 = {};
fix$1121.$cmp = function(k$877){lab$cmp: while (true) {if (k$877 > stop$873) {return [v$838,[v$891,SmlPrims.chk_ovf_i32(v$892 + v$893),0]];
} else {if (((v$835.charCodeAt(len1$857)) == (v$891.charCodeAt(SmlPrims.chk_ovf_i32(k$877 + len1$857))))?(eq$858(0,k$877)):false) {return [[v$891,v$892,SmlPrims.chk_ovf_i32(k$877 - v$892)],[v$891,k$877,SmlPrims.chk_ovf_i32(v$893 - (SmlPrims.chk_ovf_i32(k$877 - v$892)))]];
} else {var t$1122 = SmlPrims.chk_ovf_i32(k$877 + 1);
var k$877 = t$1122;
continue lab$cmp;
};
};
};
};
var cmp$874 = fix$1121.$cmp;
return cmp$874(v$892);
} };
};
return 0;
})();