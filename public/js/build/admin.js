!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}({5:function(e,t,n){"use strict";var r=n(6),o=function(e){return e&&e.__esModule?e:{default:e}}(r);!function(){function e(e){var n=e.currentTarget.getAttribute("name"),r="admin/"+n;fetch(r).then(function(e){return e.json()}).then(function(e){var r=document.querySelector("#item-add"),o=document.querySelector("#item-wrapper"),a='<a data-table="'+n+'" href="/admin/add'+n+'">New</a>';for(r.innerHTML=a;o.firstChild;)o.removeChild(o.firstChild);e.data.forEach(function(e){var t="<li>"+Object.keys(e)[1]+": "+e[Object.keys(e)[1]]+'<a data-table="'+n+'" href="/admin/edit'+n+"/"+e.id+'">Edit</a><a class="delete-btn" data-table="'+n+'" data-delete="'+e.id+'" href="#">Delete</a></li>';o.innerHTML+=t}),o.querySelectorAll(".delete-btn").forEach(function(e){e.addEventListener("click",t,!1)})}).catch(function(e){console.log(e)})}function t(e){e.preventDefault();var t=e.currentTarget.dataset.delete,n=e.currentTarget.dataset.table,r="/"+n+"/delete/"+t;fetch(r,{method:"delete"}).then(function(e){return e.json()}).then(function(e){window.location.replace("/admin")}).catch(function(e){console.log(e)})}(document.querySelectorAll("button").forEach(function(t){t.getAttribute("name"),t.addEventListener("click",e,!1)}),document.querySelector("#register"))&&document.querySelector("#register").addEventListener("click",o.default.registerUser,!1)}()},6:function(e,t,n){"use strict";function r(){var e=document.querySelector('input[name="fname"]').value,t=document.querySelector('input[name="username"]').value,n=document.querySelector('input[name="password"]').value,r=document.querySelector('input[name="email"]').value;fetch("/login/register",{headers:{"Content-Type":"application/json",Accept:"application/json, text-plain, */*","X-Requested-With":"XMLHttpRequest"},method:"post",body:JSON.stringify({fname:e,username:t,pass:n,email:r})}).then(function(e){console.log("success")}).catch(function(e){console.log(e)})}e.exports={registerUser:r}}});