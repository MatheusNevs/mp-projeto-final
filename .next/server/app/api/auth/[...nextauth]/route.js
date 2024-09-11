"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsarah%2FDocuments%2FStruct%2FMP%2Fmp-projeto-final%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsarah%2FDocuments%2FStruct%2FMP%2Fmp-projeto-final&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsarah%2FDocuments%2FStruct%2FMP%2Fmp-projeto-final%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsarah%2FDocuments%2FStruct%2FMP%2Fmp-projeto-final&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_sarah_Documents_Struct_MP_mp_projeto_final_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/sarah/Documents/Struct/MP/mp-projeto-final/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_sarah_Documents_Struct_MP_mp_projeto_final_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjVfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc2FyYWglMkZEb2N1bWVudHMlMkZTdHJ1Y3QlMkZNUCUyRm1wLXByb2pldG8tZmluYWwlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZzYXJhaCUyRkRvY3VtZW50cyUyRlN0cnVjdCUyRk1QJTJGbXAtcHJvamV0by1maW5hbCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0M7QUFDckg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tcC1wcm9qZXRvLWZpbmFsLz80ZDRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL3NhcmFoL0RvY3VtZW50cy9TdHJ1Y3QvTVAvbXAtcHJvamV0by1maW5hbC9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL1N0cnVjdC9NUC9tcC1wcm9qZXRvLWZpbmFsL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsarah%2FDocuments%2FStruct%2FMP%2Fmp-projeto-final%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsarah%2FDocuments%2FStruct%2FMP%2Fmp-projeto-final&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/server/auth */ \"(rsc)/./src/server/auth.ts\");\n\n\n// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_server_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFFVztBQUU1QyxtRUFBbUU7QUFDbkUsTUFBTUUsVUFBVUYsZ0RBQVFBLENBQUNDLHFEQUFXQTtBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXAtcHJvamV0by1maW5hbC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5cbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIn4vc2VydmVyL2F1dGhcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/server/auth.ts":
/*!****************************!*\
  !*** ./src/server/auth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getServerAuthSession: () => (/* binding */ getServerAuthSession)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/.pnpm/@auth+prisma-adapter@1.6.0_@prisma+client@5.18.0_prisma@5.18.0_/node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/env */ \"(rsc)/./src/env.js\");\n/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/server/db */ \"(rsc)/./src/server/db.ts\");\n\n\n\n\n\n/**\n * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.\n *\n * @see https://next-auth.js.org/configuration/options\n */ const authOptions = {\n    callbacks: {\n        session: ({ session, user })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id\n                }\n            })\n    },\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_4__.db),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: _env__WEBPACK_IMPORTED_MODULE_3__.env.GOOGLE_CLIENT_ID,\n            clientSecret: _env__WEBPACK_IMPORTED_MODULE_3__.env.GOOGLE_CLIENT_SECRET\n        })\n    ]\n};\n/**\n * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.\n *\n * @see https://next-auth.js.org/configuration/nextjs\n */ const getServerAuthSession = ()=>(0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUQ7QUFLbEM7QUFFcUM7QUFDNUI7QUFDSztBQXVCakM7Ozs7Q0FJQyxHQUNNLE1BQU1LLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RDLFNBQVMsQ0FBQyxFQUFFQSxPQUFPLEVBQUVDLElBQUksRUFBRSxHQUFNO2dCQUMvQixHQUFHRCxPQUFPO2dCQUNWQyxNQUFNO29CQUNKLEdBQUdELFFBQVFDLElBQUk7b0JBQ2ZDLElBQUlELEtBQUtDLEVBQUU7Z0JBQ2I7WUFDRjtJQUNGO0lBQ0FDLFNBQVNWLG1FQUFhQSxDQUFDSSwwQ0FBRUE7SUFDekJPLFdBQVc7UUFDVFQsc0VBQWNBLENBQUM7WUFDYlUsVUFBVVQscUNBQUdBLENBQUNVLGdCQUFnQjtZQUM5QkMsY0FBY1gscUNBQUdBLENBQUNZLG9CQUFvQjtRQUN4QztLQVVEO0FBQ0gsRUFBRTtBQUVGOzs7O0NBSUMsR0FDTSxNQUFNQyx1QkFBdUIsSUFBTWYsMkRBQWdCQSxDQUFDSSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXAtcHJvamV0by1maW5hbC8uL3NyYy9zZXJ2ZXIvYXV0aC50cz8yMmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCB7XG4gIGdldFNlcnZlclNlc3Npb24sXG4gIHR5cGUgRGVmYXVsdFNlc3Npb24sXG4gIHR5cGUgTmV4dEF1dGhPcHRpb25zLFxufSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyB0eXBlIEFkYXB0ZXIgfSBmcm9tIFwibmV4dC1hdXRoL2FkYXB0ZXJzXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwifi9lbnZcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vc2VydmVyL2RiXCI7XG5cbi8qKlxuICogTW9kdWxlIGF1Z21lbnRhdGlvbiBmb3IgYG5leHQtYXV0aGAgdHlwZXMuIEFsbG93cyB1cyB0byBhZGQgY3VzdG9tIHByb3BlcnRpZXMgdG8gdGhlIGBzZXNzaW9uYFxuICogb2JqZWN0IGFuZCBrZWVwIHR5cGUgc2FmZXR5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2dldHRpbmctc3RhcnRlZC90eXBlc2NyaXB0I21vZHVsZS1hdWdtZW50YXRpb25cbiAqL1xuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XG4gIGludGVyZmFjZSBTZXNzaW9uIGV4dGVuZHMgRGVmYXVsdFNlc3Npb24ge1xuICAgIHVzZXI6IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAvLyAuLi5vdGhlciBwcm9wZXJ0aWVzXG4gICAgICAvLyByb2xlOiBVc2VyUm9sZTtcbiAgICB9ICYgRGVmYXVsdFNlc3Npb25bXCJ1c2VyXCJdO1xuICB9XG5cbiAgLy8gaW50ZXJmYWNlIFVzZXIge1xuICAvLyAgIC8vIC4uLm90aGVyIHByb3BlcnRpZXNcbiAgLy8gICAvLyByb2xlOiBVc2VyUm9sZTtcbiAgLy8gfVxufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIE5leHRBdXRoLmpzIHVzZWQgdG8gY29uZmlndXJlIGFkYXB0ZXJzLCBwcm92aWRlcnMsIGNhbGxiYWNrcywgZXRjLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9uc1xuICovXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdXNlciB9KSA9PiAoe1xuICAgICAgLi4uc2Vzc2lvbixcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgLi4uc2Vzc2lvbi51c2VyLFxuICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoZGIpIGFzIEFkYXB0ZXIsXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBlbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIC8qKlxuICAgICAqIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlLlxuICAgICAqXG4gICAgICogTW9zdCBvdGhlciBwcm92aWRlcnMgcmVxdWlyZSBhIGJpdCBtb3JlIHdvcmsgdGhhbiB0aGUgRGlzY29yZCBwcm92aWRlci4gRm9yIGV4YW1wbGUsIHRoZVxuICAgICAqIEdpdEh1YiBwcm92aWRlciByZXF1aXJlcyB5b3UgdG8gYWRkIHRoZSBgcmVmcmVzaF90b2tlbl9leHBpcmVzX2luYCBmaWVsZCB0byB0aGUgQWNjb3VudFxuICAgICAqIG1vZGVsLiBSZWZlciB0byB0aGUgTmV4dEF1dGguanMgZG9jcyBmb3IgdGhlIHByb3ZpZGVyIHlvdSB3YW50IHRvIHVzZS4gRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3Byb3ZpZGVycy9naXRodWJcbiAgICAgKi9cbiAgXSxcbn07XG5cbi8qKlxuICogV3JhcHBlciBmb3IgYGdldFNlcnZlclNlc3Npb25gIHNvIHRoYXQgeW91IGRvbid0IG5lZWQgdG8gaW1wb3J0IHRoZSBgYXV0aE9wdGlvbnNgIGluIGV2ZXJ5IGZpbGUuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9uZXh0anNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlckF1dGhTZXNzaW9uID0gKCkgPT4gZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsImdldFNlcnZlclNlc3Npb24iLCJHb29nbGVQcm92aWRlciIsImVudiIsImRiIiwiYXV0aE9wdGlvbnMiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlciIsImlkIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiZ2V0U2VydmVyQXV0aFNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/server/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/server/db.ts":
