import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface FormField {
  id: number;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  options?: string[];
  defaultValue?: any;
}

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private fieldsSubject = new BehaviorSubject<FormField[]>([]);
  fields$ = this.fieldsSubject.asObservable();

  private fields: FormField[] = [];

  constructor() { }

  addField(field: FormField) {
    this.fields.push({ ...field, id: this.fields.length });
    this.fieldsSubject.next(this.fields);
  }

  updateField(id: number, updatedField: FormField) {
    const index = this.fields.findIndex(field => field.id === id);
    if (index !== -1) {
      this.fields[index] = updatedField;
      this.fieldsSubject.next(this.fields);
    }
  }

  removeField(id: number) {
    this.fields = this.fields.filter(field => field.id !== id);
    this.fieldsSubject.next(this.fields);
  }

  getFields() {
    return this.fields;
  }
}
