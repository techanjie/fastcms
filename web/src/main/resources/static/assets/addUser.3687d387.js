var N=Object.defineProperty;var _=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var w=(l,u,d)=>u in l?N(l,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[u]=d,D=(l,u)=>{for(var d in u||(u={}))h.call(u,d)&&w(l,d,u[d]);if(_)for(var d of _(u))S.call(u,d)&&w(l,d,u[d]);return l};import{s as A,a as j}from"./index.a47e2bd2.js";import{c as R}from"./index.141f38c5.js";import{g as x}from"./client.34ec076c.js";import{l as z}from"./index.6a67ebb2.js";import{_ as T}from"./index.d1227e45.js";import{j as $,o as q,t as M,l as n,m as g,z as e,A as a,b as G,D as F,p as I,Y as L,X as y,Q as E,G as Q,x as v}from"./vendor.d2ed1f2c.js";const X={name:"systemAddUser",setup(l,u){const{proxy:d}=Q(),r=$({isShowDialog:!1,deptList:[],tags:[],roleList:[],ruleForm:{id:null,userName:"",userType:1,password:"",nickName:"",mobile:"",email:"",company:"",address:"",sex:"1",status:"1",tagList:"",roleList:"",source:"admin_create"},rules:{userName:{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:"blur"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}}}),V=()=>{r.isShowDialog=!0},b=()=>{r.isShowDialog=!1},i=()=>{b(),p()},t=()=>{d.$refs.myRefForm.validate(m=>{if(m){let c=z.stringify(r.ruleForm,{arrayFormat:"repeat"});A(c).then(()=>{b(),p(),u.emit("reloadTable")}).catch(f=>{G({showClose:!0,message:f.message?f.message:"\u7CFB\u7EDF\u9519\u8BEF",type:"error"})})}})},s=()=>{R().then(m=>{r.roleList=m.data}).catch(m=>{console.log(m)}),j().then(m=>{r.tags=m.data}),x().then(m=>{r.deptList=m.data})};q(()=>{s()});const p=()=>{r.ruleForm.id=null,r.ruleForm.userName="",r.ruleForm.password="",r.ruleForm.nickName="",r.ruleForm.mobile="",r.ruleForm.email="",r.ruleForm.company="",r.ruleForm.address="",r.ruleForm.sex="",r.ruleForm.status="",r.ruleForm.roleList="",r.ruleForm.tagList="",r.ruleForm.source="admin_create"};return D({openDialog:V,closeDialog:b,onCancel:i,onSubmit:t,loadRoleList:s},M(r))}},Y={class:"system-user-container"},H={class:"dialog-footer"},J=v("\u53D6 \u6D88"),K=v("\u4FDD \u5B58");function O(l,u,d,r,V,b){const i=n("el-input"),t=n("el-form-item"),s=n("el-col"),p=n("el-option"),m=n("el-select"),c=n("el-cascader"),f=n("el-row"),C=n("el-form"),B=n("el-button"),U=n("el-dialog");return F(),g("div",Y,[e(U,{title:"\u65B0\u589E\u7528\u6237",modelValue:l.isShowDialog,"onUpdate:modelValue":u[12]||(u[12]=o=>l.isShowDialog=o),width:"769px"},{footer:a(()=>[I("span",H,[e(B,{onClick:r.onCancel,size:"small"},{default:a(()=>[J]),_:1},8,["onClick"]),e(B,{type:"primary",onClick:r.onSubmit,size:"small"},{default:a(()=>[K]),_:1},8,["onClick"])])]),default:a(()=>[e(C,{model:l.ruleForm,size:"small","label-width":"80px",rules:l.rules,ref:"myRefForm"},{default:a(()=>[e(f,{gutter:35},{default:a(()=>[e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(t,{label:"\u8D26\u53F7",prop:"userName"},{default:a(()=>[e(i,{modelValue:l.ruleForm.userName,"onUpdate:modelValue":u[0]||(u[0]=o=>l.ruleForm.userName=o),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(t,{label:"\u5BC6\u7801",prop:"password"},{default:a(()=>[e(i,{modelValue:l.ruleForm.password,"onUpdate:modelValue":u[1]||(u[1]=o=>l.ruleForm.password=o),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(t,{label:"\u6635\u79F0",prop:"nickName"},{default:a(()=>[e(i,{modelValue:l.ruleForm.nickName,"onUpdate:modelValue":u[2]||(u[2]=o=>l.ruleForm.nickName=o),placeholder:"\u8BF7\u8F93\u5165\u6635\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(t,{label:"\u624B\u673A\u53F7\u7801",prop:"mobile"},{default:a(()=>[e(i,{modelValue:l.ruleForm.mobile,"onUpdate:modelValue":u[3]||(u[3]=o=>l.ruleForm.mobile=o),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(t,{label:"\u7535\u5B50\u90AE\u7BB1",prop:"email"},{default:a(()=>[e(i,{modelValue:l.ruleForm.email,"onUpdate:modelValue":u[4]||(u[4]=o=>l.ruleForm.email=o),placeholder:"\u8BF7\u8F93\u5165\u7535\u5B50\u90AE\u7BB1",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(t,{label:"\u516C\u53F8",prop:"company"},{default:a(()=>[e(i,{modelValue:l.ruleForm.company,"onUpdate:modelValue":u[5]||(u[5]=o=>l.ruleForm.company=o),placeholder:"\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(t,{label:"\u5730\u5740",prop:"address"},{default:a(()=>[e(i,{modelValue:l.ruleForm.address,"onUpdate:modelValue":u[6]||(u[6]=o=>l.ruleForm.address=o),placeholder:"\u8BF7\u8F93\u5165\u5730\u5740",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(t,{label:"\u6027\u522B"},{default:a(()=>[e(m,{modelValue:l.ruleForm.sex,"onUpdate:modelValue":u[7]||(u[7]=o=>l.ruleForm.sex=o),placeholder:"\u8BF7\u9009\u62E9\u6027\u522B",clearable:"",class:"w100"},{default:a(()=>[e(p,{label:"\u7537",value:"1"}),e(p,{label:"\u5973",value:"0"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(t,{label:"\u72B6\u6001"},{default:a(()=>[e(m,{modelValue:l.ruleForm.status,"onUpdate:modelValue":u[8]||(u[8]=o=>l.ruleForm.status=o),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"w100"},{default:a(()=>[e(p,{label:"\u542F\u7528",value:"1"}),e(p,{label:"\u7981\u7528",value:"0"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{class:"mb20"},{default:a(()=>[e(t,{label:"\u7528\u6237\u6807\u7B7E"},{default:a(()=>[e(m,{modelValue:l.ruleForm.tagList,"onUpdate:modelValue":u[9]||(u[9]=o=>l.ruleForm.tagList=o),class:"w100",multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"\u53EF\u76F4\u63A5\u8F93\u5165\u6807\u7B7E\u540D\u79F0"},{default:a(()=>[(F(!0),g(L,null,y(l.tags,o=>(F(),E(p,{key:o.id,label:o.title,value:o.title},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{class:"mb20"},{default:a(()=>[e(t,{label:"\u5206\u914D\u90E8\u95E8"},{default:a(()=>[e(c,{modelValue:l.ruleForm.deptList,"onUpdate:modelValue":u[10]||(u[10]=o=>l.ruleForm.deptList=o),options:l.deptList,placeholder:"\u8BF7\u9009\u62E9\u90E8\u95E8",props:{checkStrictly:!0,multiple:!0,label:"label",value:"id",children:"children"},class:"w100",clearable:""},null,8,["modelValue","options"])]),_:1})]),_:1}),e(s,{class:"mb20"},{default:a(()=>[e(t,{label:"\u5206\u914D\u89D2\u8272"},{default:a(()=>[e(m,{modelValue:l.ruleForm.roleList,"onUpdate:modelValue":u[11]||(u[11]=o=>l.ruleForm.roleList=o),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",clearable:"",class:"w100"},{default:a(()=>[(F(!0),g(L,null,y(l.roleList,(o,k)=>(F(),E(p,{key:k,label:o.roleName,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var oe=T(X,[["render",O]]);export{oe as default};
