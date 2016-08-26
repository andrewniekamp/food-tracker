import { Component } from 'angular2/core';
import { Food } from './food.model'

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <div class="row content">
      <div class="col-sm-3">Name: {{ food.name }}</div>
      <div class="col-sm-3">Calories: {{ food.calories }}</div>
      <div class="col-sm-3">Description: {{ food.description }}</div>
      <div class="col-sm-3" class="btn btn-warning">Serve Pint</button></div>
    </div>
  `
})
export class FoodComponent {
  public food: Food;
}
