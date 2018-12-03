import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Practice01Component } from './components/practice01/practice01.component';
import { Practice02Component } from './components/practice02/practice02.component';
import { Practice03Component } from './components/practice03/practice03.component';
import { Practice04Component } from './components/practice04/practice04.component';
import { Practice05Component } from './components/practice05/practice05.component';
import { Practice06Component } from './components/practice06/practice06.component';
import { Practice07Component } from './components/practice07/practice07.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Practice01Component,
    Practice02Component,
    Practice03Component,
    Practice04Component,
    Practice05Component,
    Practice06Component,
    Practice07Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
