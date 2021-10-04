import { AbstractControl, FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustUnique(controlName: string) {
    return (group: AbstractControl) => {
        const formGroup = <FormGroup>group;
        const control = formGroup.controls[controlName];


        if (control.errors && !control.errors.MustUnique) {
            // return if another validator has already found an error on the matchingControl
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== control.value) {
            control.setErrors({ mustMatch: true });
        } else {
            control.setErrors(null);
        }

        return null;
    }
}