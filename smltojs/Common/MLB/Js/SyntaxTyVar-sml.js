if ((typeof(syntax_objects$SyntaxTyVar$)) == "undefined") {syntax_objects$SyntaxTyVar$ = {};
};
(function(){syntax_objects$SyntaxTyVar$.eq_SyntaxTyVar$116 = function(v$118,v$119){switch (v$119[0]) { case 0: {return v$118[1] == v$119[1];
 break; }default: {return false;
} };
};
syntax_objects$SyntaxTyVar$.mk_TyVar$49 = function(v$50){return [0,v$50];
};
syntax_objects$SyntaxTyVar$.pr_tyvar$51 = function(v$54){return v$54[1];
};
syntax_objects$SyntaxTyVar$.isEquality$59 = function(v$62){var v$83 = v$62[1];
var v$73;
var fix$134 = {};
fix$134.$h = function(v$126,v$127){lab$h: while (true) {if (v$126 < 0) {return v$127;
} else {var t$135 = SmlPrims.chk_ovf_i32(v$126 - 1);
var t$136 = [v$83.charCodeAt(v$126),v$127];
var v$126 = t$135;
var v$127 = t$136;
continue lab$h;
};
};
};
var h$124 = fix$134.$h;
v$73 = (h$124(SmlPrims.chk_ovf_i32(v$83.length - 1),null));
if (v$73 == null) {return false;
} else {var v$75 = v$73;
switch (v$75[0]) { case 39: {var v$77 = v$75[1];
if (v$77 == null) {return false;
} else {var v$79 = v$77;
switch (v$79[0]) { case 39: {return true;
 break; }default: {return false;
} };
};
 break; }default: {return false;
} };
};
};
syntax_objects$SyntaxTyVar$.pu$84 = pickle$pickle$.convert$2333([function(v$85){return [0,v$85];
},function(v$88){return v$88[1];
}],pickle$pickle$.string$900);
return 0;
})();
