import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';


@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class='food-form'>
      <div class="row form-row">
        <h3>Create Food:</h3>
        <input placeholder="Name" class="col-xs-4 input-lg" #newName>
        <input placeholder="Calories" class="col-xs-4 input-lg" #newCalories>
        <input placeholder="Description" class="col-xs-1 input-lg" #newDescription>
        <button (click)="addFood(newName, newCalories, newDescription)" class="btn btn-success btn-lg add-button">Add</button>
      </div>
    </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(newName: HTMLInputElement, newCalories: HTMLInputElement, newDescription: HTMLInputElement) {
    this.onSubmitNewFood.emit({newName: newName.value, newCalories: newCalories.value, newDescription: newDescription.value});
    newName.value = "";
    newCalories.value = "";
    newDescription.value = "";
  }
}
