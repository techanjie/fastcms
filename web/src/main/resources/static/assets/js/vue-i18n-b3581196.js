import{s as ra,b as sa}from"./@intlify-ea47d1db.js";import{r as ia}from"./vue-b1ba6f14.js";var M={};/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(M,"__esModule",{value:!0});var n=ra,g=sa,E=ia;const He="9.2.2";let Be=g.CoreWarnCodes.__EXTEND_POINT__;const $=()=>++Be,F={FALLBACK_TO_ROOT:Be,NOT_SUPPORTED_PRESERVE:$(),NOT_SUPPORTED_FORMATTER:$(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:$(),NOT_SUPPORTED_GET_CHOICE_INDEX:$(),COMPONENT_NAME_LEGACY_COMPATIBLE:$(),NOT_FOUND_PARENT_SCOPE:$()},ca={[F.FALLBACK_TO_ROOT]:"Fall back to {type} '{key}' with root locale.",[F.NOT_SUPPORTED_PRESERVE]:"Not supported 'preserve'.",[F.NOT_SUPPORTED_FORMATTER]:"Not supported 'formatter'.",[F.NOT_SUPPORTED_PRESERVE_DIRECTIVE]:"Not supported 'preserveDirectiveContent'.",[F.NOT_SUPPORTED_GET_CHOICE_INDEX]:"Not supported 'getChoiceIndex'.",[F.COMPONENT_NAME_LEGACY_COMPATIBLE]:"Component name legacy compatible: '{name}' -> 'i18n'",[F.NOT_FOUND_PARENT_SCOPE]:"Not found parent scope. use the global scope."};function S(e,...s){return n.format(ca[e],...s)}let $e=g.CompileErrorCodes.__EXTEND_POINT__;const p=()=>++$e,v={UNEXPECTED_RETURN_TYPE:$e,INVALID_ARGUMENT:p(),MUST_BE_CALL_SETUP_TOP:p(),NOT_INSLALLED:p(),NOT_AVAILABLE_IN_LEGACY_MODE:p(),REQUIRED_VALUE:p(),INVALID_VALUE:p(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:p(),NOT_INSLALLED_WITH_PROVIDE:p(),UNEXPECTED_ERROR:p(),NOT_COMPATIBLE_LEGACY_VUE_I18N:p(),BRIDGE_SUPPORT_VUE_2_ONLY:p(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:p(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:p(),__EXTEND_POINT__:p()};function R(e,...s){return g.createCompileError(e,null,{messages:ua,args:s})}const ua={[v.UNEXPECTED_RETURN_TYPE]:"Unexpected return type in composer",[v.INVALID_ARGUMENT]:"Invalid argument",[v.MUST_BE_CALL_SETUP_TOP]:"Must be called at the top of a `setup` function",[v.NOT_INSLALLED]:"Need to install with `app.use` function",[v.UNEXPECTED_ERROR]:"Unexpected error",[v.NOT_AVAILABLE_IN_LEGACY_MODE]:"Not available in legacy mode",[v.REQUIRED_VALUE]:"Required in value: {0}",[v.INVALID_VALUE]:"Invalid value",[v.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]:"Cannot setup vue-devtools plugin",[v.NOT_INSLALLED_WITH_PROVIDE]:"Need to install with `provide` function",[v.NOT_COMPATIBLE_LEGACY_VUE_I18N]:"Not compatible legacy VueI18n.",[v.BRIDGE_SUPPORT_VUE_2_ONLY]:"vue-i18n-bridge support Vue 2.x only",[v.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]:"Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",[v.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]:"Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"},Le=n.makeSymbol("__transrateVNode"),Ie=n.makeSymbol("__datetimeParts"),Ne=n.makeSymbol("__numberParts"),Re=n.makeSymbol("__enableEmitter"),Fe=n.makeSymbol("__disableEmitter"),xe=n.makeSymbol("__setPluralRules");n.makeSymbol("__intlifyMeta");const Ge=n.makeSymbol("__injectWithOption"),oa="__VUE_I18N_BRIDGE__";function Pe(e){if(!n.isObject(e))return e;for(const s in e)if(n.hasOwn(e,s))if(!s.includes("."))n.isObject(e[s])&&Pe(e[s]);else{const t=s.split("."),r=t.length-1;let l=e;for(let a=0;a<r;a++)t[a]in l||(l[t[a]]={}),l=l[t[a]];l[t[r]]=e[s],delete e[s],n.isObject(l[t[r]])&&Pe(l[t[r]])}return e}function Q(e,s){const{messages:t,__i18n:r,messageResolver:l,flatJson:a}=s,c=n.isPlainObject(t)?t:n.isArray(r)?{}:{[e]:{}};if(n.isArray(r)&&r.forEach(m=>{if("locale"in m&&"resource"in m){const{locale:_,resource:b}=m;_?(c[_]=c[_]||{},Y(b,c[_])):Y(b,c)}else n.isString(m)&&Y(JSON.parse(m),c)}),l==null&&a)for(const m in c)n.hasOwn(c,m)&&Pe(c[m]);return c}const q=e=>!n.isObject(e)||n.isArray(e);function Y(e,s){if(q(e)||q(s))throw R(v.INVALID_VALUE);for(const t in e)n.hasOwn(e,t)&&(q(e[t])||q(s[t])?s[t]=e[t]:Y(e[t],s[t]))}function Ye(e){return e.type}function Xe(e,s,t){let r=n.isObject(s.messages)?s.messages:{};"__i18nGlobal"in t&&(r=Q(e.locale.value,{messages:r,__i18n:t.__i18nGlobal}));const l=Object.keys(r);l.length&&l.forEach(a=>{e.mergeLocaleMessage(a,r[a])});{if(n.isObject(s.datetimeFormats)){const a=Object.keys(s.datetimeFormats);a.length&&a.forEach(c=>{e.mergeDateTimeFormat(c,s.datetimeFormats[c])})}if(n.isObject(s.numberFormats)){const a=Object.keys(s.numberFormats);a.length&&a.forEach(c=>{e.mergeNumberFormat(c,s.numberFormats[c])})}}}function Ce(e){return E.createVNode(E.Text,null,e,0)}const De="__INTLIFY_META__";let We=0;function Ue(e){return(s,t,r,l)=>e(t,r,E.getCurrentInstance()||void 0,l)}const ma=()=>{const e=E.getCurrentInstance();let s=null;return e&&(s=Ye(e)[De])?{[De]:s}:null};function pe(e={},s){const{__root:t}=e,r=t===void 0;let l=n.isBoolean(e.inheritLocale)?e.inheritLocale:!0;const a=E.ref(t&&l?t.locale.value:n.isString(e.locale)?e.locale:g.DEFAULT_LOCALE),c=E.ref(t&&l?t.fallbackLocale.value:n.isString(e.fallbackLocale)||n.isArray(e.fallbackLocale)||n.isPlainObject(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:a.value),m=E.ref(Q(a.value,e)),_=E.ref(n.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[a.value]:{}}),b=E.ref(n.isPlainObject(e.numberFormats)?e.numberFormats:{[a.value]:{}});let d=t?t.missingWarn:n.isBoolean(e.missingWarn)||n.isRegExp(e.missingWarn)?e.missingWarn:!0,I=t?t.fallbackWarn:n.isBoolean(e.fallbackWarn)||n.isRegExp(e.fallbackWarn)?e.fallbackWarn:!0,O=t?t.fallbackRoot:n.isBoolean(e.fallbackRoot)?e.fallbackRoot:!0,T=!!e.fallbackFormat,y=n.isFunction(e.missing)?e.missing:null,P=n.isFunction(e.missing)?Ue(e.missing):null,A=n.isFunction(e.postTranslation)?e.postTranslation:null,w=t?t.warnHtmlMessage:n.isBoolean(e.warnHtmlMessage)?e.warnHtmlMessage:!0,C=!!e.escapeParameter;const V=t?t.modifiers:n.isPlainObject(e.modifiers)?e.modifiers:{};let D=e.pluralRules||t&&t.pluralRules,f;f=(()=>{r&&g.setFallbackContext(null);const i={version:He,locale:a.value,fallbackLocale:c.value,messages:m.value,modifiers:V,pluralRules:D,missing:P===null?void 0:P,missingWarn:d,fallbackWarn:I,fallbackFormat:T,unresolving:!0,postTranslation:A===null?void 0:A,warnHtmlMessage:w,escapeParameter:C,messageResolver:e.messageResolver,__meta:{framework:"vue"}};i.datetimeFormats=_.value,i.numberFormats=b.value,i.__datetimeFormatters=n.isPlainObject(f)?f.__datetimeFormatters:void 0,i.__numberFormatters=n.isPlainObject(f)?f.__numberFormatters:void 0,i.__v_emitter=n.isPlainObject(f)?f.__v_emitter:void 0;const u=g.createCoreContext(i);return r&&g.setFallbackContext(u),u})(),g.updateFallbackLocale(f,a.value,c.value);function j(){return[a.value,c.value,m.value,_.value,b.value]}const H=E.computed({get:()=>a.value,set:i=>{a.value=i,f.locale=a.value}}),x=E.computed({get:()=>c.value,set:i=>{c.value=i,f.fallbackLocale=c.value,g.updateFallbackLocale(f,a.value,i)}}),ae=E.computed(()=>m.value),te=E.computed(()=>_.value),ne=E.computed(()=>b.value);function le(){return n.isFunction(A)?A:null}function re(i){A=i,f.postTranslation=i}function se(){return y}function W(i){i!==null&&(P=Ue(i)),y=i,f.missing=P}function ie(i,u){return i!=="translate"||!u.resolvedMessage}const U=(i,u,h,k,Te,z)=>{j();let G;try{g.setAdditionalMeta(ma()),r||(f.fallbackContext=t?g.getFallbackContext():void 0),G=i(f)}finally{g.setAdditionalMeta(null),r||(f.fallbackContext=void 0)}if(n.isNumber(G)&&G===g.NOT_REOSLVED){const[B,la]=u();if(t&&n.isString(B)&&ie(h,la)){O&&(g.isTranslateFallbackWarn(I,B)||g.isTranslateMissingWarn(d,B))&&n.warn(S(F.FALLBACK_TO_ROOT,{key:B,type:h}));{const{__v_emitter:Ae}=f;Ae&&O&&Ae.emit("fallback",{type:h,key:B,to:"global",groupId:`${h}:${B}`})}}return t&&O?k(t):Te(B)}else{if(z(G))return G;throw R(v.UNEXPECTED_RETURN_TYPE)}};function X(...i){return U(u=>Reflect.apply(g.translate,null,[u,...i]),()=>g.parseTranslateArgs(...i),"translate",u=>Reflect.apply(u.t,u,[...i]),u=>u,u=>n.isString(u))}function ce(...i){const[u,h,k]=i;if(k&&!n.isObject(k))throw R(v.INVALID_ARGUMENT);return X(u,h,n.assign({resolvedMessage:!0},k||{}))}function ue(...i){return U(u=>Reflect.apply(g.datetime,null,[u,...i]),()=>g.parseDateTimeArgs(...i),"datetime format",u=>Reflect.apply(u.d,u,[...i]),()=>g.MISSING_RESOLVE_VALUE,u=>n.isString(u))}function oe(...i){return U(u=>Reflect.apply(g.number,null,[u,...i]),()=>g.parseNumberArgs(...i),"number format",u=>Reflect.apply(u.n,u,[...i]),()=>g.MISSING_RESOLVE_VALUE,u=>n.isString(u))}function me(i){return i.map(u=>n.isString(u)||n.isNumber(u)||n.isBoolean(u)?Ce(String(u)):u)}const _e={normalize:me,interpolate:i=>i,type:"vnode"};function fe(...i){return U(u=>{let h;const k=u;try{k.processor=_e,h=Reflect.apply(g.translate,null,[k,...i])}finally{k.processor=null}return h},()=>g.parseTranslateArgs(...i),"translate",u=>u[Le](...i),u=>[Ce(u)],u=>n.isArray(u))}function ge(...i){return U(u=>Reflect.apply(g.number,null,[u,...i]),()=>g.parseNumberArgs(...i),"number format",u=>u[Ne](...i),()=>[],u=>n.isString(u)||n.isArray(u))}function be(...i){return U(u=>Reflect.apply(g.datetime,null,[u,...i]),()=>g.parseDateTimeArgs(...i),"datetime format",u=>u[Ie](...i),()=>[],u=>n.isString(u)||n.isArray(u))}function Ee(i){D=i,f.pluralRules=D}function ve(i,u){const h=n.isString(u)?u:a.value,k=K(h);return f.messageResolver(k,i)!==null}function de(i){let u=null;const h=g.fallbackWithLocaleChain(f,c.value,a.value);for(let k=0;k<h.length;k++){const Te=m.value[h[k]]||{},z=f.messageResolver(Te,i);if(z!=null){u=z;break}}return u}function Oe(i){const u=de(i);return u??(t?t.tm(i)||{}:{})}function K(i){return m.value[i]||{}}function o(i,u){m.value[i]=u,f.messages=m.value}function L(i,u){m.value[i]=m.value[i]||{},Y(u,m.value[i]),f.messages=m.value}function Qe(i){return _.value[i]||{}}function Ze(i,u){_.value[i]=u,f.datetimeFormats=_.value,g.clearDateTimeFormat(f,i,u)}function ea(i,u){_.value[i]=n.assign(_.value[i]||{},u),f.datetimeFormats=_.value,g.clearDateTimeFormat(f,i,u)}function aa(i){return b.value[i]||{}}function ta(i,u){b.value[i]=u,f.numberFormats=b.value,g.clearNumberFormat(f,i,u)}function na(i,u){b.value[i]=n.assign(b.value[i]||{},u),f.numberFormats=b.value,g.clearNumberFormat(f,i,u)}We++,t&&n.inBrowser&&(E.watch(t.locale,i=>{l&&(a.value=i,f.locale=i,g.updateFallbackLocale(f,a.value,c.value))}),E.watch(t.fallbackLocale,i=>{l&&(c.value=i,f.fallbackLocale=i,g.updateFallbackLocale(f,a.value,c.value))}));const N={id:We,locale:H,fallbackLocale:x,get inheritLocale(){return l},set inheritLocale(i){l=i,i&&t&&(a.value=t.locale.value,c.value=t.fallbackLocale.value,g.updateFallbackLocale(f,a.value,c.value))},get availableLocales(){return Object.keys(m.value).sort()},messages:ae,get modifiers(){return V},get pluralRules(){return D||{}},get isGlobal(){return r},get missingWarn(){return d},set missingWarn(i){d=i,f.missingWarn=d},get fallbackWarn(){return I},set fallbackWarn(i){I=i,f.fallbackWarn=I},get fallbackRoot(){return O},set fallbackRoot(i){O=i},get fallbackFormat(){return T},set fallbackFormat(i){T=i,f.fallbackFormat=T},get warnHtmlMessage(){return w},set warnHtmlMessage(i){w=i,f.warnHtmlMessage=i},get escapeParameter(){return C},set escapeParameter(i){C=i,f.escapeParameter=i},t:X,getLocaleMessage:K,setLocaleMessage:o,mergeLocaleMessage:L,getPostTranslationHandler:le,setPostTranslationHandler:re,getMissingHandler:se,setMissingHandler:W,[xe]:Ee};return N.datetimeFormats=te,N.numberFormats=ne,N.rt=ce,N.te=ve,N.tm=Oe,N.d=ue,N.n=oe,N.getDateTimeFormat=Qe,N.setDateTimeFormat=Ze,N.mergeDateTimeFormat=ea,N.getNumberFormat=aa,N.setNumberFormat=ta,N.mergeNumberFormat=na,N[Ge]=e.__injectWithOption,N[Le]=fe,N[Ie]=be,N[Ne]=ge,N[Re]=i=>{f.__v_emitter=i},N[Fe]=()=>{f.__v_emitter=void 0},N}function _a(e){const s=n.isString(e.locale)?e.locale:g.DEFAULT_LOCALE,t=n.isString(e.fallbackLocale)||n.isArray(e.fallbackLocale)||n.isPlainObject(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s,r=n.isFunction(e.missing)?e.missing:void 0,l=n.isBoolean(e.silentTranslationWarn)||n.isRegExp(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,a=n.isBoolean(e.silentFallbackWarn)||n.isRegExp(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,c=n.isBoolean(e.fallbackRoot)?e.fallbackRoot:!0,m=!!e.formatFallbackMessages,_=n.isPlainObject(e.modifiers)?e.modifiers:{},b=e.pluralizationRules,d=n.isFunction(e.postTranslation)?e.postTranslation:void 0,I=n.isString(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,O=!!e.escapeParameterHtml,T=n.isBoolean(e.sync)?e.sync:!0;e.formatter&&n.warn(S(F.NOT_SUPPORTED_FORMATTER)),e.preserveDirectiveContent&&n.warn(S(F.NOT_SUPPORTED_PRESERVE_DIRECTIVE));let y=e.messages;if(n.isPlainObject(e.sharedMessages)){const f=e.sharedMessages;y=Object.keys(f).reduce((j,H)=>{const x=j[H]||(j[H]={});return n.assign(x,f[H]),j},y||{})}const{__i18n:P,__root:A,__injectWithOption:w}=e,C=e.datetimeFormats,V=e.numberFormats,D=e.flatJson;return{locale:s,fallbackLocale:t,messages:y,flatJson:D,datetimeFormats:C,numberFormats:V,missing:r,missingWarn:l,fallbackWarn:a,fallbackRoot:c,fallbackFormat:m,modifiers:_,pluralRules:b,postTranslation:d,warnHtmlMessage:I,escapeParameter:O,messageResolver:e.messageResolver,inheritLocale:T,__i18n:P,__root:A,__injectWithOption:w}}function ke(e={},s){{const t=pe(_a(e)),r={id:t.id,get locale(){return t.locale.value},set locale(l){t.locale.value=l},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(l){t.fallbackLocale.value=l},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return n.warn(S(F.NOT_SUPPORTED_FORMATTER)),{interpolate(){return[]}}},set formatter(l){n.warn(S(F.NOT_SUPPORTED_FORMATTER))},get missing(){return t.getMissingHandler()},set missing(l){t.setMissingHandler(l)},get silentTranslationWarn(){return n.isBoolean(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(l){t.missingWarn=n.isBoolean(l)?!l:l},get silentFallbackWarn(){return n.isBoolean(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(l){t.fallbackWarn=n.isBoolean(l)?!l:l},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(l){t.fallbackFormat=l},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(l){t.setPostTranslationHandler(l)},get sync(){return t.inheritLocale},set sync(l){t.inheritLocale=l},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(l){t.warnHtmlMessage=l!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(l){t.escapeParameter=l},get preserveDirectiveContent(){return n.warn(S(F.NOT_SUPPORTED_PRESERVE_DIRECTIVE)),!0},set preserveDirectiveContent(l){n.warn(S(F.NOT_SUPPORTED_PRESERVE_DIRECTIVE))},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...l){const[a,c,m]=l,_={};let b=null,d=null;if(!n.isString(a))throw R(v.INVALID_ARGUMENT);const I=a;return n.isString(c)?_.locale=c:n.isArray(c)?b=c:n.isPlainObject(c)&&(d=c),n.isArray(m)?b=m:n.isPlainObject(m)&&(d=m),Reflect.apply(t.t,t,[I,b||d||{},_])},rt(...l){return Reflect.apply(t.rt,t,[...l])},tc(...l){const[a,c,m]=l,_={plural:1};let b=null,d=null;if(!n.isString(a))throw R(v.INVALID_ARGUMENT);const I=a;return n.isString(c)?_.locale=c:n.isNumber(c)?_.plural=c:n.isArray(c)?b=c:n.isPlainObject(c)&&(d=c),n.isString(m)?_.locale=m:n.isArray(m)?b=m:n.isPlainObject(m)&&(d=m),Reflect.apply(t.t,t,[I,b||d||{},_])},te(l,a){return t.te(l,a)},tm(l){return t.tm(l)},getLocaleMessage(l){return t.getLocaleMessage(l)},setLocaleMessage(l,a){t.setLocaleMessage(l,a)},mergeLocaleMessage(l,a){t.mergeLocaleMessage(l,a)},d(...l){return Reflect.apply(t.d,t,[...l])},getDateTimeFormat(l){return t.getDateTimeFormat(l)},setDateTimeFormat(l,a){t.setDateTimeFormat(l,a)},mergeDateTimeFormat(l,a){t.mergeDateTimeFormat(l,a)},n(...l){return Reflect.apply(t.n,t,[...l])},getNumberFormat(l){return t.getNumberFormat(l)},setNumberFormat(l,a){t.setNumberFormat(l,a)},mergeNumberFormat(l,a){t.mergeNumberFormat(l,a)},getChoiceIndex(l,a){return n.warn(S(F.NOT_SUPPORTED_GET_CHOICE_INDEX)),-1},__onComponentInstanceCreated(l){const{componentInstanceCreatedListener:a}=e;a&&a(l,r)}};return r.__enableEmitter=l=>{const a=t;a[Re]&&a[Re](l)},r.__disableEmitter=()=>{const l=t;l[Fe]&&l[Fe]()},r}}const Se={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function fa({slots:e},s){return s.length===1&&s[0]==="default"?(e.default?e.default():[]).reduce((r,l)=>r=[...r,...n.isArray(l.children)?l.children:[l]],[]):s.reduce((t,r)=>{const l=e[r];return l&&(t[r]=l()),t},{})}function Ke(e){return E.Fragment}const J={name:"i18n-t",props:n.assign({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>n.isNumber(e)||!isNaN(e)}},Se),setup(e,s){const{slots:t,attrs:r}=s,l=e.i18n||Z({useScope:e.scope,__useComponent:!0});return()=>{const a=Object.keys(t).filter(I=>I!=="_"),c={};e.locale&&(c.locale=e.locale),e.plural!==void 0&&(c.plural=n.isString(e.plural)?+e.plural:e.plural);const m=fa(s,a),_=l[Le](e.keypath,m,c),b=n.assign({},r),d=n.isString(e.tag)||n.isObject(e.tag)?e.tag:Ke();return E.h(d,b,_)}}};function ga(e){return n.isArray(e)&&!n.isString(e[0])}function ze(e,s,t,r){const{slots:l,attrs:a}=s;return()=>{const c={part:!0};let m={};e.locale&&(c.locale=e.locale),n.isString(e.format)?c.key=e.format:n.isObject(e.format)&&(n.isString(e.format.key)&&(c.key=e.format.key),m=Object.keys(e.format).reduce((O,T)=>t.includes(T)?n.assign({},O,{[T]:e.format[T]}):O,{}));const _=r(e.value,c,m);let b=[c.key];n.isArray(_)?b=_.map((O,T)=>{const y=l[O.type],P=y?y({[O.type]:O.value,index:T,parts:_}):[O.value];return ga(P)&&(P[0].key=`${O.type}-${T}`),P}):n.isString(_)&&(b=[_]);const d=n.assign({},a),I=n.isString(e.tag)||n.isObject(e.tag)?e.tag:Ke();return E.h(I,d,b)}}const ye={name:"i18n-n",props:n.assign({value:{type:Number,required:!0},format:{type:[String,Object]}},Se),setup(e,s){const t=e.i18n||Z({useScope:"parent",__useComponent:!0});return ze(e,s,g.NUMBER_FORMAT_OPTIONS_KEYS,(...r)=>t[Ne](...r))}},he={name:"i18n-d",props:n.assign({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Se),setup(e,s){const t=e.i18n||Z({useScope:"parent",__useComponent:!0});return ze(e,s,g.DATETIME_FORMAT_OPTIONS_KEYS,(...r)=>t[Ie](...r))}};function ba(e,s){const t=e;if(e.mode==="composition")return t.__getInstance(s)||e.global;{const r=t.__getInstance(s);return r!=null?r.__composer:e.global.__composer}}function qe(e){const s=c=>{const{instance:m,modifiers:_,value:b}=c;if(!m||!m.$)throw R(v.UNEXPECTED_ERROR);const d=ba(e,m.$);_.preserve&&n.warn(S(F.NOT_SUPPORTED_PRESERVE));const I=we(b);return[Reflect.apply(d.t,d,[...Ve(I)]),d]};return{created:(c,m)=>{const[_,b]=s(m);n.inBrowser&&e.global===b&&(c.__i18nWatcher=E.watch(b.locale,()=>{m.instance&&m.instance.$forceUpdate()})),c.__composer=b,c.textContent=_},unmounted:c=>{n.inBrowser&&c.__i18nWatcher&&(c.__i18nWatcher(),c.__i18nWatcher=void 0,delete c.__i18nWatcher),c.__composer&&(c.__composer=void 0,delete c.__composer)},beforeUpdate:(c,{value:m})=>{if(c.__composer){const _=c.__composer,b=we(m);c.textContent=Reflect.apply(_.t,_,[...Ve(b)])}},getSSRProps:c=>{const[m]=s(c);return{textContent:m}}}}function we(e){if(n.isString(e))return{path:e};if(n.isPlainObject(e)){if(!("path"in e))throw R(v.REQUIRED_VALUE,"path");return e}else throw R(v.INVALID_VALUE)}function Ve(e){const{path:s,locale:t,args:r,choice:l,plural:a}=e,c={},m=r||{};return n.isString(t)&&(c.locale=t),n.isNumber(l)&&(c.plural=l),n.isNumber(a)&&(c.plural=a),[s,m,c]}function Ea(e,s,...t){const r=n.isPlainObject(t[0])?t[0]:{},l=!!r.useI18nComponentName,a=n.isBoolean(r.globalInstall)?r.globalInstall:!0;a&&l&&n.warn(S(F.COMPONENT_NAME_LEGACY_COMPATIBLE,{name:J.name})),a&&(e.component(l?"i18n":J.name,J),e.component(ye.name,ye),e.component(he.name,he)),e.directive("t",qe(s))}function va(e,s,t){return{beforeCreate(){const r=E.getCurrentInstance();if(!r)throw R(v.UNEXPECTED_ERROR);const l=this.$options;if(l.i18n){const a=l.i18n;l.__i18n&&(a.__i18n=l.__i18n),a.__root=s,this===this.$root?this.$i18n=je(e,a):(a.__injectWithOption=!0,this.$i18n=ke(a))}else l.__i18n?this===this.$root?this.$i18n=je(e,l):this.$i18n=ke({__i18n:l.__i18n,__injectWithOption:!0,__root:s}):this.$i18n=e;l.__i18nGlobal&&Xe(s,l,l),e.__onComponentInstanceCreated(this.$i18n),t.__setInstance(r,this.$i18n),this.$t=(...a)=>this.$i18n.t(...a),this.$rt=(...a)=>this.$i18n.rt(...a),this.$tc=(...a)=>this.$i18n.tc(...a),this.$te=(a,c)=>this.$i18n.te(a,c),this.$d=(...a)=>this.$i18n.d(...a),this.$n=(...a)=>this.$i18n.n(...a),this.$tm=a=>this.$i18n.tm(a)},mounted(){},unmounted(){const r=E.getCurrentInstance();if(!r)throw R(v.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,t.__deleteInstance(r),delete this.$i18n}}}function je(e,s){e.locale=s.locale||e.locale,e.fallbackLocale=s.fallbackLocale||e.fallbackLocale,e.missing=s.missing||e.missing,e.silentTranslationWarn=s.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=s.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=s.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=s.postTranslation||e.postTranslation,e.warnHtmlInMessage=s.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=s.escapeParameterHtml||e.escapeParameterHtml,e.sync=s.sync||e.sync,e.__composer[xe](s.pluralizationRules||e.pluralizationRules);const t=Q(e.locale,{messages:s.messages,__i18n:s.__i18n});return Object.keys(t).forEach(r=>e.mergeLocaleMessage(r,t[r])),s.datetimeFormats&&Object.keys(s.datetimeFormats).forEach(r=>e.mergeDateTimeFormat(r,s.datetimeFormats[r])),s.numberFormats&&Object.keys(s.numberFormats).forEach(r=>e.mergeNumberFormat(r,s.numberFormats[r])),e}const Je=n.makeSymbol("global-vue-i18n");function da(e={},s){const t=n.isBoolean(e.legacy)?e.legacy:!0,r=n.isBoolean(e.globalInjection)?e.globalInjection:!0,l=t?!!e.allowComposition:!0,a=new Map,[c,m]=Ta(e,t),_=n.makeSymbol("vue-i18n");function b(O){return a.get(O)||null}function d(O,T){a.set(O,T)}function I(O){a.delete(O)}{const O={get mode(){return t?"legacy":"composition"},get allowComposition(){return l},async install(T,...y){T.__VUE_I18N_SYMBOL__=_,T.provide(T.__VUE_I18N_SYMBOL__,O),!t&&r&&ha(T,O.global),Ea(T,O,...y),t&&T.mixin(va(m,m.__composer,O));const P=T.unmount;T.unmount=()=>{O.dispose(),P()}},get global(){return m},dispose(){c.stop()},__instances:a,__getInstance:b,__setInstance:d,__deleteInstance:I};return O}}function Z(e={}){const s=E.getCurrentInstance();if(s==null)throw R(v.MUST_BE_CALL_SETUP_TOP);if(!s.isCE&&s.appContext.app!=null&&!s.appContext.app.__VUE_I18N_SYMBOL__)throw R(v.NOT_INSLALLED);const t=La(s),r=Na(t),l=Ye(s),a=Ia(e,l);if(t.mode==="legacy"&&!e.__useComponent){if(!t.allowComposition)throw R(v.NOT_AVAILABLE_IN_LEGACY_MODE);return Pa(s,a,r,e)}if(a==="global")return Xe(r,e,l),r;if(a==="parent"){let _=Ra(t,s,e.__useComponent);return _==null&&(n.warn(S(F.NOT_FOUND_PARENT_SCOPE)),_=r),_}const c=t;let m=c.__getInstance(s);if(m==null){const _=n.assign({},e);"__i18n"in l&&(_.__i18n=l.__i18n),r&&(_.__root=r),m=pe(_),Fa(c,s),c.__setInstance(s,m)}return m}const Oa=e=>{if(!(oa in e))throw R(v.NOT_COMPATIBLE_LEGACY_VUE_I18N);return e};function Ta(e,s,t){const r=E.effectScope();{const l=s?r.run(()=>ke(e)):r.run(()=>pe(e));if(l==null)throw R(v.UNEXPECTED_ERROR);return[r,l]}}function La(e){{const s=E.inject(e.isCE?Je:e.appContext.app.__VUE_I18N_SYMBOL__);if(!s)throw R(e.isCE?v.NOT_INSLALLED_WITH_PROVIDE:v.UNEXPECTED_ERROR);return s}}function Ia(e,s){return n.isEmptyObject(e)?"__i18n"in s?"local":"global":e.useScope?e.useScope:"local"}function Na(e){return e.mode==="composition"?e.global:e.global.__composer}function Ra(e,s,t=!1){let r=null;const l=s.root;let a=s.parent;for(;a!=null;){const c=e;if(e.mode==="composition")r=c.__getInstance(a);else{const m=c.__getInstance(a);m!=null&&(r=m.__composer,t&&r&&!r[Ge]&&(r=null))}if(r!=null||l===a)break;a=a.parent}return r}function Fa(e,s,t){E.onMounted(()=>{},s),E.onUnmounted(()=>{e.__deleteInstance(s)},s)}function Pa(e,s,t,r={}){const l=s==="local",a=E.shallowRef(null);if(l&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw R(v.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const c=n.isBoolean(r.inheritLocale)?r.inheritLocale:!0,m=E.ref(l&&c?t.locale.value:n.isString(r.locale)?r.locale:g.DEFAULT_LOCALE),_=E.ref(l&&c?t.fallbackLocale.value:n.isString(r.fallbackLocale)||n.isArray(r.fallbackLocale)||n.isPlainObject(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:m.value),b=E.ref(Q(m.value,r)),d=E.ref(n.isPlainObject(r.datetimeFormats)?r.datetimeFormats:{[m.value]:{}}),I=E.ref(n.isPlainObject(r.numberFormats)?r.numberFormats:{[m.value]:{}}),O=l?t.missingWarn:n.isBoolean(r.missingWarn)||n.isRegExp(r.missingWarn)?r.missingWarn:!0,T=l?t.fallbackWarn:n.isBoolean(r.fallbackWarn)||n.isRegExp(r.fallbackWarn)?r.fallbackWarn:!0,y=l?t.fallbackRoot:n.isBoolean(r.fallbackRoot)?r.fallbackRoot:!0,P=!!r.fallbackFormat,A=n.isFunction(r.missing)?r.missing:null,w=n.isFunction(r.postTranslation)?r.postTranslation:null,C=l?t.warnHtmlMessage:n.isBoolean(r.warnHtmlMessage)?r.warnHtmlMessage:!0,V=!!r.escapeParameter,D=l?t.modifiers:n.isPlainObject(r.modifiers)?r.modifiers:{},f=r.pluralRules||l&&t.pluralRules;function ee(){return[m.value,_.value,b.value,d.value,I.value]}const j=E.computed({get:()=>a.value?a.value.locale.value:m.value,set:o=>{a.value&&(a.value.locale.value=o),m.value=o}}),H=E.computed({get:()=>a.value?a.value.fallbackLocale.value:_.value,set:o=>{a.value&&(a.value.fallbackLocale.value=o),_.value=o}}),x=E.computed(()=>a.value?a.value.messages.value:b.value),ae=E.computed(()=>d.value),te=E.computed(()=>I.value);function ne(){return a.value?a.value.getPostTranslationHandler():w}function le(o){a.value&&a.value.setPostTranslationHandler(o)}function re(){return a.value?a.value.getMissingHandler():A}function se(o){a.value&&a.value.setMissingHandler(o)}function W(o){return ee(),o()}function ie(...o){return a.value?W(()=>Reflect.apply(a.value.t,null,[...o])):W(()=>"")}function U(...o){return a.value?Reflect.apply(a.value.rt,null,[...o]):""}function X(...o){return a.value?W(()=>Reflect.apply(a.value.d,null,[...o])):W(()=>"")}function ce(...o){return a.value?W(()=>Reflect.apply(a.value.n,null,[...o])):W(()=>"")}function ue(o){return a.value?a.value.tm(o):{}}function oe(o,L){return a.value?a.value.te(o,L):!1}function me(o){return a.value?a.value.getLocaleMessage(o):{}}function Me(o,L){a.value&&(a.value.setLocaleMessage(o,L),b.value[o]=L)}function _e(o,L){a.value&&a.value.mergeLocaleMessage(o,L)}function fe(o){return a.value?a.value.getDateTimeFormat(o):{}}function ge(o,L){a.value&&(a.value.setDateTimeFormat(o,L),d.value[o]=L)}function be(o,L){a.value&&a.value.mergeDateTimeFormat(o,L)}function Ee(o){return a.value?a.value.getNumberFormat(o):{}}function ve(o,L){a.value&&(a.value.setNumberFormat(o,L),I.value[o]=L)}function de(o,L){a.value&&a.value.mergeNumberFormat(o,L)}const Oe={get id(){return a.value?a.value.id:-1},locale:j,fallbackLocale:H,messages:x,datetimeFormats:ae,numberFormats:te,get inheritLocale(){return a.value?a.value.inheritLocale:c},set inheritLocale(o){a.value&&(a.value.inheritLocale=o)},get availableLocales(){return a.value?a.value.availableLocales:Object.keys(b.value)},get modifiers(){return a.value?a.value.modifiers:D},get pluralRules(){return a.value?a.value.pluralRules:f},get isGlobal(){return a.value?a.value.isGlobal:!1},get missingWarn(){return a.value?a.value.missingWarn:O},set missingWarn(o){a.value&&(a.value.missingWarn=o)},get fallbackWarn(){return a.value?a.value.fallbackWarn:T},set fallbackWarn(o){a.value&&(a.value.missingWarn=o)},get fallbackRoot(){return a.value?a.value.fallbackRoot:y},set fallbackRoot(o){a.value&&(a.value.fallbackRoot=o)},get fallbackFormat(){return a.value?a.value.fallbackFormat:P},set fallbackFormat(o){a.value&&(a.value.fallbackFormat=o)},get warnHtmlMessage(){return a.value?a.value.warnHtmlMessage:C},set warnHtmlMessage(o){a.value&&(a.value.warnHtmlMessage=o)},get escapeParameter(){return a.value?a.value.escapeParameter:V},set escapeParameter(o){a.value&&(a.value.escapeParameter=o)},t:ie,getPostTranslationHandler:ne,setPostTranslationHandler:le,getMissingHandler:re,setMissingHandler:se,rt:U,d:X,n:ce,tm:ue,te:oe,getLocaleMessage:me,setLocaleMessage:Me,mergeLocaleMessage:_e,getDateTimeFormat:fe,setDateTimeFormat:ge,mergeDateTimeFormat:be,getNumberFormat:Ee,setNumberFormat:ve,mergeNumberFormat:de};function K(o){o.locale.value=m.value,o.fallbackLocale.value=_.value,Object.keys(b.value).forEach(L=>{o.mergeLocaleMessage(L,b.value[L])}),Object.keys(d.value).forEach(L=>{o.mergeDateTimeFormat(L,d.value[L])}),Object.keys(I.value).forEach(L=>{o.mergeNumberFormat(L,I.value[L])}),o.escapeParameter=V,o.fallbackFormat=P,o.fallbackRoot=y,o.fallbackWarn=T,o.missingWarn=O,o.warnHtmlMessage=C}return E.onBeforeMount(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw R(v.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const o=a.value=e.proxy.$i18n.__composer;s==="global"?(m.value=o.locale.value,_.value=o.fallbackLocale.value,b.value=o.messages.value,d.value=o.datetimeFormats.value,I.value=o.numberFormats.value):l&&K(o)}),Oe}const ka=["locale","fallbackLocale","availableLocales"],ya=["t","rt","d","n","tm"];function ha(e,s){const t=Object.create(null);ka.forEach(r=>{const l=Object.getOwnPropertyDescriptor(s,r);if(!l)throw R(v.UNEXPECTED_ERROR);const a=E.isRef(l.value)?{get(){return l.value.value},set(c){l.value.value=c}}:{get(){return l.get&&l.get()}};Object.defineProperty(t,r,a)}),e.config.globalProperties.$i18n=t,ya.forEach(r=>{const l=Object.getOwnPropertyDescriptor(s,r);if(!l||!l.value)throw R(v.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${r}`,l)})}g.registerMessageCompiler(g.compileToFunction);g.registerMessageResolver(g.resolveValue);g.registerLocaleFallbacker(g.fallbackWithLocaleChain);{const e=n.getGlobalThis();e.__INTLIFY__=!0,g.setDevToolsHook(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}M.DatetimeFormat=he;M.I18nInjectionKey=Je;M.NumberFormat=ye;M.Translation=J;M.VERSION=He;M.castToVueI18n=Oa;var Ma=M.createI18n=da,Aa=M.useI18n=Z;M.vTDirective=qe;export{Ma as c,Aa as u};
