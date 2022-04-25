import { Ingredient } from "./ingredientInterface";
import { Recette } from "./recetteInterface";

export interface Quantite{
    idQuantite : number;
    quantite : number;
    unite : string;
    recette : Recette;
    ingredient : Ingredient;
}



