# Dynamic Form Builder

## Overview

This Angular application allows users to dynamically create custom forms. The application provides an interface for adding, removing, and configuring form fields, including text inputs, dropdowns, checkboxes, and radio buttons.

## Features

- **User-Friendly Interface**: Easily add, remove, and rearrange form fields.
- **Configurable Form Fields**: Set properties like label, placeholder, validation rules, and options for each form field.
- **Real-Time Form Preview**: See the form as you build it.
- **Data Management**: Export and import form configurations as JSON files.

## Getting Started

1. **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd dynamic-form-builder
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    ng serve
    ```

4. **Open the application**:
    Open your browser and navigate to `http://localhost:4200`.

## Components

- **FormBuilderComponent**: Main interface for form building.
- **FieldEditorComponent**: Interface for configuring field properties.
- **FormPreviewComponent**: Displays the current state of the form.

## Data Management

Form configurations are stored in JSON format. Users can export and import these configurations for reuse.

## Angular 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
