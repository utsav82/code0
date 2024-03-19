(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9770:function(e,t,r){Promise.resolve().then(r.bind(r,3318)),Promise.resolve().then(r.bind(r,3798))},3318:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var a=r(7437),s=r(2265),n=r(7908),l=r(4353);let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",r),...s})})});o.displayName="Table";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",r),...s})});d.displayName="TableHeader";let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",r),...s})});i.displayName="TableBody",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...s})}).displayName="TableFooter";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...s})});c.displayName="TableRow";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("th",{ref:t,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...s})});u.displayName="TableHead";let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("td",{ref:t,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...s})});f.displayName="TableCell",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",r),...s})}).displayName="TableCaption";var m=r(2936),x=r(2235);let p=m.fC,h=m.xz,g=m.h_;m.x8;let b=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(m.aV,{ref:t,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...s})});b.displayName=m.aV.displayName;let j=s.forwardRef((e,t)=>{let{className:r,children:s,...n}=e;return(0,a.jsxs)(g,{children:[(0,a.jsx)(b,{}),(0,a.jsxs)(m.VY,{ref:t,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...n,children:[s,(0,a.jsxs)(m.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(x.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});j.displayName=m.VY.displayName;let v=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};v.displayName="DialogHeader";let y=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(m.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",r),...s})});y.displayName=m.Dx.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(m.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...s})}).displayName=m.dk.displayName;var N=r(8033),w=r(7056),k=r(6795),R=r(9259),_=r(6181),z=r.n(_),S=e=>{let{username:t,language:r,source_code:n,stdin:l,token:o}=e,[d,i]=(0,s.useState)(),[c,u]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{(async()=>{try{u(!0);let e=await fetch("/api/code-snippets/".concat(o)),t=await e.json();i(t.output)}catch(e){console.error("Error fetching data:",e)}finally{u(!1)}})()},[]),(0,a.jsx)("div",{className:"container flex flex-col py-6",children:(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row gap-6",children:[(0,a.jsxs)("div",{className:"flex-1 flex flex-col space-y-2",children:[(0,a.jsx)(N._,{htmlFor:"code",children:"Source Code"}),(0,a.jsx)(w.g,{id:"code",placeholder:"Input your source code here",className:"min-h-[500px] resize-none",value:n,disabled:!0,readOnly:!0})]}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col space-y-2",children:[(0,a.jsx)(N._,{htmlFor:"username",children:"Username"}),(0,a.jsx)(k.I,{id:"username",placeholder:"Enter a username",value:t,disabled:!0,readOnly:!0}),(0,a.jsx)(N._,{htmlFor:"language",children:"Language"}),(0,a.jsxs)("div",{className:"flex items-center rounded-md p-1 text-sm font-semibold",children:[(0,a.jsx)(R.Z,{className:"mr-2 h-4 w-4"}),r]}),(0,a.jsx)(N._,{htmlFor:"input",children:"Input"}),(0,a.jsx)(w.g,{id:"input",placeholder:"Standard Input",className:"flex-1 resize-none",value:l,disabled:!0,readOnly:!0}),(0,a.jsx)(N._,{htmlFor:"output",children:"Ouput"}),c?(0,a.jsx)("div",{className:"flex-1 flex items-center justify-center",children:(0,a.jsx)(z(),{})}):(0,a.jsx)(w.g,{id:"output",placeholder:"Output",className:"flex-1 resize-none",value:d,disabled:!0,readOnly:!0})]})]})})},T=r(4590),C=()=>{let[e,t]=(0,s.useState)([]),[r,l]=(0,s.useState)(1),[m,x]=(0,s.useState)(1),g=async()=>{try{let{snippets:a,totalPages:s,currentPage:o}=(await n.Z.get("/api/code-snippets?page=".concat(r))).data;t([...e,...a]),x(s),l(o+1)}catch(e){console.error("Error fetching code snippets:",e)}};return(0,s.useEffect)(()=>{g()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o,{children:[(0,a.jsx)(d,{children:(0,a.jsxs)(c,{children:[(0,a.jsx)(u,{children:"ID"}),(0,a.jsx)(u,{children:"Username"}),(0,a.jsx)(u,{children:"Language"}),(0,a.jsx)(u,{children:"Timestamp"})]})}),(0,a.jsx)(i,{children:e.map(e=>(0,a.jsxs)(c,{children:[(0,a.jsx)(f,{children:(0,a.jsxs)(p,{children:[(0,a.jsx)(h,{className:"text-blue-300",children:e.id}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:(0,a.jsxs)(y,{children:["Submission ",e.id]})}),(0,a.jsx)(S,{...e})]})]})}),(0,a.jsx)(f,{children:e.username}),(0,a.jsx)(f,{children:e.language}),(0,a.jsx)(f,{children:new Date(e.timestamp).toLocaleString()})]},e.id))})]}),r<=m&&(0,a.jsx)("div",{className:"text-center my-4",children:(0,a.jsxs)(T.z,{variant:"outline",onClick:()=>{r<=m&&g()},children:["More "," ",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 15 15",children:(0,a.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.5 2a.5.5 0 0 1 .5.5v8.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7 11.293V2.5a.5.5 0 0 1 .5-.5",clipRule:"evenodd"})})]})})]})}},4590:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var a=r(7437),s=r(2265),n=r(9143),l=r(7742),o=r(4353);let d=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),i=s.forwardRef((e,t)=>{let{className:r,variant:s,size:l,asChild:i=!1,...c}=e,u=i?n.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(d({variant:s,size:l,className:r})),ref:t,...c})});i.displayName="Button"},6795:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var a=r(7437),s=r(2265),n=r(4353);let l=s.forwardRef((e,t)=>{let{className:r,type:s,...l}=e;return(0,a.jsx)("input",{type:s,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ",r),ref:t,...l})});l.displayName="Input"},8033:function(e,t,r){"use strict";r.d(t,{_:function(){return i}});var a=r(7437),s=r(2265),n=r(4602),l=r(7742),o=r(4353);let d=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.f,{ref:t,className:(0,o.cn)(d(),r),...s})});i.displayName=n.f.displayName},3798:function(e,t,r){"use strict";r.r(t),r.d(t,{Separator:function(){return o}});var a=r(7437),s=r(2265),n=r(1014),l=r(4353);let o=s.forwardRef((e,t)=>{let{className:r,orientation:s="horizontal",decorative:o=!0,...d}=e;return(0,a.jsx)(n.f,{ref:t,decorative:o,orientation:s,className:(0,l.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",r),...d})});o.displayName=n.f.displayName},7056:function(e,t,r){"use strict";r.d(t,{g:function(){return l}});var a=r(7437),s=r(2265),n=r(4353);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("textarea",{className:(0,n.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed",r),ref:t,...s})});l.displayName="Textarea"},4353:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(3167),s=r(1367);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}},function(e){e.O(0,[148,143,527,971,69,744],function(){return e(e.s=9770)}),_N_E=e.O()}]);