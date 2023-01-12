"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[5438],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(d,".").concat(m)]||p[m]||l[m]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5548:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={title:"Redeeming Rewards",description:"Redeem your Customers points with Rewards",hide_table_of_contents:!1,sidebar_position:4},i=void 0,s={unversionedId:"guides/redeeming-rewards",id:"guides/redeeming-rewards",title:"Redeeming Rewards",description:"Redeem your Customers points with Rewards",source:"@site/docs/guides/redeeming-rewards.mdx",sourceDirName:"guides",slug:"/guides/redeeming-rewards",permalink:"/docs/guides/redeeming-rewards",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/redeeming-rewards.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Redeeming Rewards",description:"Redeem your Customers points with Rewards",hide_table_of_contents:!1,sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Awarding Points",permalink:"/docs/guides/awarding-points"},next:{title:"Schema Documentation",permalink:"/docs/reference"}},d={},c=[],u={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In axios, redeeming a reward for a customer may look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const redeemReward = async (brandUid, rewardId, customerUid) => {\n  try {\n    const mutation = `mutation {\n      redeem_reward(\n        brand_uid: "${brandUid}",\n        reward_id: "${rewardId}",\n        customer_uid: "${customerUid}",\n      ) {\n        status\n        errors\n      }\n    }`;\n\n    const { data } = await axios({\n      url: \'API_ENDPOINT\',\n      method: \'post\',\n      data: {\n        query: mutation\n      }\n    });\n\n    return data;\n  } catch (error) {\n    console.log(error);\n  }\n}\n')))}p.isMDXComponent=!0}}]);