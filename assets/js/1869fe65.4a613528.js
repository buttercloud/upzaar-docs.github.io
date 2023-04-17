"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[7053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=c(r),m=n,p=y["".concat(s,".").concat(m)]||y[m]||u[m]||o;return r?a.createElement(p,l(l({ref:t},d),{},{components:r})):a.createElement(p,l({ref:t},d))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8387:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>y,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=r(7462),n=r(7294),o=r(3905);const l={id:"loyalty-tier-attributes",title:"LoyaltyTierAttributes",hide_table_of_contents:!1},i=void 0,s={unversionedId:"reference/inputs/loyalty-tier-attributes",id:"reference/inputs/loyalty-tier-attributes",title:"LoyaltyTierAttributes",description:"Attributes for creating a loyalty tier",source:"@site/docs/reference/inputs/loyalty-tier-attributes.mdx",sourceDirName:"reference/inputs",slug:"/reference/inputs/loyalty-tier-attributes",permalink:"/docs/reference/inputs/loyalty-tier-attributes",draft:!1,tags:[],version:"current",frontMatter:{id:"loyalty-tier-attributes",title:"LoyaltyTierAttributes",hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"LoyaltyRewardAttributes",permalink:"/docs/reference/inputs/loyalty-reward-attributes"},next:{title:"Mutations",permalink:"/docs/category/mutations-2"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyTierAttributes.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltytierattributesbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyTierAttributes.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltytierattributesbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyTierAttributes.<b>min_points</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltytierattributesbmin_pointsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyTierAttributes.<b>max_points</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltytierattributesbmax_pointsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyTierAttributes.<b>hidden_to_members</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltytierattributesbhidden_to_membersbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyTierAttributes.<b>loyalty_benefit_ids</b></code><Bullet /><code>[Int!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltytierattributesbloyalty_benefit_idsbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],y=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:d,Bullet:y,SpecifiedBy:u,Badge:m};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Attributes for creating a loyalty tier"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input LoyaltyTierAttributes {\n  name: String!\n  description: String\n  min_points: Int!\n  max_points: Int!\n  hidden_to_members: Boolean\n  loyalty_benefit_ids: [Int!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-loyaltytierattributesbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyTierAttributes.",(0,o.kt)("b",null,"name"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The name of your loyalty tier")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-loyaltytierattributesbdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyTierAttributes.",(0,o.kt)("b",null,"description"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The tier description")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-loyaltytierattributesbmin_pointsbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyTierAttributes.",(0,o.kt)("b",null,"min_points"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The minimum amount of points users have to earn to achieve this tier")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-loyaltytierattributesbmax_pointsbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyTierAttributes.",(0,o.kt)("b",null,"max_points"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The maximum amount of points users have to earn to achieve this tier")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-loyaltytierattributesbhidden_to_membersbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyTierAttributes.",(0,o.kt)("b",null,"hidden_to_members"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Whether or not this loyalty tier is hidden to members")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-loyaltytierattributesbloyalty_benefit_idsbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyTierAttributes.",(0,o.kt)("b",null,"loyalty_benefit_ids"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"[Int!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Associate one or more loyalty benefits to this specific tier. Please note that passing in an empty array will remove all benefits on this tier.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/mutations/create-tier"},(0,o.kt)("inlineCode",{parentName:"a"},"create_tier")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);