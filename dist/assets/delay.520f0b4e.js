import{p as u,J as D}from"./index.ab496c87.js";const i=u({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function m(s,l){const e={},a=o=>()=>{if(!D)return Promise.resolve(!0);const n=o==="openDelay";return e.closeDelay&&window.clearTimeout(e.closeDelay),delete e.closeDelay,e.openDelay&&window.clearTimeout(e.openDelay),delete e.openDelay,new Promise(t=>{var r;const y=parseInt((r=s[o])!=null?r:0,10);e[o]=window.setTimeout(()=>{l==null||l(n),t(n)},y)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}export{i as m,m as u};