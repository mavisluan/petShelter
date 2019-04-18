import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetFormComponent} from "./components/pet-form/pet-form.component";
import {PetsComponent} from "./components/pets/pets.component";
import {PetComponent} from "./components/pet/pet.component";

// Create routes variable, type: Routes, structure: array
const routes: Routes = [
  // Add path and components for routing
  // {path: '', component: HomeComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'pets/new', component:PetFormComponent},
  {path: 'pets/:id', component: PetComponent},
  // pass data through routes
  {path: 'pets/:id/edit', component: PetFormComponent, data: {isEdit: true}},
  // {path: '**', component: NotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
