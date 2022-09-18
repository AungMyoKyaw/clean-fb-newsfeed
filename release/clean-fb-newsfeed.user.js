// ==UserScript==
// @name        clean-fb-newsfeed
// @version     1.0.0-build.1663501882128
// @author      Aung Myo Kyaw
// @description clean-fb-newsfeed
// @homepage    https://github.com/AungMyoKyaw/clean-fb-newsfeed
// @match       *://*.facebook.com/
// @bugs        https://github.com/AungMyoKyaw/clean-fb-newsfeed/issues
// @icon        https://raw.githubusercontent.com/AungMyoKyaw/clean-fb-newsfeed/master/release/clean-fb-newsfeed.icon.png
// @downloadURL https://raw.githubusercontent.com/AungMyoKyaw/clean-fb-newsfeed/master/release/clean-fb-newsfeed.user.js
// @updateURL   https://raw.githubusercontent.com/AungMyoKyaw/clean-fb-newsfeed/master/release/clean-fb-newsfeed.meta.js
// ==/UserScript==

(()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function t(){for(var e=document.querySelectorAll("div[role=feed]"),t=0;t<e.length;t++)e[t].innerHTML=""}function r(){for(var e=document.querySelectorAll("div[aria-label=Stories]"),t=0;t<e.length;t++)e[t].style.display="none"}function n(){for(var e=document.querySelectorAll("div[aria-label=Messenger]"),t=0;t<e.length-1;t++){var r=e[t];r.style.opacity="0",r.attributes["aria-label"]="Messenger"}}function o(){for(var e=document.querySelectorAll("div[aria-label='video chats that people can join']"),t=0;t<e.length;t++)e[t].style.display="none"}function l(){for(var e=document.querySelectorAll("div[aria-label='Create a post']"),t=0;t<e.length;t++)e[t].style.display="none"}function i(){for(var e=document.querySelectorAll("div[role=article]"),t=0;t<e.length;t++){var r=e[t];((e[t].innerText||"").match(/something went wrong/gi)||[]).length>0&&(r.style.display="block",r.innerHTML="<div style='display: flex; align-items: center; justify-content: center; height: 15em;'><div style='color: white; font-size: 3em;'>❄️</div></div>")}}var a=document.querySelector("body");new MutationObserver((function(a,c){var u,f=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0,l=function(){};return{s:l,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(a);try{for(f.s();!(u=f.n()).done;)u.value,t(),i(),r(),n(),o(),l()}catch(e){f.e(e)}finally{f.f()}})).observe(a,{attributes:!0,childList:!0,subtree:!0})})();