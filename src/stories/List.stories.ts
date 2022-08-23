// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ListComponent } from 'src/app/list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Angular Material/List',
  component: ListComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    showHeader: { control: 'boolean', defaultValue: true },
    headerLabel: { control: 'text' },
    showAvatar: { control: 'boolean', defaultValue: false },
    groceryList: {control: 'object'},
    selectionList: {
      control: 'boolean',
      table: {
        disable: true,
      },
    },
    selectionMultiple: {
      control: 'boolean',
      table: {
        disable: true,
      },
    },
  },

  decorators: [
    moduleMetadata({
      imports: [MatListModule, MatIconModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ListComponent> = (args: ListComponent) => ({
  props: args,
});

export const basicList = Template.bind({});
basicList.args = {
  headerLabel: 'Grocery List',
  selectionMultiple: false,
  selectionList: false,
  groceryList: ['Bananas', 'Apple', 'Pears']
};

export const selectionList = Template.bind({});
selectionList.args = {
  headerLabel: 'Grocery List',
  selectionMultiple: true,
  selectionList: true,
  groceryList: ['Bananas', 'Apple', 'Pears']
};

export const selectionListSingle = Template.bind({});
selectionListSingle.args = {
  headerLabel: 'Grocery List',
  selectionMultiple: false,
  selectionList: true,
  groceryList: ['Bananas', 'Apple', 'Pears']
};
