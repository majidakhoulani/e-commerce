import{ad as e}from"./index.8f0668ae.js";const r=e("Cart",{state:()=>({items:[]}),persist:!0,getters:{itemsCount(t){return t.items.length}},actions:{addToCard(t){console.log(t),this.items.push(t)},removeItem(t){this.items.splice(t,1)}}});export{r as u};