// app.component.ts
import { Component } from '@angular/core';
import { FormField } from './form-field.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fields: FormField[] = [];

  addField(field: FormField) {
    this.fields.push(field);
  }

  updateField(index: number, updatedField: FormField) {
    this.fields[index] = updatedField;
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
  }
}
