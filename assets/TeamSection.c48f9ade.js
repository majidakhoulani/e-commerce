import{i as y,m as F,a as U,d as z,t as r,b as k,c as i,e as f,I as q,r as D,L as O,aq as K,q as v,aj as g,ak as s,z as c,x as o,U as w,al as B,s as A,ar as T,y as b}from"./index.a9ef48b1.js";import{q as M,m as L,s as J,u as C,c as j,t as N,b as R,v as Y,d as V,g as H,f as G,n as h,x as Q,C as W,_ as P,h as X}from"./router.a0917bc8.js";import{V as E}from"./VContainer.2bdc5c5b.js";import{V as Z,a as I}from"./VRow.253537ed.js";const ee=y({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...M(),...L(),...F()},setup(e,u){let{slots:n}=u;const{themeClasses:m}=U(e),{densityClasses:a}=J(e);z({VTimelineDivider:{lineColor:r(e,"lineColor")},VTimelineItem:{density:r(e,"density"),lineInset:r(e,"lineInset")}});const d=k(()=>{const l=e.side?e.side:e.density!=="default"?"end":null;return l&&`v-timeline--side-${l}`}),t=k(()=>{const l=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return l;case"start":return l[0];case"end":return l[1];default:return null}});return C(()=>i(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,t.value,{"v-timeline--inset-line":!!e.lineInset},m.value,a.value,d.value],style:{"--v-timeline-line-thickness":f(e.lineThickness)}},n)),{}}}),te=y({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:q,iconColor:String,lineColor:String,...j(),...N(),...R()},setup(e,u){let{slots:n}=u;const{sizeClasses:m,sizeStyles:a}=Y(e,"v-timeline-divider__dot"),{backgroundColorStyles:d,backgroundColorClasses:t}=V(r(e,"dotColor")),{roundedClasses:l}=H(e,"v-timeline-divider__dot"),{elevationClasses:_}=G(e),{backgroundColorClasses:p,backgroundColorStyles:S}=V(r(e,"lineColor"));return z({VIcon:{color:r(e,"iconColor"),icon:r(e,"icon"),size:r(e,"size")}}),C(()=>{var x;var $;return i("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[i("div",{class:["v-timeline-divider__before",p.value],style:S.value},null),!e.hideDot&&i("div",{key:"dot",class:["v-timeline-divider__dot",_.value,l.value,m.value],style:a.value},[i("div",{class:["v-timeline-divider__inner-dot",t.value,l.value],style:d.value},[(x=($=n.default)==null?void 0:$.call(n))!=null?x:e.icon?i(h,null,null):void 0])]),i("div",{class:["v-timeline-divider__after",p.value],style:S.value},null)])}),{}}}),ie=y({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:q,iconColor:String,lineInset:[Number,String],...j(),...R(),...N(),...L(),...Q()},setup(e,u){let{slots:n}=u;const{dimensionStyles:m}=W(e),a=D(0),d=D();return O(d,t=>{var _;var l;!t||(a.value=(_=(l=t.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:l.getBoundingClientRect().width)!=null?_:0)},{flush:"post"}),C(()=>{var t,l;return i("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":f(a.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${f(e.lineInset)})`:f(0)}},[i("div",{class:"v-timeline-item__body",style:m.value},[(t=n.default)==null?void 0:t.call(n)]),i(te,{ref:d,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:n.icon}),e.density!=="compact"&&i("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((l=n.opposite)==null?void 0:l.call(n))])])}),{}}}),se={data(){return{years:[{color:"cyan",year:"August 2022",title:" HTML",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"},{color:"green",year:"September & October 2022",title:"CSS && BULMAY"},{color:"pink",year:"November 2022",title:"JAVASCRIPT"},{color:"amber",year:"December 2022",title:"VUE"},{color:"red",year:"January 2023",title:"VUETIFY && PINIA"}]}},mounted(){K.init()}},le={class:"about text-center pt-12 pb-12",id:"aboutSection"},ne={class:"about-title pt-6"},oe={class:"text-h4 font-weight-bold pb-2 text-uppercase"},ae={class:"text-grey font-italic"},de={class:"about-content mt-16"},re=["textContent"],ce={class:"displayBox","data-aos":"zoom-in","data-aos-duration":"3000","data-aos-offset":"600px","data-aos-easing":"ease-in-out"},ue=s("div",{class:"text-left"}," Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. ",-1);function me(e,u,n,m,a,d){return v(),g("section",le,[s("div",ne,[s("h1",oe,c(e.$t("message.about.sectionName")),1),s("p",ae,c(e.$t("message.about.title")),1)]),s("div",de,[i(E,null,{default:o(()=>[i(ee,{align:"start",class:"w-75 ma-auto"},{default:o(()=>[(v(!0),g(w,null,B(a.years,(t,l)=>(v(),A(ie,{key:l,"dot-color":t.color,icon:t.icon,size:"large"},{opposite:o(()=>[s("div",{class:T(`pt-1 headline font-weight-bold text-left text-${t.color}`),textContent:c(t.year)},null,10,re)]),default:o(()=>[s("div",ce,[s("h2",{class:T(`mt-n1 headline font-weight-light  text-left mb-4 text-${t.color}`)},c(t.title),3),ue])]),_:2},1032,["dot-color","icon"]))),128))]),_:1})]),_:1})])])}const ze=P(se,[["render",me]]);const ve={data:()=>({teamList:[{id:1,src:"../src/assets/images/team/team1.jpg",title:"Roduan Kareem Aldeen",explain:"FullStack Developer",href:"https://github.com/RoduanKD"},{id:2,src:"../src/assets/images/team/team3.jpg",title:"Majida Khoulani",explain:"Frontend Developer",href:"https://github.com/majidakhoulani"},{id:3,src:"../src/assets/images/team/team2.jpg",title:"Taiseer Almedani",explain:"FullStack Developer",href:"https://github.com/TaiseerAlmedani"}]})},_e={class:"team text-center pt-16 pb-16"},fe={class:"team-title pt-6"},he={class:"text-h4 font-weight-bold pb-2 text-uppercase"},ge={class:"text-grey font-italic"},be={class:"team-content mt-12"},ye={class:"mt-6 font-weight-black",color:"#212529"},Ce={class:"mt-2 mb-4",color:"#6c757d"},pe={href:"#",class:"ma-2"},Se=["href"],$e={href:"#",class:"ma-2"},xe=s("p",{color:"#6c757d"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.",-1);function ke(e,u,n,m,a,d){return v(),g("section",_e,[s("div",fe,[s("h1",he,c(e.$t("message.team.sectionName")),1),s("p",ge,c(e.$t("message.team.title")),1)]),s("div",be,[i(E,null,{default:o(()=>[i(Z,{"no-gutters":""},{default:o(()=>[(v(!0),g(w,null,B(e.teamList,t=>(v(),A(I,{key:t.id,cols:"12",sm:"4",class:"d-flex mb-6 justify-space-around"},{default:o(()=>[s("div",null,[i(X,{src:t.src,height:"200px",width:"200px",cover:"",class:"rounded-circle",style:{border:"8px solid rgb(193 193 193 / 66%)"}},null,8,["src"]),s("h3",ye,c(t.title),1),s("p",Ce,c(t.explain),1),s("a",pe,[i(h,{color:"black"},{default:o(()=>[b(" mdi-twitter ")]),_:1})]),s("a",{href:t.href,class:"ma-2"},[i(h,{color:"black"},{default:o(()=>[b(" mdi-github ")]),_:1})],8,Se),s("a",$e,[i(h,{"x-large":"",color:"black"},{default:o(()=>[b(" mdi-linkedin ")]),_:1})])])]),_:2},1024))),128)),i(I,{cols:"6",class:"text-center ma-auto mt-8"},{default:o(()=>[xe]),_:1})]),_:1})]),_:1})])])}const qe=P(ve,[["render",ke]]);export{ze as A,qe as T};