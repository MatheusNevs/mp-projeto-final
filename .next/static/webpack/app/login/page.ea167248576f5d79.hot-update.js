"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/_components/botaologin.tsx":
/*!**************************************************!*\
  !*** ./src/app/login/_components/botaologin.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ButtonLogin: function() { return /* binding */ ButtonLogin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ ButtonLogin auto */ \n\n\n\nfunction ButtonLogin() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n        className: \"flex h-fit justify-between overflow-x-hidden rounded-lg bg-transparent p-0 shadow-md transition-all ease-in-out hover:bg-transparent hover:shadow-lg\",\n        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"google\", {\n                callbackUrl: \"/\"\n            }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"/google.jpeg\",\n                width: 32,\n                height: 32,\n                alt: \"Google\",\n                className: \"mx-4 size-6 md:size-8\"\n            }, void 0, false, {\n                fileName: \"/home/sarah/Documents/Struct/MP/mp-projeto-final/src/app/login/_components/botaologin.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"flex h-full items-center bg-vermelho-praxis px-2 py-4 md:px-5 md:text-lg\",\n                children: \"Entre com Google\"\n            }, void 0, false, {\n                fileName: \"/home/sarah/Documents/Struct/MP/mp-projeto-final/src/app/login/_components/botaologin.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sarah/Documents/Struct/MP/mp-projeto-final/src/app/login/_components/botaologin.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = ButtonLogin;\nvar _c;\n$RefreshReg$(_c, \"ButtonLogin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vX2NvbXBvbmVudHMvYm90YW9sb2dpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUrQjtBQUNVO0FBQ087QUFFekMsU0FBU0c7SUFDZCxxQkFDRSw4REFBQ0QseURBQU1BO1FBRUxFLFdBQVU7UUFDVkMsU0FBUyxJQUNQSix1REFBTUEsQ0FBQyxVQUFVO2dCQUNmSyxhQUFhO1lBQ2Y7OzBCQUdGLDhEQUFDTixrREFBS0E7Z0JBQ0pPLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xOLFdBQVU7Ozs7OzswQkFFWiw4REFBQ087Z0JBQUtQLFdBQVU7MEJBQTJFOzs7Ozs7Ozs7Ozs7QUFLakc7S0F2QmdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL19jb21wb25lbnRzL2JvdGFvbG9naW4udHN4PzEyYjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIn4vY29tcG9uZW50cy91aS9idXR0b25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbkxvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICBcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaC1maXQganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LXgtaGlkZGVuIHJvdW5kZWQtbGcgYmctdHJhbnNwYXJlbnQgcC0wIHNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBob3ZlcjpiZy10cmFuc3BhcmVudCBob3ZlcjpzaGFkb3ctbGdcIlxuICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgc2lnbkluKFwiZ29vZ2xlXCIsIHtcbiAgICAgICAgICBjYWxsYmFja1VybDogXCIvXCIsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9nb29nbGUuanBlZ1wiXG4gICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgYWx0PXtcIkdvb2dsZVwifVxuICAgICAgICBjbGFzc05hbWU9XCJteC00IHNpemUtNiBtZDpzaXplLThcIlxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGl0ZW1zLWNlbnRlciBiZy12ZXJtZWxoby1wcmF4aXMgcHgtMiBweS00IG1kOnB4LTUgbWQ6dGV4dC1sZ1wiPlxuICAgICAgICBFbnRyZSBjb20gR29vZ2xlXG4gICAgICA8L3NwYW4+XG4gICAgPC9CdXR0b24+XG4gICk7XG59Il0sIm5hbWVzIjpbIkltYWdlIiwic2lnbkluIiwiQnV0dG9uIiwiQnV0dG9uTG9naW4iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2FsbGJhY2tVcmwiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/_components/botaologin.tsx\n"));

/***/ })

});