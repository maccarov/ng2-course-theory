import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  
  addCarStatus = '';
  inputText = 'Default text';

  constructor(){
  }

  addCar () {
    this.addCarStatus = 'Машина добавлена';
  }

  onKeyUp(event){
    this.inputText = event.target.value;
  }
}
