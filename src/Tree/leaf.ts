/// <reference path="tree.ts" />

class Leaf implements Tree {
	min: Point
	max: Point
	
	constructor(min: Point, max: Point) {
		var leaf = this;
		
		leaf.min = min;
		leaf.max = max;
	}
	
	render(canvas: HTMLCanvasElement): void {
		var leaf = this;
		
		var height = canvas.height-1;
		var width = canvas.width-1;
		
		var xMin = Math.round(leaf.min.x * width);
		var yMin = Math.round(leaf.min.y * height);
		var xMax = Math.round(leaf.max.x * width);
		var yMax = Math.round(leaf.max.y * height);	
		
		var ctx = canvas.getContext('2d');
		ctx.strokeRect(xMin, height-yMax, (xMax - xMin), (yMax - yMin));
	}
}

class Empty extends Leaf {	
	constructor(min: Point, max: Point) {
		super(min, max);
	}
}

class Full extends Leaf {
	constructor(min: Point, max: Point) {
		super(min, max);
	}
}