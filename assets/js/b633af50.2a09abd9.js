"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[9473],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),y=i(o),u=n,f=y["".concat(s,".").concat(u)]||y[u]||p[u]||r;return o?a.createElement(f,l(l({ref:t},d),{},{components:o})):a.createElement(f,l({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[y]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<r;i++)l[i]=o[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6354:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>u,Bullet:()=>y,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=o(7462),n=o(7294),r=o(3905);const l={id:"join-loyalty-payload",title:"JoinLoyaltyPayload",hide_table_of_contents:!1},c=void 0,s={unversionedId:"docs/reference/objects/join-loyalty-payload",id:"docs/reference/objects/join-loyalty-payload",title:"JoinLoyaltyPayload",description:"Autogenerated return type of JoinLoyalty",source:"@site/docs/docs/reference/objects/join-loyalty-payload.mdx",sourceDirName:"docs/reference/objects",slug:"/docs/reference/objects/join-loyalty-payload",permalink:"/docs/docs/reference/objects/join-loyalty-payload",draft:!1,tags:[],version:"current",frontMatter:{id:"join-loyalty-payload",title:"JoinLoyaltyPayload",hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"CustomerUser",permalink:"/docs/docs/reference/objects/customer-user"},next:{title:"Location",permalink:"/docs/docs/reference/objects/location"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>JoinLoyaltyPayload.<b>errors</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-joinloyaltypayloadberrorsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>JoinLoyaltyPayload.<b>status</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-joinloyaltypayloadbstatusbcodeboolean--",level:4},{value:"Returned by",id:"returned-by",level:3}],y=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:y,SpecifiedBy:p,Badge:u};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated return type of JoinLoyalty"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type JoinLoyaltyPayload {\n  errors: [String!]\n  status: Boolean!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-joinloyaltypayloadberrorsbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"JoinLoyaltyPayload.",(0,r.kt)("b",null,"errors"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,r.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-joinloyaltypayloadbstatusbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"JoinLoyaltyPayload.",(0,r.kt)("b",null,"status"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/mutations/join-loyalty"},(0,r.kt)("inlineCode",{parentName:"a"},"join_loyalty")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);