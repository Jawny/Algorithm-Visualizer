(this.webpackJsonpalgovisualizer=this.webpackJsonpalgovisualizer||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),s=a.n(i),l=(a(9),a(10),a(3)),u=(a(11),function(e){var t=e.isStart,a=e.isEnd,n=e.isVisited,i="";return t?i+="node-start":a?i+="node-end":n&&(i+="node-visited"),r.a.createElement("div",{className:"node ".concat(i)})});a(12);function o(e,t,a,n){var r=e.x,i=e.y;r<t[0].length-1&&!a.has(t[r+1][i])&&(a.add(t[r+1][i]),n.push(t[r+1][i])),i<t.length-1&&!a.has(t[r][i+1])&&(a.add(t[r][i+1]),n.push(t[r][i+1])),r>0&&!a.has(t[r-1][i])&&(a.add(t[r-1][i]),n.push(t[r-1][i])),i>0&&!a.has(t[r][i-1])&&(a.add(t[r][i-1]),n.push(t[r][i-1]))}var c=function(e,t){var a=[e],n=new Set;n.add(e);for(var r,i=[];0!==a.length;)r=a.shift(),i.push(r),o(r,t,n,a);return i};var h=function(e,t){var a=[];return function e(t,a,n,r,i){r>=0&&i>=0&&r<t.length&&i<t[0].length&&!n.has(t[r][i])&&(n.add(t[r][i]),a.push(t[r][i]),e(t,a,n,r+1,i),e(t,a,n,r-1,i),e(t,a,n,r,i+1),e(t,a,n,r,i-1))}(t,a,new Set,e.x,e.y),a};function v(e,t){var a=e.x,n=e.y,r=[];return a<t[0].length-1&&r.push(t[a+1][n]),n<t.length-1&&r.push(t[a][n+1]),a>0&&r.push(t[a-1][n]),n>0&&r.push(t[a][n-1]),r}function f(e,t){return Math.abs(e.x-e.y)+Math.abs(t.x-t.y)}var d=function(e,t,a){var n=[],r=[],i=[];for(n.push(e);n.length>0;){for(var s=0,l=0;l<n.length;l++)n[l].f<n[s].f&&(s=l);var u=n[s];if(u===t){var o=u;for(i.push(o);o.previous;)i.push(o.previous),o=o.previous;return i}var c=n.indexOf(u);n.splice(c,1),r.push(u);for(var h=v(u,a),d=0;d<h.length;d++){var p=h[d];if(!r.includes(p)){var m=u.g+1,g=!1;n.includes(p)?m<p.g&&(p.g=m,g=!0):(p.g=m,g=!0,n.push(p)),g&&(p.h=f(p,t),p.f=p.g+p.h,p.previous=u)}}}},p=10,m=5,g=10,E=19,y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1];Object(n.useEffect)((function(){s()}),[]);var s=function(){for(var e=new Array(20),t=0;t<20;t++)e[t]=new Array(20);o(e),i(e)},o=function(e){for(var t=0;t<20;t++)for(var a=0;a<20;a++)e[t][a]=new v(t,a)};function v(e,t){this.x=e,this.y=t,this.g=0,this.h=0,this.f=0,this.previous=null,this.parent=null,this.isVisited=!1,this.isStart=this.x===p&&this.y===m,this.isEnd=this.x===g&&this.y===E}var f=function(e){var t=setInterval((function(){if(e[0]!==a[g][E]&&0!==e.length){for(var n=e.shift(),r=[],s=0;s<a.length;s++){r.push([]);for(var l=0;l<a[0].length;l++)r[s].push(0)}for(var u=0;u<20;u++)for(var o=0;o<20;o++)r[u][o]=JSON.parse(JSON.stringify(a[u][o]));n.isStart||n.isEnd||(a[n.x][n.y].isVisited=!0,r[n.x][n.y].isVisited=!0),i(r)}else clearInterval(t)}),50)},y=function(){for(var e=[],t=0;t<a.length;t++){e.push([]);for(var n=0;n<a[0].length;n++)e[t].push(0)}for(var r=0;r<20;r++)for(var s=0;s<20;s++)a[r][s].isVisited=!1,e[r][s]=JSON.parse(JSON.stringify(a[r][s]));i(e)},N=r.a.createElement("div",{className:"d-inline-block"},r.a.createElement("div",null,a.map((function(e,t){return r.a.createElement("div",{key:t,className:"row"},e.map((function(e,t){var a=e.isStart,n=e.isEnd,i=e.isVisited;return r.a.createElement(u,{key:t,isStart:a,isEnd:n,isVisited:i})})))})))),S=function(e){for(var t=[],a=0;a<e.length;a++){t.push([]);for(var n=0;n<e[0].length;n++)t[a].push(0)}for(var r=0;r<20;r++)for(var s=0;s<20;s++)t[r][s]=JSON.parse(JSON.stringify(e[r][s]));i(t)};return r.a.createElement("div",{className:"screen"},r.a.createElement("h1",null," Algorithm Visualizer "),r.a.createElement("div",null,N),r.a.createElement("button",{className:"btn btn-primary mr-1",onClick:function(){y(),f(c(a[p][m],a))}},"Breadth First Search"),r.a.createElement("button",{className:"btn btn-primary mr-1",onClick:function(){y(),f(h(a[p][m],a))}}," ","Depth First Search"),r.a.createElement("button",{className:"btn btn-primary mr-1",onClick:function(){y(),f(d(a[p][m],a[g][E],a).reverse())}}," ","A Star Search"),r.a.createElement("button",{className:"btn btn-primary mr-1",onClick:function(){y()}},"Clear Grid"),r.a.createElement("div",null,r.a.createElement("div",{className:"pull-left"},r.a.createElement("label",null,"Start position",r.a.createElement("input",{type:"text",placeholder:"Start Node row",name:"x-coord",onChange:function(e){a[p][m].isStart=!1,""===e.target.value||isNaN(e.target.value)||(p=e.target.value),a[p][m].isStart=!0,S(a)}}),r.a.createElement("input",{type:"text",placeholder:"Start Node column",name:"y-coord",onChange:function(e){a[p][m].isStart=!1,""===e.target.value||isNaN(e.target.value)||(m=e.target.value),a[p][m].isStart=!0,S(a)}}))),r.a.createElement("label",null,"End Position",r.a.createElement("input",{type:"text",placeholder:"End Node row",name:"x-coord",onChange:function(e){a[g][E].isEnd=!1,""===e.target.value||isNaN(e.target.value)||(g=e.target.value),a[g][E].isEnd=!0,S(a)}}),r.a.createElement("input",{type:"text",placeholder:"End Node column",name:"y-coord",onChange:function(e){a[g][E].isEnd=!1,""===e.target.value||isNaN(e.target.value)||(E=e.target.value),a[g][E].isEnd=!0,S(a)}}))))};var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.ec8cc387.chunk.js.map