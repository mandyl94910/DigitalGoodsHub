"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Register() {\n    _s();\n    const [registerUsername, setRegisterUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [registerPassword, setRegisterPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [registerEmail, setRegisterEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // Error handling adapted from version 2\n    const register = ()=>{\n        console.log(\"Registering with email:\", registerEmail);\n        (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            method: \"post\",\n            data: {\n                username: registerUsername,\n                password: registerPassword,\n                email: registerEmail\n            },\n            withCredentials: true,\n            url: \"http://localhost:3001/register\"\n        }).then((res)=>console.log(res)).catch((err)=>{\n            console.log(err);\n            setError(err.message); // Set error from response\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen slide-in\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-full flex flex-col justify-center items-center bg-white p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/login-logo.png\",\n                    alt: \"Logo\",\n                    class: \"h-20 mb-8 cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-6 text-blue-600\",\n                    children: \"Create Account\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"w-full max-w-sm\",\n                    onSubmit: (e)=>{\n                        e.preventDefault();\n                        register();\n                    },\n                    children: [\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-500\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"username\",\n                                    children: \"Username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                    id: \"username\",\n                                    type: \"text\",\n                                    placeholder: \"Username\",\n                                    value: registerUsername,\n                                    onChange: (e)=>setRegisterUsername(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"password\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                    id: \"password\",\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    value: registerPassword,\n                                    onChange: (e)=>setRegisterPassword(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"email\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                    id: \"email\",\n                                    type: \"email\",\n                                    placeholder: \"Email\",\n                                    value: registerEmail,\n                                    onChange: (e)=>setRegisterEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline\",\n                            type: \"submit\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\register.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Register, \"kJbG3kNCuvk0aYNkyZ4vLyplP3c=\");\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNkO0FBR1gsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR0osK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDSyxrQkFBa0JDLG9CQUFvQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUMsS0FBTSx3Q0FBd0M7SUFFakYsTUFBTVcsV0FBVztRQUNmQyxRQUFRQyxHQUFHLENBQUMsMkJBQTJCTjtRQUN2Q04saURBQUtBLENBQUM7WUFDSmEsUUFBUTtZQUNSQyxNQUFNO2dCQUNKQyxVQUFVYjtnQkFDVmMsVUFBVVo7Z0JBQ1ZhLE9BQU9YO1lBQ1Q7WUFDQVksaUJBQWlCO1lBQ2pCQyxLQUFLO1FBQ1AsR0FDQ0MsSUFBSSxDQUFDLENBQUNDLE1BQVFWLFFBQVFDLEdBQUcsQ0FBQ1MsTUFDMUJDLEtBQUssQ0FBQyxDQUFDQztZQUNOWixRQUFRQyxHQUFHLENBQUNXO1lBQ1pkLFNBQVNjLElBQUlDLE9BQU8sR0FBSSwwQkFBMEI7UUFDcEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ0M7b0JBQUlDLEtBQUk7b0JBQWtCQyxLQUFJO29CQUFPQyxPQUFNOzs7Ozs7OEJBQzVDLDhEQUFDQztvQkFBR0wsV0FBVTs4QkFBd0M7Ozs7Ozs4QkFDdEQsOERBQUNNO29CQUFLTixXQUFVO29CQUFrQk8sVUFBVSxDQUFDQzt3QkFBUUEsRUFBRUMsY0FBYzt3QkFBSXpCO29CQUFZOzt3QkFDbEZGLHVCQUFTLDhEQUFDNEI7NEJBQUVWLFdBQVU7c0NBQWdCbEI7Ozs7OztzQ0FDdkMsOERBQUNpQjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNXO29DQUFNWCxXQUFVO29DQUE2Q1ksU0FBUTs4Q0FBVzs7Ozs7OzhDQUdqRiw4REFBQ0M7b0NBQ0NiLFdBQVU7b0NBQ1ZjLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU96QztvQ0FDUDBDLFVBQVUsQ0FBQ1YsSUFBTS9CLG9CQUFvQitCLEVBQUVXLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUd2RCw4REFBQ2xCOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1c7b0NBQU1YLFdBQVU7b0NBQTZDWSxTQUFROzhDQUFXOzs7Ozs7OENBR2pGLDhEQUFDQztvQ0FDQ2IsV0FBVTtvQ0FDVmMsSUFBRztvQ0FDSEMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBT3ZDO29DQUNQd0MsVUFBVSxDQUFDVixJQUFNN0Isb0JBQW9CNkIsRUFBRVcsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7c0NBR3ZELDhEQUFDbEI7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDVztvQ0FBTVgsV0FBVTtvQ0FBNkNZLFNBQVE7OENBQVE7Ozs7Ozs4Q0FHOUUsOERBQUNDO29DQUNDYixXQUFVO29DQUNWYyxJQUFHO29DQUNIQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPckM7b0NBQ1BzQyxVQUFVLENBQUNWLElBQU0zQixpQkFBaUIyQixFQUFFVyxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FHcEQsOERBQUNHOzRCQUNDcEIsV0FBVTs0QkFDVmUsTUFBSztzQ0FDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQWxGd0J4QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlcigpIHtcclxuICBjb25zdCBbcmVnaXN0ZXJVc2VybmFtZSwgc2V0UmVnaXN0ZXJVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JlZ2lzdGVyUGFzc3dvcmQsIHNldFJlZ2lzdGVyUGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyZWdpc3RlckVtYWlsLCBzZXRSZWdpc3RlckVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTsgIC8vIEVycm9yIGhhbmRsaW5nIGFkYXB0ZWQgZnJvbSB2ZXJzaW9uIDJcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXJpbmcgd2l0aCBlbWFpbDonLCByZWdpc3RlckVtYWlsKTtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHVzZXJuYW1lOiByZWdpc3RlclVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiByZWdpc3RlclBhc3N3b3JkLFxyXG4gICAgICAgIGVtYWlsOiByZWdpc3RlckVtYWlsXHJcbiAgICAgIH0sXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZWdpc3RlclwiLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7ICAvLyBTZXQgZXJyb3IgZnJvbSByZXNwb25zZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBzbGlkZS1pblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctd2hpdGUgcC04XCI+XHJcbiAgICAgICAgey8qIExvZ28gYW5kIG5hdmlnYXRpb24gYmFjayBjYW4gYmUgYWRhcHRlZCBhcyBuZWVkZWQsIHBvc3NpYmx5IHdpdGggYSBzaW1wbGUgPGltZz4gaWYgTmV4dC5qcyBJbWFnZSBjb21wb25lbnQgaXMgbm90IHVzZWQgKi99XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbG9naW4tbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgY2xhc3M9XCJoLTIwIG1iLTggY3Vyc29yLXBvaW50ZXJcIj48L2ltZz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTYgdGV4dC1ibHVlLTYwMFwiPkNyZWF0ZSBBY2NvdW50PC9oMT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc21cIiBvblN1Ym1pdD17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyByZWdpc3RlcigpOyB9fT5cclxuICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9wPn1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgVXNlcm5hbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cmVnaXN0ZXJVc2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlZ2lzdGVyVXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtyZWdpc3RlclBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVnaXN0ZXJQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3JlZ2lzdGVyRW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWdpc3RlckVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUmVnaXN0ZXIiLCJyZWdpc3RlclVzZXJuYW1lIiwic2V0UmVnaXN0ZXJVc2VybmFtZSIsInJlZ2lzdGVyUGFzc3dvcmQiLCJzZXRSZWdpc3RlclBhc3N3b3JkIiwicmVnaXN0ZXJFbWFpbCIsInNldFJlZ2lzdGVyRW1haWwiLCJlcnJvciIsInNldEVycm9yIiwicmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiZGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsIndpdGhDcmVkZW50aWFscyIsInVybCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJjbGFzcyIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});