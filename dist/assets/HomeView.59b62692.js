import{H as be}from"./HeroSection.9b73e0a6.js";import{V as H,a as z}from"./VRow.679d34f2.js";import{a as xe,x as $e,b as ye,i as Se,z as Ve,c as ke,m as le,d as we,e as je,C as Le,f as Ce,l as Fe,E as Pe,g as Te,h,_ as A,n as S,q as qe,t as Be,u as Me}from"./router.487b3a6c.js";import{i as ce,m as re,a as ue,t as Ie,c as e,s as m,aj as p,ak as a,A as _,y as s,u as me,al as q,am as B,z as n,B as M,ad as Re,an as ze,g as Ae,I as ie,j as Ne,b as I,ao as De,ap as Ee,r as Q,a9 as We,U as W,l as He,n as Ue,aq as de,x as fe,h as pe,q as $}from"./index.8f0668ae.js";import{V as N}from"./VContainer.7a3e6b6b.js";import{V as R}from"./index.01dff7f3.js";import{m as Oe,u as Ye}from"./delay.1bd830a7.js";import{V as w,a as j,b as F,c as _e}from"./VCard.a2f965e2.js";import{V as L}from"./VBtn.dc6c4792.js";import{T as Ge}from"./TheFooter.9e38e433.js";import{A as Ke,_ as Je}from"./TeamSection.dd18cf37.js";import{V as Qe}from"./VAvatar.3ddf9b1b.js";import{V as Xe}from"./VForm.93d9856b.js";import{V as X}from"./VTextField.e47e5ba6.js";import{V as Ze}from"./VTextarea.1527d143.js";import"./getScrollParent.ff47518e.js";import"./VSpacer.d9180aed.js";import"./layout.8fbccf2d.js";import"./forwardRefs.54bb1675.js";const Z="/e-commerce/assets/images/services/service1.jpg";const ee=ce({name:"VSheet",props:{color:String,...xe(),...$e(),...ye(),...Se(),...Ve(),...ke(),...le(),...re()},setup(t,c){let{slots:d}=c;const{themeClasses:v}=ue(t),{backgroundColorClasses:r,backgroundColorStyles:b}=we(Ie(t,"color")),{borderClasses:o}=je(t),{dimensionStyles:u}=Le(t),{elevationClasses:x}=Ce(t),{locationStyles:V}=Fe(t),{positionClasses:C}=Pe(t),{roundedClasses:P}=Te(t);return()=>e(t.tag,{class:["v-sheet",v.value,r.value,o.value,x.value,C.value,P.value],style:[b.value,u.value,V.value]},d)}}),et={class:"service text-center pt-6 pb-6"},tt={class:"service-title pt-6"},st={class:"text-h4 font-weight-bold pb-2 text-uppercase"},ot={class:"text-grey font-italic"},at={class:"service-content"},it=a("h4",{class:"subheading pa-4 font-weight-bold"},"E-Commerce",-1),nt=a("p",{class:"text-medium-emphasis"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",-1),lt=a("h4",{class:"subheading pa-4 font-weight-bold"},"Responsive Design",-1),ct=a("p",{class:"text-medium-emphasis"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",-1),rt=a("h4",{class:"subheading pa-4 font-weight-bold"},"Web Security",-1),ut=a("p",{class:"text-medium-emphasis"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",-1),mt={__name:"ServiceSection",setup(t){return(c,d)=>(m(),p("section",et,[a("div",tt,[a("h1",st,_(c.$t("message.service.sectionName")),1),a("p",ot,_(c.$t("message.service.title")),1)]),a("div",at,[e(N,null,{default:s(()=>[e(H,{"no-gutters":""},{default:s(()=>[e(z,{cols:"12",class:"d-flex mb-6 justify-space-around"},{default:s(()=>[e(ee,{class:"ma-2 pa-2"},{default:s(()=>[e(h,{class:"ma-auto",src:Z,cover:"",width:"150",height:"150"}),it,nt]),_:1}),e(ee,{class:"ma-2 pa-2"},{default:s(()=>[e(h,{class:"ma-auto",src:Z,cover:"",width:"150",height:"150"}),lt,ct]),_:1}),e(ee,{class:"ma-2 pa-2"},{default:s(()=>[e(h,{class:"ma-auto",src:Z,cover:"",width:"150",height:"150"}),rt,ut]),_:1})]),_:1})]),_:1})]),_:1})])]))}},dt="/e-commerce/assets/images/portfolio/Seo1.jpg",ft="/e-commerce/assets/images/portfolio/krypto.jpg",pt="/e-commerce/assets/images/portfolio/vpn.jpg",_t="/e-commerce/assets/images/portfolio/1.jpg",ht="/e-commerce/assets/images/portfolio/2.jpg",gt="/e-commerce/assets/images/portfolio/3.jpg";const Y=ce({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...Oe()},emits:{"update:modelValue":t=>!0},setup(t,c){let{slots:d}=c;const v=me(t,"modelValue"),{runOpenDelay:r,runCloseDelay:b}=Ye(t,o=>!t.disabled&&(v.value=o));return()=>{var o;return(o=d.default)==null?void 0:o.call(d,{isHovering:v.value,props:{onMouseenter:r,onMouseleave:b}})}}}),vt={data(){return{portfolioList:[{id:1,src:"/assets/images/portfolio/Seo1.jpg",title:"SEO Project",explain:"Website",href:"https://majidakhoulani.github.io/seo_project/"},{id:2,src:"/assets/images/portfolio/krypto.jpg",title:"krypton Project",explain:" Website",href:"https://majidakhoulani.github.io/Krypton-Api-Vue/"},{id:3,src:"/assets/images/portfolio/vpn.jpg",title:"Bulma Project",explain:"Website",href:"https://majidakhoulani.github.io/fresh_bulma_project/"},{id:4,src:"/assets/images/portfolio/1.jpg",title:"Threads",explain:"Illustration",href:""},{id:5,src:"/assets/images/portfolio/2.jpg",title:"Explore",explain:"Graphic Design",href:""},{id:6,src:"/assets/images/portfolio/3.jpg",title:"Finish",explain:"Identity",href:""},{id:7,src:"/assets/images/portfolio/4.jpg",title:"Southwest",explain:"Website Design"},{id:8,src:"/assets/images/portfolio/6.jpg",title:"Window",explain:"Photography"},{id:9,src:"/assets/images/portfolio/5.jpg",title:"Lines",explain:"Branding"}],transparent:"rgba(255, 255, 255, 0)"}}},bt={class:"portfolio text-center pt-16 pb-16"},xt={class:"portfolio-title pt-6"},$t={class:"text-h4 font-weight-bold pb-2 text-uppercase"},yt={class:"text-grey font-italic"},St={class:"portfolio-content mt-12"},Vt={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}},kt={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}},wt={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}},jt={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}},Lt={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}},Ct={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}};function Ft(t,c,d,v,r,b){return m(),p("section",bt,[a("div",xt,[a("h1",$t,_(t.$t("message.portfolio.sectionName")),1),a("p",yt,_(t.$t("message.portfolio.title")),1)]),a("div",St,[e(N,null,{default:s(()=>[e(H,{"no-gutters":""},{default:s(()=>[e(z,{cols:"12",class:"d-flex mb-8 justify-space-around"},{default:s(()=>[e(Y,null,{default:s(({isHovering:o,props:u})=>[e(w,q(B(u)),{default:s(()=>[e(h,{src:dt,height:"200px",width:"300px",cover:""}),e(j,{class:"pt-4 pb-2"},{default:s(()=>[n(" SEO Project ")]),_:1}),e(F,{class:"pb-6"},{default:s(()=>[n(" Website ")]),_:1}),e(R,null,{default:s(()=>[o?(m(),p("div",Vt,[e(L,{class:"mx-4",color:"#000",icon:"",href:"https://majidakhoulani.github.io/seo_project/",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):M("",!0)]),_:2},1024)]),_:2},1040),e(w,q(B(u)),{default:s(()=>[e(h,{src:ft,height:"200px",width:"300px",cover:""}),e(j,{class:"pt-4 pb-2"},{default:s(()=>[n(" krypton Project ")]),_:1}),e(F,{class:"pb-6"},{default:s(()=>[n(" Website ")]),_:1}),e(R,null,{default:s(()=>[o?(m(),p("div",kt,[e(L,{class:"mx-4",color:"#000",icon:"",href:"https://majidakhoulani.github.io/Krypton-Api-Vue/",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):M("",!0)]),_:2},1024)]),_:2},1040),e(w,q(B(u)),{default:s(()=>[e(h,{src:pt,height:"200px",width:"300px",cover:""}),e(j,{class:"pt-4 pb-2"},{default:s(()=>[n(" Bulma Project ")]),_:1}),e(F,{class:"pb-6"},{default:s(()=>[n(" Website ")]),_:1}),e(R,null,{default:s(()=>[o?(m(),p("div",wt,[e(L,{class:"mx-4",color:"#000",icon:"",href:"https://majidakhoulani.github.io/fresh_bulma_project/",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):M("",!0)]),_:2},1024)]),_:2},1040)]),_:1})]),_:1}),e(z,{cols:"12",class:"d-flex mb-8 justify-space-around"},{default:s(()=>[e(Y,null,{default:s(({isHovering:o,props:u})=>[e(w,q(B(u)),{default:s(()=>[e(h,{src:_t,height:"200px",width:"300px",cover:""}),e(j,{class:"pt-4 pb-2"},{default:s(()=>[n(" Threads ")]),_:1}),e(F,{class:"pb-6"},{default:s(()=>[n(" Website ")]),_:1}),e(R,null,{default:s(()=>[o?(m(),p("div",jt,[e(L,{class:"mx-4",color:"#000",icon:"",href:"#",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):M("",!0)]),_:2},1024)]),_:2},1040),e(w,q(B(u)),{default:s(()=>[e(h,{src:ht,height:"200px",width:"300px",cover:""}),e(j,{class:"pt-4 pb-2"},{default:s(()=>[n(" Explore ")]),_:1}),e(F,{class:"pb-6"},{default:s(()=>[n(" Illustration ")]),_:1}),e(R,null,{default:s(()=>[o?(m(),p("div",Lt,[e(L,{class:"mx-4",color:"#000",icon:"",href:"#",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):M("",!0)]),_:2},1024)]),_:2},1040),e(w,q(B(u)),{default:s(()=>[e(h,{src:gt,height:"200px",width:"300px",cover:""}),e(j,{class:"pt-4 pb-2"},{default:s(()=>[n(" Finish ")]),_:1}),e(F,{class:"pb-6"},{default:s(()=>[n(" Graphic Design ")]),_:1}),e(R,null,{default:s(()=>[o?(m(),p("div",Ct,[e(L,{class:"mx-4",color:"#000",icon:"",href:"#",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):M("",!0)]),_:2},1024)]),_:2},1040)]),_:1})]),_:1})]),_:1})]),_:1})])])}const Pt=A(vt,[["render",Ft]]),ne=Re("testimonials",{state:()=>({testimonialsList:[]}),persist:!0,getters:{getTestimonials(t){return t.testimonialsList}},actions:{async fetchTestimonials(){const t=await ze.get("https://testimonialapi.toolcarton.com/api");this.testimonialsList=t.data}}});const Tt=Ae()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:ie,default:"$ratingEmpty"},fullIcon:{type:ie,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},ripple:Boolean,...qe(),...Be(),...le(),...re()},emits:{"update:modelValue":t=>!0},setup(t,c){let{slots:d}=c;const{t:v}=Ne(),{themeClasses:r}=ue(t),b=me(t,"modelValue"),o=I(()=>De(parseFloat(b.value),0,+t.length)),u=I(()=>Ee(Number(t.length),1)),x=I(()=>u.value.flatMap(i=>t.halfIncrements?[i-.5,i]:[i])),V=Q(-1),C=Q(-1),P=Q();let D=!1;const E=I(()=>x.value.map(i=>{var O;const y=t.hover&&V.value>-1,f=o.value>=i,l=V.value>=i,k=(y?l:f)?t.fullIcon:t.emptyIcon,T=(O=t.activeColor)!=null?O:t.color,J=f||l?T:t.color;return{isFilled:f,isHovered:l,icon:k,color:J}})),G=I(()=>[0,...x.value].map(i=>{function y(){V.value=i}function f(){V.value=-1}function l(){if(i===0&&o.value===0){var T;(T=P.value)==null||T.focus()}else C.value=i}function g(){D||(C.value=-1)}function k(){t.disabled||t.readonly||(b.value=o.value===i&&t.clearable?0:i)}return{onMouseenter:t.hover?y:void 0,onMouseleave:t.hover?f:void 0,onFocus:l,onBlur:g,onClick:k}}));function K(){D=!0}function he(){D=!1}const te=I(()=>{var i;return(i=t.name)!=null?i:`v-rating-${We()}`});function U(i){var y,f;let{value:l,index:g,showStar:k=!0}=i;const{onMouseenter:T,onMouseleave:J,onFocus:O,onBlur:ge,onClick:ve}=G.value[g+1],oe=`${te.value}-${String(l).replace(".","-")}`,ae={color:(y=E.value[g])==null?void 0:y.color,density:t.density,disabled:t.disabled,icon:(f=E.value[g])==null?void 0:f.icon,ripple:t.ripple,size:t.size,tag:"span",variant:"plain"};return e(W,null,[e("label",{for:oe,class:{"v-rating__item--half":t.halfIncrements&&l%1>0,"v-rating__item--full":t.halfIncrements&&l%1===0},onMousedown:K,onMouseup:he,onMouseenter:T,onMouseleave:J},[e("span",{class:"v-rating__hidden"},[v(t.itemAriaLabel,l,t.length)]),k?d.item?d.item({...E.value[g],props:ae,value:l,index:g}):e(L,ae,null):void 0]),e("input",{class:"v-rating__hidden",name:te.value,id:oe,type:"radio",value:l,checked:o.value===l,onClick:ve,onFocus:O,onBlur:ge,ref:g===0?P:void 0,readonly:t.readonly,disabled:t.disabled},null)])}function se(i){return d["item-label"]?d["item-label"](i):i.label?e("span",null,[i.label]):e("span",null,[n("\xA0")])}return Me(()=>{var i;const y=!!((i=t.itemLabels)!=null&&i.length)||d["item-label"];return e(t.tag,{class:["v-rating",{"v-rating--hover":t.hover,"v-rating--readonly":t.readonly},r.value]},{default:()=>[e(U,{value:0,index:-1,showStar:!1},null),u.value.map((f,l)=>{var g,k;return e("div",{class:"v-rating__wrapper"},[y&&t.itemLabelPosition==="top"?se({value:f,index:l,label:(g=t.itemLabels)==null?void 0:g[l]}):void 0,e("div",{class:["v-rating__item",{"v-rating__item--focused":Math.ceil(C.value)===f}]},[t.halfIncrements?e(W,null,[e(U,{value:f-.5,index:l*2},null),e(U,{value:f,index:l*2+1},null)]):e(U,{value:f,index:l},null)]),y&&t.itemLabelPosition==="bottom"?se({value:f,index:l,label:(k=t.itemLabels)==null?void 0:k[l]}):void 0])})]})}),{}}}),qt={computed:{...He(ne,["testimonialsList","getTestimonials"])},created(){this.fetchTestimonials()},methods:{...Ue(ne,["fetchTestimonials"])}},Bt={class:"testimonials text-center pt-16 pb-16"},Mt={class:"testimonials-title pt-6"},It={class:"text-h4 font-weight-bold pb-2"},Rt={class:"text-grey font-italic"},zt={class:"testimonials-content mt-12"},At={class:"d-flex flex-no-wrap"},Nt={class:"font-italic pa-1 text-subtitle-1",color:"#6c757d"},Dt={class:"text-center"};function Et(t,c,d,v,r,b){return m(),p("section",Bt,[a("div",Mt,[a("h1",It,_(t.$t("message.testimonials.sectionName")),1),a("p",Rt,_(t.$t("message.testimonials.title")),1)]),a("div",zt,[e(N,null,{default:s(()=>[e(H,{"no-gutters":""},{default:s(()=>[(m(!0),p(W,null,de(t.testimonialsList,o=>(m(),fe(z,{key:o.id,cols:"12",sm:"4",class:"mb-8"},{default:s(()=>[e(Y,null,{default:s(({isHovering:u,props:x})=>[e(w,pe({class:"mx-auto pa-4 transition-swing","max-width":"344","max-height":"500",height:"385"},x,{class:`elevation-${u?24:6}`}),{default:s(()=>[a("div",At,[e(Qe,{class:"ma-3",size:"75",rounded:"0"},{default:s(()=>[e(h,{src:o.avatar},null,8,["src"])]),_:2},1024),a("div",null,[e(j,{class:"text-h6 pt-4"},{default:s(()=>[n(_(o.name),1)]),_:2},1024),e(F,null,{default:s(()=>[n(_(o.designation),1)]),_:2},1024)])]),a("div",null,[e(_e,{class:"text-left"},{default:s(()=>[e(S,{end:"",icon:"mdi-format-quote-open",style:{color:"pink"},size:"28"}),a("span",Nt,_(o.lorem),1),e(S,{end:"",icon:"mdi-format-quote-open",style:{color:"pink",rotate:"-180deg"},size:"28",class:"ml-0"})]),_:2},1024),a("div",Dt,[e(Tt,{color:"yellow darken-3","background-color":"grey darken-1","empty-icon":"$ratingFull","half-increments":"",hover:"",large:"",length:o.rating},null,8,["length"])])])]),_:2},1040,["class"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])])}const Wt=A(qt,[["render",Et]]),Ht="/e-commerce/assets/images/sponser/microsoft.svg",Ut="/e-commerce/assets/images/sponser/google.svg",Ot="/e-commerce/assets/images/sponser/facebook.svg",Yt="/e-commerce/assets/images/sponser/ibm.svg",Gt={},Kt={class:"sponer"},Jt={class:"d-flex d-flex-row ma-8"};function Qt(t,c){return m(),p("section",Kt,[e(N,null,{default:s(()=>[a("div",Jt,[e(h,{src:Ht,height:"50px"}),e(h,{src:Ut,height:"50px"}),e(h,{src:Ot,height:"50px"}),e(h,{src:Yt,height:"50px"})])]),_:1})])}const Xt=A(Gt,[["render",Qt]]);const Zt={data(){return{valid:!1,name:"",nameRules:[t=>!!t||"Name is required",t=>t.length<=10||"Name must be less than 10 characters"],phone:"",phoneRules:[t=>!!t||"Name is required",t=>t.length<=12||"Name must be less than 10 characters"],email:"",emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"]}}},es={class:"contact text-center pt-16 pb-16"},ts={class:"contact-title pt-6"},ss={class:"text-h4 font-weight-bold pb-2 text-white text-uppercase"},os={class:"text-grey font-italic"},as={class:"contact-content mt-12"},is=a("span",{class:"text-white text-uppercase text-h6"},"send message",-1);function ns(t,c,d,v,r,b){return m(),p("section",es,[a("div",ts,[a("h1",ss,_(t.$t("message.contact.sectionName")),1),a("p",os,_(t.$t("message.contact.title")),1)]),a("div",as,[e(N,null,{default:s(()=>[e(H,{"no-gutters":""},{default:s(()=>[e(z,{cols:"6",class:"ma-auto"},{default:s(()=>[e(Xe,{ref:"form",id:"form"},{default:s(()=>[e(X,{modelValue:r.name,"onUpdate:modelValue":c[0]||(c[0]=o=>r.name=o),counter:10,rules:r.nameRules,label:"Your Name",required:"","bg-color":"#F8F9FA",color:"#ffc800"},null,8,["modelValue","rules"]),e(X,{modelValue:r.email,"onUpdate:modelValue":c[1]||(c[1]=o=>r.email=o),rules:r.emailRules,label:"Your Email",required:"","bg-color":"#F8F9FA",color:"#ffc800"},null,8,["modelValue","rules"]),e(X,{modelValue:r.phone,"onUpdate:modelValue":c[2]||(c[2]=o=>r.phone=o),counter:12,rules:r.phoneRules,label:"Your Phone",required:"","bg-color":"#F8F9FA",color:"#ffc800"},null,8,["modelValue","rules"]),e(Ze,{solo:"",name:"input-7-4",label:"",placeholder:"Your Message","bg-color":"#F8F9FA",color:"#ffc800"}),e(L,{color:"orange darken-2",elevation:"2",class:"mt-12 pa-4 h-75",width:"224"},{default:s(()=>[is]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})])])}const ls=A(Zt,[["render",ns]]),cs={data(){return{featureList:[{icon:"mdi-diamond",name:"Web Design",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas. "},{icon:"mdi-api",name:"Development",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas."},{icon:"mdi-cart",name:"Shopping Cart",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas."},{icon:"mdi-shopping",name:"Markeing",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas."},{icon:"mdi-store",name:"Store",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas."},{icon:"mdi-filter",name:"Filltering",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas."}]}}},rs={class:"features text-center pt-16 pb-16"},us={class:"features-title pt-6"},ms={class:"text-h4 font-weight-bold pb-2 text-uppercase"},ds={class:"text-grey font-italic"},fs={class:"features-content mt-12"},ps={class:"text-medium-emphasis"};function _s(t,c,d,v,r,b){return m(),p("section",rs,[a("div",us,[a("h1",ms,_(t.$t("message.features.sectionName")),1),a("p",ds,_(t.$t("message.features.title")),1)]),a("div",fs,[e(N,null,{default:s(()=>[e(H,{"no-gutters":""},{default:s(()=>[(m(!0),p(W,null,de(r.featureList,o=>(m(),fe(z,{key:o.id,cols:"12",sm:"4",class:"mb-8"},{default:s(()=>[e(Y,null,{default:s(({isHovering:u,props:x})=>[e(w,pe({class:"mx-auto pa-4","max-width":"344","max-height":"500",height:"250"},x,{color:u?"success":void 0}),{default:s(()=>[e(S,{size:"40",class:"text-yellow-darken-2 pt-8 pb-4 material-icons",icon:o.icon},null,8,["icon"]),e(j,{class:"subheading pa-4 font-weight-bold"},{default:s(()=>[n(_(o.name),1)]),_:2},1024),e(_e,null,{default:s(()=>[a("span",ps,_(o.lorem),1)]),_:2},1024)]),_:2},1040,["color"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])])}const hs=A(cs,[["render",_s]]),gs={components:{TheFooter:Ge,HeroSection:be,ServiceSection:mt,PortfolioSection:Pt,AboutSection:Ke,TeamSection:Je,TestimonialsSection:Wt,SponserSection:Xt,ContactSection:ls,FeaturesSection:hs},data(){return{title:""}}};function vs(t,c,d,v,r,b){const o=$("HeroSection"),u=$("ServiceSection"),x=$("PortfolioSection"),V=$("AboutSection"),C=$("TeamSection"),P=$("SponserSection"),D=$("TestimonialsSection"),E=$("FeaturesSection"),G=$("ContactSection"),K=$("TheFooter");return m(),p(W,null,[e(o,{title:"Welcome To Our Studio!",src:"/assets/images/header-bg.jpg"}),e(u),e(x),e(V),e(C),e(P),e(D),e(E),e(G),e(K)],64)}const zs=A(gs,[["render",vs]]);export{zs as default};
