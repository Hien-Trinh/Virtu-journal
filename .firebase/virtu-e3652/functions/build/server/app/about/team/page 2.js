(()=>{var e={};e.id=26,e.ids=[26],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1524:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>_,tree:()=>d});var r=a(482),s=a(9108),i=a(2563),n=a.n(i),o=a(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);a.d(t,l);let d=["",{children:["about",{children:["team",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,8953)),"/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/app/about/team/page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,1251)),"/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/app/about/team/page.jsx"],m="/about/team/page",u={require:a,loadChunk:()=>Promise.resolve()},_=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/about/team/page",pathname:"/about/team",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1965:(e,t,a)=>{Promise.resolve().then(a.bind(a,8709))},8709:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(5344),s=a(1353),i=a.n(s),n=a(5610),o=a(9848);let l=()=>(0,r.jsxs)("div",{className:i().container,children:[r.jsx(n.Z,{}),(0,r.jsxs)("div",{className:i().content,children:[(0,r.jsxs)("div",{className:i().teamContent,children:[r.jsx("h1",{className:i().title,children:"Meet the Team"}),r.jsx("div",{className:i().teamList,children:[{_id:1,name:"Walter Moore",role:"Founder & Content Editor",major:"International Studies",year:"First-Year"},{_id:2,name:"Khant Wai Yan",role:"Founder & Managerial Editor",major:"International Studies",year:"Junior"},{_id:3,name:"Dean Hu",role:"Content Writer",major:"International Studies",year:"Sophomore"},{_id:4,name:"Katie Whelan",role:"Assistant Editor",major:"International Studies",year:"First-year"},{_id:5,name:"Sydney Stratton",role:"Assistant Editor",major:"International Studies",year:"First-year"},{_id:6,name:"Cole Conklin",role:"Secretary",major:"International Studies",year:"First-year"},{_id:7,name:"Colette Lawler",role:"Assistant Editor",major:"Undecided",year:"First-year"},{_id:8,name:"Nini Yiu",role:"Associate Editor",major:"English Literature",year:"Senior"},{_id:9,name:"David Trinh",role:"Technologist & Walter's Roommate",major:"Computer Science",year:"First-year"},{_id:10,name:"Nanami Chesen",role:"Outreach Coordinator",major:"International Studies",year:"Sophomore"},{_id:11,name:"Adam Rose",role:"Content Writer",major:"English Literature",year:"Senior"},{_id:12,name:"Yosephine Manihuruk",role:"Associate Editor",major:"International Studies",year:"Sophomore"}].map(e=>r.jsxs("div",{children:[r.jsxs("div",{className:i().detail,children:[r.jsxs("span",{className:i().major,children:[e.major," -"," "]}),r.jsx("span",{className:i().category,children:e.year})]}),r.jsxs("div",{className:i().textContainer,children:[r.jsx("h2",{children:e.name}),r.jsx("h2",{className:i().role,children:e.role})]})]},e._id))})]}),r.jsx(o.Z,{currentPage:"Team"})]})]})},9848:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(5344),s=a(3729),i=a(5795),n=a.n(i),o=a(6506);let l=({currentPage:e})=>{let[t,a]=(0,s.useState)(0),i=()=>{a(window.scrollY)};return(0,s.useEffect)(()=>(window.addEventListener("scroll",i,{passive:!0}),()=>{window.removeEventListener("scroll",i)}),[]),r.jsx("div",{className:n().container,children:(0,r.jsxs)("div",{className:t+100>497.5?n().sticky:null,children:[r.jsx("h2",{className:n().subtitle,children:e}),r.jsx(o.default,{href:"/about",className:n().link,children:r.jsx("h1",{className:n().title,children:"About"})}),(0,r.jsxs)("div",{className:n().categoryList,children:[r.jsx(o.default,{href:"/about/charter",className:`${n().categoryItem} ${n().charter}`,children:"Charter"}),r.jsx(o.default,{href:"/about/team",className:`${n().categoryItem} ${n().team}`,children:"Team"}),r.jsx(o.default,{href:"/about/theme",className:`${n().categoryItem} ${n().theme}`,children:"Theme"}),r.jsx(o.default,{href:"/blog",className:`${n().categoryItem} ${n().travel}`,children:"Travel"}),r.jsx(o.default,{href:"/blog",className:`${n().categoryItem} ${n().culture}`,children:"Culture"}),r.jsx(o.default,{href:"/blog",className:`${n().categoryItem} ${n().coding}`,children:"Coding"})]})]})})}},5610:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var r=a(5344),s=a(6791),i=a.n(s),n=a(9410);let o=()=>(0,r.jsxs)("div",{className:i().container,children:[r.jsx("h1",{className:i().title,children:"Virt\xf9"}),r.jsx("p",{className:i().subtitle,children:"Journal of Transdisciplinary Explorations"}),r.jsx("div",{className:i().imgContainer,children:r.jsx(n.default,{src:"/Virtu_large.png",alt:"Virt\xf9 logo",height:200,width:200,className:i().image})})]})},1353:e=>{e.exports={content:"teamPage_content__ToPjs",teamContent:"teamPage_teamContent__wrtJB",title:"teamPage_title__lAlNQ",textContainer:"teamPage_textContainer__t1jQ2",teamList:"teamPage_teamList__aNeOm",detail:"teamPage_detail__NQe1x",category:"teamPage_category__ZQ_JV",major:"teamPage_major__SYCyh",role:"teamPage_role__tA5TS"}},5795:e=>{e.exports={container:"sideMenu_container__3ObqN",sticky:"sideMenu_sticky__2DbFz",title:"sideMenu_title__KRAci",subtitle:"sideMenu_subtitle__DkLx8",categoryList:"sideMenu_categoryList__uDGWT",categoryItem:"sideMenu_categoryItem__kGst7",charter:"sideMenu_charter__wYqlW",team:"sideMenu_team__TmOM8",theme:"sideMenu_theme__0ksTH",travel:"sideMenu_travel__9hSwo",culture:"sideMenu_culture___UoKK",coding:"sideMenu_coding__M8fts"}},6791:e=>{e.exports={container:"header_container__08ePU",title:"header_title__j__TZ",subtitle:"header_subtitle__W81A6",imgContainer:"header_imgContainer__Qp97o"}},8953:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>i,__esModule:()=>s,default:()=>n});let r=(0,a(6843).createProxy)(String.raw`/Users/hientrinh/Desktop/nextjs-projects/Virtu-journal/src/app/about/team/page.jsx`),{__esModule:s,$$typeof:i}=r,n=r.default},3881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[638,277,337,560],()=>a(1524));module.exports=r})();