if ((typeof(js$XMLrpcClient$$1)) == "undefined") {js$XMLrpcClient$$1 = {};
};
(function(){js$XMLrpcClient$$1.setRequestHeaders$46 = function(r$49,sz$52){var l$133 = [["Content-Type","text/xml"],[["User-Agent","mlxmlrpc"],[["Content-Length",basis$Int32$.toString$449(sz$52)],null]]];
var fix$193 = {};
fix$193.$app = function(v$135){lab$app: while (true) {if (v$135 == null) {return 0;
} else {var v$136 = v$135;
var v$137 = v$136[0];
var v$138 = v$136[1];
js$Js$.setRequestHeader$528(r$49,v$137);
var t$194 = v$138;
var v$135 = t$194;
continue lab$app;
};
};
};
var app$134 = fix$193.$app;
return app$134(l$133);
};
js$XMLrpcClient$$1.makeRequest$53 = function(v$74,v$73){try {var r$58 = SmlPrims.newRequest();
js$Js$.openn$484(r$58,[false,"POST",v$73]);
var sz$141 = v$74.length;
var l$143 = [["Content-Type","text/xml"],[["User-Agent","mlxmlrpc"],[["Content-Length",basis$Int32$.toString$449(sz$141)],null]]];
var fix$196 = {};
fix$196.$app = function(v$145){lab$app: while (true) {if (v$145 == null) {return 0;
} else {var v$146 = v$145;
var v$147 = v$146[0];
var v$148 = v$146[1];
js$Js$.setRequestHeader$528(r$58,v$147);
var t$197 = v$148;
var v$145 = t$197;
continue lab$app;
};
};
};
var app$144 = fix$196.$app;
app$144(l$143);
js$Js$.send$502(r$58,[0,v$74]);
var res$62 = (function(r){return SmlPrims.option(r.responseText);})(r$58);
switch (res$62[0]) { case 0: {return res$62[1];
 break; }default: {throw [basis$Initial$.en$Fail$45,"makeRequest.no response; state=" + (basis$Int32$.toString$449((function(r){return r.readyState;})(r$58)))];
} };
} catch(v$195) {return (function(e$72){throw [basis$Initial$.en$Fail$45,"makeRequest: " + e$72[0]];
})(v$195);
};
};
js$XMLrpcClient$$1.makeRequestAsync$75 = function(v$104,v$103,v$102){var r$81 = SmlPrims.newRequest();
js$Js$.openn$484(r$81,[true,"POST",v$102]);
var sz$157 = v$103.length;
var l$159 = [["Content-Type","text/xml"],[["User-Agent","mlxmlrpc"],[["Content-Length",basis$Int32$.toString$449(sz$157)],null]]];
var fix$198 = {};
fix$198.$app = function(v$161){lab$app: while (true) {if (v$161 == null) {return 0;
} else {var v$162 = v$161;
var v$163 = v$162[0];
var v$164 = v$162[1];
js$Js$.setRequestHeader$528(r$81,v$163);
var t$199 = v$164;
var v$161 = t$199;
continue lab$app;
};
};
};
var app$160 = fix$198.$app;
app$160(l$159);
js$Js$.onStateChange$557(r$81,function(v$86){if (((function(r){return r.readyState;})(r$81)) > 3) {var t$200;
var v$177 = (function(r){return SmlPrims.option(r.status);})(r$81);
var v$178 = [0,200];
var v$191 = [v$177,v$178];
t$200 = (basis$General$.eq_option$251(function(v$192){return v$192[0] == v$192[1];
},v$191));
if (t$200) {var v$99 = (function(r){return SmlPrims.option(r.responseText);})(r$81);
switch (v$99[0]) { case 0: {var v$101 = v$99[1];
return v$104(v$101);
 break; }default: {throw [basis$Initial$.en$Fail$45,"makeRequestAsync.no response text"];
} };
} else {throw [basis$Initial$.en$Fail$45,"makeRequestAsync.status not 200"];
};
} else {return 0;
};
});
return js$Js$.send$502(r$81,[0,v$103]);
};
return 0;
})();
