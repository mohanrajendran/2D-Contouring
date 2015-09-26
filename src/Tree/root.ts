/// <reference path="tree.ts" />

class Root implements Tree {
	topLeft: Tree;
	topRight: Tree;
	bottomLeft: Tree;
	bottomRight: Tree;
	
	constructor(bottomLeft: Tree, bottomRight: Tree, topLeft: Tree, topRight: Tree) {
		var root = this;
		
		root.topLeft = topLeft;
		root.topRight = topRight;
		root.bottomLeft = bottomLeft;
		root.bottomRight = bottomRight;
	}
	
	render(canvas: HTMLCanvasElement): void {
		var root = this;
		
		root.topLeft.render(canvas);
		root.topRight.render(canvas);
		root.bottomLeft.render(canvas);
		root.bottomRight.render(canvas);
	}
}