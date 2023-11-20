"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[720],{1791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(5893),o=t(1151);const a={slug:"v2.8.0",title:"MLflow 2.8.0",authors:"harupy"},r=void 0,l={permalink:"/releases/v2.8.0",source:"@site/releases/2023-11-01-v2.8.0.md",title:"MLflow 2.8.0",description:"MLflow 2.8.0 is a patch release, containing some critical bug fixes and an update to our continued work on reworking our docs.",date:"2023-11-01T00:00:00.000Z",formattedDate:"November 1, 2023",tags:[],readingTime:1.545,hasTruncateMarker:!1,authors:[{name:"Harutaka Kawamura",title:"MLflow maintainer",url:"https://github.com/harupy",imageURL:"https://github.com/harupy.png",key:"harupy"}],frontMatter:{slug:"v2.8.0",title:"MLflow 2.8.0",authors:"harupy"},unlisted:!1,prevItem:{title:"MLflow 2.8.1",permalink:"/releases/v2.8.1"}},s={authorsImageUrls:[void 0]},c=[{value:"Notable details:",id:"notable-details",level:2},{value:"Documentation updates:",id:"documentation-updates",level:2}];function d(e){const n={h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"MLflow 2.8.0 is a patch release, containing some critical bug fixes and an update to our continued work on reworking our docs."}),"\n",(0,i.jsx)(n.h2,{id:"notable-details",children:"Notable details:"}),"\n",(0,i.jsx)(n.p,{children:"The API mlflow.llm.log_predictions is being marked as deprecated, as its functionality has been incorporated into mlflow.log_table. This API will be removed in the 2.9.0 release. (#10414, @dbczumar)\nBug fixes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[Artifacts] Fix a regression in 2.8.0 where downloading a single file from a registered model would fail (#10362, @BenWilson2)"}),"\n",(0,i.jsx)(n.li,{children:"[Evaluate] Fix the Azure OpenAI integration for mlflow.evaluate when using LLM judge metrics (#10291, @prithvikannan)"}),"\n",(0,i.jsx)(n.li,{children:"[Evaluate] Change Examples to optional for the make_genai_metric API (#10353, @prithvikannan)"}),"\n",(0,i.jsx)(n.li,{children:"[Evaluate] Remove the fastapi dependency when using mlflow.evaluate for LLM results (#10354, @prithvikannan)"}),"\n",(0,i.jsx)(n.li,{children:"[Evaluate] Fix syntax issues and improve the formatting for generated prompt templates (#10402, @annzhang-db)"}),"\n",(0,i.jsx)(n.li,{children:"[Gateway] Fix the Gateway configuration validator pre-check for OpenAI to perform instance type validation (#10379, @BenWilson2)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Fix an intermittent issue with hanging threads when using asynchronous logging (#10374, @chenmoneygithub)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Add a timeout for the mlflow.login() API to catch invalid hostname configuration input errors (#10239, @chenmoneygithub)"}),"\n",(0,i.jsx)(n.li,{children:"[Tracking] Add a flush operation at the conclusion of logging system metrics (#10320, @chenmoneygithub)"}),"\n",(0,i.jsx)(n.li,{children:"[Models] Correct the prompt template generation logic within the Prompt Engineering UI so that the prompts can be used in the Python API (#10341, @daniellok-db)"}),"\n",(0,i.jsx)(n.li,{children:"[Models] Fix an issue in the SHAP model explainability functionality within mlflow.shap.log_explanation so that duplicate or conflicting dependencies are not registered when logging (#10305, @BenWilson2)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"documentation-updates",children:"Documentation updates:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[Docs] Add MLflow Tracking Quickstart (#10285, @BenWilson2)"}),"\n",(0,i.jsx)(n.li,{children:"[Docs] Add tracking server configuration guide (#10241, @chenmoneygithub)"}),"\n",(0,i.jsx)(n.li,{children:"[Docs] Refactor and improve the model deployment quickstart guide (#10322, @prithvikannan)"}),"\n",(0,i.jsx)(n.li,{children:"[Docs] Add documentation for system metrics logging (#10261, @chenmoneygithub)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For a comprehensive list of changes, see the release change log, and check out the latest documentation on mlflow.org."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);