import{s as H,w as J,r as L,u as U,g as G,d as q,e as v,f as g,h as z,i as K,n as X,j as B}from"./@vue-6dabbe94.js";var Y=Object.defineProperty,Z=Object.defineProperties,k=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ne=(e,t)=>{for(var n in t||(t={}))ee.call(t,n)&&C(e,n,t[n]);if(j)for(var n of j(t))te.call(t,n)&&C(e,n,t[n]);return e},re=(e,t)=>Z(e,k(t));function Ie(e,t){var n;const r=H();return J(()=>{r.value=e()},re(ne({},t),{flush:(n=t==null?void 0:t.flush)!=null?n:"sync"})),L(r)}var F;const S=typeof window<"u",oe=e=>typeof e<"u",ie=e=>typeof e=="function",se=e=>typeof e=="string",P=()=>{},ue=S&&((F=window==null?void 0:window.navigator)==null?void 0:F.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function b(e){return typeof e=="function"?e():U(e)}function M(e,t){function n(...r){return new Promise((i,u)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(i).catch(u)})}return n}function ae(e,t={}){let n,r,i=P;const u=s=>{clearTimeout(s),i(),i=P};return s=>{const l=b(e),d=b(t.maxWait);return n&&u(n),l<=0||d!==void 0&&d<=0?(r&&(u(r),r=null),Promise.resolve(s())):new Promise((p,m)=>{i=t.rejectOnCancel?m:p,d&&!r&&(r=setTimeout(()=>{n&&u(n),r=null,p(s())},d)),n=setTimeout(()=>{r&&u(r),r=null,p(s())},l)})}}function le(e,t=!0,n=!0,r=!1){let i=0,u,a=!0,s=P,l;const d=()=>{u&&(clearTimeout(u),u=void 0,s(),s=P)};return m=>{const o=b(e),c=Date.now()-i,f=()=>l=m();return d(),o<=0?(i=Date.now(),f()):(c>o&&(n||!a)?(i=Date.now(),f()):t&&(l=new Promise((h,O)=>{s=r?O:h,u=setTimeout(()=>{i=Date.now(),a=!0,h(f()),d()},Math.max(0,o-c))})),!n&&!u&&(u=setTimeout(()=>a=!0,o)),a=!1,l)}}function ce(e){return e}function $(e){return G()?(q(e),!0):!1}function fe(e,t=200,n={}){return M(ae(t,n),e)}function Se(e,t=200,n={}){const r=v(e.value),i=fe(()=>{r.value=e.value},t,n);return g(e,()=>i()),r}function Te(e,t=200,n=!1,r=!0,i=!1){return M(le(t,n,r,i),e)}function x(e,t=!0){z()?K(e):t?e():X(e)}function $e(e,t,n={}){const{immediate:r=!0}=n,i=v(!1);let u=null;function a(){u&&(clearTimeout(u),u=null)}function s(){i.value=!1,a()}function l(...d){a(),i.value=!0,u=setTimeout(()=>{i.value=!1,u=null,e(...d)},b(t))}return r&&(i.value=!0,S&&l()),$(s),{isPending:L(i),start:l,stop:s}}function y(e){var t;const n=b(e);return(t=n==null?void 0:n.$el)!=null?t:n}const E=S?window:void 0,de=S?window.document:void 0;function _(...e){let t,n,r,i;if(se(e[0])||Array.isArray(e[0])?([n,r,i]=e,t=E):[t,n,r,i]=e,!t)return P;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const u=[],a=()=>{u.forEach(p=>p()),u.length=0},s=(p,m,o,c)=>(p.addEventListener(m,o,c),()=>p.removeEventListener(m,o,c)),l=g(()=>[y(t),b(i)],([p,m])=>{a(),p&&u.push(...n.flatMap(o=>r.map(c=>s(p,o,c,m))))},{immediate:!0,flush:"post"}),d=()=>{l(),a()};return $(d),d}let A=!1;function xe(e,t,n={}){const{window:r=E,ignore:i=[],capture:u=!0,detectIframe:a=!1}=n;if(!r)return;ue&&!A&&(A=!0,Array.from(r.document.body.children).forEach(o=>o.addEventListener("click",P)));let s=!0;const l=o=>i.some(c=>{if(typeof c=="string")return Array.from(r.document.querySelectorAll(c)).some(f=>f===o.target||o.composedPath().includes(f));{const f=y(c);return f&&(o.target===f||o.composedPath().includes(f))}}),p=[_(r,"click",o=>{const c=y(e);if(!(!c||c===o.target||o.composedPath().includes(c))){if(o.detail===0&&(s=!l(o)),!s){s=!0;return}t(o)}},{passive:!0,capture:u}),_(r,"pointerdown",o=>{const c=y(e);c&&(s=!o.composedPath().includes(c)&&!l(o))},{passive:!0}),a&&_(r,"blur",o=>{var c;const f=y(e);((c=r.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(f!=null&&f.contains(r.document.activeElement))&&t(o)})].filter(Boolean);return()=>p.forEach(o=>o())}function pe(e,t=!1){const n=v(),r=()=>n.value=!!e();return r(),x(r,t),n}function ve(e){return JSON.parse(JSON.stringify(e))}const D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N="__vueuse_ssr_handlers__";D[N]=D[N]||{};function je(e,t,{window:n=E,initialValue:r=""}={}){const i=v(r),u=B(()=>{var a;return y(t)||((a=n==null?void 0:n.document)==null?void 0:a.documentElement)});return g([u,()=>b(e)],([a,s])=>{var l;if(a&&n){const d=(l=n.getComputedStyle(a).getPropertyValue(s))==null?void 0:l.trim();i.value=d||r}},{immediate:!0}),g(i,a=>{var s;(s=u.value)!=null&&s.style&&u.value.style.setProperty(b(e),a)}),i}function Ce({document:e=de}={}){if(!e)return v("visible");const t=v(e.visibilityState);return _(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var R=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,he=(e,t)=>{var n={};for(var r in e)me.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&R)for(var r of R(e))t.indexOf(r)<0&&Oe.call(e,r)&&(n[r]=e[r]);return n};function _e(e,t,n={}){const r=n,{window:i=E}=r,u=he(r,["window"]);let a;const s=pe(()=>i&&"ResizeObserver"in i),l=()=>{a&&(a.disconnect(),a=void 0)},d=g(()=>y(e),m=>{l(),s.value&&i&&m&&(a=new ResizeObserver(t),a.observe(m,u))},{immediate:!0,flush:"post"}),p=()=>{l(),d()};return $(p),{isSupported:s,stop:p}}function Fe(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:i=!0,immediate:u=!0}=t,a=v(0),s=v(0),l=v(0),d=v(0),p=v(0),m=v(0),o=v(0),c=v(0);function f(){const h=y(e);if(!h){n&&(a.value=0,s.value=0,l.value=0,d.value=0,p.value=0,m.value=0,o.value=0,c.value=0);return}const O=h.getBoundingClientRect();a.value=O.height,s.value=O.bottom,l.value=O.left,d.value=O.right,p.value=O.top,m.value=O.width,o.value=O.x,c.value=O.y}return _e(e,f),g(()=>y(e),h=>!h&&f()),i&&_("scroll",f,{capture:!0,passive:!0}),r&&_("resize",f,{passive:!0}),x(()=>{u&&f()}),{height:a,bottom:s,left:l,right:d,top:p,width:m,x:o,y:c,update:f}}var W;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(W||(W={}));var ye=Object.defineProperty,V=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,Q=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t)=>{for(var n in t||(t={}))ge.call(t,n)&&Q(e,n,t[n]);if(V)for(var n of V(t))be.call(t,n)&&Q(e,n,t[n]);return e};const Pe={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};we({linear:ce},Pe);function Ae(e,t,n,r={}){var i,u,a;const{clone:s=!1,passive:l=!1,eventName:d,deep:p=!1,defaultValue:m}=r,o=z(),c=n||(o==null?void 0:o.emit)||((i=o==null?void 0:o.$emit)==null?void 0:i.bind(o))||((a=(u=o==null?void 0:o.proxy)==null?void 0:u.$emit)==null?void 0:a.bind(o==null?void 0:o.proxy));let f=d;t||(t="modelValue"),f=d||f||`update:${t.toString()}`;const h=w=>s?ie(s)?s(w):ve(w):w,O=()=>oe(e[t])?h(e[t]):m;if(l){const w=O(),T=v(w);return g(()=>e[t],I=>T.value=h(I)),g(T,I=>{(I!==e[t]||p)&&c(f,I)},{deep:p}),T}else return B({get(){return O()},set(w){c(f,w)}})}function De({window:e=E}={}){if(!e)return v(!1);const t=v(e.document.hasFocus());return _(e,"blur",()=>{t.value=!1}),_(e,"focus",()=>{t.value=!0}),t}function Ne(e={}){const{window:t=E,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:i=!0,includeScrollbar:u=!0}=e,a=v(n),s=v(r),l=()=>{t&&(u?(a.value=t.innerWidth,s.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};return l(),x(l),_("resize",l,{passive:!0}),i&&_("orientationchange",l,{passive:!0}),{width:a,height:s}}export{Ne as a,Fe as b,_ as c,_e as d,Te as e,je as f,$e as g,ue as h,S as i,Ce as j,De as k,Ie as l,Ae as m,xe as o,Se as r,$ as t,y as u};
