import {Component, OnInit, ViewChild} from '@angular/core';
import {Pet} from "../../models/Pet";
import {PetService} from "../../services/pet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {
  isEdit: boolean = false;
  currentPet: Pet = {
    _id: '',
    name: '',
    type: '',
    description: '',
    skill1: '',
    skill2: '',
    skill3: '',
    likes: 0
  };
  @ViewChild('petForm') form: any;


  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
  }

  onCreate({value, valid}: { value: Pet, valid: boolean }) {
    // if form input is not valid, console the error
    console.log('value', value);
    if (!valid) {
      console.log('Form is not valid');
    } else {
      this.petService.addPet(value as Pet).subscribe( pet => {
        console.log('created a new pet',pet);
        this.router.navigateByUrl('/pets');
      });
      // reset the form
      // this.form.reset();
    }
  }
}