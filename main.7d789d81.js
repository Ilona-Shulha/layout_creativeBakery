parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return n(t)||s(t)||e(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){if(t){if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,r):void 0}}function s(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t){if(Array.isArray(t))return c(t)}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,s=new Array(r);e<r;e++)s[e]=t[e];return s}var i=document.getElementById("header-switch"),a=document.getElementById("header"),o=document.querySelectorAll(".slide-number"),w=document.querySelector(".switch__arrow--up"),u=document.querySelector(".switch__arrow--down"),l=function(t){["1","2","3"].forEach(function(r){t.target.classList.contains("slide-number--0".concat(r))&&_(r)})},_=function(r){switch(a.classList="header header--0".concat(r),r){case"1":u.classList="switch__arrow--down switch__arrow",w.classList="switch__arrow--up switch__arrow--up--passive switch__arrow";break;case"2":u.classList="switch__arrow--down switch__arrow",w.classList="switch__arrow--up switch__arrow";break;case"3":u.classList="switch__arrow--down switch__arrow--down--passive switch__arrow",w.classList="switch__arrow--up switch__arrow"}t(o).forEach(function(t){t.classList.contains("slide-number--0".concat(r))?t.classList.add("slide-number__active"):t.classList.remove("slide-number__active")})},d=function(r){var e=t(o).find(function(t){return t.classList.contains("slide-number__active")});if(r.target.classList.contains("switch__arrow--up"))switch(e.innerText[1]){case"3":case"2":_("".concat(e.innerText[1]-1))}if(r.target.classList.contains("switch__arrow--down"))switch(e.innerText[1]){case"1":case"2":_("".concat(+e.innerText[1]+1))}};i.addEventListener("click",function(t){l(t),d(t)}),new Swiper(".facts-swiper",{spaceBetween:50,slidesPerView:"auto",centeredSlides:!0});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.7d789d81.js.map