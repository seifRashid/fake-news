import{g as r,S as f,r as s,o as _,c as a,a as t,F as h,b as y,u as b,d as c,t as p}from"./index-B0JJc5GR.js";const k={class:"bg-indigo-600 text-white text-center py-16"},x={class:"py-12"},w={class:"text-2xl font-semibold"},S={class:"mt-4"},A={__name:"AboutView",setup(v){r.registerPlugin(f);const i=s(null),u=s(null),g=s([]),n=s(null),m=Array.from({length:15},(e,o)=>`Block ${o+1}`);return _(()=>{r.from([i.value,u.value],{opacity:0,y:50,duration:1,stagger:.2,ease:"power2.out"}),g.value.forEach((e,o)=>{r.from(e,{scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 60%",toggleActions:"play none none none"},opacity:0,y:100,duration:1,delay:o*.2,ease:"power2.out"})}),r.to(n.value,{scrollTrigger:{trigger:".content-section",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:e=>{const o=1+e.progress*4,d=`hsl(${e.progress*360}, 70%, 50%)`;r.set(n.value,{scale:o,backgroundColor:d})}},duration:1})}),(e,o)=>(c(),a("div",null,[t("header",k,[t("h1",{ref_key:"heroTitle",ref:i,class:"text-4xl font-bold"},"Welcome to GSAP Animation",512),t("p",{ref_key:"heroDescription",ref:u,class:"text-lg mt-4"},"Scroll down to see the magic!",512)]),t("div",{ref_key:"circle",ref:n,class:"fixed top-1/2 left-1/2 w-12 h-12 bg-red-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-[-1]"},null,512),t("main",x,[(c(!0),a(h,null,y(b(m),(d,l)=>(c(),a("section",{key:l,class:"bg-gray-100/60 mx-auto my-6 p-6 rounded-lg shadow-lg max-w-3xl",ref_for:!0,ref_key:"contentBlocks",ref:g},[t("h2",w,"Content Block "+p(l+1),1),t("p",S,"Some description for block "+p(l+1)+". Keep scrolling!",1)]))),128))])]))}};export{A as default};
