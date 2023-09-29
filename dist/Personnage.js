"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personnage = void 0;
class Personnage {
    constructor(name, health, weapon) {
        this.alive = true;
        this.health = health;
        this.name = name;
        this.wpn = weapon;
    }
    die() {
        this.alive = false;
        console.log(this.name + " has died.");
    }
}
exports.Personnage = Personnage;
