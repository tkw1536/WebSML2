if ((typeof(compiler0$CompileDec$$9)) == "undefined") {compiler0$CompileDec$$9 = {};
};
(function(){compiler0$CompileDec$$9.edge_bump$6891 = function(v$6994){return compiler0$CompileDec$$1.app_opt$559(function(v$6995){var v$6996 = v$6995[2];
return (v$6996[0] = (SmlPrims.chk_ovf_i32(v$6996[0] + 1)),0);
},v$6994);
};
compiler0$CompileDec$$9.mk_node$6896 = function(kind$6899,s$6902){var v$6904 = [0];
var v$6905 = [false];
return [kind$6899,compiler_objects$Lvars$$1.new_named_lvar$56(s$6902),v$6904,v$6905];
};
compiler0$CompileDec$$9.mk_ifeq_node$6907 = function(ifeq$6914){var v$6923 = ifeq$6914[1];
var v$6924 = ifeq$6914[2];
var v$6925 = ifeq$6914[3];
var node$6915;
var kind$6971 = [1,ifeq$6914];
var s$6972 = ((compiler0$CompileDec$$8.string_from_con$6811(v$6923)) + "_n") + (basis$Int32$.toString$449(compiler0$CompileDec$$8.next$6806(0)));
var v$6973 = [0];
var v$6974 = [false];
node$6915 = [kind$6971,compiler_objects$Lvars$$1.new_named_lvar$56(s$6972),v$6973,v$6974];
(compiler0$CompileDec$$8.mapr$6800[0] = (compiler0$CompileDec$$7.add$5025(ifeq$6914,node$6915,compiler0$CompileDec$$8.mapr$6800[0])),0);
compiler0$CompileDec$$1.app_opt$559(function(v$6998){var v$6999 = v$6998[2];
return (v$6999[0] = (SmlPrims.chk_ovf_i32(v$6999[0] + 1)),0);
},v$6924);
compiler0$CompileDec$$1.app_opt$559(function(v$7001){var v$7002 = v$7001[2];
return (v$7002[0] = (SmlPrims.chk_ovf_i32(v$7002[0] + 1)),0);
},v$6925);
return node$6915;
};
compiler0$CompileDec$$9.reset$6926 = function(v$6928){(compiler0$CompileDec$$8.mapr$6800[0] = (compiler0$CompileDec$$7.empty$4749(0)),0);
return (compiler0$CompileDec$$8.counter$6805[0] = 0,0);
};
compiler0$CompileDec$$9.ifeq_node$6931 = function(ifeq$6934){var v$6939 = compiler0$CompileDec$$8.find_ifeq_node_like_this$6801(ifeq$6934);
switch (v$6939[0]) { case 0: {return v$6939[1];
 break; }default: {return compiler0$CompileDec$$9.mk_ifeq_node$6907(ifeq$6934);
} };
};
compiler0$CompileDec$$9.fail_edge$6942 = function(v$7003){return [1];
};
return 0;
})();
