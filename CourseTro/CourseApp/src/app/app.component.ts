import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //properties and methods are defined here'
  //also where dependency injection occurs within a contructor which gives access to various services/providers
  title = "My Angular 4 Pimpin' App";

}
