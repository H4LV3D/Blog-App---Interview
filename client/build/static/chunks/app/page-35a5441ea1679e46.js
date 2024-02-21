(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4794:function(e,t,s){Promise.resolve().then(s.bind(s,6413))},7907:function(e,t,s){"use strict";var r=s(5313);s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},5601:function(e,t){"use strict";function s(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6413:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var r=s(3827),l=s(4090),a=s(4609),i=s(5143),n=function(e){let{}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"relative py-20 bg-[#F7F7F7] w-full overflow-hidden flex flex-col items-center justify-center dark:border-neutral-700",children:[(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center lg:w-[900px]",children:[(0,r.jsx)("p",{className:"text-2xl mb-4",children:"Introducing"}),(0,r.jsx)("h1",{className:"text-5xl sm:text-6xl dark:text-neutral-200 font-[700] text-center text-black",children:"Collaborative Writing"}),(0,r.jsx)("div",{className:"w-full flex flex-col justify-center items-center mt-4 lg:w-[900px]",children:(0,r.jsx)("p",{className:"text-sm md:text-lg text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 sm:w-3/4 lg:w-2/3",children:"Ready to learn more? Dive into a world of playful, exciting, and interesting experience of my personal journey in the world of Tech."})})]})}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)("img",{src:"/assets/images/collaborative.jpeg",className:"h-[80vh] mx-auto",alt:""})})]})})};let o=()=>Math.floor(15*Math.random())+1;var c=function(e){let{reviews:t}=e;return(0,r.jsxs)("div",{className:"min-h-screen flex flex-col justify-center items-center py-8 mt-8",children:[(0,r.jsx)("div",{className:"flex justify-center items-center",children:(0,r.jsx)("h4",{className:"text-5xl font-oleo font-medium dark:text-neutral-400 text-black",children:"Our Community."})}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto xl:w-[950px] gap-6 my-4 sm:my-8",children:t.map((e,t)=>(0,r.jsxs)("div",{className:"w-full md:max-w-[360px] p-5 sm:p-6 rounded-lg border dark:border-neutral-700 flex-shrink-0 dark:text-white text-black hover:border-black",children:[(0,r.jsxs)("div",{className:"flex md:flex-row lg:flex-col items-center lg:items-start space-x-3 lg:space-x-0",children:[(0,r.jsx)("img",{src:"/assets/Memoji/male/Memoji-".concat(o(),".png"),className:"w-[60px] rounded-rull",alt:"An SVG illustration of a person dressed in different clothings"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-raleway font-medium text-2xl line-clamp-1 dark:text-neutral-500",children:e.name}),(0,r.jsx)("span",{className:"font-raleway text-xs sm:text-sm mt-2 dark:text-neutral-600",children:e.techRole})]})]}),(0,r.jsx)("p",{className:"font-raleway text-sm sm:text-base mt-2 line-clamp-2 dark:text-neutral-500",children:e.relation})]},t))})]})},d=s(3564),u=function(e){let{setNotify:t,setMessage:s}=e,[a,i]=(0,l.useState)(""),[n,o]=(0,l.useState)(!1),c={email:a};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("form",{onSubmit:e=>{e.preventDefault(),o(!0),fetch("https://moyinoluwa-portfolio.cyclic.app/subscribe",{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>{console.log(e.msg),t(!0),e.msg&&(s(e.msg),o(!1),setTimeout(()=>{t(!1)},8e3),i(""))}).catch(e=>console.log(e))},children:(0,r.jsxs)("div",{className:"w-full sm:max-w-lg",children:[(0,r.jsx)("div",{className:"form-container font-number text-black dark:text-white mb-3",children:(0,r.jsxs)("div",{className:"mb-3 w-full",children:[(0,r.jsx)("label",{htmlFor:"email",className:"mb-1 text-sm text-light text-neutral-500 dark:text-neutral-500 font-raleway",children:"Email"}),(0,r.jsx)("input",{id:"email",type:"email",autoComplete:"on",placeholder:"Email",required:!0,className:"w-full font-raleway rounded-md py-2.5 px-5 font-light text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border border-neutral-300 hover:border-neutral-700 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"})]})}),(0,r.jsx)("div",{className:"mt-5",children:(0,r.jsx)(d.Z,{action:()=>{},loading:n,text:"Subscribe",type:"submit"})})]})})})},h=function(e){let{setNotify:t,setMessage:s}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"dark:bg-[#191919] h-[88vh] w-full flex flex-col items-center justify-center",children:[(0,r.jsx)("h4",{className:"text-4xl md:text-6xl font-oleo font-light dark:text-neutral-400 text-black mb-2",children:"Do you want more?"}),(0,r.jsx)("p",{className:"text-sm sm:text-base text-center font-normal text-gray-700 dark:text-neutral-400 font-raleway mb-3 md:max-w-lg",children:"Stay updated with the latest Blogger tales, blogs and newsletters by subscribing to our mailing list."}),(0,r.jsx)("div",{className:"sm:w-full sm:max-w-lg",children:(0,r.jsx)(u,{setNotify:t,setMessage:s})})]})})},x=s(1871),m=s(8980),f=s(5601),b=s.n(f),p=s(706);function v(e){let{}=e,[t,s]=(0,l.useState)(!1),[o,d]=(0,l.useState)(""),{blogs:u,reviews:f}=i;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b(),{children:[(0,r.jsx)("title",{children:"Trending | Home"}),(0,r.jsx)("meta",{name:"description",content:"Blogger Tales"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),t&&(0,r.jsx)("div",{className:"fixed top-8 left-1/2 transform -translate-x-1/2 w-[300px] md:w-[450px] z-50 font-raleway",children:(0,r.jsxs)("div",{className:"w-full bg-black dark:bg-gray-100 flex items-center space-x-3 p-3 rounded-lg",children:[(0,r.jsx)("div",{className:"w-[60px] flex justify-center text-gray-100 dark:text-black",children:(0,r.jsx)("i",{className:"fas fa-gift fa-xl fa-fw"})}),(0,r.jsxs)("div",{className:"font-raleway",children:[(0,r.jsx)("h3",{className:"font-semibold text-lg font-raleway text-white dark:text-black",children:o}),(0,r.jsx)("p",{className:"text-sm font-raleway text-gray-100 dark:text-black",children:"You have successfully been able to subscribe to my blog, newsletter and updates feed for more interesting episodes."})]})]})}),(0,r.jsxs)("div",{className:"bg-white dark:bg-black/90 min-h-screen w-full cursor-black",children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(m.Z,{heading:{line1:"Information",line2:"at your Finger Tips."},text:"Ready to learn more? Dive into a world of playful, exciting, and interesting experience of my personal journey in the world of Tech.",data:u})}),(0,r.jsx)(n,{}),(0,r.jsxs)("div",{className:"md:container mx-auto !px-6 lg:px-0 font-raleway ",children:[(0,r.jsx)(c,{reviews:f}),(0,r.jsx)(h,{setNotify:s,setMessage:d})]}),(0,r.jsx)(x.Z,{})]})]})}},8980:function(e,t,s){"use strict";var r=s(3827);s(4090),t.Z=e=>{let{heading:t,text:s,data:l}=e;return(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[(0,r.jsx)("div",{className:"bg-white dark:bg-[#191919] h-[85vh] w-full flex flex-col justify-center",id:"search",children:(0,r.jsxs)("div",{className:"grid gap-y-4  mt-20",children:[(0,r.jsxs)("h1",{className:"text-5xl sm:text-7xl md:text-7xl text-black dark:text-neutral-200 font-clash font-[800]",children:[t.line1,(0,r.jsx)("br",{className:"xs:hidden md:block"})," ",t.line2]}),(0,r.jsx)("p",{className:"text-sm sm:text-base md:text-lg font-raleway font-normal dark:text-neutral-400 text-gray-800",children:s}),(0,r.jsxs)("div",{className:"space-x-4 ",children:[(0,r.jsx)("button",{className:"h-[3.5rem] w-[10rem] bg-black text-white rounded-[0.5rem] font-[500] ",children:"Read Now"}),(0,r.jsx)("button",{className:"h-[3.5rem] w-[10rem] border border-black text-black rounded-[0.5rem] font-[500] ",children:"Search"})]})]})}),(0,r.jsx)("div",{className:" h-[85vh] w-full flex justify-center items-center relative",children:(0,r.jsxs)("div",{className:"w-[500px] h-[500px] rounded-lg mt-20 grid place-items-center relative  ",children:[(0,r.jsx)("div",{className:"w-[400px] h-[400px] flex-shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#e6e6e6] border-opacity-50 rounded-lg"}),(0,r.jsx)("div",{className:"w-[400px] h-[400px] flex-shrink-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#e6e6e6] hover:border-[#646464] border-opacity-50 rounded-lg rotate-45 "}),(0,r.jsx)("div",{className:"w-[400px] h-[400px] bg-white flex-shrink-0  border border-[#646464] hover:border-black animate-spin border-opacity-50 -rotate-90 rounded-[50%]"}),(0,r.jsx)("img",{src:"/assets/Bust/peep-43.svg",className:"w-[300px] object-cover h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ",alt:"A vector illustration"})]})})]})}},9750:function(e,t,s){"use strict";var r=s(3827);s(4090);var l=s(8817);t.Z=e=>{let{color:t}=e;return(0,r.jsx)("div",{className:"grid place-items-center",children:(0,r.jsx)(l.s5,{strokeColor:t||"white",strokeWidth:"5",animationDuration:"0.75",width:"40",visible:!0})})}},3564:function(e,t,s){"use strict";var r=s(3827);s(4090);var l=s(9750);t.Z=function(e){let{loading:t,text:s,type:a,action:i}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{className:" bg-black dark:bg-neutral-800 dark:hover:bg-neutral-700 w-full h-[3.5rem] rounded-md font-raleway font-normal text-lg text-white dark:text-neutral-400 border border-black hover:shadow-xl hover:scale-105 ".concat(t?" h-[3.5rem] py-1 bg-black":"cursor-pointer"),type:a,disabled:t,onClick:()=>i(),children:t?(0,r.jsx)(l.Z,{}):s})})}},9848:function(e,t,s){"use strict";s.d(t,{yK:function(){return o},N9:function(){return c},Ps:function(){return l},c0:function(){return n},zn:function(){return a}});var r=s(4090);let l=function(e){let t=e,s=!1,r=new Set;return{getState:()=>t,updateState(e){t="function"==typeof e?e(t):e},setState(e){this.updateState(e),r.forEach(e=>e(t))},initialize(e){s||(t=e,s=!0)},subscribe:e=>(r.add(e),()=>r.delete(e))}}({notifications:[],queue:[],limit:5}),a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return(0,r.useSyncExternalStore)(e.subscribe,()=>e.getState(),()=>e.getState())};function i(e,t){let s=e.getState(),r=t([...s.notifications,...s.queue]);e.setState({notifications:r.slice(0,s.limit),queue:r.slice(s.limit),limit:s.limit})}function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,s=e.id||"mantine-".concat(Math.random().toString(36).slice(2,11));return i(t,t=>e.id&&t.some(t=>t.id===e.id)?t:[...t,{...e,id:s}]),s}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return i(t,t=>t.filter(t=>{if(t.id===e){var s;return null===(s=t.onClose)||void 0===s||s.call(t,t),!1}return!0})),e}let c={show:n,hide:o,update:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return i(t,t=>t.map(t=>t.id===e.id?{...t,...e}:t)),e.id},clean:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;i(e,()=>[])},cleanQueue:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;i(e,t=>t.slice(0,e.getState().limit))},updateState:i}},9575:function(e,t,s){"use strict";s.d(t,{D:function(){return k}});var r,l,a,i,n,o,c=s(4090),d=s(2731),u=s(8146),h=s(5577),x=s(4831),m=s(7920),f=s(1793),b=s(5139),p=s(4614),v=s(6063),g=(r=new WeakMap,l=new WeakMap,a=new WeakMap,i=new WeakMap,n=new WeakSet,o=new WeakSet,class extends p.l{bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;if(this.options=(0,d._)(this,r).defaultMutationOptions(e),(0,v.VS)(this.options,t)||(0,d._)(this,r).getMutationCache().notify({type:"observerOptionsUpdated",mutation:(0,d._)(this,a),observer:this}),(null==t?void 0:t.mutationKey)&&this.options.mutationKey&&(0,v.Ym)(t.mutationKey)!==(0,v.Ym)(this.options.mutationKey))this.reset();else{var s;null===(s=(0,d._)(this,a))||void 0===s||s.setOptions(this.options)}}onUnsubscribe(){if(!this.hasListeners()){var e;null===(e=(0,d._)(this,a))||void 0===e||e.removeObserver(this)}}onMutationUpdate(e){(0,x._)(this,n,j).call(this),(0,x._)(this,o,w).call(this,e)}getCurrentResult(){return(0,d._)(this,l)}reset(){var e;null===(e=(0,d._)(this,a))||void 0===e||e.removeObserver(this),(0,h._)(this,a,void 0),(0,x._)(this,n,j).call(this),(0,x._)(this,o,w).call(this)}mutate(e,t){var s;return(0,h._)(this,i,t),null===(s=(0,d._)(this,a))||void 0===s||s.removeObserver(this),(0,h._)(this,a,(0,d._)(this,r).getMutationCache().build((0,d._)(this,r),this.options)),(0,d._)(this,a).addObserver(this),(0,d._)(this,a).execute(e)}constructor(e,t){super(),(0,m._)(this,n),(0,m._)(this,o),(0,u._)(this,r,{writable:!0,value:void 0}),(0,u._)(this,l,{writable:!0,value:void 0}),(0,u._)(this,a,{writable:!0,value:void 0}),(0,u._)(this,i,{writable:!0,value:void 0}),(0,h._)(this,l,void 0),(0,h._)(this,r,e),this.setOptions(t),this.bindMethods(),(0,x._)(this,n,j).call(this)}});function j(){var e,t;let s=null!==(t=null===(e=(0,d._)(this,a))||void 0===e?void 0:e.state)&&void 0!==t?t:(0,f.R)();(0,h._)(this,l,{...s,isPending:"pending"===s.status,isSuccess:"success"===s.status,isError:"error"===s.status,isIdle:"idle"===s.status,mutate:this.mutate,reset:this.reset})}function w(e){b.V.batch(()=>{if((0,d._)(this,i)&&this.hasListeners()){var t,s,r,a,n,o,c,u;let h=(0,d._)(this,l).variables,x=(0,d._)(this,l).context;(null==e?void 0:e.type)==="success"?(null===(t=(s=(0,d._)(this,i)).onSuccess)||void 0===t||t.call(s,e.data,h,x),null===(r=(a=(0,d._)(this,i)).onSettled)||void 0===r||r.call(a,e.data,null,h,x)):(null==e?void 0:e.type)==="error"&&(null===(n=(o=(0,d._)(this,i)).onError)||void 0===n||n.call(o,e.error,h,x),null===(c=(u=(0,d._)(this,i)).onSettled)||void 0===c||c.call(u,void 0,e.error,h,x))}this.listeners.forEach(e=>{e((0,d._)(this,l))})})}var y=s(7082);function k(e,t){var s,r;let l=(0,y.NL)(t),[a]=c.useState(()=>new g(l,e));c.useEffect(()=>{a.setOptions(e)},[a,e]);let i=c.useSyncExternalStore(c.useCallback(e=>a.subscribe(b.V.batchCalls(e)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),n=c.useCallback((e,t)=>{a.mutate(e,t).catch(N)},[a]);if(i.error&&(s=a.options.throwOnError,r=[i.error],"function"==typeof s?s(...r):!!s))throw i.error;return{...i,mutate:n,mutateAsync:i.mutate}}function N(){}}},function(e){e.O(0,[700,993,395,817,891,971,69,744],function(){return e(e.s=4794)}),_N_E=e.O()}]);