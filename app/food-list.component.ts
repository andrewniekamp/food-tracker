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
  <div class="padding-box">
    <div class="top-wrapper row">
      <div class="col-sm-5">
        <p>Filter by Calories (Default is 500)</p>
        <input id="cal-input" class="input-field" value="500" #calorieFilterAmt/>
      </div>
      <div class="col-sm-4">
        <p>Choose Parameter</p>
        <select class="input-field" #selectValue>
          <option selected value="all">Show All</option>
          <option value="under">Under</option>
          <option value="over">Over</option>
        </select>
      </div>
      <div class="col-sm-3">
        <p>Apply Filter:</p>
        <button class="btn filter-button" (click)="onFilterClick(selectValue)">Filter</button>
      </div>
    </div>
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
  </div>
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
