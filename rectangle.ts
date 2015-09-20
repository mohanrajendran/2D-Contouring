/// <reference path="shape.ts" />
/// <reference path="areas.ts" />
/// <reference path="operators.ts" />

function Rectangle(min: Point, max: Point): Shape {
	var xBound = Intersect(Right(min.x), Left(max.x));
	var yBound = Intersect(Upper(min.y), Lower(max.y));
	
	return Intersect(xBound, yBound);
}