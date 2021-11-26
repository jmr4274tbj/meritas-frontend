import { Component, OnInit } from '@angular/core';
import { api } from '../api/api';
import { Cours } from '../model/model';

@Component({
  selector: 'app-afficher-cours',
  templateUrl: './afficher-cours.component.html',
  styleUrls: ['./afficher-cours.component.css']
})
export class AfficherCoursComponent implements OnInit {

  listeCours: Cours[] = [];

  constructor() { 

    const apiAfficherCours = new api();

    apiAfficherCours.obtenirCours().then(resultat => {

      for(var i = 0; i < resultat.length; i++) {
        this.listeCours.push(resultat[i]);
      }
    });
  }

  ngOnInit(): void {
  }

}
