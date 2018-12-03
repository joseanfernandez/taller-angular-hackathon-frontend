import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice03',
  templateUrl: './practice03.component.html',
  styleUrls: ['./practice03.component.css']
})
export class Practice03Component implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
    this.text = '';
  }

  update(text: string) {
    this.text = text;
  }

}
