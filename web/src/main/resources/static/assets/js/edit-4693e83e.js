import{L as z}from"./index-b9e84531.js";import{T as A}from"./index-2d2e4341.js";import{T as H}from"./vue-codemirror-037263c5.js";import{F as U,G as S}from"./@codemirror-441d1754.js";import{a,E as O}from"./element-plus-91d6d961.js";import{H as h,e as G,_ as Q,i as R,ah as l,ar as $,o as p,c as f,V as t,P as r,T as m,a as d,Q as j,u as q,L as I,O as J,S as K}from"./@vue-6dabbe94.js";import"./pinia-b6f74250.js";import"./vue-router-c1461dfc.js";import"./vue-i18n-b3581196.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-b1ba6f14.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-64e6e14a.js";import"./nprogress-08a53ce8.js";import"./axios-4a70c6fc.js";import"./qs-c5b6dbf2.js";import"./side-channel-394f276c.js";import"./get-intrinsic-bd2830fd.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-e5c1c8b0.js";import"./object-inspect-8fd4bade.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-ec2a62c3.js";import"./lodash-es-9851428c.js";import"./@vueuse-e129c873.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-880a26aa.js";import"./codemirror-d1ad9523.js";import"./@lezer-4c574b3a.js";import"./crelt-7bb88e1d.js";import"./style-mod-ae491175.js";import"./w3c-keyname-aa008802.js";const W={class:"container"},X=["innerHTML"],Y={class:"tree-container"},Z={class:"mb15",style:{"padding-top":"3px"}},ee=h({name:"templateEdit"}),$e=h({...ee,setup(te){const g=G(),T=[U(),S],i=A(),e=Q({treeLoading:!1,treeTableData:[],treeDefaultProps:{children:"children",label:"label",filePath:"filePath"},currEditFile:"",content:"",aceOptions:{enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!1},limit:3,uploadUrl:"fastcms/api/admin/template/files/upload",headers:{Authorization:z.get("token")},uploadParam:{dirName:""}}),s=()=>{i.getTemplateFileTree().then(o=>{e.treeTableData=o.data})},v=()=>{if(e.content==null||e.content==""){a.warning("文件内容不能为空");return}if(e.currEditFile==""){a.warning("请选择需要编辑的文件");return}i.saveTemplateFile({filePath:e.currEditFile,fileContent:e.content}).then(()=>{a.success("保存成功")})},P=()=>{if(e.currEditFile==""){a.warning("请选择需要删除的文件");return}O.confirm("此操作将永久删除["+e.currEditFile+"]文件, 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{i.delTemplateFile(e.currEditFile).then(()=>{a.success("删除成功"),e.content="",s()}).catch(o=>{a.error(o.message)})}).catch(()=>{})},b=o=>{o.children==null?(e.currEditFile=o.filePath,i.getTemplateFile(o.filePath).then(n=>{e.content=n.data}).catch(n=>{a.error(n.message)})):(e.uploadParam.dirName=o.filePath,e.currEditFile="",e.content="")},F=()=>{a.success("上传成功"),s()},y=()=>{a.error("上传文件数量不能超过 "+e.limit+" 个!")},x=()=>{a.error("上传失败")},E=()=>{if(e.uploadParam.dirName=="")return a.warning("请选择上传目录"),!1},w=o=>{e.content=o};return R(()=>{s()}),(o,n)=>{const k=l("ele-Plus"),B=l("el-icon"),c=l("el-button"),C=l("el-upload"),D=l("el-tree"),u=l("el-card"),_=l("el-col"),N=l("el-row"),L=l("el-form"),V=$("loading");return p(),f("div",W,[t(u,null,{default:r(()=>[t(C,{class:"upload-btn",action:e.uploadUrl,name:"files",data:e.uploadParam,multiple:"",headers:e.headers,"show-file-list":!1,"on-success":F,"on-exceed":y,"on-error":x,"before-upload":E,limit:e.limit},{default:r(()=>[t(c,{size:"default",type:"primary"},{default:r(()=>[t(B,null,{default:r(()=>[t(k)]),_:1}),m("上传模板文件")]),_:1}),d("div",{class:"el-upload__tip",innerHTML:e.uploadParam.dirName},null,8,X)]),_:1},8,["action","data","headers","limit"]),t(L,{style:{"padding-top":"5px"},size:"default","label-width":"100px",ref:"myRefForm"},{default:r(()=>[t(N,{gutter:35},{default:r(()=>[t(_,{sm:5,class:"mb20"},{default:r(()=>[d("div",Y,[t(u,{shadow:"hover",header:"模板文件树"},{default:r(()=>[j((p(),f("div",null,[t(D,{data:e.treeTableData,"default-expand-all":!1,"node-key":"filePath",props:e.treeDefaultProps,onNodeClick:b,style:{height:"550px",overflow:"auto"},ref:"treeTable"},null,8,["data","props"])])),[[V,e.treeLoading]])]),_:1})])]),_:1}),t(_,{sm:19,class:"mb20"},{default:r(()=>[t(q(H),I({ref_key:"codeMirror",ref:g,modelValue:e.content,"onUpdate:modelValue":n[0]||(n[0]=M=>e.content=M),style:{height:"100%",width:"100%"},autofocus:!0,onChange:w},o.$attrs,{extensions:T}),null,16,["modelValue"]),d("div",Z,[t(c,{type:"primary",onClick:v,size:"default"},{default:r(()=>[m("保 存")]),_:1}),e.content!=""?(p(),J(c,{key:0,type:"danger",onClick:P,size:"default"},{default:r(()=>[m("删 除")]),_:1})):K("",!0)])]),_:1})]),_:1})]),_:1},512)]),_:1})])}}});export{$e as default};
