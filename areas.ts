/// <reference path="shape.ts" />

class Left implements Shape{
	private _x: number;
	
	constructor(x: number) {
		this._x = x;
	}
	
	location(point: Point): number {
		return point.x - this._x;
	}
}

class Right implements Shape{
	private _x: number;
	
	constructor(x: number) {
		this._x = x;
	}
	
	location(point: Point): number {
		return this._x - point.x;
	}
}

class Lower implements Shape{
	private _y: number;
	
	constructor(y: number) {
		this._y = y;
	}
	
	location(point: Point): number {
		return point.y - this._y;
	}
}

class Upper implements Shape{
	private _y: number;
	
	constructor(y: number) {
		this._y = y;
	}
	
	location(point: Point): number {
		return this._y - point.y;
	}
}
