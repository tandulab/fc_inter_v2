import{d as h,c as t,g as C,a as b,b as a,_,n as p,w as i,e as d,t as u,o as f,f as w,h as c,i as v,j as y,u as g,k,F as $}from"../index44521.js";import{L}from"./LogoHome44521.js";import{_ as B}from"./PrizeBanner.vue_vue_type_script_setup_true_lang44521.js";import{f as E,n as F}from"./date44521.js";const N=["href","target"],z=h({__name:"BorderAnchorButton",props:{label:{},size:{},href:{default:""},target:{},surfaceColor:{default:"black"}},setup(e){const r=t(()=>C(e.surfaceColor)),o=t(()=>{switch(e.surfaceColor){case"black":case"blue":return"!border-white";case"white":return"!border-black";default:return"!border-white"}}),n=t(()=>[r.value]),m=t(()=>[o.value]);return(s,l)=>{const x=_;return f(),b("a",{href:s.href,target:s.target,class:"h-[48px] px-[2rem]"},[a(x,{class:p([n.value,"px-[1rem] pt-[0.8rem]"]),id:"first"},{default:i(()=>[d(u(s.label),1)]),_:1},8,["class"]),a(x,{class:p([m.value,"px-[1rem] pt-[0.8rem]"]),id:"second"},{default:i(()=>[d(u(s.label),1)]),_:1},8,["class"])],8,N)}}}),A=w(z,[["__scopeId","data-v-e800be09"]]),T=["href","target"],S=h({__name:"PrimaryAnchorButton",props:{label:{},href:{default:""},target:{},surfaceColor:{default:"black"}},setup(e){const r=t(()=>{switch(e.surfaceColor){case"white":return"text-black";case"blue":case"black":return"text-white";default:return"text-white"}}),o=t(()=>{switch(e.surfaceColor){case"white":return"text-white";case"blue":return"text-blue";case"black":return"text-black";default:return"text-white"}}),n=t(()=>{switch(e.surfaceColor){case"white":return"bg-black";case"black":case"blue":return"bg-blue-100";default:return"bg-white"}}),m=t(()=>[r.value,"bg-transparent"]),s=t(()=>[o.value,n.value]);return(l,x)=>(f(),b("a",{href:l.href,class:"w-full sm:max-w-[240px] 2xl:max-w-[320px]",target:l.target},[c("div",{id:"first",class:p(["uppercase",m.value])},[a(_,null,{default:i(()=>[d(u(l.label),1)]),_:1})],2),c("div",{id:"second",class:p(["uppercase",s.value])},[a(_,null,{default:i(()=>[d(u(l.label),1)]),_:1})],2)],8,T))}}),U=w(S,[["__scopeId","data-v-6b1562b2"]]),V={class:"py-[2.5rem] md:text-center"},I=h({__name:"ContestBanner",setup(e){return(r,o)=>(f(),b("div",V,[g(E)()?(f(),v(_,{key:0,class:"text-gray-400"},{default:i(()=>[d(u(g(F)()?r.$t("footer.prize_competion",{from:"01/10/2024",to:"31/12/2025",total:"37.785,57 "}):r.$t("footer.prize_competion",{from:"06/03/2025",to:"26/03/2025",total:"1.763,81"})),1)]),_:1})):y("",!0)]))}}),R="inter-test.learnie.it",j="fcinter--lytphase2.sandbox.my.site.com/",D="3MVG9U70RXTP1vq8hz3T8zMNUcNpv_Nz8Mp8GE.FAyTYOs44roOIRU2rsH5xdNeq8WlF29t6MHEVi3ql7CxFF";function H(e){return`https://${j}/services/oauth2/authorize/expid_${e}loyaltyweb?redirect_uri=https://${R}/${e}/&response_type=code&state=en&client_id=${D}&scope=openid+refresh_token+api&nonce=1`}const M={class:"pt-[4rem] md:pt-0 w-full mx-auto md:min-h-screen flex md:justify-center md:items-center"},O={class:"my-6 md:max-w-[49vw] mx-auto text-white md:text-center leading-[150%]"},q={class:"mt-8 flex flex-col md:flex-row justify-center gap-4"},Y=h({__name:"HomeView",setup(e){const{lang:r}=k(),o=t(()=>H(r.value));return(n,m)=>{const s=U,l=A;return f(),b($,null,[c("div",M,[c("div",null,[a(L,{class:"h-[116px] md:h-[240px] md:m-auto"}),c("p",O,u(n.$t("home.join_interista")),1),c("div",q,[a(s,{label:n.$t("button.sign_up_for_free"),"surface-color":"blue",href:o.value},null,8,["label","href"]),a(l,{label:n.$t("button.login"),"surface-color":"black",href:o.value},null,8,["label","href"])])])]),a(B),a(I)],64)}}});export{Y as default};
