import{s as t}from"./index.55a8aeee.js";function s(e){return t({url:"/admin/user/list",method:"get",params:e})}function a(e){return t({url:"/admin/user/save",method:"post",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function n(e){return t({url:"/admin/user/delete/"+e,method:"post"})}function o(e){return t({url:"/admin/user/"+e+"/get",method:"get"})}function u(){return t({url:"/admin/user/tag/list",method:"get"})}function d(e){return t({url:"/admin/user/password/update",method:"post",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}export{u as a,o as b,n as d,s as g,a as s,d as u};
