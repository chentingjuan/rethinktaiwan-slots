(this["webpackJsonprethinktaiwan-slots"]=this["webpackJsonprethinktaiwan-slots"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),i=(a(13),a(8)),s=a(4),m=a.n(s),o=a(7),u=a(3),d=(a.p,a(15),{"000":["\u5728\u82d7\u6817\u7684\u8fb2\u7530\u88e1","\u5e36\u5927\u5bb6\u8df3\u821e","\u670b\u53cb\u5011\u90fd\u611b\u4e0a\u81ea\u5df1"],"011":["\u5728\u832b\u832b\u5927\u6d77\u7684\u7db2\u8def\u793e\u7fa4\u4e2d","\u6c7a\u5b9a\u8981\u653e\u68c4","\u9752\u5c11\u5e74\u66f4\u61c2\u600e\u9ebc\u4fdd\u8b77\u81ea\u5df1\u7684\u6027\u884c\u70ba"],"022":["\u5728\u65b0\u7af9\u7684\u83dc\u5712\u88e1","\u5e36\u5927\u5bb6\u6458\u91ce\u83dc","\u9752\u5c11\u5e74\u90fd\u80fd\u8a8d\u8b58\u83dc\u7684\u7a2e\u985e"],"039":["\u5728\u5c0f\u5b78\u7684\u6559\u5ba4\u88e1","\u4ecb\u7d39\u6708\u7d93\u8ca7\u7aae\u8b70\u984c","\u5c0f\u5b78\u751f\u5011\u66f4\u61c2\u5c0a\u91cd\u5f7c\u6b64"],110:["\u5728\u52d5\u7269\u6536\u5bb9\u6240","\u548c\u52d5\u7269\u6536\u5bb9\u6240\u6240\u9577\u8ac7\u5224","\u52d5\u7269\u6536\u5bb9\u6240\u7684\u4eba\u54e1\u80fd\u66f4\u7406\u89e3***"],255:["\u5728\u6211\u7684\u623f\u9593\u88e1","\u5beb\u62c9\u9738\u7684\u7a0b\u5f0f","PD\u9752\u5e74\u6709\u4e00\u500b\u6709\u8da3\u7684\u958b\u5e55\u5f0f"]}),E={location:{},thing:{},feeling:{}};Object.keys(d).map((function(e,t){E.location[e]=d[e][0],E.thing[e]=d[e][1],E.feeling[e]=d[e][2]}));var v=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),v=s[0],p=s[1],f=Object(n.useState)([!1,!1,!1]),h=Object(u.a)(f,2),b=h[0],N=h[1],g=function(){var e=Object(o.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N([!1,!1,!1]),e.next=3,j();case 3:v?(t=[],Object.keys(E).map((function(e){var a=Object.keys(E[e]);t.push(a[k(a.length)])})),l(t)):(a=Object.keys(E.location),n=a[k(a.length)],l([n,n,n]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){a[0]===a[1]&&a[1]===a[2]?N([!0,!0,!0]):N((function(t){return t[e]=!0,Object(i.a)(t)}))},j=function(){a&&(delete E.location[a[0]],delete E.thing[a[1]],delete E.feeling[a[2]])},k=function(e){return Math.floor(Math.random()*Math.floor(e))},y=Object.keys(d).map((function(e,t){return c.a.createElement("tr",null,c.a.createElement("td",null,e),c.a.createElement("td",{className:a&&a[0]===e?"active":E.location[e]?"":"empty"},d[e][0]),c.a.createElement("td",{className:a&&a[1]===e?"active":E.thing[e]?"":"empty"},d[e][1]),c.a.createElement("td",{className:a&&a[2]===e?"active":E.feeling[e]?"":"empty"},d[e][2]))}));return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"slots"},c.a.createElement("h2",null,"\u8ff4\u97ff\u8b70\u984c\u62c9\u9738\u6a5f"),c.a.createElement("div",{className:"title"},c.a.createElement("div",null,"\u5730\u9ede"),c.a.createElement("div",null,"\u5be6\u969b\u4f5c\u70ba"),c.a.createElement("div",null,"\u91cd\u8981\u4eba\u7269\u7684\u611f\u53d7")),a&&Object.keys(E.location).length?c.a.createElement("div",{className:"screen"},c.a.createElement("div",{onMouseOver:function(){return O(0)},className:"item-wrapper"},c.a.createElement("div",{className:"item"},c.a.createElement("span",{className:"id "+(b[0]?"active":"")},"#",a[0]),c.a.createElement("span",null,E.location[a[0]]))),c.a.createElement("div",{onMouseOver:function(){return O(1)},className:"item-wrapper"},c.a.createElement("div",{className:"item"},c.a.createElement("span",{className:"id "+(b[1]?"active":"")},"#",a[1]," "),c.a.createElement("span",null,E.thing[a[1]]," "))),c.a.createElement("div",{onMouseOver:function(){return O(2)},className:"item-wrapper"},c.a.createElement("div",{className:"item"},c.a.createElement("span",{className:"id "+(b[2]?"active":"")},"#",a[2]," "),c.a.createElement("span",null,E.feeling[a[2]]," ")))):c.a.createElement("div",{className:"screen"},c.a.createElement("div",{className:"item-wrapper"}," ",c.a.createElement("div",{className:"item"},"???")),c.a.createElement("div",{className:"item-wrapper"}," ",c.a.createElement("div",{className:"item"},"???")),c.a.createElement("div",{className:"item-wrapper"}," ",c.a.createElement("div",{className:"item"},"???"))),c.a.createElement("div",{className:"control-bar"}," ",a?c.a.createElement("div",{className:"remain"},"\u5269\u4e0b ",Object.keys(E.location).length-1," \u56de\u5408"):c.a.createElement("div",{className:"remain"}),c.a.createElement("button",{onClick:function(){return p(!0)},disabled:v||Object.keys(E.location).length<=1},"\u8d85\u7d1a\u6df7\u5408\u6a21\u5f0f"),c.a.createElement("button",{onClick:g,disabled:Object.keys(E.location).length<=1},"\u4e0b\u4e00\u56de\u5408 "))),c.a.createElement("hr",null),c.a.createElement("h4",null,"\u5168\u90e8\u7684\u8cc7\u6599\uff1a\uff08\u6b63\u5f0f\u7248\u4e0d\u6703\u986f\u793a\uff09"),c.a.createElement("table",null,y))},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.222229a0.chunk.js.map