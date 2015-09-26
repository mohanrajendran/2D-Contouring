/// <reference path="../Shape/point.ts" />

interface Tree {
	min: Point;
	max: Point;
	render(canvas: HTMLCanvasElement): void 
}