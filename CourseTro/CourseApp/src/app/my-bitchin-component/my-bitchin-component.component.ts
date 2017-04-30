import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-my-bitchin-component',
  template: `
  
<div>

  <button (click)="tittyToggle = !tittyToggle">Show Me Da TITTIES!!!!</button>
  <br />
  
  <br />
  <div *ngIf="tittyToggle">  
  <h4> click image to make these titties bigger!</h4><br><img [@myAwesomeAnimation] = 'state' (click)='animateMe()' style="margin-left: 110px; margin-top: 10px; margin-bottom: 100px; width: 500px;" src = "{{ tittyPic }}"></div>

  <h2> Here is my Hoe List </h2>

  <h3>Hoe's Name: {{myObject.name}}</h3>
  <ul> 
    <li> Da Titty Size (or Primary ID): {{ myObject.tittySize }}</li>
    <li> Age: {{ myObject.age }}</li>
    <li> Where I Picked Them Up: {{ myObject.location }}</li>
  </ul>
</div>
<!--
<div>
  <h3>Displaying an Array</h3>
  <ul> 
    <li *ngFor="let arr of myArr">{{ arr }}</li> can be used to iterate through array of objects as well
  </ul>
</div>
-->
<!-- #binds the temp1-->
<ng-template #temp1></ng-template>

<!-- #binds the temp2-->
<ng-template #temp2>No, I don't exist. So how can I possibly be here to inform you of that fact?! (Pimpin' paradox yo!)</ng-template>
 
 
  `,
  styleUrls: ['./my-bitchin-component.component.css'],
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
export class MyBitchinComponentComponent implements OnInit {
  myObject = {
    name: " #014A",
    tittySize: '54B',
    age: 19,
    location: 'Colfax in Denver'

  }
  tittyPic = 'https://prettysmutty.files.wordpress.com/2013/02/titty-gif1.gif?w=430&h=286';
  state: string = 'small'
  animateMe() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }
  myArr = ['him','hers','yours'];
  constructor() { }

  ngOnInit() {
  }

}
