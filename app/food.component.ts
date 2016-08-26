import { Component } from 'angular2/core';
import { Food } from './food.model'

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <div class="row content">
      <div class="col-sm-3">
      Entered at {{ food.logDate.getHours() }}:{{ food.logDate.getMinutes() }}:{{ food.logDate.getSeconds() }}
      on
      {{ food.logDate.getUTCMonth() + 1 }}/{{ food.logDate.getUTCDate() }}/{{ food.logDate.getUTCFullYear() }}
      </div>
      <div class="col-sm-3">Name: {{ food.name }}</div>
      <div class="col-sm-2">Calories: {{ food.calories }}</div>
      <div class="col-sm-4">Description: {{ food.description }}</div>
    </div>
  `
})
export class FoodComponent {
  public food: Food;
}
