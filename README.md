OBG
===

1px device border generator


Usage
---

* Generate a background-image data url, e.g. generate a horizontal border on the bottom:
```
var dataUrl;
dataUrl = OBG.gen1pxBorder('#333', null, false, true, null);
// or:
dataUrl = OBG.gen1pxBorder('#333', null, null, true);
// or:
var opts = {
  color: '#333',
  isVertical: false,
  isBottom: true
};
dataUrl = OBG.gen1pxBorder(opts);
```
then set css like this:
```
background-size: 1px 1px;
background-image: url({{dataUrl}});
background-position: left bottom;
background-repeat: repeat-x;
```

* You can attach a generated 1 device pixel horizontal border to the element you passed in:
```
var dom = document.getElementById('t-div');
OBG.gen1pxBorder('#333', 0.5, false, true, dom);
// or:
OBG.gen1pxBorder('#333', 0.5, null, true, dom);
// or:
var opts = {
  color: '#333',
  alpha: 0.5,
  isVertical: false,
  isBottom: true,
  dom: dom,
};
OBG.gen1pxBorder(opts);
```

* use gen1pxBorderHorizontal/gen1pxBorderVertical:
```
var dom = document.getElementById('t-div');
OBG.gen1pxBorderVertical('#333', 0.5, false[, dom]);
// or:
OBG.gen1pxBorderVertical('#333', 0.5, null[, dom]);
// or:
var opts = {
  color: '#333',
  alpha: 0.5,
  isRight: true
  [,dom: dom]
};
OBG.gen1pxBorderVertical(opts);
```
gen1pxHorizontal:
```
var dom = document.getElementById('t-div');
OBG.gen1pxBorderHorizontal('#333', null, false[, dom]);
// or:
OBG.gen1pxBorderHorizontal('#333', 1, null[, dom]);
// or:
var opts = {
  color: '#333',
  alpha: 1,
  isBottom: false
  [,dom: dom]
};
OBG.gen1pxBorderHorizontal(opts);
```

API
---

### genRect
gen dataUrl for a rectangle.
pass opts object as a parameter, or pass attributes of opts in the order showed bellow.
opts:
 * width
 * height
 * color: a hexadecimal string, e.g. '#f7f7f7'
 * alpha
e.g.:
```
OBG.genRect(100, 100, '#f7f7f7', 0.7);
OBG.genRect({
  width: 100,
  height: 100,
  color: '#f7f7f7',
  alpha: 0.7
});
```

### gen1pxBorder
gen dataUrl of 1 device pixel border. or set 1 device pixel border for the dom element you passed in.
pass opts object as a parameter, or pass attributes of opts in the order showed bellow.
* color
* alpha
* isVertical
* isBottom/isRight: if isVertical is true, pass 'isRight', else pass 'isBottom' as a attribute of opts.
* dom: the dom element you want to attach a 1 pixel border to.
e.g.:
```
var dom = document.getElementById('t-div');
OBG.gen1pxBorder('#333', 0.5, false, true, dom);
OBG.gen1pxBorder('#333', 0.5, null, true, dom);
var opts = {
  color: '#333',
  alpha: 0.5,
  isVertical: false,
  isBottom: true,
  dom: dom,
};
OBG.gen1pxBorder(opts);
```

### gen1pxBorderHorizontal
gen dataUrl of 1 device pixel horizontal border. or set 1 device pixel horizontal border for the dom element you passed in.
pass opts object as a parameter, or pass attributes of opts in the order showed bellow.
* color
* alpha
* isBottom: is this border border-bottom or not? 
* dom: the dom element you want to attach a 1 pixel horizontal border to.
e.g.:
```
var dom = document.getElementById('t-div');
OBG.gen1pxBorderHorizontal('#333', 0.5, true, dom);
OBG.gen1pxBorderHorizontal('#333', 0.5, null, dom);
var opts = {
  color: '#333',
  alpha: 0.5,
  isBottom: true,
  dom: dom,
};
OBG.gen1pxBorderHorizontal(opts);
```

### gen1pxBorderVertical
gen dataUrl of 1 device pixel Vertical border. or set 1 device pixel Vertical border for the dom element you passed in.
pass opts object as a parameter, or pass attributes of opts in the order showed bellow.
* color
* alpha
* isRight: is this border border-right or not? 
* dom: the dom element you want to attach a 1 pixel Vertical border to.
e.g.:
```
var dom = document.getElementById('t-div');
OBG.gen1pxBorderVertical('#333', 0.5, true, dom);
OBG.gen1pxBorderVertical('#333', 0.5, null, dom);
var opts = {
  color: '#333',
  alpha: 0.5,
  isRight: true,
  dom: dom,
};
OBG.gen1pxBorderVertical(opts);
```