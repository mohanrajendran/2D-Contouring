/// <reference path="shape.ts" />

function Circle (center: Point, radius: number): Shape {
	return function(point: Point) {
		return Math.sqrt(Math.pow(point.x - this._center.x, 2) + Math.pow(point.y- this._center.y, 2)) - this._radius;
	}
}