(this["webpackJsonpreact-nfc"]=this["webpackJsonpreact-nfc"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),r=n.n(s),i=(n(14),n(4)),o=n(2),l=n.p+"static/media/nfc.1e1c9c72.svg",u=(n(15),n(9)),j=n(3),b=n.n(j),d=n(5),x=(n(17),n.p+"static/media/spinner.e8697d57.gif"),O=Object(c.createContext)({scan:null,write:null,setActions:function(){}}),f=n(0),h=function(){var e=Object(c.useContext)(O),t=e.actions,n=e.setActions;return Object(f.jsxs)("div",{className:"scanner",children:[Object(f.jsx)("p",{className:"scanner-exit",onClick:function(){return n(Object(i.a)(Object(i.a)({},t),{},{scan:null}))},children:"X"}),Object(f.jsxs)("div",{className:"scanner-container",children:[Object(f.jsx)("img",{src:x,alt:"spinning log",className:"scanner-image"}),Object(f.jsx)("p",{className:"scanner-text",children:"Scanning..."})]})]})},p=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(c.useState)(""),x=Object(o.a)(j,2),p=x[0],v=x[1],g=Object(c.useContext)(O),m=g.actions,w=g.setActions,F=Object(c.useCallback)(Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("NDEFReader"in window)){e.next=14;break}return e.prev=1,t=new window.NDEFReader,e.next=5,t.scan();case 5:console.log("Scan started successfully."),t.onreadingerror=function(){console.log("Cannot read data from the NFC tag. Try another one?")},t.onreading=function(e){console.log("NDEF message read."),N(e),l(e.toString()),w({scan:"scanned",write:null})},e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Error! Scan failed to start: ".concat(e.t0,"."));case 13:case 14:case"end":return e.stop()}}),e,null,[[1,10]])}))),[w]),N=function(e){var t=e.message,n=e.serialNumber;v(n);var c,s=Object(u.a)(t.records);try{for(s.s();!(c=s.n()).done;){var r=c.value;switch(r.recordType){case"text":var i=new TextDecoder(r.encoding);a(i.decode(r.data))}}}catch(o){s.e(o)}finally{s.f()}};return Object(c.useEffect)((function(){F()}),[F]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{children:"Version 1."}),"scanned"===m.scan?Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:["Serial Number: ",p]}),Object(f.jsxs)("p",{children:["Message: ",n]}),Object(f.jsx)("p",{children:i.toString()})]}):Object(f.jsx)(h,{status:m.scan})]})},v=(n(19),function(){return Object(f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF",children:[Object(f.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(f.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"})]})}),g=function(e){var t=e.writeFn,n=a.a.useState(""),c=Object(o.a)(n,2),s=c[0],r=c[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s),r("")},children:Object(f.jsxs)("div",{className:"writer-container",children:[Object(f.jsx)("input",{type:"text",placeholder:"Enter Message...",value:s,onChange:function(e){return r(e.target.value)}}),Object(f.jsxs)("button",{className:"btn",type:"submit",children:[Object(f.jsx)(v,{}),"Save"]})]})})})},m=function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new window.NDEFReader,e.next=4,n.scan();case 4:return e.next=6,n.write({records:[{recordType:"text",data:t}]});case 6:alert("Value Saved!"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(g,{writeFn:e})};var w=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],s=n||{},r=s.scan,u=s.write,j={actions:n,setActions:a},b=function(e){a(Object(i.a)({},e))};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(f.jsx)("h1",{children:"NFC Tool"}),Object(f.jsxs)("div",{className:"App-container",children:[Object(f.jsx)("button",{onClick:function(){return b({scan:"scanning",write:null})},className:"btn",children:"Scan"}),Object(f.jsx)("button",{onClick:function(){return b({scan:null,write:"writing"})},className:"btn",children:"Write"})]}),Object(f.jsxs)(O.Provider,{value:j,children:[r&&Object(f.jsx)(p,{}),u&&Object(f.jsx)(m,{})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),F()}},[[20,1,2]]]);
//# sourceMappingURL=main.22dfa753.chunk.js.map