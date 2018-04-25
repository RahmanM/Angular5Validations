import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AsyncValidatorFn } from '@angular/forms';

export class UsernameValidator {
  static cannotContainSpace(c: AbstractControl): ValidationErrors | null {

    if ((c.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }

    return null;
  }

  static userNameTaken(c: AbstractControl): Promise<ValidationErrors | null> | null {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(c.value, "username");
        if (c.value === "rahmanm") {
          resolve({ userNameTaken: true });
        } else {
          resolve(null);
        }
      }, 2000)
    });


  }

}