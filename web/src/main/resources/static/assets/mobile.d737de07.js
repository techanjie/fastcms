var g=Object.defineProperty;var c=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(e,o,l)=>o in e?g(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,i=(e,o)=>{for(var l in o||(o={}))V.call(o,l)&&p(e,l,o[l]);if(c)for(var l of c(o))v.call(o,l)&&p(e,l,o[l]);return e};import{_ as y}from"./index.fc368bf7.js";import{i as $,j as x,t as h,l as n,Q as N,A as a,D as F,z as t,x as j,y as _,p as w}from"./vendor.d2ed1f2c.js";const B=$({name:"login",setup(){const e=x({ruleForm:{userName:"",code:""}});return i({},h(e))}});function C(e,o,l,T,k,D){const m=n("el-input"),r=n("el-form-item"),u=n("el-col"),d=n("el-button"),f=n("el-row"),b=n("el-form");return F(),N(b,{class:"login-content-form"},{default:a(()=>[t(r,null,{default:a(()=>[t(m,{type:"text",placeholder:e.$t("message.mobile.placeholder1"),"prefix-icon":"iconfont icon-dianhua",modelValue:e.ruleForm.userName,"onUpdate:modelValue":o[0]||(o[0]=s=>e.ruleForm.userName=s),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),t(r,null,{default:a(()=>[t(f,{gutter:15},{default:a(()=>[t(u,{span:16},{default:a(()=>[t(m,{type:"text",maxlength:"4",placeholder:e.$t("message.mobile.placeholder2"),"prefix-icon":"el-icon-position",modelValue:e.ruleForm.code,"onUpdate:modelValue":o[1]||(o[1]=s=>e.ruleForm.code=s),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),t(u,{span:8},{default:a(()=>[t(d,{class:"login-content-code"},{default:a(()=>[j(_(e.$t("message.mobile.codeText")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(r,null,{default:a(()=>[t(d,{type:"primary",class:"login-content-submit",round:""},{default:a(()=>[w("span",null,_(e.$t("message.mobile.btnText")),1)]),_:1})]),_:1})]),_:1})}var I=y(B,[["render",C],["__scopeId","data-v-311a2c3a"]]);export{I as default};
