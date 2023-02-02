"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[4291],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),m=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=m(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(t),f=n,g=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return t?a.createElement(g,i(i({ref:r},u),{},{components:t})):a.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7274:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=t(7462),n=(t(7294),t(3905));const o={title:"Setting up a Referral Program",description:"Set up a two-sided referral program.",sidebar_position:1},i="Setting up a Referral Program",s={unversionedId:"management-portal-guides/setting-up-referral-program",id:"management-portal-guides/setting-up-referral-program",title:"Setting up a Referral Program",description:"Set up a two-sided referral program.",source:"@site/docs/management-portal-guides/setting-up-referral-program.mdx",sourceDirName:"management-portal-guides",slug:"/management-portal-guides/setting-up-referral-program",permalink:"/docs/management-portal-guides/setting-up-referral-program",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/management-portal-guides/setting-up-referral-program.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Setting up a Referral Program",description:"Set up a two-sided referral program.",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Setting up Member Tiers & Benefits",permalink:"/docs/management-portal-guides/creating-tiers-and-benefits"},next:{title:"Schema Documentation",permalink:"/docs/reference"}},l={},m=[{value:"Set the Amount of Points to Award",id:"set-the-amount-of-points-to-award",level:3},{value:"Choose the Referral Method",id:"choose-the-referral-method",level:3},{value:"Configure the referral program",id:"configure-the-referral-program",level:3},{value:"Notify Members",id:"notify-members",level:3},{value:"Track Referrals",id:"track-referrals",level:3}],u={toc:m};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setting-up-a-referral-program"},"Setting up a Referral Program"),(0,n.kt)("p",null,"A referral program is a great way to encourage current members of your loyalty program to bring in new members and grow your customer base. With a well-configured referral program, both the referring member and the new member can earn points, making it a win-win situation for everyone involved. Here's how you can set up a referral program in your loyalty program:"),(0,n.kt)("h3",{id:"set-the-amount-of-points-to-award"},"Set the Amount of Points to Award"),(0,n.kt)("p",null,"Decide on the number of points that both the referring member and the new member will earn. This can be a set amount or a percentage of the points earned by the new member."),(0,n.kt)("h3",{id:"choose-the-referral-method"},"Choose the Referral Method"),(0,n.kt)("p",null,"You can choose to give points for referrals made through a referral code. Each member is assigned a unique referral code that serves as a way to track their referrals. This code can be easily passed through the API to attribute new members to the existing member who referred them. By using the referral code, the referral relationship between members can be accurately recorded, ensuring that both the referring member and the new member receive the correct amount of points for their participation in the referral program. "),(0,n.kt)("h3",{id:"configure-the-referral-program"},"Configure the referral program"),(0,n.kt)("p",null,"In your loyalty program's settings, you can configure the referral program to automatically give points to both the referring member and the new member. You can also set a limit on the number of referrals a member can make and the number of points they can earn."),(0,n.kt)("h3",{id:"notify-members"},"Notify Members"),(0,n.kt)("p",null,"Make sure to notify your existing members about the referral program and how they can participate. You can do this through email, in-app notifications, or on your website."),(0,n.kt)("h3",{id:"track-referrals"},"Track Referrals"),(0,n.kt)("p",null,"Keep track of the referrals made and the points earned by both the referring member and the new member. This will help you monitor the success of the referral program and make any necessary changes in the future."))}p.isMDXComponent=!0}}]);