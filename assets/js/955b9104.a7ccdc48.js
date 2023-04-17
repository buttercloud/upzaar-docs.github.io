"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[3495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},y="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),y=s(n),p=r,u=y["".concat(i,".").concat(p)]||y[p]||f[p]||l;return n?o.createElement(u,a(a({ref:t},d),{},{components:n})):o.createElement(u,a({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[y]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5889:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>y,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(7462),r=n(7294),l=n(3905);const a={id:"loyalty-config",title:"LoyaltyConfig",hide_table_of_contents:!1},c=void 0,i={unversionedId:"docs/reference/objects/loyalty-config",id:"docs/reference/objects/loyalty-config",title:"LoyaltyConfig",description:"No description",source:"@site/docs/docs/reference/objects/loyalty-config.mdx",sourceDirName:"docs/reference/objects",slug:"/docs/reference/objects/loyalty-config",permalink:"/docs/docs/reference/objects/loyalty-config",draft:!1,tags:[],version:"current",frontMatter:{id:"loyalty-config",title:"LoyaltyConfig",hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"LoyaltyBenefit",permalink:"/docs/docs/reference/objects/loyalty-benefit"},next:{title:"LoyaltyInfo",permalink:"/docs/docs/reference/objects/loyalty-info"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyConfig.<b>errors</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyconfigberrorsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyConfig.<b>multiplier</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyconfigbmultiplierbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyConfig.<b>points_per_visit</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyconfigbpoints_per_visitbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],y=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:d,Bullet:y,SpecifiedBy:f,Badge:p};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type LoyaltyConfig {\n  errors: [String!]\n  multiplier: Int!\n  points_per_visit: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyconfigberrorsbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyConfig.",(0,l.kt)("b",null,"errors"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,l.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyconfigbmultiplierbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyConfig.",(0,l.kt)("b",null,"multiplier"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyconfigbpoints_per_visitbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyConfig.",(0,l.kt)("b",null,"points_per_visit"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/reference/objects/loyalty-settings"},(0,l.kt)("inlineCode",{parentName:"a"},"LoyaltySettings")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);