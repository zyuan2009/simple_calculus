var canvasWidth = 1080;
var canvasHeight = 1440;
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

var primeNumbers = new Set(
    [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
        61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127,
        131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191,
        193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257,
        263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331,
        337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401,
        409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467,
        479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563,
        569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631,
        641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709,
        719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797,
        809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877,
        881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967,
        971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033,
        1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097,
        1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181,
        1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249,
        1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307,
        1319, 1321, 1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423,
        1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471, 1481,
        1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531, 1543, 1549,
        1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609,
        1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669, 1693,
        1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759,
        1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831, 1847, 1861,
        1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913, 1931,
        1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999, 2003,
        2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083,
        2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143,
        2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243,
        2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309, 2311,
        2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381, 2383,
        2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447, 2459,
        2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551,
        2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647, 2657,
        2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707,
        2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777,
        2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851,
        2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939,
        2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023,
        3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119,
        3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209,
        3217, 3221, 3229, 3251, 3253, 3257, 3259, 3271, 3299, 3301,
        3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361,
        3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449, 3457, 3461,
        3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533,
        3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583, 3593, 3607,
        3613, 3617, 3623, 3631, 3637, 3643, 3659, 3671, 3673, 3677,
        3691, 3697, 3701, 3709, 3719, 3727, 3733, 3739, 3761, 3767,
        3769, 3779, 3793, 3797, 3803, 3821, 3823, 3833, 3847, 3851,
        3853, 3863, 3877, 3881, 3889, 3907, 3911, 3917, 3919, 3923,
        3929, 3931, 3943, 3947, 3967, 3989, 4001, 4003, 4007, 4013,
        4019, 4021, 4027, 4049, 4051, 4057, 4073, 4079, 4091, 4093,
        4099, 4111, 4127, 4129, 4133, 4139, 4153, 4157, 4159, 4177,
        4201, 4211, 4217, 4219, 4229, 4231, 4241, 4243, 4253, 4259,
        4261, 4271, 4273, 4283, 4289, 4297, 4327, 4337, 4339, 4349,
        4357, 4363, 4373, 4391, 4397, 4409, 4421, 4423, 4441, 4447,
        4451, 4457, 4463, 4481, 4483, 4493, 4507, 4513, 4517, 4519,
        4523, 4547, 4549, 4561, 4567, 4583, 4591, 4597, 4603, 4621,
        4637, 4639, 4643, 4649, 4651, 4657, 4663, 4673, 4679, 4691,
        4703, 4721, 4723, 4729, 4733, 4751, 4759, 4783, 4787, 4789,
        4793, 4799, 4801, 4813, 4817, 4831, 4861, 4871, 4877, 4889,
        4903, 4909, 4919, 4931, 4933, 4937, 4943, 4951, 4957, 4967,
        4969, 4973, 4987, 4993, 4999]);

class Node {
    constructor() {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = null;
        this.op = null;
        this.depth = null;
        this.result = null;
        this.parensis = 0;
    }
}

function generateRandomNode(depth) {
    var queue = [];
    let root = new Node();
    root.depth = 0;
    root.value = randomSign() * generateRandom(10, 1999);
    queue.push(root);
    while (queue.length > 0) {
        current = queue[0];
        queue.shift();
        if (current.depth < depth) {
            current.left = new Node();
            current.right = new Node();
            current.left.depth = current.depth + 1;
            current.right.depth = current.depth + 1;
            current.left.parent = current;
            current.right.parent = current;
            current.op = randomOperator();
            switch(current.op) {
                case '+':
                    current.right.value = randomSign() * generateRandom(1, 99);
                    current.left.value = current.right.value + current.value;
                    queue.push(current.left);
                    queue.push(current.right);
                    break;
                case '-':
                    current.right.value = randomSign() * generateRandom(1, 99);
                    current.left.value = current.value + current.right.value;
                    queue.push(current.left);
                    queue.push(current.right);
                    break;
                case 'x':
                    if (current.value < 100 && current.value > -100) {
                        current.op = '/';
                        current.right.value = randomSign() * generateRandom(10, 99);
                        current.left.value = current.value * current.right.value;
                    } else {
                        current.left.value = randomSign() * generateRandom(10, 69);
                        current.right.value = Math.floor(current.value / current.left.value);
                        if (current.left.value * current.right.value != current.value) {
                            current.op = '+';
                            let left_value = current.left.value;
                            current.left.value = current.left.value * current.right.value;
                            current.right.value = current.value - current.left.value;
                            let temp = current.left;
                            current.left = new Node();
                            current.left.parent = current;
                            current.left.value = temp.value;
                            current.left.depth = current.depth + 1;
                            current.left.op = 'x';
                            current.left.left = new Node();
                            current.left.left.parent = current.left;
                            current.left.left.depth = current.left.depth + 1;
                            current.left.right = new Node();
                            current.left.right.parent = current.left;
                            current.left.right.depth = current.left.depth + 1;
                            current.left.left.value = left_value;
                            current.left.right.value = current.left.value / current.left.left.value;
                            queue.push(current.left.left);
                            queue.push(current.left.right);
                            queue.push(current.right);
                            break;
                        }
                    }
                    queue.push(current.left);
                    queue.push(current.right);
                    break;
                case '/':
                    if (current.value > 500 || current.value < -500) {
                        current.op = 'x';
                        current.left.value = randomSign() * generateRandom(10, 69);
                        current.right.value = Math.floor(current.value / current.left.value);
                        if (current.left.value * current.right.value != current.value) {
                            current.op = '+';
                            let left_value = current.left.value;
                            current.left.value = current.left.value * current.right.value;
                            current.right.value = current.value - current.left.value;
                            let temp = current.left;
                            current.left = new Node();
                            current.left.value = temp.value;
                            current.left.depth = current.depth + 1;
                            current.left.op = 'x';
                            current.left.parent = current;
                            current.left.left = new Node();
                            current.left.left.parent = current.left;
                            current.left.left.depth = current.left.depth + 1;
                            current.left.right = new Node();
                            current.left.right.parent = current.left;
                            current.left.right.depth = current.left.depth + 1;
                            current.left.left.value = left_value;
                            current.left.right.value = current.left.value / current.left.left.value;
                            queue.push(current.left.left);
                            queue.push(current.left.right);
                            queue.push(current.right);
                            break;
                        }
                    } else {
                        current.right.value = randomSign() * generateRandom(10, 99);
                        current.left.value = current.value * current.right.value;
                    }
                    queue.push(current.left);
                    queue.push(current.right);
                    break;
            }
        }
    }
    return root;
}

