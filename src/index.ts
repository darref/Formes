import { Carre } from "./Carre";
import { Side } from "./Side";
import { Vertice } from "./Vertice";

let vert1 = new Vertice(-100,-100)
let vert2 = new Vertice(-100,100)
let vert3 = new Vertice(100,100)
let vert4 = new Vertice(100,-100)
let side1 = new Side(vert1,vert2)
let side2 = new Side(vert2,vert3)
let side3 = new Side(vert3,vert4)
let side4 = new Side(vert4,vert1)
let c1 = new Carre(new Array<Side> (side1,side2,side3,side4))

console.log("Perimetre du carré: " + c1.perimeter())
console.log("Aire du carré: " + c1.area())