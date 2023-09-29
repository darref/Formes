"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viking = void 0;
const Personnage_1 = require("./Personnage");
class Viking extends Personnage_1.Personnage {
    constructor(name, health, charStrength, wpn) {
        super(name, health, wpn);
        this.strength = charStrength;
    }
    getRealForce() {
        return this.wpn.getStrength() + this.strength;
    }
    attack(target) {
        let attackPower = this.getRealForce();
        if (Math.random() < 0.1) {
            attackPower *= 2;
        }
        target.health -= attackPower;
        if (target.health <= 0) {
            target.die();
        }
        else {
            this.wpn.weaponEffect(target, this);
        }
    }
}
exports.Viking = Viking;
