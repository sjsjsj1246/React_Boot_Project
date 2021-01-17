(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{19:function(n,t,e){n.exports={container:"header_container__2-4_2",rotating:"header_rotating__db5bi",nav:"header_nav__Yggvy"}},33:function(n,t,e){},34:function(n,t,e){},41:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),o=e.n(c),i=e(24),a=e.n(i),d=(e(33),e(11)),u=e(2),s=(e(34),e(19)),j=e.n(s),b=function(n){return Object(r.jsxs)("header",{className:j.a.container,children:[Object(r.jsx)(d.b,{to:"/",children:Object(r.jsx)("ion-icon",{name:"logo-react"})}),Object(r.jsxs)("nav",{className:j.a.nav,children:[Object(r.jsx)("a",{href:"https://youtu.be/hqwDFwqyWkE",children:"\ud558\ub098"}),Object(r.jsx)("a",{href:"https://youtu.be/hqwDFwqyWkE?t=1",children:"\ub458"}),Object(r.jsx)("a",{href:"https://youtu.be/hqwDFwqyWkE?t=1.5",children:"\uc14b"}),Object(r.jsx)("a",{href:"https://youtu.be/hqwDFwqyWkE?t=2",children:"\uc57c!"})]})]})},l=e(9),x=e.n(l),p=function(n){return Object(r.jsxs)("div",{className:x.a.container,children:[Object(r.jsx)("img",{className:x.a.introImg,src:"https://i.postimg.cc/LXNRkJXK/sky.jpg",alt:"intro"}),Object(r.jsxs)("div",{className:x.a.content,children:[Object(r.jsxs)("div",{className:x.a.title,children:[Object(r.jsx)("h1",{children:"React Boot Projct"}),Object(r.jsx)("p",{children:"React, Redux, typescript..."})]}),Object(r.jsx)("div",{className:x.a.projectList,children:[{id:"todoList",title:"Todo List",explain:"context API & styled-component"}].map((function(n){return Object(r.jsxs)(d.b,{className:x.a.projectItem,to:"/".concat(n.id),children:[Object(r.jsx)("h1",{className:x.a.projectTitle,children:n.title}),Object(r.jsx)("p",{className:x.a.projectExplain,children:n.explain})]})}))})]})]})},f=e(3),h=e(4),O=e(15),v=e(16),m=e(22),g=[{id:1,text:"\ud560 \uc77c\uc744 \ucd94\uac00\ud574\ubcf4\uc138\uc694",done:!1}];function y(n,t){switch(t.type){case"CREATE":return n.concat(t.todo);case"TOGGLE":return n.map((function(n){return n.id===t.id?Object(m.a)(Object(m.a)({},n),{},{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==t.id}));default:throw new Error("Unhandled action type: ".concat(t.type))}}var _=Object(c.createContext)(),w=Object(c.createContext)(),k=Object(c.createContext)();function E(n){var t=n.children,e=Object(c.useReducer)(y,g),o=Object(O.a)(e,2),i=o[0],a=o[1],d=Object(c.useRef)(5);return Object(r.jsx)(_.Provider,{value:i,children:Object(r.jsx)(w.Provider,{value:a,children:Object(r.jsx)(k.Provider,{value:d,children:t})})})}function C(){var n=Object(c.useContext)(_);if(!n)throw new Error("Cannot find TodoProvider");return n}function N(){var n=Object(c.useContext)(w);if(!n)throw new Error("Cannot find TodoProvider");return n}function R(){var n=Object(f.a)(["\n  padding: 12px;\n  border-radius: 4px;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  box-sizing: border-box;\n"]);return R=function(){return n},n}function T(){var n=Object(f.a)(["\n  background: #f8f9fa;\n  padding-left: 32px;\n  padding-top: 32px;\n  padding-right: 32px;\n  padding-bottom: 72px;\n\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  border-top: 1px solid #e9ecef;\n"]);return T=function(){return n},n}function L(){var n=Object(f.a)(["\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n"]);return L=function(){return n},n}function P(){var n=Object(f.a)(["\n      background: #ff6b6b;\n      &:hover {\n        background: #ff8787;\n      }\n      &:active {\n        backgroubnd: #fa5252;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "]);return P=function(){return n},n}function z(){var n=Object(f.a)(["\n  background: #38d9a9;\n  &:hover {\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n\n  z-index: 5;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  transform: translate(-50%, 50%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n\n  transition: 0.125s all ease-in;\n  ","\n"]);return z=function(){return n},n}var D=h.c.button(z(),(function(n){return n.open&&Object(h.b)(P())})),q=h.c.div(L()),I=h.c.form(T()),F=h.c.input(R()),S=function(n){var t=Object(c.useState)(!1),e=Object(O.a)(t,2),o=e[0],i=e[1],a=Object(c.useState)(""),d=Object(O.a)(a,2),u=d[0],s=d[1],j=N(),b=function(){var n=Object(c.useContext)(k);if(!n)throw new Error("Cannot find TodoProvider");return n}();return Object(r.jsxs)(r.Fragment,{children:[o&&Object(r.jsx)(q,{children:Object(r.jsx)(I,{onSubmit:function(n){n.preventDefault(),j({type:"CREATE",todo:{id:b.current,text:u,done:!1}}),s(""),i(!1),b.current+=1},children:Object(r.jsx)(F,{autoFocus:!0,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter\ub97c \ub204\ub974\uc138\uc694",onChange:function(n){return s(n.target.value)},value:u})})}),Object(r.jsx)(D,{onClick:function(){return i(!o)},open:o,children:Object(r.jsx)(v.a,{})})]})},W=o.a.memo(S);function A(){var n=Object(f.a)(["\n  padding: 48px 32px 24px 32px;\n  border-bottom: 1px solid #e9ecef;\n  h1 {\n    margin: 0;\n    font-size: 36px;\n    color: #343a40;\n  }\n  .day {\n    margin-top: 4px;\n    color: #868e96;\n    font-size: 21px;\n  }\n  .task-left {\n    color: #20c997;\n    font-size: 18px;\n    margin-top: 40px;\n    font-weight: bold;\n  }\n"]);return A=function(){return n},n}var G=h.c.div(A()),B=function(n){var t=C().filter((function(n){return!n.done})),e=new Date,c=e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),o=e.toLocaleDateString("ko-KR",{weekday:"long"});return Object(r.jsxs)(G,{children:[Object(r.jsx)("h1",{children:c}),Object(r.jsx)("div",{className:"day",children:o}),Object(r.jsxs)("div",{className:"task-left",children:["\ud560 \uc77c ",t.length,"\uac1c \ub0a8\uc74c"]})]})};function J(){var n=Object(f.a)(["\n      color: #ced4da;\n    "]);return J=function(){return n},n}function K(){var n=Object(f.a)(["\n  flex: 1;\n  font-size: 21px;\n  color: #495057;\n  ","\n"]);return K=function(){return n},n}function M(){var n=Object(f.a)(["\n      border: 1px solid #38d9a9;\n      color: #38d9a9;\n    "]);return M=function(){return n},n}function Y(){var n=Object(f.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  border: 1px solid #ced4da;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"]);return Y=function(){return n},n}function Q(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"]);return Q=function(){return n},n}function V(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dee2e6;\n  font-size: 24px;\n  cursor: pointer;\n  &:hovver {\n    color: #ff6b6b;\n  }\n  display: none;\n"]);return V=function(){return n},n}var X=h.c.div(V()),U=h.c.div(Q(),X),H=h.c.div(Y(),(function(n){return n.done&&Object(h.b)(M())})),Z=h.c.div(K(),(function(n){return n.done&&Object(h.b)(J())})),$=function(n){var t=n.id,e=n.done,c=n.text,o=N();return Object(r.jsxs)(U,{children:[Object(r.jsx)(H,{done:e,onClick:function(){return o({type:"TOGGLE",id:t})},children:e&&Object(r.jsx)(v.c,{})}),Object(r.jsx)(Z,{done:e,children:c}),Object(r.jsx)(X,{onClick:function(){return o({type:"REMOVE",id:t})},children:Object(r.jsx)(v.b,{})})]})},nn=o.a.memo($);function tn(){var n=Object(f.a)(["\n  flex: 1;\n  padding: 20px 32px 48px 32px;\n  overflow-y: auto;\n"]);return tn=function(){return n},n}var en=h.c.div(tn()),rn=function(n){var t=C();return Object(r.jsx)(en,{children:t.map((function(n){return Object(r.jsx)(nn,{id:n.id,text:n.text,done:n.done},n.id)}))})};function cn(){var n=Object(f.a)(["\n  width: 512px;\n  height: 768px;\n\n  position: relative;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);\n\n  margin: 96px auto 32px auto;\n\n  display: flex;\n  flex-direction: column;\n"]);return cn=function(){return n},n}var on=h.c.div(cn()),an=function(n){var t=n.children;return Object(r.jsx)(on,{children:t})};function dn(){var n=Object(f.a)(["\n    body {\n        background: #e9ecef;\n    }\n"]);return dn=function(){return n},n}var un=Object(h.a)(dn()),sn=function(n){return Object(r.jsxs)(E,{children:[Object(r.jsx)(un,{}),Object(r.jsxs)(an,{children:[Object(r.jsx)(B,{}),Object(r.jsx)(rn,{}),Object(r.jsx)(W,{})]})]})};var jn=function(){return Object(r.jsxs)(d.a,{basename:"/React_Boot_Project",children:[Object(r.jsx)(b,{}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",children:Object(r.jsx)(p,{})}),Object(r.jsx)(u.a,{path:"/todoList",children:Object(r.jsx)(sn,{})})]})]})};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(jn,{})}),document.getElementById("root"))},9:function(n,t,e){n.exports={container:"main_container__ti5Y5",introImg:"main_introImg__2vPaT",content:"main_content__2k12P",title:"main_title__1sxF5",projectList:"main_projectList__1WrQb",projectItem:"main_projectItem__1l7Y7",projectTitle:"main_projectTitle__21DQA",projectExplain:"main_projectExplain__2Wgol"}}},[[41,1,2]]]);
//# sourceMappingURL=main.95f1f3c8.chunk.js.map