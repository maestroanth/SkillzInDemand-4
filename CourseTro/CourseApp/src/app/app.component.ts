import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<!--<h1 [class.red-title]="titleClass">-->
<!-- <h1 [style.color] = "titleStyle ? 'green' : 'pink'" >-->
<!-- <h1 [ngStyle] = "titleStyles" >-->
<h1 [ngClass]="titleClasses">
  {{title}}
<img style="margin-left: 10px; margin-top: 50px; width: 80px;" src="{{ pimpLogo }}">
</h1>
  <!--3 ways to bind in Angular 4
  <img style="margin-left: 10px; margin-top: 50px; width: 80px;" src="{{ pimpLogo }}">
  <img style="margin-left: 10px; margin-top: 50px; width: 80px;" [src]="pimpLogo">
  <img style="margin-left: 10px; margin-top: 50px; width: 80px;" bind-src="pimpLogo">
-->
  
  <br /><br />
  <!--<button [disabled]="buttonStatus == 'disabled'">Pimp Button</button>-->

  <button (click)="showTitties($event)">Show Me The Titties!!!!</button>

  <br />
  <img *ngIf="tittyToggle == true"; style="margin-left: 10px; margin-top: 50px; width: 500px;" src="{{ tittyPic }}">


<app-my-bitchin-component></app-my-bitchin-component>
`,
  styles: [`
  h1 {
      text-decoration:underline;
  }
    
  .red-title {
    color: red;
  }

  .large-title{
    font-size: 4em;
  }

  `]
})
export class AppComponent {
  //properties and methods are defined here'
  //also where dependency injection occurs within a contructor which gives access to various services/providers
  title = "My Angular 4 Pimpin' App";
  pimpLogo = 'http://i114.photobucket.com/albums/n266/yellow_stinger/Random/PIMPFinalSmallInverted.jpg';
  tittyPic = 'https://prettysmutty.files.wordpress.com/2013/02/titty-gif1.gif?w=430&h=286';
  tittyToggle = false;
  titleClass = 'red-title';
  //titleStyle = 'true'; for style binding
  /* This is style binding
    titleStyles = {
    'color' : 'red',
    'font-size' : '4em'
  }
  */
  titleClasses = {
      'red-title': true,
      'large-title': true
  }
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
