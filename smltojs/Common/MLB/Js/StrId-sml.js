if ((typeof(syntax_objects$StrId$)) == "undefined") {syntax_objects$StrId$ = {};
};
(function(){syntax_objects$StrId$.eq_strid$172 = function(v$174,v$175){switch (v$175[0]) { case 0: {return v$174[1] == v$175[1];
 break; }default: {return false;
} };
};
syntax_objects$StrId$.eq_longstrid$179 = function(v$181,v$182){switch (v$182[0]) { case 0: {var v$183 = v$181[1];
var v$184 = v$182[1];
var t$280;
var fix$276 = {};
fix$276.$eq_list = function(v$189,v$190){lab$eq_list: while (true) {if (v$189 == null) {return (v$190 == null)?true:false;
} else {if (v$190 == null) {return false;
} else {var v$191 = v$189;
var v$192 = v$190;
var t$277;
var v$253 = v$191[0];
var v$254 = v$192[0];
switch (v$254[0]) { case 0: {t$277 = (v$253[1] == v$254[1]);
 break; }default: {t$277 = false;
} };
if (t$277) {var t$278 = v$191[1];
var t$279 = v$192[1];
var v$189 = t$278;
var v$190 = t$279;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$187 = fix$276.$eq_list;
t$280 = (eq_list$187(v$183[0],v$184[0]));
if (t$280) {var v$257 = v$183[1];
var v$258 = v$184[1];
switch (v$258[0]) { case 0: {return v$257[1] == v$258[1];
 break; }default: {return false;
} };
} else {return false;
};
 break; }default: {return false;
} };
};
syntax_objects$StrId$.pr_StrId$52 = function(v$55){return v$55[1];
};
syntax_objects$StrId$.pr_LongStrId$61 = function(v$64){var v$73 = v$64[1];
var v$74 = v$73[0];
var v$75 = v$73[1];
var strings$69;
var fix$281 = {};
fix$281.$map = function(v$215){if (v$215 == null) {return null;
} else {var v$216 = v$215;
var v$217 = v$216[0];
var v$218 = v$216[1];
return [v$217[1] + ".",fix$281.$map(v$218)];
};
};
var map$214 = fix$281.$map;
strings$69 = (map$214(v$74));
var b$222 = v$75[1];
var fix$282 = {};
fix$282.$foldr = function(v$225){if (v$225 == null) {return b$222;
} else {var v$226 = v$225;
var v$227 = v$226[0];
var v$228 = v$226[1];
return v$227 + (fix$282.$foldr(v$228));
};
};
var foldr$224 = fix$282.$foldr;
return foldr$224(strings$69);
};
syntax_objects$StrId$.implode_longstrid$76 = function(v$272,v$273){return [0,[v$272,v$273]];
};
syntax_objects$StrId$.explode_longstrid$83 = function(v$86){var v$91 = v$86[1];
return [v$91[0],v$91[1]];
};
syntax_objects$StrId$.mk_StrId$94 = function(v$95){return [0,v$95];
};
syntax_objects$StrId$.mk_LongStrId$96 = function(strs$99){var v$105 = basis$List$.rev$641(strs$99);
if (v$105 == null) {return tools$Crash$.impossible$50("StrId.mk_LongStrId");
} else {var v$107 = v$105;
var v$108 = v$107[0];
var v$109 = v$107[1];
var t$285;
var t$283;
var l$232 = basis$List$.rev$641(v$109);
var fix$284 = {};
fix$284.$map = function(v$234){if (v$234 == null) {return null;
} else {var v$235 = v$234;
var v$236 = v$235[0];
var v$237 = v$235[1];
return [[0,v$236],fix$284.$map(v$237)];
};
};
var map$233 = fix$284.$map;
t$283 = (map$233(l$232));
t$285 = [t$283,[0,v$108]];
return [0,t$285];
};
};
syntax_objects$StrId$.inventStrId$110 = function(v$112){return [0,("<unique_StrId." + (tools$Timestamp$.print$56(tools$Timestamp$.new$47(0)))) + ">"];
};
syntax_objects$StrId$.invented_StrId$113 = function(v$116){var v$120 = v$116[1];
var n1$242 = "<".length;
var n2$243 = v$120.length;
var stop$244 = (n1$242 < n2$243)?n1$242:n2$243;
var fix$286 = {};
fix$286.$h = function(j$246){lab$h: while (true) {if (j$246 == stop$244) {return true;
} else {if (("<".charCodeAt(j$246)) == (v$120.charCodeAt(j$246))) {var t$287 = SmlPrims.chk_ovf_i32(j$246 + 1);
var j$246 = t$287;
continue lab$h;
} else {return false;
};
};
};
};
var h$245 = fix$286.$h;
if (n1$242 <= n2$243) {return h$245(0);
} else {return false;
};
};
syntax_objects$StrId$.longStrIdOfStrId$121 = function(strid$124){return [0,[null,strid$124]];
};
syntax_objects$StrId$.s$j$125 = function(v$274,v$275){return v$274[1] < v$275[1];
};
syntax_objects$StrId$.pu$134 = pickle$pickle$.convert$2333([function(v$135){return [0,v$135];
},function(v$138){return v$138[1];
}],pickle$pickle$.string$900);
syntax_objects$StrId$.pu_longstrid$140 = pickle$pickle$.convert$2333([function(v$141){return [0,v$141];
},function(v$144){return v$144[1];
}],pickle$pickle$.pairGen0$974(pickle$pickle$.listGen$2100(syntax_objects$StrId$.pu$134),syntax_objects$StrId$.pu$134));
return 0;
})();
