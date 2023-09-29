"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carre = void 0;
const Forme_1 = require("./Forme");
class Carre extends Forme_1.Forme {
    constructor(sd) {
        if (sd.length != 4) {
            throw new Error("un carré doit avoir 4 éléments !");
        }
        super();
        this.nbEdges = 4;
        this.nbVertices = 4;
        this.sides = sd;
    }
    area() {
        return this.sides[0].longueur * this.sides[0].longueur;
    }
    perimeter() {
        return this.sides[0].longueur * 4;
    }
}
exports.Carre = Carre;
