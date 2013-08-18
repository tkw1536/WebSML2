if ((typeof(edlib$EqSet$)) == "undefined") {edlib$EqSet$ = {};
};
(function(){edlib$EqSet$.eq_Set$479 = function(v$483,v$480){var v$481 = v$480[0];
var v$482 = v$480[1];
switch (v$482[0]) { case 0: {var v$484 = v$481[1];
var v$485 = v$482[1];
var fix$1025 = {};
fix$1025.$eq_list = function(v$504,v$505){lab$eq_list: while (true) {if (v$504 == null) {return (v$505 == null)?true:false;
} else {if (v$505 == null) {return false;
} else {var v$506 = v$504;
var v$507 = v$505;
if (v$483([v$506[0],v$507[0]])) {var t$1026 = v$506[1];
var t$1027 = v$507[1];
var v$504 = t$1026;
var v$505 = t$1027;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$502 = fix$1025.$eq_list;
return eq_list$502(v$484,v$485);
 break; }default: {return false;
} };
};
edlib$EqSet$.empty$93 = function(v$1024){return [0,null];
};
edlib$EqSet$.singleton$94 = function(elem$97){return [0,[elem$97,null]];
};
edlib$EqSet$.list$98 = function(v$101){return v$101[1];
};
edlib$EqSet$.fromList$106 = function(v$488,l$109){var t$1029;
var fix$1028 = {};
fix$1028.$dropRepeats = function(v$535){if (v$535 == null) {return null;
} else {var v$538 = v$535;
var v$539 = v$538[1];
if (v$539 == null) {return [v$538[0],null];
} else {var v$542 = v$538[0];
var t$1032;
var fix$1030 = {};
fix$1030.$member = function(v$982){lab$member: while (true) {if (v$982 == null) {return false;
} else {var v$983 = v$982;
var v$984 = v$983[0];
var v$985 = v$983[1];
if (v$488([v$542,v$984])) {return true;
} else {var t$1031 = v$985;
var v$982 = t$1031;
continue lab$member;
};
};
};
};
var member$981 = fix$1030.$member;
t$1032 = (member$981(v$539));
if (t$1032) {return fix$1028.$dropRepeats(v$539);
} else {return [v$542,fix$1028.$dropRepeats(v$539)];
};
};
};
};
var dropRepeats$534 = fix$1028.$dropRepeats;
t$1029 = (dropRepeats$534(l$109));
return [0,t$1029];
};
edlib$EqSet$.isEmpty$110 = function(v$113){return (v$113[1] == null)?true:false;
};
var fix$1033 = {};
fix$1033.$member = function(v$489,v$122,v$125){lab$member: while (true) {var v$135 = v$125[1];
if (v$135 == null) {return false;
} else {var v$142 = v$135;
var v$143 = v$142[0];
var v$144 = v$142[1];
if (v$489([v$122,v$143])) {return true;
} else {var t$1034 = v$489;
var t$1035 = v$122;
var t$1036 = [0,v$144];
var v$489 = t$1034;
var v$122 = t$1035;
var v$125 = t$1036;
continue lab$member;
};
};
};
};
edlib$EqSet$.member$119 = fix$1033.$member;
edlib$EqSet$.size$145 = function(v$148){var v$152 = v$148[1];
var fix$1037 = {};
fix$1037.$acc = function(v$572,v$573){lab$acc: while (true) {if (v$572 == null) {return v$573;
} else {var v$574 = v$572;
var v$575 = v$574[1];
var t$1038 = v$575;
var t$1039 = SmlPrims.chk_ovf_i32(v$573 + 1);
var v$572 = t$1038;
var v$573 = t$1039;
continue lab$acc;
};
};
};
var acc$571 = fix$1037.$acc;
return acc$571(v$152,0);
};
edlib$EqSet$.eq$176 = function(v$491,s1$179,s2$182){var v$193 = s1$179[1];
var t$1049;
var t$1045;
var v$600 = s1$179[1];
var fix$1046 = {};
fix$1046.$acc = function(v$603,v$604){lab$acc: while (true) {if (v$603 == null) {return v$604;
} else {var v$605 = v$603;
var v$606 = v$605[1];
var t$1047 = v$606;
var t$1048 = SmlPrims.chk_ovf_i32(v$604 + 1);
var v$603 = t$1047;
var v$604 = t$1048;
continue lab$acc;
};
};
};
var acc$602 = fix$1046.$acc;
t$1045 = (acc$602(v$600,0));
var t$1041;
var v$608 = s2$182[1];
var fix$1042 = {};
fix$1042.$acc = function(v$611,v$612){lab$acc: while (true) {if (v$611 == null) {return v$612;
} else {var v$613 = v$611;
var v$614 = v$613[1];
var t$1043 = v$614;
var t$1044 = SmlPrims.chk_ovf_i32(v$612 + 1);
var v$611 = t$1043;
var v$612 = t$1044;
continue lab$acc;
};
};
};
var acc$610 = fix$1042.$acc;
t$1041 = (acc$610(v$608,0));
t$1049 = (t$1045 == t$1041);
if (t$1049) {var fix$1040 = {};
fix$1040.$allContained = function(v$617,v$619){if (v$617 == null) {return true;
} else {var v$623 = v$617;
var v$624 = v$623[0];
var v$625 = v$623[1];
var t$1052;
var fix$1050 = {};
fix$1050.$member = function(v$988){lab$member: while (true) {var v$989 = v$988[1];
if (v$989 == null) {return false;
} else {var v$990 = v$989;
var v$991 = v$990[0];
var v$992 = v$990[1];
if (v$491([v$624,v$991])) {return true;
} else {var t$1051 = [0,v$992];
var v$988 = t$1051;
continue lab$member;
};
};
};
};
var member$987 = fix$1050.$member;
t$1052 = (member$987(v$619));
if (t$1052) {return fix$1040.$allContained(v$625,v$619);
} else {return false;
};
};
};
var allContained$616 = fix$1040.$allContained;
return allContained$616(v$193,s2$182);
} else {return false;
};
};
edlib$EqSet$.en$Empty$195 = new String("Empty");
edlib$EqSet$.select$196 = function(v$199){var v$206 = v$199[1];
if (v$206 == null) {throw [edlib$EqSet$.en$Empty$195,"select"];
} else {var v$207 = v$206;
return [v$207[0],[0,v$207[1]]];
};
};
edlib$EqSet$.insert$210 = function(v$492,elem$213,s$216){var v$228 = s$216[1];
var t$1055;
var fix$1053 = {};
fix$1053.$member = function(v$995){lab$member: while (true) {var v$996 = v$995[1];
if (v$996 == null) {return false;
} else {var v$997 = v$996;
var v$998 = v$997[0];
var v$999 = v$997[1];
if (v$492([elem$213,v$998])) {return true;
} else {var t$1054 = [0,v$999];
var v$995 = t$1054;
continue lab$member;
};
};
};
};
var member$994 = fix$1053.$member;
t$1055 = (member$994(s$216));
return t$1055?s$216:[0,[elem$213,v$228]];
};
var fix$1056 = {};
fix$1056.$intersect = function(v$493,v$232,v$235){var v$245 = v$235[1];
if (v$245 == null) {return edlib$EqSet$.empty$93(0);
} else {var v$252 = v$245;
var v$253 = v$252[0];
var v$254 = v$252[1];
var t$1090;
var fix$1088 = {};
fix$1088.$member = function(v$1002){lab$member: while (true) {var v$1003 = v$1002[1];
if (v$1003 == null) {return false;
} else {var v$1004 = v$1003;
var v$1005 = v$1004[0];
var v$1006 = v$1004[1];
if (v$493([v$253,v$1005])) {return true;
} else {var t$1089 = [0,v$1006];
var v$1002 = t$1089;
continue lab$member;
};
};
};
};
var member$1001 = fix$1088.$member;
t$1090 = (member$1001(v$232));
if (t$1090) {var s$928 = fix$1056.$intersect(v$493,v$232,[0,v$254]);
var v$929 = s$928[1];
var t$1093;
var fix$1091 = {};
fix$1091.$member = function(v$939){lab$member: while (true) {var v$940 = v$939[1];
if (v$940 == null) {return false;
} else {var v$941 = v$940;
var v$942 = v$941[0];
var v$943 = v$941[1];
if (v$493([v$253,v$942])) {return true;
} else {var t$1092 = [0,v$943];
var v$939 = t$1092;
continue lab$member;
};
};
};
};
var member$938 = fix$1091.$member;
t$1093 = (member$938(s$928));
return t$1093?s$928:[0,[v$253,v$929]];
} else {return fix$1056.$intersect(v$493,v$232,[0,v$254]);
};
};
};
edlib$EqSet$.intersect$229 = fix$1056.$intersect;
edlib$EqSet$.partition$286 = function(v$495,f$289,s$292){var fix$1057 = {};
fix$1057.$partition$ = function(v$1013,v$705,v$1014,v$1015){var v$706 = v$705[1];
if (v$706 == null) {return [v$1014,v$1015];
} else {var v$714 = v$706;
var v$715 = v$714[0];
var v$716 = v$714[1];
if (v$1013(v$715)) {var t$1064 = fix$1057.$partition$;
var t$1063 = v$1013;
var t$1062 = [0,v$716];
var t$1058;
var v$947 = v$1014[1];
var t$1061;
var fix$1059 = {};
fix$1059.$member = function(v$957){lab$member: while (true) {var v$958 = v$957[1];
if (v$958 == null) {return false;
} else {var v$959 = v$958;
var v$960 = v$959[0];
var v$961 = v$959[1];
if (v$495([v$715,v$960])) {return true;
} else {var t$1060 = [0,v$961];
var v$957 = t$1060;
continue lab$member;
};
};
};
};
var member$956 = fix$1059.$member;
t$1061 = (member$956(v$1014));
t$1058 = (t$1061?v$1014:[0,[v$715,v$947]]);
return t$1064(t$1063,t$1062,t$1058,v$1015);
} else {var t$1072 = fix$1057.$partition$;
var t$1071 = v$1013;
var t$1070 = [0,v$716];
var t$1069 = v$1014;
var t$1065;
var v$965 = v$1015[1];
var t$1068;
var fix$1066 = {};
fix$1066.$member = function(v$975){lab$member: while (true) {var v$976 = v$975[1];
if (v$976 == null) {return false;
} else {var v$977 = v$976;
var v$978 = v$977[0];
var v$979 = v$977[1];
if (v$495([v$715,v$978])) {return true;
} else {var t$1067 = [0,v$979];
var v$975 = t$1067;
continue lab$member;
};
};
};
};
var member$974 = fix$1066.$member;
t$1068 = (member$974(v$1015));
t$1065 = (t$1068?v$1015:[0,[v$715,v$965]]);
return t$1072(t$1071,t$1070,t$1069,t$1065);
};
};
};
var partition$$701 = fix$1057.$partition$;
return partition$$701(f$289,s$292,edlib$EqSet$.empty$93(0),edlib$EqSet$.empty$93(0));
};
edlib$EqSet$.remove$293 = function(v$496,elem$296,set$299){return (edlib$EqSet$.partition$286(v$496,function(a$306){return (v$496([elem$296,a$306]))?false:true;
},set$299))[0];
};
var fix$1073 = {};
fix$1073.$difference = function(v$497,v$310,v$313){var v$323 = v$313[1];
if (v$323 == null) {return v$310;
} else {var v$327 = v$323;
var v$328 = v$327[0];
var v$329 = v$327[1];
var s$$325 = (edlib$EqSet$.partition$286(v$497,function(a$733){return (v$497([v$328,a$733]))?false:true;
},v$310))[0];
return fix$1073.$difference(v$497,s$$325,[0,v$329]);
};
};
edlib$EqSet$.difference$307 = fix$1073.$difference;
edlib$EqSet$.union$330 = function(v$498,v$333,v$336){var v$342 = v$333[1];
var v$344 = v$336[1];
var t$1075;
var fix$1074 = {};
fix$1074.$dropRepeats = function(v$740){if (v$740 == null) {return null;
} else {var v$743 = v$740;
var v$744 = v$743[1];
if (v$744 == null) {return [v$743[0],null];
} else {var v$747 = v$743[0];
var t$1078;
var fix$1076 = {};
fix$1076.$member = function(v$1009){lab$member: while (true) {if (v$1009 == null) {return false;
} else {var v$1010 = v$1009;
var v$1011 = v$1010[0];
var v$1012 = v$1010[1];
if (v$498([v$747,v$1011])) {return true;
} else {var t$1077 = v$1012;
var v$1009 = t$1077;
continue lab$member;
};
};
};
};
var member$1008 = fix$1076.$member;
t$1078 = (member$1008(v$744));
if (t$1078) {return fix$1074.$dropRepeats(v$744);
} else {return [v$747,fix$1074.$dropRepeats(v$744)];
};
};
};
};
var dropRepeats$739 = fix$1074.$dropRepeats;
t$1075 = (dropRepeats$739(basis$List$.s$n$645([v$342,v$344])));
return [0,t$1075];
};
edlib$EqSet$.closure$373 = function(v$500,f$376,s$379){var v$387 = s$379[1];
var fix$1079 = {};
fix$1079.$closure$ = function(v$803,v$1016,v$1017){if (v$803 == null) {return v$1017;
} else {var v$808 = v$803;
var v$809 = v$808[0];
var v$810 = v$808[1];
var more$817 = v$1016(v$809);
var new$818;
var fix$1080 = {};
fix$1080.$difference = function(v$824,v$826){var v$830 = v$826[1];
if (v$830 == null) {return v$824;
} else {var v$834 = v$830;
var v$835 = v$834[0];
var v$836 = v$834[1];
var s$$840 = (edlib$EqSet$.partition$286(v$500,function(a$844){return (v$500([v$835,a$844]))?false:true;
},v$824))[0];
return fix$1080.$difference(s$$840,[0,v$836]);
};
};
var difference$823 = fix$1080.$difference;
new$818 = (difference$823(more$817,v$1017));
var v$819 = new$818[1];
return fix$1079.$closure$(basis$List$.s$n$645([v$810,v$819]),v$1016,edlib$EqSet$.union$330(v$500,v$1017,new$818));
};
};
var closure$$799 = fix$1079.$closure$;
return closure$$799(v$387,f$376,s$379);
};
edlib$EqSet$.map$388 = function(f$391,v$394){var v$401 = v$394[1];
var t$1082;
var fix$1081 = {};
fix$1081.$map = function(v$852){if (v$852 == null) {return null;
} else {var v$853 = v$852;
var v$854 = v$853[0];
var v$855 = v$853[1];
return [f$391(v$854),fix$1081.$map(v$855)];
};
};
var map$851 = fix$1081.$map;
t$1082 = (map$851(v$401));
return [0,t$1082];
};
edlib$EqSet$.apply$402 = function(f$405,v$408){var v$415 = v$408[1];
var fix$1083 = {};
fix$1083.$apply = function(v$858){lab$apply: while (true) {if (v$858 == null) {return 0;
} else {var v$859 = v$858;
var v$860 = v$859[0];
var v$861 = v$859[1];
f$405(v$860);
var t$1084 = v$861;
var v$858 = t$1084;
continue lab$apply;
};
};
};
var apply$857 = fix$1083.$apply;
return apply$857(v$415);
};
edlib$EqSet$.fold$416 = function(f$419,base$422,v$425){var v$434 = v$425[1];
var fix$1085 = {};
fix$1085.$foldL = function(v$864,v$865){lab$foldL: while (true) {if (v$865 == null) {return v$864;
} else {var v$866 = v$865;
var v$867 = v$866[0];
var v$868 = v$866[1];
var t$1086 = (f$419(v$867))(v$864);
var t$1087 = v$868;
var v$864 = t$1086;
var v$865 = t$1087;
continue lab$foldL;
};
};
};
var foldL$863 = fix$1085.$foldL;
return foldL$863(base$422,v$434);
};
edlib$EqSet$.fold$$435 = function(v$438,v$441){var v$450 = v$441[1];
if (v$450 == null) {throw [edlib$EqSet$.en$Empty$195,"fold'"];
} else {return edlib$edList$.foldL$$1727(v$438,v$450);
};
};
return 0;
})();
