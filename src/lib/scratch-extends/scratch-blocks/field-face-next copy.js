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

import Blockly from 'scratch-blocks';
import {googInherits} from '../util';

/**
 * Class for a matrix field.
 * @param {number} matrix The default matrix value represented by a 25-bit integer.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldFace = function (matrix) {
    Blockly.FieldFace.superClass_.constructor.call(this, matrix);
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
googInherits(Blockly.FieldFace, Blockly.Field);

/**
 * Construct a FieldFace from a JSON arg object.
 * @param {!object} options A JSON object with options (matrix).
 * @returns {!Blockly.FieldFace} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldFace.fromJson = function (options) {
    return new Blockly.FieldFace(options.face);
};

/**
 * Fixed size of the matrix thumbnail in the input field, in px.
 * @type {number}
 * @const
 */
Blockly.FieldFace.THUMBNAIL_SIZE = 26;

/**
 * Fixed size of each matrix thumbnail node, in px.
 * @type {number}
 * @const
 */
Blockly.FieldFace.THUMBNAIL_NODE_SIZE = 4;

/**
 * Fixed size of each matrix thumbnail node, in px.
 * @type {number}
 * @const
 */
Blockly.FieldFace.THUMBNAIL_NODE_PAD = 1;

/**
 * Fixed size of arrow icon in drop down menu, in px.
 * @type {number}
 * @const
 */
Blockly.FieldFace.ARROW_SIZE = 12;

/**
 * Fixed size of each button inside the 5x5 matrix, in px.
 * @type {number}
 * @const
 */
Blockly.FieldFace.MATRIX_NODE_SIZE = 18;

/**
 * Fixed corner radius for 5x5 matrix buttons, in px.
 * @type {number}
 * @const
 */
Blockly.FieldFace.MATRIX_NODE_RADIUS = 4;

/**
 * Fixed padding for 5x5 matrix buttons, in px.
 * @type {number}
 * @const
 */
Blockly.FieldFace.MATRIX_NODE_PAD = 5;

/**
 * String with 25 '0' chars.
 * Used for clearing a matrix or filling an LED node array.
 * @type {string}
 * @const
 */
Blockly.FieldFace.ZEROS = '0000000000000000000000000';

/**
 * String with 25 '1' chars.
 * Used for filling a matrix.
 * @type {string}
 * @const
 */
Blockly.FieldFace.ONES = '1111111111111111111111111';

const disableLedIndexs = [0, 4, 6, 7, 8, 11, 12, 13, 16, 17, 18, 20, 24];

const subMatrix = function (initValue) {
    if (typeof initValue === 'string') {
        initValue = initValue.split('');
    }
    let value = initValue;
    if (initValue.length === 25) {
        value = initValue.filter((v, i) => !disableLedIndexs.includes(i)).join('');
    }
    return value;
};

const addMatrix = function (initValue) {
    let value = initValue;
    if (initValue.length === 12) {
        disableLedIndexs.forEach(d => {
            value = `${value.slice(0, d)}0${value.slice(d)}`;
        });
    }
    return value;
};

/**
 * Called when the field is placed on a block.
 * @param {Block} block The owning block.
 */
