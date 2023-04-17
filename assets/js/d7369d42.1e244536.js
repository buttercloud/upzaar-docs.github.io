"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[113],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,c(c({ref:t},i),{},{components:r})):a.createElement(f,c({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6537:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var a=r(7462),n=r(7294),o=r(3905);const c={id:"create-account",title:"create_account",hide_table_of_contents:!1},l=void 0,s={unversionedId:"docs/reference/mutations/create-account",id:"docs/reference/mutations/create-account",title:"create_account",description:"Create a customer user account",source:"@site/docs/docs/reference/mutations/create-account.mdx",sourceDirName:"docs/reference/mutations",slug:"/docs/reference/mutations/create-account",permalink:"/docs/docs/reference/mutations/create-account",draft:!1,tags:[],version:"current",frontMatter:{id:"create-account",title:"create_account",hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"collect_points",permalink:"/docs/docs/reference/mutations/collect-points"},next:{title:"create_reward",permalink:"/docs/docs/reference/mutations/create-reward"}},u={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>create_account.<b>data</b></code><Bullet /><code>CustomerAttributes!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-create_accountbdatabcodecustomerattributes--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateCustomerUserPayload</code> <Badge class="secondary" text="object"/>',id:"createcustomeruserpayload-",level:4}],d=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:d,SpecifiedBy:p,Badge:m};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a customer user account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"create_account(\n  data: CustomerAttributes!\n): CreateCustomerUserPayload\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-create_accountbdatabcodecustomerattributes--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"create_account.",(0,o.kt)("b",null,"data"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/inputs/customer-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomerAttributes!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"createcustomeruserpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/objects/create-customer-user-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateCustomerUserPayload"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of CreateCustomerUser")))}y.isMDXComponent=!0}}]);