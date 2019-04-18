import {Component, OnInit, ViewChild} from '@angular/core';
import {Pet} from "../../models/Pet";
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  currentPet: Pet = {
      _id: '',
      name: 'pet10',
      type: 'dog',
      description: 'Cute',
      skill1: 'swim',
      skill2: 'hug',
      skill3: 'fetch',
      likes: 15
  };
  pets: Pet[];
  state: string;

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
      // console.log('getAllPets', pets);
    })
  }

  onDelete(petId) {
    this.petService.removePet(petId).subscribe( pet => {
      this.pets = this.pets.filter(pet => pet._id != petId);
      console.log('delete pet', pet)
    })
  }

  // onShowOne( petId: string ) {
  //   this.petService.getPet(petId).subscribe(pet => {
  //     // this.currentPet = pet;
  //     // console.log(this.currentPet)
  //     this.state = 'show';
  //   })
  // }
}
