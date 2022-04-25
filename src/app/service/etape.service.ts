import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
import { Etape } from '../interface/etapeInterface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EtapeService {

  private handlerError : HandleError;

  constructor(private auth : AuthService, private http : HttpClient, private httpErrorHandler : HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('EtapeService')
  }

  etapeInformation : Etape | undefined;

  /* GET voir toute les étapes d'une recette en fonction de son idRecette */
  getEtapeRecette(idRecette : number) : Observable<Etape[]>{
    return this.http.get<Etape[]>(this.auth.lienApi + 'etape/recette/' + idRecette)
      .pipe(
        catchError(this.handlerError('getQuantiteRecette',[]))
      )
  }

}
