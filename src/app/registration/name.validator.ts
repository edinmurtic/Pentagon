import {AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function nameValidator(): ValidatorFn
{
  return (control: AbstractControl ): ValidationErrors | null =>
  {
    const nameIsCorrect =
    control.value.split(' ').filter(np=> np != '').length >1;
    return nameIsCorrect ? null: { incorrectName: true};
  };
}
