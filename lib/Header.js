"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;
exports["default"] = void 0;
var _Container = _interopRequireDefault(require("react-bootstrap/Container"));
var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Header() {
  return /*#__PURE__*/_react["default"].createElement(_Navbar["default"], {
    fluidsticky: "top"
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], null, /*#__PURE__*/_react["default"].createElement(_Navbar["default"].Brand, {
    href: "#home"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "",
    src: "/src/assets/FetchLogo.png",
    width: "30",
    height: "30",
    className: "d-inline-block align-top"
  }), ' ', "Fetch Rewards Front-end Take Home")));
}
var _default = Header;
exports["default"] = _default;