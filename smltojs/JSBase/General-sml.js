if ((typeof(basis$General$)) == "undefined") {basis$General$ = {};
};
(function(){basis$General$.eq_order$247 = function(v$249,v$250){switch (v$249) { case 0: {switch (v$250) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$250) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$250) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
basis$General$.eq_option$251 = function(v$255,v$252){var v$253 = v$252[0];
var v$254 = v$252[1];
switch (v$253[0]) { case 0: {switch (v$254[0]) { case 0: {var v$256 = v$253[1];
var v$257 = v$254[1];
return v$255([v$256,v$257]);
 break; }default: {return false;
} };
 break; }case 1: {switch (v$254[0]) { case 1: {return true;
 break; }default: {return false;
} };
 break; } };
};
basis$General$.en$Subscript$51 = new String("Subscript");
basis$General$.exn$Subscript$51 = [basis$General$.en$Subscript$51];
basis$General$.en$Span$52 = new String("Span");
basis$General$.exn$Span$52 = [basis$General$.en$Span$52];
basis$General$.en$Size$53 = new String("Size");
basis$General$.exn$Size$53 = [basis$General$.en$Size$53];
basis$General$.en$Domain$54 = new String("Domain");
basis$General$.exn$Domain$54 = [basis$General$.en$Domain$54];
basis$General$.en$Chr$55 = new String("Chr");
basis$General$.exn$Chr$55 = [basis$General$.en$Chr$55];
basis$General$.exnName$56 = function(e$59){return e$59[0];
};
basis$General$.exnMessage$60 = function(e$63){return e$63[0];
};
basis$General$.s$a$67 = function(x$70){return x$70[0];
};
basis$General$.s$ik$71 = function(v$273,v$274){return (v$273[0] = v$274,0);
};
basis$General$.o$78 = function(v$86,v$87){return function(x$85){return v$86(v$87(x$85));
};
};
basis$General$.before$88 = function(v$275,v$276){return v$275;
};
basis$General$.ignore$93 = function(a$96){return 0;
};
basis$General$.en$Option$99 = new String("Option");
basis$General$.exn$Option$99 = [basis$General$.en$Option$99];
basis$General$.getOpt$100 = function(v$111,v$277){switch (v$111[0]) { case 1: {return v$277;
 break; }default: {return v$111[1];
} };
};
basis$General$.isSome$115 = function(v$118){switch (v$118[0]) { case 1: {return false;
 break; }default: {return true;
} };
};
basis$General$.valOf$123 = function(v$126){switch (v$126[0]) { case 0: {return v$126[1];
 break; }default: {throw basis$General$.exn$Option$99;
} };
};
basis$General$.s$k$134 = function(v$258,v$138){var v$139 = v$138[0];
var v$140 = v$138[1];
return v$258([v$139,v$140]);
};
basis$General$.not$141 = function(v$144){return v$144?false:true;
};
basis$General$.s$jl$149 = function(v$259,v$153){var v$154 = v$153[0];
var v$155 = v$153[1];
return (v$259([v$154,v$155]))?false:true;
};
basis$General$.print$156 = function(s$159){return (basis$Initial$.printer_get$93(0))(s$159);
};
basis$General$.implode$160 = function(chars$163){return SmlPrims.implode(chars$163);
};
basis$General$.concat$164 = function(ss$167){return SmlPrims.concat(ss$167);
};
basis$General$.s$r$168 = function(v$278,v$279){return v$278 + v$279;
};
basis$General$.str$175 = function(c$178){return SmlPrims.implode([c$178,null]);
};
basis$General$.size$179 = function(s$182){return s$182.length;
};
basis$General$.ord$183 = function(c$186){return c$186;
};
basis$General$.chr$187 = function(i$190){if ((i$190 >= 0)?(i$190 < 256):false) {return i$190;
} else {throw basis$General$.exn$Chr$55;
};
};
basis$General$.explode$206 = function(s$209){var fix$280 = {};
fix$280.$h = function(v$219,v$220){lab$h: while (true) {if (v$219 < 0) {return v$220;
} else {var t$281 = SmlPrims.chk_ovf_i32(v$219 - 1);
var t$282 = [s$209.charCodeAt(v$219),v$220];
var v$219 = t$281;
var v$220 = t$282;
continue lab$h;
};
};
};
var h$210 = fix$280.$h;
return h$210(SmlPrims.chk_ovf_i32(s$209.length - 1),null);
};
return 0;
})();