Blockly.FieldFace.prototype.init = function () {
    if (this.fieldGroup_) {
        // Matrix menu has already been initialized once.
        return;
    }

    // Build the DOM.
    this.fieldGroup_ = Blockly.utils.createSvgElement('g', {}, null);
    this.size_.width =
        Blockly.FieldFace.THUMBNAIL_SIZE +
        Blockly.FieldFace.ARROW_SIZE +
        Blockly.BlockSvg.DROPDOWN_ARROW_PADDING * 1.5;

    this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_);

    const thumbX = Blockly.BlockSvg.DROPDOWN_ARROW_PADDING / 2;
    const thumbY = (this.size_.height - Blockly.FieldFace.THUMBNAIL_SIZE) / 2;
    const thumbnail = Blockly.utils.createSvgElement(
        'g',
        {
            'transform': `translate(${thumbX}, ${thumbY})`,
            'pointer-events': 'bounding-box',
            'cursor': 'pointer'
        },
        this.fieldGroup_
    );
    this.ledThumbNodes_ = [];
    const nodeSize = Blockly.FieldFace.THUMBNAIL_NODE_SIZE;
    const nodePad = Blockly.FieldFace.THUMBNAIL_NODE_PAD;
    for (let i = 0; i < 5; i++) {
        for (let n = 0; n < 5; n++) {
            const attr = {
                x: (nodeSize + nodePad) * n + nodePad,
                y: (nodeSize + nodePad) * i + nodePad,
                width: nodeSize,
                height: nodeSize,
                rx: nodePad,
                ry: nodePad
            };
            this.ledThumbNodes_.push(
                Blockly.utils.createSvgElement('rect', attr, thumbnail)
            );
        }
        thumbnail.style.cursor = 'default';
        this.updateMatrix_();
    }

    if (!this.arrow_) {
        const arrowX =
            Blockly.FieldFace.THUMBNAIL_SIZE +
            Blockly.BlockSvg.DROPDOWN_ARROW_PADDING * 1.5;
        const arrowY = (this.size_.height - Blockly.FieldFace.ARROW_SIZE) / 2;
        this.arrow_ = Blockly.utils.createSvgElement(
            'image',
            {
                height: `${Blockly.FieldFace.ARROW_SIZE}px`,
                width: `${Blockly.FieldFace.ARROW_SIZE}px`,
                transform: `translate(${arrowX}, ${arrowY})`
            },
            this.fieldGroup_
        );
        this.arrow_.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'xlink:href',
            `${Blockly.mainWorkspace.options.pathToMedia}dropdown-arrow.svg`
        );
        this.arrow_.style.cursor = 'default';
    }

    this.mouseDownWrapper_ = Blockly.bindEventWithChecks_(
        this.getClickTarget_(),
        'mousedown',
        this,
        this.onMouseDown_
    );
};

/**
 * Set the value for this matrix menu.
 * @param {string} matrix The new matrix value represented by a 25-bit integer.
 * @override
 */
Blockly.FieldFace.prototype.setValue = function (matrix) {
    if (!matrix || matrix === this.matrix_) {
        return; // No change
    }
    if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
        Blockly.Events.fire(
            new Blockly.Events.Change(
                this.sourceBlock_,
                'field',
                this.name,
                subMatrix(this.matrix_),
                subMatrix(matrix)
            )
        );
    }
    matrix = addMatrix(matrix);
    this.matrix_ = matrix;
    this.updateMatrix_();
};

/**
 * Get the value from this matrix menu.
 * @return {string} Current matrix value.
 */
Blockly.FieldFace.prototype.getValue = function () {
    return String(subMatrix(this.matrix_));
};

/**
 * Show the drop-down menu for editing this field.
 * @private
 */
Blockly.FieldFace.prototype.showEditor_ = function () {
    // If there is an existing drop-down someone else owns, hide it immediately and clear it.
    Blockly.DropDownDiv.hideWithoutAnimation();
    Blockly.DropDownDiv.clearContent();
    const div = Blockly.DropDownDiv.getContentDiv();
    // Build the SVG DOM.
    const matrixSize =
        Blockly.FieldFace.MATRIX_NODE_SIZE * 5 +
        Blockly.FieldFace.MATRIX_NODE_PAD * 6;
    this.matrixStage_ = Blockly.utils.createSvgElement(
        'svg',
        {
            'xmlns': 'http://www.w3.org/2000/svg',
            'xmlns:html': 'http://www.w3.org/1999/xhtml',
            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
            'version': '1.1',
            'height': `${matrixSize}px`,
            'width': `${matrixSize}px`
        },
        div
    );
    // Create the 5x5 matrix
    this.ledButtons_ = [];
    for (let i = 0; i < 5; i++) {
        for (let n = 0; n < 5; n++) {
            const x =
                Blockly.FieldFace.MATRIX_NODE_SIZE * n +
                Blockly.FieldFace.MATRIX_NODE_PAD * (n + 1);
            const y =
                Blockly.FieldFace.MATRIX_NODE_SIZE * i +
                Blockly.FieldFace.MATRIX_NODE_PAD * (i + 1);
            const attr = {
                x: `${x}px`,
                y: `${y}px`,
                width: Blockly.FieldFace.MATRIX_NODE_SIZE,
                height: Blockly.FieldFace.MATRIX_NODE_SIZE,
                rx: Blockly.FieldFace.MATRIX_NODE_RADIUS,
                ry: Blockly.FieldFace.MATRIX_NODE_RADIUS
            };
            const led = Blockly.utils.createSvgElement(
                'rect',
                attr,
                this.matrixStage_
            );
            this.matrixStage_.appendChild(led);
            this.ledButtons_.push(led);
        }
    }
    // Div for lower button menu
    const buttonDiv = document.createElement('div');
    // Button to clear matrix
    const clearButtonDiv = document.createElement('div');
    clearButtonDiv.className = 'scratchMatrixButtonDiv';
    const clearButton = this.createButton_(this.sourceBlock_.colourSecondary_);
    clearButtonDiv.appendChild(clearButton);
    // Button to fill matrix
    const fillButtonDiv = document.createElement('div');
    fillButtonDiv.className = 'scratchMatrixButtonDiv';
    const fillButton = this.createButton_('#FFFFFF');
    fillButtonDiv.appendChild(fillButton);

    buttonDiv.appendChild(clearButtonDiv);
    buttonDiv.appendChild(fillButtonDiv);
    div.appendChild(buttonDiv);

    Blockly.DropDownDiv.setColour(
        this.sourceBlock_.getColour(),
        this.sourceBlock_.getColourTertiary()
    );
    Blockly.DropDownDiv.setCategory(this.sourceBlock_.getCategory());
    Blockly.DropDownDiv.showPositionedByBlock(this, this.sourceBlock_);

    this.matrixTouchWrapper_ = Blockly.bindEvent_(
        this.matrixStage_,
        'mousedown',
        this,
        this.onMouseDown
    );
    this.clearButtonWrapper_ = Blockly.bindEvent_(
        clearButton,
        'click',
        this,
        this.clearMatrix_
    );
    this.fillButtonWrapper_ = Blockly.bindEvent_(
        fillButton,
        'click',
        this,
        this.fillMatrix_
    );

    // Update the matrix for the current value
    this.updateMatrix_();
};

