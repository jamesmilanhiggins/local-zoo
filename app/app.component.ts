import { Component } from '@angular/core';
// import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
   <h1>Portland Zoo</h1>
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

export class AppComponent {
  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'cool shade', 'loud noises')
  ];

}

export class Animal {
  constructor (public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public like: string, public dislike: string) {}
}
