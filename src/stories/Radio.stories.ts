// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RadioComponent } from '../app/radio/radio.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { previewTemplate, DEFAULT_ANGULAR_CODESANDBOX } from 'storybook-addon-preview';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Selection Controls',
  component: RadioComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    Label: { control: 'text' },
    labelPos: { control: 'select', name:'labelPosition', options: ['before', 'after'] },
    Type: { control: 'select', options: ['radio', 'checkbox','toggle'], table: {disable: true} },
    subTasks: {control: 'object'}
   
  },
  decorators: [
    moduleMetadata({
      imports: [MatRadioModule,MatIconModule,MatCheckboxModule,MatSlideToggleModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<RadioComponent> = (args: RadioComponent) => ({
  props: args,
});

export const Radio = Template.bind({});
Radio.args = {
  Label: 'Option',
  labelPos: 'after',
  Type: 'radio'
 
};
export const Checkbox = Template.bind({});
Checkbox.args = {
  Label: 'Option',
  labelPos: 'after',
  Type: 'checkbox',
  subTasks: ['1', '2', '3']
};
export const SlideToggle = Template.bind({});
SlideToggle.args = {
  Label: 'Option',
  labelPos: 'after',
  Type: 'toggle'
};






function ANGULAR_PROPS_TEMPLATE(arg0: string[], arg1: { indent: number; }): any {
  throw new Error('Function not implemented.');
}

