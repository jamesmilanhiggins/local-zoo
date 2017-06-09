import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { AnimalAgePipe } from './animal-age.pipe';

import { AppComponent } from './app.component';
import { ListAnimalComponent } from './list-animal.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListAnimalComponent, EditAnimalComponent, NewAnimalComponent, AnimalAgePipe],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
