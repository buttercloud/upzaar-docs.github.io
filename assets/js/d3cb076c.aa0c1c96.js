"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[9107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>p});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),y=d(a),m=o,p=y["".concat(c,".").concat(m)]||y[m]||u[m]||n;return a?r.createElement(p,l(l({ref:t},i),{},{components:a})):r.createElement(p,l({ref:t},i))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[y]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<n;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},858:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=a(7462),o=a(7294),n=a(3905);const l={id:"loyalty-reward-attributes",title:"LoyaltyRewardAttributes",hide_table_of_contents:!1},s=void 0,c={unversionedId:"docs/reference/inputs/loyalty-reward-attributes",id:"docs/reference/inputs/loyalty-reward-attributes",title:"LoyaltyRewardAttributes",description:"Attributes for a loyalty reward",source:"@site/docs/docs/reference/inputs/loyalty-reward-attributes.mdx",sourceDirName:"docs/reference/inputs",slug:"/docs/reference/inputs/loyalty-reward-attributes",permalink:"/docs/docs/reference/inputs/loyalty-reward-attributes",draft:!1,tags:[],version:"current",frontMatter:{id:"loyalty-reward-attributes",title:"LoyaltyRewardAttributes",hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"LoyaltyCollectionAttributes",permalink:"/docs/docs/reference/inputs/loyalty-collection-attributes"},next:{title:"LoyaltyTierAttributes",permalink:"/docs/docs/reference/inputs/loyalty-tier-attributes"}},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyRewardAttributes.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardattributesbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyRewardAttributes.<b>description</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardattributesbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyRewardAttributes.<b>amount_off</b></code><Bullet /><code>BasicMoneyAttributes</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-loyaltyrewardattributesbamount_offbcodebasicmoneyattributes-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyRewardAttributes.<b>amount_off_cents</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardattributesbamount_off_centsbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyRewardAttributes.<b>amount_off_currency</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardattributesbamount_off_currencybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyRewardAttributes.<b>percentage_off</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardattributesbpercentage_offbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyRewardAttributes.<b>discount_type</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardattributesbdiscount_typebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyRewardAttributes.<b>points_to_redeem</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardattributesbpoints_to_redeembcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyRewardAttributes.<b>welcome</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardattributesbwelcomebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyRewardAttributes.<b>type</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardattributesbtypebcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],y=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:i,Bullet:y,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Attributes for a loyalty reward"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input LoyaltyRewardAttributes {\n  name: String!\n  description: String!\n  amount_off: BasicMoneyAttributes\n  amount_off_cents: Int\n  amount_off_currency: String\n  percentage_off: Float\n  discount_type: String\n  points_to_redeem: Float\n  welcome: Boolean!\n  type: String!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardattributesbnamebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyRewardAttributes.",(0,n.kt)("b",null,"name"))),(0,n.kt)(y,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Reward Name")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardattributesbdescriptionbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyRewardAttributes.",(0,n.kt)("b",null,"description"))),(0,n.kt)(y,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Reward description")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardattributesbamount_offbcodebasicmoneyattributes-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyRewardAttributes.",(0,n.kt)("b",null,"amount_off"))),(0,n.kt)(y,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/reference/inputs/basic-money-attributes"},(0,n.kt)("inlineCode",{parentName:"a"},"BasicMoneyAttributes"))," ",(0,n.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The discount amount value if the reward_discount_type is amount")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardattributesbamount_off_centsbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyRewardAttributes.",(0,n.kt)("b",null,"amount_off_cents"))),(0,n.kt)(y,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The discount amount value if the reward_discount_type is amount")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardattributesbamount_off_currencybcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyRewardAttributes.",(0,n.kt)("b",null,"amount_off_currency"))),(0,n.kt)(y,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The discount amount currency value if the reward_discount_type is amount")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardattributesbpercentage_offbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyRewardAttributes.",(0,n.kt)("b",null,"percentage_off"))),(0,n.kt)(y,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The discount percentage value if the reward_discount_type is percentage")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardattributesbdiscount_typebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyRewardAttributes.",(0,n.kt)("b",null,"discount_type"))),(0,n.kt)(y,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The type of discount (percentage or amount)")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardattributesbpoints_to_redeembcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyRewardAttributes.",(0,n.kt)("b",null,"points_to_redeem"))),(0,n.kt)(y,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The number of points this reward uses when redeemed")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardattributesbwelcomebcodeboolean--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyRewardAttributes.",(0,n.kt)("b",null,"welcome"))),(0,n.kt)(y,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Welcome rewards apply when a user joins loyalty")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardattributesbtypebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyRewardAttributes.",(0,n.kt)("b",null,"type"))),(0,n.kt)(y,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"ConsumptionReward or DiscountReward")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/reference/mutations/create-reward"},(0,n.kt)("inlineCode",{parentName:"a"},"create_reward")),"  ",(0,n.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);