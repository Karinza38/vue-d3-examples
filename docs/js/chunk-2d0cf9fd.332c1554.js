(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf9fd"],{6508:function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("h2",[t._v("Axis")]),r("svg",{attrs:{width:"960",height:"600"}})])},e=[],i=r("5698"),l={data:function(){return{}},mounted:function(){var t={top:10,bottom:60,left:10,right:60},n=[2.5,2.1,1.7,1.3,.9],r=i["v"]().domain([0,i["r"](n)]).range([0,250]),a=i["z"]("svg"),e=a.append("g").attr("transform","translate("+t.top+","+t.left+")"),l=30;e.selectAll("rect").data(n).enter().append("rect").attr("x",20).attr("y",(function(t,n){return n*l})).attr("width",(function(t){return r(t)})).attr("height",l-5).attr("fill","lightblue");var c=i["v"]().domain([0,i["r"](n)]).range([0,250]),o=i["a"](c).ticks(7);e.append("g").attr("transform","translate(20,"+n.length*l+")").call(o)}},c=l,o=r("2877"),s=Object(o["a"])(c,a,e,!1,null,"6623824c",null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0cf9fd.332c1554.js.map