(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5566:function(e,t,r){Promise.resolve().then(r.bind(r,8142)),Promise.resolve().then(r.bind(r,3798))},8142:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var a=r(7437),s=r(2265),n=r(7908),l=r(6795),o=r(4353);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,o.cn)("w-full caption-bottom text-sm",r),...s})})});i.displayName="Table";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("thead",{ref:t,className:(0,o.cn)("[&_tr]:border-b",r),...s})});d.displayName="TableHeader";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,o.cn)("[&_tr:last-child]:border-0",r),...s})});c.displayName="TableBody",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...s})}).displayName="TableFooter";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tr",{ref:t,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...s})});u.displayName="TableRow";let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("th",{ref:t,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...s})});f.displayName="TableHead";let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("td",{ref:t,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...s})});m.displayName="TableCell",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("caption",{ref:t,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",r),...s})}).displayName="TableCaption";var x=r(2936),p=r(2235);let h=x.fC,g=x.xz,b=x.h_;x.x8;let j=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(x.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...s})});j.displayName=x.aV.displayName;let v=s.forwardRef((e,t)=>{let{className:r,children:s,...n}=e;return(0,a.jsxs)(b,{children:[(0,a.jsx)(j,{}),(0,a.jsxs)(x.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid h-[100svh] overflow-scroll sm:overflow-hidden md:h-auto w-full max-w-sm sm:max-w-screen-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...n,children:[s,(0,a.jsxs)(x.x8,{className:"absolute right-8 top-8 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(p.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});v.displayName=x.VY.displayName;let y=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};y.displayName="DialogHeader";let N=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(x.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",r),...s})});N.displayName=x.Dx.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(x.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...s})}).displayName=x.dk.displayName;var w=r(8033),C=r(7056),k=r(9259),R=r(6181),_=r.n(R),z=e=>{let{id:t}=e,[r,n]=(0,s.useState)(),[o,i]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{(async()=>{try{i(!0);let e=await fetch("/api/code-snippets/".concat(t)),r=await e.json();console.log(r),n(r)}catch(e){console.error("Error fetching data:",e)}finally{i(!1)}})()},[]),(0,a.jsx)("div",{className:"container flex flex-col py-6",children:o?(0,a.jsx)("div",{className:"flex-1 flex items-center justify-center",children:(0,a.jsx)(_(),{})}):(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row gap-6",children:[(0,a.jsxs)("div",{className:"flex-1 flex flex-col space-y-2",children:[(0,a.jsx)(w._,{htmlFor:"code",children:"Source Code"}),(0,a.jsx)(C.g,{id:"code",placeholder:"Input your source code here",className:"min-h-[500px] resize-none",value:r.source_code,disabled:!0,readOnly:!0})]}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col space-y-2",children:[(0,a.jsx)(w._,{htmlFor:"username",children:"Username"}),(0,a.jsx)(l.I,{id:"username",placeholder:"Enter a username",value:r.username,disabled:!0,readOnly:!0}),(0,a.jsx)(w._,{htmlFor:"language",children:"Language"}),(0,a.jsxs)("div",{className:"flex items-center rounded-md p-1 text-sm font-semibold",children:[(0,a.jsx)(k.Z,{className:"mr-2 h-4 w-4"}),r.language]}),(0,a.jsx)(w._,{htmlFor:"input",children:"Input"}),(0,a.jsx)(C.g,{id:"input",placeholder:"Standard Input",className:"flex-1 resize-none",value:r.stdin,disabled:!0,readOnly:!0}),(0,a.jsx)(w._,{htmlFor:"output",children:"Ouput"}),(0,a.jsx)(C.g,{id:"output",placeholder:"Output",className:"flex-1 resize-none",value:r.output,disabled:!0,readOnly:!0})]})]})})},S=r(4590),T=()=>{let[e,t]=(0,s.useState)([]),[r,o]=(0,s.useState)(!1),[x,p]=(0,s.useState)(),[b,j]=(0,s.useState)(1),[w,C]=(0,s.useState)(1),k=async function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{o(!0);let s=await n.Z.get("/api/code-snippets?page=".concat(r,"&username=").concat(x)),{snippets:l,totalPages:i,currentPage:d}=s.data;console.log(s),a?t(l):t([...e,...l]),C(i),j(d+1)}catch(e){console.error("Error fetching code snippets:",e)}finally{o(!1)}},R=e=>{e.preventDefault(),k(1,!0)};return(0,s.useEffect)(()=>{k()},[]),(0,a.jsxs)("div",{className:"flex  flex-col g1",children:[(0,a.jsxs)("form",{onSubmit:R,className:"flex justify-center items-center gap-2",children:[(0,a.jsx)(l.I,{className:"my-2 sm:w-1/4 ml-auto",onChange:e=>p(e.target.value)}),(0,a.jsxs)("button",{type:"button",onClick:R,children:[" ",(0,a.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})]})]}),r?(0,a.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,a.jsx)(_(),{color:"#000",loading:!0,size:35})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i,{children:[(0,a.jsx)(d,{children:(0,a.jsxs)(u,{children:[(0,a.jsx)(f,{children:"ID"}),(0,a.jsx)(f,{children:"Username"}),(0,a.jsx)(f,{children:"Language"}),(0,a.jsx)(f,{children:"Timestamp"})]})}),(0,a.jsx)(c,{children:e.map(e=>(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{children:(0,a.jsxs)(h,{children:[(0,a.jsx)(g,{className:"text-blue-300",children:e.id}),(0,a.jsxs)(v,{children:[(0,a.jsx)(y,{children:(0,a.jsxs)(N,{children:["Submission ",e.id]})}),(0,a.jsx)(z,{id:e.id})]})]})}),(0,a.jsx)(m,{children:e.username}),(0,a.jsx)(m,{children:e.language}),(0,a.jsx)(m,{children:new Date(e.timestamp).toLocaleString()})]},e.id))})]}),b<=w&&(0,a.jsx)("div",{className:"text-center my-4",children:(0,a.jsxs)(S.z,{variant:"outline",onClick:()=>{b<=w&&k(b,!1)},children:["More "," ",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 15 15",children:(0,a.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.5 2a.5.5 0 0 1 .5.5v8.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7 11.293V2.5a.5.5 0 0 1 .5-.5",clipRule:"evenodd"})})]})})]})]})}},4590:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var a=r(7437),s=r(2265),n=r(9143),l=r(7742),o=r(4353);let i=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:l,asChild:d=!1,...c}=e,u=d?n.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:s,size:l,className:r})),ref:t,...c})});d.displayName="Button"},6795:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var a=r(7437),s=r(2265),n=r(4353);let l=s.forwardRef((e,t)=>{let{className:r,type:s,...l}=e;return(0,a.jsx)("input",{type:s,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ",r),ref:t,...l})});l.displayName="Input"},8033:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var a=r(7437),s=r(2265),n=r(4602),l=r(7742),o=r(4353);let i=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.f,{ref:t,className:(0,o.cn)(i(),r),...s})});d.displayName=n.f.displayName},3798:function(e,t,r){"use strict";r.r(t),r.d(t,{Separator:function(){return o}});var a=r(7437),s=r(2265),n=r(1014),l=r(4353);let o=s.forwardRef((e,t)=>{let{className:r,orientation:s="horizontal",decorative:o=!0,...i}=e;return(0,a.jsx)(n.f,{ref:t,decorative:o,orientation:s,className:(0,l.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",r),...i})});o.displayName=n.f.displayName},7056:function(e,t,r){"use strict";r.d(t,{g:function(){return l}});var a=r(7437),s=r(2265),n=r(4353);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("textarea",{className:(0,n.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed",r),ref:t,...s})});l.displayName="Textarea"},4353:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(3167),s=r(1367);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}},function(e){e.O(0,[148,143,527,971,69,744],function(){return e(e.s=5566)}),_N_E=e.O()}]);