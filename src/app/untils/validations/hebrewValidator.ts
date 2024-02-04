import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function hebrewValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const hebrewRegex = /^[\u0590-\u05FF\s]+$/; // Hebrew characters and spaces

    if (!hebrewRegex.test(control.value)) {
      return { 'hebrewInvalid': true };
    }

    return null;
  };
}
