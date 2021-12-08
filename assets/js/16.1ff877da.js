(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{373:function(t,e,s){"use strict";s.r(e);var a=s(44),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2-bootstrap-the-frontend-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-bootstrap-the-frontend-application"}},[t._v("#")]),t._v(" 2. Bootstrap the frontend application")]),t._v(" "),s("p",[t._v("Let's start with the frontend. In this phase we will provide a frontend application based on "),s("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nuxt.js"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"_1-nuxt-js-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-nuxt-js-installation"}},[t._v("#")]),t._v(" 1. Nuxt.js installation")]),t._v(" "),s("p",[t._v("The easiest way to start building a frontend application for a TYPO3 headless project is to use the "),s("a",{attrs:{href:"https://github.com/TYPO3-Initiatives/create-nuxt-typo3",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLI"),s("OutboundLink")],1),t._v(" which we provide.")]),t._v(" "),s("h3",{attrs:{id:"scaffold-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scaffold-project"}},[t._v("#")]),t._v(" Scaffold project")]),t._v(" "),s("p",[t._v("Run the following command in the console:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" create nuxt-typo3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("project-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("Then answer these questions and choose your preferred technologies:")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("Project name")]),t._v(" - provide name for package.json")]),t._v(" "),s("li",[s("strong",[t._v("Project description")]),t._v(" - provide description for package.json")]),t._v(" "),s("li",[s("strong",[t._v("Author name")]),t._v(" - provide author for package.json")]),t._v(" "),s("li",[s("strong",[t._v("Choose the package manager")]),t._v(":")])]),t._v(" "),s("ul",[s("li",[t._v("Yarn")]),t._v(" "),s("li",[t._v("Npm")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[s("strong",[t._v("Choose UI framework")]),t._v(":")])]),t._v(" "),s("ul",[s("li",[t._v("None (feel free to add one later)")]),t._v(" "),s("li",[t._v("Bootstrap")]),t._v(" "),s("li",[t._v("Vuetify")]),t._v(" "),s("li",[t._v("Bulma")]),t._v(" "),s("li",[t._v("Tailwind")]),t._v(" "),s("li",[t._v("Element UI")]),t._v(" "),s("li",[t._v("Ant Design Vue")]),t._v(" "),s("li",[t._v("Buefy")]),t._v(" "),s("li",[t._v("iView")]),t._v(" "),s("li",[t._v("Tachyons")])]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[s("strong",[t._v("Choose one of the integrated server-side frameworks")])])]),t._v(" "),s("ul",[s("li",[t._v("None (Nuxt default server)")]),t._v(" "),s("li",[t._v("Express")]),t._v(" "),s("li",[t._v("Koa")]),t._v(" "),s("li",[t._v("Hapi")]),t._v(" "),s("li",[t._v("Feathers")]),t._v(" "),s("li",[t._v("Micro")]),t._v(" "),s("li",[t._v("Fastify")]),t._v(" "),s("li",[t._v("Adonis (WIP)")])]),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[s("strong",[t._v("Choose Nuxt.js module")])])]),t._v(" "),s("ul",[s("li",[t._v("TYPO3 "),s("Badge",{attrs:{text:"checked by default",type:"tip"}})],1),t._v(" "),s("li",[t._v("Axios - Plugin for Ajax requests.")]),t._v(" "),s("li",[t._v("Progressive Web App (PWA) Support "),s("Badge",{attrs:{text:"checked by default",type:"tip"}})],1)]),t._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[s("strong",[t._v("Your TYPO3 API Url")]),t._v(" - Provide your TYPO3 headless address")]),t._v(" "),s("li",[s("strong",[t._v("Choose linting tools")]),t._v(":")])]),t._v(" "),s("ul",[s("li",[t._v("ESLint "),s("Badge",{attrs:{text:"recommended",type:"warning"}})],1),t._v(" "),s("li",[t._v("Prettier "),s("Badge",{attrs:{text:"recommended",type:"warning"}})],1),t._v(" "),s("li",[t._v("Lint staged files "),s("Badge",{attrs:{text:"recommended",type:"warning"}})],1)]),t._v(" "),s("ol",{attrs:{start:"9"}},[s("li",[s("strong",[t._v("Choose test framework")]),t._v(":")])]),t._v(" "),s("ul",[s("li",[t._v("None (feel free to add one later)")]),t._v(" "),s("li",[t._v("Jest")]),t._v(" "),s("li",[t._v("AVA")])]),t._v(" "),s("ol",{attrs:{start:"10"}},[s("li",[s("strong",[t._v("Choose rendering mode")])])]),t._v(" "),s("ul",[s("li",[t._v("Universal (SSR) "),s("Badge",{attrs:{text:"checked by default",type:"tip"}})],1),t._v(" "),s("li",[t._v("Single Page App")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("About Rendering Modes")]),t._v(" "),s("p",[t._v("Be aware of the last step where you should select "),s("code",[t._v("Universal")]),t._v(" as rendering mode if you want to support server side rendering.")])]),t._v(" "),s("h2",{attrs:{id:"_2-does-it-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-does-it-work"}},[t._v("#")]),t._v(" 2. Does it work?")]),t._v(" "),s("p",[t._v("After scaffolding you should be able to run your application:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("project-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run dev\n")])])]),s("p",[t._v("By default the application runs on "),s("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_3-provide-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-provide-configuration"}},[t._v("#")]),t._v(" 3. Provide configuration")]),t._v(" "),s("p",[t._v("Our CLI preconfigured some settings for you, but you can always reconfigure your module to your likings. All the configuration options can be found in the "),s("a",{attrs:{href:"/configuration"}},[t._v("Configuration")]),t._v(" section.")]),t._v(" "),s("div",{staticClass:"language-js { extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nuxt-typo3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register module")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  typo3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    baseURL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://yourwebsite.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// provide the frontend domain")]),t._v("\n    api"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      baseURL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.yourwebsite.com'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// provide the backend domain (API)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    i18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      locales"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pl'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      defaultLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("CORS")]),t._v(" "),s("p",[t._v("If you use various domains for your frontend and/or the API, please make sure that the API sends responses incorporating the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Access-Control-Allow-Origin")]),s("OutboundLink")],1),t._v(" header. For your local development you can use "),s("a",{attrs:{href:"https://github.com/nuxt-community/proxy-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("proxy-module"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"now-it-s-time-for-some-customisations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#now-it-s-time-for-some-customisations"}},[t._v("#")]),t._v(" Now it's time for some customisations.")])])}),[],!1,null,null,null);e.default=r.exports}}]);