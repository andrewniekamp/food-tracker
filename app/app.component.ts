import { Component } from 'angular2/core';
import { Food } from './food.model'
import { FoodListComponent } from './food-list.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
  <div class="total-wrapper">
    <div class="container-fluid header">
      <img id="header-img" src="">
      <h1>Food tracker app</h1>
    </div>
    <div class="transparency">
      <div class="container content-body">
        <food-list
          [foodList]="foods">
        </food-list>
      </div>
    </div>
  </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Egg", 84, "Boiled"),
      new Food("Bacon", 250, "5 slices"),
      new Food("Orange Juice", 220, "16 ounces"),
      new Food("Carrots", 50, "1 cup"),
      new Food("Side salad", 30, "No dressing!"),
      new Food("Palak Paneer", 320, "Trader Joe's (both servings)"),
      new Food("Egg salad", 300, "1/2 cup... somewhat healthy?"),
      new Food("Deluxe Burger", 540, "Dick's Drive-In"),
      new Food("Ice Cream Sandwich", 160, "Thanks, Russ!"),
      new Food("Smart Food Popcorn", 1840, "Party Size - ate entire bag..."),
    ];
    this.foods[0].logDate = "06:10 on 8/25/2016";
    this.foods[1].logDate = "06:10 on 8/25/2016";
    this.foods[2].logDate = "06:10 on 8/25/2016";
    this.foods[3].logDate = "08:55 on 8/25/2016";
    this.foods[4].logDate = "12:15 on 8/25/2016";
    this.foods[5].logDate = "12:15 on 8/25/2016";
    this.foods[6].logDate = "15:20 on 8/25/2016";
    this.foods[7].logDate = "17:35 on 8/25/2016";
    this.foods[8].logDate = "17:35 on 8/25/2016";
    this.foods[9].logDate = "23:50 on 8/25/2016";
  }
}
