if ((typeof(compiler0$CompileDec$$5)) == "undefined") {compiler0$CompileDec$$5 = {};
};
(function(){compiler0$CompileDec$$5.eq_matchresult$4554 = function(v$4556,v$4557){switch (v$4556) { case 0: {switch (v$4557) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$4557) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$4557) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
compiler0$CompileDec$$5.empty$4263 = [0,compiler0$CompileDec$$4.empty$2937];
compiler0$CompileDec$$5.member$4264 = function(con$4267,v$4271){var v$4273 = v$4271[1];
return compiler0$CompileDec$$4.member$2963(con$4267,v$4273);
};
compiler0$CompileDec$$5.insert$4274 = function(con$4277,v$4281){var v$4282 = v$4281[0];
var v$4283 = v$4281[1];
return [SmlPrims.chk_ovf_i32(v$4282 + 1),compiler0$CompileDec$$4.insert$3028(con$4277,v$4283)];
};
compiler0$CompileDec$$5.size$4284 = function(v$4650,v$4651){return v$4650;
};
compiler0$CompileDec$$5.addneg$4291 = function(v$4302,v$4652){switch (v$4302[0]) { case 1: {var v$4304 = v$4302[1];
var t$4672;
var v$4560 = v$4304[0];
var v$4561 = v$4304[1];
t$4672 = [SmlPrims.chk_ovf_i32(v$4560 + 1),compiler0$CompileDec$$4.insert$3028(v$4652,v$4561)];
return [1,t$4672];
 break; }default: {return v$4302;
} };
};
compiler0$CompileDec$$5.augment$4306 = function(v$4319,v$4653){if (v$4319 == null) {return null;
} else {var v$4321 = v$4319;
var v$4322 = v$4321[0];
return [[v$4322[0],[v$4653,v$4322[1]]],v$4321[1]];
};
};
compiler0$CompileDec$$5.norm$4327 = function(v$4330){if (v$4330 == null) {return compiler0$CompileDec$$1.die$80("norm");
} else {var v$4339 = v$4330;
var v$4340 = v$4339[0];
var v$4341 = v$4340[0];
var v$4342 = v$4340[1];
var v$4343 = v$4339[1];
var v$4588 = [0,[v$4341,basis$List$.rev$641(v$4342)]];
if (v$4343 == null) {return null;
} else {var v$4564 = v$4343;
var v$4565 = v$4564[0];
return [[v$4565[0],[v$4588,v$4565[1]]],v$4564[1]];
};
};
};
var fix$4673 = {};
fix$4673.$buildtermd = function(v$4362,v$4654,v$4655){lab$buildtermd: while (true) {if (v$4362 == null) {if (v$4655 == null) {return v$4654;
} else {return compiler0$CompileDec$$1.die$80("buildtermd");
};
} else {if (v$4655 == null) {return compiler0$CompileDec$$1.die$80("buildtermd");
} else {var v$4368 = v$4362;
var v$4369 = v$4368[0];
var v$4370 = v$4369[0];
var v$4371 = v$4369[1];
var v$4372 = v$4368[1];
var v$4374 = v$4655;
var v$4375 = v$4374[0];
var v$4376 = v$4375[2];
var v$4377 = v$4374[1];
var t$4674 = v$4372;
var t$4675 = [0,[v$4370,basis$List$.s$n$645([basis$List$.rev$641(v$4371),[v$4654,v$4376]])]];
var t$4676 = v$4377;
var v$4362 = t$4674;
var v$4654 = t$4675;
var v$4655 = t$4676;
continue lab$buildtermd;
};
};
};
};
compiler0$CompileDec$$5.buildtermd$4344 = fix$4673.$buildtermd;
compiler0$CompileDec$$5.staticmatch$4381 = function(v$4441,v$4442){switch (v$4442[0]) { case 0: {var v$4430 = v$4442[1];
var v$4431 = v$4430[0];
switch (compiler0$CompileDec$$2.con_cmp$2203(v$4441,v$4431)) { case 2: {return 0;
 break; }default: {switch (v$4431[0]) { case 2: {return 2;
 break; }default: {return 1;
} };
} };
 break; }default: {var v$4440 = v$4442[1];
var t$4677;
var v$4570 = v$4440[1];
t$4677 = (compiler0$CompileDec$$4.member$2963(v$4441,v$4570));
return t$4677?1:((compiler0$CompileDec$$2.span_eq_int$2076(compiler0$CompileDec$$2.span$2304(v$4441),SmlPrims.chk_ovf_i32(v$4440[0] + 1)))?0:2);
} };
};
compiler0$CompileDec$$5.shared$4445 = function(v$4656,v$4657,v$4658,v$4659){return v$4658[0] > 1;
};
compiler0$CompileDec$$5.node_cmp$4450 = function(v$4455,v$4660){var v$4456 = v$4455[1];
var v$4458 = v$4660[1];
return compiler0$CompileDec$$2.lvar_cmp$2178(v$4456,v$4458);
};
compiler0$CompileDec$$5.opt_cmp$4459 = function(v$4462,v$4465){var v$4481 = v$4465[0];
switch (v$4481[0]) { case 1: {switch (v$4465[1][0]) { case 1: {return 2;
 break; }default: {return 0;
} };
 break; }default: {var v$4485 = v$4465[1];
switch (v$4485[0]) { case 1: {return 1;
 break; }default: {var v$4488 = v$4481[1];
var v$4489 = v$4485[1];
return v$4462([v$4488,v$4489]);
} };
} };
};
compiler0$CompileDec$$5.edge_cmp$4490 = function(v$4577,v$4661){switch (v$4577[0]) { case 1: {switch (v$4661[0]) { case 1: {return 2;
 break; }default: {return 0;
} };
 break; }default: {switch (v$4661[0]) { case 1: {return 1;
 break; }default: {var v$4580 = v$4577[1];
var v$4581 = v$4661[1];
var v$4605 = v$4580[1];
var v$4607 = v$4581[1];
return compiler0$CompileDec$$2.lvar_cmp$2178(v$4605,v$4607);
} };
} };
};
compiler0$CompileDec$$5.edge_eq$4491 = function(v$4664){return compiler0$CompileDec$$2.eq_from_cmp$2146(function(v$4665){var v$4666 = v$4665[0];
switch (v$4666[0]) { case 1: {switch (v$4665[1][0]) { case 1: {return 2;
 break; }default: {return 0;
} };
 break; }default: {var v$4667 = v$4665[1];
switch (v$4667[0]) { case 1: {return 1;
 break; }default: {var v$4668 = v$4666[1];
var v$4669 = v$4667[1];
var v$4670 = v$4668[1];
var v$4671 = v$4669[1];
return compiler0$CompileDec$$2.lvar_cmp$2178(v$4670,v$4671);
} };
} };
},v$4664);
};
compiler0$CompileDec$$5.ifeq_cmp$4492 = function(v$4518,v$4662){var v$4519 = v$4518[0];
var v$4520 = v$4518[1];
var v$4521 = v$4518[2];
var v$4522 = v$4518[3];
var v$4524 = v$4662[0];
var v$4525 = v$4662[1];
var v$4526 = v$4662[2];
var v$4527 = v$4662[3];
var v$4507;
switch (v$4522[0]) { case 1: {switch (v$4527[0]) { case 1: {v$4507 = 2;
 break; }default: {v$4507 = 0;
} };
 break; }default: {switch (v$4527[0]) { case 1: {v$4507 = 1;
 break; }default: {var v$4621 = v$4522[1];
var v$4622 = v$4527[1];
var v$4625 = v$4621[1];
var v$4627 = v$4622[1];
v$4507 = (compiler0$CompileDec$$2.lvar_cmp$2178(v$4625,v$4627));
} };
} };
switch (v$4507) { case 2: {var v$4512;
switch (v$4521[0]) { case 1: {switch (v$4526[0]) { case 1: {v$4512 = 2;
 break; }default: {v$4512 = 0;
} };
 break; }default: {switch (v$4526[0]) { case 1: {v$4512 = 1;
 break; }default: {var v$4631 = v$4521[1];
var v$4632 = v$4526[1];
var v$4635 = v$4631[1];
var v$4637 = v$4632[1];
v$4512 = (compiler0$CompileDec$$2.lvar_cmp$2178(v$4635,v$4637));
} };
} };
switch (v$4512) { case 2: {var v$4517 = compiler0$CompileDec$$2.con_cmp$2203(v$4520,v$4525);
switch (v$4517) { case 2: {return compiler0$CompileDec$$2.path_cmp$2436(v$4519,v$4524);
 break; }default: {return v$4517;
} };
 break; }default: {return v$4512;
} };
 break; }default: {return v$4507;
} };
};
return 0;
})();
