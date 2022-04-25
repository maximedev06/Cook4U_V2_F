import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etape } from '../interface/etapeInterface';
import { Ingredient } from '../interface/ingredientInterface';
import { Quantite } from '../interface/quantiteInterface';
import { Recette } from '../interface/recetteInterface';
import { EtapeService } from '../service/etape.service';
import { IngredientService } from '../service/ingredient.service';
import { QuantiteService } from '../service/quantite.service';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-recette-information',
  templateUrl: './recette-information.component.html',
  styleUrls: ['./recette-information.component.css','../app.component.css']
})
export class RecetteInformationComponent implements OnInit {

  recette : Recette | undefined;
  quantite : Quantite[] = [];
  etape : Etape[] =[];
  idRecette= 1;

  constructor(private authR : RecetteService, private authQ : QuantiteService, private route : Router, private authI : IngredientService 
    , private authE : EtapeService) { }

  ngOnInit(): void {
    this.recette = this.authR.recetteInformation;
    this.getQuantiteRecette(this.authR.recetteInformation?.idRecette);
    this.getEtapeRecette(this.authR.recetteInformation?.idRecette);
  }

  /* Obtenir la liste des ingrédients avec leurs quantité nécessaire pour réaliser le recette  */
  getQuantiteRecette(idRecette : number){
    this.authQ.getQuantiteRecette(idRecette)
      .subscribe(quantites => (this.quantite = quantites))
  }

  /* Obtenir la liste des étapes de la recette */
  getEtapeRecette(idRecette : number){
    this.authE.getEtapeRecette(idRecette)
      .subscribe(etapes =>(this.etape = etapes,[]))
  }

  /* Envoyer vers la page d'information de l'ingrédient */
  infoIngredient(quantite  :Quantite){
    this.authI.ingredientInformation = quantite.ingredient;
    this.route.navigateByUrl("ingredient");
  }


}
