import{R as C}from"./index-50de8f89.js";import{a as R}from"./element-plus-91d6d961.js";import{H as f,e as S,_ as k,ah as r,o as T,c as U,V as l,P as o,a as A,T as p}from"./@vue-6dabbe94.js";const B={class:"dialog-footer"},q=f({name:"systemAddRoleDialog"}),P=f({...q,emits:["reloadTable"],setup(E,{expose:g,emit:b}){const m=S(),F=C(),e=k({isShowDialog:!1,ruleForm:{id:null,roleName:"",roleDesc:"",active:"1"},rules:{roleName:{required:!0,message:"请输入角色名称",trigger:"blur"},roleDesc:{required:!0,message:"请输入角色描述",trigger:"blur"}}}),V=t=>{e.isShowDialog=!0,t?N(t):(e.ruleForm.id=null,m.value.resetFields())},i=()=>{e.isShowDialog=!1},D=()=>{i()},v=()=>{m.value.validate(t=>{t&&F.saveRole(e.ruleForm).then(()=>{i(),b("reloadTable")}).catch(a=>{R({showClose:!0,message:a.message?a.message:"系统错误",type:"error"})})})},N=t=>{e.ruleForm.id=t.id,e.ruleForm.roleName=t.roleName,e.ruleForm.roleDesc=t.roleDesc};return g({openDialog:V}),(t,a)=>{const d=r("el-input"),n=r("el-form-item"),u=r("el-col"),c=r("el-option"),h=r("el-select"),w=r("el-row"),x=r("el-form"),_=r("el-button"),y=r("el-dialog");return T(),U("div",null,[l(y,{title:"新增角色",modelValue:e.isShowDialog,"onUpdate:modelValue":a[3]||(a[3]=s=>e.isShowDialog=s),width:"769px"},{footer:o(()=>[A("span",B,[l(_,{onClick:D},{default:o(()=>[p("取 消")]),_:1}),l(_,{type:"primary",onClick:v},{default:o(()=>[p("保 存")]),_:1})])]),default:o(()=>[l(x,{model:e.ruleForm,size:"default","label-width":"80px",rules:e.rules,ref_key:"myRefForm",ref:m},{default:o(()=>[l(w,{gutter:35},{default:o(()=>[l(u,{class:"mb20"},{default:o(()=>[l(n,{label:"角色名称",prop:"roleName"},{default:o(()=>[l(d,{modelValue:e.ruleForm.roleName,"onUpdate:modelValue":a[0]||(a[0]=s=>e.ruleForm.roleName=s),placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{class:"mb20"},{default:o(()=>[l(n,{label:"角色描述",prop:"roleDesc"},{default:o(()=>[l(d,{modelValue:e.ruleForm.roleDesc,"onUpdate:modelValue":a[1]||(a[1]=s=>e.ruleForm.roleDesc=s),placeholder:"请输入角色描述",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{class:"mb20"},{default:o(()=>[l(n,{label:"是否启用"},{default:o(()=>[l(h,{modelValue:e.ruleForm.active,"onUpdate:modelValue":a[2]||(a[2]=s=>e.ruleForm.active=s),placeholder:"请选择是否启用",clearable:"",class:"w100"},{default:o(()=>[l(c,{label:"是",value:"1"}),l(c,{label:"否",value:"0"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});export{P as _};
