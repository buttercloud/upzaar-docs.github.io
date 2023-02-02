"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[9861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),y=o,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Creating your first loyalty customer",description:"The first thing you need",hide_table_of_contents:!1,sidebar_position:1},i=void 0,s={unversionedId:"api-guides/creating-your-first-loyalty-customer",id:"api-guides/creating-your-first-loyalty-customer",title:"Creating your first loyalty customer",description:"The first thing you need",source:"@site/docs/api-guides/creating-your-first-loyalty-customer.mdx",sourceDirName:"api-guides",slug:"/api-guides/creating-your-first-loyalty-customer",permalink:"/docs/api-guides/creating-your-first-loyalty-customer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guides/creating-your-first-loyalty-customer.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Creating your first loyalty customer",description:"The first thing you need",hide_table_of_contents:!1,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"API Guides",permalink:"/docs/api-guides/"},next:{title:"Retrieving a Customer Account & loyalty point balance",permalink:"/docs/api-guides/retrieving-customer-account"}},c={},l=[{value:"Step 1: Create a customer account",id:"step-1-create-a-customer-account",level:2},{value:"Step 2: Join loyalty",id:"step-2-join-loyalty",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Usually the first thing you'll when linking up your application is to create a loyalty customer. Creating a loyalty customer will then allow you to award them points, redeem rewards, and return their point balance & tier information. Creating a customer & loyalty member on Upzaar is a two part operation."),(0,o.kt)("h2",{id:"step-1-create-a-customer-account"},"Step 1: Create a customer account"),(0,o.kt)("p",null,"Create the customer account by calling ","[https://developers.upzaar.com/docs/mutations/create-account]"," mutation. e.g:"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"axios"),", creating an account may look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import axios from 'axios';\n\nconst query = `\n  mutation {\n    create_account {\n      status\n      errors\n      customer_user {\n        uid\n      }\n    }\n  }\n`;\n\nconst client = axios.create({\n    baseURL: 'API_ENDPOINT',\n    headers: {'Content-Type': 'application/json', Authorization: 'ApiKey <your_api_key>'}\n});\n\nclient.post('/graphql', { query })\n  .then(res => {\n    const { data } = res.data;\n    console.log(data);\n  })\n  .catch(err => console.log(err));\n")),(0,o.kt)("h2",{id:"step-2-join-loyalty"},"Step 2: Join loyalty"),(0,o.kt)("p",null,"Call ",(0,o.kt)("inlineCode",{parentName:"p"},"join_loyalty")," with a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"brand_uid"),". Your brand_uid can be retrieved from your admin panel. Once join_loyalty is called, this customer will now become a loyalty member of the provided brand. If you've configured welcome points, the customer will receive the configured amount of welcome points as soon as the loyalty program is joined."),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"axios"),", joining loyalty may look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const joinLoyalty = async (brand_uid, customer_uid) => {\n  try {\n    const mutation = `mutation {\n      joinLoyalty(brand_uid: \"${brand_uid}\", customer_uid: \"${customer_uid}\") {\n        status\n        errors\n      }\n    }`;\n\n    const { data } = await axios({\n      url: 'API_ENDPOINT',\n      method: 'post',\n      data: {\n        query: mutation\n      }\n    });\n\n    return data;\n  } catch (error) {\n    console.log(error);\n  }\n}\n")),(0,o.kt)("p",null,"This sample function uses the axios library to make a POST request to a GraphQL API endpoint. It takes in two arguments, brand_uid and customer_uid, and uses them to construct a GraphQL mutation that creates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"BrandUser")," object with those IDs. The response from the API is returned, which in this case, contains the status and errors (if any)."))}p.isMDXComponent=!0}}]);