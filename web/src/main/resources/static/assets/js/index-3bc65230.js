import{s as t}from"./index-09e5375d.js";function a(){return{getTemplateList(){return t({url:"/admin/template/list",method:"get"})},installTemplate(){return t({url:"/admin/template/install",method:"post"})},unInstallTemplate(e){return t({url:"/admin/template/unInstall/"+e,method:"post"})},enableTemplate(e){return t({url:"/admin/template/enable/"+e,method:"post"})},getTemplateFileTree(){return t({url:"/admin/template/files/tree/list",method:"get"})},getTemplateFile(e){return t({url:"/admin/template/files/get?filePath="+e,method:"get"})},saveTemplateFile(e){return t({url:"/admin/template/file/save",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:e})},delTemplateFile(e){return t({url:"/admin/template/file/delete?filePath="+e,method:"post"})},getTemplateMenuList(){return t({url:"/admin/template/menu/list",method:"get"})},getTemplateMenu(e){return t({url:"/admin/template/menu/get/"+e,method:"get"})},delTemplateMenu(e){return t({url:"/admin/template/menu/delete/"+e,method:"post"})},saveTemplateMenu(e){return t({url:"/admin/template/menu/save",method:"post",params:e})}}}export{a as T};
