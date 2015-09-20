/// <reference path="shape.ts" />
/// <reference path="rectangle.ts" />
/// <reference path="circle.ts" />
/// <reference path="operators.ts" />

function hi(): Shape {
	var rect1 = Rectangle(new Point(0.1, 0.1), new Point(0.25, 0.9));
	var rect2 = Rectangle(new Point(0.1, 0.1), new Point(0.6, 0.35));
	var circle1 = Circle(new Point(0.35, 0.35), 0.35);
	var circle2 = Circle(new Point(0.35, 0.35), 0.1);
	var rect3 = Rectangle(new Point(0.25, 0.1), new Point(0.45, 0.35));

	var h = Intersect(Union(Union(rect1, rect2), circle1), Invert(Union(circle2, rect3)));

	var rect4 = Rectangle(new Point(0.75, 0.1), new Point(0.9, 0.55));
	var circle3 = Circle(new Point(0.825, 0.75), 0.1);

	var i = Union(rect4, circle3);

	return Union(h, i);
}