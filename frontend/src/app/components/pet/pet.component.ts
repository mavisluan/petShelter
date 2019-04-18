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
  hide: boolean = false;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // read id from route params
    this.route.paramMap.subscribe(params => {
      this.getPet(params.get('id'));
    })
  }

  getPet(id: string) {
    this.petService.getPet(id).subscribe(pet => {
      this.currentPet = pet
    })
  }

  likePet(pet: Pet) {
    pet.likes = (!pet.likes ? 1: pet.likes + 1 );
    this.petService.updatePet(pet).subscribe(pet => {
      this.currentPet = pet;
      this.hide = true;
    })
  }

  removePet(id: string) {
    this.petService.removePet(id).subscribe(pet => {
      this.router.navigateByUrl('/pets');
    })
  }
}
