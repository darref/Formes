"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleSword = void 0;
const Weapon_1 = require("./Weapon");
class SimpleSword extends Weapon_1.Weapon {
    constructor(strength, name) {
        super(strength, name);
    }
    weaponEffect(target, self) {
        console.log("simple sword attack , no special effect.");
    }
}
exports.SimpleSword = SimpleSword;
