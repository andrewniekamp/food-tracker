import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe ({
  name: "caloric-assessment",
  pure: false
})

export class CaloricAssessmentPipe implements PipeTransform {
  transform(input: Food[], info) {
    var calorieAmt = info[0];
    var output: Food[] = [];
    for (var i= 0; i < input.length; i++) {
      if (input[i].calories < calorieAmt) {
          output.push(input[i]);
      }
    }
    return output;
  }
}
