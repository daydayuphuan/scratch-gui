var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["gui"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/index.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n.index_app_2mqDO {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\n", ""]);

// exports
exports.locals = {
	"app": "index_app_2mqDO"
};

/***/ }),

/***/ "./src/lib/scratch-extends/scratch-blocks/field_face.js":
/*!**************************************************************!*\
  !*** ./src/lib/scratch-extends/scratch-blocks/field_face.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scratch_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scratch-blocks */ "./node_modules/scratch-blocks/shim/vertical.js");
/* harmony import */ var scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scratch_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/lib/scratch-extends/util.js");
/* eslint-disable no-mixed-operators */

/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview 5x5 matrix input field.
 * Displays an editable 5x5 matrix for controlling LED arrays.
 * @author khanning@gmail.com (Kreg Hanning)
 */


/**
 * Class for a matrix field.
 * @param {number} matrix The default matrix value represented by a 25-bit integer.
 * @extends {Blockly.Field}
 * @constructor
 */

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace = function (matrix) {
  scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.superClass_.constructor.call(this, matrix);
  this.addArgType('matrix');
  /**
   * Array of SVGElement<rect> for matrix thumbnail image on block field.
   * @type {!Array<SVGElement>}
   * @private
   */

  this.ledThumbNodes_ = [];
  /**
   * Array of SVGElement<rect> for matrix editor in dropdown menu.
   * @type {!Array<SVGElement>}
   * @private
   */

  this.ledButtons_ = [];
  /**
   * String for storing current matrix value.
   * @type {!String]
   * @private
   */

  this.matrix_ = '';
  /**
   * SVGElement for LED matrix in editor.
   * @type {?SVGElement}
   * @private
   */

  this.matrixStage_ = null;
  /**
   * SVG image for dropdown arrow.
   * @type {?SVGElement}
   * @private
   */

  this.arrow_ = null;
  /**
   * String indicating matrix paint style.
   * value can be [null, 'fill', 'clear'].
   * @type {?String}
   * @private
   */

  this.paintStyle_ = null;
  /**
   * Touch event wrapper.
   * Runs when the field is selected.
   * @type {!Array}
   * @private
   */

  this.mouseDownWrapper_ = null;
  /**
   * Touch event wrapper.
   * Runs when the clear button editor button is selected.
   * @type {!Array}
   * @private
   */

  this.clearButtonWrapper_ = null;
  /**
   * Touch event wrapper.
   * Runs when the fill button editor button is selected.
   * @type {!Array}
   * @private
   */

  this.fillButtonWrapper_ = null;
  /**
   * Touch event wrapper.
   * Runs when the matrix editor is touched.
   * @type {!Array}
   * @private
   */

  this.matrixTouchWrapper_ = null;
  /**
   * Touch event wrapper.
   * Runs when the matrix editor touch event moves.
   * @type {!Array}
   * @private
   */

  this.matrixMoveWrapper_ = null;
  /**
   * Touch event wrapper.
   * Runs when the matrix editor is released.
   * @type {!Array}
   * @private
   */

  this.matrixReleaseWrapper_ = null;
};

Object(_util__WEBPACK_IMPORTED_MODULE_1__["googInherits"])(scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace, scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Field);
/**
 * Construct a FieldFace from a JSON arg object.
 * @param {!object} options A JSON object with options (matrix).
 * @returns {!Blockly.FieldFace} The new field instance.
 * @package
 * @nocollapse
 */

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.fromJson = function (options) {
  return new scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace(options.face);
};
/**
 * Fixed size of the matrix thumbnail in the input field, in px.
 * @type {number}
 * @const
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.THUMBNAIL_SIZE = 26;
/**
 * Fixed size of each matrix thumbnail node, in px.
 * @type {number}
 * @const
 */

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.THUMBNAIL_NODE_SIZE = 4;
/**
 * Fixed size of each matrix thumbnail node, in px.
 * @type {number}
 * @const
 */

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.THUMBNAIL_NODE_PAD = 1;
/**
 * Fixed size of arrow icon in drop down menu, in px.
 * @type {number}
 * @const
 */

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.ARROW_SIZE = 12;
/**
 * Fixed size of each button inside the 5x5 matrix, in px.
 * @type {number}
 * @const
 */

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE = 18;
/**
 * Fixed corner radius for 5x5 matrix buttons, in px.
 * @type {number}
 * @const
 */

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_RADIUS = 4;
/**
 * Fixed padding for 5x5 matrix buttons, in px.
 * @type {number}
 * @const
 */

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_PAD = 5;
/**
 * String with 25 '0' chars.
 * Used for clearing a matrix or filling an LED node array.
 * @type {string}
 * @const
 */

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.ZEROS = '0000000000000000000000000';
/**
 * String with 25 '1' chars.
 * Used for filling a matrix.
 * @type {string}
 * @const
 */

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.ONES = '1111111111111111111111111';
var disableLedIndexs = [0, 4, 6, 7, 8, 11, 12, 13, 16, 17, 18, 20, 24];

