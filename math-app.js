var canvasWidth = 1080;
var canvasHeight = 1080;
var xStart = 10;
var yStart = 10;
var xGap = 10;
var yGap = 10;
var numX = 6;
var numY = 6;

var firstMax = 999;
var firstMin = 100;
var secondMax = 99;
var secondMin = 2;
var operator = '/';

function generateRandom(min, max) {
    var init_val = Math.random() * (max - min + 1) + min;
    var final_val = Math.floor(init_val);
    return final_val;        
}

function loadHTML() {
    var canvasDiv = document.getElementById('canvasDiv');
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);
    if (typeof G_vmlCanvasManager != 'undefined') {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    var context = canvas.getContext("2d"); // Grab the 2d canvas context
    var xEnd = canvas.width - 10;
    var yEnd = canvas.height - 10;
    var xStep = (xEnd - xStart) / numX;
    var yStep = (yEnd - yStart) / numY;
    context.strokeStyle = "orange";
    context.font = "bold 32px Arial";
    context.textAlign = "right";
    context.textBaseline = "bottom";
    var yTextStep = (yStep - 2 * yGap) / 4;
    for (var i = 0; i < numX; ++i) {
        for (var j = 0; j < numY; ++j) {
            context.lineWidth = 2;
            context.beginPath();
            context.rect(xStart + xStep * i + xGap, yStart + yStep * j + yGap, xStep - 2 * xGap, yStep - 2 * yGap);
            context.stroke();
            if (operator != '/') {
                var firstNumber = generateRandom(firstMin, firstMax);
                var secondNumber = generateRandom(secondMin, secondMax);
                context.fillText(firstNumber + "  ", xStart + xStep * i + xStep - xGap, yStart + yStep * j + yGap + yTextStep * 1);
                context.fillText(operator + "      " + secondNumber + "  ", xStart + xStep * i + xStep - xGap, yStart + yStep * j + yGap + yTextStep * 2);
                context.beginPath();
                context.moveTo(xStart + xStep * i + xGap, yStart + yStep * j + yGap + yTextStep * 2 + 1);
                context.lineTo(xStart + xStep * i + xStep - xGap, yStart + yStep * j + yGap + yTextStep * 2 + 1);
                context.stroke();
            } else {
                var firstNumber = generateRandom(firstMin, firstMax);
                var secondNumber = generateRandom(secondMin, secondMax);
                firstNumber = Math.round(firstNumber / secondNumber) * secondNumber;
                var secondMeasure = context.measureText(secondNumber.toString());
                var firstMeasure = context.measureText(secondNumber.toString() + "    " + firstNumber.toString());
                context.fillText(secondNumber.toString(), xStart + xStep * i + xGap * 2 + secondMeasure.width, yStart + yStep * j + yGap + yTextStep * 2);
                context.fillText(firstNumber.toString(), xStart + xStep * i + xGap * 2 + firstMeasure.width, yStart + yStep * j + yGap + yTextStep * 2);
                context.lineWidth = 5;
                context.beginPath();
                context.moveTo(xStart + xStep * i + xGap * 4 + secondMeasure.width, yStart + yStep * j + yGap + yTextStep - 1);
                context.lineTo(xStart + xStep * i + xStep - xGap * 2, yStart + yStep * j + yGap + yTextStep - 1);
                context.stroke();
                context.beginPath();
                context.arc(xStart + xStep * i + secondMeasure.width - xGap * 4, yStart + yStep * j + yGap + yTextStep - 1, xGap * 8, 0, Math.PI / 6);
                context.stroke();
            }
        }
    }
}
