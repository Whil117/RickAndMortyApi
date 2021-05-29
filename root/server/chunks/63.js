exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 9667:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ User; }
/* harmony export */ });
// import { UseLocalStorage } from '../hooks/UseLocalStorage'
// import { useEffect } from 'react'
const User = {
  username: 'Whil',
  coins: 100
}; // const { coins } = User
// const [userCoin, setUserCoin] = UseLocalStorage('coin', '')
// useEffect(() => {
//   setUserCoin(coins)
// }, [coins]);
// console.log(userCoin)

/***/ }),

/***/ 7057:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ CardNav; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1647);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6177);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);





const CardNavs = (_emotion_styled__WEBPACK_IMPORTED_MODULE_3___default().div)`
    top: 0;
    position: absolute;
    width: 100%;
    font-family: Roboto;
    height: auto;
    background: #E9E9E9;
    box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content:flex-start;
    display: flex;
    justify-content: space-around;
    align-items: center;

`;
const CardNavTitle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_3___default().h1)`
      font-size: larger;
      font-family: Rock Salt;
      margin-left: 30px;
      padding: 10px;
`;
const User = (_emotion_styled__WEBPACK_IMPORTED_MODULE_3___default().div)`
          padding: 10px;
`;
const CardNav = ({
  userCoin
}) => {
  const {
    username
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_hooks_userContext__WEBPACK_IMPORTED_MODULE_2__/* .UserContext */ .S);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardNavs, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardNavTitle, {
      children: "Rick and Morty"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(User, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        children: username
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: ["Stackly Coins:", userCoin]
      })]
    })]
  });
};

/***/ }),

/***/ 1647:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ UserContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

/***/ })

};
;