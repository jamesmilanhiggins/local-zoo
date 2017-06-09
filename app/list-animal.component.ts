import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'list-animal',
  template:`
  <h1>Animals ROUTE 4444TEST</h1>
  <label>Filter Animals by Age</label>
  <select (change)="onChangeAge($event.target.value)">
    <option value="allAges" selected="selected"> All Ages</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="matureAnimals">Mature</option>
  </select>
  <label>Filter Animals by Gender</label>
  <select (change)="onChangeSex($event.target.value)">
    <option value="allGenders" selected="selected"> All Genders</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <select (change)="onChangeFeatured($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="featuredAnimals">Featured Animals</option>
    <option value="nonfeaturedAnimals" selected="selected">Non-Featured Animals</option>
  </select>

  <div *ngFor="let animal of childAnimals | age:filterByAge | sex:filterBySex | featured:filterByFeatured" >
   <h2> Animal Details</h2>
   <label>Click to faeture this animal</label>
   <input *ngIf="animal.featured === true" type="checkbox" checked (click)="toggleFeatured(animal, false)"/>
   <input *ngIf="animal.featured === false" type="checkbox" (click)="toggleFeatured(animal, true)"/>

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

filterByAge: string = "allAges";
filterBySex: string = "allGenders";
filterByFeatured: string = "allAnimals";

  editAnimal(animal) {
    this.editAnimalSender.emit(animal);
  }
  deleteAnimal(animal) {
    this.deleteAnimalSender.emit(animal);
  }
  onChangeAge(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
  onChangeSex(optionFromMenu) {
    this.filterBySex = optionFromMenu;
  }
  onChangeFeatured(optionFromMenu) {
    this.filterByFeatured = optionFromMenu;
  }
  toggleFeatured(animal: Animal, setFeatured: boolean) {
    animal.featured = setFeatured;
  }
 }
