import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div>
      <div class="row form-row">
      <h3>Edit Food Item: </h3>
        <input [(ngModel)]="food.logDate" class="col-sm-4 input-lg food-form" placeholder="Date">
        <input [(ngModel)]="food.name" class="col-sm-3 input-lg food-form" placeholder="Name">
        <input [(ngModel)]="food.calories" class="col-sm-3 input-lg food-form" placeholder="Calories">
        <input [(ngModel)]="food.description" class="col-sm-2 input-lg food-form" placeholder="Description">
      </div>
    </div>
  `
})

export class EditFoodDetailsComponent {
  public food: Food;
}
