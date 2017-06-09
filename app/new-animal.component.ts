import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `

  <label>Species:</label>
  <input #newSpecies type="text">
  <label>Name:</label>
  <input #newName>
  <label>Age:</label>
  <input #newAge>
  <label>Diet:</label>
  <input #newDiet>
  <label>Zoo Location:</label>
  <input #newLocation>
  <label>Number of Caretakers:</label>
  <input #newCaretaker>
  <label>Sex:</label>
  <input #newSex>
  <label>Like:</label>
  <input #newLike>
  <label>Dislike:</label>
  <input #newDislike>
  <button (click)="createAnimal(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newSex.value, newLike.value, newDislike.value)"> Add Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter;

  createAnimal(newSpecies, newName, newAge, newDiet, newLocation, newCaretaker, newSex, newLike, newDislike) {
    let createdAnimal = new Animal(newSpecies, newName, newAge, newDiet, newLocation, newCaretaker, newSex, newLike, newDislike)
    this.newAnimalSender.emit(createdAnimal);
  }

}
