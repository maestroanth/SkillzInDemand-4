import { Component, Directive, Injectable, NgModule, ViewContainerRef, TemplateRef, VERSION, OnInit } from '@angular/core';
import { Routes, RouterModule, ROUTER_CONFIGURATION, ROUTER_INITIALIZER, ɵROUTER_PROVIDERS } from '@angular/router';
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

<app-my-bitchin-component></app-my-bitchin-component>

  <!--3 ways to bind in Angular 4
  <img style="margin-left: 10px; margin-top: 50px; width: 80px;" src="{{ pimpLogo }}">
  <img style="margin-left: 10px; margin-top: 50px; width: 80px;" [src]="pimpLogo">
  <img style="margin-left: 10px; margin-top: 50px; width: 80px;" bind-src="pimpLogo">
-->



  <br /><br />

  <br />
<p> 2-way Binding Test </p>

   <input [(ngModel)]="name" #ctrl="ngModel" required>
    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>
    <button (click)="setValue()">Set value</button>

    <p> Array as JSON object test </p>
    <p>{{num | json}}</p>

    <p> Routing Test</p>
<!--
    <nav>
        <a href="" [routerLink]="['Notes']> Notes</a>
        <a href="" [routerLink]="['Tasks']> Tasks</a>
    </nav>

<router-outlet></router-outlet>
-->
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

})


export class AppComponent implements OnInit {
  //properties and methods are defined here'
  //also where dependency injection occurs within a contructor which gives access to various services/providers

    num: Array<number> = [7, 4, 2];

    name: string = '';
    setValue() { this.name = 'Nancy'; }

    constructor(private dataService: DataService) {
        this.bitchArray = this.dataService.myBitches();//bitchesName going through these cycles is called data interporlation
    }


    bitchArray = new Array;

    ngOnInit() { //lifecycle hook
        console.log("Init Hook: " + this.dataService.bitches);  
    }



  title = "My Angular 4 Pimpin' App";
  pimpLogo = 'http://i114.photobucket.com/albums/n266/yellow_stinger/Random/PIMPFinalSmallInverted.jpg';


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
  //You're suppose to put routes in another file i.e. 'app.routes.ts'

}

const routes: Routes = [
    {
        path: 'index.html',
        component: AppComponent,
    },
    {
        path: 'index.html/:id',
        component: AppComponent
    },
    {
        path: '',
        redirectTo: '/index.html',
        pathMatch: 'full'
    },
];

//updated export
export const routing = RouterModule.forRoot(routes);