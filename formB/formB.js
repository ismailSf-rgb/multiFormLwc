import { LightningElement } from 'lwc';

export default class FormB extends LightningElement {

  errorMessage;

  constructor(context) {
    if(context.whatever) this.errorMessage = "vous ne pouvez pas contacter le siège"
  }

  getFields() {
    return [
      { label: 'Email', type: 'email', name: 'email' },
      { label: 'Subscribe', type: 'checkbox', name: 'subscribe' }
    ];
  }

  getWarning() {
    return 'pas de documents médicaux';
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
    //submit form B
  }

  postSubmit(formData) {
    //postSumbit logic
  }
}
