import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice04',
  templateUrl: './practice04.component.html',
  styleUrls: ['./practice04.component.css']
})
export class Practice04Component implements OnInit {

  colors: string[];

  constructor() { }

  ngOnInit() {
    this.colors = ['red', 'green', 'blue', 'yellow', 'pink'];
  }

}
