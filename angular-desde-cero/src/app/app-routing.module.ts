import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Practice01Component } from './components/practice01/practice01.component';
import { Practice02Component } from './components/practice02/practice02.component';
import { Practice03Component } from './components/practice03/practice03.component';
import { HomeComponent } from './components/home/home.component';
import { Practice04Component } from './components/practice04/practice04.component';
import { Practice05Component } from './components/practice05/practice05.component';
import { Practice06Component } from './components/practice06/practice06.component';
import { Practice07Component } from './components/practice07/practice07.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'practice01', component: Practice01Component },
  { path: 'practice02', component: Practice02Component },
  { path: 'practice03', component: Practice03Component },
  { path: 'practice04', component: Practice04Component },
  { path: 'practice05', component: Practice05Component },
  { path: 'practice06', component: Practice06Component },
  { path: 'practice07', component: Practice07Component },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
