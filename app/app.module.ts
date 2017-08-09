// from angular

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


// from my application

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component'
import { ProductModule } from "./product/product-module";


@NgModule({
  // componentes de terceiros, do angular.
  imports: [ BrowserModule, 
    HttpModule,
    ProductModule,
    RouterModule.forRoot([ 
        { path:'welcome', component: WelcomeComponent },
        { path:'', redirectTo: 'welcome' , pathMatch: 'full' },
        { path:'**', redirectTo: 'welcome' , pathMatch: 'full' },
    ])
    ],
  // minhas declarações, os meus componentes que usarei 
  declarations: [ AppComponent,
                 WelcomeComponent],

  // responsável por iniciar o programa, o componente que irá começar a aplicação
  bootstrap: [ AppComponent ]
})


export class AppModule { }
