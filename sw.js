if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return d;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-b710a8b6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/base.css",revision:"b0ffa9a1ec206c78b9b685d68a65d0ec"},{url:"css/style.css",revision:"da47037b4870cebae1233ca6fcb32ee9"},{url:"img/avatar.png",revision:"977f845bc5dc881fdab85e9538ceaa1f"},{url:"img/ru.png",revision:"21de0da925610023ebd11539d5a700b8"},{url:"img/sunglesses.png",revision:"29d476da127719899b93001da2848dd0"},{url:"img/ua.png",revision:"312e28c6d717bf8b144993e04e938dca"},{url:"img/usa.png",revision:"e915845bbc4791a6541876cdd6fc5839"},{url:"index.html",revision:"6c4b000ae686d779d56894ec16d56118"},{url:"ru-ru/index.html",revision:"b3830a9f01556458678b77af34ad2db0"},{url:"uk-ua/index.html",revision:"566b9716d4aa8db7eda010b743ac1426"}],{})}));
//# sourceMappingURL=sw.js.map
