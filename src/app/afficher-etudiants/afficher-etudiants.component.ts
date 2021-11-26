import { Component, OnInit } from '@angular/core';
import { api } from '../api/api';
import { Etudiant } from '../model/model';

@Component({
  selector: 'app-afficher-etudiants',
  templateUrl: './afficher-etudiants.component.html',
  styleUrls: ['./afficher-etudiants.component.css']
})
export class AfficherEtudiantsComponent implements OnInit {
  
  listeEtudiants: Etudiant[] = [];

  constructor() { 

    const apiAfficherEtudiants = new api();

    apiAfficherEtudiants.obtenirEtudiants().then(resultat => {

      for(var i = 0; i < resultat.length; i++) {
        this.listeEtudiants.push(resultat[i]);
      }
    });
  }

  ngOnInit(): void {
  }
  
}