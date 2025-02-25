import { AbstractControl, ValidatorFn } from '@angular/forms';

export function pastDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today ? { past: true } : null;
  };
}
