import{A as u,n as d}from"./date44521.js";import{d as l,i as m,w as o,q as g,h as e,a as n,l as b,u as f,F as v,o as t,f as z,b as w,t as k}from"../index44521.js";const C="/assets/prize-144521.jpg",j="/assets/prize-244521.jpg",x="/assets/prize-344521.jpg",B="/assets/prize-444521.jpg",h=["src","alt"],y=l({__name:"PrizeCarousel",setup(_){const r=[new u({disabledClass:"disabled-arrow"})],a=d()?Object.values([C,j,x,B]):Object.values([]);return(O,s)=>{const p=g("Flicking");return t(),m(p,{options:{renderOnlyVisible:!0,circular:!1,bound:!0},plugins:r},{viewport:o(()=>s[0]||(s[0]=[e("span",{class:"flicking-arrow-prev is-thin"},null,-1),e("span",{class:"flicking-arrow-next is-thin"},null,-1)])),default:o(()=>[s[1]||(s[1]=e("div",{class:"first-elem"},null,-1)),(t(!0),n(v,null,b(f(a),(c,i)=>(t(),n("div",{key:i,class:"prize-image"},[e("img",{src:c,alt:`Prize ${i} image`},null,8,h)]))),128)),s[2]||(s[2]=e("div",{class:"first-elem"},null,-1))]),_:1})}}}),F=z(y,[["__scopeId","data-v-abbdf2dd"]]),P={class:"pt-[5rem] md:pt-0 pb-[10rem]"},$={class:"uppercase text-white mb-[2rem]"},D=l({__name:"PrizeBanner",setup(_){return(r,a)=>(t(),n("div",P,[e("p",$,k(r.$t("prizes.prizes_you_cant_miss")),1),w(F)]))}});export{D as _};
