"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[3707],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4969:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const i={title:"Listing Your Brands",description:"Get a list of Brands under your BrandGroup",sidebar_position:5},a=void 0,l={unversionedId:"api-guides/listing-your-brands",id:"api-guides/listing-your-brands",title:"Listing Your Brands",description:"Get a list of Brands under your BrandGroup",source:"@site/docs/api-guides/listing-your-brands.mdx",sourceDirName:"api-guides",slug:"/api-guides/listing-your-brands",permalink:"/docs/api-guides/listing-your-brands",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Listing Your Brands",description:"Get a list of Brands under your BrandGroup",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Redeeming Rewards",permalink:"/docs/api-guides/redeeming-rewards"},next:{title:"Management Portal Guides",permalink:"/docs/management-portal-guides/"}},s={},c=[],u={toc:c};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"apollo-client"),", retrieving a list of your brands may look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { ApolloClient, InMemoryCache, gql } from '@apollo/client';\n\nconst client = new ApolloClient({\n  uri: 'API_ENDPOINT',\n  headers: {\n    'Content-Type': 'application/json',\n    Authorization: 'ApiKey <your_api_key>'\n  },\n  cache: new InMemoryCache()\n});\n\nclient\n  .query({\n    query: gql`\n      query {\n        brands {\n          uid\n          brand_name\n          currency\n          rewards {\n            id\n            name\n          }\n          loyalty_settings {\n            loyalty_enabled\n          }\n          loyalty_history {\n            id\n            type\n            points\n            loyalty_reward {\n              id\n            }\n            customer_user {\n              id\n              full_name\n            }\n          }\n        }\n      }\n    `\n  })\n  .then(res => {\n    const { data } = res;\n    console.log(data);\n  })\n  .catch(err => console.log(err));\n`;\n")))}p.isMDXComponent=!0}}]);