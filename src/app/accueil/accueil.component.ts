import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recette } from '../interface/recetteInterface';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css','../app.component.css']
})
export class AccueilComponent implements OnInit {

  recettes : Recette[] = [];
  recettesSearch : Recette[] = [];

  constructor(private authR : RecetteService, private route : Router) { }

  ngOnInit(): void {
    this.getRecettes();
  }

  /* GET avoir les 9 dernieres recettes */
  getRecettes() : void {
    this.authR.getNeufRecette()
      .subscribe(recettes => (this.recettes = recettes));
  }

  /* Envoyer vers la page d'information d'une recette (avec présentation recette, ingrédients et étape ) */
  infoRecette(recette : Recette){
    //console.log(recette)
    this.authR.recetteInformation = recette;
    this.route.navigateByUrl("recette");
  }

  rechercheRecette(recette:Recette){
    this.authR.searchRecettes(recette)
      .subscribe(recettes => (this.recettes = recettes));
  }




}
