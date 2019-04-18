import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './components/pets/pets.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PetService} from "./services/pet.service";
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { PetComponent } from './components/pet/pet.component';
import { ValidateUniqueNameDirective } from './validator/validate-unique-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetFormComponent,
    PetComponent,
    ValidateUniqueNameDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
