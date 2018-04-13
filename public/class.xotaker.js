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
