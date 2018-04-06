
//_____________`______________________________________________________________GRASS
class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
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

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        //console.log(norVandak, this.multiply);
        if (this.multiply >= 1 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

    mahanal() {
        if (gishatichArr.length == 0 && xotakerArr.length == 0 && tnkoxArr.length == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in grassArr)
            {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    return true;
                }
            }
        }
        else return false;
    }
    
}
//________________________________________________________________________________XOTAKER

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy;
        this.kusht;
        this.directions = [];
    }
    stanalNorKordinatner() {
        this.directions = [
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
        this.stanalNorKordinatner()
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
        matrix[this.y][this.x] = 0;
        if (norVandak) {
            this.y = norVandak[1]
            this.x = norVandak[0]
            matrix[norVandak[1]][norVandak[0]] = 2;
        }
    }

    utel() {
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0]
            this.y = norVandak[1]
            matrix[norVandak[1]][norVandak[0]] = 2;
        }
        for (var i in grassArr) {
            if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                grassArr.splice(i, 1);
            }
        }
    }

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 3 && norVandak) {
            var NorXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(NorXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2
            this.energy = 5;
            this.kusht = 10;
            this.multiply = 0;
        }
    }
    mahanal() {
        this.multiply++;
        for (var i in xotakerArr) {
            if (this.multiply >= 6 && xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                matrix[this.y][this.x] = 0;
                xotakerArr.splice(i, 1);
                this.multiply = 0;

            }
        }


    }

}

//---------------------------------------------------------------GISHATICH

class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy;
        this.kusht;
        this.directions = [];
    }

    stanalNorKordinatner() {
        this.directions = [

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
        this.stanalNorKordinatner()
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
            this.y = norVandak[1]
            this.x = norVandak[0]
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
    }


    utel() {
        var norVandak = random(this.yntrelVandak(2));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
        for (var i in xotakerArr) {
            if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                xotakerArr.splice(i, 1);
            }
        }
    }

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 6  && norVandak) {
            var NorGishatich = new Gishatich(norVandak[0], norVandak[1]);
            gishatichArr.push(NorGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.energy = 5;
            this.kusht = 10;
            this.multiply = 0;

        }
    }
    mahanal() {
        this.multiply++;
        for (var i in gishatichArr) {
            if (this.multiply >= 10 && gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                matrix[this.y][this.x] = 0;
                gishatichArr.splice(i, 1);
                this.multiply = 0;

            }
        }


    }

}

//--------------------------------------------------------------------------BOMB

class Bomb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.time = 0;
        this.directions = [];

    }
    stanalNorKordinatner() {
        this.directions = [
            //----------------------------------------------------3 SHARQ
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],

            [this.x - 3, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x + 3, this.y + 2],

            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3],

            //---------------------------------------------------------2SHARQ

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
            //--------------------------------------------------------1SHARQ
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

    yntrelVandak(ch, ch1, ch3) {
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch || matrix[y][x] == ch1 || matrix[y][x] == ch3) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

    traqel() {
        var norVandak = random(this.yntrelVandak(1, 2, 3));
        this.time++;
        if (norVandak && this.time >= 50) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                }
            }
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }

        }
    }

}
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



