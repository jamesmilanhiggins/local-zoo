import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';



import { AppComponent } from './app.component';
import { ListAnimalComponent } from './list-animal.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListAnimalComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
