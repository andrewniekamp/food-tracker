import { Component } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component'
import { CaloricAssessmentPipe } from './caloric-assessment.pipe';
import { EditFoodDetailsComponent } from './edit-food-details.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  pipes: [CaloricAssessmentPipe],
  directives: [FoodComponent, NewFoodComponent, EditFoodDetailsComponent],
  template: `
  <label>Filter by Calories (Default is 500):
    <input value="500" #calorieFilterAmt/>
    <select class="filter" #selectValue>
      <option selected value="all">Show All</option>
      <option value="under">Under</option>
      <option value="over">Over</option>
    </select>
    <button (click)="onFilterClick(selectValue)">Filter</button>
  </label>
  <div class="row header-row">
    <div class="col-xs-3"><h3>Date</h3></div>
    <div class="col-xs-3"><h3>Name</h3></div>
    <div class="col-xs-2"><h3>Calories</h3></div>
    <div class="col-xs-4"><h3>Description</h3></div>
  </div>
  <food-display *ngFor="#currentFood of foodList | caloric: threshold:calorieFilterAmt"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>
  <edit-food-details *ngIf="selectedFood" [food]="selectedFood"></edit-food-details>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public threshold: string = "all";
  createFood(food) {
    this.foodList.push(
      new Food(food.name, food.calories, food.description)
    )
    console.log(food);
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
  }
  onFilterClick(optionFromMenu) {
    this.threshold = optionFromMenu;
  }
}
