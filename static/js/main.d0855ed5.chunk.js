(this["webpackJsonpzombie-hunt"]=this["webpackJsonpzombie-hunt"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),a=n.n(r),o=(n(12),n(4)),i=n(5),u=n(7),h=n(6),l=(n(13),n(14),n(15),n(0)),m=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monsters",src:"https://robohash.org/".concat(e.idvalue,"?set=set2&size=180x180")}),Object(l.jsxs)("h2",{children:[" ",e.name]}),Object(l.jsxs)("h2",{children:[" ",e.email]})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monster.filter((function(t){return t.name.toLowerCase().includes(e.searchmonster.toLowerCase())})).map((function(e){return Object(l.jsx)(m,{idvalue:e.id,name:e.name,email:e.email},e.id)}))})},d=(n(17),function(e){var t=e.placevalue,n=e.handle;return Object(l.jsx)("input",{className:"searchelement",type:"search",placeholder:t,onChange:n})}),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handlechange=function(t){e.setState({searchmonsters:t.target.value})},e.state={monster:[],searchmonsters:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:" MONSTER HUNT"}),Object(l.jsx)(d,{placevalue:"search monsters",handle:this.handlechange}),Object(l.jsx)(j,{searchmonster:this.state.searchmonsters,monster:this.state.monster})]})}}]),n}(s.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.d0855ed5.chunk.js.map