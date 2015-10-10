/// <reference path="tree.ts" />

class Leaf implements Tree {
	min: Point;
	max: Point;
	color: string;

	constructor(min: Point, max: Point, color?: string) {
		var leaf = this;

		leaf.min = min;
		leaf.max = max;
		if (color)
			leaf.color = color;
		else
			leaf.color = '#1d831d';
	}

	render(canvas: HTMLCanvasElement): void {
		var leaf = this;

		var height = canvas.height - 1;
		var width = canvas.width - 1;

		var xMin = Math.round(leaf.min.x * width);
		var yMin = Math.round(leaf.min.y * height);
		var xMax = Math.round(leaf.max.x * width);
		var yMax = Math.round(leaf.max.y * height);

		var ctx = canvas.getContext('2d');
		ctx.strokeStyle = leaf.color;
		ctx.strokeRect(xMin, height - yMax, (xMax - xMin), (yMax - yMin));
	}
}

class Empty extends Leaf {
	constructor(min: Point, max: Point) {
		super(min, max, '#949494');
	}
}

class Full extends Leaf {
	constructor(min: Point, max: Point) {
		super(min, max, '#000000');
	}
}