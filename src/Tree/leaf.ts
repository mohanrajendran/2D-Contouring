/// <reference path="tree.ts" />

class Leaf implements Tree {
	min: Point
	max: Point
	
	constructor(min: Point, max: Point) {
		var leaf = this;
		
		leaf.min = min;
		leaf.max = max;
	}
}