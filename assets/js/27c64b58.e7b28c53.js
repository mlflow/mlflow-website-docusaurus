"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[106],{5349:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"v2.8.1","metadata":{"permalink":"/mlflow-website-docusaurus/releases/v2.8.1","source":"@site/releases/2023-12-01-v2.8.1.md","title":"MLflow 2.8.1","description":"MLflow 2.8.1 is a patch release, containing some critical bug fixes and an update to our continued work on reworking our docs.","date":"2023-12-01T00:00:00.000Z","formattedDate":"December 1, 2023","tags":[],"readingTime":1.545,"hasTruncateMarker":false,"authors":[{"name":"Harutaka Kawamura","title":"MLflow maintainer","url":"https://github.com/harupy","imageURL":"https://github.com/harupy.png","key":"harupy"}],"frontMatter":{"slug":"v2.8.1","title":"MLflow 2.8.1","authors":"harupy"},"unlisted":false,"nextItem":{"title":"MLflow 2.8.0","permalink":"/mlflow-website-docusaurus/releases/v2.8.0"}},"content":"MLflow 2.8.1 is a patch release, containing some critical bug fixes and an update to our continued work on reworking our docs.\\n\\n## Notable details:\\n\\nThe API mlflow.llm.log_predictions is being marked as deprecated, as its functionality has been incorporated into mlflow.log_table. This API will be removed in the 2.9.0 release. (#10414, @dbczumar)\\nBug fixes:\\n\\n- [Artifacts] Fix a regression in 2.8.0 where downloading a single file from a registered model would fail (#10362, @BenWilson2)\\n- [Evaluate] Fix the Azure OpenAI integration for mlflow.evaluate when using LLM judge metrics (#10291, @prithvikannan)\\n- [Evaluate] Change Examples to optional for the make_genai_metric API (#10353, @prithvikannan)\\n- [Evaluate] Remove the fastapi dependency when using mlflow.evaluate for LLM results (#10354, @prithvikannan)\\n- [Evaluate] Fix syntax issues and improve the formatting for generated prompt templates (#10402, @annzhang-db)\\n- [Gateway] Fix the Gateway configuration validator pre-check for OpenAI to perform instance type validation (#10379, @BenWilson2)\\n- [Tracking] Fix an intermittent issue with hanging threads when using asynchronous logging (#10374, @chenmoneygithub)\\n- [Tracking] Add a timeout for the mlflow.login() API to catch invalid hostname configuration input errors (#10239, @chenmoneygithub)\\n- [Tracking] Add a flush operation at the conclusion of logging system metrics (#10320, @chenmoneygithub)\\n- [Models] Correct the prompt template generation logic within the Prompt Engineering UI so that the prompts can be used in the Python API (#10341, @daniellok-db)\\n- [Models] Fix an issue in the SHAP model explainability functionality within mlflow.shap.log_explanation so that duplicate or conflicting dependencies are not registered when logging (#10305, @BenWilson2)\\n\\n## Documentation updates:\\n\\n- [Docs] Add MLflow Tracking Quickstart (#10285, @BenWilson2)\\n- [Docs] Add tracking server configuration guide (#10241, @chenmoneygithub)\\n- [Docs] Refactor and improve the model deployment quickstart guide (#10322, @prithvikannan)\\n- [Docs] Add documentation for system metrics logging (#10261, @chenmoneygithub)\\n  For a comprehensive list of changes, see the release change log, and check out the latest documentation on mlflow.org."},{"id":"v2.8.0","metadata":{"permalink":"/mlflow-website-docusaurus/releases/v2.8.0","source":"@site/releases/2023-11-01-v2.8.0.md","title":"MLflow 2.8.0","description":"MLflow 2.8.0 is a patch release, containing some critical bug fixes and an update to our continued work on reworking our docs.","date":"2023-11-01T00:00:00.000Z","formattedDate":"November 1, 2023","tags":[],"readingTime":1.545,"hasTruncateMarker":false,"authors":[{"name":"Harutaka Kawamura","title":"MLflow maintainer","url":"https://github.com/harupy","imageURL":"https://github.com/harupy.png","key":"harupy"}],"frontMatter":{"slug":"v2.8.0","title":"MLflow 2.8.0","authors":"harupy"},"unlisted":false,"prevItem":{"title":"MLflow 2.8.1","permalink":"/mlflow-website-docusaurus/releases/v2.8.1"}},"content":"MLflow 2.8.0 is a patch release, containing some critical bug fixes and an update to our continued work on reworking our docs.\\n\\n## Notable details:\\n\\nThe API mlflow.llm.log_predictions is being marked as deprecated, as its functionality has been incorporated into mlflow.log_table. This API will be removed in the 2.9.0 release. (#10414, @dbczumar)\\nBug fixes:\\n\\n- [Artifacts] Fix a regression in 2.8.0 where downloading a single file from a registered model would fail (#10362, @BenWilson2)\\n- [Evaluate] Fix the Azure OpenAI integration for mlflow.evaluate when using LLM judge metrics (#10291, @prithvikannan)\\n- [Evaluate] Change Examples to optional for the make_genai_metric API (#10353, @prithvikannan)\\n- [Evaluate] Remove the fastapi dependency when using mlflow.evaluate for LLM results (#10354, @prithvikannan)\\n- [Evaluate] Fix syntax issues and improve the formatting for generated prompt templates (#10402, @annzhang-db)\\n- [Gateway] Fix the Gateway configuration validator pre-check for OpenAI to perform instance type validation (#10379, @BenWilson2)\\n- [Tracking] Fix an intermittent issue with hanging threads when using asynchronous logging (#10374, @chenmoneygithub)\\n- [Tracking] Add a timeout for the mlflow.login() API to catch invalid hostname configuration input errors (#10239, @chenmoneygithub)\\n- [Tracking] Add a flush operation at the conclusion of logging system metrics (#10320, @chenmoneygithub)\\n- [Models] Correct the prompt template generation logic within the Prompt Engineering UI so that the prompts can be used in the Python API (#10341, @daniellok-db)\\n- [Models] Fix an issue in the SHAP model explainability functionality within mlflow.shap.log_explanation so that duplicate or conflicting dependencies are not registered when logging (#10305, @BenWilson2)\\n\\n## Documentation updates:\\n\\n- [Docs] Add MLflow Tracking Quickstart (#10285, @BenWilson2)\\n- [Docs] Add tracking server configuration guide (#10241, @chenmoneygithub)\\n- [Docs] Refactor and improve the model deployment quickstart guide (#10322, @prithvikannan)\\n- [Docs] Add documentation for system metrics logging (#10261, @chenmoneygithub)\\n\\nFor a comprehensive list of changes, see the release change log, and check out the latest documentation on mlflow.org."}]}')}}]);