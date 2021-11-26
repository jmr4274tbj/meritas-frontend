import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titre = 'Team Rocket';
  team_rocket_logo = "assets/images/team_rocket_logo.jpg";

  constructor() { }

}
