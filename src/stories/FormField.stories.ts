// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormFieldComponent } from 'src/app/form-field/form-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { moduleMetadata } from '@storybook/angular';
import { previewTemplate, DEFAULT_ANGULAR_CODESANDBOX } from 'storybook-addon-preview';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Form Field',
  component: FormFieldComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    Label: { control: 'text' },
    Hint: { control: 'text' },
    Type: { control: 'select', options: ['input', 'inputSelect', 'inputTextArea', 'inputForm', 'inputDate'], table: {disable: true} },
   
  },
  decorators: [
    moduleMetadata({
      imports: [MatFormFieldModule,MatInputModule,MatIconModule,MatSelectModule,BrowserAnimationsModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<FormFieldComponent> = (args: FormFieldComponent) => ({
  props: args,
});

export const Input = Template.bind({});
Input.args = {
  Label: 'Amount',
  Hint: 'Hint',
  Type: 'input'
 
};
export const TextArea = Template.bind({});
TextArea.args = {
  Label: 'Amount',
  Hint: 'Hint',
  Type: 'inputTextArea'
 
};
export const Select = Template.bind({});
Select.args = {
  Label: 'Amount',
  Hint: 'Hint',
  Type: 'inputSelect'
 
};
export const Form = Template.bind({});
Form.args = {
  Label: 'Amount',
  Hint: 'Hint',
  Type: 'inputForm'
 
};
export const DatePicker = Template.bind({});
DatePicker.args = {
  Label: 'Amount',
  Hint: 'Hint',
  Type: 'inputDate'
 
};







function ANGULAR_PROPS_TEMPLATE(arg0: string[], arg1: { indent: number; }): any {
  throw new Error('Function not implemented.');
}

