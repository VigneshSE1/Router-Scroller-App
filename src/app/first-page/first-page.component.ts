import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  items = [];

  constructor() {
    this.items.length = 20;
    this.items.fill(0);
   }

  ngOnInit(): void {
  }

}
