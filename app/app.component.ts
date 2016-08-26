import { Component } from 'angular2/core';
import { Food } from './food.model'
import { FoodListComponent } from './food-list.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
  <div class="container-fluid header">
    <img id="header-img" src="">
    <h1>Food tracker app</h1>
  </div>
  <div class="container">
    <food-list
      [foodList]="foods">
    </food-list>
  </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Burger", 600, "Big and greasy"),
      new Food("Egg salad", 200, "Somewhat healthy?"),
      new Food("Side salad", 30, "No dressing!")
    ];
  }
}
