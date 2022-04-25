import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../interface/ingredientInterface';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-ingredient-liste',
  templateUrl: './ingredient-liste.component.html',
  styleUrls: ['./ingredient-liste.component.css','../app.component.css']
})
export class IngredientListeComponent implements OnInit {

  ingredients : Ingredient[] = [];
  ingredientsSearch : Ingredient[] = [];

  constructor(private authI : IngredientService, private route : Router) { }


  ngOnInit(): void {
    this.getIngredient();
  }

  /* Avoir la liste de tout les ingrédients présent dans la base de donnée */
  getIngredient() : void{
    this.authI.getIngredients()
      .subscribe(ingredient => (this.ingredients = ingredient));
  }

  /* Realiser une recherche par le nom (contient) des ingrédients de la base de donnée */
  searchIngredient(info :any) : void{
    this.authI.searchIngredient(info.nomIngredient)
      .subscribe(ingredient => (this.ingredients = ingredient));
  }


  /* Envoyer vers la page d'information de l'ingrédient */
  infoRecette(ingredient : Ingredient){
    this.authI.ingredientInformation = ingredient;
    this.route.navigateByUrl("ingredient");
  }






}
