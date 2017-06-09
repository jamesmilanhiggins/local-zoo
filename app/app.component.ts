import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
   <h1>Portland Zoo</h1>
   <list-animal [childAnimals]="animals" (editAnimalSender)="editAnimal($event)"></list-animal>
   <edit-animal *ngIf="edit" [childAnimal]="selectedAnimal"></edit-animal>
   <new-animal (newAnimalSender)="storeNewAnimal($event)"></new-animal>

  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'cool shade', 'loud noises'),
    new Animal('Arctic Fox2', 'Moon2', 22, 'Carnivore2', 'Northern Trail2', 52, 'Female2', 'cool shade2', 'loud noises2'),
    new Animal('Arctic Fox3', 'Moon3', 23, 'Carnivore3', 'Northern Trail3', 53, 'Female3', 'cool shade3', 'loud noises3')
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

}
