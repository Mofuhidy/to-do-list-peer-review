/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@400;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --sec: #bbd6b8;\n  --main: #dbe4c6;\n  --third: #989898;\n  --fourth: #94af9f;\n  --text: #3e4b43;\n}\n\nbody {\n  background-color: var(--fourth);\n  font-family: \"Karla\", sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n}\n\n.listCont {\n  background-color: var(--main);\n  min-width: 90%;\n  box-shadow:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  margin-top: 5rem;\n}\n\n.title {\n  font-size: 1.1rem;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--sec);\n  color: var(--text);\n  font-weight: 600;\n}\n\ni {\n  color: var(--third);\n}\n\ni:not(.enter) {\n  cursor: pointer;\n}\n\ni:not(.enter):hover {\n  color: var(--text);\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  width: 100%;\n  margin: 0;\n}\n\nli {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  border-bottom: 1px solid var(--sec);\n  font-size: 14px;\n}\n\n.checkList {\n  position: relative;\n  margin-right: 10px;\n}\n\nli .checkList {\n  display: flex;\n  align-items: center;\n}\n\ninput {\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-style: italic;\n  outline: 0;\n}\n\n.checkList input {\n  margin-right: 10px;\n  font-style: normal;\n}\n\n#add {\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--sec);\n}\n\n#add i {\n  transform: rotate(90deg);\n  margin-right: 2px;\n}\n\n.clearCont {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background-color: var(--fourth);\n}\n\n.clearCont .clrBtn {\n  outline: none;\n  color: var(--main);\n  border: none;\n  background: inherit;\n  line-height: 1.5rem;\n  font-size: inherit;\n  cursor: pointer;\n}\n\n.completed {\n  transition: opacity 0.3s ease-in-out;\n  text-decoration: line-through var(--text);\n  color: gray;\n}\n\n.refresh:hover {\n  transform: rotateZ(90deg);\n}\n\n.task-item:hover {\n  background-color: var(--sec);\n}\n\n.chcek {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  border: 2px solid transparent; /* Hide the square border */\n  background-color: var(--fourth);\n  position: relative;\n  cursor: pointer;\n  outline: none;\n}\n\n.chcek:checked {\n  background-color: var(--fourth);\n}\n\n.chcek::after {\n  content: \"\\\\2713\"; /* Checkmark character */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 16px;\n  color: var(--text);\n  transition: opacity 0.3s ease-in-out;\n  opacity: 0; /* Initially hide the checkmark */\n}\n\n.chcek:checked::after {\n  opacity: 1; /* Show the checkmark when checked */\n}\n\n.inputDesc {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-size: 16px;\n  color: var(--text);\n  padding: 2px;\n}\n\n@media screen and (min-width: 768px) {\n  .listCont {\n    background-color: var(--main);\n    min-width: 50%;\n    box-shadow:\n      0 10px 15px -3px rgba(0, 0, 0, 0.1),\n      0 10px 15px -3px rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    margin-top: 5rem;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _modules_updateStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/updateStatus.js */ \"./src/modules/updateStatus.js\");\n\n\n\n\nwindow.onload = () => {\n  _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayTasks();\n  _modules_updateStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateStatus();\n  _modules_updateStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearCompleted();\n  (0,_modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__.addDragAndDropListeners)();\n};\nconst refersh = document.querySelector('.refresh');\nrefersh.addEventListener('click', () => {\n  window.location.reload();\n});\n\n_modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__.submit.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    e.preventDefault();\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask();\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__.submit.value = '';\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.innerHTML = '';\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayTasks();\n    _modules_updateStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateStatus();\n  }\n});\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/saveData.js":
/*!*********************************!*\
  !*** ./src/modules/saveData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst saveData = (d) => {\n  localStorage.setItem('todo', JSON.stringify(d));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveData);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/saveData.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDragAndDropListeners: () => (/* binding */ addDragAndDropListeners),\n/* harmony export */   \"default\": () => (/* binding */ Tasks),\n/* harmony export */   listContainer: () => (/* binding */ listContainer),\n/* harmony export */   submit: () => (/* binding */ submit),\n/* harmony export */   tasksList: () => (/* binding */ tasksList)\n/* harmony export */ });\n/* harmony import */ var _saveData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveData.js */ \"./src/modules/saveData.js\");\n\n\nconst tasksList = JSON.parse(localStorage.getItem('todo')) || [];\n\nconst listContainer = document.querySelector('.tasks-container');\nconst submit = document.querySelector('#addDo');\n\nclass Tasks {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n\n  static addTask = () => {\n    const task = new Tasks(submit.value, false, tasksList.length + 1);\n    if (submit.value !== '') {\n      tasksList.push(task);\n      (0,_saveData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksList);\n    }\n  }\n\n  static displayTasks = () => {\n    let singleTask = '';\n    tasksList.forEach((task) => {\n      singleTask += `<li class=\"task-item draggable\" draggable=\"true\" id='${task.index}'>\n                      <div class=\"checkList\">\n                       <input type=\"checkbox\" name=\"check\" class=\"chcek\" ${task.completed === true ? 'checked' : ''}>\n                       <!-- put the description inside input so the user can edit it -->\n                       <input tabindex=\"-1\" class='inputDesc ${!task.completed ? '' : 'completed'}' value=\"${task.description}\">\n                        </div>\n                      <i class=\"fa-solid fa-trash delete\"></i>\n                  </li>`;\n      listContainer.innerHTML = singleTask;\n    });\n    // Implement the delete task\n    const delButton = document.querySelectorAll('.delete');\n    delButton.forEach((delBtn, i) => {\n      delBtn.addEventListener('click', () => {\n        Tasks.removeTask(i);\n      });\n    });\n\n    // Implement the editing task\n    const editTaskInput = document.querySelectorAll('.inputDesc');\n\n    editTaskInput.forEach((editTask, i) => {\n      editTask.addEventListener('change', () => {\n        if (editTask.value) {\n          tasksList[i].description = editTask.value;\n          (0,_saveData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksList);\n        }\n      });\n    });\n  };\n\n  static removeTask = (index) => {\n    tasksList.splice(index, 1);\n\n    tasksList.forEach((val, i) => {\n      val.index = i + 1;\n    });\n\n    listContainer.innerHTML = '';\n    (0,_saveData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksList);\n    Tasks.displayTasks();\n  }\n}\n\n// Drag and Drop functionality\n\nlet dragStartIndex;\nlet dragOverIndex;\n\nfunction dragStart(event) {\n  dragStartIndex = parseInt(event.target.id, 10);\n  event.dataTransfer.effectAllowed = 'move';\n  event.dataTransfer.setData('text/html', this.innerHTML);\n  this.classList.add('dragging');\n}\n\nfunction dragEnter() {\n  this.classList.add('over');\n}\n\nfunction dragOver(event) {\n  event.preventDefault();\n  event.dataTransfer.dropEffect = 'move';\n  const bounding = this.getBoundingClientRect();\n  const offset = bounding.y + bounding.height / 2;\n  if (event.clientY - offset > 0) {\n    this.style.borderBottom = 'solid 2px red';\n    this.style.borderTop = '';\n  } else {\n    this.style.borderTop = 'solid 2px red';\n    this.style.borderBottom = '';\n  }\n}\n\nfunction dragLeave() {\n  this.classList.remove('over');\n  this.style.borderTop = '';\n  this.style.borderBottom = '';\n}\n\nfunction dragDrop(event) {\n  event.preventDefault();\n  const dropIndex = parseInt(this.id, 10);\n  dragOverIndex = dropIndex;\n\n  if (dragStartIndex === dragOverIndex) {\n    return;\n  }\n\n  const draggedTask = tasksList.find((task) => task.index === dragStartIndex);\n  const draggedTaskIndex = tasksList.findIndex((task) => task.index === dragStartIndex);\n  const dropTaskIndex = tasksList.findIndex((task) => task.index === dragOverIndex);\n\n  tasksList.splice(draggedTaskIndex, 1);\n  tasksList.splice(dropTaskIndex, 0, draggedTask);\n\n  (0,_saveData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksList);\n  Tasks.displayTasks();\n}\n\nfunction dragEnd() {\n  this.classList.remove('over');\n  this.style.borderTop = '';\n  this.style.borderBottom = '';\n  const draggableItems = document.querySelectorAll('.draggable');\n  draggableItems.forEach((item) => {\n    item.classList.remove('dragging');\n  });\n}\n\nfunction addDragAndDropListeners() {\n  const draggableItems = document.querySelectorAll('.draggable');\n  draggableItems.forEach((item) => {\n    item.removeEventListener('dragstart', dragStart);\n    item.removeEventListener('dragenter', dragEnter);\n    item.removeEventListener('dragover', dragOver);\n    item.removeEventListener('dragleave', dragLeave);\n    item.removeEventListener('drop', dragDrop);\n    item.removeEventListener('dragend', dragEnd);\n\n    item.addEventListener('dragstart', dragStart);\n    item.addEventListener('dragenter', dragEnter);\n    item.addEventListener('dragover', dragOver);\n    item.addEventListener('dragleave', dragLeave);\n    item.addEventListener('drop', dragDrop);\n    item.addEventListener('dragend', dragEnd);\n  });\n}\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/tasks.js?");

/***/ }),

/***/ "./src/modules/updateStatus.js":
/*!*************************************!*\
  !*** ./src/modules/updateStatus.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskStatus)\n/* harmony export */ });\n/* harmony import */ var _saveData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveData.js */ \"./src/modules/saveData.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\n\nclass TaskStatus {\n    static updateStatus = () => {\n      const checkBox = document.querySelectorAll('.chcek');\n\n      checkBox.forEach((ch, i) => {\n        ch.addEventListener('change', () => {\n          if (!_tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList[i].completed) {\n            _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList[i].completed = true;\n            (0,_saveData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList);\n            ch.nextElementSibling.classList.add('completed');\n          } else {\n            _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList[i].completed = false;\n            (0,_saveData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList);\n            ch.nextElementSibling.classList.remove('completed');\n          }\n        });\n      });\n    };\n\n    static clearCompleted = () => {\n      const clrCompleted = document.querySelector('.clrBtn');\n      clrCompleted.addEventListener('click', () => {\n        const notCompleted = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList.filter((task) => task.completed !== true);\n        notCompleted.forEach((e, i) => {\n          e.index = i + 1;\n        });\n        (0,_saveData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(notCompleted);\n        window.location.reload();\n      });\n    }\n}\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/updateStatus.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;