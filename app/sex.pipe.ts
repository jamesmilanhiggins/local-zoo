import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "sex",
  pure: false
})


export class SexPipe implements PipeTransform{
  transform(input: Animal[], sex){
    var output: Animal[] = [];
    if(sex === "male") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].sex === sex) {
          output.push(input[i]);
        }
      }
    return output;
  } else if (sex === "female") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].sex === sex) {
          output.push(input[i]);
        }
       }
       return output;
     } else {
       return input;
     }
   }
 }
