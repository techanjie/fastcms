var c=Object.defineProperty;var s=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var n=(t,e,o)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))a.call(e,o)&&n(t,o,e[o]);if(s)for(var o of s(e))d.call(e,o)&&n(t,o,e[o]);return t};import{Q as i}from"./qrcode.c9e34402.js";import{_}from"./index.0a49754b.js";import{i as f,j as p,o as m,t as l,m as u,p as q,D as v,G as g}from"./vendor.d2ed1f2c.js";const h=f({name:"login11",setup(){const{proxy:t}=g(),e=p({}),o=()=>{t.$refs.qrcodeRef.innerHTML="",new i(t.$refs.qrcodeRef,{text:"https://qm.qq.com/cgi-bin/qm/qr?k=RdUY97Vx0T0vZ_1OOu-X1yFNkWgDwbjC&jump_from=webapi",width:260,height:260,colorDark:"#000000",colorLight:"#ffffff"})};return m(()=>{o()}),r({},l(e))}}),x={class:"login-scan-container"},b={class:"login-scan-qrcode",ref:"qrcodeRef"};function j(t,e,o,R,$,k){return v(),u("div",x,[q("div",b,null,512)])}var D=_(h,[["render",j],["__scopeId","data-v-130b4efb"]]);export{D as default};
