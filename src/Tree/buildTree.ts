/// <reference path="tree.ts" />
/// <reference path="root.ts" />
/// <reference path="leaf.ts" />

function buildTree(min: Point, max: Point, height: number): Tree {
	if (height == 0) {
		return new Leaf(min, max);
	}
	else {
		var xMid = (min.x + max.x) / 2;
		var yMid = (min.y + max.y) / 2;

		return new Root(buildTree(min, new Point(xMid, yMid), height - 1),
			buildTree(new Point(xMid, min.y), new Point(max.x, yMid), height - 1),
			buildTree(new Point(min.x, yMid), new Point(xMid, max.y), height - 1),
			buildTree(new Point(xMid, yMid), max, height - 1));
	}
}