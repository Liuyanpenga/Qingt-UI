import{N as b,r as O,g as A,i as F,d as p,u as a,e as _,f as H,o as m,c as f,h as d,n as h,j as V}from"./@vue.dd053216.js";const M=(s,n)=>{if(s.install=e=>{for(const o of[s,...Object.values(n!=null?n:{})])e.component(o.name,o)},n)for(const[e,o]of Object.entries(n))s[e]=o;return s},v=s=>(s.install=b,s),S=Symbol(),w=O();function z(s,n=void 0){const e=A()?F(S,w):w;return s?p(()=>{var o,c;return(c=(o=e.value)==null?void 0:o[s])!=null?c:n}):e}const I="el",P="is-",i=(s,n,e,o,c)=>{let u=`${s}-${n}`;return e&&(u+=`-${e}`),o&&(u+=`__${o}`),c&&(u+=`--${c}`),u},$=s=>{const n=z("namespace"),e=p(()=>n.value||I);return{namespace:e,b:(t="")=>i(a(e),s,t,"",""),e:t=>t?i(a(e),s,"",t,""):"",m:t=>t?i(a(e),s,"","",t):"",be:(t,r)=>t&&r?i(a(e),s,t,r,""):"",em:(t,r)=>t&&r?i(a(e),s,"",t,r):"",bm:(t,r)=>t&&r?i(a(e),s,t,"",r):"",bem:(t,r,l)=>t&&r&&l?i(a(e),s,t,r,l):"",is:(t,...r)=>{const l=r.length>=1?r[0]:!0;return t&&l?`${P}${t}`:""},cssVar:t=>{const r={};for(const l in t)t[l]&&(r[`--${e.value}-${l}`]=t[l]);return r},cssVarName:t=>`--${e.value}-${t}`,cssVarBlock:t=>{const r={};for(const l in t)t[l]&&(r[`--${e.value}-${s}-${l}`]=t[l]);return r},cssVarBlockName:t=>`--${e.value}-${s}-${t}`}};var g=(s,n)=>{const e=s.__vccOpts||s;for(const[o,c]of n)e[o]=c;return e};const G={name:"ElContainer"},K=_({...G,props:{direction:{type:String}},setup(s){const n=s,e=H(),o=$("container"),c=p(()=>n.direction==="vertical"?!0:n.direction==="horizontal"?!1:e&&e.default?e.default().some(y=>{const E=y.type.name;return E==="ElHeader"||E==="ElFooter"}):!1);return(u,y)=>(m(),f("section",{class:h([a(o).b(),a(o).is("vertical",a(c))])},[d(u.$slots,"default")],2))}});var j=g(K,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const q={name:"ElAside"},D=_({...q,props:{width:{type:String,default:null}},setup(s){const n=s,e=$("aside"),o=p(()=>n.width?e.cssVarBlock({width:n.width}):{});return(c,u)=>(m(),f("aside",{class:h(a(e).b()),style:V(a(o))},[d(c.$slots,"default")],6))}});var C=g(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const J={name:"ElFooter"},L=_({...J,props:{height:{type:String,default:null}},setup(s){const n=s,e=$("footer"),o=p(()=>n.height?e.cssVarBlock({height:n.height}):{});return(c,u)=>(m(),f("footer",{class:h(a(e).b()),style:V(a(o))},[d(c.$slots,"default")],6))}});var N=g(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const Q={name:"ElHeader"},R=_({...Q,props:{height:{type:String,default:null}},setup(s){const n=s,e=$("header"),o=p(()=>n.height?e.cssVarBlock({height:n.height}):{});return(c,u)=>(m(),f("header",{class:h(a(e).b()),style:V(a(o))},[d(c.$slots,"default")],6))}});var k=g(R,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const T={name:"ElMain"},U=_({...T,setup(s){const n=$("main");return(e,o)=>(m(),f("main",{class:h(a(n).b())},[d(e.$slots,"default")],2))}});var B=g(U,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const ne=M(j,{Aside:C,Footer:N,Header:k,Main:B}),oe=v(C);v(N);v(k);const re=v(B);export{oe as E,re as a,ne as b};
