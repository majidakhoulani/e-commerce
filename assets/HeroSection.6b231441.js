import{w as R,o as L,u as k,h as B,_ as M}from"./router.4244b5b8.js";import{i as j,ap as z,r as A,ah as C,L as u,K as I,b as N,an as O,c as a,s as T,aj as q,y as c,ak as h,A as m}from"./index.39a90e60.js";import{V as D,a as F}from"./VRow.7e89a4e1.js";import{V as Y}from"./VBtn.ea577ed9.js";import{g as K}from"./getScrollParent.ff47518e.js";const U="/e-commerce/prod/baseurl/assets/images/header-bg.jpg";function W(s){return Math.floor(Math.abs(s))*Math.sign(s)}const G=j({name:"VParallax",props:{scale:{type:[Number,String],default:.5}},setup(s,p){let{slots:d}=p;const{intersectionRef:r,isIntersecting:n}=R(),{resizeRef:v,contentRect:f}=L(),{height:y}=z(),i=A();C(()=>{var e;r.value=v.value=(e=i.value)==null?void 0:e.$el});let t;u(n,e=>{e?(t=K(r.value),t=t===document.scrollingElement?document:t,t.addEventListener("scroll",o,{passive:!0}),o()):t.removeEventListener("scroll",o)}),I(()=>{var e;(e=t)==null||e.removeEventListener("scroll",o)}),u(y,o),u(()=>{var e;return(e=f.value)==null?void 0:e.height},o);const _=N(()=>1-O(+s.scale));let g=-1;function o(){!n.value||(cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var b,w;var e;const x=((e=i.value)==null?void 0:e.$el).querySelector(".v-img__img");if(!x)return;const $=(b=t.clientHeight)!=null?b:document.documentElement.clientHeight,V=(w=t.scrollTop)!=null?w:window.scrollY,S=r.value.offsetTop,l=f.value.height,P=S+(l-$)/2,E=W((V-P)*_.value),H=Math.max(1,(_.value*($-l)+l)/l);x.style.setProperty("transform",`translateY(${E}px) scale(${H})`)}))}return k(()=>a(B,{class:["v-parallax",{"v-parallax--active":n.value}],ref:i,cover:!0,onLoadstart:o,onLoad:o},d)),{}}}),J={props:{title:"Welcome To Our Studio!"}},Q={class:"hero-section"},X={class:"text-h4 font-weight-light mb-4 text-white font-italic"},Z={class:"subheading text-h3 text-white font-weight-bold"},ee={class:"text-white text-uppercase text-h6"};function te(s,p,d,r,n,v){return T(),q("section",Q,[a(G,{dark:"",src:U},{default:c(()=>[a(D,{align:"center",justify:"center",class:"hero-section-content"},{default:c(()=>[a(F,{class:"text-center",cols:"12"},{default:c(()=>[h("h1",X,m(s.$t("message.hero.title")),1),h("h3",Z,m(s.$t("message.hero.subtitle")),1),a(Y,{color:"orange darken-2",elevation:"2",class:"mt-12 pa-4 h-75 hero-button",width:"224"},{default:c(()=>[h("span",ee,m(s.$t("message.hero.button")),1)]),_:1})]),_:1})]),_:1})]),_:1})])}const le=M(J,[["render",te]]);export{le as H};
