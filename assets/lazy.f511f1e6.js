import{p as r,r as n,b as u,L as f}from"./index.447aaa44.js";const c=r({eager:Boolean},"lazy");function m(a,o){const e=n(!1),s=u(()=>e.value||a.eager||o.value);f(o,()=>e.value=!0);function t(){a.eager||(e.value=!1)}return{isBooted:e,hasContent:s,onAfterLeave:t}}export{c as m,m as u};