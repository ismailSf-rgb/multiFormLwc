import { LightningElement } from 'lwc';

export default class FormA extends LightningElement {

  errorMessage;

  constructor(context) {
    if(context.whatever) this.errorMessage = "vous ne pouvez pas contacter le siège"
  }

  getFields() {
    return [
      { label: 'First Name', type: 'text', name: 'firstName' },
      { label: 'Age', type: 'number', name: 'age' }
    ];
  }

  getWarning() {
    return 'Make sure to enter a valid age above 18 for Form A.';
  }

  getErrorMessage() {
    return this.errorMessage;
  }

  handleChange({name, value}) {
    //logic when handling changes
  }

  validate(formData) {
    //validation logic
  }

  submit(formData, fields) {
    //submit form A
  }

  postSubmit(formData) {
    //postSumbit logic
  }
}
