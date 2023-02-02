"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[3942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var o=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=o.createContext({}),y=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=y(e.components);return o.createElement(d.Provider,{value:t},e.children)},i="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=y(a),b=l,m=i["".concat(d,".").concat(b)]||i[b]||f[b]||n;return a?o.createElement(m,r(r({ref:t},s),{},{components:a})):o.createElement(m,r({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[i]="string"==typeof e?e:l,r[1]=c;for(var y=2;y<n;y++)r[y]=a[y];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},9472:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,SpecifiedBy:()=>f,assets:()=>y,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var o=a(7462),l=a(7294),n=a(3905);const r={id:"loyalty-info",title:"LoyaltyInfo",hide_table_of_contents:!0},c=void 0,d={unversionedId:"reference/objects/loyalty-info",id:"reference/objects/loyalty-info",title:"LoyaltyInfo",description:"No description",source:"@site/docs/reference/objects/loyalty-info.mdx",sourceDirName:"reference/objects",slug:"/reference/objects/loyalty-info",permalink:"/docs/reference/objects/loyalty-info",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/objects/loyalty-info.mdx",tags:[],version:"current",frontMatter:{id:"loyalty-info",title:"LoyaltyInfo",hide_table_of_contents:!0},sidebar:"defaultSidebar",previous:{title:"LoyaltyConfig",permalink:"/docs/reference/objects/loyalty-config"},next:{title:"LoyaltyPointCollectionActivity",permalink:"/docs/reference/objects/loyalty-point-collection-activity"}},y={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>all_available_rewards</b></code><Bullet /><code>[LoyaltyReward!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-loyaltyinfoball_available_rewardsbcodeloyaltyreward--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>eligible_rewards</b></code><Bullet /><code>[LoyaltyReward!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-loyaltyinfobeligible_rewardsbcodeloyaltyreward--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>errors</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyinfoberrorsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>history</b></code><Bullet /><code>[LoyaltyTransaction!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-loyaltyinfobhistorybcodeloyaltytransaction--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>ineligible_rewards</b></code><Bullet /><code>[LoyaltyReward!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-loyaltyinfobineligible_rewardsbcodeloyaltyreward--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>loyalty_tier</b></code><Bullet /><code>LoyaltyTier!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-loyaltyinfobloyalty_tierbcodeloyaltytier--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>loyalty_transaction_count</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyinfobloyalty_transaction_countbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>points_needed_until_next_reward</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyinfobpoints_needed_until_next_rewardbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>rewards</b></code><Bullet /><code>[LoyaltyReward!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-loyaltyinfobrewardsbcodeloyaltyreward--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>status_points</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyinfobstatus_pointsbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyInfo.<b>total_point_balance</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyinfobtotal_point_balancebcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:i,SpecifiedBy:f,Badge:b};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type LoyaltyInfo {\n  all_available_rewards: [LoyaltyReward!]!\n  eligible_rewards: [LoyaltyReward!]!\n  errors: [String!]\n  history: [LoyaltyTransaction!]\n  ineligible_rewards: [LoyaltyReward!]!\n  loyalty_tier: LoyaltyTier!\n  loyalty_transaction_count: Int\n  points_needed_until_next_reward: Int\n  rewards: [LoyaltyReward!]\n  status_points: Int\n  total_point_balance: Int\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfoball_available_rewardsbcodeloyaltyreward--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"all_available_rewards"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/objects/loyalty-reward"},(0,n.kt)("inlineCode",{parentName:"a"},"[LoyaltyReward!]!"))," ",(0,n.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfobeligible_rewardsbcodeloyaltyreward--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"eligible_rewards"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/objects/loyalty-reward"},(0,n.kt)("inlineCode",{parentName:"a"},"[LoyaltyReward!]!"))," ",(0,n.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfoberrorsbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"errors"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfobhistorybcodeloyaltytransaction--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"history"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/objects/loyalty-transaction"},(0,n.kt)("inlineCode",{parentName:"a"},"[LoyaltyTransaction!]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfobineligible_rewardsbcodeloyaltyreward--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"ineligible_rewards"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/objects/loyalty-reward"},(0,n.kt)("inlineCode",{parentName:"a"},"[LoyaltyReward!]!"))," ",(0,n.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfobloyalty_tierbcodeloyaltytier--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"loyalty_tier"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/objects/loyalty-tier"},(0,n.kt)("inlineCode",{parentName:"a"},"LoyaltyTier!"))," ",(0,n.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The current member's loyalty tier. This is determined based on their earned status points")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfobloyalty_transaction_countbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"loyalty_transaction_count"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfobpoints_needed_until_next_rewardbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"points_needed_until_next_reward"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfobrewardsbcodeloyaltyreward--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"rewards"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/objects/loyalty-reward"},(0,n.kt)("inlineCode",{parentName:"a"},"[LoyaltyReward!]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfobstatus_pointsbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"status_points"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Status points earned by this member that which determine their tier.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-loyaltyinfobtotal_point_balancebcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyInfo.",(0,n.kt)("b",null,"total_point_balance"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The member's current point balance - this equals all of their point collections minus their reward redemptions")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/reference/objects/brand-user"},(0,n.kt)("inlineCode",{parentName:"a"},"BrandUser")),"  ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/reference/objects/customer-user"},(0,n.kt)("inlineCode",{parentName:"a"},"CustomerUser")),"  ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);