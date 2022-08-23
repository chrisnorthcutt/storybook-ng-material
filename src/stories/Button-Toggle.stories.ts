// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonToggleComponent } from 'src/app/button-toggle/button-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Angular Material/Button Toggle',
  component: ButtonToggleComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {

    selectMultiple: { control: 'boolean', table: {
      disable: true
    } },
    Options: { control: 'object' },
  },
  decorators: [
    moduleMetadata({
      imports: [MatButtonToggleModule,MatIconModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonToggleComponent> = (args: ButtonToggleComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {

  selectMultiple: false,
  Options:  ["Option 1", "Option 2", "Option 3"],
};
export const Multiple = Template.bind({});
Multiple.args = {

  selectMultiple: true,
  Options:  ["Option 1", "Option 2", "Option 3"],
};




