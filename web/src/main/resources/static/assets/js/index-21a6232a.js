import{s,L as h}from"./index-b9e84531.js";import{E as H,a as u}from"./element-plus-91d6d961.js";import{H as C,e as M,_ as A,i as L,ah as n,o as j,c as O,V as o,P as r,a as b,T as f}from"./@vue-6dabbe94.js";import"./pinia-b6f74250.js";import"./vue-router-c1461dfc.js";import"./vue-i18n-b3581196.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-b1ba6f14.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-64e6e14a.js";import"./nprogress-08a53ce8.js";import"./axios-4a70c6fc.js";import"./qs-c5b6dbf2.js";import"./side-channel-394f276c.js";import"./get-intrinsic-bd2830fd.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-e5c1c8b0.js";import"./object-inspect-8fd4bade.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-ec2a62c3.js";import"./lodash-es-9851428c.js";import"./@vueuse-e129c873.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-880a26aa.js";function $(){return{getPluginList(a){return s({url:"/admin/plugin/list",method:"get",params:a})},installPlugin(){return s({url:"/admin/plugin/install",method:"post"})},unInstallPlugin(a){return s({url:"/admin/plugin/unInstall/"+a,method:"post"})},startPlugin(a){return s({url:"/admin/plugin/start/"+a,method:"post"})},stopPlugin(a){return s({url:"/admin/plugin/stop/"+a,method:"post"})},getPluginConfigUrl(a){return s({url:"/admin/plugin/config/url/"+a,method:"get"})}}}const F={class:"mb15"},q=["src"],G=C({name:"pluginManager"}),ke=C({...G,setup(a){const _=M(null),c=$(),t=A({dialogVisible:!1,pluginConfigUrl:"",limit:1,uploadUrl:"fastcms/api/admin/plugin/install",headers:{Authorization:h.get("token")},tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),m=()=>{c.getPluginList(t.tableData.param).then(e=>{t.tableData.data=e.data.records,t.tableData.total=e.data.total}).catch(()=>{})},w=e=>{H.confirm("此操作将卸载插件, 是否继续?","提示",{confirmButtonText:"卸载",cancelButtonText:"取消",type:"warning"}).then(()=>{c.unInstallPlugin(e.pluginId).then(()=>{u.success("卸载成功"),m()}).catch(l=>{u.error(l.message)})}).catch(()=>{})};let d=null;const v=e=>{d=e,t.dialogVisible=!0},z=()=>{d&&c.getPluginConfigUrl(d.pluginId).then(e=>{t.pluginConfigUrl=e.data+"?accessToken="+h.get("token"),console.log("=====url:"+t.pluginConfigUrl);const l=_.value;l&&l.tagName.toUpperCase()}).catch(e=>{u.error("插件不支持配置"+e)})},D=()=>{t.dialogVisible=!1},P=e=>{t.tableData.param.pageSize=e,m()},x=e=>{t.tableData.param.pageNum=e,m()},U=e=>{e.code==200?(u.success("安装成功"),m()):u.error(e.message)},k=e=>{u.error("安装失败,"+e)},y=()=>{};return L(()=>{m()}),(e,l)=>{const I=n("ele-Plus"),S=n("el-icon"),g=n("el-button"),N=n("el-upload"),i=n("el-table-column"),V=n("el-table"),E=n("el-pagination"),R=n("el-card"),B=n("el-dialog");return j(),O("div",null,[o(R,{shadow:"hover"},{default:r(()=>[b("div",F,[o(N,{action:t.uploadUrl,name:"file",headers:t.headers,"show-file-list":!1,"on-success":U,"on-error":k,"on-exceed":y,accept:".jar,.zip"},{default:r(()=>[o(g,{class:"mt15",type:"primary",size:"default"},{default:r(()=>[o(S,null,{default:r(()=>[o(I)]),_:1}),f("安装插件")]),_:1})]),_:1},8,["action","headers"])]),o(V,{data:t.tableData.data,stripe:"",style:{width:"100%"}},{default:r(()=>[o(i,{prop:"pluginId",label:"ID","show-overflow-tooltip":""}),o(i,{prop:"pluginClass",label:"插件名称","show-overflow-tooltip":""}),o(i,{prop:"provider",label:"作者","show-overflow-tooltip":""}),o(i,{prop:"pluginState",label:"状态","show-overflow-tooltip":""}),o(i,{prop:"description",label:"描述","show-overflow-tooltip":""}),o(i,{prop:"path",label:"操作",width:"180"},{default:r(p=>[o(g,{size:"small",text:"",type:"primary",onClick:T=>v(p.row)},{default:r(()=>[f("配置")]),_:2},1032,["onClick"]),o(g,{size:"small",text:"",type:"primary",onClick:T=>w(p.row)},{default:r(()=>[f("卸载")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),o(E,{onSizeChange:P,onCurrentChange:x,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":t.tableData.param.pageNum,"onUpdate:currentPage":l[0]||(l[0]=p=>t.tableData.param.pageNum=p),background:"","page-size":t.tableData.param.pageSize,"onUpdate:pageSize":l[1]||(l[1]=p=>t.tableData.param.pageSize=p),layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},null,8,["current-page","page-size","total"])]),_:1}),o(B,{title:"插件配置",fullscreen:"","model-value":t.dialogVisible,"before-close":D,onOpened:z},{default:r(()=>[b("iframe",{src:t.pluginConfigUrl,frameborder:"0",style:{width:"100%",height:"600px"},ref_key:"iframeRef",ref:_},null,8,q)]),_:1},8,["model-value"])])}}});export{ke as default};
