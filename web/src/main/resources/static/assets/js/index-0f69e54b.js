import{O as z}from"./index-fc4ed8a2.js";import C from"./detail-fde2f10f.js";import{H as f,e as k,_ as N,i as U,ah as o,o as b,c as B,V as a,P as n,a as O,T as _,O as R,S as T}from"./@vue-6dabbe94.js";import"./index-b9e84531.js";import"./pinia-b6f74250.js";import"./vue-router-c1461dfc.js";import"./vue-i18n-b3581196.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-b1ba6f14.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-64e6e14a.js";import"./nprogress-08a53ce8.js";import"./axios-4a70c6fc.js";import"./qs-c5b6dbf2.js";import"./side-channel-394f276c.js";import"./get-intrinsic-bd2830fd.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-e5c1c8b0.js";import"./object-inspect-8fd4bade.js";import"./element-plus-91d6d961.js";import"./lodash-es-9851428c.js";import"./@vueuse-e129c873.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-880a26aa.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-ec2a62c3.js";import"./_plugin-vue_export-helper-c27b6911.js";const A={class:""},H={class:"mb15"},I=f({name:"orderManager"}),Va=f({...I,setup(M){const h=z(),d=k(),e=N({fit:"fill",queryParams:{},showSearch:!0,tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10,orderSn:"",title:"",payStatus:1,tradeStatus:1,status:1}}}),m=()=>{h.getOrderList(e.tableData.param).then(r=>{e.tableData.data=r.data.records,e.tableData.total=r.data.total})};U(()=>{m()});const g=r=>{d.value.openDialog(r.id)},w=r=>{e.tableData.param.pageSize=r,m()},D=r=>{e.tableData.param.pageNum=r,m()};return(r,l)=>{const u=o("el-input"),p=o("el-option"),s=o("el-select"),v=o("ele-Search"),S=o("el-icon"),c=o("el-button"),i=o("el-table-column"),V=o("el-table"),y=o("el-pagination"),x=o("el-card");return b(),B("div",A,[a(x,{shadow:"hover"},{default:n(()=>[O("div",H,[a(u,{size:"default",modelValue:e.tableData.param.orderSn,"onUpdate:modelValue":l[0]||(l[0]=t=>e.tableData.param.orderSn=t),placeholder:"订单编号",style:{"max-width":"180px"},class:"ml10"},null,8,["modelValue"]),a(u,{size:"default",modelValue:e.tableData.param.title,"onUpdate:modelValue":l[1]||(l[1]=t=>e.tableData.param.title=t),placeholder:"商品名称",style:{"max-width":"180px"},class:"ml10"},null,8,["modelValue"]),a(s,{size:"default",style:{"max-width":"180px"},modelValue:e.tableData.param.payStatus,"onUpdate:modelValue":l[2]||(l[2]=t=>e.tableData.param.payStatus=t),placeholder:"支付状态",clearable:"",class:"ml10"},{default:n(()=>[a(p,{label:"已支付",value:1}),a(p,{label:"未支付",value:0})]),_:1},8,["modelValue"]),a(s,{size:"default",style:{"max-width":"180px"},modelValue:e.tableData.param.tradeStatus,"onUpdate:modelValue":l[3]||(l[3]=t=>e.tableData.param.tradeStatus=t),placeholder:"交易状态",clearable:"",class:"ml10"},{default:n(()=>[a(p,{label:"交易中",value:1}),a(p,{label:"交易完成(可退款)",value:2}),a(p,{label:"取消交易",value:3}),a(p,{label:"交易完成",value:8}),a(p,{label:"订单关闭",value:9})]),_:1},8,["modelValue"]),a(s,{size:"default",style:{"max-width":"180px"},modelValue:e.tableData.param.status,"onUpdate:modelValue":l[4]||(l[4]=t=>e.tableData.param.status=t),placeholder:"订单状态",clearable:"",class:"ml10"},{default:n(()=>[a(p,{label:"正常",value:1}),a(p,{label:"删除",value:0})]),_:1},8,["modelValue"]),a(c,{size:"default",type:"primary",class:"ml10",onClick:m},{default:n(()=>[a(S,null,{default:n(()=>[a(v)]),_:1}),_("查询")]),_:1})]),a(V,{data:e.tableData.data,stripe:"",style:{width:"100%"}},{default:n(()=>[a(i,{prop:"id",label:"ID","show-overflow-tooltip":""}),a(i,{prop:"orderSn",label:"订单编号","show-overflow-tooltip":""}),a(i,{prop:"title",label:"商品","show-overflow-tooltip":""}),a(i,{prop:"totalAmount",label:"金额","show-overflow-tooltip":""}),a(i,{prop:"userName",label:"买家","show-overflow-tooltip":""}),a(i,{prop:"payStatusStr",label:"支付状态","show-overflow-tooltip":""}),a(i,{prop:"created",label:"创建时间","show-overflow-tooltip":""}),a(i,{prop:"path",label:"操作",width:"90"},{default:n(t=>[a(c,{size:"small",text:"",type:"primary",onClick:P=>g(t.row)},{default:n(()=>[_("详情")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e.tableData.data.length>0?(b(),R(y,{key:0,style:{"text-align":"right"},background:"",onSizeChange:w,onCurrentChange:D,"page-sizes":[10,20,30],"current-page":e.tableData.param.pageNum,"page-size":e.tableData.param.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.total},null,8,["current-page","page-size","total"])):T("",!0)]),_:1}),a(C,{ref_key:"detailRef",ref:d,onReloadTable:m},null,512)])}}});export{Va as default};
