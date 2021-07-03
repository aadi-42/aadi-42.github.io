self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Work/Work.js":
/*!*************************************!*\
  !*** ./src/components/Work/Work.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");
/* harmony import */ var _WorkStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkStyles */ "./src/components/Work/WorkStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Shambhunath\\Downloads\\portfolio_website-main\\portfolio_website-main\\src\\components\\Work\\Work.js",
    _this = undefined;






var breakPoints = [{
  width: 1,
  itemsToShow: 1
}, {
  width: 550,
  itemsToShow: 2
} // { width: 1200, itemsToShow: 3 },
];

var Projects = function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {
    nopadding: true,
    id: "blogs",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
      main: true,
      children: "Work Experience"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
      breakPoints: breakPoints,
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.work.map(function (p, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkStyles__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkStyles__WEBPACK_IMPORTED_MODULE_3__.Img, {
            src: p.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkStyles__WEBPACK_IMPORTED_MODULE_3__.HeaderThree, {
              title: true,
              children: p.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkStyles__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkStyles__WEBPACK_IMPORTED_MODULE_3__.CardInfo, {
            className: "card-info",
            children: p.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkStyles__WEBPACK_IMPORTED_MODULE_3__.UtilityList, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkStyles__WEBPACK_IMPORTED_MODULE_3__.ExternalLinks, {
              href: p.visit,
              children: "Explore"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, _this);
};

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV29yay9Xb3JrLmpzIl0sIm5hbWVzIjpbImJyZWFrUG9pbnRzIiwid2lkdGgiLCJpdGVtc1RvU2hvdyIsIlByb2plY3RzIiwid29yayIsInAiLCJpIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmlzaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FDbEI7QUFBRUMsT0FBSyxFQUFFLENBQVQ7QUFBWUMsYUFBVyxFQUFFO0FBQXpCLENBRGtCLEVBRWxCO0FBQUVELE9BQUssRUFBRSxHQUFUO0FBQWNDLGFBQVcsRUFBRTtBQUEzQixDQUZrQixDQUdsQjtBQUhrQixDQUFwQjs7QUFNQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLHNCQUNmLDhEQUFDLDZEQUFEO0FBQVMsYUFBUyxNQUFsQjtBQUFtQixNQUFFLEVBQUMsT0FBdEI7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFjLFVBQUksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUdFLDhEQUFDLDJEQUFEO0FBQVUsaUJBQVcsRUFBRUgsV0FBdkI7QUFBQSxnQkFDR0ksMERBQUEsQ0FBUyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNsQiw0QkFDRSw4REFBQyxpREFBRDtBQUFBLGtDQUNBLDhEQUFDLDRDQUFEO0FBQUssZUFBRyxFQUFFRCxDQUFDLENBQUNFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVFLDhEQUFDLHFEQUFEO0FBQUEsb0NBQ0UsOERBQUMsb0RBQUQ7QUFBYSxtQkFBSyxNQUFsQjtBQUFBLHdCQUFvQkYsQ0FBQyxDQUFDRztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFNRSw4REFBQyxpREFBRDtBQUFVLHFCQUFTLEVBQUMsV0FBcEI7QUFBQSxzQkFBaUNILENBQUMsQ0FBQ0k7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQWVFLDhEQUFDLG9EQUFEO0FBQUEsbUNBQ0UsOERBQUMsc0RBQUQ7QUFBZSxrQkFBSSxFQUFFSixDQUFDLENBQUNLLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBLFdBQWVKLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQXFCRCxPQXRCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEZTtBQUFBLENBQWpCOztLQUFNSCxRO0FBaUNOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiZWVkNzgxOTVkOTdjMTI3NTBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCc7XG5pbXBvcnQgeyBCbG9nQ2FyZCwgQ2FyZEluZm8sIEV4dGVybmFsTGlua3MsIEdyaWRDb250YWluZXIsIEhlYWRlclRocmVlLCBIciwgVGFnLCBUYWdMaXN0LCBUaXRsZUNvbnRlbnQsIFV0aWxpdHlMaXN0LCBJbWcgfSBmcm9tICcuL1dvcmtTdHlsZXMnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IHdvcmsgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuY29uc3QgYnJlYWtQb2ludHMgPSBbXG4gIHsgd2lkdGg6IDEsIGl0ZW1zVG9TaG93OiAxIH0sXG4gIHsgd2lkdGg6IDU1MCwgaXRlbXNUb1Nob3c6IDIgfSxcbiAgLy8geyB3aWR0aDogMTIwMCwgaXRlbXNUb1Nob3c6IDMgfSxcbl07XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuICA8U2VjdGlvbiBub3BhZGRpbmcgaWQ9XCJibG9nc1wiPlxuICAgIDxTZWN0aW9uVGl0bGUgbWFpbj5Xb3JrIEV4cGVyaWVuY2U8L1NlY3Rpb25UaXRsZT5cbiAgICB7LyogPEdyaWRDb250YWluZXI+ICovfVxuICAgIDxDYXJvdXNlbCBicmVha1BvaW50cz17YnJlYWtQb2ludHN9PlxuICAgICAge3dvcmsubWFwKChwLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJsb2dDYXJkIGtleT17aX0+XG4gICAgICAgICAgPEltZyBzcmM9e3AuaW1hZ2V9IC8+XG4gICAgICAgICAgICA8VGl0bGVDb250ZW50PlxuICAgICAgICAgICAgICA8SGVhZGVyVGhyZWUgdGl0bGU+e3AudGl0bGV9PC9IZWFkZXJUaHJlZT5cbiAgICAgICAgICAgICAgPEhyIC8+XG4gICAgICAgICAgICA8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICAgIDxDYXJkSW5mbyBjbGFzc05hbWU9XCJjYXJkLWluZm9cIj57cC5kZXNjcmlwdGlvbn08L0NhcmRJbmZvPlxuICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+U3RhY2s8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAgICAgICAge3AudGFncy5tYXAoKHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFnIGtleT17aX0+e3R9PC9UYWc+O1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L1RhZ0xpc3Q+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8VXRpbGl0eUxpc3Q+XG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3AudmlzaXR9PkV4cGxvcmU8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgICA8L1V0aWxpdHlMaXN0PlxuICAgICAgICAgIDwvQmxvZ0NhcmQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgey8qIDwvR3JpZENvbnRhaW5lcj4gKi99XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyJdLCJzb3VyY2VSb290IjoiIn0=