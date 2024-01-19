"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4509],{36459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(85893),a=t(11151),o=t(74866),r=t(85162);const s={title:"Integrate Continue with Jan and VS Code",slug:"/guides/integrations/continue",description:"Guide to integrate Continue with Jan and VS Code",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","Continue integration","VSCode integration"]},l=void 0,d={id:"guides/integrations/integrate-continue",title:"Integrate Continue with Jan and VS Code",description:"Guide to integrate Continue with Jan and VS Code",source:"@site/docs/guides/07-integrations/01-integrate-continue.mdx",sourceDirName:"guides/07-integrations",slug:"/guides/integrations/continue",permalink:"/guides/integrations/continue",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/07-integrations/01-integrate-continue.mdx",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1705633577,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:1,frontMatter:{title:"Integrate Continue with Jan and VS Code",slug:"/guides/integrations/continue",description:"Guide to integrate Continue with Jan and VS Code",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","Continue integration","VSCode integration"]},sidebar:"guidesSidebar",previous:{title:"Integrations",permalink:"/guides/integrations/"},next:{title:"Integrate OpenRouter with Jan",permalink:"/guides/integrations/openrouter"}},u={},c=[{value:"Quick Introduction",id:"quick-introduction",level:2},{value:"Steps to Integrate Continue with Jan and VS Code",id:"steps-to-integrate-continue-with-jan-and-vs-code",level:2},{value:"1. Install Continue for VS Code",id:"1-install-continue-for-vs-code",level:3},{value:"2. Enable Jan API Server",id:"2-enable-jan-api-server",level:3},{value:"3. Configure Continue to Use Jan&#39;s Local Server",id:"3-configure-continue-to-use-jans-local-server",level:3},{value:"4. Ensure the Using Model Is Activated in Jan",id:"4-ensure-the-using-model-is-activated-in-jan",level:3},{value:"5. Try Out the Integration of Jan and Continue in VS Code",id:"5-try-out-the-integration-of-jan-and-continue-in-vs-code",level:3},{value:"Asking questions about the code",id:"asking-questions-about-the-code",level:4},{value:"Editing the code with the help of a large language model",id:"editing-the-code-with-the-help-of-a-large-language-model",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n","\n",(0,i.jsx)(n.h2,{id:"quick-introduction",children:"Quick Introduction"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://continue.dev/docs/intro",children:"Continue"})," is an open-source autopilot for VS Code and JetBrains\u2014the easiest way to code with any LLM."]}),"\n",(0,i.jsx)(n.p,{children:"In this guide, we will show you how to integrate Continue with Jan and VS Code, enhancing your coding experience with the power of the local AI language model."}),"\n",(0,i.jsx)(n.h2,{id:"steps-to-integrate-continue-with-jan-and-vs-code",children:"Steps to Integrate Continue with Jan and VS Code"}),"\n",(0,i.jsx)(n.h3,{id:"1-install-continue-for-vs-code",children:"1. Install Continue for VS Code"}),"\n",(0,i.jsxs)(n.p,{children:["To get started with Continue in VS Code, please follow this ",(0,i.jsx)(n.a,{href:"https://continue.dev/docs/quickstart",children:"guide to install Continue for VS Code"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"2-enable-jan-api-server",children:"2. Enable Jan API Server"}),"\n",(0,i.jsxs)(n.p,{children:["To configure the Continue to use Jan's Local Server, you need to enable Jan API Server with your preferred model, please follow this ",(0,i.jsx)(n.a,{href:"/guides/using-server/server",children:"guide to enable Jan API Server"})]}),"\n",(0,i.jsx)(n.h3,{id:"3-configure-continue-to-use-jans-local-server",children:"3. Configure Continue to Use Jan's Local Server"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"~/.continue"})," directory."]}),"\n",(0,i.jsxs)(o.Z,{groupId:"operating-systems",children:[(0,i.jsx)(r.Z,{value:"mac",label:"macOS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd ~/.continue\n"})})}),(0,i.jsx)(r.Z,{value:"win",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"C:/Users/<your_user_name>/.continue\n"})})}),(0,i.jsx)(r.Z,{value:"linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd ~/.continue\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Edit the ",(0,i.jsx)(n.code,{children:"config.json"})," file and include the following configuration."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="~/.continue/config.json"',children:'{\n  "models": [\n    {\n      // highlight-next-line\n      "title": "Jan",\n      "provider": "openai",\n      // highlight-start\n      "model": "mistral-ins-7b-q4",\n      "apiKey": "EMPTY",\n      "apiBase": "http://localhost:1337"\n      // highlight-end\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure that the ",(0,i.jsx)(n.code,{children:"provider"})," is ",(0,i.jsx)(n.code,{children:"openai"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure that the ",(0,i.jsx)(n.code,{children:"model"})," is the same as the one you enabled in the Jan API Server."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure that the ",(0,i.jsx)(n.code,{children:"apiBase"})," is ",(0,i.jsx)(n.code,{children:"http://localhost:1337"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure that the ",(0,i.jsx)(n.code,{children:"apiKey"})," is ",(0,i.jsx)(n.code,{children:"EMPTY"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-ensure-the-using-model-is-activated-in-jan",children:"4. Ensure the Using Model Is Activated in Jan"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.code,{children:"Settings"})," > ",(0,i.jsx)(n.code,{children:"Models"}),". Activate the model that you want to use in Jan by clicking the ",(0,i.jsx)(n.strong,{children:"three dots (\u22ee)"})," and ",(0,i.jsx)(n.strong,{children:"start model"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Active Models",src:t(65813).Z+"",width:"1185",height:"791"})}),"\n",(0,i.jsx)(n.h3,{id:"5-try-out-the-integration-of-jan-and-continue-in-vs-code",children:"5. Try Out the Integration of Jan and Continue in VS Code"}),"\n",(0,i.jsx)(n.h4,{id:"asking-questions-about-the-code",children:"Asking questions about the code"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Highlight a code snippet and press ",(0,i.jsx)(n.code,{children:"Command + Shift + M"})," to open the ",(0,i.jsx)(n.strong,{children:"Left Panel"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select Jan at the bottom and ask a question about the code, for example, ",(0,i.jsx)(n.code,{children:"Explain this code"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Continue Interactions",src:t(2958).Z+"",width:"3456",height:"2234"})}),"\n",(0,i.jsx)(n.h4,{id:"editing-the-code-with-the-help-of-a-large-language-model",children:"Editing the code with the help of a large language model"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Highlight a code snippet and press ",(0,i.jsx)(n.code,{children:"Command + Shift + L"})," and input your edit request, for example, ",(0,i.jsx)(n.code,{children:"Write comments for this code"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Continue Edit Code",src:t(17189).Z+"",width:"1652",height:"1080"})})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var i=t(36905);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var i=t(67294),a=t(36905),o=t(12466),r=t(16550),s=t(20469),l=t(91980),d=t(67392),u=t(50012);function c(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[d,c]=p({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=d??f;return g({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var m=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function b(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==i&&(d(n),r(a))},c=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:c,onClick:u,...o,className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function C(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,x.jsx)(C,{...e,children:c(e.children)},String(n))}},2958:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/01-continue-ask-e1d3b4abcb0f085c25a4f5f6bbf99326.png"},17189:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/01-continue-edit-demo-2fc82d6900c6cdaa9a57bc0f03ce9e88.gif"},65813:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/01-start-model-6965a3c6c35d8bf6d9e20188dd337d7b.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);