!function(n){function o(e){if(t[e])return t[e].exports;var c=t[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}var t={};o.m=n,o.c=t,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},o.p="",o(o.s=0)}([function(n,o,t){"use strict";!function(){function n(){!0===u&&o()}function o(){u?(u=!1,s.classList.remove("ion-android-close"),s.classList.add("ion-android-menu"),r.classList.remove("openmenu")):(u=!0,s.classList.remove("ion-android-menu"),s.classList.add("ion-android-close"),r.classList.add("openmenu"))}function t(){console.log("from getFacts");fetch("facts/getAll").then(function(n){return n.json()}).then(function(n){console.log(n)}).catch(function(n){console.log(n)})}function e(){console.log("from getStats");fetch("stats/getAll").then(function(n){return n.json()}).then(function(n){console.log(n)}).catch(function(n){console.log(n)})}function c(){console.log("from getMyths");fetch("myths/getAll").then(function(n){return n.json()}).then(function(n){console.log(n)}).catch(function(n){console.log(n)})}function l(){console.log("from getEvents");fetch("events/getAll").then(function(n){return n.json()}).then(function(n){console.log(n)}).catch(function(n){console.log(n)})}var r=document.querySelector("header"),s=r.querySelector("#hamburger-menu"),u=!1;t.call(),e.call(),c.call(),l.call(),window.addEventListener("scroll",n,!1),s.addEventListener("click",o,!1)}()}]);