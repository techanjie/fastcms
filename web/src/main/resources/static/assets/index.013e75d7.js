import{s as t}from"./index.5eb239a7.js";function s(e){return t({url:"/admin/user/list",method:"get",params:e})}function n(e){return t({url:"/admin/user/save",method:"post",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function a(e){return t({url:"/admin/user/delete/"+e,method:"post"})}function o(e){return t({url:"/admin/user/"+e+"/get",method:"get"})}export{o as a,a as d,s as g,n as s};
