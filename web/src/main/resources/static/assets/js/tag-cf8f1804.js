import{A as x}from"./index-38b46270.js";import{_ as C}from"./addTag.vue_vue_type_script_setup_true_name_articleAddTag_lang-a1607367.js";import{E as D,a as d}from"./element-plus-91d6d961.js";import{H as u,e as A,_ as B,j as N,i as E,ah as r,o as R,c as V,V as t,P as e,T as s,a as z,U as M}from"./@vue-6dabbe94.js";import"./index-b9e84531.js";import"./pinia-b6f74250.js";import"./vue-router-c1461dfc.js";import"./vue-i18n-b3581196.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-b1ba6f14.js";import"./js-cookie-edb2da2a.js";import"./@element-plus-64e6e14a.js";import"./nprogress-08a53ce8.js";import"./axios-4a70c6fc.js";import"./qs-c5b6dbf2.js";import"./side-channel-394f276c.js";import"./get-intrinsic-bd2830fd.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-e5c1c8b0.js";import"./object-inspect-8fd4bade.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-ec2a62c3.js";import"./lodash-es-9851428c.js";import"./@vueuse-e129c873.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-880a26aa.js";import"./index.vue_vue_type_script_setup_true_name_iconSelector_lang-b5d27fc6.js";const P={class:"system-Category-container"},$=["href"],L=u({name:"articleTag"}),yt=u({...L,setup(O){const m=x(),i=A(),c=B({menuData:null}),f=N(()=>c.menuData),h=o=>{i.value.openDialog(o)},w=o=>{i.value.openDialog(o)},g=o=>{D.confirm("此操作将永久删除标签, 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{m.delArticleTag(o.id).then(()=>{d.success("删除成功"),n()}).catch(_=>{d.error(_.message)})}).catch(()=>{})},n=()=>{m.getArticleTagList().then(o=>{c.menuData=o.data}).catch(()=>{})};return E(()=>{n()}),(o,_)=>{const b=r("ele-Plus"),v=r("el-icon"),p=r("el-button"),a=r("el-table-column"),T=r("el-table"),y=r("el-card");return R(),V("div",P,[t(y,{shadow:"hover"},{default:e(()=>[t(p,{onClick:h,size:"default",type:"primary"},{default:e(()=>[t(v,null,{default:e(()=>[t(b)]),_:1}),s("新建标签")]),_:1}),t(T,{data:f.value,stripe:"",style:{width:"100%"},"row-key":"id"},{default:e(()=>[t(a,{prop:"tagName",label:"名称","show-overflow-tooltip":""},{default:e(l=>[z("a",{href:l.row.url,target:"_blank"},M(l.row.tagName),9,$)]),_:1}),t(a,{prop:"id",label:"id","show-overflow-tooltip":""}),t(a,{prop:"suffix",label:"模板","show-overflow-tooltip":""}),t(a,{prop:"sortNum",label:"排序","show-overflow-tooltip":""}),t(a,{prop:"created",label:"创建时间","show-overflow-tooltip":""}),t(a,{label:"操作","show-overflow-tooltip":"",width:"125"},{default:e(l=>[t(p,{size:"small",text:"",type:"primary",onClick:k=>w(l.row)},{default:e(()=>[s("修改")]),_:2},1032,["onClick"]),t(p,{size:"small",text:"",type:"primary",onClick:k=>g(l.row)},{default:e(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),t(C,{ref_key:"addTagRef",ref:i,onReloadTable:n},null,512)])}}});export{yt as default};
