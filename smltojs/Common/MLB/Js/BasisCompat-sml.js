if ((typeof(tools$BasisCompat$)) == "undefined") {tools$BasisCompat$ = {};
};
(function(){tools$BasisCompat$.en$UnequalLengths$45 = new String("UnequalLengths");
tools$BasisCompat$.exn$UnequalLengths$45 = [tools$BasisCompat$.en$UnequalLengths$45];
tools$BasisCompat$.zipEq$46 = function(v$90,v$91){var fix$123 = {};
fix$123.$h = function(v$54,v$57,v$60){lab$h: while (true) {if (v$54 == null) {if (v$57 == null) {return basis$List$.rev$248(v$60);
} else {throw tools$BasisCompat$.exn$UnequalLengths$45;
};
} else {if (v$57 == null) {throw tools$BasisCompat$.exn$UnequalLengths$45;
} else {var v$79 = v$54;
var v$80 = v$79[0];
var v$81 = v$79[1];
var v$82 = v$57;
var v$83 = v$82[0];
var v$84 = v$82[1];
var t$124 = v$81;
var t$125 = v$84;
var t$126 = [[v$80,v$83],v$60];
var v$54 = t$124;
var v$57 = t$125;
var v$60 = t$126;
continue lab$h;
};
};
};
};
var h$51 = fix$123.$h;
return h$51(v$90,v$91,null);
};
return 0;
})();
