if ((typeof(compiler_objects$Con$$1)) == "undefined") {compiler_objects$Con$$1 = {};
};
(function(){compiler_objects$Con$$1.mk_con$55 = function(s$58){return [special_objects$Name$.new$143(0),s$58];
};
compiler_objects$Con$$1.pr_con$61 = function(v$309,v$310){return v$310;
};
compiler_objects$Con$$1.pr_con$$66 = function(v$76,v$75){return (v$75 + "_") + (basis$Int32$.toString$449(v$76[0][1][0]));
};
compiler_objects$Con$$1.name$77 = function(v$311,v$312){return v$311;
};
compiler_objects$Con$$1.s$j$82 = function(v$93,v$94){var s1$87 = v$93[1];
var s2$88 = v$94[1];
if (s1$87 == s2$88) {var v$272 = v$93[0];
var v$273 = v$94[0];
var v$192 = v$272[0][1];
var v$193 = v$192[0];
var v$194 = v$192[1];
var v$195 = v$273[0][1];
var v$196 = v$195[0];
var v$197 = v$195[1];
return (v$193 < v$196)?true:((v$193 == v$196)?(v$194 < v$197):false);
} else {return s1$87 < s2$88;
};
};
compiler_objects$Con$$1.eq$95 = function(v$100,v$101){var v$274 = v$100[0];
var v$275 = v$101[0];
var v$203 = v$274[0][1];
var v$204 = v$275[0][1];
return (v$203[0] == v$204[0])?(v$203[1] == v$204[1]):false;
};
compiler_objects$Con$$1.match$102 = function(v$107,v$108){return special_objects$Name$.match$177(v$107[0],v$108[0]);
};
var bucket$109 = [null];
compiler_objects$Con$$1.con_REF$117;
var c$213 = [special_objects$Name$.new$143(0),"ref"];
(bucket$109[0] = [c$213,bucket$109[0]],0);
compiler_objects$Con$$1.con_REF$117 = c$213;
compiler_objects$Con$$1.con_TRUE$118;
var c$217 = [special_objects$Name$.new$143(0),"true"];
(bucket$109[0] = [c$217,bucket$109[0]],0);
compiler_objects$Con$$1.con_TRUE$118 = c$217;
compiler_objects$Con$$1.con_FALSE$119;
var c$221 = [special_objects$Name$.new$143(0),"false"];
(bucket$109[0] = [c$221,bucket$109[0]],0);
compiler_objects$Con$$1.con_FALSE$119 = c$221;
compiler_objects$Con$$1.con_NIL$120;
var c$225 = [special_objects$Name$.new$143(0),"nil"];
(bucket$109[0] = [c$225,bucket$109[0]],0);
compiler_objects$Con$$1.con_NIL$120 = c$225;
compiler_objects$Con$$1.con_CONS$121;
var c$229 = [special_objects$Name$.new$143(0),"::"];
(bucket$109[0] = [c$229,bucket$109[0]],0);
compiler_objects$Con$$1.con_CONS$121 = c$229;
compiler_objects$Con$$1.con_QUOTE$122;
var c$233 = [special_objects$Name$.new$143(0),"QUOTE"];
(bucket$109[0] = [c$233,bucket$109[0]],0);
compiler_objects$Con$$1.con_QUOTE$122 = c$233;
compiler_objects$Con$$1.con_ANTIQUOTE$123;
var c$237 = [special_objects$Name$.new$143(0),"ANTIQUOTE"];
(bucket$109[0] = [c$237,bucket$109[0]],0);
compiler_objects$Con$$1.con_ANTIQUOTE$123 = c$237;
compiler_objects$Con$$1.con_INTINF$124;
var c$241 = [special_objects$Name$.new$143(0),"IntInf"];
(bucket$109[0] = [c$241,bucket$109[0]],0);
compiler_objects$Con$$1.con_INTINF$124 = c$241;
compiler_objects$Con$$1.consPredefined$125 = bucket$109[0];
compiler_objects$Con$$1.pu$126 = pickle$pickle$.hashConsEq$2568(function(v$245){var v$246 = v$245[0];
var v$247 = v$245[1];
var v$292 = v$246[0];
var v$293 = v$247[0];
var v$251 = v$292[0][1];
var v$252 = v$293[0][1];
return (v$251[0] == v$252[0])?(v$251[1] == v$252[1]):false;
},pickle$pickle$.register$2551("Con",compiler_objects$Con$$1.consPredefined$125,pickle$pickle$.newHash$2044(function(x$256){return x$256[0][0][1][0];
},pickle$pickle$.convert$2333([function(v$262){return [v$262[1],v$262[0]];
},function(v$263){return [v$263[1],v$263[0]];
}],pickle$pickle$.pairGen0$974(pickle$pickle$.string$900,special_objects$Name$.pu$286)))));
compiler_objects$Con$$1.name$151 = function(v$313,v$314){return v$313;
};
compiler_objects$Con$$1.pp$152 = function(v$315,v$316){return v$316;
};
return 0;
})();