var subMatrix = function subMatrix(initValue) {
  if (typeof initValue === 'string') {
    initValue = initValue.split('');
  }

  var value = initValue;

  if (initValue.length === 25) {
    value = initValue.filter(function (v, i) {
      return !disableLedIndexs.includes(i);
    }).join('');
  }

  return value;
};

var addMatrix = function addMatrix(initValue) {
  var value = initValue;

  if (initValue.length === 12) {
    disableLedIndexs.forEach(function (d) {
      value = "".concat(value.slice(0, d), "0").concat(value.slice(d));
    });
  }

  return value;
};
/**
 * Called when the field is placed on a block.
 * @param {Block} block The owning block.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.init = function () {
  if (this.fieldGroup_) {
    // Matrix menu has already been initialized once.
    return;
  } // Build the DOM.


  this.fieldGroup_ = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.utils.createSvgElement('g', {}, null);
  this.size_.width = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.THUMBNAIL_SIZE + scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.ARROW_SIZE + scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.BlockSvg.DROPDOWN_ARROW_PADDING * 1.5;
  this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_);
  var thumbX = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.BlockSvg.DROPDOWN_ARROW_PADDING / 2;
  var thumbY = (this.size_.height - scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.THUMBNAIL_SIZE) / 2;
  var thumbnail = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.utils.createSvgElement('g', {
    'transform': "translate(".concat(thumbX, ", ").concat(thumbY, ")"),
    'pointer-events': 'bounding-box',
    'cursor': 'pointer'
  }, this.fieldGroup_);
  this.ledThumbNodes_ = [];
  var nodeSize = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.THUMBNAIL_NODE_SIZE;
  var nodePad = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.THUMBNAIL_NODE_PAD;

  for (var i = 0; i < 5; i++) {
    for (var n = 0; n < 5; n++) {
      var attr = {
        x: (nodeSize + nodePad) * n + nodePad,
        y: (nodeSize + nodePad) * i + nodePad,
        width: nodeSize,
        height: nodeSize,
        rx: nodePad,
        ry: nodePad
      };
      this.ledThumbNodes_.push(scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.utils.createSvgElement('rect', attr, thumbnail));
    }

    thumbnail.style.cursor = 'default';
    this.updateMatrix_();
  }

  if (!this.arrow_) {
    var arrowX = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.THUMBNAIL_SIZE + scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.BlockSvg.DROPDOWN_ARROW_PADDING * 1.5;
    var arrowY = (this.size_.height - scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.ARROW_SIZE) / 2;
    this.arrow_ = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.utils.createSvgElement('image', {
      height: "".concat(scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.ARROW_SIZE, "px"),
      width: "".concat(scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.ARROW_SIZE, "px"),
      transform: "translate(".concat(arrowX, ", ").concat(arrowY, ")")
    }, this.fieldGroup_);
    this.arrow_.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "".concat(scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.mainWorkspace.options.pathToMedia, "dropdown-arrow.svg"));
    this.arrow_.style.cursor = 'default';
  }

  this.mouseDownWrapper_ = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.bindEventWithChecks_(this.getClickTarget_(), 'mousedown', this, this.onMouseDown_);
};
/**
 * Set the value for this matrix menu.
 * @param {string} matrix The new matrix value represented by a 25-bit integer.
 * @override
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.setValue = function (matrix) {
  if (!matrix || matrix === this.matrix_) {
    return; // No change
  }

  if (this.sourceBlock_ && scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Events.isEnabled()) {
    scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Events.fire(new scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Events.Change(this.sourceBlock_, 'field', this.name, subMatrix(this.matrix_), subMatrix(matrix)));
  }

  matrix = addMatrix(matrix);
  this.matrix_ = matrix;
  this.updateMatrix_();
};
/**
 * Get the value from this matrix menu.
 * @return {string} Current matrix value.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.getValue = function () {
  return String(subMatrix(this.matrix_));
};
/**
 * Show the drop-down menu for editing this field.
 * @private
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.showEditor_ = function () {
  // If there is an existing drop-down someone else owns, hide it immediately and clear it.
  scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.hideWithoutAnimation();
  scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.clearContent();
  var div = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.getContentDiv(); // Build the SVG DOM.

  var matrixSize = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE * 5 + scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_PAD * 6;
  this.matrixStage_ = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.utils.createSvgElement('svg', {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:html': 'http://www.w3.org/1999/xhtml',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'version': '1.1',
    'height': "".concat(matrixSize, "px"),
    'width': "".concat(matrixSize, "px")
  }, div); // Create the 5x5 matrix

  this.ledButtons_ = [];

  for (var i = 0; i < 5; i++) {
    for (var n = 0; n < 5; n++) {
      var x = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE * n + scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_PAD * (n + 1);
      var y = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE * i + scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_PAD * (i + 1);
      var attr = {
        x: "".concat(x, "px"),
        y: "".concat(y, "px"),
        width: scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE,
        height: scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE,
        rx: scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_RADIUS,
        ry: scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_RADIUS
      };
      var led = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.utils.createSvgElement('rect', attr, this.matrixStage_);
      this.matrixStage_.appendChild(led);
      this.ledButtons_.push(led);
    }
  } // Div for lower button menu


  var buttonDiv = document.createElement('div'); // Button to clear matrix

  var clearButtonDiv = document.createElement('div');
  clearButtonDiv.className = 'scratchMatrixButtonDiv';
  var clearButton = this.createButton_(this.sourceBlock_.colourSecondary_);
  clearButtonDiv.appendChild(clearButton); // Button to fill matrix

  var fillButtonDiv = document.createElement('div');
  fillButtonDiv.className = 'scratchMatrixButtonDiv';
  var fillButton = this.createButton_('#FFFFFF');
  fillButtonDiv.appendChild(fillButton);
  buttonDiv.appendChild(clearButtonDiv);
  buttonDiv.appendChild(fillButtonDiv);
  div.appendChild(buttonDiv);
  scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.setColour(this.sourceBlock_.getColour(), this.sourceBlock_.getColourTertiary());
  scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.setCategory(this.sourceBlock_.getCategory());
  scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.showPositionedByBlock(this, this.sourceBlock_);
  this.matrixTouchWrapper_ = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(this.matrixStage_, 'mousedown', this, this.onMouseDown);
  this.clearButtonWrapper_ = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(clearButton, 'click', this, this.clearMatrix_);
  this.fillButtonWrapper_ = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(fillButton, 'click', this, this.fillMatrix_); // Update the matrix for the current value

  this.updateMatrix_();
}; // this.nodeCallback_ = function(e, num) {
//   console.log(num);
// };

/**
 * Make an svg object that resembles a 3x3 matrix to be used as a button.
 * @param {string} fill The color to fill the matrix nodes.
 * @return {SvgElement} The button svg element.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.createButton_ = function (fill) {
  var button = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.utils.createSvgElement('svg', {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:html': 'http://www.w3.org/1999/xhtml',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'version': '1.1',
    'height': "".concat(scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE, "px"),
    'width': "".concat(scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE, "px")
  });
  var nodeSize = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE / 4;
  var nodePad = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE / 16;

  for (var i = 0; i < 3; i++) {
    for (var n = 0; n < 3; n++) {
      scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.utils.createSvgElement('rect', {
        x: (nodeSize + nodePad) * n + nodePad,
        y: (nodeSize + nodePad) * i + nodePad,
        width: nodeSize,
        height: nodeSize,
        rx: nodePad,
        ry: nodePad,
        fill: fill
      }, button);
    }
  }

  return button;
};
/**
 * Redraw the matrix with the current value.
 * @private
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.updateMatrix_ = function () {
  for (var i = 0; i < this.matrix_.length; i++) {
    if (disableLedIndexs.includes(i)) {
      this.opacityMatrixNode_(this.ledButtons_, i, '0');
      this.opacityMatrixNode_(this.ledThumbNodes_, i, '0');
    } else {
      // eslint-disable-next-line no-lonely-if
      if (this.matrix_[i] === '0') {
        this.fillMatrixNode_(this.ledButtons_, i, this.sourceBlock_.colourSecondary_);
        this.fillMatrixNode_(this.ledThumbNodes_, i, this.sourceBlock_.colour_);
      } else {
        this.fillMatrixNode_(this.ledButtons_, i, '#FFFFFF');
        this.fillMatrixNode_(this.ledThumbNodes_, i, '#FFFFFF');
      }
    }
  }
};
/**
 * Clear the matrix.
 * @param {!Event} e Mouse event.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.clearMatrix_ = function (e) {
  if (e.button !== 0) return;
  this.setValue(scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.ZEROS);
};
/**
 * Fill the matrix.
 * @param {!Event} e Mouse event.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.fillMatrix_ = function (e) {
  if (e.button !== 0) return;
  this.setValue(scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.ONES);
};
/**
 * Fill matrix node with specified colour.
 * @param {!Array<SVGElement>} node The array of matrix nodes.
 * @param {!number} index The index of the matrix node.
 * @param {!string} fill The fill colour in '#rrggbb' format.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.fillMatrixNode_ = function (node, index, fill) {
  if (!node || !node[index] || !fill) return;
  node[index].setAttribute('fill', fill);
};
/**
 * Fill matrix node with specified opacity.
 * @param {!Array<SVGElement>} node The array of matrix nodes.
 * @param {!number} index The index of the matrix node.
 * @param {!string} opacity The opacity colour in '' format.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.opacityMatrixNode_ = function (node, index, opacity) {
  if (!node || !node[index] || !opacity) return;
  node[index].setAttribute('opacity', opacity);
};

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.setLEDNode_ = function (led, state) {
  if (led < 0 || led > 24 || disableLedIndexs.includes(led)) return;
  var matrix = this.matrix_.substr(0, led) + state + this.matrix_.substr(led + 1);
  this.setValue(matrix);
};

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.fillLEDNode_ = function (led) {
  if (led < 0 || led > 24 || disableLedIndexs.includes(led)) return;
  this.setLEDNode_(led, '1');
};

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.clearLEDNode_ = function (led) {
  if (led < 0 || led > 24 || disableLedIndexs.includes(led)) return;
  this.setLEDNode_(led, '0');
};

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.toggleLEDNode_ = function (led) {
  if (led < 0 || led > 24 || disableLedIndexs.includes(led)) return;

  if (this.matrix_.charAt(led) === '0') {
    this.setLEDNode_(led, '1');
  } else {
    this.setLEDNode_(led, '0');
  }
};
/**
 * Toggle matrix nodes on and off.
 * @param {!Event} e Mouse event.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.onMouseDown = function (e) {
  this.matrixMoveWrapper_ = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(document.body, 'mousemove', this, this.onMouseMove);
  this.matrixReleaseWrapper_ = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(document.body, 'mouseup', this, this.onMouseUp);
  var ledHit = this.checkForLED_(e);

  if (ledHit > -1) {
    if (this.matrix_.charAt(ledHit) === '0') {
      this.paintStyle_ = 'fill';
    } else {
      this.paintStyle_ = 'clear';
    }

    this.toggleLEDNode_(ledHit);
    this.updateMatrix_();
  } else {
    this.paintStyle_ = null;
  }
};
/**
 * Unbind mouse move event and clear the paint style.
 * @param {!Event} e Mouse move event.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.onMouseUp = function () {
  scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(this.matrixMoveWrapper_);
  scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(this.matrixReleaseWrapper_);
  this.paintStyle_ = null;
};
/**
 * Toggle matrix nodes on and off by dragging mouse.
 * @param {!Event} e Mouse move event.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.onMouseMove = function (e) {
  e.preventDefault();

  if (this.paintStyle_) {
    var led = this.checkForLED_(e);
    if (led < 0) return;

    if (this.paintStyle_ === 'clear') {
      this.clearLEDNode_(led);
    } else if (this.paintStyle_ === 'fill') {
      this.fillLEDNode_(led);
    }
  }
};
/**
 * Check if mouse coordinates collide with a matrix node.
 * @param {!Event} e Mouse move event.
 * @return {number} The matching matrix node or -1 for none.
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.checkForLED_ = function (e) {
  var bBox = this.matrixStage_.getBoundingClientRect();
  var nodeSize = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_SIZE;
  var nodePad = scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.MATRIX_NODE_PAD;
  var dx = e.clientX - bBox.left;
  var dy = e.clientY - bBox.top;
  var min = nodePad / 2;
  var max = bBox.width - nodePad / 2;

  if (dx < min || dx > max || dy < min || dy > max) {
    return -1;
  }

  var xDiv = Math.trunc((dx - nodePad / 2) / (nodeSize + nodePad));
  var yDiv = Math.trunc((dy - nodePad / 2) / (nodeSize + nodePad));
  return xDiv + yDiv * nodePad;
};
/**
 * Clean up this FieldFace, as well as the inherited Field.
 * @return {!Function} Closure to call on destruction of the WidgetDiv.
 * @private
 */


scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.prototype.dispose_ = function () {
  var thisField = this;
  return function () {
    scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace.superClass_.dispose_.call(thisField)();
    thisField.matrixStage_ = null;

    if (thisField.mouseDownWrapper_) {
      scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(thisField.mouseDownWrapper_);
    }

    if (thisField.matrixTouchWrapper_) {
      scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(thisField.matrixTouchWrapper_);
    }

    if (thisField.matrixReleaseWrapper_) {
      scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(thisField.matrixReleaseWrapper_);
    }

    if (thisField.matrixMoveWrapper_) {
      scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(thisField.matrixMoveWrapper_);
    }

    if (thisField.clearButtonWrapper_) {
      scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(thisField.clearButtonWrapper_);
    }

    if (thisField.fillButtonWrapper_) {
      scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(thisField.fillButtonWrapper_);
    }
  };
};

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Field.register('field_face', scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.FieldFace);
scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Blocks.face = {
  /**
   * Block for matrix value.
   * @this Blockly.Block
   */
  init: function init() {
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_face',
        name: 'FACE'
      }],
      outputShape: scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.OUTPUT_SHAPE_ROUND,
      output: 'Number',
      extensions: ['colours_pen']
    });
  }
};

/***/ }),

/***/ "./src/lib/scratch-extends/util.js":
/*!*****************************************!*\
  !*** ./src/lib/scratch-extends/util.js ***!
  \*****************************************/
