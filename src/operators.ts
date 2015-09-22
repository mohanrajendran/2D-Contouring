/// <reference path="shape.ts" />

function Union(a: Shape, b: Shape): Shape {
	return function(p: Point) {
		return Math.min(a(p), b(p));
	};
}

function Intersect(a: Shape, b: Shape): Shape {
	return function(p: Point) {
		return Math.max(a(p), b(p));
	};
}

function Invert(a: Shape): Shape {
	return function(p: Point) {
		return -a(p);
	}
}