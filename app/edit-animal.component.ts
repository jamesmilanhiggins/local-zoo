import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'edit-animal',
  template: `
  <h1>EDIT COMPONENT LINKING TEST</h1>
  <label>Species:</label>
  <input [(ngModel)]="childAnimal.species" name="species">
  <label>Name:</label>
  <input [(ngModel)]="childAnimal.name" name="name">
  <label>Age:</label>
  <input [(ngModel)]="childAnimal.age" name="age">
  <label>Diet:</label>
  <input [(ngModel)]="childAnimal.diet" name="ddiet">
  <label>Zoo Location:</label>
  <input [(ngModel)]="childAnimal.location" name="location">
  <label>Number of Caretakers:</label>
  <input [(ngModel)]="childAnimal.caretakers" name="caretakers">
  <label>Sex:</label>
  <input [(ngModel)]="childAnimal.sex" name="sex">
  <label>Like:</label>
  <input [(ngModel)]="childAnimal.like" name="like">
  <label>Dislike:</label>
  <input [(ngModel)]="childAnimal.dislike" name="dislike">
  `
})


export class EditAnimalComponent {
@Input() childAnimal: Animal;
}
