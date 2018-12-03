import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice07',
  templateUrl: './practice07.component.html',
  styleUrls: ['./practice07.component.css']
})
export class Practice07Component implements OnInit {

  numbers: number[];
  password: number;
  secret: number;
  message: string;

  constructor() { }

  ngOnInit() {
    this.numbers = [];
    this.password = 0;
    this.secret = 7315;

    for (let i = 0; i < 10; i++) {
      this.numbers.push(i);
    }
  }

  key(n: number) {
    this.message = null;
    this.password = this.password * 10 + n;
  }

  check() {
    this.password === this.secret  ?  this.message = 'Welcome!' :  this.message = 'Wrong password!';
    this.password = 0;
  }

}
