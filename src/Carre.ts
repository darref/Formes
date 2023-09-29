
import {Forme} from "./Forme"
import { Side } from "./Side";


export class Carre extends Forme
{
    public nbEdges : number = 4;
    public nbVertices: number = 4;
    public sides : Array<Side>;

    constructor(sd : Array<Side>) 
    {
        if( sd.length != 4)
        {
            throw new Error("un carré doit avoir 4 éléments !");
        }

        super()
        this.sides = sd
    }

    public area(): number {
        return this.sides[0].longueur * this.sides[0].longueur;
    }
    public perimeter(): number {
        return this.sides[0].longueur*4 ;
    }

}