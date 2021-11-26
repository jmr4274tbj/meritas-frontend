import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../api/api';
import { Professeur } from '../model/model';

@Component({
  selector: 'app-afficher-professeurs',
  templateUrl: './afficher-professeurs.component.html',
  styleUrls: ['./afficher-professeurs.component.css']
})
export class AfficherProfesseursComponent implements OnInit {
 
  listeProfesseurs: Professeur[] = [];

  constructor() { 
    
    const apiAfficherProfesseurs = new api();

    apiAfficherProfesseurs.obtenirProfesseurs().then(resultat => {

      for(var i = 0; i < resultat.length; i++) {
        this.listeProfesseurs.push(resultat[i]);
      }
    });
  }

  ngOnInit(): void {
  }

}


