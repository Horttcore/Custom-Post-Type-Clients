/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/clients/edit.js":
/*!***********************************!*\
  !*** ./assets/js/clients/edit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/**\n * External dependencies\n */\nvar __ = wp.i18n.__;\n/**\n * WordPress dependencies\n */\n\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    Placeholder = _wp$components.Placeholder,\n    QueryControls = _wp$components.QueryControls,\n    Spinner = _wp$components.Spinner;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    RichText = _wp$editor.RichText;\nvar withSelect = wp.data.withSelect;\nvar createHooks = wp.hooks.createHooks;\n\nvar Clients =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Clients, _Component);\n\n  function Clients() {\n    _classCallCheck(this, Clients);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Clients).apply(this, arguments));\n  }\n\n  _createClass(Clients, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          attributes = _this$props.attributes,\n          setAttributes = _this$props.setAttributes,\n          latestPosts = _this$props.latestPosts;\n      var order = attributes.order,\n          orderBy = attributes.orderBy,\n          postsToShow = attributes.postsToShow,\n          title = attributes.title;\n      var hasPosts = Array.isArray(latestPosts) && latestPosts.length;\n      var displayPosts = latestPosts;\n      var hooks = createHooks();\n      return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n        title: __('Clients')\n      }, React.createElement(QueryControls, _extends({\n        order: order,\n        orderBy: orderBy\n      }, {\n        numberOfItems: postsToShow,\n        onOrderChange: function onOrderChange(value) {\n          return setAttributes({\n            order: value\n          });\n        },\n        onOrderByChange: function onOrderByChange(value) {\n          return setAttributes({\n            orderBy: value\n          });\n        },\n        onNumberOfItemsChange: function onNumberOfItemsChange(value) {\n          return setAttributes({\n            postsToShow: value\n          });\n        }\n      })))), React.createElement(\"section\", {\n        className: \"clients\"\n      }, React.createElement(RichText, {\n        className: \"clients__title\",\n        tagName: \"h1\",\n        value: title,\n        Placeholder: __('Clients', 'custom-post-type-staff'),\n        keepPlaceholderOnFocus: true,\n        onChange: function onChange(title) {\n          return setAttributes({\n            title: title\n          });\n        }\n      }), React.createElement(\"div\", {\n        className: \"clients__list\"\n      }, hasPosts ? displayPosts.map(function (post, i) {\n        return hooks.applyFilters('clients-block-editor', React.createElement(\"article\", {\n          className: \"post-{post.id} client type-client status-{post.status} hentry\"\n        }, post._embedded ? React.createElement(\"img\", {\n          src: post._embedded['wp:featuredmedia'][0].source_url,\n          alt: post.title.rendered\n        }) : post.title.rendered), post, i);\n      }) : React.createElement(Placeholder, {\n        icon: \"admin-post\",\n        label: __('Clients')\n      }, !Array.isArray(latestPosts) ? React.createElement(Spinner, null) : __('No clients found.')))));\n    }\n  }]);\n\n  return Clients;\n}(Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withSelect(function (select, props) {\n  var _props$attributes = props.attributes,\n      postsToShow = _props$attributes.postsToShow,\n      order = _props$attributes.order,\n      orderBy = _props$attributes.orderBy;\n\n  var _select = select('core'),\n      getEntityRecords = _select.getEntityRecords;\n\n  var latestPostsQuery = {\n    orderby: orderBy,\n    order: order,\n    per_page: postsToShow,\n    _embed: true\n  };\n  return {\n    latestPosts: getEntityRecords('postType', 'client', latestPostsQuery)\n  };\n})(Clients));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xpZW50cy9lZGl0LmpzPzY5MWUiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJlbGVtZW50IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiUGxhY2Vob2xkZXIiLCJRdWVyeUNvbnRyb2xzIiwiU3Bpbm5lciIsImVkaXRvciIsIkluc3BlY3RvckNvbnRyb2xzIiwiUmljaFRleHQiLCJ3aXRoU2VsZWN0IiwiZGF0YSIsImNyZWF0ZUhvb2tzIiwiaG9va3MiLCJDbGllbnRzIiwiYXJndW1lbnRzIiwicHJvcHMiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImxhdGVzdFBvc3RzIiwib3JkZXIiLCJvcmRlckJ5IiwicG9zdHNUb1Nob3ciLCJ0aXRsZSIsImhhc1Bvc3RzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZGlzcGxheVBvc3RzIiwidmFsdWUiLCJtYXAiLCJwb3N0IiwiaSIsImFwcGx5RmlsdGVycyIsIl9lbWJlZGRlZCIsInNvdXJjZV91cmwiLCJyZW5kZXJlZCIsInNlbGVjdCIsImdldEVudGl0eVJlY29yZHMiLCJsYXRlc3RQb3N0c1F1ZXJ5Iiwib3JkZXJieSIsInBlcl9wYWdlIiwiX2VtYmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0lBR1FBLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7QUFFUjs7OztrQkFHZ0NDLEVBQUUsQ0FBQ0UsTztJQUEzQkMsUyxlQUFBQSxTO0lBQVdDLFEsZUFBQUEsUTtxQkFDd0NKLEVBQUUsQ0FBQ0ssVTtJQUF0REMsUyxrQkFBQUEsUztJQUFXQyxXLGtCQUFBQSxXO0lBQWFDLGEsa0JBQUFBLGE7SUFBZUMsTyxrQkFBQUEsTztpQkFDUFQsRUFBRSxDQUFDVSxNO0lBQW5DQyxpQixjQUFBQSxpQjtJQUFtQkMsUSxjQUFBQSxRO0lBQ25CQyxVLEdBQWViLEVBQUUs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Q0FBY1AsV0FBZCxDQUFELEdBQThCLG9CQUFDLE9BQUQsT0FBOUIsR0FBNEN2QixFQUFFLENBQUMsbUJBQUQsQ0FEbkQsQ0FKUixDQUZKLENBTkosQ0FESjtBQXFCSDs7OztFQWpDaUJJLFM7O0FBb0NQVSx5RUFBVSxDQUFDLFVBQUMyQixNQUFELEVBQVNyQixLQUFULEVBQW1CO0FBQUEsMEJBQ0RBLEtBQUssQ0FBQ0MsVUFETDtBQUFBLE1BQ2pDSyxXQURpQyxxQkFDakNBLFdBRGlDO0FBQUEsTUFDcEJGLEtBRG9CLHFCQUNwQkEsS0FEb0I7QUFBQSxNQUNiQyxPQURhLHFCQUNiQSxPQURhOztBQUFBLGdCQUVaZ0IsTUFBTSxDQUFDLE1BQUQsQ0FGTTtBQUFBLE1BRWpDQyxnQkFGaUMsV0FFakNBLGdCQUZpQzs7QUFHekMsTUFBTUMsZ0JBQWdCLEdBQUc7QUFDckJDLFdBQU8sRUFBRW5CLE9BRFk7QUFFckJELFNBQUssRUFBRUEsS0FGYztBQUdyQnFCLFlBQVEsRUFBRW5CLFdBSFc7QUFJckJvQixVQUFNLEVBQUU7QUFKYSxHQUF6QjtBQU1BLFNBQU87QUFDSHZCLGVBQVcsRUFBRW1CLGdCQUFnQixDQUFDLFVBQUQsRUFBYSxRQUFiLEVBQXVCQyxnQkFBdkI7QUFEMUIsR0FBUDtBQUdILENBWndCLENBQVYsQ0FZWnpCLE9BWlksQ0FBZiIsImZpbGUiOiIuL2Fzc2V0cy9qcy9jbGllbnRzL2VkaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBQYW5lbEJvZHksIFBsYWNlaG9sZGVyLCBRdWVyeUNvbnRyb2xzLCBTcGlubmVyIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scywgUmljaFRleHQgfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcbmNvbnN0IHsgY3JlYXRlSG9va3MgfSA9IHdwLmhvb2tzO1xuXG5jbGFzcyBDbGllbnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgbGF0ZXN0UG9zdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgb3JkZXIsIG9yZGVyQnksIHBvc3RzVG9TaG93LCB0aXRsZSB9ID0gYXR0cmlidXRlcztcbiAgICAgICAgY29uc3QgaGFzUG9zdHMgPSBBcnJheS5pc0FycmF5KGxhdGVzdFBvc3RzKSAmJiBsYXRlc3RQb3N0cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlQb3N0cyA9IGxhdGVzdFBvc3RzO1xuICAgICAgICBjb25zdCBob29rcyA9IGNyZWF0ZUhvb2tzKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9e19fKCdDbGllbnRzJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXJ5Q29udHJvbHMgey4uLnsgb3JkZXIsIG9yZGVyQnkgfX0gbnVtYmVyT2ZJdGVtcz17cG9zdHNUb1Nob3d9IG9uT3JkZXJDaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IG9yZGVyOiB2YWx1ZSB9KX0gb25PcmRlckJ5Q2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBvcmRlckJ5OiB2YWx1ZSB9KX0gb25OdW1iZXJPZkl0ZW1zQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBwb3N0c1RvU2hvdzogdmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2xpZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQgY2xhc3NOYW1lPVwiY2xpZW50c19fdGl0bGVcIiB0YWdOYW1lPVwiaDFcIiB2YWx1ZT17dGl0bGV9IFBsYWNlaG9sZGVyPXtfXygnQ2xpZW50cycsICdjdXN0b20tcG9zdC10eXBlLXN0YWZmJyl9IGtlZXBQbGFjZWhvbGRlck9uRm9jdXMgb25DaGFuZ2U9eyh0aXRsZSkgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHNfX2xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNQb3N0cyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UG9zdHMubWFwKChwb3N0LCBpKSA9PiBob29rcy5hcHBseUZpbHRlcnMoJ2NsaWVudHMtYmxvY2stZWRpdG9yJywgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdC17cG9zdC5pZH0gY2xpZW50IHR5cGUtY2xpZW50IHN0YXR1cy17cG9zdC5zdGF0dXN9IGhlbnRyeVwiPntwb3N0Ll9lbWJlZGRlZCA/IDxpbWcgc3JjPXtwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWzBdLnNvdXJjZV91cmx9IGFsdD17cG9zdC50aXRsZS5yZW5kZXJlZH0gLz4gOiBwb3N0LnRpdGxlLnJlbmRlcmVkfTwvYXJ0aWNsZT4sIHBvc3QsIGkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIgaWNvbj1cImFkbWluLXBvc3RcIiBsYWJlbD17X18oJ0NsaWVudHMnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshQXJyYXkuaXNBcnJheShsYXRlc3RQb3N0cykgPyA8U3Bpbm5lciAvPiA6IF9fKCdObyBjbGllbnRzIGZvdW5kLicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlbGVjdCgoc2VsZWN0LCBwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcG9zdHNUb1Nob3csIG9yZGVyLCBvcmRlckJ5IH0gPSBwcm9wcy5hdHRyaWJ1dGVzO1xuICAgIGNvbnN0IHsgZ2V0RW50aXR5UmVjb3JkcyB9ID0gc2VsZWN0KCdjb3JlJyk7XG4gICAgY29uc3QgbGF0ZXN0UG9zdHNRdWVyeSA9IHtcbiAgICAgICAgb3JkZXJieTogb3JkZXJCeSxcbiAgICAgICAgb3JkZXI6IG9yZGVyLFxuICAgICAgICBwZXJfcGFnZTogcG9zdHNUb1Nob3csXG4gICAgICAgIF9lbWJlZDogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF0ZXN0UG9zdHM6IGdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgJ2NsaWVudCcsIGxhdGVzdFBvc3RzUXVlcnkpXG4gICAgfTtcbn0pKENsaWVudHMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/clients/edit.js\n");

