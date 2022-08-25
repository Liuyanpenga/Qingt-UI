import{B as E}from"./Button.39b49567.js";import{_ as C}from"./index.6d90e9b5.js";import{e as $,o as a,c as d,h as w,r as m,aw as F,aB as V,d as Q,a as r,U as N,aH as S,a2 as T,aK as x,n as A,P as D,aI as f,a9 as b,b2 as _,a3 as I,a8 as v}from"./@vue.dd053216.js";import{u as R}from"./vuex.52ede835.js";/* empty css                            */import"./vue-router.baf3ea91.js";import"./@element-plus.1c138d46.js";import"./@kangc.9cf80c70.js";import"./vue.0b316201.js";import"./highlight.js.7756ad23.js";const U=$({name:"Tab"});function j(e,n,c,t,i,u){return a(),d("div",null,[w(e.$slots,"default")])}const B=C(U,[["render",j]]),z=$({name:"Tabs",components:{Tab:B},props:{selected:{type:String}},setup(e,n){const c=m(null),t=m(null),i=m(null),u=()=>{const{width:o}=c.value.getBoundingClientRect();t.value.style.width=o+"px";const{left:k}=i.value.getBoundingClientRect(),{left:y}=c.value.getBoundingClientRect(),g=y-k;t.value.style.left=g+"px"};F(u),V(u);const s=n.slots.default();s.forEach(o=>{if(o.type!==B)throw new Error("Tabs \u5B50\u6807\u7B7E\u5FC5\u987B\u662FTab")});const p=s.map(o=>o.props.title),l=o=>{n.emit("update:selected",o)},h=Q(()=>s.find(o=>o.props.title===e.selected));return{defaults:s,titles:p,select:l,selectedItem:c,indicator:t,container:i,current:h}}});const H={class:"Qt-tabs"},K={class:"Qt-tabs-nav",ref:"container"},L=["onClick"],M={class:"Qt-tabs-nav-indicator",ref:"indicator"},P={class:"Qt-tabs-content"};function q(e,n,c,t,i,u){return a(),d("div",H,[r("div",K,[(a(!0),d(N,null,S(e.titles,(s,p)=>(a(),d("div",{class:A(["Qt-tabs-nav-item",{selected:s===e.selected}]),key:p,onClick:l=>e.select(s),ref_for:!0,ref:l=>{s===e.selected&&(e.selectedItem=l)}},D(s),11,L))),128)),r("div",M,null,512)],512),r("div",P,[(a(),T(x(e.current),{key:e.current.props.title}))])])}const G=C(z,[["render",q]]),J=`\`\`\`js\r
<template>\r
  <h1>Tabs \u793A\u4F8B1</h1>\r
  <Tabs v-model:selected="selected">\r
    <Tab title="\u5BFC\u822A1">\u5185\u5BB91</Tab>\r
    <Tab title="\u5BFC\u822A2">\u5185\u5BB92</Tab>\r
  </Tabs>\r
</template>\r
\r
<script lang="ts">\r
import {ref} from 'vue'\r
import Tabs from '../lib/Tabs.vue'\r
import Tab from '../lib/Tab.vue'\r
\r
export default({\r
  components:{Tab,Tabs},\r
  setup(){\r
    const selected = ref('\u5BFC\u822A1')\r
\r
    return{ selected }\r
  },\r
})\r
<\/script>\r
\`\`\``,O={components:{Tab:B,Tabs:G,Button:E},setup(){const e=R();console.log(e);const n=m("\u5BFC\u822A1"),c=m(J);return{selected:n,block:c,look:()=>{e.commit("updatedVisible1")},hide:()=>{e.commit("updatedVisible1",!1)}}}},W=r("h1",null,"Tabs \u6807\u7B7E\u9875",-1),X={class:"demo"},Y=r("h2",null,"\u5E38\u89C4\u7528\u6CD5",-1),Z={class:"demo-actions"},ee=v("\u5185\u5BB91"),te=v("\u5185\u5BB92"),se={class:"demo-actions"},oe=v("\u67E5\u770B\u4EE3\u7801"),ne=v("\u9690\u85CF\u4EE3\u7801"),ae={key:0,class:"demo-code"};function re(e,n,c,t,i,u){const s=f("Tab"),p=f("Tabs"),l=f("Button"),h=f("v-md-preview");return a(),d("div",null,[W,r("div",X,[Y,r("div",Z,[b(p,{selected:t.selected,"onUpdate:selected":n[0]||(n[0]=o=>t.selected=o)},{default:_(()=>[b(s,{title:"\u5BFC\u822A1"},{default:_(()=>[ee]),_:1}),b(s,{title:"\u5BFC\u822A2"},{default:_(()=>[te]),_:1})]),_:1},8,["selected"])]),r("div",se,[e.$store.state.visible1?(a(),T(l,{key:1,onClick:t.hide},{default:_(()=>[ne]),_:1},8,["onClick"])):(a(),T(l,{key:0,onClick:t.look},{default:_(()=>[oe]),_:1},8,["onClick"]))]),e.$store.state.visible1?(a(),d("div",ae,[r("pre",null,[b(h,{text:t.block},null,8,["text"])])])):I("",!0)])])}const ve=C(O,[["render",re]]);export{ve as default};
