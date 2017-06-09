import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `

  <div class="new-animal-form">
    <label>Species:</label>
    <input class="form-control" #newSpecies type="text">
    <label>Name:</label>
    <input class="form-control" #newName>
    <label>Age:</label>
    <input class="form-control" #newAge>
    <label>Diet:</label>
    <input class="form-control" #newDiet>
    <label>Zoo Location:</label>
    <input class="form-control" #newLocation>
    <label>Number of Caretakers:</label>
    <input class="form-control" #newCaretaker>
    <label>Sex:</label>
    <input class="form-control" #newSex placeholder="male or female">
    <label>Like:</label>
    <input class="form-control" #newLike>
    <label>Dislike:</label>
    <input class="form-control" #newDislike><br>
    <button class="btn btn-primary btn-sm"(click)="createAnimal(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newSex.value, newLike.value, newDislike.value)"> Add Animal</button><hr>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter;

  createAnimal(newSpecies, newName, newAge, newDiet, newLocation, newCaretaker, newSex, newLike, newDislike) {
    let createdAnimal = new Animal(newSpecies, newName, newAge, newDiet, newLocation, newCaretaker, newSex, newLike, newDislike)
    this.newAnimalSender.emit(createdAnimal);
  }

}
