(this["webpackJsonpsw-characters-catalogue"]=this["webpackJsonpsw-characters-catalogue"]||[]).push([[4],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var r,c,a,i,o,s,b,l,d,u,p=n(38),j=n.n(p),h=n(39),x=n(37),f=n(0),O=n(42),g=n.n(O),m=n(72),v=n(2),k=n(69),w=n(16),y=n(4),C=n(5),S=n(10),L=C.b.div(r||(r=Object(y.a)(["\n  color: rgb(170, 170, 170);\n  height: 200px;\n  /* max-width: 400px; */\n  min-width: 250px;\n  width:auto;\n  padding: 10px;\n  margin-bottom: 10px;\n  justify-content: center;\n  display: flex;\n  list-style-type: none;\n  flex-direction: column;\n  gap: 10px;\n\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 32px 0 rgba(100, 100, 100, 0.1);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-radius: 0.4em;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n"]))),E=Object(C.b)(S.b)(c||(c=Object(y.a)(["\n  text-decoration: none;\n  color: #ffc500;\n  padding: 30px 50px 0 50px;\n"]))),N=n(1),P=function(e){var t=e.characterData;return Object(N.jsxs)(L,{children:[Object(N.jsx)("h1",{style:{color:"white"},children:t.name}),Object(N.jsxs)("p",{children:["Gender: ",t.gender]}),Object(N.jsxs)("p",{children:["Birth Year: ",t.birthYear]}),Object(N.jsx)(E,{to:"/characters/".concat(t.index),children:"Read more"})]})},_=C.b.div(a||(a=Object(y.a)(["\n    justify-content: center;\n    /* display: flex;   */\n"]))),Y=n(20),B=C.b.div(i||(i=Object(y.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 101;\n"]))),Q=C.b.div(o||(o=Object(y.a)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 101;\n  width: calc(100vw - 5em);\n  height: calc(100vh - 5em);\n  max-width: 1000px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  gap: 10px;\n  font-size: 1.1em;\n\n  background-color: rgba(100, 100, 100, 0.7);\n  box-shadow: 0 8px 32px 0 rgba(100, 100, 100, 0.1);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-radius: 0.4em;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n"]))),z=C.b.header(s||(s=Object(y.a)(["\n  text-align: right;\n  padding: 10px;\n  color: #aaa;\n"]))),D=C.b.div(b||(b=Object(y.a)(["\n  width: 25px;\n  height: 3px;\n  background-color: white;\n  margin: 5px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n"]))),G=C.b.div(l||(l=Object(y.a)(["\n  cursor: pointer;\n  display: block;\n  margin-left: auto;\n  padding: 10px;\n  ",":nth-child(1) {\n    transform: rotate(-45deg) translate(-5px, 6px);\n  }\n\n  ",":nth-child(2) {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  ",":nth-child(3) {\n    transform: rotate(45deg) translate(-5px, -6px);\n  }\n"])),D,D,D),H=function(e){var t=e.children,n=Object(v.f)(),r=function(e){e.stopPropagation(),n.goBack()};return Object(Y.createPortal)(Object(N.jsx)(B,{onClick:r,children:Object(N.jsxs)(Q,{onClick:function(e){return e.stopPropagation()},children:[Object(N.jsx)(z,{children:Object(N.jsx)("button",{onClick:r,style:{backgroundColor:"transparent",padding:0,border:"none",background:"none"},children:Object(N.jsxs)(G,{children:[Object(N.jsx)(D,{}),Object(N.jsx)(D,{}),Object(N.jsx)(D,{})]})})}),t]})}),document.getElementById("modal"))},I=C.b.div(d||(d=Object(y.a)(["\n  color: rgb(170, 170, 170);\n\n  & > hr {\n    color: rgb(170, 170, 170);\n  }\n"]))),J=function(e){var t=e.characters,n=e.filmList,r=Object(v.g)().index,c=Object(f.useState)([]),a=Object(x.a)(c,2),i=a[0],o=a[1],s=t[r];return Object(f.useEffect)((function(){!function(e,t){var n=e.filmList.map((function(e){return t.find((function(t){return t.url===e}))}));o(n)}(s,n)}),[]),Object(N.jsxs)(I,{children:[Object(N.jsx)("h1",{style:{color:"white"},children:s.name}),Object(N.jsx)("hr",{}),Object(N.jsx)("br",{}),Object(N.jsxs)("p",{children:["Gender: ",s.gender]}),Object(N.jsxs)("p",{children:["Birth Year: ",s.birthYear]}),Object(N.jsxs)("p",{children:["Height: ",s.height]}),Object(N.jsxs)("p",{children:["Eye Color: ",s.eyeColor]}),Object(N.jsxs)("p",{children:["Hair Color: ",s.hairColor]}),Object(N.jsxs)("p",{children:["Skin Color: ",s.skinColor]}),Object(N.jsx)("br",{}),Object(N.jsx)("hr",{}),Object(N.jsx)("br",{}),Object(N.jsx)("h3",{style:{color:"white"},children:"Film lsit:"}),Object(N.jsx)("br",{}),i.map((function(e,t){return Object(N.jsx)("p",{children:e.title},t)}))]})},F=function(e){var t=e.searchQuery,n=e.pageNumber,r=e.setPageNumber,c=e.filmList,a=Object(f.useState)([]),i=Object(x.a)(a,2),o=i[0],s=i[1],b=Object(f.useState)(!1),l=Object(x.a)(b,2),d=l[0],u=l[1],p=function(e,t){return{name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color,hairColor:e.hair_color,skinColor:e.skin_color,height:e.height,filmList:e.films,index:t}},O=function(){var e=Object(h.a)(j.a.mark((function e(t,n){var c,a,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g()({method:"GET",url:"https://swapi.dev/api/people/",params:{search:n,page:t}});case 3:c=e.sent,a=c.data,i=a.results.map((function(e,t){return p(e,t)})),s((function(e){return[].concat(Object(m.a)(e),Object(m.a)(i))})),null!==a.next?(u(!0),r((function(e){return e+1}))):u(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){s([]),O(n,t)}),[t]),Object(N.jsxs)(_,{children:[Object(N.jsx)(k.a,{dataLength:o.length,next:function(){return O(n,t)},hasMore:d,loader:Object(N.jsx)(w.b,{}),children:o.map((function(e,t){return Object(N.jsx)(P,{characterData:e},t)}))}),Object(N.jsx)(v.c,{children:Object(N.jsx)(v.a,{path:"/characters/:index",children:Object(N.jsx)(H,{children:Object(N.jsx)(J,{characters:o,filmList:c})})})})]})},M=n(70),R=C.b.input(u||(u=Object(y.a)(["\n  color: rgb(170, 170, 170);\n  min-width: 250px;\n  padding: 10px;\n  margin-bottom: 10px;\n  gap: 10px;\n\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 32px 0 rgba(100, 100, 100, 0.1);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-radius: 1.4em;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n\n  &:focus {\n    outline: none;\n  }\n"]))),T=function(e){var t=e.setSearchQuery,n=e.setPageNumber,r=Object(f.useState)(""),c=Object(x.a)(r,2),a=c[0],i=c[1],o=Object(f.useCallback)(Object(M.debounce)((function(e){n(1),t(e)}),1e3),[]);return Object(N.jsx)("div",{children:Object(N.jsx)(R,{type:"text",onChange:function(e){i(e.target.value),o(e.target.value)},value:a,placeholder:"Search..."})})},X=function(){var e=Object(f.useState)(""),t=Object(x.a)(e,2),n=t[0],r=t[1],c=Object(f.useState)(1),a=Object(x.a)(c,2),i=a[0],o=a[1],s=Object(f.useState)([]),b=Object(x.a)(s,2),l=b[0],d=b[1],u=function(e){var t=[];return e.characters.forEach((function(e){return t.push(e.match(/\d+/g).map(Number))})),{title:e.title,id:e.episode_id,director:e.director,producer:e.producer,releaseDate:e.release_date,url:e.url,characterIdList:t}},p=function(){var e=Object(h.a)(j.a.mark((function e(){var t,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g()("https://swapi.dev/api/films/");case 3:t=e.sent,n=t.data,r=n.results.map(u),d(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){p()}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)(T,{setSearchQuery:r,setPageNumber:o}),Object(N.jsx)(F,{searchQuery:n,pageNumber:i,setPageNumber:o,filmList:l})]})}}}]);
//# sourceMappingURL=4.0bfb5b19.chunk.js.map