function permutateEquation(root) {
    let nodes = [[root, -1]];
    while (nodes.length > 0) {
        let node = nodes[nodes.length - 1];
        if (node[0].left != null) {
            node[1] = node[1] + 1;
            switch(node[1]) {
                case 0:
                    nodes.push([node[0].left, -1]);
                    break;
                case 1:
                    nodes.push([node[0].right, -1]);
                    break;
                default:
                    nodes.pop();
                    break;
            }
        } else {
            let parent = node[0].parent.parent;
            if (generateRandom(1, 4) > 1) {
                break;
            }
            switch (parent.op) {
                case 'x':
                    if (parent.left.op == '/') {
                        let left = parent.left;
                        let right = left.left;
                        left.left = parent.right;
                        parent.right = right;
                        nodes.pop(2);
                    } else if (parent.right.op == '/') {
                        let right = parent.right;
                        let left = right.left;
                        right.left = parent.left;
                        parent.left = left;
                        nodes.pop(2);
                    }
                    break;
                case '/':
                    if (parent.right.op == '/') {
                        parent.op = 'x';
                        let left = parent.right.left;
                        parent.right.left = parent.right.right;
                        parent.right.right = left;
                        nodes.pop(2);
                    }
                    break;
            }
            nodes.pop();
        }
    }
}

function convertNodeToEquation(d, parent_op, left_term){
    if (d.op == null) {
        if (d.value > 0) {
            return d.value;
        } else {
            return "(" + d.value + ")";
        }
    } else {
        var left_equation = convertNodeToEquation(d.left, d.op, true);
        var right_equation = convertNodeToEquation(d.right, d.op, false);
        switch (parent_op) {
            case '+':
                return left_equation + d.op + right_equation;
            case '-':
                if (d.op == 'x' || d.op == '/' || left_term) {
                    return left_equation + d.op + right_equation;
                } else {
                    return "(" + left_equation + d.op + right_equation + ")";
                }
            case 'x':
                if (d.op == 'x' || d.op == '/') {
                    return left_equation + d.op + right_equation;
                } else {
                    return "(" + left_equation + d.op + right_equation + ")";
                }
            case '/':
                if (left_term && (d.op == 'x' || d.op == '/')) {
                    return left_equation + d.op + right_equation;
                } else {
                    return "(" + left_equation + d.op + right_equation + ")";
                }
            default:
                return left_equation + d.op + right_equation;
        }
    }
}

function generateRandom(min, max) {
    var init_val = Math.random() * (max - min + 1) + min;
    var final_val = Math.floor(init_val);
    return final_val;        
}

function sign(val) {
    if (val >= 0) {
        return 1;
    } else {
        return -1;
    }
}

function randomSign() {
    if (randomBoolean()) {
        return 1;
    } else {
        return -1;
    }
}

function randomOperator() {
    var init_val = Math.floor(Math.random() * 4);
    if (init_val == 0) {
        return '+';
    } else if (init_val == 1) {
        return '-';
    } else if (init_val == 2) {
        return 'x';
    } else {
        return '/';
    }
}

function randomBoolean() {
    var init_val = Math.floor(Math.random() * 2);
    return init_val >= 1;
}

function drawDivide(context, x, y) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 20, y);
    context.stroke();
    context.arc(x, y, 5, 0, 2*Math.PI, true);
    context.stroke();
    context.arc(x, y+20, 5, 0, 2*Math.PI, true);
    context.stroke();
}

function loadHTMLSimpleArithmatic() {
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
    context.strokeStyle = "orange";
    context.font = "40px Arial";
    context.textAlign = "left";
    context.textBaseline = "top";
    var i = 1;
    for (var y = yStart; y < yEnd && y < canvasHeight - 40; y += 120) {
        var node = generateRandomNode(2);
        permutateEquation(node);
        console.log(node);
        var text = "[" + i.toString() + "]   " + convertNodeToEquation(node, null, false) + "=";
        i = i + 1;
        delete node;
        context.fillText(text, xStart + 10, y);
        context.stroke();
    }
}