/*! exports provided: googInherits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googInherits", function() { return googInherits; });
var googInherits = function googInherits(childCtor, parentCtor) {
  /** @constructor */
  function tempCtor() {}

  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  /** @override */

  childCtor.prototype.constructor = childCtor;

  childCtor.base = function (me, methodName, var_args) {
    // Copying using loop to avoid deop due to passing arguments object to
    // function. This is faster in many JS engines as of late 2014.
    var args = new Array(arguments.length - 2);

    for (var i = 2; i < arguments.length; i++) {
      args[i - 2] = arguments[i];
    }

    return parentCtor.prototype[methodName].apply(me, args);
  };
};



/***/ }),

/***/ "./src/playground/index.css":
/*!**********************************!*\
  !*** ./src/playground/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/index.jsx":
/*!**********************************!*\
  !*** ./src/playground/index.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-object-assign/auto */ "./node_modules/es6-object-assign/auto.js");
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intl */ "./node_modules/intl/index.js");
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/analytics */ "./src/lib/analytics.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/supported-browser */ "./src/lib/supported-browser.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./src/playground/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
// Polyfills



 // For Safari 9







 // Register "base" page view

_lib_analytics__WEBPACK_IMPORTED_MODULE_6__["default"].pageview('/');
var appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_10___default.a.app;
document.body.appendChild(appTarget);

