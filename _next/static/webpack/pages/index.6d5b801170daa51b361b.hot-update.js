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
  number: 5,
  text: 'Open Source Projects'
}, {
  number: 50,
  text: 'Blogs'
} // { number: 1900, text: 'Github Followers', },
// { number: 5000, text: 'Github Stars', }
];
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
  text: 'Shared my projects on GitHub'
}, {
  year: 2022,
  text: ''
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
  title: 'Integration Developer',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/Capgemini.png',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
} // {
//   title: 'Netflix Clone',
//   description:"This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
//   image: '/images/image-3.png',
//   tags: ['React', 'JavaScript'],
//   source: 'https://google.com',
//   visit: 'https://google.com',
//   id: 1,
// },
// {
//   title: 'WebRTC App',
//   description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
//     image: '/images/image-3.png',
//     tags: ['React', 'WebRTC'],
//   source: 'https://google.com',
//   visit: 'https://google.com',
//   id: 2,
// },
// {
//   title: 'Unichat',
//   description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
//   image: '/images/image-3.png',
//   tags: ['React', 'ChatEngine', 'Firebase'],
//   source: 'https://google.com',
//   visit: 'https://google.com',
//   id: 3,
// },
];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsImRhdGEiLCJudW1iZXIiLCJ0ZXh0IiwiVGltZUxpbmVEYXRhIiwieWVhciIsInBob3RvcyIsImJsb2dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGNBRFQ7QUFFRUMsYUFBVyxFQUFFLCtKQUZmO0FBR0lDLE9BQUssRUFBRSxxQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixNQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUFDLCtKQUZkO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWc0IsRUFtQnRCO0FBQ0VOLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFBRSwrSkFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixDQUpWO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFXLEVBQUUsK0pBRmY7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixDQUFqQjtBQXVDQSxJQUFNQyxJQUFJLEdBQUcsQ0FDbEI7QUFBRUMsUUFBTSxFQUFFLENBQVY7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBRGtCLEVBRWxCO0FBQUVELFFBQU0sRUFBRSxFQUFWO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUZrQixDQUdsQjtBQUNBO0FBSmtCLENBQWI7QUFPQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0YsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVFLE1BQUksRUFBRSxJQUFSO0FBQWNGLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRSxNQUFJLEVBQUUsSUFBUjtBQUFjRixNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUUsTUFBSSxFQUFFLElBQVI7QUFBY0YsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVFLE1BQUksRUFBRSxJQUFSO0FBQWNGLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQjtBQVFBLElBQU1HLE1BQU0sR0FBRyxDQUNwQjtBQUNFVixPQUFLLEVBQUUscUJBRFQ7QUFFRUksSUFBRSxFQUFFO0FBRk4sQ0FEb0IsRUFLcEI7QUFDRUosT0FBSyxFQUFFLHNCQURUO0FBRUVJLElBQUUsRUFBRTtBQUZOLENBTG9CLEVBU3BCO0FBQ0VKLE9BQUssRUFBRSxxQkFEVDtBQUVFSSxJQUFFLEVBQUU7QUFGTixDQVRvQixFQWFwQjtBQUNFQSxJQUFFLEVBQUMsQ0FETDtBQUVFSixPQUFLLEVBQUU7QUFGVCxDQWJvQixFQWlCcEI7QUFDRUksSUFBRSxFQUFDLENBREw7QUFFRUosT0FBSyxFQUFFO0FBRlQsQ0FqQm9CLEVBcUJwQjtBQUNFSSxJQUFFLEVBQUMsQ0FETDtBQUVFSixPQUFLLEVBQUU7QUFGVCxDQXJCb0IsQ0FBZjtBQTJCQSxJQUFNVyxLQUFLLEdBQUcsQ0FDbkI7QUFDRWIsT0FBSyxFQUFFLHVCQURUO0FBRUVDLGFBQVcsRUFBRSwrSkFGZjtBQUdJQyxPQUFLLEVBQUUsdUJBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRG1CLENBVW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBDbUIsQ0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZDViODAxMTcwZGFhNTFiMzYxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdBbWF6b24gQ2xvbmUnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS00LmpwZycsXG4gICAgICB0YWdzOiBbJ01vbmdvJywgJ0V4cHJlc3MnLCAnUmVhY3QnLCAnTm9kZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdOZXRmbGl4IENsb25lJyxcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvaW1hZ2UtMi5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXZWJSVEMgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMy5qcGcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdXZWJSVEMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVW5pY2hhdCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy80LmpwZycsXG4gICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDMsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZGF0YSA9IFtcbiAgeyBudW1iZXI6IDUsIHRleHQ6ICdPcGVuIFNvdXJjZSBQcm9qZWN0cyd9LFxuICB7IG51bWJlcjogNTAsIHRleHQ6ICdCbG9ncycsIH0sXG4gIC8vIHsgbnVtYmVyOiAxOTAwLCB0ZXh0OiAnR2l0aHViIEZvbGxvd2VycycsIH0sXG4gIC8vIHsgbnVtYmVyOiA1MDAwLCB0ZXh0OiAnR2l0aHViIFN0YXJzJywgfVxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5IGF0IENhcGdlbWluaScsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0dvdCBQcm9tb3RlZCB0byBBc3NvY2lhdGUgQ29uc3VsdGFudCcsIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1N0YXJ0ZWQgZXhwbG9yaW5nIEphdmFTY3JpcHQgYW5kIFJlYWN0JywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIG9uIEdpdEh1YicsIH0sXG4gIHsgeWVhcjogMjAyMiwgdGV4dDogJycsIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgcGhvdG9zID0gW1xuICB7XG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2ltYWdlLTYuanBnJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS0xMC5qcGcnLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2ltYWdlLTcuanBnJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIGlkOjMsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2ltYWdlLTguanBnJyxcbiAgfSxcbiAge1xuICAgIGlkOjQsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2ltYWdlLTkuanBnJyxcbiAgfSxcbiAge1xuICAgIGlkOjUsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL1VudGl0bGVkLnBuZycsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYmxvZ3MgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0ludGVncmF0aW9uIERldmVsb3BlcicsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL0NhcGdlbWluaS5wbmcnLFxuICAgICAgdGFnczogWydNb25nbycsICdFeHByZXNzJywgJ1JlYWN0JywgJ05vZGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMCxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiAnTmV0ZmxpeCBDbG9uZScsXG4gIC8vICAgZGVzY3JpcHRpb246XCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXG4gIC8vICAgaW1hZ2U6ICcvaW1hZ2VzL2ltYWdlLTMucG5nJyxcbiAgLy8gICB0YWdzOiBbJ1JlYWN0JywgJ0phdmFTY3JpcHQnXSxcbiAgLy8gICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAvLyAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgLy8gICBpZDogMSxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiAnV2ViUlRDIEFwcCcsXG4gIC8vICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAvLyAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ltYWdlLTMucG5nJyxcbiAgLy8gICAgIHRhZ3M6IFsnUmVhY3QnLCAnV2ViUlRDJ10sXG4gIC8vICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgLy8gICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgaWQ6IDIsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogJ1VuaWNoYXQnLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgLy8gICBpbWFnZTogJy9pbWFnZXMvaW1hZ2UtMy5wbmcnLFxuICAvLyAgIHRhZ3M6IFsnUmVhY3QnLCAnQ2hhdEVuZ2luZScsICdGaXJlYmFzZSddLFxuICAvLyAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAvLyAgIGlkOiAzLFxuICAvLyB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9