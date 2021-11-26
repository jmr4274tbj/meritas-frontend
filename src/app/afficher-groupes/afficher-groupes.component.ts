import { Component, OnInit } from '@angular/core';
import { api } from '../api/api';
import { Groupe } from '../model/model';

@Component({
  selector: 'app-afficher-groupes',
  templateUrl: './afficher-groupes.component.html',
  styleUrls: ['./afficher-groupes.component.css']
})
export class AfficherGroupesComponent implements OnInit {

  listeGroupes: Groupe[] = [];

  constructor() { 

    const apiAfficherGroupes = new api();

    apiAfficherGroupes.obtenirGroupes().then( resultat => {

      for(var i = 0; i < resultat.length; i++) {
        this.listeGroupes.push(resultat[i]);
      }
    });  
  }

  ngOnInit(): void {
  }

}
