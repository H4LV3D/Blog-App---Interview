"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{7907:function(t,e,i){var s=i(5313);i.o(s,"usePathname")&&i.d(e,{usePathname:function(){return s.usePathname}}),i.o(s,"useRouter")&&i.d(e,{useRouter:function(){return s.useRouter}})},1115:function(t,e,i){var s=i(3827),n=i(4090),l=i(8442),r=i(7096),a=i(8792);e.Z=t=>{var e,i;let{display:o,arrangement:u}=t,{heartFilled:c,heartOutlined:d,thumbsDownFilled:h,thumbsDownOutlined:m}=r.icons,[v,x]=(0,n.useState)(!1),[f,b]=(0,n.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.default,{href:o.link,children:(0,s.jsxs)("div",{className:"border rounded-xl flex hover:border-neutral-600 ".concat("double"===u?"":"w-full items-center"," ").concat("cards"===u?"flex-col ":""," "),children:[(0,s.jsx)("div",{className:"".concat("single"===u?"w-[30%] lg:w-[25%] xl:w-[20%] rounded-l-xl min-h-[16rem]":"double"===u?"md:hidden xl:block xl:w-[35%] rounded-l-xl min-h-[16rem]":"w-full rounded-t-xl h-[16rem]"," bg-neutral-100 ")}),(0,s.jsxs)("div",{className:" ".concat("single"===u?"w-[70%] lg:w-[75%] xl:w-[80%] rounded-r-xl h-[16rem]":"double"===u?"md:w-[100%] xl:w-[65%] rounded-r-xl min-h-[16rem]":"w-full rounded-b-xl min-h-[19rem]","   p-6  border "),children:[(0,s.jsxs)("div",{className:"mb-2 flex justify-between ",children:[(0,s.jsx)("p",{className:"text-sm",children:o.episode}),(0,s.jsx)("p",{className:"text-sm",children:o.readTime})]}),(0,s.jsx)("h1",{className:" ".concat("single"!==u?"text-xl md:text-2xl mb-2":"text-xl md:text-3xl mb-2 md:mb-4"," font-[500] text-[#000] line-clamp-2"),children:o.title}),(0,s.jsx)("p",{className:"mb-1 sm:mb-2 line-clamp-3 !text-justify text-sm md:text-base ",children:o.description}),(0,s.jsxs)("p",{className:"mb-0 sm:mb-2 line-clamp-3 text-sm md:text-base",children:["Author : ",(0,s.jsx)("span",{className:"font-[500]",children:"Toluwalope Akinkunmi"})]}),(0,s.jsx)("div",{className:"flex justify-between items-center",children:o.reactions&&"good"in o.reactions&&(0,s.jsxs)("div",{className:"reactions flex items-center space-x-1",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-0",children:[v?(0,s.jsx)(l.Z,{icon:c,action:()=>x(!1),small:!0}):(0,s.jsx)(l.Z,{icon:d,action:()=>x(!0),small:!0}),(0,s.jsx)("p",{className:"number ",children:null==o?void 0:null===(e=o.reactions)||void 0===e?void 0:e.good})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-0",children:[f?(0,s.jsx)(l.Z,{icon:h,action:()=>b(!1),small:!0}):(0,s.jsx)(l.Z,{icon:m,action:()=>b(!0),small:!0}),(0,s.jsx)("p",{className:"number",children:null==o?void 0:null===(i=o.reactions)||void 0===i?void 0:i.bad})]})]})})]})]})})})}},9848:function(t,e,i){i.d(e,{yK:function(){return o},N9:function(){return u},Ps:function(){return n},c0:function(){return a},zn:function(){return l}});var s=i(4090);let n=function(t){let e=t,i=!1,s=new Set;return{getState:()=>e,updateState(t){e="function"==typeof t?t(e):t},setState(t){this.updateState(t),s.forEach(t=>t(e))},initialize(t){i||(e=t,i=!0)},subscribe:t=>(s.add(t),()=>s.delete(t))}}({notifications:[],queue:[],limit:5}),l=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;return(0,s.useSyncExternalStore)(t.subscribe,()=>t.getState(),()=>t.getState())};function r(t,e){let i=t.getState(),s=e([...i.notifications,...i.queue]);t.setState({notifications:s.slice(0,i.limit),queue:s.slice(i.limit),limit:i.limit})}function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,i=t.id||"mantine-".concat(Math.random().toString(36).slice(2,11));return r(e,e=>t.id&&e.some(e=>e.id===t.id)?e:[...e,{...t,id:i}]),i}function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return r(e,e=>e.filter(e=>{if(e.id===t){var i;return null===(i=e.onClose)||void 0===i||i.call(e,e),!1}return!0})),t}let u={show:a,hide:o,update:function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return r(e,e=>e.map(e=>e.id===t.id?{...e,...t}:e)),t.id},clean:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;r(t,()=>[])},cleanQueue:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;r(t,e=>e.slice(0,t.getState().limit))},updateState:r}},9575:function(t,e,i){i.d(e,{D:function(){return j}});var s,n,l,r,a,o,u=i(4090),c=i(2731),d=i(8146),h=i(5577),m=i(4831),v=i(7920),x=i(1793),f=i(5139),b=i(4614),p=i(6063),_=(s=new WeakMap,n=new WeakMap,l=new WeakMap,r=new WeakMap,a=new WeakSet,o=new WeakSet,class extends b.l{bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;if(this.options=(0,c._)(this,s).defaultMutationOptions(t),(0,p.VS)(this.options,e)||(0,c._)(this,s).getMutationCache().notify({type:"observerOptionsUpdated",mutation:(0,c._)(this,l),observer:this}),(null==e?void 0:e.mutationKey)&&this.options.mutationKey&&(0,p.Ym)(e.mutationKey)!==(0,p.Ym)(this.options.mutationKey))this.reset();else{var i;null===(i=(0,c._)(this,l))||void 0===i||i.setOptions(this.options)}}onUnsubscribe(){if(!this.hasListeners()){var t;null===(t=(0,c._)(this,l))||void 0===t||t.removeObserver(this)}}onMutationUpdate(t){(0,m._)(this,a,w).call(this),(0,m._)(this,o,g).call(this,t)}getCurrentResult(){return(0,c._)(this,n)}reset(){var t;null===(t=(0,c._)(this,l))||void 0===t||t.removeObserver(this),(0,h._)(this,l,void 0),(0,m._)(this,a,w).call(this),(0,m._)(this,o,g).call(this)}mutate(t,e){var i;return(0,h._)(this,r,e),null===(i=(0,c._)(this,l))||void 0===i||i.removeObserver(this),(0,h._)(this,l,(0,c._)(this,s).getMutationCache().build((0,c._)(this,s),this.options)),(0,c._)(this,l).addObserver(this),(0,c._)(this,l).execute(t)}constructor(t,e){super(),(0,v._)(this,a),(0,v._)(this,o),(0,d._)(this,s,{writable:!0,value:void 0}),(0,d._)(this,n,{writable:!0,value:void 0}),(0,d._)(this,l,{writable:!0,value:void 0}),(0,d._)(this,r,{writable:!0,value:void 0}),(0,h._)(this,n,void 0),(0,h._)(this,s,t),this.setOptions(e),this.bindMethods(),(0,m._)(this,a,w).call(this)}});function w(){var t,e;let i=null!==(e=null===(t=(0,c._)(this,l))||void 0===t?void 0:t.state)&&void 0!==e?e:(0,x.R)();(0,h._)(this,n,{...i,isPending:"pending"===i.status,isSuccess:"success"===i.status,isError:"error"===i.status,isIdle:"idle"===i.status,mutate:this.mutate,reset:this.reset})}function g(t){f.V.batch(()=>{if((0,c._)(this,r)&&this.hasListeners()){var e,i,s,l,a,o,u,d;let h=(0,c._)(this,n).variables,m=(0,c._)(this,n).context;(null==t?void 0:t.type)==="success"?(null===(e=(i=(0,c._)(this,r)).onSuccess)||void 0===e||e.call(i,t.data,h,m),null===(s=(l=(0,c._)(this,r)).onSettled)||void 0===s||s.call(l,t.data,null,h,m)):(null==t?void 0:t.type)==="error"&&(null===(a=(o=(0,c._)(this,r)).onError)||void 0===a||a.call(o,t.error,h,m),null===(u=(d=(0,c._)(this,r)).onSettled)||void 0===u||u.call(d,void 0,t.error,h,m))}this.listeners.forEach(t=>{t((0,c._)(this,n))})})}var S=i(7082);function j(t,e){var i,s;let n=(0,S.NL)(e),[l]=u.useState(()=>new _(n,t));u.useEffect(()=>{l.setOptions(t)},[l,t]);let r=u.useSyncExternalStore(u.useCallback(t=>l.subscribe(f.V.batchCalls(t)),[l]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),a=u.useCallback((t,e)=>{l.mutate(t,e).catch(N)},[l]);if(r.error&&(i=l.options.throwOnError,s=[r.error],"function"==typeof i?i(...s):!!i))throw r.error;return{...r,mutate:a,mutateAsync:r.mutate}}function N(){}}}]);