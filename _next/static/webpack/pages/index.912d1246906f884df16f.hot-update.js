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
}, {
  width: 1200,
  itemsToShow: 3
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV29yay9Xb3JrLmpzIl0sIm5hbWVzIjpbImJyZWFrUG9pbnRzIiwid2lkdGgiLCJpdGVtc1RvU2hvdyIsIlByb2plY3RzIiwid29yayIsInAiLCJpIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmlzaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FDbEI7QUFBRUMsT0FBSyxFQUFFLENBQVQ7QUFBWUMsYUFBVyxFQUFFO0FBQXpCLENBRGtCLEVBRWxCO0FBQUVELE9BQUssRUFBRSxHQUFUO0FBQWNDLGFBQVcsRUFBRTtBQUEzQixDQUZrQixFQUdsQjtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxhQUFXLEVBQUU7QUFBNUIsQ0FIa0IsQ0FBcEI7O0FBTUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxzQkFDZiw4REFBQyw2REFBRDtBQUFTLGFBQVMsTUFBbEI7QUFBbUIsTUFBRSxFQUFDLE9BQXRCO0FBQUEsNEJBQ0UsOERBQUMsa0VBQUQ7QUFBYyxVQUFJLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSw4REFBQywyREFBRDtBQUFVLGlCQUFXLEVBQUVILFdBQXZCO0FBQUEsZ0JBQ0dJLDBEQUFBLENBQVMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDbEIsNEJBQ0UsOERBQUMsaURBQUQ7QUFBQSxrQ0FDQSw4REFBQyw0Q0FBRDtBQUFLLGVBQUcsRUFBRUQsQ0FBQyxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFRSw4REFBQyxxREFBRDtBQUFBLG9DQUNFLDhEQUFDLG9EQUFEO0FBQWEsbUJBQUssTUFBbEI7QUFBQSx3QkFBb0JGLENBQUMsQ0FBQ0c7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBTUUsOERBQUMsaURBQUQ7QUFBVSxxQkFBUyxFQUFDLFdBQXBCO0FBQUEsc0JBQWlDSCxDQUFDLENBQUNJO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFlRSw4REFBQyxvREFBRDtBQUFBLG1DQUNFLDhEQUFDLHNEQUFEO0FBQWUsa0JBQUksRUFBRUosQ0FBQyxDQUFDSyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQSxXQUFlSixDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFxQkQsT0F0QkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGU7QUFBQSxDQUFqQjs7S0FBTUgsUTtBQWlDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MTJkMTI0NjkwNmY4ODRkZjE2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnO1xuaW1wb3J0IHsgQmxvZ0NhcmQsIENhcmRJbmZvLCBFeHRlcm5hbExpbmtzLCBHcmlkQ29udGFpbmVyLCBIZWFkZXJUaHJlZSwgSHIsIFRhZywgVGFnTGlzdCwgVGl0bGVDb250ZW50LCBVdGlsaXR5TGlzdCwgSW1nIH0gZnJvbSAnLi9Xb3JrU3R5bGVzJztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyB3b3JrIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmNvbnN0IGJyZWFrUG9pbnRzID0gW1xuICB7IHdpZHRoOiAxLCBpdGVtc1RvU2hvdzogMSB9LFxuICB7IHdpZHRoOiA1NTAsIGl0ZW1zVG9TaG93OiAyIH0sXG4gIHsgd2lkdGg6IDEyMDAsIGl0ZW1zVG9TaG93OiAzIH0sXG5dO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcbiAgPFNlY3Rpb24gbm9wYWRkaW5nIGlkPVwiYmxvZ3NcIj5cbiAgICA8U2VjdGlvblRpdGxlIG1haW4+V29yayBFeHBlcmllbmNlPC9TZWN0aW9uVGl0bGU+XG4gICAgey8qIDxHcmlkQ29udGFpbmVyPiAqL31cbiAgICA8Q2Fyb3VzZWwgYnJlYWtQb2ludHM9e2JyZWFrUG9pbnRzfT5cbiAgICAgIHt3b3JrLm1hcCgocCwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCbG9nQ2FyZCBrZXk9e2l9PlxuICAgICAgICAgIDxJbWcgc3JjPXtwLmltYWdlfSAvPlxuICAgICAgICAgICAgPFRpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgPEhlYWRlclRocmVlIHRpdGxlPntwLnRpdGxlfTwvSGVhZGVyVGhyZWU+XG4gICAgICAgICAgICAgIDxIciAvPlxuICAgICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZEluZm8gY2xhc3NOYW1lPVwiY2FyZC1pbmZvXCI+e3AuZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cbiAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICA8VGl0bGVDb250ZW50PlN0YWNrPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUYWdMaXN0PlxuICAgICAgICAgICAgICAgIHtwLnRhZ3MubWFwKCh0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPFRhZyBrZXk9e2l9Pnt0fTwvVGFnPjtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9UYWdMaXN0PlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPFV0aWxpdHlMaXN0PlxuICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXtwLnZpc2l0fT5FeHBsb3JlPC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgICAgPC9VdGlsaXR5TGlzdD5cbiAgICAgICAgICA8L0Jsb2dDYXJkPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIHsvKiA8L0dyaWRDb250YWluZXI+ICovfVxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiXSwic291cmNlUm9vdCI6IiJ9