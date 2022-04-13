var k=Object.defineProperty;var A=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var C=(e,o,r)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,y=(e,o)=>{for(var r in o||(o={}))w.call(o,r)&&C(e,r,o[r]);if(A)for(var r of A(o))x.call(o,r)&&C(e,r,o[r]);return e};import{d as V,e as I}from"./index.f4ffa815.js";import{_ as T}from"./index.fd217d0f.js";import{j as M,a8 as N,t as O,l as p,m as b,z as a,A as s,E as j,b as E,D as m,p as l,Q as g,L as B,x as h,y as n,Y as z,X as L,G as $,B as R,C as U}from"./vendor.d2ed1f2c.js";const X={name:"orderDetail",setup(e,o){const{proxy:r}=$(),u=M({isShowDialog:!1,ruleForm:{id:null},rules:{}}),D=d=>{u.isShowDialog=!0,u.ruleForm.id=d},f=()=>{u.isShowDialog=!1},t=()=>{f(),v()},c=()=>{r.$refs.myRefForm.validate(d=>{})},F=()=>{j.confirm("\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u8BA2\u5355, \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{V(u.ruleForm.id).then(()=>{f(),E.success("\u5220\u9664\u6210\u529F"),o.emit("reloadTable")}).catch(d=>{E.error(d.message)})}).catch(()=>{})},_=()=>{u.ruleForm.id&&u.ruleForm.id!=null&&I(u.ruleForm.id).then(d=>{u.ruleForm=d.data})};N(()=>{_()});const v=()=>{u.ruleForm={}};return y({openDialog:D,closeDialog:f,onCancel:t,onSubmit:c,deleteOrder:F},O(u))}},i=e=>(R("data-v-2b156ca8"),e=e(),U(),e),G={class:"system-menu-container"},Q={class:"personal"},Y={class:"personal-user"},q={class:"personal-user-right"},H=i(()=>l("div",{class:"personal-item-label"},"\u8BA2\u5355\u7F16\u53F7\uFF1A",-1)),J={class:"personal-item-value"},K=i(()=>l("div",{class:"personal-item-label"},"\u8BA2\u5355\u72B6\u6001\uFF1A",-1)),P={class:"personal-item-value"},W=i(()=>l("div",{class:"personal-item-label"},"\u4EA4\u6613\u72B6\u6001\uFF1A",-1)),Z={class:"personal-item-value"},ee=i(()=>l("div",{class:"personal-item-label"},"\u652F\u4ED8\u72B6\u6001\uFF1A",-1)),se={class:"personal-item-value"},le=i(()=>l("div",{class:"personal-item-label"},"\u8BA2\u5355\u91D1\u989D\uFF1A",-1)),ae={class:"personal-item-value"},te=i(()=>l("div",{class:"personal-item-label"},"\u4E70\u5BB6\uFF1A",-1)),oe={class:"personal-item-value"},re=i(()=>l("div",{class:"personal-item-label"},"\u521B\u5EFA\u65F6\u95F4\uFF1A",-1)),ue={class:"personal-item-value"},ne=i(()=>l("div",{class:"personal-item-label"},"\u4E70\u5BB6\u7559\u8A00\uFF1A",-1)),de={class:"personal-item-value"},ie=i(()=>l("div",{class:"personal-item-label"},"\u5356\u5BB6\u5907\u6CE8\uFF1A",-1)),ce={class:"personal-item-value"},me={class:"personal-edit-safe-item"},_e={class:"personal-edit-safe-item-left"},pe={class:"personal-edit-safe-item-left-label"},fe={class:"personal-edit-safe-item-right"},Fe={class:"dialog-footer"},he=h("\u5220 \u9664"),ve=h("\u53D6 \u6D88");function be(e,o,r,u,D,f){const t=p("el-col"),c=p("el-row"),F=p("el-card"),_=p("el-button"),v=p("el-dialog");return m(),b("div",G,[a(v,{title:"\u8BA2\u5355\u8BE6\u60C5",fullscreen:"",modelValue:e.isShowDialog,"onUpdate:modelValue":o[0]||(o[0]=d=>e.isShowDialog=d)},{footer:s(()=>[l("span",Fe,[e.ruleForm.status==1?(m(),g(_,{key:0,type:"danger",onClick:u.deleteOrder,size:"small"},{default:s(()=>[he]),_:1},8,["onClick"])):B("",!0),a(_,{onClick:u.onCancel,size:"small"},{default:s(()=>[ve]),_:1},8,["onClick"])])]),default:s(()=>[l("div",Q,[a(c,null,{default:s(()=>[a(t,{xs:24,sm:24},{default:s(()=>[a(F,{shadow:"hover"},{default:s(()=>[l("div",Y,[l("div",q,[a(c,null,{default:s(()=>[a(t,{span:24,class:"personal-title mb18"},{default:s(()=>[h(n(e.ruleForm.orderTitle),1)]),_:1}),a(t,{span:24},{default:s(()=>[a(c,null,{default:s(()=>[a(t,{xs:24,sm:8,class:"personal-item mb6"},{default:s(()=>[H,l("div",J,n(e.ruleForm.orderSn),1)]),_:1}),a(t,{xs:24,sm:4,class:"personal-item mb6"},{default:s(()=>[K,l("div",P,n(e.ruleForm.statusStr),1)]),_:1}),a(t,{xs:24,sm:4,class:"personal-item mb6"},{default:s(()=>[W,l("div",Z,n(e.ruleForm.tradeStatusStr),1)]),_:1}),a(t,{xs:24,sm:4,class:"personal-item mb6"},{default:s(()=>[ee,l("div",se,n(e.ruleForm.payStatusStr),1)]),_:1})]),_:1})]),_:1}),a(t,{span:24},{default:s(()=>[a(c,null,{default:s(()=>[a(t,{xs:24,sm:8,class:"personal-item mb6"},{default:s(()=>[le,l("div",ae,n(e.ruleForm.orderAmount),1)]),_:1}),a(t,{xs:24,sm:4,class:"personal-item mb6"},{default:s(()=>[te,l("div",oe,n(e.ruleForm.nickName),1)]),_:1}),a(t,{xs:24,sm:4,class:"personal-item mb6"},{default:s(()=>[re,l("div",ue,n(e.ruleForm.created),1)]),_:1})]),_:1})]),_:1}),e.ruleForm.buyerMsg!=null&&e.ruleForm.buyerMsg!=""?(m(),g(t,{key:0,span:24},{default:s(()=>[a(c,null,{default:s(()=>[a(t,{xs:24,sm:24,class:"personal-item mb6"},{default:s(()=>[ne,l("div",de,n(e.ruleForm.buyerMsg),1)]),_:1})]),_:1})]),_:1})):B("",!0),e.ruleForm.remarks!=null&&e.ruleForm.remarks!=""?(m(),g(t,{key:1,span:24},{default:s(()=>[a(c,null,{default:s(()=>[a(t,{xs:24,sm:24,class:"personal-item mb6"},{default:s(()=>[ie,l("div",ce,n(e.ruleForm.remarks),1)]),_:1})]),_:1})]),_:1})):B("",!0)]),_:1})])])]),_:1})]),_:1}),a(t,{span:24},{default:s(()=>[a(F,{shadow:"hover",class:"mt15 personal-edit",header:"\u5546\u54C1\u4FE1\u606F"},{default:s(()=>[(m(!0),b(z,null,L(e.ruleForm.orderItemList,(d,S)=>(m(),b("div",{class:"personal-edit-safe-box",key:S},[l("div",me,[l("div",_e,[l("div",pe,n(d.productTitle),1)]),l("div",fe,[a(_,{type:"text"},{default:s(()=>[h("\u6570\u91CF X "+n(d.productCount),1)]),_:2},1024)])])]))),128))]),_:1})]),_:1})]),_:1})])]),_:1},8,["modelValue"])])}var Ce=T(X,[["render",be],["__scopeId","data-v-2b156ca8"]]);export{Ce as default};
