import { Component } from 'angular2/core';
import { Food } from './food.model'

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <div class="row content food-items">
      <div class="col-sm-3"><span class="small">Date: </span><p>{{ food.logDate }}</p></div>
      <div class="col-sm-3"><span class="small">Name: </span><p>{{ food.name }}</p></div>
      <div class="col-sm-2"><span class="small">Calories: </span><p>{{ food.calories }}</p></div>
      <div class="col-sm-4"><span class="small">Description: </span><p>{{ food.description }}</p></div>
    </div>
  `
})
export class FoodComponent {
  public food: Food;
}
