import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  noEmploye = localStorage.getItem('utilisateurCourantNoEmploye');

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  importer(){
    this.router.navigate(['/importation-donnees'])
  }

  modifierProfil(){
    this.router.navigate(['/parametres-compte-utilisateur'])
  }

  choisirMeritas(){
    this.router.navigate(['/choisir-types-meritas'])
  }

  ajouterOuRendreInactifEtudiants(){
    this.router.navigate(['/supprimer-etudiant'])
  }

  afficherGroupesCours(){
    this.router.navigate(['/afficher-groupes-cours-utilisateur'])
  }

}
