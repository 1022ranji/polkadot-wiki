"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1062],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,b=p["".concat(d,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},71358:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>s,toc:()=>u,default:()=>p});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"build-data",title:"Data Analytics",sidebar_label:"Data",description:"An overview about building with data analytics",keywords:["data","index","query","explorer","dashboard"],slug:"../build-data"},d=void 0,s={unversionedId:"build/build-data",id:"build/build-data",title:"Data Analytics",description:"An overview about building with data analytics",source:"@site/../docs/build/build-data.md",sourceDirName:"build",slug:"/build-data",permalink:"/ru-RU/docs/build-data",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-data.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649779810,formattedLastUpdatedAt:"12.04.2022",frontMatter:{id:"build-data",title:"Data Analytics",sidebar_label:"Data",description:"An overview about building with data analytics",keywords:["data","index","query","explorer","dashboard"],slug:"../build-data"},sidebar:"docs",previous:{title:"Oracles",permalink:"/ru-RU/docs/build-oracle"},next:{title:"Wallets",permalink:"/ru-RU/docs/build-wallets"}},u=[{value:"Indexing and Querying",id:"indexing-and-querying",children:[{value:"Subsquid",id:"subsquid",children:[],level:3},{value:"SubQuery",id:"subquery",children:[],level:3},{value:"Web3Go",id:"web3go",children:[],level:3},{value:"The Graph",id:"the-graph",children:[],level:3},{value:"Covalent",id:"covalent",children:[],level:3},{value:"Polkadot-based Explorers",id:"polkadot-based-explorers",children:[],level:3}],level:2}],c={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The tools that accentuate and aggregate the data within blockchains are integral for a multi-chain future.\nParachains will need robust and secure ways to index and aggregate data, such as a data aggregation layer."),(0,i.kt)("h2",{id:"indexing-and-querying"},"Indexing and Querying"),(0,i.kt)("h3",{id:"subsquid"},"Subsquid"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://subsquid.io/"},"Subsquid")," is an open-source framework for building tailored GraphQL APIs to query Substrate chain state and history."),(0,i.kt)("p",null,"Subsquid replaces direct gRPC node access with perfomant Squid archive gateways, allowing quick synchronization of the API with the historical on-chain data.  "),(0,i.kt)("p",null,"Subsquid-powered APIs support filtering, pagination, union types, interfaces and full-text search out-of-the-box, and can be further extended with custom GraphQL resolvers."),(0,i.kt)("h3",{id:"subquery"},"SubQuery"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://subquery.network/"},"SubQuery")," is an indexer that allows for the indexing, transforming,\nand querying of Substrate chain data to power applications. The decentralized network acts as a\nchain-agnostic data aggregation, indexing, and querying layer between blockchains and applications."),(0,i.kt)("p",null,"SubQuery abstracts away blockchain-specific data idiosyncrasies using the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/subquery/subql"},"SubQuery SDK"),"."),(0,i.kt)("h3",{id:"web3go"},"Web3Go"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web3go.xyz/"},"Web3GO")," is a Polkadot-based open data analytics platform that provides\ninfrastructure and tooling to help users visualize, curate, share, and analyze on-chain data."),(0,i.kt)("h3",{id:"the-graph"},"The Graph"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://thegraph.com/en/"},"The Graph")," is a layer-1 indexing tool and querying layer for the\ndecentralized web, who announced an integration plan to bring\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-graph-bringing-indexing-and-querying-to-polkadot-6b433e381fe8"},"indexing and querying to Polkadot"),"."),(0,i.kt)("p",null,"The Graph allows developers to build and publish open APIs, called subgraphs.\nApplications can query subgraphs using ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),"."),(0,i.kt)("h3",{id:"covalent"},"Covalent"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.covalenthq.com/"},"Covalent")," offers a unified API to understand the data on a blockchain,\nand is currently live on the ",(0,i.kt)("a",{parentName:"p",href:"https://moonbeam.network/"},"Moonbeam")," network, bringing visibility to\nbillions of blockchain data points to Polkadot via their unified API. The approach to deploy on\nMoonbeam simplifies the development of Polkadot-based blockchain\napplications as compared to implementing a full parachain or parathread. "),(0,i.kt)("p",null,"Covalent captures the entire history of blockchains and offers a way to zoom into data points recorded\nin smart contracts that are often not accessible."),(0,i.kt)("h3",{id:"polkadot-based-explorers"},"Polkadot-based Explorers"),(0,i.kt)("p",null,"As you can imagine, blockchain explorers also offer data analytics through an interface where\nusers can examine common data points."),(0,i.kt)("p",null,"Some block explorers in the Polkadot ecosystem are listed on the ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/build-tools-index##block-explorers"},"tools page"),"."))}p.isMDXComponent=!0}}]);