import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../api/api';
import { Groupe } from '../model/model';

@Component({
  selector: 'app-afficher-groupes-cours-utilisateur',
  templateUrl: './afficher-groupes-cours-utilisateur.component.html',
  styleUrls: ['./afficher-groupes-cours-utilisateur.component.css']
})
export class AfficherGroupesCoursUtilisateurComponent implements OnInit {

  listeGroupesCoursUtilisateur: Groupe[] = [];

  noEmploye = localStorage.getItem('utilisateurCourantNoEmploye'); 

  afficherMessageAucunGroupeAssocie = false;

  constructor(private router: Router) { 

    const apiAfficherGroupesCoursUtilisateur = new api();

    apiAfficherGroupesCoursUtilisateur.trouverGroupesParProfesseur(this.noEmploye!).then(resultat => {

      for(var i = 0; i < resultat.length; i++) {
        this.listeGroupesCoursUtilisateur.push(resultat[i]);
      }

      if(this.listeGroupesCoursUtilisateur.length == 0) {
        this.afficherMessageAucunGroupeAssocie = true;
      }
      
    });

    console.log("Liste des groupes de l'utilisateur :");
    console.log(this.listeGroupesCoursUtilisateur);
    
   }

  ngOnInit() {
  }

  assignerMeritas(numeroUnique: number ){

    this.router.navigate(['/assignation-meritas'],{state:{num:numeroUnique, liste:this.listeGroupesCoursUtilisateur}})
    
  }

}
