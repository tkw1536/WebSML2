if ((typeof(compiler0$CompileDec$$13)) == "undefined") {compiler0$CompileDec$$13 = {};
};
(function(){compiler0$CompileDec$$13.eq_bal$10948 = function(v$10950,v$10951){switch (v$10950) { case 0: {switch (v$10951) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$10951) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$10951) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
var fix$11586 = {};
fix$11586.$eq_tree = function(v$10956,v$10957,v$10953){lab$eq_tree: while (true) {var v$10954 = v$10953[0];
var v$10955 = v$10953[1];
if (v$10954 == null) {return (v$10955 == null)?true:false;
} else {if (v$10955 == null) {return false;
} else {var v$10958 = v$10954;
var v$10959 = v$10955;
if (v$10956([v$10958[0],v$10959[0]])) {if (v$10957([v$10958[1],v$10959[1]])) {if (fix$11586.$eq_tree(v$10956,v$10957,[v$10958[2],v$10959[2]])) {var t$11587 = v$10956;
var t$11588 = v$10957;
var t$11589 = [v$10958[3],v$10959[3]];
var v$10956 = t$11587;
var v$10957 = t$11588;
var v$10953 = t$11589;
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
compiler0$CompileDec$$13.eq_tree$10952 = fix$11586.$eq_tree;
compiler0$CompileDec$$13.die$9679 = function(s$9682){return tools$Crash$.impossible$50("OrderFinMap." + s$9682);
};
compiler0$CompileDec$$13.s$j$9683 = function(v$11573,v$11574){return v$11573 < v$11574;
};
compiler0$CompileDec$$13.lt$9690 = function(v$11575,v$11576){return v$11575 < v$11576;
};
compiler0$CompileDec$$13.eq$9691 = function(v$9700,v$9701){return ((v$9700 < v$9701)?true:(v$9701 < v$9700))?false:true;
};
compiler0$CompileDec$$13.empty$9707 = function(v$11585){return null;
};
compiler0$CompileDec$$13.singleton$9708 = function(v$11577,v$11578){return [v$11577,v$11578,null,null,2];
};
compiler0$CompileDec$$13.isEmpty$9715 = function(v$9718){return (v$9718 == null)?true:false;
};
compiler0$CompileDec$$13.lookup$9723 = function(t$9726,key$9729){var fix$11590 = {};
fix$11590.$search = function(v$9733){lab$search: while (true) {if (v$9733 == null) {return [1];
} else {var v$9750 = v$9733;
var v$9751 = v$9750[0];
var v$9752 = v$9750[1];
var v$9753 = v$9750[2];
var v$9754 = v$9750[3];
if (key$9729 < v$9751) {var t$11591 = v$9753;
var v$9733 = t$11591;
continue lab$search;
} else {if (v$9751 < key$9729) {var t$11592 = v$9754;
var v$9733 = t$11592;
continue lab$search;
} else {return [0,v$9752];
};
};
};
};
};
var search$9730 = fix$11590.$search;
return search$9730(t$9726);
};
compiler0$CompileDec$$13.en$Impossible$9755 = new String("Impossible");
compiler0$CompileDec$$13.impossible$9756 = function(s$9759){throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMap" + s$9759];
};
var en$ALREADYTHERE$9760 = new String("ALREADYTHERE");
var exn$ALREADYTHERE$9760 = [en$ALREADYTHERE$9760];
compiler0$CompileDec$$13.add$9983 = function(v$9992,v$9993,v$9994){try {var fix$11594 = {};
fix$11594.$ins = function(v$11069){if (v$11069 == null) {return [true,[v$9992,v$9993,null,null,2]];
} else {var v$11070 = v$11069;
var v$11071 = v$11070[0];
var v$11072 = v$11070[1];
var v$11073 = v$11070[2];
var v$11074 = v$11070[3];
var v$11075 = v$11070[4];
if (v$9992 < v$11071) {var v$11077 = fix$11594.$ins(v$11073);
var v$11078 = v$11077[0];
var v$11079 = v$11077[1];
switch (v$11075) { case 2: {return v$11078?[true,[v$11071,v$11072,v$11079,v$11074,1]]:[false,[v$11071,v$11072,v$11079,v$11074,2]];
 break; }case 0: {return v$11078?[false,[v$11071,v$11072,v$11079,v$11074,2]]:[false,[v$11071,v$11072,v$11079,v$11074,0]];
 break; }default: {if (v$11078) {var v$11081;
if (v$11079 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMapAVLfinmap 1"];
} else {v$11081 = v$11079;
};
var v$11084 = v$11081[0];
var v$11085 = v$11081[1];
var v$11086 = v$11081[2];
var v$11087 = v$11081[3];
var v$11088 = v$11081[4];
var t$11595;
var v$11328 = 1;
switch (v$11088) { case 0: {switch (v$11328) { case 0: {t$11595 = true;
 break; }default: {t$11595 = false;
} };
 break; }case 1: {switch (v$11328) { case 1: {t$11595 = true;
 break; }default: {t$11595 = false;
} };
 break; }case 2: {switch (v$11328) { case 2: {t$11595 = true;
 break; }default: {t$11595 = false;
} };
 break; } };
if (t$11595) {return [false,[v$11084,v$11085,v$11086,[v$11071,v$11072,v$11087,v$11074,2],2]];
} else {var v$11096;
if (v$11087 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMapAVLfinmap 2"];
} else {v$11096 = v$11087;
};
var v$11099 = v$11096[0];
var v$11100 = v$11096[1];
var v$11101 = v$11096[2];
var v$11102 = v$11096[3];
var v$11103 = v$11096[4];
var t$11616 = false;
var t$11615;
var t$11614;
var t$11613 = v$11099;
var t$11612 = v$11100;
var t$11611;
var t$11610;
var t$11609 = v$11084;
var t$11608 = v$11085;
var t$11607 = v$11086;
var t$11606 = v$11101;
var t$11605;
var t$11604;
var v$11334 = 0;
switch (v$11103) { case 0: {switch (v$11334) { case 0: {t$11604 = true;
 break; }default: {t$11604 = false;
} };
 break; }case 1: {switch (v$11334) { case 1: {t$11604 = true;
 break; }default: {t$11604 = false;
} };
 break; }case 2: {switch (v$11334) { case 2: {t$11604 = true;
 break; }default: {t$11604 = false;
} };
 break; } };
t$11605 = (t$11604?1:2);
t$11610 = [t$11609,t$11608,t$11607,t$11606,t$11605];
t$11611 = t$11610;
var t$11603;
var t$11602;
var t$11601 = v$11071;
var t$11600 = v$11072;
var t$11599 = v$11102;
var t$11598 = v$11074;
var t$11597;
var t$11596;
var v$11338 = 1;
switch (v$11103) { case 0: {switch (v$11338) { case 0: {t$11596 = true;
 break; }default: {t$11596 = false;
} };
 break; }case 1: {switch (v$11338) { case 1: {t$11596 = true;
 break; }default: {t$11596 = false;
} };
 break; }case 2: {switch (v$11338) { case 2: {t$11596 = true;
 break; }default: {t$11596 = false;
} };
 break; } };
t$11597 = (t$11596?0:2);
t$11602 = [t$11601,t$11600,t$11599,t$11598,t$11597];
t$11603 = t$11602;
t$11614 = [t$11613,t$11612,t$11611,t$11603,2];
t$11615 = t$11614;
return [t$11616,t$11615];
};
} else {return [false,[v$11071,v$11072,v$11079,v$11074,1]];
};
} };
} else {if (v$11071 < v$9992) {var v$11119 = fix$11594.$ins(v$11074);
var v$11120 = v$11119[0];
var v$11121 = v$11119[1];
switch (v$11075) { case 2: {return v$11120?[true,[v$11071,v$11072,v$11073,v$11121,0]]:[false,[v$11071,v$11072,v$11073,v$11121,2]];
 break; }case 1: {return v$11120?[false,[v$11071,v$11072,v$11073,v$11121,2]]:[false,[v$11071,v$11072,v$11073,v$11121,1]];
 break; }default: {if (v$11120) {var v$11123;
if (v$11121 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMapAVLfinmap 3"];
} else {v$11123 = v$11121;
};
var v$11126 = v$11123[0];
var v$11127 = v$11123[1];
var v$11128 = v$11123[2];
var v$11129 = v$11123[3];
var v$11130 = v$11123[4];
var t$11617;
var v$11348 = 0;
switch (v$11130) { case 0: {switch (v$11348) { case 0: {t$11617 = true;
 break; }default: {t$11617 = false;
} };
 break; }case 1: {switch (v$11348) { case 1: {t$11617 = true;
 break; }default: {t$11617 = false;
} };
 break; }case 2: {switch (v$11348) { case 2: {t$11617 = true;
 break; }default: {t$11617 = false;
} };
 break; } };
if (t$11617) {return [false,[v$11126,v$11127,[v$11071,v$11072,v$11073,v$11128,2],v$11129,2]];
} else {var v$11138;
if (v$11128 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMapAVLfinmap 4"];
} else {v$11138 = v$11128;
};
var v$11141 = v$11138[0];
var v$11142 = v$11138[1];
var v$11143 = v$11138[2];
var v$11144 = v$11138[3];
var v$11145 = v$11138[4];
var t$11638 = false;
var t$11637;
var t$11636;
var t$11635 = v$11141;
var t$11634 = v$11142;
var t$11633;
var t$11632;
var t$11631 = v$11071;
var t$11630 = v$11072;
var t$11629 = v$11073;
var t$11628 = v$11143;
var t$11627;
var t$11626;
var v$11354 = 0;
switch (v$11145) { case 0: {switch (v$11354) { case 0: {t$11626 = true;
 break; }default: {t$11626 = false;
} };
 break; }case 1: {switch (v$11354) { case 1: {t$11626 = true;
 break; }default: {t$11626 = false;
} };
 break; }case 2: {switch (v$11354) { case 2: {t$11626 = true;
 break; }default: {t$11626 = false;
} };
 break; } };
t$11627 = (t$11626?1:2);
t$11632 = [t$11631,t$11630,t$11629,t$11628,t$11627];
t$11633 = t$11632;
var t$11625;
var t$11624;
var t$11623 = v$11126;
var t$11622 = v$11127;
var t$11621 = v$11144;
var t$11620 = v$11129;
var t$11619;
var t$11618;
var v$11358 = 1;
switch (v$11145) { case 0: {switch (v$11358) { case 0: {t$11618 = true;
 break; }default: {t$11618 = false;
} };
 break; }case 1: {switch (v$11358) { case 1: {t$11618 = true;
 break; }default: {t$11618 = false;
} };
 break; }case 2: {switch (v$11358) { case 2: {t$11618 = true;
 break; }default: {t$11618 = false;
} };
 break; } };
t$11619 = (t$11618?0:2);
t$11624 = [t$11623,t$11622,t$11621,t$11620,t$11619];
t$11625 = t$11624;
t$11636 = [t$11635,t$11634,t$11633,t$11625,2];
t$11637 = t$11636;
return [t$11638,t$11637];
};
} else {return [false,[v$11071,v$11072,v$11073,v$11121,0]];
};
} };
} else {throw exn$ALREADYTHERE$9760;
};
};
};
};
var ins$11068 = fix$11594.$ins;
return (ins$11068(v$9994))[1];
} catch(v$11593) {return (function(ALREADYTHERE$9991){var t$11639 = ALREADYTHERE$9991;
if (t$11639[0] == en$ALREADYTHERE$9760) {var fix$11640 = {};
fix$11640.$repl = function(v$11184){if (v$11184 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMapAVLupdate.repl"];
} else {var v$11187 = v$11184;
var v$11188 = v$11187[0];
var v$11189 = v$11187[1];
var v$11190 = v$11187[2];
var v$11191 = v$11187[3];
var v$11192 = v$11187[4];
return (v$9992 < v$11188)?[v$11188,v$11189,fix$11640.$repl(v$11190),v$11191,v$11192]:((v$11188 < v$9992)?[v$11188,v$11189,v$11190,fix$11640.$repl(v$11191),v$11192]:[v$11188,v$9993,v$11190,v$11191,v$11192]);
};
};
var repl$11183 = fix$11640.$repl;
return repl$11183(v$9994);
} else {throw ALREADYTHERE$9991;
};
})(v$11593);
};
};
var fix$11641 = {};
fix$11641.$plus = function(v$10013,v$10014){lab$plus: while (true) {if (v$10014 == null) {return v$10013;
} else {var v$10008 = v$10014;
var v$10009 = v$10008[0];
var v$10010 = v$10008[1];
var v$10011 = v$10008[2];
var v$10012 = v$10008[3];
var t$11642 = fix$11641.$plus(compiler0$CompileDec$$13.add$9983(v$10009,v$10010,v$10013),v$10011);
var t$11643 = v$10012;
var v$10013 = t$11642;
var v$10014 = t$11643;
continue lab$plus;
};
};
};
compiler0$CompileDec$$13.plus$9995 = fix$11641.$plus;
var en$NOTFOUND$10015 = new String("NOTFOUND");
var exn$NOTFOUND$10015 = [en$NOTFOUND$10015];
var delete$10016 = function(v$10301,v$10302){var balance1$10021 = function(v$10024){if (v$10024 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMap(balance1 on an empty map)"];
} else {var v$10094 = v$10024;
var v$10095 = v$10094[0];
var v$10096 = v$10094[1];
var v$10097 = v$10094[2];
var v$10098 = v$10094[3];
switch (v$10094[4]) { case 1: {return [[v$10095,v$10096,v$10097,v$10098,2],true];
 break; }case 2: {return [[v$10095,v$10096,v$10097,v$10098,0],false];
 break; }default: {var v$10081;
if (v$10098 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMapAVLfinmap 5"];
} else {v$10081 = v$10098;
};
var v$10082 = v$10081[0];
var v$10083 = v$10081[1];
var v$10084 = v$10081[2];
var v$10085 = v$10081[3];
switch (v$10081[4]) { case 1: {var v$10068;
if (v$10084 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMapAVLfinmap 6"];
} else {v$10068 = v$10084;
};
var v$10069 = v$10068[0];
var v$10070 = v$10068[1];
var v$10071 = v$10068[2];
var v$10072 = v$10068[3];
var v$10073 = v$10068[4];
var t$11663;
var t$11662;
var t$11661 = v$10069;
var t$11660 = v$10070;
var t$11659;
var t$11658;
var t$11657 = v$10095;
var t$11656 = v$10096;
var t$11655 = v$10097;
var t$11654 = v$10071;
var t$11653;
var t$11652;
var v$11376 = 0;
switch (v$10073) { case 0: {switch (v$11376) { case 0: {t$11652 = true;
 break; }default: {t$11652 = false;
} };
 break; }case 1: {switch (v$11376) { case 1: {t$11652 = true;
 break; }default: {t$11652 = false;
} };
 break; }case 2: {switch (v$11376) { case 2: {t$11652 = true;
 break; }default: {t$11652 = false;
} };
 break; } };
t$11653 = (t$11652?1:2);
t$11658 = [t$11657,t$11656,t$11655,t$11654,t$11653];
t$11659 = t$11658;
var t$11651;
var t$11650;
var t$11649 = v$10082;
var t$11648 = v$10083;
var t$11647 = v$10072;
var t$11646 = v$10085;
var t$11645;
var t$11644;
var v$11378 = 1;
switch (v$10073) { case 0: {switch (v$11378) { case 0: {t$11644 = true;
 break; }default: {t$11644 = false;
} };
 break; }case 1: {switch (v$11378) { case 1: {t$11644 = true;
 break; }default: {t$11644 = false;
} };
 break; }case 2: {switch (v$11378) { case 2: {t$11644 = true;
 break; }default: {t$11644 = false;
} };
 break; } };
t$11645 = (t$11644?0:2);
t$11650 = [t$11649,t$11648,t$11647,t$11646,t$11645];
t$11651 = t$11650;
t$11662 = [t$11661,t$11660,t$11659,t$11651,2];
t$11663 = t$11662;
return [t$11663,true];
 break; }case 2: {return [[v$10082,v$10083,[v$10095,v$10096,v$10097,v$10084,0],v$10085,1],false];
 break; }default: {return [[v$10082,v$10083,[v$10095,v$10096,v$10097,v$10084,2],v$10085,2],true];
} };
} };
};
};
var balance2$10100 = function(v$10103){if (v$10103 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMap(balance2 on an empty map)"];
} else {var v$10173 = v$10103;
var v$10174 = v$10173[0];
var v$10175 = v$10173[1];
var v$10176 = v$10173[2];
var v$10177 = v$10173[3];
switch (v$10173[4]) { case 0: {return [[v$10174,v$10175,v$10176,v$10177,2],true];
 break; }case 2: {return [[v$10174,v$10175,v$10176,v$10177,1],false];
 break; }default: {var v$10160;
if (v$10176 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMapAVLfinmap 7"];
} else {v$10160 = v$10176;
};
var v$10161 = v$10160[0];
var v$10162 = v$10160[1];
var v$10163 = v$10160[2];
var v$10164 = v$10160[3];
switch (v$10160[4]) { case 0: {var v$10147;
if (v$10164 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMapAVLfinmap 8"];
} else {v$10147 = v$10164;
};
var v$10148 = v$10147[0];
var v$10149 = v$10147[1];
var v$10150 = v$10147[2];
var v$10151 = v$10147[3];
var v$10152 = v$10147[4];
var t$11683;
var t$11682;
var t$11681 = v$10148;
var t$11680 = v$10149;
var t$11679;
var t$11678;
var t$11677 = v$10161;
var t$11676 = v$10162;
var t$11675 = v$10163;
var t$11674 = v$10150;
var t$11673;
var t$11672;
var v$11388 = 0;
switch (v$10152) { case 0: {switch (v$11388) { case 0: {t$11672 = true;
 break; }default: {t$11672 = false;
} };
 break; }case 1: {switch (v$11388) { case 1: {t$11672 = true;
 break; }default: {t$11672 = false;
} };
 break; }case 2: {switch (v$11388) { case 2: {t$11672 = true;
 break; }default: {t$11672 = false;
} };
 break; } };
t$11673 = (t$11672?1:2);
t$11678 = [t$11677,t$11676,t$11675,t$11674,t$11673];
t$11679 = t$11678;
var t$11671;
var t$11670;
var t$11669 = v$10174;
var t$11668 = v$10175;
var t$11667 = v$10151;
var t$11666 = v$10177;
var t$11665;
var t$11664;
var v$11386 = 1;
switch (v$10152) { case 0: {switch (v$11386) { case 0: {t$11664 = true;
 break; }default: {t$11664 = false;
} };
 break; }case 1: {switch (v$11386) { case 1: {t$11664 = true;
 break; }default: {t$11664 = false;
} };
 break; }case 2: {switch (v$11386) { case 2: {t$11664 = true;
 break; }default: {t$11664 = false;
} };
 break; } };
t$11665 = (t$11664?0:2);
t$11670 = [t$11669,t$11668,t$11667,t$11666,t$11665];
t$11671 = t$11670;
t$11682 = [t$11681,t$11680,t$11679,t$11671,2];
t$11683 = t$11682;
return [t$11683,true];
 break; }case 2: {return [[v$10161,v$10162,v$10163,[v$10174,v$10175,v$10164,v$10177,1],0],false];
 break; }default: {return [[v$10161,v$10162,v$10163,[v$10174,v$10175,v$10164,v$10177,2],2],true];
} };
} };
};
};
var fix$11684 = {};
fix$11684.$remove_rightmost = function(v$10182){if (v$10182 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMap(remove_rightmost on empty map)"];
} else {var v$10198 = v$10182;
var v$10199 = v$10198[3];
if (v$10199 == null) {return [v$10198[2],v$10198[0],v$10198[1],true];
} else {var v$10224 = v$10198[0];
var v$10225 = v$10198[1];
var v$10226 = v$10198[2];
var v$10227 = v$10198[4];
var v$10219 = fix$11684.$remove_rightmost(v$10199);
var v$10220 = v$10219[0];
var v$10221 = v$10219[1];
var v$10222 = v$10219[2];
if (v$10219[3]) {var v$10216 = balance2$10100([v$10224,v$10225,v$10226,v$10220,v$10227]);
return [v$10216[0],v$10221,v$10222,v$10216[1]];
} else {return [[v$10224,v$10225,v$10226,v$10220,v$10227],v$10221,v$10222,false];
};
};
};
};
var remove_rightmost$10179 = fix$11684.$remove_rightmost;
var fix$11685 = {};
fix$11685.$del = function(v$10231){lab$del: while (true) {if (v$10231 == null) {throw exn$NOTFOUND$10015;
} else {var v$10291 = v$10231;
var v$10292 = v$10291[0];
var v$10293 = v$10291[1];
var v$10294 = v$10291[2];
var v$10295 = v$10291[3];
var v$10296 = v$10291[4];
if (v$10301 < v$10292) {var v$10252 = fix$11685.$del(v$10294);
var v$10253 = v$10252[0];
if (v$10252[1]) {return balance1$10021([v$10292,v$10293,v$10253,v$10295,v$10296]);
} else {return [[v$10292,v$10293,v$10253,v$10295,v$10296],false];
};
} else {if (v$10292 < v$10301) {var v$10266 = fix$11685.$del(v$10295);
var v$10267 = v$10266[0];
if (v$10266[1]) {return balance2$10100([v$10292,v$10293,v$10294,v$10267,v$10296]);
} else {return [[v$10292,v$10293,v$10294,v$10267,v$10296],false];
};
} else {if (v$10295 == null) {return [v$10294,true];
} else {if (v$10294 == null) {return [v$10295,true];
} else {var v$10286 = remove_rightmost$10179(v$10294);
var v$10287 = v$10286[0];
var v$10288 = v$10286[1];
var v$10289 = v$10286[2];
if (v$10286[3]) {return balance1$10021([v$10288,v$10289,v$10287,v$10295,v$10296]);
} else {return [[v$10288,v$10289,v$10287,v$10295,v$10296],false];
};
};
};
};
};
};
};
};
var del$10228 = fix$11685.$del;
return (del$10228(v$10302))[0];
};
compiler0$CompileDec$$13.remove$10303 = function(v$10311,v$10312){try {return [0,delete$10016(v$10311,v$10312)];
} catch(v$11686) {return (function(NOTFOUND$10310){var t$11687 = NOTFOUND$10310;
if (t$11687[0] == en$NOTFOUND$10015) {return [1];
} else {throw NOTFOUND$10310;
};
})(v$11686);
};
};
compiler0$CompileDec$$13.delete$10313 = function(v$10321,v$10322){try {return delete$10016(v$10321,v$10322);
} catch(v$11688) {return (function(NOTFOUND$10320){var t$11689 = NOTFOUND$10320;
if (t$11689[0] == en$NOTFOUND$10015) {return v$10322;
} else {throw NOTFOUND$10320;
};
})(v$11688);
};
};
compiler0$CompileDec$$13.dom$10323 = function(m$10326){var fix$11690 = {};
fix$11690.$dom$ = function(v$10330,v$10333){lab$dom$: while (true) {if (v$10330 == null) {return v$10333;
} else {var v$10345 = v$10330;
var v$10346 = v$10345[0];
var v$10347 = v$10345[2];
var v$10348 = v$10345[3];
var t$11691 = v$10347;
var t$11692 = [v$10346,fix$11690.$dom$(v$10348,v$10333)];
var v$10330 = t$11691;
var v$10333 = t$11692;
continue lab$dom$;
};
};
};
var dom$$10327 = fix$11690.$dom$;
return dom$$10327(m$10326,null);
};
compiler0$CompileDec$$13.range$10350 = function(m$10353){var fix$11693 = {};
fix$11693.$ran = function(v$10357,v$10360){lab$ran: while (true) {if (v$10357 == null) {return v$10360;
} else {var v$10372 = v$10357;
var v$10373 = v$10372[1];
var v$10374 = v$10372[2];
var v$10375 = v$10372[3];
var t$11694 = v$10374;
var t$11695 = [v$10373,fix$11693.$ran(v$10375,v$10360)];
var v$10357 = t$11694;
var v$10360 = t$11695;
continue lab$ran;
};
};
};
var ran$10354 = fix$11693.$ran;
return ran$10354(m$10353,null);
};
compiler0$CompileDec$$13.list$10377 = function(m$10380){var fix$11696 = {};
fix$11696.$li = function(v$10384,v$10387){lab$li: while (true) {if (v$10384 == null) {return v$10387;
} else {var v$10400 = v$10384;
var v$10401 = v$10400[0];
var v$10402 = v$10400[1];
var v$10403 = v$10400[2];
var v$10404 = v$10400[3];
var t$11697 = v$10403;
var t$11698 = [[v$10401,v$10402],fix$11696.$li(v$10404,v$10387)];
var v$10384 = t$11697;
var v$10387 = t$11698;
continue lab$li;
};
};
};
var li$10381 = fix$11696.$li;
return li$10381(m$10380,null);
};
var fix$11699 = {};
fix$11699.$composemap = function(f$10409,t$10412){if (t$10412 == null) {return null;
} else {var v$10423 = t$10412;
var v$10424 = v$10423[0];
var v$10425 = v$10423[1];
var v$10426 = v$10423[2];
var v$10427 = v$10423[3];
var v$10428 = v$10423[4];
var l$$10422 = fix$11699.$composemap(f$10409,v$10426);
return [v$10424,f$10409(v$10425),l$$10422,fix$11699.$composemap(f$10409,v$10427),v$10428];
};
};
compiler0$CompileDec$$13.composemap$10406 = fix$11699.$composemap;
var fix$11700 = {};
fix$11700.$ComposeMap = function(f$10432,t$10435){if (t$10435 == null) {return null;
} else {var v$10446 = t$10435;
var v$10447 = v$10446[0];
var v$10448 = v$10446[1];
var v$10449 = v$10446[2];
var v$10450 = v$10446[3];
var v$10451 = v$10446[4];
var l$$10445 = fix$11700.$ComposeMap(f$10432,v$10449);
return [v$10447,f$10432([v$10447,v$10448]),l$$10445,fix$11700.$ComposeMap(f$10432,v$10450),v$10451];
};
};
compiler0$CompileDec$$13.ComposeMap$10429 = fix$11700.$ComposeMap;
compiler0$CompileDec$$13.fold$10452 = function(f$10455,e$10458,t$10461){var fix$11701 = {};
fix$11701.$fold$ = function(v$10465,v$10468){lab$fold$: while (true) {if (v$10465 == null) {return v$10468;
} else {var v$10480 = v$10465;
var v$10481 = v$10480[1];
var v$10482 = v$10480[2];
var v$10483 = v$10480[3];
var t$11702 = v$10483;
var t$11703 = f$10455([v$10481,fix$11701.$fold$(v$10482,v$10468)]);
var v$10465 = t$11702;
var v$10468 = t$11703;
continue lab$fold$;
};
};
};
var fold$$10462 = fix$11701.$fold$;
return fold$$10462(t$10461,e$10458);
};
compiler0$CompileDec$$13.Fold$10485 = function(f$10488,e$10491,t$10494){var fix$11704 = {};
fix$11704.$fold$ = function(v$10498,v$10501){lab$fold$: while (true) {if (v$10498 == null) {return v$10501;
} else {var v$10514 = v$10498;
var v$10515 = v$10514[0];
var v$10516 = v$10514[1];
var v$10517 = v$10514[2];
var v$10518 = v$10514[3];
var t$11705 = v$10518;
var t$11706 = f$10488([[v$10515,v$10516],fix$11704.$fold$(v$10517,v$10501)]);
var v$10498 = t$11705;
var v$10501 = t$11706;
continue lab$fold$;
};
};
};
var fold$$10495 = fix$11704.$fold$;
return fold$$10495(t$10494,e$10491);
};
compiler0$CompileDec$$13.filter$10520 = function(f$10523,t$10526){var fix$11707 = {};
fix$11707.$fold$ = function(v$11435,v$11436){lab$fold$: while (true) {if (v$11435 == null) {return v$11436;
} else {var v$11437 = v$11435;
var v$11438 = v$11437[0];
var v$11439 = v$11437[1];
var v$11440 = v$11437[2];
var v$11441 = v$11437[3];
var t$11709 = v$11441;
var t$11708;
var v$11566 = fix$11707.$fold$(v$11440,v$11436);
t$11708 = ((f$10523([v$11438,v$11439]))?(compiler0$CompileDec$$13.add$9983(v$11438,v$11439,v$11566)):v$11566);
var t$11710 = t$11709;
var t$11711 = t$11708;
var v$11435 = t$11710;
var v$11436 = t$11711;
continue lab$fold$;
};
};
};
var fold$$11434 = fix$11707.$fold$;
return fold$$11434(t$10526,compiler0$CompileDec$$13.empty$9707(0));
};
var fix$11712 = {};
fix$11712.$addList = function(v$10543,v$10546){lab$addList: while (true) {if (v$10543 == null) {return v$10546;
} else {var v$10558 = v$10543;
var v$10559 = v$10558[0];
var v$10560 = v$10559[0];
var v$10561 = v$10559[1];
var v$10562 = v$10558[1];
var t$11713 = v$10562;
var t$11714 = compiler0$CompileDec$$13.add$9983(v$10560,v$10561,v$10546);
var v$10543 = t$11713;
var v$10546 = t$11714;
continue lab$addList;
};
};
};
compiler0$CompileDec$$13.addList$10540 = fix$11712.$addList;
compiler0$CompileDec$$13.fromList$10564 = function(l$10567){return compiler0$CompileDec$$13.addList$10540(l$10567,compiler0$CompileDec$$13.empty$9707(0));
};
compiler0$CompileDec$$13.fromSortedList$10568 = function(l$10571){var fix$11715 = {};
fix$11715.$build = function(v$10600,v$11579){switch (v$10600) { case 0: {return [v$11579,null];
 break; }default: {var n$$10602 = SmlPrims.div_i32(v$10600,2,CompilerInitial.exn$Div$40);
var v$10633 = fix$11715.$build(n$$10602,v$11579);
var v$10634 = v$10633[0];
var v$10635 = v$10633[1];
var v$10616;
if (v$10634 == null) {throw [compiler0$CompileDec$$13.en$Impossible$9755,"OrderFinMapbuild"];
} else {var v$10628 = v$10634;
var v$10629 = v$10628[0];
v$10616 = [v$10629[0],v$10629[1],v$10628[1]];
};
var v$10617 = v$10616[0];
var v$10618 = v$10616[1];
var v$10619 = v$10616[2];
var v$10613 = fix$11715.$build(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$10600 - n$$10602)) - 1),v$10619);
return [v$10613[0],[v$10617,v$10618,v$10635,v$10613[1]]];
} };
};
var build$10589 = fix$11715.$build;
var fix$11716 = {};
fix$11716.$mk_avl = function(v$10651){if (v$10651 == null) {return [null,0];
} else {var v$10680 = v$10651;
var v$10681 = v$10680[0];
var v$10682 = v$10680[1];
var v$10683 = v$10680[2];
var v$10684 = v$10680[3];
var v$10677 = fix$11716.$mk_avl(v$10683);
var v$10678 = v$10677[0];
var v$10679 = v$10677[1];
var v$10674 = fix$11716.$mk_avl(v$10684);
var v$10675 = v$10674[0];
var v$10676 = v$10674[1];
return [[v$10681,v$10682,v$10678,v$10675,(v$10679 == v$10676)?2:((v$10679 > v$10676)?1:0)],SmlPrims.chk_ovf_i32(1 + ((v$10679 > v$10676)?v$10679:v$10676))];
};
};
var mk_avl$10648 = fix$11716.$mk_avl;
var t$11725;
var t$11724 = mk_avl$10648;
var t$11723;
var t$11722;
var t$11721 = build$10589;
var t$11720;
var fix$11717 = {};
fix$11717.$acc = function(v$11254,v$11255){lab$acc: while (true) {if (v$11254 == null) {return v$11255;
} else {var v$11256 = v$11254;
var v$11257 = v$11256[1];
var t$11718 = v$11257;
var t$11719 = SmlPrims.chk_ovf_i32(v$11255 + 1);
var v$11254 = t$11718;
var v$11255 = t$11719;
continue lab$acc;
};
};
};
var acc$11253 = fix$11717.$acc;
t$11720 = (acc$11253(l$10571,0));
t$11722 = (t$11721(t$11720,l$10571));
t$11723 = t$11722[1];
t$11725 = (t$11724(t$11723));
return t$11725[0];
};
compiler0$CompileDec$$13.mergeMap$10693 = function(f$10696,t1$10699,t2$10702){var fix$11726 = {};
fix$11726.$merge = function(v$10723,v$11580){if (v$10723 == null) {return v$11580;
} else {if (v$11580 == null) {return v$10723;
} else {var v$10734 = v$10723;
var v$10735 = v$10734[0];
var v$10736 = v$10735[0];
var v$10737 = v$10735[1];
var v$10738 = v$10734[1];
var v$10739 = v$11580;
var v$10740 = v$10739[0];
var v$10741 = v$10740[0];
var v$10742 = v$10740[1];
var v$10743 = v$10739[1];
return (v$10736 < v$10741)?[[v$10736,v$10737],fix$11726.$merge(v$10738,v$11580)]:((v$10741 < v$10736)?[[v$10741,v$10742],fix$11726.$merge(v$10723,v$10743)]:[[v$10736,f$10696([v$10737,v$10742])],fix$11726.$merge(v$10738,v$10743)]);
};
};
};
var merge$10703 = fix$11726.$merge;
var t$11737 = compiler0$CompileDec$$13.fromSortedList$10568;
var t$11736;
var t$11735 = merge$10703;
var t$11734;
var fix$11731 = {};
fix$11731.$li = function(v$11444,v$11445){lab$li: while (true) {if (v$11444 == null) {return v$11445;
} else {var v$11446 = v$11444;
var v$11447 = v$11446[0];
var v$11448 = v$11446[1];
var v$11449 = v$11446[2];
var v$11450 = v$11446[3];
var t$11732 = v$11449;
var t$11733 = [[v$11447,v$11448],fix$11731.$li(v$11450,v$11445)];
var v$11444 = t$11732;
var v$11445 = t$11733;
continue lab$li;
};
};
};
var li$11443 = fix$11731.$li;
t$11734 = (li$11443(t1$10699,null));
var t$11730;
var fix$11727 = {};
fix$11727.$li = function(v$11453,v$11454){lab$li: while (true) {if (v$11453 == null) {return v$11454;
} else {var v$11455 = v$11453;
var v$11456 = v$11455[0];
var v$11457 = v$11455[1];
var v$11458 = v$11455[2];
var v$11459 = v$11455[3];
var t$11728 = v$11458;
var t$11729 = [[v$11456,v$11457],fix$11727.$li(v$11459,v$11454)];
var v$11453 = t$11728;
var v$11454 = t$11729;
continue lab$li;
};
};
};
var li$11452 = fix$11727.$li;
t$11730 = (li$11452(t2$10702,null));
t$11736 = (t$11735(t$11734,t$11730));
return t$11737(t$11736);
};
var fix$11738 = {};
fix$11738.$oneForWhich = function(f$10747,t$10750){lab$oneForWhich: while (true) {if (t$10750 == null) {return [1];
} else {var v$10770 = t$10750;
var v$10771 = v$10770[0];
var v$10772 = v$10770[1];
var v$10773 = v$10770[2];
var v$10774 = v$10770[3];
if (f$10747([v$10771,v$10772])) {return [0,[v$10771,v$10772]];
} else {var v$10767 = fix$11738.$oneForWhich(f$10747,v$10773);
switch (v$10767[0]) { case 0: {var v$10769 = v$10767[1];
return [0,v$10769];
 break; }default: {var t$11739 = f$10747;
var t$11740 = v$10774;
var f$10747 = t$11739;
var t$10750 = t$11740;
continue lab$oneForWhich;
} };
};
};
};
};
compiler0$CompileDec$$13.oneForWhich$10744 = fix$11738.$oneForWhich;
compiler0$CompileDec$$13.en$Restrict$10775 = new String("Restrict");
compiler0$CompileDec$$13.restrict$10776 = function(v$10795,v$10796,v$10797){var fix$11741 = {};
fix$11741.$foldl = function(v$11264,v$11265){if (v$11265 == null) {return v$11264;
} else {var v$11266 = v$11265;
var v$11267 = v$11266[0];
var v$11268 = v$11266[1];
var t$11746 = fix$11741.$foldl;
var t$11745;
var v$11472;
var fix$11742 = {};
fix$11742.$search = function(v$11476){lab$search: while (true) {if (v$11476 == null) {return [1];
} else {var v$11477 = v$11476;
var v$11478 = v$11477[0];
var v$11479 = v$11477[1];
var v$11480 = v$11477[2];
var v$11481 = v$11477[3];
if (v$11267 < v$11478) {var t$11743 = v$11480;
var v$11476 = t$11743;
continue lab$search;
} else {if (v$11478 < v$11267) {var t$11744 = v$11481;
var v$11476 = t$11744;
continue lab$search;
} else {return [0,v$11479];
};
};
};
};
};
var search$11475 = fix$11742.$search;
v$11472 = (search$11475(v$10796));
switch (v$11472[0]) { case 0: {var v$11482 = v$11472[1];
t$11745 = (compiler0$CompileDec$$13.add$9983(v$11267,v$11482,v$11264));
 break; }default: {throw [compiler0$CompileDec$$13.en$Restrict$10775,v$10795(v$11267)];
} };
return t$11746(t$11745,v$11268);
};
};
var foldl$11263 = fix$11741.$foldl;
return foldl$11263(compiler0$CompileDec$$13.empty$9707(0),v$10797);
};
compiler0$CompileDec$$13.enrich$10798 = function(en$10801,v$10805){var v$10826 = v$10805[0];
var v$10827 = v$10805[1];
var fix$11747 = {};
fix$11747.$fold$ = function(v$11487,v$11488){if (v$11487 == null) {return v$11488;
} else {var v$11489 = v$11487;
var v$11490 = v$11489[0];
var v$11491 = v$11489[1];
var v$11492 = v$11489[2];
var v$11493 = v$11489[3];
var t$11753 = fix$11747.$fold$;
var t$11752 = v$11493;
var t$11751;
if (fix$11747.$fold$(v$11492,v$11488)) {var v$11556;
var fix$11748 = {};
fix$11748.$search = function(v$11558){lab$search: while (true) {if (v$11558 == null) {return [1];
} else {var v$11559 = v$11558;
var v$11560 = v$11559[0];
var v$11561 = v$11559[1];
var v$11562 = v$11559[2];
var v$11563 = v$11559[3];
if (v$11490 < v$11560) {var t$11749 = v$11562;
var v$11558 = t$11749;
continue lab$search;
} else {if (v$11560 < v$11490) {var t$11750 = v$11563;
var v$11558 = t$11750;
continue lab$search;
} else {return [0,v$11561];
};
};
};
};
};
var search$11557 = fix$11748.$search;
v$11556 = (search$11557(v$10826));
switch (v$11556[0]) { case 0: {var v$11564 = v$11556[1];
t$11751 = (en$10801([v$11564,v$11491]));
 break; }default: {t$11751 = false;
} };
} else {t$11751 = false;
};
return t$11753(t$11752,t$11751);
};
};
var fold$$11486 = fix$11747.$fold$;
return fold$$11486(v$10827,true);
};
compiler0$CompileDec$$13.layoutMap$10828 = function(v$10861,v$10863,v$10862,v$10860){return function(layoutDom$10837){return function(layoutRan$10840){return function(m$10843){var t$11761;
var t$11757;
var l$11270;
var fix$11754 = {};
fix$11754.$li = function(v$11505,v$11506){lab$li: while (true) {if (v$11505 == null) {return v$11506;
} else {var v$11507 = v$11505;
var v$11508 = v$11507[0];
var v$11509 = v$11507[1];
var v$11510 = v$11507[2];
var v$11511 = v$11507[3];
var t$11755 = v$11510;
var t$11756 = [[v$11508,v$11509],fix$11754.$li(v$11511,v$11506)];
var v$11505 = t$11755;
var v$11506 = t$11756;
continue lab$li;
};
};
};
var li$11504 = fix$11754.$li;
l$11270 = (li$11504(m$10843,null));
var fix$11758 = {};
fix$11758.$map = function(v$11272){if (v$11272 == null) {return null;
} else {var v$11273 = v$11272;
var v$11274 = v$11273[0];
var v$11275 = v$11273[1];
var t$11760;
var t$11759;
var v$11513 = v$11274[0];
var v$11514 = v$11274[1];
t$11759 = [0,[[layoutDom$10837(v$11513),[layoutRan$10840(v$11514),null]],[0,v$10861],"",3,""]];
t$11760 = [t$11759,fix$11758.$map(v$11275)];
return t$11760;
};
};
var map$11271 = fix$11758.$map;
t$11757 = (map$11271(l$11270));
t$11761 = [t$11757,[0,v$10862],v$10863,3,v$10860];
return [0,t$11761];
};
};
};
};
compiler0$CompileDec$$13.reportMap$10864 = function(f$10867,t$10870){var t$11767 = tools$Report$.flatten$78;
var t$11765;
var l$11277;
var fix$11762 = {};
fix$11762.$li = function(v$11517,v$11518){lab$li: while (true) {if (v$11517 == null) {return v$11518;
} else {var v$11519 = v$11517;
var v$11520 = v$11519[0];
var v$11521 = v$11519[1];
var v$11522 = v$11519[2];
var v$11523 = v$11519[3];
var t$11763 = v$11522;
var t$11764 = [[v$11520,v$11521],fix$11762.$li(v$11523,v$11518)];
var v$11517 = t$11763;
var v$11518 = t$11764;
continue lab$li;
};
};
};
var li$11516 = fix$11762.$li;
l$11277 = (li$11516(t$10870,null));
var fix$11766 = {};
fix$11766.$map = function(v$11279){if (v$11279 == null) {return null;
} else {var v$11280 = v$11279;
var v$11281 = v$11280[0];
var v$11282 = v$11280[1];
return [f$10867(v$11281),fix$11766.$map(v$11282)];
};
};
var map$11278 = fix$11766.$map;
t$11765 = (map$11278(l$11277));
return t$11767(t$11765);
};
compiler0$CompileDec$$13.reportMapSORTED$10871 = function(f$11283,t$11284){var t$11773 = tools$Report$.flatten$78;
var t$11771;
var l$11286;
var fix$11768 = {};
fix$11768.$li = function(v$11526,v$11527){lab$li: while (true) {if (v$11526 == null) {return v$11527;
} else {var v$11528 = v$11526;
var v$11529 = v$11528[0];
var v$11530 = v$11528[1];
var v$11531 = v$11528[2];
var v$11532 = v$11528[3];
var t$11769 = v$11531;
var t$11770 = [[v$11529,v$11530],fix$11768.$li(v$11532,v$11527)];
var v$11526 = t$11769;
var v$11527 = t$11770;
continue lab$li;
};
};
};
var li$11525 = fix$11768.$li;
l$11286 = (li$11525(t$11284,null));
var fix$11772 = {};
fix$11772.$map = function(v$11288){if (v$11288 == null) {return null;
} else {var v$11289 = v$11288;
var v$11290 = v$11289[0];
var v$11291 = v$11289[1];
return [f$11283(v$11290),fix$11772.$map(v$11291)];
};
};
var map$11287 = fix$11772.$map;
t$11771 = (map$11287(l$11286));
return t$11773(t$11771);
};
compiler0$CompileDec$$13.pu_bal$10872 = pickle$pickle$.enumGen$2149(function(v$11292){var v$11293 = v$11292[0];
var v$11294 = v$11292[1];
switch (v$11293) { case 0: {switch (v$11294) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$11294) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$11294) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderFinMap.bal",[1,[2,[0,null]]]]);
compiler0$CompileDec$$13.pu$10873 = function(pu_dom$10876,pu_r$10879){var fun_E$10888;
var v$11583 = null;
fun_E$10888 = (function(v$11584){return pickle$pickle$.con0$1979(v$11583,v$11584);
});
return pickle$pickle$.dataGen$1479(["OrderFinMap.map",function(v$11297){return (v$11297 == null)?0:1;
},[fun_E$10888,[function(pu$11298){return pickle$pickle$.con1$2005(function(v$11299){var v$11300 = v$11299[0];
return [v$11300[0],v$11300[1],v$11300[2],v$11300[3],v$11299[1]];
},function(v$11301){if (v$11301 == null) {return tools$Crash$.impossible$50("OrderFinMap.pu.fun_N");
} else {var v$11302 = v$11301;
return [[v$11302[0],v$11302[1],v$11302[2],v$11302[3]],v$11302[4]];
};
},pickle$pickle$.pairGen0$974(pickle$pickle$.tup4Gen0$2368(pu_dom$10876,pu_r$10879,pu$11298,pu$11298),compiler0$CompileDec$$13.pu_bal$10872));
},null]]]);
};
return 0;
})();
