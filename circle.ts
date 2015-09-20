/// <reference path="shape.ts" />

class Circle implements Shape{
	private _center: Point;
	private _radius: number;
	
	constructor(center: Point, radius: number) {
		this._center = center;
		this._radius = radius;
	}
	
	location(point: Point): number {
		return Math.sqrt(Math.pow(point.x - this._center.x, 2) + Math.pow(point.y- this._center.y, 2)) - this._radius;
	}
}