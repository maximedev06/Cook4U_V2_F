import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
import { Ingredient } from '../interface/ingredientInterface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private handlerError : HandleError;

  constructor(private auth :AuthService ,private http : HttpClient, httpErrorHandler : HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('RecetteService')
  }

  ingredientInformation:any;

  /* GET voir tout les ingrédients présent dans la base de donnée */
  getIngredients(): Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(this.auth.lienApi + 'ingredient')
      .pipe(
        catchError(this.handlerError('getAllIngredient',[]))
    );
  }

  /* GET faire une recherche d'un ingrédient en fonction du nom (en mode contient) */
  searchIngredient(nom : string) : Observable<Ingredient[]>{
    if(nom == "" || nom == " " || nom =="  "){
      return this.http.get<Ingredient[]>(this.auth.lienApi + 'ingredient')
      .pipe(
        catchError(this.handlerError('getAllIngredient',[]))
    );
    } else {
      return this.http.get<Ingredient[]>(this.auth.lienApi + 'ingredient/nom/' + nom)
        .pipe(
          catchError(this.handlerError('getAllIngredient',[]))
      );
    }
  }

  /* GET obtenir un ingrédient en fonction de son id */
  getIngredientById(id : number) : Observable<Ingredient>{
    return this.http.get<Ingredient>(this.auth.lienApi + "ingredient/" + id)
     
  }


  /* POST ajouter un ingrédient dans la base de donnée */
  addIngredient(ingredient : Ingredient) : Observable<Ingredient>{
    return this.http.post<Ingredient>(this.auth.lienApi + "ingredient",ingredient)
      .pipe(
        catchError(this.handlerError('addIngredient',ingredient))
    );
  }

  /* PUT modifier un ingrédient de la base de donnée en fonction de l'idIngredient */
  updateIngredient(ingredient : Ingredient, id : number){
    return this.http.put(this.auth.lienApi + "ingredient/" + id, ingredient)
      .pipe(
        catchError(this.handlerError('updateIngredient'))
      )
  }


  /* DELETE supprimer un ingrédient de la base de donnée via l'idIngredient */
  delIngredient(id : number): Observable<unknown>{
    return this.http.delete(this.auth.lienApi + "ingredient/" + id)
    .pipe(
      catchError(this.handlerError('deleteIngredient'))
    );
  }




}
