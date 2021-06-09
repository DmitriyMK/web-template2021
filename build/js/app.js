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
eval("\n\n// import gsap from 'gsap';\n// import { ScrollTrigger } from \"gsap/dist/ScrollTrigger\";\n// import Splitting from \"splitting\";\n// import { preloadImages } from './lib/utils';\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log('hello');\n  // const tl = gsap.timeline({defaults:{opacity:1, ease:\"back\"}});\n\n  // Promise.all([preloadImages(\".preload__img\")]).then(() => {\n  //   document.body.classList.remove(\"loading\");\n\n\n  //   tl.fromTo(\".animate__content .word\",\n  //     { y: \"+=35\", visibility: \"hidden\", opacity: 0 },\n  //     {\n  //       y: \"0\",\n  //       opacity: 1,\n  //       visibility: \"visible\",\n  //       duration: 1.2,\n  //       stagger: 0.05,\n  //       ease: \"Power4.easeOut\",\n  //     }\n  //   )\n  // });\n\n  // window.onload = function(){{}\n});\n\n// gsap.registerPlugin(ScrollTrigger);\n// gsap.config({\n//   nullTargetWarn: false,\n// });\n\n// ScrollTrigger.saveStyles(\".mobile, .desktop\");\n// ScrollTrigger.matchMedia({\n//   // \"(min-width: 1024px)\": function () {\n//   //   gsap.set(\".portfolio__details\", { yPercent: -20 });\n//   // },\n\n\n//   \"all\": function() {\n//     gsap.to(\".portfolio__img\", {\n//       scrollTrigger: {\n//         trigger: \".portfolio\",\n//         scrub: 1,\n//         toggleActions: \"restart pause reverse pause\",\n//         // markers: true\n//       },\n//       yPercent: -15,\n//     });\n//   }\n// });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuLy8gaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiO1xuLy8gaW1wb3J0IFNwbGl0dGluZyBmcm9tIFwic3BsaXR0aW5nXCI7XG4vLyBpbXBvcnQgeyBwcmVsb2FkSW1hZ2VzIH0gZnJvbSAnLi9saWIvdXRpbHMnO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gIC8vIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7ZGVmYXVsdHM6e29wYWNpdHk6MSwgZWFzZTpcImJhY2tcIn19KTtcblxuICAvLyBQcm9taXNlLmFsbChbcHJlbG9hZEltYWdlcyhcIi5wcmVsb2FkX19pbWdcIildKS50aGVuKCgpID0+IHtcbiAgLy8gICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpO1xuXG5cblxuICAvLyAgIHRsLmZyb21UbyhcIi5hbmltYXRlX19jb250ZW50IC53b3JkXCIsXG4gIC8vICAgICB7IHk6IFwiKz0zNVwiLCB2aXNpYmlsaXR5OiBcImhpZGRlblwiLCBvcGFjaXR5OiAwIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHk6IFwiMFwiLFxuICAvLyAgICAgICBvcGFjaXR5OiAxLFxuICAvLyAgICAgICB2aXNpYmlsaXR5OiBcInZpc2libGVcIixcbiAgLy8gICAgICAgZHVyYXRpb246IDEuMixcbiAgLy8gICAgICAgc3RhZ2dlcjogMC4wNSxcbiAgLy8gICAgICAgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwiLFxuICAvLyAgICAgfVxuICAvLyAgIClcbiAgLy8gfSk7XG5cbiAgLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7e31cbn0pO1xuXG5cblxuXG4vLyBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuLy8gZ3NhcC5jb25maWcoe1xuLy8gICBudWxsVGFyZ2V0V2FybjogZmFsc2UsXG4vLyB9KTtcblxuLy8gU2Nyb2xsVHJpZ2dlci5zYXZlU3R5bGVzKFwiLm1vYmlsZSwgLmRlc2t0b3BcIik7XG4vLyBTY3JvbGxUcmlnZ2VyLm1hdGNoTWVkaWEoe1xuLy8gICAvLyBcIihtaW4td2lkdGg6IDEwMjRweClcIjogZnVuY3Rpb24gKCkge1xuLy8gICAvLyAgIGdzYXAuc2V0KFwiLnBvcnRmb2xpb19fZGV0YWlsc1wiLCB7IHlQZXJjZW50OiAtMjAgfSk7XG4vLyAgIC8vIH0sXG5cblxuLy8gICBcImFsbFwiOiBmdW5jdGlvbigpIHtcbi8vICAgICBnc2FwLnRvKFwiLnBvcnRmb2xpb19faW1nXCIsIHtcbi8vICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbi8vICAgICAgICAgdHJpZ2dlcjogXCIucG9ydGZvbGlvXCIsXG4vLyAgICAgICAgIHNjcnViOiAxLFxuLy8gICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInJlc3RhcnQgcGF1c2UgcmV2ZXJzZSBwYXVzZVwiLFxuLy8gICAgICAgICAvLyBtYXJrZXJzOiB0cnVlXG4vLyAgICAgICB9LFxuLy8gICAgICAgeVBlcmNlbnQ6IC0xNSxcbi8vICAgICB9KTtcbi8vICAgfVxuLy8gfSk7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });