/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
  background-color: lightblue;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;AAC7B","sourcesContent":["body{\r\n  background-color: lightblue;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/css/index.js":
/*!**************************!*\
  !*** ./src/css/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/css/style.css");


/***/ }),

/***/ "./src/dom/elements/a.js":
/*!*******************************!*\
  !*** ./src/dom/elements/a.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class A extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(href=''){
    super('a');
    if (href != ''){
      this.set_href(href);
    }
  }

  set_href = href => this.element.setAttribute('href', href);
}

/***/ }),

/***/ "./src/dom/elements/aside.js":
/*!***********************************!*\
  !*** ./src/dom/elements/aside.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aside: () => (/* binding */ Aside)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Aside extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('aside', text);
  }
}

/***/ }),

/***/ "./src/dom/elements/body.js":
/*!**********************************!*\
  !*** ./src/dom/elements/body.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Body: () => (/* binding */ Body)
/* harmony export */ });
class Body{
  constructor(){
    this.element = document.querySelector('body');
  }
  add = (...nodes) => {
    for(const node of nodes){
      this.element.appendChild(node.element);
    }
  };
}

/***/ }),

/***/ "./src/dom/elements/button.js":
/*!************************************!*\
  !*** ./src/dom/elements/button.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Button extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('button', text);
    this.element.setAttribute("type", "submit");
  }
}

/***/ }),

/***/ "./src/dom/elements/dialog.js":
/*!************************************!*\
  !*** ./src/dom/elements/dialog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Dialog extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('dialog', text);
    this.hidden = true;
  }
  toggleModal = () => {
    if(this.hidden){
      this.show_modal();
    }
    else{
      this.close();
    }
  }
  show_modal = () => {
    if(this.hidden){
      this.element.showModal();
      this.hidden = false;
    }
  }
  close = () => {
    if(!this.hidden){
      this.element.close();
      this.hidden = true;
    }
  }
}

/***/ }),

/***/ "./src/dom/elements/div.js":
/*!*********************************!*\
  !*** ./src/dom/elements/div.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Div: () => (/* binding */ Div)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Div extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('div', text);
  }
}

/***/ }),

/***/ "./src/dom/elements/element.js":
/*!*************************************!*\
  !*** ./src/dom/elements/element.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicElement: () => (/* binding */ BasicElement)
/* harmony export */ });
class BasicElement{
  constructor(tag, text=''){
    this.element = document.createElement(tag);
    this.text = text;
    this.init();
  }

  set_text = text => this.element.innerText = text;

  add_class = class_name => this.element.classList.add(class_name);

  add_node = (...nodes) => {
    let last_element = undefined;
    for(const node of nodes){
      last_element = this.element.appendChild(node.element);
    }
    return last_element;
  };
  
  on_click = func => this.element.addEventListener('click', func);
  
  init = () => {
    this.set_text(this.text);
  }
}

/***/ }),

/***/ "./src/dom/elements/footer.js":
/*!************************************!*\
  !*** ./src/dom/elements/footer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Footer extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(){
    super('footer');
  }
}

/***/ }),

/***/ "./src/dom/elements/form.js":
/*!**********************************!*\
  !*** ./src/dom/elements/form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/dom/elements/input.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea */ "./src/dom/elements/textarea.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./src/dom/elements/button.js");





class Form extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement {
  constructor(){
    super('form');
  }
  add_label = name => this.add_node(new Label(name));

  add_input = (name, type='text', placeholder='') => this.add_node(new _input__WEBPACK_IMPORTED_MODULE_1__.Input(name, type, placeholder));

  add_text_area = (name, placeholder='Enter text here...', rows=4, cols=50) => this.add_node(new _textarea__WEBPACK_IMPORTED_MODULE_2__.Textarea(name, placeholder, rows, cols));
  
  add_button = name => {
    this.button = new _button__WEBPACK_IMPORTED_MODULE_3__.Button(name);
    this.add_node(this.button);
    return this.button;
  };
}

/***/ }),

/***/ "./src/dom/elements/h.js":
/*!*******************************!*\
  !*** ./src/dom/elements/h.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H1: () => (/* binding */ H1),
/* harmony export */   H2: () => (/* binding */ H2)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class H1 extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('h1', text);
  }
}

class H2 extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('h2', text);
  }
}

/***/ }),

/***/ "./src/dom/elements/header.js":
/*!************************************!*\
  !*** ./src/dom/elements/header.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Header extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(){
    super('header');
  }
}

/***/ }),

/***/ "./src/dom/elements/img.js":
/*!*********************************!*\
  !*** ./src/dom/elements/img.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Img: () => (/* binding */ Img)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Img extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(src, alt='image', width=64, height=64){
    super('img');
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;
    this.init();
  }

  set_src = src => this.element.setAttribute('src', src);
  set_alt = alt => this.element.setAttribute('alt', alt);
  set_width = width => this.element.setAttribute('width', width);
  set_height = height => this.element.setAttribute('height', height);

  init = () => {
    this.set_src(this.src);
    this.set_alt(this.alt);
    this.set_width(this.width);
    this.set_height(this.height);
  }
}

/***/ }),

/***/ "./src/dom/elements/index.js":
/*!***********************************!*\
  !*** ./src/dom/elements/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _a__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   Aside: () => (/* reexport safe */ _aside__WEBPACK_IMPORTED_MODULE_1__.Aside),
/* harmony export */   Body: () => (/* reexport safe */ _body__WEBPACK_IMPORTED_MODULE_2__.Body),
/* harmony export */   Button: () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_3__.Button),
/* harmony export */   Dialog: () => (/* reexport safe */ _dialog__WEBPACK_IMPORTED_MODULE_4__.Dialog),
/* harmony export */   Div: () => (/* reexport safe */ _div__WEBPACK_IMPORTED_MODULE_5__.Div),
/* harmony export */   Footer: () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_6__.Footer),
/* harmony export */   Form: () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_7__.Form),
/* harmony export */   H1: () => (/* reexport safe */ _h__WEBPACK_IMPORTED_MODULE_8__.H1),
/* harmony export */   H2: () => (/* reexport safe */ _h__WEBPACK_IMPORTED_MODULE_8__.H2),
/* harmony export */   Header: () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_9__.Header),
/* harmony export */   Img: () => (/* reexport safe */ _img__WEBPACK_IMPORTED_MODULE_10__.Img),
/* harmony export */   Input: () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_11__.Input),
/* harmony export */   Label: () => (/* reexport safe */ _label__WEBPACK_IMPORTED_MODULE_12__.Label),
/* harmony export */   Nav: () => (/* reexport safe */ _nav__WEBPACK_IMPORTED_MODULE_13__.Nav),
/* harmony export */   P: () => (/* reexport safe */ _p__WEBPACK_IMPORTED_MODULE_14__.P),
/* harmony export */   Textarea: () => (/* reexport safe */ _textarea__WEBPACK_IMPORTED_MODULE_15__.Textarea)
/* harmony export */ });
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ "./src/dom/elements/a.js");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside */ "./src/dom/elements/aside.js");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body */ "./src/dom/elements/body.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./src/dom/elements/button.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog */ "./src/dom/elements/dialog.js");
/* harmony import */ var _div__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./div */ "./src/dom/elements/div.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./src/dom/elements/footer.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form */ "./src/dom/elements/form.js");
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./h */ "./src/dom/elements/h.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header */ "./src/dom/elements/header.js");
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img */ "./src/dom/elements/img.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input */ "./src/dom/elements/input.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./label */ "./src/dom/elements/label.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav */ "./src/dom/elements/nav.js");
/* harmony import */ var _p__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./p */ "./src/dom/elements/p.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./textarea */ "./src/dom/elements/textarea.js");

















/***/ }),

/***/ "./src/dom/elements/input.js":
/*!***********************************!*\
  !*** ./src/dom/elements/input.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Input extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement {
  constructor(name, type, placeholder){
    super('input');
    this.type(type);
    this.id(name.toLowerCase());
    this.name(name.toLowerCase());
    if (placeholder != ''){ this.placeholder(placeholder) }
    this.required();
    this.max_length(20);
  }
  type = identifier => this.element.setAttribute('type', identifier);
  id = name => this.element.id = name;
  name = identifier => this.element.setAttribute('name', identifier);
  placeholder = text => this.element.setAttribute('placeholder', text);
  required = () => this.element.setAttribute("required", "required");
  max_length = length => this.element.setAttribute('maxlength', length);
  get value(){ return this.element.value }

  on_input = func => this.element.addEventListener('input', func);
}

/***/ }),

/***/ "./src/dom/elements/label.js":
/*!***********************************!*\
  !*** ./src/dom/elements/label.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Label extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement {
  constructor(name){
    super('label', name);
    this.for(name.toLowerCase());
  }
  for = name => this.element.setAttribute('for', name); 
}

/***/ }),

/***/ "./src/dom/elements/nav.js":
/*!*********************************!*\
  !*** ./src/dom/elements/nav.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nav: () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Nav extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(){
    super('nav');
  }
}

/***/ }),

/***/ "./src/dom/elements/p.js":
/*!*******************************!*\
  !*** ./src/dom/elements/p.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class P extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement{
  constructor(text=''){
    super('p', text);
  }
}

/***/ }),

/***/ "./src/dom/elements/textarea.js":
/*!**************************************!*\
  !*** ./src/dom/elements/textarea.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Textarea: () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/dom/elements/element.js");


class Textarea extends _element__WEBPACK_IMPORTED_MODULE_0__.BasicElement {
  constructor(name, placeholder, rows, cols){
    super('textarea');
    this.id(name.toLowerCase());
    this.name(name.toLowerCase());
    this.placeholder(placeholder);
    this.rows(rows);
    this.cols(cols);
  }
  id = name => this.element.id = name;
  name = identifier => this.element.setAttribute('name', identifier);
  placeholder = text => this.element.setAttribute('placeholder', text);
  rows = value => this.element.setAttribute('rows', value);
  cols = value => this.element.setAttribute('cols', value);
}

/***/ }),

/***/ "./src/dom/index.js":
/*!**************************!*\
  !*** ./src/dom/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   Aside: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Aside),
/* harmony export */   Body: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Body),
/* harmony export */   Button: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Button),
/* harmony export */   Dialog: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Dialog),
/* harmony export */   Div: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Div),
/* harmony export */   Footer: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Footer),
/* harmony export */   Form: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Form),
/* harmony export */   H1: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.H1),
/* harmony export */   H2: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.H2),
/* harmony export */   Header: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Header),
/* harmony export */   Img: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Img),
/* harmony export */   Input: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Input),
/* harmony export */   Label: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Label),
/* harmony export */   LocationCard: () => (/* reexport safe */ _location_card__WEBPACK_IMPORTED_MODULE_3__.LocationCard),
/* harmony export */   Nav: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Nav),
/* harmony export */   P: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   Searchbar: () => (/* reexport safe */ _searchbar__WEBPACK_IMPORTED_MODULE_1__.Searchbar),
/* harmony export */   Textarea: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Textarea),
/* harmony export */   WeatherCard: () => (/* reexport safe */ _weather_card__WEBPACK_IMPORTED_MODULE_2__.WeatherCard)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/dom/elements/index.js");
/* harmony import */ var _searchbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchbar */ "./src/dom/searchbar.js");
/* harmony import */ var _weather_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather_card */ "./src/dom/weather_card.js");
/* harmony import */ var _location_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location_card */ "./src/dom/location_card.js");


 
 
 

/***/ }),

/***/ "./src/dom/input_types.js":
/*!********************************!*\
  !*** ./src/dom/input_types.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputType: () => (/* binding */ InputType)
/* harmony export */ });
const InputType = {
  button: "button",
  checkbox: "checkbox",
  color: "color",
  date: "date",
  datetime_local: "datetime-local",
  email: "email",
  file: "file",
  hidden: "hidden",
  image: "image",
  month: "month",
  number: "number",
  password: "password",
  radio: "radio",
  range: "range",
  reset: "reset",
  search: "search",
  submit: "submit",
  tel: "tel",
  text: "text",
  time: "time",
  url: "url",
  week: "week",
};

/***/ }),

/***/ "./src/dom/location_card.js":
/*!**********************************!*\
  !*** ./src/dom/location_card.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationCard: () => (/* binding */ LocationCard)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/dom/elements/index.js");


class LocationCard extends _elements__WEBPACK_IMPORTED_MODULE_0__.Div{
  constructor(){
    super();
    this.add_class('location_card');
    this.city;
    this.country;
    this.region;
    this.localtime;
    this.init();
  }

  init = () => {
    const title = new _elements__WEBPACK_IMPORTED_MODULE_0__.H2('Location');
    this.city = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('???');
    this.country = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('???');
    this.region = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('???');
    this.localtime = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('???');
    this.add_node(title, this.city, this.country, this.region, this.localtime);
  }

  set_values = location => {
    this.city.set_text(location.name);
    this.country.set_text(location.country);
    this.region.set_text(location.region);
    this.localtime.set_text(location.localtime);
  }
}

/***/ }),

/***/ "./src/dom/searchbar.js":
/*!******************************!*\
  !*** ./src/dom/searchbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Searchbar: () => (/* binding */ Searchbar)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/dom/elements/index.js");
/* harmony import */ var _input_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input_types */ "./src/dom/input_types.js");



class Searchbar extends _elements__WEBPACK_IMPORTED_MODULE_0__.Div{
  constructor(placeholder=''){
    super();
    this.add_class('searchbar');
    this.placeholder = placeholder;
    this.input;
    this.button;
    this.init();
  }

  init = () => {
    const form = new _elements__WEBPACK_IMPORTED_MODULE_0__.Form();
    this.input = form.add_input('searchbar_input', _input_types__WEBPACK_IMPORTED_MODULE_1__.InputType.search, this.placeholder)
    this.button = form.add_button('Search');
    this.add_node(form);
  }

  get value(){ return this.input.value };

  on_button_click = func => this.button.on_click(func);
}

/***/ }),

/***/ "./src/dom/weather_card.js":
/*!*********************************!*\
  !*** ./src/dom/weather_card.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherCard: () => (/* binding */ WeatherCard)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/dom/elements/index.js");


class WeatherCard extends _elements__WEBPACK_IMPORTED_MODULE_0__.Div{
  constructor(){
    super();
    this.add_class('weather_card');
    this.cloud;
    this.humidity;
    this.temp_c;
    this.icon;
    this.wind_dir;
    this.wind_kph;
    this.init();
  }

  init = () => {
    const title = new _elements__WEBPACK_IMPORTED_MODULE_0__.H2('Weather');
    this.cloud = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('???');
    this.humidity = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('???');
    this.temp_c = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('???');
    this.icon = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('???');
    this.wind_dir = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('???');
    this.wind_kph = new _elements__WEBPACK_IMPORTED_MODULE_0__.P('???');
    this.add_node(title,
      new _elements__WEBPACK_IMPORTED_MODULE_0__.P('Cloud:'), this.cloud,
      new _elements__WEBPACK_IMPORTED_MODULE_0__.P('Humidity:'), this.humidity,
      new _elements__WEBPACK_IMPORTED_MODULE_0__.P('Temperatur C:'), this.temp_c,
      new _elements__WEBPACK_IMPORTED_MODULE_0__.P('Wind direction:'), this.wind_dir,
      new _elements__WEBPACK_IMPORTED_MODULE_0__.P('Wind velocity:'), this.wind_kph
      );}

  set_values = weather => {
    this.cloud.set_text(weather.cloud);
    this.humidity.set_text(weather.humidity);
    this.temp_c.set_text(weather.temp_c);
    this.wind_dir.set_text(weather.wind_dir);
    this.wind_kph.set_text(weather.wind_kph);
  }
}

/***/ }),

/***/ "./src/weather_api/index.js":
/*!**********************************!*\
  !*** ./src/weather_api/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherAPI: () => (/* reexport safe */ _weather_api__WEBPACK_IMPORTED_MODULE_0__.WeatherAPI)
/* harmony export */ });
/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather_api */ "./src/weather_api/weather_api.js");



/***/ }),

/***/ "./src/weather_api/location.js":
/*!*************************************!*\
  !*** ./src/weather_api/location.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Location: () => (/* binding */ Location)
/* harmony export */ });
class Location{
  constructor(){
    this.country;
    this.localtime;
    this.name;
    this.region;
  }

  set_data = data => {
    this.country = data.country;
    this.localtime = data.localtime;
    this.name = data.name;
    this.region = data.region;
  }
}

/***/ }),

/***/ "./src/weather_api/weather.js":
/*!************************************!*\
  !*** ./src/weather_api/weather.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Weather: () => (/* binding */ Weather)
/* harmony export */ });
class Weather{
  constructor(){
    this.cloud;
    this.humidity;
    this.temp_c;
    this.temp_f;
    this.icon;
    this.wind_dir;
    this.wind_kph;
  }

  set_data = data => {
    this.cloud = data.cloud;
    this.humidity = data.humidity;
    this.temp_c = data.temp_c;
    this.temp_f = data.temp_f;
    this.icon = data.condition.icon;
    this.wind_dir = data.wind_dir;
    this.wind_kph = data.wind_kph;
  }
}



/***/ }),

/***/ "./src/weather_api/weather_api.js":
/*!****************************************!*\
  !*** ./src/weather_api/weather_api.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherAPI: () => (/* binding */ WeatherAPI)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather_api/weather.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./src/weather_api/location.js");



class WeatherAPI{
  constructor(){
    this.weather = new _weather__WEBPACK_IMPORTED_MODULE_0__.Weather();
    this.location = new _location__WEBPACK_IMPORTED_MODULE_1__.Location();
    this.url = `https://api.weatherapi.com/v1/current.json?key=${"b8ada89ae56a44d3bd092945230810"}&q=`
    this.status;
    this.ok;
  }

  get_data = async city => {
    const response = await fetch(this.url + city, {mode: 'cors'});
    this.status = response.status;
    this.ok = response.ok;
    if (this.ok) {
      const data = await response.json();
      this.location.set_data(data.location);
      this.weather.set_data(data.current);
    }
  }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ "./src/css/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom/index.js");
/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather_api */ "./src/weather_api/index.js");




const weather_api = new _weather_api__WEBPACK_IMPORTED_MODULE_2__.WeatherAPI();

const body = new _dom__WEBPACK_IMPORTED_MODULE_1__.Body();

const header = new _dom__WEBPACK_IMPORTED_MODULE_1__.Header();

const contents = new _dom__WEBPACK_IMPORTED_MODULE_1__.Div();
const contents_title = new _dom__WEBPACK_IMPORTED_MODULE_1__.H1('Weather');
const searchbar = new _dom__WEBPACK_IMPORTED_MODULE_1__.Searchbar('City');

const location_card = new _dom__WEBPACK_IMPORTED_MODULE_1__.LocationCard();
const weather_card = new _dom__WEBPACK_IMPORTED_MODULE_1__.WeatherCard();

searchbar.on_button_click(async event => {
  event.preventDefault();
  await weather_api.get_data(searchbar.value);
  location_card.set_values(weather_api.location);
  weather_card.set_values(weather_api.weather);
})

contents.add_node(contents_title, searchbar, location_card, weather_card);

