(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),i=t(5),r=t.n(i),o=t(2),a=t(3),u=(t(10),t(0)),d=function(e){var n=e.timerSecond,t=e.timerMinute,c=e.onResetTimer,s=e.isSession,i=e.setIsTimerOn,r=e.isTimerOn,o=function(){i(!1)};return Object(u.jsxs)("div",{id:"timer-container",children:[Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h2",{id:"timer-label",children:s?"Session":"Break"})}),Object(u.jsxs)("div",{id:"time-left",children:[0===t?"00":t<10?"0"+t:t,":",0===n?"00":n<10?"0"+n:n]})]}),Object(u.jsxs)("section",{className:"button-action",children:[r?Object(u.jsx)("button",{id:"start_stop",onClick:o,children:"Stop"}):Object(u.jsx)("button",{id:"start_stop",onClick:function(){i(!0)},children:"Start"}),Object(u.jsx)("button",{id:"reset",onClick:function(){o(),c()},children:"Reset"})]})]})},j=function(e){var n=e.breakInterval,t=e.sessionLength,c=e.onIncreaseBreakLength,s=e.onDecreaseBreakLength,i=e.onIncreaseSessionLength,r=e.onDecreaseSessionLength;return Object(u.jsxs)("div",{className:"setting",children:[Object(u.jsxs)("div",{className:"break-session",children:[Object(u.jsx)("div",{id:"break-label",className:"label",children:"Break Length"}),Object(u.jsxs)("div",{className:"setting-button",children:[Object(u.jsx)("button",{id:"break-decrement",onClick:function(){1!==n&&s()},children:"-"}),Object(u.jsx)("span",{id:"break-length",children:n}),Object(u.jsx)("button",{id:"break-increment",onClick:function(){60!==n&&c()},children:"+"})]})]}),Object(u.jsxs)("div",{className:"break-session",children:[Object(u.jsx)("div",{id:"session-label",className:"label",children:"Session Length"}),Object(u.jsxs)("div",{className:"setting-button",children:[Object(u.jsx)("button",{id:"session-decrement",onClick:function(){1!==t&&r(t+1)},children:"-"}),Object(u.jsx)("span",{id:"session-length",children:t}),Object(u.jsx)("button",{id:"session-increment",onClick:function(){60!==t&&i(t-1)},children:"+"})]})]})]})},b=function(){var e=Object(c.useState)(5),n=Object(a.a)(e,2),t=n[0],s=n[1],i=Object(c.useState)(25),r=Object(a.a)(i,2),b=r[0],l=r[1],O=Object(c.useState)({minute:b,second:0}),m=Object(a.a)(O,2),h=m[0],f=m[1],x=Object(c.useState)(!1),k=Object(a.a)(x,2),v=k[0],p=k[1],g=Object(c.useState)(!0),S=Object(a.a)(g,2),L=S[0],I=S[1],N=Object(c.useRef)(null);Object(c.useEffect)((function(){if(v){var e=setInterval((function(){return B(h.minute,h.second)}),1e3);return function(){return clearInterval(e)}}}),[v,h.minute,h.second]),Object(c.useEffect)((function(){0===h.minute&&0===h.second&&N.current.play()}),[h.second,h.minute]);var B=function(){switch(h.second){case 0:0===h.minute?L?(I(!1),C(L)):(I(!0),C(L)):f((function(e){return console.log("prev",e),{minute:e.minute-1,second:59}}));break;default:f((function(e){return Object(o.a)(Object(o.a)({},h),{},{second:e.second-1})}))}},C=function(e){f(e?Object(o.a)(Object(o.a)({},h),{},{minute:t}):Object(o.a)(Object(o.a)({},h),{},{minute:b}))};return Object(u.jsxs)("div",{className:"main",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h2",{children:"Pomodoro Clock"}),Object(u.jsx)("p",{children:"Be productive"})]}),Object(u.jsx)(j,{breakInterval:t,sessionLength:b,onIncreaseBreakLength:function(){s((function(e){return e+1}))},onDecreaseBreakLength:function(){s((function(e){return e-1}))},onIncreaseSessionLength:function(){l((function(e){return e+1})),f(Object(o.a)(Object(o.a)({},h),{},{minute:b+1}))},onDecreaseSessionLength:function(){l((function(e){return e-1})),f((function(e){return Object(o.a)(Object(o.a)({},h),{},{minute:e.minute-1})}))},isTimerOn:v}),Object(u.jsx)(d,{timerMinute:h.minute,timerSecond:h.second,onResetTimer:function(){console.log("Reset btn clicked"),l(25),s(5),f({minute:25,second:0}),I(!0),N.current.load()},startStopTimer:function(e){p(e)},isTimerOn:v,setIsTimerOn:p,isSession:L}),Object(u.jsx)("audio",{id:"beep",ref:N,src:"https://onlineclock.net/audio/options/default.mp3",type:"audio/mpeg"})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.fb02793f.chunk.js.map