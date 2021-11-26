import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BarreNavigationComponent } from './barre-navigation/barre-navigation.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ImportationDonneesComponent } from './importation-donnees/importation-donnees.component';
import { MenuComponent } from './menu/menu.component';
import { AfficherCoursComponent } from './afficher-cours/afficher-cours.component';
import { AfficherProfesseursComponent } from './afficher-professeurs/afficher-professeurs.component';
import { AfficherEtudiantsComponent } from './afficher-etudiants/afficher-etudiants.component';
import { NouveauEtudiantComponent } from './nouveau-etudiant/nouveau-etudiant.component';
import { AfficherGroupesComponent } from './afficher-groupes/afficher-groupes.component';
import { AfficherGroupesCoursUtilisateurComponent } from './afficher-groupes-cours-utilisateur/afficher-groupes-cours-utilisateur.component';
import { ParametresCompteUtilisateurComponent } from './parametres-compte-utilisateur/parametres-compte-utilisateur.component';
import { ChoisirTypesMeritasComponent } from './choisir-types-meritas/choisir-types-meritas.component';
import { AssignationMeritasComponent } from './assignation-meritas/assignation-meritas.component';
import { SupprimerEtudiantComponent } from './supprimer-etudiant/supprimer-etudiant.component';

@NgModule({
  declarations: [					
    AppComponent,
    AccueilComponent,
    BarreNavigationComponent,
    AProposComponent,
    ImportationDonneesComponent,
    MenuComponent,
    AfficherCoursComponent,
    AfficherProfesseursComponent,
    AfficherEtudiantsComponent,
    NouveauEtudiantComponent,
    AfficherGroupesComponent,
    AfficherGroupesCoursUtilisateurComponent,
    ParametresCompteUtilisateurComponent,
    ChoisirTypesMeritasComponent,
    AssignationMeritasComponent,
    SupprimerEtudiantComponent
   ],
     
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
