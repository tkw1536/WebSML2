if ((typeof(syntax_objects$SCon$)) == "undefined") {syntax_objects$SCon$ = {};
};
(function(){var eq_intinf$232 = function(v$234,v$235){switch (v$235[0]) { case 0: {var v$236 = v$234[1];
var v$237 = v$235[1];
var t$351;
var fix$348 = {};
fix$348.$eq_list = function(v$265,v$266){lab$eq_list: while (true) {if (v$265 == null) {return (v$266 == null)?true:false;
} else {if (v$266 == null) {return false;
} else {var v$267 = v$265;
var v$268 = v$266;
if (v$267[0] == v$268[0]) {var t$349 = v$267[1];
var t$350 = v$268[1];
var v$265 = t$349;
var v$266 = t$350;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$263 = fix$348.$eq_list;
t$351 = (eq_list$263(v$236[0],v$237[0]));
return t$351?(v$236[1] == v$237[1]):false;
 break; }default: {return false;
} };
};
syntax_objects$SCon$.eq_scon$241 = function(v$243,v$244){switch (v$243[0]) { case 0: {switch (v$244[0]) { case 0: {return v$243[1] == v$244[1];
 break; }default: {return false;
} };
 break; }case 1: {switch (v$244[0]) { case 1: {return v$243[1] == v$244[1];
 break; }default: {return false;
} };
 break; }case 2: {switch (v$244[0]) { case 2: {return v$243[1] == v$244[1];
 break; }default: {return false;
} };
 break; }case 3: {switch (v$244[0]) { case 3: {var v$254 = v$243[1];
var v$255 = v$244[1];
return eq_intinf$232(v$254,v$255);
 break; }default: {return false;
} };
 break; }case 4: {switch (v$244[0]) { case 4: {return v$243[1] == v$244[1];
 break; }default: {return false;
} };
 break; } };
};
syntax_objects$SCon$.lt$71 = function(v$103,v$346){switch (v$103[0]) { case 3: {switch (v$346[0]) { case 3: {var v$125 = v$103[1];
var v$126 = v$346[1];
return basis$IntInf$.s$j$2213([v$125,v$126]);
 break; }default: {var t$359;
switch (v$103[0]) { case 3: {t$359 = 0;
 break; }case 1: {t$359 = 1;
 break; }case 2: {t$359 = 2;
 break; }case 0: {t$359 = 3;
 break; }default: {t$359 = 4;
} };
var t$358;
switch (v$346[0]) { case 3: {t$358 = 0;
 break; }case 1: {t$358 = 1;
 break; }case 2: {t$358 = 2;
 break; }case 0: {t$358 = 3;
 break; }default: {t$358 = 4;
} };
return t$359 < t$358;
} };
 break; }case 1: {switch (v$346[0]) { case 1: {return v$103[1] < v$346[1];
 break; }default: {var t$357;
switch (v$103[0]) { case 3: {t$357 = 0;
 break; }case 1: {t$357 = 1;
 break; }case 2: {t$357 = 2;
 break; }case 0: {t$357 = 3;
 break; }default: {t$357 = 4;
} };
var t$356;
switch (v$346[0]) { case 3: {t$356 = 0;
 break; }case 1: {t$356 = 1;
 break; }case 2: {t$356 = 2;
 break; }case 0: {t$356 = 3;
 break; }default: {t$356 = 4;
} };
return t$357 < t$356;
} };
 break; }case 2: {switch (v$346[0]) { case 2: {return v$103[1] < v$346[1];
 break; }default: {var t$355;
switch (v$103[0]) { case 3: {t$355 = 0;
 break; }case 1: {t$355 = 1;
 break; }case 2: {t$355 = 2;
 break; }case 0: {t$355 = 3;
 break; }default: {t$355 = 4;
} };
var t$354;
switch (v$346[0]) { case 3: {t$354 = 0;
 break; }case 1: {t$354 = 1;
 break; }case 2: {t$354 = 2;
 break; }case 0: {t$354 = 3;
 break; }default: {t$354 = 4;
} };
return t$355 < t$354;
} };
 break; }case 0: {switch (v$346[0]) { case 0: {return v$103[1] < v$346[1];
 break; }default: {var t$353;
switch (v$103[0]) { case 3: {t$353 = 0;
 break; }case 1: {t$353 = 1;
 break; }case 2: {t$353 = 2;
 break; }case 0: {t$353 = 3;
 break; }default: {t$353 = 4;
} };
var t$352;
switch (v$346[0]) { case 3: {t$352 = 0;
 break; }case 1: {t$352 = 1;
 break; }case 2: {t$352 = 2;
 break; }case 0: {t$352 = 3;
 break; }default: {t$352 = 4;
} };
return t$353 < t$352;
} };
 break; }default: {switch (v$346[0]) { case 4: {return v$103[1] < v$346[1];
 break; }default: {var t$361;
switch (v$103[0]) { case 3: {t$361 = 0;
 break; }case 1: {t$361 = 1;
 break; }case 2: {t$361 = 2;
 break; }case 0: {t$361 = 3;
 break; }default: {t$361 = 4;
} };
var t$360;
switch (v$346[0]) { case 3: {t$360 = 0;
 break; }case 1: {t$360 = 1;
 break; }case 2: {t$360 = 2;
 break; }case 0: {t$360 = 3;
 break; }default: {t$360 = 4;
} };
return t$361 < t$360;
} };
} };
};
syntax_objects$SCon$.pr_scon$131 = function(v$134){switch (v$134[0]) { case 3: {var v$157 = v$134[1];
return basis$IntInf$.toString$2342(v$157);
 break; }case 0: {var v$155 = v$134[1];
return basis$Word32$.toString$430(v$155);
 break; }case 1: {var v$153 = v$134[1];
return ("\"" + (basis$String$.toString$437(v$153))) + "\"";
 break; }case 4: {var v$151 = v$134[1];
return ("#\"" + (SmlPrims.implode([basis$General$.chr$187(v$151),null]))) + "\"";
 break; }default: {return v$134[1];
} };
};
syntax_objects$SCon$.eq$159 = function(v$189,v$347){switch (v$189[0]) { case 3: {switch (v$347[0]) { case 3: {var v$209 = v$189[1];
var v$210 = v$347[1];
return eq_intinf$232(v$209,v$210);
 break; }default: {return false;
} };
 break; }case 0: {switch (v$347[0]) { case 0: {return v$189[1] == v$347[1];
 break; }default: {return false;
} };
 break; }case 1: {switch (v$347[0]) { case 1: {return v$189[1] == v$347[1];
 break; }default: {return false;
} };
 break; }case 4: {switch (v$347[0]) { case 4: {return v$189[1] == v$347[1];
 break; }default: {return false;
} };
 break; }default: {switch (v$347[0]) { case 2: {return v$189[1] == v$347[1];
 break; }default: {return false;
} };
} };
};
return 0;
})();
