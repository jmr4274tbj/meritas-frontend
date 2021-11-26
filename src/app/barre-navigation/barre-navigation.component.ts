import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-barre-navigation',
  templateUrl: './barre-navigation.component.html',
  styleUrls: ['./barre-navigation.component.css']
})
export class BarreNavigationComponent implements OnInit {

  titre = 'Team Rocket';
  team_rocket_logo = "assets/images/team_rocket_logo.jpg";

  lienActif = "";

  constructor(private router: Router) { 
    this.router.events.subscribe(evenement => {
      if (evenement instanceof NavigationStart) {
        console.log('Changement de route détecté');
      }

      if (evenement instanceof NavigationEnd) {

        if( localStorage.getItem('utilisateurCourantNoEmploye') == "" && localStorage.getItem('utilisateurCourantRole')  == "") { 
          this.lienActif = "disabled";

          console.log("Désactiver lien menu");
        } else if( localStorage.getItem('utilisateurCourantNoEmploye') != "" && localStorage.getItem('utilisateurCourantRole')  != ""){ 
          this.lienActif = "";
            
          console.log("Activer lien menu");
        }

        console.log(evenement);
      }

      if (evenement instanceof NavigationError) {
        console.log(evenement.error);
      }
    });
  }

  ngOnInit(): void {
  }

  

}
