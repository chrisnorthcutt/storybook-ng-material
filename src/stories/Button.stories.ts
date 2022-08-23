// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../app/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Angular Material/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    Label: { control: 'text' },
    Type: { control: 'select', options: ['mat-raised-button', 'mat-stroked-button', 'mat-button'], table: {disable: true} },
    Disabled: {control: 'boolean'},
    iconLeft: {control: 'boolean'},
    iconRight: {control: 'boolean'}
  },
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule,MatIconModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  Label: 'Primary',
  Type: 'mat-raised-button',
  Disabled: false,
  iconLeft: false,
  iconRight: false
};
export const Secondary = Template.bind({});
Secondary.args = {
  Label: 'Secondary',
  Type: 'mat-stroked-button',
  Disabled: false,
  iconLeft: false,
  iconRight: false
};
export const Action = Template.bind({});
Action.args = {
  Label: 'Action',
  Type: 'mat-button',
  Disabled: false,
  iconLeft: false,
  iconRight: false
};


