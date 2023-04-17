"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[2166],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},i="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),i=l(a),m=n,k=i["".concat(d,".").concat(m)]||i[m]||y[m]||o;return a?r.createElement(k,s(s({ref:t},p),{},{components:a})):r.createElement(k,s({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[i]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8778:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>i,SpecifiedBy:()=>y,assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=a(7462),n=a(7294),o=a(3905);const s={id:"string",title:"String",hide_table_of_contents:!1},c=void 0,d={unversionedId:"docs/reference/scalars/string",id:"docs/reference/scalars/string",title:"String",description:"The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",source:"@site/docs/docs/reference/scalars/string.mdx",sourceDirName:"docs/reference/scalars",slug:"/docs/reference/scalars/string",permalink:"/docs/docs/reference/scalars/string",draft:!1,tags:[],version:"current",frontMatter:{id:"string",title:"String",hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"JSON",permalink:"/docs/docs/reference/scalars/json"},next:{title:"Inputs",permalink:"/docs/category/inputs-1"}},l={},p=[{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:p,Bullet:i,SpecifiedBy:y,Badge:m};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar String\n")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/mutations/errors"},(0,o.kt)("inlineCode",{parentName:"a"},"errors")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/queries/errors"},(0,o.kt)("inlineCode",{parentName:"a"},"errors")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/queries/accounts"},(0,o.kt)("inlineCode",{parentName:"a"},"accounts")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/basic-money"},(0,o.kt)("inlineCode",{parentName:"a"},"BasicMoney")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/inputs/basic-money-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"BasicMoneyAttributes")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/brand"},(0,o.kt)("inlineCode",{parentName:"a"},"Brand")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/brand-theme-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"BrandThemeSettings")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/brand-user"},(0,o.kt)("inlineCode",{parentName:"a"},"BrandUser")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/mutations/collect-points"},(0,o.kt)("inlineCode",{parentName:"a"},"collect_points")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/collect-points-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CollectPointsPayload")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/mutations/create-reward"},(0,o.kt)("inlineCode",{parentName:"a"},"create_reward")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/mutations/create-tier"},(0,o.kt)("inlineCode",{parentName:"a"},"create_tier")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/create-customer-user-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateCustomerUserPayload")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/create-reward-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateRewardPayload")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/create-tier-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateTierPayload")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/inputs/customer-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomerAttributes")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/customer-display"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomerDisplay")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/customer-user"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomerUser")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/directives/deprecated"},(0,o.kt)("inlineCode",{parentName:"a"},"deprecated")),"  ",(0,o.kt)(m,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/mutations/join-loyalty"},(0,o.kt)("inlineCode",{parentName:"a"},"join_loyalty")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/join-loyalty-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"JoinLoyaltyPayload")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/location"},(0,o.kt)("inlineCode",{parentName:"a"},"Location")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/queries/loyalty-tiers"},(0,o.kt)("inlineCode",{parentName:"a"},"loyalty_tiers")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/loyalty-access-token"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyAccessToken")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/loyalty-benefit"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyBenefit")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/inputs/loyalty-collection-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyCollectionAttributes")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/loyalty-config"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyConfig")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/loyalty-info"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyInfo")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/loyalty-point-collection-activity"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyPointCollectionActivity")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/loyalty-reward"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyReward")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/inputs/loyalty-reward-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyRewardAttributes")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/loyalty-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltySettings")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/loyalty-tier"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyTier")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/inputs/loyalty-tier-attributes"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyTierAttributes")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/loyalty-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"LoyaltyTransaction")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/notice"},(0,o.kt)("inlineCode",{parentName:"a"},"Notice")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/online-store"},(0,o.kt)("inlineCode",{parentName:"a"},"OnlineStore")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/queries/point-collection-activities"},(0,o.kt)("inlineCode",{parentName:"a"},"point_collection_activities")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/mutations/redeem-reward"},(0,o.kt)("inlineCode",{parentName:"a"},"redeem_reward")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/redeemed-reward"},(0,o.kt)("inlineCode",{parentName:"a"},"RedeemedReward")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/redeem-reward-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RedeemRewardPayload")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/referral-program"},(0,o.kt)("inlineCode",{parentName:"a"},"ReferralProgram")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/queries/rewards"},(0,o.kt)("inlineCode",{parentName:"a"},"rewards")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/queries/tiers"},(0,o.kt)("inlineCode",{parentName:"a"},"tiers")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/mutations/update-loyalty-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"update_loyalty_settings")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/objects/update-settings-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateSettingsPayload")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);