if ((typeof(tools$FinMapEq$)) == "undefined") {tools$FinMapEq$ = {};
};
(function(){tools$FinMapEq$.empty$48 = function(v$700){return null;
};
tools$FinMapEq$.singleton$49 = function(p$52){return [p$52,null];
};
tools$FinMapEq$.isEmpty$53 = function(v$56){return (v$56 == null)?true:false;
};
var fix$701 = {};
fix$701.$lookup = function(v$64,v$67,v$70){lab$lookup: while (true) {if (v$67 == null) {return [1];
} else {var v$90 = v$67;
var v$91 = v$90[0];
var v$92 = v$91[0];
var v$93 = v$91[1];
var v$94 = v$90[1];
if (v$64([v$92,v$70])) {return [0,v$93];
} else {var t$702 = v$64;
var t$703 = v$94;
var t$704 = v$70;
var v$64 = t$702;
var v$67 = t$703;
var v$70 = t$704;
continue lab$lookup;
};
};
};
};
tools$FinMapEq$.lookup$61 = fix$701.$lookup;
tools$FinMapEq$.add$167 = function(eq$170,v$175){var v$180 = v$175[0];
var v$181 = v$175[1];
var v$182 = v$175[2];
var t$709;
var fix$706 = {};
fix$706.$isin = function(v$684,v$649){lab$isin: while (true) {if (v$649 == null) {return false;
} else {var v$651 = v$649;
var v$652 = v$651[0];
var v$653 = v$652[0];
var v$654 = v$651[1];
if (eq$170([v$684,v$653])) {return true;
} else {var t$707 = v$684;
var t$708 = v$654;
var v$684 = t$707;
var v$649 = t$708;
continue lab$isin;
};
};
};
};
var isin$647 = fix$706.$isin;
t$709 = (isin$647(v$180,v$182));
if (t$709) {var fix$705 = {};
fix$705.$ins = function(v$685,v$686,v$658){if (v$658 == null) {return [[v$685,v$686],null];
} else {var v$661 = v$658;
var v$662 = v$661[0];
var v$663 = v$662[0];
var v$664 = v$661[1];
return (eq$170([v$663,v$685]))?[[v$685,v$686],v$664]:[v$662,fix$705.$ins(v$685,v$686,v$664)];
};
};
var ins$656 = fix$705.$ins;
return ins$656(v$180,v$181,v$182);
} else {return [[v$180,v$181],v$182];
};
};
var fix$710 = {};
fix$710.$plus = function(v$186,v$189){var v$202 = v$189[1];
if (v$202 == null) {return v$189[0];
} else {var v$206 = v$189[0];
var v$207 = v$202;
var v$208 = v$207[0];
var v$209 = v$208[0];
var v$210 = v$208[1];
var v$211 = v$207[1];
var t$756 = fix$710.$plus;
var t$755 = v$186;
var t$754;
var t$753;
var t$752;
var fix$749 = {};
fix$749.$isin = function(v$687,v$668){lab$isin: while (true) {if (v$668 == null) {return false;
} else {var v$670 = v$668;
var v$671 = v$670[0];
var v$672 = v$671[0];
var v$673 = v$670[1];
if (v$186([v$687,v$672])) {return true;
} else {var t$750 = v$687;
var t$751 = v$673;
var v$687 = t$750;
var v$668 = t$751;
continue lab$isin;
};
};
};
};
var isin$666 = fix$749.$isin;
t$752 = (isin$666(v$209,v$206));
if (t$752) {var fix$748 = {};
fix$748.$ins = function(v$688,v$689,v$677){if (v$677 == null) {return [[v$688,v$689],null];
} else {var v$680 = v$677;
var v$681 = v$680[0];
var v$682 = v$681[0];
var v$683 = v$680[1];
return (v$186([v$682,v$688]))?[[v$688,v$689],v$683]:[v$681,fix$748.$ins(v$688,v$689,v$683)];
};
};
var ins$675 = fix$748.$ins;
t$753 = (ins$675(v$209,v$210,v$206));
} else {t$753 = [[v$209,v$210],v$206];
};
t$754 = [t$753,v$211];
return t$756(t$755,t$754);
};
};
tools$FinMapEq$.plus$183 = fix$710.$plus;
var fix$711 = {};
fix$711.$remove = function(v$215,v$218){var v$231 = v$218[1];
if (v$231 == null) {return [1];
} else {var v$245 = v$218[0];
var v$246 = v$231;
var v$247 = v$246[0];
var v$248 = v$247[0];
var v$249 = v$247[1];
var v$250 = v$246[1];
if (v$215([v$245,v$248])) {return [0,v$250];
} else {var v$242 = fix$711.$remove(v$215,[v$245,v$250]);
switch (v$242[0]) { case 1: {return [1];
 break; }default: {return [0,[[v$248,v$249],v$242[1]]];
} };
};
};
};
tools$FinMapEq$.remove$212 = fix$711.$remove;
tools$FinMapEq$.mergeMap$251 = function(v$254,v$257,v$260,v$263){if (v$260 == null) {return v$263;
} else {if (v$263 == null) {return v$260;
} else {var fix$712 = {};
fix$712.$insert = function(v$690,v$691,v$302){if (v$302 == null) {return [[v$690,v$691],null];
} else {var v$311 = v$302;
var v$312 = v$311[0];
var v$313 = v$312[0];
var v$314 = v$312[1];
var v$315 = v$311[1];
return (v$254([v$313,v$690]))?[[v$313,v$257([v$314,v$691])],v$315]:[[v$313,v$314],fix$712.$insert(v$690,v$691,v$315)];
};
};
var insert$287 = fix$712.$insert;
var fix$713 = {};
fix$713.$foldl = function(v$518,v$519){lab$foldl: while (true) {if (v$519 == null) {return v$518;
} else {var v$520 = v$519;
var v$521 = v$520[0];
var v$522 = v$520[1];
var t$714;
var v$616 = v$521[0];
var v$617 = v$521[1];
t$714 = (insert$287(v$616,v$617,v$518));
var t$715 = t$714;
var t$716 = v$522;
var v$518 = t$715;
var v$519 = t$716;
continue lab$foldl;
};
};
};
var foldl$517 = fix$713.$foldl;
return foldl$517(v$260,v$263);
};
};
};
tools$FinMapEq$.dom$327 = function(eq$330,m$333){var t$720 = edlib$Set$.fromList$117;
var t$719 = function(a$336){return function(b$339){return eq$330([a$336,b$339]);
};
};
var t$718;
var fix$717 = {};
fix$717.$map = function(v$526){if (v$526 == null) {return null;
} else {var v$527 = v$526;
var v$528 = v$527[0];
var v$529 = v$527[1];
return [v$528[0],fix$717.$map(v$529)];
};
};
var map$525 = fix$717.$map;
t$718 = (map$525(m$333));
return t$720(t$719,t$718);
};
tools$FinMapEq$.range$344 = function(x$347){var fix$721 = {};
fix$721.$map = function(v$533){if (v$533 == null) {return null;
} else {var v$534 = v$533;
var v$535 = v$534[0];
var v$536 = v$534[1];
return [v$535[1],fix$721.$map(v$536)];
};
};
var map$532 = fix$721.$map;
return map$532(x$347);
};
tools$FinMapEq$.list$352 = function(x$355){return x$355;
};
tools$FinMapEq$.composemap$356 = function(f$359,m$362){var fix$722 = {};
fix$722.$map = function(v$540){if (v$540 == null) {return null;
} else {var v$541 = v$540;
var v$542 = v$541[0];
var v$543 = v$541[1];
var t$724;
var t$723;
var v$622 = v$542[0];
var v$623 = v$542[1];
t$723 = [v$622,f$359(v$623)];
t$724 = [t$723,fix$722.$map(v$543)];
return t$724;
};
};
var map$539 = fix$722.$map;
return map$539(m$362);
};
tools$FinMapEq$.ComposeMap$369 = function(f$372,m$375){var fix$725 = {};
fix$725.$map = function(v$547){if (v$547 == null) {return null;
} else {var v$548 = v$547;
var v$549 = v$548[0];
var v$550 = v$548[1];
var t$727;
var t$726;
var v$625 = v$549[0];
var v$626 = v$549[1];
t$726 = [v$625,f$372([v$625,v$626])];
t$727 = [t$726,fix$725.$map(v$550)];
return t$727;
};
};
var map$546 = fix$725.$map;
return map$546(m$375);
};
tools$FinMapEq$.fold$382 = function(f$385,x$388,m$391){var fix$728 = {};
fix$728.$foldl = function(v$555,v$556){lab$foldl: while (true) {if (v$556 == null) {return v$555;
} else {var v$557 = v$556;
var v$558 = v$557[0];
var v$559 = v$557[1];
var t$729;
var v$629 = v$558[1];
t$729 = (f$385([v$629,v$555]));
var t$730 = t$729;
var t$731 = v$559;
var v$555 = t$730;
var v$556 = t$731;
continue lab$foldl;
};
};
};
var foldl$554 = fix$728.$foldl;
return foldl$554(x$388,m$391);
};
tools$FinMapEq$.Fold$401 = function(f$404,x$407,m$410){var fix$732 = {};
fix$732.$foldl = function(v$564,v$565){lab$foldl: while (true) {if (v$565 == null) {return v$564;
} else {var v$566 = v$565;
var v$567 = v$566[0];
var v$568 = v$566[1];
var t$733;
var v$633 = v$567[0];
var v$634 = v$567[1];
t$733 = (f$404([[v$633,v$634],v$564]));
var t$734 = t$733;
var t$735 = v$568;
var v$564 = t$734;
var v$565 = t$735;
continue lab$foldl;
};
};
};
var foldl$563 = fix$732.$foldl;
return foldl$563(x$407,m$410);
};
tools$FinMapEq$.filter$420 = function(v$698,v$699){return basis$List$.filter$386(v$698,v$699);
};
tools$FinMapEq$.reportMap$421 = function(f$424,m$427){var t$738 = tools$Report$.flatten$78;
var t$737;
var fix$736 = {};
fix$736.$map = function(v$572){if (v$572 == null) {return null;
} else {var v$573 = v$572;
var v$574 = v$573[0];
var v$575 = v$573[1];
return [f$424(v$574),fix$736.$map(v$575)];
};
};
var map$571 = fix$736.$map;
t$737 = (map$571(m$427));
return t$738(t$737);
};
tools$FinMapEq$.reportMapSORTED$428 = function(lt$431,f$434,m$437){var m$577 = edlib$ListSort$.sort$45(function(v$440){var v$445 = v$440[0];
return function(v$443){var v$444 = v$443[0];
return lt$431([v$445,v$444]);
};
},m$437);
var t$741 = tools$Report$.flatten$78;
var t$740;
var fix$739 = {};
fix$739.$map = function(v$581){if (v$581 == null) {return null;
} else {var v$582 = v$581;
var v$583 = v$582[0];
var v$584 = v$582[1];
return [f$434(v$583),fix$739.$map(v$584)];
};
};
var map$580 = fix$739.$map;
t$740 = (map$580(m$577));
return t$741(t$740);
};
tools$FinMapEq$.layoutMap$446 = function(v$480,v$482,v$481,v$479){return function(layoutDom$455){return function(layoutRan$458){return function(m$461){var t$742;
var v$477 = [0,v$481];
var t$744;
var fix$743 = {};
fix$743.$map = function(v$588){if (v$588 == null) {return null;
} else {var v$589 = v$588;
var v$590 = v$589[0];
var v$591 = v$589[1];
var t$747;
var t$745;
var v$637 = v$590[0];
var v$638 = v$590[1];
var t$746;
var v$639 = [0,v$480];
t$746 = [[layoutDom$455(v$637),[layoutRan$458(v$638),null]],v$639,"",0,""];
t$745 = [0,t$746];
t$747 = [t$745,fix$743.$map(v$591)];
return t$747;
};
};
var map$587 = fix$743.$map;
t$744 = (map$587(m$461));
t$742 = [t$744,v$477,v$482,0,v$479];
return [0,t$742];
};
};
};
};
return 0;
})();