(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{278:function(t,e,a){t.exports=a(279)},279:function(t,e,a){"use strict";a.r(e);var n=a(272),r=a(165),o=a(166),c=a(273),s=a(271),l=a(126),u=a(46),i=a.n(u),d=a(167),f=a.n(d),b=a(268),h=a(269);a(402);function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var y={accessibility:!1,scales:{x:{title:"2018 Annual Sales Figures"},y:{formatter:function(t){return"".concat(t/1e3,"k")},yMaxAdjuster:function(t){return 1.1*t},stacked:!0}},legendClickable:!0,containerResizable:!0},v=function(t){Object(c.a)(a,t);var e=p(a);function a(){var t;Object(r.a)(this,a);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={data:{labels:["Qty","More","Sold","Restocking","Misc"],datasets:[{label:"Dataset 1",backgroundColors:[b.defaultColors[0]],data:[65e3,29123,35213,51213,16932]},{label:"Dataset 2",backgroundColors:[b.defaultColors[1]],data:[32432,21312,56456,21312,34234]},{label:"Dataset 3",backgroundColors:[b.defaultColors[2]],data:[12312,23232,34232,12312,34234]}]}},t.updateData=function(){var e=t.state.data;e.datasets[0].data[0]=65e3*Math.random(),e.datasets[0].data[3]=51213*Math.random(),t.setState(Object(n.a)({},t.state,{data:e}))},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return console.log("BAR CHART",this.barChart),i.a.createElement("div",{className:"App"},i.a.createElement(h.BarChart,{data:this.state.data,options:y,width:"100%",height:400,ref:function(e){return t.barChart=e}}),i.a.createElement("button",{onClick:this.updateData},"Test update"))}}]),a}(i.a.Component),C=document.getElementById("root");f.a.render(i.a.createElement(v,null),C)}},[[278,2,1]]]);
//# sourceMappingURL=main.c1551df3.chunk.js.map