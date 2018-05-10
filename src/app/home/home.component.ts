import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cards: Array<any> = [
    { text: 'Card 1'},
    { text: 'Card 2'},
    { text: 'Card 3'},
    { text: 'Card 4'},
    { text: 'Card 5'},
    { text: 'Card 6'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
