(function(t){function n(n){for(var u,o,s=n[0],a=n[1],c=n[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&(t[u]=a[u]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],u=!0,s=1;s<e.length;s++){var a=e[s];0!==r[a]&&(u=!1)}u&&(i.splice(n--,1),t=o(o.s=e[0]))}return t}var u={},r={app:0},i=[];function o(n){if(u[n])return u[n].exports;var e=u[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=u,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)o.d(e,u,function(n){return t[n]}.bind(null,u));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=a;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var u=e("85ec"),r=e.n(u);r.a},"244a":function(t,n,e){},5419:function(t,n,e){"use strict";var u=e("8fdd"),r=e.n(u);r.a},"553a":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var u=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("restaurant")],1)},i=[],o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputMeal,expression:"inputMeal"}],attrs:{type:"text",placeholder:"Add some meal"},domProps:{value:t.inputMeal},on:{input:function(n){n.target.composing||(t.inputMeal=n.target.value)}}}),e("button",{attrs:{disabled:!t.isDataValid},on:{click:function(n){return t.addMeal(t.inputMeal)}}},[t._v("Add")])]),e("div",{staticClass:"menus"},[e("menu-1",{staticClass:"menu",attrs:{menuList1:t.menuList},on:{postponed:t.onPostponed}}),e("menu-2",{staticClass:"menu",attrs:{menuList2:t.menuList2},on:{postponed2:t.onPostponed2}}),e("menu-3",{staticClass:"menu",attrs:{menuList3:t.menuList3}})],1)])},s=[],a=(e("a434"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Menu1")]),e("ul",t._l(t.menuList1,(function(n,u){return e("li",{key:u},[t._v(t._s(n)+" "),e("button",{on:{click:function(n){return t.$emit("postponed",u)}}},[t._v("Done")])])})),0)])}),c=[],l={name:"Menu1",props:{menuList1:{type:Array,default:function(){return[]}}}},p=l,f=(e("97d7"),e("2877")),d=Object(f["a"])(p,a,c,!1,null,"fc74d596",null),m=d.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Menu2")]),e("ul",t._l(t.menuList2,(function(n,u){return e("li",{key:u},[t._v(t._s(n)+" "),e("button",{on:{click:function(n){return t.$emit("postponed2",u)}}},[t._v("Done")])])})),0)])},h=[],b={name:"Menu2",props:{menuList2:{type:Array,default:function(){return[]}}}},_=b,y=(e("9beb"),Object(f["a"])(_,v,h,!1,null,"57f031a0",null)),L=y.exports,M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("History")]),e("ul",t._l(t.menuList3,(function(n,u){return e("li",{key:u},[t._v(t._s(n)+" ")])})),0)])},O=[],g={name:"Menu3",props:{menuList3:{type:Array,default:function(){return[]}}}},j=g,x=(e("5419"),Object(f["a"])(j,M,O,!1,null,"367977c4",null)),w=x.exports,P={name:"Restaurant",components:{Menu1:m,Menu2:L,Menu3:w},data:function(){return{menuList:["Голубці","Вареники","Котлети","Борщ"],menuList2:[],menuList3:[],inputMeal:null}},computed:{isDataValid:function(){return this.inputMeal}},methods:{addMeal:function(t){this.menuList.push(t),this.inputMeal=""},onPostponed:function(t){this.menuList2.push(this.menuList[t]),this.menuList.splice(t,1)},onPostponed2:function(t){this.menuList3.unshift(this.menuList2[t]),this.menuList2.splice(t,1)}}},k=P,$=(e("6a5b"),Object(f["a"])(k,o,s,!1,null,"032096f3",null)),A=$.exports,C={name:"App",components:{Restaurant:A}},E=C,S=(e("034f"),Object(f["a"])(E,r,i,!1,null,null,null)),D=S.exports;u["a"].config.productionTip=!1,new u["a"]({render:function(t){return t(D)}}).$mount("#app")},"6a5b":function(t,n,e){"use strict";var u=e("244a"),r=e.n(u);r.a},"85ec":function(t,n,e){},"86b9":function(t,n,e){},"8fdd":function(t,n,e){},"97d7":function(t,n,e){"use strict";var u=e("553a"),r=e.n(u);r.a},"9beb":function(t,n,e){"use strict";var u=e("86b9"),r=e.n(u);r.a}});
//# sourceMappingURL=app.463c3277.js.map