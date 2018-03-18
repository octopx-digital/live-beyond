!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(1),r=o(i),l=n(2),a=o(l),c=n(3),s=o(c),u=n(4),d=o(u);!function(){function e(){!0===x&&t()}function t(){x?(x=!1,g.classList.remove("ion-android-close"),g.classList.add("ion-android-menu"),h.classList.remove("openmenu")):(x=!0,g.classList.remove("ion-android-menu"),g.classList.add("ion-android-close"),h.classList.add("openmenu"))}function n(e){switch(e.preventDefault(),e.currentTarget.id){case"header-logo":case"footer-logo":p.scrollIntoView({block:"start",inline:"start",behavior:"smooth"});break;case"menu-facts":S.scrollIntoView({block:"start",inline:"start",behavior:"smooth"});break;case"menu-stats":L.scrollIntoView({block:"start",inline:"start",behavior:"smooth"});break;case"menu-myths":w.scrollIntoView({block:"start",inline:"start",behavior:"smooth"});break;case"menu-video":q.scrollIntoView({block:"start",inline:"start",behavior:"smooth"});break;case"menu-events":E.scrollIntoView({block:"start",inline:"start",behavior:"smooth"});break;case"menu-insta":k.scrollIntoView({block:"start",inline:"start",behavior:"smooth"})}}function o(){var e=b.querySelectorAll(".banner-photo");z.to(e[1],2,{opacity:1},"+=5.0"),z.to(e[2],2,{opacity:1},"+=5.0"),z.to(e[1],0,{opacity:0}),z.to(e[3],2,{opacity:1},"+=5.0"),z.to(e[2],0,{opacity:0}),z.to(e[4],2,{opacity:1},"+=5.0"),z.to(e[3],0,{opacity:0}),z.to(e[5],2,{opacity:1},"+=5.0"),z.to(e[4],0,{opacity:0}),z.to(e[6],2,{opacity:1},"+=5.0"),z.to(e[5],0,{opacity:0}),z.to(e[7],2,{opacity:1},"+=5.0"),z.to(e[6],0,{opacity:0}),z.to(e[7],2,{opacity:0},"+=5.0"),z.play()}function i(){fetch("banner/getAll").then(function(e){return e.json()}).then(function(e){e.banner.forEach(function(e){var t=e.photo,n=e.alt,o='<img class="banner-photo media-change" src="images/'+t+'_large.jpg" alt="'+n+'">';b.innerHTML+=o}),r.default.setImageSize.call(document.querySelectorAll(".media-change")),o()}).catch(function(e){console.log(e)})}function l(){fetch("facts/getAll").then(function(e){return e.json()}).then(function(e){var t=document.querySelector("#fact-wrapper");e.facts.forEach(function(e){var n=e.name,o=e.description,i='<div id="'+n+'" class="fact">\n              <p class="fact-desc">'+o+"</p>\n              </div>";t.innerHTML+=i})}).catch(function(e){console.log(e)})}function c(){fetch("stats/getAll").then(function(e){return e.json()}).then(function(e){var t=L.querySelector("#stats-wrapper > ul");e.stats.forEach(function(e){var n='<li><div class="stats-organ"><div class="icon-wrapper"><img src="images/'+e.icon+'.svg" alt="'+e.organ_title+' icon"></div><p class="organ-name">'+e.organ_title+'</p></div><div class="organ-success"><p>'+e.success+'</p></div><div class="organ-queue"><p>'+e.queue+"</p></div></li>";t.innerHTML+=n})}).catch(function(e){console.log(e)})}function u(){fetch("video").then(function(e){return e.json()}).then(function(e){var t=e.video[0],n=document.querySelector("#video-wrapper"),o='<video id="video" class="video-change" poster="images/'+t.placeholder+'_large.jpg">\n              <source src="videos/'+t.video+'.mp4"></source></video>\n              <div id="over-video"><div id="video-btn">\n                  <i class="ion-play" aria-hidden="true"></i>\n                </div></div><div id="video-controls">\n                    <div id="seek-bar"><span></span></div>\n                  <div id="button-wrapper" class="clearfix">\n                      <div id="play-btn"><i class="ion-play video-ctrl-bt" aria-hidden="true"></i></div>\n                      <p id="video-time">0:00</p><div id="full-btn">\n                      <i class="ion-arrow-expand video-ctrl-bt" aria-hidden="true"></i>\n                      </div><div id="volume-bar"><div id="volume-bg"></div><div id="volume-fg"></div></div><div id="volume-btn">\n                        <i class="ion-android-volume-up video-ctrl-bt" aria-hidden="true"></i></div></div></div>';n.innerHTML=o,r.default.setVideoSize.call(document.querySelectorAll(".video-change"))}).catch(function(e){console.log(e)})}function v(){fetch("myths/getAll").then(function(e){return e.json()}).then(function(e){var t=document.querySelector("#myths-list");e.myths.forEach(function(e){var n=e.title,o=e.text,i=e.position;if(i<10)var r="0"+i;else var r=i;var l='<li><span class="coloured">'+r+".</span><h4>"+n+"</h4><p>"+o+"</p></li>";t.innerHTML+=l})}).catch(function(e){console.log(e)})}function m(){var e=document.querySelector("#events-container");e.innerHTML="",fetch("events/getAll").then(function(e){return e.json()}).then(function(t){t.events.forEach(function(t){var n=t.title,o=t.date,i=t.time,r=t.address,l=t.partner,a=t.logo,c=t.link,s="";null!=i&&(s='<div class="inline"><h5>When:</h5><p>'+i+"</p></div>");var u='<div class="events">\n            <div class="event-data">\n              <h2>'+n+"</h2>\n              <h3>"+o+"</h3>\n              "+s+'\n              <div class="inline"><h5>Where:</h5><p>'+r+'</p></div>\n              <p class="tiny">in association with</p>\n              <img src="images/'+a+'.png" alt="'+l+'">\n              <a href="'+c+'"><p>Details</p></a>\n              </div>\n            </div>';e.innerHTML+=u}),(0,a.default)()}).catch(function(e){console.log(e)})}function f(){var e=this,t=s.default.instagramContent;t.name.forEach(function(n,o){var i=document.createElement("div");i.className="insta-item";var r=document.createElement("img");r.src="images/"+t.photo[o]+"_large.jpg",r.alt=t.name[o],r.className="insta-photo media-change",i.appendChild(r);var l=document.createElement("div");l.className="insta-post";var a=document.createElement("p");a.className="insta-name",a.innerHTML=t.name[o],l.appendChild(a);var c=document.createElement("p");c.className="insta-user",c.innerHTML=t.username[o],l.appendChild(c);var s=document.createElement("p");s.className="insta-text",s.innerHTML=t.desc[o],l.appendChild(s),i.appendChild(l),e.appendChild(i)})}var p=document.querySelector("body"),h=document.querySelector("header"),g=h.querySelector("#hamburger-menu"),y=document.querySelectorAll(".section-link"),b=document.querySelector("#main-banner"),S=document.querySelector("#facts"),L=document.querySelector("#stats"),w=document.querySelector("#myths"),q=document.querySelector("#video-cont"),E=document.querySelector("#events"),k=document.querySelector("#instagram"),x=!1,z=new TimelineMax({repeat:-1,paused:!0});r.default.checkScreenSize.call(window.innerWidth),i.call(),l.call(),c.call(),v.call(),m.call(),u.call(),f.call(k.querySelector("#insta-wrapper")),window.addEventListener("load",d.default,!1),window.addEventListener("resize",a.default,!1),window.addEventListener("resize",r.default.checkScreenSize,!1),window.addEventListener("resize",r.default.changeImageSize,!1),window.addEventListener("scroll",e,!1),g.addEventListener("click",t,!1),y.forEach(function(e){e.addEventListener("click",n,!1)})}()},function(e,t,n){"use strict";function o(){a=this<c||window.innerWidth<c?"small":this<s||window.innerWidth<s?"medium":"large"}function i(){for(var e=0;e<this.length;e++)this[e].src=this[e].src.replace("large",a);u=a}function r(){for(var e=0;e<this.length;e++){this[e].poster=this[e].poster.replace("large",a);for(var t=this[e].querySelectorAll("source"),n=0;n<t.length;n++)t[n].src=t[n].src.replace("large",a)}u=a}function l(){if(u!==a){for(var e=document.querySelectorAll(".media-change"),t=0;t<e.length;t++)e[t].src=e[t].src.replace(u,a);for(var n=document.querySelectorAll(".video-change"),o=0;o<n.length;o++)n[o].poster=n[o].poster.replace(u,a);u=a}}var a,c=640,s=1024,u="large";e.exports={checkScreenSize:o,setImageSize:i,changeImageSize:l,setVideoSize:r}},function(e,t,n){"use strict";function o(){function e(){console.log("back"),0!==u?d(1):0===u?i.style.left=u+"px":(u=(r-1)*-c,i.style.left=u+"px")}function t(){console.log("forward");var e=i.getBoundingClientRect().right;if(window.innerWidth>640&&Math.ceil(e)<=Math.floor(s+a))return void console.log("equal");u>(r-1)*-a?d(-1):(u=0,i.style.left=u+"px")}console.log("called arrows");var n=document.querySelector(".nav-back"),o=document.querySelector(".nav-forward"),i=document.querySelector("#events-container"),r=i.children.length,l=i.querySelectorAll(".events"),a=l[0].offsetWidth;console.log("thumb "+a);var c=i.offsetWidth,s=document.querySelector(".events-holder").getBoundingClientRect().right,u=0;i.style.left=u+"px",n.addEventListener("click",e,!1),o.addEventListener("click",t,!1);var d=function(e){console.log("thumbWidth: "+c),console.log("thumb: "+a),u+=e*a,console.log("new position: "+u),i.style.left=u+"px"}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";var o={name:["Peter & Marcie","Lisa Bennet","Ellie Cho","Monica & Rachel"],username:["@petersmith","@plisabennet22","@elliecho","monicageller"],photo:["gallery_peter","gallery_lisa","gallery_ellie","gallery_monica"],desc:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend quis nulla id dapibus. Nam et nisl at diam pulvinar condimentum. Aliquam tempus venenatis nulla in blandit. Aliquam et ex magna.","Pellentesque scelerisque in massa vitae auctor. Aenean volutpat consequat commodo. Fusce ac magna eget lorem faucibus aliquet vel in libero.","Vivamus sed augue vehicula, vulputate dui et, varius arcu.","Nullam a leo ut tortor porta finibus eget varius ante. Nunc purus urna, ultrices non luctus sed, elementum eu elit. In vitae tellus vel ipsum gravida blandit id nec dui."]};e.exports={instagramContent:o}},function(e,t,n){"use strict";function o(){function e(){var e=z.querySelector(".video-ctrl-bt");E.paused?(S=a(E.duration),w.style.backgroundColor="transparent",E.play(),d(e),q.style.display="none",o(),c(),R=!0):(E.pause(),v(e),q.style.display="block",r(),H.reverse(),R=!1)}function t(){document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen?document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():E.requestFullscreen?E.requestFullscreen():E.mozRequestFullScreen?E.mozRequestFullScreen():E.webkitRequestFullscreen?E.webkitRequestFullscreen():E.msRequestFullscreen&&E.msRequestFullscreen()}function n(){var e=E.currentTime/E.duration*100;M.style.width=e.toString()+"%"}function o(){var e=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen;E.addEventListener("timeupdate",l,!1),E.addEventListener("timeupdate",n,!1),E.addEventListener("ended",m,!1),k.addEventListener("mouseout",c,!1),k.addEventListener("mouseover",s,!1),e||(w.addEventListener("mouseout",c,!1),w.addEventListener("mouseover",s,!1))}function i(e){var t=e.pageX,n=F.getBoundingClientRect(),o=n.right-n.left,i=(t-n.left)/o,r=E.duration*i;E.currentTime=r,M.style.width=(100*i).toString()+"%"}function r(){E.removeEventListener("timeupdate",l,!1),E.removeEventListener("ended",m,!1),w.removeEventListener("mouseout",c,!1),w.removeEventListener("mouseover",s,!1),k.removeEventListener("mouseout",c,!1),k.removeEventListener("mouseover",s,!1)}function l(){var e=a(E.currentTime);x.innerHTML=e+" / "+S}function a(e){var t=Math.floor(e),n=Math.floor(t/60),o=t-60*n;return n.toString()+":"+("0"+o.toString()).slice(-2)}function c(){H.play()}function s(){H.reverse()}function u(){H.to(k,1,{opacity:0})}function d(e){e.classList.remove("ion-play"),e.classList.add("ion-pause")}function v(e){e.classList.remove("ion-pause"),e.classList.add("ion-play")}function m(){var e=z.querySelector(".video-ctrl-bt");E.load(),v(e),q.style.display="block",x.innerHTML="0:00 / "+S,r(),H.reverse(),R=!1,M.style.width=null}function f(e){var t=e.pageX,n=I.getBoundingClientRect(),o=n.right-n.left,i=(t-n.left)/o,r=o*i/16;I.style.clip="rect(0, "+r+"rem, "+o/16+"rem, 0)",E.volume=i.toFixed(1),g()}function p(e){var t=e.pageX,n=I.getBoundingClientRect();t<n.left&&t>n.left-8?E.volume=0:t>n.right&&t<n.right+8&&(E.volume=1),h(),g()}function h(){var e=I.getBoundingClientRect(),t=e.right-e.left;I.style.clip="rect(0, "+E.volume*t/16+"rem, "+t/16+"rem, 0)"}function g(){for(var e=A.querySelector(".video-ctrl-bt"),t=void 0,n=0;n<e.classList.length;n++)e.classList[n].match("ion-android-volume")&&(t=e.classList[n]);e.classList.remove(t),0===E.volume?e.classList.add("ion-android-volume-off"):E.volume>.5?e.classList.add("ion-android-volume-up"):e.classList.add("ion-android-volume-down")}function y(){E.volume>0?(j=E.volume,E.volume=0):(E.volume=j,j=0),h(),g()}function b(){document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen?(w.style.zIndex=2147483647,k.style.zIndex=2147483648,_.classList.remove("ion-arrow-expand"),_.classList.add("ion-arrow-shrink"),w.removeEventListener("mouseout",c,!1),w.removeEventListener("mouseover",s,!1),E.currentTime>0&&!E.paused&&!E.ended&&c()):(w.style.zIndex=null,k.style.zIndex=null,_.classList.remove("ion-arrow-shrink"),_.classList.add("ion-arrow-expand"),E.currentTime>0&&!E.paused&&!E.ended&&(w.addEventListener("mouseout",c,!1),w.addEventListener("mouseover",s,!1)))}var S,L=document.querySelector("#video-wrapper"),w=L.querySelector("#over-video"),q=w.querySelector("#video-btn"),E=document.querySelector("#video"),k=L.querySelector("#video-controls"),x=k.querySelector("#video-time"),z=k.querySelector("#play-btn"),F=k.querySelector("#seek-bar"),M=F.querySelector("span"),C=k.querySelector("#volume-bar"),T=C.querySelector("#volume-bg"),I=C.querySelector("#volume-fg"),A=k.querySelector("#volume-btn"),_=k.querySelector("#full-btn > .video-ctrl-bt"),j=0,R=!1;E.volume=.8;var H=new TimelineLite({paused:!0});window.addEventListener("load",u,!1),E.addEventListener("click",e,!1),w.addEventListener("click",e,!1),z.addEventListener("click",e,!1),_.addEventListener("click",t,!1),F.addEventListener("mousedown",i,!1),T.addEventListener("mousedown",f,!1),I.addEventListener("mousedown",f,!1),C.addEventListener("mousedown",p,!1),A.addEventListener("click",y,!1),document.addEventListener("webkitfullscreenchange",b,!1),document.addEventListener("mozfullscreenchange",b,!1),document.addEventListener("fullscreenchange",b,!1)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o}]);