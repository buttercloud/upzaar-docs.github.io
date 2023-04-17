"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[2915],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),y=s(r),m=n,u=y["".concat(c,".").concat(m)]||y[m]||p[m]||o;return r?a.createElement(u,l(l({ref:t},i),{},{components:r})):a.createElement(u,l({ref:t},i))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[y]="string"==typeof e?e:n,l[1]=d;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7555:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>y,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=r(7462),n=r(7294),o=r(3905);const l={id:"redeem-reward-payload",title:"RedeemRewardPayload",hide_table_of_contents:!1},d=void 0,c={unversionedId:"reference/objects/redeem-reward-payload",id:"reference/objects/redeem-reward-payload",title:"RedeemRewardPayload",description:"Autogenerated return type of RedeemReward",source:"@site/docs/reference/objects/redeem-reward-payload.mdx",sourceDirName:"reference/objects",slug:"/reference/objects/redeem-reward-payload",permalink:"/docs/reference/objects/redeem-reward-payload",draft:!1,tags:[],version:"current",frontMatter:{id:"redeem-reward-payload",title:"RedeemRewardPayload",hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"OnlineStore",permalink:"/docs/reference/objects/online-store"},next:{title:"RedeemedReward",permalink:"/docs/reference/objects/redeemed-reward"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RedeemRewardPayload.<b>errors</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-redeemrewardpayloadberrorsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RedeemRewardPayload.<b>loyalty_transaction</b></code><Bullet /><code>LoyaltyTransaction</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-redeemrewardpayloadbloyalty_transactionbcodeloyaltytransaction-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RedeemRewardPayload.<b>status</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-redeemrewardpayloadbstatusbcodeboolean--",level:4},{value:"Returned by",id:"returned-by",level:3}],y=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:i,Bullet:y,SpecifiedBy:p,Badge:m};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated return type of RedeemReward"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type RedeemRewardPayload {\n  errors: [String!]\n  loyalty_transaction: LoyaltyTransaction\n  status: Boolean!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-redeemrewardpayloadberrorsbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RedeemRewardPayload.",(0,o.kt)("b",null,"errors"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-redeemrewardpayloadbloyalty_transactionbcodeloyaltytransaction-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RedeemRewardPayload.",(0,o.kt)("b",null,"loyalty_transaction"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/objects/loyalty-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyTransaction"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-redeemrewardpayloadbstatusbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RedeemRewardPayload.",(0,o.kt)("b",null,"status"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/mutations/redeem-reward"},(0,o.kt)("inlineCode",{parentName:"a"},"redeem_reward")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);