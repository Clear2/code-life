(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(1),o=t(9),r=(t(0),t(167)),c={id:"await",title:"async/await",sidebar_label:"async/await"},l={id:"await",title:"async/await",description:"### async/await example",source:"@site/docs/async-await.md",permalink:"/code-life/docs/await",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/async-await.md",sidebar_label:"async/await",sidebar:"someSidebar",previous:{title:"Style Guide",permalink:"/code-life/docs/doc1"},next:{title:"Flex \u5e03\u5c40",permalink:"/code-life/docs/flex"}},i=[{value:"async/await example",id:"asyncawait-example",children:[]},{value:"await in a for loop",id:"await-in-a-for-loop",children:[]},{value:"ForEach loop",id:"foreach-loop",children:[]},{value:"map Loop",id:"map-loop",children:[]},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",children:[]}],s={rightToc:i};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"asyncawait-example"},"async/await example"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u51c6\u5907\u4e00\u4e2a\u4f8b\u5b50")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const fruitBasket = {\n    apple: 27,\n    grape: 0,\n    pear: 14\n}\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"\u6a21\u62df\u5f02\u6b65\u83b7\u53d6\u8be5\u5bf9\u8c61\u6570\u636e")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n\nconst getNumFruit = (fruit, ms)  => sleep(ms).then(_ => fruitBasket[fruit])\n\nconsole.log('------\x3estart')\ngetNumFruit('apple', 1000).then(num => console.log(num))\nconsole.log('------\x3eend')\n\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"\u4f7f\u7528await")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const control = async _ => {\n    console.log('start')\n    \n    const numApples = await getNumFruit('apple', 1500)\n    console.log('apple---\x3e', numApples)\n    \n    const numGrapes = await getNumFruit('grape', 1000)\n    console.log('grape---\x3e', numGrapes)\n    \n    const numPears = await getNumFruit('pear', 500)\n    console.log('pear ---\x3e', numPears)\n\n    console.log('end')\n}\ncontrol()\n\n// \u9a8c\u8bc1\u4e24\u4e2a\u51fd\u6570,\u65f6\u95f4\u77ed\u7684\u4f1a\u4e0d\u4f1a\u5148\u8fd4\u56de\nconst longSleep = async (ms) => {\n    console.log('long--\x3estart')\n    const numApples = await getNumFruit('apple', ms)\n    console.log('long---\x3e', numApples)\n}\n\nconst shortSleep = async (ms) => {\n    console.log('short--\x3estart')\n    const numApples = await getNumFruit('apple', ms)\n    console.log('short---\x3e', numApples)\n}\nlongSleep(2500)\nshortSleep(2000)\n\n")),Object(r.b)("h3",{id:"await-in-a-for-loop"},"await in a for loop"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const fruitsToGet = ['apple', 'grape', 'pear']\n\nconst forLoop = async () => {\n    console.log('start')\n    for (let i = 0; i < fruitsToGet.length; i++) {\n        const numFruit = await getNumFruit(fruitsToGet[i])\n        console.log(numFruit)\n    }\n    console.log('End')   \n}\nforLoop()\n")),Object(r.b)("h3",{id:"foreach-loop"},"ForEach loop"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst forEachLoop = _ => {\n    console.log('start')\n    fruitsToGet.forEach(async fruit => {\n      const numFruit = await getNumFruit(fruit, 1000)\n      console.log(fruit, '--\x3e', numFruit)\n    })\n    console.log('End')\n}\n")),Object(r.b)("p",null,"JavaScript does this because ",Object(r.b)("inlineCode",{parentName:"p"},"forEach")," is not promise-aware"),Object(r.b)("h3",{id:"map-loop"},"map Loop"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst mapLoop = async _ => {\n    console.log('start')\n    const promise =fruitsToGet.map(async fruit => {\n      const numFruit = await getNumFruit(fruit, 1000)\n      return numFruit  \n    })\n    const numFruits = await Promise.all(promise)\n    console.log(numFruits)\n    console.log('End')\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"map")," \u603b\u662f\u8fd4\u56de",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," (\u5982\u679c\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"p"},"await"),"), \u5fc5\u987b\u7b49\u5f85\u6570\u7ec4\u91cc\u7684\u6240\u6709",Object(r.b)("inlineCode",{parentName:"p"},"Promise"),"\u5230",Object(r.b)("inlineCode",{parentName:"p"},"resolved"),"\u72b6\u6001"),Object(r.b)("h3",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://zellwk.com/blog/async-await-in-loops/"}),"JavaScript async and await in loops")))}p.isMDXComponent=!0},167:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||r;return t?o.a.createElement(d,l({ref:n},s,{components:t})):o.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<r;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);