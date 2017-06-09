import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'list-animal',
  template:`
  <h1>Animals ROUTE 4444TEST</h1>
  <div *ngFor="let animal of animals">
   <h2> Animal Details</h2>
   <p>{{animal.species}}</p>
   <p>{{animal.name}}</p>
   <p>{{animal.age}}</p>
   <p>{{animal.diet}}</p>
   <p>{{animal.location}}</p>
   <p>{{animal.caretakers}}</p>
   <p>{{animal.sex}}</p>
   <p>{{animal.like}}</p>
   <p>{{animal.dislike}}</p>
 </div>

  `
})

export class ListAnimalComponent {

}
