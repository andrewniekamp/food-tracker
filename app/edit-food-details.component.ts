import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div>
      <div class="row form-row">
      <h3>Edit Food Item: </h3>
        <input [(ngModel)]="food.logDate" class="col-sm-4 input-field" placeholder="Date">
        <input [(ngModel)]="food.name" class="col-sm-3 input-field" placeholder="Name">
        <input [(ngModel)]="food.calories" class="col-sm-3 input-field" placeholder="Calories">
        <input [(ngModel)]="food.description" class="col-sm-2 input-field" placeholder="Description">
      </div>
    </div>
  `
})

export class EditFoodDetailsComponent {
  public food: Food;
}
