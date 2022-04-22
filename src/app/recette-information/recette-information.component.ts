import { Component, OnInit } from '@angular/core';
import { Recette } from '../interface/recetteInterface';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-recette-information',
  templateUrl: './recette-information.component.html',
  styleUrls: ['./recette-information.component.css','../app.component.css']
})
export class RecetteInformationComponent implements OnInit {

  recette : Recette | undefined;

  constructor(private authR : RecetteService) { }

  ngOnInit(): void {
    this.recette = this.authR.recetteInformation;
  }

}
