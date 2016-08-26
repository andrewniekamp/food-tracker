import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div>
      <div class="row form-row">
      <h3>Edit Food Item: </h3>
        <input [(ngModel)]="food.name" class="col-xs-4 input-lg food-form">
        <input [(ngModel)]="food.calories" class="col-xs-4 input-lg food-form">
        <input [(ngModel)]="food.description" class="col-xs-4 input-lg food-form"b>
      </div>
    </div>
  `
})

export class EditFoodDetailsComponent {
  public food: Food;
}
