if ((typeof(tools$FinMap$)) == "undefined") {tools$FinMap$ = {};
};
(function(){tools$FinMap$.eq_map$644 = function(v$648,v$649,v$645){var v$646 = v$645[0];
var v$647 = v$645[1];
switch (v$647[0]) { case 0: {var v$650 = v$646[1];
var v$651 = v$647[1];
var t$1074;
var fix$1070 = {};
fix$1070.$eq_list = function(v$690,v$691){lab$eq_list: while (true) {if (v$690 == null) {return (v$691 == null)?true:false;
} else {if (v$691 == null) {return false;
} else {var v$692 = v$690;
var v$693 = v$691;
var t$1071;
var v$979 = v$692[0];
var v$980 = v$693[0];
t$1071 = ((v$648([v$979[0],v$980[0]]))?(v$649([v$979[1],v$980[1]])):false);
if (t$1071) {var t$1072 = v$692[1];
var t$1073 = v$693[1];
var v$690 = t$1072;
var v$691 = t$1073;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$688 = fix$1070.$eq_list;
t$1074 = (eq_list$688(v$650[0],v$651[0]));
return t$1074?(v$650[1] == v$651[1]):false;
 break; }default: {return false;
} };
};
var reftrue$51 = [true];
tools$FinMap$.empty$52 = function(v$655){return [0,[null,reftrue$51]];
};
tools$FinMap$.singleton$53 = function(v$656,p$56){return [0,[[p$56,null],reftrue$51]];
};
tools$FinMap$.isEmpty$57 = function(v$657,v$60){var v$65 = v$60[1];
return (v$65[0] == null)?true:false;
};
tools$FinMap$.lookup$67 = function(v$658,v$70,x$73){var v$99 = v$70[1];
var v$100 = v$99[0];
var fix$1075 = {};
fix$1075.$look = function(v$81){lab$look: while (true) {if (v$81 == null) {return [1];
} else {var v$93 = v$81;
var v$94 = v$93[0];
var v$95 = v$94[0];
var v$96 = v$94[1];
var v$97 = v$93[1];
if (v$658([x$73,v$95])) {return [0,v$96];
} else {var t$1076 = v$97;
var v$81 = t$1076;
continue lab$look;
};
};
};
};
var look$78 = fix$1075.$look;
return look$78(v$100);
};
tools$FinMap$.add$132 = function(v$660,v$135){return [0,[[[v$135[0],v$135[1]],v$135[2][1][0]],[false]]];
};
tools$FinMap$.plus$146 = function(v$661,v$149){var v$154 = v$149[0];
var v$155 = v$154[1];
var v$156 = v$155[0];
var v$157 = v$149[1];
var v$158 = v$157[1];
var v$159 = v$158[0];
return [0,[basis$List$.s$n$645([v$159,v$156]),[false]]];
};
tools$FinMap$.remove$160 = function(v$662,v$163){var v$226 = v$163[0];
var v$227 = v$163[1];
var v$228 = v$227[1];
var v$229 = v$228[0];
var v$230 = v$228[1];
var is_unique$169 = v$230[0];
var fix$1077 = {};
fix$1077.$revappend = function(v$182,v$1055){lab$revappend: while (true) {if (v$182 == null) {return v$1055;
} else {var v$184 = v$182;
var v$185 = v$184[0];
var v$186 = v$184[1];
var t$1078 = v$186;
var t$1079 = [v$185,v$1055];
var v$182 = t$1078;
var v$1055 = t$1079;
continue lab$revappend;
};
};
};
var revappend$170 = fix$1077.$revappend;
var fix$1080 = {};
fix$1080.$rmv = function(v$204,v$1056,v$1057){lab$rmv: while (true) {if (v$204 == null) {return v$1056?[0,[0,[basis$List$.rev$641(v$1057),[false]]]]:[1];
} else {var v$219 = v$204;
var v$220 = v$219[0];
var v$221 = v$220[0];
var v$223 = v$219[1];
if (v$662([v$226,v$221])) {if (is_unique$169) {return [0,[0,[revappend$170(v$1057,v$223),reftrue$51]]];
} else {var t$1081 = v$223;
var t$1082 = true;
var t$1083 = v$1057;
var v$204 = t$1081;
var v$1056 = t$1082;
var v$1057 = t$1083;
continue lab$rmv;
};
} else {var t$1084 = v$223;
var t$1085 = v$1056;
var t$1086 = [v$220,v$1057];
var v$204 = t$1084;
var v$1056 = t$1085;
var v$1057 = t$1086;
continue lab$rmv;
};
};
};
};
var rmv$188 = fix$1080.$rmv;
return rmv$188(v$229,false,null);
};
tools$FinMap$.mergeMap$231 = function(v$663,v$234,v$237,v$240){var v$257 = v$237[1];
var v$258 = v$257[0];
if (v$258 == null) {return v$240;
} else {var v$262 = v$240[1];
var v$263 = v$262[0];
if (v$263 == null) {return v$237;
} else {var v$312 = v$257[1];
var v$313 = v$262[1];
var t$1092;
var t$1088;
var fix$1087 = {};
fix$1087.$foldl = function(v$713,v$714){if (v$714 == null) {return v$713;
} else {var v$715 = v$714;
var v$716 = v$715[0];
var v$717 = v$715[1];
var t$1091 = fix$1087.$foldl;
var t$1089;
var v$1009 = v$716[0];
var v$1010 = v$716[1];
var fix$1090 = {};
fix$1090.$insert = function(v$1058,v$1059,v$1014){if (v$1014 == null) {return [[v$1058,v$1059],null];
} else {var v$1017 = v$1014;
var v$1018 = v$1017[0];
var v$1019 = v$1018[0];
var v$1020 = v$1018[1];
var v$1021 = v$1017[1];
return (v$663([v$1019,v$1058]))?[[v$1019,v$234([v$1020,v$1059])],v$1021]:[[v$1019,v$1020],fix$1090.$insert(v$1058,v$1059,v$1021)];
};
};
var insert$1012 = fix$1090.$insert;
t$1089 = (insert$1012(v$1009,v$1010,v$713));
return t$1091(t$1089,v$717);
};
};
var foldl$712 = fix$1087.$foldl;
t$1088 = (foldl$712(v$258,v$263));
t$1092 = [t$1088,(v$312[0]?v$313[0]:false)?reftrue$51:[false]];
return [0,t$1092];
};
};
};
var elimDups$371 = function(v$668,v$374){var v$391 = v$374[1];
var v$392 = v$391[0];
var v$393 = v$391[1];
if (v$393[0]) {return v$392;
} else {var v$388;
var duplicates$820 = [false];
var t$1094;
var fix$1093 = {};
fix$1093.$elim = function(v$823,v$1060){if (v$823 == null) {return basis$List$.rev$641(v$1060);
} else {var v$824 = v$823;
var v$825 = v$824[0];
var v$826 = v$825[0];
var v$827 = v$824[1];
var t$1098;
var fix$1095 = {};
fix$1095.$seen = function(v$1061,v$831){lab$seen: while (true) {if (v$831 == null) {return false;
} else {var v$833 = v$831;
var v$834 = v$833[0];
var v$835 = v$834[0];
var v$836 = v$833[1];
if (v$668([v$1061,v$835])) {return true;
} else {var t$1096 = v$1061;
var t$1097 = v$836;
var v$1061 = t$1096;
var v$831 = t$1097;
continue lab$seen;
};
};
};
};
var seen$829 = fix$1095.$seen;
t$1098 = (seen$829(v$826,v$1060));
if (t$1098) {(duplicates$820[0] = true,0);
return fix$1093.$elim(v$827,v$1060);
} else {return fix$1093.$elim(v$827,[v$825,v$1060]);
};
};
};
var elim$821 = fix$1093.$elim;
t$1094 = (elim$821(v$392,null));
v$388 = [t$1094,duplicates$820[0]];
var v$389 = v$388[0];
var v$390 = v$388[1];
(v$393[0] = (v$390?false:true),0);
return v$389;
};
};
tools$FinMap$.dom$394 = function(v$669,v$397){var v$411 = v$397[1];
var v$412 = v$411[0];
var v$413 = v$411[1];
var d$402;
var fix$1099 = {};
fix$1099.$map = function(v$848){if (v$848 == null) {return null;
} else {var v$849 = v$848;
var v$850 = v$849[0];
var v$851 = v$849[1];
return [v$850[0],fix$1099.$map(v$851)];
};
};
var map$847 = fix$1099.$map;
d$402 = (map$847(v$412));
if (v$413[0]) {return edlib$EqSet$.fromList$106(v$669,d$402);
} else {return edlib$EqSet$.fromList$106(v$669,d$402);
};
};
tools$FinMap$.range$414 = function(v$670,m$417){var elts$$418 = elimDups$371(v$670,m$417);
var fix$1100 = {};
fix$1100.$map = function(v$856){if (v$856 == null) {return null;
} else {var v$857 = v$856;
var v$858 = v$857[0];
var v$859 = v$857[1];
return [v$858[1],fix$1100.$map(v$859)];
};
};
var map$855 = fix$1100.$map;
return map$855(elts$$418);
};
tools$FinMap$.list$423 = function(v$671,m$426){return elimDups$371(v$671,m$426);
};
tools$FinMap$.composemap$427 = function(v$672,f$430,m$433){var t$1105;
var t$1101;
var l$861 = elimDups$371(v$672,m$433);
var fix$1102 = {};
fix$1102.$map = function(v$863){if (v$863 == null) {return null;
} else {var v$864 = v$863;
var v$865 = v$864[0];
var v$866 = v$864[1];
var t$1104;
var t$1103;
var v$1025 = v$865[0];
var v$1026 = v$865[1];
t$1103 = [v$1025,f$430(v$1026)];
t$1104 = [t$1103,fix$1102.$map(v$866)];
return t$1104;
};
};
var map$862 = fix$1102.$map;
t$1101 = (map$862(l$861));
t$1105 = [t$1101,reftrue$51];
return [0,t$1105];
};
tools$FinMap$.ComposeMap$440 = function(v$673,f$443,m$446){var t$1110;
var t$1106;
var l$870 = elimDups$371(v$673,m$446);
var fix$1107 = {};
fix$1107.$map = function(v$872){if (v$872 == null) {return null;
} else {var v$873 = v$872;
var v$874 = v$873[0];
var v$875 = v$873[1];
var t$1109;
var t$1108;
var v$1028 = v$874[0];
var v$1029 = v$874[1];
t$1108 = [v$1028,f$443([v$1028,v$1029])];
t$1109 = [t$1108,fix$1107.$map(v$875)];
return t$1109;
};
};
var map$871 = fix$1107.$map;
t$1106 = (map$871(l$870));
t$1110 = [t$1106,reftrue$51];
return [0,t$1110];
};
tools$FinMap$.fold$453 = function(v$674,f$456,x$459,m$462){var c$880 = elimDups$371(v$674,m$462);
var fix$1111 = {};
fix$1111.$foldl = function(v$882,v$883){lab$foldl: while (true) {if (v$883 == null) {return v$882;
} else {var v$884 = v$883;
var v$885 = v$884[0];
var v$886 = v$884[1];
var t$1112;
var v$1032 = v$885[1];
t$1112 = (f$456([v$1032,v$882]));
var t$1113 = t$1112;
var t$1114 = v$886;
var v$882 = t$1113;
var v$883 = t$1114;
continue lab$foldl;
};
};
};
var foldl$881 = fix$1111.$foldl;
return foldl$881(x$459,c$880);
};
tools$FinMap$.Fold$472 = function(v$675,f$475,x$478,m$481){var c$891 = elimDups$371(v$675,m$481);
var fix$1115 = {};
fix$1115.$foldl = function(v$893,v$894){lab$foldl: while (true) {if (v$894 == null) {return v$893;
} else {var v$895 = v$894;
var v$896 = v$895[0];
var v$897 = v$895[1];
var t$1116;
var v$1036 = v$896[0];
var v$1037 = v$896[1];
t$1116 = (f$475([[v$1036,v$1037],v$893]));
var t$1117 = t$1116;
var t$1118 = v$897;
var v$893 = t$1117;
var v$894 = t$1118;
continue lab$foldl;
};
};
};
var foldl$892 = fix$1115.$foldl;
return foldl$892(x$478,c$891);
};
tools$FinMap$.filter$491 = function(v$676,pred$494,m$497){var elts$498 = elimDups$371(v$676,m$497);
var t$1122;
var t$1121;
var fix$1119 = {};
fix$1119.$filter = function(v$904){lab$filter: while (true) {if (v$904 == null) {return null;
} else {var v$905 = v$904;
var v$906 = v$905[0];
var v$907 = v$905[1];
if (pred$494(v$906)) {return [v$906,fix$1119.$filter(v$907)];
} else {var t$1120 = v$907;
var v$904 = t$1120;
continue lab$filter;
};
};
};
};
var filter$903 = fix$1119.$filter;
t$1121 = (filter$903(elts$498));
t$1122 = [t$1121,reftrue$51];
return [0,t$1122];
};
tools$FinMap$.fromList$523 = function(v$678,l$526){var fix$1123 = {};
fix$1123.$addList = function(v$912,v$914){lab$addList: while (true) {if (v$912 == null) {return v$914;
} else {var v$920 = v$912;
var v$921 = v$920[0];
var v$922 = v$921[0];
var v$923 = v$921[1];
var v$924 = v$920[1];
var t$1124 = v$924;
var t$1125 = [0,[[[v$922,v$923],v$914[1][0]],[false]]];
var v$912 = t$1124;
var v$914 = t$1125;
continue lab$addList;
};
};
};
var addList$911 = fix$1123.$addList;
var v$1069 = [0,[null,reftrue$51]];
return addList$911(l$526,v$1069);
};
tools$FinMap$.reportMap$527 = function(v$679,f$530,m$533){var t$1128 = tools$Report$.flatten$78;
var t$1126;
var l$934 = elimDups$371(v$679,m$533);
var fix$1127 = {};
fix$1127.$map = function(v$936){if (v$936 == null) {return null;
} else {var v$937 = v$936;
var v$938 = v$937[0];
var v$939 = v$937[1];
return [f$530(v$938),fix$1127.$map(v$939)];
};
};
var map$935 = fix$1127.$map;
t$1126 = (map$935(l$934));
return t$1128(t$1126);
};
tools$FinMap$.reportMapSORTED$534 = function(v$680,lt$537,f$540,m$543){var t$1131 = tools$Report$.flatten$78;
var t$1129;
var l$943 = edlib$ListSort$.sort$45(function(v$546){var v$551 = v$546[0];
return function(v$549){var v$550 = v$549[0];
return lt$537([v$551,v$550]);
};
},elimDups$371(v$680,m$543));
var fix$1130 = {};
fix$1130.$map = function(v$945){if (v$945 == null) {return null;
} else {var v$946 = v$945;
var v$947 = v$946[0];
var v$948 = v$946[1];
return [f$540(v$947),fix$1130.$map(v$948)];
};
};
var map$944 = fix$1130.$map;
t$1129 = (map$944(l$943));
return t$1131(t$1129);
};
tools$FinMap$.layoutMap$552 = function(v$681,v$558){var v$585 = v$558[3];
var v$586 = v$558[0];
var v$587 = v$558[2];
var v$588 = v$558[1];
return function(layoutDom$561){return function(layoutRan$564){return function(m$567){var t$1132;
var v$583 = [0,v$587];
var t$1133;
var l$952 = elimDups$371(v$681,m$567);
var fix$1134 = {};
fix$1134.$map = function(v$954){if (v$954 == null) {return null;
} else {var v$955 = v$954;
var v$956 = v$955[0];
var v$957 = v$955[1];
var t$1137;
var t$1135;
var v$1040 = v$956[0];
var v$1041 = v$956[1];
var t$1136;
var v$1042 = [0,v$586];
t$1136 = [[layoutDom$561(v$1040),[layoutRan$564(v$1041),null]],v$1042,"",0,""];
t$1135 = [0,t$1136];
t$1137 = [t$1135,fix$1134.$map(v$957)];
return t$1137;
};
};
var map$953 = fix$1134.$map;
t$1133 = (map$953(l$952));
t$1132 = [t$1133,v$583,v$588,0,v$585];
return [0,t$1132];
};
};
};
};
tools$FinMap$.pu$593 = function(v$683,v$597){var v$616 = v$597[0];
var v$617 = v$597[1];
return pickle$pickle$.convert$2333([function(v$965){return [0,[v$965[0],v$965[1]]];
},function(x$969){var v$1046 = [0,[elimDups$371(v$683,x$969),reftrue$51]];
var v$1047 = v$1046[1];
return [v$1047[0],v$1047[1]];
}],pickle$pickle$.pairGen$1044([pickle$pickle$.listGen$2100(pickle$pickle$.pairGen$1044([v$616,v$617])),pickle$pickle$.refOneGen$1273(pickle$pickle$.bool$723)]));
};
return 0;
})();
