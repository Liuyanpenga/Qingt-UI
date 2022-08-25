import{B}from"./Button.39b49567.js";import{_ as C}from"./index.6d90e9b5.js";import{aI as k,o as u,a2 as f,a as o,h as D,a9 as d,b2 as i,Y as F,a3 as b,a8 as c,ba as w,ah as L,r as g,c as h,U as O}from"./@vue.dd053216.js";import{u as $}from"./vuex.52ede835.js";/* empty css                            */import"./vue-router.baf3ea91.js";import"./@element-plus.1c138d46.js";import"./@kangc.9cf80c70.js";import"./vue.0b316201.js";import"./highlight.js.7756ad23.js";const V={name:"Dialog",components:{Button:B},props:{visible:{type:Boolean,default:!1},onClickOverLay:{type:Boolean,default:!0},ok:{type:Function},cancel:{type:Function}},setup(t,l){const s=()=>{l.emit("update:visible",!1)};return{close:s,onClickOverLay:()=>{t.onClickOverLay&&s()},cancel:()=>{var e;(e=t.cancel)==null||e.call(t),s()},ok:()=>{var e;(e=t.cancel)==null||e.call(t),s()}}}};const x={class:"Qt-dialog-wrapper"},T={class:"Qt-dialog"},N=c("\u53D6\u6D88"),Q=c("\u786E\u5B9A");function A(t,l,s,n,_,a){const e=k("Button");return s.visible?(u(),f(F,{key:0,to:"body"},[o("div",{class:"Qt-dialog-overlay",onClick:l[0]||(l[0]=(...r)=>n.onClickOverLay&&n.onClickOverLay(...r))}),o("div",x,[o("div",T,[o("header",null,[D(t.$slots,"title"),o("span",{class:"Qt-dialog-close",onClick:l[1]||(l[1]=(...r)=>n.close&&n.close(...r))})]),o("main",null,[D(t.$slots,"content")]),o("footer",null,[d(e,{onClick:n.cancel},{default:i(()=>[N]),_:1},8,["onClick"]),d(e,{onClick:n.ok,level:"main"},{default:i(()=>[Q]),_:1},8,["onClick"])])])])])):b("",!0)}const y=C(V,[["render",A]]),U=`\`\`\`ts\r
<template>\r
  <div>\r
    <Button @click="showDialog">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>\r
    <Dialog v-model:visible="visible">\r
      <p>\u5185\u5BB9</p>\r
    </Dialog>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../lib/Button.vue"\r
import Dialog from "../lib/Dialog.vue"\r
import { ref } from "vue"\r
\r
export default {\r
  components: {\r
    Dialog,\r
    Button\r
  },\r
  setup(){\r
    const visible = ref(false)\r
    const showDialog = () => {\r
      visible.value = !visible.value\r
    }\r
\r
    return{visible,showDialog}\r
  }\r
}\r
<\/script>\r
\`\`\``,S=`\`\`\`ts\r
<template>\r
  <div>\r
    <Button @click="showDialog">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../lib/Button.vue"\r
import { openDialog } from "../lib/dialog";\r
import { ref,h } from "vue"\r
\r
export default {\r
  components: {\r
    Button\r
  },\r
  setup(){\r
    const showDialog = () => {\r
      penDialog({\r
        title: '\u6807\u9898',\r
        content: "hello",\r
      })\r
    }\r
\r
    return{showDialog}\r
  }\r
}\r
<\/script>\r
\`\`\``,I=t=>{const{title:l,content:s,ok:n,cancel:_}=t,a=document.createElement("div");document.body.appendChild(a);const e=()=>{r.unmount(),a.remove()},r=w({render(){return L(y,{visible:!0,"onUpdate:visible":m=>{m===!1&&e()},ok:n,cancel:_},{title:l,content:s})}});r.mount(a)},Y={name:"DialogTest",components:{Dialog:y,Button:B},setup(){const t=$(),l=g(!1),s=()=>{l.value=!l.value},n=()=>!0,_=()=>{},a=()=>{I({title:"\u6807\u9898",content:"hello"})},e=()=>{console.log(e)},r=()=>{console.log(2)},m=()=>{t.commit("updatedVisible4")},p=()=>{t.commit("updatedVisible5")},v=g(U),E=g(S);return{visible:l,toggle:s,f1:n,f2:_,showDialog:a,ok:e,cancel:r,look:m,look1:p,block:v,blocks:E}}},j=o("h1",null,"dialog \u5BF9\u8BDD\u6846",-1),q={class:"demo"},z=o("h2",null,"\u5E38\u89C4\u7528\u6CD5",-1),G={class:"demo-actions"},H=c("\u6253\u5F00\u5BF9\u8BDD\u6846"),J=o("h3",null,"\u5BF9\u8BDD\u6846",-1),K=o("h3",null,"hi",-1),M=o("div",null,"hi~",-1),P={class:"demo-actions"},R=c("\u67E5\u770B\u4EE3\u7801"),W=c("\u9690\u85CF\u4EE3\u7801"),X={key:0,class:"demo-code"},Z={class:"demo"},oo=o("h2",null,"\u51FD\u6570\u5F0F\u6253\u5F00",-1),to={class:"demo-actions"},no=c("\u6253\u5F00\u5BF9\u8BDD\u6846"),eo={class:"demo-actions"},lo=c("\u67E5\u770B\u4EE3\u7801"),so=c("\u9690\u85CF\u4EE3\u7801"),io={key:0,class:"demo-code"},ro=c(" \u4E0B\u4E00\u8282\uFF1A"),co=o("strong",null,"Tabs \u7EC4\u4EF6",-1);function ao(t,l,s,n,_,a){const e=k("Button"),r=k("Dialog"),m=k("v-md-preview"),p=k("router-link");return u(),h(O,null,[o("div",null,[j,o("div",q,[z,o("div",G,[d(e,{onClick:n.toggle},{default:i(()=>[H]),_:1},8,["onClick"]),d(r,{visible:n.visible,"onUpdate:visible":l[0]||(l[0]=v=>n.visible=v),onClickOverLay:!0,ok:n.f1,cancel:n.f2},{title:i(()=>[J]),content:i(()=>[K,M]),_:1},8,["visible","ok","cancel"])]),o("div",P,[t.$store.state.visible4?(u(),f(e,{key:1,onClick:l[1]||(l[1]=v=>t.$store.state.visible4=!1)},{default:i(()=>[W]),_:1})):(u(),f(e,{key:0,onClick:n.look},{default:i(()=>[R]),_:1},8,["onClick"]))]),t.$store.state.visible4?(u(),h("div",X,[o("pre",null,[d(m,{text:n.block},null,8,["text"])])])):b("",!0)]),o("div",Z,[oo,o("div",to,[d(e,{onClick:n.showDialog},{default:i(()=>[no]),_:1},8,["onClick"])]),o("div",eo,[t.$store.state.visible5?(u(),f(e,{key:1,onClick:l[2]||(l[2]=v=>t.$store.state.visible5=!1)},{default:i(()=>[so]),_:1})):(u(),f(e,{key:0,onClick:n.look1},{default:i(()=>[lo]),_:1},8,["onClick"]))]),t.$store.state.visible5?(u(),h("div",io,[o("pre",null,[d(m,{text:n.blocks},null,8,["text"])])])):b("",!0)])]),o("div",null,[o("p",null,[ro,d(p,{to:"/doc/tabs"},{default:i(()=>[co]),_:1})])])],64)}const Do=C(Y,[["render",ao]]);export{Do as default};
