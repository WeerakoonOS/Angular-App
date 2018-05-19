import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public cards: Array<any> = [
    { id: 1, text: 'Card 1'},
    { id: 2, text: 'Card 2'},
    { id: 3, text: 'Card 3'},
    { id: 4, text: 'Card 4'},
    { id: 5, text: 'Card 5'},
    { id: 6, text: 'Card 6'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
