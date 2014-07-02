
/**
 * OBG: One device pixel Border Generator.
 * And this is a data image url generator as well.
 */
(function(factory) {

	if (typeof require === 'function' &&
		typeof exports === 'object' &&
		typeof module === 'object') {

		// CommonJS node.
		var exports = module.exports || exports;
		factory(require, exports, module);

	} else if (typeof define === 'function' && define['amd']) {

		// AMD.
		define(['require', 'exports', 'module'], factory);

	} else if (typeof define === 'function') {

		// CMD.
		define(factory);

	} else {

		// no loader.
		factory(function() {
			console.error('No loader, can\'t require.');
		}, window['OBG'] = {}, {});

	}

})(function(require, exports, module) {

	var canvas,
		canvasContext,

		DEFAULT_CANVAS_WIDTH = 100,
		DEFAULT_CANVAS_HEIGHT = 100,

		_initCanvas = function(width, height) {

			var w, h;

			w = width || 100;
			h = height || 100;

			canvas = document.createElement('canvas');
			document.body.appendChild(canvas);
			canvas.width = w;
			canvas.height = h;
			canvasContext = canvas.getContext("2d");
			
		},

		_clearCanvas = function() {
			canvas && document.body.removeChild(canvas);
			canvas = null;
			canvasContext = null;
		},

		_recreateCanvas = function(w, h) {
			_clearCanvas();
			_initCanvas(w, h);
		};

	/**
	 * genRect, generate a image data url for a rectangle.
	 * @param  {objct} opts : config object.
	 * or params: width, height, color, alpha
	 * @param width: canvas' width
	 * @param height: canvas' height
	 * @param color: color of this rectangle.
	 * @param alpha: alpha value of this rectangle.
	 * all params are optional. default to generate a image data url
	 * of 100X100 black rectangle.
	 * @return {string} image data url.
	 */
	exports.genRect = function() {

		var opts, w, h, color, alpha, dataUrl;

		if (typeof arguments[0] === 'object') {
			opts = arguments[0];
		} else {
			if (arguments[0] && typeof arguments[0] !== 'number') {
				throw new Error('first argument of getDataUrl width must be a number.');
			}
			if (arguments[1] && typeof arguments[1] !== 'number') {
				throw new Error('second argument of getDataUrl height must be a number.');
			}
			if (arguments[2] && typeof arguments[2] !== 'string') {
				throw new Error('third argument of getDataUrl color must be a hexadecimal string.');
			}
			if (arguments[3] && typeof arguments[3] !== 'number') {
				throw new Error('fourth argument of getDataUrl alpha must be a decimal fraction.');
			}
			opts = {
				width: arguments[0],
				height: arguments[1],
				color: arguments[2],
				alpha: arguments[3],
			};
		}

		w = opts.width || 100;
		h = opts.height || 100;
		color = opts.color || '#000';
		alpha = (opts.alpha === 0 ? opts.alpha : 1);

		_initCanvas(w, h);
		canvasContext.fillStyle = color;
		canvasContext.globalAlpha = alpha;
		canvasContext.fillRect(0, 0, w, h);
		dataUrl = canvas.toDataURL();
		_clearCanvas();
		return dataUrl;

	};

	/**
	 * gen1pxBorder, gen a image data url for a 1px border.
	 * @param  {objct} opts : config object.
	 * or params: color, alpha, isTop, dom
	 * all params are optional. default to generate a image data url
	 * of 1px black horizontal border, pixel with color on the top.
	 * @param {string} color : color of this border.
	 * @param {number} alpha : alpha value of this border.
	 * @param {boolean} isVertical : this border is vertical or not.
	 * @param {boolean} isBottomRight : this border on bottom/Right of dom or not.
	 * @param {object} dom : dom element to attach this border.
	 * @return {string} image data url.
	 */
	exports.gen1pxBorder = function() {

		var i = 0, j = 0, opts;

		if (typeof arguments[0] === 'object') {
			opts = arguments[0];
		} else {
			if (arguments[0] && typeof arguments[0] !== 'string') {
				throw new Error('first argument of gen1pxBorderHorizontal color must be a string.');
			}
			if (arguments[1] && typeof arguments[1] !== 'number') {
				throw new Error('second argument of gen1pxBorderHorizontal alpha must be a decimal fraction.');
			}
			if (arguments[4] && typeof arguments[4] !== 'object') {
				throw new Error('fourth argument of gen1pxBorderHorizontal dom must be a dom element.');
			}
			opts = {
				color: arguments[0],
				alpha: arguments[1],
				isVertical: arguments[2],
				dom: arguments[4],
			};
			if (opts.isVertical) {
				opts.isRight = isBottomRight;
			} else {
				opts.isBottom = isBottomRight;
			}
		}

		if (opts.isVertical) {
			return this.gen1pxBorderVertical.apply(this, args);
		} else {
			return this.gen1pxBorderHorizontal.apply(this, args);
		}

	};

	/**
	 * gen1pxBorderHorizontal, gen a image data url for 1px horizontal border.
	 * @param  {objct} opts : config object.
	 * or params: color, alpha, isTop, dom
	 * all params are optional. default to generate a image data url
	 * of 1px black horizontal border, pixel with color on the top.
	 * @param {string} color : color of this border.
	 * @param {number} alpha : alpha value of this border.
	 * @param {number} isBottom : this border on bottom of dom or not.
	 * @param {object} dom : dom element to attach this border.
	 * @return {string} image data url.
	 */
	exports.gen1pxBorderHorizontal = function() {

		var opts, c, a, isBottom, dom, dataUrl;

		if (typeof arguments[0] === 'object') {
			opts = arguments[0];
		} else {
			if (arguments[0] && typeof arguments[0] !== 'string') {
				throw new Error('first argument of gen1pxBorderHorizontal color must be a string.');
			}
			if (arguments[1] && typeof arguments[1] !== 'number') {
				throw new Error('second argument of gen1pxBorderHorizontal alpha must be a decimal fraction.');
			}
			if (arguments[3] && typeof arguments[3] !== 'object') {
				throw new Error('fourth argument of gen1pxBorderHorizontal dom must be a dom element.');
			}
			opts = {
				color: arguments[0],
				alpha: arguments[1],
				isBottom: arguments[2],
				dom: arguments[3],
			};
		}

		_initCanvas(1, 2);
		c = opts.color;
		a = (opts.alpha === 0 ? opts.alpha : 1);
		isBottom = opts.isBottom;
		dom = opts.dom;
		canvasContext.fillStyle = c;
		if (isBottom) {
			canvasContext.globalAlpha = a;
			canvasContext.fillRect(0, 1, 1, 1);
			canvasContext.globalAlpha = 0;
			canvasContext.fillRect(0, 0, 1, 1);
		} else {
			canvasContext.globalAlpha = a;
			canvasContext.fillRect(0, 0, 1, 1);
			canvasContext.globalAlpha = 0;
			canvasContext.fillRect(0, 1, 1, 1);
		}
		dataUrl = canvas.toDataURL();
		_clearCanvas();
		if (dom) {
			dom.style.backgroundImage = 'url('+ dataUrl + ')';
			dom.style.backgroundSize = '1px';
			dom.style.backgroundPosition = (isBottom ? 'left bottom' : 'left top');
			dom.style.backgroundRepeat = 'repeat-x';
		}
		return dataUrl;

	};

	/**
	 * gen1pxBorderHorizontal, gen a image data url for 1px horizontal border.
	 * @param  {objct} opts : config object.
	 * or params: color, alpha, isTop, dom
	 * all params are optional. default to generate a image data url
	 * of 1px black horizontal border, pixel with color on the top.
	 * @param {string} color : color of this border.
	 * @param {number} alpha : alpha value of this border.
	 * @param {number} isRight : this border on right side of dom or not.
	 * @param {object} dom : dom element to attach this border.
	 * @return {string} image data url.
	 */
	exports.gen1pxBorderVertical = function(color, alpha, isRight, dom) {

		var opts, c, a, isRight, dom, dataUrl;

		if (typeof arguments[0] === 'object') {
			opts = arguments[0];
		} else {
			if (arguments[0] && typeof arguments[0] !== 'string') {
				throw new Error('first argument of gen1pxBorderVertical color must be a string.');
			}
			if (arguments[1] && typeof arguments[1] !== 'number') {
				throw new Error('second argument of gen1pxBorderVertical alpha must be a decimal fraction.');
			}
			if (arguments[3] && typeof arguments[3] !== 'object') {
				throw new Error('fourth argument of gen1pxBorderVertical dom must be a dom element.');
			}
			opts = {
				color: arguments[0],
				alpha: arguments[1],
				isRight: arguments[2],
				dom: arguments[3],
			};
		}

		_initCanvas(2, 1);
		c = opts.color;
		a = (opts.alpha === 0 ? opts.alpha : 1);
		isRight = opts.isRight;
		dom = opts.dom;
		canvasContext.fillStyle = c;
		if (isRight) {
			canvasContext.globalAlpha = a;
			canvasContext.fillRect(1, 0, 1, 1);
			canvasContext.globalAlpha = 0;
			canvasContext.fillRect(0, 0, 1, 1);
		} else {
			canvasContext.globalAlpha = a;
			canvasContext.fillRect(0, 0, 1, 1);
			canvasContext.globalAlpha = 0;
			canvasContext.fillRect(1, 0, 1, 1);
		}
		dataUrl = canvas.toDataURL();
		_clearCanvas();
		if (dom) {
			dom.style.backgroundImage = 'url('+ dataUrl + ')';
			dom.style.backgroundSize = '1px';
			dom.style.backgroundPosition = (isRight ? 'right top' : 'left top');
			dom.style.backgroundRepeat = 'repeat-y';
		}
		return dataUrl;
	};

});