!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="js/",n(n.s=0)}([function(e,t,n){"use strict";n(1);document.addEventListener("DOMContentLoaded",(function(){}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=document.querySelectorAll(".accordion button");r.forEach((function(e){var t=e.nextElementSibling;e.addEventListener("click",(function(){e.classList.contains("active")?(e.classList.remove("active"),t.style.maxHeight=null,e.setAttribute("aria-expanded",!1),t.setAttribute("aria-hidden",!0)):(e.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px",t.setAttribute("aria-hidden",!1),e.setAttribute("aria-expanded",!0))}))})),t.accButtons=r}]);
//# sourceMappingURL=app.js.map