import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {PetService} from "../services/pet.service";
import {map} from "rxjs/operators";

@Directive({
  selector: '[uniqueName]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: ValidateUniqueNameDirective, multi: true}]
})
export class ValidateUniqueNameDirective implements AsyncValidator{

  constructor(private petService: PetService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.petService.getPetByName(control.value).pipe(
      map(res => {
        console.log(res);
        return res ? null : {uniqueName: true};
        // return res.uniqueName ? null : {uniqueName: true}
      })
    )
  }
}
