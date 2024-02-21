(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{256:function(e,s,r){Promise.resolve().then(r.bind(r,6303))},6303:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return q}});var a=r(3827),t=r(4090),l=r(4145),i=r(2670),n=r(2583),d=r(3564),c=r(8792),o=r(1991);let m=o.Ry().shape({avatarId:o.Rx().required("Avatar is required"),firstName:o.Z_().required("First name is required"),lastName:o.Z_().required("Last name is required"),userName:o.Z_().required("Username is required"),email:o.Z_().email("Invalid email").required("Email is required"),password:o.Z_().required("Password is required").min(8,"Password must be at least 8 characters")});var u=r(7957),x=r(7159),h=r(4753),p=r(9575),v=r(1209),f=r(7086),j=function(e){var s,r,t,l,o;let{}=e,j=(0,v.C)(e=>e.user.avatarId),g=(0,x.T)(),{register:N,getValues:y,handleSubmit:b,formState:{errors:w}}=(0,i.cI)({defaultValues:{avatarId:j},resolver:(0,u.X)(m),mode:"all"}),S=(0,p.D)({mutationFn:async e=>{let s={...e,avatarId:j};return await (0,f.IU)(s)},onSuccess:e=>{g((0,h.Ws)()),console.log(e),g((0,h.mb)(y("email")))},onError:e=>{console.log(e)}}),k=async e=>{S.mutate(e)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"text-sm sm:text-base md:text-2xl font-normal md:font-medium text-gray-700 dark:text-neutral-400 font-raleway mb-3",children:"It's Easy, Sign Up."}),(0,a.jsx)("form",{onSubmit:b(k),children:(0,a.jsxs)("div",{className:"w-full sm:w-[350px]",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)(n.Z,{id:"username",type:"text",label:"First Name",placeholder:"",name:"firstName",register:N,error:null===(s=w.firstName)||void 0===s?void 0:s.message}),(0,a.jsx)(n.Z,{id:"username",type:"text",label:"Last Name",placeholder:"",name:"lastName",register:N,error:null===(r=w.firstName)||void 0===r?void 0:r.message})]}),(0,a.jsx)(n.Z,{id:"email",type:"email",label:"Email Address",placeholder:"",name:"email",register:N,error:null===(t=w.email)||void 0===t?void 0:t.message}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)(n.Z,{id:"username",type:"text",label:"Username",placeholder:"",name:"userName",register:N,error:null===(l=w.userName)||void 0===l?void 0:l.message}),(0,a.jsx)(n.Z,{id:"password",type:"password",label:"Password",placeholder:"",name:"password",register:N,error:null===(o=w.password)||void 0===o?void 0:o.message})]}),(0,a.jsx)("div",{className:"my-2",children:(0,a.jsxs)("p",{className:"text-xs text-neutral-400 font-raleway",children:["You agree to our"," ",(0,a.jsx)(c.default,{href:"/terms",children:(0,a.jsx)("span",{className:"text-black dark:text-white",children:"Terms of Service"})})," ","and"," ",(0,a.jsx)(c.default,{href:"/privacy",children:(0,a.jsx)("span",{className:"text-black dark:text-white",children:"Privacy Policy"})})]})}),(0,a.jsx)("div",{className:"mt-3",children:(0,a.jsx)(d.Z,{loading:S.isPending,text:"Sign Up",type:"submit",action:()=>{}})}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)(c.default,{href:"/login",className:"text-sm font-raleway text-neutral-400 hover:text-black  cursor-pointer",children:"Already have an account? Login."})})]})})]})},g=r(9750);let N=o.Ry().shape({code:o.Rx().typeError("Should be a number").min(1e3,"Should be 4 digits").required("Code is required")});var y=r(7907),b=()=>{let e=(0,y.useRouter)(),[s,r]=(0,t.useState)(!1),[l,n]=(0,t.useState)(!1);(0,x.T)();let d=(0,v.C)(e=>e.authStep.selectedEmail),{handleSubmit:c,setValue:o,formState:{errors:m}}=(0,i.cI)({resolver:(0,u.X)(N)}),[h,p]=(0,t.useState)(["","","","","",""]),j=(0,t.useRef)([]),b=(e,s)=>{if(/^\d$/.test(s)){let a=[...h];if(a[e]=s,p(a),o("code",Number(a.join(""))),e<5){var r;null===(r=j.current[e+1])||void 0===r||r.focus()}}},w=(e,s)=>{if("Backspace"===s.key&&e>0&&!h[e]){var r;null===(r=j.current[e-1])||void 0===r||r.focus()}},S=async s=>{try{r(!0),await (0,f.lm)(d,s.code),e.push("/login")}catch(s){var a,t,l,i,n;"ERR_NETWORK"===s.code?console.log("hello "):(null===(l=s.response)||void 0===l?void 0:null===(t=l.data)||void 0===t?void 0:null===(a=t.returnedUser)||void 0===a?void 0:a.verified)===!1?e.push("/signup"):console.log(null===(n=s.response)||void 0===n?void 0:null===(i=n.data)||void 0===i?void 0:i.message)}finally{r(!1)}},k=async()=>{try{n(!0),await (0,f.Rv)(d)}catch(e){}finally{n(!1)}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("form",{onSubmit:c(S),children:(0,a.jsxs)("div",{className:"grid gap-y-[1rem]",children:[(0,a.jsxs)("div",{className:" ",children:[(0,a.jsxs)("div",{className:"space-y-1 pb-4 ",children:[(0,a.jsx)("h1",{className:"font-semibold text-[1.5rem]",children:"Complete your sign up"}),(0,a.jsx)("p",{className:"text-sm ",children:"Enter the 6-digit code that we sent to your email"})]}),(0,a.jsx)("div",{className:"grid ",children:(0,a.jsx)("div",{className:"w-full flex items-center gap-x-2",children:h.map((e,s)=>(0,a.jsx)("input",{type:"text",name:"otp-".concat(s),id:"otp-".concat(s),maxLength:1,className:"h-[3.5rem] w-[3.5rem] border rounded-lg text-[2rem] text-[#000] flex items-center justify-center pl-[1.25rem]",value:e,onChange:e=>b(s,e.target.value),onKeyDown:e=>w(s,e),ref:e=>j.current[s]=e},s))})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"text-center mb-[1.25rem]",children:["Didn't receive the code?"," ",(0,a.jsx)("button",{type:"button",disabled:l,onClick:()=>k(),className:"text-[#000] font-[500] ",children:(0,a.jsx)("span",{children:"Resend"})})]}),(0,a.jsx)("div",{className:"grid place-items-center",children:(0,a.jsx)("button",{type:"submit",disabled:s,className:"h-[3.5rem] w-full max-w-[21rem] bg-[#000] text-white text-lg font-semibold rounded-[0.5rem] ",children:s?(0,a.jsx)(g.Z,{}):(0,a.jsx)("span",{children:"Verify Email"})})})]})]})})})},w=r(1348),S=()=>{let e=(0,x.T)(),s=(0,v.C)(e=>e.authStep.step);return(0,t.useEffect)(()=>()=>{e((0,h.pT)())},[e]),(0,a.jsx)("div",{className:"max-w-[30rem] mx-auto overflow-x-hidden",children:(0,a.jsx)(w.M,{mode:"wait",children:(()=>{switch(s){case 0:return(0,a.jsx)(j,{});case 1:return(0,a.jsx)(b,{})}})()})})},k=r(1141),q=e=>{let s=(0,v.C)(e=>e.authStep.step);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.default,{form:0===s?"signup":"login",children:[(0,a.jsx)(S,{}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("p",{className:"text-sm mb-2 text-neutral-500",children:"Sign up with"}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,a.jsx)(k.Z,{link:"https://google.com",text:"Google"}),(0,a.jsx)(k.Z,{link:"https://apple.com",text:"Apple"})]})]})]})})}}},function(e){e.O(0,[700,993,395,504,817,670,301,955,971,69,744],function(){return e(e.s=256)}),_N_E=e.O()}]);