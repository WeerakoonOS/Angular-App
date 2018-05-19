import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgUrl = '../../assets/logo.png';
  sentence = 'I love angular';
  changeMe() {
    // tslint:disable-next-line:quotemark
    this.sentence = 'But it is hard to learn';
  }
  constructor() { }

  ngOnInit() {
  }

}
