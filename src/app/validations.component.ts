import { Component, Input } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'validations',
  templateUrl: "validations.html",
})
export class ValidationComponent {
  @Input() name: string;

  logForm(f) {
    console.log(f);
  }

  logEmail(e) {
    console.log(e);
  }

}
