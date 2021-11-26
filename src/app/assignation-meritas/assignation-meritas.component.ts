import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { api } from '../api/api';
import { Etudiant, Groupe, Meritas, Raison, RaisonActif } from '../model/model';

@Component({
  selector: 'app-assignation-meritas',
  templateUrl: './assignation-meritas.component.html',
  styleUrls: ['./assignation-meritas.component.css']
})
export class AssignationMeritasComponent implements OnInit {

  listeGroupes : Groupe[] = history.state.liste;

  numUnique: number = history.state.num;

  listeEtudiants: Etudiant[] = [];

  listeRaisons: RaisonActif[] = [];

  listeMeritas: Meritas[] = [];

  meritasForm: FormGroup;

  numero: number = 0;

  public etape: any = 1;

  raison: Raison = 0;


  constructor(private fb: FormBuilder, private router: Router) { 

    this.meritasForm = this.fb.group({
      selectionRaison: ['']
    });
    

    const apiRaison = new api();

    apiRaison.obtenirRaisons().then(resultat => {

      for(var i = 0; i < resultat.length; i++) {

        if(resultat[i].actif) {

          this.listeRaisons.push(resultat[i]);
        }
      }

      console.log("Liste des raisons actifs :");
      console.log(this.listeRaisons);
      
    });

    console.log("Numéro unique :");
    console.log(this.numUnique);

    console.log("Liste groupes :");
    console.log(this.listeGroupes);

    console.log("Groupe :");

    for(var i = 0; i < this.listeGroupes.length; i++) {
      if(this.listeGroupes[i].numeroUnique == this.numUnique) {
        let groupe = this.listeGroupes[i];

        console.log(groupe);

        this.listeEtudiants = groupe.etudiants;

      }
    }

    console.log("Étudiants :");
    console.log(this.listeEtudiants);
  }

  ngOnInit(): void {
  }

  surChangementRaisonSelectionne(event: any, codePermanent: string) {

    console.log("Raison Selectionné = ");
    console.log(event.target.value);

    switch (event.target.value) {
      case "attitude": 
        this.raison = 0;
        break;
      case "note": 
        this.raison = 1;
        break;
      case "presence": 
        this.raison = 2;
        break;
      case "effort": 
        this.raison = 3;
        break;
      case "amelioration": 
        this.raison = 4;
        break;
    }


      let meritas: Meritas = {
        numero: this. numero + 1,
        etape: this.etape,
        etudiantCodePermanent: codePermanent,
        numeroUniqueGroupe: this.numUnique,
        raison: this.raison
      }


    if(this.listeMeritas.length == 0) {

        this.listeMeritas.push(meritas);

    } else {  
        for(var i = 0; i < this.listeMeritas.length; i++) {

          if(this.listeMeritas[i].etudiantCodePermanent == codePermanent && this.listeMeritas[i].numeroUniqueGroupe == this.numUnique) {
  
            this.listeMeritas[i].raison = this.raison;
          } else {  
            this.listeMeritas.push(meritas);
          }
        }
    }


    console.log("Liste des méritas:");
    console.log(this.listeMeritas);  
    
  }

  soumettre() {
    const apiMeritas = new api();

    for(var i = 0; i < this.listeMeritas.length; i++) {
      apiMeritas.creerMeritas(this.listeMeritas[i]);
    }

    console.log("On a ajouté les méritas et on reviens au menu");

    this.router.navigate(['/menu']);
  }

  surChangementEtape(event: any) {
    
    this.etape = event.target.value;

    console.log("On a changer l'étape pour " + this.etape);
  }

}



