// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ListComponent } from 'src/app/list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import {
  DEFAULT_ANGULAR_CODESANDBOX,
  previewTemplate,
} from 'storybook-addon-preview';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Badge',
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    label: {control: 'text', name: 'matBadge'},
    position: {control: 'select', name:'matBadgePosition', options: ['above after', 'above before', 'below before', 'below after', 'before', 'after', 'above', 'below']},
    color: {control: 'select', options: ['primary', 'accent', 'warn']},
    size: {control: 'select', name:'matBadgeSize', options: ['small', 'medium', 'large']},
  },

  decorators: [
    moduleMetadata({
      imports: [
        MatListModule,
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
      ],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story = (args) => ({
  props: args,
  template: `
  <button mat-raised-button
  [matBadge]="label" [matBadgePosition]="position" [matBadgeColor]="color" [matBadgeSize]="size">
Action
</button>`
});

export const Basic = Template.bind({});
Basic.args = {
  label: '8',
  position: 'above',
  color: 'accent',
  size: 'small'
};

Basic.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button 
  mat-raised-button 
  matBadge=${"label"} 
  matBadgePosition=${"position"} 
  matBadgeColor=${"color"} 
  matBadgeSize=${"size"}>
  Action
</button>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};
