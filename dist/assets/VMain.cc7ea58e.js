import{m as u,u as i}from"./router.3ca15bff.js";import{b as m}from"./layout.fbe2e07a.js";import{u as c}from"./ssrBoot.f692a6f6.js";import{i as d,c as o}from"./index.882eef62.js";const V=d({name:"VMain",props:{scrollable:Boolean,...u({tag:"main"})},setup(l,t){let{slots:a}=t;const{mainStyles:r}=m(),{ssrBootStyles:n}=c();return i(()=>{var s,e;return o(l.tag,{class:["v-main",{"v-main--scrollable":l.scrollable}],style:[r.value,n.value]},{default:()=>[l.scrollable?o("div",{class:"v-main__scroller"},[(s=a.default)==null?void 0:s.call(a)]):(e=a.default)==null?void 0:e.call(a)]})}),{}}});export{V};