import{w as H,o as L,u as k,h as B,_ as U}from"./router.79de22cf.js";import{i as M,ap as j,r as z,ah as A,L as h,K as C,b as I,an as N,c as r,s as O,aj as T,y as c,ak as m,A as d}from"./index.aaef5daa.js";import{V as q,a as D}from"./VRow.04cd1be6.js";import{V as F}from"./VBtn.a8afa292.js";import{g as Y}from"./getScrollParent.ff47518e.js";function K(t){return Math.floor(Math.abs(t))*Math.sign(t)}const W=M({name:"VParallax",props:{scale:{type:[Number,String],default:.5}},setup(t,f){let{slots:i}=f;const{intersectionRef:a,isIntersecting:n}=H(),{resizeRef:v,contentRect:p}=L(),{height:y}=j(),u=z();A(()=>{var e;a.value=v.value=(e=u.value)==null?void 0:e.$el});let s;h(n,e=>{e?(s=Y(a.value),s=s===document.scrollingElement?document:s,s.addEventListener("scroll",o,{passive:!0}),o()):s.removeEventListener("scroll",o)}),C(()=>{var e;(e=s)==null||e.removeEventListener("scroll",o)}),h(y,o),h(()=>{var e;return(e=p.value)==null?void 0:e.height},o);const g=I(()=>1-N(+t.scale));let _=-1;function o(){!n.value||(cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var w,b;var e;const x=((e=u.value)==null?void 0:e.$el).querySelector(".v-img__img");if(!x)return;const $=(w=s.clientHeight)!=null?w:document.documentElement.clientHeight,V=(b=s.scrollTop)!=null?b:window.scrollY,S=a.value.offsetTop,l=p.value.height,P=S+(l-$)/2,R=K((V-P)*g.value),E=Math.max(1,(g.value*($-l)+l)/l);x.style.setProperty("transform",`translateY(${R}px) scale(${E})`)}))}return k(()=>r(B,{class:["v-parallax",{"v-parallax--active":n.value}],ref:u,cover:!0,onLoadstart:o,onLoad:o},i)),{}}}),G={setup(){return{imageUrl:new URL("/e-commerce/assets/images",self.location).href}},props:{title:"Welcome To Our Studio!",src:"/header-bg"}},J={class:"hero-section"},Q={class:"text-h4 font-weight-light mb-4 text-white font-italic"},X={class:"subheading text-h3 text-white font-weight-bold"},Z={class:"text-white text-uppercase text-h6"};function ee(t,f,i,a,n,v){return O(),T("section",J,[r(W,{dark:"",src:`${a.imageUrl}${i.src}.jpg`},{default:c(()=>[r(q,{align:"center",justify:"center",class:"hero-section-content"},{default:c(()=>[r(D,{class:"text-center",cols:"12"},{default:c(()=>[m("h1",Q,d(t.$t("message.hero.title")),1),m("h3",X,d(t.$t("message.hero.subtitle")),1),r(F,{color:"orange darken-2",elevation:"2",class:"mt-12 pa-4 h-75 hero-button",width:"224"},{default:c(()=>[m("span",Z,d(t.$t("message.hero.button")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["src"])])}const ne=U(G,[["render",ee]]);export{ne as H};
