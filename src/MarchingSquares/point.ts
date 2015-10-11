/// <reference path="edge.ts" />

function intersectionPoint(shape: Shape, cell: Tree, side: Side): Point {
	switch(side) {
		case Side.Left:
			return zero(shape, cell.min, new Point(cell.min.x, cell.max.y));
		case Side.Right:
			return zero(shape, new Point(cell.max.x, cell.min.y), cell.max);
		case Side.Lower:
			return zero(shape, cell.min, new Point(cell.max.x, cell.min.y));
		case Side.Upper:
			return zero(shape, new Point(cell.min.x, cell.max.y), cell.max);
	}
}

function zero(shape: Shape, start: Point, end: Point): Point {
	function pos(p: number): Point {
		return new Point(start.x * p + end.x * (1.0-p), start.y * p + end.y * (1.0-p));
	}
	
	function secant(p: number, step: number, iter: number): number {
		if(iter == 0)
			return p;
		
		if (shape(pos(p)) > 0)
			return secant(p + step, step/2, iter-1);
		else
			return secant(p - step, step/2, iter-1);
	}
	
	if(shape(start) >= 0)
		return zero(shape, end, start);
	else
		return pos(secant(0.5, 0.25, 10));
}