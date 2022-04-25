import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { AccueilComponent } from './accueil/accueil.component';
import { IngredientInformationComponent } from './ingredient-information/ingredient-information.component';
import { IngredientListeComponent } from './ingredient-liste/ingredient-liste.component';
import { RecetteInformationComponent } from './recette-information/recette-information.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  {path:'test1', component:Test1Component}, /* page de test */
  {path:'', component:AccueilComponent}, /* Accueil du site avec les 9 dernieres recetes + recherche avancée */
  {path:'recette', component:RecetteInformationComponent}, /* page pour les informations d'une recette (info+étape+ingrédient) */
  {path:'ingredients', component:IngredientListeComponent}, /* page pour voir tout les ingrédients de la base de donnée */
  {path:'ingredient', component:IngredientInformationComponent}, /* page pour voir les caractéristique d'un ingrédient */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
