
import { Component, OnInit } from '@angular/core';
import { Recette } from '../interface/recetteInterface';
import { AuthService } from '../service/auth.service';
import { RecetteService } from '../service/recette.service';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  providers: [AuthService],
  styleUrls: ['./test1.component.css'],
})

export class Test1Component implements OnInit {
  recettes : Recette[] = [];
  editRecette : Recette | undefined;
  idEditRecette =1;

  constructor(private authR : RecetteService) {}
  
  ngOnInit(): void {
    this.getRecette();
  }

  /* GET toutes les recettes */
  getRecette() : void {
    this.authR.getRecettes()
      .subscribe(recettes => (this.recettes = recettes));
  }

  /* POST ajout d'une nouvelle recette dans la base de donnée */
  addRecette(info:any){
    this.authR.addRecette(info).subscribe()
    console.log(info);
    this.refreshRecettes();
  }

  /* Afin de remettre a jour la liste des recettes lorsque nous faisons une modif (post, put patch ou del) */
  refreshRecettes(){
    var timesRun = 0;
    var interval = setInterval(() =>{
    timesRun += 1;
    this.getRecette();
   /*  console.log(timesRun); */
    if(timesRun === 10){
        clearInterval(interval);
    }}, 100); 
  }

  /* DELETE afin de supprimer une recette en fonction de son idRecette */
  deleteRecette(info:any){
    this.authR.delRecette(info.idRecette)
      .subscribe();
    this.refreshRecettes();
  }

  /* UPDATE afin de mettre à jour une recette */
  uptRecette(recette: Recette,){
    this.authR.updateRecette(recette,this.idEditRecette).subscribe();
    this.refreshRecettes();
  }

}
