import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div>
      <h3>Edit Food Item: </h3>
      <div class="row form-row">
        <div class="col-sm-3">
          <input [(ngModel)]="food.logDate" class="input-field" placeholder="Date">
        </div>
        <div class="col-sm-3">
          <input [(ngModel)]="food.name" class="input-field" placeholder="Name">
        </div>
        <div class="col-sm-2">
          <input [(ngModel)]="food.calories" class="input-field" placeholder="Calories">
        </div>
        <div class="col-sm-4">
          <input [(ngModel)]="food.description" class="input-field" placeholder="Description">
        </div>
      </div>
    </div>
  `
})

export class EditFoodDetailsComponent {
  public food: Food;
}
