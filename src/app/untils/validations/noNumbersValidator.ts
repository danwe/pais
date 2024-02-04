import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value && /\d/.test(value)) {
      // If the value contains a number, return an error
      return { containsNumber: true };
    }

    // Otherwise, the validation passes
    return null;
  };
}
