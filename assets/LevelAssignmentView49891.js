import{_ as L,a as k,b as N,c as $,d as j,e as C,f as V,g as A,h as P,i as S,j as T,k as z,L as I}from"./LevelCarousel49891.js";import{_ as R,a as F}from"./starFour49891.js";import{A as f}from"./AppProgressBar49891.js";import{P as U}from"./PrimaryButton49891.js";import{c as q}from"./auth49891.js";import{d as D,z as E,m as M,f as O,p as W,c as G,g as e,a as H,b as J,h as o,t as a,u as t,w as b,_ as h,e as i,r as K,q as Q,F as X,o as x}from"../index49891.js";import"./plugins.esm49891.js";const Y={class:"flex md:items-center flex-col"},Z={class:"mt-[3rem] mb-[2rem] md:mt-[2.4rem] md:mb-[4rem]"},ee={class:"wrapper flex items-center justify-between md:mt-[1.5rem] flex-col flex-col-reverse lg:flex-row border border-white/25 pt-[2.5rem] p-[1.5rem] md:p-[4rem]"},se={class:"w-full lg:w-1/2 md:items-center"},te={class:"text-center md:text-left relative z-10 text-white mb-[2rem] md:mb-[3rem] uppercase mt-[2.5rem] md:mt-0"},le={class:"flex relative z-10 flex-col"},re={class:"flex flex-col md:flex-row border-t border-white/25 md:border-0 mt-4 md:mt-0 pt-[2rem] md:pt-0"},ae={class:"pb-[2.5rem] md:pb-0 md:pr-[1rem] md:w-1/2 lg:w-1/4 md:min-w-[13rem]"},oe={class:"flex gap-x-[8px] mb-2"},me={class:"text-white uppercase"},_e={class:"pb-[1.5rem] md:pb-0 md:pl-[3rem] md:border-s border-white/25"},ie={class:"flex gap-x-[8px] mb-2 pt-[2rem] md:pt-0 border-t border-white/25 md:border-0"},ne={class:"flex flex-col md:flex-row items-baseline"},ce={class:"md:mr-[3rem] text-white md:min-w-[6.6rem]"},de={class:"text-[24px]"},ve={class:"flex justify-center"},pe=["src"],ue={class:"flex w-full md:justify-end"},ke=D({__name:"LevelAssignmentView",setup(ge){const m=q(),{balance:r,next_levels:n}=E(m),{setLoading:_}=M();async function w(){try{await m.fetchBalance()}catch(s){console.error(s)}finally{_(!1)}}async function y(){try{await m.fetchLevels()}catch(s){console.error(s)}finally{_(!1)}}const B=O(()=>{var s,l;return(s=r.value)!=null&&s.id?new URL(Object.assign({"/src/assets/images/levels/user_level/1.png":z,"/src/assets/images/levels/user_level/10.png":T,"/src/assets/images/levels/user_level/11.png":S,"/src/assets/images/levels/user_level/12.png":P,"/src/assets/images/levels/user_level/2.png":A,"/src/assets/images/levels/user_level/3.png":V,"/src/assets/images/levels/user_level/4.png":C,"/src/assets/images/levels/user_level/5.png":j,"/src/assets/images/levels/user_level/6.png":$,"/src/assets/images/levels/user_level/7.png":N,"/src/assets/images/levels/user_level/8.png":k,"/src/assets/images/levels/user_level/9.png":L})[`/src/assets/images/levels/user_level/${(l=r.value)==null?void 0:l.id}.png`],import.meta.url).href:null});return W(()=>{_(!0),w(),y()}),(s,l)=>{var c,d,v,p,u,g;return x(),G(X,null,[e("div",Y,[o(f,{value:25,class:"mt-[3rem]"}),e("h1",Z,a(s.$t("level_assignment.your_level_is"))+": ",1)]),e("div",ee,[e("div",se,[e("h2",te,a((c=t(r))==null?void 0:c.rank_name),1),e("div",le,[e("div",re,[e("div",ae,[e("div",oe,[l[1]||(l[1]=e("img",{src:R},null,-1)),o(h,{class:"text-white text-large"},{default:b(()=>[i(a(s.$t("levels.level")),1)]),_:1})]),e("h2",me,a((d=t(r))==null?void 0:d.level),1)]),e("div",_e,[e("div",ie,[l[2]||(l[2]=e("img",{src:F},null,-1)),o(h,{class:"text-white text-large"},{default:b(()=>[i(a(s.$t("diary.points")),1)]),_:1})]),e("div",ne,[e("h2",ce,[i(a((v=t(r))==null?void 0:v.points)+" ",1),e("span",de,"/"+a((p=t(r))==null?void 0:p.threshold),1)]),o(f,{value:(((u=t(r))==null?void 0:u.points)??0)/(((g=t(r))==null?void 0:g.threshold)??1)*100,class:"mt-[1rem] md:mt-0 min-w-[234px]"},null,8,["value"])])])])])]),e("div",ve,[e("img",{src:B.value,class:"w-[200px] lg:w-[279px]"},null,8,pe)])]),t(n).length>0?(x(),H(I,{key:0,levels:[...t(n)]},null,8,["levels"])):J("",!0),e("div",ue,[o(U,{label:s.$t("button.continue"),class:"w-full md:w-auto mb-[3rem]","surface-color":"blue",onClick:l[0]||(l[0]=fe=>t(K).push({name:t(Q).INSTANT_WIN}))},null,8,["label"])])],64)}}});export{ke as default};
