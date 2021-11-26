import { Component, OnInit } from '@angular/core';
import { api } from '../api/api';
import { Meritas, RaisonActif } from '../model/model';

@Component({
  selector: 'app-choisir-types-meritas',
  templateUrl: './choisir-types-meritas.component.html',
  styleUrls: ['./choisir-types-meritas.component.css']
})
export class ChoisirTypesMeritasComponent implements OnInit {
  titre = 'Team Rocket';
  team_rocket_logo = "assets/images/team_rocket_logo.jpg";

  listeRaisons: RaisonActif[] = [];

  afficherMessage = false;
  compteur : number = 0;

  constructor() { 

    const apiRaison = new api();

    apiRaison.obtenirRaisons().then(resultat => {
      let liste: RaisonActif[] = resultat;

      for(var i = 0; i < liste.length; i++) {
        this.listeRaisons.push(liste[i]);
      }
      
    });

    console.log("Liste des raisons :");
    console.log(this.listeRaisons);

  }

  ngOnInit(): void {
  }

  surChangementEtat(raisonSelectionne: any, raisonActif: any, event: any) {

    if(event.target.checked == true) {
      if(this.compteur < 5){
      this.compteur++;
    } else {
       event.target.checked = false;
    }
    } else if(this.compteur>0){
      this.compteur--;
    }

    const apiRaison = new api();

    console.log("Nombre des checkbox sélectionnés : " + this.compteur);

    if(this.compteur > 3) {
      this.afficherMessage = true;
      console.log("Afficher le message");
    } else {
      this.afficherMessage = false;
    }

    let nouvelRaison: RaisonActif = {
      raison: raisonSelectionne,
      actif: !raisonActif
    }

    const apimodifierRaisonActif = new api();

    apimodifierRaisonActif.modifierRaisonActif(nouvelRaison);

    console.log("On a modifié la raison " + raisonSelectionne);
  }
  
}