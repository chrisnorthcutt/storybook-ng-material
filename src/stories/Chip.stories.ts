// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { moduleMetadata } from '@storybook/angular';

import { ChipListComponent } from 'src/app/chip-list/chip-list.component';

//@ts-ignore
import ChipsDocumentation from './Chips-Documentation.mdx'
import { DemoMaterialModule } from 'src/app/material.module';


//@ts-ignore


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Angular Material/Chips',
  component: ChipListComponent,

  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    Type: { control: 'select', options: ['basic', 'input', 'drag'], table: {disable: true} },  },
    
  decorators: [
    moduleMetadata({
      imports: [DemoMaterialModule],
    }),
  ],
  parameters: {
    docs: {
      page: ChipsDocumentation,
    },
  },
  
} as Meta;

const ListTemplate: Story<ChipListComponent> = (args: ChipListComponent) => ({

  props: args,
});

export const Basic = ListTemplate.bind({});
Basic.args = {
  Type: 'basic'
}


export const Drag = ListTemplate.bind({});
Drag.args = {
  Type: 'drag'
}

export const Input = ListTemplate.bind({});
Input.args = {
  Type: 'input'
}










