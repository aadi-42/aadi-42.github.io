self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "data": function() { return /* binding */ data; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; },
/* harmony export */   "photos": function() { return /* binding */ photos; },
/* harmony export */   "blogs": function() { return /* binding */ blogs; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Amazon Clone',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/image-4.jpg',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
}, {
  title: 'Netflix Clone',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/image-2.png',
  tags: ['React', 'JavaScript'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'WebRTC App',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/3.jpg',
  tags: ['React', 'WebRTC'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Unichat',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/4.jpg',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}];
var data = [{
  number: 6,
  text: 'Open Source Projects'
}, {
  number: 1000,
  text: 'Students'
}, {
  number: 1900,
  text: 'Github Followers'
}, {
  number: 5000,
  text: 'Github Stars'
}];
var TimeLineData = [{
  year: 2018,
  text: 'Started my journey at Capgemini'
}, {
  year: 2019,
  text: 'Got Promoted to Associate Consultant'
}, {
  year: 2020,
  text: 'Started exploring JavaScript and React'
}, {
  year: 2021,
  text: 'Shared my projects with the world'
}];
var photos = [{
  image: '/images/image-6.jpg',
  id: 0
}, {
  image: '/images/image-10.jpg',
  id: 1
}, {
  image: '/images/image-7.jpg',
  id: 2
}, {
  id: 3,
  image: '/images/image-8.jpg'
}, {
  id: 4,
  image: '/images/image-9.jpg'
}, {
  id: 5,
  image: '/images/Untitled.png'
}];
var blogs = [{
  title: 'Amazon Clone',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/image-3.png',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
}, {
  title: 'Netflix Clone',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/image-3.png',
  tags: ['React', 'JavaScript'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'WebRTC App',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/image-3.png',
  tags: ['React', 'WebRTC'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Unichat',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/image-3.png',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsImRhdGEiLCJudW1iZXIiLCJ0ZXh0IiwiVGltZUxpbmVEYXRhIiwieWVhciIsInBob3RvcyIsImJsb2dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGNBRFQ7QUFFRUMsYUFBVyxFQUFFLCtKQUZmO0FBR0lDLE9BQUssRUFBRSxxQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixNQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUFDLCtKQUZkO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWc0IsRUFtQnRCO0FBQ0VOLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFBRSwrSkFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixDQUpWO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFXLEVBQUUsK0pBRmY7QUFHRUMsT0FBSyxF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OiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZmNkMGRmMzAyOTVmODJiMmMxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdBbWF6b24gQ2xvbmUnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS00LmpwZycsXG4gICAgICB0YWdzOiBbJ01vbmdvJywgJ0V4cHJlc3MnLCAnUmVhY3QnLCAnTm9kZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdOZXRmbGl4IENsb25lJyxcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvaW1hZ2UtMi5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXZWJSVEMgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMy5qcGcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdXZWJSVEMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVW5pY2hhdCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy80LmpwZycsXG4gICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDMsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZGF0YSA9IFtcbiAgeyBudW1iZXI6IDYsIHRleHQ6ICdPcGVuIFNvdXJjZSBQcm9qZWN0cyd9LFxuICB7IG51bWJlcjogMTAwMCwgdGV4dDogJ1N0dWRlbnRzJywgfSxcbiAgeyBudW1iZXI6IDE5MDAsIHRleHQ6ICdHaXRodWIgRm9sbG93ZXJzJywgfSxcbiAgeyBudW1iZXI6IDUwMDAsIHRleHQ6ICdHaXRodWIgU3RhcnMnLCB9XG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXkgYXQgQ2FwZ2VtaW5pJywgfSxcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnR290IFByb21vdGVkIHRvIEFzc29jaWF0ZSBDb25zdWx0YW50JywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU3RhcnRlZCBleHBsb3JpbmcgSmF2YVNjcmlwdCBhbmQgUmVhY3QnLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTaGFyZWQgbXkgcHJvamVjdHMgd2l0aCB0aGUgd29ybGQnLCB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHBob3RvcyA9IFtcbiAge1xuICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS02LmpwZycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJy9pbWFnZXMvaW1hZ2UtMTAuanBnJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS03LmpwZycsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICBpZDozLFxuICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS04LmpwZycsXG4gIH0sXG4gIHtcbiAgICBpZDo0LFxuICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS05LmpwZycsXG4gIH0sXG4gIHtcbiAgICBpZDo1LFxuICAgIGltYWdlOiAnL2ltYWdlcy9VbnRpdGxlZC5wbmcnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGJsb2dzID0gW1xuICB7XG4gICAgdGl0bGU6ICdBbWF6b24gQ2xvbmUnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS0zLnBuZycsXG4gICAgICB0YWdzOiBbJ01vbmdvJywgJ0V4cHJlc3MnLCAnUmVhY3QnLCAnTm9kZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdOZXRmbGl4IENsb25lJyxcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvaW1hZ2UtMy5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXZWJSVEMgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvaW1hZ2UtMy5wbmcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdXZWJSVEMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVW5pY2hhdCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS0zLnBuZycsXG4gICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDMsXG4gIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=