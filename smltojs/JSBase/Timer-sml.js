if ((typeof(basis$Timer$)) == "undefined") {basis$Timer$ = {};
};
(function(){var CPUTimer$58 = function(v$73,v$74,v$75,v$76,v$77,v$78){var v$69 = basis$Time$.s$f$288(basis$Time$.fromSeconds$59(basis$IntInf$.fromInt$1820(v$77)),basis$Time$.fromMicroseconds$75(basis$IntInf$.fromInt$1820(v$78)));
var v$70 = basis$Time$.s$f$288(basis$Time$.fromSeconds$59(basis$IntInf$.fromInt$1820(v$75)),basis$Time$.fromMicroseconds$75(basis$IntInf$.fromInt$1820(v$76)));
return [basis$Time$.s$f$288(basis$Time$.fromSeconds$59(basis$IntInf$.fromInt$1820(v$73)),basis$Time$.fromMicroseconds$75(basis$IntInf$.fromInt$1820(v$74))),v$70,v$69];
};
basis$Timer$.startCPUTimer$79 = function(v$81){return CPUTimer$58(0,0,0,0,0,0);
};
basis$Timer$.checkCPUTimer$82 = function(v$107,v$106,v$105){var gc$95 = basis$Time$.s$g$302(basis$Time$.s$f$288(basis$Time$.fromSeconds$59(basis$IntInf$.fromInt$1820(0)),basis$Time$.fromMicroseconds$75(basis$IntInf$.fromInt$1820(0))),v$107);
var v$96 = basis$Time$.s$g$302(basis$Time$.s$f$288(basis$Time$.fromSeconds$59(basis$IntInf$.fromInt$1820(0)),basis$Time$.fromMicroseconds$75(basis$IntInf$.fromInt$1820(0))),v$105);
return [basis$Time$.s$f$288(basis$Time$.s$g$302(basis$Time$.s$f$288(basis$Time$.fromSeconds$59(basis$IntInf$.fromInt$1820(0)),basis$Time$.fromMicroseconds$75(basis$IntInf$.fromInt$1820(0))),v$106),gc$95),v$96];
};
basis$Timer$.startRealTimer$108 = function(v$110){return SmlPrims.getrealtime();
};
basis$Timer$.checkRealTimer$111 = function(time1$114){return basis$Time$.s$g$302(SmlPrims.getrealtime(),time1$114);
};
basis$Timer$.totalCPUTimer$115 = function(v$117){return CPUTimer$58(basis$Initial$.initial_rutime$73[0],basis$Initial$.initial_rutime$73[1],basis$Initial$.initial_rutime$73[2],basis$Initial$.initial_rutime$73[3],basis$Initial$.initial_rutime$73[4],basis$Initial$.initial_rutime$73[5]);
};
basis$Timer$.totalRealTimer$118 = function(v$120){return basis$Initial$.initial_realtime$72;
};
return 0;
})();
