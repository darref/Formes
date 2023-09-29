"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Side = void 0;
class Side {
    constructor(vert1, vert2) {
        this.vertice1 = vert1;
        this.vertice2 = vert2;
        this.longueur = Math.sqrt(Math.pow(vert1.locationX - vert2.locationX, 2) + Math.pow(vert1.locationY - vert2.locationY, 2));
    }
}
exports.Side = Side;
