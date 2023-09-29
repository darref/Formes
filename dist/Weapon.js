"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
class Weapon {
    constructor(str, name) {
        this.strength = str;
        this.name = name;
    }
    getStrength() {
        return this.strength;
    }
}
exports.Weapon = Weapon;
