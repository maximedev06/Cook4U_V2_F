import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { AccueilComponent } from './accueil/accueil.component';
import { RecetteInformationComponent } from './recette-information/recette-information.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  {path:'test1', component:Test1Component},
  {path:'', component:AccueilComponent},
  {path:'recette', component:RecetteInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
