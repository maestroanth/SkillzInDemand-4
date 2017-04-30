import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

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
  <h4> click image to make these titties bigger!</h4>
  <img [@myAwesomeAnimation] = 'state' (click)='animateMe()' style="margin-left: 110px; margin-top: 10px; margin-bottom: 100px; width: 500px;" src = "{{ tittyPic2 }}">
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

  p {
    width: 200px;
    background:lightgray;
    margin: 100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }

  `],
  animations: [//need trigger, states, and transition
      trigger('myAwesomeAnimation', [

          state('small', style({
              transform: 'scale(1)',
          })),
          state('large', style({
              transform: 'scale(1.5)',
          })),

          transition('xxx-small <=> xxx-large', animate('300ms ease-in', /*keyframes([
              style({ opacity: 1, transform: 'translateY(0)', offset: 20 }),//offset is animation duration
              /* style({
              transform: 'translateY(40px)'*/
          )),//<=> makes animation works both directions => makes it work one direction
      ]),

  ]
})
export class AppComponent {
  //properties and methods are defined here'
  //also where dependency injection occurs within a contructor which gives access to various services/providers

    state: string = 'small'

    constructor(private dataService: DataService) {

    }

    animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
    }

    bitchArray = new Array;

    ngOnInit() { //lifecycle hook
        console.log(this.dataService.bitches);
        this.bitchArray = this.dataService.myBitches();//bitchesName going through these cycles is called data interporlation
    }



  title = "My Angular 4 Pimpin' App";
  pimpLogo = 'http://i114.photobucket.com/albums/n266/yellow_stinger/Random/PIMPFinalSmallInverted.jpg';
  tittyPic = 'https://prettysmutty.files.wordpress.com/2013/02/titty-gif1.gif?w=430&h=286';
  tittyPic2 = 'https://68.media.tumblr.com/55220df344babeba768464ac6eee26f8/tumblr_oorqepiuwe1ultjvgo1_1280.jpg';
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
