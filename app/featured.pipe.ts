import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';


@Pipe({
  name: "featured",
  pure: false
})

export class FeaturedPipe implements PipeTransform {
//transform filters the tasks
  transform(input: Animal[], desiredFeatured) {
    var output: Animal[] = [];
    if(desiredFeatured === "nonfeaturedAnimals") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].featured === false) {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desiredFeatured === "featuredAnimals") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].featured === true){
         output.push(input[i]);
       }
     }
     return output;
    } else {
     return input;
    }
  }
}
