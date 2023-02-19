import{H as he}from"./HeroSection.1cab76bf.js";import{V as W,a as A}from"./VRow.37ed754e.js";import{a as ge,x as ve,b as be,i as xe,z as $e,c as ye,m as ie,d as Se,e as Ve,C as ke,f as we,l as je,E as Le,g as Ce,h,_ as N,n as S,q as Fe,t as Pe,u as Te}from"./router.ceac1d75.js";import{i as ne,m as le,a as ce,t as Be,c as e,s as m,aj as p,ak as a,A as _,y as s,u as re,h as w,z as n,B as q,ad as qe,al as Me,g as Ie,I as oe,j as Ae,b as M,am as Ne,an as Re,r as J,a9 as ze,U as E,l as De,n as Ee,ao as ue,x as me,q as $}from"./index.4b0aeb21.js";import{V as R}from"./VContainer.38e559ff.js";import{V as I}from"./index.c28c93c4.js";import{m as We,u as He}from"./delay.73ee3df1.js";import{V as j,a as L,b as P,c as de}from"./VCard.2ae36610.js";import{V as C}from"./VBtn.daa84d79.js";import{T as Ue}from"./TheFooter.e23e6b8e.js";import{A as Oe,_ as Ye}from"./TeamSection.2bbd08d5.js";import{V as Ge}from"./VAvatar.4a5beeed.js";import{V as Ke}from"./VForm.4ecd5b67.js";import{V as Q}from"./VTextField.094cebcc.js";import{V as Je}from"./VTextarea.0bbc7580.js";import"./getScrollParent.ff47518e.js";import"./VSpacer.825a41d2.js";import"./layout.fbb71935.js";import"./forwardRefs.54bb1675.js";const Qe="/e-commerce/assets/images/services/service1.jpg",Xe="/e-commerce/assets/images/services/service2.jpg",Ze="/e-commerce/assets/images/services/service3.jpg";const X=ne({name:"VSheet",props:{color:String,...ge(),...ve(),...be(),...xe(),...$e(),...ye(),...ie(),...le()},setup(t,c){let{slots:d}=c;const{themeClasses:v}=ce(t),{backgroundColorClasses:r,backgroundColorStyles:b}=Se(Be(t,"color")),{borderClasses:o}=Ve(t),{dimensionStyles:u}=ke(t),{elevationClasses:x}=we(t),{locationStyles:V}=je(t),{positionClasses:F}=Le(t),{roundedClasses:T}=Ce(t);return()=>e(t.tag,{class:["v-sheet",v.value,r.value,o.value,x.value,F.value,T.value],style:[b.value,u.value,V.value]},d)}}),et={class:"service text-center pt-6 pb-6"},tt={class:"service-title pt-6"},st={class:"text-h4 font-weight-bold pb-2 text-uppercase"},ot={class:"text-grey font-italic"},at={class:"service-content"},it=a("h4",{class:"subheading pa-4 font-weight-bold"},"E-Commerce",-1),nt=a("p",{class:"text-medium-emphasis"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",-1),lt=a("h4",{class:"subheading pa-4 font-weight-bold"},"Responsive Design",-1),ct=a("p",{class:"text-medium-emphasis"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",-1),rt=a("h4",{class:"subheading pa-4 font-weight-bold"},"Web Security",-1),ut=a("p",{class:"text-medium-emphasis"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",-1),mt={__name:"ServiceSection",setup(t){return(c,d)=>(m(),p("section",et,[a("div",tt,[a("h1",st,_(c.$t("message.service.sectionName")),1),a("p",ot,_(c.$t("message.service.title")),1)]),a("div",at,[e(R,null,{default:s(()=>[e(W,{"no-gutters":""},{default:s(()=>[e(A,{cols:"12",class:"d-flex mb-6 justify-space-around"},{default:s(()=>[e(X,{class:"ma-2 pa-2"},{default:s(()=>[e(h,{class:"ma-auto",src:Qe,cover:"",width:"150",height:"150"}),it,nt]),_:1}),e(X,{class:"ma-2 pa-2"},{default:s(()=>[e(h,{class:"ma-auto",src:Xe,cover:"",width:"150",height:"150"}),lt,ct]),_:1}),e(X,{class:"ma-2 pa-2"},{default:s(()=>[e(h,{class:"ma-auto",src:Ze,cover:"",width:"150",height:"150"}),rt,ut]),_:1})]),_:1})]),_:1})]),_:1})])]))}},dt="/e-commerce/assets/images/portfolio/Seo1.jpg",ft="/e-commerce/assets/images/portfolio/krypto.jpg",pt="/e-commerce/assets/images/portfolio/vpn.jpg",_t="/e-commerce/assets/images/portfolio/1.jpg",ht="/e-commerce/assets/images/portfolio/2.jpg",gt="/e-commerce/assets/images/portfolio/3.jpg";const O=ne({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...We()},emits:{"update:modelValue":t=>!0},setup(t,c){let{slots:d}=c;const v=re(t,"modelValue"),{runOpenDelay:r,runCloseDelay:b}=He(t,o=>!t.disabled&&(v.value=o));return()=>{var o;return(o=d.default)==null?void 0:o.call(d,{isHovering:v.value,props:{onMouseenter:r,onMouseleave:b}})}}}),vt={data(){return{portfolioList:[{id:1,src:"/assets/images/portfolio/Seo1.jpg",title:"SEO Project",explain:"Website",href:"https://majidakhoulani.github.io/seo_project/"},{id:2,src:"/assets/images/portfolio/krypto.jpg",title:"krypton Project",explain:" Website",href:"https://majidakhoulani.github.io/Krypton-Api-Vue/"},{id:3,src:"/assets/images/portfolio/vpn.jpg",title:"Bulma Project",explain:"Website",href:"https://majidakhoulani.github.io/fresh_bulma_project/"},{id:4,src:"/assets/images/portfolio/1.jpg",title:"Threads",explain:"Illustration",href:""},{id:5,src:"/assets/images/portfolio/2.jpg",title:"Explore",explain:"Graphic Design",href:""},{id:6,src:"/assets/images/portfolio/3.jpg",title:"Finish",explain:"Identity",href:""},{id:7,src:"/assets/images/portfolio/4.jpg",title:"Southwest",explain:"Website Design"},{id:8,src:"/assets/images/portfolio/6.jpg",title:"Window",explain:"Photography"},{id:9,src:"/assets/images/portfolio/5.jpg",title:"Lines",explain:"Branding"}],transparent:"rgba(255, 255, 255, 0)"}}},bt={class:"portfolio text-center pt-16 pb-16"},xt={class:"portfolio-title pt-6"},$t={class:"text-h4 font-weight-bold pb-2 text-uppercase"},yt={class:"text-grey font-italic"},St={class:"portfolio-content mt-12"},Vt={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}},kt={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}},wt={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}},jt={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}},Lt={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}},Ct={key:0,class:"d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2",style:{height:"100%"}};function Ft(t,c,d,v,r,b){return m(),p("section",bt,[a("div",xt,[a("h1",$t,_(t.$t("message.portfolio.sectionName")),1),a("p",yt,_(t.$t("message.portfolio.title")),1)]),a("div",St,[e(R,null,{default:s(()=>[e(W,{"no-gutters":""},{default:s(()=>[e(A,{cols:"12",class:"d-flex mb-8 justify-space-around"},{default:s(()=>[e(O,null,{default:s(({isHovering:o,props:u})=>[e(j,w({class:"ma-2 pa-2"},u),{default:s(()=>[e(h,{src:dt,height:"200px",width:"300px",cover:""}),e(L,{class:"pt-4 pb-2"},{default:s(()=>[n(" SEO Project ")]),_:1}),e(P,{class:"pb-6"},{default:s(()=>[n(" Website ")]),_:1}),e(I,null,{default:s(()=>[o?(m(),p("div",Vt,[e(C,{class:"mx-4",color:"#000",icon:"",href:"https://majidakhoulani.github.io/seo_project/",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):q("",!0)]),_:2},1024)]),_:2},1040),e(j,w({class:"ma-2 pa-2"},u),{default:s(()=>[e(h,{src:ft,height:"200px",width:"300px",cover:""}),e(L,{class:"pt-4 pb-2"},{default:s(()=>[n(" krypton Project ")]),_:1}),e(P,{class:"pb-6"},{default:s(()=>[n(" Website ")]),_:1}),e(I,null,{default:s(()=>[o?(m(),p("div",kt,[e(C,{class:"mx-4",color:"#000",icon:"",href:"https://majidakhoulani.github.io/Krypton-Api-Vue/",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):q("",!0)]),_:2},1024)]),_:2},1040),e(j,w({class:"ma-2 pa-2"},u),{default:s(()=>[e(h,{src:pt,height:"200px",width:"300px",cover:""}),e(L,{class:"pt-4 pb-2"},{default:s(()=>[n(" Bulma Project ")]),_:1}),e(P,{class:"pb-6"},{default:s(()=>[n(" Website ")]),_:1}),e(I,null,{default:s(()=>[o?(m(),p("div",wt,[e(C,{class:"mx-4",color:"#000",icon:"",href:"https://majidakhoulani.github.io/fresh_bulma_project/",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):q("",!0)]),_:2},1024)]),_:2},1040)]),_:1})]),_:1}),e(A,{cols:"12",class:"d-flex mb-8 justify-space-around"},{default:s(()=>[e(O,null,{default:s(({isHovering:o,props:u})=>[e(j,w({class:"ma-2 pa-2"},u),{default:s(()=>[e(h,{src:_t,height:"200px",width:"300px",cover:""}),e(L,{class:"pt-4 pb-2"},{default:s(()=>[n(" Threads ")]),_:1}),e(P,{class:"pb-6"},{default:s(()=>[n(" WwbSitw Design ")]),_:1}),e(I,null,{default:s(()=>[o?(m(),p("div",jt,[e(C,{class:"mx-4",color:"#000",icon:"",href:"#",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):q("",!0)]),_:2},1024)]),_:2},1040),e(j,w({class:"ma-2 pa-2"},u),{default:s(()=>[e(h,{src:ht,height:"200px",width:"300px",cover:""}),e(L,{class:"pt-4 pb-2"},{default:s(()=>[n(" Explore ")]),_:1}),e(P,{class:"pb-6"},{default:s(()=>[n(" Illustration ")]),_:1}),e(I,null,{default:s(()=>[o?(m(),p("div",Lt,[e(C,{class:"mx-4",color:"#000",icon:"",href:"#",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):q("",!0)]),_:2},1024)]),_:2},1040),e(j,w({class:"ma-2 pa-2"},u),{default:s(()=>[e(h,{src:gt,height:"200px",width:"300px",cover:""}),e(L,{class:"pt-4 pb-2"},{default:s(()=>[n(" Finish ")]),_:1}),e(P,{class:"pb-6"},{default:s(()=>[n(" Graphic Design ")]),_:1}),e(I,null,{default:s(()=>[o?(m(),p("div",Ct,[e(C,{class:"mx-4",color:"#000",icon:"",href:"#",target:"_blank"},{default:s(()=>[e(S,{size:"24px",color:"#fff"},{default:s(()=>[n("mdi-github")]),_:1})]),_:1})])):q("",!0)]),_:2},1024)]),_:2},1040)]),_:1})]),_:1})]),_:1})]),_:1})])])}const Pt=N(vt,[["render",Ft]]),ae=qe("testimonials",{state:()=>({testimonialsList:[]}),persist:!0,getters:{getTestimonials(t){return t.testimonialsList}},actions:{async fetchTestimonials(){const t=await Me.get("https://testimonialapi.toolcarton.com/api");this.testimonialsList=t.data}}});const Tt=Ie()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:oe,default:"$ratingEmpty"},fullIcon:{type:oe,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},ripple:Boolean,...Fe(),...Pe(),...ie(),...le()},emits:{"update:modelValue":t=>!0},setup(t,c){let{slots:d}=c;const{t:v}=Ae(),{themeClasses:r}=ce(t),b=re(t,"modelValue"),o=M(()=>Ne(parseFloat(b.value),0,+t.length)),u=M(()=>Re(Number(t.length),1)),x=M(()=>u.value.flatMap(i=>t.halfIncrements?[i-.5,i]:[i])),V=J(-1),F=J(-1),T=J();let z=!1;const D=M(()=>x.value.map(i=>{var U;const y=t.hover&&V.value>-1,f=o.value>=i,l=V.value>=i,k=(y?l:f)?t.fullIcon:t.emptyIcon,B=(U=t.activeColor)!=null?U:t.color,K=f||l?B:t.color;return{isFilled:f,isHovered:l,icon:k,color:K}})),Y=M(()=>[0,...x.value].map(i=>{function y(){V.value=i}function f(){V.value=-1}function l(){if(i===0&&o.value===0){var B;(B=T.value)==null||B.focus()}else F.value=i}function g(){z||(F.value=-1)}function k(){t.disabled||t.readonly||(b.value=o.value===i&&t.clearable?0:i)}return{onMouseenter:t.hover?y:void 0,onMouseleave:t.hover?f:void 0,onFocus:l,onBlur:g,onClick:k}}));function G(){z=!0}function fe(){z=!1}const Z=M(()=>{var i;return(i=t.name)!=null?i:`v-rating-${ze()}`});function H(i){var y,f;let{value:l,index:g,showStar:k=!0}=i;const{onMouseenter:B,onMouseleave:K,onFocus:U,onBlur:pe,onClick:_e}=Y.value[g+1],te=`${Z.value}-${String(l).replace(".","-")}`,se={color:(y=D.value[g])==null?void 0:y.color,density:t.density,disabled:t.disabled,icon:(f=D.value[g])==null?void 0:f.icon,ripple:t.ripple,size:t.size,tag:"span",variant:"plain"};return e(E,null,[e("label",{for:te,class:{"v-rating__item--half":t.halfIncrements&&l%1>0,"v-rating__item--full":t.halfIncrements&&l%1===0},onMousedown:G,onMouseup:fe,onMouseenter:B,onMouseleave:K},[e("span",{class:"v-rating__hidden"},[v(t.itemAriaLabel,l,t.length)]),k?d.item?d.item({...D.value[g],props:se,value:l,index:g}):e(C,se,null):void 0]),e("input",{class:"v-rating__hidden",name:Z.value,id:te,type:"radio",value:l,checked:o.value===l,onClick:_e,onFocus:U,onBlur:pe,ref:g===0?T:void 0,readonly:t.readonly,disabled:t.disabled},null)])}function ee(i){return d["item-label"]?d["item-label"](i):i.label?e("span",null,[i.label]):e("span",null,[n("\xA0")])}return Te(()=>{var i;const y=!!((i=t.itemLabels)!=null&&i.length)||d["item-label"];return e(t.tag,{class:["v-rating",{"v-rating--hover":t.hover,"v-rating--readonly":t.readonly},r.value]},{default:()=>[e(H,{value:0,index:-1,showStar:!1},null),u.value.map((f,l)=>{var g,k;return e("div",{class:"v-rating__wrapper"},[y&&t.itemLabelPosition==="top"?ee({value:f,index:l,label:(g=t.itemLabels)==null?void 0:g[l]}):void 0,e("div",{class:["v-rating__item",{"v-rating__item--focused":Math.ceil(F.value)===f}]},[t.halfIncrements?e(E,null,[e(H,{value:f-.5,index:l*2},null),e(H,{value:f,index:l*2+1},null)]):e(H,{value:f,index:l},null)]),y&&t.itemLabelPosition==="bottom"?ee({value:f,index:l,label:(k=t.itemLabels)==null?void 0:k[l]}):void 0])})]})}),{}}}),Bt={computed:{...De(ae,["testimonialsList","getTestimonials"])},created(){this.fetchTestimonials()},methods:{...Ee(ae,["fetchTestimonials"])}},qt={class:"testimonials text-center pt-16 pb-16"},Mt={class:"testimonials-title pt-6"},It={class:"text-h4 font-weight-bold pb-2"},At={class:"text-grey font-italic"},Nt={class:"testimonials-content mt-12"},Rt={class:"d-flex flex-no-wrap"},zt={class:"font-italic pa-1 text-subtitle-1",color:"#6c757d"},Dt={class:"text-center"};function Et(t,c,d,v,r,b){return m(),p("section",qt,[a("div",Mt,[a("h1",It,_(t.$t("message.testimonials.sectionName")),1),a("p",At,_(t.$t("message.testimonials.title")),1)]),a("div",Nt,[e(R,null,{default:s(()=>[e(W,{"no-gutters":""},{default:s(()=>[(m(!0),p(E,null,ue(t.testimonialsList,o=>(m(),me(A,{key:o.id,cols:"12",sm:"4",class:"mb-8"},{default:s(()=>[e(O,null,{default:s(({isHovering:u,props:x})=>[e(j,w({class:"mx-auto pa-4 transition-swing","max-width":"344","max-height":"500",height:"385"},x,{class:`elevation-${u?24:6}`}),{default:s(()=>[a("div",Rt,[e(Ge,{class:"ma-3",size:"75",rounded:"0"},{default:s(()=>[e(h,{src:o.avatar},null,8,["src"])]),_:2},1024),a("div",null,[e(L,{class:"text-h6 pt-4"},{default:s(()=>[n(_(o.name),1)]),_:2},1024),e(P,null,{default:s(()=>[n(_(o.designation),1)]),_:2},1024)])]),a("div",null,[e(de,{class:"text-left"},{default:s(()=>[e(S,{end:"",icon:"mdi-format-quote-open",style:{color:"pink"},size:"28"}),a("span",zt,_(o.lorem),1),e(S,{end:"",icon:"mdi-format-quote-open",style:{color:"pink",rotate:"-180deg"},size:"28",class:"ml-0"})]),_:2},1024),a("div",Dt,[e(Tt,{color:"yellow darken-3","background-color":"grey darken-1","empty-icon":"$ratingFull","half-increments":"",hover:"",large:"",length:o.rating},null,8,["length"])])])]),_:2},1040,["class"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])])}const Wt=N(Bt,[["render",Et]]),Ht="/e-commerce/assets/images/sponser/microsoft.svg",Ut="/e-commerce/assets/images/sponser/google.svg",Ot="/e-commerce/assets/images/sponser/facebook.svg",Yt="/e-commerce/assets/images/sponser/ibm.svg",Gt={},Kt={class:"sponer"},Jt={class:"d-flex d-flex-row ma-8"};function Qt(t,c){return m(),p("section",Kt,[e(R,null,{default:s(()=>[a("div",Jt,[e(h,{src:Ht,height:"50px"}),e(h,{src:Ut,height:"50px"}),e(h,{src:Ot,height:"50px"}),e(h,{src:Yt,height:"50px"})])]),_:1})])}const Xt=N(Gt,[["render",Qt]]);const Zt={data(){return{valid:!1,name:"",nameRules:[t=>!!t||"Name is required",t=>t.length<=10||"Name must be less than 10 characters"],phone:"",phoneRules:[t=>!!t||"Name is required",t=>t.length<=12||"Name must be less than 10 characters"],email:"",emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"]}}},es={class:"contact text-center pt-16 pb-16"},ts={class:"contact-title pt-6"},ss={class:"text-h4 font-weight-bold pb-2 text-white text-uppercase"},os={class:"text-grey font-italic"},as={class:"contact-content mt-12"},is=a("span",{class:"text-white text-uppercase text-h6"},"send message",-1);function ns(t,c,d,v,r,b){return m(),p("section",es,[a("div",ts,[a("h1",ss,_(t.$t("message.contact.sectionName")),1),a("p",os,_(t.$t("message.contact.title")),1)]),a("div",as,[e(R,null,{default:s(()=>[e(W,{"no-gutters":""},{default:s(()=>[e(A,{cols:"6",class:"ma-auto"},{default:s(()=>[e(Ke,{ref:"form",id:"form"},{default:s(()=>[e(Q,{modelValue:r.name,"onUpdate:modelValue":c[0]||(c[0]=o=>r.name=o),counter:10,rules:r.nameRules,label:"Your Name",required:"","bg-color":"#F8F9FA",color:"#ffc800"},null,8,["modelValue","rules"]),e(Q,{modelValue:r.email,"onUpdate:modelValue":c[1]||(c[1]=o=>r.email=o),rules:r.emailRules,label:"Your Email",required:"","bg-color":"#F8F9FA",color:"#ffc800"},null,8,["modelValue","rules"]),e(Q,{modelValue:r.phone,"onUpdate:modelValue":c[2]||(c[2]=o=>r.phone=o),counter:12,rules:r.phoneRules,label:"Your Phone",required:"","bg-color":"#F8F9FA",color:"#ffc800"},null,8,["modelValue","rules"]),e(Je,{solo:"",name:"input-7-4",label:"",placeholder:"Your Message","bg-color":"#F8F9FA",color:"#ffc800"}),e(C,{color:"orange darken-2",elevation:"2",class:"mt-12 pa-4 h-75",width:"224"},{default:s(()=>[is]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})])])}const ls=N(Zt,[["render",ns]]),cs={data(){return{featureList:[{icon:"mdi-diamond",name:"Web Design",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas. "},{icon:"mdi-api",name:"Development",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas."},{icon:"mdi-cart",name:"Shopping Cart",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas."},{icon:"mdi-shopping",name:"Markeing",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas."},{icon:"mdi-store",name:"Store",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas."},{icon:"mdi-filter",name:"Filltering",lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas."}]}}},rs={class:"features text-center pt-16 pb-16"},us={class:"features-title pt-6"},ms={class:"text-h4 font-weight-bold pb-2 text-uppercase"},ds={class:"text-grey font-italic"},fs={class:"features-content mt-12"},ps={class:"text-medium-emphasis"};function _s(t,c,d,v,r,b){return m(),p("section",rs,[a("div",us,[a("h1",ms,_(t.$t("message.features.sectionName")),1),a("p",ds,_(t.$t("message.features.title")),1)]),a("div",fs,[e(R,null,{default:s(()=>[e(W,{"no-gutters":""},{default:s(()=>[(m(!0),p(E,null,ue(r.featureList,o=>(m(),me(A,{key:o.id,cols:"12",sm:"4",class:"mb-8"},{default:s(()=>[e(O,null,{default:s(({isHovering:u,props:x})=>[e(j,w({class:"mx-auto pa-4","max-width":"344","max-height":"500",height:"250"},x,{color:u?"success":void 0}),{default:s(()=>[e(S,{size:"40",class:"text-yellow-darken-2 pt-8 pb-4 material-icons",icon:o.icon},null,8,["icon"]),e(L,{class:"subheading pa-4 font-weight-bold"},{default:s(()=>[n(_(o.name),1)]),_:2},1024),e(de,null,{default:s(()=>[a("span",ps,_(o.lorem),1)]),_:2},1024)]),_:2},1040,["color"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])])}const hs=N(cs,[["render",_s]]),gs={components:{TheFooter:Ue,HeroSection:he,ServiceSection:mt,PortfolioSection:Pt,AboutSection:Oe,TeamSection:Ye,TestimonialsSection:Wt,SponserSection:Xt,ContactSection:ls,FeaturesSection:hs},data(){return{title:""}}};function vs(t,c,d,v,r,b){const o=$("HeroSection"),u=$("ServiceSection"),x=$("PortfolioSection"),V=$("AboutSection"),F=$("TeamSection"),T=$("SponserSection"),z=$("TestimonialsSection"),D=$("FeaturesSection"),Y=$("ContactSection"),G=$("TheFooter");return m(),p(E,null,[e(o,{title:"Welcome To Our Studio!",src:"/assets/images/header-bg.jpg"}),e(u),e(x),e(V),e(F),e(T),e(z),e(D),e(Y),e(G)],64)}const Ns=N(gs,[["render",vs]]);export{Ns as default};
