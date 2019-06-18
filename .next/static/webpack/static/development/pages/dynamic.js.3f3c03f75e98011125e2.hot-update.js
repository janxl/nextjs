webpackHotUpdate("static/development/pages/dynamic.js",{

/***/ "./components/mylayout.js":
/*!********************************!*\
  !*** ./components/mylayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.js");
var _jsxFileName = "/Users/marcbastiaansen/Projects/nextjs/nextjs/components/mylayout.js";

 // import DynaHeader from '../components/dynamicheader.js'

var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/dynamic.js":
/*!**************************!*\
  !*** ./pages/dynamic.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dyn; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_mylayout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/mylayout.js */ "./components/mylayout.js");
/* harmony import */ var _components_banner_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/banner.js */ "./components/banner.js");
/* harmony import */ var _components_simpletext_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/simpletext.js */ "./components/simpletext.js");
/* harmony import */ var _components_richtextfield_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/richtextfield.js */ "./components/richtextfield.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_dynamicheader_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/dynamicheader.js */ "./components/dynamicheader.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);










var _jsxFileName = "/Users/marcbastiaansen/Projects/nextjs/nextjs/pages/dynamic.js";










var Dyn =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Dyn, _React$Component);

  function Dyn() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Dyn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Dyn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "mapTypeToComponent", function (typeName, componentProps, image) {
      switch (typeName) {
        case 'http://twe-poc.way.com/banner.json':
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_banner_js__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, componentProps, {
            image: image,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }));

        case 'http://twe-poc.way.com/simpletextblock.json':
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_simpletext_js__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, componentProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }));

        case 'http://twe-poc.way.com/richtextfield.json':
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_richtextfield_js__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, componentProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getComponentProps", function (componentId, componentList) {
      return componentList.find(function (item) {
        return item['@id'] === componentId;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getMenuComponentProps", function (componentId, componentList) {
      return componentList.find(function (item) {
        return item['@id'] === componentId;
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Dyn, [{
    key: "getGuidFromId",
    value: function getGuidFromId(componentId) {
      // console.log('Splitting... ' + componentId + ' ' + componentId.length)
      if (componentId.length >= 0) {
        var parts = componentId.split('/'); // console.log('Parts... ' + parts.length)

        if (parts.length >= 0) {
          return parts[parts.length - 1];
        }
      }

      return "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      var dataMenu = this.props.dataMenu;
      console.log(dataMenu);
      var componentList = data['@graph'];
      var menuComponentList = dataMenu['@graph'];
      var imageList = componentList.filter(function (item) {
        return item.mediaType === 'image';
      });
      var linkStyle = {
        marginRight: 15
      };
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_dynamicheader_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, menuComponentList[0].slugs.map(function (item, index) {
        var componentProps = _this2.getMenuComponentProps(item['@id'], menuComponentList); // Debugging


        console.log('component props ' + componentProps);

        var pageId = _this2.getGuidFromId(componentProps.page['@id']); // console.log('Link to... ' + pageId)


        var navUrl = '/dynamic?id=' + pageId;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
          prefetch: true,
          href: navUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          href: navUrl,
          style: linkStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, componentProps.navLabel));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_mylayout_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, componentList[0].slotContent.map(function (item, index) {
        var image = null;

        var componentProps = _this2.getComponentProps(item['@id'], componentList);

        if (componentProps.background) {
          image = imageList.find(function (imageItem) {
            return imageItem['@id'] === componentProps.background['@id'];
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: "key-".concat(index),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, _this2.mapTypeToComponent(item['@type'], componentProps, image));
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, url, menuUrl, res, data, resMenu, dataMenu;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                url = "https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/".concat(query.id, "%22%7d&scope=tree&store=twe&fullBodyObject=true");
                menuUrl = "https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/6aee88e2-0358-429a-b721-82dd6854c4a1%22%7d&scope=tree&store=twe&fullBodyObject=true";
                console.log('QUERYYYYY', query);
                _context.next = 6;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()(url);

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.json();

              case 9:
                data = _context.sent;
                _context.next = 12;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()(menuUrl);

              case 12:
                resMenu = _context.sent;
                _context.next = 15;
                return resMenu.json();

              case 15:
                dataMenu = _context.sent;
                return _context.abrupt("return", {
                  data: data,
                  dataMenu: dataMenu
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Dyn;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=dynamic.js.3f3c03f75e98011125e2.hot-update.js.map