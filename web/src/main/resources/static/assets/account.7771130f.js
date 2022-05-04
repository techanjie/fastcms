var $=Object.defineProperty;var b=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var k=(o,s,t)=>s in o?$(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,S=(o,s)=>{for(var t in s||(s={}))V.call(s,t)&&k(o,t,s[t]);if(b)for(var t of b(s))q.call(s,t)&&k(o,t,s[t]);return o};import{i as P,H as j,M as A,a0 as D,j as E,J as U,o as K,t as M,l as i,Q as N,A as n,b as f,D as z,z as a,p as g,q as J,y as L,G as O}from"./vendor.d2ed1f2c.js";import{_ as x,u as G,f as H,S as y,c as v,d as Q}from"./index.d1227e45.js";import{g as W,s as X}from"./index.1beeafeb.js";import{l as Y}from"./index.6a67ebb2.js";const Z=P({name:"login",setup(){const{t:o}=j(),{proxy:s}=O(),t=G(),d=A(),h=D(),r=E({isShowPassword:!1,captcha:"",captchaKey:"",myForm:{username:"",password:"",code:""},rules:{username:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"},code:{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"}},loading:{signIn:!1}}),l=U(()=>H(new Date)),u=async()=>{W().then(e=>{r.captcha=e.data.image,r.captchaKey=e.data.codeUuid,y.set("ClientId",r.captchaKey)}).catch(()=>{})};K(()=>{u()});const p=async()=>{new Promise(e=>{s.$refs.myRefForm.validate(m=>{m&&(e(m),w())})})},w=async()=>{X(Y.stringify(r.myForm)).then(e=>{C(e)}).catch(e=>{u(),f({showClose:!0,message:e.message?e.message:"\u7CFB\u7EDF\u9519\u8BEF",type:"error"})})},C=async e=>{r.loading.signIn=!0,t.state.themeConfig.themeConfig.isRequestRoutes?e.data.userType===1?e.data.hasRole==!0?(await Q(),c(e)):f.error("\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743"):e.data.userType===2?(await v(),c(e)):f.error("\u672A\u77E5\u7528\u6237\u7C7B\u578B"):(await v(),c(e))},c=e=>{var F,_,I,B;const m={username:e.data.username,photo:e.data.headImg===null?"/header.jpg":e.data.headImg,time:new Date().getTime(),hasRole:e.data.hasRole,version:e.data.version,userType:e.data.userType};y.set("token",e.data.token),y.set("tokenTtl",e.data.tokenTtl),y.set("userInfo",m),t.dispatch("userInfos/setUserInfos",m);let T=l.value;((F=d.query)==null?void 0:F.redirect)?h.push({path:(_=d.query)==null?void 0:_.redirect,query:Object.keys((I=d.query)==null?void 0:I.params).length>0?JSON.parse((B=d.query)==null?void 0:B.params):""}):h.push("/"),setTimeout(()=>{r.loading.signIn=!0;const R=o("message.signInText");f.success(`${T}\uFF0C${R}`),s.mittBus.emit("onSignInClick")},300)};return S({currentTime:l,onSignIn:p,refreshCode:u},M(r))}}),ee={class:"login-content-code"},oe=["src"];function se(o,s,t,d,h,r){const l=i("el-input"),u=i("el-form-item"),p=i("el-col"),w=i("el-row"),C=i("el-button"),c=i("el-form");return z(),N(c,{class:"login-content-form",model:o.myForm,rules:o.rules,ref:"myRefForm"},{default:n(()=>[a(u,{prop:"username"},{default:n(()=>[a(l,{type:"text",placeholder:o.$t("message.account.accountPlaceholder1"),"prefix-icon":"el-icon-user",modelValue:o.myForm.username,"onUpdate:modelValue":s[0]||(s[0]=e=>o.myForm.username=e),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),a(u,{prop:"password"},{default:n(()=>[a(l,{type:o.isShowPassword?"text":"password",placeholder:o.$t("message.account.accountPlaceholder2"),"prefix-icon":"el-icon-lock",modelValue:o.myForm.password,"onUpdate:modelValue":s[2]||(s[2]=e=>o.myForm.password=e),autocomplete:"off"},{suffix:n(()=>[g("i",{class:J(["iconfont el-input__icon login-content-password",o.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:s[1]||(s[1]=e=>o.isShowPassword=!o.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),a(u,{prop:"code"},{default:n(()=>[a(w,{gutter:15},{default:n(()=>[a(p,{span:14},{default:n(()=>[a(l,{type:"text",maxlength:"5",placeholder:o.$t("message.account.accountPlaceholder3"),"prefix-icon":"el-icon-position",modelValue:o.myForm.code,"onUpdate:modelValue":s[3]||(s[3]=e=>o.myForm.code=e),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),a(p,{span:10},{default:n(()=>[g("div",ee,[g("img",{class:"login-content-code-img",alt:"fastcms",onClick:s[4]||(s[4]=(...e)=>o.refreshCode&&o.refreshCode(...e)),src:o.captcha},null,8,oe)])]),_:1})]),_:1})]),_:1}),a(u,null,{default:n(()=>[a(C,{type:"primary",class:"login-content-submit",round:"",onClick:o.onSignIn,loading:o.loading.signIn},{default:n(()=>[g("span",null,L(o.$t("message.account.accountBtnText")),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model","rules"])}var le=x(Z,[["render",se],["__scopeId","data-v-7ede09b9"]]);export{le as default};
