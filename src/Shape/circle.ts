/// <reference path="shape.ts" />

function Circle (center: Point, radius: number): Shape {
	return function(point: Point) {
		return Math.sqrt(Math.pow(point.x - center.x, 2) + Math.pow(point.y- center.y, 2)) - radius;
	}
}