// this.nodeCallback_ = function(e, num) {
//   console.log(num);
// };

/**
 * Make an svg object that resembles a 3x3 matrix to be used as a button.
 * @param {string} fill The color to fill the matrix nodes.
 * @return {SvgElement} The button svg element.
 */
Blockly.FieldFace.prototype.createButton_ = function (fill) {
    const button = Blockly.utils.createSvgElement('svg', {
        'xmlns': 'http://www.w3.org/2000/svg',
        'xmlns:html': 'http://www.w3.org/1999/xhtml',
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        'version': '1.1',
        'height': `${Blockly.FieldFace.MATRIX_NODE_SIZE}px`,
        'width': `${Blockly.FieldFace.MATRIX_NODE_SIZE}px`
    });
    const nodeSize = Blockly.FieldFace.MATRIX_NODE_SIZE / 4;
    const nodePad = Blockly.FieldFace.MATRIX_NODE_SIZE / 16;
    for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3; n++) {
            Blockly.utils.createSvgElement(
                'rect',
                {
                    x: (nodeSize + nodePad) * n + nodePad,
                    y: (nodeSize + nodePad) * i + nodePad,
                    width: nodeSize,
                    height: nodeSize,
                    rx: nodePad,
                    ry: nodePad,
                    fill: fill
                },
                button
            );
        }
    }
    return button;
};

/**
 * Redraw the matrix with the current value.
 * @private
 */