if (Object(_lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__["default"])()) {
  // require needed here to avoid importing unsupported browser-crashing code
  // at the top level
  __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx").default(appTarget);

  __webpack_require__(/*! ../lib/scratch-extends/scratch-blocks/field_face */ "./src/lib/scratch-extends/scratch-blocks/field_face.js");
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].setAppElement(appTarget);
  var WrappedBrowserModalComponent = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], true
  /* localesOnly */
  );

  var handleBack = function handleBack() {}; // eslint-disable-next-line react/jsx-no-bind


  react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}

/***/ }),

/***/ "./src/playground/render-gui.jsx":
/*!***************************************!*\
  !*** ./src/playground/render-gui.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/log.js */ "./src/lib/log.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









var onClickLogo = function onClickLogo() {
  window.location = 'https://matatalab.com';
};

var handleTelemetryModalCancel = function handleTelemetryModalCancel() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User canceled telemetry modal');
};

var handleTelemetryModalOptIn = function handleTelemetryModalOptIn() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted into telemetry');
};

var handleTelemetryModalOptOut = function handleTelemetryModalOptOut() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted out of telemetry');
};
/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */


/* harmony default export */ __webpack_exports__["default"] = (function (appTarget) {
  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].setAppElement(appTarget); // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.

  var WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]); // TODO a hack for testing the backpack, allow backpack host to be set by url param

  var backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
  var backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
  var scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
  var simulateScratchDesktop;

  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch (_unused) {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }

  if (false) {}

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
  simulateScratchDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    isScratchDesktop: true,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    backpackVisible: true,
    showComingSoon: true,
    backpackHost: backpackHost,
    canSave: false,
    onClickLogo: onClickLogo
  }), appTarget);
});

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** ./locale-data/complete.js (ignored) ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./src/playground/index.jsx","lib.min"]]]);
//# sourceMappingURL=gui.js.map