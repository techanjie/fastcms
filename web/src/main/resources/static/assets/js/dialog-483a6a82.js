import{D as z}from"./index-dd681cfd.js";import{H as v,e as x,_ as B,ah as r,o as V,c as D,V as l,P as o,a as F,T as h,U as n,S as R,n as E}from"./@vue-6dabbe94.js";import"./index-b9e84531.js";import"./pinia-b6f74250.js";import"./vue-router-c1461dfc.js";import"./vue-i18n-b3581196.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-b1ba6f14.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-64e6e14a.js";import"./nprogress-08a53ce8.js";import"./axios-4a70c6fc.js";import"./qs-c5b6dbf2.js";import"./side-channel-394f276c.js";import"./get-intrinsic-bd2830fd.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-e5c1c8b0.js";import"./object-inspect-8fd4bade.js";import"./element-plus-91d6d961.js";import"./lodash-es-9851428c.js";import"./@vueuse-e129c873.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-880a26aa.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-ec2a62c3.js";const H={class:"system-dept-dialog-container"},j={key:0},G={class:"dialog-footer"},J=v({name:"systemDeptDialog"}),ye=v({...J,props:{deptParentData:{type:Array}},emits:["refresh"],setup(N,{expose:w,emit:y}){const C=N,c=z(),_=x(),u=x(),e=B({ruleForm:{id:null,parentId:0,deptName:"",deptLeader:"",deptPhone:"",deptAddr:"",sortNum:0,status:1,deptDesc:""},rules:{deptName:{required:!0,message:"请输入部门名称",trigger:"blur"},deptLeader:{required:!0,message:"请输入部门负责人",trigger:"blur"},deptPhone:{required:!0,message:"请输入部门负责人手机号",trigger:"blur"}},deptData:[],dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),k=(s,t)=>{s==="edit"?(e.dialog.title="修改部门",e.dialog.submitTxt="修 改",c.getDept(t.id).then(p=>{delete p.data.created,delete p.data.updated,e.ruleForm=p.data})):(e.dialog.title="新增部门",e.dialog.submitTxt="新 增",E(()=>{u.value.resetFields(),e.ruleForm.id=null,e.ruleForm.parentId=t==null?0:t.id||0})),e.dialog.isShowDialog=!0},f=()=>{e.dialog.isShowDialog=!1},P=()=>{f()},U=()=>{const s=_.value.getCheckedNodes();e.ruleForm.parentId=s[0].value},S=()=>{new Promise(s=>{u.value.validate(t=>{t&&(s(t),c.saveDept(e.ruleForm).then(()=>{f(),y("refresh")}))})})};return w({openDialog:k}),(s,t)=>{const p=r("el-cascader"),d=r("el-form-item"),m=r("el-col"),i=r("el-input"),A=r("el-input-number"),T=r("el-switch"),L=r("el-row"),I=r("el-form"),g=r("el-button"),q=r("el-dialog");return V(),D("div",H,[l(q,{title:e.dialog.title,modelValue:e.dialog.isShowDialog,"onUpdate:modelValue":t[8]||(t[8]=a=>e.dialog.isShowDialog=a),width:"769px"},{footer:o(()=>[F("span",G,[l(g,{onClick:P,size:"default"},{default:o(()=>[h("取 消")]),_:1}),l(g,{type:"primary",onClick:S,size:"default"},{default:o(()=>[h(n(e.dialog.submitTxt),1)]),_:1})])]),default:o(()=>[l(I,{ref_key:"deptDialogFormRef",ref:u,model:e.ruleForm,rules:e.rules,size:"default","label-width":"90px"},{default:o(()=>[l(L,{gutter:35},{default:o(()=>[l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(d,{label:"上级部门"},{default:o(()=>[l(p,{ref_key:"parentDeptCascader",ref:_,options:C.deptParentData,props:{checkStrictly:!0,value:"id",label:"deptName"},placeholder:"请选择部门",clearable:"",class:"w100",modelValue:e.ruleForm.parentId,"onUpdate:modelValue":t[0]||(t[0]=a=>e.ruleForm.parentId=a),"show-all-levels":!1,onChange:U},{default:o(({node:a,data:b})=>[F("span",null,n(b.deptName),1),a.isLeaf?R("",!0):(V(),D("span",j," ("+n(b.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"部门名称",prop:"deptName"},{default:o(()=>[l(i,{modelValue:e.ruleForm.deptName,"onUpdate:modelValue":t[1]||(t[1]=a=>e.ruleForm.deptName=a),placeholder:"请输入部门名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"负责人",prop:"deptLeader"},{default:o(()=>[l(i,{modelValue:e.ruleForm.deptLeader,"onUpdate:modelValue":t[2]||(t[2]=a=>e.ruleForm.deptLeader=a),placeholder:"请输入负责人",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"手机号",prop:"deptPhone"},{default:o(()=>[l(i,{modelValue:e.ruleForm.deptPhone,"onUpdate:modelValue":t[3]||(t[3]=a=>e.ruleForm.deptPhone=a),placeholder:"请输入手机号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"部门地址",prop:"deptAddr"},{default:o(()=>[l(i,{modelValue:e.ruleForm.deptAddr,"onUpdate:modelValue":t[4]||(t[4]=a=>e.ruleForm.deptAddr=a),placeholder:"请输入部门地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"排序"},{default:o(()=>[l(A,{modelValue:e.ruleForm.sortNum,"onUpdate:modelValue":t[5]||(t[5]=a=>e.ruleForm.sortNum=a),min:0,max:999,"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"部门状态"},{default:o(()=>[l(T,{modelValue:e.ruleForm.status,"onUpdate:modelValue":t[6]||(t[6]=a=>e.ruleForm.status=a),"active-value":1,"inactive-value":0,"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(d,{label:"部门描述",prop:"deptDesc"},{default:o(()=>[l(i,{modelValue:e.ruleForm.deptDesc,"onUpdate:modelValue":t[7]||(t[7]=a=>e.ruleForm.deptDesc=a),type:"textarea",placeholder:"请输入部门描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});export{ye as default};
