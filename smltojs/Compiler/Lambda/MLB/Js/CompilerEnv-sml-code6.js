if ((typeof(compiler_objects$CompilerEnv$$6)) == "undefined") {compiler_objects$CompilerEnv$$6 = {};
};
(function(){compiler_objects$CompilerEnv$$6.eq_bal$3716 = function(v$3718,v$3719){switch (v$3718) { case 0: {switch (v$3719) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$3719) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$3719) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
var fix$4338 = {};
fix$4338.$eq_tree = function(v$3724,v$3725,v$3721){lab$eq_tree: while (true) {var v$3722 = v$3721[0];
var v$3723 = v$3721[1];
if (v$3722 == null) {return (v$3723 == null)?true:false;
} else {if (v$3723 == null) {return false;
} else {var v$3726 = v$3722;
var v$3727 = v$3723;
if (v$3724([v$3726[0],v$3727[0]])) {if (v$3725([v$3726[1],v$3727[1]])) {if (fix$4338.$eq_tree(v$3724,v$3725,[v$3726[2],v$3727[2]])) {var t$4339 = v$3724;
var t$4340 = v$3725;
var t$4341 = [v$3726[3],v$3727[3]];
var v$3724 = t$4339;
var v$3725 = t$4340;
var v$3721 = t$4341;
continue lab$eq_tree;
} else {return false;
};
} else {return false;
};
} else {return false;
};
};
};
};
};
compiler_objects$CompilerEnv$$6.eq_tree$3720 = fix$4338.$eq_tree;
compiler_objects$CompilerEnv$$6.die$2447 = function(s$2450){return tools$Crash$.impossible$50("OrderFinMap." + s$2450);
};
compiler_objects$CompilerEnv$$6.s$j$2451 = function(v$2456,v$2457){return compiler_objects$CompilerEnv$$5.lt$2405(v$2456,v$2457);
};
compiler_objects$CompilerEnv$$6.lt$2458 = function(v$3731,v$3732){return compiler_objects$CompilerEnv$$5.lt$2405(v$3731,v$3732);
};
compiler_objects$CompilerEnv$$6.eq$2459 = function(v$2468,v$2469){return ((compiler_objects$CompilerEnv$$5.lt$2405(v$2468,v$2469))?true:(compiler_objects$CompilerEnv$$5.lt$2405(v$2469,v$2468)))?false:true;
};
compiler_objects$CompilerEnv$$6.empty$2475 = function(v$4337){return null;
};
compiler_objects$CompilerEnv$$6.singleton$2476 = function(v$4329,v$4330){return [v$4329,v$4330,null,null,2];
};
compiler_objects$CompilerEnv$$6.isEmpty$2483 = function(v$2486){return (v$2486 == null)?true:false;
};
compiler_objects$CompilerEnv$$6.lookup$2491 = function(t$2494,key$2497){var fix$4342 = {};
fix$4342.$search = function(v$2501){lab$search: while (true) {if (v$2501 == null) {return [1];
} else {var v$2518 = v$2501;
var v$2519 = v$2518[0];
var v$2520 = v$2518[1];
var v$2521 = v$2518[2];
var v$2522 = v$2518[3];
if (compiler_objects$CompilerEnv$$5.lt$2405(key$2497,v$2519)) {var t$4343 = v$2521;
var v$2501 = t$4343;
continue lab$search;
} else {if (compiler_objects$CompilerEnv$$5.lt$2405(v$2519,key$2497)) {var t$4344 = v$2522;
var v$2501 = t$4344;
continue lab$search;
} else {return [0,v$2520];
};
};
};
};
};
var search$2498 = fix$4342.$search;
return search$2498(t$2494);
};
compiler_objects$CompilerEnv$$6.en$Impossible$2523 = new String("Impossible");
compiler_objects$CompilerEnv$$6.impossible$2524 = function(s$2527){throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMap" + s$2527];
};
var en$ALREADYTHERE$2528 = new String("ALREADYTHERE");
var exn$ALREADYTHERE$2528 = [en$ALREADYTHERE$2528];
compiler_objects$CompilerEnv$$6.add$2751 = function(v$2760,v$2761,v$2762){try {var fix$4346 = {};
fix$4346.$ins = function(v$3817){if (v$3817 == null) {return [true,[v$2760,v$2761,null,null,2]];
} else {var v$3818 = v$3817;
var v$3819 = v$3818[0];
var v$3820 = v$3818[1];
var v$3821 = v$3818[2];
var v$3822 = v$3818[3];
var v$3823 = v$3818[4];
if (compiler_objects$CompilerEnv$$5.lt$2405(v$2760,v$3819)) {var v$3827 = fix$4346.$ins(v$3821);
var v$3828 = v$3827[0];
var v$3829 = v$3827[1];
switch (v$3823) { case 2: {return v$3828?[true,[v$3819,v$3820,v$3829,v$3822,1]]:[false,[v$3819,v$3820,v$3829,v$3822,2]];
 break; }case 0: {return v$3828?[false,[v$3819,v$3820,v$3829,v$3822,2]]:[false,[v$3819,v$3820,v$3829,v$3822,0]];
 break; }default: {if (v$3828) {var v$3831;
if (v$3829 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMapAVLfinmap 1"];
} else {v$3831 = v$3829;
};
var v$3834 = v$3831[0];
var v$3835 = v$3831[1];
var v$3836 = v$3831[2];
var v$3837 = v$3831[3];
var v$3838 = v$3831[4];
var t$4347;
var v$4084 = 1;
switch (v$3838) { case 0: {switch (v$4084) { case 0: {t$4347 = true;
 break; }default: {t$4347 = false;
} };
 break; }case 1: {switch (v$4084) { case 1: {t$4347 = true;
 break; }default: {t$4347 = false;
} };
 break; }case 2: {switch (v$4084) { case 2: {t$4347 = true;
 break; }default: {t$4347 = false;
} };
 break; } };
if (t$4347) {return [false,[v$3834,v$3835,v$3836,[v$3819,v$3820,v$3837,v$3822,2],2]];
} else {var v$3846;
if (v$3837 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMapAVLfinmap 2"];
} else {v$3846 = v$3837;
};
var v$3849 = v$3846[0];
var v$3850 = v$3846[1];
var v$3851 = v$3846[2];
var v$3852 = v$3846[3];
var v$3853 = v$3846[4];
var t$4368 = false;
var t$4367;
var t$4366;
var t$4365 = v$3849;
var t$4364 = v$3850;
var t$4363;
var t$4362;
var t$4361 = v$3834;
var t$4360 = v$3835;
var t$4359 = v$3836;
var t$4358 = v$3851;
var t$4357;
var t$4356;
var v$4090 = 0;
switch (v$3853) { case 0: {switch (v$4090) { case 0: {t$4356 = true;
 break; }default: {t$4356 = false;
} };
 break; }case 1: {switch (v$4090) { case 1: {t$4356 = true;
 break; }default: {t$4356 = false;
} };
 break; }case 2: {switch (v$4090) { case 2: {t$4356 = true;
 break; }default: {t$4356 = false;
} };
 break; } };
t$4357 = (t$4356?1:2);
t$4362 = [t$4361,t$4360,t$4359,t$4358,t$4357];
t$4363 = t$4362;
var t$4355;
var t$4354;
var t$4353 = v$3819;
var t$4352 = v$3820;
var t$4351 = v$3852;
var t$4350 = v$3822;
var t$4349;
var t$4348;
var v$4094 = 1;
switch (v$3853) { case 0: {switch (v$4094) { case 0: {t$4348 = true;
 break; }default: {t$4348 = false;
} };
 break; }case 1: {switch (v$4094) { case 1: {t$4348 = true;
 break; }default: {t$4348 = false;
} };
 break; }case 2: {switch (v$4094) { case 2: {t$4348 = true;
 break; }default: {t$4348 = false;
} };
 break; } };
t$4349 = (t$4348?0:2);
t$4354 = [t$4353,t$4352,t$4351,t$4350,t$4349];
t$4355 = t$4354;
t$4366 = [t$4365,t$4364,t$4363,t$4355,2];
t$4367 = t$4366;
return [t$4368,t$4367];
};
} else {return [false,[v$3819,v$3820,v$3829,v$3822,1]];
};
} };
} else {if (compiler_objects$CompilerEnv$$5.lt$2405(v$3819,v$2760)) {var v$3871 = fix$4346.$ins(v$3822);
var v$3872 = v$3871[0];
var v$3873 = v$3871[1];
switch (v$3823) { case 2: {return v$3872?[true,[v$3819,v$3820,v$3821,v$3873,0]]:[false,[v$3819,v$3820,v$3821,v$3873,2]];
 break; }case 1: {return v$3872?[false,[v$3819,v$3820,v$3821,v$3873,2]]:[false,[v$3819,v$3820,v$3821,v$3873,1]];
 break; }default: {if (v$3872) {var v$3875;
if (v$3873 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMapAVLfinmap 3"];
} else {v$3875 = v$3873;
};
var v$3878 = v$3875[0];
var v$3879 = v$3875[1];
var v$3880 = v$3875[2];
var v$3881 = v$3875[3];
var v$3882 = v$3875[4];
var t$4369;
var v$4104 = 0;
switch (v$3882) { case 0: {switch (v$4104) { case 0: {t$4369 = true;
 break; }default: {t$4369 = false;
} };
 break; }case 1: {switch (v$4104) { case 1: {t$4369 = true;
 break; }default: {t$4369 = false;
} };
 break; }case 2: {switch (v$4104) { case 2: {t$4369 = true;
 break; }default: {t$4369 = false;
} };
 break; } };
if (t$4369) {return [false,[v$3878,v$3879,[v$3819,v$3820,v$3821,v$3880,2],v$3881,2]];
} else {var v$3890;
if (v$3880 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMapAVLfinmap 4"];
} else {v$3890 = v$3880;
};
var v$3893 = v$3890[0];
var v$3894 = v$3890[1];
var v$3895 = v$3890[2];
var v$3896 = v$3890[3];
var v$3897 = v$3890[4];
var t$4390 = false;
var t$4389;
var t$4388;
var t$4387 = v$3893;
var t$4386 = v$3894;
var t$4385;
var t$4384;
var t$4383 = v$3819;
var t$4382 = v$3820;
var t$4381 = v$3821;
var t$4380 = v$3895;
var t$4379;
var t$4378;
var v$4110 = 0;
switch (v$3897) { case 0: {switch (v$4110) { case 0: {t$4378 = true;
 break; }default: {t$4378 = false;
} };
 break; }case 1: {switch (v$4110) { case 1: {t$4378 = true;
 break; }default: {t$4378 = false;
} };
 break; }case 2: {switch (v$4110) { case 2: {t$4378 = true;
 break; }default: {t$4378 = false;
} };
 break; } };
t$4379 = (t$4378?1:2);
t$4384 = [t$4383,t$4382,t$4381,t$4380,t$4379];
t$4385 = t$4384;
var t$4377;
var t$4376;
var t$4375 = v$3878;
var t$4374 = v$3879;
var t$4373 = v$3896;
var t$4372 = v$3881;
var t$4371;
var t$4370;
var v$4114 = 1;
switch (v$3897) { case 0: {switch (v$4114) { case 0: {t$4370 = true;
 break; }default: {t$4370 = false;
} };
 break; }case 1: {switch (v$4114) { case 1: {t$4370 = true;
 break; }default: {t$4370 = false;
} };
 break; }case 2: {switch (v$4114) { case 2: {t$4370 = true;
 break; }default: {t$4370 = false;
} };
 break; } };
t$4371 = (t$4370?0:2);
t$4376 = [t$4375,t$4374,t$4373,t$4372,t$4371];
t$4377 = t$4376;
t$4388 = [t$4387,t$4386,t$4385,t$4377,2];
t$4389 = t$4388;
return [t$4390,t$4389];
};
} else {return [false,[v$3819,v$3820,v$3821,v$3873,0]];
};
} };
} else {throw exn$ALREADYTHERE$2528;
};
};
};
};
var ins$3816 = fix$4346.$ins;
return (ins$3816(v$2762))[1];
} catch(v$4345) {return (function(ALREADYTHERE$2759){var t$4391 = ALREADYTHERE$2759;
if (t$4391[0] == en$ALREADYTHERE$2528) {var fix$4392 = {};
fix$4392.$repl = function(v$3936){if (v$3936 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMapAVLupdate.repl"];
} else {var v$3939 = v$3936;
var v$3940 = v$3939[0];
var v$3941 = v$3939[1];
var v$3942 = v$3939[2];
var v$3943 = v$3939[3];
var v$3944 = v$3939[4];
return (compiler_objects$CompilerEnv$$5.lt$2405(v$2760,v$3940))?[v$3940,v$3941,fix$4392.$repl(v$3942),v$3943,v$3944]:((compiler_objects$CompilerEnv$$5.lt$2405(v$3940,v$2760))?[v$3940,v$3941,v$3942,fix$4392.$repl(v$3943),v$3944]:[v$3940,v$2761,v$3942,v$3943,v$3944]);
};
};
var repl$3935 = fix$4392.$repl;
return repl$3935(v$2762);
} else {throw ALREADYTHERE$2759;
};
})(v$4345);
};
};
var fix$4393 = {};
fix$4393.$plus = function(v$2781,v$2782){lab$plus: while (true) {if (v$2782 == null) {return v$2781;
} else {var v$2776 = v$2782;
var v$2777 = v$2776[0];
var v$2778 = v$2776[1];
var v$2779 = v$2776[2];
var v$2780 = v$2776[3];
var t$4394 = fix$4393.$plus(compiler_objects$CompilerEnv$$6.add$2751(v$2777,v$2778,v$2781),v$2779);
var t$4395 = v$2780;
var v$2781 = t$4394;
var v$2782 = t$4395;
continue lab$plus;
};
};
};
compiler_objects$CompilerEnv$$6.plus$2763 = fix$4393.$plus;
var en$NOTFOUND$2783 = new String("NOTFOUND");
var exn$NOTFOUND$2783 = [en$NOTFOUND$2783];
var delete$2784 = function(v$3069,v$3070){var balance1$2789 = function(v$2792){if (v$2792 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMap(balance1 on an empty map)"];
} else {var v$2862 = v$2792;
var v$2863 = v$2862[0];
var v$2864 = v$2862[1];
var v$2865 = v$2862[2];
var v$2866 = v$2862[3];
switch (v$2862[4]) { case 1: {return [[v$2863,v$2864,v$2865,v$2866,2],true];
 break; }case 2: {return [[v$2863,v$2864,v$2865,v$2866,0],false];
 break; }default: {var v$2849;
if (v$2866 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMapAVLfinmap 5"];
} else {v$2849 = v$2866;
};
var v$2850 = v$2849[0];
var v$2851 = v$2849[1];
var v$2852 = v$2849[2];
var v$2853 = v$2849[3];
switch (v$2849[4]) { case 1: {var v$2836;
if (v$2852 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMapAVLfinmap 6"];
} else {v$2836 = v$2852;
};
var v$2837 = v$2836[0];
var v$2838 = v$2836[1];
var v$2839 = v$2836[2];
var v$2840 = v$2836[3];
var v$2841 = v$2836[4];
var t$4415;
var t$4414;
var t$4413 = v$2837;
var t$4412 = v$2838;
var t$4411;
var t$4410;
var t$4409 = v$2863;
var t$4408 = v$2864;
var t$4407 = v$2865;
var t$4406 = v$2839;
var t$4405;
var t$4404;
var v$4132 = 0;
switch (v$2841) { case 0: {switch (v$4132) { case 0: {t$4404 = true;
 break; }default: {t$4404 = false;
} };
 break; }case 1: {switch (v$4132) { case 1: {t$4404 = true;
 break; }default: {t$4404 = false;
} };
 break; }case 2: {switch (v$4132) { case 2: {t$4404 = true;
 break; }default: {t$4404 = false;
} };
 break; } };
t$4405 = (t$4404?1:2);
t$4410 = [t$4409,t$4408,t$4407,t$4406,t$4405];
t$4411 = t$4410;
var t$4403;
var t$4402;
var t$4401 = v$2850;
var t$4400 = v$2851;
var t$4399 = v$2840;
var t$4398 = v$2853;
var t$4397;
var t$4396;
var v$4134 = 1;
switch (v$2841) { case 0: {switch (v$4134) { case 0: {t$4396 = true;
 break; }default: {t$4396 = false;
} };
 break; }case 1: {switch (v$4134) { case 1: {t$4396 = true;
 break; }default: {t$4396 = false;
} };
 break; }case 2: {switch (v$4134) { case 2: {t$4396 = true;
 break; }default: {t$4396 = false;
} };
 break; } };
t$4397 = (t$4396?0:2);
t$4402 = [t$4401,t$4400,t$4399,t$4398,t$4397];
t$4403 = t$4402;
t$4414 = [t$4413,t$4412,t$4411,t$4403,2];
t$4415 = t$4414;
return [t$4415,true];
 break; }case 2: {return [[v$2850,v$2851,[v$2863,v$2864,v$2865,v$2852,0],v$2853,1],false];
 break; }default: {return [[v$2850,v$2851,[v$2863,v$2864,v$2865,v$2852,2],v$2853,2],true];
} };
} };
};
};
var balance2$2868 = function(v$2871){if (v$2871 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMap(balance2 on an empty map)"];
} else {var v$2941 = v$2871;
var v$2942 = v$2941[0];
var v$2943 = v$2941[1];
var v$2944 = v$2941[2];
var v$2945 = v$2941[3];
switch (v$2941[4]) { case 0: {return [[v$2942,v$2943,v$2944,v$2945,2],true];
 break; }case 2: {return [[v$2942,v$2943,v$2944,v$2945,1],false];
 break; }default: {var v$2928;
if (v$2944 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMapAVLfinmap 7"];
} else {v$2928 = v$2944;
};
var v$2929 = v$2928[0];
var v$2930 = v$2928[1];
var v$2931 = v$2928[2];
var v$2932 = v$2928[3];
switch (v$2928[4]) { case 0: {var v$2915;
if (v$2932 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMapAVLfinmap 8"];
} else {v$2915 = v$2932;
};
var v$2916 = v$2915[0];
var v$2917 = v$2915[1];
var v$2918 = v$2915[2];
var v$2919 = v$2915[3];
var v$2920 = v$2915[4];
var t$4435;
var t$4434;
var t$4433 = v$2916;
var t$4432 = v$2917;
var t$4431;
var t$4430;
var t$4429 = v$2929;
var t$4428 = v$2930;
var t$4427 = v$2931;
var t$4426 = v$2918;
var t$4425;
var t$4424;
var v$4144 = 0;
switch (v$2920) { case 0: {switch (v$4144) { case 0: {t$4424 = true;
 break; }default: {t$4424 = false;
} };
 break; }case 1: {switch (v$4144) { case 1: {t$4424 = true;
 break; }default: {t$4424 = false;
} };
 break; }case 2: {switch (v$4144) { case 2: {t$4424 = true;
 break; }default: {t$4424 = false;
} };
 break; } };
t$4425 = (t$4424?1:2);
t$4430 = [t$4429,t$4428,t$4427,t$4426,t$4425];
t$4431 = t$4430;
var t$4423;
var t$4422;
var t$4421 = v$2942;
var t$4420 = v$2943;
var t$4419 = v$2919;
var t$4418 = v$2945;
var t$4417;
var t$4416;
var v$4142 = 1;
switch (v$2920) { case 0: {switch (v$4142) { case 0: {t$4416 = true;
 break; }default: {t$4416 = false;
} };
 break; }case 1: {switch (v$4142) { case 1: {t$4416 = true;
 break; }default: {t$4416 = false;
} };
 break; }case 2: {switch (v$4142) { case 2: {t$4416 = true;
 break; }default: {t$4416 = false;
} };
 break; } };
t$4417 = (t$4416?0:2);
t$4422 = [t$4421,t$4420,t$4419,t$4418,t$4417];
t$4423 = t$4422;
t$4434 = [t$4433,t$4432,t$4431,t$4423,2];
t$4435 = t$4434;
return [t$4435,true];
 break; }case 2: {return [[v$2929,v$2930,v$2931,[v$2942,v$2943,v$2932,v$2945,1],0],false];
 break; }default: {return [[v$2929,v$2930,v$2931,[v$2942,v$2943,v$2932,v$2945,2],2],true];
} };
} };
};
};
var fix$4436 = {};
fix$4436.$remove_rightmost = function(v$2950){if (v$2950 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMap(remove_rightmost on empty map)"];
} else {var v$2966 = v$2950;
var v$2967 = v$2966[3];
if (v$2967 == null) {return [v$2966[2],v$2966[0],v$2966[1],true];
} else {var v$2992 = v$2966[0];
var v$2993 = v$2966[1];
var v$2994 = v$2966[2];
var v$2995 = v$2966[4];
var v$2987 = fix$4436.$remove_rightmost(v$2967);
var v$2988 = v$2987[0];
var v$2989 = v$2987[1];
var v$2990 = v$2987[2];
if (v$2987[3]) {var v$2984 = balance2$2868([v$2992,v$2993,v$2994,v$2988,v$2995]);
return [v$2984[0],v$2989,v$2990,v$2984[1]];
} else {return [[v$2992,v$2993,v$2994,v$2988,v$2995],v$2989,v$2990,false];
};
};
};
};
var remove_rightmost$2947 = fix$4436.$remove_rightmost;
var fix$4437 = {};
fix$4437.$del = function(v$2999){lab$del: while (true) {if (v$2999 == null) {throw exn$NOTFOUND$2783;
} else {var v$3059 = v$2999;
var v$3060 = v$3059[0];
var v$3061 = v$3059[1];
var v$3062 = v$3059[2];
var v$3063 = v$3059[3];
var v$3064 = v$3059[4];
if (compiler_objects$CompilerEnv$$5.lt$2405(v$3069,v$3060)) {var v$3020 = fix$4437.$del(v$3062);
var v$3021 = v$3020[0];
if (v$3020[1]) {return balance1$2789([v$3060,v$3061,v$3021,v$3063,v$3064]);
} else {return [[v$3060,v$3061,v$3021,v$3063,v$3064],false];
};
} else {if (compiler_objects$CompilerEnv$$5.lt$2405(v$3060,v$3069)) {var v$3034 = fix$4437.$del(v$3063);
var v$3035 = v$3034[0];
if (v$3034[1]) {return balance2$2868([v$3060,v$3061,v$3062,v$3035,v$3064]);
} else {return [[v$3060,v$3061,v$3062,v$3035,v$3064],false];
};
} else {if (v$3063 == null) {return [v$3062,true];
} else {if (v$3062 == null) {return [v$3063,true];
} else {var v$3054 = remove_rightmost$2947(v$3062);
var v$3055 = v$3054[0];
var v$3056 = v$3054[1];
var v$3057 = v$3054[2];
if (v$3054[3]) {return balance1$2789([v$3056,v$3057,v$3055,v$3063,v$3064]);
} else {return [[v$3056,v$3057,v$3055,v$3063,v$3064],false];
};
};
};
};
};
};
};
};
var del$2996 = fix$4437.$del;
return (del$2996(v$3070))[0];
};
compiler_objects$CompilerEnv$$6.remove$3071 = function(v$3079,v$3080){try {return [0,delete$2784(v$3079,v$3080)];
} catch(v$4438) {return (function(NOTFOUND$3078){var t$4439 = NOTFOUND$3078;
if (t$4439[0] == en$NOTFOUND$2783) {return [1];
} else {throw NOTFOUND$3078;
};
})(v$4438);
};
};
compiler_objects$CompilerEnv$$6.delete$3081 = function(v$3089,v$3090){try {return delete$2784(v$3089,v$3090);
} catch(v$4440) {return (function(NOTFOUND$3088){var t$4441 = NOTFOUND$3088;
if (t$4441[0] == en$NOTFOUND$2783) {return v$3090;
} else {throw NOTFOUND$3088;
};
})(v$4440);
};
};
compiler_objects$CompilerEnv$$6.dom$3091 = function(m$3094){var fix$4442 = {};
fix$4442.$dom$ = function(v$3098,v$3101){lab$dom$: while (true) {if (v$3098 == null) {return v$3101;
} else {var v$3113 = v$3098;
var v$3114 = v$3113[0];
var v$3115 = v$3113[2];
var v$3116 = v$3113[3];
var t$4443 = v$3115;
var t$4444 = [v$3114,fix$4442.$dom$(v$3116,v$3101)];
var v$3098 = t$4443;
var v$3101 = t$4444;
continue lab$dom$;
};
};
};
var dom$$3095 = fix$4442.$dom$;
return dom$$3095(m$3094,null);
};
compiler_objects$CompilerEnv$$6.range$3118 = function(m$3121){var fix$4445 = {};
fix$4445.$ran = function(v$3125,v$3128){lab$ran: while (true) {if (v$3125 == null) {return v$3128;
} else {var v$3140 = v$3125;
var v$3141 = v$3140[1];
var v$3142 = v$3140[2];
var v$3143 = v$3140[3];
var t$4446 = v$3142;
var t$4447 = [v$3141,fix$4445.$ran(v$3143,v$3128)];
var v$3125 = t$4446;
var v$3128 = t$4447;
continue lab$ran;
};
};
};
var ran$3122 = fix$4445.$ran;
return ran$3122(m$3121,null);
};
compiler_objects$CompilerEnv$$6.list$3145 = function(m$3148){var fix$4448 = {};
fix$4448.$li = function(v$3152,v$3155){lab$li: while (true) {if (v$3152 == null) {return v$3155;
} else {var v$3168 = v$3152;
var v$3169 = v$3168[0];
var v$3170 = v$3168[1];
var v$3171 = v$3168[2];
var v$3172 = v$3168[3];
var t$4449 = v$3171;
var t$4450 = [[v$3169,v$3170],fix$4448.$li(v$3172,v$3155)];
var v$3152 = t$4449;
var v$3155 = t$4450;
continue lab$li;
};
};
};
var li$3149 = fix$4448.$li;
return li$3149(m$3148,null);
};
var fix$4451 = {};
fix$4451.$composemap = function(f$3177,t$3180){if (t$3180 == null) {return null;
} else {var v$3191 = t$3180;
var v$3192 = v$3191[0];
var v$3193 = v$3191[1];
var v$3194 = v$3191[2];
var v$3195 = v$3191[3];
var v$3196 = v$3191[4];
var l$$3190 = fix$4451.$composemap(f$3177,v$3194);
return [v$3192,f$3177(v$3193),l$$3190,fix$4451.$composemap(f$3177,v$3195),v$3196];
};
};
compiler_objects$CompilerEnv$$6.composemap$3174 = fix$4451.$composemap;
var fix$4452 = {};
fix$4452.$ComposeMap = function(f$3200,t$3203){if (t$3203 == null) {return null;
} else {var v$3214 = t$3203;
var v$3215 = v$3214[0];
var v$3216 = v$3214[1];
var v$3217 = v$3214[2];
var v$3218 = v$3214[3];
var v$3219 = v$3214[4];
var l$$3213 = fix$4452.$ComposeMap(f$3200,v$3217);
return [v$3215,f$3200([v$3215,v$3216]),l$$3213,fix$4452.$ComposeMap(f$3200,v$3218),v$3219];
};
};
compiler_objects$CompilerEnv$$6.ComposeMap$3197 = fix$4452.$ComposeMap;
compiler_objects$CompilerEnv$$6.fold$3220 = function(f$3223,e$3226,t$3229){var fix$4453 = {};
fix$4453.$fold$ = function(v$3233,v$3236){lab$fold$: while (true) {if (v$3233 == null) {return v$3236;
} else {var v$3248 = v$3233;
var v$3249 = v$3248[1];
var v$3250 = v$3248[2];
var v$3251 = v$3248[3];
var t$4454 = v$3251;
var t$4455 = f$3223([v$3249,fix$4453.$fold$(v$3250,v$3236)]);
var v$3233 = t$4454;
var v$3236 = t$4455;
continue lab$fold$;
};
};
};
var fold$$3230 = fix$4453.$fold$;
return fold$$3230(t$3229,e$3226);
};
compiler_objects$CompilerEnv$$6.Fold$3253 = function(f$3256,e$3259,t$3262){var fix$4456 = {};
fix$4456.$fold$ = function(v$3266,v$3269){lab$fold$: while (true) {if (v$3266 == null) {return v$3269;
} else {var v$3282 = v$3266;
var v$3283 = v$3282[0];
var v$3284 = v$3282[1];
var v$3285 = v$3282[2];
var v$3286 = v$3282[3];
var t$4457 = v$3286;
var t$4458 = f$3256([[v$3283,v$3284],fix$4456.$fold$(v$3285,v$3269)]);
var v$3266 = t$4457;
var v$3269 = t$4458;
continue lab$fold$;
};
};
};
var fold$$3263 = fix$4456.$fold$;
return fold$$3263(t$3262,e$3259);
};
compiler_objects$CompilerEnv$$6.filter$3288 = function(f$3291,t$3294){var fix$4459 = {};
fix$4459.$fold$ = function(v$4191,v$4192){lab$fold$: while (true) {if (v$4191 == null) {return v$4192;
} else {var v$4193 = v$4191;
var v$4194 = v$4193[0];
var v$4195 = v$4193[1];
var v$4196 = v$4193[2];
var v$4197 = v$4193[3];
var t$4461 = v$4197;
var t$4460;
var v$4322 = fix$4459.$fold$(v$4196,v$4192);
t$4460 = ((f$3291([v$4194,v$4195]))?(compiler_objects$CompilerEnv$$6.add$2751(v$4194,v$4195,v$4322)):v$4322);
var t$4462 = t$4461;
var t$4463 = t$4460;
var v$4191 = t$4462;
var v$4192 = t$4463;
continue lab$fold$;
};
};
};
var fold$$4190 = fix$4459.$fold$;
return fold$$4190(t$3294,compiler_objects$CompilerEnv$$6.empty$2475(0));
};
var fix$4464 = {};
fix$4464.$addList = function(v$3311,v$3314){lab$addList: while (true) {if (v$3311 == null) {return v$3314;
} else {var v$3326 = v$3311;
var v$3327 = v$3326[0];
var v$3328 = v$3327[0];
var v$3329 = v$3327[1];
var v$3330 = v$3326[1];
var t$4465 = v$3330;
var t$4466 = compiler_objects$CompilerEnv$$6.add$2751(v$3328,v$3329,v$3314);
var v$3311 = t$4465;
var v$3314 = t$4466;
continue lab$addList;
};
};
};
compiler_objects$CompilerEnv$$6.addList$3308 = fix$4464.$addList;
compiler_objects$CompilerEnv$$6.fromList$3332 = function(l$3335){return compiler_objects$CompilerEnv$$6.addList$3308(l$3335,compiler_objects$CompilerEnv$$6.empty$2475(0));
};
compiler_objects$CompilerEnv$$6.fromSortedList$3336 = function(l$3339){var fix$4467 = {};
fix$4467.$build = function(v$3368,v$4331){switch (v$3368) { case 0: {return [v$4331,null];
 break; }default: {var n$$3370 = SmlPrims.div_i32(v$3368,2,CompilerInitial.exn$Div$40);
var v$3401 = fix$4467.$build(n$$3370,v$4331);
var v$3402 = v$3401[0];
var v$3403 = v$3401[1];
var v$3384;
if (v$3402 == null) {throw [compiler_objects$CompilerEnv$$6.en$Impossible$2523,"OrderFinMapbuild"];
} else {var v$3396 = v$3402;
var v$3397 = v$3396[0];
v$3384 = [v$3397[0],v$3397[1],v$3396[1]];
};
var v$3385 = v$3384[0];
var v$3386 = v$3384[1];
var v$3387 = v$3384[2];
var v$3381 = fix$4467.$build(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$3368 - n$$3370)) - 1),v$3387);
return [v$3381[0],[v$3385,v$3386,v$3403,v$3381[1]]];
} };
};
var build$3357 = fix$4467.$build;
var fix$4468 = {};
fix$4468.$mk_avl = function(v$3419){if (v$3419 == null) {return [null,0];
} else {var v$3448 = v$3419;
var v$3449 = v$3448[0];
var v$3450 = v$3448[1];
var v$3451 = v$3448[2];
var v$3452 = v$3448[3];
var v$3445 = fix$4468.$mk_avl(v$3451);
var v$3446 = v$3445[0];
var v$3447 = v$3445[1];
var v$3442 = fix$4468.$mk_avl(v$3452);
var v$3443 = v$3442[0];
var v$3444 = v$3442[1];
return [[v$3449,v$3450,v$3446,v$3443,(v$3447 == v$3444)?2:((v$3447 > v$3444)?1:0)],SmlPrims.chk_ovf_i32(1 + ((v$3447 > v$3444)?v$3447:v$3444))];
};
};
var mk_avl$3416 = fix$4468.$mk_avl;
var t$4477;
var t$4476 = mk_avl$3416;
var t$4475;
var t$4474;
var t$4473 = build$3357;
var t$4472;
var fix$4469 = {};
fix$4469.$acc = function(v$4006,v$4007){lab$acc: while (true) {if (v$4006 == null) {return v$4007;
} else {var v$4008 = v$4006;
var v$4009 = v$4008[1];
var t$4470 = v$4009;
var t$4471 = SmlPrims.chk_ovf_i32(v$4007 + 1);
var v$4006 = t$4470;
var v$4007 = t$4471;
continue lab$acc;
};
};
};
var acc$4005 = fix$4469.$acc;
t$4472 = (acc$4005(l$3339,0));
t$4474 = (t$4473(t$4472,l$3339));
t$4475 = t$4474[1];
t$4477 = (t$4476(t$4475));
return t$4477[0];
};
compiler_objects$CompilerEnv$$6.mergeMap$3461 = function(f$3464,t1$3467,t2$3470){var fix$4478 = {};
fix$4478.$merge = function(v$3491,v$4332){if (v$3491 == null) {return v$4332;
} else {if (v$4332 == null) {return v$3491;
} else {var v$3502 = v$3491;
var v$3503 = v$3502[0];
var v$3504 = v$3503[0];
var v$3505 = v$3503[1];
var v$3506 = v$3502[1];
var v$3507 = v$4332;
var v$3508 = v$3507[0];
var v$3509 = v$3508[0];
var v$3510 = v$3508[1];
var v$3511 = v$3507[1];
return (compiler_objects$CompilerEnv$$5.lt$2405(v$3504,v$3509))?[[v$3504,v$3505],fix$4478.$merge(v$3506,v$4332)]:((compiler_objects$CompilerEnv$$5.lt$2405(v$3509,v$3504))?[[v$3509,v$3510],fix$4478.$merge(v$3491,v$3511)]:[[v$3504,f$3464([v$3505,v$3510])],fix$4478.$merge(v$3506,v$3511)]);
};
};
};
var merge$3471 = fix$4478.$merge;
var t$4489 = compiler_objects$CompilerEnv$$6.fromSortedList$3336;
var t$4488;
var t$4487 = merge$3471;
var t$4486;
var fix$4483 = {};
fix$4483.$li = function(v$4200,v$4201){lab$li: while (true) {if (v$4200 == null) {return v$4201;
} else {var v$4202 = v$4200;
var v$4203 = v$4202[0];
var v$4204 = v$4202[1];
var v$4205 = v$4202[2];
var v$4206 = v$4202[3];
var t$4484 = v$4205;
var t$4485 = [[v$4203,v$4204],fix$4483.$li(v$4206,v$4201)];
var v$4200 = t$4484;
var v$4201 = t$4485;
continue lab$li;
};
};
};
var li$4199 = fix$4483.$li;
t$4486 = (li$4199(t1$3467,null));
var t$4482;
var fix$4479 = {};
fix$4479.$li = function(v$4209,v$4210){lab$li: while (true) {if (v$4209 == null) {return v$4210;
} else {var v$4211 = v$4209;
var v$4212 = v$4211[0];
var v$4213 = v$4211[1];
var v$4214 = v$4211[2];
var v$4215 = v$4211[3];
var t$4480 = v$4214;
var t$4481 = [[v$4212,v$4213],fix$4479.$li(v$4215,v$4210)];
var v$4209 = t$4480;
var v$4210 = t$4481;
continue lab$li;
};
};
};
var li$4208 = fix$4479.$li;
t$4482 = (li$4208(t2$3470,null));
t$4488 = (t$4487(t$4486,t$4482));
return t$4489(t$4488);
};
var fix$4490 = {};
fix$4490.$oneForWhich = function(f$3515,t$3518){lab$oneForWhich: while (true) {if (t$3518 == null) {return [1];
} else {var v$3538 = t$3518;
var v$3539 = v$3538[0];
var v$3540 = v$3538[1];
var v$3541 = v$3538[2];
var v$3542 = v$3538[3];
if (f$3515([v$3539,v$3540])) {return [0,[v$3539,v$3540]];
} else {var v$3535 = fix$4490.$oneForWhich(f$3515,v$3541);
switch (v$3535[0]) { case 0: {var v$3537 = v$3535[1];
return [0,v$3537];
 break; }default: {var t$4491 = f$3515;
var t$4492 = v$3542;
var f$3515 = t$4491;
var t$3518 = t$4492;
continue lab$oneForWhich;
} };
};
};
};
};
compiler_objects$CompilerEnv$$6.oneForWhich$3512 = fix$4490.$oneForWhich;
compiler_objects$CompilerEnv$$6.en$Restrict$3543 = new String("Restrict");
compiler_objects$CompilerEnv$$6.restrict$3544 = function(v$3563,v$3564,v$3565){var fix$4493 = {};
fix$4493.$foldl = function(v$4020,v$4021){if (v$4021 == null) {return v$4020;
} else {var v$4022 = v$4021;
var v$4023 = v$4022[0];
var v$4024 = v$4022[1];
var t$4498 = fix$4493.$foldl;
var t$4497;
var v$4228;
var fix$4494 = {};
fix$4494.$search = function(v$4232){lab$search: while (true) {if (v$4232 == null) {return [1];
} else {var v$4233 = v$4232;
var v$4234 = v$4233[0];
var v$4235 = v$4233[1];
var v$4236 = v$4233[2];
var v$4237 = v$4233[3];
if (compiler_objects$CompilerEnv$$5.lt$2405(v$4023,v$4234)) {var t$4495 = v$4236;
var v$4232 = t$4495;
continue lab$search;
} else {if (compiler_objects$CompilerEnv$$5.lt$2405(v$4234,v$4023)) {var t$4496 = v$4237;
var v$4232 = t$4496;
continue lab$search;
} else {return [0,v$4235];
};
};
};
};
};
var search$4231 = fix$4494.$search;
v$4228 = (search$4231(v$3564));
switch (v$4228[0]) { case 0: {var v$4238 = v$4228[1];
t$4497 = (compiler_objects$CompilerEnv$$6.add$2751(v$4023,v$4238,v$4020));
 break; }default: {throw [compiler_objects$CompilerEnv$$6.en$Restrict$3543,v$3563(v$4023)];
} };
return t$4498(t$4497,v$4024);
};
};
var foldl$4019 = fix$4493.$foldl;
return foldl$4019(compiler_objects$CompilerEnv$$6.empty$2475(0),v$3565);
};
compiler_objects$CompilerEnv$$6.enrich$3566 = function(en$3569,v$3573){var v$3594 = v$3573[0];
var v$3595 = v$3573[1];
var fix$4499 = {};
fix$4499.$fold$ = function(v$4243,v$4244){if (v$4243 == null) {return v$4244;
} else {var v$4245 = v$4243;
var v$4246 = v$4245[0];
var v$4247 = v$4245[1];
var v$4248 = v$4245[2];
var v$4249 = v$4245[3];
var t$4505 = fix$4499.$fold$;
var t$4504 = v$4249;
var t$4503;
if (fix$4499.$fold$(v$4248,v$4244)) {var v$4312;
var fix$4500 = {};
fix$4500.$search = function(v$4314){lab$search: while (true) {if (v$4314 == null) {return [1];
} else {var v$4315 = v$4314;
var v$4316 = v$4315[0];
var v$4317 = v$4315[1];
var v$4318 = v$4315[2];
var v$4319 = v$4315[3];
if (compiler_objects$CompilerEnv$$5.lt$2405(v$4246,v$4316)) {var t$4501 = v$4318;
var v$4314 = t$4501;
continue lab$search;
} else {if (compiler_objects$CompilerEnv$$5.lt$2405(v$4316,v$4246)) {var t$4502 = v$4319;
var v$4314 = t$4502;
continue lab$search;
} else {return [0,v$4317];
};
};
};
};
};
var search$4313 = fix$4500.$search;
v$4312 = (search$4313(v$3594));
switch (v$4312[0]) { case 0: {var v$4320 = v$4312[1];
t$4503 = (en$3569([v$4320,v$4247]));
 break; }default: {t$4503 = false;
} };
} else {t$4503 = false;
};
return t$4505(t$4504,t$4503);
};
};
var fold$$4242 = fix$4499.$fold$;
return fold$$4242(v$3595,true);
};
compiler_objects$CompilerEnv$$6.layoutMap$3596 = function(v$3629,v$3631,v$3630,v$3628){return function(layoutDom$3605){return function(layoutRan$3608){return function(m$3611){var t$4513;
var t$4509;
var l$4026;
var fix$4506 = {};
fix$4506.$li = function(v$4261,v$4262){lab$li: while (true) {if (v$4261 == null) {return v$4262;
} else {var v$4263 = v$4261;
var v$4264 = v$4263[0];
var v$4265 = v$4263[1];
var v$4266 = v$4263[2];
var v$4267 = v$4263[3];
var t$4507 = v$4266;
var t$4508 = [[v$4264,v$4265],fix$4506.$li(v$4267,v$4262)];
var v$4261 = t$4507;
var v$4262 = t$4508;
continue lab$li;
};
};
};
var li$4260 = fix$4506.$li;
l$4026 = (li$4260(m$3611,null));
var fix$4510 = {};
fix$4510.$map = function(v$4028){if (v$4028 == null) {return null;
} else {var v$4029 = v$4028;
var v$4030 = v$4029[0];
var v$4031 = v$4029[1];
var t$4512;
var t$4511;
var v$4269 = v$4030[0];
var v$4270 = v$4030[1];
t$4511 = [0,[[layoutDom$3605(v$4269),[layoutRan$3608(v$4270),null]],[0,v$3629],"",3,""]];
t$4512 = [t$4511,fix$4510.$map(v$4031)];
return t$4512;
};
};
var map$4027 = fix$4510.$map;
t$4509 = (map$4027(l$4026));
t$4513 = [t$4509,[0,v$3630],v$3631,3,v$3628];
return [0,t$4513];
};
};
};
};
compiler_objects$CompilerEnv$$6.reportMap$3632 = function(f$3635,t$3638){var t$4519 = tools$Report$.flatten$78;
var t$4517;
var l$4033;
var fix$4514 = {};
fix$4514.$li = function(v$4273,v$4274){lab$li: while (true) {if (v$4273 == null) {return v$4274;
} else {var v$4275 = v$4273;
var v$4276 = v$4275[0];
var v$4277 = v$4275[1];
var v$4278 = v$4275[2];
var v$4279 = v$4275[3];
var t$4515 = v$4278;
var t$4516 = [[v$4276,v$4277],fix$4514.$li(v$4279,v$4274)];
var v$4273 = t$4515;
var v$4274 = t$4516;
continue lab$li;
};
};
};
var li$4272 = fix$4514.$li;
l$4033 = (li$4272(t$3638,null));
var fix$4518 = {};
fix$4518.$map = function(v$4035){if (v$4035 == null) {return null;
} else {var v$4036 = v$4035;
var v$4037 = v$4036[0];
var v$4038 = v$4036[1];
return [f$3635(v$4037),fix$4518.$map(v$4038)];
};
};
var map$4034 = fix$4518.$map;
t$4517 = (map$4034(l$4033));
return t$4519(t$4517);
};
compiler_objects$CompilerEnv$$6.reportMapSORTED$3639 = function(f$4039,t$4040){var t$4525 = tools$Report$.flatten$78;
var t$4523;
var l$4042;
var fix$4520 = {};
fix$4520.$li = function(v$4282,v$4283){lab$li: while (true) {if (v$4282 == null) {return v$4283;
} else {var v$4284 = v$4282;
var v$4285 = v$4284[0];
var v$4286 = v$4284[1];
var v$4287 = v$4284[2];
var v$4288 = v$4284[3];
var t$4521 = v$4287;
var t$4522 = [[v$4285,v$4286],fix$4520.$li(v$4288,v$4283)];
var v$4282 = t$4521;
var v$4283 = t$4522;
continue lab$li;
};
};
};
var li$4281 = fix$4520.$li;
l$4042 = (li$4281(t$4040,null));
var fix$4524 = {};
fix$4524.$map = function(v$4044){if (v$4044 == null) {return null;
} else {var v$4045 = v$4044;
var v$4046 = v$4045[0];
var v$4047 = v$4045[1];
return [f$4039(v$4046),fix$4524.$map(v$4047)];
};
};
var map$4043 = fix$4524.$map;
t$4523 = (map$4043(l$4042));
return t$4525(t$4523);
};
compiler_objects$CompilerEnv$$6.pu_bal$3640 = pickle$pickle$.enumGen$2149(function(v$4048){var v$4049 = v$4048[0];
var v$4050 = v$4048[1];
switch (v$4049) { case 0: {switch (v$4050) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$4050) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$4050) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderFinMap.bal",[1,[2,[0,null]]]]);
compiler_objects$CompilerEnv$$6.pu$3641 = function(pu_dom$3644,pu_r$3647){var fun_E$3656;
var v$4335 = null;
fun_E$3656 = (function(v$4336){return pickle$pickle$.con0$1979(v$4335,v$4336);
});
return pickle$pickle$.dataGen$1479(["OrderFinMap.map",function(v$4053){return (v$4053 == null)?0:1;
},[fun_E$3656,[function(pu$4054){return pickle$pickle$.con1$2005(function(v$4055){var v$4056 = v$4055[0];
return [v$4056[0],v$4056[1],v$4056[2],v$4056[3],v$4055[1]];
},function(v$4057){if (v$4057 == null) {return tools$Crash$.impossible$50("OrderFinMap.pu.fun_N");
} else {var v$4058 = v$4057;
return [[v$4058[0],v$4058[1],v$4058[2],v$4058[3]],v$4058[4]];
};
},pickle$pickle$.pairGen0$974(pickle$pickle$.tup4Gen0$2368(pu_dom$3644,pu_r$3647,pu$4054,pu$4054),compiler_objects$CompilerEnv$$6.pu_bal$3640));
},null]]]);
};
return 0;
})();
