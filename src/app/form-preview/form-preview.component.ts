import { Component, Input } from '@angular/core';
import { FormField } from '../form-data.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent {
  @Input() fields: FormField[] = [];

  saveAsJson() {
    const dataStr = JSON.stringify(this.fields, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-preview.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }

  validateFields() {
    let isValid = true;
    let errors: string[] = [];

    this.fields.forEach(field => {
      if (!field.label) {
        errors.push(`Field with type '${field.type}' is missing a label.`);
        isValid = false;
      }

      if (field.type === 'text') {
        const minLength = field.minLength ?? 0;
        const maxLength = field.maxLength ?? 0;

        if (minLength > maxLength) {
          errors.push(`Field '${field.label}' has invalid min length and max length.`);
          isValid = false;
        }

        if (minLength < 1) {
          errors.push(`Field '${field.label}' has a minimum length that is less than the allowed value.`);
          isValid = false;
        }
        if (maxLength < 1) {
          errors.push(`Field '${field.label}' has a maximum length that is less than the allowed value.`);
          isValid = false;
        }
      }

      if (field.type === 'dropdown') {
        if (!field.options || field.options.length === 0) {
          errors.push(`Field dropdown requires options.`);
          isValid = false;
        } else {
          const uniqueOptions = new Set(field.options);
          if (uniqueOptions.size !== field.options.length) {
            errors.push(`Field '${field.label}' has duplicate options.`);
            isValid = false;
          }
        }
      }
      if (field.type === 'radio') {
        if (!field.options || field.options.length === 0) {
          errors.push(`Field '${field.label}' requires options.`);
          isValid = false;
        } else {
          const uniqueOptions = new Set(field.options);
          if (uniqueOptions.size !== field.options.length) {
            errors.push(`Field '${field.label}' has duplicate options.`);
            isValid = false;
          }
        }
      }
    });

    if (isValid) {
      alert('All fields are valid!');
    } else {
      alert('Validation errors:\n' + errors.join('\n'));
    }
  }
}
