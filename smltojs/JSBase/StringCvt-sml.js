if ((typeof(basis$StringCvt$)) == "undefined") {basis$StringCvt$ = {};
};
(function(){basis$StringCvt$.eq_radix$297 = function(v$299,v$300){switch (v$299) { case 0: {switch (v$300) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$300) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$300) { case 2: {return true;
 break; }default: {return false;
} };
 break; }case 3: {switch (v$300) { case 3: {return true;
 break; }default: {return false;
} };
 break; } };
};
basis$StringCvt$.eq_realfmt$301 = function(v$303,v$304){switch (v$303[0]) { case 0: {switch (v$304[0]) { case 0: {var v$305 = v$303[1];
var v$306 = v$304[1];
return basis$General$.eq_option$251(function(v$307){return v$307[0] == v$307[1];
},[v$305,v$306]);
 break; }default: {return false;
} };
 break; }case 1: {switch (v$304[0]) { case 1: {var v$308 = v$303[1];
var v$309 = v$304[1];
return basis$General$.eq_option$251(function(v$310){return v$310[0] == v$310[1];
},[v$308,v$309]);
 break; }default: {return false;
} };
 break; }case 2: {switch (v$304[0]) { case 2: {var v$311 = v$303[1];
var v$312 = v$304[1];
return basis$General$.eq_option$251(function(v$313){return v$313[0] == v$313[1];
},[v$311,v$312]);
 break; }default: {return false;
} };
 break; }case 3: {switch (v$304[0]) { case 3: {return true;
 break; }default: {return false;
} };
 break; } };
};
basis$StringCvt$.padLeft$106 = function(c$109,n$112,s$115){var ssize$116 = s$115.length;
var fix$353 = {};
fix$353.$f = function(v$120){switch (v$120) { case 0: {return null;
 break; }default: {return [c$109,fix$353.$f(SmlPrims.chk_ovf_i32(v$120 - 1))];
} };
};
var f$117 = fix$353.$f;
return (n$112 <= ssize$116)?s$115:(SmlPrims.concat([SmlPrims.implode(f$117(SmlPrims.chk_ovf_i32(n$112 - ssize$116))),[s$115,null]]));
};
basis$StringCvt$.padRight$130 = function(c$133,n$136,s$139){var ssize$140 = s$139.length;
var fix$354 = {};
fix$354.$f = function(v$144){switch (v$144) { case 0: {return null;
 break; }default: {return [c$133,fix$354.$f(SmlPrims.chk_ovf_i32(v$144 - 1))];
} };
};
var f$141 = fix$354.$f;
return (n$136 <= ssize$140)?s$139:(SmlPrims.concat([s$139,[SmlPrims.implode(f$141(SmlPrims.chk_ovf_i32(n$136 - ssize$140))),null]]));
};
basis$StringCvt$.scanString$154 = function(scan$157,s$160){var len$161 = s$160.length;
var v$174 = (scan$157(function(i$325){return (i$325 >= len$161)?[1]:[0,[basis$ByteTable$$5.sub$242(s$160,i$325),SmlPrims.chk_ovf_i32(i$325 + 1)]];
}))(0);
switch (v$174[0]) { case 1: {return [1];
 break; }default: {var v$175 = v$174[1];
var v$176 = v$175[0];
return [0,v$176];
} };
};
basis$StringCvt$.splitl$197 = function(p$200,getc$203,src$206){var fix$355 = {};
fix$355.$h = function(v$225,v$226){var v$217 = getc$203(v$226);
switch (v$217[0]) { case 1: {var t$359;
var t$358;
var fix$356 = {};
fix$356.$rev_rec = function(v$329){lab$rev_rec: while (true) {var v$330 = v$329[0];
if (v$330 == null) {return v$329;
} else {var v$331 = v$330;
var v$332 = v$331[0];
var v$333 = v$331[1];
var v$334 = v$329[1];
var t$357 = [v$333,[v$332,v$334]];
var v$329 = t$357;
continue lab$rev_rec;
};
};
};
var rev_rec$328 = fix$356.$rev_rec;
t$358 = (rev_rec$328([v$225,null]))[1];
t$359 = (SmlPrims.implode(t$358));
return [t$359,v$226];
 break; }default: {var v$222 = v$217[1];
var v$223 = v$222[0];
var v$224 = v$222[1];
if (p$200(v$223)) {return fix$355.$h([v$223,v$225],v$224);
} else {var t$363;
var t$362;
var fix$360 = {};
fix$360.$rev_rec = function(v$338){lab$rev_rec: while (true) {var v$339 = v$338[0];
if (v$339 == null) {return v$338;
} else {var v$340 = v$339;
var v$341 = v$340[0];
var v$342 = v$340[1];
var v$343 = v$338[1];
var t$361 = [v$342,[v$341,v$343]];
var v$338 = t$361;
continue lab$rev_rec;
};
};
};
var rev_rec$337 = fix$360.$rev_rec;
t$362 = (rev_rec$337([v$225,null]))[1];
t$363 = (SmlPrims.implode(t$362));
return [t$363,v$226];
};
} };
};
var h$207 = fix$355.$h;
return h$207(null,src$206);
};
basis$StringCvt$.takel$227 = function(p$230,getc$233,src$236){return (basis$StringCvt$.splitl$197(p$230,getc$233,src$236))[0];
};
basis$StringCvt$.dropl$241 = function(p$244,f$247,s$250){return (basis$StringCvt$.splitl$197(p$244,f$247,s$250))[1];
};
basis$StringCvt$.skipWS$267 = function(getc$270,s$346){return (basis$StringCvt$.splitl$197(function(c$352){return (c$352 == 32)?true:((9 <= c$352)?(c$352 <= 13):false);
},getc$270,s$346))[1];
};
return 0;
})();
