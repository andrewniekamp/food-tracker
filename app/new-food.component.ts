import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';


@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="row form-row">
      <h3>Create Food:</h3>
      <div class="col-sm-4">
        <input placeholder="Name" class="input-field" #newName>
      </div>
      <div class="col-sm-4">
        <input type="number" placeholder="Calories" class="input-field" #newCalories>
      </div>
      <div class="col-sm-4">
        <input placeholder="Description" class="input-field" #newDescription>
      </div>
      <button (click)="addFood(newName, newCalories, newDescription)" class="btn add-button">Add</button>
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
