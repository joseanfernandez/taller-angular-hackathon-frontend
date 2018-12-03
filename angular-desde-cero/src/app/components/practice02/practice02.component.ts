import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice02',
  templateUrl: './practice02.component.html',
  styleUrls: ['./practice02.component.css']
})
export class Practice02Component implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
    this.text = null;
  }

  update(text: string) {
    this.text = text;
  }
}
