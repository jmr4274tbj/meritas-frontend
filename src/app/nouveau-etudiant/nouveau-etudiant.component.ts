import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { api } from '../api/api';
import { Etudiant, Groupe} from '../model/model';


@Component({
  selector: 'app-nouveau-etudiant',
  templateUrl: './nouveau-etudiant.component.html',
  styleUrls: ['./nouveau-etudiant.component.css']
})
export class NouveauEtudiantComponent implements OnInit {
  etudiant: Etudiant = new Etudiant();
  liste: Array<Etudiant> = [];
  listeGroupes: Array<Groupe> = [];
  estSoumis = false;
  nouvelEtudiantForm: FormGroup;
  constructor(private router: Router) {
    this.nouvelEtudiantForm = new FormGroup({
      codePermanent: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      groupeChoisi: new FormControl(['', [Validators.required]])
    });
    const apiAfficherGroupes = new api();
    Promise.all([apiAfficherGroupes.obtenirGroupes()])
    .then( (groupes) => {
      this.listeGroupes = groupes[0];});
    
   }

  ngOnInit(): void {
  }
  nouveauEtudiant() {
    this.etudiant.codePermanent = this.codePermanent?.value;
    this.etudiant.prenom = this.prenom?.value;
    this.etudiant.nom = this.nom?.value;
    this.liste.push(this.etudiant);
    const apiNouveauEtudiant = new api();
    const secondFunction = async () => {
      const result = await apiNouveauEtudiant.creerEtudiants(this.liste);
      apiNouveauEtudiant.ajouterEtudiantDansGroupes(this.codePermanent?.value, this.groupeChoisi?.value);
    }
    secondFunction();
    this.router.navigate(['/menu']);
  }

  get groupeChoisi() {
    return this.nouvelEtudiantForm.get('groupeChoisi');
  }

  get codePermanent() {
    return this.nouvelEtudiantForm.get('codePermanent');
  }

  get prenom() {
    return this.nouvelEtudiantForm.get('prenom');
  }

  get nom() {
    return this.nouvelEtudiantForm.get('nom');
  }

  onSubmit() {
    this.estSoumis = true;
    if (!this.nouvelEtudiantForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.nouvelEtudiantForm.value))
      return true;
    }

  }
}


