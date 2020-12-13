import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  items = [];

  constructor() {
    this.items.length = 20;
    this.items.fill(0);
   }
  ngOnInit(): void {
  }

}
