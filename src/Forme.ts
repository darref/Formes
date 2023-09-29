import { Side } from "./Side";


export abstract class Forme
{
    abstract nbEdges : number ;
    abstract nbVertices: number ;
    abstract sides : Array<Side>


    public abstract area() : number
    public abstract perimeter() : number

}