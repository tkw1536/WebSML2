if ((typeof(basics$OpacityEnv$$4)) == "undefined") {basics$OpacityEnv$$4 = {};
};
(function(){basics$OpacityEnv$$4.from_rea$2208 = function(rea$2211){return [basics$OpacityEnv$$3.empty$157(0),rea$2211];
};
basics$OpacityEnv$$4.from_funid$2212 = function(v$2218,v$2219){var v$2220 = v$2219[0];
var v$2221 = v$2219[1];
return [basics$OpacityEnv$$3.add$433(v$2218,[v$2220,v$2221],basics$OpacityEnv$$3.empty$157(0)),basics$StatObject$.Id$4212];
};
basics$OpacityEnv$$4.rea_of$2222 = function(v$2449,v$2450){return v$2450;
};
basics$OpacityEnv$$4.lookup_funid$2227 = function(v$2234,v$2451){return function(funid$2233){return basics$OpacityEnv$$3.lookup$173(v$2234,funid$2233);
};
};
basics$OpacityEnv$$4.empty$2235 = function(v$2467){return [basics$OpacityEnv$$3.empty$157(0),basics$StatObject$.Id$4212];
};
basics$OpacityEnv$$4.initial$2236 = function(v$2468){return basics$OpacityEnv$$4.empty$2235(0);
};
basics$OpacityEnv$$4.plus$2237 = function(v$2244,v$2452){var v$2245 = v$2244[0];
var v$2246 = v$2244[1];
var v$2248 = v$2452[0];
var v$2249 = v$2452[1];
return [basics$OpacityEnv$$3.plus$445(v$2245,v$2248),basics$StatObject$.oo$4663(v$2246,v$2249)];
};
basics$OpacityEnv$$4.eq_fe_entry$2250 = function(v$2261,v$2453){var v$2262 = v$2261[0];
var v$2263 = v$2261[1];
var v$2265 = v$2453[0];
var v$2266 = v$2453[1];
if (special_objects$TyName$$3.eq$2996(v$2262,v$2265)) {return basics$StatObject$.eq$4708(v$2263,v$2266);
} else {return false;
};
};
basics$OpacityEnv$$4.enrich$2267 = function(v$2279,v$2454){var v$2280 = v$2279[0];
var v$2281 = v$2279[1];
var v$2283 = v$2454[0];
var v$2284 = v$2283[0];
var v$2285 = v$2283[1];
var v$2286 = v$2454[1];
if (basics$OpacityEnv$$3.enrich$1248(function(v$2401){var v$2402 = v$2401[0];
var v$2403 = v$2402[0];
var v$2404 = v$2402[1];
var v$2405 = v$2401[1];
var v$2406 = v$2405[0];
var v$2407 = v$2405[1];
if (special_objects$TyName$$3.eq$2996(v$2403,v$2406)) {return basics$StatObject$.eq$4708(v$2404,v$2407);
} else {return false;
};
},[v$2280,v$2284])) {return basics$StatObject$.enrich$4688(v$2281,[v$2285,v$2286]);
} else {return false;
};
};
basics$OpacityEnv$$4.eq$2287 = function(v$2302,v$2455){var v$2303 = v$2302[0];
var v$2304 = v$2302[1];
var v$2306 = v$2455[0];
var v$2307 = v$2455[1];
if (basics$OpacityEnv$$3.enrich$1248(function(v$2408){var v$2409 = v$2408[0];
var v$2410 = v$2409[0];
var v$2411 = v$2409[1];
var v$2412 = v$2408[1];
var v$2413 = v$2412[0];
var v$2414 = v$2412[1];
if (special_objects$TyName$$3.eq$2996(v$2410,v$2413)) {return basics$StatObject$.eq$4708(v$2411,v$2414);
} else {return false;
};
},[v$2303,v$2306])) {var t$2472;
var v$2439 = basics$OpacityEnv$$3.dom$773(v$2303);
var v$2440 = basics$OpacityEnv$$3.dom$773(v$2306);
var fix$2473 = {};
fix$2473.$eq_list = function(v$2460,v$2461){lab$eq_list: while (true) {if (v$2460 == null) {return (v$2461 == null)?true:false;
} else {if (v$2461 == null) {return false;
} else {var v$2462 = v$2460;
var v$2463 = v$2461;
if (syntax_objects$FunId$.eq_funid$100(v$2462[0],v$2463[0])) {var t$2474 = v$2462[1];
var t$2475 = v$2463[1];
var v$2460 = t$2474;
var v$2461 = t$2475;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$2459 = fix$2473.$eq_list;
t$2472 = (eq_list$2459(v$2439,v$2440));
if (t$2472) {return basics$StatObject$.eq$4708(v$2304,v$2307);
} else {return false;
};
} else {return false;
};
};
basics$OpacityEnv$$4.restrict$2308 = function(v$2319,v$2457){var v$2320 = v$2319[0];
var v$2321 = v$2319[1];
var v$2323 = v$2457[0];
var v$2324 = v$2457[1];
try {return [basics$OpacityEnv$$3.restrict$1226(function(v$2469){return syntax_objects$FunId$.pr_FunId$51(v$2469);
},v$2320,v$2323),basics$StatObject$.restrict$4280(v$2324,v$2321)];
} catch(v$2476) {return (function(v$2318){var t$2477 = v$2318;
if (t$2477[0] == basics$OpacityEnv$$3.en$Restrict$1225) {var s$2315 = v$2318[1];
return basics$OpacityEnv$$1.die$54(("restrict; funid " + s$2315) + " is not in the environment");
} else {throw v$2318;
};
})(v$2476);
};
};
basics$OpacityEnv$$4.match$2325 = function(v$2332,v$2458){var v$2334 = v$2332[1];
var v$2337 = v$2458[1];
return basics$StatObject$.match$4725(v$2334,v$2337);
};
basics$OpacityEnv$$4.layout_fe_entry$2338 = function(v$2351,v$2352){var t$2478;
var v$2348 = [0,"]"];
t$2478 = [[((special_objects$TyName$$3.layoutSet$3021("}",",","{"))(function(v$2470){return special_objects$TyName$$4.layout$3528(v$2470);
}))(v$2351),[basics$StatObject$.layout$4649(v$2352),null]],v$2348,"",1,"["];
return [0,t$2478];
};
basics$OpacityEnv$$4.layout_fe$2353 = function(fe$2356){return (((basics$OpacityEnv$$3.layoutMap$1278(" -> ","}",",","{"))(function(x$2432){var v$2448 = syntax_objects$FunId$.pr_FunId$51(x$2432);
return [1,v$2448];
}))(function(v$2433){var v$2434 = v$2433[0];
var v$2435 = v$2433[1];
var t$2479;
var v$2436 = [0,"]"];
t$2479 = [[((special_objects$TyName$$3.layoutSet$3021("}",",","{"))(function(v$2471){return special_objects$TyName$$4.layout$3528(v$2471);
}))(v$2434),[basics$StatObject$.layout$4649(v$2435),null]],v$2436,"",1,"["];
return [0,t$2479];
}))(fe$2356);
};
basics$OpacityEnv$$4.layout$2362 = function(v$2372,v$2373){var t$2480;
var v$2369 = [0,","];
t$2480 = [[basics$OpacityEnv$$4.layout_fe$2353(v$2372),[basics$StatObject$.layout$4649(v$2373),null]],v$2369,")",1,"OPAQ_ENV("];
return [0,t$2480];
};
basics$OpacityEnv$$4.pu$2374 = pickle$pickle$.pairGen$1044([basics$OpacityEnv$$3.pu$1323(syntax_objects$FunId$.pu$68,pickle$pickle$.pairGen$1044([special_objects$TyName$$3.pu$3087(special_objects$TyName$$1.pu$366),basics$StatObject$.pu$4792])),basics$StatObject$.pu$4792]);
return 0;
})();
