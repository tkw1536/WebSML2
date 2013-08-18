if ((typeof(basis$Path$)) == "undefined") {basis$Path$ = {};
};
(function(){basis$Path$.en$Path$45 = new String("Path");
basis$Path$.exn$Path$45 = [basis$Path$.en$Path$45];
basis$Path$.en$InvalidArc$46 = new String("InvalidArc");
basis$Path$.exn$InvalidArc$46 = [basis$Path$.en$InvalidArc$46];
basis$Path$.parentArc$84 = "..";
basis$Path$.currentArc$85 = ".";
basis$Path$.isAbsolute$86 = function(p$89){return (((p$89.length >= 1)?((basis$String$.sub$92(p$89,0)) == 47):false)?[true,"",basis$String$.extract$107(p$89,1,[1])]:[false,"",p$89])[0];
};
basis$Path$.isRelative$94 = function(p$97){return (((p$97.length >= 1)?((basis$String$.sub$92(p$97,0)) == 47):false)?[true,"",basis$String$.extract$107(p$97,1,[1])]:[false,"",p$97])[0]?false:true;
};
basis$Path$.fromString$98 = function(p$101){var v$110 = ((p$101.length >= 1)?((basis$String$.sub$92(p$101,0)) == 47):false)?[true,"",basis$String$.extract$107(p$101,1,[1])]:[false,"",p$101];
if (v$110[0]) {var v$669 = v$110[0];
var v$670 = v$110[1];
var v$671 = v$110[2];
return [basis$String$.fields$222(function(c$672){return c$672 == 47;
},v$671),v$669,v$670];
} else {switch (v$110[2]) { case "": {return [null,false,v$110[1]];
 break; }default: {var v$664 = v$110[0];
var v$665 = v$110[1];
var v$666 = v$110[2];
return [basis$String$.fields$222(function(c$667){return c$667 == 47;
},v$666),v$664,v$665];
} };
};
};
basis$Path$.isRoot$124 = function(p$127){var v$132 = ((p$127.length >= 1)?((basis$String$.sub$92(p$127,0)) == 47):false)?[true,"",basis$String$.extract$107(p$127,1,[1])]:[false,"",p$127];
if (v$132[0]) {switch (v$132[2]) { case "": {return true;
 break; }default: {return false;
} };
} else {return false;
};
};
basis$Path$.getVolume$136 = function(p$139){return (((p$139.length >= 1)?((basis$String$.sub$92(p$139,0)) == 47):false)?[true,"",basis$String$.extract$107(p$139,1,[1])]:[false,"",p$139])[1];
};
basis$Path$.validVolume$144 = function(v$884,v$885){return v$885 == "";
};
basis$Path$.toString$151 = function(v$208,v$206,v$207){var fix$897 = {};
fix$897.$h = function(v$161,v$164){lab$h: while (true) {if (v$161 == null) {return v$164;
} else {var v$175 = v$161;
var v$176 = v$175[0];
var v$177 = v$175[1];
var t$898 = v$177;
var t$899 = [v$176,["/",v$164]];
var v$161 = t$898;
var v$164 = t$899;
continue lab$h;
};
};
};
var h$158 = fix$897.$h;
if (v$207 == "") {if (v$206) {if (v$208 == null) {return v$207 + "/";
} else {var v$203 = v$208;
var v$204 = v$203[0];
var v$205 = v$203[1];
return SmlPrims.concat(basis$List$.rev$248(h$158(v$205,[v$204,["/",[v$207,null]]])));
};
} else {if (v$208 == null) {return v$207;
} else {var v$199 = v$208;
var v$200 = v$199[0];
switch (v$200) { case "": {throw basis$Path$.exn$Path$45;
 break; }default: {var v$201 = v$199[1];
return SmlPrims.concat([v$207,basis$List$.rev$248(h$158(v$201,[v$200,null]))]);
} };
};
};
} else {throw basis$Path$.exn$Path$45;
};
};
basis$Path$.concat$209 = function(v$249,v$250){if ((((v$250.length >= 1)?((basis$String$.sub$92(v$250,0)) == 47):false)?[true,"",basis$String$.extract$107(v$250,1,[1])]:[false,"",v$250])[0]) {throw basis$Path$.exn$Path$45;
} else {var v$239 = ((v$249.length >= 1)?((basis$String$.sub$92(v$249,0)) == 47):false)?[true,"",basis$String$.extract$107(v$249,1,[1])]:[false,"",v$249];
if (v$239[0]) {var v$246 = v$239[2];
switch (v$246) { case "": {return (v$239[1] + "/") + v$250;
 break; }default: {return (((v$239[1] + "/") + (((basis$String$.sub$92(v$246,SmlPrims.chk_ovf_i32(v$246.length - 1))) == 47)?(basis$String$.extract$107(v$246,0,[0,SmlPrims.chk_ovf_i32(v$246.length - 1)])):v$246)) + "/") + v$250;
} };
} else {switch (v$239[1]) { case "": {switch (v$239[2]) { case "": {return v$250;
 break; }default: {var v$867 = v$239[1];
var v$868 = v$239[2];
return ((v$867 + (((basis$String$.sub$92(v$868,SmlPrims.chk_ovf_i32(v$868.length - 1))) == 47)?(basis$String$.extract$107(v$868,0,[0,SmlPrims.chk_ovf_i32(v$868.length - 1)])):v$868)) + "/") + v$250;
} };
 break; }default: {var v$870 = v$239[1];
var v$871 = v$239[2];
return ((v$870 + (((basis$String$.sub$92(v$871,SmlPrims.chk_ovf_i32(v$871.length - 1))) == 47)?(basis$String$.extract$107(v$871,0,[0,SmlPrims.chk_ovf_i32(v$871.length - 1)])):v$871)) + "/") + v$250;
} };
};
};
};
basis$Path$.getParent$251 = function(p$254){var v$305 = basis$Path$.fromString$98(p$254);
var v$306 = v$305[1];
var v$307 = v$305[2];
var v$308 = v$305[0];
var v$294;
var t$901 = basis$List$.rev$248;
var t$900;
var v$712 = basis$List$.rev$248(v$308);
if (v$712 == null) {t$900 = ["..",null];
} else {var v$713 = v$712;
switch (v$713[0]) { case "": {var v$714 = v$713[1];
t$900 = ((v$714 == null)?(v$306?null:["..",null]):["..",v$714]);
 break; }case ".": {t$900 = ["..",v$713[1]];
 break; }case "..": {t$900 = ["..",["..",v$713[1]]];
 break; }default: {t$900 = v$713[1];
} };
};
v$294 = (t$901(t$900));
if (v$294 == null) {if (v$306) {return basis$Path$.toString$151(["",null],true,v$307);
} else {return ".";
};
} else {return basis$Path$.toString$151(v$294,v$306,v$307);
};
};
basis$Path$.mkCanonical$309 = function(p$312){var v$389 = basis$Path$.fromString$98(p$312);
var v$390 = v$389[1];
var v$391 = v$389[2];
var v$392 = v$389[0];
var t$916 = basis$Path$.toString$151;
var t$915;
var t$914 = basis$List$.rev$248;
var t$913;
var fix$902 = {};
fix$902.$h = function(v$719,v$720){lab$h: while (true) {if (v$719 == null) {return (v$720 == null)?(v$390?["",null]:[".",null]):v$720;
} else {var v$724 = v$719;
var v$725 = v$724[0];
switch (v$725) { case "": {var v$726 = v$724[1];
var t$909 = v$726;
var t$910 = v$720;
var v$719 = t$909;
var v$720 = t$910;
continue lab$h;
 break; }case ".": {var v$728 = v$724[1];
var t$907 = v$728;
var t$908 = v$720;
var v$719 = t$907;
var v$720 = t$908;
continue lab$h;
 break; }case "..": {var v$730 = v$724[1];
var t$904 = v$730;
var t$903;
if (v$720 == null) {t$903 = (v$390?null:["..",null]);
} else {var v$733 = v$720;
switch (v$733[0]) { case "..": {t$903 = ["..",["..",v$733[1]]];
 break; }default: {t$903 = v$733[1];
} };
};
var t$905 = t$904;
var t$906 = t$903;
var v$719 = t$905;
var v$720 = t$906;
continue lab$h;
 break; }default: {var v$734 = v$724[1];
var t$911 = v$734;
var t$912 = [v$725,v$720];
var v$719 = t$911;
var v$720 = t$912;
continue lab$h;
} };
};
};
};
var h$718 = fix$902.$h;
t$913 = (h$718(v$392,null));
t$915 = (t$914(t$913));
return t$916(t$915,v$390,v$391);
};
var fix$917 = {};
fix$917.$parentize = function(v$396){if (v$396 == null) {return null;
} else {var v$402 = v$396;
var v$403 = v$402[1];
return ["..",fix$917.$parentize(v$403)];
};
};
var parentize$393 = fix$917.$parentize;
basis$Path$.mkRelative$404 = function(v$474,v$475){var v$842 = basis$Path$.fromString$98(v$474);
var v$843 = basis$Path$.fromString$98(basis$Path$.mkCanonical$309(v$475));
if (v$843[1]) {if (v$842[1]) {var v$470 = v$842[2];
var v$471 = v$842[0];
var v$472 = v$843[2];
var v$473 = v$843[0];
var fix$918 = {};
fix$918.$h = function(v$426,v$429){if (v$426 == null) {if (v$429 == null) {return [".",null];
} else {return parentize$393(v$429);
};
} else {if (v$429 == null) {return v$426;
} else {var v$457 = v$426;
var v$458 = v$457[0];
var v$459 = v$457[1];
var v$460 = v$429;
var v$461 = v$460[0];
var v$462 = v$460[1];
if (v$458 == v$461) {return fix$918.$h(v$459,v$462);
} else {var t$925 = basis$List$.s$n$259;
var t$924 = parentize$393(v$429);
var t$923;
var t$919;
var v$853 = ["",null];
var fix$920 = {};
fix$920.$eq_list = function(v$890,v$891){lab$eq_list: while (true) {if (v$890 == null) {return (v$891 == null)?true:false;
} else {if (v$891 == null) {return false;
} else {var v$892 = v$890;
var v$893 = v$891;
if (v$892[0] == v$893[0]) {var t$921 = v$892[1];
var t$922 = v$893[1];
var v$890 = t$921;
var v$891 = t$922;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$889 = fix$920.$eq_list;
t$919 = (eq_list$889(v$471,v$853));
t$923 = (t$919?null:v$426);
return t$925(t$924,t$923);
};
};
};
};
var h$423 = fix$918.$h;
if ((v$470 == v$472)?false:true) {throw basis$Path$.exn$Path$45;
} else {return basis$Path$.toString$151(h$423(v$471,v$473),false,"");
};
} else {return v$474;
};
} else {throw basis$Path$.exn$Path$45;
};
};
basis$Path$.mkAbsolute$476 = function(v$489,v$490){if ((((v$490.length >= 1)?((basis$String$.sub$92(v$490,0)) == 47):false)?[true,"",basis$String$.extract$107(v$490,1,[1])]:[false,"",v$490])[0]?false:true) {throw basis$Path$.exn$Path$45;
} else {if ((((v$489.length >= 1)?((basis$String$.sub$92(v$489,0)) == 47):false)?[true,"",basis$String$.extract$107(v$489,1,[1])]:[false,"",v$489])[0]) {return v$489;
} else {return basis$Path$.mkCanonical$309(basis$Path$.concat$209(v$490,v$489));
};
};
};
basis$Path$.isCanonical$491 = function(p$494){return (basis$Path$.mkCanonical$309(p$494)) == p$494;
};
basis$Path$.joinDirFile$495 = function(v$500,v$501){return basis$Path$.concat$209(v$500,v$501);
};
basis$Path$.splitDirFile$502 = function(p$505){var v$525 = basis$Path$.fromString$98(p$505);
var v$526 = v$525[1];
var v$527 = v$525[2];
var v$528 = v$525[0];
var v$515 = basis$List$.rev$248(v$528);
if (v$515 == null) {return [basis$Path$.toString$151(null,v$526,v$527),""];
} else {var v$522 = v$515;
var v$523 = v$522[0];
var v$524 = v$522[1];
return [basis$Path$.toString$151(basis$List$.rev$248(v$524),v$526,v$527),v$523];
};
};
basis$Path$.dir$529 = function(s$532){var t$926;
var v$767 = basis$Path$.fromString$98(s$532);
var v$768 = v$767[1];
var v$769 = v$767[2];
var v$770 = v$767[0];
var v$771 = basis$List$.rev$248(v$770);
if (v$771 == null) {t$926 = [basis$Path$.toString$151(null,v$768,v$769),""];
} else {var v$772 = v$771;
var v$773 = v$772[0];
var v$774 = v$772[1];
t$926 = [basis$Path$.toString$151(basis$List$.rev$248(v$774),v$768,v$769),v$773];
};
return t$926[0];
};
basis$Path$.file$537 = function(s$540){var t$927;
var v$776 = basis$Path$.fromString$98(s$540);
var v$777 = v$776[1];
var v$778 = v$776[2];
var v$779 = v$776[0];
var v$780 = basis$List$.rev$248(v$779);
if (v$780 == null) {t$927 = [basis$Path$.toString$151(null,v$777,v$778),""];
} else {var v$781 = v$780;
var v$782 = v$781[0];
var v$783 = v$781[1];
t$927 = [basis$Path$.toString$151(basis$List$.rev$248(v$783),v$777,v$778),v$782];
};
return t$927[1];
};
basis$Path$.joinBaseExt$545 = function(v$887,v$559){switch (v$559[0]) { case 1: {return v$887;
 break; }default: {var v$561 = v$559[1];
switch (v$561) { case "": {return v$887;
 break; }default: {return (v$887 + ".") + v$561;
} };
} };
};
basis$Path$.splitBaseExt$564 = function(s$567){var v$592;
var v$787 = basis$Path$.fromString$98(s$567);
var v$788 = v$787[1];
var v$789 = v$787[2];
var v$790 = v$787[0];
var v$791 = basis$List$.rev$248(v$790);
if (v$791 == null) {v$592 = [basis$Path$.toString$151(null,v$788,v$789),""];
} else {var v$792 = v$791;
var v$793 = v$792[0];
var v$794 = v$792[1];
v$592 = [basis$Path$.toString$151(basis$List$.rev$248(v$794),v$788,v$789),v$793];
};
var v$593 = v$592[0];
var v$594 = v$592[1];
var v$586 = basis$Substring$.splitr$824(function(c$591){return (c$591 == 46)?false:true;
},[v$594,0,v$594.length]);
var v$587 = v$586[0];
var v$588 = v$586[1];
if ((v$588[2] == 0)?true:((v$587[2] == 0)?true:(v$587[2] == 1))) {return [s$567,[1]];
} else {var t$928;
var v$865;
var v$888 = (basis$Substring$.trimr$232(1))(v$587);
v$865 = (basis$Substring$.string$108(v$888[0],v$888[1],v$888[2]));
t$928 = (basis$Path$.concat$209(v$593,v$865));
return [t$928,[0,basis$Substring$.string$108(v$588[0],v$588[1],v$588[2])]];
};
};
basis$Path$.ext$595 = function(s$598){return (basis$Path$.splitBaseExt$564(s$598))[1];
};
basis$Path$.base$603 = function(s$606){return (basis$Path$.splitBaseExt$564(s$606))[0];
};
basis$Path$.fromUnixPath$611 = function(p$614){return p$614;
};
basis$Path$.toUnixPath$615 = function(p$618){return p$618;
};
return 0;
})();