// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ListComponent } from 'src/app/list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { DEFAULT_ANGULAR_CODESANDBOX, previewTemplate } from 'storybook-addon-preview';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/List',
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

basicList.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<mat-list role="list">
<div mat-subheader *ngIf="showHeader">{{ headerLabel }}</div>
  <mat-list-item role="listitem" *ngFor="let item of groceryList">
    <img
      matListAvatar
      *ngIf="showAvatar"
      src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
      alt="..."
    />
    <mat-icon *ngIf="!showAvatar" mat-list-icon>restaurant</mat-icon>
    <h3 matLine>{{ item }}</h3>
    <h3 matLine>Line 2</h3>
  </mat-list-item>
</mat-list>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};



export const selectionList = Template.bind({});
selectionList.args = {
  headerLabel: 'Grocery List',
  selectionMultiple: true,
  selectionList: true,
  groceryList: ['Bananas', 'Apple', 'Pears']
};

selectionList.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
      <!-- [highlight] highlight html -->
<mat-selection-list>
  <div mat-subheader>${ 'headerLabel ' }</div>
  <mat-list-option *ngFor="let item of groceryList">
    <img
    matListAvatar
    src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
    alt="..."
    />
  <mat-icon mat-list-icon>restaurant</mat-icon>
    <h3 matLine>{{ item }}</h3>
  </mat-list-option>
</mat-selection-list>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};

export const selectionListSingle = Template.bind({});
selectionListSingle.args = {
  headerLabel: 'Grocery List',
  selectionMultiple: false,
  selectionList: true,
  groceryList: ['Bananas', 'Apple', 'Pears']
};
