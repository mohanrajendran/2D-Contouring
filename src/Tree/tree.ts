/// <reference path="../Shape/point.ts" />

interface Tree {
	render(canvas: HTMLCanvasElement): void 
}

class Full implements Tree {
	render(canvas: HTMLCanvasElement): void {}
}

class Empty implements Tree {
	render(canvas: HTMLCanvasElement): void {}
}