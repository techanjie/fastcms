var C=Object.defineProperty;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var d=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,u=(a,e)=>{for(var t in e||(e={}))w.call(e,t)&&d(a,t,e[t]);if(p)for(var t of p(e))D.call(e,t)&&d(a,t,e[t]);return a};import{g as v}from"./client.6a3b9392.js";import z from"./detail.189408bb.js";import{_ as S}from"./index.537f06e5.js";import{r as x,j as k,o as B,t as R,l as r,m as j,z as o,A as s,D as y,x as I}from"./vendor.3e632ab1.js";import"./qrcode.0260598d.js";const T={name:"orderManager",components:{Detail:z},setup(){const a=x(),e=k({fit:"fill",queryParams:{},showSearch:!0,tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),t=()=>{v(e.tableData.param).then(n=>{e.tableData.data=n.data.records,e.tableData.total=n.data.total})};return B(()=>{t()}),u({detailRef:a,initTableData:t,onRowInfo:n=>{a.value.openDialog(n.id)},onTableItemClick:n=>{a.value.openDialog(n.id)},onHandleSizeChange:n=>{e.tableData.param.pageSize=n,t()},onHandleCurrentChange:n=>{e.tableData.param.pageNum=n,t()}},R(e))}},F={class:"list-adapt-container"},H=I("\u8BE6\u60C5");function N(a,e,t,i,c,_){const l=r("el-table-column"),n=r("el-button"),m=r("el-table"),b=r("el-pagination"),g=r("el-card"),f=r("Detail");return y(),j("div",F,[o(g,{shadow:"hover"},{default:s(()=>[o(m,{data:a.tableData.data,stripe:"",style:{width:"100%"}},{default:s(()=>[o(l,{prop:"id",label:"ID","show-overflow-tooltip":""}),o(l,{prop:"orderSn",label:"\u8BA2\u5355\u7F16\u53F7","show-overflow-tooltip":""}),o(l,{prop:"title",label:"\u5546\u54C1","show-overflow-tooltip":""}),o(l,{prop:"totalAmount",label:"\u91D1\u989D","show-overflow-tooltip":""}),o(l,{prop:"nickName",label:"\u4E70\u5BB6","show-overflow-tooltip":""}),o(l,{prop:"statusStr",label:"\u72B6\u6001","show-overflow-tooltip":""}),o(l,{prop:"created",label:"\u521B\u5EFA\u65F6\u95F4","show-overflow-tooltip":""}),o(l,{prop:"path",label:"\u64CD\u4F5C",width:"90"},{default:s(h=>[o(n,{size:"mini",type:"text",onClick:A=>i.onRowInfo(h.row)},{default:s(()=>[H]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),o(b,{style:{"text-align":"right"},background:"",onSizeChange:i.onHandleSizeChange,onCurrentChange:i.onHandleCurrentChange,"page-sizes":[10,20,30],"current-page":a.tableData.param.pageNum,"page-size":a.tableData.param.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:a.tableData.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),_:1}),o(f,{ref:"detailRef",onReloadTable:i.initTableData},null,8,["onReloadTable"])])}var P=S(T,[["render",N],["__scopeId","data-v-571aab03"]]);export{P as default};
