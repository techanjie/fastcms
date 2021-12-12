var $=Object.defineProperty;var b=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var I=(e,o,s)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,k=(e,o)=>{for(var s in o||(o={}))P.call(o,s)&&I(e,s,o[s]);if(b)for(var s of b(o))V.call(o,s)&&I(e,s,o[s]);return e};import{i as q,H as T,M as R,a0 as j,j as D,J as A,o as L,t as E,l as c,Q as K,A as a,b as B,D as U,z as n,p as h,q as H,y as x,G}from"./vendor.e5eb9059.js";import{B as S,_ as M,u as N,f as Q,S as y,C as z,D as J}from"./index.a104479c.js";import{l as O}from"./index.fc7dbc9e.js";function W(e){return S({url:"/admin/login",method:"post",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function Y(){return S({url:"/admin/captcha",method:"get"})}const X=q({name:"login",setup(){const{t:e}=T(),{proxy:o}=G(),s=N(),d=R(),w=j(),r=D({isShowPassword:!1,captcha:"",captchaKey:"",myForm:{username:"",password:"",code:""},rules:{username:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"},code:{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"}},loading:{signIn:!1}}),i=A(()=>Q(new Date)),l=async()=>{Y().then(t=>{r.captcha=t.data.image,r.captchaKey=t.data.codeUuid,y.set("ClientId",r.captchaKey)}).catch(()=>{})};L(()=>{l()});const p=async()=>{new Promise(t=>{o.$refs.myRefForm.validate(u=>{u&&(t(u),F())})})},F=async()=>{W(O.stringify(r.myForm)).then(t=>{C(t)}).catch(t=>{l(),B({showClose:!0,message:t.message?t.message:"\u7CFB\u7EDF\u9519\u8BEF",type:"error"})})},C=async t=>{r.loading.signIn=!0;let u=["admin"],g=["btn.add","btn.del","btn.edit","btn.link"];const m={username:t.data.username,photo:r.myForm.username==="admin"?"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=317673774,2961727727&fm=26&gp=0.jpg",time:new Date().getTime(),authPageList:u,authBtnList:g};y.set("token",t.data.token),y.set("tokenTtl",t.data.tokenTtl),y.set("userInfo",m),s.dispatch("userInfos/setUserInfos",m),s.state.themeConfig.themeConfig.isRequestRoutes?(await J(),f()):(await z(),f())},f=()=>{var u,g,m,_;let t=i.value;((u=d.query)==null?void 0:u.redirect)?w.push({path:(g=d.query)==null?void 0:g.redirect,query:Object.keys((m=d.query)==null?void 0:m.params).length>0?JSON.parse((_=d.query)==null?void 0:_.params):""}):w.push("/"),setTimeout(()=>{r.loading.signIn=!0;const v=e("message.signInText");B.success(`${t}\uFF0C${v}`),o.mittBus.emit("onSignInClick")},300)};return k({currentTime:i,onSignIn:p,refreshCode:l},E(r))}}),Z={class:"login-content-code"},ee=["src"];function oe(e,o,s,d,w,r){const i=c("el-input"),l=c("el-form-item"),p=c("el-col"),F=c("el-row"),C=c("el-button"),f=c("el-form");return U(),K(f,{class:"login-content-form",model:e.myForm,rules:e.rules,ref:"myRefForm"},{default:a(()=>[n(l,{prop:"username"},{default:a(()=>[n(i,{type:"text",placeholder:e.$t("message.account.accountPlaceholder1"),"prefix-icon":"el-icon-user",modelValue:e.myForm.username,"onUpdate:modelValue":o[0]||(o[0]=t=>e.myForm.username=t),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),n(l,{prop:"password"},{default:a(()=>[n(i,{type:e.isShowPassword?"text":"password",placeholder:e.$t("message.account.accountPlaceholder2"),"prefix-icon":"el-icon-lock",modelValue:e.myForm.password,"onUpdate:modelValue":o[2]||(o[2]=t=>e.myForm.password=t),autocomplete:"off"},{suffix:a(()=>[h("i",{class:H(["iconfont el-input__icon login-content-password",e.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:o[1]||(o[1]=t=>e.isShowPassword=!e.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),n(l,{prop:"code"},{default:a(()=>[n(F,{gutter:15},{default:a(()=>[n(p,{span:14},{default:a(()=>[n(i,{type:"text",maxlength:"5",placeholder:e.$t("message.account.accountPlaceholder3"),"prefix-icon":"el-icon-position",modelValue:e.myForm.code,"onUpdate:modelValue":o[3]||(o[3]=t=>e.myForm.code=t),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),n(p,{span:10},{default:a(()=>[h("div",Z,[h("img",{class:"login-content-code-img",alt:"fastcms",onClick:o[4]||(o[4]=(...t)=>e.refreshCode&&e.refreshCode(...t)),src:e.captcha},null,8,ee)])]),_:1})]),_:1})]),_:1}),n(l,null,{default:a(()=>[n(C,{type:"primary",class:"login-content-submit",round:"",onClick:e.onSignIn,loading:e.loading.signIn},{default:a(()=>[h("span",null,x(e.$t("message.account.accountBtnText")),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model","rules"])}var re=M(X,[["render",oe],["__scopeId","data-v-e63d7bea"]]);export{re as default};
