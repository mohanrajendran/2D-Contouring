/// <reference path="edge.ts" />
/// <reference path="point.ts" />
/// <reference path="../Tree/root.ts" />

function contourRender(shape: Shape, tree: Tree, canvas: HTMLCanvasElement) {
	if (tree instanceof Root) {
		contourRender(shape, tree.bottomLeft, canvas);
		contourRender(shape, tree.bottomRight, canvas);
		contourRender(shape, tree.topLeft, canvas);
		contourRender(shape, tree.topRight, canvas);
	}
	else {
		var edges = lookUp(shape, tree);
		edges.forEach(e => edgeRender(shape, e, tree, canvas));
	}
}

function edgeRender(shape: Shape, edge: Edge, cell: Tree, canvas: HTMLCanvasElement) {
	var side1 = edge[0];
	var side2 = edge[1];

	var pt1 = intersectionPoint(shape, cell, side1);
	var pt2 = intersectionPoint(shape, cell, side2);

	var height = canvas.height - 1;
	var width = canvas.width - 1;

	var x1 = Math.round(pt1.x * width);
	var y1 = Math.round(pt1.y * height);
	var x2 = Math.round(pt2.x * width);
	var y2 = Math.round(pt2.y * height);

	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = '#f01914';
	ctx.moveTo(x1, height-y1);
	ctx.lineTo(x2, height-y2);
	ctx.stroke();
	//ctx.strokeRect(xMin, height - yMax, (xMax - xMin), (yMax - yMin));
}