(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6446:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=s(482),n=s(9108),a=s(2563),i=s.n(a),o=s(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,8068)),"/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/app/page.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1251)),"/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/app/page.jsx"],u="/page",h={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5545:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},4698:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,1900,23)),Promise.resolve().then(s.t.bind(s,1476,23)),Promise.resolve().then(s.bind(s,5263)),Promise.resolve().then(s.bind(s,7839)),Promise.resolve().then(s.bind(s,3213)),Promise.resolve().then(s.bind(s,785))},2384:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,1900,23)),Promise.resolve().then(s.t.bind(s,1476,23)),Promise.resolve().then(s.bind(s,6785))},5263:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(5344),n=s(6506),a=s(1885),i=s.n(a),o=s(3729);let l=()=>{let[e,t]=(0,o.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:i().burger,onClick:()=>t(!e),children:[r.jsx("div",{className:i().line}),r.jsx("div",{className:i().line}),r.jsx("div",{className:i().line})]}),e&&(0,r.jsxs)("div",{className:i().responsiveMenu,children:[r.jsx(n.default,{href:"/",className:i().link,children:"Homepage"}),r.jsx(n.default,{href:"/",className:i().link,children:"About"}),r.jsx(n.default,{href:"/",className:i().link,children:"Contact"})]})]})}},6785:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(5344);s(3729);var n=s(2317),a=s.n(n),i=s(4767);let o=({page:e,hasPrev:t,hasNext:s})=>{let n=(0,i.useRouter)();return(0,r.jsxs)("div",{className:a().container,children:[r.jsx("button",{className:a().button,disabled:!t,onClick:()=>n.push(`?page=${e-1}`),children:"Previous"}),r.jsx("button",{disabled:!s,className:a().button,onClick:()=>n.push(`?page=${e+1}`),children:"Next"})]})}},7839:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(5344),n=s(9410),a=s(4016),i=s.n(a),o=s(3729),l=s(3213);let c=()=>{let{toggle:e,theme:t}=(0,o.useContext)(l.ThemeContext);return(0,r.jsxs)("div",{className:i().container,onClick:e,style:"dark"===t?{backgroundColor:"white"}:{backgroundColor:"#0f172a"},children:[r.jsx(n.default,{src:"/moon.png",alt:"",width:14,height:14}),r.jsx("div",{className:i().ball,style:"dark"===t?{left:2.5,background:"#0f172a"}:{right:2.5,background:"white"}}),r.jsx(n.default,{src:"/sun.png",alt:"",width:14,height:14})]})}},3213:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ThemeContext:()=>a,ThemeContextProvider:()=>o});var r=s(5344),n=s(3729);let a=(0,n.createContext)(),i=()=>{},o=({children:e})=>{let[t,s]=(0,n.useState)(()=>i());return(0,n.useEffect)(()=>{localStorage.setItem("theme",t)},[t]),r.jsx(a.Provider,{value:{theme:t,toggle:()=>{s("light"===t?"dark":"light")}},children:e})}},785:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(5344),n=s(3213),a=s(3729);let i=({children:e})=>{let{theme:t}=(0,a.useContext)(n.ThemeContext),[s,i]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{i(!0)},[]),s)return r.jsx("div",{className:t,children:e})}},1960:e=>{e.exports={content:"homepage_content__m6Qf_"}},545:e=>{e.exports={container:"featured_container__9bUI6",title:"featured_title__rFWcP",desc:"featured_desc__gqm9e",post:"featured_post__sWkzO",imgContainer:"featured_imgContainer__phBYF",image:"featured_image__s8EnU",textContainer:"featured_textContainer__KZ18s",postTitle:"featured_postTitle__juEkV",postSubTitle:"featured_postSubTitle__KocwF",postDesc:"featured_postDesc__wsFpz",button:"featured_button__ufmSY"}},8699:e=>{e.exports={container:"footer_container__cL_uA",info:"footer_info__uKSJc",logo:"footer_logo__pe9i3",logoText:"footer_logoText__QUSlJ",desc:"footer_desc__4TFpC",icons:"footer_icons__owG1o",links:"footer_links__t81SU",link:"footer_link__GYo3a",list:"footer_list__TA6Rj",listTitle:"footer_listTitle__wUBPu"}},1885:e=>{e.exports={link:"hamburger_link__nEtdc",burger:"hamburger_burger__Er2jB",line:"hamburger_line__jMC_o",responsiveMenu:"hamburger_responsiveMenu___wGMm"}},9036:e=>{e.exports={container:"navbar_container__CZncu",social:"navbar_social__Zhp3T",logo:"navbar_logo__uZP7g",links:"navbar_links__zwFDW",link:"navbar_link__AyfKG"}},2317:e=>{e.exports={container:"pagination_container__MjtB3",button:"pagination_button__EHYZp"}},4016:e=>{e.exports={container:"themeToggle_container__qFM4I",ball:"themeToggle_ball__I_org"}},1251:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>D,metadata:()=>U});var r=s(5036),n=s(8545),a=s.n(n);s(5023),s(2);var i=s(9036),o=s.n(i),l=s(6274),c=s(6843);let d=(0,c.createProxy)(String.raw`/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/components/hamburger/Hamburger.jsx`),{__esModule:u,$$typeof:h}=d,m=d.default,p=(0,c.createProxy)(String.raw`/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/components/themeToggle/ThemeToggle.jsx`),{__esModule:x,$$typeof:_}=p,j=p.default,g=()=>(0,r.jsxs)("div",{className:o().container,children:[r.jsx("div",{className:o().logo,children:r.jsx(l.default,{href:"/",children:"Virt\xf9"})}),(0,r.jsxs)("div",{className:o().links,children:[r.jsx(j,{}),r.jsx(l.default,{href:"/",className:o().link,children:"Home"}),r.jsx(l.default,{href:"/submit",className:o().link,children:"Submit"}),r.jsx(l.default,{href:"/about",className:o().link,children:"About"}),r.jsx(m,{})]})]});var f=s(8699),b=s.n(f),v=s(2813);let k=()=>(0,r.jsxs)("div",{className:b().container,children:[(0,r.jsxs)("div",{className:b().info,children:[(0,r.jsxs)("div",{className:b().logo,children:[r.jsx(v.default,{src:"/Virtu_small.png",alt:"Virt\xf9 logo",width:50,height:50}),r.jsx("h1",{className:b().logoText,children:"Virt\xf9"})]}),(0,r.jsxs)("p",{className:b().desc,children:["Virt\xf9, Macalester’s Journal of Transdisciplinary Explorations, is an annual publication led by students. I build this website so connect with me on"," ",r.jsx(l.default,{href:"https://www.linkedin.com/in/hien-trinh-b35a4a206/",rel:"noopener noreferrer",target:"_blank",children:"LinkedIn"})," ","if you're cool."]})]}),(0,r.jsxs)("div",{className:b().links,children:[(0,r.jsxs)("div",{className:b().list,children:[r.jsx("span",{className:b().listTitle,children:"Links"}),r.jsx(l.default,{href:"/",className:b().link,children:"Homepage"}),r.jsx(l.default,{href:"/about",className:b().link,children:"About"}),r.jsx(l.default,{href:"/submit",className:b().link,children:"Submit"})]}),(0,r.jsxs)("div",{className:b().list,children:[r.jsx("span",{className:b().listTitle,children:"About"}),r.jsx(l.default,{href:"/about/charter",children:"Charter"}),r.jsx(l.default,{href:"/about/team",children:"Team"}),r.jsx(l.default,{href:"/about/theme",children:"Theme"})]}),(0,r.jsxs)("div",{className:b().list,children:[r.jsx("span",{className:b().listTitle,children:"Social"}),r.jsx(l.default,{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",rel:"noopener noreferrer",target:"_blank",className:b().link,children:"Facebook"}),r.jsx(l.default,{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",rel:"noopener noreferrer",target:"_blank",className:b().link,children:"Instagram"}),r.jsx(l.default,{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",rel:"noopener noreferrer",target:"_blank",className:b().link,children:"Tiktok"})]})]})]}),N=(0,c.createProxy)(String.raw`/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/context/ThemeContext.jsx`),{__esModule:w,$$typeof:P}=N;N.default,(0,c.createProxy)(String.raw`/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/context/ThemeContext.jsx#ThemeContext`);let y=(0,c.createProxy)(String.raw`/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/context/ThemeContext.jsx#ThemeContextProvider`),T=(0,c.createProxy)(String.raw`/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/providers/ThemeProvider.jsx`),{__esModule:C,$$typeof:S}=T,V=T.default,U={title:"Virt\xf9",description:"David is the best."};function D({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:a().className,children:r.jsx(y,{children:r.jsx(V,{children:r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"wrapper",children:[r.jsx(g,{}),e,r.jsx(k,{})]})})})})})})}},8068:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(5036),n=s(1960),a=s.n(n);s(2);var i=s(545),o=s.n(i),l=s(2813),c=s(6274);let d=()=>(0,r.jsxs)("div",{className:o().container,children:[r.jsx("h1",{className:o().title,children:r.jsx("b",{children:""})}),r.jsx("p",{className:o().desc,children:""}),(0,r.jsxs)("div",{className:o().post,children:[r.jsx("div",{className:o().imgContainer,children:r.jsx(l.default,{src:"/Virtu_large.png",alt:"Virt\xf9 logo",fill:!0,className:o().image})}),(0,r.jsxs)("div",{className:o().textContainer,children:[r.jsx("h1",{className:o().postTitle,children:"Virt\xf9"}),r.jsx("p",{className:o().postSubTitle,children:"Journal of Transdisciplinary Studies"}),r.jsx("p",{className:o().postDesc,children:"Virt\xf9, Macalester’s Journal of Transdisciplinary Explorations, is an annual publication led by students. Virt\xf9 serves as a platform for showcasing original works of literature, art, and research that align with a designated theme for each edition. Virt\xf9 strives to unite various perspectives and experiences from the Macalester community and beyond. The journal's overarching objective is to reveal universal truths that resonate with its readers and writers, promoting clarity and understanding across diverse cultures, borders, academic disciplines, and all manner of divisions."}),r.jsx(c.default,{href:"/about",className:o().button,children:"Read More"})]})]})]}),u=(0,s(6843).createProxy)(String.raw`/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/components/pagination/Pagination.jsx`),{__esModule:h,$$typeof:m}=u;function p({searchParams:e}){return r.jsx("div",{className:a().container,children:r.jsx(d,{})})}u.default},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,277,337],()=>s(6446));module.exports=r})();