(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),s=c(5),i=c(1),b=(c(10),c(11),c(12),c(4)),d=c.n(b),l=c(0),o=function(t){var e=t.tabs,c=t.selectedTab,a=t.setSelectedTab;return Object(l.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{className:d()({"is-active":t===c}),"data-cy":"Tab",children:Object(l.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t!==c&&a(t)}(t)},children:t.title})},t.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(i.useState)(r[0]),e=Object(s.a)(t,2),c=e[0],a=e[1];return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(l.jsx)(o,{tabs:r,selectedTab:c,setSelectedTab:a})]})};n.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b4210721.chunk.js.map