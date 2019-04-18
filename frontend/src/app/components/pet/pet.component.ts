import {Component, Input, OnInit} from '@angular/core';
import {Pet} from "../../models/Pet";
import {PetService} from "../../services/pet.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  currentPet: Pet;

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // console.log('id', params.get('id'))
      this.getOne(params.get('id'));
    })
  }

  getOne(id: string) {
    this.petService.getPet(id).subscribe(pet => {
      this.currentPet = pet
      console.log(this.currentPet);
    })
  }
}
