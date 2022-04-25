import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../interface/ingredientInterface';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-ingredient-information',
  templateUrl: './ingredient-information.component.html',
  styleUrls: ['./ingredient-information.component.css','../app.component.css']
})
export class IngredientInformationComponent implements OnInit {

  constructor(private authI : IngredientService) { }

  ingredient: Ingredient | undefined;
  idIngredient : any;

  ngOnInit(): void {
    this.idIngredient = this.authI.ingredientInformation.idIngredient;
    this.getIngredient(this.idIngredient);
  }

  getIngredient(id : number){
    this.authI.getIngredientById(id)
      .subscribe(ingredient => (this.ingredient = ingredient))
  }

  modifierIngredient(ingredient : Ingredient){
    this.authI.updateIngredient(ingredient, this.idIngredient)
      .subscribe();
    this.refreshRecettes();
    document.getElementById("informationIngredient")?.removeAttribute("hidden");
    document.getElementById("modificationIngredient")?.setAttribute("hidden", "");
  }

  /* Afin de remettre a jour les informatiosn de l'ingrédients lorsque nous faisons une modif */
  refreshRecettes(){
    var timesRun = 0;
    var interval = setInterval(() =>{
    timesRun += 1;
    this.getIngredient(this.idIngredient);
   /*  console.log(timesRun); */
    if(timesRun === 10){
        clearInterval(interval);
    }}, 100); 
  }

  modifierIngredientBouton(){
    document.getElementById("modificationIngredient")?.removeAttribute("hidden");
    document.getElementById("informationIngredient")?.setAttribute("hidden", "");
  }
  
  annuler(){
    document.getElementById("informationIngredient")?.removeAttribute("hidden");
    document.getElementById("modificationIngredient")?.setAttribute("hidden", "");
  }
}
