import { Component } from 'angular2/core';
import { Food } from './food.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container-fluid header">
    <img id="header-img" src="">
    <h1>Food tracker app</h1>
  </div>
  <div class="container">
    <food-list
      [foodList]="foods"
      (onFoodSelect)="foodWasSelected($event)">
    </food-list>
  </div>
  `
})
export class AppComponent {
  public food: Food[];
  constructor(){
    this.food = [
      new Food("Dragon's Blood Vermillion Ale", 8, "6.5%"),
      new Food("Excalibur", 9, "7%"),
      new Food("Griffin Sweat Pale Ale", 1, "14.5%"),
      new Food("Eye of Newt Brew", 5, "12.5%"),
      new Food("Shady Brownie Ale", 2, "3.5%")
    ];
  }
}
