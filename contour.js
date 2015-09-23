'use strict';
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
/// <reference path="point.ts" />
/// <reference path="shape.ts" />
function Left(x0) {
    return function (point) {
        return point.x - x0;
    };
}
function Right(x0) {
    return function (point) {
        return x0 - point.x;
    };
}
function Lower(y0) {
    return function (point) {
        return point.y - y0;
    };
}
function Upper(y0) {
    return function (point) {
        return y0 - point.y;
    };
}
/// <reference path="shape.ts" />
function Circle(center, radius) {
    return function (point) {
        return Math.sqrt(Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2)) - radius;
    };
}
/// <reference path="shape.ts" />
function Union(a, b) {
    return function (p) {
        return Math.min(a(p), b(p));
    };
}
function Intersect(a, b) {
    return function (p) {
        return Math.max(a(p), b(p));
    };
}
function Invert(a) {
    return function (p) {
        return -a(p);
    };
}
/// <reference path="shape.ts" />
/// <reference path="areas.ts" />
/// <reference path="operators.ts" />
function Rectangle(min, max) {
    var xBound = Intersect(Right(min.x), Left(max.x));
    var yBound = Intersect(Upper(min.y), Lower(max.y));
    return Intersect(xBound, yBound);
}
/// <reference path="shape.ts" />
/// <reference path="rectangle.ts" />
/// <reference path="circle.ts" />
/// <reference path="operators.ts" />
function hi() {
    var rect1 = Rectangle(new Point(0.1, 0.1), new Point(0.25, 0.9));
    var rect2 = Rectangle(new Point(0.1, 0.1), new Point(0.6, 0.35));
    var circle1 = Circle(new Point(0.35, 0.35), 0.25);
    var circle2 = Circle(new Point(0.35, 0.35), 0.1);
    var rect3 = Rectangle(new Point(0.25, 0.1), new Point(0.45, 0.35));
    var h = Intersect(Union(Union(rect1, rect2), circle1), Invert(Union(circle2, rect3)));
    var rect4 = Rectangle(new Point(0.75, 0.1), new Point(0.9, 0.55));
    var circle3 = Circle(new Point(0.825, 0.75), 0.1);
    var i = Union(rect4, circle3);
    return Union(h, i);
}
/// <reference path="shape.ts" />
/// <reference path="../DefinitelyTyped/jquery.d.ts" />
function render(shape, canvas) {
    var absHeight = 1;
    var absWidth = 1;
    var pixelSize = 0.004;
    var width = absWidth / pixelSize;
    var height = absHeight / pixelSize;
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    var xyToIndex = function (x, y) {
        return (y * width + x) * 4;
    };
    for (var y = 0; y < height; y++) {
        console.log(y);
        for (var x = 0; x < width; x++) {
            var idx = xyToIndex(x, height - y);
            //console.log(idx);
            var val = shape(new Point(x * pixelSize, y * pixelSize));
            if (val < 0) {
                data[idx] = 0;
                data[idx + 1] = 0;
                data[idx + 2] = 0;
                data[idx + 3] = 255;
            }
        }
    }
    // for (var i = 0; i < data.length; i += 4) {
    // 	data[i] = 120;     // red
    // 	data[i + 1] = 120; // green
    // 	data[i + 2] = 120; // blue
    // 	data[i+3] = 255;
    // }
    //console.log(imageData.data.length);
    ctx.putImageData(imageData, 0, 0);
}
//# sourceMappingURL=contour.js.map