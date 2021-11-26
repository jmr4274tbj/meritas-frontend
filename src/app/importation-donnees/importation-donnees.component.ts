import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { api } from '../api/api';
import { Cours, Professeur, Etudiant, Groupe } from '../model/model';

@Component({
  selector: 'app-importation-donnees',
  templateUrl: './importation-donnees.component.html',
  styleUrls: ['./importation-donnees.component.css']
})
export class ImportationDonneesComponent implements OnInit {

  @ViewChild('importationLabelCours') importationLabelCours!: ElementRef;
  @ViewChild('importationLabelProfesseurs') importationLabelProfesseurs!: ElementRef;
  @ViewChild('importationLabelEtudiants') importationLabelEtudiants!: ElementRef;
  @ViewChild('importationLabelGroupes') importationLabelGroupes!: ElementRef;

  importationCoursForm: FormGroup;
  importationProfesseursForm: FormGroup;
  importationEtudiantsForm: FormGroup;
  importationGroupesForm: FormGroup;

  fichierCours: File = {} as File;
  fichierProfesseurs: File = {} as File;
  fichierEtudiants: File = {} as File;
  fichierGroupes: File = {} as File;

  noEmploye = localStorage.getItem('utilisateurCourantNoEmploye');

  importationCoursChargement: boolean = false;
  importationProfsChargement: boolean = false;
  importationEtudiantsChargement: boolean = false;
  importationGroupesChargement: boolean = false;

  etatBoutonImportationCours: string = "";
  etatBoutonImportationProfs: string = "";
  etatBoutonImportationEtudiants: string = "";
  etatBoutonImportationGroupes: string = "";

  constructor(private router: Router) {
    this.importationCoursForm = new FormGroup({
      importationFichierCours: new FormControl('', Validators.required),
    }); 

    this.importationProfesseursForm = new FormGroup({
      importationFichierProfs: new FormControl('', Validators.required)
    }); 

    this.importationEtudiantsForm = new FormGroup({
      importationFichierEtudiants: new FormControl('', Validators.required)
    }); 
    
    this.importationGroupesForm = new FormGroup({
      importationFichierGroupes: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  surChangementFichierCours(fichiers: FileList) {
    this.importationLabelCours.nativeElement.innerText = Array.from(fichiers)
      .map(f => f.name)
      .join(', ');
    this.fichierCours = fichiers.item(0) as File;
  }

  surChangementFichierProfesseurs(fichiers: FileList) {
    this.importationLabelProfesseurs.nativeElement.innerText = Array.from(fichiers)
      .map(f => f.name)
      .join(', ');
    this.fichierProfesseurs = fichiers.item(0) as File;
  }

  surChangementFichierEtudiants(fichiers: FileList) {
    this.importationLabelEtudiants.nativeElement.innerText = Array.from(fichiers)
      .map(f => f.name)
      .join(', ');
    this.fichierEtudiants = fichiers.item(0) as File;
  }

  surChangementFichierGroupes(fichiers: FileList) {
    this.importationLabelGroupes.nativeElement.innerText = Array.from(fichiers)
      .map(f => f.name)
      .join(', ');
    this.fichierGroupes = fichiers.item(0) as File;
  }

  importerCours() {
    const apiCours = new api();
    const fileReader = new FileReader();
    fileReader.onload = function(){
      const textFromFileLoaded = fileReader.result as string;
      const json = <Cours[]>JSON.parse(textFromFileLoaded);
      apiCours.creerCours(json);
    };
    fileReader.readAsText(this.fichierCours, "UTF-8");
    
    this.importationCoursChargement = true;
    this.etatBoutonImportationCours = "disabled";
    
    setTimeout(() => {
      this.router.navigate(['/afficher-cours']);
    }, 2000);
  }

  importerProfesseurs() {
    const apiProfesseurs = new api();
    const fileReader = new FileReader();
    fileReader.onload = function(){
      const textFromFileLoaded = fileReader.result as string;
      const json = <Professeur[]>JSON.parse(textFromFileLoaded);
      apiProfesseurs.creerProfesseurs(json);
    };
    fileReader.readAsText(this.fichierProfesseurs, "UTF-8");

    this.importationProfsChargement = true;
    this.etatBoutonImportationProfs = "disabled";
    
    setTimeout(() => {
      this.router.navigate(['/afficher-professeurs']);
    }, 2000);
  }

  importerEtudiants() {
    const apiEtudiants = new api();
    const fileReader = new FileReader();
    fileReader.onload = function(){
      const textFromFileLoaded = fileReader.result as string;
      const json = <Etudiant[]>JSON.parse(textFromFileLoaded);
      apiEtudiants.creerEtudiants(json);
    };
    fileReader.readAsText(this.fichierEtudiants, "UTF-8");

    this.importationEtudiantsChargement = true;
    this.etatBoutonImportationEtudiants = "disabled";
    
    setTimeout(() => {
      this.router.navigate(['/afficher-etudiants']);
    }, 2000);
  }

  importerGroupes() {
    const apiGroupes = new api();
    const fileReader = new FileReader();
    fileReader.onload = function(){
      const textFromFileLoaded = fileReader.result as string;
      const json = <Groupe[]>JSON.parse(textFromFileLoaded);
      apiGroupes.creerGroupes(json);
    };
    fileReader.readAsText(this.fichierGroupes, "UTF-8");

    this.importationGroupesChargement = true;
    this.etatBoutonImportationGroupes = "disabled";
    
    setTimeout(() => {
      this.router.navigate(['/afficher-groupes']);
    }, 2000);
  }
  
}
