/// <reference path="shape.ts" />
/// <reference path="../DefinitelyTyped/jquery.d.ts" />

function render(shape: Shape, canvas: HTMLCanvasElement) {
	var absHeight = 1;
	var absWidth = 1;
	var pixelSize = 0.004;
	var width = absWidth / pixelSize;
	var height = absHeight / pixelSize;

	canvas.width = width;
	canvas.height = height;

	var ctx = canvas.getContext('2d');
	var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	var data = imageData.data;

	var xyToIndex = function(x: number, y: number): number {
		return (y * width + x) * 4;
	}

	for (var y = 0; y < height; y++) {
		console.log(y);
		for (var x = 0; x < width; x++) {
			var idx = xyToIndex(x, height - y);
			//console.log(idx);
			var val = shape(new Point(x * pixelSize, y * pixelSize));
			
			if(val < 0)	{
			data[idx] = 0;
			data[idx + 1] = 0;
			data[idx + 2] = 0;
			data[idx + 3] = 255;
			}
		}
	}

	// for (var i = 0; i < data.length; i += 4) {
	// 	data[i] = 120;     // red
	// 	data[i + 1] = 120; // green
	// 	data[i + 2] = 120; // blue
	// 	data[i+3] = 255;
    // }
	
	//console.log(imageData.data.length);

	ctx.putImageData(imageData, 0, 0);
}