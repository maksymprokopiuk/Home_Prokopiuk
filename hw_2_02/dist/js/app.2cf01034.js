(function(e){function t(t){for(var r,u,i=t[0],s=t[1],p=t[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("bank")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("Сума на рахунку: "+e._s(e.rakhunok.toFixed(2)))]),n("br"),n("span",[e._v("Зарахувати на рахунок: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.addMoney,expression:"addMoney"}],domProps:{value:e.addMoney},on:{focus:function(t){e.getMoney=0},input:function(t){t.target.composing||(e.addMoney=t.target.value)}}}),n("button",{on:{click:e.addSum}},[e._v("Зарахувати")]),n("br"),n("span",[e._v("Зняти з рахунку: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.getMoney,expression:"getMoney"}],domProps:{value:e.getMoney},on:{focus:function(t){e.addMoney=0},input:function(t){t.target.composing||(e.getMoney=t.target.value)}}}),n("button",{on:{click:e.getSum}},[e._v("Зняти")]),n("br"),n("span",[e._v("Відсотки за обслуговування: "+e._s(e.percent.toFixed(2)))]),n("hr"),n("span",[e._v("Сума в доларах: $")]),n("span",[e._v(e._s(e.currency(e.dollar).toFixed(2)))]),n("br"),n("span",[e._v("Сума в євро: €"+e._s(e.currency(e.euro).toFixed(2)))])])},i=[],s=(n("a9e3"),{name:"Bank",data:function(){return{rakhunok:0,addMoney:0,getMoney:0}},props:{tax:{type:Number,default:3},dollar:{type:Number,default:28.33},euro:{type:Number,default:33.33}},computed:{percent:function(){return parseFloat(this.addMoney)>0&&0===parseFloat(this.getMoney)?parseFloat(this.addMoney)*this.tax/100:parseFloat(this.getMoney)>0&&0===parseFloat(this.addMoney)?parseFloat(this.getMoney)*this.tax/100:0}},methods:{addSum:function(){if(this.addMoney>0)return this.rakhunok+=parseFloat(this.addMoney)-this.percent},getSum:function(){if(!(this.rakhunok<parseFloat(this.getMoney)+this.percent))return this.rakhunok-=parseFloat(this.getMoney)+this.percent},currency:function(e){return this.rakhunok/e}}}),p=s,c=n("2877"),l=Object(c["a"])(p,u,i,!1,null,"265e1909",null),d=l.exports,f={name:"App",components:{Bank:d}},h=f,y=Object(c["a"])(h,o,a,!1,null,null,null),v=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.2cf01034.js.map