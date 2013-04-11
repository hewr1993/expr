(function(){
var _1,_2,_3,_4,_5={},_6={},_7=/\\/g;
var _8=function(_9,_a){
if(_9==null){
return null;
}
if(_9.Slick===true){
return _9;
}
_9=(""+_9).replace(/^\s+|\s+$/g,"");
_4=!!_a;
var _b=(_4)?_6:_5;
if(_b[_9]){
return _b[_9];
}
_1={Slick:true,expressions:[],raw:_9,reverse:function(){
return _8(this.raw,true);
}};
_2=-1;
while(_9!=(_9=_9.replace(_c,parser))){
}
_1.length=_1.expressions.length;
return _b[_9]=(_4)?_d(_1):_1;
};
var _e=function(_f){
if(_f==="!"){
return " ";
}else{
if(_f===" "){
return "!";
}else{
if((/^!/).test(_f)){
return _f.replace(/^!/,"");
}else{
return "!"+_f;
}
}
}
};
var _d=function(_10){
var _11=_10.expressions;
for(var i=0;i<_11.length;i++){
var exp=_11[i];
var _14={parts:[],tag:"*",combinator:_e(exp[0].combinator)};
for(var j=0;j<exp.length;j++){
var _16=exp[j];
if(!_16.reverseCombinator){
_16.reverseCombinator=" ";
}
_16.combinator=_16.reverseCombinator;
delete _16.reverseCombinator;
}
exp.reverse().push(_14);
}
return _10;
};
var _17=function(_18){
return _18.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,"\\$&");
};
var _c=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|:+(<unicode>+)(?:\\((?:(?:([\"'])([^\\12]*)\\12)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+_17(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));
function parser(_19,_1a,_1b,_1c,_1d,id,_1f,_20,_21,_22,_23,_24,_25,_26,_27){
if(_1a||_2===-1){
_1.expressions[++_2]=[];
_3=-1;
if(_1a){
return "";
}
}
if(_1b||_1c||_3===-1){
_1b=_1b||" ";
var _28=_1.expressions[_2];
if(_4&&_28[_3]){
_28[_3].reverseCombinator=_e(_1b);
}
_28[++_3]={combinator:_1b,tag:"*"};
}
var _29=_1.expressions[_2][_3];
if(_1d){
_29.tag=_1d.replace(_7,"");
}else{
if(id){
_29.id=id.replace(_7,"");
}else{
if(_1f){
_1f=_1f.replace(_7,"");
if(!_29.classList){
_29.classList=[];
}
if(!_29.classes){
_29.classes=[];
}
_29.classList.push(_1f);
_29.classes.push({value:_1f,regexp:new RegExp("(^|\\s)"+_17(_1f)+"(\\s|$)")});
}else{
if(_24){
_27=_27||_26;
_27=_27?_27.replace(_7,""):null;
if(!_29.pseudos){
_29.pseudos=[];
}
_29.pseudos.push({key:_24.replace(_7,""),value:_27});
}else{
if(_20){
_20=_20.replace(_7,"");
_23=(_23||"").replace(_7,"");
var _2a,_c;
switch(_21){
case "^=":
_c=new RegExp("^"+_17(_23));
break;
case "$=":
_c=new RegExp(_17(_23)+"$");
break;
case "~=":
_c=new RegExp("(^|\\s)"+_17(_23)+"(\\s|$)");
break;
case "|=":
_c=new RegExp("^"+_17(_23)+"(-|$)");
break;
case "=":
_2a=function(_2b){
return _23==_2b;
};
break;
case "*=":
_2a=function(_2c){
return _2c&&_2c.indexOf(_23)>-1;
};
break;
case "!=":
_2a=function(_2d){
return _23!=_2d;
};
break;
default:
_2a=function(_2e){
return !!_2e;
};
}
if(_23==""&&(/^[*$^]=$/).test(_21)){
_2a=function(){
return false;
};
}
if(!_2a){
_2a=function(_2f){
return _2f&&_c.test(_2f);
};
}
if(!_29.attributes){
_29.attributes=[];
}
_29.attributes.push({key:_20,operator:_21,value:_23,test:_2a});
}
}
}
}
}
return "";
}
var _30=(this.Slick||{});
_30.parse=function(_31){
return _8(_31);
};
_30.escapeRegExp=_17;
if(!this.Slick){
this.Slick=_30;
}
}).apply((typeof exports!="undefined")?exports:this);
(function(){
var _32=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,_33=0,_34=Object.prototype.toString,_35=false,_36=true;
[0,0].sort(function(){
_36=false;
return 0;
});
var _37=function(_38,_39,_3a,_3b){
_3a=_3a||[];
_39=_39||document;
var _3c=_39;
if(_39.nodeType!==1&&_39.nodeType!==9){
return [];
}
if(!_38||typeof _38!=="string"){
return _3a;
}
var m,set,_3f,_40,ret,cur,pop,i,_45=true,_46=_37.isXML(_39),_47=[],_48=_38;
do{
_32.exec("");
m=_32.exec(_48);
if(m){
_48=m[3];
_47.push(m[1]);
if(m[2]){
_40=m[3];
break;
}
}
}while(m);
if(_47.length>1&&_49.exec(_38)){
if(_47.length===2&&_4a.relative[_47[0]]){
set=_4b(_47[0]+_47[1],_39);
}else{
set=_4a.relative[_47[0]]?[_39]:_37(_47.shift(),_39);
while(_47.length){
_38=_47.shift();
if(_4a.relative[_38]){
_38+=_47.shift();
}
set=_4b(_38,set);
}
}
}else{
if(!_3b&&_47.length>1&&_39.nodeType===9&&!_46&&_4a.match.ID.test(_47[0])&&!_4a.match.ID.test(_47[_47.length-1])){
ret=_37.find(_47.shift(),_39,_46);
_39=ret.expr?_37.filter(ret.expr,ret.set)[0]:ret.set[0];
}
if(_39){
ret=_3b?{expr:_47.pop(),set:_4c(_3b)}:_37.find(_47.pop(),_47.length===1&&(_47[0]==="~"||_47[0]==="+")&&_39.parentNode?_39.parentNode:_39,_46);
set=ret.expr?_37.filter(ret.expr,ret.set):ret.set;
if(_47.length>0){
_3f=_4c(set);
}else{
_45=false;
}
while(_47.length){
cur=_47.pop();
pop=cur;
if(!_4a.relative[cur]){
cur="";
}else{
pop=_47.pop();
}
if(pop==null){
pop=_39;
}
_4a.relative[cur](_3f,pop,_46);
}
}else{
_3f=_47=[];
}
}
if(!_3f){
_3f=set;
}
if(!_3f){
_37.error(cur||_38);
}
if(_34.call(_3f)==="[object Array]"){
if(!_45){
_3a.push.apply(_3a,_3f);
}else{
if(_39&&_39.nodeType===1){
for(i=0;_3f[i]!=null;i++){
if(_3f[i]&&(_3f[i]===true||_3f[i].nodeType===1&&_37.contains(_39,_3f[i]))){
_3a.push(set[i]);
}
}
}else{
for(i=0;_3f[i]!=null;i++){
if(_3f[i]&&_3f[i].nodeType===1){
_3a.push(set[i]);
}
}
}
}
}else{
_4c(_3f,_3a);
}
if(_40){
_37(_40,_3c,_3a,_3b);
_37.uniqueSort(_3a);
}
return _3a;
};
_37.uniqueSort=function(_4d){
if(_4e){
_35=_36;
_4d.sort(_4e);
if(_35){
for(var i=1;i<_4d.length;i++){
if(_4d[i]===_4d[i-1]){
_4d.splice(i--,1);
}
}
}
}
return _4d;
};
_37.matches=function(_50,set){
return _37(_50,null,null,set);
};
_37.matchesSelector=function(_52,_53){
return _37(_53,null,null,[_52]).length>0;
};
_37.find=function(_54,_55,_56){
var set;
if(!_54){
return [];
}
for(var i=0,l=_4a.order.length;i<l;i++){
var _5a,_5b=_4a.order[i];
if((_5a=_4a.leftMatch[_5b].exec(_54))){
var _5c=_5a[1];
_5a.splice(1,1);
if(_5c.substr(_5c.length-1)!=="\\"){
_5a[1]=(_5a[1]||"").replace(/\\/g,"");
set=_4a.find[_5b](_5a,_55,_56);
if(set!=null){
_54=_54.replace(_4a.match[_5b],"");
break;
}
}
}
}
if(!set){
set=_55.getElementsByTagName("*");
}
return {set:set,expr:_54};
};
_37.filter=function(_5d,set,_5f,not){
var _61,_62,old=_5d,_64=[],_65=set,_66=set&&set[0]&&_37.isXML(set[0]);
while(_5d&&set.length){
for(var _67 in _4a.filter){
if((_61=_4a.leftMatch[_67].exec(_5d))!=null&&_61[2]){
var _68,_69,_6a=_4a.filter[_67],_6b=_61[1];
_62=false;
_61.splice(1,1);
if(_6b.substr(_6b.length-1)==="\\"){
continue;
}
if(_65===_64){
_64=[];
}
if(_4a.preFilter[_67]){
_61=_4a.preFilter[_67](_61,_65,_5f,_64,not,_66);
if(!_61){
_62=_68=true;
}else{
if(_61===true){
continue;
}
}
}
if(_61){
for(var i=0;(_69=_65[i])!=null;i++){
if(_69){
_68=_6a(_69,_61,i,_65);
var _6d=not^!!_68;
if(_5f&&_68!=null){
if(_6d){
_62=true;
}else{
_65[i]=false;
}
}else{
if(_6d){
_64.push(_69);
_62=true;
}
}
}
}
}
if(_68!==undefined){
if(!_5f){
_65=_64;
}
_5d=_5d.replace(_4a.match[_67],"");
if(!_62){
return [];
}
break;
}
}
}
if(_5d===old){
if(_62==null){
_37.error(_5d);
}else{
break;
}
}
old=_5d;
}
return _65;
};
_37.error=function(msg){
throw "Syntax error, unrecognized expression: "+msg;
};
var _4a=_37.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(_6f){
return _6f.getAttribute("href");
}},relative:{"+":function(_70,_71){
var _72=typeof _71==="string",_73=_72&&!/\W/.test(_71),_74=_72&&!_73;
if(_73){
_71=_71.toLowerCase();
}
for(var i=0,l=_70.length,_77;i<l;i++){
if((_77=_70[i])){
while((_77=_77.previousSibling)&&_77.nodeType!==1){
}
_70[i]=_74||_77&&_77.nodeName.toLowerCase()===_71?_77||false:_77===_71;
}
}
if(_74){
_37.filter(_71,_70,true);
}
},">":function(_78,_79){
var _7a,_7b=typeof _79==="string",i=0,l=_78.length;
if(_7b&&!/\W/.test(_79)){
_79=_79.toLowerCase();
for(;i<l;i++){
_7a=_78[i];
if(_7a){
var _7e=_7a.parentNode;
_78[i]=_7e.nodeName.toLowerCase()===_79?_7e:false;
}
}
}else{
for(;i<l;i++){
_7a=_78[i];
if(_7a){
_78[i]=_7b?_7a.parentNode:_7a.parentNode===_79;
}
}
if(_7b){
_37.filter(_79,_78,true);
}
}
},"":function(_7f,_80,_81){
var _82,_83=_33++,_84=dirCheck;
if(typeof _80==="string"&&!/\W/.test(_80)){
_80=_80.toLowerCase();
_82=_80;
_84=dirNodeCheck;
}
_84("parentNode",_80,_83,_7f,_82,_81);
},"~":function(_85,_86,_87){
var _88,_89=_33++,_8a=dirCheck;
if(typeof _86==="string"&&!/\W/.test(_86)){
_86=_86.toLowerCase();
_88=_86;
_8a=dirNodeCheck;
}
_8a("previousSibling",_86,_89,_85,_88,_87);
}},find:{ID:function(_8b,_8c,_8d){
if(typeof _8c.getElementById!=="undefined"&&!_8d){
var m=_8c.getElementById(_8b[1]);
return m&&m.parentNode?[m]:[];
}
},NAME:function(_8f,_90){
if(typeof _90.getElementsByName!=="undefined"){
var ret=[],_92=_90.getElementsByName(_8f[1]);
for(var i=0,l=_92.length;i<l;i++){
if(_92[i].getAttribute("name")===_8f[1]){
ret.push(_92[i]);
}
}
return ret.length===0?null:ret;
}
},TAG:function(_95,_96){
return _96.getElementsByTagName(_95[1]);
}},preFilter:{CLASS:function(_97,_98,_99,_9a,not,_9c){
_97=" "+_97[1].replace(/\\/g,"")+" ";
if(_9c){
return _97;
}
for(var i=0,_9e;(_9e=_98[i])!=null;i++){
if(_9e){
if(not^(_9e.className&&(" "+_9e.className+" ").replace(/[\t\n\r]/g," ").indexOf(_97)>=0)){
if(!_99){
_9a.push(_9e);
}
}else{
if(_99){
_98[i]=false;
}
}
}
}
return false;
},ID:function(_9f){
return _9f[1].replace(/\\/g,"");
},TAG:function(_a0,_a1){
return _a0[1].toLowerCase();
},CHILD:function(_a2){
if(_a2[1]==="nth"){
if(!_a2[2]){
_37.error(_a2[0]);
}
_a2[2]=_a2[2].replace(/^\+|\s*/g,"");
var _a3=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(_a2[2]==="even"&&"2n"||_a2[2]==="odd"&&"2n+1"||!/\D/.test(_a2[2])&&"0n+"+_a2[2]||_a2[2]);
_a2[2]=(_a3[1]+(_a3[2]||1))-0;
_a2[3]=_a3[3]-0;
}else{
if(_a2[2]){
_37.error(_a2[0]);
}
}
_a2[0]=_33++;
return _a2;
},ATTR:function(_a4,_a5,_a6,_a7,not,_a9){
var _aa=_a4[1].replace(/\\/g,"");
if(!_a9&&_4a.attrMap[_aa]){
_a4[1]=_4a.attrMap[_aa];
}
if(_a4[2]==="~="){
_a4[4]=" "+_a4[4]+" ";
}
return _a4;
},PSEUDO:function(_ab,_ac,_ad,_ae,not){
if(_ab[1]==="not"){
if((_32.exec(_ab[3])||"").length>1||/^\w/.test(_ab[3])){
_ab[3]=_37(_ab[3],null,null,_ac);
}else{
var ret=_37.filter(_ab[3],_ac,_ad,true^not);
if(!_ad){
_ae.push.apply(_ae,ret);
}
return false;
}
}else{
if(_4a.match.POS.test(_ab[0])||_4a.match.CHILD.test(_ab[0])){
return true;
}
}
return _ab;
},POS:function(_b1){
_b1.unshift(true);
return _b1;
}},filters:{enabled:function(_b2){
return _b2.disabled===false&&_b2.type!=="hidden";
},disabled:function(_b3){
return _b3.disabled===true;
},checked:function(_b4){
return _b4.checked===true;
},selected:function(_b5){
_b5.parentNode.selectedIndex;
return _b5.selected===true;
},parent:function(_b6){
return !!_b6.firstChild;
},empty:function(_b7){
return !_b7.firstChild;
},has:function(_b8,i,_ba){
return !!_37(_ba[3],_b8).length;
},header:function(_bb){
return (/h\d/i).test(_bb.nodeName);
},text:function(_bc){
return "text"===_bc.type;
},radio:function(_bd){
return "radio"===_bd.type;
},checkbox:function(_be){
return "checkbox"===_be.type;
},file:function(_bf){
return "file"===_bf.type;
},password:function(_c0){
return "password"===_c0.type;
},submit:function(_c1){
return "submit"===_c1.type;
},image:function(_c2){
return "image"===_c2.type;
},reset:function(_c3){
return "reset"===_c3.type;
},button:function(_c4){
return "button"===_c4.type||_c4.nodeName.toLowerCase()==="button";
},input:function(_c5){
return (/input|select|textarea|button/i).test(_c5.nodeName);
}},setFilters:{first:function(_c6,i){
return i===0;
},last:function(_c8,i,_ca,_cb){
return i===_cb.length-1;
},even:function(_cc,i){
return i%2===0;
},odd:function(_ce,i){
return i%2===1;
},lt:function(_d0,i,_d2){
return i<_d2[3]-0;
},gt:function(_d3,i,_d5){
return i>_d5[3]-0;
},nth:function(_d6,i,_d8){
return _d8[3]-0===i;
},eq:function(_d9,i,_db){
return _db[3]-0===i;
}},filter:{PSEUDO:function(_dc,_dd,i,_df){
var _e0=_dd[1],_e1=_4a.filters[_e0];
if(_e1){
return _e1(_dc,i,_dd,_df);
}else{
if(_e0==="contains"){
return (_dc.textContent||_dc.innerText||_37.getText([_dc])||"").indexOf(_dd[3])>=0;
}else{
if(_e0==="not"){
var not=_dd[3];
for(var j=0,l=not.length;j<l;j++){
if(not[j]===_dc){
return false;
}
}
return true;
}else{
_37.error(_e0);
}
}
}
},CHILD:function(_e5,_e6){
var _e7=_e6[1],_e8=_e5;
switch(_e7){
case "only":
case "first":
while((_e8=_e8.previousSibling)){
if(_e8.nodeType===1){
return false;
}
}
if(_e7==="first"){
return true;
}
_e8=_e5;
case "last":
while((_e8=_e8.nextSibling)){
if(_e8.nodeType===1){
return false;
}
}
return true;
case "nth":
var _e9=_e6[2],_ea=_e6[3];
if(_e9===1&&_ea===0){
return true;
}
var _eb=_e6[0],_ec=_e5.parentNode;
if(_ec&&(_ec.sizcache!==_eb||!_e5.nodeIndex)){
var _ed=0;
for(_e8=_ec.firstChild;_e8;_e8=_e8.nextSibling){
if(_e8.nodeType===1){
_e8.nodeIndex=++_ed;
}
}
_ec.sizcache=_eb;
}
var _ee=_e5.nodeIndex-_ea;
if(_e9===0){
return _ee===0;
}else{
return (_ee%_e9===0&&_ee/_e9>=0);
}
}
},ID:function(_ef,_f0){
return _ef.nodeType===1&&_ef.getAttribute("id")===_f0;
},TAG:function(_f1,_f2){
return (_f2==="*"&&_f1.nodeType===1)||_f1.nodeName.toLowerCase()===_f2;
},CLASS:function(_f3,_f4){
return (" "+(_f3.className||_f3.getAttribute("class"))+" ").indexOf(_f4)>-1;
},ATTR:function(_f5,_f6){
var _f7=_f6[1],_f8=_4a.attrHandle[_f7]?_4a.attrHandle[_f7](_f5):_f5[_f7]!=null?_f5[_f7]:_f5.getAttribute(_f7),_f9=_f8+"",_fa=_f6[2],_fb=_f6[4];
return _f8==null?_fa==="!=":_fa==="="?_f9===_fb:_fa==="*="?_f9.indexOf(_fb)>=0:_fa==="~="?(" "+_f9+" ").indexOf(_fb)>=0:!_fb?_f9&&_f8!==false:_fa==="!="?_f9!==_fb:_fa==="^="?_f9.indexOf(_fb)===0:_fa==="$="?_f9.substr(_f9.length-_fb.length)===_fb:_fa==="|="?_f9===_fb||_f9.substr(0,_fb.length+1)===_fb+"-":false;
},POS:function(_fc,_fd,i,_ff){
var name=_fd[2],_101=_4a.setFilters[name];
if(_101){
return _101(_fc,i,_fd,_ff);
}
}}};
var _49=_4a.match.POS,_102=function(all,num){
return "\\"+(num-0+1);
};
for(var type in _4a.match){
_4a.match[type]=new RegExp(_4a.match[type].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
_4a.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+_4a.match[type].source.replace(/\\(\d+)/g,_102));
}
var _4c=function(_106,_107){
_106=Array.prototype.slice.call(_106,0);
if(_107){
_107.push.apply(_107,_106);
return _107;
}
return _106;
};
try{
Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}
catch(e){
_4c=function(_108,_109){
var i=0,ret=_109||[];
if(_34.call(_108)==="[object Array]"){
Array.prototype.push.apply(ret,_108);
}else{
if(typeof _108.length==="number"){
for(var l=_108.length;i<l;i++){
ret.push(_108[i]);
}
}else{
for(;_108[i];i++){
ret.push(_108[i]);
}
}
}
return ret;
};
}
var _4e,_10d;
if(document.documentElement.compareDocumentPosition){
_4e=function(a,b){
if(a===b){
_35=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){
return a.compareDocumentPosition?-1:1;
}
return a.compareDocumentPosition(b)&4?-1:1;
};
}else{
_4e=function(a,b){
var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;
if(a===b){
_35=true;
return 0;
}else{
if(aup===bup){
return _10d(a,b);
}else{
if(!aup){
return -1;
}else{
if(!bup){
return 1;
}
}
}
}
while(cur){
ap.unshift(cur);
cur=cur.parentNode;
}
cur=bup;
while(cur){
bp.unshift(cur);
cur=cur.parentNode;
}
al=ap.length;
bl=bp.length;
for(var i=0;i<al&&i<bl;i++){
if(ap[i]!==bp[i]){
return _10d(ap[i],bp[i]);
}
}
return i===al?_10d(a,bp[i],-1):_10d(ap[i],b,1);
};
_10d=function(a,b,ret){
if(a===b){
return ret;
}
var cur=a.nextSibling;
while(cur){
if(cur===b){
return -1;
}
cur=cur.nextSibling;
}
return 1;
};
}
_37.getText=function(_11e){
var ret="",elem;
for(var i=0;_11e[i];i++){
elem=_11e[i];
if(elem.nodeType===3||elem.nodeType===4){
ret+=elem.nodeValue;
}else{
if(elem.nodeType!==8){
ret+=_37.getText(elem.childNodes);
}
}
}
return ret;
};
(function(){
var form=document.createElement("div"),id="script"+(new Date()).getTime(),root=document.documentElement;
form.innerHTML="<a name='"+id+"'/>";
root.insertBefore(form,root.firstChild);
if(document.getElementById(id)){
_4a.find.ID=function(_125,_126,_127){
if(typeof _126.getElementById!=="undefined"&&!_127){
var m=_126.getElementById(_125[1]);
return m?m.id===_125[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===_125[1]?[m]:undefined:[];
}
};
_4a.filter.ID=function(elem,_12a){
var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return elem.nodeType===1&&node&&node.nodeValue===_12a;
};
}
root.removeChild(form);
root=form=null;
})();
(function(){
var div=document.createElement("div");
div.appendChild(document.createComment(""));
if(div.getElementsByTagName("*").length>0){
_4a.find.TAG=function(_12d,_12e){
var _12f=_12e.getElementsByTagName(_12d[1]);
if(_12d[1]==="*"){
var tmp=[];
for(var i=0;_12f[i];i++){
if(_12f[i].nodeType===1){
tmp.push(_12f[i]);
}
}
_12f=tmp;
}
return _12f;
};
}
div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){
_4a.attrHandle.href=function(elem){
return elem.getAttribute("href",2);
};
}
div=null;
})();
if(document.querySelectorAll){
(function(){
var _133=_37,div=document.createElement("div"),id="__sizzle__";
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){
return;
}
_37=function(_136,_137,_138,seed){
_137=_137||document;
_136=_136.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!seed&&!_37.isXML(_137)){
if(_137.nodeType===9){
try{
return _4c(_137.querySelectorAll(_136),_138);
}
catch(qsaError){
}
}else{
if(_137.nodeType===1&&_137.nodeName.toLowerCase()!=="object"){
var old=_137.getAttribute("id"),nid=old||id,_13c=_137.parentNode,_13d=/^\s*[+~]/.test(_136);
if(!old){
_137.setAttribute("id",nid);
}else{
nid=nid.replace(/'/g,"\\$&");
}
if(_13d&&_13c){
_137=_137.parentNode;
}
try{
if(!_13d||_13c){
return _4c(_137.querySelectorAll("[id='"+nid+"'] "+_136),_138);
}
}
catch(pseudoError){
}
finally{
if(!old){
_137.removeAttribute("id");
}
}
}
}
}
return _133(_136,_137,_138,seed);
};
for(var prop in _133){
_37[prop]=_133[prop];
}
div=null;
})();
}
(function(){
var html=document.documentElement,_140=html.matchesSelector||html.mozMatchesSelector||html.webkitMatchesSelector||html.msMatchesSelector,_141=false;
try{
_140.call(document.documentElement,"[test!='']:sizzle");
}
catch(pseudoError){
_141=true;
}
if(_140){
_37.matchesSelector=function(node,expr){
expr=expr.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!_37.isXML(node)){
try{
if(_141||!_4a.match.PSEUDO.test(expr)&&!/!=/.test(expr)){
return _140.call(node,expr);
}
}
catch(e){
}
}
return _37(expr,null,null,[node]).length>0;
};
}
})();
(function(){
var div=document.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){
return;
}
div.lastChild.className="e";
if(div.getElementsByClassName("e").length===1){
return;
}
_4a.order.splice(1,0,"CLASS");
_4a.find.CLASS=function(_145,_146,_147){
if(typeof _146.getElementsByClassName!=="undefined"&&!_147){
return _146.getElementsByClassName(_145[1]);
}
};
div=null;
})();
function dirNodeCheck(dir,cur,_14a,_14b,_14c,_14d){
for(var i=0,l=_14b.length;i<l;i++){
var elem=_14b[i];
if(elem){
var _151=false;
elem=elem[dir];
while(elem){
if(elem.sizcache===_14a){
_151=_14b[elem.sizset];
break;
}
if(elem.nodeType===1&&!_14d){
elem.sizcache=_14a;
elem.sizset=i;
}
if(elem.nodeName.toLowerCase()===cur){
_151=elem;
break;
}
elem=elem[dir];
}
_14b[i]=_151;
}
}
}
function dirCheck(dir,cur,_154,_155,_156,_157){
for(var i=0,l=_155.length;i<l;i++){
var elem=_155[i];
if(elem){
var _15b=false;
elem=elem[dir];
while(elem){
if(elem.sizcache===_154){
_15b=_155[elem.sizset];
break;
}
if(elem.nodeType===1){
if(!_157){
elem.sizcache=_154;
elem.sizset=i;
}
if(typeof cur!=="string"){
if(elem===cur){
_15b=true;
break;
}
}else{
if(_37.filter(cur,[elem]).length>0){
_15b=elem;
break;
}
}
}
elem=elem[dir];
}
_155[i]=_15b;
}
}
}
if(document.documentElement.contains){
_37.contains=function(a,b){
return a!==b&&(a.contains?a.contains(b):true);
};
}else{
if(document.documentElement.compareDocumentPosition){
_37.contains=function(a,b){
return !!(a.compareDocumentPosition(b)&16);
};
}else{
_37.contains=function(){
return false;
};
}
}
_37.isXML=function(elem){
var _161=(elem?elem.ownerDocument||elem:0).documentElement;
return _161?_161.nodeName!=="HTML":false;
};
var _4b=function(_162,_163){
var _164,_165=[],_166="",root=_163.nodeType?[_163]:_163;
while((_164=_4a.match.PSEUDO.exec(_162))){
_166+=_164[0];
_162=_162.replace(_4a.match.PSEUDO,"");
}
_162=_4a.relative[_162]?_162+"*":_162;
for(var i=0,l=root.length;i<l;i++){
_37(_162,root[i],_165);
}
return _37.filter(_166,_165);
};
window.Sizzle=_37;
})();
var Mustache=function(){
var _16a=function(){
};
_16a.prototype={otag:"{{",ctag:"}}",pragmas:{},buffer:[],pragmas_implemented:{"IMPLICIT-ITERATOR":true},context:{},render:function(_16b,_16c,_16d,_16e){
if(!_16e){
this.context=_16c;
this.buffer=[];
}
if(!this.includes("",_16b)){
if(_16e){
return _16b;
}else{
this.send(_16b);
return;
}
}
_16b=this.render_pragmas(_16b);
var html=this.render_section(_16b,_16c,_16d);
if(_16e){
return this.render_tags(html,_16c,_16d,_16e);
}
this.render_tags(html,_16c,_16d,_16e);
},send:function(line){
if(line!=""){
this.buffer.push(line);
}
},render_pragmas:function(_171){
if(!this.includes("%",_171)){
return _171;
}
var that=this;
var _173=new RegExp(this.otag+"%([\\w-]+) ?([\\w]+=[\\w]+)?"+this.ctag);
return _171.replace(_173,function(_174,_175,_176){
if(!that.pragmas_implemented[_175]){
throw ({message:"This implementation of mustache doesn't understand the '"+_175+"' pragma"});
}
that.pragmas[_175]={};
if(_176){
var opts=_176.split("=");
that.pragmas[_175][opts[0]]=opts[1];
}
return "";
});
},render_partial:function(name,_179,_17a){
name=this.trim(name);
if(!_17a||_17a[name]===undefined){
throw ({message:"unknown_partial '"+name+"'"});
}
if(typeof (_179[name])!="object"){
return this.render(_17a[name],_179,_17a,true);
}
return this.render(_17a[name],_179[name],_17a,true);
},render_section:function(_17b,_17c,_17d){
if(!this.includes("#",_17b)&&!this.includes("^",_17b)){
return _17b;
}
var that=this;
var _17f=new RegExp(this.otag+"(\\^|\\#)\\s*(.+)\\s*"+this.ctag+"\n*([\\s\\S]+?)"+this.otag+"\\/\\s*\\2\\s*"+this.ctag+"\\s*","mg");
return _17b.replace(_17f,function(_180,type,name,_183){
var _184=that.find(name,_17c);
if(type=="^"){
if(!_184||that.is_array(_184)&&_184.length===0){
return that.render(_183,_17c,_17d,true);
}else{
return "";
}
}else{
if(type=="#"){
if(that.is_array(_184)){
return that.map(_184,function(row){
return that.render(_183,that.create_context(row),_17d,true);
}).join("");
}else{
if(that.is_object(_184)){
return that.render(_183,that.create_context(_184),_17d,true);
}else{
if(typeof _184==="function"){
return _184.call(_17c,_183,function(text){
return that.render(text,_17c,_17d,true);
});
}else{
if(_184){
return that.render(_183,_17c,_17d,true);
}else{
return "";
}
}
}
}
}
}
});
},render_tags:function(_187,_188,_189,_18a){
var that=this;
var _18c=function(){
return new RegExp(that.otag+"(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?"+that.ctag+"+","g");
};
var _18d=_18c();
var _18e=function(_18f,_190,name){
switch(_190){
case "!":
return "";
case "=":
that.set_delimiters(name);
_18d=_18c();
return "";
case ">":
return that.render_partial(name,_188,_189);
case "{":
return that.find(name,_188);
default:
return that.escape(that.find(name,_188));
}
};
var _192=_187.split("\n");
for(var i=0;i<_192.length;i++){
_192[i]=_192[i].replace(_18d,_18e,this);
if(!_18a){
this.send(_192[i]);
}
}
if(_18a){
return _192.join("\n");
}
},set_delimiters:function(_194){
var dels=_194.split(" ");
this.otag=this.escape_regex(dels[0]);
this.ctag=this.escape_regex(dels[1]);
},escape_regex:function(text){
if(!arguments.callee.sRE){
var _197=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];
arguments.callee.sRE=new RegExp("(\\"+_197.join("|\\")+")","g");
}
return text.replace(arguments.callee.sRE,"\\$1");
},find:function(name,_199){
name=this.trim(name);
function is_kinda_truthy(bool){
return bool===false||bool===0||bool;
}
var _19b;
if(is_kinda_truthy(_199[name])){
_19b=_199[name];
}else{
if(is_kinda_truthy(this.context[name])){
_19b=this.context[name];
}
}
if(typeof _19b==="function"){
return _19b.apply(_199);
}
if(_19b!==undefined){
return _19b;
}
return "";
},includes:function(_19c,_19d){
return _19d.indexOf(this.otag+_19c)!=-1;
},escape:function(s){
s=String(s===null?"":s);
return s.replace(/&(?!\w+;)|["'<>\\]/g,function(s){
switch(s){
case "&":
return "&amp;";
case "\\":
return "\\\\";
case "\"":
return "&quot;";
case "'":
return "&#39;";
case "<":
return "&lt;";
case ">":
return "&gt;";
default:
return s;
}
});
},create_context:function(_1a0){
if(this.is_object(_1a0)){
return _1a0;
}else{
var _1a1=".";
if(this.pragmas["IMPLICIT-ITERATOR"]){
_1a1=this.pragmas["IMPLICIT-ITERATOR"].iterator;
}
var ctx={};
ctx[_1a1]=_1a0;
return ctx;
}
},is_object:function(a){
return a&&typeof a=="object";
},is_array:function(a){
return Object.prototype.toString.call(a)==="[object Array]";
},trim:function(s){
return s.replace(/^\s*|\s*$/g,"");
},map:function(_1a6,fn){
if(typeof _1a6.map=="function"){
return _1a6.map(fn);
}else{
var r=[];
var l=_1a6.length;
for(var i=0;i<l;i++){
r.push(fn(_1a6[i]));
}
return r;
}
}};
return ({name:"mustache.js",version:"0.3.1-dev",to_html:function(_1ab,view,_1ad,_1ae){
var _1af=new _16a();
if(_1ae){
_1af.send=_1ae;
}
_1af.render(_1ab,view,_1ad);
if(!_1ae){
return _1af.buffer.join("\n");
}
}});
}();
if(!this.JSON){
this.JSON={};
}
(function(){
"use strict";
function f(n){
return n<10?"0"+n:n;
}
if(typeof Date.prototype.toJSON!=="function"){
Date.prototype.toJSON=function(key){
return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){
return this.valueOf();
};
}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,_1b4=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,_1b6,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"},rep;
function quote(_1b9){
_1b4.lastIndex=0;
return _1b4.test(_1b9)?"\""+_1b9.replace(_1b4,function(a){
var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);
})+"\"":"\""+_1b9+"\"";
}
function str(key,_1bd){
var i,k,v,_1c1,mind=gap,_1c3,_1c4=_1bd[key];
if(_1c4&&typeof _1c4==="object"&&typeof _1c4.toJSON==="function"){
_1c4=_1c4.toJSON(key);
}
if(typeof rep==="function"){
_1c4=rep.call(_1bd,key,_1c4);
}
switch(typeof _1c4){
case "string":
return quote(_1c4);
case "number":
return isFinite(_1c4)?String(_1c4):"null";
case "boolean":
case "null":
return String(_1c4);
case "object":
if(!_1c4){
return "null";
}
gap+=_1b6;
_1c3=[];
if(Object.prototype.toString.apply(_1c4)==="[object Array]"){
_1c1=_1c4.length;
for(i=0;i<_1c1;i+=1){
_1c3[i]=str(i,_1c4)||"null";
}
v=_1c3.length===0?"[]":gap?"[\n"+gap+_1c3.join(",\n"+gap)+"\n"+mind+"]":"["+_1c3.join(",")+"]";
gap=mind;
return v;
}
if(rep&&typeof rep==="object"){
_1c1=rep.length;
for(i=0;i<_1c1;i+=1){
k=rep[i];
if(typeof k==="string"){
v=str(k,_1c4);
if(v){
_1c3.push(quote(k)+(gap?": ":":")+v);
}
}
}
}else{
for(k in _1c4){
if(Object.hasOwnProperty.call(_1c4,k)){
v=str(k,_1c4);
if(v){
_1c3.push(quote(k)+(gap?": ":":")+v);
}
}
}
}
v=_1c3.length===0?"{}":gap?"{\n"+gap+_1c3.join(",\n"+gap)+"\n"+mind+"}":"{"+_1c3.join(",")+"}";
gap=mind;
return v;
}
}
if(typeof JSON.stringify!=="function"){
JSON.stringify=function(_1c5,_1c6,_1c7){
var i;
gap="";
_1b6="";
if(typeof _1c7==="number"){
for(i=0;i<_1c7;i+=1){
_1b6+=" ";
}
}else{
if(typeof _1c7==="string"){
_1b6=_1c7;
}
}
rep=_1c6;
if(_1c6&&typeof _1c6!=="function"&&(typeof _1c6!=="object"||typeof _1c6.length!=="number")){
throw new Error("JSON.stringify");
}
return str("",{"":_1c5});
};
}
if(typeof JSON.parse!=="function"){
JSON.parse=function(text,_1ca){
var j;
function walk(_1cc,key){
var k,v,_1d0=_1cc[key];
if(_1d0&&typeof _1d0==="object"){
for(k in _1d0){
if(Object.hasOwnProperty.call(_1d0,k)){
v=walk(_1d0,k);
if(v!==undefined){
_1d0[k]=v;
}else{
delete _1d0[k];
}
}
}
}
return _1ca.call(_1cc,key,_1d0);
}
text=String(text);
cx.lastIndex=0;
if(cx.test(text)){
text=text.replace(cx,function(a){
return "\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);
});
}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){
j=eval("("+text+")");
return typeof _1ca==="function"?walk({"":j},""):j;
}
throw new SyntaxError("JSON.parse");
};
}
}());
Object.keys=function(o){
var _1d3=[];
if(o===undefined||o===null){
return _1d3;
}
for(var name in o){
if(o.hasOwnProperty(name)){
_1d3.push(name);
}
}
if(o.call!==undefined&&o.call!==Function.prototype.call&&_1d3.indexOf("call")===-1){
_1d3.push("call");
}
return _1d3;
};
Array.isArray=Array.isArray||function(o){
return Object.prototype.toString.call(o)==="[object Array]";
};
Array.prototype.forEach=Array.prototype.forEach||function(fn,bind){
for(var i=0;i<this.length;i++){
fn.call(bind,this[i],i,this);
}
};
Array.prototype.indexOf=Array.prototype.indexOf||function(str){
for(var i=0;i<this.length;i++){
if(str===this[i]){
return i;
}
}
return -1;
};
Array.prototype.some=Array.prototype.some||function(fn,bind){
for(var i=0,l=this.length;i<l;i++){
if((i in this)&&fn.call(bind,this[i],i,this)){
return true;
}
}
return false;
};
Array.prototype.every=Array.prototype.every||function(fn,bind){
for(var i=0,l=this.length;i<l;i++){
if((i in this)&&!fn.call(bind,this[i],i,this)){
return false;
}
}
return true;
};
Array.prototype.map=Array.prototype.map||function(fn,bind){
var _1e5=[];
for(var i=0,l=this.length;i<l;i++){
if(i in this){
_1e5[i]=fn.call(bind,this[i],i,this);
}
}
return _1e5;
};
Array.prototype.filter=Array.prototype.filter||function(fn,bind){
var _1ea=[];
for(var i=0,l=this.length;i<l;i++){
if((i in this)&&fn.call(bind,this[i],i,this)){
_1ea.push(this[i]);
}
}
return _1ea;
};
Array.prototype.reduce=Array.prototype.reduce||function(fun){
"use strict";
if(this===undefined||this===null){
throw new TypeError();
}
var t=Object(this);
var len=t.length>>>0;
if(typeof fun!=="function"){
throw new TypeError();
}
if(len===0&&arguments.length==1){
throw new TypeError();
}
var k=0;
var _1f1;
if(arguments.length>=2){
_1f1=arguments[1];
}else{
do{
if(k in t){
_1f1=t[k++];
break;
}
if(++k>=len){
throw new TypeError();
}
}while(true);
}
while(k<len){
if(k in t){
_1f1=fun.call(undefined,_1f1,t[k],k,t);
}
k++;
}
return _1f1;
};
Array.prototype.reduceRight=Array.prototype.reduceRight||function(_1f2){
"use strict";
if(this===undefined||this===null){
throw new TypeError();
}
var t=Object(this);
var len=t.length>>>0;
if(typeof _1f2!=="function"){
throw new TypeError();
}
if(len===0&&arguments.length===1){
throw new TypeError();
}
var k=len-1;
var _1f6;
if(arguments.length>=2){
_1f6=arguments[1];
}else{
do{
if(k in this){
_1f6=this[k--];
break;
}
if(--k<0){
throw new TypeError();
}
}while(true);
}
while(k>=0){
if(k in t){
_1f6=_1f2.call(undefined,_1f6,t[k],k,t);
}
k--;
}
return _1f6;
};
String.prototype.trim=String.prototype.trim||function(){
return this.replace(/^\s\s*/,"").replace(/\s\s*$/,"");
};
if(!Function.prototype.bind||Function.prototype.bind===window.__hualuOldBind){
Function.prototype.bind=function(_1f7){
var _1f8=this;
return function(){
_1f8.apply(_1f7,arguments);
};
};
}
var object=new (function(_1f9){
var _1fa=this;
if((function TEST(){
}).name){
Function.__get_name__=function(func){
return func.name;
};
}else{
var _1fc=/(?:^|\()function ([\w$]+)/;
Function.__get_name__=function(func){
var _1fe=_1fc.exec(func.toString());
if(_1fe){
return _1fe[1];
}
return "";
};
}
this.extend=function(obj,_200,ov){
if(typeof ov!=="function"){
if(ov!==false){
ov=true;
}
ov=function(dest,src,prop){
return ov;
};
}
for(var _205 in _200){
if(ov(obj,_200,_205)){
obj[_205]=_200[_205];
}
}
if(_200&&_200.hasOwnProperty("call")&&ov(obj,_200,"call")){
obj.call=_200.call;
}
return obj;
};
this.clone=function(obj){
var _207={};
for(var key in obj){
_207[key]=obj[key];
}
return _207;
};
this.bind=function(host){
_1fa.extend(host,_1fa);
};
this._loader=null;
})(window);
(function(_20a){
var _20b=true;
for(var i in {toString:1}){
_20b=null;
}
if(_20b){
_20b=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];
}
var _20d=function(func,_20f){
return function(a,b){
if(a===null){
return this;
}
if(_20f||typeof a!="string"){
for(var k in a){
func.call(this,k,a[k]);
}
if(_20b){
for(var i=_20b.length;i>0;i--){
k=_20b[i];
if(a.hasOwnProperty(k)){
func.call(this,k,a[k]);
}
}
}
}else{
func.call(this,a,b);
}
return this;
};
};
var _214=function(prop){
var _216=this.__properties__[prop];
if(_216&&_216.fget){
return _216.fget.call(this.__this__,this);
}else{
throw "get not defined property "+prop;
}
};
var _217=function(prop,_219){
var _21a=this.__properties__[prop];
if(_21a&&_21a.fset){
_21a.fset.call(this.__this__,this,_219);
}else{
throw "set not defined property "+prop;
}
};
var _21b=function(name){
if(name=="@mixins"){
name="__mixins__";
}
var cls=this;
var _21e=this.prototype;
var _21f=_21e.__properties__;
if(name in cls){
return cls[name];
}
if(name in _21f){
return _21f[name];
}
if(!name in _21e){
throw new Error("no member named "+name+".");
}
var _220=_21e[name];
if(!_220){
return _220;
}
if(_220.__class__==_221){
return _221(_220.im_func,this);
}
return _220;
};
var _222=function(name){
if(name=="@mixins"){
name="__mixins__";
}
var _224=this.prototype;
return (name in this||name in _224||name in _224.__properties__);
};
var _225=_20d(function(name,_227){
var cls=this;
var _229=cls.prototype;
var _22a=_229.__properties__;
var subs=cls.__subclassesarray__;
var _22c=cls.__constructing__;
if(["__new__","__this__","__base__","@mixins","__mixins__"].indexOf(name)!=-1){
if(!_227||(typeof _227!="object"&&typeof _227!="function")){
return;
}
}
delete cls[name];
delete _229[name];
delete _22a[name];
if(name=="@mixins"){
name="__mixins__";
if(cls[name]){
cls[name]=cls[name].concat(_227);
}else{
cls[name]=_227;
}
}else{
if(["__new__","__metaclass__","__mixins__"].indexOf(name)!=-1){
if(_227&&(typeof _227=="object"||typeof _227=="function")){
cls[name]=_227;
}
}else{
if(["__this__","__base__"].indexOf(name)!=-1){
cls[name]=_229[name]=_227;
}else{
if(_227==null){
_229[name]=_227;
}else{
if(_227.__class__===undefined&&typeof _227=="function"){
_227.__name__=name;
_229[name]=_221(_227);
_229[name].__name__=name;
if(name=="initialize"){
cls[name]=_221(_227,cls);
}
}else{
if(_227.__class__===property){
_227.__name__=name;
_22a[name]=_227;
_229[name]=undefined;
}else{
if(_227.__class__===classmethod){
_227.im_func.__name__=name;
_227.__name__=name;
cls[name]=_229[name]=_227;
}else{
if(_227.__class__===staticmethod){
_227.im_func.__name__=name;
_227.__name__=name;
cls[name]=_229[name]=_227.im_func;
}else{
_229[name]=_227;
}
}
}
}
}
}
}
}
if(!_22c&&name in cls&&subs){
subs.forEach(function(sub){
if(!(name in sub)){
sub.set(name,_227);
}
});
}
});
var _22e=function(prop,_230){
this[prop]=_230;
};
var _231=function(){
return this.__subclassesarray__;
};
var _232=(function(){
if(!Array.push){
return false;
}
var a=function(){
};
a.prototype=new Array;
var b=new a;
b.push(null);
return !!b.length;
})();
var _235,_236;
var type=this.type=function(){
};
type.__new__=function(_238,name,base,dict){
var cls=Class.create();
cls.__constructing__=true;
cls.prototype=Class.getInstance(base);
cls.prototype.constructor=cls;
if(base.__subclassesarray__){
base.__subclassesarray__.push(cls);
}
var _23d=cls.prototype;
var _23e=_23d.__properties__||{};
_23d.__properties__=_20a.extend({},_23e);
if(base!==type){
for(var _23f in base){
if(_23f.indexOf("__")!=0&&cls[_23f]===undefined){
cls[_23f]=base[_23f];
}
}
}
cls.set("__base__",base);
cls.set("__this__",{base:base,parent:function(){
var _240=cls;
var name=arguments.callee.caller.__name__;
if(!name){
throw new Error("can not get function name when this.parent called");
}
while(_240&&!_240.prototype.hasOwnProperty(name)){
_240=_240.__base__;
}
var base=_240.__base__;
var _243=_240.__mixins__;
var _244,_245;
if(base&&base.get&&base.has(name)){
_245=base;
_244=base.get(name);
}else{
if(_243&&_243.length&&_243.some(function(_246){
_245=_246;
return _246.has(name);
})){
_244=_245.get(name);
}
}
if(!_244||typeof _244!="function"){
throw new Error("no such method in parent : '"+name+"'");
}else{
return _244.apply(base,arguments);
}
}});
cls.__new__=base.__new__;
cls.__metaclass__=base.__metaclass__;
cls.set(dict);
var _247=cls.__mixins__;
if(_247){
_247.forEach(function(_248){
Class.keys(_248).forEach(function(name){
if(cls.has(name)){
return;
}
var _24a=_248.get(name);
if(typeof _24a=="function"&&_24a.__class__===_221){
cls.set(name,_24a.im_func);
}else{
cls.set(name,_24a);
}
});
});
}
delete cls.__constructing__;
cls.__dict__=dict;
cls.prototype.get=_214;
cls.prototype.set=_217;
cls.prototype._set=_22e;
return cls;
};
type.initialize=function(){
};
var _24b=this.Class=function(){
var _24c=arguments.length;
if(_24c<1){
throw new Error("bad arguments");
}
var base=_24c>1?arguments[0]:type;
if(typeof base!="function"&&typeof base!="object"){
throw new Error("base is not function or object");
}
if(base){
if(!_232){
if(base===Array){
base=_235;
}else{
if(base===String){
base=_236;
}
}
}
}
var dict=arguments[_24c-1];
if(typeof dict!="function"&&typeof dict!="object"){
throw new Error("constructor is not function or object");
}
if(dict instanceof Function){
var f=dict;
dict={};
f.call(dict);
}
var _250=dict.__metaclass__||base.__metaclass__||type;
if(!_250.__new__||!_250.initialize){
throw new Error("__metaclass__ should have __new__ method and initialize method");
}
var cls=_250.__new__(_250,null,base,dict);
if(!cls||typeof cls!="function"){
throw new Error("__new__ method should return cls");
}
_250.initialize(cls,null,base,dict);
return cls;
};
_24b.create=function(){
var cls=function(){
if(cls.__prototyping__){
return this;
}
this.__class__=cls;
_24b.initMixins(cls,this);
var _253=this.initialize?this.initialize.apply(this,arguments):null;
return _253;
};
cls.__subclassesarray__=[];
cls.__subclasses__=_231;
cls.__mixin__=cls.set=_225;
cls.get=_21b;
cls.has=_222;
return cls;
};
_24b.initMixins=function(cls,_255){
if(!cls){
return;
}
if(cls.__base__){
_24b.initMixins(cls.__base__,_255);
}
if(cls.__mixins__){
for(var i=0,l=cls.__mixins__.length,_258;i<l;i++){
_258=cls.__mixins__[i];
if(_258.prototype&&typeof _258.prototype.initialize=="function"){
_258.prototype.initialize.call(_255);
}
}
}
};
_24b.mixin=function(dict,cls){
if(!dict||typeof dict!="object"){
return;
}
if(cls===Array){
cls=_235;
}else{
if(cls===String){
cls=_236;
}
}
dict.__mixins__=dict.__mixins__||[];
dict.__mixins__.push(cls);
};
_24b.hasProperty=function(obj,name){
return (obj&&obj.__properties__)?(name in obj.__properties__):false;
};
_24b.getPropertyNames=function(obj){
return (obj&&obj.__properties__)?Object.keys(obj.__properties__):[];
};
_24b.inject=function(cls,host,args,_261){
if(typeof cls!="function"){
throw new Error("cls should be function");
}
var _262=arguments.length;
if(_262===2){
args=[];
_261=true;
}else{
if(_262===3){
if(Array.isArray(args)){
args=args||[];
_261=true;
}else{
_261=args;
args=[];
}
}
}
host.__class__=cls;
host.__properties__=cls.prototype.__properties__;
var p=_24b.getInstance(cls);
_20a.extend(host,p,_261);
_24b.initMixins(cls,host);
if(typeof cls.prototype.initialize=="function"){
cls.prototype.initialize.apply(host,args);
}
};
_24b.getChain=function(cls){
if(!cls){
return [];
}
var _265=[cls];
while(cls.__base__){
_265.push(cls.__base__);
cls=cls.__base__;
}
return _265;
};
_24b.getInstance=function(cls){
if(cls===Array||cls===String){
return new cls;
}
cls.__prototyping__=true;
var _267=new cls();
delete cls.__prototyping__;
return _267;
};
_24b.getAllSubClasses=function(cls){
if(!cls||!cls.__subclassesarray__){
return [];
}
var _269=cls.__subclassesarray__;
var _26a=[].concat(_269),ele=_26a.shift(),subs;
while(ele!=null){
subs=ele.__subclassesarray__;
if(subs!=null){
_26a=_26a.concat(subs);
_269=_269.concat(subs);
}
ele=_26a.shift();
}
return _269;
};
_24b.keys=function(cls){
if(!cls||!cls.prototype){
return [];
}
keys=Object.keys(cls.prototype.__properties__);
for(var prop in cls.prototype){
keys.push(prop);
}
keys=keys.filter(function(name){
return !(["get","set","_set","initialize","constructor"].indexOf(name)!==-1||name.indexOf("__")==0);
});
return keys;
};
var _221=function(func,cls){
var _272=cls?function(){
return cls.prototype[func.__name__].im_func.apply(cls.__this__,arguments);
}:function(){
var args=[].slice.call(arguments,0);
args.unshift(this);
return func.apply(this.__this__,args);
};
_272.__class__=arguments.callee;
_272.im_func=func;
return _272;
};
var _274=this.staticmethod=function(func){
var _276=function(){
};
_276.__class__=arguments.callee;
_276.im_func=func;
return _276;
};
var _277=this.classmethod=function(func){
var _279=function(){
var args=[].slice.call(arguments,0);
var cls;
if(typeof this=="function"){
args.unshift(this);
return this.prototype[func.__name__].im_func.apply(this.__this__,args);
}else{
cls=this.__class__;
args.unshift(cls);
return func.apply(cls.__this__,args);
}
};
_279.__class__=arguments.callee;
_279.im_func=func;
return _279;
};
var _27c=this.property=function(fget,fset){
var p={};
p.__class__=arguments.callee;
p.fget=fget;
p.fset=fset;
return p;
};
var _280=function(_281,_282){
var cls=new _24b(function(){
for(var i=0,l=_282.length;i<l;i++){
this[_282[i]]=(function(name){
return function(){
return _281.prototype[name].apply(arguments[0],[].slice.call(arguments,1));
};
})(_282[i]);
}
});
return cls;
};
_235=_280(Array,["concat","indexOf","join","lastIndexOf","pop","push","reverse","shift","slice","sort","splice","toString","unshift","valueOf","forEach","some","every","map","filter","reduce","reduceRight"]);
_235.prototype.length=0;
_236=_280(String,["charAt","charCodeAt","concat","indexOf","lastIndexOf","match","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase","valueOf","trim"]);
_236.prototype.length=0;
})(object);
(function(_287){
function name2id(name){
return name.replace(/\./g,"/");
}
function Module(name){
this.__name__=name;
}
Module.prototype.toString=function(){
return "<module '"+this.__name__+"'>";
};
function NoModuleError(id){
this.message="no module named "+id;
}
NoModuleError.prototype=new Error();
function ModuleRequiredError(id){
this.message="module "+id+" required";
}
ModuleRequiredError.prototype=new Error();
function CyclicDependencyError(_28c){
this.runStack=_28c;
var msg="";
_28c.forEach(function(m,i){
msg+=m.id;
if(i!=_28c.length-1){
msg+="-->";
}
});
this.message=msg+" cyclic dependency.";
}
CyclicDependencyError.prototype=new Error();
function CommonJSPackage(id,deps,_292){
Package.apply(this,arguments);
}
CommonJSPackage.prototype=new Package();
CommonJSPackage.prototype.constructor=CommonJSPackage;
CommonJSPackage.prototype.execute=function(name,_294){
var _295=_294.modules[name]||new Module(name);
var _296=this.factory.call(_295,this.createRequire(name,_294),_295,this);
if(_296){
_296.__name__=_295.__name__;
_295=_296;
}
return _295;
};
CommonJSPackage.prototype.createRequire=function(name,_298){
var _299=_298.loader;
var _29a=this;
function require(id){
var dep=_29a.getDep(id);
if(!dep){
throw new ModuleRequiredError(id);
}
var _29d=dep.getRef(_298);
if(!_29d&&_29a.dependencies.indexOf(id)!=-1){
throw new CyclicDependencyError(_298.stack);
}
return _29d;
}
require.async=function(deps,_29f){
deps=_29a.parseDeps(deps);
var pkg=new CommonJSPackage(_29a.id,deps,function(_2a1){
var args=[];
deps.forEach(function(dep){
args.push(_2a1(dep));
});
_29f.apply(null,args);
});
pkg.load(name,_298);
};
return require;
};
function ObjectPackage(id,deps,_2a6){
Package.apply(this,arguments);
}
ObjectPackage.prototype=new Package();
ObjectPackage.prototype.constructor=ObjectPackage;
ObjectPackage.prototype.execute=function(name,_2a8){
var _2a9=_2a8.modules[name]||new Module(name);
var args=[_2a9];
this.dependencies.forEach(function(_2ab){
var _2ac=this.getDep(_2ab).getRef(_2a8);
if(args.indexOf(_2ac)==-1){
args.push(_2ac);
}
},this);
var _2ad=this.factory.apply(_2a9,args);
if(_2ad){
if(_2a9.__empty_refs__){
_2a9.__empty_refs__.forEach(function(ref){
if(typeof console!="undefined"){
console.warn(ref+"\u65e0\u6cd5\u6b63\u786e\u83b7\u5f97"+name+"\u6a21\u5757\u7684\u5f15\u7528\u3002\u56e0\u4e3a\u8be5\u6a21\u5757\u662f\u901a\u8fc7return\u8fd4\u56de\u6a21\u5757\u5b9e\u4f8b\u7684\u3002");
}
});
}
_2ad.__name__=_2a9.__name__;
_2a9=_2ad;
}else{
delete _2a9.__empty_refs__;
}
return _2a9;
};
ObjectPackage.prototype.handleCyclicDependency=function(dep,pkg,_2b1,next){
var _2b3=_2b1.modules[dep.id]||new Module(dep.id);
_2b1.modules[dep.id]=_2b3;
if(!_2b3.__empty_refs__){
_2b3.__empty_refs__=[];
}
_2b3.__empty_refs__.push(pkg.id);
next(_2b3);
};
function Package(id,deps,_2b6){
if(!id){
return;
}
this.id=id;
this.dependencies=this.parseDeps(deps);
this.factory=_2b6;
this.deps={};
this.initDeps();
}
Package.prototype.initDeps=function(){
this.dependencies.forEach(function(_2b7){
var dep;
if(_2b7.indexOf("/")!=-1){
dep=new CommonJSDependency(_2b7,this);
}else{
dep=new ObjectDependency(_2b7,this);
}
this.deps[_2b7]=dep;
},this);
};
Package.prototype.execute=function(name,_2ba){
return new Module(name);
};
Package.prototype.load=function(name,_2bc,_2bd){
var _2be=-1;
var pkg=this;
function nextDep(_2c0){
var deps=pkg.dependencies;
var _2c2=pkg.factory;
var dep,_2c4;
if(_2c0){
_2bc.stack.pop();
}
_2be++;
if(_2be==deps.length){
doneDep();
}else{
dep=pkg.getDep(deps[_2be]);
_2c4=dep.getModule(_2bc);
_2bc.stack.push(_2c4);
if(_2bc.stack.indexOf(_2c4)!=_2bc.stack.length-1){
_2c4.handleCyclicDependency(dep,pkg,_2bc,nextDep);
}else{
dep.load(_2bc,nextDep);
}
}
}
function doneDep(){
if(!name){
name=pkg.id;
}
var _2c5=pkg.execute(name,_2bc);
_2bc.addModule(name,_2c5);
if(_2c5.__name__==="sys"){
_2c5.modules=_2bc.modules;
}
if(_2bd){
_2bd(_2c5);
}
}
nextDep();
};
Package.prototype.handleCyclicDependency=function(dep,pkg,_2c8,next){
next();
};
Package.prototype.getDep=function(id){
return this.deps[id];
};
Package.prototype.parseDeps=function(deps){
if(Array.isArray(deps)){
return deps;
}
if(!deps){
return [];
}
deps=deps.trim().replace(/^,*|,*$/g,"").split(/\s*,\s*/ig);
return deps;
};
function Dependency(name,_2cd){
if(!name){
return;
}
this.name=name;
this.owner=_2cd;
}
Dependency.prototype.getModule=function(_2ce){
var pkg=_2ce.loader.getModule(this.id);
return pkg;
};
function CommonJSDependency(name,_2d1){
var _2d2,_2d3;
if(name.indexOf("/")==0){
}else{
if(name.indexOf("./")==0||name.indexOf("../")==0){
_2d2=_2d1.id.split("/");
_2d2.pop();
_2d3=name.split(/\//ig);
_2d3.forEach(function(part){
if(part=="."){
}else{
if(part==".."){
_2d2.pop();
}else{
_2d2.push(part);
}
}
});
this.id=_2d2.join("/");
}else{
this.id=name2id(name);
}
}
Dependency.call(this,name,_2d1);
}
CommonJSDependency.prototype=new Dependency();
CommonJSDependency.prototype.constructor=CommonJSDependency;
CommonJSDependency.prototype.load=function(_2d5,_2d6){
_2d5.loadModule(this.id,_2d5.getName(this.id),_2d6);
};
CommonJSDependency.prototype.getRef=function(_2d7){
var root=_2d7.getName(this.id);
return _2d7.modules[root];
};
ObjectDependency=function(name,_2da){
this.nameParts=name.split(".");
this.root=this.nameParts[0];
this.id=name2id(name);
Dependency.call(this,name,_2da);
};
ObjectDependency.prototype=new Dependency();
ObjectDependency.prototype.constructor=ObjectDependency;
ObjectDependency.prototype.load=function(_2db,_2dc){
var dep=this;
var _2de,part,name,_2e1=-1;
function nextPart(_2e2){
var _2e3;
if(_2e2){
_2db.setModule(name,_2e2);
_2db.setMemberTo(_2de,part,_2e2);
}
_2de=name;
_2e1++;
if(_2e1==dep.nameParts.length){
_2dc(_2db.modules[dep.root]);
}else{
part=dep.nameParts[_2e1];
name=(_2de?_2de+".":"")+part;
_2db.loadModule(name2id(name),_2db.getName(name),nextPart);
}
}
nextPart();
};
ObjectDependency.prototype.getRef=function(_2e4){
var root=_2e4.getName(this.root);
return _2e4.modules[root];
};
function LoaderRuntime(root){
this.modules={};
this.stack=[];
this.members={};
this.root=root;
}
LoaderRuntime.prototype={addModule:function(name,_2e8){
_2e8=_2e8||new Module(name);
this.modules[name]=_2e8;
var _2e9=this.members[name];
if(_2e9){
_2e9.forEach(function(_2ea){
this.modules[name][_2ea.id]=_2ea.value;
},this);
}
return _2e8;
},setModule:function(name,_2ec){
this.modules[name]=_2ec;
},loadModule:function(id,name,_2ef){
var _2f0=this.loader;
var _2f1=this.modules[name];
if(_2f1){
_2ef(_2f1);
}else{
_2f0.load(id,name,this,_2ef);
}
},getId:function(name){
return this.root+"."+name;
},getName:function(id){
var root=this.root;
if(id==root||id.indexOf(root+"/")==0){
id=id.slice(root.length+1);
}
return id.replace(/\//g,".");
},setMemberTo:function(host,_2f6,_2f7){
if(host){
if(this.modules[host]){
this.modules[host][_2f6]=_2f7;
}else{
if(!this.members[host]){
this.members[host]=[];
}
this.members[host].push({id:_2f6,value:_2f7});
}
}
}};
var _2f8=new Class(function(){
function calculatePageDir(){
var loc=window["location"];
var _2fa=loc.protocol+"//"+loc.host+(loc.pathname.charAt(0)!=="/"?"/":"")+loc.pathname;
if(_2fa.indexOf("\\")!=-1){
_2fa=_2fa.replace(/\\/g,"/");
}
var _2fb="./";
if(_2fa.indexOf("/")!=-1){
_2fb=_2fa.substring(0,_2fa.lastIndexOf("/")+1);
}
return _2fb;
}
var _2fc;
this._urlNodeMap={};
this.initialize=function(self){
self.useCache=true;
self.lib={"sys":new Package("sys",[],function(){
})};
self.fileLib={};
self.prefixLib={};
self.anonymousModuleCount=0;
self.scripts=document.getElementsByTagName("script");
};
this.load=function(self,id,name,_301,_302){
var pkg=self.getModule(id);
if(!pkg){
throw new NoModuleError(id);
}else{
if(pkg.file){
self.loadScript(pkg.file,function(){
var id=pkg.id;
var file=pkg.file;
pkg=self.lib[id];
if(!pkg){
throw new Error(file+" do not add "+id);
}
pkg.load(name,_301,_302);
},true);
}else{
pkg.load(name,_301,_302);
}
}
};
this.buildFileLib=function(self){
var _307=self.scripts;
for(var i=0,_309,_30a,src,l=_307.length;i<l;i++){
_309=_307[i];
src=_309.getAttribute("data-src");
_30a=_309.getAttribute("data-module");
if(!_30a||!src){
continue;
}
_30a.split(/\s+/ig).forEach(function(name){
self.defineFile(name2id(name),src);
});
}
};
this._getAbsolutePath=staticmethod(function(src){
function cleanPath(path){
path=path.replace(/([^:\/])\/+/g,"$1/");
if(path.indexOf(".")===-1){
return path;
}
var _310=path.split("/");
var _311=[];
for(var i=0,part,len=_310.length;i<len;i++){
part=_310[i];
if(part===".."){
if(_311.length===0){
throw new Error("invalid path: "+path);
}
_311.pop();
}else{
if(part!=="."){
_311.push(part);
}
}
}
return _311.join("/").replace(/#$/,"");
}
if(src.indexOf("://")!=-1||src.indexOf("//")===0){
return cleanPath(src);
}
if(typeof _2fc=="undefined"){
_2fc=calculatePageDir();
}
return cleanPath(_2fc+src);
});
this.useScript=function(self,src,_317){
};
this.loadScript=classmethod(function(cls,src,_31a,_31b){
if(!src||typeof src!="string"){
throw new Error("src should be string");
}
src=src.trim();
var _31c=cls._getAbsolutePath(src);
if(_31b){
var _31d=cls.get("_urlNodeMap"),_31e=_31d[_31c];
if(_31e){
if(_31e.loading){
_31e.callbacks.push(_31a);
}else{
_31a(_31e);
}
return;
}
}
var ele=document.createElement("script");
ele.type="text/javascript";
ele.src=src;
ele.async=true;
ele.loading=true;
ele.callbacks=[];
var _320=function(){
ele.loading=null;
ele.callbacks.forEach(function(_321){
_321(ele);
});
for(var i=0,l=ele.callbacks.length;i<l;i++){
ele.callbacks[i]=null;
}
ele.callbacks=null;
};
ele.callbacks.push(_31a);
if(window.ActiveXObject){
ele.onreadystatechange=function(){
var rs=this.readyState;
if("loaded"===rs||"complete"===rs){
ele.onreadystatechange=null;
_320();
}
};
}else{
if(ele.addEventListener){
ele.addEventListener("load",_320,false);
ele.addEventListener("error",_320,false);
}else{
ele.onload=ele.onerror=_320;
}
}
document.getElementsByTagName("head")[0].insertBefore(ele,null);
if(_31b){
_31d[_31c]=ele;
}
});
this.removeScript=classmethod(function(cls,src){
if(!src||typeof src!="string"){
throw new Error("src should be string");
}
src=src.trim();
var _327=cls._getAbsolutePath(src);
var _328=cls.get("_urlNodeMap"),_329=_328[_327];
if(_329){
delete _328[_327];
if(_329.parentNode){
_329.parentNode.removeChild(_329);
}
_329=null;
}
});
this.createRuntime=function(self,id){
var _32c=new LoaderRuntime(id);
_32c.loader=self;
return _32c;
};
this.definePrefixFor=function(self,id){
if(!id||typeof id!="string"){
return;
}
if(arguments.length<2){
return;
}
var _32f=id.split("/");
for(var i=0,_331,pkg,l=_32f.length-1;i<l;i++){
_331=_32f.slice(0,i+1).join("/");
self.definePrefix(_331);
}
};
this.definePrefix=function(self,id){
if(!id||typeof id!="string"){
return;
}
if(arguments.length<2){
return;
}
if(id in self.lib||id in self.prefixLib){
return;
}
self.prefixLib[id]=new Package(id,[],function(){
});
};
this.defineFile=function(self,id,src){
if(!id||typeof id!="string"){
return;
}
if(arguments.length<2){
return;
}
if(self.fileLib[id]){
return;
}
if(id in self.prefixLib){
delete self.prefixLib[id];
}else{
self.definePrefixFor(id);
}
self.fileLib[id]={id:id,file:src};
};
this.defineModule=function(self,_33a,id,deps,_33d){
if(arguments.length<5){
return;
}
if(id in self.lib){
return;
}
if(id in self.prefixLib){
delete self.prefixLib[id];
}else{
if(id in self.fileLib){
delete self.fileLib[id];
}else{
self.definePrefixFor(id);
}
}
var pkg=new _33a(id,deps,_33d);
self.lib[id]=pkg;
};
this.define=function(self,name,deps,_342){
if(typeof name!="string"){
return;
}
if(typeof deps=="function"){
_342=deps;
deps=[];
}
self.defineModule(CommonJSPackage,name2id(name),deps,_342);
};
this.add=function(self,name,deps,_346){
if(typeof name!="string"){
return;
}
if(typeof deps=="function"){
_346=deps;
deps=[];
}
self.defineModule(ObjectPackage,name2id(name),deps,_346);
};
this.getModule=function(self,id){
return self.lib[id]||self.fileLib[id]||self.prefixLib[id];
};
this.remove=function(self,id,all){
delete self.lib[id];
if(all){
Object.keys(self.lib).forEach(function(key){
if(key.indexOf(id+"/")==0){
delete self.lib[key];
}
});
}
};
this.execute=function(self,id){
if(!id||typeof id!="string"){
return;
}
self.buildFileLib();
var _34f=self.createRuntime(id);
_34f.loadModule(id.replace(/\./g,"/"),"__main__");
};
this.use=function(self,deps,_352){
if(!_352||typeof _352!="function"){
return;
}
self.buildFileLib();
var id="__anonymous_"+self.anonymousModuleCount+"__";
self.anonymousModuleCount++;
_287.define(id,deps,function(_354,_355,_356){
var args=[];
_356.dependencies.forEach(function(dep){
dep=_354(dep);
if(args.indexOf(dep)==-1){
args.push(dep);
}
});
if(_352.length==args.length+1){
if(typeof console!="undefined"){
console.warn("object.use\u5373\u5c06\u4e0d\u518d\u652f\u6301\u7b2c\u4e00\u4e2aexports\u53c2\u6570\uff0c\u8bf7\u5c3d\u5feb\u5220\u9664\u3002");
}
args.unshift(_355);
}
_352.apply(null,args);
});
var _359=self.createRuntime(id);
_359.loadModule(id.replace(/\./g,"/"),"__main__",function(){
});
};
});
_287.Loader=_2f8;
_287.NoModuleError=NoModuleError;
_287.ModuleRequiredError=ModuleRequiredError;
})(object);
(function(_35a){
var _35b=new _35a.Loader();
_35a._loader=_35b;
_35a.add=_35b.add.bind(_35b);
_35a.define=_35b.define.bind(_35b);
_35a.remove=_35b.remove.bind(_35b);
_35a.use=_35b.use.bind(_35b);
_35a.execute=_35b.execute.bind(_35b);
_35a.define("window","sys",function(_35c){
var sys=_35c("sys");
var dom=sys.modules["dom"];
if(dom){
dom.wrap(window);
}
return window;
});
_35a.define("loader",function(_35f,_360){
_360.Loader=_35a.Loader;
});
})(object);
object.add("ua",function(_361){
var _362=this.numberify=function(s){
if(!s||typeof s!="string"){
}
var c=0;
return parseFloat(s.replace(/\./g,function(){
return (c++===0)?".":"";
}));
};
this.__detectUA=detectUA;
this.ua={};
var o=detectUA(navigator.userAgent);
object.extend(this.ua,o);
function detectUA(ua){
if(!ua&&typeof ua!="string"){
ua=navigator.userAgent;
}
var m,m2;
var o={},core,_36b;
if(!~ua.indexOf("Opera")&&(m=ua.match(/MSIE\s([^;]*)/))&&m[1]){
if((m2=ua.match(/Trident\/([\d\.]*)/))&&m2[1]){
o[core="ie"]=document.documentMode;
o[_36b="ieshell"]=_362(m2[1])+4;
}else{
o[_36b="ieshell"]=o[core="ie"]=_362(m[1]);
}
}else{
if((m=ua.match(/AppleWebKit\/([\d\.]*)/))&&m[1]){
o[core="webkit"]=_362(m[1]);
}else{
if(!~ua.indexOf("Opera")&&(m=ua.match(/Gecko/))){
o[core="gecko"]=0;
if((m=ua.match(/rv:([\d\.]*)/))&&m[1]){
o[core]=_362(m[1]);
}
}else{
if((m=ua.match(/Presto\/([\d\.]*)/))&&m[1]){
o[core="presto"]=_362(m[1]);
}
}
}
if((m=ua.match(/Chrome\/([\d\.]*)/))&&m[1]){
o[_36b="chrome"]=_362(m[1]);
}else{
if((m=ua.match(/\/([\d\.]*)( Mobile\/?[\w]*)? Safari/))&&m[1]){
o[_36b="safari"]=_362(m[1]);
}else{
if(/\/[\d\.]* \(KHTML, like Gecko\) Safari/.test(ua)){
o[_36b="safari"]=undefined;
}else{
if(!~ua.indexOf("Opera")&&(m=ua.match(/Firefox\/([\d\.]*)/))&&m[1]){
o[_36b="firefox"]=_362(m[1]);
}else{
if((m=ua.match(/Opera\/([\d\.]*)/))&&m[1]){
o[_36b="opera"]=_362(m[1]);
if((m=ua.match(/Opera\/.* Version\/([\d\.]*)/))&&m[1]){
o[_36b]=_362(m[1]);
}
}else{
if((m=ua.match(/Opera ([\d\.]*)/))&&m[1]){
core="presto";
o[_36b="opera"]=_362(m[1]);
}
}
}
}
}
}
}
o.shell=_36b;
o.core=core;
return o;
}
});
object.add("string",function(_36c){
this.substitute=function(){
return Mustache.to_html.apply(null,arguments);
};
this.camelCase=function(str){
return str.replace(/-\D/g,function(_36e){
return _36e.charAt(1).toUpperCase();
});
};
this.hyphenate=function(str){
return str.replace(/[A-Z]/g,function(_370){
return ("-"+_370.charAt(0).toLowerCase());
});
};
this.capitalize=function(str){
return str.replace(/\b[a-z]/g,function(_372){
return _372.toUpperCase();
});
};
this.trim=function(str){
return (str||"").replace(/^\s+|\s+$/g,"");
};
this.ltrim=function(str){
return (str||"").replace(/^\s+/,"");
};
this.rtrim=function(str){
return (str||"").replace(/\s+$/,"");
};
this.lengthZh=function(str){
return str.length;
};
this.toQueryString=function(_377){
var _378=[];
for(var key in _377){
var _37a=_377[key];
var _37b;
if(_37a&&_37a.constructor===Array){
var qs={};
_37a.forEach(function(val,i){
qs[i]=val;
});
_37b=arguments.callee(qs,key);
}else{
if(typeof _37a=="object"){
_37b=arguments.callee(_37a,key);
}else{
_37b=key+"="+encodeURIComponent(_37a);
}
}
if(_37a!==null){
_378.push(_37b);
}
}
return _378.join("&");
};
});
object.add("events","ua",function(_37f,ua){
var _381=(function(){
if(document.createEvent){
var _382=document.createEvent("Event");
_382.initEvent(type,false,true);
if(_382.preventDefault){
_382.preventDefault();
return !(_382.getPreventDefault?_382.getPreventDefault():_382.defaultPrevented);
}else{
return true;
}
}
return false;
})();
function IEEvent(){
}
IEEvent.prototype.stopPropagation=function(){
this.cancelBubble=true;
};
IEEvent.prototype.preventDefault=function(){
this.returnValue=false;
};
IEEvent.prototype.getPreventDefault=function(){
return this.returnValue===false;
};
IEEvent.prototype.stop=function(){
this.stopPropagation();
this.preventDefault();
};
this.fireevent=function(arg1){
var name,func,_386;
var _387=function(self){
var _389=arguments.callee.__name__;
if(!name){
name=_389;
}
var _38a={};
var args=Array.prototype.slice.call(arguments,1);
if(_386){
for(var i=0;i<_386.length;i++){
_38a[_386[i]]=arguments[i+1];
}
}
_38a._args=args;
var _38d=self.fireEvent(name,_38a,self);
var _38e=self[_389+"_createEvent"];
if(_38e){
args.unshift(_38d);
_38e.apply(self,args);
}
var _38f=_38d.getPreventDefault?_38d.getPreventDefault():_38d.defaultPrevented;
if(!_38f){
return func.apply(this,arguments);
}
};
if(typeof arg1=="function"){
func=arg1;
return _387;
}else{
if(Array.isArray(arguments[0])){
_386=arguments[0];
}else{
name=arg1;
if(arguments[1]){
_386=arguments[1];
}
}
return function(_390){
func=_390;
return _387;
};
}
};
this.HOLD=2;
this.CAPTURE=1;
this.wrapEvent=function(e){
e.target=e.srcElement;
e.stopPropagation=IEEvent.prototype.stopPropagation;
e.preventDefault=IEEvent.prototype.preventDefault;
e.getPreventDefault=IEEvent.prototype.getPreventDefault;
e.stop=IEEvent.prototype.stop;
return e;
};
this.wrapPreventDefault=function(e){
if(_381){
var _393=e.preventDefault;
e.preventDefault=function(){
this.defaultPrevented=true;
_393.apply(this,arguments);
};
}
};
var _394={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,orientationchange:2,touchstart:2,touchmove:2,touchend:2,touchcancel:2,gesturestart:2,gesturechange:2,gestureend:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,paste:2,oninput:2,load:2,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};
function isNativeEventForNode(node,type){
if(node.nativeEventNames){
return node.nativeEventNames.indexOf(type)!=-1;
}
return type in _394;
}
this.Events=new Class(function(){
function moveNativeEventsToTail(self,type){
var boss=self.__boss||self;
if(self.__nativeEvents&&self.__nativeEvents[type]){
boss.removeEventListener(type,self.__nativeEvents[type].run,false);
boss.addEventListener(type,self.__nativeEvents[type].run,false);
}
}
function handle(self,type){
var boss=self.__boss||self;
boss.attachEvent("on"+type,function(_39d){
var _39e=arguments.length>1?_39d:_37f.wrapEvent(window.event);
var _39f=self.__eventListeners?self.__eventListeners[type]:null;
if(_39f){
_39f=_39f.slice(0);
_39f.forEach(function(func){
try{
func.call(self,_39e);
}
catch(e){
}
});
_39f=null;
}
var _3a1=self.__nativeEvents?self.__nativeEvents[type]:null;
if(_3a1){
_3a1=_3a1.slice(0);
_3a1.forEach(function(func){
func.call(self,_39e);
});
_3a1=null;
}
});
}
function addOnHandlerAsEventListener(self,type){
if(type in _394&&self.nodeType==1){
return;
}
var boss=self.__boss||self;
var _3a6=self["on"+type],_3a7=boss["__on"+type];
if(!_3a6&&_3a7){
boss.removeEventListener(type,_3a7,false);
boss["__on"+type]=null;
}else{
if(_3a6&&_3a6!=_3a7){
boss.removeEventListener(type,_3a7,false);
boss.addEventListener(type,_3a6,false);
boss["__on"+type]=_3a6;
}
}
}
function attachOnHandlerAsEventListener(self,type){
if(self.nodeType==1&&isNativeEventForNode(self,type)&&isNodeInDOMTree(self)){
return;
}
if(!self.__eventListeners){
self.__eventListeners={};
}
if(!self.__eventListeners[type]){
self.__eventListeners[type]=[];
}
var _3aa=self.__eventListeners[type];
var l=_3aa.length;
var _3ac=self["on"+type],_3ad=self["__on"+type];
if(!_3ac&&_3ad){
for(var i=0;i<l;i++){
if(_3aa[i]==_3ad){
_3aa.splice(i,1);
break;
}
}
self["__on"+type]=null;
}else{
if(_3ac&&_3ac!=_3ad){
for(var i=0;i<l;i++){
if(_3aa[i]==_3ad){
_3aa.splice(i,1);
break;
}
}
_3aa.push(_3ac);
self["__on"+type]=_3ac;
}
}
}
function isNodeInDOMTree(node){
if(!node){
return false;
}
var _3b0=node.parentNode;
var top=document.documentElement;
while(_3b0){
if(_3b0==top){
return true;
}
_3b0=_3b0.parentNode;
}
return false;
}
function insertWrapPreventDefaultHandler(boss,type,cap){
if(!boss["__preEventAdded_"+type]){
boss["__preEventAdded_"+type]=true;
if(boss["on"+type]){
boss["__on"+type]=boss["on"+type];
boss["on"+type]=null;
}
boss.addEventListener(type,function(_3b5){
_37f.wrapPreventDefault(_3b5);
},cap);
if(boss["__on"+type]){
boss["on"+type]=boss["__on"+type];
boss["__on"+type]=null;
try{
delete boss["__on"+type];
}
catch(e){
}
}
}
}
this.initialize=function(self){
if(!self.addEventListener){
if(!self.__eventListeners){
self.__eventListeners={};
}
if(!self.__nativeEvents){
self.__nativeEvents={};
}
}
if(!self.addEventListener&&!self.attachEvent){
self.__boss=document.createElement("div");
}
};
this.addEvent=document.addEventListener?function(self,type,func,cap){
var boss=self.__boss||self;
if(cap===null){
cap=false;
}
cap=!!(cap&_37f.CAPTURE);
if(!ua.ua.ie&&type=="mouseleave"){
var _3bc=function(_3bd,_3be){
var p=_3bd.relatedTarget;
while(p&&p!=_3be){
try{
p=p.parentNode;
}
catch(error){
p=_3be;
}
}
return p!==_3be;
};
var _3c0=func;
func=function(_3c1){
var p=_3c1.relatedTarget;
while(p&&p!=self){
try{
p=p.parentNode;
}
catch(e){
p=self;
}
}
if(p!==self&&_3c0){
_3c0.call(self,_3c1);
}
};
func.innerFunc=_3c0;
type="mouseout";
if(!self.__eventListeners){
self.__eventListeners={};
}
if(!self.__eventListeners[type]){
self.__eventListeners[type]=[];
}
self.__eventListeners[type].push(func);
}
if(_381){
insertWrapPreventDefaultHandler(boss,type,cap);
}
addOnHandlerAsEventListener(self,type);
boss.addEventListener(type,func,cap);
moveNativeEventsToTail(self,type);
}:function(self,type,func){
var boss=self.__boss||self;
var _3c7;
if(!self.__eventListeners){
self.__eventListeners={};
}
if(!self.__eventListeners[type]){
_3c7=[];
self.__eventListeners[type]=_3c7;
if(!self.__nativeEvents||!self.__nativeEvents[type]){
handle(self,type);
}
}else{
_3c7=self.__eventListeners[type];
}
if(_3c7.some(function(f){
return f===func;
})){
return;
}
attachOnHandlerAsEventListener(self,type);
_3c7.push(func);
};
this.addNativeEvent=document.addEventListener?function(self,type,func){
var boss=self.__boss||self;
if(_381){
insertWrapPreventDefaultHandler(boss,type,false);
}
var _3cd;
if(!self.__nativeEvents){
self.__nativeEvents={};
}
if(!self.__nativeEvents[type]){
_3cd=[];
self.__nativeEvents[type]=_3cd;
self.__nativeEvents[type].run=function(_3ce){
_3cd.forEach(function(func){
func.call(self,_3ce);
});
};
moveNativeEventsToTail(self,type);
}else{
_3cd=self.__nativeEvents[type];
}
_3cd.push(func);
}:function(self,type,func){
var boss=self.__boss||self;
var _3d4;
if(!self.__nativeEvents){
self.__nativeEvents={};
}
if(!self.__nativeEvents[type]){
_3d4=[];
self.__nativeEvents[type]=_3d4;
if(!self.__nativeEvents||!self.__eventListeners[type]){
handle(self,type);
}
}else{
_3d4=self.__nativeEvents[type];
}
if(_3d4.some(function(f){
return f===func;
})){
return;
}
_3d4.push(func);
};
this.removeEvent=document.removeEventListener?function(self,type,func,cap){
var boss=self.__boss||self;
cap=!!(cap&_37f.CAPTURE);
if(!ua.ua.ie&&type=="mouseleave"){
type="mouseout";
if(self.__eventListeners&&self.__eventListeners[type]){
var _3db=self.__eventListeners[type];
for(var i=0,_3dd,l=_3db.length;i<l;i++){
_3dd=_3db[i];
if(_3dd.innerFunc===func){
boss.removeEventListener(type,_3dd,cap);
_3db.splice(i,1);
break;
}
}
}
}else{
boss.removeEventListener(type,func,cap);
}
}:function(self,type,func,cap){
var boss=self.__boss||self;
if(!self.__eventListeners){
self.__eventListeners={};
}
var _3e4=self.__eventListeners[type];
if(!_3e4){
return;
}
for(var i=0;i<_3e4.length;i++){
if(_3e4[i]===func){
_3e4.splice(i,1);
break;
}
}
};
this.fireEvent=document.dispatchEvent?function(self,type,_3e8){
if(!ua.ua.ie&&type=="mouseleave"){
type="mouseout";
}
addOnHandlerAsEventListener(self,type);
var boss=self.__boss||self;
var _3ea=document.createEvent("Event");
_3ea.initEvent(type,false,true);
object.extend(_3ea,_3e8);
_37f.wrapPreventDefault(_3ea);
boss.dispatchEvent(_3ea);
return _3ea;
}:function(self,type,_3ed){
if(!_3ed){
_3ed={};
}
if(self.nodeType==1&&isNativeEventForNode(self,type)){
var _3ee=_37f.wrapEvent(document.createEventObject());
object.extend(_3ee,_3ed);
if(isNodeInDOMTree(self)){
var _3ef=self["__on"+type];
var _3f0=self.__eventListeners[type];
if(_3ef&&_3f0){
for(var i=0,l=_3f0.length;i<l;i++){
if(_3f0[i]==_3ef){
_3f0.splice(i,1);
break;
}
}
self["__on"+type]=null;
}
if(self._oldFireEventInIE){
self._oldFireEventInIE("on"+type,_3ee);
return _3ee;
}else{
if(typeof console!="undefined"){
console.warn("\u8bf7\u4f7f\u7528dom.wrap\u65b9\u6cd5\u5305\u88c5\u5bf9\u8c61\u4ee5\u6dfb\u52a0\u4e8b\u4ef6\u5904\u7406\u51fd\u6570");
}
}
}
}
attachOnHandlerAsEventListener(self,type);
var _3ee=_37f.wrapEvent(_3ed);
var _3f0=self.__eventListeners[type];
if(_3f0){
_3f0=_3f0.slice(0);
for(var i=0,j=_3f0.length;i<j;i++){
if(_3f0[i]){
try{
_3f0[i].call(self,_3ee,true);
}
catch(e){
}
}
}
_3f0=null;
}
var _3f4=self.__nativeEvents[type];
if(_3f4){
_3f4=_3f4.slice(0);
_3f4.forEach(function(func){
func.call(self,_3ee);
});
_3f4=null;
}
return _3ee;
};
});
});
object.add("options",function(_3f6){
var _3f7=true,_3f8=Array.prototype.slice;
for(var i in {toString:1}){
_3f7=null;
}
if(_3f7){
_3f7=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];
}
this.overloadsetter=function(func){
return function(){
var a=arguments[func.length-2]||null;
var b=arguments[func.length-1];
var _3fd=args=_3f8.call(arguments,0,func.length-2);
if(a===null){
return this;
}
if(typeof a!="string"){
for(var k in a){
args=_3fd.slice(0);
args.push(k);
args.push(a[k]);
func.apply(this,args);
}
if(_3f7){
for(var i=_3f7.length;i>0;i--){
k=_3f7[i];
if(a.hasOwnProperty(k)){
func.call(this,k,a[k]);
}
}
}
}else{
args.push(a);
args.push(b);
func.apply(this,args);
}
return this;
};
};
this.Arguments=new Class(function(){
this.initialize=function(self,_401,opts){
if(opts==undefined){
opts={};
}
var _403={};
for(var key in _401){
_403[key]=(opts[key]!=undefined?opts[key]:_401[key]);
}
return _403;
};
});
this.Options=new Class({initialize:function(self,_406){
if(_406){
self._provider=_406;
}
self._options={};
},setOptions:function(self,_408,host){
if(!host){
host=self._options;
}
for(var i in _408){
if(i in host){
host[i]=_408[i];
}
}
},setOption:function(self,name,type,_40e){
if(_40e!==undefined){
self._options[name]=_40e;
}else{
if(self._provider&&self._provider.makeOption){
_40e=self._provider.makeOption(name,type);
if(_40e===null){
return;
}else{
self._options[name]=_40e;
}
}
}
},getOptions:function(self){
return self._options;
}});
});
object.add("dom","ua, events, string, dom/dd, sys",function(_410,ua,_412,_413,dd,sys){
window.UID=1;
var _416={};
var get=function(uid){
return (_416[uid]||(_416[uid]={}));
};
var $uid=this.$uid=(window.ActiveXObject)?function(item){
if(item===undefined||item===null){
return null;
}
return (item.uid||(item.uid=[window.UID++]))[0];
}:function(item){
if(item===undefined||item===null){
return null;
}
return item.uid||(item.uid=window.UID++);
};
$uid(window);
$uid(document);
if(!window.__domloadHooks){
window.__domLoaded=false;
window.__domloadHooks=[];
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",function(){
document.removeEventListener("DOMContentLoaded",arguments.callee,false);
window.__domLoaded=true;
},false);
}
var _41c=null;
if(ua.ua.webkit&&ua.ua.webkit<525){
_41c=setInterval(function(){
if(/loaded|complete/.test(document.readyState)){
clearInterval(_41c);
window.__domLoaded=true;
runHooks();
}
},10);
}else{
if(ua.ua.ie){
_41c=setInterval(function(){
try{
document.body.doScroll("left");
clearInterval(_41c);
window.__domLoaded=true;
runHooks();
}
catch(e){
}
},20);
}
}
}
function runHooks(){
var _41d=window.__domloadHooks;
var fn;
while(_41d[0]){
try{
fn=_41d.shift();
fn();
}
catch(e){
if(XN&&XN.DEBUG_MODE){
throw e;
}
}
}
}
this.ready=function(_41f){
if(typeof _41f!="function"){
return;
}
if(window.__domLoaded==true){
_41f();
return;
}
if(document.readyState=="complete"){
window.__domLoaded=true;
runHooks();
_41f();
return;
}
if((ua.ua.webkit&&ua.ua.webkit<525)||!document.addEventListener){
window.__domloadHooks.push(_41f);
}else{
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",_41f,false);
}
}
};
var wrap=this.wrap=function(node){
if(!node){
return null;
}
if(Array.isArray(node)){
return new _410.Elements(node);
}else{
if(node._wrapped){
return node;
}
if(ua.ua.ie&&node.fireEvent){
node._oldFireEventInIE=node.fireEvent;
}
var _422;
if(node===window){
_422=_410.Window;
}else{
if(node===window.document){
_422=_410.Document;
}else{
if(node.nodeType===1){
_422=getWrapper(node.tagName);
}else{
return node;
}
}
}
node._wrapped=true;
$uid(node);
Class.inject(_422,node,function(dest,src,prop){
if(typeof src[prop]!="function"){
if(!(prop in dest)){
return true;
}else{
return false;
}
}else{
return true;
}
});
return node;
}
};
this.getElements=function(_426,_427){
if(!_426||typeof _426!="string"){
return null;
}
if(!_427){
_427=document;
}
var _428=Slick.parse(_426);
var eles=Sizzle(_426,_427);
var _42a,part;
if(_428.expressions.length==1){
part=_428.expressions[0];
_42a=getWrapper(part[part.length-1].tag);
}else{
for(var i=0,_42d,_42e;i<_428.expressions.length;i++){
part=_428.expressions[i];
_42a=getWrapper(part[part.length-1].tag);
_42d=Class.getChain(_42a).slice(0,-1).reverse();
if(_42e){
_42d=getCommon(_42d,_42e);
}
if(_42d.length==1){
break;
}
_42e=_42d;
}
_42a=_42d[_42d.length-1];
}
return new _410.Elements(eles,_42a);
};
this.getElement=function(_42f,_430){
if(!_42f||typeof _42f!="string"){
return null;
}
if(!_430){
_430=document;
}
var ele=Sizzle(_42f,_430)[0];
ele=wrap(ele);
return ele;
};
this.id=function(id){
return _410.wrap(document.getElementById(id));
};
var _433=this.eval_inner_JS=function(ele){
if(!ele){
return;
}
if(typeof ele=="string"){
var node=document.createElement("div");
node.innerHTML="<div>&nbsp;</div> "+ele;
ele=node;
}
var js=[];
if(ele.nodeType==11){
for(var i=0,l=ele.childNodes.length,_439;i<l;i++){
_439=ele.childNodes[i];
if(_439.tagName&&_439.tagName.toUpperCase()=="SCRIPT"){
js.push(_439);
}else{
if(_439.nodeType===1){
var _43a=_439.getElementsByTagName("script");
for(var j=0,_43c=_43a.length;j<_43c;j++){
js.push(_43a[j]);
}
}
}
}
}else{
if(ele.nodeType==1){
if(ele.tagName&&ele.tagName.toUpperCase()=="SCRIPT"){
js.push(ele);
}else{
js=ele.getElementsByTagName("script");
}
}
}
var arr=[];
for(i=0;i<js.length;i++){
arr.push(js[i]);
}
arr.forEach(function(s,i){
if(s.src){
return;
}else{
var _440="__inner_js_out_put = [];\n";
_440+=s.innerHTML.replace(/document\.write/g,"__inner_js_out_put.push");
eval(_440);
if(__inner_js_out_put.length!==0){
var tmp=document.createDocumentFragment();
var div=document.createElement("div");
div.innerHTML=__inner_js_out_put.join("");
while(div.firstChild){
tmp.appendChild(div.firstChild);
}
s.parentNode.insertBefore(tmp,s);
}
}
});
};
var _443=(function(){
var t=document.createElement("div");
t.innerHTML="<TEST_TAG></TEST_TAG>";
return !(t.firstChild===null);
})();
var _445=(function(){
if(ua.ua.ie<8){
return false;
}
return true;
})();
var _446="placeholder" in document.createElement("input");
var _447="naturalWidth" in document.createElement("img");
var _448="checkValidity" in document.createElement("input");
var _449="hidden" in document.createElement("div");
var _44a="formAction" in document.createElement("input");
var _44b="selectionStart" in document.createElement("input");
var _44c=function(){
var prop=property(function(self){
return self[prop.__name__];
},function(self,_450){
self._set(prop.__name__,_450);
});
return prop;
};
var _451=function(_452,attr){
var prop=property(function(self){
if(!attr){
attr=prop.__name__.toLowerCase();
}
var _456=self.getAttribute(attr);
return _456!=null?_456:_452;
},function(self,_458){
if(!attr){
attr=prop.__name__.toLowerCase();
}
if(!_458){
_458="";
}
self.setAttribute(attr,_458);
});
return prop;
};
this.getDom=function(str){
var tmp=document.createElement("div");
var _45b=document.createDocumentFragment();
if(!_443){
tmp.style.display="none";
document.body.appendChild(tmp);
}
tmp.innerHTML=str;
while(tmp.firstChild){
_45b.appendChild(wrap(tmp.firstChild));
}
if(!_443){
tmp.parentNode.removeChild(tmp);
}
return _45b;
};
this.ElementClassList=new Class(Array,function(){
this.initialize=function(self,ele){
self.length=0;
self._ele=ele;
self._loadClasses();
};
this._loadClasses=function(self){
self._classes=self._ele.className.replace(/^\s+|\s+$/g,"").split(/\s+/);
};
this.toggle=function(self,_460){
if(!_460){
throw new Error("token\u4e0d\u80fd\u4e3a\u7a7a");
return;
}
if(typeof _460!="string"){
return;
}
if(self.contains(_460)){
self.remove(_460);
}else{
self.add(_460);
}
};
this.add=function(self,_462){
if(!_462){
throw new Error("token\u4e0d\u80fd\u4e3a\u7a7a");
return;
}
if(typeof _462!="string"){
return;
}
if(!self.contains(_462)){
self._ele.className=(self._ele.className+" "+_462).trim();
self._loadClasses();
}
};
this.remove=function(self,_464){
if(!_464){
throw new Error("token\u4e0d\u80fd\u4e3a\u7a7a");
return;
}
if(typeof _464!="string"){
return;
}
if(!self.contains(_464)){
return;
}
self._ele.className=self._ele.className.replace(new RegExp(_464.trim(),"i"),"").trim();
self._loadClasses();
};
this.contains=function(self,_466){
if(!_466){
throw new Error("token\u4e0d\u80fd\u4e3a\u7a7a");
return false;
}
if(typeof _466!="string"){
return false;
}
if(self._classes.indexOf(_466)!=-1){
return true;
}else{
return false;
}
};
this.item=function(self,i){
return self._classes[i]||null;
};
this.toString=function(self){
return self._ele.className;
};
});
var _46a=["click","dblclick","mouseup","mousedown","contextmenu","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup"];
this.Element=new Class(function(){
Class.mixin(this,_412.Events);
Class.mixin(this,dd.DragDrop);
this.nativeEventNames=_46a;
this.initialize=function(self,_46c){
if(_46c){
self=document.createElement(_46c);
wrap(self);
}else{
}
if(!self.__eventListeners){
self.__eventListeners={};
}
if(!self.__nativeEvents){
self.__nativeEvents={};
}
if(self.classList===undefined&&self!==document&&self!==window){
self.classList=new _410.ElementClassList(self);
}
self.delegates={};
};
this.hidden=_449?_44c():property(function(self){
return self.style.display=="none";
},function(self,_46f){
if(_46f==true){
if(self.style.display!=="none"){
self.__oldDisplay=self.style.display;
}
self.style.display="none";
}else{
self.style.display=self.__oldDisplay||"";
}
});
this.retrieve=function(self,_471,_472){
var _473=get(self.uid);
if(!(_471 in _473)&&_472!==undefined){
_473[_471]=_472;
}
return _473[_471];
};
this.store=function(self,_475,_476){
var _477=get(self.uid);
_477[_475]=_476;
return self;
};
this.delegate=function(self,_479,type,fn,_47c){
function wrapper(e){
var ele=e.srcElement||e.target;
do{
if(ele&&_410.Element.get("matchesSelector")(ele,_479)){
fn.call(wrap(ele),e);
}
}while((ele=ele.parentNode));
}
var key=_479+"_"+type;
if(!self.delegates){
self.delegates={};
}
if(!(key in self.delegates)){
self.delegates[key]=[];
}
self.delegates[key].push({wrapper:wrapper,fn:fn});
self.addEvent(type,wrapper,_47c);
};
this.undelegate=function(self,_481,type,fn,_484){
var key=_481+"_"+type;
if(!self.delegates){
self.delegates={};
}
if(!(key in self.delegates)){
return;
}
self.delegates[key].forEach(function(item){
if(item.fn===fn){
self.removeEvent(type,item.wrapper,_484);
return;
}
});
};
this.matchesSelector=function(self,_488){
return Sizzle.matches(_488,[self]).length>0;
};
this.getData=function(self,name){
return self.getAttribute("data-"+name);
};
this.setHTML=function(self,str){
self.set("innerHTML",str);
};
this.setContent=this.setHTML;
this.getElement=function(self,_48e){
return _410.getElement(_48e,self);
};
this.getElements=function(self,_490){
return _410.getElements(_490,self);
};
var _491={before:function(_492,_493){
var _494=_493.parentNode;
if(_494){
_494.insertBefore(_492,_493);
}
},after:function(_495,_496){
var _497=_496.parentNode;
if(_497){
_497.insertBefore(_495,_496.nextSibling);
}
},bottom:function(_498,_499){
_499.appendChild(_498);
},top:function(_49a,_49b){
_49b.insertBefore(_49a,_49b.firstChild);
}};
_491.inside=_491.bottom;
this.grab=function(self,el,_49e){
_491[_49e||"bottom"](el,self);
return self;
};
this.inject=function(self,el,_4a1){
_491[_4a1||"bottom"](self,el);
return self;
};
this.getPrevious=function(self,_4a3){
var _4a4=_4a3?_410.Element.get("matchesSelector"):null;
var _4a5=self;
while(_4a5=_4a5.previousSibling){
if(_4a5.nodeType==8){
continue;
}
if(!_4a4||_4a4(_4a5,_4a3)){
return wrap(_4a5);
}
}
return null;
};
this.getAllPrevious=function(self,_4a7){
var _4a8=_4a7?_410.Element.get("matchesSelector"):null;
var _4a9=[];
var _4aa=self;
while(_4aa=_4aa.previousSibling){
if(_4aa.nodeType==8){
continue;
}
if(!_4a8||_4a8(_4aa,_4a7)){
_4a9.push(wrap(_4aa));
}
}
return _4a9;
};
this.getNext=function(self,_4ac){
var _4ad=_4ac?_410.Element.get("matchesSelector"):null;
var _4ae=self;
while(_4ae=_4ae.nextSibling){
if(_4ae.nodeType==8){
continue;
}
if(!_4ad||_4ad(_4ae,_4ac)){
return wrap(_4ae);
}
}
return null;
};
this.getAllNext=function(self,_4b0){
var _4b1=_4b0?_410.Element.get("matchesSelector"):null;
var _4b2=[];
var _4b3=self;
while(_4b3=_4b3.nextSibling){
if(_4b3.nodeType==8){
continue;
}
if(!_4b1||_4b1(_4b3,_4b0)){
_4b2.push(wrap(_4b3));
}
}
return _4b2;
};
this.getFirst=function(self,_4b5){
var _4b6=_4b5?_410.Element.get("matchesSelector"):null;
var _4b7=self.childNodes,l=_4b7.length;
for(var i=0,_4ba;i<l;i++){
_4ba=_4b7[i];
if(_4ba.nodeType==8){
continue;
}
if(!_4b6||_4b6(_4ba,_4b5)){
return wrap(_4ba);
}
}
return null;
};
this.getLast=function(self,_4bc){
var _4bd=_4bc?_410.Element.get("matchesSelector"):null;
var _4be=self.childNodes,l=_4be.length;
for(var i=l-1,_4c1;i>=0;i--){
_4c1=_4be[i];
if(_4c1.nodeType==8){
continue;
}
if(!_4bd||_4bd(_4c1,_4bc)){
return wrap(_4c1);
}
}
return null;
};
this.getParent=function(self,_4c3){
if(!_4c3){
return wrap(self.parentNode);
}
var _4c4=_410.Element.get("matchesSelector");
var _4c5=self;
do{
if(_4c4(_4c5,_4c3)){
return wrap(_4c5);
}
}while((_4c5=_4c5.parentNode));
return null;
};
this.getParents=function(self,_4c7){
var _4c8=_4c7?_410.Element.get("matchesSelector"):null;
var _4c9=[];
var _4ca=self;
while(_4ca=_4ca.parentNode){
if(_4ca.nodeType==8){
continue;
}
if(!_4c8||_4c8(_4ca,_4c7)){
_4c9.push(wrap(_4ca));
}
}
return _4c9;
};
this.getSiblings=function(self,_4cc){
return self.getAllPrevious(_4cc).concat(self.getAllNext(_4cc));
};
this.getChildren=function(self,_4ce){
var _4cf=_4ce?_410.Element.get("matchesSelector"):null;
var _4d0=self.childNodes,l=_4d0.length,_4d2=[];
for(var i=0,_4d4;i<l;i++){
_4d4=_4d0[i];
if(_4d4.nodeType==8){
continue;
}
if(!_4cf||_4cf(_4d4,_4ce)){
_4d2.push(wrap(_4d4));
}
}
return _4d2;
};
this.addClass=function(self,name){
if(!name){
return;
}
self.classList.add(name);
};
this.removeClass=function(self,name){
if(!name){
return;
}
self.classList.remove(name);
};
this.toggleClass=function(self,name){
if(!name){
return;
}
self.classList.toggle(name);
};
this.hasClass=function(self,name){
if(!name){
return false;
}
return self.classList.contains(name);
};
var html=document.documentElement;
var _4de=(html.style.cssFloat==null)?"styleFloat":"cssFloat",_4df=(html.style.opacity!=null),_4e0=(html.style.filter!=null),_4e1=/alpha\(opacity=([\d.]+)\)/i;
this.opacity=property(function(self){
if(_4df){
return self.style.opacity;
}else{
if(_4e0){
var _4e3=self.style.filter||self.currentStyle.filter;
if(_4e3){
opacity=_4e3.match(_4e1);
}
return (opacity==null||_4e3==null)?1:(opacity[1]/100);
}else{
return self.retrieve("opacity");
}
}
},function(self,_4e5){
if(_4df){
self.style.opacity=_4e5;
}else{
if(_4e0){
if(!self.currentStyle||!self.currentStyle.hasLayout){
self.style.zoom=1;
}
_4e5=parseInt(_4e5*100);
if(_4e5>100){
_4e5=100;
}else{
if(_4e5<0){
_4e5=0;
}
}
var _4e6=_4e5==100?"":"alpha(opacity="+_4e5+")";
var _4e7=self.style.filter||self.currentStyle.filter||"";
self.style.filter=_4e1.test(_4e7)?_4e7.replace(_4e1,_4e6):_4e7+_4e6;
}else{
self.store("opacity",_4e5);
self.style.visibility=_4e5>0?"visible":"hidden";
}
}
});
this.setStyle=function(self,_4e9,_4ea){
switch(_4e9){
case "opacity":
return self.set("opacity",parseFloat(_4ea));
case "float":
_4e9=_4de;
break;
default:
break;
}
_4e9=_413.camelCase(_4e9);
self.style[_4e9]=_4ea;
return null;
};
this.dispose=function(self){
return (self.parentNode)?self.parentNode.removeChild(self):self;
};
this.hide=function(self){
if(self.style.display!=="none"){
self.oldDisplay=self.style.display;
}
self.style.display="none";
};
this.show=function(self){
self.style.display=self.oldDisplay||"";
};
this.toggle=function(self){
if(self.style.display=="none"){
self.show();
}else{
self.hide();
}
};
this.innerHTML=property(null,function(self,html){
if(_443){
self.innerHTML=html;
}else{
var _4f1=_410.getDom(html);
self.innerHTML="";
while(_4f1.firstChild){
self.appendChild(_4f1.firstChild);
}
}
});
this.tagName=property(function(self){
return self.tagName.toUpperCase();
});
this.fromString=staticmethod(function(str){
var tmp=document.createElement("div");
if(!_443){
tmp.style.display="none";
document.body.appendChild(tmp);
}
tmp.innerHTML=str.trim();
var _4f5=wrap(tmp.firstChild);
if(!_443){
tmp.parentNode.removeChild(tmp);
}
return _4f5;
});
});
this.ImageElement=new Class(_410.Element,function(){
this.nativeEventNames=_46a.concat(["error","abort"]);
function _getNaturalSize(img){
var _4f7=new Image();
_4f7.src=img.src;
return {width:_4f7.width,height:_4f7.height};
}
this.naturalWidth=property(function(self){
if(_447){
return self.naturalWidth;
}else{
return _getNaturalSize(self).width;
}
});
this.naturalHeight=property(function(self){
if(_447){
return self.naturalHeight;
}else{
return _getNaturalSize(self).height;
}
});
});
this.FormElement=new Class(_410.Element,function(){
this.nativeEventNames=_46a.concat(["reset","submit"]);
this.initialize=function(self){
this.parent(self);
if(self.elements){
for(var i=0;i<self.elements.length;i++){
wrap(self.elements[i]);
}
}
if(!_445){
self.elements.namedItem=function(name){
return Sizzle("*[name="+name+"]",self)[0];
};
}
if(!_44a){
self.addNativeEvent("submit",function(_4fd){
if(!self.__submitButton){
return;
}
var _4fe=self.__submitButton;
self.__submitButton=null;
var _4ff=self.action;
var _500=self.method;
var _501=self.encoding||self.enctype;
var _502=self.noValidate;
var _503=self.target;
var _504=_4fe.getAttribute("formaction");
var _505=_4fe.getAttribute("formmethod");
var _506=_4fe.getAttribute("formenctype");
var _507=_4fe.getAttribute("formnovalidate");
var _508=_4fe.getAttribute("formtarget");
if(_504){
self.action=_504;
}
if(_505){
self.method=_505;
}
if(_506){
self.enctype=self.encoding=_506;
}
if(_507){
self.formNoValidate=_507;
}
if(_508){
self.target=_508;
}
var _509=_4fd.getPreventDefault?_4fd.getPreventDefault():_4fd.defaultPrevented;
if(!_509){
_4fd.preventDefault();
self.submit();
}
if(ua.ua.webkit<=534.12){
setTimeout(function(){
self.action=_4ff;
self.method=_500;
self.enctype=self.encoding=_501;
self.formNoValidate=_502;
self.target=_503;
},0);
}else{
self.action=_4ff;
self.method=_500;
self.enctype=self.encoding=_501;
self.formNoValidate=_502;
self.target=_503;
}
});
}
};
this.createRequest=function(self,_50b){
if(!_50b){
_50b={};
}
if(!_50b.method){
_50b.method=self.method;
}
if(!_50b.url){
_50b.url=self.action;
}
if(!_50b.data){
_50b.data=self.toQueryString();
}
if(!_50b.onsuccess){
_50b.onsuccess=function(_50c){
self.fireEvent("requestSuccess",{request:_50c.request});
};
}
if(!_50b.onerror){
_50b.onerror=function(_50d){
self.fireEvent("requestError",{request:_50d.request});
};
}
var net=sys.modules["net"];
if(net){
xhr=new net.Request(_50b);
}else{
throw new ModuleRequiredError("net");
}
return xhr;
};
this.send=function(self,data){
var _511=self.createRequest();
_511.send(data);
return _511;
};
this.toQueryString=function(self){
var _513=[];
function addItem(name,_515){
if(typeof _515!="undefined"){
_513.push(encodeURIComponent(name)+"="+encodeURIComponent(_515));
}
}
self.getElements("input, select, textarea, output").forEach(function(el){
var type=el.type;
if(!el.name||el.disabled||type=="submit"||type=="reset"||type=="file"||type=="image"){
return;
}
if(el.tagName.toLowerCase()=="select"){
el.getSelected().map(function(opt){
var _519=wrap(opt).get("value");
addItem(el.name,_519);
});
}else{
if(type=="radio"||type=="checkbox"){
if(el.checked){
addItem(el.name,el.get("value"));
}
}else{
addItem(el.name,el.get("value"));
}
}
});
return _513.join("&");
};
this.checkValidity=function(self){
return self.getElements("input, select, textarea, output").every(function(el){
return el.checkValidity();
});
};
});
this.FormItemElement=new Class(_410.Element,function(){
this.nativeEventNames=_46a.concat(["focus","blur","change","select","paste"]);
this.required=_448?_44c():_451(false);
this.pattern=_448?_44c():_451("");
this.maxlength=_44c();
this.type=_448?_44c():_451("text");
this.min=_448?_44c():_451("");
this.max=_448?_44c():_451("");
this.selectionStart=property(function(self){
try{
if(typeof self.selectionStart=="number"){
return self.selectionStart;
}
}
catch(e){
return -1;
}
if(document.selection){
var _51d=document.selection.createRange();
if(_51d==null||_51d.parentElement()!=self){
if(self.__selectionPos){
return self.__selectionPos.start;
}else{
return -1;
}
}
return calculateSelectionPos(self).start;
}else{
return -1;
}
});
this.selectionEnd=property(function(self){
try{
if(typeof self.selectionEnd=="number"){
return self.selectionEnd;
}
}
catch(e){
return -1;
}
if(document.selection){
var _51f=document.selection.createRange();
if(_51f==null||_51f.parentElement()!=self){
if(self.__selectionPos){
return self.__selectionPos.end;
}else{
return -1;
}
}
return calculateSelectionPos(self).end;
}else{
return -1;
}
});
this.getSelected=function(self){
self.selectedIndex;
var _521=[];
for(var i=0;i<self.options.length;i++){
if(self.options[i].selected){
_521.push(self.options[i]);
}
}
return _521;
};
this.value=property(function(self){
if(self.classList.contains("placeholder")){
return "";
}
return self.value;
},function(self,_525){
if(self.classList.contains("placeholder")){
self.classList.remove("placeholder");
self.removeAttribute("autocomplete");
self.value="";
}
self.value=_525;
if(!_446&&!self.value&&self.getAttribute("placeholder")){
self.classList.add("placeholder");
self.value=self.getAttribute("placeholder");
self.setAttribute("autocomplete","off");
}
self.checkValidity();
});
this.validity=_448?property(function(self){
return self.validity;
}):property(function(self){
var _528=self.get("value");
var _529={valueMissing:self.getAttribute("required")&&!_528?true:false,typeMismatch:(function(type){
if(type=="url"){
return !(/^\s*(?:(\w+?)\:\/\/([\w-_.]+(?::\d+)?))(.*?)?(?:;(.*?))?(?:\?(.*?))?(?:\#(\w*))?$/i).test(_528);
}
if(type=="tel"){
return !(/[^\r\n]/i).test(_528);
}
if(type=="email"){
return !(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i).test(_528);
}
return false;
})(self.getAttribute("type")),patternMismatch:(function(){
var _52b=self.getAttribute("pattern");
if(_52b){
return !(new RegExp("^"+_52b+"$")).test(_528);
}else{
return false;
}
})(),tooLong:(function(){
var _52c=self.get("maxlength");
var n=Number(_52c);
if(n!=_52c){
return false;
}
return _528.length>n;
})(),customError:!!self.__customValidity,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false};
_529.valid=["valueMissing","typeMismatch","patternMismatch","tooLong","rangeUnderflow","rangeOverflow","stepMismatch","customError"].every(function(name){
return _529[name]===false;
});
self.__validationMessage=(function(){
if(_529.valid){
return "";
}
if(_529.customError){
return self.__customValidity;
}
if(_529.valueMissing){
return "\u8bf7\u586b\u5199\u6b64\u5b57\u6bb5\u3002";
}
if(_529.typeMismatch){
return "\u8bf7\u8f93\u5165\u4e00\u4e2a"+self.getAttribute("type")+"\u3002";
}
if(_529.patternMismatch){
return "\u8bf7\u5339\u914d\u8981\u6c42\u7684\u683c\u5f0f\u3002";
}
if(_529.tooLong){
return "\u8bf7\u5c06\u8be5\u6587\u672c\u51cf\u5c11\u4e3a "+self.get("maxlength")+" \u4e2a\u5b57\u7b26\u6216\u66f4\u5c11\uff08\u60a8\u5f53\u524d\u4f7f\u7528\u4e86"+self.get("value").length+"\u4e2a\u5b57\u7b26\uff09\u3002";
}
if(_529.rangeUnderflow){
return "\u503c\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e"+self.getAttribute("min")+"\u3002";
}
if(_529.rangeOverflow){
return "\u503c\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e"+self.getAttribute("max")+"\u3002";
}
if(_529.stepMismatch){
return "\u503c\u65e0\u6548\u3002";
}
})();
self._set("validationMessage",self.__validationMessage);
self._set("validity",_529);
return _529;
});
this.validationMessage=_448?property(function(self){
return self.validationMessage;
}):property(function(self){
self.get("validity");
return self.__validationMessage;
});
if(!_448){
this.setCustomValidity=function(self,_532){
self.__customValidity=_532;
self.get("validity");
};
this.checkValidity=function(self){
self.get("validity");
return self.validity.valid;
};
}
this.focusToPosition=function(self,_535){
if(_535===undefined){
_535=self.get("value").length;
}
if(self.setSelectionRange){
self.focus();
self.setSelectionRange(self.get("value").length,_535);
}else{
if(self.createTextRange){
var _536=self.createTextRange();
_536.moveStart("character",_535);
_536.collapse(true);
_536.select();
self.focus();
}else{
self.focus();
}
}
};
});
this.TextBaseElement=new Class(_410.FormItemElement,function(){
this.initialize=function(self){
this.parent(self);
if(!_446){
self.bindPlaceholder();
}
if(!_44b){
self.addEvent("beforedeactivate",function(){
self.__selectionPos=calculateSelectionPos(self);
});
}
};
this.placeholder=property(function(self){
return self.getAttribute("placeholder");
},function(self,_53a){
self.setAttribute("placeholder",_53a);
if(!_446){
self.bindPlaceholder();
if(self.get("_placeholding")){
self.value=_53a;
}
}
});
this._placeholding=property(function(self){
return self.classList.contains("placeholder");
},function(self,_53d){
if(_53d){
self.classList.add("placeholder");
self.setAttribute("autocomplete","off");
}else{
self.classList.remove("placeholder");
self.removeAttribute("autocomplete");
}
});
this.bindPlaceholder=function(self){
if(self._binded){
return;
}
self._binded=true;
function checkEmpty(_53f){
var _540=self.get("placeholder");
if(!_540){
return;
}
if(self.get("_placeholding")){
if(_53f.type=="focus"&&self.value===_540){
self.value="";
}
self.set("_placeholding",false);
}else{
if(!self.value||((ua.ua.ie==6||ua.ua.ie==7)&&!_53f&&self.value==_540)){
self.set("_placeholding",true);
self.value=_540;
}
}
}
self.addNativeEvent("focus",function(_541){
return checkEmpty(_541);
});
self.addNativeEvent("blur",function(_542){
return checkEmpty(_542);
});
if(self.form){
wrap(self.form).addNativeEvent("submit",function(){
if(self.classList.contains("placeholder")){
self.set("_placeholding",false);
self.value="";
setTimeout(function(){
checkEmpty();
},0);
}
});
}
checkEmpty();
};
});
this.InputElement=new Class(_410.TextBaseElement,function(){
this.formAction=_44a?_44c():_451("");
this.formEnctype=_44a?_44c():_451("application/x-www-form-urlencoded");
this.formMethod=_44a?_44c():_451("get");
this.formNoValidate=_44a?_44c():_451(false);
this.formTarget=_44a?_44c():_451("");
this.initialize=function(self){
this.parent(self);
if(!_44a){
self.addNativeEvent("click",function(_544){
if(self.type=="submit"){
self.form.__submitButton=self;
}
});
}
};
this.send=function(self,data){
if(self.type!="submit"){
return;
}
var _547=self.form.createRequest({method:self.getAttribute("formmethod")||self.form.method,url:self.getAttribute("formaction")||self.form.action,onsuccess:function(_548){
self.fireEvent("requestSuccess",{request:_548.request});
},onerror:function(_549){
self.fireEvent("requestError",{request:_549.request});
}});
_547.send(data);
return _547;
};
});
this.TextAreaElement=new Class(_410.TextBaseElement,function(){
});
this.Window=new Class(_410.Element,function(){
this.nativeEventNames=_46a.concat(["load","unload","beforeunload","resize","move","DomContentLoaded","readystatechange","scroll","mousewheel","DOMMouseScroll"]);
});
this.Document=new Class(_410.Element,function(){
this.nativeEventNames=_46a.concat(["load","unload","beforeunload","resize","move","DomContentLoaded","readystatechange","scroll","mousewheel","DOMMouseScroll"]);
});
this.Elements=new Class(Array,function(){
this.initialize=function(self,_54b,_54c){
if(!_54c){
_54c=_410.Element;
}
for(var i=0;i<_54b.length;i++){
self.push(wrap(_54b[i]));
}
Class.keys(_54c).forEach(function(name){
if(typeof _54c.get(name)!="function"){
return;
}
self[name]=function(){
var _54f;
for(var i=0;i<self.length;i++){
_54f=self[i];
if(typeof _54f[name]=="function"){
_54f[name].apply(self[i],[].slice.call(arguments,0));
}
}
};
});
self.set=function(key,_552){
for(var i=0;i<self.length;i++){
self[i].set(key,_552);
}
};
self.get=function(key){
var _555=[];
for(var i=0;i<self.length;i++){
_555.push(self[i].get(key));
}
return _555;
};
};
});
var _557={"IMG":_410.ImageElement,"FORM":_410.FormElement,"INPUT":_410.InputElement,"TEXTAREA":_410.TextAreaElement,"OUTPUT":_410.FormItemElement,"SELECT":_410.FormItemElement,"OPTION":_410.FormItemElement,"BUTTON":_410.FormItemElement};
function getWrapper(_558){
var tag=_558.toUpperCase();
var cls=_557[tag];
if(cls){
return cls;
}else{
return _410.Element;
}
}
function getCommon(arr1,arr2){
var i;
for(i=0,l=arr1.length;i<l;i++){
if(!arr2[i]||arr2[i]!==arr1[i]){
break;
}
}
return arr1.slice(0,i);
}
function calculateSelectionPos(_55e){
var _55f=document.selection.createRange();
if(_55f==null||_55f.parentElement()!=_55e){
return {start:-1,end:-1};
}
var _560=_55e.createTextRange();
var _561=_560.duplicate();
_560.moveToBookmark(_55f.getBookmark());
_561.setEndPoint("EndToStart",_560);
return {start:_561.text.length,end:_561.text.length+_55f.text.length};
}
});
object.add("dom.dd","ua, events, sys",function(_562,ua,_564,sys){
function isEventSupported(_566,_567){
var _568={"select":"input","change":"input","submit":"form","reset":"form","error":"img","load":"img","abort":"img"};
_567=_567||document.createElement(_568[_566]||"div");
_566="on"+_566;
var _569=(_566 in _567);
if(!_569){
if(!_567.setAttribute){
_567=document.createElement("div");
}
if(_567.setAttribute&&_567.removeAttribute){
_567.setAttribute(_566,"");
_569=typeof _567[_566]=="function";
if(typeof _567[_566]!="undefined"){
_567[_566]=undefined;
}
_567.removeAttribute(_566);
}
}
_567=null;
return _569;
}
var iOS=!!navigator.userAgent.match("iPhone OS")||!!navigator.userAgent.match("iPad");
var _56b=!iOS&&isEventSupported("dragstart")&&isEventSupported("drop");
this.DragDrop=new Class(function(){
var _56c=["display","position","width","height","border","backgroundColor","filter","opacity","zIndex","left","top"];
var _56d=["IMG","A"];
Class.mixin(this,_564.Events);
if(ua.ua.ie){
document.ondragstart=returnFalse;
}
this.initialize=function(self){
if(self.get("draggable")==true&&(_56d.indexOf(self.tagName)==-1)){
self.__docForDD=sys.modules["dom"].wrap(document);
self.__binderForDD={checkDragging:self._checkDragging.bind(self),cancel:self._cancelDrag.bind(self),dragging:self._dragging.bind(self),finish:self._finishDrag.bind(self)};
self.set("draggable",true);
self._forbidAutoDraggableNodes();
}
if(self.get("dropzone")!=undefined&&self.get("dropzone")!=""){
self.set("dropzone","default");
}
};
this.draggable=property(function(self){
return self.draggable;
},function(self,_571){
self._set("draggable",_571);
if(_571){
if(self.__canDrag==true){
return;
}
self.addEvent("mousedown",self._handleMouseDownForDD,false);
self.__canDrag=true;
if(self.__belongToDroppable!=null){
return;
}
self.__droppables=[];
var _572=self.parentNode;
while(_572&&_572.tagName!="BODY"&&_572.tagName!="HTML"){
if(_572.dropzone!=undefined&&_572.dropzone!=""){
_572=sys.modules["dom"].wrap(_572);
self.__belongToDroppable=_572;
self.__droppables.push(_572);
break;
}
_572=_572.parentNode;
}
}else{
if(self.__canDrag==true){
self.removeEvent("mousedown",self._handleMouseDownForDD,false);
self.__canDrag=false;
}
}
});
this.dropzone=property(function(self){
return self.dropzone;
},function(self,_575){
self._set("dropzone",_575);
if(_575!=undefined&&_575!=""){
if(self.__canDrop!=true){
self.__canDrop=true;
}
}else{
if(self.__canDrop==true){
self.__canDrop=false;
}
}
});
this.getDroppableList=function(self){
return self.__canDrag?self.__droppables:null;
};
this.getCurrentDroppable=function(self){
return self.__canDrag?self.__belongToDroppable:null;
};
this.addDraggables=function(self,_579,_57a){
if(self.__canDrop!=true){
return self;
}
_57a=_57a||false;
if(!self.__draggables){
self.__draggables=[];
}
for(var i=0,l=_579.length,_57d;i<l;i++){
_57d=_579[i];
if(!_57d._canDrag){
_57d.enableDrag();
}
if(_57d.__droppables.indexOf(self)==-1){
_57d.__droppables.push(self);
}
if(_57a){
_57d.__belongToDroppable=self;
}
}
return self;
};
this.addDroppable=function(self,_57f,_580){
if(self.__canDrag!=true){
return self;
}
_580=_580||false;
self.__droppables=self.__droppables||[];
self.__droppables.push(_57f);
if(_580){
self.__belongToDroppable=_57f;
}
return self;
};
if(_56b){
this._forbidAutoDraggableNodes=function(self){
if(self.__canDrag!=true){
return self;
}
var _582=sys.modules["dom"].getElements(_56d.join(","),self);
for(var i=0,l=_582.length;i<l;i++){
_582[i].draggable=false;
}
return self;
};
}else{
this._forbidAutoDraggableNodes=function(self){
return self;
};
}
this._addEventToDoc=function(self,type,_588,_589){
var _58a=window.asyncHTMLManager?window.asyncHTMLManager.dom.Element.prototype.addEvent:self._doc.addEvent;
_58a.call(self.__docForDD,type,_588,_589);
};
this._removeEventFromDoc=function(self,type,_58d,_58e){
var _58f=window.asyncHTMLManager?window.asyncHTMLManager.dom.Element.prototype.removeEvent:self._doc.removeEvent;
_58f.call(self.__docForDD,type,_58d,_58e);
};
this._handleMouseDownForDD=function(self,e){
if(e.preventDefault){
e.preventDefault();
}
if(e.stopPropagation){
e.stopPropagation();
}
var _592=getMousePos(e);
var _593=self.position();
self.__originMouseX=_592.x;
self.__originMouseY=_592.y;
if(ua.ua.chrome){
self.__originX=_593.x;
self.__originY=_593.y;
self.removeEvent("click",fixChromeClick,false);
}
self.__deltaX=_592.x-_593.x;
self.__deltaY=_592.y-_593.y;
self._addEventToDoc("mousemove",self.__binderForDD.checkDragging,false);
self._addEventToDoc("mouseup",self.__binderForDD.cancel,false);
self.__selectionEventName=ua.ua.ie?"selectstart":"mousedown";
self._addEventToDoc(self.__selectionEventName,returnFalse,false);
};
this._checkDragging=function(self,e){
if(e.preventDefault){
e.preventDefault();
}
var _596=getMousePos(e);
var _597=Math.round(Math.sqrt(Math.pow(_596.x-self.__originMouseX,2)+Math.pow(_596.y-self.__originMouseY,2)));
if(_597>3){
self._removeEventFromDoc("mousemove",self.__binderForDD.checkDragging,false);
self._removeEventFromDoc("mouseup",self.__binderForDD.cancel,false);
self._addEventToDoc("mousemove",self.__binderForDD.dragging,false);
self._addEventToDoc("mouseup",self.__binderForDD.finish,false);
addDraggingStyle(self);
self.fireEvent("dragstart",{dragging:self,event:e});
if(self.__belongToDroppable){
self.__belongToDroppable.fireEvent("dropinit",{dragging:self,event:e});
}
}
};
this._dragging=function(self,e){
if(e.preventDefault){
e.preventDefault();
}
var _59a=getMousePos(e);
self.style.left=(_59a.x-self.__deltaX)+"px";
self.style.top=(_59a.y-self.__deltaY)+"px";
self.fireEvent("drag",{dragging:self,event:e});
var _59b=self.position();
var _59c={top:_59b.y,left:_59b.x,right:_59b.x+parseInt(self.getStyle("width")),bottom:_59b.y+parseInt(self.getStyle("height"))};
for(var i=0,_59e,_59f,_5a0,l=self.__droppables.length;i<l;i++){
_59e=self.__droppables[i];
_59f=_59e.position();
_5a0={top:_59f.y,left:_59f.x,right:_59f.x+parseInt(_59e.getStyle("width")),bottom:_59f.y+parseInt(_59e.getStyle("height"))};
if(_59e==self.__belongToDroppable){
if(isInContainer(_5a0,_59c)){
_59e.fireEvent("dragover",{from:_59e,to:_59e,dragging:self});
}else{
_59e.fireEvent("dragleave",{from:_59e,to:null,dragging:self});
self.__belongToDroppable=null;
}
}else{
if(isInContainer(_5a0,_59c)){
if(self.__belongToDroppable){
self.__belongToDroppable.fireEvent("dragleave",{from:self.__belongToDroppable,to:_59e,dragging:self});
}
_59e.fireEvent("dragenter",{from:self.__belongToDroppable,to:_59e,dragging:self});
self.__belongToDroppable=_59e;
}
}
}
};
this._finishDrag=function(self,e){
if(e.preventDefault){
e.preventDefault();
}
self._removeEventFromDoc("mousemove",self.__binderForDD.dragging,false);
self._removeEventFromDoc("mouseup",self.__binderForDD.finish,false);
self._removeEventFromDoc(self.__selectionEventName,returnFalse,false);
removeDraggingStyle(self);
if(self.__belongToDroppable){
self.__belongToDroppable.fireEvent("drop",{dragging:self,event:e});
}
self.fireEvent("dragend",{dragging:self,event:e});
if(ua.ua.chrome){
var pos=self.position();
if(pos.x==self.__originX&&pos.y==self.__originY){
self.addEvent("click",fixChromeClick,false);
}
}
};
this._cancelDrag=function(self,e){
self._removeEventFromDoc("mousemove",self.__binderForDD.checkDragging,false);
self._removeEventFromDoc("mouseup",self.__binderForDD.cancel,false);
self._removeEventFromDoc(self.__selectionEventName,returnFalse,false);
self.fireEvent("cancel",{dragging:self,event:e});
};
function fixChromeClick(e){
this.removeEvent("click",arguments.callee,false);
e.preventDefault();
e.stopPropagation();
}
function addDraggingStyle(_5a8){
_5a8.oldStyle={};
var _5a9=_5a8.style;
_56c.forEach(function(prop){
_5a8.oldStyle[prop]=_5a9[prop];
});
_5a8.style.display="block";
_5a8.style.width=parseInt(_5a8.getStyle("width"))+"px";
_5a8.style.height=parseInt(_5a8.getStyle("height"))+"px";
_5a8.style.position="absolute";
_5a8.style.backgroundColor="#ccc";
if(ua.ua.ie){
_5a8.style.filter="Alpha(opacity=70)";
}else{
_5a8.style.opacity="0.7";
}
_5a8.style.zIndex="10000";
}
function removeDraggingStyle(_5ab){
_56c.forEach(function(prop){
_5ab.style[prop]=_5ab.oldStyle[prop];
});
_5ab.oldStyle=null;
}
function getMousePos(ev){
return {x:(ev.pageX!=null)?ev.pageX:ev.clientX+document.body.scrollLeft-document.body.clientLeft,y:(ev.pageY!=null)?ev.pageY:ev.clientY+document.body.scrollTop-document.body.clientTop};
}
function isInContainer(_5ae,_5af){
return _5af.bottom>=_5ae.top&&_5af.top<=_5ae.bottom;
}
function returnFalse(){
return false;
}
this.getStyle=function(self,_5b1){
if(ua.ua.ie){
_5b1=(_5b1=="float"||_5b1=="cssFloat")?"styleFloat":_5b1;
var _5b2=self.style[_5b1];
if(!_5b2&&self.currentStyle){
_5b2=self.currentStyle[_5b1];
}
if(_5b1=="opacity"){
if(_5b2=(self.style["filter"]||"").match(/alpha\(opacity=(.*)\)/)){
if(_5b2[1]){
return parseFloat(_5b2[1])/100;
}
}
return 1;
}
if(_5b2=="auto"){
if((_5b1=="width"||_5b1=="height")&&(self.getStyle("display")!="none")){
return self["offset"+(_5b1=="width"?"Width":"Height")]+"px";
}
return null;
}
return _5b2;
}else{
_5b1=_5b1=="float"?"cssFloat":_5b1;
var _5b2=self.style[_5b1];
if(!_5b2){
var css=document.defaultView.getComputedStyle(self,null);
_5b2=css?css[_5b1]:null;
}
if(_5b1=="opacity"){
return _5b2?parseFloat(_5b2):1;
}
return _5b2=="auto"?null:_5b2;
}
};
this.position=function(self){
if(self.parentNode===null||self.style.display=="none"){
return false;
}
var _5b5=null;
var pos=[];
var box;
if(self.getBoundingClientRect){
box=self.getBoundingClientRect();
var _5b8=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
var _5b9=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
return {x:box.left+_5b9,y:box.top+_5b8};
}else{
if(document.getBoxObjectFor){
box=document.getBoxObjectFor(self);
var _5ba=(self.style.borderLeftWidth)?parseInt(self.style.borderLeftWidth):0;
var _5bb=(self.style.borderTopWidth)?parseInt(self.style.borderTopWidth):0;
pos=[box.x-_5ba,box.y-_5bb];
}else{
pos=[self.offsetLeft,self.offsetTop];
_5b5=self.offsetParent;
if(_5b5!=self){
while(_5b5){
pos[0]+=_5b5.offsetLeft;
pos[1]+=_5b5.offsetTop;
_5b5=_5b5.offsetParent;
}
}
if(ua.ua.opera||(ua.ua.safari&&self.style.position=="absolute")){
pos[0]-=document.body.offsetLeft;
pos[1]-=document.body.offsetTop;
}
}
}
_5b5=self.parentNode||null;
while(_5b5&&_5b5.tagName!="BODY"&&_5b5.tagName!="HTML"){
pos[0]-=_5b5.scrollLeft;
pos[1]-=_5b5.scrollTop;
_5b5=_5b5.parentNode;
}
return {x:pos[0],y:pos[1]};
};
});
});
object.add("net","dom, events",function(_5bc,dom,_5be){
var _5bf=this.ajaxProxies={};
this.ajaxRequest=function(url,_5c1){
if(!url||typeof url!="string"||url.trim().length==0){
return;
}
if(!_5c1||typeof _5c1!="function"){
_5c1=function(){
};
}
var tmpA=document.createElement("a");
tmpA.href=url;
var _5c3=tmpA.hostname;
var _5c4=tmpA.protocol;
if(_5c3&&(_5c3!=location.hostname)){
var xhr=null;
if(_5bf[_5c3]){
_5c1(_5bf[_5c3].getTransport());
}else{
var _5c6=document.createElement("iframe");
_5c6.style.display="none";
dom.ready(function(){
document.body.insertBefore(_5c6,document.body.firstChild);
_5c6.src=_5c4+"//"+_5c3+"/ajaxproxy.htm";
if(_5c6.attachEvent){
_5c6.attachEvent("onload",function(){
try{
var _5c7=_5c6.contentWindow.getTransport();
}
catch(e){
throw new Error("message : "+e.message+" from url : "+url);
}
_5bf[_5c3]=_5c6.contentWindow;
_5c1(_5c7);
});
}else{
_5c6.onload=function(){
try{
var _5c8=_5c6.contentWindow.getTransport();
}
catch(e){
throw new Error("message : "+e.message+" from url : "+url);
}
_5bf[_5c3]=_5c6.contentWindow;
_5c1(_5c8);
};
}
});
}
}else{
if(window.ActiveXObject){
try{
_5c1(new ActiveXObject("Msxml2.XMLHTTP"));
}
catch(e){
_5c1(new ActiveXObject("Microsoft.XMLHTTP"));
}
}else{
_5c1(new XMLHttpRequest());
}
}
};
this.ping=function(url){
var n="_net_ping_"+(new Date()).getTime();
var c=window[n]=new Image();
c.onload=(c.onerror=function(){
window[n]=null;
});
c.src=url;
c=null;
};
this.Request=new Class(function(){
Class.mixin(this,_5be.Events);
this.initialize=function(self,_5cd){
_5cd=_5cd||{};
self.url=_5cd.url||"";
self.method=_5cd.method||"get";
self.headers={};
self.data=_5cd.data||null;
self._xhr=null;
self.onSuccess=_5cd.onSuccess;
self.onsuccess=_5cd.onsuccess;
self.onerror=_5cd.onerror;
self.oncomplete=_5cd.oncomplete;
};
this.send=function(self,data){
_5bc.ajaxRequest(self.url,function(xhr){
self._xhr=xhr;
var _5d1={request:self};
xhr.onreadystatechange=function(){
var xhr=self._xhr;
if(xhr.readyState===4){
self.responseText=xhr.responseText;
self.responseXML=xhr.responseXML;
_5d1.responseText=xhr.responseText;
_5d1.responseXML=xhr.responseXML;
if(xhr.status===undefined||xhr.status===0||(xhr.status>=200&&xhr.status<300)){
self.fireEvent("success",_5d1);
if(self.onSuccess){
self.onSuccess(_5d1);
}
}else{
self.fireEvent("error",_5d1);
}
self.fireEvent("complete",_5d1);
}
};
var xhr=self._xhr;
var url=self.url;
if(!data){
data=self.data;
}
if(data&&self.method=="get"){
url+=(url.indexOf("?")!=-1?"&":"?")+data;
data=null;
}
xhr.open(self.method,url,true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
for(var name in self.headers){
xhr.setRequestHeader(name,self.headers[name]);
}
self._xhr.send(data);
});
};
this.abort=function(self){
self._xhr.abort();
};
this.getResponseHeader=function(self,key){
return self._xhr.getResponseHeader(key);
};
this.setHeader=function(self,name,_5da){
self.headers[name]=_5da;
};
});
});
object.add("mvc","events",function(_5db,_5dc){
this.Action=new Class(_5dc.Events,function(){
this.initialize=function(self){
_5dc.Events.initialize(self);
self.view=null;
};
this.execute=function(self,view){
self.view=view;
view.load(self);
};
});
});
object.add("ui","string, options, dom, events",function(_5e0,_5e1,_5e2,dom,_5e4){
var _5e5=new Class(function(){
Class.keys(dom.Element).forEach(function(name){
var _5e7=dom.Element.get(name);
if(["initialize"].indexOf(name)!=-1){
return;
}
if(typeof _5e7!="function"){
return;
}
this[name]=function(self){
var args=[];
var arg;
for(var i=1;i<arguments.length;i++){
arg=arguments[i];
args.push((arg&&arg._node)?arg._node:arg);
}
return dom.Element.prototype[name].apply(self._node,args);
};
},this);
});
this.Components=new Class(Array,function(){
this.initialize=function(self,_5ed,type,_5ef){
if(!type){
type=_5e0.Component;
}
for(var i=0;i<_5ed.length;i++){
self.push(new type(_5ed[i],_5ef));
}
Class.keys(type).forEach(function(name){
if(typeof type.prototype[name]!="function"){
return;
}
self[name]=function(){
var _5f2;
for(i=0;i<self.length;i++){
_5f2=self[i];
if(typeof _5f2[name]=="function"){
_5f2[name].apply(self[i],arguments);
}
}
};
});
self.set=function(key,_5f4){
for(var i=0;i<self.length;i++){
self[i].set(key,_5f4);
}
};
self.get=function(key){
var _5f7=[];
for(var i=0;i<self.length;i++){
_5f7.push(self[i].get(key));
}
return _5f7;
};
};
});
this.define=function(_5f9,type,_5fb){
var prop=property(function(self){
return self[prop.__name__];
});
prop.isComponent=true;
prop.selector=_5f9;
prop.type=type||_5e0.Component;
prop.single=_5fb;
return prop;
};
this.define1=function(_5fe,type){
return _5e0.define(_5fe,type,1);
};
var _600=function(type){
if(type==="number"){
return Number;
}else{
if(type==="string"){
return String;
}else{
if(type==="boolean"){
return Boolean;
}
}
}
};
this.option=function(_602,_603,_604){
var prop;
function fget(self){
return self.getOption(prop.__name__);
}
function fset(self,_608){
return self.setOption(prop.__name__,_608);
}
prop=property(fget,fset);
prop.isOption=true;
prop.defaultValue=_602;
prop.getter=_603||function(self,name,_60b){
var _60c=self._node.getData(name.toLowerCase());
if(_60c){
return _600(typeof _60b)(_60c);
}
};
prop.setter=_604;
return prop;
};
this.component=new Class(type,function(){
this.__new__=function(cls,name,base,dict){
if(dict.__metaclass__){
dict.__defaultOptions=[];
dict.__subs=[];
dict.__subEvents={};
dict.__onEvents=[];
dict.__handles=["init","destory","invalid","error","revert","reset"];
dict.__methods=[];
}else{
dict.__defaultOptions=[];
dict.__subs=[];
dict.__subEvents={};
dict.__onEvents=[];
dict.__handles=[];
dict.__methods=[];
Object.keys(dict).forEach(function(name){
if(name=="initialize"||name.indexOf("__")==0){
return;
}
var _612=dict[name];
if(_612!=null&&_612.__class__===property){
if(_612.isComponent){
dict.__subs.push(name);
}else{
if(_612.isOption){
dict.__defaultOptions.push(name);
}
}
}else{
if(typeof _612=="function"){
if(name.match(/^(_?[a-zA-Z]+)_([a-zA-Z]+)$/)){
(dict.__subEvents[RegExp.$1]=dict.__subEvents[RegExp.$1]||[]).push(RegExp.$2);
}else{
if(name.match(/^on([a-zA-Z]+)$/)){
dict.__onEvents.push(RegExp.$1);
}else{
if(name.slice(0,1)=="_"&&name.slice(0,2)!="__"&&name!="_set"){
dict.__handles.push(name.slice(1));
}else{
dict.__methods.push(name);
}
}
}
}
}
});
}
return type.__new__(cls,name,base,dict);
};
this.initialize=function(cls,name,base,dict){
var _617=cls.prototype;
var _618=base.prototype;
_617.__handles.forEach(function(_619){
cls.set(_619,_5e4.fireevent(function(self){
return cls.get("_"+_619).apply(cls,arguments);
}));
});
if(base&&_618.addons){
_617.addons.push.apply(_617.addons,_618.addons);
}
if(_617.addons){
_617.addons.forEach(function(comp){
if(!comp){
throw new Error("bad addon");
}
var _61c=comp.prototype;
_61c.__defaultOptions.forEach(function(name){
var _61e=_617.__defaultOptions;
if(_61e.indexOf(name)!=-1){
return;
}
_61e.push(name);
cls.set(name,comp.get(name));
});
_61c.__subs.forEach(function(name){
var subs=_617.__subs;
if(subs.indexOf(name)!=-1){
return;
}
subs.push(name);
cls.set(name,comp.get(name));
});
_61c.__handles.forEach(function(_621){
var _622=_617.__handles;
var _623="_"+_621;
if(_622.indexOf(_621)!=-1){
return;
}
_622.push(_621);
cls.set(_621,_61c[_621].im_func);
cls.set(_623,_61c[_623].im_func);
});
_61c.__methods.forEach(function(name){
var _625=_617.__methods;
if(_625.indexOf(name)!=-1){
return;
}
_625.push(name);
cls.set(name,_61c[name].im_func);
});
});
}
if(base&&base!==type){
_618.__defaultOptions.forEach(function(name){
var _627=_617.__defaultOptions;
if(_627.indexOf(name)==-1){
_627.push(name);
}
});
_618.__subs.forEach(function(name){
var subs=_617.__subs;
if(subs.indexOf(name)==-1){
subs.push(name);
}
});
_618.__handles.forEach(function(_62a){
var _62b=_617.__handles;
if(_62b.indexOf(_62a)==-1){
_617.__handles.push(_62a);
}
});
_618.__methods.forEach(function(name){
var _62d=_617.__methods;
if(_62d.indexOf(name)==-1){
_62d.push(name);
}
});
Object.keys(_618.__subEvents).forEach(function(_62e){
var _62f=_617.__subEvents;
_618.__subEvents[_62e].forEach(function(_630){
var _631=_62f[_62e];
if(_631&&_631.indexOf(_630)!=-1){
return;
}
(_62f[_62e]=_62f[_62e]||[]).push(_630);
});
});
_618.__onEvents.forEach(function(_632){
var _633=_617.__onEvents;
if(_633.indexOf(_632)==-1){
_633.push(_632);
}
});
}
};
});
this.Component=new Class(function(){
this.__metaclass__=_5e0.component;
this.__mixins__=[_5e5];
this.initialize=function(self,node,_636){
if(!node.nodeType){
if(typeof node=="string"){
node={template:node};
}
var data={};
self.__defaultOptions.forEach(function(key){
if(_636[key]===undefined){
data[key]=self.get(key);
}
});
object.extend(data,_636);
var _639;
if(node.section){
_639={};
_639[node.section]=data;
}else{
_639=data;
}
var str=_5e1.substitute(node.template,_639);
node=dom.Element.fromString(str);
}
self.__nodeMap={};
self.__rendered={};
self._node=dom.wrap(node);
self.__initOptions(_636);
self.__initEvents();
self.__initSubs();
self.__initAddons();
self.init();
};
this.__initAddons=function(self){
if(!self.addons){
return;
}
self.addons.forEach(function(_63c){
_63c.get("init")(self);
});
};
this.__initEvents=function(self){
if(!self.addons){
return;
}
self.addons.forEach(function(_63e){
_63e.prototype.__onEvents.forEach(function(_63f){
var _640;
if(self.__handles.some(function(_641){
if(_641.toLowerCase()==_63f){
_640=_641;
return true;
}
return false;
})){
self.addEvent(_640,function(_642){
var args=[self,_642].concat(_642._args);
_63e.get("on"+_63f).apply(_63e,args);
});
}
});
});
};
this.__initOptions=function(self,_645){
if(!_645){
_645={};
}
self._options={};
Object.keys(_645).forEach(function(name){
self._options[name]=_645[name];
});
self.__defaultOptions.forEach(function(name){
var sub=self.__properties__[name];
var _649=sub.defaultValue;
var _64a=sub.getter(self,name,_649);
if(_64a){
self.__setOption(name,_64a);
}else{
if(_645[name]){
self.__setOption(name,_645[name]);
}else{
self.__setOption(name,_649);
}
}
var _64b=function(_64c,cls){
if(_64c){
_64c.forEach(function(_64e){
var _64f="__option_"+_64e+"_"+name;
var _650=name+"_"+_64e;
self.addEvent(_64f,function(_651){
if(cls){
cls.get(_650).call(cls,self,_651.value);
}else{
self[_650](_651.value);
}
});
});
}
};
_64b(self.__subEvents[name]);
if(self.addons){
self.addons.forEach(function(_652){
_64b(_652.prototype.__subEvents[name],_652);
});
}
});
};
this.__initSubs=function(self){
self.__subs.forEach(function(name){
var sub=self.__properties__[name];
var _656=self._options[name];
if(_656&&_656.addons){
sub.type=new Class(sub.type,function(){
_656.addons.forEach(function(_657){
_5e0.addon(this,_657);
},this);
});
}
self.__initSub(name,self.__querySub(name));
});
};
this.__initSub=function(self,name,_65a){
if(!self._node){
return null;
}
var sub=self.__properties__[name];
var _65c;
var _65d=self._options[name];
if(sub.single){
if(_65a){
_65c=new sub.type(_65a,_65d);
self.__fillSub(name,_65c);
}
}else{
if(_65a){
_65c=new _5e0.Components(_65a,sub.type,_65d);
_65c.forEach(function(comp){
self.__fillSub(name,comp);
});
}else{
_65c=new _5e0.Components([],sub.type);
}
}
self["_"+name]=_65a;
self._set(name,_65c);
return _65c;
};
this.__fillSub=function(self,name,comp){
var sub=self.__properties__[name];
var node=comp._node;
self.__addNodeMap(name,String(node.uid),comp);
comp=self.__nodeMap[name][String(node.uid)];
var _664=function(_665,cls){
if(_665){
_665.forEach(function(_667){
var _668=name+"_"+_667;
node.addEvent(_667,function(_669){
if(cls){
cls.get(_668).apply(cls,[self,_669,comp].concat(_669._args));
}else{
self[_668].apply(self,[_669,comp].concat(_669._args));
}
});
});
}
};
_664(self.__subEvents[name]);
if(self.addons){
self.addons.forEach(function(_66a){
_664(_66a.prototype.__subEvents[name],_66a);
});
}
};
this.__querySub=function(self,name){
var sub=self.__properties__[name];
if(typeof sub.selector=="function"){
return sub.selector(self);
}else{
return sub.single?self._node.getElement(sub.selector):self._node.getElements(sub.selector);
}
};
this.__setOption=function(self,name,_670){
var _671="_"+name;
self[_671]=_670;
self._set(name,_670);
};
this.__addRendered=function(self,name,node){
var _675=self.__rendered;
if(!_675[name]){
_675[name]=[];
}
_675[name].push(node);
};
this.__addNodeMap=function(self,name,id,comp){
var _67a=self.__nodeMap;
if(!_67a[name]){
_67a[name]={};
}
_67a[name][id]=comp;
};
this._init=function(self){
};
this._invalid=function(self,msg){
if(!msg){
msg="\u8f93\u5165\u9519\u8bef";
}
alert(msg);
};
this._error=function(self,msg){
if(!msg){
msg="\u51fa\u9519\u5566\uff01";
}
alert(msg);
};
this._destory=function(self,_681){
if(!_681){
_681="destory";
}
self.__subs.forEach(function(name){
var sub=self.__properties__[name];
var _684="_"+name;
if(self.__rendered[name]){
self.__rendered[name].forEach(function(node){
var comp=self.__nodeMap[name][node.uid];
delete self.__nodeMap[name][node.uid];
node.dispose();
if(sub.single){
self[name]=self[_684]=null;
}else{
self[name].splice(self[name].indexOf(comp),1);
self[_684].splice(self[_684].indexOf(node),1);
}
});
}
if(!sub.single){
self[name].forEach(function(comp){
comp[_681]();
});
}else{
if(self[name]){
self[name][_681]();
}
}
});
};
this._revert=function(self){
self._destory("revert");
};
this._reset=function(self){
self._destory("reset");
};
this.getOption=function(self,name){
var _68c="_"+name;
if(self[_68c]===undefined){
self[_68c]=self.__properties__[name].defaultValue;
}
return self[_68c];
};
this.setOption=_5e2.overloadsetter(function(self,name,_68f){
(function(self,name,_692){
var _693=Array.isArray(name)?name:name.split(".");
if(_693.length>1){
_5e0.setOptionTo(self._options,_693,_692);
if(self[_693[0]]){
arguments.callee(self[_693[0]],_693.slice(1),_692);
}
}else{
self.__setOption(name,_692);
self.fireEvent("__option_change_"+name,{value:_692});
}
})(self,name,_68f);
});
this.render=function(self,name,data){
var sub=self.__properties__[name];
var _698="render"+_5e1.capitalize(name);
var _699=name+"Render";
var _69a;
if(!!(sub.single?self[name]:self[name].length)){
return;
}
if(self[_699]){
_69a=self[_699](function(){
return self.make(name,data);
});
}else{
if(self[_698]){
_69a=self[_698](data);
}else{
_69a=self.__querySub(name);
}
}
if(_69a){
if(sub.single){
if(Array.isArray(_69a)||_69a.constructor===dom.Elements){
throw "\u8fd9\u662f\u4e00\u4e2a\u552f\u4e00\u5f15\u7528\u5143\u7d20\uff0c\u8bf7\u4e0d\u8981\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4";
}
self.__addRendered(name,_69a);
}else{
if(!Array.isArray(_69a)&&_69a.constructor!==dom.Elements){
throw "\u8fd9\u662f\u4e00\u4e2a\u591a\u5f15\u7528\u5143\u7d20\uff0c\u8bf7\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4";
}
_69a=new dom.Elements(_69a);
_69a.forEach(function(node){
self.__addRendered(name,node);
});
}
self.__initSub(name,_69a);
}
};
this.make=function(self,name,data){
var sub=self.__properties__[name];
var _6a0="_"+name;
var _6a1={};
var _6a2=self._options[name];
object.extend(_6a1,_6a2);
if(data){
Object.keys(data).forEach(function(key){
_6a1[key]=data[key];
});
}
var comp=new sub.type({template:_6a1.template||sub.template,section:_6a1.templateSection||sub.section},_6a1);
var node=comp._node;
if(sub.single){
self[name]=comp;
self[_6a0]=node;
}else{
self[name].push(comp);
self[_6a0].push(node);
}
self.__fillSub(name,comp);
self.__addRendered(name,node);
return comp;
};
this.setTemplate=function(self,name,_6a8,_6a9){
if(!self._options[name]){
self._options[name]={};
}
var _6aa=self._options[name];
_6aa.template=_6a8;
_6aa.templateSection=_6a9;
};
this.getNode=function(self){
return self._node;
};
this.define=staticmethod(_5e0.define);
this.define1=staticmethod(_5e0.define1);
});
this.addon=function(dict,_6ad){
if(!dict.addons){
dict.addons=[];
}
dict.addons.push(_6ad);
};
this.parseOptions=function(_6ae){
var _6af={};
Object.keys(_6ae).forEach(function(name){
_5e0.setOptionTo(_6af,name,_6ae[name]);
});
return _6af;
};
this.setOptionTo=function(_6b1,name,_6b3){
var _6b4=Array.isArray(name)?name:name.split(".");
for(var i=0,part;i<_6b4.length-1;i++){
part=_6b4[i];
if(_6b1[part]===undefined){
_6b1[part]={};
}
_6b1=_6b1[part];
}
_6b1[_6b4[_6b4.length-1]]=_6b3;
};
});
object.add("ui.decorators","events",function(_6b7,_6b8){
this.fireevent=_6b8.fireevent;
});
object.add("urlparse",function(_6b9){
function urlparse(url,_6bb){
var reg,_6bd;
if(typeof url!="string"){
return null;
}
url=url.trim();
if(url.indexOf("file")==0){
reg=/^(file)\:\/\/()([^\?]*?)?(?:;(.*?))?(?:\?(.*?))?(?:\#(.*))?$/i;
}else{
reg=/^(?:(\w+?)\:\/(?:\/)?([\w-_.]+(?::\w+)?))?([^\?]*?)?(?:;(.*?))?(?:\?(.*?))?(?:\#(.*))?$/i;
}
if(reg.test(url)){
_6bd=url.match(reg).slice(1);
if(!_6bd[0]&&_6bb){
_6bd[0]=_6bb;
}
for(var i=0;i<_6bd.length;i++){
if(!_6bd[i]){
_6bd[i]="";
}
}
return _6bd;
}else{
return ["","","","","",""];
}
}
function urlunparse(_6bf){
if(!_6bf){
return "";
}
var url="";
if(_6bf[0]){
url+=_6bf[0]+"://"+_6bf[1];
}
if(_6bf[1]&&_6bf[2]&&_6bf[2].indexOf("/")!=0){
url+="/";
}
url+=_6bf[2];
if(_6bf[3]){
url+=";"+_6bf[3];
}
if(_6bf[4]){
url+="?"+_6bf[4];
}
if(_6bf[5]){
url+="#"+_6bf[5];
}
return url;
}
function urljoin(base,url){
if(!base){
return url;
}
if(!url){
return base;
}
url=String(url);
base=String(base);
var _6c3=urlparse(base);
var _6c4=urlparse(url,_6c3[0]);
if(_6c4[0]!=_6c3[0]){
return url;
}
if(_6c4[1]){
return urlunparse(_6c4);
}
_6c4[1]=_6c3[1];
if(_6c4[2].charAt(0)=="/"){
return urlunparse(_6c4);
}
if(!_6c4[2]&&!_6c4[3]){
_6c4[2]=_6c3[2];
_6c4[3]=_6c3[3];
if(!_6c4[4]){
_6c4[4]=_6c3[4];
}
return urlunparse(_6c4);
}
var _6c5=_6c3[2].split("/").slice(0,-1).concat(_6c4[2].split("/"));
if(_6c5[_6c5.length-1]=="."){
_6c5[_6c5.length-1]="";
}
for(var i=0,l=_6c5.length;i<l;i++){
if(_6c5[i]=="."){
_6c5.splice(i,1);
i--;
}
}
var i;
while(true){
i=1;
n=_6c5.length-1;
while(i<n){
if(_6c5[i]==".."&&["",".."].indexOf(_6c5[i-1])==-1){
_6c5.splice(i-1,2);
break;
}
i++;
}
if(i>=n){
break;
}
}
if(_6c5.length==2&&_6c5[0]==""&&_6c5[1]==".."){
_6c5[_6c5.length-1]="";
}else{
if(_6c5.length>=2&&_6c5[_6c5.length-1]==".."){
_6c5.pop();
_6c5.pop();
_6c5.push("");
}
}
_6c4[2]=_6c5.join("/");
return urlunparse(_6c4);
}
_6b9.urlparse=urlparse;
_6b9.urlunparse=urlunparse;
_6b9.urljoin=urljoin;
});
object.add("validator",function(_6c8){
this.isUrl=function(text){
return /^(?:(\w+?)\:\/\/([\w-_.]+(?::\d+)?))(.*?)?(?:;(.*?))?(?:\?(.*?))?(?:\#(\w*))?$/i.test(text);
};
this.isEmail=function(text){
return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i.test(text);
};
this.isIP=function(text){
return /^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/.i.test(text);
};
});
object.add("ua.extra","sys",function(_6cc,sys){
var _6ce=sys.modules["ua"];
if(_6ce){
this.__detectUAExtra=detectUAExtra;
var o=detectUAExtra();
object.extend(_6ce.ua,o);
}
function detectUAExtra(ua){
if(!ua&&typeof ua!="string"){
ua=navigator.userAgent;
}
var m,_6d2,o={},_6d3=_6ce.numberify;
var _6d4=function(key){
try{
return window.external[key];
}
catch(e){
return null;
}
};
if(m=ua.match(/360SE/)||(_6d4("twGetRunPath")&&window.external.twGetRunPath().indexOf("360se.exe")!=-1)){
o[_6d2="se360"]=3;
}else{
if(m=ua.match(/Maxthon|MAXTHON/)||_6d4("max_version")){
_6d2="maxthon";
try{
o[_6d2]=_6d3(window.external["max_version"]);
}
catch(ex){
o[_6d2]=0;
}
}else{
if(m=ua.match(/TencentTraveler\s([\d\.]*)/)){
o[_6d2="tt"]=m[1]?_6d3(m[1]):0;
}else{
if(m=ua.match(/TheWorld/)){
o[_6d2="theworld"]=3;
}else{
if(m=ua.match(/SE\s([\d\.]*)/)){
o[_6d2="sogou"]=m[1]?_6d3(m[1]):0;
}else{
if(m=ua.match(/QQBrowser.([\d\.]*)/)){
o[_6d2="qqbrowser"]=m[1]?_6d3(m[1]):0;
}
}
}
}
}
}
_6d2&&(o.shell=_6d2);
return o;
}
});
object.add("ua.os","sys",function(_6d6,sys){
var _6d8=sys.modules["ua"];
var _6d9=function(s){
var c=0;
return parseFloat(s.replace(/_/g,".").replace(/\./g,function(){
return (c++===0)?".":"";
}));
};
if(_6d8){
this._detectOS=detectOS;
var o=detectOS(navigator.userAgent.toLowerCase());
object.extend(_6d6,o);
}
function is(obj,type){
type=type.replace(/\b[a-z]/g,function(_6df){
return _6df.toUpperCase();
});
return Object.prototype.toString.call(obj)=="[object "+type+"]";
}
function assertTrue(bool,msg){
if(!bool){
throw new Error(msg);
}
}
function assertNotNull(obj,msg){
if(obj==null){
throw new Error(msg);
}
}
function detectOS(ua){
ua=ua||navigator.userAgent;
ua=ua.toLowerCase();
var _6e5=[{core:"windowsnt",match:function(ua){
return /windows\snt/.test(ua)&&!/xblwp7/.test(ua);
},versionRule:/windows nt\s([\.\d]*)/},{core:"windowsnt",match:/windows\sxp/,version:5.1},{core:"windowsnt",match:/windows\s2000/,version:5},{core:"windowsnt",match:/winnt/,version:4},{core:"windows",match:/windows me/,version:"me"},{core:"windows",match:/windows 98|win98/,version:"98"},{core:"windows",match:/windows 95|win95/,version:"95"},{core:"windows",match:/win16/,version:"3.1"},{core:"windows/phone",match:/windows\sphone/,versionRule:/windows phone os ([\d\.]*)/},{core:"windows/phone",match:/xblwp7/,version:7},{core:"windows/mobile",match:/windows mobile|wce|windows ce|pocket pc|wince/,versionRule:/iemobile ([\.\d]*)/},{core:"windows",match:/win/,version:"unknown"},{core:"android",match:/\sandroid/,versionRule:/android ([^\s]*);/},{core:"linux/debian",match:/debian/,versionRule:/debian[\s\/-]([\.\d]*)/},{core:"linux/redhat",match:/red\shat/,versionRule:/red hat[\s\/-]([\.\d]*)/},{core:"linux/fedora",match:/fedora/,versionRule:/fedora[\s\/-]([\.\d]*)/},{core:"linux/ubuntu",match:/ubuntu/,versionRule:/ubuntu[\s\/-]([\.\d]*)/},{core:"linux/suse",match:/suse/,versionRule:/suse[\s\/-]([\.\d]*)/},{core:"linux/mint",match:/mint/,versionRule:/mint[\s\/-]([\.\d]*)/},{core:"linux/centos",match:/centos/,versionRule:/centos[\s\/-]([\.\d]*)/},{core:"linux/gentoo",match:/gentoo/,version:"unknown"},{core:"linux",match:/linux/,version:"unknown"},{core:"chromeos",match:/cros/,version:"unknown"},{core:"unix/sunos",match:/sunos/,version:"unknown"},{core:"unix/freebsd",match:/freebsd/,version:"unknown"},{core:"unix/openbsd",match:/openbsd/,version:"unknown"},{core:"unix/aix",match:/aix/,version:"unknown"},{core:"unix/hp_ux",match:/hp-ux/,version:"unknown"},{core:"unix",match:/x11/,version:"unknown"},{core:"macos",match:/mac_powerpc|ppc/,version:"ppc"},{core:"macos",match:/intel/,version:"intel"},{core:"macos",match:/mac_68000|68k/,version:"68k"},{core:"ios",match:function(ua){
return /applewebkit/.test(ua)&&/ mobile\//.test(ua)&&/like/.test(ua);
},versionRule:/os ([\_\.\d]*)/},{core:"macos",match:/mac/,version:"unknown"},{core:"os2",match:function(ua){
return /os\/2|ibm-webexplorer/.test(ua)||navigator.appVersion.indexOf("os/2")!=-1;
},version:"unknown"},{core:"symbian",match:/symbian|s60|symbos|symbianos|series40|series60|nokian/,versionRule:/symbian(?:os)?\/([\d\.]*);/},{core:"blackberry",match:/blackberry|rim\stablet\sos/,versionRule:/(?:version\/|blackberry[\d]{4}\/)([\d\.]*)/},{core:"webos",match:/webos/,versionRule:/webos\/([^\s]*);/},{core:"palmos",match:/palmos/,version:"unknown"}];
var o={};
for(var i=0,l=_6e5.length,_6ec,_6ed=false;i<l;i++){
_6ec=_6e5[i];
var _6ee=_6ec.match;
assertTrue(is(_6ee,"RegExp")||is(_6ee,"Function"),"match rule should be regexp or function");
if(is(_6ee,"RegExp")){
_6ed=_6ee.test(ua);
}else{
if(is(_6ee,"Function")){
_6ed=_6ee(ua);
assertNotNull(_6ed,"match function must return true/false");
}
}
if(!_6ed){
continue;
}
var _6ef=null,_6f0=_6ec.core.split("/"),_6f1=_6f0.length;
if(_6f1>1){
o.oscore=_6f0[0];
_6ef=o;
for(var m=0;m<_6f1-1;m++){
_6ef=_6ef[_6f0[m]]={};
}
}else{
o.oscore=_6ec.core;
}
var _6f3=_6ec.version||"unknown";
if(_6ec.versionRule){
assertTrue(is(_6ec.versionRule,"RegExp"),"version rule should be regexp");
m=ua.match(_6ec.versionRule);
if(m&&m[1]){
_6f3=_6d9(m[1]);
}
}
if(_6ef){
_6ef[_6f0[_6f1-1]]=_6f3;
}else{
o[o.oscore]=_6f3;
}
break;
}
if(o.ios){
m=ua.match(/ipad|ipod|iphone/);
if(m&&m[0]){
o[m[0]]=o.ios;
}
}
if(navigator&&navigator.cajaVersion){
o.caja=navigator.cajaVersion;
}
if(!_6ed){
o.oscore="unknown";
}
if(/wow64|x64|win64|ia64|x86_64|amd64|sparc64|ppc64/.test(ua)){
o.processor=64;
}else{
o.processor=32;
}
if(window.devicePixelRatio>=2){
o.resolution={width:screen.width*window.devicePixelRatio,height:screen.height*window.devicePixelRatio};
}else{
o.resolution={width:screen.width,height:screen.height};
}
var _6f4=typeof window.orientation!="undefined"?true:false;
if(_6f4){
if(window.innerWidth!=undefined){
o.orientation=window.innerWidth>window.innerHeight?"landscape":"profile";
}else{
o.orientation=window.screen.width>window.screen.height?"landscape":"profile";
}
}else{
o.orientation="unknown";
}
return o;
}
});
object.add("ua.flashdetect",function(_6f5){
this.getFlashVersion=function(){
var _ver=false;
if(navigator.plugins&&navigator.mimeTypes.length){
var x=navigator.plugins["Shockwave Flash"];
if(x&&x.description){
_ver=x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")[0];
}
}else{
if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){
var axo=1;
var _6f9=3;
while(axo){
try{
_6f9++;
axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_6f9);
_ver=_6f9;
}
catch(e){
axo=null;
}
}
}else{
try{
var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
}
catch(e){
try{
var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
_ver=6;
axo.AllowScriptAccess="always";
}
catch(e){
if(_ver==6){
return _ver;
}
}
try{
axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
}
catch(e){
}
}
if(axo!=null){
_ver=axo.GetVariable("$version").split(" ")[1].split(",")[0];
}
}
}
return _ver;
};
});
object.add("XN","dom, ua",function(_6fa,dom,ua){
this.DEBUG_MODE=false;
var _6fd="http://s.xnimg.cn/";
this.debug={log:function(){
},on:function(){
_6fa.DEBUG_MODE=true;
if(window.console&&console.log){
_6fa.debug.log=function(s){
console.log(s);
};
}
},off:function(){
_6fa.debug.log=function(){
};
}};
this.namespace=function(){
var a=arguments,o=null,i,j,d;
for(i=0;i<a.length;i++){
d=a[i].split(".");
o=_6fa;
for(j=(d[0]=="XN")?1:0;j<d.length;j++){
o[d[j]]=o[d[j]]||{};
o=o[d[j]];
}
}
return o;
};
this.log=function(s){
_6fa.debug.log(s);
};
this.isUndefined=function(_705){
return typeof _705=="undefined";
};
this.isString=function(_706){
return typeof _706=="string";
};
this.isElement=function(_707){
return _707&&_707.nodeType==1;
};
this.isFunction=function(_708){
return typeof _708=="function";
};
this.isObject=function(_709){
return typeof _709=="object";
};
this.isArray=function(_70a){
return Object.prototype.toString.call(_70a)==="[object Array]";
};
this.isNumber=function(_70b){
return typeof _70b=="number";
};
this.$extend=function(){
var _70c=arguments[0];
for(var i=1;i<arguments.length;i++){
if(typeof arguments[i]=="object"){
for(var key in arguments[i]){
_70c[key]=arguments[i][key];
}
}
}
return _70c;
};
this.namespace("config");
this.config.jumpOut=true;
(function(){
var _70f={};
var _710={};
_6fa.getFileVersionNum=function(file){
return _710[file];
};
function hasLoad(file){
return !!getFile(file);
}
function getFile(file){
return _70f[encodeURIComponent(file)];
}
function mark(file){
var obj={};
obj.file=file;
obj.isLoad=true;
obj.isLoaded=true;
_70f[encodeURIComponent(file)]=obj;
}
function enableCustomEvent(_716){
_716.addEvent=function(type,func){
if(!this._customEventListeners){
this._customEventListeners={};
}
var _719=this._customEventListeners;
if(_6fa.isUndefined(_719[type])){
_719[type]=[];
}
_719[type].push(func);
return this;
},_716.delEvent=function(type,func){
var _71c=this._customEventListeners[type];
if(_71c){
for(var i=_71c.length-1;i>=0;i--){
if(_71c[i]==func){
_71c[i]=null;
break;
}
}
}
return this;
},_716.fireEvent=function(type){
if(!this._customEventListeners||!this._customEventListeners[type]){
return;
}
var _71f=this._customEventListeners[type],ars=buildArray(arguments);
ars.shift();
for(var i=0,j=_71f.length;i<j;i++){
if(_71f[i]){
try{
_71f[i].apply(this,ars);
}
catch(ox){
if(_6fa.DEBUG_MODE){
throw ox;
}
}
}
}
};
}
function buildArray(o){
var rt=[];
for(var i=0,j=o.length;i<j;i++){
rt.push(o[i]);
}
return rt;
}
function addFile(file,_728){
var obj={};
obj.file=file;
obj.isLoaded=false;
enableCustomEvent(obj);
obj.addEvent("load",function(){
this.isLoaded=true;
});
if(!_728){
_70f[encodeURIComponent(file)]=obj;
}
var el=document.createElement("script");
el.type="text/javascript";
el.src=file;
el.async=true;
obj.element=el;
if(ua.ua.shell=="ieshell"){
el.onreadystatechange=function(){
if((this.readyState=="loaded"||this.readyState=="complete")&&!this.hasLoad){
this.hasLoad=true;
var _72b=getFile(file);
if(_72b!=null){
_72b.fireEvent("load");
}else{
try{
_6fa.loadFile(file);
}
catch(e){
}
}
}
};
}else{
el.onerror=el.onload=function(){
var tmp=getFile(file);
if(tmp){
tmp.fireEvent("load");
}
};
}
Sizzle("head")[0].insertBefore(el,null);
}
function loadFile(file,_72e,_72f,_730){
var isJS=false,_732=false;
if(_6fa.isObject(file)){
isJS=(file.type=="js");
_732=(file.type=="css");
file=file.file;
}
file=getFullName(file);
if(/\.js(\?|$)/.test(file)||isJS){
if(_72f||!hasLoad(file)){
addFile(file,_730);
}
if(!_72e){
return;
}
if(getFile(file).isLoaded){
_72e.call(getFile(file),true);
}else{
getFile(file).addEvent("load",function(){
_72e(true);
});
getFile(file).addEvent("error",function(){
_72e(false);
});
}
}else{
if(/\.css(\?|$)/.test(file)||_732){
if(!_72f&&hasLoad(file)){
if(_72e){
_72e.call(getFile(file));
}
return;
}
mark(file);
var el=document.createElement("link");
el.rel="stylesheet";
el.type="text/css";
el.href=file;
Sizzle("head")[0].insertBefore(el,null);
if(_72e){
_72e.call(getFile(file));
}
}
}
}
function getFullName(file){
runOnce(loadVersion);
if(!_710[file]){
return file;
}
return _710[file].file;
}
var _735=new RegExp("("+_6fd+")"+"(a?\\d+)/([^?]*)");
var _736=new RegExp("(.*)\\?ver=(d+)(..*)");
function getVersion(file){
var _738;
if(_738=_735.exec(file)){
_710[_738[1]+_738[3]]={file:file,version:_738[2]};
}else{
if(_738=_736.exec(file)){
_710[_738[1]]={file:file,version:_738[2]};
}
}
}
_6fa.getFileVersion=function(_739){
_739.forEach(function(v,i){
getVersion(v);
});
};
_6fa.loadFile=function(file,_73d,_73e){
dom.ready(function(){
loadFile(file,_73d,_73e);
});
};
_6fa.loadFileForever=function(file,_740,_741){
dom.ready(function(){
loadFile(file,_740,_741,true);
});
};
_6fa.unloadFile=function(node){
if(node.parentNode){
node.parentNode.removeChild(node);
_70f[encodeURIComponent(node.src)]=null;
}
};
_6fa.clearFiles=function(){
for(var i in _70f){
if(_70f.hasOwnProperty(i)){
if(_70f[i]&&_70f[i].element){
_6fa.unloadFile(_70f[i].element);
}
}
}
};
_6fa.loadFiles=function(_744,_745){
var f=_744.length;
function isAllLoad(){
f--;
if(f===0&&_745){
_745();
}
}
_744.forEach(function(v,i){
_6fa.loadFile(v,isAllLoad);
});
};
_6fa.getVersion=function(file){
getVersion(file);
};
function loadVersion(){
buildArray(document.getElementsByTagName("script")).forEach(function(v,i){
if(v.src){
mark(v.src);
getVersion(v.src);
}
if(v.getAttribute("vsrc")){
getVersion(v.getAttribute("vsrc"));
}
});
buildArray(document.getElementsByTagName("link")).forEach(function(v,i){
if(v.rel&&v.rel=="stylesheet"){
mark(v.href);
getVersion(v.href);
}
if(v.getAttribute("vhref")){
getVersion(v.getAttribute("vhref"));
}
});
_6fa.log("load file version:");
_6fa.log(_710);
}
_6fa.dynamicLoad=function(file){
file.funcs.forEach(function(func,i){
window[func]=function(){
var ars=arguments;
window[func]=null;
if(file.file){
file.files=[file.file];
}
_6fa.loadFiles(file.files,function(){
window[func].apply(null,ars);
if(file.callBack){
file.callBack.call(null);
}
});
};
});
};
_6fa.namespace("img");
_6fa.img.getVersion=function(file){
runOnce(loadVersion);
if(!_710[file]){
return "";
}
return _710[file].version;
};
_6fa.img.getFullName=function(file){
return getFullName(file);
};
function runOnce(func){
if(window.runOnceFunc==null){
window.runOnceFunc={};
}
if(window.runOnceFunc[func]){
return null;
}
window.runOnceFunc[func]=true;
return func();
}
})();
});
object.add("XN.array","XN",function(_755,XN){
this.toQueryString=function(a,key){
var rt=[],t;
for(var k in a){
t=a[k];
if(XN.isFunction(t)){
continue;
}
if(XN.isObject(t)){
rt.push(arguments.callee(t,k));
}else{
if(/^\d+$/.test(k)){
rt.push((key||k)+"="+encodeURIComponent(t));
}else{
rt.push(k+"="+encodeURIComponent(t));
}
}
}
return rt.join("&");
};
this.each=function(a,func){
if(!a){
return;
}
if(!XN.isUndefined(a.length)||!XN.isUndefined(a[0])){
for(var i=0,j=a.length;i<j;i++){
if(func.call(a,i,a[i])===false){
break;
}
}
}else{
for(var key in a){
if(!XN.isFunction(a[key])){
if(func.call(a,key,a[key])===false){
break;
}
}
}
}
};
this.include=function(a,_762){
var r=false;
_755.each(a,function(i,v){
if(v===_762){
r=true;
return false;
}
});
return r;
};
this.build=function(o){
var rt=[];
for(var i=0,j=o.length;i<j;i++){
rt.push(o[i]);
}
return rt;
};
});
object.add("XN.func",function(_76a){
if(window.runOnceFunc==null){
window.runOnceFunc={};
}
this.empty=function(){
};
this.runOnce=function(func){
if(window.runOnceFunc[func]){
return null;
}
window.runOnceFunc[func]=true;
return func();
};
});
object.add("XN.string","XN",function(_76c,XN){
this.nl2br=function(str){
return (str||"").replace(/([^>])\n/g,"$1<br />");
};
this.trim=function(str){
return (str||"").replace(/^\s+|\s+$/g,"");
};
this.ltrim=function(str){
return (str||"").replace(/^\s+/,"");
};
this.rtrim=function(str){
return (str||"").replace(/\s+$/,"");
};
this.strip=function(str){
return _76c.trim(str);
};
this.stripTags=function(str){
return str.replace(/<\/?[^>]+>/igm,"");
};
this.escapeHTML=function(str){
return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
};
this.unescapeHTML=function(str){
return str.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&quot;/g,"\"").replace(/&amp;/g,"&");
};
this.include=function(str,key){
return str.indexOf(key)>-1;
};
this.startsWith=function(str,key){
return str.indexOf(key)===0;
};
this.endsWith=function(str,key){
var d=str.length-key.length;
return d>=0&&str.lastIndexOf(key)===d;
};
this.isBlank=function(str){
return /^\s*$/.test(str);
};
this.isEmail=function(str){
return /^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/.test(str);
};
this.isMobile=function(str){
return /^((\(\d{2,3}\))|(\d{3}\-))?((1[345]\d{9})|(18\d{9}))$/.test(str);
};
this.isUrl=function(str){
return /^(http:|ftp:)\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/.test(str);
};
this.isIp=function(str){
return /^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/.test(str);
};
this.isNumber=function(str){
return /^\d+$/.test(str);
};
this.isZip=function(str){
return /^[1-9]\d{5}$/.test(str);
};
this.isEN=function(str){
return /^[A-Za-z]+$/.test(str);
};
this.isJSON=function(str){
if(!XN.isString(str)||str===""){
return false;
}
str=str.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,"");
return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
};
this.getQuery=function(key,url){
url=url||window.location.href+"";
if(url.indexOf("#")!==-1){
url=url.substring(0,url.indexOf("#"));
}
var rts=[],rt;
var _78a=new RegExp("(^|\\?|&)"+key+"=([^&]*)(?=&|#|$)","g");
while((rt=_78a.exec(url))!=null){
rts.push(decodeURIComponent(rt[2]));
}
if(rts.length==0){
return null;
}
if(rts.length==1){
return rts[0];
}
return rts;
};
this.setQuery=function(key,_78c,url){
url=url||window.location.href+"";
var hash="";
if(!/^http/.test(url)){
return url;
}
if(url.indexOf("#")!==-1){
hash=url.substring(url.indexOf("#"));
}
url=url.replace(hash,"");
url=url.replace(new RegExp("(^|\\?|&)"+key+"=[^&]*(?=&|#|$)","g"),"");
_78c=XN.isArray(_78c)?_78c:[_78c];
for(var i=_78c.length-1;i>=0;i--){
_78c[i]=encodeURIComponent(_78c[i]);
}
var p=key+"="+_78c.join("&"+key+"=");
return url+(/\?/.test(url)?"&":"?")+p+hash;
};
this.isNum=this.isNumber;
});
object.add("XN.json",function(_791){
this._PARSE_DATE=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/;
this.dateToString=function(d){
function _zeroPad(v){
return v<10?"0"+v:v;
}
return "\""+d.getUTCFullYear()+"-"+_zeroPad(d.getUTCMonth()+1)+"-"+_zeroPad(d.getUTCDate())+"T"+_zeroPad(d.getUTCHours())+":"+_zeroPad(d.getUTCMinutes())+":"+_zeroPad(d.getUTCSeconds())+"Z\"";
};
this.stringToDate=function(str){
if(_791._PARSE_DATE.test(str)){
var d=new Date();
d.setUTCFullYear(RegExp.$1,(RegExp.$2|0)-1,RegExp.$3);
d.setUTCHours(RegExp.$4,RegExp.$5,RegExp.$6);
return d;
}
};
this.parse=function(str){
return eval("("+str+")");
};
this.build=function(o,w,d){
return JSON.stringify(o,w,d);
};
});
object.add("XN.util","XN, XN.json, XN.array, XN.event, XN.string",function(_79a,XN){
if(!window.__timeouts==null){
window.__timeouts=[];
window.__intervals=[];
}
this.setTimeout=function(a,b){
var _79e=setTimeout(a,b);
window.__timeouts.push(_79e);
return _79e;
};
this.setInterval=function(a,b){
var _7a1=setInterval(a,b);
window.__intervals.push(_7a1);
return _7a1;
};
this.clearTimeout=function(_7a2){
for(var i=0;i<window.__timeouts.length;i++){
if(window.__timeouts[i]==_7a2){
window.__timeouts.slice(i,1);
}
}
clearTimeout(_7a2);
};
this.clearInterval=function(_7a4){
for(var i=0;i<window.__intervals.length;i++){
if(window.__intervals[i]==_7a4){
window.__intervals.slice(i,1);
}
}
clearInterval(_7a4);
};
this.clearAllTimer=function(){
for(var i=0;i<window.__timeouts.length;i++){
clearTimeout(window.__timeouts[i]);
}
for(var i=0;i<window.__intervals.length;i++){
clearInterval(window.__intervals[i]);
}
window.__timeouts=[];
window.__intervals=[];
};
this.cache=function(_7a7){
XN.$extend(this,_7a7);
this._cacheData=[];
};
this.cache.prototype={cacheLength:null,_cacheData:null,isExist:function(key){
return this.get(key);
},add:function(key,_7aa){
if(!XN.isUndefined(this.isExist(key))){
return;
}
if(this.cacheLength&&this.cacheLength==this._cacheData.length){
this._cacheData.shift();
}
this._cacheData.push({"key":key,"value":_7aa});
},get:function(key){
for(var i=this._cacheData.length-1;i>=0;i--){
if(this._cacheData[i].key==key){
return this._cacheData[i].value;
}
}
},clear:function(){
this._cacheData=[];
}};
(function(){
var _7ad={};
_79a.hotKey={add:function(key,func,obj){
key=String(key).toLowerCase();
var ctrl=false;
var alt=false;
var _7b3=false;
var _7b4=null;
if(/^\d+$/.test(key)){
_7b4=parseInt(key);
}else{
ctrl=/ctrl|ctr|c/.test(key);
alt=/alt|a/.test(key);
_7b3=/shift|s/.test(key);
if(/\d+/.test(key)){
_7b4=parseInt(/\d+/.exec(key)[0]);
}else{
_7b4=false;
}
}
_7ad[key]=_7ad[key]||{};
_7ad[key][func]=function(e){
e=e||window.event;
code=e.keyCode;
if(ctrl&&!e.ctrlKey){
return;
}
if(alt&&!e.altKey){
return;
}
if(_7b3&&!e.shiftKey){
return;
}
if(_7b4&&code!==_7b4){
return;
}
func.call(obj||null);
XN.event.stop(e);
};
XN.event.addEvent(document,"keydown",_7ad[key][func]);
},del:function(key,func){
key=String(key).toLowerCase();
XN.event.delEvent(document,"keydown",_7ad[key][func]);
delete _7ad[key][func];
}};
})();
(function(){
var id=0;
_79a.createObjID=function(){
id++;
return id;
};
})();
});
object.add("XN.datasource","XN, XN.json, XN.net, XN.string, XN.array",function(_7b9,XN){
this.DS_JSON=function(p){
XN.$extend(this,p);
};
this.DS_JSON.prototype={DS_TYPE:"JSON",url:null,queryParam:"query",attachParam:"",rootKey:null,method:"get",_request:null,query:function(v,_7bd){
var This=this;
try{
this._request.abort();
}
catch(e){
}
function parseDS_JSON(r){
r=r.responseText;
var pp;
try{
var rt=XN.json.parse(r);
if(This.rootKey&&rt[This.rootKey]){
pp=rt[This.rootKey];
}else{
pp=rt;
}
}
catch(e){
pp=[];
}
_7bd(pp);
}
this._request=new XN.net.xmlhttp({url:this.url,data:this.queryParam+"="+encodeURIComponent(v)+"&"+this.attachParam,method:this.method,onSuccess:parseDS_JSON});
}};
this.DS_friends=function(p){
var ds=new _7b9.DS_JSON(p);
ds.queryParam="p";
ds.rootKey="candidate";
ds.net="";
ds.group="";
ds.page=XN.isUndefined(p.page)?false:p.page;
ds.param=XN.json.build(p.param||{});
var _7c4=XN.isUndefined(p.limit)?24:p.limit;
ds.query=function(name,_7c6){
XN.log("start query");
name=name.replace(/[^a-zA-Z\u0391-\uFFE5]/g,"");
if(XN.string.isBlank(name)&&this.group==""&&this.net==""){
_7c6([]);
return;
}
var p=["{\"init\":false,","\"qkey\":\""+this.qkey+"\",","\"uid\":true,","\"uname\":true,","\"uhead\":true,","\"limit\":"+_7c4+",","\"param\":"+this.param+",","\"query\":\""+name+"\",","\"group\":\""+this.group+"\",","\"net\":\""+this.net+"\",","\"page\":\""+this.page+"\"","}"].join("");
_7b9.DS_JSON.prototype.query.call(this,p,_7c6);
};
return ds;
};
this.DS_Array=function(p){
XN.$extend(this,p);
this.init();
};
this.DS_Array.prototype={DS_TYPE:"array",data:null,searchKey:null,init:function(){
var key=this.searchKey,_7ca=this._index=[];
XN.array.each(this.data,function(i,v){
_7ca.push(v[key]);
});
},query:function(v,_7ce){
_7ce(this._search(v));
},_search:function(v){
var keys=this._index,data=this.data,rt=[],reg=new RegExp("^"+v,"i");
XN.array.each(keys,function(i,v){
if(reg.test(v)){
rt.push(data[i]);
}
});
return rt;
}};
this.DS_XHR=function(p){
XN.$extend(this,p);
};
this.DS_XHR.prototype={url:null,queryParam:"query",_request:null,query:function(v,_7d8){
var This=this;
try{
this._request.abort();
}
catch(e){
}
function parseDS_XML(r){
r=r.responseXML;
var rt=[];
function getResult(r){
var tmp={};
XN.array.each(r.childNodes,function(i,v){
tmp[v.tagName.toLowerCase()]=v.firstChild.nodeValue;
});
return tmp;
}
try{
var rs=r.getElementsByTagName("Result");
XN.array.each(rs,function(i,v){
rt.push(getResult(v));
});
}
catch(e){
rt=[];
}
_7d8(rt);
}
this._request=new XN.net.xmlhttp({url:this.url,data:this.queryParam+"="+encodeURIComponent(v),onSuccess:parseDS_XML});
}};
});
object.add("XN.browser","sys, XN",function(_7e3,sys,XN){
this.IE=!!(window.attachEvent&&!window.opera);
this.IE9=navigator.userAgent.indexOf("MSIE 9.0")>-1;
this.IE8=!this.IE9&&navigator.userAgent.indexOf("MSIE 8.0")>-1;
this.IE7=!this.IE9&&!this.IE8&&navigator.userAgent.indexOf("MSIE 7.0")>-1;
this.IE6=!this.IE9&&!this.IE8&&!this.IE7&&navigator.userAgent.indexOf("MSIE 6.0")>-1;
this.Opera=!!window.opera,this.WebKit=navigator.userAgent.indexOf("AppleWebKit/")>-1;
this.Gecko=navigator.userAgent.indexOf("Gecko")>-1&&navigator.userAgent.indexOf("KHTML")==-1;
this.copy=function(o){
function onfail(){
if(XN.isElement(o)){
o.select();
}
}
var str;
if(XN.isElement(o)){
str=o.value;
}else{
str=o;
}
var _do=sys.modules["XN.Do"];
if(window.clipboardData&&clipboardData.setData){
if(clipboardData.setData("text",str)){
return true;
}
}else{
if(_do){
_do.alert({message:"\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u811a\u672c\u590d\u5236,\u8bf7\u5c1d\u8bd5\u624b\u52a8\u590d\u5236",callBack:function(){
onfail();
}});
}else{
alert("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u811a\u672c\u590d\u5236,\u8bf7\u5c1d\u8bd5\u624b\u52a8\u590d\u5236");
}
return false;
}
if(_do){
_do.alert({message:"\u60a8\u7684\u6d4f\u89c8\u5668\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u811a\u672c\u8bbf\u95ee\u526a\u5207\u677f",callBack:function(){
onfail();
}});
}else{
alert("\u60a8\u7684\u6d4f\u89c8\u5668\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u811a\u672c\u8bbf\u95ee\u526a\u5207\u677f");
}
return false;
};
});
object.add("XN.cookie","XN",function(_7e9,XN){
this.get=function(name){
var _7ec=name+"=";
var ca=document.cookie.split(";");
for(var i=0;i<ca.length;i++){
var c=ca[i];
while(c.charAt(0)==" "){
c=c.substring(1,c.length);
}
if(c.indexOf(_7ec)==0){
return decodeURIComponent(c.substring(_7ec.length,c.length));
}
}
return null;
};
this.set=function(name,_7f1,days,path,_7f4,_7f5){
var _7f6;
if(XN.isNumber(days)){
var date=new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
_7f6=date.toGMTString();
}else{
if(XN.isString(days)){
_7f6=days;
}else{
_7f6=false;
}
}
document.cookie=name+"="+encodeURIComponent(_7f1)+(_7f6?";expires="+_7f6:"")+(path?";path="+path:"")+(_7f4?";domain="+_7f4:"")+(_7f5?";secure":"");
};
this.del=function(name,path,_7fa,_7fb){
_7e9.set(name,"",-1,path,_7fa,_7fb);
};
});
object.add("XN.net","XN, XN.form, XN.util, XN.event, XN.func, XN.browser, XN.element",function(_7fc,XN){
if(!window.__ajaxProxies){
window.__ajaxProxies={};
}
this.sendForm=function(_7fe){
XN.log("send form");
_7fe.data=XN.form.serialize(_7fe.form);
return new _7fc.xmlhttp(_7fe);
};
this.sendStats=function(url){
var n="log_"+(new Date()).getTime();
var c=window[n]=new Image();
c.onload=(c.onerror=function(){
window[n]=null;
});
c.src=url;
c=null;
};
this.xmlhttp=function(_802){
var This=this;
if(!_7fc.cache){
_7fc.cache=new XN.util.cache();
}
if(arguments.length>1){
this.url=arguments[0]||null;
this.data=arguments[1]||"";
this.onSuccess=arguments[2];
extendObject(this,arguments[3]);
init(window);
return this;
}
extendObject(this,_802);
var _804;
if(this.useCache&&(_804=_7fc.cache.get(this.url+encodeURIComponent(this.data)))){
this.transport={};
this.transport.responseText=_804;
setTimeout(function(){
This._onComplete();
This._onSuccess();
},0);
return this;
}
function init(w){
This.transport=This.getTransport(w);
return This.url&&This.send(This.method);
}
var tmp=XN.element.$element("a");
tmp.href=this.url;
var _807=tmp.hostname;
var _808=tmp.protocol;
if(/^http/.test(this.url)&&location.hostname!=_807){
if(window.__ajaxProxies[_807]){
(function(){
if(window.__ajaxProxies[_807].loaded){
init(window.__ajaxProxies[_807].contentWindow);
}else{
setTimeout(arguments.callee,100);
}
})();
}else{
var _809=XN.element.$element("iframe").hide();
document.body.insertBefore(_809,document.body.firstChild);
var _80a=_808+"//"+_807+"/ajaxproxy.htm";
if(_807.indexOf("notice.")!=-1||_807.indexOf("music.")!=-1){
_80a=_80a+"?v=1";
}
_809.src=_80a;
window.__ajaxProxies[_807]=_809;
window.__ajaxProxies[_807].loaded=false;
XN.event.addEvent(_809,"load",function(){
if(_809.contentWindow.location.href!==_809.src){
_809.contentWindow.location.href=_809.src;
}else{
try{
init(_809.contentWindow);
window.__ajaxProxies[_807]=_809;
window.__ajaxProxies[_807].loaded=true;
}
catch(e){
}
}
});
}
}else{
init(window);
}
return This;
};
this.xmlhttp.prototype={url:null,data:"",onStart:new Function(),onSuccess:null,onFailure:null,onError:null,fillTo:null,method:"post",asynchronous:true,transport:null,headers:null,iAmXmlhttp:true,useCache:false,requestToken:true,binary:false,formData:false,abort:function(){
this.transport.abort();
},send:function(_80b){
var _url;
if(_80b=="get"&&this.data!==""){
_url=this.url+(/\?/.test(this.url)?"&":"?")+this.data;
}else{
_url=this.url;
}
this.transport.onreadystatechange=this.onStateChange.bind(this);
this.transport.open(_80b,_url,this.asynchronous);
if(!this.formData){
this.transport.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
}
if(this.headers!==null){
for(var i in this.headers){
this.transport.setRequestHeader(i,this.headers[i]);
}
}
var _80e=null;
if(_80b=="post"){
_80e=this.data;
if(this.requestToken&&XN.get_check){
_80e+=(_80e?"&":"")+"requestToken="+XN.get_check;
}
if(this.requestToken&&XN.get_check_x){
_80e+=(_80e?"&":"")+"_rtk="+XN.get_check_x;
}
}
try{
if(window.event&&document.body.id=="profile"&&_80b=="get"&&/(none|null)\b/.test(this.url)&&XN.user.id%10==0){
var temp=document.createElement("div");
var obj=event.srcElement;
temp.appendChild(obj);
if(obj){
var _80e={from:"profile",nodeHTML:temp.innerHTML};
nullOrNoneLog(_80e);
}
}
}
catch(e){
}
function nullOrNoneLog(data){
var _812="";
for(var i in data){
_812=_812+"&"+i+"="+encodeURIComponent(data[i]);
}
var _814=new Image().src="http://123.125.44.44/r/?t="+new Date().getTime()+_812;
}
if(this.binary){
this.transport.sendAsBinary(_80e);
}else{
this.transport.send(_80e);
}
},_onSuccess:function(obj){
var _816=this.transport;
if(this.fillTo!==null){
try{
this.fillTo.stopLoading();
}
catch(e){
}
this.fillTo.innerHTML=_816.responseText;
}
try{
if(this.onSuccess){
this.onSuccess.call(null,_816);
}
}
catch(e){
if(XN.DEBUG_MODE){
throw e;
}
}
},_onComplete:function(obj){
var _818=this.transport;
try{
if(this.onComplete){
this.onComplete.call(null,_818);
}
}
catch(e){
if(XN.DEBUG_MODE){
throw e;
}
}
},onStateChange:function(){
var _819=this.transport;
if(_819.readyState==1&&!this.hasRunStart){
this.onStart();
this.hasRunStart=true;
}else{
if(_819.readyState==4){
if(_819.status==undefined||_819.status==0||(_819.status>=200&&_819.status<300)){
if(this.useCache){
_7fc.cache.add(this.url+encodeURIComponent(this.data),this.transport.responseText);
}
this._onSuccess();
}else{
(this.onError||this.onFailure||XN.func.empty).call(null,_819);
}
this._onComplete();
}
}
}};
this.xmlhttp.prototype.getTransport=function(w){
if(w!=window){
return w.getTransport();
}else{
if(XN.browser.IE){
try{
return new ActiveXObject("Msxml2.XMLHTTP");
}
catch(e){
return new ActiveXObject("Microsoft.XMLHTTP");
}
}else{
return new XMLHttpRequest();
}
}
};
this.ajax=this.xmlhttp;
XN.$extend(this.xmlhttp.prototype,{get:function(url,data,_81d,_81e){
this.url=url;
this.data=data;
this.onSuccess=_81d;
XN.$extend(this,_81e);
this.send("get");
},post:function(url,data,_821,_822){
this.url=url;
this.data=data;
this.onSuccess=_821;
XN.$extend(this,_822);
this.send("post");
}});
if(typeof Ajax=="undefined"){
Ajax={};
Ajax.Request=function(url,o){
var p=o.parameters;
o["url"]=url;
o["data"]=p;
delete o.parameters;
return new _7fc.xmlhttp(o);
};
}
});
object.add("XN.env",function(_826){
this.shortSiteName="\u4eba\u4eba";
this.siteName="\u4eba\u4eba\u7f51";
this.domain="renren.com";
this.domain_reg=this.domain.replace(/\./g,"\\.");
this.staticRoot="http://s.xnimg.cn/";
this.CDNstaticRoot="http://a.xnimg.cn/";
this.swfRoot="http://static.xiaonei.com/";
this.wwwRoot="http://"+this.domain+"/";
});
object.add("XN.event","XN, XN.browser, XN.array, XN.element",function(_827,XN){
var _829=XN.browser;
var _82a=[];
this.ignoreEvent=false;
this.logEvents=false;
this.isCapsLockOn=function(e){
var c=e.keyCode||e.which;
var s=e.shiftKey;
if(((c>=65&&c<=90)&&!s)||((c>=97&&c<=122)&&s)){
return true;
}
return false;
};
this.element=function(e){
var n=e.target||e.srcElement;
return _827.resolveTextNode(n);
};
this.relatedTarget=function(e){
var t=e.relatedTarget;
if(!t){
if(e.type=="mouseout"||e.type=="mouseleave"){
t=e.toElement;
}else{
if(e.type=="mouseover"){
t=e.fromElement;
}
}
}
return _827.resolveTextNode(t);
};
this.resolveTextNode=function(n){
try{
if(n&&3==n.nodeType){
return n.parentNode;
}
}
catch(e){
}
return n;
};
this.pointerX=function(_833){
return _833.pageX||(_833.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft));
};
this.pointerY=function(_834){
return _834.pageY||(_834.clientY+(document.documentElement.scrollTop||document.body.scrollTop));
};
this.isStrictMode=document.compatMode!="BackCompat";
this.pageHeight=function(){
return this.isStrictMode?Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight):Math.max(document.body.scrollHeight,document.body.clientHeight);
};
this.pageWidth=function(){
return this.isStrictMode?Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth):Math.max(document.body.scrollWidth,document.body.clientWidth);
};
this.winWidth=function(){
return this.isStrictMode?document.documentElement.clientWidth:document.body.clientWidth;
};
this.winHeight=function(){
return this.isStrictMode?document.documentElement.clientHeight:document.body.clientHeight;
};
this.scrollTop=function(){
if(XN.browser.WebKit){
return window.pageYOffset;
}
return this.isStrictMode?document.documentElement.scrollTop:document.body.scrollTop;
};
this.scrollLeft=function(){
if(XN.browser.WebKit){
return window.pageXOffset;
}
return this.isStrictMode?document.documentElement.scrollLeft:document.body.scrollLeft;
};
this.stop=null;
this.clearEvents=function(){
for(var _835,i=0;_835=_82a[i];i++){
_827.delEvent.apply(_827,_835);
}
_82a=[];
};
this.addEvent=function(el,name,func,cap){
if(_827.ignoreEvent){
return;
}
var els=[];
el=XN.element.$(el);
if(XN.isArray(el)){
els=el;
}else{
els.push(el);
}
if(els.length==0){
return el;
}
XN.array.each(els,function(i,v){
if(_827.logEvents){
_82a.push([v,name,func,cap]);
}
_827._addEvent(v,name,func,cap);
});
return el;
};
this.delEvent=function(el,name,func,cap){
var els=[];
el=XN.element.$(el);
if(XN.isArray(el)){
els=el;
}else{
els.push(el);
}
if(els.length==0){
return el;
}
XN.array.each(els,function(i,v){
_827._delEvent(v,name,func,cap);
});
return el;
};
this._addEvent=null;
this._delEvent=null;
this.enableCustomEvent=function(obj){
XN.$extend(obj,{addEvent:function(type,func){
if(!this._customEventListeners){
this._customEventListeners={};
}
var _848=this._customEventListeners;
if(XN.isUndefined(_848[type])){
_848[type]=[];
}
_848[type].push(func);
return this;
},delEvent:function(type,func){
var _84b=this._customEventListeners[type];
if(_84b){
for(var i=_84b.length-1;i>=0;i--){
if(_84b[i]==func){
_84b[i]=null;
break;
}
}
}
return this;
},fireEvent:function(type){
if(!this._customEventListeners||!this._customEventListeners[type]){
return;
}
var _84e=this._customEventListeners[type],ars=XN.array.build(arguments);
ars.shift();
for(var i=0,j=_84e.length;i<j;i++){
if(_84e[i]){
try{
_84e[i].apply(this,ars);
}
catch(ox){
if(XN.DEBUG_MODE){
throw ox;
}
}
}
}
}});
return obj;
};
if(_829.IE){
this.stop=function(_852){
_852.returnValue=false;
_852.cancelBubble=true;
};
}else{
this.stop=function(_853){
_853.preventDefault();
_853.stopPropagation();
};
}
var _854=function(_855,_856){
var p=_855.relatedTarget;
while(p&&p!=_856){
try{
p=p.parentNode;
}
catch(error){
p=_856;
}
}
return p!==_856;
};
if(window.attachEvent&&!_829.Opera){
function wrapEvent(_858){
_858.stopPropagation=function(){
this.cancelBubble=true;
};
_858.preventDefault=function(){
this.returnValue=false;
};
return _858;
}
this._addEvent=function(_859,name,func){
_859=XN.element.$(_859);
if(name=="input"){
name="propertychange";
}
if(name=="keypress"){
name="keydown";
}
if(!_859._eventListeners[name]){
_859._eventListeners[name]=[];
}
var _85c=function(){
var e=wrapEvent(window.event);
func.call(_859,e);
};
_85c.innerFunc=func;
_859._eventListeners[name].push(_85c);
_859.attachEvent("on"+name,_85c);
return _859;
};
this._delEvent=function(_85e,name,func){
_85e=XN.element.$(_85e);
if(name=="input"){
name="propertychange";
}
if(name=="keypress"){
name="keydown";
}
if(!_85e._eventListeners[name]){
return;
}
for(var i=0,_862;i<_85e._eventListeners[name].length;i++){
_862=_85e._eventListeners[name][i];
if(_862.innerFunc===func){
break;
}
}
_85e.detachEvent("on"+name,_862);
return _85e;
};
}else{
if(window.addEventListener){
this._addEvent=function(_863,name,func,_866){
_863=XN.element.$(_863);
if(name=="mouseleave"){
_863.onmouseleave=function(e){
e=e||window.event;
if(_854(e,_863)&&func){
func.call(_863,e);
}
};
_863.addEventListener("mouseout",_863.onmouseleave,_866);
return _863;
}
if(name=="keypress"&&_829.WebKit){
name="keydown";
}
_863.addEventListener(name,func,_866);
return _863;
};
this._delEvent=function(_868,name,func,_86b){
_868=XN.element.$(_868);
if(name=="mouseleave"){
_868.removeEventListener("mouseout",_868.onmouseleave,_86b);
return _868;
}
if(name=="keypress"&&_829.WebKit){
name="keydown";
}
_868.removeEventListener(name,func,_86b);
return _868;
};
}
}
});
object.define("XN.dom","dom, ua, XN, XN.event, XN.array, XN.browser, XN.element",function(_86c,_86d){
_86c("XN.event");
_86c("XN.array");
_86c("XN.browser");
_86c("XN.element");
var dom=_86c("dom");
var ua=_86c("ua");
var XN=_86c("XN");
var _871=XN.event;
var _872=XN.array;
var _873=XN.browser;
var _874=null;
function createShadow(_875,_876){
_875=_875||0.3;
_876=_876||2000;
var el=XN.element.$element("div");
_874=el;
el.style.position="absolute";
el.style.top=0;
el.style.left=0;
el.style.background="#000";
el.style.zIndex=_876;
el.style.opacity=_875;
el.style.filter="alpha(opacity="+(_875*100)+")";
el.innerHTML=["<iframe width=\"100%\" height=\"100%\" frameBorder=\"0\" style=\"position:absolute;top:0;left:0;z-index:1;\"></iframe>","<div style=\"position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000000;z-index:2;height:expression(this.parentNode.offsetHeight);\"></div>"].join("");
function resize(){
el.hide();
el.style.height=XN.event.pageHeight()+"px";
el.style.width=XN.event.pageWidth()+"px";
el.show();
}
resize();
XN.event.addEvent(window,"resize",function(e){
if(_874&&_874.style.display!="none"){
try{
resize();
}
catch(e){
}
}
});
document.body.insertBefore(el,document.body.firstChild);
}
this.disable=function(_879,_87a){
if(!_874){
createShadow(_879,_87a);
}
};
this.enable=function(){
if(_874){
_874.remove();
_874=null;
}
};
this.insertAfter=function(_87b,_87c){
_87b=XN.element.$(_87b);
_87c=XN.element.$(_87c);
var _87d=_87c.parentNode;
if(_87d.lastChild==_87c){
_87d.appendChild(_87b);
}else{
_87d.insertBefore(_87b,_87c.nextSibling);
}
};
this.getElementsByClassName=function(_87e,_87f,_880){
var c=(XN.element.$(_87f)||document).getElementsByTagName(_880||"*")||document.all;
var _882=[];
var _exp=new RegExp("(^|\\s)"+_87e+"(\\s|$)");
_872.each(c,function(i,v){
if(_exp.test(v.className)){
_882.push(v);
}
});
return _882;
};
this.findFirstClass=function(_886,_887){
_886=XN.element.$(_886);
var els=_86d.getElementsByClassName(_887,_886);
return XN.element.$(els[0])||null;
};
this.ready=function(_889,_88a){
if(XN.isUndefined(_88a)){
_88a=false;
}
var func=_88a?function(){
setTimeout(_889,0);
}:_889;
dom.ready(func);
};
this.preloadImg=function(src){
src=XN.isArray(src)?src:[src];
_872.each(src,function(i,v){
new Image().src=v;
});
};
this.readyDo=this.ready;
});
object.add("XN.element","sys, XN, XN.browser, XN.env",function(_88f,sys,XN){
var _892=XN.browser;
var _893=["clear","hover","scrollTo","visible","toggleClass","toggleText","hasClassName","addClass","delClass","show","hide","remove","setStyle","getStyle","addEvent","delEvent","_eventListeners","matchesSelector","getData","delegate","addChild","delChild","setContent","setHTML","getPosition","realLeft","realTop","appendHTML","html","parent","startLoading","stopLoading","eval_inner_JS","extend","setOpacity","findFirstClass"];
var _894=sys.modules["XN.effect"];
function getDom(str){
var tmp=document.createElement("div");
tmp.style.display="none";
document.body.appendChild(tmp);
tmp.innerHTML=str;
var dom=document.createElement("div");
while(tmp.firstChild){
dom.appendChild(tmp.firstChild);
}
tmp.parentNode.removeChild(tmp);
return dom;
}
var t=document.createElement("div");
t.innerHTML="<TEST_TAG></TEST_TAG>";
var _899=t.firstChild===null;
this.clear=function(_89a){
_89a=_88f.$(_89a);
_89a.innerHTML="";
return _89a;
};
this.hover=function(_89b,_89c,_89d){
_89b=_88f.$(_89b);
_89d=_89d?_88f.$(_89d):_89b;
var _89e=sys.modules["XN.event"];
if(_89e){
_89e.addEvent(_89b,"mouseover",function(){
_89d.addClass(_89c);
},false);
_89e.addEvent(_89b,"mouseleave",function(){
_89d.delClass(_89c);
},false);
}else{
throw new Error("\u8bf7\u5148\u5bfc\u5165XN.event\u6a21\u5757\uff0c\u518d\u4f7f\u7528XN.event.addEvent");
}
return _89b;
};
this.scrollTo=function(_89f,_8a0){
_89f=_88f.$(_89f);
if(!_894){
_8a0="normal";
}
switch(_8a0){
case "slow":
XN.effect.scrollTo(_89f);
break;
default:
window.scrollTo(0,_89f.realTop());
break;
}
return _89f;
};
this.visible=function(_8a1){
_8a1=_88f.$(_8a1);
return _8a1.style.display!="none"&&_8a1.style.visibility!="hidden";
};
this.toggleClass=function(_8a2,_8a3,_8a4){
if(XN.isUndefined(_8a4)){
if(_88f.hasClassName(_8a2,_8a3)){
_88f.delClass(_8a2,_8a3);
}else{
_88f.addClass(_8a2,_8a3);
}
}else{
if(_88f.hasClassName(_8a2,_8a3)){
_88f.delClass(_8a2,_8a3);
_88f.addClass(_8a2,_8a4);
}else{
_88f.addClass(_8a2,_8a3);
_88f.delClass(_8a2,_8a4);
}
}
return _88f.$(_8a2);
};
this.toggleText=function(_8a5,_8a6,_8a7){
if(_8a5.innerHTML==_8a6){
_8a5.innerHTML=_8a7;
}else{
_8a5.innerHTML=_8a6;
}
};
this.hasClassName=function(_8a8,_8a9){
return new RegExp("(^|\\s+)"+_8a9+"(\\s+|$)").test(_88f.$(_8a8).className);
};
this.addClass=function(_8aa,_8ab){
_8aa=_88f.$(_8aa);
if(_88f.hasClassName(_8aa,_8ab)){
return _8aa;
}
_8aa.className+=" "+_8ab;
return _8aa;
};
this.delClass=function(_8ac,_8ad){
_8ac=_88f.$(_8ac);
_8ac.className=_8ac.className.replace(new RegExp("(^|\\s+)"+_8ad+"(\\s+|$)","g")," ");
return _8ac;
};
this.show=function(_8ae,_8af){
_8ae=_88f.$(_8ae);
if(_8ae.style.display!="none"){
return;
}
if(!_894||!_8af){
_8af="normal";
}
switch(_8af){
case "normal":
_8ae.style.display="";
break;
case "fade":
XN.effect.fadeIn(_8ae,function(e){
e.style.display="";
});
break;
case "slide":
XN.effect.slideOpen(_8ae);
break;
case "delay":
setTimeout(function(){
_8ae.style.display="";
},2000);
break;
}
return _8ae;
};
this.hide=function(_8b1,_8b2){
_8b1=_88f.$(_8b1);
if(_8b1.style.display=="none"){
return;
}
if(!_894||!_8b2){
_8b2="normal";
}
switch(_8b2){
case "normal":
_8b1.style.display="none";
break;
case "fade":
XN.effect.fadeOut(_8b1,function(e){
e.style.display="none";
});
break;
case "slide":
XN.effect.slideClose(_8b1);
break;
case "delay":
setTimeout(function(){
_8b1.style.display="none";
},2000);
break;
}
return _8b1;
};
this.remove=function(_8b4){
var _8b4=_88f.$(_8b4);
_8b4.parentNode.removeChild(_8b4);
return _8b4;
};
this.setStyle=function(_8b5,_8b6){
var _8b5=_88f.$(_8b5);
_8b5.style.cssText+=";"+_8b6;
return _8b5;
};
this.getStyle=function(_8b7,_8b8){
_8b7=_88f.$(_8b7);
_8b8=_8b8=="float"?"cssFloat":_8b8;
var _8b9=_8b7.style[_8b8];
if(!_8b9){
var css=document.defaultView.getComputedStyle(_8b7,null);
_8b9=css?css[_8b8]:null;
}
if(_8b8=="opacity"){
return _8b9?parseFloat(_8b9):1;
}
return _8b9=="auto"?null:_8b9;
};
this.addEvent=function(){
var _8bb=sys.modules["XN.event"];
if(_8bb){
_8bb.addEvent.apply(null,arguments);
}else{
throw new Error("\u8bf7\u5148\u5bfc\u5165XN.event\u6a21\u5757\uff0c\u518d\u4f7f\u7528XN.event.addEvent");
}
return arguments[0];
};
this.delEvent=function(){
var _8bc=sys.modules["XN.event"];
if(_8bc){
_8bc.delEvent.apply(null,arguments);
}else{
throw new Error("\u8bf7\u5148\u5bfc\u5165XN.event\u6a21\u5757\uff0c\u518d\u4f7f\u7528XN.event.delEvent");
}
return arguments[0];
};
this._eventListeners={};
this.matchesSelector=function(_8bd,_8be){
return Sizzle.matches(_8be,[_8bd]).length>0;
};
this.getData=function(_8bf,name){
return _8bf.getAttribute("data-"+name);
};
this.delegate=function(_8c1,_8c2,type,_8c4){
_88f.$(_8c1).addEvent(type,function(e){
var ele=_88f.$(e.target||e.srcElement);
do{
if(ele&&ele.matchesSelector(_8c2)){
_8c4.call(ele,e);
}
}while(ele=_88f.$(ele.parentNode));
});
};
this.addChild=function(_8c7,_8c8){
_8c7=_88f.$(_8c7);
if(XN.isString(_8c8)||XN.isNumber(_8c8)){
var _8c9=String(_8c8).charAt(0)=="#"?Sizzle(_8c8)[0]:_8c8;
if(XN.isString(_8c8)||XN.isNumber(_8c8)){
_8c7.innerHTML+=_8c9;
}else{
_8c7.appendChild(_8c9);
}
}else{
if(XN.isElement(_8c8)){
_8c7.appendChild(_8c8);
}else{
if(_8c8.iAmUIelement){
_8c7.appendChild(_88f.$(_8c8.frame));
}else{
if(_8c8.iAmXmlhttp){
_8c8.fillTo=_8c7;
_8c7.startLoading();
}
}
}
}
return _8c7;
};
this.delChild=function(_8ca,_8cb){
_8cb=_88f.$(_8cb);
_8cb.remove();
return _88f.$(_8ca);
};
this.setContent=function(_8cc,c){
_8cc=_88f.$(_8cc);
_8cc.innerHTML="";
_8cc.addChild(c);
return _8cc;
};
this.setHTML=function(_8ce,str){
if(_899){
_8ce.innerHTML="";
var _8d0=getDom(str);
while(_8d0.firstChild){
_8ce.appendChild(_8d0.firstChild);
}
}else{
_8ce.innerHTML=str;
}
};
this.getPosition=function(_8d1,_8d2){
_8d2=_88f.$(_8d2)||document.body;
_8d1=_88f.$(_8d1);
var rl=0;
var rt=0;
var p=_8d1;
try{
while(p&&p!=_8d2){
rl+=p.offsetLeft;
rt+=p.offsetTop;
p=p.offsetParent;
}
}
catch(e){
}
return {"left":rl,"top":rt};
};
this.realLeft=function(_8d6,p){
return _88f.getPosition(_8d6,p||null).left;
};
this.realTop=function(_8d8,p){
return _88f.getPosition(_8d8,p||null).top;
};
this.appendHTML=function(_8da,str,_8dc){
_8da=_88f.$(_8da);
var f=document.createDocumentFragment();
var t=_88f.$element("div");
t.innerHTML=str;
while(t.firstChild){
f.appendChild(t.firstChild);
}
var tmp=XN.array.build(f.childNodes);
_8da.appendChild(f);
if(_8dc){
return tmp;
}
return _8da;
};
this.html=function(_8e0,str){
_8e0.innerHTML=str;
};
this.parent=function(_8e2,_8e3){
while(_8e2){
_8e2=_88f.$(_8e2.parentNode);
if(_8e2.matchesSelector(_8e3)){
return _8e2;
}
}
};
this.startLoading=function(_8e4,msg){
_8e4=_88f.$(_8e4);
_8e4.innerHTML="<center><img src=\""+XN.env.staticRoot+"img/indicator.gif\" />"+(msg||"\u52a0\u8f7d\u4e2d...")+"</center>";
return _8e4;
};
this.stopLoading=function(_8e6){
_8e6=_88f.$(_8e6);
return _8e6;
};
this.eval_inner_JS=function(el){
var js=_88f.$(el).getElementsByTagName("script");
XN.array.each(js,function(i,s){
if(s.src){
XN.loadFile(s.src);
}else{
var _8eb="__inner_js_out_put = [];\n";
_8eb+=s.innerHTML.replace(/document\.write/g,"__inner_js_out_put.push");
eval(_8eb);
if(__inner_js_out_put.length!==0){
var tmp=document.createDocumentFragment();
_88f.$(tmp).appendHTML(__inner_js_out_put.join(""));
s.parentNode.insertBefore(tmp,s);
}
}
});
};
this.extend=function(_8ed){
var _8ee=_88f.extend.cache;
for(var i=0,m,len=_893.length;i<len;i++){
m=_893[i];
if(_88f[m]!=null&&!(m in _8ed)){
_8ed[m]=_8ee.findOrStore(_88f[m]);
}
}
return _8ed;
};
this.extend.cache={findOrStore:function(_8f2){
return this[_8f2]=this[_8f2]||function(){
return _8f2.apply(null,[this].concat(XN.array.build(arguments)));
};
}};
if(_892.IE){
this.getStyle=function(_8f3,_8f4){
_8f3=_88f.$(_8f3);
_8f4=(_8f4=="float"||_8f4=="cssFloat")?"styleFloat":_8f4;
var _8f5=_8f3.style[_8f4];
if(!_8f5&&_8f3.currentStyle){
_8f5=_8f3.currentStyle[_8f4];
}
if(_8f4=="opacity"){
if(_8f5=(_8f3.getStyle("filter")||"").match(/alpha\(opacity=(.*)\)/)){
if(_8f5[1]){
return parseFloat(_8f5[1])/100;
}
}
return 1;
}
if(_8f5=="auto"){
if((_8f4=="width"||_8f4=="height")&&(_8f3.getStyle("display")!="none")){
return _8f3["offset"+(_8f4=="width"?"Width":"Height")]+"px";
}
return null;
}
return _8f5;
};
}
if(document.addEventListener){
this.setOpacity=function(_8f6,_8f7){
_8f6=_88f.$(_8f6);
_8f6.style.opacity=_8f7;
return _8f6;
};
}else{
this.setOpacity=function(_8f8,_8f9){
_8f8=_88f.$(_8f8);
_8f8.style.zoom=1;
_8f8.style.filter="Alpha(opacity="+Math.ceil(_8f9*100)+")";
return _8f8;
};
}
this.$element=function(tag){
return _88f.$(document.createElement(tag));
};
this.$=function(id){
var _8fc;
if(id==null){
_8fc=null;
}else{
if(XN.isString(id)||XN.isNumber(id)){
_8fc=Sizzle("#"+id)[0];
}else{
_8fc=id;
}
}
if(_8fc){
_88f.extend(_8fc);
}
return _8fc||null;
};
});
object.add("XN.template","XN.env",function(_8fd,XN){
this.smediaPlayer=function(o){
return ["<object classid=\"CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95\" width=\""+(o.width||"352")+"\" height=\""+(o.height||"70")+"\" >\n","<param name=\"autostart\" value=\""+(o.autostart||"1")+"\" >\n","<param name=\"showstatusbar\" value=\""+(o.showstatusbar||"1")+"\">\n","<param name=\"filename\" value=\""+o.filename+"\">\n","<embed type=\"application/x-oleobject\" codebase=\"http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701\" ","flename=\"mp\"","autostart=\""+(o.autostart||"1")+"\" showstatusbar=\""+(o.showstatusbar||"1")+"\" ","src=\""+o.filename+"\" width=\""+(o.width||"352")+"\" height=\""+(o.height||"70")+"\"></embed>"].join("");
};
this.flashPlayer=function(o){
return "<embed src=\""+XN.env.staticRoot+"/swf/player.swf?url="+o.filename+"&Rwid="+(o.width||"450")+"&Autoplay="+(o.autostart||"1")+"\" wmode=\""+(o.wmode||"transparent")+"\" loop=\"false\" menu=\"false\" quality=\"high\" scale=\"noscale\" salign=\"lt\" bgcolor=\"#ffffff\" width=\""+(o.width||"450")+"\" height=\""+(o.height||"30")+"\" align=\"middle\" allowScriptAccess=\""+(o.allowScriptAccess||"sameDomain")+"\" allowFullScreen=\"false\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />";
};
this.flash=function(o){
return "&nbsp;<embed src=\""+o.filename+"\" type=\"application/x-shockwave-flash\" "+"width=\""+(o.width||"320")+"\" height=\""+(o.height||"240")+"\" allowFullScreen=\"false\" wmode=\""+(o.wmode||"transparent")+"\" allowNetworking=\""+(o.allowNetworking||"all")+"\" allowScriptAccess=\""+(o.allowScriptAccess||"sameDomain")+"\"></embed>";
};
});
object.add("XN.form","sys, XN, XN.event, XN.json, XN.array, XN.element, XN.string, XN.env",function(_902,sys,XN){
this.fillWithJSON=function(form,json){
form=XN.element.$(form);
_902.fillWithArray(form,XN.json.parse(json));
};
this.fillWithArray=function(form,a){
form=XN.element.$(form);
for(var p in a){
_902.Element.setValue(p,a[p],form);
}
};
this.setValue=function(_90a,_90b){
return _902.Element.setValue(_90a,_90b);
};
this.getValue=function(_90c){
return _902.Element.getValue(_90c);
};
this.serialize=function(form,type){
return _902.serializeElements(_902.getElements(form),type||"string");
};
this.serializeElements=function(_90f,type,_911){
type=type||"array";
if(XN.isUndefined(_911)){
_911=false;
}
var data=[],_key,_914;
XN.array.each(_90f,function(i,v){
if(!v.disabled&&v.name){
_key=v.name;
_914=_911?encodeURIComponent(_902.Element.getValue(v)):_902.Element.getValue(v);
if(_914!==null){
if(_key in data){
if(!XN.isArray(data[_key])){
data[_key]=[data[_key]];
}
data[_key].push(_914);
}else{
data[_key]=_914;
}
}
}
});
if(type=="array"){
return data;
}else{
if(type=="string"){
return XN.array.toQueryString(data);
}else{
if(type=="hash"){
var tmp={};
for(var p in data){
if(!XN.isFunction(data[p])){
tmp[p]=data[p];
}
}
return tmp;
}
}
}
};
this.getElements=function(form){
form=XN.element.$(form);
var _91a=[];
var all=form.getElementsByTagName("*");
XN.array.each(all,function(i,v){
if(!XN.isUndefined(_902.Element.Serializers[v.tagName.toLowerCase()])){
_91a.push(v);
}
});
return _91a;
};
this.Element={getValue:function(_91e){
_91e=XN.element.$(_91e);
var _91f=_91e.tagName.toLowerCase();
return _902.Element.Serializers[_91f](_91e);
},setValue:function(_920,_921,form){
if(form){
_920=form[_920];
if((XN.isElement(_920)&&_920.tagName.toLowerCase()=="select")){
_902.Element.Serializers["select"](_920,_921);
}else{
if(XN.isElement(_920)){
_902.Element.Serializers[_920.tagName.toLowerCase()](_920,_921);
}else{
if(_920[0]){
var _923=_920[0].tagName.toLowerCase();
for(var i=0,j=_920.length;i<j;i++){
_902.Element.Serializers[_923](_920[i],(_921[i]||_921||""));
}
}
}
}
return _920;
}else{
_920=XN.element.$(_920);
var _923=_920.tagName.toLowerCase();
_902.Element.Serializers[_923](_920,_921);
return _920;
}
}};
this.Element.Serializers={input:function(_926,_927){
switch(_926.type.toLowerCase()){
case "checkbox":
case "radio":
return _902.Element.Serializers.inputSelector(_926,_927);
default:
return _902.Element.Serializers.textarea(_926,_927);
}
},inputSelector:function(_928,_929){
if(XN.isUndefined(_929)){
return _928.checked?_928.value:null;
}else{
_928.checked=!!_929;
}
},textarea:function(_92a,_92b){
if(XN.isUndefined(_92b)){
return _92a.value;
}else{
_92a.value=_92b;
}
},select:function(_92c,_92d){
if(XN.isUndefined(_92d)){
return this[_92c.type=="select-one"?"selectOne":"selectMany"](_92c);
}else{
var opt,_92f,_930=!XN.isArray(_92d);
for(var i=0,_932=_92c.length;i<_932;i++){
opt=_92c.options[i];
_92f=this.optionValue(opt);
if(_930){
if(_92f==_92d){
opt.selected=true;
return;
}
}else{
opt.selected=XN.array.include(_92d,_92f);
}
}
}
},selectOne:function(_933){
var _934=_933.selectedIndex;
return _934>=0?this.optionValue(_933.options[_934]):null;
},selectMany:function(_935){
var _936=[],_937=_935.length;
if(!_937){
return null;
}
for(var i=0;i<_937;i++){
var opt=_935.options[i];
if(opt.selected){
_936.push(this.optionValue(opt));
}
}
return _936;
},optionValue:function(opt){
return opt.value||opt.text;
}};
$F=function(id,type){
var el=XN.element.$(id);
if(el.tagName.toLowerCase()=="form"){
return _902.serialize(el,type);
}else{
return _902.getValue(el);
}
};
this._helper=function(el){
el=XN.element.$(el);
try{
if(el._helper){
return el._helper;
}
}
catch(e){
console.log(arguments.callee.caller);
}
el._helper=this;
this.element=el;
};
this._helper.prototype={maxSize:9999,limit:function(max,cut){
var This=this;
this.maxLength=max;
if(XN.isUndefined(cut)){
cut=true;
}
this._limit_cut=cut;
if(this._limit){
return this;
}
this._limit=true;
var el=this.element;
XN.event.addEvent(el,"focus",check);
XN.event.addEvent(el,"keyup",check);
function check(){
This.limitCheck();
}
return this;
},limitCheck:function(){
var This=this;
var el=this.element;
setTimeout(function(){
var v=el.value;
if(v.length>This.maxLength){
if(This._limit_cut){
el.value=v.substr(0,This.maxLength);
}
This.fireEvent("overmaxLength");
}else{
This.fireEvent("normalLength");
}
This.fireEvent("checkover");
},0);
},count:function(show,_947){
if(this._count){
return this;
}
this._count=true;
var This=this,show=XN.element.$(show);
if(XN.isUndefined(_947)){
_947=true;
}
if(!this.maxLength){
_947=false;
}
var el=this.element;
this.addEvent("overmaxLength",function(){
show.addClass("full");
});
this.addEvent("normalLength",function(){
show.delClass("full");
});
this.addEvent("checkover",update);
function update(){
show.innerHTML=el.value.length+(_947?"/"+This.maxLength:"");
}
return this;
},countSize:function(show,max,_94c){
return this.limit(max).count(show,_94c);
},getRealValue:function(){
var el=this.element;
if(el.value==this._defaultValue||el.value==el.getAttribute("placeholder")){
return "";
}
return el.value;
},reloadDefaultValue:function(){
this.element.value=this._defaultValue;
this.element.style.color="#888";
},defaultValue:function(v){
var This=this;
var el=this.element;
v=v||el.value;
if(!XN.isUndefined(this._defaultValue)&&el.value==this._defaultValue){
el.value=v;
}
this._defaultValue=v;
if(this._default){
return this;
}
this._default=true;
if(document.activeElement!==el){
el.value=v;
}
el.style.color="#888";
XN.event.addEvent(el,"focus",function(){
if(el.value==This._defaultValue){
el.value="";
el.style.color="#333";
}
});
XN.event.addEvent(el,"blur",function(){
if(el.value==""){
el.value=This._defaultValue;
el.style.color="#888";
}
});
return this;
},focus:function(_951){
var el=this.element;
if(XN.isUndefined(_951)){
_951=el.value.length;
}
try{
if(el.setSelectionRange){
el.focus();
el.setSelectionRange(el.value.length,_951);
}else{
if(el.createTextRange){
var _953=el.createTextRange();
_953.moveStart("character",_951);
_953.collapse(true);
_953.select();
el.focus();
}else{
el.focus();
}
}
}
catch(e){
}
return this;
},onEnter:function(_954){
var el=this.element;
var _956=el.tagName.toLowerCase()=="textarea";
XN.event.addEvent(el,"keydown",function(e){
e=e||window.event;
if(e.keyCode==13){
if(_956&&!e.ctrlKey){
return false;
}
XN.event.stop(e);
_954(el);
return false;
}
},false);
return this;
},onEsc:function(_958){
var el=this.element;
XN.event.addEvent(el,"keydown",function(e){
e=e||window.event;
if(e.keyCode==27){
XN.event.stop(e);
_958(el);
return false;
}
},false);
return this;
},autoResize:function(min,max){
var This=this,el=this.element,type;
this.minSize=min||this.minSize;
this.maxSize=max||this.maxSize;
if(el.tagName.toLowerCase()=="textarea"){
this.resizeType="height";
}else{
this.resizeType="width";
}
if(!_902.inputShadow){
var d=XN.element.$element("div");
d.setStyle("position:absolute;left:-99999px;top:-99999px");
document.body.appendChild(d);
_902.inputShadow=d;
}
this.shadow=_902.inputShadow;
setTimeout(function(){
if(min){
return;
}
This.minSize=type=="width"?el.offsetWidth:el.offsetHeight;
},10);
el.style.overflow="hidden";
XN.event.addEvent(el,"focus",function(){
This.timer=setInterval(This._resize.bind(This),200);
});
XN.event.addEvent(el,"blur",function(){
clearInterval(This.timer);
This.timer=null;
});
return this;
},_resize:function(){
var el=this.element,sh=this.shadow,oh,type=this.resizeType;
sh.style.fontSize=el.getStyle("fontSize");
var fs=parseInt(el.getStyle("fontSize"),0);
sh.style.fontFamily=el.getStyle("fontFamily");
(type=="width")?sh.style.height=el.offsetHeight:sh.style.width=el.offsetWidth;
sh.innerHTML=XN.string.escapeHTML(el.value).replace(/\r\n/mg,"<br>").replace(/\r/mg,"<br>").replace(/\n/mg,"<br>");
(type=="width")?oh=sh.offsetWidth:oh=sh.offsetHeight+fs+3;
if(oh>this.minSize&&oh<this.maxSize){
el.style[type]=oh+"px";
}else{
if(oh<this.minSize){
el.style[type]=this.minSize+"px";
}else{
if(oh>this.maxSize){
el.style[type]=this.maxSize+"px";
}
}
}
},cursorPosition:function(){
var _966=this.element;
var _967=0,end=0;
try{
if(typeof (_966.selectionStart)=="number"){
_967=_966.selectionStart;
end=_966.selectionEnd;
}else{
if(document.selection){
var _969=document.selection.createRange();
if(_969.parentElement()==_966){
var _96a=document.body.createTextRange();
_96a.moveToElementText(_966);
for(_967=0;_96a.compareEndPoints("StartToStart",_969)<0;_967++){
_96a.moveStart("character",1);
}
for(var i=0;i<=_967;i++){
if(_966.value.charAt(i)=="\n"){
_967++;
}
}
var _96a=document.body.createTextRange();
_96a.moveToElementText(_966);
for(end=0;_96a.compareEndPoints("StartToEnd",_969)<0;end++){
_96a.moveStart("character",1);
}
for(var i=0;i<=end;i++){
if(_966.value.charAt(i)=="\n"){
end++;
}
}
}
}
}
}
catch(e){
}
return {"start":_967,"end":end,"item":[_967,end]};
}};
this._helper.prototype.setDefaultValue=this._helper.prototype.defaultValue;
XN.event.enableCustomEvent(this._helper.prototype);
this.help=function(id){
return new _902._helper(id);
};
this.inputHelper=this.textAreaHelper=this.help;
$CursorPosition=function(el){
return _902.help(el).cursorPosition();
};
this.userInfoAutoComplete=function(id,type){
var _ui=sys.modules["XN.ui"];
if(_ui){
return _ui.userInfoAutoComplete(id,type);
}else{
throw new Error("\u8bf7\u5728use\u4e2d\u5bfc\u5165XN.ui\u6a21\u5757\uff0c\u624d\u53ef\u4f7f\u7528XN.form\u4e0b\u7684\u6b64\u65b9\u6cd5");
}
};
});
object.add("XN.effect","XN.func, XN.element, XN.event",function(_971,XN){
this.fadeIn=function(_973,_974){
if(_973.fadetimer){
return;
}
_974=_974||XN.func.empty;
var op=0;
_973.setOpacity(0);
_973.style.display="";
_973.fadetimer=setInterval(function(){
XN.element.setOpacity(_973,(op+=0.2));
if(op>=1){
clearInterval(_973.fadetimer);
_973.fadetimer=null;
_974(_973);
}
},60);
};
this.fadeOut=function(_976,_977){
if(_976.fadetimer){
return;
}
_977=_977||XN.func.empty;
var op=1;
_976.setOpacity(1);
_976.fadetimer=setInterval(function(){
XN.element.setOpacity(_976,(op-=0.2));
if(op<=0){
clearInterval(_976.fadetimer);
_976.fadetimer=null;
_977(_976);
_976.setOpacity(1);
}
},60);
};
this.gradient=function(_979,r,g,b,_97d){
if(_979.gradientTimer){
return;
}
_97d=_97d||XN.func.empty;
_979.style.backgroundColor="#fff";
_979.style.backgroundColor="rgb("+r+","+g+","+b+")";
_979.gradientTimer=setInterval(function(){
b+=10;
_979.style.backgroundColor="rgb("+r+","+g+","+(b>255?255:b)+")";
if(b>255){
clearInterval(_979.gradientTimer);
_979.gradientTimer=null;
_97d(_979);
}
},60);
};
this.slideOpen=function(_97e){
if(_97e.slidetimer){
return;
}
if(!_97e.slideHeight){
var _97f=_97e.getStyle("position");
_97e.setStyle("position:absolute;left:-99999px;top:-99999px;");
_97e.show();
_97e.slideHeight=_97e.offsetHeight;
_97e.hide();
_97e.setStyle("position:"+_97f+";left:auto;top:auto;");
}
var eh=_97e.slideHeight,h=0;
var step=parseInt(eh/10);
_97e.style.height="0px";
_97e.style.display="";
_97e.style.overflow="hidden";
_97e.slidetimer=setInterval(function(){
_97e.style.height=(h+=step)+"px";
if(h>=eh){
clearInterval(_97e.slidetimer);
_97e.slidetimer=null;
_97e.style.height=eh;
_97e.style.overflow=_97e.slideOverflow;
}
},50);
};
this.slideClose=function(_983){
if(_983.slidetimer){
return;
}
var eh=_983.offsetHeight,h=eh;
_983.slideHeight=eh;
_983.slideOverflow=_983.getStyle("overflow");
_983.style.overflow="hidden";
var step=parseInt(eh/10);
_983.slidetimer=setInterval(function(){
_983.style.height=(h-=step)+"px";
if(h<=0){
clearInterval(_983.slidetimer);
_983.slidetimer=null;
_983.style.display="none";
_983.style.height=eh;
_983.style.overflow=_983.slideOverflow;
}
},50);
};
this.scrollTo=function(_987,_988,_989){
if(_987.scrolltimer){
return;
}
_988=_988||10;
_989=_989||XN.func.empty;
var d=_987.realTop();
var i=XN.event.winHeight();
var h=document.body.scrollHeight;
var a=XN.event.scrollTop();
var _98e=null;
if(d>a){
if(d+_987.offsetHeight<i+a){
return;
}
_987.scrolltimer=setInterval(function(){
a+=Math.ceil((d-a)/_988)||1;
window.scrollTo(0,a);
if(a==d){
clearInterval(_987.scrolltimer);
_987.scrolltimer=null;
}
},10);
}else{
_987.scrolltimer=setInterval(function(){
a+=Math.ceil((d-a)/_988)||-1;
window.scrollTo(0,a);
if(a==d){
clearInterval(_987.scrolltimer);
_987.scrolltimer=null;
}
},10);
}
};
(function(_98f){
var _990={linear:function(t,b,c,d){
return c*t/d+b;
},easeIn:function(t,b,c,d){
return c*(t/=d)*t+b;
},easeOut:function(t,b,c,d){
return -c*(t/=d)*(t-2)+b;
},easeBoth:function(t,b,c,d){
if((t/=d/2)<1){
return c/2*t*t+b;
}
return -c/2*((--t)*(t-2)-1)+b;
},easeInStrong:function(t,b,c,d){
return c*(t/=d)*t*t*t+b;
},easeOutStrong:function(t,b,c,d){
return -c*((t=t/d-1)*t*t*t-1)+b;
},easeBothStrong:function(t,b,c,d){
if((t/=d/2)<1){
return c/2*t*t*t*t+b;
}
return -c/2*((t-=2)*t*t*t-2)+b;
},elasticIn:function(t,b,c,d,a,p){
if(t===0){
return b;
}
if((t/=d)==1){
return b+c;
}
if(!p){
p=d*0.3;
}
if(!a||a<Math.abs(c)){
a=c;
var s=p/4;
}else{
var s=p/(2*Math.PI)*Math.asin(c/a);
}
return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
},elasticOut:function(t,b,c,d,a,p){
if(t===0){
return b;
}
if((t/=d)==1){
return b+c;
}
if(!p){
p=d*0.3;
}
if(!a||a<Math.abs(c)){
a=c;
var s=p/4;
}else{
var s=p/(2*Math.PI)*Math.asin(c/a);
}
return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;
},elasticBoth:function(t,b,c,d,a,p){
if(t===0){
return b;
}
if((t/=d/2)==2){
return b+c;
}
if(!p){
p=d*(0.3*1.5);
}
if(!a||a<Math.abs(c)){
a=c;
var s=p/4;
}else{
var s=p/(2*Math.PI)*Math.asin(c/a);
}
if(t<1){
return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
}
return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b;
},backIn:function(t,b,c,d,s){
if(typeof s=="undefined"){
s=1.70158;
}
return c*(t/=d)*t*((s+1)*t-s)+b;
},backOut:function(t,b,c,d,s){
if(typeof s=="undefined"){
s=1.70158;
}
return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
},backBoth:function(t,b,c,d,s){
if(typeof s=="undefined"){
s=1.70158;
}
if((t/=d/2)<1){
return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;
}
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
},bounceIn:function(t,b,c,d){
return c-_990["bounceOut"](d-t,0,c,d)+b;
},bounceOut:function(t,b,c,d){
if((t/=d)<(1/2.75)){
return c*(7.5625*t*t)+b;
}else{
if(t<(2/2.75)){
return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b;
}else{
if(t<(2.5/2.75)){
return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b;
}
}
}
return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b;
},bounceBoth:function(t,b,c,d){
if(t<d/2){
return _990["bounceIn"](t*2,0,c,d)*0.5+b;
}
return _990["bounceOut"](t*2-d,0,c,d)*0.5+c*0.5+b;
}};
var _9dd=function(){
_9de(this.onTweening,this);
if(this.current>=this.frames){
this.stop();
_9de(this.onComplete,this);
this.tweening=false;
return;
}
this.current++;
};
var _9de=function(func,_9e0){
var args=Array.prototype.slice.call(arguments);
args=args.slice(2);
if(typeof func=="function"){
try{
return func.apply(_9e0||this,args);
}
catch(e){
_9e0.errors=_9e0.errors||[];
_9e0.errors.push(e);
}
}
};
_98f.Motion=function(_9e2,_9e3){
this.duration=_9e3||1000;
this.tween=_9e2||"linear";
};
_98f.Motion.getTweens=function(){
return _990;
};
_98f.Motion.prototype={init:function(){
_9de(this.onInit,this);
this.fps=this.fps||35;
this.frames=Math.ceil((this.duration/1000)*this.fps);
if(this.frames<1){
this.frames=1;
}
var f=("function"==typeof this.tween)?this.tween:_990[this.tween]||_990["linear"];
this.equation=function(from,to){
return f((this.current/this.frames)*this.duration,from,to-from,this.duration);
};
this.current=this.tweening=1;
},start:function(){
this.init();
_9de(this.onStart,this);
var _9e7=this,d=this.duration/this.frames;
this.timer=setInterval(function(){
_9dd.call(_9e7);
},d);
},stop:function(){
if(this.timer){
clearInterval(this.timer);
}
this.tweening=false;
}};
})(_971);
});
object.add("XN.ui","XN, XN.array, XN.element, XN.event, XN.browser, XN.util, XN.dom, XN.func, XN.string, XN.env, XN.net, XN.json, XN.form, XN.datasource",function(_9e9,XN){
(function(){
_9e9.element={frame:null,iAmUIelement:true};
XN.array.each(["addClass","delClass","show","hide","remove"],function(i,v){
_9e9.element[v]=function(){
XN.element[v].apply(null,[this.frame].concat(XN.array.build(arguments)));
};
});
_9e9.container={container:null};
XN.array.each(["addChild","delChild","setContent"],function(i,v){
_9e9.container[v]=function(){
XN.element[v].apply(null,[this.container].concat(XN.array.build(arguments)));
};
});
XN.$extend(_9e9.container,_9e9.element);
})();
this.Element=this.element;
this.Content=this.container;
(function(ns){
var UI=_9e9;
var _9f1=XN.event.addEvent;
var _9f2=true;
function log(s){
if(_9f2){
XN.log(XN.isString(s)?"xn.ui.button:"+s:s);
}
}
ns.button=function(_9f4){
XN.$extend(this,_9f4);
this.init();
};
ns.button.prototype=XN.$extend({},UI.Element);
ns.button.prototype.text=null;
ns.button.prototype.className="";
ns.button.prototype.disableClassName="gray";
ns.button.prototype.init=function(){
var This=this;
var el;
if(this.getConfig("el")){
el=XN.element.$(this.getConfig("el"));
}else{
el=XN.element.$element("input");
}
this.frame=el;
el.type="button";
this.addClass("input-submit");
this.addClass(this.getConfig("className"));
this.setText(this.getConfig("text"));
_9f1(el,"click",function(){
if(This.onclick){
This.onclick();
}
},false);
};
ns.button.prototype.getConfig=function(key){
if(key=="el"){
return this.id;
}
return this[key];
};
ns.button.prototype.getEl=function(){
return this.frame;
};
ns.button.prototype.setText=function(text){
this.text=text;
this.getEl().value=text;
};
ns.button.prototype.disable=function(){
var el=this.getEl();
el.blur();
el.disabled=true;
el.addClass(this.getConfig("disableClassName"));
};
ns.button.prototype.enable=function(){
var el=this.getEl();
el.disabled=false;
el.delClass(this.getConfig("disableClassName"));
};
ns.button.prototype.focus=function(){
this.getEl().focus();
};
ns.button.prototype.blur=function(){
this.getEl().blur();
};
})(this);
(function(){
var rl="realLeft",rt="realTop",ow="offsetWidth",oh="offsetHeight";
_9e9.fixPositionMethods={"1-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+"px";
f.style.top=y+el[rt]()-p[rt]()+"px";
},"1-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+"px";
},"1-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()-f[oh]+"px";
},"1-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+"px";
f.style.top=y+el[rt]()-p[rt]()-f[oh]+"px";
},"2-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+"px";
},"2-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+"px";
},"2-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()-f[oh]+"px";
},"2-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()-f[oh]+"px";
},"3-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]+"px";
},"3-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]-f[ow]+"px";
f.style.top=y+el[rt]()+el[oh]+"px";
},"3-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]-f[oh]+"px";
},"3-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]-f[oh]+"px";
},"4-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]+"px";
},"4-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]+"px";
},"4-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]-f[oh]+"px";
},"4-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]-f[oh]+"px";
}};
})();
this.fixPositionElement=function(_a4f){
var This=this;
this.config={tagName:"div",useIframeInIE6:true};
XN.$extend(this.config,_a4f);
var f,x,y;
if(this.getConfig("id")){
this.frame=f=XN.element.$(this.getConfig("id"));
x=f.realLeft();
y=f.realTop();
}else{
if(this.getConfig("tagName")){
this.frame=this.container=f=XN.element.$element(this.getConfig("tagName"));
}else{
return;
}
}
this.container=XN.element.$element("div");
this.frame.appendChild(this.container);
XN.array.each(["alignWith","alignType","offsetX","offsetY","alignParent"],function(i,v){
This[v]=This.getConfig(v)||This[v];
});
XN.element.setStyle(f,"position:absolute;z-index:10001;left:-9999px;top:-9999px");
if(!XN.element.$(this.alignParent)){
this.alignParent=XN.element.$(document.body);
}
XN.element.$(this.alignParent).appendChild(this.frame);
if((XN.browser.IE6&&this.getConfig("useIframeInIE6"))||this.getConfig("addIframe")){
var _a56;
this._iframe=_a56=XN.element.$element("iframe");
_a56.frameBorder=0;
_a56.scrolling="no";
_a56.setStyle("position:absolute;border:0px;left:0px;top:0px;z-index:-1;");
if(XN.browser.Gecko){
_a56.setAttribute("style","position:absolute;border:0px;left:0px;top:0px;z-index:-1;");
}
if(XN.browser.IE){
_a56.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";
}
this.frame.appendChild(_a56);
}
if(XN.element.visible(f)){
this.show();
}
f.style.display="block";
};
this.fixPositionElement.prototype=XN.$extend({},this.container);
XN.$extend(this.fixPositionElement.prototype,{alignWith:null,alignType:"4-1",offsetX:0,offsetY:0,alignParent:"dropmenuHolder",left:null,top:null,_isShow:false,getConfig:function(key){
return this.config[key];
},setOffsetX:function(x){
this.offsetX=x;
this.refresh();
return this;
},setOffsetY:function(y){
this.offsetY=y;
this.refresh();
return this;
},setAlignType:function(t){
this.alignType=t;
this.refresh();
return this;
},setAlignParent:function(p){
this.alignParent=p;
XN.element.$(this.alignParent).appendChild(this.frame);
this.refresh();
return this;
},refresh:function(){
if(this.visible()){
this.show();
}else{
this.hide();
}
return this;
},visible:function(){
return this._isShow;
},show:function(){
this._isShow=true;
this.frame.show();
if(this.alignWith){
this._moveToElement(this.alignWith);
}else{
var x=this.left===null?parseInt(((XN.element.$(this.alignParent).offsetWidth-this.frame.offsetWidth)/2),10):this.left;
var y=this.top===null?XN.event.scrollTop()+200:this.top;
this._moveToPosition(x,y);
}
if(this._iframe){
try{
this._iframe.style.height=this.frame.offsetHeight-2+"px";
this._iframe.style.width=this.frame.offsetWidth+"px";
}
catch(e){
}
}
return this;
},hide:function(){
this._isShow=false;
var f=this.frame;
f.style.left="-9999px";
f.style.top="-9999px";
return this;
},moveTo:function(x,y){
if(!x&&!y){
return;
}
if(XN.isNumber(x)){
this.left=x;
this.alignWith=null;
}else{
if(XN.isString(x)||XN.isElement(x)){
this.alignWith=XN.element.$(x);
}
}
if(XN.isNumber(y)){
this.top=y;
this.alignWith=null;
}
this.refresh();
return this;
},setX:function(x){
this.moveTo(x);
return this;
},setY:function(y){
this.moveTo(null,y);
return this;
},setIndex:function(i){
this.frame.style.zIndex=i;
return this;
},_moveToElement:function(el){
_9e9.fixPositionMethods[this.alignType](this.frame,XN.element.$(el),this.offsetX,this.offsetY,XN.element.$(this.alignParent));
},_moveToPosition:function(x,y){
if(x){
this.frame.style.left=x+"px";
}
if(y){
this.frame.style.top=y+"px";
}
}});
(function(){
var _a67=_9e9.fixPositionElement.prototype;
var _a68=XN.event;
var _a69=null;
_9e9.clearDialog=function(){
if(_a69&&_a69.parent){
_a69.remove();
}
};
_9e9.dialog=function(_a6a){
var This=this;
_a69=this;
_9e9.fixPositionElement.call(this,_a6a);
this.container=XN.element.$element("div");
this.frame.appendChild(this.container);
if(this.getConfig("HTML")){
this.setContent(this.getConfig("HTML"));
}else{
this.setContent(this.buildHTML());
}
this.dialogContainer=XN.element.$("ui_dialog_container");
this.header=this.title=XN.element.$("ui_dialog_header");
this.body=this.msg=this.message=XN.element.$("ui_dialog_body");
this.footer=XN.element.$("ui_dialog_footer");
this.closeButton=XN.element.$("ui_dialog_close");
this.header.addChild=this.body.addChild=this.footer.addChild=function(s){
XN.element.addChild(this,s);
setTimeout(function(){
This.refresh();
},0);
};
this.dialogContainer.removeAttribute("id");
this.header.removeAttribute("id");
this.body.removeAttribute("id");
this.footer.removeAttribute("id");
this.closeButton.removeAttribute("id");
if(this.getConfig("showCloseButton")){
this.closeButton.show();
XN.event.addEvent(this.closeButton,"click",function(){
This.hide();
This.fireEvent("close");
});
}
this.frame.style.zIndex=10000;
this.setWidth(this.getConfig("width")||400);
if(this.getConfig("height")){
this.setHeight(this.getConfig("height"));
}
XN.array.each(["title","msg","message","header","body","footer"],function(i,v){
if(This.getConfig(v)){
This[v].setContent(This.getConfig(v));
}
});
if(this.getConfig("type")){
this.setType(this.getConfig("type"));
}
this._buttons=[];
XN.event.addEvent(this.footer,"click",function(e){
This._parseButtonEvent(e||window.event);
});
XN.util.hotKey.add("27",this._hotKeyEvent,this);
if(this.getConfig("modal")===true){
XN.dom.disable();
}
if(this.getConfig("noHeader")){
this.header.hide();
}
if(this.getConfig("noFooter")){
this.footer.hide();
}
if(this.getConfig("noPadding")){
this.body.addClass("no_padding");
}
};
_9e9.dialog.prototype=XN.$extend({},_a67);
XN.$extend(_9e9.dialog.prototype,{header:null,body:null,footer:null,_iframe:null,_buttons:null,buildHTML:function(){
return ["<table id=\"ui_dialog_container\" style=\"width: 100%; height: 100%;\" class=\"pop_dialog_table\">","<tbody>","<tr>","<td class=\"pop_topleft\"></td>","<td class=\"pop_border\"></td>","<td class=\"pop_topright\"></td>","</tr>","<tr>","<td class=\"pop_border\"></td>","<td class=\"pop_content\">","<h2><span id=\"ui_dialog_header\"></span><a style=\"display:none;\" class=\"close-button\" id=\"ui_dialog_close\" href=\"#nogo\" onclick=\"return false;\">\u5173\u95ed</a></h2>","<div class=\"dialog_content\">","<div id=\"ui_dialog_body\" class=\"dialog_body\"></div>","<div id=\"ui_dialog_footer\" class=\"dialog_buttons\"></div>","</div>","</td>","<td class=\"pop_border\"></td>","</tr>","<tr>","<td class=\"pop_bottomleft\"></td>","<td class=\"pop_border\"></td>","<td class=\"pop_bottomright\"></td>","</tr>","</tbody>","</table>"].join("");
},getButton:function(text){
var _a71=this._buttons;
for(var i=_a71.length-1;i>=0;i--){
if(_a71[i].text==text){
return _a71[i];
}
}
return null;
},addButton:function(b){
var o={text:b.text,_onclickForDialog:b.onclick};
if(b.className){
o.className=b.className;
}
var _a75=new _9e9.button(o);
_a75.frame.setAttribute("dialog","1");
this._buttons.push(_a75);
this.footer.addChild(_a75);
return this;
},delButton:function(b){
if(XN.isString(b)){
b=this.getButton(b);
}
this.footer.delChild(b);
return this;
},_preventHide:false,preventHide:function(){
this._preventHide=true;
return this;
},setAutoHide:function(boo){
this._preventHide=!boo;
return this;
},_parseButtonEvent:function(e){
var el=_a68.element(e);
if(el.tagName.toLowerCase()!=="input"||el.type!=="button"){
return;
}
if(!el.getAttribute("dialog")){
return;
}
var _a7a=this.getButton(el.value);
if(_a7a&&_a7a._onclickForDialog){
_a7a._onclickForDialog.call(this);
}
if(this._preventHide){
this._preventHide=true;
}else{
this.hide();
}
},_hotKeyEvent:function(){
this.hide();
},setType:function(t){
if(t=="normal"){
this.frame.delClass("errorDialog");
}else{
if(t=="error"){
this.frame.addClass("errorDialog");
}
}
return this;
},setWidth:function(w){
if(!w){
return this;
}
if(w=="auto"){
this.frame.style.width="auto";
this.dialogContainer.style.height="";
this.dialogContainer.style.width="";
this.width=this.frame.offsetWidth;
}else{
this.width=w;
this.frame.style.width=w+"px";
this.dialogContainer.style.height="100%";
this.dialogContainer.style.width="100%";
}
this.refresh();
return this;
},setHeight:function(h){
if(!h){
return this;
}
this.hegith=h;
this.frame.style.height=h+"px";
this.refresh();
return this;
},resizeTo:function(w,h){
this.setWidth(w);
this.setHeight(h);
return this;
},clear:function(){
this.header.setContent("");
this.body.setContent("");
this.footer.setContent("");
this._buttons=[];
return this;
},setTitle:function(s){
this.header.setContent(s);
return this;
},setBody:function(s){
this.body.setContent(s);
return this;
},remove:function(_a82){
XN.util.hotKey.del("27",this._hotKeyEvent);
_9e9.element.remove.call(this);
if(!_a82){
XN.dom.enable();
}
return this;
},refresh:function(){
if(this.visible()){
_a67.show.apply(this,arguments);
}else{
this.hide();
}
return this;
},reLocate:function(){
var w=this.frame;
var s=XN.event.scrollTop();
var _a85=(XN.event.winHeight()-w.offsetHeight)/2;
_a85=(_a85<=0)?s:_a85+s;
w.style.top=_a85+"px";
},show:function(){
this._clearHideTimer();
if(this.getConfig("modal")===true){
XN.dom.disable();
}
_a67.show.apply(this,arguments);
this.fireEvent("show");
return this;
},hide:function(){
this._clearHideTimer();
_a67.hide.apply(this,arguments);
XN.dom.enable();
this.fireEvent("hide");
return this;
},_hideTimer:null,_clearHideTimer:function(){
if(this._hideTimer){
clearTimeout(this._hideTimer);
this._hideTimer=null;
}
},autoHide:function(t){
var This=this;
this._hideTimer=setTimeout(function(){
This.hide();
},t*1000);
return this;
}});
XN.event.enableCustomEvent(_9e9.dialog.prototype);
})();
this.panel=this.dialog;
this.dialog.prototype.setHeader=function(h){
if(h&&h!==""){
this.header.addChild(h);
}else{
this.header.innerHTML="";
}
};
this.dialog.prototype.setFooter=function(f){
if(f&&f!==""){
this.footer.addChild(f);
}else{
this.footer.innerHTML="";
}
};
this.menu=function(_a8a){
var This=this;
this.config={alignType:"4-1",barOnshowClass:"",tagName:"div",disalbeButtonClickEvent:true,fireOn:"click",keep:0.2,useIframeInIE6:true,effectTime:50};
XN.$extend(this.config,_a8a);
var _a8c;
if(this.getConfig("text")){
this.frame=_a8c=XN.element.$element(this.getConfig("tagName"));
_a8c.setContent(this.getConfig("text"));
}else{
if(this.getConfig("button")){
this.frame=_a8c=XN.element.$(this.getConfig("button"));
}else{
return false;
}
}
this._alignType=this.getConfig("alignType");
if(this.getConfig("menu")){
XN.element.$(this.getConfig("menu")).hide();
this.menu=new _9e9.fixPositionElement({id:this.getConfig("menu"),alignType:this._alignType,alignWith:this.getConfig("alignWith")||this.frame,addIframe:this.getConfig("addIframe"),useIframeInIE6:this.getConfig("useIframeInIE6")});
this.container=this.menu.frame;
this._canAddSubMenu=false;
}else{
var dt=XN.element.$element("div");
dt.hide();
this.menu=new _9e9.fixPositionElement({id:dt,alignType:this._alignType,alignWith:this.getConfig("alignWith")||this.frame,addIframe:this.getConfig("addIframe"),useIframeInIE6:this.getConfig("useIframeInIE6")});
this.container=XN.element.$element("div");
this._menu.setContent(this.container);
}
this.menu.setIndex(10001);
XN.event.addEvent(this.menu.frame,"click",function(e){
e=e||window.event;
This._frameOnClick(e);
},false);
this.menu.setOffsetX(this.getConfig("offsetX")||0);
this.menu.setOffsetY(this.getConfig("offsetY")||0);
var _a8f=this.getConfig("event");
if(_a8f=="click"){
XN.event.addEvent(this.frame,"click",function(e){
This._buttonClick(e||window.event);
});
XN.event.addEvent(document,"click",function(e){
This._documentClick(e||window.event);
});
}else{
if(_a8f=="mouseover"){
XN.event.addEvent(this.frame,"mouseover",function(e){
This._frameMouseOver(e||window.event);
});
if(this.getConfig("disalbeButtonClickEvent")){
XN.event.addEvent(this.frame,"onclick",function(e){
XN.event.stop(e||window.event);
});
}
XN.event.addEvent(this.frame,"mouseleave",function(){
This._buttonMouseLeave();
});
XN.event.addEvent(this.menu.frame,"mouseleave",function(){
This._menuMouseLeave();
});
XN.event.addEvent(this.menu.frame,"mouseover",function(){
This._mouseOverMenu=true;
});
}else{
if(_a8f=="manual"){
}
}
}
XN.event.addEvent(window,"resize",function(){
This.menu.refresh();
});
this.hide();
};
this.menu.prototype=XN.$extend({},this.container);
XN.$extend(this.menu.prototype,{isShow:true,menu:null,_alignType:null,_button:null,_canAddSubMenu:true,_delayTimer:null,_mouseOverMenu:false,_mouseOverButton:false,_clearTimer:function(){
if(this._delayTimer){
clearTimeout(this._delayTimer);
this._delayTimer=null;
}
},_buttonClick:function(e){
XN.event.stop(e);
if(this.isShow){
this.hide();
}else{
this.show();
}
},_documentClick:function(e){
this.hide();
},_frameOnClick:function(e){
var This=this;
var el=XN.event.element(e);
var tag=el.tagName.toLowerCase();
if(tag=="a"){
return true;
}
if((tag=="input"&&(el.type=="radio"||el.type=="checkbox"))||tag=="label"){
this.isShow=false;
setTimeout(function(){
This.isShow=true;
},20);
return true;
}
while(el!=this.menu.frame&&el.tagName&&el.tagName.toLowerCase()!="a"){
el=el.parentNode;
}
if(el.tagName.toLowerCase()=="a"){
return true;
}
XN.event.stop(e);
},_frameMouseOver:function(e){
var This=this;
this._mouseOverButton=true;
this._clearTimer();
var _a9c=this.getConfig("delay");
if(_a9c){
this._delayTimer=setTimeout(function(){
if(This._mouseOverButton){
This.show();
}
},_a9c*1000);
}else{
This.show();
}
XN.event.stop(e);
},_buttonMouseLeave:function(){
var This=this;
this._mouseOverButton=false;
this._clearTimer();
setTimeout(function(){
if(!This._mouseOverMenu){
This.hide();
}
},this.getConfig("effectTime"));
},_menuMouseLeave:function(){
var This=this;
this._mouseOverMenu=false;
this._clearTimer();
setTimeout(function(){
if(!This._mouseOverButton){
This.hide();
}
},this.getConfig("effectTime"));
},getConfig:function(key){
var _aa0={"hoverClass":"barOnshowClass","event":"fireOn","button":"bar","delay":"keep"};
if(_aa0[key]){
return this.config[key]||this.config[_aa0[key]];
}
return this.config[key];
},show:function(){
if(this.isShow){
return this;
}
this.menu.show();
var _aa1=this.getConfig("hoverClass");
if(_aa1!=""){
this.frame.addClass(this.getConfig("hoverClass"));
}
this.onShow();
this.isShow=true;
return this;
},setWidth:function(w){
this.menu.frame.style.width=w+"px";
this.menu.refresh();
return this;
},hide:function(){
if(!this.isShow){
return this;
}
this.menu.hide();
this.frame.delClass(this.getConfig("hoverClass"));
this.isShow=false;
this.onHide();
return this;
},refresh:function(){
if(this.isShow){
this.menu.show();
}
return this;
},onShow:XN.func.empty,onHide:XN.func.empty});
XN.event.enableCustomEvent(this.menu.prototype);
this.autoComplete=function(p){
var This=this;
this.config=this.config||{};
XN.$extend(this.config,{inputTip:null,searchDelay:0.2,DS:null,enableCache:true,maxCache:10});
XN.$extend(this.config,p);
if(this.getConfig("enableCache")){
this.cache=new XN.util.cache({cacheLength:this.getConfig("maxCache")});
}
if(this.getConfig("input")){
var _aa5=this.input=XN.element.$(this.getConfig("input"));
}else{
var _aa5=this.input=XN.element.$element("input");
_aa5.type="text";
_aa5.addClass("input-text");
}
this.frame=_aa5;
XN.event.addEvent(_aa5,"focus",function(e){
This._startCheck();
This.fireEvent("focus");
});
XN.event.addEvent(_aa5,"blur",function(e){
This._endCheck();
This.fireEvent("blur");
});
this.addEvent("focus",function(){
var v=this.input.value;
if(v==""||v==this.getConfig("inputTip")){
this.fireEvent("noinput");
}
});
this.addEvent("blur",function(){
this._lastInput=null;
});
XN.event.addEvent(_aa5,"click",function(e){
XN.event.stop(e||window.event);
});
XN.event.addEvent(_aa5,"keydown",function(e){
This._userInput=true;
e=e||window.event;
if(e.keyCode==13){
XN.event.stop(e);
}
This.fireEvent("keydown",e);
});
_aa5.setAttribute("AutoComplete","off");
this.DS=this.getConfig("DS");
};
this.autoComplete.prototype=XN.$extend({},this.element);
XN.$extend(this.autoComplete.prototype,{input:null,cache:null,_userInput:false,_lastInput:null,getConfig:function(key){
if(key=="input"){
return this.config["input"]||this.config["id"];
}
return this.config[key];
},_startCheck:function(){
var This=this;
this._inputTimer=setInterval(function(){
if(This._userInput){
This._userInput=false;
return;
}
This._checkInput();
},this.getConfig("searchDelay")*1000);
},_endCheck:function(){
clearInterval(this._inputTimer);
this._inputTimer=null;
},_checkInput:function(){
var This=this;
var cv=this.input.value;
if(XN.string.isBlank(cv)){
if(this._lastInput===""){
return;
}
this._lastInput="";
this.fireEvent("noinput");
return;
}
if(cv==this._lastInput){
return;
}
this._lastInput=cv;
this.fireEvent("searchbegin");
if(this.cache){
var _aaf=this.cache.get(cv);
if(_aaf){
this.fireEvent("searchover",_aaf);
return;
}
}
if(!this.DS){
XN.log("no ds");
this.fireEvent("NO_DS");
return;
}
this.DS.query(cv,function(r){
if(This.cache){
This.cache.add(cv,r);
}
This.fireEvent("searchover",r);
});
}});
XN.event.enableCustomEvent(this.autoComplete.prototype);
(function(){
var _ab1={};
getCompleteMenu=function(id){
return _ab1[id];
};
_9e9.autoCompleteMenu=function(p){
var This=this;
this._MID=XN.util.createObjID();
_ab1[this._MID]=this;
this.config=this.config||{};
XN.$extend(this.config,{ulClassName:"",liClassName:"",liHoverClass:"m-autosug-hover",aClassName:"",noResult:"\u6ca1\u6709\u5339\u914d\u7ed3\u679c",dataLoading:"\u6b63\u5728\u52a0\u8f7d\u6570\u636e...",noInput:null,autoSelectFirst:false,noHighlightClass:"noHighlight"});
_9e9.autoComplete.call(this,p);
var _ab5=this.input;
var m=XN.element.$element("div");
m.innerHTML=this.getConfig("wrapper")||this._wrapper();
this._menuList=m.firstChild;
this._ul=this._menuList.getElementsByTagName("ul")[0];
this.menu=new _9e9.menu({button:_ab5,menu:this._menuList,fireOn:"manual"});
this.addEvent("keydown",this._inputOnkeydown);
XN.event.addEvent(this._ul,"mousedown",function(e){
This._menuOnclick(e||window.event);
});
XN.event.addEvent(_ab5,"blur",function(){
This.menu.hide();
});
this.menu.hide();
this.addEvent("noinput",function(){
var tip=this.getConfig("noInput");
if(!tip){
this.menu.hide();
return;
}
this._ul.innerHTML="<li>"+tip+"</li>";
this.menu.show();
});
this.addEvent("NO_DS",function(){
this._noDataShow();
});
this.addEvent("searchover",function(_ab9){
this._buildMenu(_ab9);
});
};
_9e9.autoCompleteMenu.prototype=XN.$extend({},_9e9.autoComplete.prototype);
XN.$extend(_9e9.autoCompleteMenu.prototype,{menu:null,_menuList:null,_ul:null,_currentLi:null,_highlightMenuItem:function(li){
if(li==this._currentLi){
return;
}
var _abb=this.getConfig("liHoverClass");
if(this._currentLi!==null){
XN.element.delClass(this._currentLi,_abb);
}
XN.element.addClass(li,_abb);
this._currentLi=li;
var aid=this._currentLi.getAttribute("aid");
if(aid){
this.fireEvent("highlight",this.result[parseInt(aid)]);
}
},_checkOnlyOneNoHightlightEl:function(){
return (this._ul.lastChild==this._ul.firstChild&&XN.element.hasClassName(this._ul.firstChild,this.config.noHighlightClass));
},_inputOnkeydown:function(_abd){
var li;
if(_abd.keyCode==13){
if(this.menu.isShow&&this._currentLi){
var aid=this._currentLi.getAttribute("aid");
if(aid){
this._selectMenuItem(parseInt(aid));
}
}
return false;
}
if(_abd.keyCode==38){
if(this._checkOnlyOneNoHightlightEl()){
return;
}
if(this._currentLi&&this._currentLi.previousSibling){
li=this._currentLi.previousSibling;
}else{
li=this._ul.lastChild;
}
while(XN.element.hasClassName(li,this.config.noHighlightClass)){
if(li.previousSibling){
li=li.previousSibling;
}else{
li=this._ul.lastChild;
}
}
this._highlightMenuItem(li);
return false;
}
if(_abd.keyCode==40){
if(this._checkOnlyOneNoHightlightEl()){
return;
}
if(this._currentLi&&this._currentLi.nextSibling){
li=this._currentLi.nextSibling;
}else{
li=this._ul.firstChild;
}
while(XN.element.hasClassName(li,this.config.noHighlightClass)){
if(li.nextSibling){
li=li.nextSibling;
}else{
li=this._ul.firstChild;
}
}
this._highlightMenuItem(li);
return false;
}
return true;
},_menuOnclick:function(_ac0){
var el=XN.event.element(_ac0);
while(el&&el.tagName&&el.tagName.toLowerCase()!=="li"){
el=el.parentNode;
}
if(!el||el.nodeType!==1||!el.getAttribute("aid")){
return false;
}
this._selectMenuItem(parseInt(el.getAttribute("aid")));
return false;
},_menuOnmouseover:function(_ac2){
var el=XN.event.element(_ac2);
if(el.parentNode==XN.element.$("dropmenuHolder")){
return;
}
while(el&&el.tagName&&el.tagName.toLowerCase()!=="li"){
el=el.parentNode;
}
if(!el||el.nodeType!==1||!el.getAttribute("aid")){
return false;
}
this._highlightMenuItem(el);
return false;
},_selectMenuItem:function(id){
this.menu.hide();
this.input.focus();
this.fireEvent("select",this.result[id]);
this._lastInput=this.input.value;
},_buildMenu:function(_ac5){
var This=this;
this.result=_ac5;
if(_ac5.length>0){
this.fireEvent("hasResult");
}
if(_ac5.length==0){
this.fireEvent("noResult");
var _ac7=this.getConfig("noResult");
if(XN.isFunction(_ac7)){
_ac7=_ac7.call(this);
}
this._ul.innerHTML="<li>"+_ac7+"</li>";
this.menu.show();
this._currentLi=null;
return;
}
var lis=[];
lis.push(this.firstMenuItem());
var len=_ac5.length-1;
XN.array.each(_ac5,function(i,v){
lis.push("<li onmouseover=\"getCompleteMenu("+This._MID+")._highlightMenuItem(this);\" aid=\""+i+"\">"+This.buildMenu(v)+"</li>");
});
lis.push(this.lastMenuItem());
this._ul.innerHTML=lis.join("");
if(this.getConfig("autoSelectFirst")){
this._highlightMenuItem(this._ul.firstChild);
}
this.menu.show();
},_noDataShow:function(){
var tip=this.getConfig("dataLoading");
this._ul.innerHTML="<li>"+tip+"</li>";
this.menu.show();
},firstMenuItem:function(){
return "";
},lastMenuItem:function(){
return "";
},buildMenu:function(r){
return "<li>"+r.name+"</li>";
},setMenuWidth:function(w){
this.menu.setWidth(w);
},getCurrentItem:function(){
return this._currentLi;
},setCurrentItem:function(item){
this._currentLi=item;
}});
_9e9.autoCompleteMenu.prototype._wrapper=function(){
return ["<div class=\"m-autosug\">","<span class=\"x1\">","<span class=\"x1a\"></span>","</span>","<span class=\"x2\">","<span class=\"x2a\"></span>","</span>","<div class=\"m-autosug-minwidth\">","<div class=\"m-autosug-content\">","<ul></ul>","</div>","</div>","</div>"].join("");
};
})();
this.friendSelector=function(_ad0){
var This=this;
this.config=this.config||{};
XN.$extend(this.config,{getFriendsUrl:"http://browse."+XN.env.domain+"/getfriendsajax.do?s=1",url:"http://sg."+XN.env.domain+"/s/f",aurl:"http://friend."+XN.env.domain+"/friendsSelector.do",param:{}});
if(this.config.url.indexOf("sg.renren.com/s/m")!=-1){
this.config.aurl="http://friend."+XN.env.domain+"/friendSelectorForVip";
}
XN.$extend(this.config,_ad0.params);
if(XN.isUndefined(this.getConfig("page"))){
this.config["page"]=false;
}
_9e9.autoCompleteMenu.call(this,_ad0);
this.addEvent("select",function(r){
this.input.value=r.name;
if(this.onSelectOne){
this.onSelectOne(r);
}
});
this.buildMenu=function(r){
return r.name;
};
this.addEvent("focus",function(){
if(this._ready){
return;
}
if(this._isLoading){
return;
}
this.loadFriends();
});
};
this.friendSelector.prototype=XN.$extend({},this.autoCompleteMenu.prototype);
XN.$extend(this.friendSelector.prototype,{_isLoading:false,_ready:false,isReady:function(){
return this._ready;
},isLoading:function(){
return this._isLoading;
},loadFriends:function(r){
if(this.isLoading()){
return;
}
this._isLoading=true;
var This=this;
var p={};
p["init"]=true;
p["uid"]=false;
p["uhead"]=false;
p["uname"]=false;
p["group"]=false;
p["net"]=false;
p["param"]=this.getConfig("param");
p["page"]=this.getConfig("page");
new XN.net.xmlhttp({useCache:true,url:this.getConfig("aurl"),method:"get",data:"p="+XN.json.build(p),onSuccess:function(r){
r=XN.json.parse(r.responseText);
This._onload(r);
}});
},_onload:function(r){
this.isLoading=false;
this._ready=true;
this.config.qkey=r.qkey;
this.DS=new XN.util.DS_friends({url:this.getConfig("url"),qkey:this.getConfig("qkey"),limit:this.getConfig("limit"),page:this.getConfig("page"),param:this.getConfig("param")});
this.DS.query=function(v,_ada){
var This=this;
try{
this._request.abort();
}
catch(e){
}
function parseDS_JSON(r){
r=r.responseText;
var pp;
try{
var rt=XN.JSON.parse(r);
if(This.rootKey&&rt[This.rootKey]){
pp=rt[This.rootKey];
}else{
pp=rt;
}
}
catch(e){
pp=[];
}
_ada(pp);
}
var _adf=XN.json.parse(this.param);
this._request=new XN.net.xmlhttp({url:this.url,data:"q="+encodeURIComponent(v)+(!!this.limit?("&l="+this.limit):"")+(!!_adf.friendId?("&friend="+_adf.friendId):""),method:this.method,onSuccess:parseDS_JSON});
};
}});
this.friendSelectorSynchronous=function(a,b){
function s(id,ac,v){
if(XN.isObject(id)){
id=id.id;
}
if(v.isReady()){
try{
v[ac](id);
}
catch(e){
}
}else{
v.addEvent("load",function(){
try{
v[ac](id);
}
catch(e){
}
});
v.loadFriends();
}
}
a.addEvent("select",function(id){
s(id,"select",b);
});
a.addEvent("deselect",function(id){
s(id,"deselect",b);
});
b.addEvent("select",function(id){
s(id,"select",a);
});
b.addEvent("deselect",function(id){
s(id,"deselect",a);
});
};
(function(){
_9e9.multiFriendSelector=function(_ae9){
var This=this;
this._ID=XN.util.createObjID();
this.config=this.config||{};
XN.$extend(this.config,{inputName:"ids",nameInputName:"names",aurl:"http://friend."+XN.env.domain+"/friendsSelector.do",url:"http://sg."+XN.env.domain+"/s/f",initParam:{},param:{},noInput:false,maxNum:-1});
XN.$extend(this.config,_ae9);
if(this.config.url.indexOf("sg.renren.com/s/m")!=-1){
this.config.aurl="http://friend."+XN.env.domain+"/friendSelectorForVip";
}
this.frame=XN.element.$element("div");
var div=XN.element.$element("div");
div.hide();
document.body.appendChild(div);
div.appendChild(this.frame);
this.frame.innerHTML=["<div id=\""+this.getID("friendsContainer")+"\" class=\"tokenizer friendAutoSelector\">","<span id=\""+this.getID("inputContainer")+"\" class=\"tokenizer_input\"><input id=\""+this.getID("input")+"\" type=\"text\" /></span>","</div>","<div class=\"float-right\" id=\""+this.getID("menu")+"\"></div>"].join("");
this.input=this.getEl("input");
this.menuContainer=this.getEl("menu");
XN.event.addEvent(this.getEl("friendsContainer"),"click",function(e){
This._parseClickEvent(e||window.event);
});
this.autoComplete=new _9e9.friendSelector({id:this.input,inputTip:"\u8f93\u5165\u597d\u53cb\u59d3\u540d...",autoSelectFirst:true,url:this.getConfig("url"),aurl:this.getConfig("aurl"),param:this.getConfig("param")});
this.autoComplete.loadFriends=function(r){
if(this.isLoading()){
return;
}
this._isLoading=true;
var p={};
p["init"]=true;
p["uid"]=true;
p["uhead"]=false;
p["uname"]=true;
p["group"]=false;
p["net"]=false;
XN.$extend(p,This.getConfig("initParam"));
p["param"]=this.getConfig("param");
new XN.net.xmlhttp({useCache:true,url:this.getConfig("aurl"),method:This.getConfig("loadMethod")||"get",data:"p="+XN.json.build(p),onSuccess:function(r){
r=XN.json.parse(r.responseText);
This._allFriends=r.candidate;
This.fireEvent("load");
This.autoComplete._onload(r);
}});
};
this.autoComplete.buildMenu=function(r){
return "<p>"+r.name+"</p>";
};
this.autoComplete.setMenuWidth(129);
this.autoComplete.addEvent("keydown",function(e){
This._onInputKeydown(e);
});
this.autoComplete.addEvent("select",function(r){
XN.log(this.input);
this.input.value="";
This.selectFriend(r);
});
if(this.getConfig("noInput")){
this.input.hide();
}
this.fireEvent("init");
};
var _af3=_9e9.multiFriendSelector.prototype=XN.$extend({},_9e9.element);
XN.$extend(_af3,{isReady:function(){
return this.autoComplete.isReady();
},isLoading:function(){
return this.autoComplete.isLoading();
},loadFriends:function(){
this.autoComplete.loadFriends();
},getUserByID:function(id){
id=String(id);
var rt=null;
XN.array.each(this._allFriends,function(i,v){
if(String(v.id)==id){
rt=v;
return false;
}
});
return rt;
},getConfig:function(key){
if(key=="inputName"){
return this.config["idInputName"]||this.config["inputName"];
}
return this.config[key];
},getID:function(id){
return "mfs_"+this._ID+id;
},getFriendID:function(id){
return this.getID("friend_"+id);
},getFriendEl:function(id){
return XN.element.$(this.getFriendID(id));
},getEl:function(id){
return XN.element.$(this.getID(id));
},getFriendsNum:function(){
return this.getEl("friendsContainer").getElementsByTagName("a").length;
},getSelectedFriends:function(){
var rt=[];
var a=XN.array.build(this.getEl("friendsContainer").getElementsByTagName("a"));
XN.array.each(a,function(i,v){
rt.push(v.getAttribute("uid")+"");
});
return rt;
},reset:function(){
this.deselectAll();
},deselectAll:function(){
var els=XN.array.build(this.getEl("friendsContainer").getElementsByTagName("a"));
XN.array.each(els,function(i,v){
XN.element.remove(v);
});
this.fireEvent("deselectAll",this.getIds());
},selectFriends:function(fs){
var This=this;
XN.array.each(fs,function(i,v){
This.select(v);
});
},deselectFriends:function(fs){
var This=this;
XN.array.each(fs,function(i,v){
This.deselect(v);
});
},select:function(o){
if(XN.isUndefined(o)){
return;
}
XN.log("mfs select:");
XN.log(o);
var _b0d=this.getConfig("maxNum");
if(_b0d!==-1){
if(this.getFriendsNum()==_b0d){
this.fireEvent("overMaxNum",_b0d);
return;
}
}
if(XN.isString(o)||XN.isNumber(o)){
o={id:o,name:this.getUserByID(o).name};
}
if(this.getFriendEl(o.id)){
return;
}
this.getEl("friendsContainer").insertBefore(this.createFriendHTML(o.id,o.name),this.getEl("inputContainer"));
this.fireEvent("select",o.id);
},deselect:function(uid){
if(!this.getFriendEl(uid)){
return;
}
this.getFriendEl(uid).remove();
this.fireEvent("deselect",uid);
},_parseClickEvent:function(e){
var el=XN.event.element(e);
XN.event.stop(e);
if(el&&el.getAttribute("action")){
this.deselectFriend(el.getAttribute("uid"));
}
},createFriendHTML:function(uid,_b12){
var a=XN.element.$element("a");
a.id=this.getFriendID(uid);
a.setAttribute("uid",uid);
a.href="#nogo";
a.className="token";
a.tabindex="-1";
a.innerHTML=["<span>\n<span>\n<span>\n<span>\n<input type=\"hidden\" value=\"",uid,"\" name=\"",this.getConfig("inputName"),"\" />\n","<input type=\"hidden\" value=\"",_b12,"\" name=\"",this.getConfig("nameInputName"),"\" />\n",_b12,"<span uid=\"",uid,"\" action=\"x\" class=\"x\" onmouseout=\"this.className='x'\" onmouseover=\"this.className='x_hover'\" >\n</span>\n</span>\n</span>\n</span>\n</span>"].join("");
return a;
},_onInputKeydown:function(_b14){
var i=this.getEl("inputContainer"),pa=i.previousSibling,na=i.nextSibling,_b18=this.input,c=this.getEl("friendsContainer");
if(_b14.keyCode==8&&this.input.value==""){
if(pa){
this.deselectFriend(pa.getAttribute("uid"));
}
return true;
}else{
if(_b14.keyCode==37&&this.input.value==""){
if(pa&&pa.tagName.toLowerCase()=="a"){
i.parentNode.removeChild(i);
c.insertBefore(i,pa);
setTimeout(function(){
_b18.focus();
},0);
}
return true;
}else{
if(_b14.keyCode==39&&this.input.value==""){
if(na&&na.tagName.toLowerCase()=="a"){
i.parentNode.removeChild(i);
XN.dom.insertAfter(i,na);
setTimeout(function(){
_b18.focus();
},0);
}
return true;
}
}
}
return false;
}});
XN.event.enableCustomEvent(_af3);
_af3.deSelectAll=_af3.deselectAll;
_af3.deSelectFriend=_af3.deselectFriend=_af3.deselect;
_af3.selectFriend=_af3.select;
_af3.getSelectedFriendsID=_af3.getSelectedFriends;
_af3.getIds=_af3.getSelectedFriends;
})();
this.friendSelectorWithMenu=function(p){
var _b1b=new _9e9.friendSelector(p);
var menu=new _9e9.friendSelectorMenu({url:_b1b.getConfig("url"),aurl:_b1b.getConfig("aurl"),param:_b1b.getConfig("param"),multi:false,alignType:p.alignType,offsetX:p.offsetX,offsetY:p.offsetY,initParam:p.initParam});
var div=XN.element.$element("div");
div.addChild(_b1b);
div.addChild(menu);
_b1b.frame=div;
_b1b.addEvent("focus",function(){
menu.menu.hide();
});
menu.addEvent("select",function(p){
var This=this;
setTimeout(function(){
This.menu.hide();
},30);
_b1b.fireEvent("select",this.getUserByID(p));
});
menu.menu.menu.setOffsetY(9);
return _b1b;
};
this.multiFriendSelectorWithMenu=function(p){
var _b21=new _9e9.multiFriendSelector(p);
var menu=new _9e9.friendSelectorMenu({url:_b21.getConfig("url"),aurl:_b21.getConfig("aurl"),param:_b21.getConfig("param"),multi:true,showSelectAllCheckbox:_b21.getConfig("showSelectAllCheckbox")||false});
menu.addEvent("submit",function(){
menu.menu.hide();
});
_b21.menuContainer.setContent(menu);
_9e9.friendSelectorSynchronous(_b21,menu);
return _b21;
};
(function(ns){
var _b24=false;
var _b25=XN.event.addEvent;
var log=function(s){
if(_b24){
XN.log(XN.isString(s)?"ui.tabView:"+s:s);
}
return s;
};
ns.tabView=function(_b28){
this.config={selectedClass:"select",event:"click",alwaysReload:false,mouseOverDelay:0.2};
XN.$extend(this.config,_b28);
this.init();
};
ns.tabView.prototype={_tabs:null,_currentTab:null,_idPre:null,_tabIndex:0,init:function(){
this._idPre=XN.util.createObjID();
this._tabs=[];
},getConfig:function(key){
if(key=="activeClass"){
return this.config["activeClass"]||this.config["selectedClass"];
}
return this.config[key];
},_getID:function(el){
if(el.nodeType&&el.nodeType==1){
return this._setID(el).id;
}
return el;
},_setID:function(el){
if(!el.id){
this._tabIndex++;
el.setAttribute("id","tabview_"+this._idPre+"_"+this._tabIndex);
}
return XN.element.$(el);
},_getTab:function(id){
log("_getTab start");
log("param:id");
log(id);
if(!id){
return log(id);
}
if(id.label){
return log(id);
}
var key=this._getID(id);
log("key:"+key);
var tabs=this._tabs;
log("all tabs");
log(tabs);
for(var i=tabs.length-1;i>=0;i--){
if(tabs[i].key==key){
log("_getTab end");
return log(tabs[i]);
}
}
log("_getTab end");
return log(null);
},getCurrentTab:function(){
return this._getTab(this._currentTab);
},setCurrentTab:function(tab,_b31){
log("setCurrentTab start");
var oldC=this.getCurrentTab();
var nowC=this._getTab(tab);
log("old current:");
log(oldC);
log("now current:");
log(nowC);
if(oldC&&oldC.key==nowC.key&&!_b31){
return;
}
if(oldC){
this._deactiveTab(oldC);
}
this._activeTab(nowC);
this._setCurrentTab(nowC);
log("setCurrentTab end");
this.fireEvent("change",nowC);
return this;
},reset:function(){
var tab=this.getCurrentTab();
if(tab){
this._deactiveTab(tab);
}
this._setCurrentTab(null);
return this;
},_activeTab:function(tab){
log("_activeTab:");
log(tab);
tab.getEl("label").addClass(this.getConfig("activeClass"));
if(tab.content){
tab.getEl("content").show();
}
tab.onActive(tab);
log("_activeTab end");
},_deactiveTab:function(tab){
if(tab.getEl("label")){
tab.getEl("label").delClass(this.getConfig("activeClass"));
}
if(tab.content){
tab.getEl("content").hide();
}
tab.onInactive(tab);
},_setCurrentTab:function(tab){
log("_setCurrentTab start");
tab=this._getTab(tab);
log("currentTab:");
log(tab);
this._currentTab=tab?tab.key:null;
log("this._currentTab");
log(this._currentTab);
log("_setCurrentTab end");
},addTab:function(t){
log("addTab start");
log("params:");
log(t);
var This=this;
var tab={onActive:XN.func.empty,onClick:XN.func.empty,onInactive:XN.func.empty,onInit:XN.func.empty,getEl:function(key){
return XN.element.$(this[key]);
},active:false};
t.label=this._setID(XN.element.$(t.label));
t.key=t.key||t.label.id;
if(t.content){
t.content=this._getID(t.content);
log("get content id:"+t.content);
}
XN.$extend(tab,t);
this._tabs.push(tab);
log("all tabs");
log(this._tabs);
if(tab.active&&this._currentTab===null){
if(tab.content){
tab.getEl("content").show();
}
tab.label.addClass(this.getConfig("activeClass"));
this._setCurrentTab(tab);
}else{
if(tab.content){
tab.getEl("content").hide();
}
}
var ev=this.getConfig("event");
if(ev=="click"){
_b25(tab.label,"click",function(e){
e=e||window.event;
XN.event.stop(e);
This._eventHander(e,tab.label);
},false);
}else{
if(ev=="mouseover"){
var _b3e=true;
var _b3f=null;
_b25(tab.label,"mouseover",function(e){
var el=this;
_b3e=true;
_b3f=setTimeout(function(){
if(!_b3e){
return;
}
e=e||window.event;
This._eventHander(e,tab.label);
},This.getConfig("mouseOverDelay")*1000);
},false);
_b25(tab.label,"mouseleave",function(e){
_b3e=false;
if(_b3f){
clearTimeout(_b3f);
}
},false);
}
}
tab.onInit(tab);
log("addTab end");
return this;
},_eventHander:function(e,el){
log("on click,el:");
log(el);
log("get tab form by el:");
var tab=this._getTab(el);
if(this.getConfig("alwaysReload")){
this.setCurrentTab(tab,true);
}else{
this.setCurrentTab(tab);
}
tab.onClick(e,tab);
},refresh:function(){
this._activeTab(this.getCurrentTab());
return this;
},showTab:function(id,_b47){
this.setCurrentTab(id,_b47);
},hideAll:function(){
this.reset();
}};
XN.event.enableCustomEvent(ns.tabView.prototype);
})(this);
this.refreshAll=function(){
document.body.style.zoom=1.1;
document.body.style.zoom=1;
};
this.getHiddenDiv=function(){
if(!this._hiddenDiv){
this._hiddenDiv=XN.element.$element("div").hide();
document.body.appendChild(this._hiddenDiv);
}
return this._hiddenDiv;
};
this.friendSearchBar=function(p){
var _b49=XN.element.$(p.input);
var _b4a=XN.element.$(p.submit||null);
var form=XN.element.$(p.form);
var tip=p.tip||"\u627e\u4eba...";
var _b4d=p.action||function(p){
if(p.type&&p.type=="PAGE"){
window.location.href="http://page."+XN.env.domain+"/"+p.id+"?from=opensearch";
}else{
window.location.href="http://www."+XN.env.domain+"/profile.do?id="+p.id+"&from=opensearch";
}
};
var _b4f=false;
(new XN.form.inputHelper(_b49)).setDefaultValue(tip).onEnter(function(el){
if(_b4f){
return;
}
if(!XN.string.isBlank(el.value)){
form.submit();
}
});
var _b51=16;
var _b52={id:_b49,noResult:function(){
return "\u641c\u7d22\""+this.input.value+"\"";
},limit:_b51,params:p.params};
var _b53=new _9e9.friendSelector(_b52);
_b53.lastMenuItem=function(){
if(this.result.length==_b51){
return "<li><p><a onmousedown=\"window.location.href=this.href\" href=\"http://friend."+XN.env.domain+"/myfriendlistx.do?qu="+this.input.value+"\">\u70b9\u51fb\u67e5\u770b\u66f4\u591a..</a></p></li>";
}else{
return "";
}
};
_b53.setMenuWidth(_b49.offsetWidth);
_b53.onSelectOne=function(p){
_b4f=true;
_b4d(p);
};
if(_b4a){
_b4a.onclick=function(){
if(_b4f){
return false;
}
var v=_b49.value;
if(v!=tip&&!XN.string.isBlank(v)){
form.submit();
return false;
}
if(_b4a.tagName.toLowerCase()=="a"){
return true;
}else{
return false;
}
};
}
};
this.navSearchBar=function(p){
var _b57=XN.element.$(p.input);
var _b58=XN.element.$(p.submit||null);
var form=XN.element.$(p.form);
var tip=p.tip||"\u627e\u4eba...";
var _b5b=p.action||function(p){
if(p.type&&p.type=="PAGE"){
window.location.href="http://page."+XN.env.domain+"/"+(p.id||p.uid)+"?from=opensearch";
}else{
window.location.href="http://www."+XN.env.domain+"/profile.do?id="+(p.id||p.uid)+"&from=opensearch";
}
};
var _b5d=false;
(new XN.form.inputHelper(_b57)).setDefaultValue(tip).onEnter(function(el){
if(_b5d){
return;
}
if(!XN.string.isBlank(el.value)){
form.submit();
}
});
var _b5f=7;
var _b60={id:_b57,noResult:function(){
return "<a onmousedown=\"window.location.href=this.href\" href=\"http://browse."+XN.env.domain+"/searchEx.do?from=opensearchclick&q="+encodeURIComponent(this.input.value)+"\" title=\"\u641c\u7d22"+this.input.value+"\">\u641c\u7d22\""+this.input.value+"\"</a>";
},limit:_b5f,params:p.params,wrapper:["<div class=\"\">","<span class=\"x1\">","<span class=\"x1a\"></span>","</span>","<span class=\"x2\">","<span class=\"x2a\"></span>","</span>","<div class=\"m-autosug-minwidth\">","<div class=\"m-autosug-content\">","<ul class=\"search-Result\"></ul>","</div>","</div>","</div>"].join(""),url:"http://sg."+XN.env.domain+"/s/h"};
var _b61=new _9e9.friendSelector(_b60);
_b61.loadFriends=function(r){
if(this.isLoading()){
return;
}
this._isLoading=true;
var This=this;
this._onload();
};
_b61._onload=function(){
this.isLoading=false;
this._ready=true;
this.DS=new XN.util.DS_friends({url:this.getConfig("url"),qkey:this.getConfig("qkey"),limit:this.getConfig("limit"),page:this.getConfig("page"),param:this.getConfig("param")});
this.DS.query=function(v,_b65){
var This=this;
try{
this._request.abort();
}
catch(e){
}
function parseDS_JSON(r){
r=r.responseText;
var pp;
try{
var rt=XN.json.parse(r);
if(This.rootKey&&rt[This.rootKey]){
pp=rt[This.rootKey];
}else{
pp=rt;
}
}
catch(e){
pp=[];
}
_b65(pp);
}
this._request=new XN.net.xmlhttp({url:this.url,data:"q="+encodeURIComponent(v)+"&l="+this.limit,method:this.method,onSuccess:parseDS_JSON});
};
};
_b61.buildMenu=function(r){
return "<img src=\""+(r.head||r.uhead)+"\" width=\"50\" height=\"50\" alt=\""+(r.name||r.uname)+"\"/>"+"<strong>"+(r.name||r.uname)+"</strong>";
};
_b61._noDataShow=function(){
var tip=this.getConfig("dataLoading");
this._ul.innerHTML="<li class=\"lookMore\">"+tip+"</li>";
this.menu.show();
};
_b61._buildMenu=function(_b6c){
var This=this;
this.result=_b6c;
if(_b6c.length==0){
var _b6e=this.getConfig("noResult");
if(XN.isFunction(_b6e)){
_b6e=_b6e.call(this);
}
this._ul.innerHTML="<li class=\"lookMore\">"+_b6e+"</li>";
this.menu.show();
this._currentLi=null;
return;
}
var lis=[];
lis.push(this.firstMenuItem());
var len=_b6c.length-1;
XN.array.each(_b6c,function(i,v){
lis.push("<li onmouseover=\"getCompleteMenu("+This._MID+")._highlightMenuItem(this);\" aid=\""+i+"\">"+This.buildMenu(v)+"</li>");
});
lis.push(this.lastMenuItem());
this._ul.innerHTML=lis.join("");
if(this.getConfig("autoSelectFirst")){
this._highlightMenuItem(this._ul.firstChild);
}
this.menu.show();
};
_b61.lastMenuItem=function(){
if(this.result.length==_b5f){
return "<li class=\"lookMore\"><a onmousedown=\"window.location.href=this.href\" href=\"http://friend."+XN.env.domain+"/myfriendlistx.do?qu="+this.input.value+"\">\u70b9\u51fb\u67e5\u770b\u66f4\u591a..</a></li>";
}else{
return "";
}
};
_b61.setMenuWidth(_b57.offsetWidth);
_b61.onSelectOne=function(p){
_b5d=true;
_b5b(p);
};
if(_b58){
_b58.onclick=function(){
if(_b5d){
return false;
}
var v=_b57.value;
if(v!=tip&&!XN.string.isBlank(v)){
form.submit();
return false;
}
if(_b58.tagName.toLowerCase()=="a"){
return true;
}else{
return false;
}
};
}
};
this.userInfoAutoComplete=function(id,type){
var _b77={"elementaryschool":"http://www."+XN.env.domain+"/autocomplete_elementaryschool.jsp","juniorhighschool":"http://www."+XN.env.domain+"/autocomplete_juniorhighschool.jsp","workplace":"http://www."+XN.env.domain+"/autocomplete_workplace.jsp","highschool":"http://www."+XN.env.domain+"/autocomplete_highschool.jsp","allnetwork":"http://www."+XN.env.domain+"/autocomplete_all_network.jsp","allSchool":"http://www."+XN.env.domain+"/autocomplete-school.jsp","city":"http://www."+XN.env.domain+"/autocomplete-city.jsp","college":"http://www."+XN.env.domain+"/autocomplete_college.jsp"};
var ds=new XN.datasource.DS_XHR({url:_b77[type]});
var at=new _9e9.autoCompleteMenu({DS:ds,input:id});
at.buildMenu=function(r){
return "<p>"+(r.name||r.Name)+"</p>";
};
at.addEvent("select",function(r){
this.input.value=(r.name||r.Name);
});
return at;
};
});
object.add("XN.Do","XN, XN.func, XN.array, XN.ui",function(_b7c,XN){
this.currentAlert=null;
this.currentConfirm=null;
this.alert=function(_b7e,_b7f,type,X,Y,w,h,_b85){
var _b86={type:"normal",width:400,button:"\u786e\u5b9a",modal:false,callBack:XN.func.empty,autoHide:0,addIframe:true,closeFire:true};
if(!XN.isString(_b7e)){
extendObject(_b86,_b7e);
}else{
if(XN.isString(_b7e)||arguments.length>1){
var ars=arguments;
XN.array.each(["message","title","type","X","Y","width","height","callBack"],function(i,v){
if(ars[i]){
_b86[v]=ars[i];
}
});
}
}
var temp=_b86.params;
delete _b86.params;
_b86=extendObject({},_b86,temp);
_b86.callback=_b86.callback||_b86.callBack;
try{
_b7c.currentAlert.remove(_b86.modal===true);
}
catch(e){
}
var _b8b=new XN.ui.dialog(_b86).setType(_b86.type).setTitle(_b86.title||(_b86.type=="error"?"\u9519\u8bef\u63d0\u793a":"\u63d0\u793a")).setWidth(_b86.width).setHeight(_b86.height).setX(_b86.X).setY(_b86.Y).addButton({text:(_b86.yes||_b86.button),onclick:function(){
_b8b.setAutoHide(true);
return _b86.callback.call(_b8b);
}}).show();
if(_b86.closeFire===true){
_b8b.addEvent("close",function(){
_b86.callback.call(_b8b);
});
}
_b7c.currentAlert=_b8b;
try{
_b8b.getButton(_b86.button).focus();
}
catch(e){
}
if(_b86.autoHide){
_b8b.autoHide(_b86.autoHide);
}
return _b8b;
};
this.confirm=function(_b8c,_b8d,_b8e,yes,no,X,Y,w,h){
var _b95={type:"normal",width:400,modal:false,yes:"\u786e\u5b9a",no:"\u53d6\u6d88",callBack:XN.func.empty,focus:null,addIframe:true,closeFire:false};
if(!XN.isString(_b8c)&&!XN.isNumber(_b8c)){
extendObject(_b95,_b8c);
}else{
if(XN.isString(_b8c)||arguments.length>1){
var ars=arguments;
XN.array.each(["message","title","callBack","yes","no","X","Y","w","h"],function(i,v){
if(ars[i]){
_b95[v]=ars[i];
}
});
}
}
var temp=_b95.params;
delete _b95.params;
_b95=extendObject({},_b95,temp);
_b95.callback=_b95.callback||_b95.callBack;
try{
_b7c.currentConfirm.remove(_b95.modal===true);
}
catch(e){
}
var _b9a=new XN.ui.dialog(_b95).setType(_b95.type).setTitle(_b95.title||(_b95.type=="error"?"\u9519\u8bef\u63d0\u793a":"\u63d0\u793a")).setBody(_b95.msg||_b95.message||"").setWidth(_b95.width).setHeight(_b95.height).setX(_b95.X).setY(_b95.Y).addButton({text:(_b95.submit||_b95.yes),onclick:function(){
_b9a.setAutoHide(true);
return _b95.callback.call(_b9a,true);
}}).addButton({text:(_b95.cancel||_b95.no),onclick:function(){
_b9a.setAutoHide(true);
return _b95.callback.call(_b9a,false);
}}).show();
_b9a.getButton(_b95.cancel||_b95.no).addClass("gray");
if(_b95.focus=="submit"){
_b95.focus=_b95.submit;
}else{
if(_b95.focus=="cancel"){
_b95.focus=_b95.cancel;
}
}
if(_b95.closeFire===true){
_b9a.addEvent("close",function(){
_b95.callback.call(_b9a,false);
});
}
_b9a.getButton(_b95.focus||_b95.submit||_b95.yes).focus();
_b7c.currentConfirm=_b9a;
return _b9a;
};
this.showMessage=this.showMsg=function(msg,_b9c,time){
var _b9e=_b7c.alert({msg:msg,title:(_b9c||"\u63d0\u793a"),noFooter:true,autoHide:(time||2)});
return _b9e;
};
this.showError=function(msg,_ba0,time){
var _ba2=_b7c.alert({msg:msg,type:"error",title:(_ba0||"\u9519\u8bef\u63d0\u793a"),noFooter:true,autoHide:(time||2)});
return _ba2;
};
});
object.use(["XN","XN.array","XN.browser","XN.cookie","XN.Do","XN.dom","XN.effect","XN.element","XN.env","XN.event","XN.form","XN.func","XN.json","XN.net","XN.string","XN.template","XN.ui","XN.util","XN.datasource"],function(_ba3,XN){
$extend=XN.$extend;
if(window.XN==null){
window.XN=XN;
}else{
var _ba5=window.XN;
window.XN=XN;
for(var prop in _ba5){
if(window.XN[prop]===undefined){
window.XN[prop]=_ba5[prop];
}
}
XN.$extend(window.XN.env,_ba5.env);
}
isUndefined=XN.isUndefined;
isString=XN.isString;
isElement=XN.isElement;
isFunction=XN.isFunction;
isObject=XN.isObject;
isArray=XN.isArray;
isNumber=XN.isNumber;
$=XN.element.$;
$element=XN.element.$element;
XN.element.findFirstClass=XN.dom.findFirstClass;
extendObject=$extend;
xn_getEl=ge=getEl=$X=$;
$xElement=XN.element.$element;
XN.DEBUG=XN.Debug=XN.debug;
XN.debug.On=XN.debug.on;
XN.debug.Off=XN.debug.off;
XN.namespace("ui");
XN.namespace("util");
XN.namespace("app");
XN.namespace("page");
XN.APP=XN.App=XN.app;
XN.PAGE=XN.Page=XN.page;
XN.CONFIG=XN.Config=XN.config;
XN.ENV=XN.Env=XN.env=XN.env;
XN.ARRAY=XN.Array=XN.array=XN.array;
XN.String=XN.STRING=XN.string=XN.string;
XN.BROWSER=XN.Browser=XN.browser=XN.browser;
XN.COOKIE=XN.Cookie=XN.cookie=XN.cookie;
XN.EVENT=XN.Event=XN.event=XN.event;
XN.DO=XN.Do;
XN.DOM=XN.Dom=XN.dom=XN.dom;
XN.EFFECT=XN.Effect=XN.effect=XN.effect;
XN.ELEMENT=XN.Element=XN.element=XN.element;
XN.FORM=XN.Form=XN.form=XN.form;
XN.FUNC=XN.Func=XN.func=XN.func;
XN.JSON=XN.Json=XN.json=XN.json;
XN.NET=XN.Net=XN.net;
XN.Template=XN.TEMPLATE=XN.template=XN.template;
XN.UI=XN.Ui=XN.ui;
XN.UTIL=XN.Util=XN.util;
XN.ui.DS_JSON=XN.util.DS_JSON=XN.datasource.DS_JSON;
XN.ui.DS_friends=XN.util.DS_friends=XN.datasource.DS_friends;
XN.ui.DS_Array=XN.util.DS_Array=XN.datasource.DS_Array;
XN.ui.DS_XHR=XN.util.DS_XHR=XN.datasource.DS_XHR;
try{
document.domain=String(XN.env.domain);
}
catch(e){
}
if(window.isJSON==null){
window.isJSON=XN.string.isJSON;
}
if(XN.events==null){
XN.timeLog={};
XN.events={};
XN.event.enableCustomEvent(XN.events);
}
});
if(!window.console){
window.console={log:function(){
},warn:function(){
},error:function(){
}};
}
if(!Function.prototype.bind){
Function.prototype.bind=function(_ba7){
var _ba8=this;
return function(){
_ba8.apply(_ba7,arguments);
};
};
}
window.now=new Date();
XN.dom.ready(function(){
if(XN.config.parentDomain||(!XN.config.jumpOut)){
return;
}
try{
top.location.href.indexOf("x");
}
catch(e){
try{
top.location=self.location;
}
catch(e){
}
}
});
function writepipe(uin,nick){
if(uin>0){
var s=GetCookie("_pipe");
if(s){
s+=":";
}
SetCookie("_pipe",s+uin+":"+escape(nick),null,"/",""+XN.env.domain+"");
}
var _bac=GetCookie("_wi");
if("opening"!=_bac&&"running"!=_bac){
SetCookie("_wi","opening",null,"/",XN.ENV.domain);
window.wiw=window.open("http://"+XN.env.domain+"/webpager.do?toid="+uin,"_blank","height=600,width=650,resizable=yes,location=yes");
if(window.wiw_checker){
window.clearInterval(window.wiw_checker);
}
window.wiw_checker=window.setInterval(function(){
if(window.wiw.closed){
window.clearInterval(window.wiw_checker);
SetCookie("_wi","",null,"/",XN.ENV.domain);
}
},1000);
return true;
}
if(window.wiw){
try{
wiw.focus();
}
catch(e){
}
}
return false;
}
function talkto(uin,nick,tiny,_bb0){
try{
var a=new ActiveXObject("xntalk.Application");
if(a){
a.openChat("",uin);
return true;
}
}
catch(e){
}
try{
if(top.frames["imengine"].gPagerType==4){
if(top.frames["imengine"].imHelper.isLoginUser()){
var tabs=top.frames["imengine"].imui.chatTabs;
tabs.onActivateWidget(uin,nick,tiny,_bb0);
tabs.switchFocus(uin);
return true;
}
}
}
catch(e){
}
}
function jump_and_download(link){
if(XN.BROWSER.IE){
window.open(link,"download_window","toolbar=0,location=no,directories=0,status=0,scrollbars=0,resizeable=0,width=1,height=1,top=0,left=0");
window.focus();
}
}
function GetCookieVal(_70){
var _71=document.cookie.indexOf(";",_70);
if(_71==-1){
_71=document.cookie.length;
}
return unescape(document.cookie.substring(_70,_71));
}
function GetCookie(_72){
var arg=_72+"=";
var _74=arg.length;
var _75=document.cookie.length;
var i=0;
while(i<_75){
var j=i+_74;
if(document.cookie.substring(i,j)==arg){
return GetCookieVal(j);
}
i=document.cookie.indexOf(" ",i)+1;
if(i==0){
break;
}
}
return null;
}
function SetCookie(_78,_79){
var _7a=SetCookie.arguments;
var _7b=SetCookie.arguments.length;
var _7c=(_7b>2)?_7a[2]:null;
var _7d=(_7b>3)?_7a[3]:null;
var _7e=(_7b>4)?_7a[4]:null;
var _7f=(_7b>5)?_7a[5]:false;
document.cookie=_78+"="+escape(_79)+((_7c==null)?"":("; expires="+_7c.toGMTString()))+((_7d==null)?"":("; path="+_7d))+((_7e==null)?"":("; domain="+_7e))+((_7f==true)?"; secure":"");
}
if(XN.browser.Gecko&&XN.string.getQuery("debug_mode")){
XN.debug.on();
}
(function(){
var _bc4=false;
window.load_jebe_ads=function(s,r,_bc7){
if(!s){
return;
}
if(_bc4&&!_bc7){
return;
}
_bc4=true;
XN.dom.ready(function(){
if(!r){
r=location.href;
}
if(r.match(/http:\/\/www\.renren\.com\/home/ig)){
r="http://www.renren.com/Home.do";
}
var p=XN.cookie.get("id");
if(!p||XN.string.isBlank(p)){
p="";
}
var src="http://ebp.renren.com/ebpn/show?userid="+encodeURIComponent(p)+"&isvip="+XN.user.isVip+"&hideads="+XN.user.hideAds+(!XN.pageId?"":"&pageType="+XN.pageId)+"&tt="+new Date().getTime();
if(XN.app.share&&XN.app.share.pageInfo){
r=r.replace(/\?.*$/,"")+"?shareType="+XN.app.share.pageInfo.type;
}
if(r){
src+="&r="+encodeURIComponent(r);
}
XN.loadFile({file:src,type:"js"},function(){
var _bca="http://jebe.xnimg.cn/"+jebe_json.ad_js_version+"/xn.jebe.js";
XN.loadFile({file:_bca,type:"js"});
});
});
};
})();
XN.USER=XN.user=currentUser={};
XN.USER.me=function(_bcb){
};
XN.event.enableCustomEvent(currentUser);
XN.USER.addFriendAction=function(p){
this.config={commentLength:45,needComment:true,requestURI:"http://friend."+XN.env.domain+"/ajax_request_friend.do"};
$extend(this.config,p);
};
XN.user.addFriendAction.prototype={getConfig:function(key){
return this.config[key];
},send:function(id,why,from,code,_bd2){
var code=code!=1?0:1;
var _bd2=_bd2||"";
var This=this;
if(this.getConfig("needComment")){
if(XN.STRING.isBlank(why)){
this.fireEvent("checkError","\u60a8\u8f93\u5165\u7684\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a");
return;
}
}
if(why.length>this.getConfig("commentLength")){
this.fireEvent("checkError","\u60a8\u8f93\u5165\u7684\u4fe1\u606f\u4e0d\u80fd\u8d85\u8fc7"+this.getConfig("commentLength")+"\u4e2a\u5b57\u7b26");
return;
}
var data="id="+id+"&why="+why+"&codeFlag="+code+"&code="+_bd2;
if(this.getConfig("matchmaker")){
data=data+"&matchmaker="+this.getConfig("matchmaker");
}
this.fireEvent("beforePost");
new XN.NET.xmlhttp({url:this.getConfig("requestURI")+"?from="+from,"data":data,onSuccess:function(r){
r=r.responseText;
if(r&&isJSON(r)){
var re=XN.JSON.parse(r);
}else{
This.fireEvent("error");
return;
}
if(re.result=="-1"){
This.fireEvent("flagError");
return;
}
This.fireEvent("success",id,r,from);
if(!window.currentUser){
return;
}
if(currentUser.fireEvent){
currentUser.fireEvent("addFriendSuccess",id,r,from);
}
if(currentUser.onaddFriendSuccess){
currentUser.onaddFriendSuccess(id,r);
}
},onError:function(){
This.fireEvent("error",id,from);
if(!window.currentUser){
return;
}
currentUser.fireEvent("addFriendError",id,r,from);
}});
}};
XN.EVENT.enableCustomEvent(XN.USER.addFriendAction.prototype);
XN.dynamicLoad({file:"http://s.xnimg.cn/jspro/xn.app.addFriend.js",funcs:["showRequestFriendDialog"]});
XN.DOM.readyDo(function(){
if(XN.get_check){
var _bd7=Sizzle("form");
for(var i=0;i<_bd7.length;i++){
var _bd9=document.createElement("input");
_bd9.type="hidden";
_bd9.name="requestToken";
_bd9.value=XN.get_check;
_bd7[i].appendChild(_bd9);
_bd9=document.createElement("input");
_bd9.type="hidden";
_bd9.name="_rtk";
_bd9.value=XN.get_check_x;
_bd7[i].appendChild(_bd9);
}
}
});
XN.namespace("widgets");
XN.WIDGETS=XN.Widgets=XN.widgets;
function getImageType(_bda,_bdb,_bdc,_bdd){
var type="";
if(_bda.naturalHeight!=undefined){
if(_bda.naturalHeight*(_bdb/_bda.naturalWidth)<=_bdc){
type="normal";
}else{
type="too-height";
}
_bdd(type);
return;
}
if(XN.browser.IE&&parseInt(_bda.height)==0){
var img=new Image();
img.onload=function(){
if(img.height<=_bdc){
type="normal";
}else{
type="too-height";
}
_bdd(type);
img.parentNode.removeChild(img);
};
img.width=_bda.getAttribute("width")||_bdb;
img.style.cssText="position:absolute;top:-9999em;left:-9999em;";
document.body.appendChild(img);
img.src=_bda.src+"?"+new Date().getTime();
}else{
if(!_bda.getAttribute("width")){
_bda.width=_bdb;
}
if(_bda.height<=_bdc){
type="normal";
}else{
type="too-height";
}
_bdd(type);
}
}
function fixImage(_be0,_be1,_be2){
_be0.onload=null;
if(XN.browser.IE&&_be0.naturalHeight==undefined){
XN.dom.ready(function(){
getImageType(_be0,_be1,_be2,function(type){
if(type=="normal"){
return;
}else{
if(type=="too-height"){
clipImage2(_be0,_be1,_be2,"h");
}
}
});
});
}else{
getImageType(_be0,_be1,_be2,function(type){
if(type=="normal"){
_be0.width=_be1;
return;
}else{
if(type=="too-height"){
clipImage2(_be0,_be1,_be2,"h");
}
}
});
}
}
function clipImage2(_be5,w,h,type){
var _be9=document.createElement("span");
var _bea=document.createElement("i");
_bea.className=_be5.className;
var _beb=_be5.parentNode;
if(!_beb){
return;
}
_be9.style.cssText="display:block;zoom:1;overflow:hidden;width:"+w+"px;padding:0;margin:0;background:transparent none;";
var _bec=new Image();
_bec.onload=function(){
_bec.onload=null;
if(type=="h"){
var _bed=_bec.height*(w/_bec.width);
_bec.height=_bed;
_bec.width=w;
if(_bed>h){
_be9.style.height=h+"px";
}
}else{
if(type=="w"){
_bec.width=_bec.width*(h/_bec.height);
_bec.height=h;
}
}
_bec.style.cssText="display:block;margin:0 auto;";
_be9.appendChild(_bec);
_bea.appendChild(_be9);
try{
_beb.replaceChild(_bea,_be5);
}
catch(e){
if(window.console&&console.log){
console.log(_be5.src);
}
}
_bea.style.cursor="pointer";
_beb.style.textDecoration="none";
if(XN.browser.IE){
_beb.style.position="relative";
var _bee=$element("div");
_bee.style.cssText="position:absolute;top:0;left:0;cursor:pointer;width:"+_be9.style.width+";height:"+(_be9.style.height?_be9.style.height:h+"px")+";background:url(about:_blank);";
_beb.insertBefore(_bee,_beb.firstChild);
}
};
_bec.src=_be5.src;
}
function clipImage(_bef){
if(!_bef.getAttribute("width")||!_bef.getAttribute("height")){
return;
}
var _bf0=parseInt(_bef.getAttribute("width"));
var _bf1=parseInt(_bef.getAttribute("height"));
if(_bef.naturalWidth&&_bef.naturalHeight&&_bef.naturalWidth==_bf0&&_bef.naturalHeight==_bf1){
return;
}
var _bf2=new Image();
_bf2.onload=function(){
if(_bf2.width==_bf0&&_bf2.height==_bf1){
return;
}
var _bf3=document.createElement("i");
var _bf4=_bef.parentNode;
if(!_bf4){
return;
}
_bf4.replaceChild(_bf3,_bef);
_bf3.style.width=_bf0+"px";
_bf3.style.height=_bf1+"px";
if(!XN.browser.IE){
_bf3.style.display="inline-block";
_bf3.appendChild(_bf2);
_bf3.style.overflow="hidden";
if(_bf2.width>_bf0){
_bf2.style.marginLeft="-"+parseInt((_bf2.width-_bf0)/2)+"px";
}
if(_bf2.height>_bf1){
_bf2.style.marginTop="-"+parseInt((_bf2.height-_bf1)/2)+"px";
}
}else{
_bf3.style.zoom="1";
var top=parseInt((_bf2.height-_bf1)/2);
_bf3.style.background="url("+_bef.src+") no-repeat -"+parseInt((_bf2.width-_bf0)/2)+"px -"+(top>0?top:0)+"px";
if(_bf3.parentNode.tagName=="A"){
_bf3.style.cursor="pointer";
}
}
};
_bf2.src=_bef.src;
}
function roundify(_bf6,_bf7){
return;
if(!_bf7){
_bf7=50;
}
if(_bf6.height<=_bf7){
return;
}
var _bf8=_bf6.parentNode;
if(!_bf8){
return;
}
_bf6.style.visibility="hidden";
var _bf9=document.createElement("i");
_bf9.title=_bf6.title;
_bf9.className=_bf6.className;
if(!XN.browser.IE){
_bf9.style.display="inline-block";
}
_bf9.style.overflow="hidden";
_bf9.style.width=_bf7+"px";
_bf9.style.height=(_bf6.height>_bf7?_bf7:_bf6.height)+"px";
var _bfa=new Image();
_bf9.appendChild(_bfa);
_bfa.onload=function(){
_bfa.width=_bf7;
_bf8.replaceChild(_bf9,_bf6);
if(_bfa.height>_bf7){
_bfa.style.marginTop="-"+parseInt((_bfa.height-_bf7)/2)+"px";
}
};
_bfa.src=_bf6.src;
return;
}
(function(){
var _bfb=/kaixin\.com|renren\.com|xiaonei\.com/g;
XN.widgets.rp_domain=function rp(el){
if(el.tagName&&el.tagName.toLowerCase()=="a"){
if(el._d_rpd){
return true;
}
el._d_rpd=true;
if(/http|@/.test(el.innerHTML)&&XN.browser.IE){
var _bfd=el.innerHTML;
}
el.href=el.href.replace(_bfb,XN.env.domain);
if(!isUndefined(_bfd)){
el.innerHTML=_bfd;
}
return true;
}
return false;
};
var divs=["feedHome","newsfeed-module-box","notifications","messages"];
XN.widgets.domain_in_one={reg:function(el){
XN.event.addEvent(el,"mouseover",function(e){
var rp=XN.widgets.rp_domain;
var el=XN.event.element(e||window.event);
if(rp(el)){
return;
}
if(rp(el.parentNode)){
return;
}
rp(el.parentNode);
});
}};
XN.dom.ready(function(){
XN.array.each(divs,function(i,v){
if($(v)){
XN.widgets.domain_in_one.reg(v);
}
});
});
})();
$.wpi=$.wpi||{};
$.wpi.appNotify={element:null,init:function(){
if(this.element==null){
this.element=document.createElement("div");
this.element.className="notify-app";
this.element.innerHTML=["<div class=\"topbg\"></div>","<div class=\"innerCon\">","<h3></h3>","<a class=\"close\"><img src=\"http://a.xnimg.cn/imgpro/chat/notify-close.gif\" /></a>","<div class=\"desc\"></div>","<div class=\"action\">","<a href=\"javascript:;\" class=\"cancel\">\u53d6\u6d88\u53d1\u9001</a>","</div>","</div>","<div class=\"bottombg\"></div>","<iframe frameBorder=\"0\"></iframe>"].join("");
document.body.appendChild(this.element);
this.hackIe6();
var that=this;
var _c06=this.element.getElementsByTagName("a");
_c06[0].onclick=function(){
that.hide();
};
_c06[_c06.length-1].onclick=function(){
new XN.net.xmlhttp({url:"http://app."+XN.env.domain+"/app/notify/cancel",method:"post",data:"notifyId="+that.data.notifyId});
new XN.net.xmlhttp({url:"http://app."+XN.env.domain+"/app/notify/statistic/",method:"get",data:"op=2&app_id="+that.data.appId});
that.hide();
};
}
var _c07=this.element.getElementsByTagName("h3")[0];
var _c08="";
for(var i=0;i<this.data.receivers.length;i++){
var _c0a=this.data.receivers[i];
_c08+="<a href=\"http://www."+XN.env.domain+"/profile.do?id="+_c0a.id+"\" target=\"_blank\">"+_c0a.name+"</a>";
if(i!=this.data.receivers.length-1){
_c08+="\u3001";
}
}
_c07.innerHTML="\u4f60\u5c06\u7ed9"+_c08+(this.data.receivers.length>1?"\u7b49\u597d\u53cb":"")+"\u53d1\u9001\u4e00\u6761\u901a\u77e5";
var _c0b=XN.DOM.getElementsByClassName("desc",this.element)[0];
_c0b.innerHTML=this.data.content;
},hackIe6:function(){
if(XN.browser.IE6){
var that=this;
window.attachEvent("onscroll",function(){
that.element.className=that.element.className;
});
}
},show:function(data){
if(typeof data=="string"){
this.data=XN.json.parse(data);
}
this.init();
$(this.element).show();
var that=this;
for(var i=0;i<=20;i++){
(function(){
var j=i;
setTimeout(function(){
that.element.style.bottom=(that.easing(35*j,-107,137,700))+"px";
},35*j);
})();
}
var that=this;
setTimeout(function(){
that.hide();
},5500);
new XN.net.xmlhttp({url:"http://app."+XN.env.domain+"/app/notify/statistic/",method:"get",data:"op=1&app_id="+this.data.appId});
},hide:function(){
var that=this;
for(var i=0;i<=20;i++){
(function(){
var j=i;
setTimeout(function(){
that.element.style.bottom=(that.easing(35*j,30,-137,700))+"px";
j==20?$(that.element).hide():"";
},35*j);
})();
}
},easing:function(t,b,c,d){
return c*t/d+b;
}};
(function(){
var _c18={getPageScroll:function(){
try{
var x,y;
if(window.pageYOffset){
y=window.pageYOffset;
x=window.pageXOffset;
}else{
if(document.documentElement&&document.documentElement.scrollTop){
y=document.documentElement.scrollTop;
x=document.documentElement.scrollLeft;
}else{
if(document.body){
y=document.body.scrollTop;
x=document.body.scrollLeft;
}
}
}
}
catch(e){
}
return {x:x,y:y};
},getWholeHeight:function(){
try{
if(document.documentElement){
return document.documentElement.scrollHeight;
}else{
if(document.body){
return document.body.scrollHeight;
}
}
}
catch(e){
}
},getClientHeight:function(){
if(document.documentElement){
return document.documentElement.clientHeight;
}
}};
var _c1b;
var func=function(){
var _c1d=_c18.getPageScroll().y+_c18.getClientHeight();
var _c1e=_c18.getWholeHeight();
if(!func.loading&&_c1d===_c1e&&_c1b!==_c1e){
XN.events.fireEvent("scrollbottom");
}
_c1b=_c1d;
};
XN.event.addEvent(window,"scroll",func);
})();
XN.app.statsMaster={init:function(){
var j={ID:XN.cookie.get("id"),R:encodeURIComponent(location.href)};
var json=XN.JSON.build(j);
this.listener=function(e){
var e=e||window.event,_X=XN.event.pointerX(e),Y=XN.event.pointerY(e),U,T,el=XN.event.element(e),_c27=$("dropmenuHolder");
xx=XN.element.realLeft(_c27);
if(!(el&&el.tagName)){
return;
}
T=el.tagName.toLowerCase();
if(T=="a"){
U=el.href;
}
var _t=el.getAttribute("stats");
if(_t){
T=_t;
}
j.X=_X-xx;
j.Y=Y;
if(U){
j.U=encodeURIComponent(U);
}
if(T){
j.T=T;
}
json=XN.JSON.build(j);
new Image().src="http://dj."+XN.env.domain+"/click?J="+json+"&t="+Math.random();
};
XN.event.addEvent(document,"mousedown",this.listener);
if(!window.statisFocusEventAdded){
XN.event.addEvent(window,"focus",function(){
new Image().src="http://dj."+XN.env.domain+"/focus?J="+json+"&t="+Math.random();
});
window.statisFocusEventAdded=true;
}
if(!window.statisBlurEventAdded){
XN.event.addEvent(window,"blur",function(){
new Image().src="http://dj."+XN.env.domain+"/unfocus?J="+json+"&t="+Math.random();
});
window.statisBlurEventAdded=true;
}
if(!window.statisBottomEventAdded){
XN.events.addEvent("scrollbottom",function(){
new Image().src="http://dj."+XN.env.domain+"/scrollbottom?J="+json+"&t="+Math.random();
});
window.statisBottomEventAdded=true;
}
},destroy:function(){
XN.event.delEvent(document,"mousedown",this.listener);
}};
XN.dom.ready(function(){
XN.app.statsMaster.init();
});
XN.dom.ready(function(){
var _c29=false;
var _c2a=true;
XN.event.addEvent(document,"mousedown",function(){
_c2a=false;
});
XN.event.addEvent(window,"blur",function(){
_c2a=true;
});
showConfirmDialog=function(){
var d=XN.DO.alert({title:"\u8bf7\u9886\u53d6\u60a8\u7684"+XN.env.siteName+"\u901a\u884c\u8bc1",modal:true,message:"<iframe id=\"frameactive\" width=\"410\" height=\"100%\" frameborder=\"no\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" src=\"about:blank\" ></iframe>",width:454,params:{showCloseButton:true},callBack:function(){
_c29=false;
showConfirmDialog.fireEvent("close");
}});
arguments.callee.dialog=d;
d.footer.hide();
$("frameactive").src="http://channel."+XN.env.domain+"/confirm/show";
$("frameactive").contentWindow.location.href="http://channel."+XN.env.domain+"/confirm/show";
$("frameactive").addEvent("load",function(){
d.refresh();
});
};
XN.event.enableCustomEvent(showConfirmDialog);
if(!XN.cookie.get("noconfirm")){
return;
}
var _c2c=setInterval(function(){
if(_c2a||window.noConfirmWindow||_c29||!XN.cookie.get("noconfirm")){
return;
}
_c29=true;
XN.cookie.del("noconfirm","/",XN.env.domain);
XN.cookie.del("noconfirm","/",window.location.hostname);
showConfirmDialog();
},1000);
XN.log("\u672a\u6fc0\u6d3b\u7528\u6237\u5f15\u5bfc\u521d\u59cb\u5316over");
});
var GuidBar={bar:null,list:[],addBar:function(){
if(window!=top||this.bar!=null){
return;
}
new XN.net.xmlhttp({url:"http://browse."+XN.env.domain+"/peoplebar.do?ran="+Math.random(),method:"get",onSuccess:function(r){
var _c2e=XN.json.parse(r.responseText);
if(_c2e.list.length>0){
GuidBar.buildStruts(_c2e);
}
}});
},buildStruts:function(obj){
this.list=obj.list;
var _c30=["<div class=\"doing clearfix\">","<div class=\"userinfo clearfix\">","<a href=\"http://www."+XN.env.domain+"/profile.do?id="+obj.user.id+"\" class=\"avatar\">","<img src=\""+obj.user.head+"\" />","</a>","<h3>"+obj.user.name+"\uff0c\u4f60\u597d\uff01</h3>","<p>\u5f00\u59cb\u627e\u4f60\u7684\u597d\u53cb\u5427:</p>","</div>","<div class=\"users\">","<div class=\"arrow\"></div>","<ul></ul>","<div class=\"more\"><a href=\"http://friend."+XN.env.domain+"/myfriendlistx.do?_ua_flag=42&ref=guide_bar_more#item_1\">\u66f4\u591a &raquo;</a></div>","</div>","</div>"].join("");
var _c31=this.bar=document.createElement("div");
_c31.className="guide-top";
_c31.innerHTML=_c30;
var _c32=_c31.getElementsByTagName("ul")[0];
for(var i=0,_c34=Math.min(this.list.length,5);i<_c34;i++){
_c32.appendChild(this.getFriend());
}
var _c35=$("navBar")||document.body.firstChild;
_c35.parentNode.insertBefore(_c31,_c35);
},getFriend:function(){
var list=this.list;
if(!list[0]){
return null;
}
var _c37=document.createElement("li");
_c37.className="clearfix";
_c37.innerHTML=["<a href=\"#nogo\" class=\"shut\" title=\"\u5173\u95ed\"></a>","<span class=\"headpichold\">","<a href=\"http://www."+XN.env.domain+"/profile.do?ref=peoplebar&id="+list[0].id+"\" title=\"\u67e5\u770b"+list[0].name+"\u7684\u4e2a\u4eba\u4e3b\u9875\" target=\"_blank\">","<img src=\""+list[0].head+"\" onload=\"roundify(this)\"/>","</a>","</span>","<span>","<a href=\"http://www."+XN.env.domain+"/profile.do?ref=peoplebar&id="+list[0].id+"\" class=\"name\" target=\"_blank\">"+list[0].name+"</a>","<p><a href=\"#nogo\" onclick=\"showRequestFriendDialog('"+list[0].id+"','"+list[0].name+"','"+list[0].head+"','','sg_peoplebar');return false;\" class=\"addfriend_action\"> \u52a0\u4e3a\u597d\u53cb</a></p>","</span>"].join("");
_c37.firstChild.onclick=this.replaceFriend;
list.splice(0,1);
return _c37;
},replaceFriend:function(e){
e=e||window.event;
var obj=e.target||e.srcElement;
var node=obj.parentNode;
var _c3b=GuidBar.getFriend();
if(_c3b){
node.parentNode.replaceChild(_c3b,node);
}else{
$(node).remove();
}
return false;
}};
(function(ns){
ns.imgsChecker=function(_c3d,_c3e){
this.imgArry=_c3d;
this.filter=_c3e;
if(isUndefined(this.filter.logoWidth)){
this.filter.logoWidth=88;
}
if(isUndefined(this.filter.logoHeight)){
this.filter.logoHeight=31;
}
if(!this.filter.abortSec){
this.filter.abortSec=3;
}
if(!this.filter.maxCheckCount){
this.filter.maxCheckCount=30;
}
this.init();
};
ns.imgsChecker.prototype={init:function(){
var This=this;
this.result=[];
this.count=0;
this.stopFlag=false;
var _c40=Math.min(This.filter.maxCheckCount,This.imgArry.length);
for(var i=0,j=_c40;i<j;i++){
(function(_c43){
var img=new Image();
img.src=This.imgArry[_c43]+"?t="+Math.random();
img.loadedTag=false;
var _c45=setTimeout(function(){
if(This.count==This.filter.limitImgs||_c43==_c40-1){
if(!This.stopFlag){
This.fireEvent("checkOver");
}
This.stopFlag=true;
return This.result;
}
},This.filter.abortSec*1000);
img.onload=function(){
img.loadedTag=true;
clearTimeout(_c45);
if(This.stopFlag){
return;
}
if(This.doFilter(this)){
This.fireEvent("checkOne",this);
This.result.push(this);
}
if(This.count==This.filter.limitImgs||_c43==_c40-1){
This.fireEvent("checkOver");
This.stopFlag=true;
return This.result;
}
};
img.onerror=function(){
This.imgArry.splice(_c43,1);
if(This.count==This.filter.limitImgs||_c43==This.imgArry.length){
if(!This.stopFlag){
This.fireEvent("checkOver");
}
This.stopFlag=true;
return This.result;
}
};
})(i);
}
},doFilter:function(img){
if(img.width==this.logoWidth||img.height==this.logoHeight){
this.count++;
return true;
}
if(img.width<this.filter.minWidth||img.height<this.filter.minHeight){
return false;
}
var _c47=img.width/img.height;
var _c48=img.height/img.width;
if(_c47>this.filter.maxRatioWH||_c48>this.filter.maxRatioHW){
return false;
}
this.count++;
return true;
}};
XN.event.enableCustomEvent(ns.imgsChecker.prototype);
})(XN.widgets);
XN.Bubble=function(conf){
$extend(this,conf);
this.init();
};
XN.Bubble.prototype={bs:[],init:function(){
this.getUIRef();
this.bindEvent();
},getUIRef:function(){
this.timer=null;
this.elem=$(this.IDContainer);
this.nList=$(this.elem).getElementsByTagName("section")[0];
},bindEvent:function(){
var This=this;
this.elem.addEvent("click",function(e){
e=e||window.event;
var obj=e.srcElement||e.target;
if(obj.tagName.toLowerCase()=="a"&&obj.className.indexOf("x-to-hide")>=0){
$(obj.parentNode.parentNode).remove();
if(!XN.string.trim(This.nList.innerHTML)){
This.hide();
}
}
});
this.elem.addEvent("mouseover",function(e){
This.delTimer();
});
this.elem.addEvent("mouseout",function(e){
This.startTimer();
});
this.addEvent("view_after_hide",function(){
This.clearBs();
});
this.addEvent("bubble_bs_unshifted",function(){
This.showNtfs();
This.show();
This.startTimer();
});
},unshiftBs:function(n){
this.bs.unshift(n);
this.fireEvent("bubble_bs_unshifted",n);
},clearBs:function(){
this.bs.length=0;
},showNtfs:function(){
this.nList.innerHTML=this.makeNtfs();
},show:function(){
this.elem.show();
},hide:function(){
this.elem.hide();
this.fireEvent("view_after_hide");
},makeNtfs:function(){
var html=[];
XN.array.each(this.bs,function(i,_c52){
html.push(_c52.content);
});
return html.join("");
},startTimer:function(fn){
var This=this;
this.delTimer();
this.timer=setTimeout(function(){
This.hide();
},6000);
},delTimer:function(){
if(this.timer){
clearTimeout(this.timer);
}
},setNotify:function(n){
this.unshiftBs(n);
}};
XN.event.enableCustomEvent(XN.Bubble.prototype);
XN.dom.ready(function(){
var b=$("system-notification-box");
if(!b){
return;
}
window.xn_bubble=new XN.Bubble({IDContainer:"system-notification-box"});
});
XN.pagerChannelIsOk=function(_c57){
try{
if(!XN.disableWebpager){
var _c58=XN.getFileVersionNum("http://s.xnimg.cn/jspro/xn.app.webpager.js");
if(_c58){
_c58=_c58.version;
}else{
_c58="a0";
}
var _c59=_c57.wpVersion;
var _c5a=parseInt(_c58.substring(1));
var _c5b=parseInt(_c59.substring(1));
if(_c59&&_c5b>_c5a){
XN.loadFile("http://s.xnimg.cn/"+_c57.wpVersion+"/jspro/xn.app.webpager.js");
}else{
XN.loadFile("http://s.xnimg.cn/jspro/xn.app.webpager.js");
}
}
}
catch(e){
}
};
if(/\((iPhone|iPad|iPod)/i.test(navigator.userAgent)){
XN.disableWebpager=true;
}
XN.dom.ready(function(){
if(!$("navSearchInput")){
return;
}
var fix=null;
function showTip(){
if(XN.form.help("navSearchInput").getRealValue()!==""){
return;
}
if(!fix){
fix=new XN.ui.fixPositionElement({alignWith:"navSearchInput",tagName:"div"});
fix.hide();
fix.setContent("&nbsp;\u591a\u4e2a\u5173\u952e\u5b57\u7528\u7a7a\u683c\u9694\u5f00&nbsp;<br />&nbsp;\uff08\u4f8b\uff1a\u6c6a\u6d0b \u5317\u4eac\u5927\u5b66\uff09&nbsp;");
fix.container.style.cssText="width:"+($("navSearchInput").offsetWidth-2)+"px;padding:3px 0;background:#EEE;border:1px solid #BDC7D8;opacity:0.8;text-align:center;";
}
fix.show();
}
XN.event.addEvent("navSearchInput","focus",showTip);
XN.event.addEvent("navSearchInput","blur",function(){
if(fix){
setTimeout(function(){
fix.hide();
},100);
}
});
XN.event.addEvent("navSearchInput","keydown",function(){
if(fix){
fix.hide();
}
});
});
XN.dom.ready(function(){
if(!$("navSearchInput")){
return;
}
new XN.ui.navSearchBar({input:"navSearchInput",submit:$("navSearchSubmit"),form:$("globalSearchForm"),params:{page:true},tip:"\u627e\u4eba\u3001\u516c\u5171\u4e3b\u9875\u3001\u6e38\u620f"});
return;
if(!$("searchMenuAction")){
return;
}
new XN.ui.menu({bar:"searchMenuAction",menu:"searchdropdownMenu",fireOn:"mouseover",offsetX:1});
});
XN.dom.ready(function(){
window.AppsDropMenu.dropInit();
});
XN.dom.ready(function(){
if(!$("profileDropMenu")){
return;
}
var menu=new XN.ui.menu({bar:"profileDropMenu",menu:"profileMenu",offsetX:$("showProfileMenu").realLeft()-$("profileDropMenu").realLeft(),offsetY:($("showProfileMenu").realTop()+$(Sizzle("#navBar .nav-body")[0]).offsetHeight)-($("profileDropMenu").realTop()+35),fireOn:"mouseover"});
menu.onShow=function(){
$("showProfileMenu").addClass("hover");
$("profileDropMenu").addClass("drop-menu-btn-hover");
};
menu.onHide=function(){
$("showProfileMenu").delClass("hover");
$("profileDropMenu").delClass("drop-menu-btn-hover");
};
});
XN.dom.ready(function(){
if(!$("friendDropMenu")){
return;
}
var menu=new XN.ui.menu({bar:"friendDropMenu",menu:"friendMenu",offsetX:$("showFriendMenu").realLeft()-$("friendDropMenu").realLeft(),offsetY:($("showFriendMenu").realTop()+$(Sizzle("#navBar .nav-body")[0]).offsetHeight)-($("friendDropMenu").realTop()+35),fireOn:"mouseover"});
menu.onShow=function(){
$("showFriendMenu").addClass("hover");
$("friendDropMenu").addClass("drop-menu-btn-hover");
};
menu.onHide=function(){
$("showFriendMenu").delClass("hover");
$("friendDropMenu").delClass("drop-menu-btn-hover");
};
});
XN.dom.ready(function(){
if(!$("showNewNav")){
return;
}
var btns=Sizzle(".drop-menu-btn",$("navBar"));
if(btns.length==0){
return;
}
for(var i=0;i<btns.length;i++){
$(btns[i]).addEvent("click",function(e){
e.preventDefault();
});
}
});
XN.dom.ready(function(){
if(!$("optionMenuActive")){
return;
}
new XN.UI.menu({bar:"optionMenuActive",menu:"optiondropdownMenu",fireOn:"mouseover"});
});
XN.dom.ready(function(){
if(!$("accountMenu")){
return;
}
var _c62=null;
var _c63=20;
$("accountMenu").addEvent("mouseover",function(){
if($("otherAccount").innerHTML!=""){
return;
}
new XN.NET.xmlhttp({url:"http://www.renren.com/getOtherAccounts",method:"get",onSuccess:function(_c64){
var r=XN.JSON.parse(_c64.responseText),_c66=r.otherAccounts,_c67=(_c66!=null&&_c66.length!=0),_c68=(_c66!=null?_c66.length:0),_c69=getSiteName(r);
var _c6a=_c68==1;
$("otherAccount").innerHTML=["<div class=\"account-detail clearfix\">","<a href=\"javascript:;\" class=\"figure\" style=\"cursor:default\">","<img src=\"",r.self_head,"\" />","</a>","<div class=\"detail\">","<p class=\"name\" title=\"",r.self_name,"\">",r.self_name,"</p>","<p class=\"grade\">",r.self_level,"\u7ea7</p>","<p class=\"friends\">",_c69,"</p>","</div>","</div>","<div class=\"action\"",_c67?"":" style=\"display:none;\"",">","<a href=\"javascript:;\" class=\"switch\" ",(_c6a?" style=\"padding: 0px 12px\"":""),">",(_c6a?"\u5207\u6362\u81f3"+getSiteName(_c66[0]):"\u5207\u6362\u8eab\u4efd"),"</a>","</div>"].join("");
$("otherAccount").style.display="block";
var _c6b=$(Sizzle("#accountDropDownMenu a.switch")[0]);
if(window.asyncHTMLManager){
_c6b.addEvent=function(type,_c6d,_c6e){
window.asyncHTMLManager.dom.Element.prototype.addEvent.call(_c6b,type,_c6d,_c6e);
};
}
_c6b.addEvent("click",function(){
if(_c68>1){
_c62=XN.DO.alert({title:"\u5207\u6362\u8eab\u4efd",msg:["<div id=\"switchAccountPopup\" class=\"switch-account-popup clearfix\">","<div id=\"multiSwitchTip\" class=\"switch-tip\">","\u4f60\u53ef\u4ee5\u901a\u8fc7\u201c\u5207\u6362\u8eab\u4efd\u201d\uff0c\u4ee5\u516c\u5171\u4e3b\u9875\u7684\u8eab\u4efd\u52a0\u597d\u53cb\u3001\u56de\u8e29\u7c89\u4e1d\u3001\u4e0e\u5176\u4ed6\u4e3b\u9875\u4e92\u52a8\u3002","</div>","<div class=\"accounts-list-wrapper\">","<div id=\"anotherAccount\">",generateAccountsListHtml(0,_c68>_c63?_c63:_c68),"</div>","</div>","<div id=\"pagerWrapper\" class=\"accounts-pager\"><ol id=\"accountsPager\" class=\"pagerpro\"></ol></div>","</div>"].join(""),noPadding:true,button:"\u53d6\u6d88",Y:60,showCloseButton:true});
_c62.container.className="other-accounts-alert";
window.scrollTo(0,0);
if(_c68>_c63){
XN.loadFile("http://s.xnimg.cn/jspro/xn.ui.pager.js",function(){
var _c6f=new XN.ui.pager({showCount:5,container:$("accountsPager")});
_c6f.setPageCount(parseInt((_c68-1)/_c63+1));
_c6f.setCurrentPage(1);
_c6f.addEvent("pageChange",function(num){
$("anotherAccount").innerHTML=generateAccountsListHtml((num-1)*_c63,num*_c63);
window.scrollTo(0,0);
$("anotherAccount").scrollTop=0;
});
});
}else{
if(_c68<=4){
$("anotherAccount").style.height="auto";
$("anotherAccount").style.overflow="hidden";
}else{
$("pagerWrapper").hide();
}
}
}else{
if(_c68==1){
handleSwitchButtonClick(_c66[0].head,_c66[0].name,_c66[0].id,getSiteName(_c66[0]),true);
}
}
});
function generateAccountsListHtml(_c71,end){
var _c73=[];
for(var i=_c71;i<end;i++){
var _c75=_c66[i];
if(_c75==undefined){
break;
}
_c73=_c73.concat(["<div class=\"account-detail clearfix accounts-list\" style=\"",(i==_c71?"":"border-top:1px solid #CCCCCC;"),"\">","<a href=\"","http://www.renren.com/profile.do?id=",_c75.transId,"\" class=\"figure\">","<img src=\"",_c75.head,"\" />","</a>","<div class=\"detail\" style=\"float:left;width:auto;height:50px;line-height:50px;\">","<p class=\"name\" title=\"",_c75.name,"\">",cutShort(_c75.name),"</p>","<p class=\"grade\"></p>","</div>","<div class=\"operate\">","<input class=\"input-submit\" type=\"button\" value=\"\u53d8\u8eab\" ","onclick=\"handleSwitchButtonClick('",_c75.head,"','",cutShort(_c75.name),"','",_c75.id,"','",getSiteName(_c75),"','",false,"','",_c75.transId,"')\"/>","</div>","</div>"]);
}
return _c73.join("");
}
}});
});
function cutShort(name){
if(!name){
return name;
}
return name.length>10?name.substring(0,10)+"...":name;
}
function getSiteName(_c77){
var _c78="\u5e10\u53f7";
if(_c77.self_isPage=="true"||_c77.isPage=="true"){
_c78="\u516c\u5171\u4e3b\u9875";
}else{
if(_c77.self_domain){
if(_c77.self_domain=="kaixin.com"){
_c78="\u5f00\u5fc3\u5e10\u53f7";
}else{
if(_c77.self_domain=="renren.com"){
_c78="\u4eba\u4eba\u5e10\u53f7";
}
}
}else{
if(_c77.domain){
if(_c77.domain=="kaixin.com"){
_c78="\u5f00\u5fc3\u5e10\u53f7";
}else{
if(_c77.domain=="renren.com"){
_c78="\u4eba\u4eba\u5e10\u53f7";
}
}
}
}
}
return _c78;
}
window.handleSwitchButtonClick=function(head,name,_c7b,_c7c,_c7d,_c7e){
var _c7f=function(){
new XN.NET.xmlhttp({url:"http://www.renren.com/switchAccount",data:"origUrl="+encodeURIComponent(window.location.href)+"&destId="+_c7b,onSuccess:function(_c80){
if(_c62){
_c62.hide();
}
var r=XN.JSON.parse(_c80.responseText);
if(r.isJump){
window.location=r.url;
}else{
showUserInfoInputArea(head,name,_c7b,_c7c,r,_c7d);
}
}});
};
if(_c7c=="\u516c\u5171\u4e3b\u9875"){
new XN.NET.xmlhttp({url:"http://page.renren.com/api/pageState",method:"post",data:"pids="+_c7e,onSuccess:function(r){
var d=XN.JSON.parse(r.responseText);
if(d.code!=0){
XN.DO.showError("\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");
return;
}
if(d.data[_c7b]){
_c7f();
}else{
var d=XN.DO.confirm({message:"<span style=\"font-size:14px;\">\u4e0d\u80fd\u53d8\u8eab\u6210\u201c"+name+"\u201d\uff0c\u8bf7\u5148 <a href=\"http://page.renren.com/"+_c7e+"/admin/identify\">\u8ba4\u8bc1</a> \u6216 <a href=\"http://page.renren.com/"+_c7e+"/admin/rename\">\u66f4\u540d</a></span>",showCloseButton:true,type:"error",width:420});
d.getButton("\u786e\u5b9a").hide();
}
}});
}else{
_c7f();
}
};
function showUserInfoInputArea(head,name,_c86,_c87,res,_c89){
var _c8a=XN.DO.confirm({title:"\u5207\u6362\u8eab\u4efd",msg:["<div id=\"switchAccountPopup\" class=\"switch-account-popup clearfix\">","<div id=\"switchAccountError\" class=\"error-msg\" style=\"display:none\"></div>","<div class=\"account-info\">","<div class=\"account-detail clearfix\">","<a href=\"javascript:;\" class=\"figure\" style=\"cursor:default\">","<img src=\"",head,"\" />","</a>","<div class=\"detail\">","<p class=\"name\" style=\"width:60px;margin-top:16px;\" title=\"",name,"\">",name,"</p>","<p class=\"grade\"></p>","</div>","</div>","</div>","<div class=\"account-login\">","<p style=\"color:#5B5B5B;padding-left:17px;\">\u8bf7\u8f93\u5165",getSiteName(res),"\"",res.name,"\"\u5bf9\u5e94\u7684\u5bc6\u7801</p>","<div class=\"account\">","<span class=\"label\">\u5e10\u53f7:</span><span>",res.account,"</span>","</div>","<div class=\"password\">","<span class=\"label\">\u5bc6\u7801:</span><input type=\"password\" id=\"switchAccountPassword\" class=\"input-text\" />","</div>","<div id=\"verifycode\" class=\"verifycode\"",res.showIC?"":" style=\"display:none\"","><span class=\"label\">\u9a8c\u8bc1\u7801:</span><input id=\"switchVerifyCode\" type=\"text\" class=\"input-text\" name=\"ick\" /></div>","<div id=\"verifycode-image\" class=\"verifycode-image\"",res.showIC?"":" style=\"display:none\"","><img id=\"loginVerifyPic\" src=\"http://icode.renren.com/getcode.do?rk=300&t=LOGIN&rnd=",Math.random(),"\" /> <a href=\"javascript:;\" onclick=\"changeIC();return false;\">\u6362\u4e00\u4e2a</a></div>","</div>","</div>"].join(""),no:_c89?"\u53d6\u6d88":"\u8fd4\u56de",showCloseButton:true,callback:function(r){
if(!r){
if(_c62){
_c62.show();
}
return;
}
this.preventHide();
new XN.NET.xmlhttp({url:"http://www.renren.com/verifypwd/checkPwd",data:"ick="+$("switchVerifyCode").value+"&pwd="+$("switchAccountPassword").value+"&origUrl="+encodeURIComponent(window.location.href)+"&destId="+_c86+"&showIC="+($("verifycode-image").style.display!="none"),onSuccess:function(_c8c){
var r=XN.JSON.parse(_c8c.responseText);
if(r.status=="fail"){
$("switchAccountError").innerHTML=r.msg;
$("switchAccountError").style.display="block";
Sizzle(".account-login .verifycode")[0].style.display="block";
Sizzle(".account-login .verifycode-image")[0].style.display="block";
changeIC();
}else{
if(r.status=="ok"){
window.location=r.msg;
}
}
}});
}});
_c8a.container.className="account-login-alert";
}
window.changeIC=function(){
$("loginVerifyPic").src="http://icode.renren.com/getcode.do?rk=300&t=LOGIN&rnd="+Math.random();
};
new XN.ui.menu({bar:"accountMenu",menu:"accountDropDownMenu",fireOn:"mouseover",alignType:"3-2"}).onShow=function(){
if($("accountMenuTip")){
$("accountMenuTip").hide();
new XN.NET.xmlhttp({url:"http://www."+XN.env.domain+"/closeShowNewHeaderTip"});
}
};
});
XN.dom.ready(function(){
if(!$("accountMenu")||!$("isShowNewHeaderTip")){
return;
}
var tip=$element("div");
tip.id="accountMenuTip";
tip.innerHTML=["<div class=\"clearfix\" style=\"border:1px solid #FF9900;background:#FFFCC3;color:#5B5B5B;width:170px;height:30px;padding:8px 3px 8px 8px;overflow:hidden;\">","<a href=\"javascript:;\" class=\"x-to-hide\" style=\"float:right;\"></a>","<div style=\"_line-height:normal!important;\"><span style=\"color:#f00;\">\u65b0\u529f\u80fd\uff1a</span>\u70b9\u51fb\u201c\u5207\u6362\u5e10\u53f7\u201d\uff0c\u5728\u4eba\u4eba\u4e0e\u5f00\u5fc3\u5e10\u53f7\u95f4\u5207\u6362</div>","</div>","<div style=\"background:url(http://a.xnimg.cn/imgpro/arrow/tip-arrow-up.png) 0 0 no-repeat;width:11px;height:6px;margin-top:-53px;margin-left:155px;_position:relative;\"></div>"].join("");
$(Sizzle("a.x-to-hide",tip)[0]).addEvent("click",function(){
tip.hide();
new XN.NET.xmlhttp({url:"http://www."+XN.env.domain+"/closeShowNewHeaderTip"});
});
new XN.ui.fixPositionElement({id:tip,alignWith:"accountMenu",alignType:"3-2",offsetY:3});
});
XN.dom.ready(function(){
if(!$("moreWeb")){
return;
}
new XN.UI.menu({bar:"moreWeb",menu:"moredownWeb",fireOn:"click",alignType:"3-2",offsetX:1});
});
object.define("xn.mention","dom",function(_c8f,_c90,_c91){
var dom=_c8f("dom");
var _c93=function(obj,item,cb){
if(obj.mentionInited){
return;
}
obj.mentionInited=true;
_c8f.async("xn/mentionMain",function(_c97){
_c97.Mention.init({obj:item.obj,ugcId:item.ugcId||"",ugcType:item.ugcType||"",ownerId:item.ownerId||"",scrollable:item.scrollable||false,popTop:item.popTop||false,whisper:item.whisper||true,button:item.button||null,limit:item.limit||10,recentLimit:item.recentLimit||6});
if(cb){
cb();
}
});
};
var _c98=function(obj,e){
if(e){
XN.event.stop(e);
}
dom.wrap(obj);
if(XN.browser.WebKit){
obj.focus();
obj.blur();
}
obj.focusToPosition(obj.get("selectionStart"));
var _c9b=function(){
var _c9c="@",_c9d=XN.form.help(obj).getRealValue();
var cpos=obj.get("selectionStart");
if(_c9d.slice(cpos-1,cpos)=="@"){
_c9c="";
}
obj.value=_c9d.slice(0,cpos)+_c9c+_c9d.slice(cpos);
obj.focusToPosition(cpos+_c9c.length);
obj.mention.check();
};
if(XN.browser.IE){
setTimeout(_c9b,0);
}else{
_c9b();
}
};
this.Mention={init:function(list){
for(var i=0;i<list.length;i++){
(function(item){
var obj=item.obj;
if(obj.mention){
return;
}
obj=$(obj);
obj.addEvent("focus",function(){
_c93(obj,item);
});
if(item.button){
XN.event.addEvent(item.button,"click",function(e){
if(obj.mention){
_c98(obj,e);
}else{
_c93(obj,item,function(){
_c98(obj,e);
});
}
});
}
})(list[i]);
}
}};
});
object.use("xn.mention",function(xn){
window.Mention=xn.mention.Mention;
});
object.add("xn.appsDropMenu","dom, events, ua",function(_ca5,dom,_ca7,ua){
var _ca9=XN.element.hasClassName;
var _caa=XN.element.addClass;
var _cab=XN.element.delClass;
var _cac=XN.element.realLeft;
var _cad=XN.element.realTop;
var _cae=6;
var _caf=32;
var _cb0=12;
var _cb1=1;
var _cb2=0;
var _cb3=null;
var _cb4=false;
var _cb5=[];
var _cb6=0;
var _cb7=null;
this.dropInit=function(){
this.oAppDropMenu=$("appDropMenu");
this.oAppsWrap=$("appsMenuPro");
var that=this;
if(!this.oAppDropMenu||!this.oAppsWrap){
return;
}
this.oAppDropMenu.addEvent("mouseover",function(e){
if(window.appsMenuHideTimer){
clearTimeout(window.appsMenuHideTimer);
window.appsMenuHideTimer=null;
}
window.appsMenuShowTimer=setTimeout(function(){
showAppsMenu(e);
},200);
},false);
this.oAppDropMenu.addEvent("mouseleave",function(e){
if(window.appsMenuHideTimer){
clearTimeout(window.appsMenuHideTimer);
window.appsMenuHideTimer=null;
}
if(window.appsMenuShowTimer){
clearTimeout(window.appsMenuShowTimer);
window.appsMenuShowTimer=null;
}
if(XN.browser.IE){
if(this.contains(e.toElement)){
return;
}
}
hideAppsMenu(e);
});
this.oAppsWrap.addEvent("mouseover",function(e){
if(window.appsMenuHideTimer){
clearTimeout(window.appsMenuHideTimer);
window.appsMenuHideTimer=null;
}
},false);
this.oAppsWrap.addEvent("mouseout",function(e){
if(XN.browser.IE){
if(this.contains(e.toElement)){
return;
}
}
hideAppsMenu(e);
},false);
function showAppsMenu(e){
var oNav=Sizzle(".navigation-wrapper",$("navBar"))[0];
if(that.oAppsWrap.children.length==0&&!window.AppsDropMenu._loaded){
window.AppsDropMenu._loaded=true;
new XN.net.xmlhttp({url:"http://apps.renren.com/menu/getNavHtml",method:"get",onSuccess:function(r){
that.oAppsWrap.innerHTML=r.responseText;
that.oAppsWrap.style.left=$("logo2").offsetWidth+"px";
that.oAppsWrap.style.top=oNav.offsetHeight+XN.element.realTop(oNav)+"px";
that.init();
},onError:function(r){
XN.DO.showError("\u8bf7\u6c42\u5e94\u7528\u5217\u8868\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5...");
window.AppsDropMenu._loaded=false;
}});
}else{
that.oAppsWrap.style.left=$("logo2").offsetWidth+"px";
that.oAppsWrap.style.top=oNav.offsetHeight+XN.element.realTop(oNav)+"px";
}
if(window.appsMenuShowTimer){
clearTimeout(window.appsMenuShowTimer);
window.appsMenuShowTimer=null;
}
}
function hideAppsMenu(e){
window.appsMenuHideTimer=setTimeout(function(){
$("appsMenuPro").style.left="-9999px";
$("appsMenuPro").style.top="-9999px";
},200);
}
};
this.init=function(){
this.oMyAppsWrap=Sizzle(".my-fav-apps",this.oAppsWrap)[0];
this.oOtherAppsWrap=Sizzle(".other-apps",this.oAppsWrap)[0];
this.oAppItems=Sizzle("li.app-item",this.oAppsWrap);
if(window.asyncHTMLManager){
var that=this;
this.oAppsWrap.addEvent=function(type,_cc4,_cc5){
window.asyncHTMLManager.dom.Element.prototype.addEvent.call(that.oAppsWrap,type,_cc4,_cc5);
};
}
this._bindEvents();
this.pageCtrl(1);
};
this._bindEvents=function(){
var that=this;
this.oAppsWrap.addEvent("click",function(e){
var _cc8=XN.event.element(e);
var _cc9=_cc8.nodeName.toLowerCase();
if(_cc9=="em"){
e.preventDefault();
that.manageFavApp(_cc8);
}
if(_cc9=="a"&&that.getParent(_cc8,"div.page-ctrl")){
e.preventDefault();
if(_ca9(_cc8,"page-pre")){
if(_cb1>1&&!_ca9(_cc8,"disable")){
that.pageCtrl(_cb1-1);
}
}else{
if(_ca9(_cc8,"page-next")){
if(_cb1<3&&!_ca9(_cc8,"disable")){
that.pageCtrl(_cb1+1);
}
}else{
if(_ca9(_cc8,"page-1")){
if(_cb1!=1){
that.pageCtrl(1);
}
}else{
if(_ca9(_cc8,"page-2")){
if(_cb1!=2){
that.pageCtrl(2);
}
}else{
if(_ca9(_cc8,"page-3")){
if(_cb1!=3){
that.pageCtrl(3);
}
}
}
}
}
}
}
},false);
this.oAppsWrap.delegate("li.app-item-dragging","mouseout",function(e){
if(!_cb4){
return;
}
var _ccb=that.getParent(XN.event.element(e),"li");
if(_cb4&&_ccb==_cb3){
that.resetDraggingItemPos(e);
}
},false);
this.oAppsWrap.delegate("li.app-item a","mousedown",function(e){
e.preventDefault();
that.dragStart(e);
},false);
$(document.body).addEvent("mousemove",function(e){
that.dragProcess(e);
},false);
this.oAppsWrap.addEvent("mouseup",function(e){
that.dragEnd(e);
},false);
$(document.body).addEvent("click",function(e){
var _cd0=XN.event.element(e);
var _cd1=that.getParent(_cd0,"li");
_cb6==0;
if(_cd1&&_cd1.getAttribute("data-dragging")){
e.preventDefault();
_cd1.removeAttribute("data-dragging");
}
},false);
if(ua.ua.ie==6){
this.oAppsWrap.delegate("li.app-item a","mouseover",function(e){
var _cd3=XN.event.element(e);
Sizzle("em",this)[0].style.display="block";
if(_cd3.nodeName.toLowerCase()=="em"){
if(that.oMyAppsWrap.contains(_cd3)){
_cd3.style.backgroundPosition="-19px -19px";
}else{
_cd3.style.backgroundPosition="0 -19px";
}
}
},false);
this.oAppsWrap.delegate("li.app-item a","mouseout",function(e){
var _cd5=XN.event.element(e);
if(_cd5.nodeName.toLowerCase()=="em"){
if(that.oMyAppsWrap.contains(_cd5)){
_cd5.style.backgroundPosition="-19px 0";
}else{
_cd5.style.backgroundPosition="0 0";
}
}
if(this.contains(e.toElement)){
return;
}else{
Sizzle("em",this)[0].style.display="none";
}
},false);
}
};
this.bindDragDropEvent=function(){
for(var i=0,len=this.oAppItems.length;i<len;i++){
this.oAppItems[i].ondragstart=function(e){
};
}
this.oMyAppsWrap.ondragenter=function(e){
};
this.oMyAppsWrap.ondragover=function(e){
};
$("dropHereTest").ondrop=function(e){
alert("fav drop");
};
};
this.manageFavApp=function(_cdc){
var _cdd=this.getParent(_cdc,"li");
if(_ca9(_cdc,"cancel-fav")){
this.cancelFav(_cdd);
}else{
if(_ca9(_cdc,"to-fav")){
this.fav(_cdd);
}
}
};
this.fav=function(_cde){
var _cdf=_cde.cloneNode(true);
var _ce0=this.oMyAppsWrap;
var _ce1=Sizzle("ul.apps-list",_ce0)[0];
var _ce2=Sizzle("li.app-item-empty",_ce0);
var _ce3=Sizzle("li[data-holder]",_ce0)[0];
var oBtn=Sizzle("em",_cdf)[0];
var oTip=Sizzle("h4",_ce0)[0];
var _ce6=Sizzle("li.app-item",_ce0).length;
var _ce7=[];
var _ce8=_cde.getAttribute("data-aid");
if(_ce6>=_cae){
var _ce9=Sizzle("li.app-item",_ce1)[_ce6-1];
var _cea=Sizzle("ul.apps-list",this.oOtherAppsWrap)[0];
var _ceb=Sizzle("em",_ce9)[0];
_ce9.style.display="";
_cea.insertBefore(_ce9,_cea.firstChild);
_ce9.setAttribute("data-faved","f");
_ceb.className="to-fav";
_ceb.setAttribute("title","\u7f6e\u9876");
}
if(_ce6>=3){
oTip.style.display="none";
}
oBtn.className="cancel-fav";
oBtn.setAttribute("title","\u53d6\u6d88\u7f6e\u9876");
if(this.cancelFavTimer){
this.clearCancelFavTimer();
}
_cdf.setAttribute("data-faved","t");
if(_ce3){
_ce1.replaceChild(_cdf,_ce3);
}else{
_ce1.insertBefore(_cdf,_ce1.firstChild);
if(_ce2[0]){
$(_ce2[0]).remove();
}
}
$(_cde).remove();
this.pageCtrl(_cb1);
_ce7="["+this.getFavOrder(_cdf).join(",")+"]";
_ce8=_cdf.getAttribute("data-aid");
new XN.net.xmlhttp({url:"http://apps.renren.com/menu/reorderBookmark.do",method:"post",data:"app_id="+_ce8+"&app_ids="+_ce7,onSuccess:function(r){
},onError:function(r){
}});
if(ua.ua.ie==6){
Sizzle("em",_cdf)[0].style.display="none";
Sizzle("em",_cdf)[0].style.backgroundPosition="-19px 0";
}
};
this.cancelFav=function(_cee){
var _cef=this.oMyAppsWrap;
var _cf0=Sizzle("ul.apps-list",_cef)[0];
var _cf1=this.oOtherAppsWrap;
var _cf2=Sizzle("ul.apps-list",_cf1)[0];
var _cf3=_cee.cloneNode(true);
var _cf4=parseInt(_cee.getAttribute("data-aid"));
var _cf5=parseInt(_cee.getAttribute("data-order"));
var oBtn=Sizzle("em",_cf3)[0];
var oTip=Sizzle("h4",_cef)[0];
var _cf8=Sizzle("li.app-item",_cef).length;
var apps=Sizzle("li.app-item",_cf1);
var _cfa=apps.length;
var _cfb=1;
var _cfc=_cfa;
if(this.cancelFavTimer){
this.clearCancelFavTimer();
}
oBtn.className="to-fav";
oBtn.setAttribute("title","\u7f6e\u9876");
_cf3.setAttribute("data-faved","f");
for(var i=0,len=apps.length;i<len;i++){
if(_cf5<parseInt(apps[i].getAttribute("data-order"))){
_cfc=i;
break;
}
}
_cfb=Math.ceil((_cfc+1)/12);
if(_cfc<_cfa){
_cf2.insertBefore(_cf3,apps[_cfc]);
}else{
_cf2.appendChild(_cf3);
}
this.pageCtrl(_cb1);
_cee.innerHTML="<span class=\"app-holder place-tip\">\u7b2c"+_cfb+"\u9875\u53ef\u627e\u5230</span>";
_cee.className="app-item-empty";
_cee.removeAttribute("data-order");
_cee.removeAttribute("data-aid");
this.cancelFavTimer=setTimeout(function(){
_cee.innerHTML="<span class=\"app-holder\">\u62d6\u5165</span>";
_cf0.appendChild(_cee);
if(_cf8<=4){
oTip.style.display="";
}
if(this.cancelFavTimer){
this.cancelFavTimer=null;
}
},2000);
new XN.net.xmlhttp({url:"http://apps.renren.com/menu/removeBookmark.do",method:"post",data:"app_id="+_cf4,onSuccess:function(r){
},onError:function(r){
}});
if(ua.ua.ie==6){
Sizzle("em",_cf3)[0].style.display="none";
Sizzle("em",_cf3)[0].style.backgroundPosition="0 0";
}
};
this.dragStart=function(e){
var _d02=XN.event.element(e);
var _d03=this.getParent(_d02,"li");
if(!_d03){
return;
}
if(_d02.nodeName.toLowerCase()=="em"&&_d03){
return;
}
if(_cb5.length==0){
this.getFavItemsPos();
}
_cb4=true;
_cb3=_d03;
};
this.dragProcess=function(e){
if(!_cb4||!_cb3){
return;
}
var _d05=XN.event.element(e);
var _d06=this.getParent(_d05,"li");
if(!_d06&&!_cb3){
return;
}
if(_cb6==0){
_cb6=1;
return;
}
if(!_cb3.getAttribute("data-dragging")){
_cb3=_d06.cloneNode(true);
var _d07;
if(_cb3.getAttribute("data-faved")=="t"){
_d07=document.createElement("li");
_d07.className="app-item-empty";
_d07.innerHTML="<span class=\"app-holder\">\u62d6\u5165</span>";
_d07.setAttribute("data-holder","t");
_d06.parentNode.replaceChild(_d07,_d06);
}else{
_d07=_d06.cloneNode(true);
_d07.setAttribute("data-holder","t");
_caa(_d07,"holder-alpha");
_d06.parentNode.replaceChild(_d07,_d06);
}
this.oAppsWrap.appendChild(_cb3);
_cb3.style.position="absolute";
_cb3.style.left=(XN.element.realLeft(_d07)-XN.element.realLeft(this.oAppsWrap))+"px";
_cb3.style.top=(XN.element.realTop(_d07)-XN.element.realTop(this.oAppsWrap))+"px";
_cb3.className="app-item-dragging";
_cb3.setAttribute("data-dragging","t");
}else{
this.resetDraggingItemPos(e);
if(this.isInFavBox(e)){
if(this.cancelFavTimer){
this.clearCancelFavTimer();
}
var _d08=this.getFavToIndex(_cb3);
this.addFavAppHolder(_d08);
}
}
};
this.dragEnd=function(e){
_cb4=false;
if(!_cb3||_cb3.getAttribute("data-dragging")!="t"){
return;
}
var aid=_cb3.getAttribute("data-aid");
var _d0b;
var _d0c=_cb3.getAttribute("data-faved");
var _d0d=Sizzle("ul.apps-list",this.oMyAppsWrap)[0];
var _d0e=Sizzle("li.app-item",_d0d);
var oTip=Sizzle("h4",this.oMyAppsWrap)[0];
var _d10=Sizzle("li.app-item",_d0d).length;
if(this.isInFavBox(e)){
if(_d0c=="f"){
_d0b=Sizzle("li[data-holder=t]",this.oOtherAppsWrap)[0];
_cab(_d0b,"holder-alpha");
_d0b.removeAttribute("data-holder");
this.fav(_d0b);
_cb3.remove();
}else{
_d0b=Sizzle("li[data-holder=t]",_d0d)[0];
_d0d.replaceChild(_cb3,_d0b);
_cb3.style.cssText="";
_cb3.className="app-item";
_cb3.removeAttribute("data-dragging");
if(_d10<3){
oTip.style.display="";
}else{
oTip.style.display="none";
}
var _d11="["+this.getFavOrder().join(",")+"]";
new XN.net.xmlhttp({url:"http://apps.renren.com/menu/reorderBookmark.do",method:"post",data:"app_ids="+_d11,onSuccess:function(r){
},onError:function(r){
}});
}
}else{
if(_d0c=="f"){
_d0b=Sizzle("li[data-aid="+aid+"]",this.oAppsWrap)[0];
oFavHolder=Sizzle("li[data-holder]",this.oMyAppsWrap)[0];
if(_d0e.length==_cae){
_d0e[5].style.display="";
if(oFavHolder){
oFavHolder.remove();
}
}else{
if(oFavHolder){
_d0d.appendChild(oFavHolder);
oFavHolder.removeAttribute("data-holder");
}
}
_cab(_d0b,"holder-alpha");
_d0b.removeAttribute("data-holder");
$(_cb3).remove();
}else{
_d0b=Sizzle("li[data-holder=t]",_d0d)[0];
_d0b.parentNode.replaceChild(_cb3,_d0b);
_cb3.style.cssText="";
_cb3.className="app-item";
_cb3.removeAttribute("data-dragging");
this.cancelFav(_cb3);
}
}
_cb3=null;
};
this.getFavItemsPos=function(){
};
this.getParent=function(ele,_d15){
var _d16=$(ele);
var _d17=XN.element.matchesSelector;
while(!_d17(_d16,_d15)){
if(_d16.nodeName.toLowerCase()=="body"){
return null;
}
_d16=$(_d16.parentNode);
}
return _d16;
};
this.isInFavBox=function(e){
var _d19=this.oMyAppsWrap;
var x=XN.event.pointerX(e)||e.page.x;
var y=XN.event.pointerY(e)||e.page.y;
var _d1c={left:XN.element.realLeft(_d19),top:XN.element.realTop(_d19),right:XN.element.realLeft(_d19)+_d19.offsetWidth,bottom:XN.element.realTop(_d19)+_d19.offsetHeight};
if(x>_d1c.left&&x<_d1c.right&&y>_d1c.top&&y<_d1c.bottom){
return true;
}else{
return false;
}
};
this.getFavItemsPos=function(){
var _d1d=Sizzle("li",this.oMyAppsWrap);
var _d1e=_d1d[0].offsetWidth;
var _d1f=_d1d[0].offsetHeight;
for(var i=0,len=_d1d.length;i<len;i++){
var _d22={};
_d22.left=_cac(_d1d[i]);
_d22.top=_cad(_d1d[i]);
_d22.right=_cac(_d1d[i])+_d1e;
_d22.bottom=_cad(_d1d[i])+_d1f;
_cb5.push(_d22);
_d22=null;
}
};
this.getItemPos=function(_d23){
var pos={};
var _d25=_d23.offsetWidth;
var _d26=_d23.offsetHeight;
pos.left=_cac(_d23);
pos.top=_cad(_d23);
pos.right=_cac(_d23)+_d25;
pos.bottom=_cad(_d23)+_d26;
return pos;
};
this.getFavToIndex=function(_d27){
var _d28=this.getItemPos(_d27);
var _d29=_d27.getAttribute("data-faved");
var _d2a=Sizzle("li.app-item",this.oMyAppsWrap);
var _d2b=Sizzle("li",this.oMyAppsWrap);
var len=_cb5.length;
var _d2d=len-1;
var _d2e=10000;
for(var i=0;i<len;i++){
if(Math.abs(_d28.left-_cb5[i].left)<_d2e){
_d2e=Math.abs(_d28.left-_cb5[i].left);
_d2d=i;
}
}
if(_d2d>=_d2a.length){
_d2d=_d2a.length;
}
return _d2d;
};
this.addFavAppHolder=function(_d30){
var _d31=Sizzle("ul.apps-list",this.oMyAppsWrap)[0];
var _d32=Sizzle("li.app-item",_d31);
var _d33=Sizzle("li",_d31);
var _d34=Sizzle("li.app-item-empty[data-holder=t]",_d31)[0];
if(!_d34){
_d34=Sizzle("li.app-item-empty",_d31)[0];
}
if(_d34){
if(_d32[_d30]){
_d31.insertBefore(_d34,_d32[_d30]);
}else{
if(_d33[_d30+1]){
_d31.insertBefore(_d34,_d33[_d30+1]);
}else{
_d31.appendChild(_d34);
}
}
}else{
_d34=document.createElement("li");
_d34.innerHTML="<span class=\"app-holder\">\u62d6\u5165</span>";
_caa(_d34,"app-item-empty");
_d31.insertBefore(_d34,_d32[_d30]);
_d32[_cae-1].style.display="none";
}
_d34.setAttribute("data-holder","t");
};
this.removeFavAppHolder=function(_d35){
};
this.pageCtrl=function(num){
var box=Sizzle("ul.apps-list",this.oOtherAppsWrap)[0];
var oLis=Sizzle("li",box);
var _d39=Sizzle("div.page-ctrl",this.oAppsWrap)[0];
var _d3a=Sizzle("a.page-pre",_d39)[0];
var _d3b=Sizzle("a.page-next",_d39)[0];
var _d3c=Math.ceil(oLis.length/_cb0);
var _d3d=(_cb1-1)*_cb0;
var _d3e=_d3d+_cb0-1;
var _d3f=(num-1)*_cb0;
var _d40=_d3f+_cb0-1;
var _d41=box.cloneNode(true);
var _d42=$("appsRallWrap");
var _d43=null;
var _d44=3;
if(oLis.length==0){
this.pageSet(0);
return;
}else{
if(oLis.length==6){
this.pageSet(1);
return;
}else{
if(oLis.length==7){
this.pageSet(1);
return;
}
}
}
for(var i=0,len=oLis.length;i<len;i++){
oLis[i].style.display="none";
}
while(_d3f<=_d40&&oLis[_d3f]){
oLis[_d3f].style.display="";
_d3f++;
}
if(num<_cb1){
rull("right");
}else{
if(num>_cb1){
rull("left");
}
}
_cab(Sizzle("a.page-"+_cb1,_d39)[0],"act");
_caa(Sizzle("a.page-"+num,_d39)[0],"act");
if(num==1){
_caa(_d3a,"disable");
}else{
_cab(_d3a,"disable");
}
if(num==_d3c){
_caa(_d3b,"disable");
}else{
_cab(_d3b,"disable");
}
_cb1=num;
_d43=Sizzle("li.app-item",box);
_d44=Math.ceil(_d43.length/12);
if(_d44!=_cb2){
this.pageSet(_d44);
}
if(_cb1>_d44){
this.pageCtrl(_d44);
}
function rull(_d47){
if(window.dropAppsRullTmpTimer||window.dropAppsRullTimer){
clearTimeout(window.dropAppsRullTmpTimer);
clearTimeout(window.dropAppsRullTimer);
window.dropAppsRullTmpTimer=null;
window.dropAppsRullTimer=null;
}
var _d48=_d47=="left"?-397:397;
var _d49=_d47=="left"?-45:45;
var _d4a=25;
if(!_d42){
_d42=$element("div");
_d42.setAttribute("id","appsRallWrap");
_d42.style.display="none";
box.parentNode.appendChild(_d42);
}
_d42.innerHTML="";
_d42.appendChild(_d41);
_d42.style.display="";
_d41.style.marginLeft=_d49+"px";
var _d4b=window.dropAppsRullTmpTimer=setInterval(function(){
var left=_d41.style.marginLeft.split("px")[0];
if(Math.abs(parseInt(left)-_d48)>Math.abs(_d49)){
_d41.style.marginLeft=parseInt(left)+_d49+"px";
}else{
clearInterval(_d4b);
_d42.style.display="none";
_d42.innerHTML="";
_d41=null;
}
},_d4a);
box.style.marginLeft=(0-_d48)+"px";
var _d4d=window.dropAppsRullTimer=setInterval(function(){
var left=box.style.marginLeft.split("px")[0];
if(Math.abs(parseInt(left))>Math.abs(_d49)){
box.style.marginLeft=parseInt(left)+_d49+"px";
}else{
box.style.marginLeft="2px";
clearInterval(_d4d);
}
},_d4a);
}
};
this.pageSet=function(_d4f){
var _d50=Sizzle("div.page-ctrl",this.oAppsWrap)[0];
var _d51=Sizzle("a.page-1",_d50)[0];
var _d52=Sizzle("a.page-2",_d50)[0];
var _d53=Sizzle("a.page-3",_d50)[0];
var _d54=Sizzle("a.page-pre",_d50)[0];
var _d55=Sizzle("a.page-next",_d50)[0];
var _d56=Sizzle("p.apps-tips",this.oAppsWrap)[0];
var _d57=Sizzle("a.apps-center-btn",this.oAppsWrap)[0];
var _d58=Sizzle("li.app-item",this.oOtherAppsWrap).length;
switch(_d4f){
case 0:
_d50.style.display="none";
_d56.style.display="";
_d57.style.display="";
break;
case 1:
_d51.style.display="";
_d52.style.display="none";
_d53.style.display="none";
_caa(_d55,"disable");
_caa(_d54,"disable");
if(_d58<=6){
_d50.style.display="none";
_d57.style.display="";
_d56.style.display="";
}else{
_d50.style.display="";
_d57.style.display="none";
_d56.style.display="none";
}
break;
case 2:
_d51.style.display="";
_d52.style.display="";
_d53.style.display="none";
_d50.style.display="";
_d56.style.display="none";
_d57.style.display="none";
break;
case 3:
_d51.style.display="";
_d52.style.display="";
_d53.style.display="";
_d50.style.display="";
_d56.style.display="none";
_d57.style.display="none";
break;
}
_cb2=_d4f;
};
this.getItemPageIndex=function(_d59){
var apps=Sizzle("li.app-item",this.oOtherAppsWrap);
var _d5b=apps.length;
var _d5c=1;
var _d5d=_d5b;
_d5c=Math.ceil((_d5d+1)/12);
};
this.getFavOrder=function(){
var apps=Sizzle("li.app-item",this.oMyAppsWrap);
var _d5f=[];
for(var i=0,len=apps.length;i<len;i++){
_d5f.push(apps[i].getAttribute("data-aid"));
}
return _d5f;
};
this.resetDraggingItemPos=function(e){
var x=XN.event.pointerX(e)||e.page.x;
var y=XN.event.pointerY(e)||e.page.y;
_cb3.style.left=(x-XN.element.realLeft(this.oAppsWrap)-20)+"px";
_cb3.style.top=(y-XN.element.realTop(this.oAppsWrap)-20)+"px";
};
this.clearCancelFavTimer=function(){
var _d65=Sizzle("ul.apps-list",this.oMyAppsWrap)[0];
var _d66=Sizzle("li.app-item-empty",_d65);
if(this.cancelFavTimer){
_d66[0].innerHTML="<span class=\"app-holder\">\u62d6\u5165</span>";
_d66[0].removeAttribute("data-holder");
_d65.appendChild(_d66[0]);
clearTimeout(this.cancelFavTimer);
this.cancelFavTimer=null;
}
};
this.setDraggingItem=function(type){
if(!type||!_cb3){
return;
}
var tmpA=Sizzle("a",_cb3)[0];
Sizzle("em",_cb3)[0].style.display="none";
if(type=="add"){
tmpA.style.border="0";
tmpA.style.backgroundColor="inherit";
tmpA.style.boxShadow="none";
_cb3.setAttribute("data-dragging","t");
}
};
this.addHolder=function(_d69){
};
this.removeHolder=function(_d6a){
};
this.debug=function(con){
var o=$("debug");
o.value=con+"\n"+o.value;
};
});
object.use("xn.appsDropMenu",function(_d6d,xn){
window.AppsDropMenu=xn.appsDropMenu;
});
object.use("dom, ua, ua.extra, ua.flashdetect, ua.os",function(_d6f,dom,ua){
var strs=[];
var core=ua.ua.core;
var _d74=ua.ua.shell;
var _d75=ua.ua[core];
if(_d75){
strs.push(core+"="+_d75);
}
var _d76=ua.ua[_d74];
if(_d76){
strs.push(_d74+"="+_d76);
}
if(_d74!="ieshell"&&ua.ua.ieshell){
strs.push("ieshell="+ua.ua.ieshell);
}
var _d77=ua.flashdetect.getFlashVersion();
if(_d77){
strs.push("flash="+_d77);
}
var _d78=ua.os.oscore;
if(_d78!="unknown"){
strs.push("oscore="+_d78);
var _d79=ua.os[_d78];
if(_d79!="unknown"){
if(typeof _d79!="object"){
strs.push("os_ver="+_d79);
}else{
for(var prop in _d79){
strs.push("os_dist="+prop);
if(_d79[prop]!="unknown"){
strs.push("os_dist_ver="+_d79[prop]);
}
break;
}
}
}
}
if(ua.os.resolution){
strs.push("res_width="+ua.os.resolution.width);
strs.push("res_height="+ua.os.resolution.height);
}
if(ua.os.orientation!="unknown"){
strs.push("orientation="+ua.os.orientation);
}
XN.net.sendStats("http://s.renren.com/speedstats/browser/stats.php?"+strs.join("&"));
var desc,url,key=1;
var _d7e={"se360":"360\u5b89\u5168\u6d4f\u89c8\u5668","sogou":"\u641c\u72d7\u6d4f\u89c8\u5668","maxthon":"\u50b2\u6e38\u6d4f\u89c8\u5668","theworld":"\u4e16\u754c\u4e4b\u7a97\u6d4f\u89c8\u5668","qqbrowser":"QQ\u6d4f\u89c8\u5668","tt":"\u817e\u8bafTT\u6d4f\u89c8\u5668"};
var _d74=_d7e[ua.ua.shell]||"\u517c\u5bb9\u6d4f\u89c8\u5668";
if(ua.ua.ie>=6&&ua.ua.ie<7){
var now=new Date().getTime();
if(now>=1309503600000&&now<=1309514400000&&XN.cookie.get("fie")!=2){
key=2;
url="http://noie6.renren.com/";
desc="\u4eba\u4eba\u7f51\u6e29\u99a8\u63d0\u793a\uff1a\u4f18\u5316\u4e0a\u7f51\u4f53\u9a8c\uff0c\u4f53\u9a8c\u6781\u901f\u4e4b\u65c5 <a href=\"http://noie6.renren.com/down/360cse-promote\" style=\"text-decoration:none\"><img src=\"http://a.xnimg.cn/sites/noie6/res/browsers/360cse-icon.png\" style=\"vertical-align:text-bottom\" /> 360\u6781\u901f\u6d4f\u89c8\u5668</a>&nbsp;&nbsp;&nbsp;<a href=\"http://noie6.renren.com/down/sogou-promote\" style=\"text-decoration:none\"><img src=\"http://a.xnimg.cn/sites/noie6/res/browsers/sogou-icon.png\" style=\"vertical-align:text-bottom\" /> \u641c\u72d7\u9ad8\u901f\u6d4f\u89c8\u5668</a>";
}else{
if(!XN.cookie.get("fie")){
if(ua.ua.shell=="ieshell"){
url="http://noie6.renren.com/";
desc="\u81f4IE6\u7528\u6237\u7684\u4e00\u5c01\u4fe1";
}else{
url="http://dl.xnimg.cn/down/IE8-WindowsXP-x86-CHS.exe";
desc="\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u76ee\u524d\u4f7f\u7528\u7684\u662fIE6\u5185\u6838\u7684"+_d74+"\uff0c\u4e3a\u4e86\u7ed9\u60a8\u5e26\u6765\u66f4\u5feb\u901f\u3001\u66f4\u5b89\u5168\u3001\u66f4\u4f18\u8d28\u7684\u4f53\u9a8c\uff0c\u4eba\u4eba\u7f51\u5c06\u9010\u6b65\u964d\u4f4eIE6\u5185\u6838\u7684\u652f\u6301\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5c3d\u5feb<a href=\""+url+"\">\u5347\u7ea7\u60a8\u7684\u7cfb\u7edf\u6d4f\u89c8\u5668\u4e3aIE8</a>\uff0c\u8fd9\u4e0d\u4f1a\u5bf9\u60a8\u4f7f\u7528"+_d74+"\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002";
}
}
}
if(url&&desc){
dom.ready(function(){
var div=document.getElementById("ie6notice");
if(div){
div.innerHTML="<div style=\"position:relative;\"><div onclick=\"window.open('"+url+"');\" style=\"cursor:pointer;background:#FFFBC1;border-bottom:1px solid #F9B967;padding:5px;text-align:center;font-size:14px;\"><div style=\"width:965px;padding-right: 15px;\">"+desc+"</div></div><a href=\"#nogo\" onclick=\"XN.cookie.set('fie',"+key+",30,'/','renren.com');$('ie6notice').hide();return false;\" class=\"x-to-hide\" style=\"height:14px;width:14px;overflow:hidden;position:absolute;top:8px;right:10px;\" title=\"\u5173\u95ed\"></a></div>";
}
});
}
}
});
XN.dom.ready(function(){
XN.event.addEvent(document,"mouseover",function(e){
var _d82=$(XN.event.element(e||window.event));
if(!(_d82&&_d82.hasClassName&&_d82.hasClassName("share_new"))){
return false;
}
if(!window.XNShareObject){
setTimeout(function(){
XN.loadFile("http://s.xnimg.cn/jspro/xn.app.share.js",function(){
XNShareObject._register({autoRegister:false,floatMode:true});
XNShareObject.forceShowFloat(_d82);
});
},0);
}
});
});
XN.dom.ready(function(){
var _d83=window.CUR_DOMAIN_UPLOAD||"http://upload.renren.com",_d84=false;
function isInstalledActiveXObject(){
try{
upload4=new ActiveXObject("rralbum.Uploader.4");
return true;
}
catch(e){
try{
upload4=new ActiveXObject("xnalbum.Uploader.4");
return true;
}
catch(e){
return false;
}
}
}
function popup(e){
_d84=true;
var e=e||window.event,el=XN.event.element(e),_d87,_d88,_d89=false;
if(!el){
return false;
}
if(XN.element.hasClassName(el,"flashUploader")){
_d89=true;
}
if(el.parentNode&&XN.element.hasClassName(el.parentNode,"flashUploader")){
_d89=true;
el=el.parentNode;
}
if(_d89){
if(e.preventDefault){
e.preventDefault();
}else{
e.returnValue=false;
}
if(XN.browser.IE&&window.location.pathname!="/addphotox.do"){
if(isInstalledActiveXObject()){
window.location=_d83+"/addphotox.do";
return true;
}else{
var url="http://photo.renren.com/app/jisu/spread/status";
new XN.net.xmlhttp({url:url,method:"get",onSuccess:function(r){
var key=XN.json.parse(r.responseText);
if(key==0){
window.location=_d83+"/addphotox.do";
}else{
if(key==1){
normalFlash(el);
}
}
},onError:function(){
normalFlash(el);
}});
return true;
}
}
normalFlash(el);
}
}
function normalFlash(el){
albumId=0;
fromExistAlbum=0;
if(XN.element.hasClassName(el,"fromAlbum")){
try{
elHref=el.href;
if(elHref.indexOf("id=")>=0){
elHref=elHref.substring(elHref.indexOf("id=")+3);
elHref=elHref.substring(0,elHref.indexOf("&"));
albumId=parseInt(elHref);
if(albumId){
fromExistAlbum=albumId;
}
}
}
catch(e){
}
}
XN.loadFile("http://s.xnimg.cn/n/core/modules/flashUploader/upload-pop-all-min.css",function(){
XN.loadFile("http://s.xnimg.cn/n/core/modules/flashUploader/flashUploader.js",function(){
XN.flashUpload.initFlash(albumId);
});
});
}
function flashUploadPopup(){
if(_d84){
return false;
}
if(document.addEventListener){
document.addEventListener("click",popup,false);
}else{
if(document.attachEvent){
document.attachEvent("onclick",popup);
}
}
}
flashUploadPopup();
});
