import { Component } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component'
import { CaloricAssessmentPipe } from './caloric-assessment.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  pipes: [CaloricAssessmentPipe],
  directives: [FoodComponent, NewFoodComponent],
  template: `
  <label>Filter by Calories:
    <select (change)="onChange($event.target.value)" class="filter">
      <option selected value="all">Show All</option>
      <option value="under">Under</option>
      <option value="over">Over</option>
    </select>
  </label>
  <div class="row header-row">
    <div class="col-xs-4"><h3>Name</h3></div>
    <div class="col-xs-4"><h3>Calories</h3></div>
    <div class="col-xs-4"><h3>Description</h3></div>
  </div>
  <food-display *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentKeg === selectedKeg"
    [food]="currentFood">
  </food-display>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public selectedCalories: string = "all";
  createFood(food) {
    this.foodList.push(
      new Food(food.name, food.calories, food.description)
    )
    console.log(food);
  }
  foodClicked(clickedFood: Food): void {
    console.log("child", clickedFood);
    this.selectedFood = clickedFood;
  }
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
}
