if ((typeof(compiler0$OptLambda$$13)) == "undefined") {compiler0$OptLambda$$13 = {};
};
(function(){compiler0$OptLambda$$13.scc$8284 = function(g$8287){var scc$8288 = [null];
var nodeStack$8295 = [null];
var dfsNo$8318 = [0];
var fix$9061 = {};
fix$9061.$makeSCC = function(n$8330){lab$makeSCC: while (true) {var n$$8331;
var v$8598 = nodeStack$8295[0];
if (v$8598 == null) {throw [compiler0$OptLambda$$6.en$DiGraphExn$2472,"DiGraph error in scc -- popNode.\n"];
} else {var v$8599 = v$8598;
var v$8600 = v$8599[0];
var v$8601 = v$8599[1];
(nodeStack$8295[0] = v$8601,0);
n$$8331 = v$8600;
};
(scc$8288[0] = [[n$$8331,basis$List$.hd$635(scc$8288[0])],basis$List$.tl$636(scc$8288[0])],0);
compiler0$OptLambda$$6.setDfsNo$2600(n$$8331,0);
if ((n$8330 == n$$8331)?false:true) {var t$9062 = n$8330;
var n$8330 = t$9062;
continue lab$makeSCC;
} else {return 0;
};
};
};
var makeSCC$8327 = fix$9061.$makeSCC;
var fix$9063 = {};
fix$9063.$processNode = function(n$8343){var low$8344;
(dfsNo$8318[0] = (SmlPrims.chk_ovf_i32(dfsNo$8318[0] + 1)),0);
low$8344 = dfsNo$8318[0];
compiler0$OptLambda$$6.setDfsNo$2600(n$8343,low$8344);
compiler0$OptLambda$$6.setVisited$2543(n$8343,true);
(nodeStack$8295[0] = [n$8343,nodeStack$8295[0]],0);
var low$8345;
var fix$9073 = {};
fix$9073.$foldl = function(v$8624,v$8625){lab$foldl: while (true) {if (v$8625 == null) {return v$8624;
} else {var v$8626 = v$8625;
var v$8627 = v$8626[0];
var v$8628 = v$8626[1];
var t$9075;
if ((compiler0$OptLambda$$6.getVisited$2535(v$8627))[0]) {var t$9074;
var v$8955 = (compiler0$OptLambda$$6.getDfsNo$2592(v$8627))[0];
t$9074 = ((v$8955 == 0)?false:true);
if (t$9074) {var v$8959 = (compiler0$OptLambda$$6.getDfsNo$2592(v$8627))[0];
t$9075 = ((v$8959 < v$8624)?v$8959:v$8624);
} else {t$9075 = v$8624;
};
} else {var v$8961 = fix$9063.$processNode(v$8627);
t$9075 = ((v$8961 < v$8624)?v$8961:v$8624);
};
var t$9076 = t$9075;
var t$9077 = v$8628;
var v$8624 = t$9076;
var v$8625 = t$9077;
continue lab$foldl;
};
};
};
var foldl$8623 = fix$9073.$foldl;
var v$9056;
var out$8657 = compiler0$OptLambda$$6.getOutSet$2500(n$8343);
var fix$9078 = {};
fix$9078.$map = function(v$8659){if (v$8659 == null) {return null;
} else {var v$8660 = v$8659;
var v$8661 = v$8660[0];
var v$8662 = v$8660[1];
return [v$8661[0],fix$9078.$map(v$8662)];
};
};
var map$8658 = fix$9078.$map;
v$9056 = (map$8658(out$8657[0]));
low$8345 = (foldl$8623(low$8344,v$9056));
if ((compiler0$OptLambda$$6.getDfsNo$2592(n$8343))[0] == low$8345) {(scc$8288[0] = [null,scc$8288[0]],0);
makeSCC$8327(n$8343);
} else {0;
};
return low$8345;
};
var processNode$8340 = fix$9063.$processNode;
(dfsNo$8318[0] = 0,0);
(nodeStack$8295[0] = null,0);
(scc$8288[0] = null,0);
var fix$9064 = {};
fix$9064.$app = function(v$8677){lab$app: while (true) {if (v$8677 == null) {return 0;
} else {var v$8678 = v$8677;
var v$8679 = v$8678[0];
var v$8680 = v$8678[1];
compiler0$OptLambda$$6.setVisited$2543(v$8679,false);
compiler0$OptLambda$$6.setDfsNo$2600(v$8679,0);
var t$9065 = v$8680;
var v$8677 = t$9065;
continue lab$app;
};
};
};
var app$8676 = fix$9064.$app;
app$8676(compiler0$OptLambda$$6.rangeGraph$2934(g$8287));
var fix$9066 = {};
fix$9066.$app = function(v$8689){lab$app: while (true) {if (v$8689 == null) {return 0;
} else {var v$8690 = v$8689;
var v$8691 = v$8690[0];
var v$8692 = v$8690[1];
if ((compiler0$OptLambda$$6.getVisited$2535(v$8691))[0] == false) {processNode$8340(v$8691);
0;
} else {0;
};
var t$9067 = v$8692;
var v$8689 = t$9067;
continue lab$app;
};
};
};
var app$8688 = fix$9066.$app;
app$8688(compiler0$OptLambda$$6.rangeGraph$2934(g$8287));
var t$9072;
var t$9071 = basis$List$.rev$248(scc$8288[0]);
var t$9070;
var fix$9068 = {};
fix$9068.$app = function(v$8712){lab$app: while (true) {if (v$8712 == null) {return 0;
} else {var v$8713 = v$8712;
var v$8714 = v$8713[0];
var v$8715 = v$8713[1];
compiler0$OptLambda$$6.setVisited$2543(v$8714,false);
compiler0$OptLambda$$6.setDfsNo$2600(v$8714,0);
var t$9069 = v$8715;
var v$8712 = t$9069;
continue lab$app;
};
};
};
var app$8711 = fix$9068.$app;
t$9070 = (app$8711(compiler0$OptLambda$$6.rangeGraph$2934(g$8287)));
t$9072 = [t$9071,t$9070];
return t$9072[0];
};
compiler0$OptLambda$$13.genSccGraph$8397 = function(g$8400){var sccs$8401 = compiler0$OptLambda$$13.scc$8284(g$8400);
var sccGraph$8402 = compiler0$OptLambda$$12.mkGraph$6666(0);
var fix$9079 = {};
fix$9079.$foldl = function(v$8734,v$8735){if (v$8735 == null) {return v$8734;
} else {var v$8736 = v$8735;
var v$8737 = v$8736[0];
var v$8738 = v$8736[1];
var t$9083 = fix$9079.$foldl;
var t$9080;
compiler0$OptLambda$$12.addNode$6722(compiler0$OptLambda$$12.mkNode$6669([v$8734,v$8737]),sccGraph$8402);
var fix$9081 = {};
fix$9081.$app = function(v$8752){lab$app: while (true) {if (v$8752 == null) {return 0;
} else {var v$8753 = v$8752;
var v$8754 = v$8753[0];
var v$8755 = v$8753[1];
compiler0$OptLambda$$6.setSccNo$2619(v$8754,v$8734);
var t$9082 = v$8755;
var v$8752 = t$9082;
continue lab$app;
};
};
};
var app$8751 = fix$9081.$app;
app$8751(v$8737);
t$9080 = (SmlPrims.chk_ovf_i32(v$8734 + 1));
return t$9083(t$9080,v$8738);
};
};
var foldl$8733 = fix$9079.$foldl;
foldl$8733(1,sccs$8401);
var fix$9084 = {};
fix$9084.$app = function(v$8765){if (v$8765 == null) {return 0;
} else {var v$8766 = v$8765;
var v$8767 = v$8766[0];
var v$8768 = v$8766[1];
var fix$9085 = {};
fix$9085.$app = function(v$8833){if (v$8833 == null) {return 0;
} else {var v$8834 = v$8833;
var v$8835 = v$8834[0];
var v$8836 = v$8834[1];
var fix$9086 = {};
fix$9086.$app = function(v$8839){lab$app: while (true) {if (v$8839 == null) {return 0;
} else {var v$8840 = v$8839;
var v$8841 = v$8840[0];
var v$8842 = v$8840[1];
var sccNode1$8843 = compiler0$OptLambda$$12.findNode$6701((compiler0$OptLambda$$6.getSccNo$2611(v$8835))[0],sccGraph$8402);
var sccNode2$8844 = compiler0$OptLambda$$12.findNode$6701((compiler0$OptLambda$$6.getSccNo$2611(v$8841))[0],sccGraph$8402);
((sccNode1$8843 == sccNode2$8844)?false:true)?(compiler0$OptLambda$$12.addEdge$6793(sccNode1$8843,sccNode2$8844,0)):0;
var t$9087 = v$8842;
var v$8839 = t$9087;
continue lab$app;
};
};
};
var app$8838 = fix$9086.$app;
var t$9090 = app$8838;
var t$9088;
var out$8849 = compiler0$OptLambda$$6.getOutSet$2500(v$8835);
var fix$9089 = {};
fix$9089.$map = function(v$8851){if (v$8851 == null) {return null;
} else {var v$8852 = v$8851;
var v$8853 = v$8852[0];
var v$8854 = v$8852[1];
return [v$8853[0],fix$9089.$map(v$8854)];
};
};
var map$8850 = fix$9089.$map;
t$9088 = (map$8850(out$8849[0]));
t$9090(t$9088);
return fix$9085.$app(v$8836);
};
};
var app$8832 = fix$9085.$app;
app$8832(v$8767);
return fix$9084.$app(v$8768);
};
};
var app$8764 = fix$9084.$app;
app$8764(sccs$8401);
return sccGraph$8402;
};
compiler0$OptLambda$$13.layoutSccNo$8442 = function(sccNo$8445){return "sccNo " + (basis$Int32$.toString$449(sccNo$8445));
};
compiler0$OptLambda$$13.layoutComponent$8446 = function(layoutId$8449,v$8453){var v$8460 = v$8453[0];
var v$8461 = v$8453[1];
var t$9093 = ("[" + ("sccNo " + (basis$Int32$.toString$449(v$8460)))) + ": ";
var t$9092;
var fix$9091 = {};
fix$9091.$foldr = function(v$9008){if (v$9008 == null) {return "]";
} else {var v$9009 = v$9008;
var v$9010 = v$9009[0];
var v$9011 = v$9009[1];
var v$9013 = fix$9091.$foldr(v$9011);
return ((layoutId$8449(compiler0$OptLambda$$6.getNodeId$2661(v$9010))) + ",") + v$9013;
};
};
var foldr$9007 = fix$9091.$foldr;
t$9092 = (foldr$9007(v$8461));
return t$9093 + t$9092;
};
compiler0$OptLambda$$13.layoutEdge$8462 = function(NO_EDGE_INFO$8464){return "";
};
compiler0$OptLambda$$13.layoutScc$8465 = function(layoutId$8468,sccG$8471){return compiler0$OptLambda$$12.layoutGraph$6986(function(v$9021){var v$9022 = v$9021[0];
var v$9023 = v$9021[1];
var t$9096 = ("[" + ("sccNo " + (basis$Int32$.toString$449(v$9022)))) + ": ";
var t$9095;
var fix$9094 = {};
fix$9094.$foldr = function(v$9025){if (v$9025 == null) {return "]";
} else {var v$9026 = v$9025;
var v$9027 = v$9026[0];
var v$9028 = v$9026[1];
var v$9029 = fix$9094.$foldr(v$9028);
return ((layoutId$8468(compiler0$OptLambda$$6.getNodeId$2661(v$9027))) + ",") + v$9029;
};
};
var foldr$9024 = fix$9094.$foldr;
t$9095 = (foldr$9024(v$9023));
return t$9096 + t$9095;
},function(NO_EDGE_INFO$8880){return "";
},function(sccNo$8881){return "sccNo " + (basis$Int32$.toString$449(sccNo$8881));
},compiler0$OptLambda$$12.rootNodes$6849(sccG$8471));
};
compiler0$OptLambda$$13.exportSccVCG$8472 = function(title$8475,layoutId$8478,sccG$8481,stream$8484){return compiler0$OptLambda$$12.exportGraphVCG$7054(title$8475,function(v$9031){var v$9032 = v$9031[0];
var v$9033 = v$9031[1];
var t$9099 = ("[" + ("sccNo " + (basis$Int32$.toString$449(v$9032)))) + ": ";
var t$9098;
var fix$9097 = {};
fix$9097.$foldr = function(v$9035){if (v$9035 == null) {return "]";
} else {var v$9036 = v$9035;
var v$9037 = v$9036[0];
var v$9038 = v$9036[1];
var v$9039 = fix$9097.$foldr(v$9038);
return ((layoutId$8478(compiler0$OptLambda$$6.getNodeId$2661(v$9037))) + ",") + v$9039;
};
};
var foldr$9034 = fix$9097.$foldr;
t$9098 = (foldr$9034(v$9033));
return t$9099 + t$9098;
},function(NO_EDGE_INFO$8883){return "";
},function(sccNo$8884){return "sccNo " + (basis$Int32$.toString$449(sccNo$8884));
},null,sccG$8481,stream$8484);
};
compiler0$OptLambda$$13.pathsBetweenTwoNodes$8485 = function(node1$8488,node2$8491,sccG$8494){var sccNode1$8495 = compiler0$OptLambda$$12.findNode$6701((compiler0$OptLambda$$6.getSccNo$2611(node1$8488))[0],sccG$8494);
var sccNode2$8496 = compiler0$OptLambda$$12.findNode$6701((compiler0$OptLambda$$6.getSccNo$2611(node2$8491))[0],sccG$8494);
var fix$9100 = {};
fix$9100.$findPath = function(curSccNode$8500,sccNode2$8503,path$8506,paths$8509){if (curSccNode$8500 == sccNode2$8503) {return [basis$List$.rev$248([curSccNode$8500,path$8506]),paths$8509];
} else {var fix$9101 = {};
fix$9101.$foldl = function(v$8899,v$8900){lab$foldl: while (true) {if (v$8900 == null) {return v$8899;
} else {var v$8901 = v$8900;
var v$8902 = v$8901[0];
var v$8903 = v$8901[1];
var t$9102 = fix$9100.$findPath(v$8902,sccNode2$8503,[curSccNode$8500,path$8506],v$8899);
var t$9103 = v$8903;
var v$8899 = t$9102;
var v$8900 = t$9103;
continue lab$foldl;
};
};
};
var foldl$8898 = fix$9101.$foldl;
var v$9060;
var out$8907 = compiler0$OptLambda$$12.getOutSet$6536(curSccNode$8500);
var fix$9104 = {};
fix$9104.$map = function(v$8909){if (v$8909 == null) {return null;
} else {var v$8910 = v$8909;
var v$8911 = v$8910[0];
var v$8912 = v$8910[1];
return [v$8911[0],fix$9104.$map(v$8912)];
};
};
var map$8908 = fix$9104.$map;
v$9060 = (map$8908(out$8907[0]));
return foldl$8898(paths$8509,v$9060);
};
};
var findPath$8497 = fix$9100.$findPath;
return findPath$8497(sccNode1$8495,sccNode2$8496,null,null);
};
compiler0$OptLambda$$13.convertSccNodeToNodes$8520 = function(sccNode$8523){return (compiler0$OptLambda$$12.getInfoNode$6676(sccNode$8523))[0][1];
};
compiler0$OptLambda$$13.layoutPaths$8530 = function(layoutId$8533,paths$8536){var t$9118;
var t$9106;
var fix$9105 = {};
fix$9105.$map = function(v$8926){if (v$8926 == null) {return null;
} else {var v$8927 = v$8926;
var v$8928 = v$8927[0];
var v$8929 = v$8927[1];
var t$9117;
var t$9116;
var t$9115;
var t$9108;
var fix$9107 = {};
fix$9107.$map = function(v$8939){if (v$8939 == null) {return null;
} else {var v$8940 = v$8939;
var v$8941 = v$8940[0];
var v$8942 = v$8940[1];
var t$9114;
var t$9113;
var t$9109;
var v$9042 = (compiler0$OptLambda$$12.getInfoNode$6676(v$8941))[0];
var v$9043 = v$9042[0];
var v$9044 = v$9042[1];
var t$9112 = ("[" + ("sccNo " + (basis$Int32$.toString$449(v$9043)))) + ": ";
var t$9111;
var fix$9110 = {};
fix$9110.$foldr = function(v$9046){if (v$9046 == null) {return "]";
} else {var v$9047 = v$9046;
var v$9048 = v$9047[0];
var v$9049 = v$9047[1];
var v$9050 = fix$9110.$foldr(v$9049);
return ((layoutId$8533(compiler0$OptLambda$$6.getNodeId$2661(v$9048))) + ",") + v$9050;
};
};
var foldr$9045 = fix$9110.$foldr;
t$9111 = (foldr$9045(v$9044));
t$9109 = (t$9112 + t$9111);
t$9113 = [1,t$9109];
t$9114 = [t$9113,fix$9107.$map(v$8942)];
return t$9114;
};
};
var map$8938 = fix$9107.$map;
t$9108 = (map$8938(v$8928));
t$9115 = [t$9108,[0,"--->"],"]",4,"[Start path: "];
t$9116 = [0,t$9115];
t$9117 = [t$9116,fix$9105.$map(v$8929)];
return t$9117;
};
};
var map$8925 = fix$9105.$map;
t$9106 = (map$8925(paths$8536));
t$9118 = [t$9106,[0,","],"...Finishing layout of paths]",4,"[Starting layout of paths..."];
return [0,t$9118];
};
return 0;
})();