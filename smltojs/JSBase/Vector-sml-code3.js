if ((typeof(basis$Vector$$3)) == "undefined") {basis$Vector$$3 = {};
};
(function(){basis$Vector$$3.sub0$97 = function(v$988,v$989){return v$988[v$989];
};
basis$Vector$$3.sub_vector0$104 = function(v$990,v$991){return v$990[v$991];
};
basis$Vector$$3.update0$111 = function(v$992,v$993,v$994){return (v$992[v$993] = v$994,0);
};
basis$Vector$$3.update_vector0$120 = function(v$995,v$996,v$997){return (v$995[v$996] = v$997,0);
};
basis$Vector$$3.table0$129 = function(n$132){return Array(n$132);
};
basis$Vector$$3.vector0$133 = function(n$136){return Array(n$136);
};
basis$Vector$$3.length$137 = function(t$140){return t$140.length;
};
basis$Vector$$3.length_vector$141 = function(t$144){return t$144.length;
};
basis$Vector$$3.array0$145 = function(v$998,v$999){return SmlPrims.wordTableInit(v$998,v$999);
};
basis$Vector$$3.maxLen$152 = 123456789;
basis$Vector$$3.check_index$153 = function(v$166,v$167){if ((0 <= v$167)?(v$167 < v$166):false) {return 0;
} else {throw basis$General$.exn$Subscript$51;
};
};
basis$Vector$$3.check_size$168 = function(n$171){if ((0 <= n$171)?(n$171 <= 123456789):false) {return 0;
} else {throw basis$General$.exn$Size$53;
};
};
basis$Vector$$3.sub$180 = function(v$187,v$188){var v$887 = v$187.length;
if ((0 <= v$188)?(v$188 < v$887):false) {0;
} else {throw basis$General$.exn$Subscript$51;
};
return v$187[v$188];
};
basis$Vector$$3.update$189 = function(v$197,v$198,v$199){var v$891 = v$197.length;
if ((0 <= v$198)?(v$198 < v$891):false) {0;
} else {throw basis$General$.exn$Subscript$51;
};
return (v$197[v$198] = v$199,0);
};
basis$Vector$$3.table$200 = function(n$203){if ((0 <= n$203)?(n$203 <= 123456789):false) {0;
} else {throw basis$General$.exn$Size$53;
};
return Array(n$203);
};
basis$Vector$$3.vectorv$206 = function(n$209){if ((0 <= n$209)?(n$209 <= 123456789):false) {0;
} else {throw basis$General$.exn$Size$53;
};
return Array(n$209);
};
basis$Vector$$3.array$212 = function(v$219,v$220){if ((0 <= v$219)?(v$219 <= 123456789):false) {0;
} else {throw basis$General$.exn$Size$53;
};
return SmlPrims.wordTableInit(v$219,v$220);
};
basis$Vector$$3.fromList$221 = function(xs$224){var fix$1004 = {};
fix$1004.$init = function(v$1000,v$239,v$1001){lab$init: while (true) {if (v$239 == null) {return v$1000;
} else {var v$245 = v$239;
var v$246 = v$245[0];
var v$247 = v$245[1];
(v$1000[v$1001] = v$246,0);
var t$1005 = v$1000;
var t$1006 = v$247;
var t$1007 = SmlPrims.chk_ovf_i32(v$1001 + 1);
var v$1000 = t$1005;
var v$239 = t$1006;
var v$1001 = t$1007;
continue lab$init;
};
};
};
var init$225 = fix$1004.$init;
var n$249;
var fix$1008 = {};
fix$1008.$acc = function(v$813,v$814){lab$acc: while (true) {if (v$813 == null) {return v$814;
} else {var v$815 = v$813;
var v$816 = v$815[1];
var t$1009 = v$816;
var t$1010 = SmlPrims.chk_ovf_i32(v$814 + 1);
var v$813 = t$1009;
var v$814 = t$1010;
continue lab$acc;
};
};
};
var acc$812 = fix$1008.$acc;
n$249 = (acc$812(xs$224,0));
var t$1012 = init$225;
var t$1011;
if ((0 <= n$249)?(n$249 <= 123456789):false) {0;
} else {throw basis$General$.exn$Size$53;
};
t$1011 = (Array(n$249));
return t$1012(t$1011,xs$224,0);
};
basis$Vector$$3.tabulate$250 = function(v$270,v$271){var fix$1013 = {};
fix$1013.$init = function(v$267,v$268,v$269){lab$init: while (true) {if (v$269 >= v$270) {return v$267;
} else {(v$267[v$269] = (v$268(v$269)),0);
var t$1014 = v$267;
var t$1015 = v$268;
var t$1016 = SmlPrims.chk_ovf_i32(v$269 + 1);
var v$267 = t$1014;
var v$268 = t$1015;
var v$269 = t$1016;
continue lab$init;
};
};
};
var init$255 = fix$1013.$init;
var t$1018 = init$255;
var t$1017;
if ((0 <= v$270)?(v$270 <= 123456789):false) {0;
} else {throw basis$General$.exn$Size$53;
};
t$1017 = (Array(v$270));
return t$1018(t$1017,v$271,0);
};
basis$Vector$$3.tabulatev$272 = function(v$292,v$293){var fix$1019 = {};
fix$1019.$init = function(v$289,v$290,v$291){lab$init: while (true) {if (v$291 >= v$292) {return v$289;
} else {(v$289[v$291] = (v$290(v$291)),0);
var t$1020 = v$289;
var t$1021 = v$290;
var t$1022 = SmlPrims.chk_ovf_i32(v$291 + 1);
var v$289 = t$1020;
var v$290 = t$1021;
var v$291 = t$1022;
continue lab$init;
};
};
};
var init$277 = fix$1019.$init;
return init$277(Array(v$292),v$293,0);
};
basis$Vector$$3.vector$294 = function(a$297){var v$984 = a$297.length;
var fix$1023 = {};
fix$1023.$init = function(v$981,v$982,v$983){lab$init: while (true) {if (v$983 >= v$984) {return v$981;
} else {(v$981[v$983] = (v$982(v$983)),0);
var t$1024 = v$981;
var t$1025 = v$982;
var t$1026 = SmlPrims.chk_ovf_i32(v$983 + 1);
var v$981 = t$1024;
var v$982 = t$1025;
var v$983 = t$1026;
continue lab$init;
};
};
};
var init$979 = fix$1023.$init;
return init$979(Array(v$984),function(i$987){return a$297[i$987];
},0);
};
basis$Vector$$3.updatev$301 = function(v$316,v$317,v$318){var v$909 = v$316.length;
if ((0 <= v$317)?(v$317 < v$909):false) {0;
} else {throw basis$General$.exn$Subscript$51;
};
return basis$Vector$$3.tabulate$250(v$316.length,function(j$311){return (v$317 == j$311)?v$318:v$316[j$311];
});
};
basis$Vector$$3.copy$319 = function(v$346,v$345,v$344){var n$325 = v$344.length;
if ((v$346 < 0)?true:((SmlPrims.chk_ovf_i32(v$346 + n$325)) > v$345.length)) {throw basis$General$.exn$Subscript$51;
} else {var fix$1027 = {};
fix$1027.$hi2lo = function(j$333){lab$hi2lo: while (true) {if (j$333 >= 0) {(v$345[SmlPrims.chk_ovf_i32(v$346 + j$333)] = v$344[j$333],0);
var t$1028 = SmlPrims.chk_ovf_i32(j$333 - 1);
var j$333 = t$1028;
continue lab$hi2lo;
} else {return 0;
};
};
};
var hi2lo$330 = fix$1027.$hi2lo;
return hi2lo$330(SmlPrims.chk_ovf_i32(n$325 - 1));
};
};
basis$Vector$$3.copyVec$347 = function(v$374,v$373,v$372){var n$353 = v$372.length;
if ((v$374 < 0)?true:((SmlPrims.chk_ovf_i32(v$374 + n$353)) > v$373.length)) {throw basis$General$.exn$Subscript$51;
} else {var fix$1029 = {};
fix$1029.$lo2hi = function(j$361){lab$lo2hi: while (true) {if (j$361 < n$353) {(v$373[SmlPrims.chk_ovf_i32(v$374 + j$361)] = v$372[j$361],0);
var t$1030 = SmlPrims.chk_ovf_i32(j$361 + 1);
var j$361 = t$1030;
continue lab$lo2hi;
} else {return 0;
};
};
};
var lo2hi$358 = fix$1029.$lo2hi;
return lo2hi$358(0);
};
};
basis$Vector$$3.app$375 = function(f$378,a$381){var n$382 = a$381.length;
var fix$1031 = {};
fix$1031.$lr = function(j$386){lab$lr: while (true) {if (j$386 < n$382) {f$378(a$381[j$386]);
var t$1032 = SmlPrims.chk_ovf_i32(j$386 + 1);
var j$386 = t$1032;
continue lab$lr;
} else {return 0;
};
};
};
var lr$383 = fix$1031.$lr;
return lr$383(0);
};
basis$Vector$$3.foldli$393 = function(f$396,e$399,a$402){var stop$403 = a$402.length;
var fix$1033 = {};
fix$1033.$lr = function(j$407,res$410){lab$lr: while (true) {if (j$407 < stop$403) {var t$1034 = SmlPrims.chk_ovf_i32(j$407 + 1);
var t$1035 = f$396([j$407,a$402[j$407],res$410]);
var j$407 = t$1034;
var res$410 = t$1035;
continue lab$lr;
} else {return res$410;
};
};
};
var lr$404 = fix$1033.$lr;
return lr$404(0,e$399);
};
basis$Vector$$3.foldri$415 = function(f$418,e$421,a$424){var fix$1036 = {};
fix$1036.$rl = function(j$428,res$431){lab$rl: while (true) {if (j$428 >= 0) {var t$1037 = SmlPrims.chk_ovf_i32(j$428 - 1);
var t$1038 = f$418([j$428,a$424[j$428],res$431]);
var j$428 = t$1037;
var res$431 = t$1038;
continue lab$rl;
} else {return res$431;
};
};
};
var rl$425 = fix$1036.$rl;
return rl$425(SmlPrims.chk_ovf_i32(a$424.length - 1),e$421);
};
basis$Vector$$3.appi$436 = function(f$439,a$442){var stop$443 = a$442.length;
var fix$1039 = {};
fix$1039.$lr = function(j$447){lab$lr: while (true) {if (j$447 < stop$443) {f$439([j$447,a$442[j$447]]);
var t$1040 = SmlPrims.chk_ovf_i32(j$447 + 1);
var j$447 = t$1040;
continue lab$lr;
} else {return 0;
};
};
};
var lr$444 = fix$1039.$lr;
return lr$444(0);
};
basis$Vector$$3.foldl$475 = function(f$478,e$481,a$484){var n$485 = a$484.length;
var fix$1041 = {};
fix$1041.$lr = function(v$495,v$496){lab$lr: while (true) {if (v$495 < n$485) {var t$1042 = SmlPrims.chk_ovf_i32(v$495 + 1);
var t$1043 = f$478([a$484[v$495],v$496]);
var v$495 = t$1042;
var v$496 = t$1043;
continue lab$lr;
} else {return v$496;
};
};
};
var lr$486 = fix$1041.$lr;
return lr$486(0,e$481);
};
basis$Vector$$3.foldr$497 = function(f$500,e$503,a$506){var n$507 = a$506.length;
var fix$1044 = {};
fix$1044.$rl = function(v$517,v$518){lab$rl: while (true) {if (v$517 >= 0) {var t$1045 = SmlPrims.chk_ovf_i32(v$517 - 1);
var t$1046 = f$500([a$506[v$517],v$518]);
var v$517 = t$1045;
var v$518 = t$1046;
continue lab$rl;
} else {return v$518;
};
};
};
var rl$508 = fix$1044.$rl;
return rl$508(SmlPrims.chk_ovf_i32(n$507 - 1),e$503);
};
basis$Vector$$3.modifyi$519 = function(f$522,a$525){var stop$526 = a$525.length;
var fix$1047 = {};
fix$1047.$lr = function(j$530){lab$lr: while (true) {if (j$530 < stop$526) {(a$525[j$530] = (f$522([j$530,a$525[j$530]])),0);
var t$1048 = SmlPrims.chk_ovf_i32(j$530 + 1);
var j$530 = t$1048;
continue lab$lr;
} else {return 0;
};
};
};
var lr$527 = fix$1047.$lr;
return lr$527(0);
};
basis$Vector$$3.modify$537 = function(f$540,a$543){var n$544 = a$543.length;
var fix$1049 = {};
fix$1049.$lr = function(j$548){lab$lr: while (true) {if (j$548 < n$544) {(a$543[j$548] = (f$540(a$543[j$548])),0);
var t$1050 = SmlPrims.chk_ovf_i32(j$548 + 1);
var j$548 = t$1050;
continue lab$lr;
} else {return 0;
};
};
};
var lr$545 = fix$1049.$lr;
return lr$545(0);
};
basis$Vector$$3.map$555 = function(f$558,a$561){var n$562 = a$561.length;
var b$563;
if ((0 <= n$562)?(n$562 <= 123456789):false) {0;
} else {throw basis$General$.exn$Size$53;
};
b$563 = (Array(n$562));
var fix$1051 = {};
fix$1051.$lr = function(j$567){lab$lr: while (true) {if (j$567 < n$562) {(b$563[j$567] = (f$558(a$561[j$567])),0);
var t$1052 = SmlPrims.chk_ovf_i32(j$567 + 1);
var j$567 = t$1052;
continue lab$lr;
} else {return b$563;
};
};
};
var lr$564 = fix$1051.$lr;
return lr$564(0);
};
basis$Vector$$3.mapi$574 = function(f$577,a$580){var stop$581 = a$580.length;
var newvec$582 = Array(stop$581);
var fix$1053 = {};
fix$1053.$lr = function(j$586){lab$lr: while (true) {if (j$586 < stop$581) {(newvec$582[j$586] = (f$577([j$586,a$580[j$586]])),0);
var t$1054 = SmlPrims.chk_ovf_i32(j$586 + 1);
var j$586 = t$1054;
continue lab$lr;
} else {return 0;
};
};
};
var lr$583 = fix$1053.$lr;
lr$583(0);
return newvec$582;
};
basis$Vector$$3.concat$595 = function(vecs$598){var fix$1055 = {};
fix$1055.$total_length = function(v$611,v$1002){lab$total_length: while (true) {if (v$611 == null) {return v$1002;
} else {var v$613 = v$611;
var v$614 = v$613[0];
var v$615 = v$613[1];
var t$1056 = v$615;
var t$1057 = SmlPrims.chk_ovf_i32(v$614.length + v$1002);
var v$611 = t$1056;
var v$1002 = t$1057;
continue lab$total_length;
};
};
};
var total_length$599 = fix$1055.$total_length;
var n$617 = total_length$599(vecs$598,0);
var v$618;
if ((0 <= n$617)?(n$617 <= 123456789):false) {0;
} else {throw basis$General$.exn$Size$53;
};
v$618 = (Array(n$617));
var fix$1058 = {};
fix$1058.$copyall = function(v$1003,v$631){if (v$631 == null) {return v$618;
} else {var v$647 = v$631;
var v$648 = v$647[0];
var v$649 = v$647[1];
var x_n$633 = v$648.length;
var fix$1059 = {};
fix$1059.$copy = function(j$637){lab$copy: while (true) {if (j$637 < x_n$633) {(v$618[SmlPrims.chk_ovf_i32(v$1003 + j$637)] = v$648[j$637],0);
var t$1060 = SmlPrims.chk_ovf_i32(j$637 + 1);
var j$637 = t$1060;
continue lab$copy;
} else {return 0;
};
};
};
var copy$634 = fix$1059.$copy;
copy$634(0);
return fix$1058.$copyall(SmlPrims.chk_ovf_i32(v$1003 + x_n$633),v$649);
};
};
var copyall$619 = fix$1058.$copyall;
return copyall$619(0,vecs$598);
};
basis$Vector$$3.findi$650 = function(p$653,a$656){var stop$657 = a$656.length;
var fix$1061 = {};
fix$1061.$lr = function(j$661){lab$lr: while (true) {if (j$661 < stop$657) {if (p$653([j$661,a$656[j$661]])) {return [0,[j$661,a$656[j$661]]];
} else {var t$1062 = SmlPrims.chk_ovf_i32(j$661 + 1);
var j$661 = t$1062;
continue lab$lr;
};
} else {return [1];
};
};
};
var lr$658 = fix$1061.$lr;
return lr$658(0);
};
basis$Vector$$3.find$670 = function(p$673,a$676){var stop$677 = a$676.length;
var fix$1063 = {};
fix$1063.$lr = function(j$681){lab$lr: while (true) {if (j$681 < stop$677) {if (p$673(a$676[j$681])) {return [0,a$676[j$681]];
} else {var t$1064 = SmlPrims.chk_ovf_i32(j$681 + 1);
var j$681 = t$1064;
continue lab$lr;
};
} else {return [1];
};
};
};
var lr$678 = fix$1063.$lr;
return lr$678(0);
};
basis$Vector$$3.exists$690 = function(p$693,a$696){var stop$697 = a$696.length;
var fix$1065 = {};
fix$1065.$lr = function(j$701){lab$lr: while (true) {if (j$701 < stop$697) {if (p$693(a$696[j$701])) {return true;
} else {var t$1066 = SmlPrims.chk_ovf_i32(j$701 + 1);
var j$701 = t$1066;
continue lab$lr;
};
} else {return false;
};
};
};
var lr$698 = fix$1065.$lr;
return lr$698(0);
};
basis$Vector$$3.all$710 = function(p$713,a$716){var stop$717 = a$716.length;
var fix$1067 = {};
fix$1067.$lr = function(j$721){lab$lr: while (true) {if (j$721 >= stop$717) {return true;
} else {if (p$713(a$716[j$721])) {var t$1068 = SmlPrims.chk_ovf_i32(j$721 + 1);
var j$721 = t$1068;
continue lab$lr;
} else {return false;
};
};
};
};
var lr$718 = fix$1067.$lr;
return lr$718(0);
};
basis$Vector$$3.collate$730 = function(cmp$733,v$737){var v$766 = v$737[0];
var v$767 = v$737[1];
var n1$738 = v$766.length;
var n2$739 = v$767.length;
var stop$740 = (n1$738 < n2$739)?n1$738:n2$739;
var fix$1069 = {};
fix$1069.$h = function(j$748){lab$h: while (true) {if (j$748 == stop$740) {return (n1$738 < n2$739)?0:((n1$738 > n2$739)?1:2);
} else {var v$765 = cmp$733([v$766[j$748],v$767[j$748]]);
switch (v$765) { case 2: {var t$1070 = SmlPrims.chk_ovf_i32(j$748 + 1);
var j$748 = t$1070;
continue lab$h;
 break; }default: {return v$765;
} };
};
};
};
var h$745 = fix$1069.$h;
return h$745(0);
};
return 0;
})();