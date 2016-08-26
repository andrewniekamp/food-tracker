import { Component } from 'angular2/core';
import { Food } from './food.model'

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <div class="row content">
      <div class="col-sm-4">Name: {{ food.name }}</div>
      <div class="col-sm-4">Calories: {{ food.calories }}</div>
      <div class="col-sm-4">Description: {{ food.description }}</div>
    </div>
  `
})
export class FoodComponent {
  public food: Food;
}
