import { Component, OnInit } from '@angular/core';
import {Pet} from "../../models/Pet";
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Pet[];
  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
      console.log('getAllPets', pets);
    })
  }

  onDelete(petId) {
    this.petService.removePet(petId).subscribe( pet => {
      this.pets = this.pets.filter(pet => pet._id != petId);
      console.log('delete pet', pet)
    })
  }
}
