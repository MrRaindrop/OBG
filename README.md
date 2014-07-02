OBG
===

1px device border generator


Usage
===

* Generate a background-image data url, e.g. generate a horizontal border on the bottom:
```
OBG.gen1pxBorder('#333', null, false, true, null);
// or:
OBG.gen1pxBorder('#333', null, null, true);
// or:
var opts = {
  color: '#333',
  isVertical: false,
  isBottom: true
};
OBG.gen1pxBorder(opts);
```
then set css like this:
```
background-size: 1px;
background-image: url(``generated data url``);
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
OBG.gen1pxBorderVertical('#333', 0.5, null, true[, dom]);
// or:
var opts = {
  color: '#333',
  alpha: 0.5,
  isVertical: true,
  isBottom: true
  [,dom: dom]
};
OBG.gen1pxBorderVertical(opts);
```

OBG.gen1pxBorder()
