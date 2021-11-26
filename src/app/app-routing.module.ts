import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AfficherCoursComponent } from './afficher-cours/afficher-cours.component';
import { AfficherProfesseursComponent } from './afficher-professeurs/afficher-professeurs.component';
import { AfficherEtudiantsComponent } from './afficher-etudiants/afficher-etudiants.component';
import { AfficherGroupesComponent } from './afficher-groupes/afficher-groupes.component';
import { AfficherGroupesCoursUtilisateurComponent } from './afficher-groupes-cours-utilisateur/afficher-groupes-cours-utilisateur.component';
import { ChoisirTypesMeritasComponent } from './choisir-types-meritas/choisir-types-meritas.component';
import { ImportationDonneesComponent } from './importation-donnees/importation-donnees.component';
import { MenuComponent } from './menu/menu.component';
import { NouveauEtudiantComponent } from './nouveau-etudiant/nouveau-etudiant.component';
import { ParametresCompteUtilisateurComponent } from './parametres-compte-utilisateur/parametres-compte-utilisateur.component';
import { AssignationMeritasComponent } from './assignation-meritas/assignation-meritas.component';
import { SupprimerEtudiantComponent } from './supprimer-etudiant/supprimer-etudiant.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'a-propos', component:AProposComponent},
  {path:'importation-donnees', component:ImportationDonneesComponent},
  {path:'menu', component:MenuComponent},
  {path:'afficher-cours', component:AfficherCoursComponent},
  {path:'afficher-professeurs', component:AfficherProfesseursComponent},
  {path:'afficher-etudiants', component:AfficherEtudiantsComponent},
  {path:'afficher-groupes', component:AfficherGroupesComponent},
  {path:'afficher-groupes-cours-utilisateur', component:AfficherGroupesCoursUtilisateurComponent},
  {path:'nouveau-etudiant', component:NouveauEtudiantComponent},
  {path:'choisir-types-meritas', component:ChoisirTypesMeritasComponent},
  {path:'parametres-compte-utilisateur', component:ParametresCompteUtilisateurComponent},
  {path:'assignation-meritas', component:AssignationMeritasComponent},
  {path:'supprimer-etudiant', component:SupprimerEtudiantComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', redirectTo:'accueil', pathMatch:'full'} // si route inexistant rediriger sur Accueil
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
