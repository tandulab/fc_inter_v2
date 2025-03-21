import{A as b}from"./plugins.esm49891.js";import{d as u,M as h,f as x,c as l,F as i,g as e,h as a,t as o,C as g,w as c,A as v,o as n,j as y,e as $}from"../index49891.js";import{P as k}from"./PrimaryButton49891.js";import{_ as B}from"./TextBodyLarge.vue_vue_type_script_setup_true_lang49891.js";import{B as C}from"./BackButton49891.js";const V="/assets/educational_mock_video49891.png",A={class:"flex justify-between mb-[2rem]"},E={class:"text-white uppercase font-normal"},F={class:"text-white leading-9 uppercase text-2xl"},j={class:"text-gray-400 font-medium pt-[6rem] desc"},N=u({__name:"EducationalCarousel",setup(p){const t=[new b({disabledClass:"disabled-arrow"})],{t:s}=h(),_=x(()=>Array.from({length:7},(m,r)=>({title:s(`educational.card_${r+1}_title`),description:s(`educational.card_${r+1}_desc`)})));return(m,r)=>{const f=g("Flicking");return n(),l(i,null,[e("div",A,[e("p",E,o(m.$t("educational.title_carousel")),1)]),a(f,{options:{renderOnlyVisible:!0,circular:!1,bound:!0},plugins:t},{viewport:c(()=>r[0]||(r[0]=[e("span",{class:"flicking-arrow-prev is-thin"},null,-1),e("span",{class:"flicking-arrow-next is-thin"},null,-1)])),default:c(()=>[(n(!0),l(i,null,v(_.value,(d,w)=>(n(),l("div",{key:w,class:"p-[1rem] mr-[1rem] h-[300px] w-[432px] border border-white/25 relative hover:bg-blue-200 card cursor-pointer"},[e("p",F,o(d.title),1),e("p",j,o(d.description),1)]))),128))]),_:1})],64)}}}),I=y(N,[["__scopeId","data-v-99a1f0dc"]]),P={class:"flex items-center justify-between md:mt-[5rem] flex-col flex-col-reverse lg:flex-row"},D={class:"text-white mb-[2rem] mt-[1.5rem] md:mb-[3rem]"},q=u({__name:"EducationalView",setup(p){return(t,s)=>(n(),l(i,null,[e("div",P,[e("div",null,[a(C),e("h1",D,o(t.$t("educational.title")),1),a(B,{class:"text-white md:max-w-[70%]"},{default:c(()=>[$(o(t.$t("educational.description")),1)]),_:1})])]),s[0]||(s[0]=e("img",{src:V,class:"w-full my-[4rem] md:my-[8rem]"},null,-1)),a(I),a(k,{label:t.$t("button.go_to_diary"),class:"mt-[4rem] mb-[4rem] md:mb-[8rem]","surface-color":"blue"},null,8,["label"])],64))}});export{q as default};
