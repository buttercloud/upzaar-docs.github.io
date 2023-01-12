"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[6952],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=d(a),y=n,u=i["".concat(c,".").concat(y)]||i[y]||m[y]||o;return a?r.createElement(u,l(l({ref:t},p),{},{components:a})):r.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[i]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},2391:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>i,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(7462),n=a(7294),o=a(3905);const l={id:"string",title:"String",hide_table_of_contents:!0},s=void 0,c={unversionedId:"reference/scalars/string",id:"reference/scalars/string",title:"String",description:"The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",source:"@site/docs/reference/scalars/string.mdx",sourceDirName:"reference/scalars",slug:"/reference/scalars/string",permalink:"/docs/reference/scalars/string",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/scalars/string.mdx",tags:[],version:"current",frontMatter:{id:"string",title:"String",hide_table_of_contents:!0},sidebar:"defaultSidebar",previous:{title:"ISO8601DateTime",permalink:"/docs/reference/scalars/iso8601-date-time"}},d={},p=[{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:p,Bullet:i,SpecifiedBy:m,Badge:y};function k(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar String\n")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/mutations/errors"},(0,o.kt)("inlineCode",{parentName:"a"},"errors")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/queries/errors"},(0,o.kt)("inlineCode",{parentName:"a"},"errors")),"  ",(0,o.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/queries/accounts"},(0,o.kt)("inlineCode",{parentName:"a"},"accounts")),"  ",(0,o.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/inputs/basic-money-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"BasicMoneyAttributes")),"  ",(0,o.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/brand"},(0,o.kt)("inlineCode",{parentName:"a"},"Brand")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/mutations/collect-points"},(0,o.kt)("inlineCode",{parentName:"a"},"collect_points")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/collect-points-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CollectPointsPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/mutations/create-reward"},(0,o.kt)("inlineCode",{parentName:"a"},"create_reward")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/mutations/create-tier"},(0,o.kt)("inlineCode",{parentName:"a"},"create_tier")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/create-customer-user-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateCustomerUserPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/create-reward-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateRewardPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/create-tier-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateTierPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/customer-user"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomerUser")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/directives/deprecated"},(0,o.kt)("inlineCode",{parentName:"a"},"deprecated")),"  ",(0,o.kt)(y,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/mutations/join-loyalty"},(0,o.kt)("inlineCode",{parentName:"a"},"join_loyalty")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/join-loyalty-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"JoinLoyaltyPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/queries/loyalty-tiers"},(0,o.kt)("inlineCode",{parentName:"a"},"loyalty_tiers")),"  ",(0,o.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/inputs/loyalty-collection-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyCollectionAttributes")),"  ",(0,o.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-config"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyConfig")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-info"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyInfo")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-reward"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyReward")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltySettings")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-tier"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyTier")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyTransaction")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/mutations/redeem-reward"},(0,o.kt)("inlineCode",{parentName:"a"},"redeem_reward")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/redeem-reward-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RedeemRewardPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/queries/rewards"},(0,o.kt)("inlineCode",{parentName:"a"},"rewards")),"  ",(0,o.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/mutations/update-loyalty-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"update_loyalty_settings")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/update-settings-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateSettingsPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);