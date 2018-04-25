import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './custom.validator';

@Component({
  selector: 'reactive-validations',
  templateUrl: "reactive.html",
})
export class ReactiveComponent {
  @Input() name: string;

  form: FormGroup;

  /* Applying validations manually using code */
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        // Custom validator!!
        UsernameValidator.cannotContainSpace,
        // NB: this is async validtor!!
      ],  UsernameValidator.userNameTaken)
    });
  }

  get userName(){
    return this.form.get("userName");
  }

}
