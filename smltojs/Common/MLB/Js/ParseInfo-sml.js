if ((typeof(basics$ParseInfo$)) == "undefined") {basics$ParseInfo$ = {};
};
(function(){basics$ParseInfo$.from_SourceInfo$58 = function(SourceInfo$61){return [0,[[1],SourceInfo$61]];
};
basics$ParseInfo$.plus_DFInfo$64 = function(v$67,v$70){var v$78 = v$67[1];
switch (v$78[0][0]) { case 1: {return [0,[[0,v$70],v$78[1]]];
 break; }default: {return tools$Crash$.impossible$50("ParseInfo.plus_DFInfo");
} };
};
basics$ParseInfo$.to_SourceInfo$84 = function(v$87){return v$87[1][1];
};
basics$ParseInfo$.to_DFInfo$93 = function(v$96){return v$96[1][0];
};
basics$ParseInfo$.layout$102 = function(v$105){var v$115 = v$105[1];
var v$116 = v$115[1];
var v$117 = v$115[0];
return [0,[[basics$SourceInfo$.layout$80(v$116),[tools$PrettyPrint$.layout_opt$195(function(v$151){return basics$DFInfo$.layout$81(v$151);
},v$117),null]],[0,"; "],"}",3,"ParseInfo{"]];
};
return 0;
})();
