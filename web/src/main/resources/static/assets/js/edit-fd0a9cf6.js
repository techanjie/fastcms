import{L as M}from"./index-09e5375d.js";import{T as z}from"./index-3bc65230.js";import{T as A}from"./vue-codemirror-037263c5.js";import{F as U,G as S}from"./@codemirror-441d1754.js";import{a,E as O}from"./element-plus-91d6d961.js";import{H as h,e as G,_ as Q,i as R,ah as l,ar as $,o as p,c as f,V as o,P as r,T as m,a as d,Q as j,u as q,L as I,O as J,S as K}from"./@vue-6dabbe94.js";import"./pinia-b6f74250.js";import"./vue-router-c1461dfc.js";import"./vue-i18n-b3581196.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-b1ba6f14.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-64e6e14a.js";import"./nprogress-08a53ce8.js";import"./axios-4a70c6fc.js";import"./qs-c5b6dbf2.js";import"./side-channel-394f276c.js";import"./get-intrinsic-bd2830fd.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-e5c1c8b0.js";import"./object-inspect-8fd4bade.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-ec2a62c3.js";import"./lodash-es-9851428c.js";import"./@vueuse-e129c873.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-880a26aa.js";import"./codemirror-d1ad9523.js";import"./@lezer-4c574b3a.js";import"./crelt-7bb88e1d.js";import"./style-mod-ae491175.js";import"./w3c-keyname-aa008802.js";const W={class:"container"},X=["innerHTML"],Y={class:"tree-container"},Z={class:"mb15",style:{"padding-top":"3px"}},ee=h({name:"templateEdit"}),$e=h({...ee,setup(te){const g=G(),T=[U(),S],n=z(),e=Q({clientHight:"600px",treeLoading:!1,treeTableData:[],treeDefaultProps:{children:"children",label:"label",filePath:"filePath"},currEditFile:"",content:"",aceOptions:{enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!1},limit:3,uploadUrl:"fastcms/api/admin/template/files/upload",headers:{Authorization:M.get("token")},uploadParam:{dirName:""}}),s=()=>{n.getTemplateFileTree().then(t=>{e.treeTableData=t.data})},v=()=>{if(e.content==null||e.content==""){a.warning("文件内容不能为空");return}if(e.currEditFile==""){a.warning("请选择需要编辑的文件");return}let t={};t.filePath=e.currEditFile,t.fileContent=e.content,n.saveTemplateFile(t).then(()=>{a.success("保存成功")})},P=()=>{if(e.currEditFile==""){a.warning("请选择需要删除的文件");return}O.confirm("此操作将永久删除["+e.currEditFile+"]文件, 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{n.delTemplateFile(e.currEditFile).then(()=>{a.success("删除成功"),e.content="",s()}).catch(t=>{a.error(t.message)})}).catch(()=>{})},b=t=>{t.children==null?(e.currEditFile=t.filePath,n.getTemplateFile(t.filePath).then(i=>{e.content=i.data}).catch(i=>{a.error(i.message)})):(e.uploadParam.dirName=t.filePath,e.currEditFile="",e.content="")},x=()=>{a.success("上传成功"),s()},y=()=>{a.error("上传文件数量不能超过 "+e.limit+" 个!")},F=()=>{a.error("上传失败")},E=()=>{if(e.uploadParam.dirName=="")return a.warning("请选择上传目录"),!1},w=t=>{e.content=t};return R(()=>{s();let t=document.documentElement.clientHeight;e.clientHight=t+"px"}),(t,i)=>{const k=l("ele-Plus"),H=l("el-icon"),c=l("el-button"),B=l("el-upload"),C=l("el-tree"),u=l("el-card"),_=l("el-col"),D=l("el-row"),N=l("el-form"),L=$("loading");return p(),f("div",W,[o(u,null,{default:r(()=>[o(B,{class:"upload-btn",action:e.uploadUrl,name:"files",data:e.uploadParam,multiple:"",headers:e.headers,"show-file-list":!1,"on-success":x,"on-exceed":y,"on-error":F,"before-upload":E,limit:e.limit},{default:r(()=>[o(c,{size:"default",type:"primary"},{default:r(()=>[o(H,null,{default:r(()=>[o(k)]),_:1}),m("上传模板文件")]),_:1}),d("div",{class:"el-upload__tip",innerHTML:e.uploadParam.dirName},null,8,X)]),_:1},8,["action","data","headers","limit"]),o(N,{style:{"padding-top":"5px"},size:"default","label-width":"100px",ref:"myRefForm"},{default:r(()=>[o(D,{gutter:35},{default:r(()=>[o(_,{sm:5,class:"mb20"},{default:r(()=>[d("div",Y,[o(u,{shadow:"hover",header:"模板文件树"},{default:r(()=>[j((p(),f("div",null,[o(C,{data:e.treeTableData,"default-expand-all":!1,"node-key":"filePath",props:e.treeDefaultProps,onNodeClick:b,style:{height:"550px",overflow:"auto"},ref:"treeTable"},null,8,["data","props"])])),[[L,e.treeLoading]])]),_:1})])]),_:1}),o(_,{sm:19,class:"mb20"},{default:r(()=>[o(q(A),I({ref_key:"codeMirror",ref:g,modelValue:e.content,"onUpdate:modelValue":i[0]||(i[0]=V=>e.content=V),style:{height:e.clientHight,width:"100%"},autofocus:!0,onChange:w},t.$attrs,{extensions:T}),null,16,["modelValue","style"]),d("div",Z,[o(c,{type:"primary",onClick:v,size:"default"},{default:r(()=>[m("保 存")]),_:1}),e.content!=""?(p(),J(c,{key:0,type:"danger",onClick:P,size:"default"},{default:r(()=>[m("删 除")]),_:1})):K("",!0)])]),_:1})]),_:1})]),_:1},512)]),_:1})])}}});export{$e as default};
