


var n = 18;
var m = 18;
var matrix = [];
var k1 = 0;
var k2 = 0;
var k3 = 0;
var k4 = 0;
var k5 = 0;

var side = 30;

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var bombArr = [];
var tnkoxArr = [];

function setup() {
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (var j = 0; j < m; j++) {
            matrix[i][j] = 0;
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (k1 <= (matrix[0].length / 2)) {
                matrix[floor(random(n))][floor(random(m))] = 1;
                k1++;
            }
        }
    }


    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (k2 <= (matrix[0].length / 3) && matrix[i][j] != 1) {
                matrix[floor(random(n))][floor(random(m))] = 2;
                k2++;
            }
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (k3 <= (matrix[0].length / 2) && matrix[i][j] != 1 && matrix[i][j] != 2) {
                matrix[floor(random(n))][floor(random(m))] = 3;
                k3++;
            }
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (k4 <= (matrix[0].length / 8) && matrix[i][j] != 1 && matrix[i][j] != 2 && matrix[i][j] != 3) {
                matrix[floor(random(n))][floor(random(m))] = 4;
                k4++;
            }
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (k5 <= (matrix[0].length / 10) && matrix[i][j] != 1 && matrix[i][j] != 2 && matrix[i][j] != 3 && matrix[i][j] != 4) {
                matrix[floor(random(n))][floor(random(m))] = 5;
                k5++;
            }
        }
    }


    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("grey");


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y));
            }
            if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y));
            }
            if (matrix[y][x] == 4) {
                bombArr.push(new Bomb(x, y));
            }
            if (matrix[y][x] == 5) {
                tnkoxArr.push(new Tnkox(x, y));
            }
        }
    }

}



function draw() {
    fill(0, 255, 0);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill('black');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill('white');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill('grey');
                rect(x * side, y * side, side, side);
            }


        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
        grassArr[i].mahanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].sharjvel();
        xotakerArr[i].utel();
        xotakerArr[i].bazmanal();
        // xotakerArr[i].mahanal();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].sharjvel();
        gishatichArr[i].utel();
        gishatichArr[i].bazmanal();
        gishatichArr[i].mahanal();

    }
    for (var i in bombArr) {
        bombArr[i].traqel();
    }
    for (var i in tnkoxArr) {
        tnkoxArr[i].sharjvel();
        tnkoxArr[i].utel();
        tnkoxArr[i].tnkel();
        tnkoxArr[i].mahanal();

    }


}
