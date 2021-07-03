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
/* harmony export */   "work": function() { return /* binding */ work; }
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
var work = [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsImRhdGEiLCJudW1iZXIiLCJ0ZXh0IiwiVGltZUxpbmVEYXRhIiwieWVhciIsInBob3RvcyIsIndvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsY0FEVDtBQUVFQyxhQUFXLEVBQUUsK0pBRmY7QUFHSUMsT0FBSyxFQUFFLHFCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLE9BQXJCLEVBQThCLE1BQTlCLENBSlY7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTixPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQUMsK0pBRmQ7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxZQUFWLENBSlI7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFFLCtKQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSlY7QUFLRUMsUUFBTSxFQUFFLG9CQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQW5Cc0IsRUE0QnRCO0FBQ0VOLE9BQUssRUFBRSxTQURUO0FBRUVDLGFBQVcsRUFBRSwrSkFGZjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixVQUF4QixDQUpSO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLENBQWpCO0FBdUNBLElBQU1DLElBQUksR0FBRyxDQUNsQjtBQUFFQyxRQUFNLEVBQUUsQ0FBVjtBQUFhQyxNQUFJLEVBQUU7QUFBbkIsQ0FEa0IsRUFFbEI7QUFBRUQsUUFBTSxFQUFFLEVBQVY7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRmtCLENBR2xCO0FBQ0E7QUFKa0IsQ0FBYjtBQU9BLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjRixNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUUsTUFBSSxFQUFFLElBQVI7QUFBY0YsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVFLE1BQUksRUFBRSxJQUFSO0FBQWNGLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRSxNQUFJLEVBQUUsSUFBUjtBQUFjRixNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUUsTUFBSSxFQUFFLElBQVI7QUFBY0YsTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCO0FBUUEsSUFBTUcsTUFBTSxHQUFHLENBQ3BCO0FBQ0VWLE9BQUssRUFBRSxxQkFEVDtBQUVFSSxJQUFFLEVBQUU7QUFGTixDQURvQixFQUtwQjtBQUNFSixPQUFLLEVBQUUsc0JBRFQ7QUFFRUksSUFBRSxFQUFFO0FBRk4sQ0FMb0IsRUFTcEI7QUFDRUosT0FBSyxFQUFFLHFCQURUO0FBRUVJLElBQUUsRUFBRTtBQUZOLENBVG9CLEVBYXBCO0FBQ0VBLElBQUUsRUFBQyxDQURMO0FBRUVKLE9BQUssRUFBRTtBQUZULENBYm9CLEVBaUJwQjtBQUNFSSxJQUFFLEVBQUMsQ0FETDtBQUVFSixPQUFLLEVBQUU7QUFGVCxDQWpCb0IsRUFxQnBCO0FBQ0VJLElBQUUsRUFBQyxDQURMO0FBRUVKLE9BQUssRUFBRTtBQUZULENBckJvQixDQUFmO0FBMkJBLElBQU1XLElBQUksR0FBRyxDQUNsQjtBQUNFYixPQUFLLEVBQUUsdUJBRFQ7QUFFRUMsYUFBVyxFQUFFLCtKQUZmO0FBR0lDLE9BQUssRUFBRSx1QkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixNQUE5QixDQUpWO0FBS0VDLFFBQU0sRUFBRSxvQkFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEa0IsQ0FVbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENrQixDQUFiIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmMTIzNjVkOTY5MTAyNjIzMTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0FtYXpvbiBDbG9uZScsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ltYWdlLTQuanBnJyxcbiAgICAgIHRhZ3M6IFsnTW9uZ28nLCAnRXhwcmVzcycsICdSZWFjdCcsICdOb2RlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ05ldGZsaXggQ2xvbmUnLFxuICAgIGRlc2NyaXB0aW9uOlwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS0yLnBuZycsXG4gICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1dlYlJUQyBBcHAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy8zLmpwZycsXG4gICAgICB0YWdzOiBbJ1JlYWN0JywgJ1dlYlJUQyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdVbmljaGF0JyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzQuanBnJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0NoYXRFbmdpbmUnLCAnRmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBkYXRhID0gW1xuICB7IG51bWJlcjogNSwgdGV4dDogJ09wZW4gU291cmNlIFByb2plY3RzJ30sXG4gIHsgbnVtYmVyOiA1MCwgdGV4dDogJ0Jsb2dzJywgfSxcbiAgLy8geyBudW1iZXI6IDE5MDAsIHRleHQ6ICdHaXRodWIgRm9sbG93ZXJzJywgfSxcbiAgLy8geyBudW1iZXI6IDUwMDAsIHRleHQ6ICdHaXRodWIgU3RhcnMnLCB9XG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXkgYXQgQ2FwZ2VtaW5pJywgfSxcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnR290IFByb21vdGVkIHRvIEFzc29jaWF0ZSBDb25zdWx0YW50JywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU3RhcnRlZCBleHBsb3JpbmcgSmF2YVNjcmlwdCBhbmQgUmVhY3QnLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTaGFyZWQgbXkgcHJvamVjdHMgb24gR2l0SHViJywgfSxcbiAgeyB5ZWFyOiAyMDIyLCB0ZXh0OiAnJywgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBwaG90b3MgPSBbXG4gIHtcbiAgICBpbWFnZTogJy9pbWFnZXMvaW1hZ2UtNi5qcGcnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2ltYWdlLTEwLmpwZycsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJy9pbWFnZXMvaW1hZ2UtNy5qcGcnLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgaWQ6MyxcbiAgICBpbWFnZTogJy9pbWFnZXMvaW1hZ2UtOC5qcGcnLFxuICB9LFxuICB7XG4gICAgaWQ6NCxcbiAgICBpbWFnZTogJy9pbWFnZXMvaW1hZ2UtOS5qcGcnLFxuICB9LFxuICB7XG4gICAgaWQ6NSxcbiAgICBpbWFnZTogJy9pbWFnZXMvVW50aXRsZWQucG5nJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB3b3JrID0gW1xuICB7XG4gICAgdGl0bGU6ICdJbnRlZ3JhdGlvbiBEZXZlbG9wZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9DYXBnZW1pbmkucG5nJyxcbiAgICAgIHRhZ3M6IFsnTW9uZ28nLCAnRXhwcmVzcycsICdSZWFjdCcsICdOb2RlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogJ05ldGZsaXggQ2xvbmUnLFxuICAvLyAgIGRlc2NyaXB0aW9uOlwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAvLyAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS0zLnBuZycsXG4gIC8vICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0J10sXG4gIC8vICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgLy8gICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgaWQ6IDEsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogJ1dlYlJUQyBBcHAnLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFlvdVR1YmUgdmlkZW8uIEluIHRoaXMgdHV0b3JpYWwsIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGFuZCBkZXBsb3kgYSBSZWFjdCBWaWRlbyBDaGF0IEFwcGxpY2F0aW9uIHVzaW5nIFdlYlJUQy5cIixcbiAgLy8gICAgIGltYWdlOiAnL2ltYWdlcy9pbWFnZS0zLnBuZycsXG4gIC8vICAgICB0YWdzOiBbJ1JlYWN0JywgJ1dlYlJUQyddLFxuICAvLyAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gIC8vICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAvLyAgIGlkOiAyLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGl0bGU6ICdVbmljaGF0JyxcbiAgLy8gICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXG4gIC8vICAgaW1hZ2U6ICcvaW1hZ2VzL2ltYWdlLTMucG5nJyxcbiAgLy8gICB0YWdzOiBbJ1JlYWN0JywgJ0NoYXRFbmdpbmUnLCAnRmlyZWJhc2UnXSxcbiAgLy8gICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAvLyAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgLy8gICBpZDogMyxcbiAgLy8gfSxcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==