import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe ({
  name: "caloric",
  pure: false
})

export class CaloricAssessmentPipe implements PipeTransform {
  transform(input: Food[], info) {
    var threshold = info[0].value;
    var calorieAmt = info[1].value;
    var output: Food[] = [];

    if (threshold === 'under') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < calorieAmt) {
            output.push(input[i]);
        }
      }
      return output;
    } else if (threshold === 'over') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > calorieAmt) {
            output.push(input[i]);
        }
        return output;
      }
    } else {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    }
  }
}
