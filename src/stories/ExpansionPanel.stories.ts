// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';


import { moduleMetadata } from '@storybook/angular';

import { DemoMaterialModule } from 'src/app/material.module';

import { ExpansionPanelComponent } from 'src/app/expansion-panel/expansion-panel.component';


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Angular Material/Expansion Panel',
  component: ExpansionPanelComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    isProgressive: {control: 'boolean', table:{disable: true}}
  },
  decorators: [
    moduleMetadata({
      imports: [DemoMaterialModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ExpansionPanelComponent> = (args: ExpansionPanelComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  isProgressive: false
}
export const Progressive = Template.bind({});
Progressive.args = {
  isProgressive: true
}

