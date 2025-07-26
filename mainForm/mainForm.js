import { LightningElement, track } from 'lwc';
import { createFormController } from 'c/formControllerFactory';
import FormTypeSelector from 'c/formTypeSelector';

export default class MainForm extends LightningElement {
  @track fields = [];
  @track controller = {};
  @track formData = {};
  warning = '';
  error = '';

  connectedCallback() {
    //logic to fetch configProduit
    const conf = {}
    //define the context
    const context = { typeConfig: 'SouscriptionOpp'}; // Simulated context
    //define the type through the context
    const type = FormTypeSelector.getFormType(context);
    //define the controller through the type
    this.controller = createFormController(type, context);
    this.fields = this.controller.getFields();
    this.warning = this.controller.getWarning(); // 💡 Get the warning
    this.error = this.controller.getError();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.formData[name] = value;
    this.controller.handleChange({name, value});
  }

  handleSubmit() {
    const isValid = this.controller.validate(this.formData);
    console.log('Validation result:', isValid);
    if(isValid) {
      this.controller.submit(this.formData, this.fields);
      this.controller.postSubmit(this.formData);
    }

    
  }
}
