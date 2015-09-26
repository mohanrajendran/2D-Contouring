/// <reference path="tree.ts" />
/// <reference path="root.ts" />
/// <reference path="leaf.ts" />
/// <reference path="../Shape/shape" />


function collapse(shape: Shape, tree: Tree): Tree {
	if (tree instanceof Leaf) {
		var topLeft = shape(new Point(tree.min.x, tree.max.y));
		var topRight = shape(new Point(tree.max.x, tree.max.y));
		var bottomLeft = shape(new Point(tree.min.x, tree.min.y));
		var bottomRight = shape(new Point(tree.max.x, tree.min.y));

		if (topLeft < 0 && topRight < 0 && bottomLeft < 0 && bottomRight < 0) {
			return new Full(tree.min, tree.max);
		}
		if (topLeft >= 0 && topRight >= 0 && bottomLeft >= 0 && bottomRight >= 0) {
			return new Empty(tree.min, tree.max);
		}
		else return tree;
	}

	if (tree instanceof Root) {		
		tree.topLeft = collapse(shape, tree.topLeft);
		tree.topRight = collapse(shape, tree.topRight);
		tree.bottomLeft = collapse(shape, tree.bottomLeft);
		tree.bottomRight = collapse(shape, tree.bottomRight);

		if (tree.topLeft instanceof Empty &&
			tree.topRight instanceof Empty &&
			tree.bottomLeft instanceof Empty &&
			tree.bottomRight instanceof Empty) {
			return new Empty(tree.min, tree.max);
		}
		else if (tree.topLeft instanceof Full &&
			tree.topRight instanceof Full &&
			tree.bottomLeft instanceof Full &&
			tree.bottomRight instanceof Full) {
			return new Full(tree.min, tree.max);
		}
		else {
			return tree;
		}
	}

	return null;
}