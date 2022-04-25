import { Recette } from "./recetteInterface";

export interface Etape{
    idEtape : number;
    numEtape : number;
    texteEtape : string;
    recette : Recette;
}