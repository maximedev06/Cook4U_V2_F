import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
import { Quantite } from '../interface/quantiteInterface';
import { Recette } from '../interface/recetteInterface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuantiteService {

  private handlerError : HandleError;

  constructor(private auth : AuthService, private http : HttpClient, private httpErrorHandler : HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('quantiteService')
  }

  //quantiteInformation : Quantite | undefined;

  /* GET voir toutes les quantités ingrédients d'une recette en fonction de son idRecette */
  getQuantiteRecette(idRecette : number) : Observable<Quantite[]>{
    return this.http.get<Quantite[]>(this.auth.lienApi + 'quantite/recette/' + idRecette)
      .pipe(
        catchError(this.handlerError('getQuantiteRecette',[]))
      )
  }








}
