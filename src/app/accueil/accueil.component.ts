import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { api } from '../api/api';
import { Utilisateur } from '../model/model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  accueilForm: FormGroup;

  ecole = "assets/images/ecole.jpg";

  informationsManquantes: boolean = false;
  informationsInvalides: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) { 

    this.accueilForm = this.fb.group({
      //Valeur ajoutées pour tests
      //utilisateur: ['ELA532821', [Validators.required]],
      //motDePasse: ['nstagram1980', [Validators.required]]

      utilisateur: ['admin001', [Validators.required]],
      motDePasse: ['ADminiSTRATION', [Validators.required]]
    });

    //On réinitialise l'utilisateur
    localStorage.setItem('utilisateurCourantNoEmploye',"");
    localStorage.setItem('utilisateurCourantRole', ""); 
  }

  ngOnInit(): void {}

  async afficherMenu() {

    let utilisateurAValider: Utilisateur = {
      noEmploye: this.accueilForm.get('utilisateur')?.value,
      motDePasse: this.accueilForm.get('motDePasse')?.value,
      role: ""
    }

    const apiUtilisateur = new api();

    let resultat = await apiUtilisateur.validerUtilisateur(utilisateurAValider);

    let utilisateur: Utilisateur = {
      noEmploye: resultat.noEmploye,
      motDePasse: resultat.motDePasse,
      role: resultat.role
    }

    if(!this.accueilForm.valid) {

      this.informationsManquantes = true
      this.informationsInvalides = false;

      console.log("Informations manquantes");

    } else if(this.accueilForm.valid && (resultat.noEmploye == undefined && resultat.motDePasse == undefined && resultat.role == undefined)) {

      this.informationsManquantes = false;
      this.informationsInvalides = true;

      console.log("L'utilisateur entré n'existe pas");

    } else if(this.accueilForm.valid && (resultat.noEmploye != undefined && resultat.motDePasse != undefined && resultat.role != undefined)) {

      this.informationsManquantes = false;
      this.informationsInvalides = true;

      console.log("L'utilisateur entré existe");

      this.router.navigate(['/menu']);

      localStorage.setItem('utilisateurCourantNoEmploye', utilisateur.noEmploye);
      localStorage.setItem('utilisateurCourantRole', utilisateur.role); 
    }

  }

  surChangementTexteChamp(){

    this.informationsManquantes = false;
    this.informationsInvalides = false;
  }

}