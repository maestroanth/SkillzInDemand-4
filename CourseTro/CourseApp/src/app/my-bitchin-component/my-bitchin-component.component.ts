import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bitchin-component',
  template: `
  
<div>
  <h2> Here is my Hoe List </h2>

  <h3>Hoe's Name: {{myObject.name}}</h3>
  <ul> 
    <li> Da Titty Size (or Primary ID): {{ myObject.tittySize }}</li>
    <li> Age: {{ myObject.age }}</li>
    <li> Where I Picked Them Up: {{ myObject.location }}</li>
  </ul>
</div>

<div>
  <h3>Displaying an Array</h3>
  <ul> 
    <li *ngFor="let arr of myArr">{{ arr }}</li> <!--can be used to iterate through array of objects as well-->
  </ul>
</div>

<div>
  <h3>Displaying an ngIf</h3>
  <ul> 
    <li *ngIf="myArr[0] == 'him'; then temp1 else temp2"></li> <!--can be used to iterate through array of objects as well-->
  </ul>
</div>

<!-- #binds the temp1-->
<ng-template #temp1>Yeah, I exists.</ng-template>

<!-- #binds the temp2-->
<ng-template #temp2>No, I don't exist. So how can I possibly be here to inform you of that fact?! (Pimpin' paradox yo!)</ng-template>
 
 
  `,
  styleUrls: ['./my-bitchin-component.component.css']
})
export class MyBitchinComponentComponent implements OnInit {
  myObject = {
    name: " #014A",
    tittySize: '54B',
    age: 19,
    location: 'Colfax in Denver'

  }

  myArr = ['him','hers','yours'];
  constructor() { }

  ngOnInit() {
  }

}
