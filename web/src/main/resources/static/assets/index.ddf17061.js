var T=Object.defineProperty;var P=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var b=(e,o,n)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,V=(e,o)=>{for(var n in o||(o={}))$.call(o,n)&&b(e,n,o[n]);if(P)for(var n of P(o))q.call(o,n)&&b(e,n,o[n]);return e};import{H as R,M as j,a0 as D,j as E,J as S,o as U,t as A,l as p,m as N,p as s,y as g,z as t,A as a,b as B,D as x,q as k,x as z,G as L}from"./vendor.a9aef9fe.js";import{_ as M,u as J,f as K,S as O}from"./index.5eb239a7.js";import{g as G,r as H}from"./index.7d04d2a7.js";import{l as Q}from"./index.0c9e5e2c.js";const W={name:"register",setup(){const{t:e}=R(),{proxy:o}=L(),n=J(),l=j(),h=D(),c=E({isShowPassword:!1,captcha:"",myForm:{username:"",password:"",repeatPassword:"",code:""},rules:{username:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"},repeatPassword:{required:!0,message:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",trigger:"blur"},code:{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"}},loading:{registerIn:!1}}),d=S(()=>n.state.themeConfig.themeConfig),u=S(()=>K(new Date)),m=async()=>{G().then(i=>{c.captcha=i.data.image,c.captchaKey=i.data.codeUuid,O.set("ClientId",c.captchaKey)}).catch(()=>{})};U(()=>{m()});const w=async()=>{new Promise(i=>{o.$refs.myRefForm.validate(f=>{f&&(i(f),y())})})},y=async()=>{H(Q.stringify(c.myForm)).then(()=>{_()}).catch(i=>{m(),B({showClose:!0,message:i.message?i.message:"\u7CFB\u7EDF\u9519\u8BEF",type:"error"})})},_=()=>{var f,C,F,v;let i=u.value;((f=l.query)==null?void 0:f.redirect)?h.push({path:(C=l.query)==null?void 0:C.redirect,query:Object.keys((F=l.query)==null?void 0:F.params).length>0?JSON.parse((v=l.query)==null?void 0:v.params):""}):h.push("/login"),setTimeout(()=>{c.loading.registerIn=!0;const I=e("message.registerInText");B.success(`${i}\uFF0C${I}`)},300)};return V({getThemeConfig:d,currentTime:u,onRegisterIn:w,toLogin:()=>{h.push("/login")},refreshCode:m},A(c))}},X={class:"login-container"},Y={class:"login-logo"},Z={class:"login-content"},ee={class:"login-content-main"},oe={class:"login-content-title"},se={class:"login-content-code"},te=["src"],ne={class:"mt10"},ae={class:"login-copyright"},re={class:"mb5 login-copyright-company"},le={class:"login-copyright-msg"};function ie(e,o,n,l,h,c){const d=p("el-input"),u=p("el-form-item"),m=p("el-col"),w=p("el-row"),y=p("el-button"),_=p("el-form");return x(),N("div",X,[s("div",Y,[s("span",null,g(l.getThemeConfig.globalViceTitle),1)]),s("div",Z,[s("div",ee,[s("h4",oe,g(l.getThemeConfig.globalTitle),1),s("div",null,[t(_,{class:"login-content-form",model:e.myForm,rules:e.rules,ref:"myRefForm"},{default:a(()=>[t(u,{prop:"username"},{default:a(()=>[t(d,{type:"text",placeholder:e.$t("message.account.accountPlaceholder1"),"prefix-icon":"el-icon-user",modelValue:e.myForm.username,"onUpdate:modelValue":o[0]||(o[0]=r=>e.myForm.username=r),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),t(u,{prop:"password"},{default:a(()=>[t(d,{type:e.isShowPassword?"text":"password",placeholder:e.$t("message.account.accountPlaceholder2"),"prefix-icon":"el-icon-lock",modelValue:e.myForm.password,"onUpdate:modelValue":o[2]||(o[2]=r=>e.myForm.password=r),autocomplete:"off"},{suffix:a(()=>[s("i",{class:k(["iconfont el-input__icon login-content-password",e.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:o[1]||(o[1]=r=>e.isShowPassword=!e.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),t(u,{prop:"repeatPassword"},{default:a(()=>[t(d,{type:e.isShowPassword?"text":"password",placeholder:e.$t("message.account.accountPlaceholder4"),"prefix-icon":"el-icon-lock",modelValue:e.myForm.repeatPassword,"onUpdate:modelValue":o[4]||(o[4]=r=>e.myForm.repeatPassword=r),autocomplete:"off"},{suffix:a(()=>[s("i",{class:k(["iconfont el-input__icon login-content-password",e.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:o[3]||(o[3]=r=>e.isShowPassword=!e.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),t(u,{prop:"code"},{default:a(()=>[t(w,{gutter:15},{default:a(()=>[t(m,{span:14},{default:a(()=>[t(d,{type:"text",maxlength:"5",placeholder:e.$t("message.account.accountPlaceholder3"),"prefix-icon":"el-icon-position",modelValue:e.myForm.code,"onUpdate:modelValue":o[5]||(o[5]=r=>e.myForm.code=r),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),t(m,{span:10},{default:a(()=>[s("div",se,[s("img",{class:"login-content-code-img",alt:"fastcms",onClick:o[6]||(o[6]=(...r)=>l.refreshCode&&l.refreshCode(...r)),src:e.captcha},null,8,te)])]),_:1})]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(y,{type:"primary",class:"login-content-submit",round:"",onClick:l.onRegisterIn,loading:e.loading.registerIn},{default:a(()=>[s("span",null,g(e.$t("message.account.accountRegistBtnText")),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model","rules"]),s("div",ne,[t(y,{type:"text",size:"small",onClick:l.toLogin},{default:a(()=>[z(g(e.$t("message.link.two5")),1)]),_:1},8,["onClick"])])])])]),s("div",ae,[s("div",re,g(e.$t("message.copyright.one5")),1),s("div",le,g(e.$t("message.copyright.two6")),1)])])}var ge=M(W,[["render",ie],["__scopeId","data-v-7bdb0df5"]]);export{ge as default};
