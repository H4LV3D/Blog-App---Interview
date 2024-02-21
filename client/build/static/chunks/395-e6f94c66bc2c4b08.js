"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{3879:function(t,e,n){n.d(e,{E:function(){return i}});function i(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}},7354:function(t,e,n){n.d(e,{J:function(){return i}});function i(t,e,n){if(!e.has(t))throw TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}},2731:function(t,e,n){n.d(e,{_:function(){return r}});var i=n(7354);function r(t,e){var n=(0,i.J)(t,e,"get");return n.get?n.get.call(t):n.value}},8146:function(t,e,n){n.d(e,{_:function(){return r}});var i=n(3879);function r(t,e,n){(0,i.E)(t,e),e.set(t,n)}},5577:function(t,e,n){n.d(e,{_:function(){return r}});var i=n(7354);function r(t,e,n){var r=(0,i.J)(t,e,"set");return!function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=n}}(t,r,n),n}},4831:function(t,e,n){n.d(e,{_:function(){return i}});function i(t,e,n){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return n}},7920:function(t,e,n){n.d(e,{_:function(){return r}});var i=n(3879);function r(t,e){(0,i.E)(t,e),e.add(t)}},9555:function(t,e,n){n.d(e,{j:function(){return h}});var i,r,o,s=n(2731),u=n(8146),a=n(5577),l=n(4614),c=n(6063),h=new(i=new WeakMap,r=new WeakMap,o=new WeakMap,class extends l.l{onSubscribe(){(0,s._)(this,r)||this.setEventListener((0,s._)(this,o))}onUnsubscribe(){var t;this.hasListeners()||(null===(t=(0,s._)(this,r))||void 0===t||t.call(this),(0,a._)(this,r,void 0))}setEventListener(t){var e;(0,a._)(this,o,t),null===(e=(0,s._)(this,r))||void 0===e||e.call(this),(0,a._)(this,r,t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()}))}setFocused(t){(0,s._)(this,i)!==t&&((0,a._)(this,i,t),this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){var t;return"boolean"==typeof(0,s._)(this,i)?(0,s._)(this,i):(null===(t=globalThis.document)||void 0===t?void 0:t.visibilityState)!=="hidden"}constructor(){super(),(0,u._)(this,i,{writable:!0,value:void 0}),(0,u._)(this,r,{writable:!0,value:void 0}),(0,u._)(this,o,{writable:!0,value:void 0}),(0,a._)(this,o,t=>{if(!c.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}})}})},1793:function(t,e,n){n.d(e,{R:function(){return w},m:function(){return y}});var i,r,o,s,u,a=n(2731),l=n(8146),c=n(5577),h=n(4831),d=n(7920),f=n(5139),v=n(2041),p=n(326),y=(i=new WeakMap,r=new WeakMap,o=new WeakMap,s=new WeakMap,u=new WeakSet,class extends v.F{setOptions(t){this.options={...(0,a._)(this,r),...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){(0,a._)(this,i).includes(t)||((0,a._)(this,i).push(t),this.clearGcTimeout(),(0,a._)(this,o).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){(0,c._)(this,i,(0,a._)(this,i).filter(e=>e!==t)),this.scheduleGc(),(0,a._)(this,o).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){(0,a._)(this,i).length||("pending"===this.state.status?this.scheduleGc():(0,a._)(this,o).remove(this))}continue(){var t,e;return null!==(e=null===(t=(0,a._)(this,s))||void 0===t?void 0:t.continue())&&void 0!==e?e:this.execute(this.state.variables)}async execute(t){var e,n,i,r,l,d,f,v,y,w,b,m,g,k,E,M,S,x,O,P;let T="pending"===this.state.status;try{if(!T){(0,h._)(this,u,_).call(this,{type:"pending",variables:t}),await (null===(y=(w=(0,a._)(this,o).config).onMutate)||void 0===y?void 0:y.call(w,t,this));let e=await (null===(b=(m=this.options).onMutate)||void 0===b?void 0:b.call(m,t));e!==this.state.context&&(0,h._)(this,u,_).call(this,{type:"pending",context:e,variables:t})}let g=await (()=>{var e;return(0,c._)(this,s,(0,p.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{(0,h._)(this,u,_).call(this,{type:"failed",failureCount:t,error:e})},onPause:()=>{(0,h._)(this,u,_).call(this,{type:"pause"})},onContinue:()=>{(0,h._)(this,u,_).call(this,{type:"continue"})},retry:null!==(e=this.options.retry)&&void 0!==e?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),(0,a._)(this,s).promise})();return await (null===(e=(n=(0,a._)(this,o).config).onSuccess)||void 0===e?void 0:e.call(n,g,t,this.state.context,this)),await (null===(i=(r=this.options).onSuccess)||void 0===i?void 0:i.call(r,g,t,this.state.context)),await (null===(l=(d=(0,a._)(this,o).config).onSettled)||void 0===l?void 0:l.call(d,g,null,this.state.variables,this.state.context,this)),await (null===(f=(v=this.options).onSettled)||void 0===f?void 0:f.call(v,g,null,t,this.state.context)),(0,h._)(this,u,_).call(this,{type:"success",data:g}),g}catch(e){try{throw await (null===(g=(k=(0,a._)(this,o).config).onError)||void 0===g?void 0:g.call(k,e,t,this.state.context,this)),await (null===(E=(M=this.options).onError)||void 0===E?void 0:E.call(M,e,t,this.state.context)),await (null===(S=(x=(0,a._)(this,o).config).onSettled)||void 0===S?void 0:S.call(x,void 0,e,this.state.variables,this.state.context,this)),await (null===(O=(P=this.options).onSettled)||void 0===O?void 0:O.call(P,void 0,e,t,this.state.context)),e}finally{(0,h._)(this,u,_).call(this,{type:"error",error:e})}}}constructor(t){super(),(0,d._)(this,u),(0,l._)(this,i,{writable:!0,value:void 0}),(0,l._)(this,r,{writable:!0,value:void 0}),(0,l._)(this,o,{writable:!0,value:void 0}),(0,l._)(this,s,{writable:!0,value:void 0}),this.mutationId=t.mutationId,(0,c._)(this,r,t.defaultOptions),(0,c._)(this,o,t.mutationCache),(0,c._)(this,i,[]),this.state=t.state||w(),this.setOptions(t.options),this.scheduleGc()}});function w(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}function _(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,p.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),f.V.batch(()=>{(0,a._)(this,i).forEach(e=>{e.onMutationUpdate(t)}),(0,a._)(this,o).notify({mutation:this,type:"updated",action:t})})}},5139:function(t,e,n){n.d(e,{V:function(){return i}});var i=function(){let t=[],e=0,n=t=>{t()},i=t=>{t()},r=t=>setTimeout(t,0),o=i=>{e?t.push(i):r(()=>{n(i)})},s=()=>{let e=t;t=[],e.length&&r(()=>{i(()=>{e.forEach(t=>{n(t)})})})};return{batch:t=>{let n;e++;try{n=t()}finally{--e||s()}return n},batchCalls:t=>function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];o(()=>{t(...n)})},schedule:o,setNotifyFunction:t=>{n=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{r=t}}}()},7211:function(t,e,n){n.d(e,{N:function(){return h}});var i,r,o,s=n(2731),u=n(8146),a=n(5577),l=n(4614),c=n(6063),h=new(i=new WeakMap,r=new WeakMap,o=new WeakMap,class extends l.l{onSubscribe(){(0,s._)(this,r)||this.setEventListener((0,s._)(this,o))}onUnsubscribe(){var t;this.hasListeners()||(null===(t=(0,s._)(this,r))||void 0===t||t.call(this),(0,a._)(this,r,void 0))}setEventListener(t){var e;(0,a._)(this,o,t),null===(e=(0,s._)(this,r))||void 0===e||e.call(this),(0,a._)(this,r,t(this.setOnline.bind(this)))}setOnline(t){(0,s._)(this,i)!==t&&((0,a._)(this,i,t),this.listeners.forEach(e=>{e(t)}))}isOnline(){return(0,s._)(this,i)}constructor(){super(),(0,u._)(this,i,{writable:!0,value:void 0}),(0,u._)(this,r,{writable:!0,value:void 0}),(0,u._)(this,o,{writable:!0,value:void 0}),(0,a._)(this,i,!0),(0,a._)(this,o,t=>{if(!c.sk&&window.addEventListener){let e=()=>t(!0),n=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",n)}}})}})},2041:function(t,e,n){n.d(e,{F:function(){return a}});var i,r=n(2731),o=n(8146),s=n(5577),u=n(6063),a=(i=new WeakMap,class{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,u.PN)(this.gcTime)&&(0,s._)(this,i,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,null!=t?t:u.sk?1/0:3e5)}clearGcTimeout(){(0,r._)(this,i)&&(clearTimeout((0,r._)(this,i)),(0,s._)(this,i,void 0))}constructor(){(0,o._)(this,i,{writable:!0,value:void 0})}})},326:function(t,e,n){n.d(e,{DV:function(){return l},Kw:function(){return u},Mz:function(){return c}});var i=n(9555),r=n(7211),o=n(6063);function s(t){return Math.min(1e3*2**t,3e4)}function u(t){return(null!=t?t:"online")!=="online"||r.N.isOnline()}var a=class{constructor(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent}};function l(t){return t instanceof a}function c(t){let e,n,l,c=!1,h=0,d=!1,f=new Promise((t,e)=>{n=t,l=e}),v=()=>!i.j.isFocused()||"always"!==t.networkMode&&!r.N.isOnline(),p=i=>{if(!d){var r;d=!0,null===(r=t.onSuccess)||void 0===r||r.call(t,i),null==e||e(),n(i)}},y=n=>{if(!d){var i;d=!0,null===(i=t.onError)||void 0===i||i.call(t,n),null==e||e(),l(n)}},w=()=>new Promise(n=>{var i;e=t=>{let e=d||!v();return e&&n(t),e},null===(i=t.onPause)||void 0===i||i.call(t)}).then(()=>{if(e=void 0,!d){var n;null===(n=t.onContinue)||void 0===n||n.call(t)}}),_=()=>{let e;if(!d){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(p).catch(e=>{var n,i,r;if(d)return;let u=null!==(i=t.retry)&&void 0!==i?i:o.sk?0:3,a=null!==(r=t.retryDelay)&&void 0!==r?r:s,l="function"==typeof a?a(h,e):a,f=!0===u||"number"==typeof u&&h<u||"function"==typeof u&&u(h,e);if(c||!f){y(e);return}h++,null===(n=t.onFail)||void 0===n||n.call(t,h,e),(0,o._v)(l).then(()=>{if(v())return w()}).then(()=>{c?y(e):_()})})}};return u(t.networkMode)?_():w().then(_),{promise:f,cancel:e=>{if(!d){var n;y(new a(e)),null===(n=t.abort)||void 0===n||n.call(t)}},continue:()=>(null==e?void 0:e())?f:Promise.resolve(),cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},4614:function(t,e,n){n.d(e,{l:function(){return i}});var i=class{subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}}},6063:function(t,e,n){n.d(e,{Ht:function(){return m},Kp:function(){return u},PN:function(){return s},Rm:function(){return c},SE:function(){return o},VS:function(){return f},VX:function(){return b},X7:function(){return l},Ym:function(){return h},ZT:function(){return r},_v:function(){return w},_x:function(){return a},oE:function(){return _},sk:function(){return i},to:function(){return d}});var i="Deno"in window;function r(){}function o(t,e){return"function"==typeof t?t(e):t}function s(t){return"number"==typeof t&&t>=0&&t!==1/0}function u(t,e){return Math.max(t+(e||0)-Date.now(),0)}function a(t,e){let{type:n="all",exact:i,fetchStatus:r,predicate:o,queryKey:s,stale:u}=t;if(s){if(i){if(e.queryHash!==c(s,e.options))return!1}else if(!d(e.queryKey,s))return!1}if("all"!==n){let t=e.isActive();if("active"===n&&!t||"inactive"===n&&t)return!1}return("boolean"!=typeof u||e.isStale()===u)&&(void 0===r||r===e.state.fetchStatus)&&(!o||!!o(e))}function l(t,e){let{exact:n,status:i,predicate:r,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(n){if(h(e.options.mutationKey)!==h(o))return!1}else if(!d(e.options.mutationKey,o))return!1}return(!i||e.state.status===i)&&(!r||!!r(e))}function c(t,e){return((null==e?void 0:e.queryKeyHashFn)||h)(t)}function h(t){return JSON.stringify(t,(t,e)=>p(e)?Object.keys(e).sort().reduce((t,n)=>(t[n]=e[n],t),{}):e)}function d(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(n=>!d(t[n],e[n]))}function f(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let n in t)if(t[n]!==e[n])return!1;return!0}function v(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function p(t){if(!y(t))return!1;let e=t.constructor;if(void 0===e)return!0;let n=e.prototype;return!!(y(n)&&n.hasOwnProperty("isPrototypeOf"))}function y(t){return"[object Object]"===Object.prototype.toString.call(t)}function w(t){return new Promise(e=>{setTimeout(e,t)})}function _(t,e,n){return"function"==typeof n.structuralSharing?n.structuralSharing(t,e):!1!==n.structuralSharing?function t(e,n){if(e===n)return e;let i=v(e)&&v(n);if(i||p(e)&&p(n)){let r=i?e:Object.keys(e),o=r.length,s=i?n:Object.keys(n),u=s.length,a=i?[]:{},l=0;for(let o=0;o<u;o++){let u=i?o:s[o];!i&&void 0===e[u]&&void 0===n[u]&&r.includes(u)?(a[u]=void 0,l++):(a[u]=t(e[u],n[u]),a[u]===e[u]&&void 0!==e[u]&&l++)}return o===u&&l===o?e:a}return n}(t,e):e}function b(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=[...t,e];return n&&i.length>n?i.slice(1):i}function m(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}},7082:function(t,e,n){n.d(e,{NL:function(){return s},aH:function(){return u}});var i=n(4090),r=n(3827),o=i.createContext(void 0),s=t=>{let e=i.useContext(o);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},u=t=>{let{client:e,children:n}=t;return i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,r.jsx)(o.Provider,{value:e,children:n})}}}]);