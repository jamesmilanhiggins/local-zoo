import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'list-animal',
  template:`
  <h1>Animals ROUTE 4444TEST</h1>
  <div *ngFor="let animal of childAnimals">
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
   <button (click)="editAnimal(animal)">Edit Animal</button>
   <button (click)="deleteAnimal(animal)">Delete Animal</button>
 </div>

  `
})

export class ListAnimalComponent {
  @Input() childAnimals: Animal[];
  @Output() editAnimalSender = new EventEmitter;
  @Output() deleteAnimalSender = new EventEmitter;

  editAnimal(animal) {
    this.editAnimalSender.emit(animal);
  }
  deleteAnimal(animal) {
    this.deleteAnimalSender.emit(animal);
  }
}
