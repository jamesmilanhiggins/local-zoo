import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
   <h1>The Epicodus Zoo</h1>
  </div>
   <new-animal (newAnimalSender)="storeNewAnimal($event)"></new-animal>
   <hr>
   <edit-animal *ngIf="edit" [childAnimal]="selectedAnimal"></edit-animal>
   <hr>
   <list-animal [childAnimals]="animals" (editAnimalSender)="editAnimal($event)" (deleteAnimalSender)="deleteAnimal($event)"></list-animal>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 1, 'Carnivore', 'Northern Trail', 5, 'female', 'cool shade', 'loud noises'),
    new Animal('Giraffe', 'Stacie', 19, 'Herbivore', 'Plains', 4, 'female', 'plants', 'long neck jokes'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'male', 'Laying in the sunshine', 'toys that are not rope based'),
    new Animal('Polar Bear', 'Tiny', 15, 'Carnivore', 'Artic Blast', 2, 'male', 'Swimming', 'global warming'),
    new Animal('Lion', 'Simba', 1, 'Carnivore', 'The Desert', 5, 'male', 'Roaring', 'His uncle scar'),
    new Animal('Tiger', 'Tony', 3, 'Carnivore', 'The Jungle', 12, 'male', 'FROSTED FLAKES', 'not saying, THEYREE GREATTTT'),
    new Animal('Cheetah', 'Chester', 23, 'Herbivore', 'The Desert', 5, 'male', 'Cheetos', 'Doritos'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'female', 'Delicate roots and leaves', 'loud noises')
  ];

  edit: boolean = false;
  selectedAnimal = null;

  editAnimal(animal) {
    this.edit = true;
    this.selectedAnimal = animal;
  }
  storeNewAnimal(createdanimal) {
    this.animals.push(createdanimal);
  }
  deleteAnimal(animal) {
    var i = this.animals.indexOf(animal);
    this.animals.splice(i, 1);
  }
}
