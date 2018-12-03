import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice05',
  templateUrl: './practice05.component.html',
  styleUrls: ['./practice05.component.css']
})
export class Practice05Component implements OnInit {

  text: string;
  colors: string[];

  constructor() { }

  ngOnInit() {
    this.text = null;
    this.colors = ['red', 'green', 'blue', 'yellow', 'pink'];
  }

  add() {
    this.colors.push(this.text);
    this.text = null;
  }

}
