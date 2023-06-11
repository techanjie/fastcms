import{_ as P}from"./dialog.vue_vue_type_script_setup_true_name_systemUserDialog_lang-0b1e7e7f.js";import{U as E}from"./index-b1d08a77.js";import{D as L}from"./index-dd681cfd.js";import{E as D,a as d}from"./element-plus-91d6d961.js";import{H as y,e as R,_ as $,i as H,ah as r,o as c,c as M,V as a,P as n,a as O,T as m,O as f,S as b}from"./@vue-6dabbe94.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-50de8f89.js";import"./index-b9e84531.js";import"./pinia-b6f74250.js";import"./vue-router-c1461dfc.js";import"./vue-i18n-b3581196.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-b1ba6f14.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-64e6e14a.js";import"./nprogress-08a53ce8.js";import"./axios-4a70c6fc.js";import"./qs-c5b6dbf2.js";import"./side-channel-394f276c.js";import"./get-intrinsic-bd2830fd.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-e5c1c8b0.js";import"./object-inspect-8fd4bade.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-ec2a62c3.js";import"./lodash-es-9851428c.js";import"./@vueuse-e129c873.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-880a26aa.js";const q={class:"system-user-container"},F={class:"system-dept-search mb15"},G=y({name:"systemUser"}),J=y({...G,setup(K){const u=E(),v=L(),_=R(),e=$({deptList:[],tableData:{data:[],total:0,loading:!1,param:{type:1,username:"",phone:"",pageNum:1,pageSize:10}}}),x=()=>{_.value.openDialog()},z=o=>{_.value.openDialog(o)},p=()=>{const o=e.tableData.param.deptId;o!=null&&o.length>0&&(e.tableData.param.deptId=o[o.length-1]),e.tableData.data=[],u.getUserList(e.tableData.param).then(t=>{e.tableData.data=t.data.records,e.tableData.total=t.data.total}).catch(()=>{})},k=o=>{D.confirm("此操作将永久删除用户, 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{u.delUser(o.id).then(()=>{d.success("删除成功"),p()}).catch(t=>{d.error(t.message)})}).catch(()=>{})},C=o=>{D.confirm("确定重置员工["+o.userName+"]账号密码吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{e.loading=!0,u.resetPassword(o.id).then(()=>{e.loading=!1,d.success("操作成功"),p()}).catch(t=>{e.loading=!1,d.error(t.message)})}).catch(()=>{})},U=o=>{e.tableData.param.pageSize=o,p()},V=o=>{e.tableData.param.pageNum=o,p()};return H(()=>{p(),v.getDeptList({status:1}).then(o=>{e.deptList=o.data})}),(o,t)=>{const g=r("el-input"),S=r("el-cascader"),N=r("ele-Search"),h=r("el-icon"),i=r("el-button"),B=r("ele-Plus"),s=r("el-table-column"),T=r("el-table"),I=r("el-pagination"),A=r("el-card");return c(),M("div",q,[a(A,{shadow:"hover"},{default:n(()=>[O("div",F,[a(g,{size:"default",modelValue:e.tableData.param.username,"onUpdate:modelValue":t[0]||(t[0]=l=>e.tableData.param.username=l),placeholder:"请输入账号",clearable:"",style:{"max-width":"180px"},class:"ml10"},null,8,["modelValue"]),a(g,{size:"default",modelValue:e.tableData.param.phone,"onUpdate:modelValue":t[1]||(t[1]=l=>e.tableData.param.phone=l),placeholder:"请输入手机号",clearable:"",style:{"max-width":"180px"},class:"ml10"},null,8,["modelValue"]),a(S,{size:"default",modelValue:e.tableData.param.deptId,"onUpdate:modelValue":t[2]||(t[2]=l=>e.tableData.param.deptId=l),"show-all-levels":!0,options:e.deptList,props:{checkStrictly:!0,expandTrigger:"hover",label:"label",value:"id",children:"children"},placeholder:"部门",clearable:"",class:"ml10"},null,8,["modelValue","options"]),a(i,{size:"default",type:"primary",class:"ml10",onClick:p},{default:n(()=>[a(h,null,{default:n(()=>[a(N)]),_:1}),m("查询 ")]),_:1}),a(i,{size:"default",type:"primary",class:"ml10",onClick:t[3]||(t[3]=l=>x())},{default:n(()=>[a(h,null,{default:n(()=>[a(B)]),_:1}),m("新建员工 ")]),_:1})]),a(T,{data:e.tableData.data,style:{width:"100%"}},{default:n(()=>[a(s,{prop:"id",label:"ID","show-overflow-tooltip":""}),a(s,{prop:"userName",label:"账号","show-overflow-tooltip":""}),a(s,{prop:"nickName",label:"昵称","show-overflow-tooltip":""}),a(s,{prop:"sourceStr",label:"来源","show-overflow-tooltip":""}),a(s,{prop:"created",label:"加入时间","show-overflow-tooltip":""}),a(s,{prop:"path",label:"操作","show-overflow-tooltip":"",width:"240"},{default:n(l=>[l.row.id!=1?(c(),f(i,{key:0,size:"small",text:"",type:"primary",onClick:w=>z(l.row)},{default:n(()=>[m("修改")]),_:2},1032,["onClick"])):b("",!0),l.row.id!=1?(c(),f(i,{key:1,size:"small",text:"",type:"primary",onClick:w=>k(l.row)},{default:n(()=>[m("删除")]),_:2},1032,["onClick"])):b("",!0),l.row.id!=1?(c(),f(i,{key:2,size:"small",text:"",type:"primary",onClick:w=>C(l.row)},{default:n(()=>[m("重置密码")]),_:2},1032,["onClick"])):b("",!0)]),_:1})]),_:1},8,["data"]),a(I,{onSizeChange:U,onCurrentChange:V,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":e.tableData.param.pageNum,"onUpdate:currentPage":t[4]||(t[4]=l=>e.tableData.param.pageNum=l),background:"","page-size":e.tableData.param.pageSize,"onUpdate:pageSize":t[5]||(t[5]=l=>e.tableData.param.pageSize=l),layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.total},null,8,["current-page","page-size","total"])]),_:1}),a(P,{ref_key:"addUserRef",ref:_,onReloadTable:p},null,512)])}}});const Ae=j(J,[["__scopeId","data-v-9db5dad7"]]);export{Ae as default};
