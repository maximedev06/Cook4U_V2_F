import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test1Component } from './test1/test1.component';
import { AuthService } from './service/auth.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { RecetteInformationComponent } from './recette-information/recette-information.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    AccueilComponent,
    RecetteInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    AuthService,
    HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