/*!**************************!*\
  !*** ./src/server/db.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/env */ \"(rsc)/./src/env.js\");\n\n\nconst createPrismaClient = ()=>new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n        log: _env__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n            \"query\",\n            \"error\",\n            \"warn\"\n        ] : [\n            \"error\"\n        ]\n    });\nconst globalForPrisma = globalThis;\nconst db = globalForPrisma.prisma ?? createPrismaClient();\nif (_env__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") globalForPrisma.prisma = db;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFbEI7QUFFNUIsTUFBTUUscUJBQXFCLElBQ3pCLElBQUlGLHdEQUFZQSxDQUFDO1FBQ2ZHLEtBQ0VGLHFDQUFHQSxDQUFDRyxRQUFRLEtBQUssZ0JBQWdCO1lBQUM7WUFBUztZQUFTO1NBQU8sR0FBRztZQUFDO1NBQVE7SUFDM0U7QUFFRixNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLEtBQUtGLGdCQUFnQkcsTUFBTSxJQUFJTixxQkFBcUI7QUFFakUsSUFBSUQscUNBQUdBLENBQUNHLFFBQVEsS0FBSyxjQUFjQyxnQkFBZ0JHLE1BQU0sR0FBR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tcC1wcm9qZXRvLWZpbmFsLy4vc3JjL3NlcnZlci9kYi50cz9hYTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwifi9lbnZcIjtcblxuY29uc3QgY3JlYXRlUHJpc21hQ2xpZW50ID0gKCkgPT5cbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOlxuICAgICAgZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBbXCJxdWVyeVwiLCBcImVycm9yXCIsIFwid2FyblwiXSA6IFtcImVycm9yXCJdLFxuICB9KTtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVQcmlzbWFDbGllbnQ+IHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGRiID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBjcmVhdGVQcmlzbWFDbGllbnQoKTtcblxuaWYgKGVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBkYjtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJlbnYiLCJjcmVhdGVQcmlzbWFDbGllbnQiLCJsb2ciLCJOT0RFX0VOViIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJkYiIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/server/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-nextjs */ \"(rsc)/./node_modules/.pnpm/@t3-oss+env-nextjs@0.10.1_typescript@5.5.4_zod@3.23.8/node_modules/@t3-oss/env-nextjs/dist/index.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/.pnpm/zod@3.23.8/node_modules/zod/lib/index.mjs\");\n\n\nconst env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n    /**\n   * Specify your server-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars.\n   */ server: {\n        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url(),\n        NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([\n            \"development\",\n            \"test\",\n            \"production\"\n        ]).default(\"development\"),\n        NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),\n        NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n        // Since NextAuth.js automatically uses the VERCEL_URL if present.\n        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n        process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_1__.z.string() : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url()),\n        GOOGLE_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        GOOGLE_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()\n    },\n    /**\n   * Specify your client-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars. To expose them to the client, prefix them with\n   * `NEXT_PUBLIC_`.\n   */ client: {\n    },\n    /**\n   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.\n   * middlewares) or client-side so we need to destruct manually.\n   */ runtimeEnv: {\n        DATABASE_URL: process.env.DATABASE_URL,\n        NODE_ENV: \"development\",\n        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,\n        NEXTAUTH_URL: process.env.NEXTAUTH_URL,\n        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,\n        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET\n    },\n    /**\n   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially\n   * useful for Docker builds.\n   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION,\n    /**\n   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and\n   * `SOME_VAR=''` will throw an error.\n   */ emptyStringAsUndefined: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZW52LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUN2QjtBQUVqQixNQUFNRSxNQUFNRiw2REFBU0EsQ0FBQztJQUMzQjs7O0dBR0MsR0FDREcsUUFBUTtRQUNOQyxjQUFjSCxrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHO1FBQzVCQyxVQUFVTixrQ0FBQ0EsQ0FDUk8sSUFBSSxDQUFDO1lBQUM7WUFBZTtZQUFRO1NBQWEsRUFDMUNDLE9BQU8sQ0FBQztRQUNYQyxpQkFDRUMsTUFBcUMsR0FDakNWLENBQVUsR0FDVkEsa0NBQUNBLENBQUNJLE1BQU0sR0FBR08sUUFBUTtRQUN6QkMsY0FBY1osa0NBQUNBLENBQUNhLFVBQVUsQ0FDeEIsdUVBQXVFO1FBQ3ZFLGtFQUFrRTtRQUNsRSxDQUFDQyxNQUFRSixRQUFRVCxHQUFHLENBQUNjLFVBQVUsSUFBSUQsS0FDbkMsc0VBQXNFO1FBQ3RFSixRQUFRVCxHQUFHLENBQUNlLE1BQU0sR0FBR2hCLGtDQUFDQSxDQUFDSSxNQUFNLEtBQUtKLGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdDLEdBQUc7UUFFbERZLGtCQUFrQmpCLGtDQUFDQSxDQUFDSSxNQUFNO1FBQzFCYyxzQkFBc0JsQixrQ0FBQ0EsQ0FBQ0ksTUFBTTtJQUNoQztJQUVBOzs7O0dBSUMsR0FDRGUsUUFBUTtJQUVSO0lBRUE7OztHQUdDLEdBQ0RDLFlBQVk7UUFDVmpCLGNBQWNPLFFBQVFULEdBQUcsQ0FBQ0UsWUFBWTtRQUN0Q0csVUEzQ0o7UUE0Q0lHLGlCQUFpQkMsUUFBUVQsR0FBRyxDQUFDUSxlQUFlO1FBQzVDRyxjQUFjRixRQUFRVCxHQUFHLENBQUNXLFlBQVk7UUFDdENLLGtCQUFrQlAsUUFBUVQsR0FBRyxDQUFDZ0IsZ0JBQWdCO1FBQzlDQyxzQkFBc0JSLFFBQVFULEdBQUcsQ0FBQ2lCLG9CQUFvQjtJQUN4RDtJQUNBOzs7R0FHQyxHQUNERyxnQkFBZ0IsQ0FBQyxDQUFDWCxRQUFRVCxHQUFHLENBQUNxQixtQkFBbUI7SUFDakQ7OztHQUdDLEdBQ0RDLHdCQUF3QjtBQUMxQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXAtcHJvamV0by1maW5hbC8uL3NyYy9lbnYuanM/MTBiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbnYgfSBmcm9tIFwiQHQzLW9zcy9lbnYtbmV4dGpzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY29uc3QgZW52ID0gY3JlYXRlRW52KHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICAgKi9cbiAgc2VydmVyOiB7XG4gICAgREFUQUJBU0VfVVJMOiB6LnN0cmluZygpLnVybCgpLFxuICAgIE5PREVfRU5WOiB6XG4gICAgICAuZW51bShbXCJkZXZlbG9wbWVudFwiLCBcInRlc3RcIiwgXCJwcm9kdWN0aW9uXCJdKVxuICAgICAgLmRlZmF1bHQoXCJkZXZlbG9wbWVudFwiKSxcbiAgICBORVhUQVVUSF9TRUNSRVQ6XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgICAgPyB6LnN0cmluZygpXG4gICAgICAgIDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIE5FWFRBVVRIX1VSTDogei5wcmVwcm9jZXNzKFxuICAgICAgLy8gVGhpcyBtYWtlcyBWZXJjZWwgZGVwbG95bWVudHMgbm90IGZhaWwgaWYgeW91IGRvbid0IHNldCBORVhUQVVUSF9VUkxcbiAgICAgIC8vIFNpbmNlIE5leHRBdXRoLmpzIGF1dG9tYXRpY2FsbHkgdXNlcyB0aGUgVkVSQ0VMX1VSTCBpZiBwcmVzZW50LlxuICAgICAgKHN0cikgPT4gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCA/PyBzdHIsXG4gICAgICAvLyBWRVJDRUxfVVJMIGRvZXNuJ3QgaW5jbHVkZSBgaHR0cHNgIHNvIGl0IGNhbnQgYmUgdmFsaWRhdGVkIGFzIGEgVVJMXG4gICAgICBwcm9jZXNzLmVudi5WRVJDRUwgPyB6LnN0cmluZygpIDogei5zdHJpbmcoKS51cmwoKVxuICAgICksXG4gICAgR09PR0xFX0NMSUVOVF9JRDogei5zdHJpbmcoKSxcbiAgICBHT09HTEVfQ0xJRU5UX1NFQ1JFVDogei5zdHJpbmcoKSxcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmeSB5b3VyIGNsaWVudC1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlcyBzY2hlbWEgaGVyZS4gVGhpcyB3YXkgeW91IGNhbiBlbnN1cmUgdGhlIGFwcFxuICAgKiBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuIFRvIGV4cG9zZSB0aGVtIHRvIHRoZSBjbGllbnQsIHByZWZpeCB0aGVtIHdpdGhcbiAgICogYE5FWFRfUFVCTElDX2AuXG4gICAqL1xuICBjbGllbnQ6IHtcbiAgICAvLyBORVhUX1BVQkxJQ19DTElFTlRWQVI6IHouc3RyaW5nKCksXG4gIH0sXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4ndCBkZXN0cnVjdCBgcHJvY2Vzcy5lbnZgIGFzIGEgcmVndWxhciBvYmplY3QgaW4gdGhlIE5leHQuanMgZWRnZSBydW50aW1lcyAoZS5nLlxuICAgKiBtaWRkbGV3YXJlcykgb3IgY2xpZW50LXNpZGUgc28gd2UgbmVlZCB0byBkZXN0cnVjdCBtYW51YWxseS5cbiAgICovXG4gIHJ1bnRpbWVFbnY6IHtcbiAgICBEQVRBQkFTRV9VUkw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgICBOT0RFX0VOVjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gICAgTkVYVEFVVEhfU0VDUkVUOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gICAgTkVYVEFVVEhfVVJMOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwsXG4gICAgR09PR0xFX0NMSUVOVF9JRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICBHT09HTEVfQ0xJRU5UX1NFQ1JFVDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gIH0sXG4gIC8qKlxuICAgKiBSdW4gYGJ1aWxkYCBvciBgZGV2YCB3aXRoIGBTS0lQX0VOVl9WQUxJREFUSU9OYCB0byBza2lwIGVudiB2YWxpZGF0aW9uLiBUaGlzIGlzIGVzcGVjaWFsbHlcbiAgICogdXNlZnVsIGZvciBEb2NrZXIgYnVpbGRzLlxuICAgKi9cbiAgc2tpcFZhbGlkYXRpb246ICEhcHJvY2Vzcy5lbnYuU0tJUF9FTlZfVkFMSURBVElPTixcbiAgLyoqXG4gICAqIE1ha2VzIGl0IHNvIHRoYXQgZW1wdHkgc3RyaW5ncyBhcmUgdHJlYXRlZCBhcyB1bmRlZmluZWQuIGBTT01FX1ZBUjogei5zdHJpbmcoKWAgYW5kXG4gICAqIGBTT01FX1ZBUj0nJ2Agd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICovXG4gIGVtcHR5U3RyaW5nQXNVbmRlZmluZWQ6IHRydWUsXG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVFbnYiLCJ6IiwiZW52Iiwic2VydmVyIiwiREFUQUJBU0VfVVJMIiwic3RyaW5nIiwidXJsIiwiTk9ERV9FTlYiLCJlbnVtIiwiZGVmYXVsdCIsIk5FWFRBVVRIX1NFQ1JFVCIsInByb2Nlc3MiLCJvcHRpb25hbCIsIk5FWFRBVVRIX1VSTCIsInByZXByb2Nlc3MiLCJzdHIiLCJWRVJDRUxfVVJMIiwiVkVSQ0VMIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2xpZW50IiwicnVudGltZUVudiIsInNraXBWYWxpZGF0aW9uIiwiU0tJUF9FTlZfVkFMSURBVElPTiIsImVtcHR5U3RyaW5nQXNVbmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/env.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/next-auth@4.24.7_next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/@babel+runtime@7.25.0","vendor-chunks/jose@4.15.9","vendor-chunks/zod@3.23.8","vendor-chunks/openid-client@5.6.5","vendor-chunks/oauth@0.9.15","vendor-chunks/object-hash@2.2.0","vendor-chunks/preact@10.23.2","vendor-chunks/@auth+prisma-adapter@1.6.0_@prisma+client@5.18.0_prisma@5.18.0_","vendor-chunks/uuid@8.3.2","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.23.2","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.5.0","vendor-chunks/oidc-token-hash@5.0.3","vendor-chunks/@panva+hkdf@1.2.1","vendor-chunks/@t3-oss+env-core@0.10.1_typescript@5.5.4_zod@3.23.8","vendor-chunks/@t3-oss+env-nextjs@0.10.1_typescript@5.5.4_zod@3.23.8"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsarah%2FDocuments%2FStruct%2FMP%2Fmp-projeto-final%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsarah%2FDocuments%2FStruct%2FMP%2Fmp-projeto-final&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();