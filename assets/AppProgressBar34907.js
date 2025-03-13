import{B as d,c as i,o as n,y as l,z as s,q as u,g as m,t as b,A as g,d as c,m as v,_ as f}from"../index34907.js";var h=({dt:e})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${e("progressbar.height")};
    background: ${e("progressbar.background")};
    border-radius: ${e("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${e("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${e("progressbar.label.color")};
    font-size: ${e("progressbar.label.font.size")};
    font-weight: ${e("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,y={root:function(r){var t=r.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},k=d.extend({name:"progressbar",style:h,classes:y}),w={name:"BaseProgressBar",extends:g,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:k,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},p={name:"ProgressBar",extends:w,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},B=["aria-valuenow"];function $(e,r,t,o,S,a){return n(),i("div",s({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[a.determinate?(n(),i("div",s({key:0,class:e.cx("value"),style:a.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(n(),i("div",s({key:0,class:e.cx("label")},e.ptm("label")),[u(e.$slots,"default",{},function(){return[m(b(e.value+"%"),1)]})],16)):l("",!0)],16)):a.indeterminate?(n(),i("div",s({key:1,class:e.cx("value")},e.ptm("value")),null,16)):l("",!0)],16,B)}p.render=$;const _=c({__name:"AppProgressBar",props:{value:{}},setup(e){return(r,t)=>{const o=p;return n(),v(o,{value:r.value,showValue:!1},null,8,["value"])}}}),z=f(_,[["__scopeId","data-v-a8eb739a"]]);export{z as _};
