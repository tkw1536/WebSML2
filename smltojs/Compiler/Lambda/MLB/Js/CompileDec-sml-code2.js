if ((typeof(compiler0$CompileDec$$2)) == "undefined") {compiler0$CompileDec$$2 = {};
};
(function(){compiler0$CompileDec$$2.eq_span$2508 = function(v$2510,v$2511){switch (v$2510[0]) { case 0: {switch (v$2511[0]) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$2511[0]) { case 1: {return v$2510[1] == v$2511[1];
 break; }default: {return false;
} };
 break; } };
};
compiler0$CompileDec$$2.eq_cmp$2515 = function(v$2517,v$2518){switch (v$2517) { case 0: {switch (v$2518) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$2518) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$2518) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
compiler0$CompileDec$$2.span_from_int$2048 = function(v$2049){return [1,v$2049];
};
compiler0$CompileDec$$2.span_infinite$2050 = [0];
compiler0$CompileDec$$2.span_256$2051 = [1,256];
compiler0$CompileDec$$2.span_1$2052 = [1,1];
compiler0$CompileDec$$2.span_eq$2053 = function(v$2056,v$2059){switch (v$2056[0]) { case 0: {switch (v$2059[0]) { case 0: {return true;
 break; }default: {return false;
} };
 break; }default: {switch (v$2059[0]) { case 1: {return v$2056[1] == v$2059[1];
 break; }default: {return false;
} };
} };
};
compiler0$CompileDec$$2.span_eq_int$2076 = function(v$2079,v$2082){switch (v$2079[0]) { case 0: {return false;
 break; }default: {return v$2079[1] == v$2082;
} };
};
compiler0$CompileDec$$2.string_from_con0$2098 = function(v$2101){switch (v$2101[0]) { case 3: {var v$2121 = v$2101[1];
var v$2122 = v$2121[1];
return ("Con {" + (syntax_objects$Ident$.pr_longid$62(v$2122))) + ", ...}";
 break; }case 1: {var v$2118 = v$2101[1];
var v$2119 = v$2118[0];
return "Scon " + (syntax_objects$SCon$.pr_scon$131(v$2119));
 break; }case 2: {var v$2115 = v$2101[1];
var v$2116 = v$2115[0];
return ("Excon {" + (syntax_objects$Ident$.pr_longid$62(v$2116))) + ", ...}";
 break; }default: {var v$2123 = v$2101[1];
var v$2124 = v$2123[0];
return ("Tuple {" + (basis$Int32$.toString$449(v$2124))) + "}";
} };
};
compiler0$CompileDec$$2.cmp_from_lt$2128 = function(lt$2131,v$2135){var v$2144 = v$2135[0];
var v$2145 = v$2135[1];
return (lt$2131([v$2144,v$2145]))?0:((lt$2131([v$2145,v$2144]))?1:2);
};
compiler0$CompileDec$$2.eq_from_cmp$2146 = function(x_cmp$2149,v$2153){var v$2158 = v$2153[0];
var v$2159 = v$2153[1];
switch (x_cmp$2149([v$2158,v$2159])) { case 2: {return true;
 break; }default: {return false;
} };
};
compiler0$CompileDec$$2.lt_from_cmp$2160 = function(x_cmp$2163,v$2167){var v$2174 = v$2167[0];
var v$2175 = v$2167[1];
switch (x_cmp$2163([v$2174,v$2175])) { case 0: {return true;
 break; }case 1: {return false;
 break; }default: {return false;
} };
};
compiler0$CompileDec$$2.int_cmp$2176 = function(v$2530,v$2531){return (v$2530 < v$2531)?0:((v$2531 < v$2530)?1:2);
};
compiler0$CompileDec$$2.lvar_cmp$2178 = function(v$2534,v$2535){var t$2811;
var v$2664 = v$2534[2];
var v$2665 = v$2535[2];
var v$2666 = v$2664[0][1];
var v$2667 = v$2666[0];
var v$2668 = v$2666[1];
var v$2669 = v$2665[0][1];
var v$2670 = v$2669[0];
var v$2671 = v$2669[1];
t$2811 = ((v$2667 < v$2670)?true:((v$2667 == v$2670)?(v$2668 < v$2671):false));
if (t$2811) {return 0;
} else {var t$2810;
var v$2675 = v$2535[2];
var v$2676 = v$2534[2];
var v$2677 = v$2675[0][1];
var v$2678 = v$2677[0];
var v$2679 = v$2677[1];
var v$2680 = v$2676[0][1];
var v$2681 = v$2680[0];
var v$2682 = v$2680[1];
t$2810 = ((v$2678 < v$2681)?true:((v$2678 == v$2681)?(v$2679 < v$2682):false));
return t$2810?1:2;
};
};
compiler0$CompileDec$$2.scon_cmp$2179 = function(v$2549,v$2550){return (syntax_objects$SCon$.lt$71(v$2549,v$2550))?0:((syntax_objects$SCon$.lt$71(v$2550,v$2549))?1:2);
};
compiler0$CompileDec$$2.longid_lt$2180 = function(v$2185,v$2186){return (syntax_objects$Ident$.pr_longid$62(v$2185)) < (syntax_objects$Ident$.pr_longid$62(v$2186));
};
compiler0$CompileDec$$2.longid_cmp$2187 = function(v$2553,v$2554){return ((syntax_objects$Ident$.pr_longid$62(v$2553)) < (syntax_objects$Ident$.pr_longid$62(v$2554)))?0:(((syntax_objects$Ident$.pr_longid$62(v$2554)) < (syntax_objects$Ident$.pr_longid$62(v$2553)))?1:2);
};
compiler0$CompileDec$$2.con_ord$2188 = function(v$2191){switch (v$2191[0]) { case 3: {return 0;
 break; }case 1: {return 1;
 break; }case 2: {return 2;
 break; }default: {return 3;
} };
};
compiler0$CompileDec$$2.con_cmp$2203 = function(v$2234,v$2802){switch (v$2234[0]) { case 3: {switch (v$2802[0]) { case 3: {var v$2255 = v$2234[1];
var v$2256 = v$2255[1];
var v$2259 = v$2802[1];
var v$2260 = v$2259[1];
return ((syntax_objects$Ident$.pr_longid$62(v$2256)) < (syntax_objects$Ident$.pr_longid$62(v$2260)))?0:(((syntax_objects$Ident$.pr_longid$62(v$2260)) < (syntax_objects$Ident$.pr_longid$62(v$2256)))?1:2);
 break; }default: {var v$2758;
switch (v$2234[0]) { case 3: {v$2758 = 0;
 break; }case 1: {v$2758 = 1;
 break; }case 2: {v$2758 = 2;
 break; }default: {v$2758 = 3;
} };
var v$2759;
switch (v$2802[0]) { case 3: {v$2759 = 0;
 break; }case 1: {v$2759 = 1;
 break; }case 2: {v$2759 = 2;
 break; }default: {v$2759 = 3;
} };
return (v$2758 < v$2759)?0:((v$2759 < v$2758)?1:2);
} };
 break; }case 1: {switch (v$2802[0]) { case 1: {var v$2248 = v$2234[1];
var v$2249 = v$2248[0];
var v$2250 = v$2802[1];
var v$2251 = v$2250[0];
return (syntax_objects$SCon$.lt$71(v$2249,v$2251))?0:((syntax_objects$SCon$.lt$71(v$2251,v$2249))?1:2);
 break; }default: {var v$2766;
switch (v$2234[0]) { case 3: {v$2766 = 0;
 break; }case 1: {v$2766 = 1;
 break; }case 2: {v$2766 = 2;
 break; }default: {v$2766 = 3;
} };
var v$2767;
switch (v$2802[0]) { case 3: {v$2767 = 0;
 break; }case 1: {v$2767 = 1;
 break; }case 2: {v$2767 = 2;
 break; }default: {v$2767 = 3;
} };
return (v$2766 < v$2767)?0:((v$2767 < v$2766)?1:2);
} };
 break; }case 0: {switch (v$2802[0]) { case 0: {var v$2238 = v$2234[1];
var v$2239 = v$2238[0];
var v$2240 = v$2802[1];
var v$2241 = v$2240[0];
return (v$2239 < v$2241)?0:((v$2241 < v$2239)?1:2);
 break; }default: {var v$2778;
switch (v$2234[0]) { case 3: {v$2778 = 0;
 break; }case 1: {v$2778 = 1;
 break; }case 2: {v$2778 = 2;
 break; }default: {v$2778 = 3;
} };
var v$2779;
switch (v$2802[0]) { case 3: {v$2779 = 0;
 break; }case 1: {v$2779 = 1;
 break; }case 2: {v$2779 = 2;
 break; }default: {v$2779 = 3;
} };
return (v$2778 < v$2779)?0:((v$2779 < v$2778)?1:2);
} };
 break; }default: {switch (v$2802[0]) { case 2: {var v$2265 = v$2234[1];
var v$2266 = v$2265[0];
var v$2267 = v$2802[1];
var v$2268 = v$2267[0];
return ((syntax_objects$Ident$.pr_longid$62(v$2266)) < (syntax_objects$Ident$.pr_longid$62(v$2268)))?0:(((syntax_objects$Ident$.pr_longid$62(v$2268)) < (syntax_objects$Ident$.pr_longid$62(v$2266)))?1:2);
 break; }default: {var v$2790;
switch (v$2234[0]) { case 3: {v$2790 = 0;
 break; }case 1: {v$2790 = 1;
 break; }case 2: {v$2790 = 2;
 break; }default: {v$2790 = 3;
} };
var v$2791;
switch (v$2802[0]) { case 3: {v$2791 = 0;
 break; }case 1: {v$2791 = 1;
 break; }case 2: {v$2791 = 2;
 break; }default: {v$2791 = 3;
} };
return (v$2790 < v$2791)?0:((v$2791 < v$2790)?1:2);
} };
} };
};
compiler0$CompileDec$$2.con_eq$2269 = function(v$2574,v$2575){switch (compiler0$CompileDec$$2.con_cmp$2203(v$2574,v$2575)) { case 2: {return true;
 break; }default: {return false;
} };
};
compiler0$CompileDec$$2.arity$2270 = function(v$2273){switch (v$2273[0]) { case 3: {var v$2300 = v$2273[1];
return v$2300[2]?0:1;
 break; }case 1: {return 0;
 break; }case 2: {var v$2291 = v$2273[1];
return v$2291[1]?0:1;
 break; }default: {return v$2273[1][0];
} };
};
compiler0$CompileDec$$2.span$2304 = function(v$2307){switch (v$2307[0]) { case 3: {return v$2307[1][3];
 break; }case 1: {var v$2333 = v$2307[1];
switch (v$2333[0][0]) { case 3: {return compiler0$CompileDec$$2.span_infinite$2050;
 break; }case 1: {return compiler0$CompileDec$$2.span_infinite$2050;
 break; }case 2: {return compiler0$CompileDec$$1.die$80("span: real scon in pattern");
 break; }case 4: {return compiler0$CompileDec$$2.span_256$2051;
 break; }default: {return compiler0$CompileDec$$2.span_infinite$2050;
} };
 break; }case 2: {return compiler0$CompileDec$$2.span_infinite$2050;
 break; }default: {return compiler0$CompileDec$$2.span_1$2052;
} };
};
compiler0$CompileDec$$2.lookupLvarDecon$2378 = function(e$2381,p$2384){var v$2389;
var t$2824 = compiler_objects$CompilerEnv$$7.lookupPath$4632;
var t$2823 = e$2381;
var t$2822;
var fix$2812 = {};
fix$2812.$pa = function(v$2581,v$2803){lab$pa: while (true) {if (v$2581 == null) {return [1,v$2803];
} else {var v$2582 = v$2581;
var v$2583 = v$2582[0];
var v$2584 = v$2582[1];
var v$2585 = v$2582[2];
var t$2819 = v$2585;
var t$2818;
var t$2817;
var t$2816 = v$2583;
var t$2815;
var t$2814;
var t$2813;
switch (v$2584[0]) { case 3: {t$2813 = 0;
 break; }case 1: {t$2813 = 1;
 break; }case 2: {t$2813 = 2;
 break; }default: {t$2813 = 3;
} };
t$2814 = [t$2813,v$2803];
t$2815 = t$2814;
t$2817 = [t$2816,t$2815];
t$2818 = t$2817;
var t$2820 = t$2819;
var t$2821 = t$2818;
var v$2581 = t$2820;
var v$2803 = t$2821;
continue lab$pa;
};
};
};
var pa$2579 = fix$2812.$pa;
t$2822 = (pa$2579(p$2384,null));
v$2389 = (t$2824(t$2823,t$2822));
switch (v$2389[0]) { case 0: {var v$2391 = v$2389[1];
var v$2392 = v$2391[0];
return [0,v$2392];
 break; }default: {return [1];
} };
};
compiler0$CompileDec$$2.declareLvarDecon$2393 = function(v$2399,v$2400,v$2401){var t$2836 = compiler_objects$CompilerEnv$$7.declarePath$4606;
var t$2835;
var fix$2825 = {};
fix$2825.$pa = function(v$2591,v$2804){lab$pa: while (true) {if (v$2591 == null) {return [1,v$2804];
} else {var v$2592 = v$2591;
var v$2593 = v$2592[0];
var v$2594 = v$2592[1];
var v$2595 = v$2592[2];
var t$2832 = v$2595;
var t$2831;
var t$2830;
var t$2829 = v$2593;
var t$2828;
var t$2827;
var t$2826;
switch (v$2594[0]) { case 3: {t$2826 = 0;
 break; }case 1: {t$2826 = 1;
 break; }case 2: {t$2826 = 2;
 break; }default: {t$2826 = 3;
} };
t$2827 = [t$2826,v$2804];
t$2828 = t$2827;
t$2830 = [t$2829,t$2828];
t$2831 = t$2830;
var t$2833 = t$2832;
var t$2834 = t$2831;
var v$2591 = t$2833;
var v$2804 = t$2834;
continue lab$pa;
};
};
};
var pa$2589 = fix$2825.$pa;
t$2835 = (pa$2589(v$2399,null));
return t$2836(t$2835,v$2400,[1,null],v$2401);
};
compiler0$CompileDec$$2.lookupPath$2402 = function(e$2405,p$2408){var t$2849 = compiler_objects$CompilerEnv$$7.lookupPath$4632;
var t$2848 = e$2405;
var t$2847;
var fix$2837 = {};
fix$2837.$pa = function(v$2601,v$2805){lab$pa: while (true) {if (v$2601 == null) {return [0,v$2805];
} else {var v$2602 = v$2601;
var v$2603 = v$2602[0];
var v$2604 = v$2602[1];
var v$2605 = v$2602[2];
var t$2844 = v$2605;
var t$2843;
var t$2842;
var t$2841 = v$2603;
var t$2840;
var t$2839;
var t$2838;
switch (v$2604[0]) { case 3: {t$2838 = 0;
 break; }case 1: {t$2838 = 1;
 break; }case 2: {t$2838 = 2;
 break; }default: {t$2838 = 3;
} };
t$2839 = [t$2838,v$2805];
t$2840 = t$2839;
t$2842 = [t$2841,t$2840];
t$2843 = t$2842;
var t$2845 = t$2844;
var t$2846 = t$2843;
var v$2601 = t$2845;
var v$2805 = t$2846;
continue lab$pa;
};
};
};
var pa$2599 = fix$2837.$pa;
t$2847 = (pa$2599(p$2408,null));
return t$2849(t$2848,t$2847);
};
compiler0$CompileDec$$2.declarePath$2409 = function(v$2416,v$2417,v$2418,v$2419){var t$2861 = compiler_objects$CompilerEnv$$7.declarePath$4606;
var t$2860;
var fix$2850 = {};
fix$2850.$pa = function(v$2611,v$2806){lab$pa: while (true) {if (v$2611 == null) {return [0,v$2806];
} else {var v$2612 = v$2611;
var v$2613 = v$2612[0];
var v$2614 = v$2612[1];
var v$2615 = v$2612[2];
var t$2857 = v$2615;
var t$2856;
var t$2855;
var t$2854 = v$2613;
var t$2853;
var t$2852;
var t$2851;
switch (v$2614[0]) { case 3: {t$2851 = 0;
 break; }case 1: {t$2851 = 1;
 break; }case 2: {t$2851 = 2;
 break; }default: {t$2851 = 3;
} };
t$2852 = [t$2851,v$2806];
t$2853 = t$2852;
t$2855 = [t$2854,t$2853];
t$2856 = t$2855;
var t$2858 = t$2857;
var t$2859 = t$2856;
var v$2611 = t$2858;
var v$2806 = t$2859;
continue lab$pa;
};
};
};
var pa$2609 = fix$2850.$pa;
t$2860 = (pa$2609(v$2416,null));
return t$2861(t$2860,v$2417,v$2418,v$2419);
};
var fix$2862 = {};
fix$2862.$string_from_path = function(v$2423){if (v$2423 == null) {return "Obj";
} else {var v$2432 = v$2423;
var v$2433 = v$2432[0];
var v$2434 = v$2432[1];
var v$2435 = v$2432[2];
return ((((("Access (" + (basis$Int32$.toString$449(v$2433))) + ", ") + (compiler0$CompileDec$$2.string_from_con0$2098(v$2434))) + ", ") + (fix$2862.$string_from_path(v$2435))) + ")";
};
};
compiler0$CompileDec$$2.string_from_path$2420 = fix$2862.$string_from_path;
var fix$2863 = {};
fix$2863.$path_cmp = function(v$2454,v$2807){lab$path_cmp: while (true) {if (v$2454 == null) {return (v$2807 == null)?2:0;
} else {if (v$2807 == null) {return 1;
} else {var v$2467 = v$2454;
var v$2468 = v$2467[0];
var v$2469 = v$2467[1];
var v$2470 = v$2467[2];
var v$2471 = v$2807;
var v$2472 = v$2471[0];
var v$2473 = v$2471[1];
var v$2474 = v$2471[2];
var v$2461 = (v$2468 < v$2472)?0:((v$2472 < v$2468)?1:2);
switch (v$2461) { case 2: {var v$2466 = compiler0$CompileDec$$2.con_cmp$2203(v$2469,v$2473);
switch (v$2466) { case 2: {var t$2864 = v$2470;
var t$2865 = v$2474;
var v$2454 = t$2864;
var v$2807 = t$2865;
continue lab$path_cmp;
 break; }default: {return v$2466;
} };
 break; }default: {return v$2461;
} };
};
};
};
};
compiler0$CompileDec$$2.path_cmp$2436 = fix$2863.$path_cmp;
compiler0$CompileDec$$2.path_eq$2475 = function(v$2625,v$2626){switch (compiler0$CompileDec$$2.path_cmp$2436(v$2625,v$2626)) { case 2: {return true;
 break; }default: {return false;
} };
};
compiler0$CompileDec$$2.string_from_rhs$2476 = function(v$2809){return basis$Int32$.toString$449(v$2809);
};
compiler0$CompileDec$$2.string_from_rhs$$2477 = function(v$2808,v$2481){return basis$Int32$.toString$449(v$2481);
};
return 0;
})();
