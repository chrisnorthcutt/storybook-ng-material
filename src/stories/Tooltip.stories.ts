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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/ToolTip',
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},

  decorators: [
    moduleMetadata({
      imports: [
        MatListModule,
        MatIconModule,
        MatTooltipModule,
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
matTooltip="Info about the action"
aria-label="Button that displays a tooltip when focused or hovered over">
  Action
</button>`
});

export const Basic = Template.bind({});
Basic.args = {};

Basic.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button mat-raised-button
matTooltip="Info about the action"
aria-label="Button that displays a tooltip when focused or hovered over">
  Action
</button>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};
