/// <reference path="shape.ts" />

function Left(x0: number): Shape {
	return function(point: Point): number {
		return point.x - x0;
	}
}

function Right(x0: number): Shape {
	return function(point: Point): number {
		return x0 - point.x;
	}
}

function Lower(y0: number): Shape {
	return function(point: Point): number {
		return point.y - y0;
	}
}

function Upper(y0: number): Shape {
	return function(point: Point): number {
		return y0 - point.y;
	}
}