var q=Object.defineProperty;var b=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var v=(o,s,a)=>s in o?q(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a,k=(o,s)=>{for(var a in s||(s={}))V.call(s,a)&&v(o,a,s[a]);if(b)for(var a of b(s))P.call(s,a)&&v(o,a,s[a]);return o};import{i as j,H as A,M as D,a0 as E,j as U,J as K,o as M,t as N,l as c,Q as z,A as r,b as p,D as J,z as t,p as f,q as L,y as O,G as x}from"./vendor.d2ed1f2c.js";import{_ as G,u as H,f as Q,S as g,b as S,c as W,d as X}from"./index.2d3c5e63.js";import{g as Y,s as Z}from"./index.956ae18d.js";import{l as ee}from"./index.6a67ebb2.js";const oe=j({name:"login",setup(){const{t:o}=A(),{proxy:s}=x(),a=H(),l=D(),y=E(),n=U({isShowPassword:!1,captcha:"",captchaKey:"",myForm:{username:"",password:"",code:""},rules:{username:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"},code:{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"}},loading:{signIn:!1}}),i=K(()=>Q(new Date)),u=async()=>{Y().then(e=>{n.captcha=e.data.image,n.captchaKey=e.data.codeUuid,g.set("ClientId",n.captchaKey)}).catch(()=>{})};M(()=>{u()});const m=async()=>{new Promise(e=>{s.$refs.myRefForm.validate(d=>{d&&(e(d),h())})})},h=async()=>{n.loading.signIn=!0,Z(ee.stringify(n.myForm)).then(e=>{n.loading.signIn=!1,w(e)}).catch(e=>{n.loading.signIn=!1,u(),p({showClose:!0,message:e.message?e.message:"\u7CFB\u7EDF\u9519\u8BEF",type:"error"})})},w=async e=>{if(e.data.userType!=1&&e.data.userType!=2){p.error("\u672A\u77E5\u7528\u6237\u7C7B\u578B");return}e.data.userType===1&&e.data.hasRole==!1?p.error("\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743"):C(e)},C=async e=>{var F,_,I,B;const d={username:e.data.username,photo:e.data.headImg===null?"/header.jpg":e.data.headImg,time:new Date().getTime(),hasRole:e.data.hasRole,version:e.data.version,userType:e.data.userType};g.set("token",e.data.token),g.set("tokenTtl",e.data.tokenTtl),g.set("userInfo",d),a.dispatch("userInfos/setUserInfos",d),a.state.themeConfig.themeConfig.isRequestRoutes?e.data.userType===1?await W():e.data.userType===2&&await S():await S();let R=i.value;if((F=l.query)==null?void 0:F.redirect)console.log(l.query),y.push({path:(_=l.query)==null?void 0:_.redirect,query:Object.keys((I=l.query)==null?void 0:I.params).length>0?JSON.parse((B=l.query)==null?void 0:B.params):""});else{const $=X[0].children[0].path||"/";y.push($)}setTimeout(()=>{n.loading.signIn=!0;const T=o("message.signInText");p.success(`${R}\uFF0C${T}`),s.mittBus.emit("onSignInClick")},300)};return k({currentTime:i,onSignIn:m,refreshCode:u},N(n))}}),se={class:"login-content-code"},ae=["src"];function te(o,s,a,l,y,n){const i=c("el-input"),u=c("el-form-item"),m=c("el-col"),h=c("el-row"),w=c("el-button"),C=c("el-form");return J(),z(C,{class:"login-content-form",model:o.myForm,rules:o.rules,ref:"myRefForm"},{default:r(()=>[t(u,{prop:"username"},{default:r(()=>[t(i,{type:"text",placeholder:o.$t("message.account.accountPlaceholder1"),"prefix-icon":"el-icon-user",modelValue:o.myForm.username,"onUpdate:modelValue":s[0]||(s[0]=e=>o.myForm.username=e),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),t(u,{prop:"password"},{default:r(()=>[t(i,{type:o.isShowPassword?"text":"password",placeholder:o.$t("message.account.accountPlaceholder2"),"prefix-icon":"el-icon-lock",modelValue:o.myForm.password,"onUpdate:modelValue":s[2]||(s[2]=e=>o.myForm.password=e),autocomplete:"off"},{suffix:r(()=>[f("i",{class:L(["iconfont el-input__icon login-content-password",o.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:s[1]||(s[1]=e=>o.isShowPassword=!o.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),t(u,{prop:"code"},{default:r(()=>[t(h,{gutter:15},{default:r(()=>[t(m,{span:14},{default:r(()=>[t(i,{type:"text",maxlength:"5",placeholder:o.$t("message.account.accountPlaceholder3"),"prefix-icon":"el-icon-position",modelValue:o.myForm.code,"onUpdate:modelValue":s[3]||(s[3]=e=>o.myForm.code=e),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),t(m,{span:10},{default:r(()=>[f("div",se,[f("img",{class:"login-content-code-img",alt:"fastcms",onClick:s[4]||(s[4]=(...e)=>o.refreshCode&&o.refreshCode(...e)),src:o.captcha},null,8,ae)])]),_:1})]),_:1})]),_:1}),t(u,null,{default:r(()=>[t(w,{type:"primary",class:"login-content-submit",round:"",onClick:o.onSignIn,loading:o.loading.signIn},{default:r(()=>[f("span",null,O(o.$t("message.account.accountBtnText")),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model","rules"])}var ce=G(oe,[["render",te],["__scopeId","data-v-1c9b6ff4"]]);export{ce as default};
