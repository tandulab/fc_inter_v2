import{_ as k}from"./AppProgressBar84999.js";import{_ as C}from"./TitleLarge84999.js";import{A as $,_ as d,a as c,b as u,c as x,d as f,e as v,f as w,D as h}from"./DiaryCarousel84999.js";import{_ as z}from"./expert_level84999.js";import{d as g,c as o,F as n,b as e,a as r,k as L,w as _,e as j,u as V,l as D,o as i,_ as F,t as a,g as B}from"../index84999.js";const N="/assets/expert_level_big84999.png",O=["alt"],A=g({__name:"LevelCarousel",setup(b){const l=[new $({disabledClass:"disabled-arrow"})],t=D()?Object.values([d,c,u,x,f,v,w]):Object.values([d,c,u,x,f,v,w]);return(m,s)=>{const y=L("Flicking");return i(),o(n,null,[s[6]||(s[6]=e("div",{class:"flex justify-between mt-[4rem] mb-[2rem]"},[e("p",{class:"text-white uppercase font-normal"},"What’s next")],-1)),r(y,{options:{renderOnlyVisible:!0,circular:!1,bound:!0},plugins:l,class:"mb-[4rem]"},{viewport:_(()=>s[3]||(s[3]=[e("span",{class:"flicking-arrow-prev is-thin"},null,-1),e("span",{class:"flicking-arrow-next is-thin"},null,-1)])),default:_(()=>[s[4]||(s[4]=e("div",{class:"first-elem"},null,-1)),(i(!0),o(n,null,j(V(t),(M,p)=>(i(),o("div",{key:p,class:"prize-image p-[1rem]"},[s[0]||(s[0]=e("p",{class:"text-white-060 font-normal"},"Level 1",-1)),e("img",{src:z,alt:`Prize ${p} image`,class:"my-[3.5rem] mx-auto"},null,8,O),s[1]||(s[1]=e("p",{class:"text-white leading-9 uppercase text-2xl"},"professionista",-1)),s[2]||(s[2]=e("p",{class:"text-white-060 text-xs"},"1000 monete",-1))]))),128)),s[5]||(s[5]=e("div",{class:"first-elem"},null,-1))]),_:1})],64)}}}),E=F(A,[["__scopeId","data-v-4624f579"]]),T={class:"wrapper flex items-center justify-between mt-[5rem]"},I={class:"w-1/2"},P={class:"uppercase text-white"},S={class:"md:border border-white/25 flex relative z-10 md:max-w-[468px] flex-col"},W={class:"flex flex-col md:flex-row md:items-center"},q={class:"pb-[1.5rem] md:p-[1.5rem] w-1/2 md:border-e border-white/25"},G={class:"text-gray-300"},H={class:"flex flex-col md:flex-row md:items-center"},J={class:"pb-[1.5rem] md:p-[1.5rem] w-1/2"},K={class:"text-gray-300"},Z=g({__name:"LevelsView",setup(b){return(l,t)=>{const m=C,s=k;return i(),o(n,null,[e("div",T,[e("div",I,[e("p",P,a(l.$t("diary.level"))+" 2",1),r(m,{class:"!text-left relative z-10 text-[3.5rem] md:text-[8rem] max-w-[15rem] md:!max-w-[30rem] leading-[80%] mt-[1rem]"},{default:_(()=>t[0]||(t[0]=[B(" esperto")])),_:1}),e("div",S,[e("div",W,[e("div",q,[e("p",G,a(l.$t("diary.points")),1),e("div",H,[t[1]||(t[1]=e("h4",{class:"md:mr-[1rem] text-white"},"1287",-1)),r(s,{value:45,class:"mt-[1rem] md:mt-0"})])]),e("div",J,[e("p",K,a(l.$t("level.next_level")),1),t[2]||(t[2]=e("h4",{class:"text-white uppercase"},"maestro",-1))])])])]),t[3]||(t[3]=e("div",{class:"flex w-1/2 justify-center"},[e("img",{src:N,class:"w-[327px]"})],-1))]),r(h),r(E)],64)}}});export{Z as default};
