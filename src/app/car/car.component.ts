import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
    <h2>Single Page</h2>
  `,//'./car.component.html',
  // styleUrls: ['./car.component.css']
  styles: [`
    h2 {
      color: red;
    }
  `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
