// src/app/form-field.model.ts
export interface FormField {
    id: number;
    label: string;
    type: 'text' | 'dropdown' | 'checkbox' | 'radio'; 
    placeholder: string;
    required: boolean;
    options?: string[]; 
    defaultValue?: string;
    minLength?: number;
    maxLength?: number;
  }
  