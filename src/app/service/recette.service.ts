import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
import { Recette } from '../interface/recetteInterface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private handlerError : HandleError;

  constructor(private auth :AuthService ,private http : HttpClient, httpErrorHandler : HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('authService')
  }

  recetteInformation:Recette | undefined;

  
  /* GET voir toute les recettes présente dans la base de donnée */
  getRecettes(): Observable<Recette[]> {
    return this.http.get<Recette[]>(this.auth.lienApi + 'recette')
      .pipe(
        catchError(this.handlerError('getRecette',[]))
      );
  }

  /* GET les 9 dernières recettes ajoutées dans la base de donnée */
  getNeufRecette() : Observable<Recette[]>{
    return this.http.get<Recette[]>(this.auth.lienApi + 'recette/last')
      .pipe(
        catchError(this.handlerError('getRecette',[]))
      );
  }

  /* POST : Ajouter une recette dans la base de donnée */
  addRecette(recette: Recette) : Observable<Recette> {
    return this.http.post<Recette>(this.auth.lienApi + "recette", recette)
      .pipe(
        catchError(this.handlerError('addRecette', recette))
      );
  }


  /* DELETE : Supprimer une recette */
  delRecette(id : number): Observable<unknown>{
    return this.http.delete(this.auth.lienApi + "recette/" + id)
      .pipe(
        catchError(this.handlerError('deleteRecette'))
      );
  }

  /* PUT: mettre à jour une recette sur le serveur */
  updateRecette(recette : Recette, id : number){
    return this.http.put(this.auth.lienApi + 'recette/' + id,recette)
    .pipe(
      catchError(this.handlerError('deleteRecette'))
    );
  }

  /* GET : Faire une recherche avancée d'une recette */

  searchRecettes(recette : Recette) : Observable<Recette[]> {
    //console.log(recette)
    if(recette.nomRecette === ""){
      if(recette.type === ""){
        if(recette.difficulte === ""){
          if(recette.temps == 0){
            if(recette.calorie == 0){
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/last')
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/calMax/' + recette.calorie)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          } else {
            if(recette.calorie == 0){
              console.log("temps")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/temps/' + recette.temps)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("temps cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance7/' + recette.calorie +'/' + recette.temps)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          }
        } else {
          if(recette.temps == 0){
            if(recette.calorie == 0){
              console.log("diff")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/difficulte/' + recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("diff cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/calMax/' + recette.calorie)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          } else {
            if(recette.calorie == 0){
              console.log("diff temps") 
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance8/' + recette.temps +'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("diff temps cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance6/' + recette.calorie + '/' + recette.temps +'/'+ recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          }
        }
      } else {
        if(recette.difficulte === ""){
          if(recette.temps == 0){
            if(recette.calorie == 0){
              console.log("type")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/type/' + recette.type)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("type cal") 
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance9/' + recette.type +'/'+recette.calorie)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          } else {
            if(recette.calorie == 0){
              console.log("type temps")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance10/' + recette.type +'/'+recette.temps)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("type temps cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance5/' + recette.type +'/' + recette.calorie +'/' + recette.temps)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          }
        } else {
          if(recette.temps == 0){
            if(recette.calorie == 0){
              console.log("type diff") 
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance11/' + recette.type +'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("type diff cal") 
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance12/' + recette.type+'/'+recette.calorie+'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          } else {
            if(recette.calorie == 0){
              console.log("type diff temps") 
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance13/' + recette.type+'/'+recette.temps+'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("type diff temps cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance4/' + recette.type +'/'+recette.calorie+'/'+recette.temps+'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          }
        }
      }
    } else {
      if(recette.type === ""){
        if(recette.difficulte === ""){
          if(recette.temps == 0){
            if(recette.calorie == 0){
              console.log("nom")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/nom/' + recette.nomRecette)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("nom cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance14/' + recette.nomRecette+'/'+recette.calorie)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          } else {
            if(recette.calorie == 0){
              console.log("nom temps")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance15/' + recette.nomRecette+'/'+recette.temps)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("nom temps cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance3/' + recette.nomRecette+'/'+recette.calorie+'/'+recette.temps)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          }
        } else {
          if(recette.temps == 0){
            if(recette.calorie == 0){
              console.log("nom diff")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance16/' + recette.nomRecette +'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("nom diff cal") 
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance17/' + recette.nomRecette+'/'+recette.calorie+'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          } else {
            if(recette.calorie == 0){
              console.log("nom diff temps") 
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance18/' + recette.nomRecette+'/'+recette.temps+'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("nom diff temps cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance2/' + recette.nomRecette+'/'+recette.calorie+'/'+recette.temps+'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          }
        }
      } else {
        if(recette.difficulte === ""){
          if(recette.temps == 0){
            if(recette.calorie == 0){
              console.log("nom type") 
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance19/' + recette.nomRecette+'/'+recette.type)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("nom type cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance20/' + recette.nomRecette+'/'+recette.type+'/'+recette.calorie)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          } else {
            if(recette.calorie == 0){
              console.log("nom type temps")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance21/' + recette.nomRecette+'/'+recette.type+'/'+recette.temps)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("nom type temps cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance1/' + recette.type+'/'+recette.nomRecette+'/'+recette.calorie +'/'+recette.temps)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          }
        } else {
          if(recette.temps == 0){
            if(recette.calorie == 0){
              console.log("nom type diff") 
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance22/' + recette.nomRecette+'/'+recette.type+'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("nom type diff cal") 
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance23/' + recette.nomRecette+'/'+recette.type+'/'+recette.calorie+'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          } else {
            if(recette.calorie == 0){
              console.log("nom type diff temps")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance24/' + recette.nomRecette+'/'+recette.type+'/'+recette.temps+'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            } else {
              console.log("nom type diff temps cal")
              return this.http.get<Recette[]>(this.auth.lienApi + 'recette/avance/'+recette.type+'/'+recette.nomRecette+'/'+recette.calorie+'/'+recette.calorie+'/'+recette.difficulte)
                .pipe(
                  catchError(this.handlerError('getRecette',[]))
                );
            }
          }
        }
      }
    }
    
  }








}

