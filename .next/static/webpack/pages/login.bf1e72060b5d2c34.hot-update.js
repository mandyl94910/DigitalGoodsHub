"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Login() {\n    _s();\n    const [loginUsername, setLoginUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loginPassword, setLoginPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loginEmail, setLoginEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [welcomeMessage, setWelcomeMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const login = ()=>{\n        (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            method: \"post\",\n            data: {\n                username: loginUsername,\n                password: loginPassword,\n                email: loginEmail\n            },\n            withCredentials: true,\n            url: \"http://localhost:3001/login\"\n        }).then((res)=>{\n            if (res.data === \"User logged in\") {\n                getUser();\n            } else {\n                setWelcomeMessage(res.data);\n            }\n        }).catch((err)=>{\n            console.log(err);\n            setError(err.message);\n        });\n    };\n    const getUser = ()=>{\n        (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            method: \"get\",\n            withCredentials: true,\n            url: \"http://localhost:3001/getUser\"\n        }).then((res)=>{\n            setWelcomeMessage(\"Welcome user \".concat(res.data.username));\n        }).catch((err)=>{\n            console.log(err);\n            setError(err.message);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/3 h-full bg-blue-500\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/login-bg.png\",\n                        alt: \"Login Background\",\n                        class: \"w-full h-full object-cover\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/3 h-full flex flex-col justify-center items-center bg-white p-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold mb-6 text-blue-600\",\n                        children: \"Welcome back!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"w-full max-w-sm\",\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            login();\n                        },\n                        children: [\n                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-500\",\n                                children: error\n                            }, void 0, false, {\n                                fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"username\",\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"username\",\n                                        type: \"text\",\n                                        placeholder: \"Username\",\n                                        value: loginUsername,\n                                        onChange: (e)=>setLoginUsername(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"password\",\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"password\",\n                                        type: \"password\",\n                                        placeholder: \"Password\",\n                                        value: loginPassword,\n                                        onChange: (e)=>setLoginPassword(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"email\",\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"email\",\n                                        type: \"email\",\n                                        placeholder: \"Email\",\n                                        value: loginEmail,\n                                        onChange: (e)=>setLoginEmail(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"submit\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            welcomeMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: welcomeMessage\n                            }, void 0, false, {\n                                fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                                lineNumber: 105,\n                                columnNumber: 30\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\CPRG306\\\\CapstoneV1\\\\pages\\\\login.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"j3TYDY9iWhBZyOmmhp1cTyqwSU4=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1YsSUFBTTlCLGNBQWM4QixFQUFFVyxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OzswQ0FHakQsOERBQUNHO2dDQUNDcEIsV0FBVTtnQ0FDVmUsTUFBSzswQ0FDTjs7Ozs7OzRCQUdBcEMsZ0NBQWtCLDhEQUFDMEM7MENBQUkxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0dBMUd3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbbG9naW5Vc2VybmFtZSwgc2V0TG9naW5Vc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvZ2luUGFzc3dvcmQsIHNldExvZ2luUGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2dpbkVtYWlsLCBzZXRMb2dpbkVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbd2VsY29tZU1lc3NhZ2UsIHNldFdlbGNvbWVNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB1c2VybmFtZTogbG9naW5Vc2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogbG9naW5QYXNzd29yZCxcclxuICAgICAgICBlbWFpbDogbG9naW5FbWFpbFxyXG4gICAgICB9LFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbG9naW5cIixcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuZGF0YSA9PT0gJ1VzZXIgbG9nZ2VkIGluJykge1xyXG4gICAgICAgIGdldFVzZXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRXZWxjb21lTWVzc2FnZShyZXMuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9nZXRVc2VyJyxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldFdlbGNvbWVNZXNzYWdlKGBXZWxjb21lIHVzZXIgJHtyZXMuZGF0YS51c2VybmFtZX1gKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgaC1mdWxsIGJnLWJsdWUtNTAwXCI+IHsvKiBQbGFjZWhvbGRlciBmb3IgYmFja2dyb3VuZCBpbWFnZSAqL31cclxuICAgICAgICB7LyogWW91IG1pZ2h0IHdhbnQgdG8gaW5jbHVkZSBhIGJhY2tncm91bmQgaW1hZ2UgaGVyZSAqL31cclxuICAgICAgICA8aW1nIHNyYz1cIi9sb2dpbi1iZy5wbmdcIiBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kXCIgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiPjwvaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctd2hpdGUgcC04XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi02IHRleHQtYmx1ZS02MDBcIj5XZWxjb21lIGJhY2shPC9oMT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc21cIiBvblN1Ym1pdD17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBsb2dpbigpOyB9fT5cclxuICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9wPn1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgVXNlcm5hbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bG9naW5Vc2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luVXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtsb2dpblBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9naW5QYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2xvZ2luRW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2dpbkVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge3dlbGNvbWVNZXNzYWdlICYmIDxoMj57d2VsY29tZU1lc3NhZ2V9PC9oMj59XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxvZ2luIiwibG9naW5Vc2VybmFtZSIsInNldExvZ2luVXNlcm5hbWUiLCJsb2dpblBhc3N3b3JkIiwic2V0TG9naW5QYXNzd29yZCIsImxvZ2luRW1haWwiLCJzZXRMb2dpbkVtYWlsIiwid2VsY29tZU1lc3NhZ2UiLCJzZXRXZWxjb21lTWVzc2FnZSIsImVycm9yIiwic2V0RXJyb3IiLCJsb2dpbiIsIm1ldGhvZCIsImRhdGEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZW1haWwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiZ2V0VXNlciIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJjbGFzcyIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});