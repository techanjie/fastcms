import{s as At}from"./source-map-7d7e1c08.js";var Ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function pr(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function a(){if(this instanceof a){var c=[null];c.push.apply(c,arguments);var o=Function.bind.apply(t,c);return new o}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(a){var c=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(r,a,c.get?c:{enumerable:!0,get:function(){return e[a]}})}),r}var ve={exports:{}},M={};/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(M,"__esModule",{value:!0});const Ct=typeof window<"u";let St,Ot;const It=/\{([0-9a-zA-Z]+)\}/g;function yt(e,...t){return t.length===1&&me(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(It,(r,a)=>t.hasOwnProperty(a)?t[a]:"")}const kt=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Dt=e=>kt?Symbol(e):e,Pt=(e,t,r)=>we({l:e,k:t,s:r}),we=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Mt=e=>typeof e=="number"&&isFinite(e),Ft=e=>se(e)==="[object Date]",Rt=e=>se(e)==="[object RegExp]",vt=e=>_e(e)&&Object.keys(e).length===0;function wt(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const Ut=Object.assign;let Se;const jt=()=>Se||(Se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof Ce<"u"?Ce:{});function xt(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Wt=Object.prototype.hasOwnProperty;function Kt(e,t){return Wt.call(e,t)}const Ue=Array.isArray,fe=e=>typeof e=="function",$t=e=>typeof e=="string",Bt=e=>typeof e=="boolean",Vt=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Gt=e=>me(e)&&fe(e.then)&&fe(e.catch),Ee=Object.prototype.toString,se=e=>Ee.call(e),_e=e=>se(e)==="[object Object]",Xt=e=>e==null?"":Ue(e)||_e(e)&&e.toString===Ee?JSON.stringify(e,null,2):String(e),Oe=2;function Ht(e,t=0,r=e.length){const a=e.split(/\r?\n/);let c=0;const o=[];for(let f=0;f<a.length;f++)if(c+=a[f].length+1,c>=t){for(let p=f-Oe;p<=f+Oe||r>c;p++){if(p<0||p>=a.length)continue;const d=p+1;o.push(`${d}${" ".repeat(3-String(d).length)}|  ${a[p]}`);const _=a[p].length;if(p===f){const C=t-(c-_)+1,A=Math.max(1,r>c?_-C:r-t);o.push("   |  "+" ".repeat(C)+"^".repeat(A))}else if(p>f){if(r>c){const C=Math.max(Math.min(r-c,_),1);o.push("   |  "+"^".repeat(C))}c+=_+1}}break}return o.join(`
`)}function Yt(){const e=new Map;return{events:e,on(r,a){const c=e.get(r);c&&c.push(a)||e.set(r,[a])},off(r,a){const c=e.get(r);c&&c.splice(c.indexOf(a)>>>0,1)},emit(r,a){(e.get(r)||[]).slice().map(c=>c(a)),(e.get("*")||[]).slice().map(c=>c(r,a))}}}M.assign=Ut;M.createEmitter=Yt;M.escapeHtml=xt;M.format=yt;M.friendlyJSONstringify=we;M.generateCodeFrame=Ht;M.generateFormatCacheKey=Pt;M.getGlobalThis=jt;M.hasOwn=Kt;M.inBrowser=Ct;M.isArray=Ue;M.isBoolean=Bt;M.isDate=Ft;M.isEmptyObject=vt;M.isFunction=fe;M.isNumber=Mt;M.isObject=me;M.isPlainObject=_e;M.isPromise=Gt;M.isRegExp=Rt;M.isString=$t;M.isSymbol=Vt;M.makeSymbol=Dt;M.mark=St;M.measure=Ot;M.objectToString=Ee;M.toDisplayString=Xt;M.toTypeString=se;M.warn=wt;ve.exports=M;var je=ve.exports,xe={exports:{}},O={},We={exports:{}},U={};/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(U,"__esModule",{value:!0});var ne=je,Jt=At;const I={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15},Qt={[I.EXPECTED_TOKEN]:"Expected token: '{0}'",[I.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[I.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[I.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[I.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[I.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[I.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[I.EMPTY_PLACEHOLDER]:"Empty placeholder",[I.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[I.INVALID_LINKED_FORMAT]:"Invalid linked format",[I.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[I.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[I.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[I.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'"};function pe(e,t,r={}){const{domain:a,messages:c,args:o}=r,f=e,p=new SyntaxError(String(f));return p.code=e,t&&(p.location=t),p.domain=a,p}function qt(e){throw e}const Ke={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function $e(e,t,r){return{line:e,column:t,offset:r}}function re(e,t,r){const a={start:e,end:t};return r!=null&&(a.source=r),a}const $=" ",Zt="\r",v=`
`,zt=String.fromCharCode(8232),en=String.fromCharCode(8233);function tn(e){const t=e;let r=0,a=1,c=1,o=0;const f=S=>t[S]===Zt&&t[S+1]===v,p=S=>t[S]===v,d=S=>t[S]===en,_=S=>t[S]===zt,C=S=>f(S)||p(S)||d(S)||_(S),A=()=>r,h=()=>a,k=()=>c,D=()=>o,P=S=>f(S)||d(S)||_(S)?v:t[S],b=()=>P(r),i=()=>P(r+o);function E(){return o=0,C(r)&&(a++,c=0),f(r)&&r++,r++,c++,t[r]}function g(){return f(r+o)&&o++,o++,t[r+o]}function m(){r=0,a=1,c=1,o=0}function L(S=0){o=S}function T(){const S=r+o;for(;S!==r;)E();o=0}return{index:A,line:h,column:k,peekOffset:D,charAt:P,currentChar:b,currentPeek:i,next:E,peek:g,reset:m,resetPeek:L,skipToPeek:T}}const V=void 0,Ie="'",nn="tokenizer";function rn(e,t={}){const r=t.location!==!1,a=tn(e),c=()=>a.index(),o=()=>$e(a.line(),a.column(),a.index()),f=o(),p=c(),d={currentType:14,offset:p,startLoc:f,endLoc:f,lastType:14,lastOffset:p,lastStartLoc:f,lastEndLoc:f,braceNest:0,inLinked:!1,text:""},_=()=>d,{onError:C}=t;function A(n,s,u,...N){const y=_();if(s.column+=u,s.offset+=u,C){const F=re(y.startLoc,s),B=pe(n,F,{domain:nn,args:N});C(B)}}function h(n,s,u){n.endLoc=o(),n.currentType=s;const N={type:s};return r&&(N.loc=re(n.startLoc,n.endLoc)),u!=null&&(N.value=u),N}const k=n=>h(n,14);function D(n,s){return n.currentChar()===s?(n.next(),s):(A(I.EXPECTED_TOKEN,o(),0,s),"")}function P(n){let s="";for(;n.currentPeek()===$||n.currentPeek()===v;)s+=n.currentPeek(),n.peek();return s}function b(n){const s=P(n);return n.skipToPeek(),s}function i(n){if(n===V)return!1;const s=n.charCodeAt(0);return s>=97&&s<=122||s>=65&&s<=90||s===95}function E(n){if(n===V)return!1;const s=n.charCodeAt(0);return s>=48&&s<=57}function g(n,s){const{currentType:u}=s;if(u!==2)return!1;P(n);const N=i(n.currentPeek());return n.resetPeek(),N}function m(n,s){const{currentType:u}=s;if(u!==2)return!1;P(n);const N=n.currentPeek()==="-"?n.peek():n.currentPeek(),y=E(N);return n.resetPeek(),y}function L(n,s){const{currentType:u}=s;if(u!==2)return!1;P(n);const N=n.currentPeek()===Ie;return n.resetPeek(),N}function T(n,s){const{currentType:u}=s;if(u!==8)return!1;P(n);const N=n.currentPeek()===".";return n.resetPeek(),N}function S(n,s){const{currentType:u}=s;if(u!==9)return!1;P(n);const N=i(n.currentPeek());return n.resetPeek(),N}function w(n,s){const{currentType:u}=s;if(!(u===8||u===12))return!1;P(n);const N=n.currentPeek()===":";return n.resetPeek(),N}function R(n,s){const{currentType:u}=s;if(u!==10)return!1;const N=()=>{const F=n.currentPeek();return F==="{"?i(n.peek()):F==="@"||F==="%"||F==="|"||F===":"||F==="."||F===$||!F?!1:F===v?(n.peek(),N()):i(F)},y=N();return n.resetPeek(),y}function j(n){P(n);const s=n.currentPeek()==="|";return n.resetPeek(),s}function x(n){const s=P(n),u=n.currentPeek()==="%"&&n.peek()==="{";return n.resetPeek(),{isModulo:u,hasSpace:s.length>0}}function ee(n,s=!0){const u=(y=!1,F="",B=!1)=>{const H=n.currentPeek();return H==="{"?F==="%"?!1:y:H==="@"||!H?F==="%"?!0:y:H==="%"?(n.peek(),u(y,"%",!0)):H==="|"?F==="%"||B?!0:!(F===$||F===v):H===$?(n.peek(),u(!0,$,B)):H===v?(n.peek(),u(!0,v,B)):!0},N=u();return s&&n.resetPeek(),N}function z(n,s){const u=n.currentChar();return u===V?V:s(u)?(n.next(),u):null}function Te(n){return z(n,u=>{const N=u.charCodeAt(0);return N>=97&&N<=122||N>=65&&N<=90||N>=48&&N<=57||N===95||N===36})}function dt(n){return z(n,u=>{const N=u.charCodeAt(0);return N>=48&&N<=57})}function mt(n){return z(n,u=>{const N=u.charCodeAt(0);return N>=48&&N<=57||N>=65&&N<=70||N>=97&&N<=102})}function he(n){let s="",u="";for(;s=dt(n);)u+=s;return u}function Et(n){b(n);const s=n.currentChar();return s!=="%"&&A(I.EXPECTED_TOKEN,o(),0,s),n.next(),"%"}function be(n){let s="";for(;;){const u=n.currentChar();if(u==="{"||u==="}"||u==="@"||u==="|"||!u)break;if(u==="%")if(ee(n))s+=u,n.next();else break;else if(u===$||u===v)if(ee(n))s+=u,n.next();else{if(j(n))break;s+=u,n.next()}else s+=u,n.next()}return s}function _t(n){b(n);let s="",u="";for(;s=Te(n);)u+=s;return n.currentChar()===V&&A(I.UNTERMINATED_CLOSING_BRACE,o(),0),u}function pt(n){b(n);let s="";return n.currentChar()==="-"?(n.next(),s+=`-${he(n)}`):s+=he(n),n.currentChar()===V&&A(I.UNTERMINATED_CLOSING_BRACE,o(),0),s}function gt(n){b(n),D(n,"'");let s="",u="";const N=F=>F!==Ie&&F!==v;for(;s=z(n,N);)s==="\\"?u+=Nt(n):u+=s;const y=n.currentChar();return y===v||y===V?(A(I.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,o(),0),y===v&&(n.next(),D(n,"'")),u):(D(n,"'"),u)}function Nt(n){const s=n.currentChar();switch(s){case"\\":case"'":return n.next(),`\\${s}`;case"u":return Ae(n,s,4);case"U":return Ae(n,s,6);default:return A(I.UNKNOWN_ESCAPE_SEQUENCE,o(),0,s),""}}function Ae(n,s,u){D(n,s);let N="";for(let y=0;y<u;y++){const F=mt(n);if(!F){A(I.INVALID_UNICODE_ESCAPE_SEQUENCE,o(),0,`\\${s}${N}${n.currentChar()}`);break}N+=F}return`\\${s}${N}`}function Lt(n){b(n);let s="",u="";const N=y=>y!=="{"&&y!=="}"&&y!==$&&y!==v;for(;s=z(n,N);)u+=s;return u}function Tt(n){let s="",u="";for(;s=Te(n);)u+=s;return u}function ht(n){const s=(u=!1,N)=>{const y=n.currentChar();return y==="{"||y==="%"||y==="@"||y==="|"||!y||y===$?N:y===v?(N+=y,n.next(),s(u,N)):(N+=y,n.next(),s(!0,N))};return s(!1,"")}function oe(n){b(n);const s=D(n,"|");return b(n),s}function le(n,s){let u=null;switch(n.currentChar()){case"{":return s.braceNest>=1&&A(I.NOT_ALLOW_NEST_PLACEHOLDER,o(),0),n.next(),u=h(s,2,"{"),b(n),s.braceNest++,u;case"}":return s.braceNest>0&&s.currentType===2&&A(I.EMPTY_PLACEHOLDER,o(),0),n.next(),u=h(s,3,"}"),s.braceNest--,s.braceNest>0&&b(n),s.inLinked&&s.braceNest===0&&(s.inLinked=!1),u;case"@":return s.braceNest>0&&A(I.UNTERMINATED_CLOSING_BRACE,o(),0),u=te(n,s)||k(s),s.braceNest=0,u;default:let y=!0,F=!0,B=!0;if(j(n))return s.braceNest>0&&A(I.UNTERMINATED_CLOSING_BRACE,o(),0),u=h(s,1,oe(n)),s.braceNest=0,s.inLinked=!1,u;if(s.braceNest>0&&(s.currentType===5||s.currentType===6||s.currentType===7))return A(I.UNTERMINATED_CLOSING_BRACE,o(),0),s.braceNest=0,ce(n,s);if(y=g(n,s))return u=h(s,5,_t(n)),b(n),u;if(F=m(n,s))return u=h(s,6,pt(n)),b(n),u;if(B=L(n,s))return u=h(s,7,gt(n)),b(n),u;if(!y&&!F&&!B)return u=h(s,13,Lt(n)),A(I.INVALID_TOKEN_IN_PLACEHOLDER,o(),0,u.value),b(n),u;break}return u}function te(n,s){const{currentType:u}=s;let N=null;const y=n.currentChar();switch((u===8||u===9||u===12||u===10)&&(y===v||y===$)&&A(I.INVALID_LINKED_FORMAT,o(),0),y){case"@":return n.next(),N=h(s,8,"@"),s.inLinked=!0,N;case".":return b(n),n.next(),h(s,9,".");case":":return b(n),n.next(),h(s,10,":");default:return j(n)?(N=h(s,1,oe(n)),s.braceNest=0,s.inLinked=!1,N):T(n,s)||w(n,s)?(b(n),te(n,s)):S(n,s)?(b(n),h(s,12,Tt(n))):R(n,s)?(b(n),y==="{"?le(n,s)||N:h(s,11,ht(n))):(u===8&&A(I.INVALID_LINKED_FORMAT,o(),0),s.braceNest=0,s.inLinked=!1,ce(n,s))}}function ce(n,s){let u={type:14};if(s.braceNest>0)return le(n,s)||k(s);if(s.inLinked)return te(n,s)||k(s);switch(n.currentChar()){case"{":return le(n,s)||k(s);case"}":return A(I.UNBALANCED_CLOSING_BRACE,o(),0),n.next(),h(s,3,"}");case"@":return te(n,s)||k(s);default:if(j(n))return u=h(s,1,oe(n)),s.braceNest=0,s.inLinked=!1,u;const{isModulo:y,hasSpace:F}=x(n);if(y)return F?h(s,0,be(n)):h(s,4,Et(n));if(ee(n))return h(s,0,be(n));break}return u}function bt(){const{currentType:n,offset:s,startLoc:u,endLoc:N}=d;return d.lastType=n,d.lastOffset=s,d.lastStartLoc=u,d.lastEndLoc=N,d.offset=c(),d.startLoc=o(),a.currentChar()===V?h(d,14):ce(a,d)}return{nextToken:bt,currentOffset:c,currentPosition:o,context:_}}const Be="parser",sn=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function an(e,t,r){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const a=parseInt(t||r,16);return a<=55295||a>=57344?String.fromCodePoint(a):"�"}}}function Ve(e={}){const t=e.location!==!1,{onError:r}=e;function a(i,E,g,m,...L){const T=i.currentPosition();if(T.offset+=m,T.column+=m,r){const S=re(g,T),w=pe(E,S,{domain:Be,args:L});r(w)}}function c(i,E,g){const m={type:i,start:E,end:E};return t&&(m.loc={start:g,end:g}),m}function o(i,E,g,m){i.end=E,m&&(i.type=m),t&&i.loc&&(i.loc.end=g)}function f(i,E){const g=i.context(),m=c(3,g.offset,g.startLoc);return m.value=E,o(m,i.currentOffset(),i.currentPosition()),m}function p(i,E){const g=i.context(),{lastOffset:m,lastStartLoc:L}=g,T=c(5,m,L);return T.index=parseInt(E,10),i.nextToken(),o(T,i.currentOffset(),i.currentPosition()),T}function d(i,E){const g=i.context(),{lastOffset:m,lastStartLoc:L}=g,T=c(4,m,L);return T.key=E,i.nextToken(),o(T,i.currentOffset(),i.currentPosition()),T}function _(i,E){const g=i.context(),{lastOffset:m,lastStartLoc:L}=g,T=c(9,m,L);return T.value=E.replace(sn,an),i.nextToken(),o(T,i.currentOffset(),i.currentPosition()),T}function C(i){const E=i.nextToken(),g=i.context(),{lastOffset:m,lastStartLoc:L}=g,T=c(8,m,L);return E.type!==12?(a(i,I.UNEXPECTED_EMPTY_LINKED_MODIFIER,g.lastStartLoc,0),T.value="",o(T,m,L),{nextConsumeToken:E,node:T}):(E.value==null&&a(i,I.UNEXPECTED_LEXICAL_ANALYSIS,g.lastStartLoc,0,W(E)),T.value=E.value||"",o(T,i.currentOffset(),i.currentPosition()),{node:T})}function A(i,E){const g=i.context(),m=c(7,g.offset,g.startLoc);return m.value=E,o(m,i.currentOffset(),i.currentPosition()),m}function h(i){const E=i.context(),g=c(6,E.offset,E.startLoc);let m=i.nextToken();if(m.type===9){const L=C(i);g.modifier=L.node,m=L.nextConsumeToken||i.nextToken()}switch(m.type!==10&&a(i,I.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,W(m)),m=i.nextToken(),m.type===2&&(m=i.nextToken()),m.type){case 11:m.value==null&&a(i,I.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,W(m)),g.key=A(i,m.value||"");break;case 5:m.value==null&&a(i,I.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,W(m)),g.key=d(i,m.value||"");break;case 6:m.value==null&&a(i,I.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,W(m)),g.key=p(i,m.value||"");break;case 7:m.value==null&&a(i,I.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,W(m)),g.key=_(i,m.value||"");break;default:a(i,I.UNEXPECTED_EMPTY_LINKED_KEY,E.lastStartLoc,0);const L=i.context(),T=c(7,L.offset,L.startLoc);return T.value="",o(T,L.offset,L.startLoc),g.key=T,o(g,L.offset,L.startLoc),{nextConsumeToken:m,node:g}}return o(g,i.currentOffset(),i.currentPosition()),{node:g}}function k(i){const E=i.context(),g=E.currentType===1?i.currentOffset():E.offset,m=E.currentType===1?E.endLoc:E.startLoc,L=c(2,g,m);L.items=[];let T=null;do{const R=T||i.nextToken();switch(T=null,R.type){case 0:R.value==null&&a(i,I.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,W(R)),L.items.push(f(i,R.value||""));break;case 6:R.value==null&&a(i,I.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,W(R)),L.items.push(p(i,R.value||""));break;case 5:R.value==null&&a(i,I.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,W(R)),L.items.push(d(i,R.value||""));break;case 7:R.value==null&&a(i,I.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,W(R)),L.items.push(_(i,R.value||""));break;case 8:const j=h(i);L.items.push(j.node),T=j.nextConsumeToken||null;break}}while(E.currentType!==14&&E.currentType!==1);const S=E.currentType===1?E.lastOffset:i.currentOffset(),w=E.currentType===1?E.lastEndLoc:i.currentPosition();return o(L,S,w),L}function D(i,E,g,m){const L=i.context();let T=m.items.length===0;const S=c(1,E,g);S.cases=[],S.cases.push(m);do{const w=k(i);T||(T=w.items.length===0),S.cases.push(w)}while(L.currentType!==14);return T&&a(i,I.MUST_HAVE_MESSAGES_IN_PLURAL,g,0),o(S,i.currentOffset(),i.currentPosition()),S}function P(i){const E=i.context(),{offset:g,startLoc:m}=E,L=k(i);return E.currentType===14?L:D(i,g,m,L)}function b(i){const E=rn(i,ne.assign({},e)),g=E.context(),m=c(0,g.offset,g.startLoc);return t&&m.loc&&(m.loc.source=i),m.body=P(E),g.currentType!==14&&a(E,I.UNEXPECTED_LEXICAL_ANALYSIS,g.lastStartLoc,0,i[g.offset]||""),o(m,E.currentOffset(),E.currentPosition()),m}return{parse:b}}function W(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function on(e,t={}){const r={ast:e,helpers:new Set};return{context:()=>r,helper:o=>(r.helpers.add(o),o)}}function ye(e,t){for(let r=0;r<e.length;r++)ge(e[r],t)}function ge(e,t){switch(e.type){case 1:ye(e.cases,t),t.helper("plural");break;case 2:ye(e.items,t);break;case 6:ge(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function ln(e,t={}){const r=on(e);r.helper("normalize"),e.body&&ge(e.body,r);const a=r.context();e.helpers=Array.from(a.helpers)}function cn(e,t){const{sourceMap:r,filename:a,breakLineCode:c,needIndent:o}=t,f={source:e.loc.source,filename:a,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:c,needIndent:o,indentLevel:0},p=()=>f;function d(b,i){f.code+=b,f.map&&(i&&i.loc&&i.loc!==Ke&&P(i.loc.start,_n(i)),pn(f,b))}function _(b,i=!0){const E=i?c:"";d(o?E+"  ".repeat(b):E)}function C(b=!0){const i=++f.indentLevel;b&&_(i)}function A(b=!0){const i=--f.indentLevel;b&&_(i)}function h(){_(f.indentLevel)}const k=b=>`_${b}`,D=()=>f.needIndent;function P(b,i){f.map.addMapping({name:i,source:f.filename,original:{line:b.line,column:b.column-1},generated:{line:f.line,column:f.column-1}})}return r&&(f.map=new Jt.SourceMapGenerator,f.map.setSourceContent(a,f.source)),{context:p,push:d,indent:C,deindent:A,newline:h,helper:k,needIndent:D}}function un(e,t){const{helper:r}=e;e.push(`${r("linked")}(`),Q(e,t.key),t.modifier?(e.push(", "),Q(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function fn(e,t){const{helper:r,needIndent:a}=e;e.push(`${r("normalize")}([`),e.indent(a());const c=t.items.length;for(let o=0;o<c&&(Q(e,t.items[o]),o!==c-1);o++)e.push(", ");e.deindent(a()),e.push("])")}function dn(e,t){const{helper:r,needIndent:a}=e;if(t.cases.length>1){e.push(`${r("plural")}([`),e.indent(a());const c=t.cases.length;for(let o=0;o<c&&(Q(e,t.cases[o]),o!==c-1);o++)e.push(", ");e.deindent(a()),e.push("])")}}function mn(e,t){t.body?Q(e,t.body):e.push("null")}function Q(e,t){const{helper:r}=e;switch(t.type){case 0:mn(e,t);break;case 1:dn(e,t);break;case 2:fn(e,t);break;case 6:un(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${r("interpolate")}(${r("list")}(${t.index}))`,t);break;case 4:e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const En=(e,t={})=>{const r=ne.isString(t.mode)?t.mode:"normal",a=ne.isString(t.filename)?t.filename:"message.intl",c=!!t.sourceMap,o=t.breakLineCode!=null?t.breakLineCode:r==="arrow"?";":`
`,f=t.needIndent?t.needIndent:r!=="arrow",p=e.helpers||[],d=cn(e,{mode:r,filename:a,sourceMap:c,breakLineCode:o,needIndent:f});d.push(r==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),d.indent(f),p.length>0&&(d.push(`const { ${p.map(A=>`${A}: _${A}`).join(", ")} } = ctx`),d.newline()),d.push("return "),Q(d,e),d.deindent(f),d.push("}");const{code:_,map:C}=d.context();return{ast:e,code:_,map:C?C.toJSON():void 0}};function _n(e){switch(e.type){case 3:case 9:case 8:case 7:return e.value;case 5:return e.index.toString();case 4:return e.key;default:return}}function pn(e,t,r=t.length){let a=0,c=-1;for(let o=0;o<r;o++)t.charCodeAt(o)===10&&(a++,c=o);return e.offset+=r,e.line+=a,e.column=c===-1?e.column+r:r-c,e}function gn(e,t={}){const r=ne.assign({},t),c=Ve(r).parse(e);return ln(c,r),En(c,r)}U.CompileErrorCodes=I;U.ERROR_DOMAIN=Be;U.LocationStub=Ke;U.baseCompile=gn;U.createCompileError=pe;U.createLocation=re;U.createParser=Ve;U.createPosition=$e;U.defaultOnError=qt;U.errorMessages=Qt;We.exports=U;var Nn=We.exports,Ge={exports:{}},Ne={};/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(Ne,"__esModule",{value:!0});const Ln={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};Ne.IntlifyDevToolsHooks=Ln;Ge.exports=Ne;var Tn=Ge.exports;/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(O,"__esModule",{value:!0});var q=Nn,l=je,Xe=Tn;const X=[];X[0]={w:[0],i:[3,0],["["]:[4],o:[7]};X[1]={w:[1],["."]:[2],["["]:[4],o:[7]};X[2]={w:[2],i:[3,0],[0]:[3,0]};X[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};X[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};X[5]={["'"]:[4,0],o:8,l:[5,0]};X[6]={['"']:[4,0],o:8,l:[6,0]};const hn=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function bn(e){return hn.test(e)}function An(e){const t=e.charCodeAt(0),r=e.charCodeAt(e.length-1);return t===r&&(t===34||t===39)?e.slice(1,-1):e}function Cn(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Sn(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:bn(t)?An(t):"*"+t}function He(e){const t=[];let r=-1,a=0,c=0,o,f,p,d,_,C,A;const h=[];h[0]=()=>{f===void 0?f=p:f+=p},h[1]=()=>{f!==void 0&&(t.push(f),f=void 0)},h[2]=()=>{h[0](),c++},h[3]=()=>{if(c>0)c--,a=4,h[0]();else{if(c=0,f===void 0||(f=Sn(f),f===!1))return!1;h[1]()}};function k(){const D=e[r+1];if(a===5&&D==="'"||a===6&&D==='"')return r++,p="\\"+D,h[0](),!0}for(;a!==null;)if(r++,o=e[r],!(o==="\\"&&k())){if(d=Cn(o),A=X[a],_=A[d]||A.l||8,_===8||(a=_[0],_[1]!==void 0&&(C=h[_[1]],C&&(p=o,C()===!1))))return;if(a===7)return t}}const ke=new Map;function Ye(e,t){return l.isObject(e)?e[t]:null}function On(e,t){if(!l.isObject(e))return null;let r=ke.get(t);if(r||(r=He(t),r&&ke.set(t,r)),!r)return null;const a=r.length;let c=e,o=0;for(;o<a;){const f=c[r[o]];if(f===void 0)return null;c=f,o++}return c}const In=e=>e,yn=e=>"",Je="text",kn=e=>e.length===0?"":e.join(""),Dn=l.toDisplayString;function De(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Pn(e){const t=l.isNumber(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(l.isNumber(e.named.count)||l.isNumber(e.named.n))?l.isNumber(e.named.count)?e.named.count:l.isNumber(e.named.n)?e.named.n:t:t}function Mn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Qe(e={}){const t=e.locale,r=Pn(e),a=l.isObject(e.pluralRules)&&l.isString(t)&&l.isFunction(e.pluralRules[t])?e.pluralRules[t]:De,c=l.isObject(e.pluralRules)&&l.isString(t)&&l.isFunction(e.pluralRules[t])?De:void 0,o=i=>i[a(r,i.length,c)],f=e.list||[],p=i=>f[i],d=e.named||{};l.isNumber(e.pluralIndex)&&Mn(r,d);const _=i=>d[i];function C(i){const E=l.isFunction(e.messages)?e.messages(i):l.isObject(e.messages)?e.messages[i]:!1;return E||(e.parent?e.parent.message(i):yn)}const A=i=>e.modifiers?e.modifiers[i]:In,h=l.isPlainObject(e.processor)&&l.isFunction(e.processor.normalize)?e.processor.normalize:kn,k=l.isPlainObject(e.processor)&&l.isFunction(e.processor.interpolate)?e.processor.interpolate:Dn,D=l.isPlainObject(e.processor)&&l.isString(e.processor.type)?e.processor.type:Je,b={list:p,named:_,plural:o,linked:(i,...E)=>{const[g,m]=E;let L="text",T="";E.length===1?l.isObject(g)?(T=g.modifier||T,L=g.type||L):l.isString(g)&&(T=g||T):E.length===2&&(l.isString(g)&&(T=g||T),l.isString(m)&&(L=m||L));let S=C(i)(b);return L==="vnode"&&l.isArray(S)&&T&&(S=S[0]),T?A(T)(S,L):S},message:C,type:D,interpolate:k,normalize:h};return b}let Z=null;function Fn(e){Z=e}function Rn(){return Z}function vn(e,t,r){Z&&Z.emit(Xe.IntlifyDevToolsHooks.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:r})}const wn=Un(Xe.IntlifyDevToolsHooks.FunctionTranslate);function Un(e){return t=>Z&&Z.emit(e,t)}const Y={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7},jn={[Y.NOT_FOUND_KEY]:"Not found '{key}' key in '{locale}' locale messages.",[Y.FALLBACK_TO_TRANSLATE]:"Fall back to translate '{key}' key with '{target}' locale.",[Y.CANNOT_FORMAT_NUMBER]:"Cannot format a number value due to not supported Intl.NumberFormat.",[Y.FALLBACK_TO_NUMBER_FORMAT]:"Fall back to number format '{key}' key with '{target}' locale.",[Y.CANNOT_FORMAT_DATE]:"Cannot format a date value due to not supported Intl.DateTimeFormat.",[Y.FALLBACK_TO_DATE_FORMAT]:"Fall back to datetime format '{key}' key with '{target}' locale."};function xn(e,...t){return l.format(jn[e],...t)}function qe(e,t,r){return[...new Set([r,...l.isArray(t)?t:l.isObject(t)?Object.keys(t):l.isString(t)?[t]:[r]])]}function Wn(e,t,r){const a=l.isString(r)?r:Le,c=e;c.__localeChainCache||(c.__localeChainCache=new Map);let o=c.__localeChainCache.get(a);if(!o){o=[];let f=[r];for(;l.isArray(f);)f=Pe(o,f,t);const p=l.isArray(t)||!l.isPlainObject(t)?t:t.default?t.default:null;f=l.isString(p)?[p]:p,l.isArray(f)&&Pe(o,f,!1),c.__localeChainCache.set(a,o)}return o}function Pe(e,t,r){let a=!0;for(let c=0;c<t.length&&l.isBoolean(a);c++){const o=t[c];l.isString(o)&&(a=Kn(e,t[c],r))}return a}function Kn(e,t,r){let a;const c=t.split("-");do{const o=c.join("-");a=$n(e,o,r),c.splice(-1,1)}while(c.length&&a===!0);return a}function $n(e,t,r){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const c=t.replace(/!/g,"");e.push(c),(l.isArray(r)||l.isPlainObject(r))&&r[c]&&(a=r[c])}return a}const Ze="9.2.2",ae=-1,Le="en-US",Bn="",Me=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Vn(){return{upper:(e,t)=>t==="text"&&l.isString(e)?e.toUpperCase():t==="vnode"&&l.isObject(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&l.isString(e)?e.toLowerCase():t==="vnode"&&l.isObject(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&l.isString(e)?Me(e):t==="vnode"&&l.isObject(e)&&"__v_isVNode"in e?Me(e.children):e}}let ze;function Gn(e){ze=e}let et;function Xn(e){et=e}let tt;function Hn(e){tt=e}let nt=null;const Yn=e=>{nt=e},Jn=()=>nt;let rt=null;const Qn=e=>{rt=e},qn=()=>rt;let Fe=0;function Zn(e={}){const t=l.isString(e.version)?e.version:Ze,r=l.isString(e.locale)?e.locale:Le,a=l.isArray(e.fallbackLocale)||l.isPlainObject(e.fallbackLocale)||l.isString(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:r,c=l.isPlainObject(e.messages)?e.messages:{[r]:{}},o=l.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[r]:{}},f=l.isPlainObject(e.numberFormats)?e.numberFormats:{[r]:{}},p=l.assign({},e.modifiers||{},Vn()),d=e.pluralRules||{},_=l.isFunction(e.missing)?e.missing:null,C=l.isBoolean(e.missingWarn)||l.isRegExp(e.missingWarn)?e.missingWarn:!0,A=l.isBoolean(e.fallbackWarn)||l.isRegExp(e.fallbackWarn)?e.fallbackWarn:!0,h=!!e.fallbackFormat,k=!!e.unresolving,D=l.isFunction(e.postTranslation)?e.postTranslation:null,P=l.isPlainObject(e.processor)?e.processor:null,b=l.isBoolean(e.warnHtmlMessage)?e.warnHtmlMessage:!0,i=!!e.escapeParameter,E=l.isFunction(e.messageCompiler)?e.messageCompiler:ze,g=l.isFunction(e.messageResolver)?e.messageResolver:et||Ye,m=l.isFunction(e.localeFallbacker)?e.localeFallbacker:tt||qe,L=l.isObject(e.fallbackContext)?e.fallbackContext:void 0,T=l.isFunction(e.onWarn)?e.onWarn:l.warn,S=e,w=l.isObject(S.__datetimeFormatters)?S.__datetimeFormatters:new Map,R=l.isObject(S.__numberFormatters)?S.__numberFormatters:new Map,j=l.isObject(S.__meta)?S.__meta:{};Fe++;const x={version:t,cid:Fe,locale:r,fallbackLocale:a,messages:c,modifiers:p,pluralRules:d,missing:_,missingWarn:C,fallbackWarn:A,fallbackFormat:h,unresolving:k,postTranslation:D,processor:P,warnHtmlMessage:b,escapeParameter:i,messageCompiler:E,messageResolver:g,localeFallbacker:m,fallbackContext:L,onWarn:T,__meta:j};return x.datetimeFormats=o,x.numberFormats=f,x.__datetimeFormatters=w,x.__numberFormatters=R,x}function zn(e,t){return e instanceof RegExp?e.test(t):e}function er(e,t){return e instanceof RegExp?e.test(t):e}function ie(e,t,r,a,c){const{missing:o,onWarn:f}=e;if(o!==null){const p=o(e,r,t,c);return l.isString(p)?p:t}else return t}function tr(e,t,r){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,r,t)}const nr=e=>e;let de=Object.create(null);function rr(){de=Object.create(null)}function sr(e,t={}){{const a=(t.onCacheKey||nr)(e),c=de[a];if(c)return c;let o=!1;const f=t.onError||q.defaultOnError;t.onError=_=>{o=!0,f(_)};const{code:p}=q.baseCompile(e,t),d=new Function(`return ${p}`)();return o?d:de[a]=d}}let st=q.CompileErrorCodes.__EXTEND_POINT__;const ue=()=>++st,K={INVALID_ARGUMENT:st,INVALID_DATE_ARGUMENT:ue(),INVALID_ISO_DATE_ARGUMENT:ue(),__EXTEND_POINT__:ue()};function J(e){return q.createCompileError(e,null,void 0)}K.INVALID_ARGUMENT+"",K.INVALID_DATE_ARGUMENT+"",K.INVALID_ISO_DATE_ARGUMENT+"";const Re=()=>"",G=e=>l.isFunction(e);function ar(e,...t){const{fallbackFormat:r,postTranslation:a,unresolving:c,messageCompiler:o,fallbackLocale:f,messages:p}=e,[d,_]=ot(...t),C=l.isBoolean(_.missingWarn)?_.missingWarn:e.missingWarn,A=l.isBoolean(_.fallbackWarn)?_.fallbackWarn:e.fallbackWarn,h=l.isBoolean(_.escapeParameter)?_.escapeParameter:e.escapeParameter,k=!!_.resolvedMessage,D=l.isString(_.default)||l.isBoolean(_.default)?l.isBoolean(_.default)?o?d:()=>d:_.default:r?o?d:()=>d:"",P=r||D!=="",b=l.isString(_.locale)?_.locale:e.locale;h&&ir(_);let[i,E,g]=k?[d,b,p[b]||{}]:at(e,d,b,f,A,C),m=i,L=d;if(!k&&!(l.isString(m)||G(m))&&P&&(m=D,L=m),!k&&(!(l.isString(m)||G(m))||!l.isString(E)))return c?ae:d;let T=!1;const S=()=>{T=!0},w=G(m)?m:it(e,d,E,m,L,S);if(T)return m;const R=cr(e,E,g,_),j=Qe(R),x=or(e,w,j);return a?a(x,d):x}function ir(e){l.isArray(e.list)?e.list=e.list.map(t=>l.isString(t)?l.escapeHtml(t):t):l.isObject(e.named)&&Object.keys(e.named).forEach(t=>{l.isString(e.named[t])&&(e.named[t]=l.escapeHtml(e.named[t]))})}function at(e,t,r,a,c,o){const{messages:f,onWarn:p,messageResolver:d,localeFallbacker:_}=e,C=_(e,a,r);let A={},h,k=null;const D="translate";for(let P=0;P<C.length&&(h=C[P],A=f[h]||{},(k=d(A,t))===null&&(k=A[t]),!(l.isString(k)||l.isFunction(k)));P++){const b=ie(e,t,h,o,D);b!==t&&(k=b)}return[k,h,A]}function it(e,t,r,a,c,o){const{messageCompiler:f,warnHtmlMessage:p}=e;if(G(a)){const _=a;return _.locale=_.locale||r,_.key=_.key||t,_}if(f==null){const _=()=>a;return _.locale=r,_.key=t,_}const d=f(a,lr(e,r,c,a,p,o));return d.locale=r,d.key=t,d.source=a,d}function or(e,t,r){return t(r)}function ot(...e){const[t,r,a]=e,c={};if(!l.isString(t)&&!l.isNumber(t)&&!G(t))throw J(K.INVALID_ARGUMENT);const o=l.isNumber(t)?String(t):(G(t),t);return l.isNumber(r)?c.plural=r:l.isString(r)?c.default=r:l.isPlainObject(r)&&!l.isEmptyObject(r)?c.named=r:l.isArray(r)&&(c.list=r),l.isNumber(a)?c.plural=a:l.isString(a)?c.default=a:l.isPlainObject(a)&&l.assign(c,a),[o,c]}function lr(e,t,r,a,c,o){return{warnHtmlMessage:c,onError:f=>{throw o&&o(f),f},onCacheKey:f=>l.generateFormatCacheKey(t,r,f)}}function cr(e,t,r,a){const{modifiers:c,pluralRules:o,messageResolver:f,fallbackLocale:p,fallbackWarn:d,missingWarn:_,fallbackContext:C}=e,h={locale:t,modifiers:c,pluralRules:o,messages:k=>{let D=f(r,k);if(D==null&&C){const[,,P]=at(C,k,t,p,d,_);D=f(P,k)}if(l.isString(D)){let P=!1;const i=it(e,k,t,D,k,()=>{P=!0});return P?Re:i}else return G(D)?D:Re}};return e.processor&&(h.processor=e.processor),a.list&&(h.list=a.list),a.named&&(h.named=a.named),l.isNumber(a.plural)&&(h.pluralIndex=a.plural),h}function ur(e,...t){const{datetimeFormats:r,unresolving:a,fallbackLocale:c,onWarn:o,localeFallbacker:f}=e,{__datetimeFormatters:p}=e,[d,_,C,A]=ct(...t),h=l.isBoolean(C.missingWarn)?C.missingWarn:e.missingWarn;l.isBoolean(C.fallbackWarn)?C.fallbackWarn:e.fallbackWarn;const k=!!C.part,D=l.isString(C.locale)?C.locale:e.locale,P=f(e,c,D);if(!l.isString(d)||d==="")return new Intl.DateTimeFormat(D,A).format(_);let b={},i,E=null;const g="datetime format";for(let T=0;T<P.length&&(i=P[T],b=r[i]||{},E=b[d],!l.isPlainObject(E));T++)ie(e,d,i,h,g);if(!l.isPlainObject(E)||!l.isString(i))return a?ae:d;let m=`${i}__${d}`;l.isEmptyObject(A)||(m=`${m}__${JSON.stringify(A)}`);let L=p.get(m);return L||(L=new Intl.DateTimeFormat(i,l.assign({},E,A)),p.set(m,L)),k?L.formatToParts(_):L.format(_)}const lt=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ct(...e){const[t,r,a,c]=e,o={};let f={},p;if(l.isString(t)){const d=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!d)throw J(K.INVALID_ISO_DATE_ARGUMENT);const _=d[3]?d[3].trim().startsWith("T")?`${d[1].trim()}${d[3].trim()}`:`${d[1].trim()}T${d[3].trim()}`:d[1].trim();p=new Date(_);try{p.toISOString()}catch{throw J(K.INVALID_ISO_DATE_ARGUMENT)}}else if(l.isDate(t)){if(isNaN(t.getTime()))throw J(K.INVALID_DATE_ARGUMENT);p=t}else if(l.isNumber(t))p=t;else throw J(K.INVALID_ARGUMENT);return l.isString(r)?o.key=r:l.isPlainObject(r)&&Object.keys(r).forEach(d=>{lt.includes(d)?f[d]=r[d]:o[d]=r[d]}),l.isString(a)?o.locale=a:l.isPlainObject(a)&&(f=a),l.isPlainObject(c)&&(f=c),[o.key||"",p,o,f]}function fr(e,t,r){const a=e;for(const c in r){const o=`${t}__${c}`;a.__datetimeFormatters.has(o)&&a.__datetimeFormatters.delete(o)}}function dr(e,...t){const{numberFormats:r,unresolving:a,fallbackLocale:c,onWarn:o,localeFallbacker:f}=e,{__numberFormatters:p}=e,[d,_,C,A]=ft(...t),h=l.isBoolean(C.missingWarn)?C.missingWarn:e.missingWarn;l.isBoolean(C.fallbackWarn)?C.fallbackWarn:e.fallbackWarn;const k=!!C.part,D=l.isString(C.locale)?C.locale:e.locale,P=f(e,c,D);if(!l.isString(d)||d==="")return new Intl.NumberFormat(D,A).format(_);let b={},i,E=null;const g="number format";for(let T=0;T<P.length&&(i=P[T],b=r[i]||{},E=b[d],!l.isPlainObject(E));T++)ie(e,d,i,h,g);if(!l.isPlainObject(E)||!l.isString(i))return a?ae:d;let m=`${i}__${d}`;l.isEmptyObject(A)||(m=`${m}__${JSON.stringify(A)}`);let L=p.get(m);return L||(L=new Intl.NumberFormat(i,l.assign({},E,A)),p.set(m,L)),k?L.formatToParts(_):L.format(_)}const ut=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function ft(...e){const[t,r,a,c]=e,o={};let f={};if(!l.isNumber(t))throw J(K.INVALID_ARGUMENT);const p=t;return l.isString(r)?o.key=r:l.isPlainObject(r)&&Object.keys(r).forEach(d=>{ut.includes(d)?f[d]=r[d]:o[d]=r[d]}),l.isString(a)?o.locale=a:l.isPlainObject(a)&&(f=a),l.isPlainObject(c)&&(f=c),[o.key||"",p,o,f]}function mr(e,t,r){const a=e;for(const c in r){const o=`${t}__${c}`;a.__numberFormatters.has(o)&&a.__numberFormatters.delete(o)}}O.CompileErrorCodes=q.CompileErrorCodes;O.createCompileError=q.createCompileError;O.CoreErrorCodes=K;O.CoreWarnCodes=Y;O.DATETIME_FORMAT_OPTIONS_KEYS=lt;O.DEFAULT_LOCALE=Le;O.DEFAULT_MESSAGE_DATA_TYPE=Je;O.MISSING_RESOLVE_VALUE=Bn;O.NOT_REOSLVED=ae;O.NUMBER_FORMAT_OPTIONS_KEYS=ut;O.VERSION=Ze;O.clearCompileCache=rr;O.clearDateTimeFormat=fr;O.clearNumberFormat=mr;O.compileToFunction=sr;O.createCoreContext=Zn;O.createCoreError=J;O.createMessageContext=Qe;O.datetime=ur;O.fallbackWithLocaleChain=Wn;O.fallbackWithSimple=qe;O.getAdditionalMeta=Jn;O.getDevToolsHook=Rn;O.getFallbackContext=qn;O.getWarnMessage=xn;O.handleMissing=ie;O.initI18nDevTools=vn;O.isMessageFunction=G;O.isTranslateFallbackWarn=zn;O.isTranslateMissingWarn=er;O.number=dr;O.parse=He;O.parseDateTimeArgs=ct;O.parseNumberArgs=ft;O.parseTranslateArgs=ot;O.registerLocaleFallbacker=Hn;O.registerMessageCompiler=Gn;O.registerMessageResolver=Xn;O.resolveValue=On;O.resolveWithKeyValue=Ye;O.setAdditionalMeta=Yn;O.setDevToolsHook=Fn;O.setFallbackContext=Qn;O.translate=ar;O.translateDevTools=wn;O.updateFallbackLocale=tr;xe.exports=O;var gr=xe.exports;export{pr as a,gr as b,Ce as c,_r as g,je as s};
