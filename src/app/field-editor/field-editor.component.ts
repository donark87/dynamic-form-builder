import { Component, EventEmitter, Input, Output, TrackByFunction } from '@angular/core';
import { FormField } from '../form-data.service';

@Component({
  selector: 'app-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.css']
})
export class FieldEditorComponent {
  @Input() field: FormField = {
    id: 0,
    label: '',
    type: 'text',
    placeholder: '',
    required: false,
    options: [], 
    defaultValue: ''
  };
  @Output() remove = new EventEmitter<void>();
  @Output() update = new EventEmitter<FormField>();

  validationErrors: string[] = [];

  // ngOnInit() {
  //   if (this.field.type === 'text') {
  //     this.field.minLength = this.field.minLength ?? 1;
  //     this.field.maxLength = this.field.maxLength ?? 1;
  //   }
  // }

  isOptionsField(): boolean {
    return this.field.type === 'dropdown' || this.field.type === 'radio';
  }

  addOption() {
    if (!this.field.options) {
      this.field.options = [];
    }
    this.field.options.push('');
  }

  removeOption(index: number) {
    if (this.field.options) {
      this.field.options.splice(index, 1);
    }
  }

  updateOption(index: number, value: string): void {
    if (this.field.options) {
      this.field.options[index] = value;
    }
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  validate() {
    this.validationErrors = [];

    if (this.field.type === 'text') {
      if (this.field.minLength !== undefined && this.field.maxLength !== undefined && this.field.minLength > this.field.maxLength) {
        this.validationErrors.push('Min Length cannot be greater than Max Length.');
      }
    }

    if (this.field.required && !this.field.label) {
      this.validationErrors.push('Label is required.');
    }
  

    // Add other validation rules as needed
  }
  getFieldType(): string {
    switch (this.field.type) {
      case 'text':
        return 'Text';
      case 'dropdown':
        return 'Dropdown Menu';
      case 'checkbox':
        return 'Checkbox Button';
      case 'radio':
        return 'Radio Button';
      default:
        return 'Unknown';
    }
  }
}
