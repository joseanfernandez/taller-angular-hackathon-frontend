import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice01',
  templateUrl: './practice01.component.html',
  styleUrls: ['./practice01.component.css']
})
export class Practice01Component implements OnInit {

  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit() {
    this.firstName = 'Jose Antonio';
    this.lastName = 'Fernández García';
  }

}