Blockly.FieldFace.prototype.updateMatrix_ = function () {
    for (let i = 0; i < this.matrix_.length; i++) {
        if (disableLedIndexs.includes(i)) {
            this.opacityMatrixNode_(this.ledButtons_, i, '0');
            this.opacityMatrixNode_(this.ledThumbNodes_, i, '0');
        } else {
            // eslint-disable-next-line no-lonely-if
            if (this.matrix_[i] === '0') {
                this.fillMatrixNode_(
                    this.ledButtons_,
                    i,
                    this.sourceBlock_.colourSecondary_
                );
                this.fillMatrixNode_(
                    this.ledThumbNodes_,
                    i,
                    this.sourceBlock_.colour_
                );
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
Blockly.FieldFace.prototype.clearMatrix_ = function (e) {
    if (e.button !== 0) return;
    this.setValue(Blockly.FieldFace.ZEROS);
};

/**
 * Fill the matrix.
 * @param {!Event} e Mouse event.
 */
Blockly.FieldFace.prototype.fillMatrix_ = function (e) {
    if (e.button !== 0) return;
    this.setValue(Blockly.FieldFace.ONES);
};

/**
 * Fill matrix node with specified colour.
 * @param {!Array<SVGElement>} node The array of matrix nodes.
 * @param {!number} index The index of the matrix node.
 * @param {!string} fill The fill colour in '#rrggbb' format.
 */
Blockly.FieldFace.prototype.fillMatrixNode_ = function (node, index, fill) {
    if (!node || !node[index] || !fill) return;
    node[index].setAttribute('fill', fill);
};

/**
 * Fill matrix node with specified opacity.
 * @param {!Array<SVGElement>} node The array of matrix nodes.
 * @param {!number} index The index of the matrix node.
 * @param {!string} opacity The opacity colour in '' format.
 */
Blockly.FieldFace.prototype.opacityMatrixNode_ = function (node, index, opacity) {
    if (!node || !node[index] || !opacity) return;
    node[index].setAttribute('opacity', opacity);
};

Blockly.FieldFace.prototype.setLEDNode_ = function (led, state) {
    if (led < 0 || led > 24 || disableLedIndexs.includes(led)) return;
    const matrix =
        this.matrix_.substr(0, led) + state + this.matrix_.substr(led + 1);
    this.setValue(matrix);
};

Blockly.FieldFace.prototype.fillLEDNode_ = function (led) {
    if (led < 0 || led > 24 || disableLedIndexs.includes(led)) return;
    this.setLEDNode_(led, '1');
};

Blockly.FieldFace.prototype.clearLEDNode_ = function (led) {
    if (led < 0 || led > 24 || disableLedIndexs.includes(led)) return;
    this.setLEDNode_(led, '0');
};

Blockly.FieldFace.prototype.toggleLEDNode_ = function (led) {
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
Blockly.FieldFace.prototype.onMouseDown = function (e) {
    this.matrixMoveWrapper_ = Blockly.bindEvent_(
        document.body,
        'mousemove',
        this,
        this.onMouseMove
    );
    this.matrixReleaseWrapper_ = Blockly.bindEvent_(
        document.body,
        'mouseup',
        this,
        this.onMouseUp
    );
    const ledHit = this.checkForLED_(e);
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
Blockly.FieldFace.prototype.onMouseUp = function () {
    Blockly.unbindEvent_(this.matrixMoveWrapper_);
    Blockly.unbindEvent_(this.matrixReleaseWrapper_);
    this.paintStyle_ = null;
};

/**
 * Toggle matrix nodes on and off by dragging mouse.
 * @param {!Event} e Mouse move event.
 */
Blockly.FieldFace.prototype.onMouseMove = function (e) {
    e.preventDefault();
    if (this.paintStyle_) {
        const led = this.checkForLED_(e);
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
Blockly.FieldFace.prototype.checkForLED_ = function (e) {
    const bBox = this.matrixStage_.getBoundingClientRect();
    const nodeSize = Blockly.FieldFace.MATRIX_NODE_SIZE;
    const nodePad = Blockly.FieldFace.MATRIX_NODE_PAD;
    const dx = e.clientX - bBox.left;
    const dy = e.clientY - bBox.top;
    const min = nodePad / 2;
    const max = bBox.width - nodePad / 2;
    if (dx < min || dx > max || dy < min || dy > max) {
        return -1;
    }
    const xDiv = Math.trunc((dx - nodePad / 2) / (nodeSize + nodePad));
    const yDiv = Math.trunc((dy - nodePad / 2) / (nodeSize + nodePad));
    return xDiv + yDiv * nodePad;
};

/**
 * Clean up this FieldFace, as well as the inherited Field.
 * @return {!Function} Closure to call on destruction of the WidgetDiv.
 * @private
 */
Blockly.FieldFace.prototype.dispose_ = function () {
    const thisField = this;
    return function () {
        Blockly.FieldFace.superClass_.dispose_.call(thisField)();
        thisField.matrixStage_ = null;
        if (thisField.mouseDownWrapper_) {
            Blockly.unbindEvent_(thisField.mouseDownWrapper_);
        }
        if (thisField.matrixTouchWrapper_) {
            Blockly.unbindEvent_(thisField.matrixTouchWrapper_);
        }
        if (thisField.matrixReleaseWrapper_) {
            Blockly.unbindEvent_(thisField.matrixReleaseWrapper_);
        }
        if (thisField.matrixMoveWrapper_) {
            Blockly.unbindEvent_(thisField.matrixMoveWrapper_);
        }
        if (thisField.clearButtonWrapper_) {
            Blockly.unbindEvent_(thisField.clearButtonWrapper_);
        }
        if (thisField.fillButtonWrapper_) {
            Blockly.unbindEvent_(thisField.fillButtonWrapper_);
        }
    };
};

Blockly.Field.register('field_face', Blockly.FieldFace);

Blockly.Blocks.face = {
    /**
     * Block for matrix value.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            message0: '%1',
            args0: [
                {
                    type: 'field_face',
                    name: 'FACE'
                }
            ],
            outputShape: Blockly.OUTPUT_SHAPE_ROUND,
            output: 'Number',
            extensions: ['colours_pen']
        });
    }
};
