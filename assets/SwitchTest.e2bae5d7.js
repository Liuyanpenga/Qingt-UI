import{_ as h}from"./index.6d90e9b5.js";import{o as l,c as _,n as y,a as n,r as u,aI as m,a9 as c,U as S,a2 as d,b2 as a,a3 as w,a8 as p}from"./@vue.dd053216.js";import{B as x}from"./Button.39b49567.js";import{u as V}from"./vuex.52ede835.js";/* empty css                            */import"./vue-router.baf3ea91.js";import"./@element-plus.1c138d46.js";import"./@kangc.9cf80c70.js";import"./vue.0b316201.js";import"./highlight.js.7756ad23.js";const F={name:"Switch",props:{value:Boolean,disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!0}},setup(o,t){return{toggleButton:()=>{t.emit("update:value",!o.value)}}}};const N=["disabled"],U=n("span",null,null,-1),Q=[U];function T(o,t,r,e,f,v){return l(),_("button",{class:y(["Qt-switch",{"Qt-checked":r.value}]),onClick:t[0]||(t[0]=(...i)=>e.toggleButton&&e.toggleButton(...i)),disabled:r.disabled},Q,10,N)}const b=h(F,[["render",T]]),j={components:{Switch:b},setup(){const o=u(!1),t=u(!0);return{off:o,on:t}}};function z(o,t,r,e,f,v){const i=m("Switch");return l(),_(S,null,[c(i,{value:e.off,"onUpdate:value":t[0]||(t[0]=s=>e.off=s),disabled:""},null,8,["value"]),c(i,{value:e.on,"onUpdate:value":t[1]||(t[1]=s=>e.on=s),disabled:""},null,8,["value"])],64)}const B=h(j,[["render",z]]),A={components:{Switch:b},setup(){return{bool:u(!1)}}};function D(o,t,r,e,f,v){const i=m("Switch");return l(),d(i,{value:e.bool,"onUpdate:value":t[0]||(t[0]=s=>e.bool=s)},null,8,["value"])}const $=h(A,[["render",D]]),I=`\`\`\`ts\r
<template>\r
  <Switch v-model:value="bool"/>\r
</template>\r
\r
<script lang="ts">\r
import { ref } from 'vue';\r
import Switch from '../lib/Switch.vue';\r
\r
export default {\r
  components:{Switch},\r
  setup() {\r
    \r
    const bool = ref(false)\r
\r
    return{bool,}\r
  }\r
}\r
<\/script>\r
</style>\r
\`\`\`\r
`,q=`\`\`\`js\r
<template>\r
  <Switch v-model:value="off" disabled/>\r
  <Switch v-model:value="on" disabled/>\r
</template>\r
\r
<script lang="ts">\r
import Switch from "../lib/Switch.vue";\r
import { ref } from "vue";\r
export default {\r
  components: {Switch,},\r
  setup() {\r
\r
    const off = ref(false)\r
    const on = ref(true);\r
\r
    return {off,on};\r
  },\r
};\r
<\/script>\r
\`\`\``,G={components:{Switch:b,Button:x},setup(){const o=V(),t=u(!1),r=u(I),e=u(q);return{bool:t,Switch1:$,Switch2:B,block:r,blocks:e,look:()=>{o.commit("updatedCodeVisible")},look1:()=>{o.commit("updatedVisible")}}}},H=n("h1",null,"Switch \u5F00\u5173 ",-1),J={class:"demo"},K=n("h2",null,"\u5E38\u89C4\u7528\u6CD5",-1),L={class:"demo-actions"},M={class:"demo-actions"},O=p("\u67E5\u770B\u4EE3\u7801"),P=p("\u9690\u85CF\u4EE3\u7801"),R={key:0,class:"demo-code"},W={class:"demo"},X=n("h2",null,"\u652F\u6301\u7981\u7528 ",-1),Y={class:"demo-actions"},Z={class:"demo-actions"},tt=p("\u67E5\u770B\u4EE3\u7801"),ot=p("\u9690\u85CF\u4EE3\u7801"),et={key:0,class:"demo-code"},nt=p(" \u4E0B\u4E00\u8282\uFF1A"),st=n("strong",null,"Button \u7EC4\u4EF6",-1);function lt(o,t,r,e,f,v){const i=$,s=m("Button"),k=m("v-md-preview"),C=B,g=m("router-link");return l(),_(S,null,[n("div",null,[H,n("div",J,[K,n("div",L,[c(i)]),n("div",M,[o.$store.state.codeVisible?(l(),d(s,{key:1,onClick:t[0]||(t[0]=E=>o.$store.state.codeVisible=!1)},{default:a(()=>[P]),_:1})):(l(),d(s,{key:0,onClick:e.look},{default:a(()=>[O]),_:1},8,["onClick"]))]),o.$store.state.codeVisible?(l(),_("div",R,[n("pre",null,[c(k,{text:e.block},null,8,["text"])])])):w("",!0)]),n("div",W,[X,n("div",Y,[c(C)]),n("div",Z,[o.$store.state.visible?(l(),d(s,{key:1,onClick:t[1]||(t[1]=E=>o.$store.state.visible=!1)},{default:a(()=>[ot]),_:1})):(l(),d(s,{key:0,onClick:e.look1},{default:a(()=>[tt]),_:1},8,["onClick"]))]),o.$store.state.visible?(l(),_("div",et,[n("pre",null,[c(k,{text:e.blocks},null,8,["text"])])])):w("",!0)])]),n("div",null,[n("p",null,[nt,c(g,{to:"/doc/button"},{default:a(()=>[st]),_:1})])])],64)}const vt=h(G,[["render",lt]]);export{vt as default};
