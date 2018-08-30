import {AbstractControl,ValodationErrors}  from '@angular/forms';

export class PriceValodators {
    
    static cannotContainSpace(control: AbstractControl) :ValidationErrors | null
    {
        if ((control.value as string ).indexOf(' ')>=0) {
            return {cannotContainSpace: true}
        }
            
        return null;
    }


    static cannotContainComma(control: AbstractControl) :ValidationErrors | null
    {
        if ((control.value as string ).indexOf(',')>=0) {
            return {cannotContainComma: true}
        }

        return null;
    }

    static cannotContainCharachters(control: AbstractControl) :ValidationErrors | null
    {
        let val = control.value;

        if(isNaN(val)) { 
            return {cannotContainCharachters:true}
        }
        return null;
    }
}