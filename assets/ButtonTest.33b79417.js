import{B as b}from"./Button.39b49567.js";import{u as V}from"./vuex.52ede835.js";import{_ as C}from"./index.6d90e9b5.js";import{r as m,aI as p,o as i,c as u,a as t,a9 as l,b2 as e,a2 as c,a3 as k,U as g,a8 as n}from"./@vue.dd053216.js";/* empty css                            */import"./vue-router.baf3ea91.js";import"./@element-plus.1c138d46.js";import"./@kangc.9cf80c70.js";import"./vue.0b316201.js";import"./highlight.js.7756ad23.js";const y=`\`\`\`js\r
<template>\r
<div>\r
  <Button theme="link">\u94FE\u63A5</Button>\r
  <Button theme="text">\u6587\u672C</Button>\r
  <Button>\u6B63\u5E38</Button>\r
</div>\r
</template>\r
\r
<script lang="ts">\r
import  Button from "../lib/Button.vue"\r
\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
\`\`\``,$=`\`\`\`js\r
<template>\r
  <div>\r
    <Button size="small">\u5C0F\u5C0F\u5C0F</Button>\r
    <Button>\u666E\u666E\u901A\u901A</Button>\r
    <Button size="big">\u5927\u5927\u5927</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import  Button from "../lib/Button.vue"\r
\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
\`\`\``,x=`\`\`\`js\r
<template>\r
  <div>\r
    <Button>\u666E\u901A\u6309\u94AE</Button>\r
    <Button level="main">\u4E3B\u8981\u6309\u94AE</Button>\r
    <Button level="warning">\u8B66\u544A\u6309\u94AE</Button>\r
    <Button level="danger">\u5371\u9669\u6309\u94AE</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import  Button from "../lib/Button.vue";\r
\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
\`\`\``,j=`\`\`\`js\r
<template>\r
  <div>\r
    <Button loading>\u52A0\u8F7D\u4E2D</Button>\r
    <Button>\u52A0\u8F7D\u5B8C\u6BD5</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import  Button from "../lib/Button.vue"\r
\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
\`\`\``,w=`\`\`\`js\r
<template>\r
<div>\r
  <Button disabled>\u7981\u7528\u6309\u94AE</Button>\r
  <Button>\u6B63\u5E38\u6309\u94AE</Button>\r
</div>\r
</template>\r
\r
<script lang="ts">\r
import  Button from "../lib/Button.vue"\r
\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
\`\`\``,z={name:"ButtonTest",components:{Button:b},setup(){const s=V(),d=m(y),h=m($),r=m(x),B=m(j),v=m(w);return{block1:d,block2:h,block3:r,block4:B,block5:v,look1:()=>{s.commit("updatedCodeVisible1")},look2:()=>{s.commit("updatedCodeVisible2")},look3:()=>{s.commit("updatedCodeVisible3")},look4:()=>{s.commit("updatedCodeVisible4")},look5:()=>{s.commit("updatedCodeVisible5")}}}},N=t("h1",null,"Button \u6309\u94AE",-1),T={class:"demo"},D=t("h2",null,"\u5E38\u89C4\u7528\u6CD5",-1),E={class:"demo-actions"},F=n("\u94FE\u63A5"),I=n("\u6587\u672C"),S=n("\u6B63\u5E38"),U={class:"demo-actions"},q=n("\u67E5\u770B\u4EE3\u7801"),A=n("\u9690\u85CF\u4EE3\u7801"),G={key:0,class:"demo-code"},H={class:"demo"},J=t("h2",null,"\u652F\u6301\u5927\u5C0F",-1),K={class:"demo-actions"},L=n("\u5C0F\u5C0F\u5C0F"),M=n("\u666E\u666E\u901A\u901A"),O=n("\u5927\u5927\u5927"),P={class:"demo-actions"},Q=n("\u67E5\u770B\u4EE3\u7801"),R=n("\u9690\u85CF\u4EE3\u7801"),W={key:0,class:"demo-code"},X={class:"demo"},Y=t("h2",null,"\u72B6\u6001\u6309\u94AE",-1),Z={class:"demo-actions"},tt=n("\u666E\u901A\u6309\u94AE"),ot=n("\u4E3B\u8981\u6309\u94AE"),et=n("\u8B66\u544A\u6309\u94AE"),nt=n("\u5371\u9669\u6309\u94AE"),st={class:"demo-actions"},lt=n("\u67E5\u770B\u4EE3\u7801"),it=n("\u9690\u85CF\u4EE3\u7801"),dt={key:0,class:"demo-code"},rt={class:"demo"},ct=t("h2",null,"\u52A0\u8F7D\u6309\u94AE",-1),at={class:"demo-actions"},ut=n("\u52A0\u8F7D\u4E2D"),_t=n("\u52A0\u8F7D\u5B8C\u6BD5"),mt={class:"demo-actions"},kt=n("\u67E5\u770B\u4EE3\u7801"),pt=n("\u9690\u85CF\u4EE3\u7801"),ht={key:0,class:"demo-code"},Bt={class:"demo"},vt=t("h2",null,"\u7981\u7528\u6309\u94AE",-1),ft={class:"demo-actions"},bt=n("\u7981\u7528\u6309\u94AE"),Vt=n("\u6B63\u5E38\u6309\u94AE"),Ct={class:"demo-actions"},gt=n("\u67E5\u770B\u4EE3\u7801"),yt=n("\u9690\u85CF\u4EE3\u7801"),$t={key:0,class:"demo-code"},xt=n(" \u4E0B\u4E00\u8282\uFF1A"),jt=t("strong",null,"Dialog \u7EC4\u4EF6",-1);function wt(s,d,h,r,B,v){const o=p("Button"),a=p("v-md-preview"),f=p("router-link");return i(),u(g,null,[t("div",null,[N,t("div",T,[D,t("div",E,[l(o,{theme:"link"},{default:e(()=>[F]),_:1}),l(o,{theme:"text"},{default:e(()=>[I]),_:1}),l(o,null,{default:e(()=>[S]),_:1})]),t("div",U,[s.$store.state.codeVisible1?(i(),c(o,{key:1,onClick:d[0]||(d[0]=_=>s.$store.state.codeVisible1=!1)},{default:e(()=>[A]),_:1})):(i(),c(o,{key:0,onClick:r.look1},{default:e(()=>[q]),_:1},8,["onClick"]))]),s.$store.state.codeVisible1?(i(),u("div",G,[t("pre",null,[l(a,{text:r.block1},null,8,["text"])])])):k("",!0)]),t("div",H,[J,t("div",K,[l(o,{size:"small"},{default:e(()=>[L]),_:1}),l(o,null,{default:e(()=>[M]),_:1}),l(o,{size:"big"},{default:e(()=>[O]),_:1})]),t("div",P,[s.$store.state.codeVisible2?(i(),c(o,{key:1,onClick:d[1]||(d[1]=_=>s.$store.state.codeVisible2=!1)},{default:e(()=>[R]),_:1})):(i(),c(o,{key:0,onClick:r.look2},{default:e(()=>[Q]),_:1},8,["onClick"]))]),s.$store.state.codeVisible2?(i(),u("div",W,[t("pre",null,[l(a,{text:r.block2},null,8,["text"])])])):k("",!0)]),t("div",X,[Y,t("div",Z,[l(o,null,{default:e(()=>[tt]),_:1}),l(o,{level:"main"},{default:e(()=>[ot]),_:1}),l(o,{level:"warning"},{default:e(()=>[et]),_:1}),l(o,{level:"danger"},{default:e(()=>[nt]),_:1})]),t("div",st,[s.$store.state.codeVisible3?(i(),c(o,{key:1,onClick:d[2]||(d[2]=_=>s.$store.state.codeVisible3=!1)},{default:e(()=>[it]),_:1})):(i(),c(o,{key:0,onClick:r.look3},{default:e(()=>[lt]),_:1},8,["onClick"]))]),s.$store.state.codeVisible3?(i(),u("div",dt,[t("pre",null,[l(a,{text:r.block3},null,8,["text"])])])):k("",!0)]),t("div",rt,[ct,t("div",at,[l(o,{loading:""},{default:e(()=>[ut]),_:1}),l(o,null,{default:e(()=>[_t]),_:1})]),t("div",mt,[s.$store.state.codeVisible4?(i(),c(o,{key:1,onClick:d[3]||(d[3]=_=>s.$store.state.codeVisible4=!1)},{default:e(()=>[pt]),_:1})):(i(),c(o,{key:0,onClick:r.look4},{default:e(()=>[kt]),_:1},8,["onClick"]))]),s.$store.state.codeVisible4?(i(),u("div",ht,[t("pre",null,[l(a,{text:r.block4},null,8,["text"])])])):k("",!0)]),t("div",Bt,[vt,t("div",ft,[l(o,{disabled:""},{default:e(()=>[bt]),_:1}),l(o,null,{default:e(()=>[Vt]),_:1})]),t("div",Ct,[s.$store.state.codeVisible5?(i(),c(o,{key:1,onClick:d[4]||(d[4]=_=>s.$store.state.codeVisible5=!1)},{default:e(()=>[yt]),_:1})):(i(),c(o,{key:0,onClick:r.look5},{default:e(()=>[gt]),_:1},8,["onClick"]))]),s.$store.state.codeVisible5?(i(),u("div",$t,[t("pre",null,[l(a,{text:r.block5},null,8,["text"])])])):k("",!0)])]),t("div",null,[t("p",null,[xt,l(f,{to:"/doc/dialog"},{default:e(()=>[jt]),_:1})])])],64)}const Gt=C(z,[["render",wt]]);export{Gt as default};
