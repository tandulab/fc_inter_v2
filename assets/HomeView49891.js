import{L as y}from"./LogoHome49891.js";import{_ as v}from"./PrizeBanner.vue_vue_type_script_setup_true_lang49891.js";import{d as b,c as w,a as $,b as k,u as x,w as f,_ as L,e as m,t as i,o as h,f as t,g as u,n as p,h as o,i as _,j as C,k as B,l as S,m as A,p as E,F as T,r as I,q as R}from"../index49891.js";import{f as U,n as z}from"./date49891.js";import{u as N}from"./auth49891.js";import"./plugins.esm49891.js";const V={class:"py-[2.5rem] md:text-center"},q=b({__name:"ContestBanner",setup(e){return(a,n)=>(h(),w("div",V,[x(U)()?(h(),$(L,{key:0,class:"text-gray-400"},{default:f(()=>[m(i(x(z)()?a.$t("footer.prize_competion",{from:"01/10/2024",to:"31/12/2025",total:"37.785,57 "}):a.$t("footer.prize_competion",{from:"06/03/2025",to:"26/03/2025",total:"1.763,81"})),1)]),_:1})):k("",!0)]))}}),D="inter-test.learnie.it",F="my.www2.inter-staging.it",j="3MVG9XPlQYHF2jxDvGrHElIyUxd.C5RP25GGsITQv2pdw3hHzUzgT96tJgUqa74gd8tlSTVS3vT2mX3UqLwR5";function G(e){return`https://${F}/services/oauth2/authorize/expid_${e}loyaltyweb?redirect_uri=https://${D}/${e}/&response_type=code&state=en&client_id=${j}&scope=openid+refresh_token+api&nonce=1`}const H=["href","target"],O=b({__name:"PrimaryAnchorButton",props:{label:{},href:{default:""},target:{},surfaceColor:{default:"black"}},setup(e){const a=t(()=>{switch(e.surfaceColor){case"white":return"text-black";case"blue":case"black":return"text-white";default:return"text-white"}}),n=t(()=>{switch(e.surfaceColor){case"white":return"text-white";case"blue":return"text-blue";case"black":return"text-black";default:return"text-white"}}),d=t(()=>{switch(e.surfaceColor){case"white":return"bg-black";case"black":case"blue":return"bg-blue-100";default:return"bg-white"}}),c=t(()=>[a.value,"bg-transparent"]),r=t(()=>[n.value,d.value]);return(l,s)=>(h(),w("a",{href:l.href,class:"w-full sm:max-w-[240px] 2xl:max-w-[320px] h-[48px]",target:l.target},[u("div",{id:"first",class:p(["uppercase",c.value])},[o(_,null,{default:f(()=>[m(i(l.label),1)]),_:1})],2),u("div",{id:"second",class:p(["uppercase",r.value])},[o(_,null,{default:f(()=>[m(i(l.label),1)]),_:1})],2)],8,H))}}),P=C(O,[["__scopeId","data-v-0b6d67a0"]]),M=["href","target"],Q=b({__name:"BorderAnchorButton",props:{label:{},size:{},href:{default:""},target:{},surfaceColor:{default:"black"}},setup(e){const a=t(()=>B(e.surfaceColor)),n=t(()=>{switch(e.surfaceColor){case"black":case"blue":return"!border-white";case"white":return"!border-black";default:return"!border-white"}}),d=t(()=>[a.value]),c=t(()=>[n.value]);return(r,l)=>(h(),w("a",{href:r.href,target:r.target,class:"h-[48px] px-[2rem]"},[o(_,{class:p([d.value,"px-[1rem]"]),id:"first"},{default:f(()=>[m(i(r.label),1)]),_:1},8,["class"]),o(_,{class:p([c.value,"px-[1rem]"]),id:"second"},{default:f(()=>[m(i(r.label),1)]),_:1},8,["class"])],8,M))}}),X=C(Q,[["__scopeId","data-v-6e63ddb9"]]),J={class:"pt-[4rem] md:pt-0 w-full mx-auto md:min-h-screen flex md:justify-center md:items-center"},Y={class:"my-6 md:max-w-[49vw] mx-auto text-white md:text-center leading-[150%]"},K={class:"mt-8 flex flex-col md:flex-row justify-center gap-4"},se=b({__name:"HomeView",props:{query:{}},setup(e){const a=e,{lang:n}=S(),d=N(),c=t(()=>G(n.value)),{setLoading:r}=A();async function l(s){try{await d.login(s),await I.push({name:R.ONBOARDING})}catch(g){console.error(g)}finally{r(!1)}}return E(()=>{var s;(s=a.query)!=null&&s.code&&(r(!0),l(a.query.code))}),(s,g)=>(h(),w(T,null,[u("div",J,[u("div",null,[o(y,{class:"h-[116px] md:h-[240px] md:m-auto"}),u("p",Y,i(s.$t("home.join_interista")),1),u("div",K,[o(P,{label:s.$t("button.sign_up_for_free"),"surface-color":"blue",href:c.value},null,8,["label","href"]),o(X,{label:s.$t("button.login"),"surface-color":"black",href:c.value},null,8,["label","href"])])])]),o(v),o(q)],64))}});export{se as default};
