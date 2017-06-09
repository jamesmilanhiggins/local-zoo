import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'list-animal',
  template:`
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
  <label>Feature Certain Animals</label>

  <select (change)="onChangeFeatured($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="featuredAnimals">Featured Animals</option>
    <option value="nonfeaturedAnimals">Non-Featured Animals</option>
  </select>

  <div *ngFor="let animal of childAnimals | age:filterByAge | sex:filterBySex | featured:filterByFeatured" >
    <div class="animal-div">


     <h3>Name: {{animal.name}}</h3>
     <label>Check to feature this animal</label>
     <input *ngIf="animal.featured === true" type="checkbox" checked (click)="toggleFeatured(animal, false)"/>
     <input *ngIf="animal.featured === false" type="checkbox" (click)="toggleFeatured(animal, true)"/>
     <p>Species: {{animal.species}}</p>
     <p>Age: {{animal.age}}</p>
     <p>Diet: {{animal.diet}}</p>
     <p>Location in the Zoo: {{animal.location}}</p>
     <p>Amount of Caretakers required: {{animal.caretakers}}</p>
     <p>Gender: {{animal.sex}}</p>
     <p>Likes: {{animal.like}}</p>
     <p>Dislikes: {{animal.dislike}}</p>
     <button class=" btn btn-warning btn-sm"(click)="editAnimal(animal)">Edit Animal</button>
     <button class="btn btn-danger btn-sm" (click)="deleteAnimal(animal)">Delete Animal</button>
     <hr>
   </div>
   <br>

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
