/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// import gsap from 'gsap';\n// import { ScrollTrigger } from \"gsap/dist/ScrollTrigger\";\n// import Splitting from \"splitting\";\n// import { preloadImages } from './lib/utils';\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log('hello');\n  // const tl = gsap.timeline({defaults:{opacity:1, ease:\"back\"}});\n\n  // Promise.all([preloadImages(\".preload__img\")]).then(() => {\n  //   document.body.classList.remove(\"loading\");\n\n\n  //   tl.fromTo(\".animate__content .word\",\n  //     { y: \"+=35\", visibility: \"hidden\", opacity: 0 },\n  //     {\n  //       y: \"0\",\n  //       opacity: 1,\n  //       visibility: \"visible\",\n  //       duration: 1.2,\n  //       stagger: 0.05,\n  //       ease: \"Power4.easeOut\",\n  //     }\n  //   )\n  // });\n\n  // window.onload = function(){{}\n});\n\n// gsap.registerPlugin(ScrollTrigger);\n// gsap.config({\n//   nullTargetWarn: false,\n// });\n\n// ScrollTrigger.saveStyles(\".mobile, .desktop\");\n// ScrollTrigger.matchMedia({\n//   // \"(min-width: 1024px)\": function () {\n//   //   gsap.set(\".portfolio__details\", { yPercent: -20 });\n//   // },\n\n\n//   \"all\": function() {\n//     gsap.to(\".portfolio__img\", {\n//       scrollTrigger: {\n//         trigger: \".portfolio\",\n//         scrub: 1,\n//         toggleActions: \"restart pause reverse pause\",\n//         // markers: true\n//       },\n//       yPercent: -15,\n//     });\n//   }\n// });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xyXG4vLyBpbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XHJcbi8vIGltcG9ydCBTcGxpdHRpbmcgZnJvbSBcInNwbGl0dGluZ1wiO1xyXG4vLyBpbXBvcnQgeyBwcmVsb2FkSW1hZ2VzIH0gZnJvbSAnLi9saWIvdXRpbHMnO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnaGVsbG8nKTtcclxuICAvLyBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe2RlZmF1bHRzOntvcGFjaXR5OjEsIGVhc2U6XCJiYWNrXCJ9fSk7XHJcblxyXG4gIC8vIFByb21pc2UuYWxsKFtwcmVsb2FkSW1hZ2VzKFwiLnByZWxvYWRfX2ltZ1wiKV0pLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcclxuXHJcblxyXG5cclxuICAvLyAgIHRsLmZyb21UbyhcIi5hbmltYXRlX19jb250ZW50IC53b3JkXCIsXHJcbiAgLy8gICAgIHsgeTogXCIrPTM1XCIsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIG9wYWNpdHk6IDAgfSxcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIHk6IFwiMFwiLFxyXG4gIC8vICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgLy8gICAgICAgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsXHJcbiAgLy8gICAgICAgZHVyYXRpb246IDEuMixcclxuICAvLyAgICAgICBzdGFnZ2VyOiAwLjA1LFxyXG4gIC8vICAgICAgIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIixcclxuICAvLyAgICAgfVxyXG4gIC8vICAgKVxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXt7fVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbi8vIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcbi8vIGdzYXAuY29uZmlnKHtcclxuLy8gICBudWxsVGFyZ2V0V2FybjogZmFsc2UsXHJcbi8vIH0pO1xyXG5cclxuLy8gU2Nyb2xsVHJpZ2dlci5zYXZlU3R5bGVzKFwiLm1vYmlsZSwgLmRlc2t0b3BcIik7XHJcbi8vIFNjcm9sbFRyaWdnZXIubWF0Y2hNZWRpYSh7XHJcbi8vICAgLy8gXCIobWluLXdpZHRoOiAxMDI0cHgpXCI6IGZ1bmN0aW9uICgpIHtcclxuLy8gICAvLyAgIGdzYXAuc2V0KFwiLnBvcnRmb2xpb19fZGV0YWlsc1wiLCB7IHlQZXJjZW50OiAtMjAgfSk7XHJcbi8vICAgLy8gfSxcclxuXHJcblxyXG4vLyAgIFwiYWxsXCI6IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgZ3NhcC50byhcIi5wb3J0Zm9saW9fX2ltZ1wiLCB7XHJcbi8vICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuLy8gICAgICAgICB0cmlnZ2VyOiBcIi5wb3J0Zm9saW9cIixcclxuLy8gICAgICAgICBzY3J1YjogMSxcclxuLy8gICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInJlc3RhcnQgcGF1c2UgcmV2ZXJzZSBwYXVzZVwiLFxyXG4vLyAgICAgICAgIC8vIG1hcmtlcnM6IHRydWVcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgeVBlcmNlbnQ6IC0xNSxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });