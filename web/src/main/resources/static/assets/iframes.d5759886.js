var l=Object.defineProperty;var n=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var f=(t,a,e)=>a in t?l(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,m=(t,a)=>{for(var e in a||(a={}))d.call(a,e)&&f(t,e,a[e]);if(n)for(var e of n(a))u.call(a,e)&&f(t,e,a[e]);return t};import{i as g,M as h,j as p,J as v,o as w,P as _,t as L,a7 as b,w as c,m as x,p as y,v as I,K as $,n as k,D as B}from"./vendor.f51c6622.js";import{_ as C,u as V}from"./index.bcefedb7.js";const j=g({name:"layoutIfameView",setup(){const t=h(),a=V(),e=p({iframeLoading:!0,iframeUrl:""}),s=()=>{e.iframeUrl=t.meta.isLink,k(()=>{e.iframeLoading=!0;const r=document.getElementById("iframe");if(!r)return!1;r.onload=()=>{e.iframeLoading=!1}})},o=v(()=>{let{isTagsview:r}=a.state.themeConfig.themeConfig,{isTagsViewCurrenFull:i}=a.state.tagsViewRoutes;return i?"0px":r?"83px":"49px"});return w(()=>{s()}),_(()=>t.path,()=>{s()}),m({setIframeHeight:o},L(e))}}),D=["src"];function R(t,a,e,s,o,r){const i=b("loading");return c((B(),x("div",{class:"layout-view-bg-white flex mt1",style:$({height:`calc(100vh - ${t.setIframeHeight}`,border:"none"})},[c(y("iframe",{src:t.iframeUrl,frameborder:"0",height:"100%",width:"100%",id:"iframe"},null,8,D),[[I,!t.iframeLoading]])],4)),[[i,t.iframeLoading]])}var E=C(j,[["render",R]]);export{E as default};
