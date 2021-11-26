import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { api } from '../api/api';
import { Utilisateur } from '../model/model';

@Component({
  selector: 'app-parametres-compte-utilisateur',
  templateUrl: './parametres-compte-utilisateur.component.html',
  styleUrls: ['./parametres-compte-utilisateur.component.css']
})
export class ParametresCompteUtilisateurComponent implements OnInit {

  modifierProfilForm: FormGroup;

  noEmploye = localStorage.getItem('utilisateurCourantNoEmploye');
  role = localStorage.getItem('utilisateurCourantRole'); 

  informationsManquantes: boolean = false;

  constructor(private fb: FormBuilder) {  
    this.modifierProfilForm = this.fb.group({
      motDePasse: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  modifierMotDePasse() {

    let nouvelUtilisateur: Utilisateur = {
      noEmploye: this.noEmploye!,
      motDePasse: this.modifierProfilForm.get('motDePasse')?.value,
      role: this.role!
    }

    const apiModifierUtilisateur = new api();

    if(!this.modifierProfilForm.valid) {

      this.informationsManquantes = true

      console.log("Informations manquantes");

    } else {

      apiModifierUtilisateur.modifierUtilisateur(nouvelUtilisateur);

      localStorage.setItem('utilisateurCourantMotDePasse', nouvelUtilisateur.motDePasse);

      console.log("Le mot de passe a été modifié avec succès");
    }

  }

  surChangementTexteChamp(){

    this.informationsManquantes = false;
  }

}
