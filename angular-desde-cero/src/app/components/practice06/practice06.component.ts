import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice06',
  templateUrl: './practice06.component.html',
  styleUrls: ['./practice06.component.css']
})
export class Practice06Component implements OnInit {

  display: boolean;
  name: string;

  constructor() { }

  ngOnInit() {
    this.display = true;
    this.name = 'Hide';
  }

  displayOrHide() {
    if (this.display) {
      this.display = false;
      this.name = 'Display';
    } else {
      this.display = true;
      this.name = 'Hide';
    }
  }

}
