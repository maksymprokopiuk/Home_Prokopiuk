(function (t) { function e(e) { for (var n, c, i = e[0], l = e[1], u = e[2], s = 0, f = []; s < i.length; s++)c = i[s], Object.prototype.hasOwnProperty.call(o, c) && o[c] && f.push(o[c][0]), o[c] = 0; for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]); p && p(e); while (f.length) f.shift()(); return a.push.apply(a, u || []), r() } function r() { for (var t, e = 0; e < a.length; e++) { for (var r = a[e], n = !0, i = 1; i < r.length; i++) { var l = r[i]; 0 !== o[l] && (n = !1) } n && (a.splice(e--, 1), t = c(c.s = r[0])) } return t } var n = {}, o = { app: 0 }, a = []; function c(e) { if (n[e]) return n[e].exports; var r = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(r.exports, r, r.exports, c), r.l = !0, r.exports } c.m = t, c.c = n, c.d = function (t, e, r) { c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, c.r = function (t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, c.t = function (t, e) { if (1 & e && (t = c(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var r = Object.create(null); if (c.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var n in t) c.d(r, n, function (e) { return t[e] }.bind(null, n)); return r }, c.n = function (t) { var e = t && t.__esModule ? function () { return t["default"] } : function () { return t }; return c.d(e, "a", e), e }, c.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, c.p = "/"; var i = window["webpackJsonp"] = window["webpackJsonp"] || [], l = i.push.bind(i); i.push = e, i = i.slice(); for (var u = 0; u < i.length; u++)e(i[u]); var p = l; a.push([0, "chunk-vendors"]), r() })({ 0: function (t, e, r) { t.exports = r("56d7") }, "034f": function (t, e, r) { "use strict"; var n = r("85ec"), o = r.n(n); o.a }, "56d7": function (t, e, r) { "use strict"; r.r(e); r("e260"), r("e6cf"), r("cca6"), r("a79d"); var n = r("2b0e"), o = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r("div", { attrs: { id: "app" } }, [r("InfoBox", { attrs: { logo: "https://ppobzor.ru/wp-content/uploads/2018/06/recreativ-logo.jpg", imgSrc: "https://golapravda.blog/wp-content/uploads/2019/12/103-9-1024x681.jpg", title: "Соковита хурма" } })], 1) }, a = [], c = function () { var t = this, e = t.$createElement, r = t._self._c || e; return r("div", { attrs: { id: "container" } }, [r("div", { attrs: { id: "header" } }, [r("div", { staticClass: "header_block logo" }, [r("img", { attrs: { src: t.logo, alt: "logo" } })]), r("div", { staticClass: "header_block" }, [t._v("Рекламна мережа")])]), r("img", { attrs: { src: t.imgSrc } }), r("div", [r("a", { attrs: { href: "" } }, [t._v(t._s(t.title))])])]) }, i = [], l = { name: "InfoBox", props: { logo: { type: String }, imgSrc: { type: String, default: "https://lh3.googleusercontent.com/proxy/NRCaCLo705mO-qd3YxKKAC-UhqZZqqdCYL_MjR9lWIXeNgDPeFK_G0AfziGVZPPsG7lesVyZQroOIQhCspGZVpgmPbHdq78Oqm_wk9YXEVET8ydL0VNj9SPKGG3HfGHujwcegNqkdNl5_sOnjmGl4A" }, title: { type: String, default: "No title" } } }, u = l, p = (r("aa7c"), r("2877")), s = Object(p["a"])(u, c, i, !1, null, "3cec2861", null), f = s.exports, d = { name: "App", components: { InfoBox: f } }, g = d, v = (r("034f"), Object(p["a"])(g, o, a, !1, null, null, null)), h = v.exports; n["a"].config.productionTip = !1, new n["a"]({ render: function (t) { return t(h) } }).$mount("#app") }, "85ec": function (t, e, r) { }, aa7c: function (t, e, r) { "use strict"; var n = r("e088"), o = r.n(n); o.a }, e088: function (t, e, r) { } });
//# sourceMappingURL=app.9d4ab9a1.js.map