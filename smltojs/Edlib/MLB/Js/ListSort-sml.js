if ((typeof(edlib$ListSort$)) == "undefined") {edlib$ListSort$ = {};
};
(function(){var fix$219 = {};
fix$219.$sort = function(v$48,v$51){if (v$51 == null) {return null;
} else {var v$70 = v$51;
var v$71 = v$70[1];
if (v$71 == null) {return [v$70[0],null];
} else {var v$74 = v$71;
if (v$74[1] == null) {var v$81 = v$70[0];
var v$82 = v$74[0];
return ((v$48(v$81))(v$82))?[v$81,[v$82,null]]:[v$82,[v$81,null]];
} else {var v$86 = edlib$edListPair$.unravel$131(v$51);
var v$87 = v$86[0];
var v$88 = v$86[1];
var fix$230 = {};
fix$230.$merge = function(v$216,v$157){if (v$157 == null) {return v$216;
} else {if (v$216 == null) {return v$157;
} else {var v$159 = v$216;
var v$160 = v$159[0];
var v$161 = v$159[1];
var v$162 = v$157;
var v$163 = v$162[0];
var v$164 = v$162[1];
return ((v$48(v$160))(v$163))?[v$160,fix$230.$merge(v$161,v$157)]:[v$163,fix$230.$merge(v$216,v$164)];
};
};
};
var merge$155 = fix$230.$merge;
return merge$155(fix$219.$sort(v$48,v$87),fix$219.$sort(v$48,v$88));
};
};
};
};
edlib$ListSort$.sort$45 = fix$219.$sort;
var fix$220 = {};
fix$220.$perms = function(v$118){if (v$118 == null) {return [null,null];
} else {var v$125 = v$118;
var v$126 = v$125[0];
var v$127 = v$125[1];
var t$228;
var v$196 = null;
var fix$229 = {};
fix$229.$foldR = function(v$198){lab$foldR: while (true) {if (v$198 == null) {return v$196;
} else {var v$199 = v$198;
var v$200 = v$199[0];
var v$201 = v$199[1];
var y$203 = fix$229.$foldR(v$201);
return basis$List$.s$n$645([v$200,y$203]);
};
};
};
var foldR$197 = fix$229.$foldR;
t$228 = (function(v$217){return foldR$197(v$217);
});
var t$222;
var f$182;
var fix$221 = {};
fix$221.$plug = function(v$206){if (v$206 == null) {return [[v$126,null],null];
} else {var v$207 = v$206;
var v$208 = v$207[0];
var v$209 = v$207[1];
var t$226;
var t$225 = [v$126,v$206];
var t$223;
var l$210 = fix$221.$plug(v$209);
var fix$224 = {};
fix$224.$map = function(v$212){if (v$212 == null) {return null;
} else {var v$213 = v$212;
var v$214 = v$213[0];
var v$215 = v$213[1];
return [[v$208,v$214],fix$224.$map(v$215)];
};
};
var map$211 = fix$224.$map;
t$223 = (map$211(l$210));
t$226 = [t$225,t$223];
return t$226;
};
};
var plug$205 = fix$221.$plug;
f$182 = (function(v$218){return plug$205(v$218);
});
var l$183 = fix$220.$perms(v$127);
var fix$227 = {};
fix$227.$map = function(v$185){if (v$185 == null) {return null;
} else {var v$186 = v$185;
var v$187 = v$186[0];
var v$188 = v$186[1];
return [f$182(v$187),fix$227.$map(v$188)];
};
};
var map$184 = fix$227.$map;
t$222 = (map$184(l$183));
return t$228(t$222);
};
};
edlib$ListSort$.perms$115 = fix$220.$perms;
return 0;
})();