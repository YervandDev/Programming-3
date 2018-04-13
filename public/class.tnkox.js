//-*----**---------------------------------------------------------TNKOX
class Tnkox {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.heruvandak = [];
    }
    stanalNorKordinatner() {
        this.directions = [

            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],

            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],


            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var directions = [];
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
        } else if (norVandak = random(this.yntrelVandak(1))) {
            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
        }
    }


    utel() {
        var norVandak = random(this.yntrelVandak(3));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (norVandak = random(this.yntrelVandak(0))) {
            this.sharjvel();
        }
    }
    tnkel() {
        if (grassArr.length == 0) {
            var norVandak;
            if (norVandak = random(this.yntrelVandak(0))) {
                if (norVandak) {
                    var norXot = new Grass(norVandak[0], norVandak[1]);
                    grassArr.push(norXot);
                    matrix[norVandak[1]][norVandak[0]] = 1;
                }
            }
        }
    }



    mahanal() {
        if (gishatichArr.length == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in tnkoxArr)
            {
                if (this.y == tnkoxArr[i].y && this.x == tnkoxArr[i].x) {
                    tnkoxArr.splice(i, 1);
                    return true;
                }
            }
        }
        else return false;
    }
}



