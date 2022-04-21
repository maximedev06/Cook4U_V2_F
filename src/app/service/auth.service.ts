
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
import { Recette } from '../interface/recetteInterface';



@Injectable({
  providedIn: 'root'
})


export class AuthService {

  lienApi = 'http://localhost:8086/';

  constructor() {} 





}
