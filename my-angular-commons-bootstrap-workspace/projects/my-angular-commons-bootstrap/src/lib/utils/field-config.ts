import { ValidatorFn, Validators } from '@angular/forms';

export class FieldConfig {
    name = "";
    displayText = "";
    // showOnList: boolean = false;
    // validators: ValidatorFn[] = [];
    sortHeader: boolean = false;
    // values: any[] = [];
    valueTransformer = (value: any) => { return value };
    style = (value: any) => {return {}};
}