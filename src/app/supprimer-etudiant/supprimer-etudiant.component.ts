import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; //
import { api } from '../api/api';
import { Etudiant } from '../model/model';

@Component({
  selector: 'app-supprimer-etudiant.component',
  templateUrl: './supprimer-etudiant.component.html',
  styleUrls: ['./supprimer-etudiant.component.css']
})
export class SupprimerEtudiantComponent implements OnInit {

  etudiantSupprimeForm: FormGroup;
  etudiant: Etudiant = new Etudiant();
  CPvalide: boolean = true;

  constructor(private router: Router) {
    this.etudiantSupprimeForm = new FormGroup({
      codePermanent: new FormControl('',  Validators.compose([Validators.required, Validators.pattern('[A-Z]{4}[0-9]{8}')]))
    });
  }

  ngOnInit(): void {}

  async supprimerEtudiant() {

    this.etudiant.codePermanent = this.codePermanent?.value;

    const apiEtudiant = new api();

    let resultat = await apiEtudiant.changerEtudiantActifEnInactif(this.etudiant);

    console.log(resultat.codePermanent);
    console.log(resultat.nom);
    console.log(resultat.prenom);
    console.log(resultat.actif);

    if(resultat.nom == undefined) {
      this.CPvalide = false;
      console.log("L'étudiant entré n'existe pas");
    } else {
      this.router.navigate(['/menu']);
    }
  }

  get codePermanent() {
    return this.etudiantSupprimeForm.get('codePermanent');
  }

}
