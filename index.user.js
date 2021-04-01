// ==UserScript==
// @name Embellish
// @version 1.0.1
// @author haykam821
// @description Adds Reddit event embeds to old Reddit.
// @homepage https://github.com/Snakeroom/Embellish#readme
// @supportURL https://github.com/Snakeroom/Embellish/issues
// @match https://*.reddit.com/*
// @namespace https://snakeroom.org/
// ==/UserScript==

(()=>{"use strict";var e={809:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addMarker=void 0;const d=n(984);t.addMarker=function(e,t){e.classList.add("embellish-"+t),e.dataset.embellishVersion=d.VERSION}},984:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HEIGHT=t.PLATFORM=t.VERSION=t.SUBREDDIT_PATH=t.SUBREDDIT=t.API_BASE=void 0,t.API_BASE="https://second-api.reddit.com",t.SUBREDDIT="second",t.SUBREDDIT_PATH="/r/"+t.SUBREDDIT,t.VERSION="1.0.1",t.PLATFORM="desktop",t.HEIGHT=400},221:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.injectEmbed=void 0;const d=n(984),r=n(809);t.injectEmbed=function(e=!1){const t=document.querySelector("div.content");if(null!==t){const n=document.createElement("iframe");n.src=d.API_BASE+"/embed?platform=embellish&platform"+d.PLATFORM+"&nightmode="+(e?1:0),r.addMarker(n,"embed"),n.style.width="calc(100% - 310px)",n.style.height=d.HEIGHT+"px",n.style.border="none",n.style.borderRadius="8px",n.style.backgroundColor=e?"#1A1A1B":"#EEE",n.style.marginBottom="8px";const o=document.createElement("div");r.addMarker(o,"embed-container"),o.append(n),t.prepend(o)}}},499:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.injectLink=void 0;const d=n(984),r=n(809);t.injectLink=function(e){const t=document.createElement("div");t.classList.add("spacer"),r.addMarker(t,"spacer");const n=document.createElement("div");n.classList.add("morelink"),r.addMarker(t,"morelink");const o=document.createElement("a");o.textContent="Participate in r/"+d.SUBREDDIT,o.href=d.SUBREDDIT_PATH,r.addMarker(t,"link");const a=document.createElement("div");a.classList.add("nub"),r.addMarker(a,"nub"),n.append(o),n.append(a),t.append(n),e.before(t)}}},t={};function n(d){var r=t[d];if(void 0!==r)return r.exports;var o=t[d]={exports:{}};return e[d](o,o.exports,n),o.exports}(()=>{const e=n(984),t=n(221),d=n(499),r=null!==document.querySelector("body.res-nightmode"),o=null!==document.querySelector("body.listing-page"),a=location.pathname.toLowerCase(),c=a===e.SUBREDDIT_PATH||a===e.SUBREDDIT_PATH+"/",i=document.querySelector("div.sidebox.create");o&&c?t.injectEmbed(r):null!==i&&d.injectLink(i.parentElement)})()})();