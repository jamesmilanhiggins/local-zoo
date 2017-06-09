import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'edit-animal',
  template: `
  <div class="new-animal-form">
  <h3>Edit This Animal's Info</h3>
    <label>Species:</label>
    <input class="form-control" [(ngModel)]="childAnimal.species" name="species">
    <label>Name:</label>
    <input class="form-control" [(ngModel)]="childAnimal.name" name="name">
    <label>Age:</label>
    <input class="form-control" [(ngModel)]="childAnimal.age" name="age">
    <label>Diet:</label>
    <input class="form-control" [(ngModel)]="childAnimal.diet" name="diet">
    <label>Zoo Location:</label>
    <input class="form-control" [(ngModel)]="childAnimal.location" name="location">
    <label>Number of Caretakers:</label>
    <input class="form-control" [(ngModel)]="childAnimal.caretakers" name="caretakers">
    <label>Sex:</label>
    <input class="form-control" [(ngModel)]="childAnimal.sex" name="sex">
    <label>Like:</label>
    <input class="form-control" [(ngModel)]="childAnimal.like" name="like">
    <label>Dislike:</label>
    <input class="form-control" [(ngModel)]="childAnimal.dislike" name="dislike">
  </div>
  `
})


export class EditAnimalComponent {
@Input() childAnimal: Animal;
}
