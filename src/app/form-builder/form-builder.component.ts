import { Component } from '@angular/core';
import { FormDataService, FormField } from '../form-data.service';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  fields$ = this.formDataService.fields$;
  fields: FormField[] = [];

  constructor(private formDataService: FormDataService) {}

  addField(type: string) {
    const newField: FormField = {
      id: 0,
      label: '',
      type,
      placeholder: '',
      required: false,
      options: type === 'dropdown' || type === 'radio' ? [] : undefined,
      defaultValue: ''
    };
    this.formDataService.addField(newField);
  }

  removeField(id: number) {
    this.formDataService.removeField(id);
  }

  updateField(id: number, field: FormField) {
    this.formDataService.updateField(id, field);
  }
}