/***/ }),

/***/ "./assets/js/clients/index.js":
/*!************************************!*\
  !*** ./assets/js/clients/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./assets/js/clients/edit.js\");\n/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\nregisterBlockType('horttcore/clients', {\n  title: __('Clients', 'custom-post-type-clients'),\n  description: __('Shows a custom clients loop', 'custom-post-type-clients'),\n  icon: 'businessman',\n  category: 'widgets',\n  keywords: [__('Client', 'custom-post-type-clients'), __('Query', 'custom-post-type-clients'), __('Loop', 'custom-post-type-clients')],\n  attributes: {\n    title: {\n      type: 'string'\n    },\n    order: {\n      type: 'string',\n      default: 'asc'\n    },\n    orderBy: {\n      type: 'string',\n      default: 'menu_order'\n    },\n    postsToShow: {\n      type: 'number',\n      default: 10\n    }\n  },\n  supports: {\n    anchor: true\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: function save(props) {\n    return null;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xpZW50cy9pbmRleC5qcz80M2YwIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJhdHRyaWJ1dGVzIiwidHlwZSIsIm9yZGVyIiwiZGVmYXVsdCIsIm9yZGVyQnkiLCJwb3N0c1RvU2hvdyIsInN1cHBvcnRzIiwiYW5jaG9yIiwiZWRpdCIsInNhdmUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOzs7SUFHUUEsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUNBRyxpQixHQUFzQkYsRUFBRSxDQUFDRyxNLENBQXpCRCxpQjtBQUNSO0FBRUFBLGlCQUFpQixDQUFDLG1CQUFELEVBQXNCO0FBQ25DRSxPQUFLLEVBQUVMLEVBQUUsQ0FBQyxTQUFELEVBQVksMEJBQVosQ0FEMEI7QUFFbkNNLGFBQVcsRUFBRU4sRUFBRSxDQUFDLDZCQUFELEVBQWdDLDBCQUFoQyxDQUZvQjtBQUduQ08sTUFBSSxFQUFFLGFBSDZCO0FBSW5DQyxVQUFRLEVBQUUsU0FKeUI7QUFLbkNDLFVBQVEsRUFBRSxDQUFDVCxFQUFFLENBQUMsUUFBRCxFQUFXLDBCQUFYLENBQUgsRUFBMkNBLEVBQUUsQ0FBQyxPQUFELEVBQVUsMEJBQVYsQ0FBN0MsRUFBb0ZBLEVBQUUsQ0FBQyxNQUFELEVBQVMsMEJBQVQsQ0FBdEYsQ0FMeUI7QUFNbkNVLFlBQVUsRUFBRTtBQUNSTCxTQUFLLEVBQUU7QUFDSE0sVUFBSSxFQUFFO0FBREgsS0FEQztBQUlSQyxTQUFLLEVBQUU7QUFDSEQsVUFBSSxFQUFFLFFBREg7QUFFSEUsYUFBTyxFQUFFO0FBRk4sS0FKQztBQVFSQyxXQUFPLEVBQUU7QUFDTEgsVUFBSSxFQUFFLFFBREQ7QUFFTEUsYUFBTyxFQUFFO0FBRkosS0FSRDtBQVlSRSxlQUFXLEVBQUU7QUFDVEosVUFBSSxFQUFFLFFBREc7QUFFVEUsYUFBTyxFQUFFO0FBRkE7QUFaTCxHQU51QjtBQXVCbkNHLFVBQVEsRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFERixHQXZCeUI7QUEwQm5DQyxNQUFJLEVBQUpBLDZDQTFCbUM7QUEyQm5DQyxNQUFJLEVBQUUsY0FBQ0MsS0FBRCxFQUFXO0FBQ2IsV0FBTyxJQUFQO0FBQ0g7QUE3QmtDLENBQXRCLENBQWpCIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2NsaWVudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGJsb2NrIGxpYnJhcmllc1xuICovXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2hvcnR0Y29yZS9jbGllbnRzJywge1xuICAgIHRpdGxlOiBfXygnQ2xpZW50cycsICdjdXN0b20tcG9zdC10eXBlLWNsaWVudHMnKSxcbiAgICBkZXNjcmlwdGlvbjogX18oJ1Nob3dzIGEgY3VzdG9tIGNsaWVudHMgbG9vcCcsICdjdXN0b20tcG9zdC10eXBlLWNsaWVudHMnKSxcbiAgICBpY29uOiAnYnVzaW5lc3NtYW4nLFxuICAgIGNhdGVnb3J5OiAnd2lkZ2V0cycsXG4gICAga2V5d29yZHM6IFtfXygnQ2xpZW50JywgJ2N1c3RvbS1wb3N0LXR5cGUtY2xpZW50cycpLCBfXygnUXVlcnknLCAnY3VzdG9tLXBvc3QtdHlwZS1jbGllbnRzJyksIF9fKCdMb29wJywgJ2N1c3RvbS1wb3N0LXR5cGUtY2xpZW50cycpXSxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiAnYXNjJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdtZW51X29yZGVyJ1xuICAgICAgICB9LFxuICAgICAgICBwb3N0c1RvU2hvdzoge1xuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICBkZWZhdWx0OiAxMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdXBwb3J0czoge1xuICAgICAgICBhbmNob3I6IHRydWVcbiAgICB9LFxuICAgIGVkaXQsXG4gICAgc2F2ZTogKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/clients/index.js\n");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients */ \"./assets/js/clients/index.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguanM/N2U2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NsaWVudHMnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/index.js\n");

