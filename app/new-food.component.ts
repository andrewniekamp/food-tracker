import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';


@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class='food-form'>
      <div class="row form-row">
        <h3>Create Food:</h3>
        <input placeholder="Name" class="col-sm-4 input-field" #newName>
        <input placeholder="Calories" class="col-sm-4 input-field" #newCalories>
        <input placeholder="Description" class="col-sm-4 input-field" #newDescription>
        <button (click)="addFood(newName, newCalories, newDescription)" class="btn add-button">Add</button>
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
    this.onSubmitNewFood.emit({name: newName.value, calories: newCalories.value, description: newDescription.value});
    newName.value = "";
    newCalories.value = "";
    newDescription.value = "";
  }
}
