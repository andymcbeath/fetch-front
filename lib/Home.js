"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = Home;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _Button = _interopRequireDefault(require("react-bootstrap/Button"));
var _Col = _interopRequireDefault(require("react-bootstrap/Col"));
var _Form = _interopRequireDefault(require("react-bootstrap/Form"));
var _InputGroup = _interopRequireDefault(require("react-bootstrap/InputGroup"));
var _Stack = _interopRequireDefault(require("react-bootstrap/Stack"));
var _Container = _interopRequireDefault(require("react-bootstrap/Container"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Home() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedOccupation = _useState4[0],
    setSelectedOccupation = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedState = _useState6[0],
    setSelectedState = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedEmail = _useState8[0],
    setSelectedEmail = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedPassword = _useState10[0],
    setSelectedPassword = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedFullName = _useState12[0],
    setSelectedFullName = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    validated = _useState14[0],
    setValidated = _useState14[1];
  (0, _react.useEffect)(function () {
    _axios["default"].get('https://frontend-take-home.fetchrewards.com/form').then(function (res) {
      return setData(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []);
  var occupations = data.occupations;
  var options = occupations ? occupations.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: item,
      value: item
    }, item);
  }) : [];
  var states = data.states;
  var options2 = states ? states.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: item.name,
      value: item.abbreviation
    }, " ", item.abbreviation, " - ", item.name);
  }) : [];
  var handleSubmit = function handleSubmit(event) {
    var form = event.currentTarget;
    var formData = {
      name: selectedFullName,
      email: selectedEmail,
      password: selectedPassword,
      occupation: selectedOccupation,
      state: selectedState
    };
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      _axios["default"].post('https://frontend-take-home.fetchrewards.com/form', formData).then(function (response) {
        console.log('Form submitted successfully');
        console.log(response);
        console.log(response.status);
      })["catch"](function (error) {
        console.log('Form submission failed');
        console.log(error);
        console.log(error.response);
      });
    }
    setValidated(true);
  };
  return /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    fluid: true
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
    noValidate: true,
    validated: validated,
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    gap: 3
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Group, {
    as: _Col["default"],
    md: "3",
    controlId: "validationFullName"
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Label, null, "Full Name"), /*#__PURE__*/_react["default"].createElement(_InputGroup["default"], {
    hasValidation: true
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Control, {
    required: true,
    type: "text",
    placeholder: "Full Name",
    name: "name",
    value: selectedFullName,
    onChange: function onChange(e) {
      return setSelectedFullName(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Form["default"].Control.Feedback, {
    type: "invalid"
  }, "Please provide your full name!"))), /*#__PURE__*/_react["default"].createElement(_Form["default"].Group, {
    as: _Col["default"],
    md: "4",
    controlId: "validationEmail"
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Label, null, "Email"), /*#__PURE__*/_react["default"].createElement(_InputGroup["default"], {
    hasValidation: true
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Control, {
    required: true,
    type: "email",
    placeholder: "Please enter a valid email",
    value: selectedEmail,
    onChange: function onChange(e) {
      return setSelectedEmail(e.target.value);
    },
    name: "email"
  }), /*#__PURE__*/_react["default"].createElement(_Form["default"].Control.Feedback, {
    type: "invalid"
  }, "Please provide your email address!"))), /*#__PURE__*/_react["default"].createElement(_Form["default"].Group, {
    as: _Col["default"],
    md: "5",
    controlId: "validationCustomPassword"
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Label, null, "Password"), /*#__PURE__*/_react["default"].createElement(_InputGroup["default"], {
    hasValidation: true
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Control, {
    required: true,
    type: "password",
    value: selectedPassword,
    placeholder: "Use an incredibly unique password!",
    name: "password",
    onChange: function onChange(e) {
      return setSelectedPassword(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Form["default"].Control.Feedback, {
    type: "invalid"
  }, "Please type in your password!"))), /*#__PURE__*/_react["default"].createElement(_Form["default"].Group, {
    as: _Col["default"],
    md: "5",
    controlId: "validationCustomOccupation"
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Label, null, "Occupation"), /*#__PURE__*/_react["default"].createElement(_InputGroup["default"], {
    hasValidation: true
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Select, {
    required: true,
    className: "custom-select",
    value: selectedOccupation,
    onChange: function onChange(e) {
      return setSelectedOccupation(e.target.value);
    },
    name: "occupation"
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "Select Your Occupation"), options), /*#__PURE__*/_react["default"].createElement(_Form["default"].Control.Feedback, {
    type: "invalid"
  }, "Please select your current occupation!"))), /*#__PURE__*/_react["default"].createElement(_Form["default"].Group, {
    as: _Col["default"],
    md: "5",
    controlId: "validationState"
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Label, null, "State"), /*#__PURE__*/_react["default"].createElement(_InputGroup["default"], {
    hasValidation: true
  }, /*#__PURE__*/_react["default"].createElement(_Form["default"].Select, {
    required: true,
    className: "custom-select",
    value: selectedState,
    onChange: function onChange(e) {
      return setSelectedState(e.target.value);
    },
    name: "state"
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "Please select what state you currently live in!"), options2), /*#__PURE__*/_react["default"].createElement(_Form["default"].Control.Feedback, {
    type: "invalid"
  }, "Please select the current state you live in!"))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    type: "submit"
  }, "Submit"))));
}
var _default = Home;
exports["default"] = _default;