/***/ }),

/***/ "./assets/sass/editorStyles.sass":
/*!***************************************!*\
  !*** ./assets/sass/editorStyles.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9lZGl0b3JTdHlsZXMuc2Fzcz9jM2Q1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vYXNzZXRzL3Nhc3MvZWRpdG9yU3R5bGVzLnNhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/sass/editorStyles.sass\n");

/***/ }),

/***/ "./assets/sass/styles.sass":
/*!*********************************!*\
  !*** ./assets/sass/styles.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9zdHlsZXMuc2Fzcz9jZGViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vYXNzZXRzL3Nhc3Mvc3R5bGVzLnNhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/sass/styles.sass\n");

/***/ }),

/***/ 0:
/*!********************************************************************************************!*\
  !*** multi ./assets/js/index.js ./assets/sass/styles.sass ./assets/sass/editorStyles.sass ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ralfhortt/Sites/s-d/wp-content/plugins/Custom-Post-Type-Clients/assets/js/index.js */"./assets/js/index.js");
__webpack_require__(/*! /Users/ralfhortt/Sites/s-d/wp-content/plugins/Custom-Post-Type-Clients/assets/sass/styles.sass */"./assets/sass/styles.sass");
module.exports = __webpack_require__(/*! /Users/ralfhortt/Sites/s-d/wp-content/plugins/Custom-Post-Type-Clients/assets/sass/editorStyles.sass */"./assets/sass/editorStyles.sass");


/***/ })

/******/ });