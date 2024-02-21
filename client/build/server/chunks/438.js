exports.id=438,exports.ids=[438],exports.modules={2072:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},6677:(e,t,s)=>{Promise.resolve().then(s.bind(s,4190))},8428:(e,t,s)=>{"use strict";var r=s(4767);s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},4190:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>C});var r=s(5344),i=s(2438),a=s.n(i),o=s(9979),n=s.n(o);s(3824),s(6477);var l=s(978),u=s.n(l),c=s(3729);let d=()=>"light",h=(0,c.createContext)({theme:"light",setTheme:()=>{}}),p=({initialTheme:e,children:t})=>{let[s,i]=(0,c.useState)(d),a=e=>{window.document.documentElement,localStorage.setItem("current-theme","light")};return(0,c.useEffect)(()=>{e&&a(e),a(s)},[e,s]),r.jsx(h.Provider,{value:{theme:s,setTheme:i},children:t})};var m=s(2322),b=s(6744),v=s(1271),f=s(5810),x=s(8381),w=s(60),y=s(6354),S=s(7494),g=s(4221);let P=(0,b.UY)({authStep:f.ZP,passwordRecoveryStep:w.ZP,mobileSidebar:y.ZP,user:x.ZP,searchBox:S.ZP,arrangement:g.ZP}),M=(0,v.xC)({reducer:(e,t)=>("user/logoutUser"===t.type&&(e=void 0),P(e,t)),devTools:!0});var R=s(3952),E=s(6274),j=s(8863),O=s(5927);let k=new R.S;function C({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)(u(),{children:[r.jsx("link",{rel:"stylesheet",href:"/assets/fontawesome-free-6.2.1-web/css/solid.css"}),r.jsx("link",{rel:"stylesheet",href:"/assets/fontawesome-free-6.2.1-web/css/all.css"}),r.jsx("link",{rel:"stylesheet",href:"/assets/fontawesome-free-6.2.1-web/css/brands.css"}),r.jsx("link",{rel:"stylesheet",href:"/assets/fontawesome-free-6.2.1-web/css/regular.css"}),r.jsx("link",{rel:"stylesheet",href:"/assets/fontawesome-free-6.2.1-web/css/fontawesome.css"})]},"app-head"),r.jsx("body",{className:`${a().className} ${n().className} `,children:(0,r.jsxs)(j.M,{withCssVariables:!0,children:[r.jsx(O.T,{position:"top-left",zIndex:2077}),r.jsx(E.aH,{client:k,children:r.jsx(m.zt,{store:M,children:r.jsx(p,{children:e})})})]})})]})}},6956:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(5344),i=s(6506);s(3729);let a=function({text:e,type:t,action:s,link:a}){return a?r.jsx(r.Fragment,{children:r.jsx(i.default,{href:a,children:r.jsx("div",{className:"text-neutral-400 text-center hover:text-black border border-neutral-400 hover:border-black rounded-lg w-full text-base md:text-lg py-2.5 px-6",children:e})})}):r.jsx("button",{className:"border hover:border-black rounded-lg w-full py-3 flex items-center justify-center text-neutral-400 text-sm md:text-base hover:text-black mb-3",type:t,onClick:s,children:e})}},3710:(e,t,s)=>{"use strict";s.d(t,{T:()=>r});let r=s(2322).I0},805:(e,t,s)=>{"use strict";s.d(t,{C:()=>r});let r=s(2322).v9},4221:(e,t,s)=>{"use strict";s.d(t,{Fi:()=>i,ZP:()=>a});let r=(0,s(1271).oM)({name:"arrangement",initialState:{value:"single"},reducers:{setArrangement:(e,t)=>{e.value=t.payload}}}),{setArrangement:i}=r.actions,a=r.reducer},5810:(e,t,s)=>{"use strict";s.d(t,{Ws:()=>i,ZP:()=>u,eJ:()=>o,mb:()=>l,pT:()=>n});let r=(0,s(1271).oM)({name:"authStep",initialState:{step:0,direction:"start",selectedEmail:""},reducers:{increaseAuthStep:e=>{e.step+=1,e.direction="next"},decreaseAuthStep:e=>{e.step-=1,e.direction="previous"},selectAuthStep:(e,t)=>{e.step=t.payload.step,e.direction=t.payload.direction},resetAuthStep:e=>{e.step=0,e.direction="start"},setAuthStepSelectedEmail:(e,t)=>{e.selectedEmail=t.payload}}}),{increaseAuthStep:i,decreaseAuthStep:a,selectAuthStep:o,resetAuthStep:n,setAuthStepSelectedEmail:l}=r.actions,u=r.reducer},6354:(e,t,s)=>{"use strict";s.d(t,{Gw:()=>i,Kw:()=>a,ZP:()=>o});let r=(0,s(1271).oM)({name:"mobileSidebar",initialState:{show:!1},reducers:{showMobileSidebar:e=>{e.show=!0},hideMobileSidebar:e=>{e.show=!1}}}),{showMobileSidebar:i,hideMobileSidebar:a}=r.actions,o=r.reducer},60:(e,t,s)=>{"use strict";s.d(t,{GH:()=>i,Ub:()=>a,Us:()=>n,ZP:()=>u});let r=(0,s(1271).oM)({name:"passwordRecoveryStep",initialState:{step:0,direction:"start",selectedEmail:""},reducers:{increasePasswordRecoveryStep:e=>{e.step+=1,e.direction="next"},decreasePasswordRecoveryStep:e=>{e.step-=1,e.direction="previous"},selectPasswordRecoveryStep:(e,t)=>{e.step=t.payload.step,e.direction=t.payload.direction},resetPasswordRecoveryStep:e=>{e.step=0,e.direction="start"},setPasswordRecoveryStepSelectedEmail:(e,t)=>{e.selectedEmail=t.payload}}}),{increasePasswordRecoveryStep:i,decreasePasswordRecoveryStep:a,selectPasswordRecoveryStep:o,resetPasswordRecoveryStep:n,setPasswordRecoveryStepSelectedEmail:l}=r.actions,u=r.reducer},7494:(e,t,s)=>{"use strict";s.d(t,{Lr:()=>a,ZP:()=>o,jV:()=>i});let r=(0,s(1271).oM)({name:"mobileSidebar",initialState:{show:!1},reducers:{showSearchBox:e=>{e.show=!0},hideSearchBox:e=>{e.show=!1}}}),{showSearchBox:i,hideSearchBox:a}=r.actions,o=r.reducer},8381:(e,t,s)=>{"use strict";s.d(t,{TX:()=>a,ZP:()=>l,cS:()=>n,nq:()=>o,pH:()=>i});let r=(0,s(1271).oM)({name:"user",initialState:{data:null,avatarId:null,networkError:!1,isLoading:!0,isNull:!1},reducers:{updateAvatarId:(e,t)=>{e.avatarId=t.payload},loginUser:(e,t)=>{e.data=t.payload,e.isLoading=!1,e.isNull=!1,e.networkError=!1},logoutUser:e=>{e.data=null,e.isLoading=!1,e.isNull=!0,e.networkError=!1},setUserWithNetworkError:e=>{e.data=null,e.isLoading=!1,e.isNull=!1,e.networkError=!0}}}),{loginUser:i,logoutUser:a,setUserWithNetworkError:o,updateAvatarId:n}=r.actions,l=r.reducer},5533:(e,t,s)=>{"use strict";s.d(t,{yd:()=>a,x4:()=>n,kS:()=>l,bi:()=>u,Rv:()=>c,IU:()=>o,lm:()=>d});var r=s(3608);let i=r.Z.create({baseURL:"http://localhost:5000",withCredentials:!0});r.Z.create({baseURL:`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`});let a=e=>i.post("/auth/avatar",{email:e}),o=e=>{let{firstName:t,lastName:s,userName:r,email:a,password:o,avatarId:n}=e;return i.post("/auth/register",{avatarId:n,firstName:t,lastName:s,userName:r,email:a,password:o})},n=(e,t)=>i.post("/auth/login",{email:e,password:t}),l=()=>i.post("/auth/logout",{}),u=()=>i.post("/auth/refresh",{}),c=e=>i.post("/auth/resend",{email:e}),d=(e,t)=>i.post("/auth/verify",{email:e,otp:t})},1342:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>o});let r=(0,s(6843).createProxy)(String.raw`/Users/toluwalope/Documents/GitHub/Blog App - Interview/client/src/app/layout.tsx`),{__esModule:i,$$typeof:a}=r,o=r.default},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(337);let i=e=>[{type:"image/x-icon",sizes:"421x421",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},3824:()=>{},5245:(e,t,s)=>{"use strict";s.d(t,{D:()=>c});var r=s(3729),i=s(9896),a=s(1466),o=s(57),n=s(8651),l=class extends o.l{#e;#t;#s;#r;constructor(e,t){super(),this.#t=void 0,this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,n.VS)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,n.Ym)(t.mutationKey)!==(0,n.Ym)(this.options.mutationKey)?this.reset():this.#s?.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#a(e)}getCurrentResult(){return this.#t}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#i(),this.#a()}mutate(e,t){return this.#r=t,this.#s?.removeObserver(this),this.#s=this.#e.getMutationCache().build(this.#e,this.options),this.#s.addObserver(this),this.#s.execute(e)}#i(){let e=this.#s?.state??(0,i.R)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#a(e){a.V.batch(()=>{if(this.#r&&this.hasListeners()){let t=this.#t.variables,s=this.#t.context;e?.type==="success"?(this.#r.onSuccess?.(e.data,t,s),this.#r.onSettled?.(e.data,null,t,s)):e?.type==="error"&&(this.#r.onError?.(e.error,t,s),this.#r.onSettled?.(void 0,e.error,t,s))}this.listeners.forEach(e=>{e(this.#t)})})}},u=s(6274);function c(e,t){var s,i;let o=(0,u.NL)(t),[n]=r.useState(()=>new l(o,e));r.useEffect(()=>{n.setOptions(e)},[n,e]);let c=r.useSyncExternalStore(r.useCallback(e=>n.subscribe(a.V.batchCalls(e)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),h=r.useCallback((e,t)=>{n.mutate(e,t).catch(d)},[n]);if(c.error&&(s=n.options.throwOnError,i=[c.error],"function"==typeof s?s(...i):!!s))throw c.error;return{...c,mutate:h,mutateAsync:c.mutate}}function d(){}}};