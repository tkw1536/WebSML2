if ((typeof(basis$ByteTable$$5)) == "undefined") {basis$ByteTable$$5 = {};
};
(function(){basis$ByteTable$$5.sub_array_unsafe$188 = function(v$1091,v$1092){return v$1091[v$1092];
};
basis$ByteTable$$5.update_array_unsafe$195 = function(v$1093,v$1094,v$1095){return (v$1093[v$1094] = v$1095,0);
};
basis$ByteTable$$5.alloc_array_unsafe$204 = function(i$207){return Array(i$207);
};
basis$ByteTable$$5.length_array$208 = function(a$211){return a$211.length;
};
basis$ByteTable$$5.sub_vector_unsafe$212 = function(v$1096,v$1097){return v$1096.charCodeAt(v$1097);
};
basis$ByteTable$$5.fromList$219 = function(es$870){return SmlPrims.implode(es$870);
};
basis$ByteTable$$5.concat$220 = function(vs$871){return SmlPrims.concat(vs$871);
};
basis$ByteTable$$5.length$221 = function(t$872){return t$872.length;
};
basis$ByteTable$$5.length_vector$222 = function(v$225){return v$225.length;
};
basis$ByteTable$$5.explode$226 = function(t$229){var fix$1100 = {};
fix$1100.$h = function(v$239,v$240){lab$h: while (true) {if (v$239 < 0) {return v$240;
} else {var t$1101 = SmlPrims.chk_ovf_i32(v$239 - 1);
var t$1102 = [t$229.charCodeAt(v$239),v$240];
var v$239 = t$1101;
var v$240 = t$1102;
continue lab$h;
};
};
};
var h$230 = fix$1100.$h;
return h$230(SmlPrims.chk_ovf_i32(t$229.length - 1),null);
};
basis$ByteTable$$5.maxLen$241 = 16777211;
basis$ByteTable$$5.sub$242 = function(v$255,v$256){if ((v$256 < 0)?true:(v$256 >= v$255.length)) {throw basis$General$.exn$Subscript$51;
} else {return v$255.charCodeAt(v$256);
};
};
basis$ByteTable$$5.tabulate$257 = function(v$283,v$284){if ((v$283 < 0)?true:(v$283 > 16777211)) {throw basis$General$.exn$Size$53;
} else {var t$266 = Array(v$283);
var fix$1103 = {};
fix$1103.$loop = function(j$270){lab$loop: while (true) {if (j$270 < v$283) {(t$266[j$270] = (v$284(j$270)),0);
var t$1104 = SmlPrims.chk_ovf_i32(j$270 + 1);
var j$270 = t$1104;
continue lab$loop;
} else {return 0;
};
};
};
var loop$267 = fix$1103.$loop;
loop$267(0);
return SmlPrims.charArrayToString(t$266);
};
};
basis$ByteTable$$5.array$285 = function(v$307,v$308){if (v$307 > 16777211) {throw basis$General$.exn$Size$53;
} else {var t$294 = Array(v$307);
var fix$1105 = {};
fix$1105.$loop = function(j$298){lab$loop: while (true) {if (j$298 < v$307) {(t$294[j$298] = v$308,0);
var t$1106 = SmlPrims.chk_ovf_i32(j$298 + 1);
var j$298 = t$1106;
continue lab$loop;
} else {return 0;
};
};
};
var loop$295 = fix$1105.$loop;
loop$295(0);
return t$294;
};
};
basis$ByteTable$$5.update$309 = function(v$323,v$324,v$325){if ((v$324 < 0)?true:(v$324 >= v$323.length)) {throw basis$General$.exn$Subscript$51;
} else {return (v$323[v$324] = v$325,0);
};
};
basis$ByteTable$$5.updatev$326 = function(v$347,v$348,v$349){if ((v$348 < 0)?true:(v$348 >= v$347.length)) {throw basis$General$.exn$Subscript$51;
} else {var v$1079 = v$347.length;
if ((v$1079 < 0)?true:(v$1079 > 16777211)) {throw basis$General$.exn$Size$53;
} else {var t$1064 = Array(v$1079);
var fix$1107 = {};
fix$1107.$loop = function(j$1066){lab$loop: while (true) {if (j$1066 < v$1079) {(t$1064[j$1066] = ((v$348 == j$1066)?v$349:(v$347.charCodeAt(j$1066))),0);
var t$1108 = SmlPrims.chk_ovf_i32(j$1066 + 1);
var j$1066 = t$1108;
continue lab$loop;
} else {return 0;
};
};
};
var loop$1065 = fix$1107.$loop;
loop$1065(0);
return SmlPrims.charArrayToString(t$1064);
};
};
};
basis$ByteTable$$5.foldl$350 = function(f$353,e$356,a$359){var stop$360 = a$359.length;
var fix$1109 = {};
fix$1109.$lr = function(v$370,v$371){lab$lr: while (true) {if (v$370 < stop$360) {var t$1110 = SmlPrims.chk_ovf_i32(v$370 + 1);
var t$1111 = f$353([a$359.charCodeAt(v$370),v$371]);
var v$370 = t$1110;
var v$371 = t$1111;
continue lab$lr;
} else {return v$371;
};
};
};
var lr$361 = fix$1109.$lr;
return lr$361(0,e$356);
};
basis$ByteTable$$5.foldr$372 = function(f$375,e$378,a$381){var fix$1112 = {};
fix$1112.$rl = function(v$391,v$392){lab$rl: while (true) {if (v$391 >= 0) {var t$1113 = SmlPrims.chk_ovf_i32(v$391 - 1);
var t$1114 = f$375([a$381.charCodeAt(v$391),v$392]);
var v$391 = t$1113;
var v$392 = t$1114;
continue lab$rl;
} else {return v$392;
};
};
};
var rl$382 = fix$1112.$rl;
return rl$382(SmlPrims.chk_ovf_i32(a$381.length - 1),e$378);
};
basis$ByteTable$$5.app$393 = function(f$396,a$399){var stop$400 = a$399.length;
var fix$1115 = {};
fix$1115.$lr = function(j$404){lab$lr: while (true) {if (j$404 < stop$400) {f$396(a$399.charCodeAt(j$404));
var t$1116 = SmlPrims.chk_ovf_i32(j$404 + 1);
var j$404 = t$1116;
continue lab$lr;
} else {return 0;
};
};
};
var lr$401 = fix$1115.$lr;
return lr$401(0);
};
basis$ByteTable$$5.map$411 = function(f$414,a$417){var v$1081 = a$417.length;
if ((v$1081 < 0)?true:(v$1081 > 16777211)) {throw basis$General$.exn$Size$53;
} else {var t$1070 = Array(v$1081);
var fix$1117 = {};
fix$1117.$loop = function(j$1072){lab$loop: while (true) {if (j$1072 < v$1081) {(t$1070[j$1072] = (f$414(a$417.charCodeAt(j$1072))),0);
var t$1118 = SmlPrims.chk_ovf_i32(j$1072 + 1);
var j$1072 = t$1118;
continue lab$loop;
} else {return 0;
};
};
};
var loop$1071 = fix$1117.$loop;
loop$1071(0);
return SmlPrims.charArrayToString(t$1070);
};
};
basis$ByteTable$$5.sliceend$421 = function(v$1098,v$1099,v$434){switch (v$434[0]) { case 1: {if ((v$1099 < 0)?true:(v$1099 > v$1098.length)) {throw basis$General$.exn$Subscript$51;
} else {return v$1098.length;
};
 break; }default: {var v$459 = v$434[1];
if ((v$1099 < 0)?true:((v$459 < 0)?true:((SmlPrims.chk_ovf_i32(v$1099 + v$459)) > v$1098.length))) {throw basis$General$.exn$Subscript$51;
} else {return SmlPrims.chk_ovf_i32(v$1099 + v$459);
};
} };
};
basis$ByteTable$$5.foldli$460 = function(f$463,e$466,a$469){var stop$899 = a$469.length;
var fix$1119 = {};
fix$1119.$lr = function(v$902,v$903){lab$lr: while (true) {if (v$902 < stop$899) {var t$1120 = SmlPrims.chk_ovf_i32(v$902 + 1);
var t$1121 = f$463([v$902,a$469.charCodeAt(v$902),v$903]);
var v$902 = t$1120;
var v$903 = t$1121;
continue lab$lr;
} else {return v$903;
};
};
};
var lr$900 = fix$1119.$lr;
return lr$900(0,e$466);
};
basis$ByteTable$$5.foldri$486 = function(f$489,e$492,a$495){var start$907 = SmlPrims.chk_ovf_i32(a$495.length - 1);
var fix$1122 = {};
fix$1122.$rl = function(v$910,v$911){lab$rl: while (true) {if (v$910 >= 0) {var t$1123 = SmlPrims.chk_ovf_i32(v$910 - 1);
var t$1124 = f$489([v$910,a$495.charCodeAt(v$910),v$911]);
var v$910 = t$1123;
var v$911 = t$1124;
continue lab$rl;
} else {return v$911;
};
};
};
var rl$908 = fix$1122.$rl;
return rl$908(start$907,e$492);
};
basis$ByteTable$$5.modifyi$512 = function(f$515,a$518){var stop$519 = a$518.length;
var fix$1125 = {};
fix$1125.$lr = function(j$523){lab$lr: while (true) {if (j$523 < stop$519) {(a$518[j$523] = (f$515([j$523,a$518[j$523]])),0);
var t$1126 = SmlPrims.chk_ovf_i32(j$523 + 1);
var j$523 = t$1126;
continue lab$lr;
} else {return 0;
};
};
};
var lr$520 = fix$1125.$lr;
return lr$520(0);
};
basis$ByteTable$$5.modify$530 = function(f$533,a$536){var n$537 = a$536.length;
var fix$1127 = {};
fix$1127.$lr = function(j$541){lab$lr: while (true) {if (j$541 < n$537) {(a$536[j$541] = (f$533(a$536[j$541])),0);
var t$1128 = SmlPrims.chk_ovf_i32(j$541 + 1);
var j$541 = t$1128;
continue lab$lr;
} else {return 0;
};
};
};
var lr$538 = fix$1127.$lr;
return lr$538(0);
};
basis$ByteTable$$5.vector$548 = function(a$551){return SmlPrims.charArrayToString(a$551);
};
basis$ByteTable$$5.copy$618 = function(v$631,v$630,v$629){var v$1018 = [1];
var n_dst$933 = v$630.length;
var n_src$934 = v$629.length;
var n$935;
switch (v$1018[0]) { case 1: {n$935 = (SmlPrims.chk_ovf_i32(v$629.length - 0));
 break; }default: {n$935 = v$1018[1];
} };
if ((n$935 < 0)?true:(((SmlPrims.chk_ovf_i32(0 + n$935)) > n_src$934)?true:((v$631 < 0)?true:((SmlPrims.chk_ovf_i32(v$631 + n$935)) > n_dst$933)))) {throw basis$General$.exn$Subscript$51;
} else {if (0 < v$631) {var fix$1129 = {};
fix$1129.$hdilo = function(j$937){lab$hdilo: while (true) {if (j$937 >= 0) {(v$630[SmlPrims.chk_ovf_i32(v$631 + j$937)] = v$629[SmlPrims.chk_ovf_i32(0 + j$937)],0);
var t$1130 = SmlPrims.chk_ovf_i32(j$937 - 1);
var j$937 = t$1130;
continue lab$hdilo;
} else {return 0;
};
};
};
var hdilo$936 = fix$1129.$hdilo;
return hdilo$936(SmlPrims.chk_ovf_i32(n$935 - 1));
} else {var fix$1131 = {};
fix$1131.$lo2hi = function(j$941){lab$lo2hi: while (true) {if (j$941 < n$935) {(v$630[SmlPrims.chk_ovf_i32(v$631 + j$941)] = v$629[SmlPrims.chk_ovf_i32(0 + j$941)],0);
var t$1132 = SmlPrims.chk_ovf_i32(j$941 + 1);
var j$941 = t$1132;
continue lab$lo2hi;
} else {return 0;
};
};
};
var lo2hi$940 = fix$1131.$lo2hi;
return lo2hi$940(0);
};
};
};
basis$ByteTable$$5.copyVec$684 = function(v$697,v$696,v$695){var v$1033 = [1];
var n_dst$954 = v$696.length;
var n_src$955 = v$695.length;
var n$956;
switch (v$1033[0]) { case 1: {n$956 = (SmlPrims.chk_ovf_i32(n_src$955 - 0));
 break; }default: {n$956 = v$1033[1];
} };
if ((n$956 < 0)?true:(((SmlPrims.chk_ovf_i32(0 + n$956)) > n_src$955)?true:((v$697 < 0)?true:((SmlPrims.chk_ovf_i32(v$697 + n$956)) > n_dst$954)))) {throw basis$General$.exn$Subscript$51;
} else {var fix$1133 = {};
fix$1133.$lo2hi = function(j$958){lab$lo2hi: while (true) {if (j$958 < n$956) {(v$696[SmlPrims.chk_ovf_i32(v$697 + j$958)] = (v$695.charCodeAt(SmlPrims.chk_ovf_i32(0 + j$958))),0);
var t$1134 = SmlPrims.chk_ovf_i32(j$958 + 1);
var j$958 = t$1134;
continue lab$lo2hi;
} else {return 0;
};
};
};
var lo2hi$957 = fix$1133.$lo2hi;
return lo2hi$957(0);
};
};
basis$ByteTable$$5.appi$698 = function(f$701,a$704){var stop$705 = a$704.length;
var fix$1135 = {};
fix$1135.$lr = function(j$709){lab$lr: while (true) {if (j$709 < stop$705) {f$701([j$709,a$704.charCodeAt(j$709)]);
var t$1136 = SmlPrims.chk_ovf_i32(j$709 + 1);
var j$709 = t$1136;
continue lab$lr;
} else {return 0;
};
};
};
var lr$706 = fix$1135.$lr;
return lr$706(0);
};
basis$ByteTable$$5.mapi$716 = function(f$719,a$722){var v$1083 = a$722.length;
if ((v$1083 < 0)?true:(v$1083 > 16777211)) {throw basis$General$.exn$Size$53;
} else {var t$1076 = Array(v$1083);
var fix$1137 = {};
fix$1137.$loop = function(j$1078){lab$loop: while (true) {if (j$1078 < v$1083) {(t$1076[j$1078] = (f$719([j$1078,a$722.charCodeAt(j$1078)])),0);
var t$1138 = SmlPrims.chk_ovf_i32(j$1078 + 1);
var j$1078 = t$1138;
continue lab$loop;
} else {return 0;
};
};
};
var loop$1077 = fix$1137.$loop;
loop$1077(0);
return SmlPrims.charArrayToString(t$1076);
};
};
basis$ByteTable$$5.find$726 = function(p$729,a$732){var stop$733 = a$732.length;
var fix$1139 = {};
fix$1139.$lr = function(j$737){lab$lr: while (true) {if (j$737 < stop$733) {if (p$729(a$732.charCodeAt(j$737))) {return [0,a$732.charCodeAt(j$737)];
} else {var t$1140 = SmlPrims.chk_ovf_i32(j$737 + 1);
var j$737 = t$1140;
continue lab$lr;
};
} else {return [1];
};
};
};
var lr$734 = fix$1139.$lr;
return lr$734(0);
};
basis$ByteTable$$5.exists$746 = function(p$749,a$752){var stop$753 = a$752.length;
var fix$1141 = {};
fix$1141.$lr = function(j$757){lab$lr: while (true) {if (j$757 < stop$753) {if (p$749(a$752.charCodeAt(j$757))) {return true;
} else {var t$1142 = SmlPrims.chk_ovf_i32(j$757 + 1);
var j$757 = t$1142;
continue lab$lr;
};
} else {return false;
};
};
};
var lr$754 = fix$1141.$lr;
return lr$754(0);
};
basis$ByteTable$$5.all$766 = function(p$769,a$772){var stop$773 = a$772.length;
var fix$1143 = {};
fix$1143.$lr = function(j$777){lab$lr: while (true) {if (j$777 >= stop$773) {return true;
} else {if (p$769(a$772.charCodeAt(j$777))) {var t$1144 = SmlPrims.chk_ovf_i32(j$777 + 1);
var j$777 = t$1144;
continue lab$lr;
} else {return false;
};
};
};
};
var lr$774 = fix$1143.$lr;
return lr$774(0);
};
basis$ByteTable$$5.findi$786 = function(p$789,a$792){var stop$793 = a$792.length;
var fix$1145 = {};
fix$1145.$lr = function(j$797){lab$lr: while (true) {if (j$797 < stop$793) {if (p$789([j$797,a$792.charCodeAt(j$797)])) {return [0,[j$797,a$792.charCodeAt(j$797)]];
} else {var t$1146 = SmlPrims.chk_ovf_i32(j$797 + 1);
var j$797 = t$1146;
continue lab$lr;
};
} else {return [1];
};
};
};
var lr$794 = fix$1145.$lr;
return lr$794(0);
};
basis$ByteTable$$5.collate$806 = function(cmp$809,v$813){var v$842 = v$813[0];
var v$843 = v$813[1];
var n1$814 = v$842.length;
var n2$815 = v$843.length;
var stop$816 = (n1$814 < n2$815)?n1$814:n2$815;
var fix$1147 = {};
fix$1147.$h = function(j$824){lab$h: while (true) {if (j$824 == stop$816) {return (n1$814 < n2$815)?0:((n1$814 > n2$815)?1:2);
} else {var v$841 = cmp$809([v$842.charCodeAt(j$824),v$843.charCodeAt(j$824)]);
switch (v$841) { case 2: {var t$1148 = SmlPrims.chk_ovf_i32(j$824 + 1);
var j$824 = t$1148;
continue lab$h;
 break; }default: {return v$841;
} };
};
};
};
var h$821 = fix$1147.$h;
return h$821(0);
};
return 0;
})();