import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .active {
      color: #FFF !important;
    }
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
