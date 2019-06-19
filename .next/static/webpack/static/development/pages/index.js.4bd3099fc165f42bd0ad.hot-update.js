webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/dynamicheader.js":
/*!*************************************!*\
  !*** ./components/dynamicheader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynaHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/marcbastiaansen/Projects/nextjs/nextjs/components/dynamicheader.js";



var DynaHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DynaHeader, _React$Component);

  function DynaHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DynaHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DynaHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DynaHeader, [{
    key: "render",
    value: function render() {
      var linkStyle = {
        marginRight: 15
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return DynaHeader;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);










var _jsxFileName = "/Users/marcbastiaansen/Projects/nextjs/nextjs/pages/index.js";











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
              lineNumber: 52
            },
            __self: this
          }));

        case 'http://twe-poc.way.com/simpletextblock.json':
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_simpletext_js__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, componentProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }));

        case 'http://twe-poc.way.com/richtextfield.json':
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_richtextfield_js__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, componentProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
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

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Dyn, [{
    key: "getGuidFromId",
    value: function getGuidFromId(componentId) {
      if (componentId.length >= 0) {
        var parts = componentId.split('/');

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
      var componentList = data['@graph'];
      var menuComponentList = dataMenu['@graph'];
      var imageList = componentList.filter(function (item) {
        return item.mediaType === 'image';
      });
      var siteName = this.props.siteName;
      var linkStyle = {
        marginRight: 15
      };
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_19___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Treasure Wine Estates - POC"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("nav", {
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_dynamicheader_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, menuComponentList[0].slugs.map(function (item, index) {
        var componentProps = _this2.getComponentProps(item['@id'], menuComponentList);

        var pageId = _this2.getGuidFromId(componentProps.page['@id']);

        var navUrl = "/index?site=".concat(siteName, "&id=").concat(pageId);
        var customRoute = "/index?site=".concat(siteName, "&id=").concat(componentProps.slug);
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
          className: "nav-item",
          prefetch: true,
          href: customRoute,
          key: "key-".concat(index),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          class: "nav-item",
          href: customRoute,
          style: linkStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, componentProps.navLabel));
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_mylayout_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
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
            lineNumber: 141
          },
          __self: this
        }, _this2.mapTypeToComponent(item['@type'], componentProps, image));
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var _this3 = this;

        var query, siteName, treeRootUrl, resMenu, dataMenu, siteId, url, res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                console.log('Page requested with... id=' + query.id); // Get Site Id / Name

                siteName = 'mysite'; // Create a route for the initial render of the page

                if (query.id == null || query.id == '' || query.id == '/') query = {
                  id: '/' // Url for Root of CMS Tree, returning all nodes

                };
                treeRootUrl = "https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/6aee88e2-0358-429a-b721-82dd6854c4a1%22%7d&scope=tree&store=twe&fullBodyObject=true"; // Fetch tree structure / content

                _context.next = 7;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()(treeRootUrl);

              case 7:
                resMenu = _context.sent;
                _context.next = 10;
                return resMenu.json();

              case 10:
                dataMenu = _context.sent;
                // Get route from Data
                siteId = '';
                _context.next = 14;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()(treeRootUrl).then(function (response) {
                  return response.json();
                }).then(function (json) {
                  console.log('not await finished');
                  siteId = _this3.getCustomRoute(json, query.id);
                  console.log('SiteId... ' + siteId);
                });

              case 14:
                url = "https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/".concat(siteId, "%22%7d&scope=tree&store=twe&fullBodyObject=true");
                _context.next = 17;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()(url);

              case 17:
                res = _context.sent;
                _context.next = 20;
                return res.json();

              case 20:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data,
                  dataMenu: dataMenu,
                  siteName: siteName
                });

              case 22:
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

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Dyn, "getCustomRoute", function (data, path) {
  console.log('Path... ' + path);
  var componentList = data['@graph'];
  console.log('componentList... ' + componentList);
  var componentProps = componentList.find(function (item) {
    return item['slug'] === path;
  });
  console.log('componentProps...' + componentProps);

  if (componentProps != null) {
    var componentId = componentProps.page['@id'];

    if (componentId.length >= 0) {
      var parts = componentId.split('/');

      if (parts.length >= 0) {
        return parts[parts.length - 1];
      }
    }
  }

  return 'f7182c56-7553-43b0-af98-dd5b04a1b912';
});



/***/ })

})
//# sourceMappingURL=index.js.4bd3099fc165f42bd0ad.hot-update.js.map