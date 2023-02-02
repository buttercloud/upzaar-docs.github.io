"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[5212],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(a),m=n,u=d["".concat(s,".").concat(m)]||d[m]||y[m]||o;return a?r.createElement(u,l(l({ref:t},p),{},{components:a})):r.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9217:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>y,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(7462),n=a(7294),o=a(3905);const l={id:"int",title:"Int",hide_table_of_contents:!0},c=void 0,s={unversionedId:"reference/scalars/int",id:"reference/scalars/int",title:"Int",description:"The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",source:"@site/docs/reference/scalars/int.mdx",sourceDirName:"reference/scalars",slug:"/reference/scalars/int",permalink:"/docs/reference/scalars/int",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/scalars/int.mdx",tags:[],version:"current",frontMatter:{id:"int",title:"Int",hide_table_of_contents:!0},sidebar:"defaultSidebar",previous:{title:"ID",permalink:"/docs/reference/scalars/id"},next:{title:"ISO8601DateTime",permalink:"/docs/reference/scalars/iso8601-date-time"}},i={},p=[{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:p,Bullet:d,SpecifiedBy:y,Badge:m};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Int\n")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/reference/objects/basic-money"},(0,o.kt)("inlineCode",{parentName:"a"},"BasicMoney")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/inputs/basic-money-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"BasicMoneyAttributes")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/brand"},(0,o.kt)("inlineCode",{parentName:"a"},"Brand")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/brand-user"},(0,o.kt)("inlineCode",{parentName:"a"},"BrandUser")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/customer-user"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomerUser")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-benefit"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyBenefit")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/inputs/loyalty-collection-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyCollectionAttributes")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-config"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyConfig")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-info"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyInfo")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-point-collection-activity"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyPointCollectionActivity")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-reward"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyReward")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/inputs/loyalty-reward-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyRewardAttributes")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-tier"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyTier")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/inputs/loyalty-tier-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyTierAttributes")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/loyalty-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyTransaction")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/referral-program"},(0,o.kt)("inlineCode",{parentName:"a"},"ReferralProgram")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/reference/objects/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);