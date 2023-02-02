"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[5193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?i.createElement(f,o(o({ref:t},c),{},{components:r})):i.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const a={title:"Configuring Your Loyalty Program",description:"Your guide on configuring your loyalty program settings.",sidebar_position:1},o="Configuring Your Loyalty Program",l={unversionedId:"management-portal-guides/configuring-your-loyalty-program",id:"management-portal-guides/configuring-your-loyalty-program",title:"Configuring Your Loyalty Program",description:"Your guide on configuring your loyalty program settings.",source:"@site/docs/management-portal-guides/configuring-your-loyalty-program.mdx",sourceDirName:"management-portal-guides",slug:"/management-portal-guides/configuring-your-loyalty-program",permalink:"/docs/management-portal-guides/configuring-your-loyalty-program",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/management-portal-guides/configuring-your-loyalty-program.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configuring Your Loyalty Program",description:"Your guide on configuring your loyalty program settings.",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Management Portal Guides",permalink:"/docs/management-portal-guides/"},next:{title:"Point Collection Activities",permalink:"/docs/management-portal-guides/creating-point-collection-activities"}},s={},u=[{value:"Tier Qualification Periods",id:"tier-qualification-periods",level:3},{value:"Tier Expiry Date Configuration",id:"tier-expiry-date-configuration",level:3},{value:"Tier Start Date Configuration",id:"tier-start-date-configuration",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuring-your-loyalty-program"},"Configuring Your Loyalty Program"),(0,n.kt)("p",null,"The Upzaar loyalty program offers a wide range of configuration options to help businesses tailor the program to their specific needs. "),(0,n.kt)("p",null,"Loyalty tier configuration plays a crucial role in the functioning of a loyalty program. These settings determine the parameters for a member to qualify for a particular tier, the duration for which a tier will remain valid and when a member will start enjoying the benefits of a particular tier. This configuration helps in customizing the loyalty program according to the specific needs of the business and its customers. By having a well-defined loyalty tier configuration, businesses can ensure that the loyalty program is fair, transparent, and effective in retaining and engaging customers."),(0,n.kt)("p",null,"One of the most important aspects of the program is the Member tier qualification period, which determines the length of time over which a member's points are accumulated to qualify for a particular tier."),(0,n.kt)("h3",{id:"tier-qualification-periods"},"Tier Qualification Periods"),(0,n.kt)("p",null,'The Member tier qualification period options include "CALENDAR_MONTH," "CALENDAR_QUARTER," "CALENDAR_HALF_YEAR," and "CALENDAR_YEAR." The "CALENDAR_MONTH" option means that points are collected on a calendar month, for example, from May 1st to May 31st. The "CALENDAR_QUARTER" option means that points are collected on a calendar quarter, for example, Q2. The "CALENDAR_HALF_YEAR" option means that points are collected on a calendar half year, for example, from January 1st to June 30th or from July 1st to December 31st. The "CALENDAR_YEAR" option means that points are collected over a full calendar year, for example, 2023.'),(0,n.kt)("h3",{id:"tier-expiry-date-configuration"},"Tier Expiry Date Configuration"),(0,n.kt)("p",null,'Another important element of setting up your loyalty program is the Tier expiry date. The Tier expiry date determines how long a tier remains valid once it has been earned. The Tier expiry date options include "END_OF_PERIOD" and "END_OF_NEXT_PERIOD."'),(0,n.kt)("p",null,'The "END_OF_PERIOD" option means that a tier is valid until the end of the qualification period. For example, if the qualification period is configured to "CALENDAR_YEAR" and the tier is earned on July 1st, 2023, then the tier will be valid until the end of the current qualification period, which is December 31st, 2023.'),(0,n.kt)("p",null,'The "END_OF_NEXT_PERIOD" option means that a tier is valid until the end of the next qualification period. For example, if the qualification period is configured to "CALENDAR_YEAR" and the tier is earned on July 1st, 2023, then the tier will be valid until the end of the next qualification period, which is December 31st, 2024.'),(0,n.kt)("h3",{id:"tier-start-date-configuration"},"Tier Start Date Configuration"),(0,n.kt)("p",null,'Finally, you can configure every Tier\' start date options, which determine when a tier becomes effective for a member once they have achieved the minimum required points. The Tier start date options include "IMMEDIATE" and "NEXT_PERIOD."'),(0,n.kt)("p",null,'The "IMMEDIATE" option means that when a member achieves the minimum required points for a tier, they will immediately earn that tier. The "NEXT_PERIOD" option means that when a member achieves the minimum required points for a tier, they will earn that tier during the next qualification period configured for that tier.'),(0,n.kt)("p",null,"In conclusion, the Upzaar loyalty program offers a wide range of configurations that allow businesses to tailor the program to their specific needs. By understanding the Member tier qualification period, Tier expiry date, and Tier start date options, businesses can create a program that best fits their needs and provides the most value to their members."))}p.isMDXComponent=!0}}]);