body.add(header, contents);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2Nzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vZWxlbWVudHMvYS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vZWxlbWVudHMvYXNpZGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZG9tL2VsZW1lbnRzL2JvZHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZG9tL2VsZW1lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vZWxlbWVudHMvZGlhbG9nLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2RvbS9lbGVtZW50cy9kaXYuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZG9tL2VsZW1lbnRzL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZG9tL2VsZW1lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vZWxlbWVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vZWxlbWVudHMvaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vZWxlbWVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2RvbS9lbGVtZW50cy9pbWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZG9tL2VsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2RvbS9lbGVtZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vZWxlbWVudHMvbGFiZWwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZG9tL2VsZW1lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vZWxlbWVudHMvcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vZWxlbWVudHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2RvbS9pbnB1dF90eXBlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vbG9jYXRpb25fY2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9kb20vc2VhcmNoYmFyLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2RvbS93ZWF0aGVyX2NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvd2VhdGhlcl9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvd2VhdGhlcl9hcGkvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvd2VhdGhlcl9hcGkvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy93ZWF0aGVyX2FwaS93ZWF0aGVyX2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIiIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBIGV4dGVuZHMgQmFzaWNFbGVtZW50e1xyXG4gIGNvbnN0cnVjdG9yKGhyZWY9Jycpe1xyXG4gICAgc3VwZXIoJ2EnKTtcclxuICAgIGlmIChocmVmICE9ICcnKXtcclxuICAgICAgdGhpcy5zZXRfaHJlZihocmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldF9ocmVmID0gaHJlZiA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XHJcbn0iLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXNpZGUgZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IodGV4dD0nJyl7XHJcbiAgICBzdXBlcignYXNpZGUnLCB0ZXh0KTtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQm9keXtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIH1cclxuICBhZGQgPSAoLi4ubm9kZXMpID0+IHtcclxuICAgIGZvcihjb25zdCBub2RlIG9mIG5vZGVzKXtcclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGUuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufSIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IodGV4dD0nJyl7XHJcbiAgICBzdXBlcignYnV0dG9uJywgdGV4dCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQmFzaWNFbGVtZW50e1xyXG4gIGNvbnN0cnVjdG9yKHRleHQ9Jycpe1xyXG4gICAgc3VwZXIoJ2RpYWxvZycsIHRleHQpO1xyXG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuICB0b2dnbGVNb2RhbCA9ICgpID0+IHtcclxuICAgIGlmKHRoaXMuaGlkZGVuKXtcclxuICAgICAgdGhpcy5zaG93X21vZGFsKCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dfbW9kYWwgPSAoKSA9PiB7XHJcbiAgICBpZih0aGlzLmhpZGRlbil7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zaG93TW9kYWwoKTtcclxuICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICBpZighdGhpcy5oaWRkZW4pe1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xvc2UoKTtcclxuICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXYgZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IodGV4dD0nJyl7XHJcbiAgICBzdXBlcignZGl2JywgdGV4dCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEJhc2ljRWxlbWVudHtcclxuICBjb25zdHJ1Y3Rvcih0YWcsIHRleHQ9Jycpe1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0X3RleHQgPSB0ZXh0ID0+IHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xyXG5cclxuICBhZGRfY2xhc3MgPSBjbGFzc19uYW1lID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzX25hbWUpO1xyXG5cclxuICBhZGRfbm9kZSA9ICguLi5ub2RlcykgPT4ge1xyXG4gICAgbGV0IGxhc3RfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIGZvcihjb25zdCBub2RlIG9mIG5vZGVzKXtcclxuICAgICAgbGFzdF9lbGVtZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGUuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGFzdF9lbGVtZW50O1xyXG4gIH07XHJcbiAgXHJcbiAgb25fY2xpY2sgPSBmdW5jID0+IHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xyXG4gIFxyXG4gIGluaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldF90ZXh0KHRoaXMudGV4dCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQmFzaWNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIEJhc2ljRWxlbWVudHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoJ2Zvb3RlcicpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9pbnB1dFwiO1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuL3RleHRhcmVhXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0gZXh0ZW5kcyBCYXNpY0VsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcignZm9ybScpO1xyXG4gIH1cclxuICBhZGRfbGFiZWwgPSBuYW1lID0+IHRoaXMuYWRkX25vZGUobmV3IExhYmVsKG5hbWUpKTtcclxuXHJcbiAgYWRkX2lucHV0ID0gKG5hbWUsIHR5cGU9J3RleHQnLCBwbGFjZWhvbGRlcj0nJykgPT4gdGhpcy5hZGRfbm9kZShuZXcgSW5wdXQobmFtZSwgdHlwZSwgcGxhY2Vob2xkZXIpKTtcclxuXHJcbiAgYWRkX3RleHRfYXJlYSA9IChuYW1lLCBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCBoZXJlLi4uJywgcm93cz00LCBjb2xzPTUwKSA9PiB0aGlzLmFkZF9ub2RlKG5ldyBUZXh0YXJlYShuYW1lLCBwbGFjZWhvbGRlciwgcm93cywgY29scykpO1xyXG4gIFxyXG4gIGFkZF9idXR0b24gPSBuYW1lID0+IHtcclxuICAgIHRoaXMuYnV0dG9uID0gbmV3IEJ1dHRvbihuYW1lKTtcclxuICAgIHRoaXMuYWRkX25vZGUodGhpcy5idXR0b24pO1xyXG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uO1xyXG4gIH07XHJcbn0iLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSDEgZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IodGV4dD0nJyl7XHJcbiAgICBzdXBlcignaDEnLCB0ZXh0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIMiBleHRlbmRzIEJhc2ljRWxlbWVudHtcclxuICBjb25zdHJ1Y3Rvcih0ZXh0PScnKXtcclxuICAgIHN1cGVyKCdoMicsIHRleHQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCdoZWFkZXInKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1nIGV4dGVuZHMgQmFzaWNFbGVtZW50e1xyXG4gIGNvbnN0cnVjdG9yKHNyYywgYWx0PSdpbWFnZScsIHdpZHRoPTY0LCBoZWlnaHQ9NjQpe1xyXG4gICAgc3VwZXIoJ2ltZycpO1xyXG4gICAgdGhpcy5zcmMgPSBzcmM7XHJcbiAgICB0aGlzLmFsdCA9IGFsdDtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRfc3JjID0gc3JjID0+IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XHJcbiAgc2V0X2FsdCA9IGFsdCA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xyXG4gIHNldF93aWR0aCA9IHdpZHRoID0+IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpO1xyXG4gIHNldF9oZWlnaHQgPSBoZWlnaHQgPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTtcclxuXHJcbiAgaW5pdCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0X3NyYyh0aGlzLnNyYyk7XHJcbiAgICB0aGlzLnNldF9hbHQodGhpcy5hbHQpO1xyXG4gICAgdGhpcy5zZXRfd2lkdGgodGhpcy53aWR0aCk7XHJcbiAgICB0aGlzLnNldF9oZWlnaHQodGhpcy5oZWlnaHQpO1xyXG4gIH1cclxufSIsImV4cG9ydCB7IEEgfSBmcm9tICcuL2EnXHJcbmV4cG9ydCB7IEFzaWRlIH0gZnJvbSAnLi9hc2lkZSdcclxuZXhwb3J0IHsgQm9keSB9IGZyb20gJy4vYm9keSdcclxuZXhwb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24nXHJcbmV4cG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGlhbG9nJ1xyXG5leHBvcnQgeyBEaXYgfSBmcm9tICcuL2RpdidcclxuZXhwb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInXHJcbmV4cG9ydCB7IEZvcm0gfSBmcm9tICcuL2Zvcm0nXHJcbmV4cG9ydCB7IEgxLCBIMiB9IGZyb20gJy4vaCdcclxuZXhwb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInXHJcbmV4cG9ydCB7IEltZyB9IGZyb20gJy4vaW1nJ1xyXG5leHBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnXHJcbmV4cG9ydCB7IExhYmVsIH0gZnJvbSAnLi9sYWJlbCdcclxuZXhwb3J0IHsgTmF2IH0gZnJvbSAnLi9uYXYnXHJcbmV4cG9ydCB7IFAgfSBmcm9tICcuL3AnXHJcbmV4cG9ydCB7IFRleHRhcmVhIH0gZnJvbSAnLi90ZXh0YXJlYSciLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBCYXNpY0VsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIHBsYWNlaG9sZGVyKXtcclxuICAgIHN1cGVyKCdpbnB1dCcpO1xyXG4gICAgdGhpcy50eXBlKHR5cGUpO1xyXG4gICAgdGhpcy5pZChuYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgdGhpcy5uYW1lKG5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBpZiAocGxhY2Vob2xkZXIgIT0gJycpeyB0aGlzLnBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyKSB9XHJcbiAgICB0aGlzLnJlcXVpcmVkKCk7XHJcbiAgICB0aGlzLm1heF9sZW5ndGgoMjApO1xyXG4gIH1cclxuICB0eXBlID0gaWRlbnRpZmllciA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgaWRlbnRpZmllcik7XHJcbiAgaWQgPSBuYW1lID0+IHRoaXMuZWxlbWVudC5pZCA9IG5hbWU7XHJcbiAgbmFtZSA9IGlkZW50aWZpZXIgPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlkZW50aWZpZXIpO1xyXG4gIHBsYWNlaG9sZGVyID0gdGV4dCA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRleHQpO1xyXG4gIHJlcXVpcmVkID0gKCkgPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwicmVxdWlyZWRcIik7XHJcbiAgbWF4X2xlbmd0aCA9IGxlbmd0aCA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCBsZW5ndGgpO1xyXG4gIGdldCB2YWx1ZSgpeyByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlIH1cclxuXHJcbiAgb25faW5wdXQgPSBmdW5jID0+IHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmMpO1xyXG59IiwiaW1wb3J0IHsgQmFzaWNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsIGV4dGVuZHMgQmFzaWNFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgIHN1cGVyKCdsYWJlbCcsIG5hbWUpO1xyXG4gICAgdGhpcy5mb3IobmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICB9XHJcbiAgZm9yID0gbmFtZSA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBuYW1lKTsgXHJcbn0iLCJpbXBvcnQgeyBCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2IGV4dGVuZHMgQmFzaWNFbGVtZW50e1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcignbmF2Jyk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQmFzaWNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFAgZXh0ZW5kcyBCYXNpY0VsZW1lbnR7XHJcbiAgY29uc3RydWN0b3IodGV4dD0nJyl7XHJcbiAgICBzdXBlcigncCcsIHRleHQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEJhc2ljRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIEJhc2ljRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcGxhY2Vob2xkZXIsIHJvd3MsIGNvbHMpe1xyXG4gICAgc3VwZXIoJ3RleHRhcmVhJyk7XHJcbiAgICB0aGlzLmlkKG5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB0aGlzLm5hbWUobmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXIocGxhY2Vob2xkZXIpO1xyXG4gICAgdGhpcy5yb3dzKHJvd3MpO1xyXG4gICAgdGhpcy5jb2xzKGNvbHMpO1xyXG4gIH1cclxuICBpZCA9IG5hbWUgPT4gdGhpcy5lbGVtZW50LmlkID0gbmFtZTtcclxuICBuYW1lID0gaWRlbnRpZmllciA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgaWRlbnRpZmllcik7XHJcbiAgcGxhY2Vob2xkZXIgPSB0ZXh0ID0+IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdGV4dCk7XHJcbiAgcm93cyA9IHZhbHVlID0+IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCB2YWx1ZSk7XHJcbiAgY29scyA9IHZhbHVlID0+IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCB2YWx1ZSk7XHJcbn0iLCJleHBvcnQgeyBBLFxyXG4gICAgICAgIEFzaWRlLFxyXG4gICAgICAgIEJvZHksXHJcbiAgICAgICAgQnV0dG9uLFxyXG4gICAgICAgIERpYWxvZyxcclxuICAgICAgICBEaXYsXHJcbiAgICAgICAgRm9vdGVyLFxyXG4gICAgICAgIEZvcm0sXHJcbiAgICAgICAgSDEsXHJcbiAgICAgICAgSDIsXHJcbiAgICAgICAgSGVhZGVyLFxyXG4gICAgICAgIEltZyxcclxuICAgICAgICBJbnB1dCxcclxuICAgICAgICBMYWJlbCxcclxuICAgICAgICBOYXYsXHJcbiAgICAgICAgUCxcclxuICAgICAgICBUZXh0YXJlYSxcclxuIH0gZnJvbSAnLi9lbGVtZW50cydcclxuXHJcbiBleHBvcnQgeyBTZWFyY2hiYXIgfSBmcm9tICcuL3NlYXJjaGJhcidcclxuIGV4cG9ydCB7IFdlYXRoZXJDYXJkIH0gZnJvbSAnLi93ZWF0aGVyX2NhcmQnXHJcbiBleHBvcnQgeyBMb2NhdGlvbkNhcmQgfSBmcm9tICcuL2xvY2F0aW9uX2NhcmQnIiwiZXhwb3J0IGNvbnN0IElucHV0VHlwZSA9IHtcclxuICBidXR0b246IFwiYnV0dG9uXCIsXHJcbiAgY2hlY2tib3g6IFwiY2hlY2tib3hcIixcclxuICBjb2xvcjogXCJjb2xvclwiLFxyXG4gIGRhdGU6IFwiZGF0ZVwiLFxyXG4gIGRhdGV0aW1lX2xvY2FsOiBcImRhdGV0aW1lLWxvY2FsXCIsXHJcbiAgZW1haWw6IFwiZW1haWxcIixcclxuICBmaWxlOiBcImZpbGVcIixcclxuICBoaWRkZW46IFwiaGlkZGVuXCIsXHJcbiAgaW1hZ2U6IFwiaW1hZ2VcIixcclxuICBtb250aDogXCJtb250aFwiLFxyXG4gIG51bWJlcjogXCJudW1iZXJcIixcclxuICBwYXNzd29yZDogXCJwYXNzd29yZFwiLFxyXG4gIHJhZGlvOiBcInJhZGlvXCIsXHJcbiAgcmFuZ2U6IFwicmFuZ2VcIixcclxuICByZXNldDogXCJyZXNldFwiLFxyXG4gIHNlYXJjaDogXCJzZWFyY2hcIixcclxuICBzdWJtaXQ6IFwic3VibWl0XCIsXHJcbiAgdGVsOiBcInRlbFwiLFxyXG4gIHRleHQ6IFwidGV4dFwiLFxyXG4gIHRpbWU6IFwidGltZVwiLFxyXG4gIHVybDogXCJ1cmxcIixcclxuICB3ZWVrOiBcIndlZWtcIixcclxufTsiLCJpbXBvcnQgeyBEaXYsIEgyLCBQIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkNhcmQgZXh0ZW5kcyBEaXZ7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmFkZF9jbGFzcygnbG9jYXRpb25fY2FyZCcpO1xyXG4gICAgdGhpcy5jaXR5O1xyXG4gICAgdGhpcy5jb3VudHJ5O1xyXG4gICAgdGhpcy5yZWdpb247XHJcbiAgICB0aGlzLmxvY2FsdGltZTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gbmV3IEgyKCdMb2NhdGlvbicpO1xyXG4gICAgdGhpcy5jaXR5ID0gbmV3IFAoJz8/PycpO1xyXG4gICAgdGhpcy5jb3VudHJ5ID0gbmV3IFAoJz8/PycpO1xyXG4gICAgdGhpcy5yZWdpb24gPSBuZXcgUCgnPz8/Jyk7XHJcbiAgICB0aGlzLmxvY2FsdGltZSA9IG5ldyBQKCc/Pz8nKTtcclxuICAgIHRoaXMuYWRkX25vZGUodGl0bGUsIHRoaXMuY2l0eSwgdGhpcy5jb3VudHJ5LCB0aGlzLnJlZ2lvbiwgdGhpcy5sb2NhbHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0X3ZhbHVlcyA9IGxvY2F0aW9uID0+IHtcclxuICAgIHRoaXMuY2l0eS5zZXRfdGV4dChsb2NhdGlvbi5uYW1lKTtcclxuICAgIHRoaXMuY291bnRyeS5zZXRfdGV4dChsb2NhdGlvbi5jb3VudHJ5KTtcclxuICAgIHRoaXMucmVnaW9uLnNldF90ZXh0KGxvY2F0aW9uLnJlZ2lvbik7XHJcbiAgICB0aGlzLmxvY2FsdGltZS5zZXRfdGV4dChsb2NhdGlvbi5sb2NhbHRpbWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEJ1dHRvbiwgRGl2LCBGb3JtLCBJbnB1dCB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7IElucHV0VHlwZSB9IGZyb20gXCIuL2lucHV0X3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoYmFyIGV4dGVuZHMgRGl2e1xyXG4gIGNvbnN0cnVjdG9yKHBsYWNlaG9sZGVyPScnKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmFkZF9jbGFzcygnc2VhcmNoYmFyJyk7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XHJcbiAgICB0aGlzLmlucHV0O1xyXG4gICAgdGhpcy5idXR0b247XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm0oKTtcclxuICAgIHRoaXMuaW5wdXQgPSBmb3JtLmFkZF9pbnB1dCgnc2VhcmNoYmFyX2lucHV0JywgSW5wdXRUeXBlLnNlYXJjaCwgdGhpcy5wbGFjZWhvbGRlcilcclxuICAgIHRoaXMuYnV0dG9uID0gZm9ybS5hZGRfYnV0dG9uKCdTZWFyY2gnKTtcclxuICAgIHRoaXMuYWRkX25vZGUoZm9ybSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKXsgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWUgfTtcclxuXHJcbiAgb25fYnV0dG9uX2NsaWNrID0gZnVuYyA9PiB0aGlzLmJ1dHRvbi5vbl9jbGljayhmdW5jKTtcclxufSIsImltcG9ydCB7IERpdiwgSDIsIFAgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJDYXJkIGV4dGVuZHMgRGl2e1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5hZGRfY2xhc3MoJ3dlYXRoZXJfY2FyZCcpO1xyXG4gICAgdGhpcy5jbG91ZDtcclxuICAgIHRoaXMuaHVtaWRpdHk7XHJcbiAgICB0aGlzLnRlbXBfYztcclxuICAgIHRoaXMuaWNvbjtcclxuICAgIHRoaXMud2luZF9kaXI7XHJcbiAgICB0aGlzLndpbmRfa3BoO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBuZXcgSDIoJ1dlYXRoZXInKTtcclxuICAgIHRoaXMuY2xvdWQgPSBuZXcgUCgnPz8/Jyk7XHJcbiAgICB0aGlzLmh1bWlkaXR5ID0gbmV3IFAoJz8/PycpO1xyXG4gICAgdGhpcy50ZW1wX2MgPSBuZXcgUCgnPz8/Jyk7XHJcbiAgICB0aGlzLmljb24gPSBuZXcgUCgnPz8/Jyk7XHJcbiAgICB0aGlzLndpbmRfZGlyID0gbmV3IFAoJz8/PycpO1xyXG4gICAgdGhpcy53aW5kX2twaCA9IG5ldyBQKCc/Pz8nKTtcclxuICAgIHRoaXMuYWRkX25vZGUodGl0bGUsXHJcbiAgICAgIG5ldyBQKCdDbG91ZDonKSwgdGhpcy5jbG91ZCxcclxuICAgICAgbmV3IFAoJ0h1bWlkaXR5OicpLCB0aGlzLmh1bWlkaXR5LFxyXG4gICAgICBuZXcgUCgnVGVtcGVyYXR1ciBDOicpLCB0aGlzLnRlbXBfYyxcclxuICAgICAgbmV3IFAoJ1dpbmQgZGlyZWN0aW9uOicpLCB0aGlzLndpbmRfZGlyLFxyXG4gICAgICBuZXcgUCgnV2luZCB2ZWxvY2l0eTonKSwgdGhpcy53aW5kX2twaFxyXG4gICAgICApO31cclxuXHJcbiAgc2V0X3ZhbHVlcyA9IHdlYXRoZXIgPT4ge1xyXG4gICAgdGhpcy5jbG91ZC5zZXRfdGV4dCh3ZWF0aGVyLmNsb3VkKTtcclxuICAgIHRoaXMuaHVtaWRpdHkuc2V0X3RleHQod2VhdGhlci5odW1pZGl0eSk7XHJcbiAgICB0aGlzLnRlbXBfYy5zZXRfdGV4dCh3ZWF0aGVyLnRlbXBfYyk7XHJcbiAgICB0aGlzLndpbmRfZGlyLnNldF90ZXh0KHdlYXRoZXIud2luZF9kaXIpO1xyXG4gICAgdGhpcy53aW5kX2twaC5zZXRfdGV4dCh3ZWF0aGVyLndpbmRfa3BoKTtcclxuICB9XHJcbn0iLCJleHBvcnQgeyBXZWF0aGVyQVBJIH0gZnJvbSBcIi4vd2VhdGhlcl9hcGlcIjtcclxuIiwiZXhwb3J0IGNsYXNzIExvY2F0aW9ue1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmNvdW50cnk7XHJcbiAgICB0aGlzLmxvY2FsdGltZTtcclxuICAgIHRoaXMubmFtZTtcclxuICAgIHRoaXMucmVnaW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0X2RhdGEgPSBkYXRhID0+IHtcclxuICAgIHRoaXMuY291bnRyeSA9IGRhdGEuY291bnRyeTtcclxuICAgIHRoaXMubG9jYWx0aW1lID0gZGF0YS5sb2NhbHRpbWU7XHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLnJlZ2lvbiA9IGRhdGEucmVnaW9uO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBXZWF0aGVye1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmNsb3VkO1xyXG4gICAgdGhpcy5odW1pZGl0eTtcclxuICAgIHRoaXMudGVtcF9jO1xyXG4gICAgdGhpcy50ZW1wX2Y7XHJcbiAgICB0aGlzLmljb247XHJcbiAgICB0aGlzLndpbmRfZGlyO1xyXG4gICAgdGhpcy53aW5kX2twaDtcclxuICB9XHJcblxyXG4gIHNldF9kYXRhID0gZGF0YSA9PiB7XHJcbiAgICB0aGlzLmNsb3VkID0gZGF0YS5jbG91ZDtcclxuICAgIHRoaXMuaHVtaWRpdHkgPSBkYXRhLmh1bWlkaXR5O1xyXG4gICAgdGhpcy50ZW1wX2MgPSBkYXRhLnRlbXBfYztcclxuICAgIHRoaXMudGVtcF9mID0gZGF0YS50ZW1wX2Y7XHJcbiAgICB0aGlzLmljb24gPSBkYXRhLmNvbmRpdGlvbi5pY29uO1xyXG4gICAgdGhpcy53aW5kX2RpciA9IGRhdGEud2luZF9kaXI7XHJcbiAgICB0aGlzLndpbmRfa3BoID0gZGF0YS53aW5kX2twaDtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFdlYXRoZXIgfSBmcm9tIFwiLi93ZWF0aGVyXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4vbG9jYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQVBJe1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLndlYXRoZXIgPSBuZXcgV2VhdGhlcigpO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IG5ldyBMb2NhdGlvbigpO1xyXG4gICAgdGhpcy51cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9JnE9YFxyXG4gICAgdGhpcy5zdGF0dXM7XHJcbiAgICB0aGlzLm9rO1xyXG4gIH1cclxuXHJcbiAgZ2V0X2RhdGEgPSBhc3luYyBjaXR5ID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwgKyBjaXR5LCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcclxuICAgIHRoaXMub2sgPSByZXNwb25zZS5vaztcclxuICAgIGlmICh0aGlzLm9rKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHRoaXMubG9jYXRpb24uc2V0X2RhdGEoZGF0YS5sb2NhdGlvbik7XHJcbiAgICAgIHRoaXMud2VhdGhlci5zZXRfZGF0YShkYXRhLmN1cnJlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vY3NzXCI7XHJcbmltcG9ydCB7IEJvZHksIERpdiwgSDEsIEhlYWRlciwgTG9jYXRpb25DYXJkLCBTZWFyY2hiYXIsIFdlYXRoZXJDYXJkIH0gZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCB7IFdlYXRoZXJBUEkgfSBmcm9tIFwiLi93ZWF0aGVyX2FwaVwiO1xyXG5cclxuY29uc3Qgd2VhdGhlcl9hcGkgPSBuZXcgV2VhdGhlckFQSSgpO1xyXG5cclxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcblxyXG5jb25zdCBjb250ZW50cyA9IG5ldyBEaXYoKTtcclxuY29uc3QgY29udGVudHNfdGl0bGUgPSBuZXcgSDEoJ1dlYXRoZXInKTtcclxuY29uc3Qgc2VhcmNoYmFyID0gbmV3IFNlYXJjaGJhcignQ2l0eScpO1xyXG5cclxuY29uc3QgbG9jYXRpb25fY2FyZCA9IG5ldyBMb2NhdGlvbkNhcmQoKTtcclxuY29uc3Qgd2VhdGhlcl9jYXJkID0gbmV3IFdlYXRoZXJDYXJkKCk7XHJcblxyXG5zZWFyY2hiYXIub25fYnV0dG9uX2NsaWNrKGFzeW5jIGV2ZW50ID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGF3YWl0IHdlYXRoZXJfYXBpLmdldF9kYXRhKHNlYXJjaGJhci52YWx1ZSk7XHJcbiAgbG9jYXRpb25fY2FyZC5zZXRfdmFsdWVzKHdlYXRoZXJfYXBpLmxvY2F0aW9uKTtcclxuICB3ZWF0aGVyX2NhcmQuc2V0X3ZhbHVlcyh3ZWF0aGVyX2FwaS53ZWF0aGVyKTtcclxufSlcclxuXHJcbmNvbnRlbnRzLmFkZF9ub2RlKGNvbnRlbnRzX3RpdGxlLCBzZWFyY2hiYXIsIGxvY2F0aW9uX2NhcmQsIHdlYXRoZXJfY2FyZCk7XHJcblxyXG5ib2R5LmFkZChoZWFkZXIsIGNvbnRlbnRzKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=