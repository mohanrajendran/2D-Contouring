/// <reference path="side.ts" />
/// <reference path="../Shape/shape.ts" />
/// <reference path="../Tree/tree.ts" />
/// <reference path="../../DefinitelyTyped/lodash.d.ts" />

type Edge = [Side, Side];

var lookUpTable: Array<Array<Edge>> = [
	[],
	[[Side.Upper, Side.Right]],
	[[Side.Left, Side.Upper]],
	[[Side.Left, Side.Right]],
	[[Side.Right, Side.Lower]],
	[[Side.Upper, Side.Lower]],
	[[Side.Right, Side.Lower], [Side.Left, Side.Upper]],
	[[Side.Left, Side.Lower]],
	[[Side.Lower, Side.Left]],
	[[Side.Lower, Side.Left], [Side.Upper, Side.Right]],
	[[Side.Lower, Side.Upper]],
	[[Side.Lower, Side.Right]],
	[[Side.Right, Side.Left]],
	[[Side.Upper, Side.Left]],
	[[Side.Right, Side.Upper]],
	[]
];

function lookUp(shape: Shape, cell: Tree): Array<Edge> {
	var idx = 0;
	
	var coords = [];
	[cell.min.y, cell.max.y].forEach(y => {
		[cell.min.x, cell.max.x].forEach(x => {
			coords.push([x, y]);
		})
	});
	
	coords.forEach((pt) => {
		idx *= 2;
		if (shape(new Point(pt[0], pt[1])) < 0) {
			idx += 1;
		}
	});
	
	return lookUpTable[idx];
}
