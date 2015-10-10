/// <reference path="shape.ts" />

function shapeRender(shape: Shape, canvas: HTMLCanvasElement, pixelSize: number) {
	var absHeight = 1;
	var absWidth = 1;
	var width = absWidth / pixelSize;
	var height = absHeight / pixelSize;

	canvas.width = width;
	canvas.height = height;

	var ctx = canvas.getContext('2d');
	var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	var data = imageData.data;

	var xyToIndex = function(x: number, y: number): number {
		return ((height - y) * width + x) * 4;
	}

	for (var y = 0; y < height; y++) {
		//console.log(y);
		for (var x = 0; x < width; x++) {
			var idx = xyToIndex(x, y);
			//console.log(idx);
			var val = shape(new Point(x * pixelSize, y * pixelSize));
			
			if(val < 0)	{
			// data[idx] = 120;
			// data[idx + 1] = 120;
			// data[idx + 2] = 120;
			// data[idx + 3] = 255;
			}
		}
	}

	ctx.putImageData(imageData, 0, 0);
}