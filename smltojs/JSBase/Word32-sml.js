if ((typeof(basis$Word32$)) == "undefined") {basis$Word32$ = {};
};
(function(){basis$Word32$.wordSize$48 = 32;
basis$Word32$.toInt$54 = function(w$57){return SmlPrims.chk_ovf_i32(w$57);
};
basis$Word32$.toIntX$58 = function(w$61){return SmlPrims.w32_to_i32_X(w$61);
};
basis$Word32$.fromInt$62 = function(i$65){return SmlPrims.i32_to_w32(i$65);
};
basis$Word32$.toLargeWord$66 = function(w$69){return w$69;
};
basis$Word32$.toLarge$70 = function(w$529){return w$529;
};
basis$Word32$.toLargeWordX$71 = function(w$74){return w$74;
};
basis$Word32$.toLargeX$75 = function(w$530){return w$530;
};
basis$Word32$.fromLargeWord$76 = function(w$79){return w$79;
};
basis$Word32$.fromLarge$80 = function(w$531){return w$531;
};
basis$Word32$.toLargeInt$81 = function(w$84){return basis$IntInfRep$.fromWord32$1147(w$84);
};
basis$Word32$.toLargeIntX$85 = function(w$88){return basis$IntInfRep$.fromWord32X$1158(w$88);
};
basis$Word32$.fromLargeInt$89 = function(i$92){return basis$IntInfRep$.toWord32$1170(i$92);
};
basis$Word32$.orb$93 = function(v$650,v$651){return v$650 | v$651;
};
basis$Word32$.andb$100 = function(v$652,v$653){return v$652 & v$653;
};
basis$Word32$.xorb$107 = function(v$654,v$655){return v$654 ^ v$655;
};
basis$Word32$.notb$114 = function(x$117){return x$117 ^ 4294967295;
};
basis$Word32$.s$jj$143 = function(v$152,v$153){return (v$153 >= 32)?0:((v$152 << (v$153 & 31)) & 4294967295);
};
basis$Word32$.s$ll$154 = function(v$163,v$164){return (v$164 >= 32)?0:(v$163 >>> v$164);
};
basis$Word32$.s$pll$165 = function(v$178,v$179){return (v$179 >= 32)?(((SmlPrims.w32_to_i32_X(v$178)) >= 0)?0:(SmlPrims.i32_to_w32(-1))):(v$178 >> v$179);
};
basis$Word32$.s$f$180 = function(v$656,v$657){return (v$656 + v$657) & 4294967295;
};
basis$Word32$.s$g$187 = function(v$658,v$659){return (v$658 - v$659) & 4294967295;
};
basis$Word32$.s$t$194 = function(v$660,v$661){return (v$660 * v$661) & 4294967295;
};
basis$Word32$.div$201 = function(v$662,v$663){return SmlPrims.div_w32(v$662,v$663,CompilerInitial.exn$Div$40);
};
basis$Word32$.mod$208 = function(v$664,v$665){return SmlPrims.mod_w32(v$664,v$665,CompilerInitial.exn$Div$40);
};
basis$Word32$.s$p$215 = function(w$218){return SmlPrims.i32_to_w32(SmlPrims.chk_ovf_i32(-(SmlPrims.chk_ovf_i32(w$218))));
};
var conv$250 = function(radix$253,i$256){var fix$685 = {};
fix$685.$h = function(n$260,res$263){lab$h: while (true) {if (n$260 == (SmlPrims.i32_to_w32(0))) {return res$263;
} else {var t$689 = SmlPrims.div_w32(n$260,radix$253,CompilerInitial.exn$Div$40);
var t$688;
var t$687;
var t$686;
var i$558 = SmlPrims.mod_w32(n$260,radix$253,CompilerInitial.exn$Div$40);
t$686 = (((SmlPrims.chk_ovf_i32(i$558)) < 10)?(basis$Char$.chr$64(SmlPrims.chk_ovf_i32((i$558 + (SmlPrims.i32_to_w32(48))) & 4294967295))):(basis$Char$.chr$64(SmlPrims.chk_ovf_i32((i$558 + (SmlPrims.i32_to_w32(55))) & 4294967295))));
t$687 = [t$686,res$263];
t$688 = t$687;
var t$690 = t$689;
var t$691 = t$688;
var n$260 = t$690;
var res$263 = t$691;
continue lab$h;
};
};
};
var h$257 = fix$685.$h;
var t$697;
var t$696 = h$257;
var t$695 = SmlPrims.div_w32(i$256,radix$253,CompilerInitial.exn$Div$40);
var t$694;
var t$693;
var t$692;
var i$570 = SmlPrims.mod_w32(i$256,radix$253,CompilerInitial.exn$Div$40);
t$692 = (((SmlPrims.chk_ovf_i32(i$570)) < 10)?(basis$Char$.chr$64(SmlPrims.chk_ovf_i32((i$570 + (SmlPrims.i32_to_w32(48))) & 4294967295))):(basis$Char$.chr$64(SmlPrims.chk_ovf_i32((i$570 + (SmlPrims.i32_to_w32(55))) & 4294967295))));
t$693 = [t$692,null];
t$694 = t$693;
t$697 = (t$696(t$695,t$694));
return SmlPrims.implode(t$697);
};
basis$Word32$.scan$272 = function(radix$275,getc$278,source$281){var source$282 = basis$StringCvt$.skipWS$267(getc$278,source$281);
var v$393;
switch (radix$275) { case 3: {v$393 = [function(c$413){return (48 <= c$413)?(c$413 <= 49):false;
},2];
 break; }case 0: {v$393 = [function(c$406){return (48 <= c$406)?(c$406 <= 55):false;
},8];
 break; }case 2: {v$393 = [function(c$574){return (48 <= c$574)?(c$574 <= 57):false;
},10];
 break; }default: {v$393 = [function(c$575){return ((48 <= c$575)?(c$575 <= 57):false)?true:(((97 <= c$575)?(c$575 <= 102):false)?true:((65 <= c$575)?(c$575 <= 70):false));
},16];
} };
var v$394 = v$393[0];
var v$395 = v$393[1];
var dig1$286 = function(v$289){switch (v$289[0]) { case 1: {return [1];
 break; }default: {var v$330 = v$289[1];
var v$331 = v$330[0];
var v$332 = v$330[1];
var fix$698 = {};
fix$698.$digr = function(res$299,src$302){lab$digr: while (true) {var v$308 = getc$278(src$302);
switch (v$308[0]) { case 1: {return [0,[res$299,src$302]];
 break; }default: {var v$323 = v$308[1];
var v$324 = v$323[0];
var v$325 = v$323[1];
if (v$394(v$324)) {var res1$313 = (v$395 * res$299) & 4294967295;
var res2$314 = (res1$313 + (((48 <= v$324)?(v$324 <= 57):false)?(((SmlPrims.i32_to_w32(v$324)) - (SmlPrims.i32_to_w32(48))) & 4294967295):(SmlPrims.mod_w32(((SmlPrims.i32_to_w32(v$324)) - (SmlPrims.i32_to_w32(55))) & 4294967295,SmlPrims.i32_to_w32(32),CompilerInitial.exn$Div$40)))) & 4294967295;
if ((res1$313 < res$299)?true:(res2$314 < res1$313)) {throw CompilerInitial.exn$Overflow$43;
} else {var t$699 = res2$314;
var t$700 = v$325;
var res$299 = t$699;
var src$302 = t$700;
continue lab$digr;
};
} else {return [0,[res$299,src$302]];
};
} };
};
};
var digr$296 = fix$698.$digr;
if (v$394(v$331)) {return digr$296(((48 <= v$331)?(v$331 <= 57):false)?(((SmlPrims.i32_to_w32(v$331)) - (SmlPrims.i32_to_w32(48))) & 4294967295):(SmlPrims.mod_w32(((SmlPrims.i32_to_w32(v$331)) - (SmlPrims.i32_to_w32(55))) & 4294967295,SmlPrims.i32_to_w32(32),CompilerInitial.exn$Div$40)),v$332);
} else {return [1];
};
} };
};
var hexprefix$345 = function(after0$348,src$351){var t$701;
var v$649 = 1;
t$701 = ((basis$StringCvt$.eq_radix$297(radix$275,v$649))?false:true);
if (t$701) {var v$593 = dig1$286(getc$278(src$351));
switch (v$593[0]) { case 1: {return [0,[SmlPrims.i32_to_w32(0),after0$348]];
 break; }default: {return v$593;
} };
} else {var v$365 = getc$278(src$351);
switch (v$365[0]) { case 0: {var v$367 = v$365[1];
switch (v$367[0]) { case 120: {var v$370 = v$367[1];
var v$596 = dig1$286(getc$278(v$370));
switch (v$596[0]) { case 1: {return [0,[SmlPrims.i32_to_w32(0),after0$348]];
 break; }default: {return v$596;
} };
 break; }case 88: {var v$369 = v$367[1];
var v$599 = dig1$286(getc$278(v$369));
switch (v$599[0]) { case 1: {return [0,[SmlPrims.i32_to_w32(0),after0$348]];
 break; }default: {return v$599;
} };
 break; }default: {var v$602 = dig1$286(getc$278(src$351));
switch (v$602[0]) { case 1: {return [0,[SmlPrims.i32_to_w32(0),after0$348]];
 break; }default: {return v$602;
} };
} };
 break; }default: {return [0,[SmlPrims.i32_to_w32(0),after0$348]];
} };
};
};
var v$377 = getc$278(source$282);
switch (v$377[0]) { case 0: {var v$379 = v$377[1];
switch (v$379[0]) { case 48: {var v$392 = v$379[1];
var v$387 = getc$278(v$392);
switch (v$387[0]) { case 0: {var v$389 = v$387[1];
switch (v$389[0]) { case 119: {var v$391 = v$389[1];
return hexprefix$345(v$392,v$391);
 break; }default: {return hexprefix$345(v$392,v$392);
} };
 break; }default: {return [0,[SmlPrims.i32_to_w32(0),v$392]];
} };
 break; }default: {return dig1$286(getc$278(source$282));
} };
 break; }default: {return [1];
} };
};
basis$Word32$.fmt$418 = function(v$421){switch (v$421) { case 3: {var v$674 = SmlPrims.i32_to_w32(2);
return function(v$675){return conv$250(v$674,v$675);
};
 break; }case 0: {var v$676 = SmlPrims.i32_to_w32(8);
return function(v$677){return conv$250(v$676,v$677);
};
 break; }case 2: {var v$678 = SmlPrims.i32_to_w32(10);
return function(v$679){return conv$250(v$678,v$679);
};
 break; }default: {var v$680 = SmlPrims.i32_to_w32(16);
return function(v$681){return conv$250(v$680,v$681);
};
} };
};
basis$Word32$.toString$430 = function(w$433){return conv$250(SmlPrims.i32_to_w32(16),w$433);
};
basis$Word32$.fromString$434 = function(s$437){var t$703 = basis$StringCvt$.scanString$154;
var t$702;
var v$682 = 1;
t$702 = (function(v$683){return function(v$684){return basis$Word32$.scan$272(v$682,v$683,v$684);
};
});
return t$703(t$702,s$437);
};
basis$Word32$.min$438 = function(v$447,v$448){return (v$447 > v$448)?v$448:v$447;
};
basis$Word32$.max$449 = function(v$458,v$459){return (v$458 > v$459)?v$458:v$459;
};
basis$Word32$.compare$460 = function(v$473,v$474){return (v$473 < v$474)?0:((v$473 > v$474)?1:2);
};
basis$Word32$.s$l$475 = function(v$666,v$667){return v$666 > v$667;
};
basis$Word32$.s$lk$482 = function(v$668,v$669){return v$668 >= v$669;
};
basis$Word32$.s$j$489 = function(v$670,v$671){return v$670 < v$671;
};
basis$Word32$.s$jk$496 = function(v$672,v$673){return v$672 <= v$673;
};
return 0;
})();
