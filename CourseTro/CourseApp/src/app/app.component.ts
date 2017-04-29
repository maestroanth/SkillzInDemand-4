import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<h1>
  {{title}} <img style="margin-left: 10px; margin-top: 50px; width: 80px;" src="{{ pimpLogo }}">

  <!--3 ways to bind in Angular 4-->
  <img style="margin-left: 10px; margin-top: 50px; width: 80px;" src="{{ pimpLogo }}">
  <img style="margin-left: 10px; margin-top: 50px; width: 80px;" [src]="pimpLogo">
  <img style="margin-left: 10px; margin-top: 50px; width: 80px;" bind-src="pimpLogo">

  
  <br /><br />
  <!--<button [disabled]="buttonStatus == 'disabled'">Pimp Button</button>-->

  <button (click)="showTitties($event)">Show Me Titties!!!!</button>

  <br />
  <img *ngIf="tittyToggle == true"; style="margin-left: 10px; margin-top: 50px; width: 500px;" src="{{ tittyPic }}">
</h1>

<app-my-bitchin-component></app-my-bitchin-component>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //properties and methods are defined here'
  //also where dependency injection occurs within a contructor which gives access to various services/providers
  title = "My Angular 4 Pimpin' App";
  pimpLogo = 'http://i114.photobucket.com/albums/n266/yellow_stinger/Random/PIMPFinalSmallInverted.jpg';
  tittyPic = 'https://prettysmutty.files.wordpress.com/2013/02/titty-gif1.gif?w=430&h=286';
  tittyToggle = false;
    
  //buttonStatus = 'enabled';

  showTitties(event, tittyToggle) {
      if (tittyToggle == false) {
          tittyToggle = true;
          console.log("tittyToggle = " + tittyToggle);
      }
      else {
          tittyToggle == false;
      }
  }

}
