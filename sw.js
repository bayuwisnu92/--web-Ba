if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const f=e=>i(e,t),l={module:{uri:t},exports:o,require:f};s[t]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CQMuqY1b.css",revision:null},{url:"assets/index-Dbne0Qse.js",revision:null},{url:"index.html",revision:"e053232489ff7114228fe97f850e9eb5"},{url:"registerSW.js",revision:"348b7f5a79f8245430ddf7cf2a5cb952"},{url:"manifest.webmanifest",revision:"70250481afadfb85634835c68dfa8d90"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
