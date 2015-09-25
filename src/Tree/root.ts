/// <reference path="tree.ts" />

class Root implements Tree {
	topLeft: Tree;
	topRight: Tree;
	bottomLeft: Tree;
	bottomRight: Tree;
	
	constructor(topLeft: Tree, topRight: Tree, bottomLeft: Tree, bottomRight: Tree) {
		var root = this;
		
		root.topLeft = topLeft;
		root.topRight = topRight;
		root.bottomLeft = bottomLeft;
		root.bottomRight = bottomRight;
	}
}