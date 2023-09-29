"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LameDeSang = void 0;
const Weapon_1 = require("./Weapon");
class LameDeSang extends Weapon_1.Weapon {
    constructor(str, name) {
        super(str, name);
    }
    weaponEffect(target, self) {
        target.health *= 0.88;
        self.health *= 1.12;
    }
}
exports.LameDeSang = LameDeSang;
