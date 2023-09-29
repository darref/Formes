import { Vertice } from "./Vertice";

export class Side
{   
    public longueur : number
    public vertice1 : Vertice
    public vertice2 : Vertice

    constructor(vert1 : Vertice , vert2:Vertice)
    {
        this.vertice1 = vert1;
        this.vertice2 = vert2;
        this.longueur = Math.sqrt( Math.pow(vert1.locationX - vert2.locationX , 2) +   Math.pow( vert1.locationY - vert2.locationY , 2))
    }
}