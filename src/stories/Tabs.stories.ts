// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../app/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import {
  previewTemplate,
  DEFAULT_ANGULAR_CODESANDBOX,
} from 'storybook-addon-preview';
import { TabsComponent } from 'src/app/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Tabs',
  component: TabsComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    Alignment: { control: 'select', options: ['above', 'below'] },
    backgroundColor: { control: 'select', options: ['basic', 'primary'] },
    Type: { control: 'select', options: ['basic', 'icon'] },
    stretchTabs: { control: 'boolean' },
  },
  decorators: [
    moduleMetadata({
      imports: [
        MatButtonModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatIconModule,
      ],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TabsComponent> = (args: TabsComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  Alignment: 'above',
  backgroundColor: 'basic',
  stretchTabs: false,
  Type: 'basic',
};

Basic.parameters = {
  preview: [
    {
      tab: 'Angular',
      template: previewTemplate`
<mat-tab-group headerPosition=${'Alignment'} backgroundColor=${'backgroundColor'}>
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  Alignment: 'above',
  backgroundColor: 'basic',
  stretchTabs: false,
  Type: 'icon',
};

WithIcon.parameters = {
  preview: [
    {
      tab: 'Angular',
      template: previewTemplate`
<mat-tab-group headerPosition=${'Alignment'} backgroundColor=${'backgroundColor'}>
  <mat-tab>
    <ng-template mat-tab-label>
    <mat-icon class="example-tab-icon">thumb_up</mat-icon>
    First
    </ng-template>
    Content 1
  </mat-tab>
  <mat-tab>
    <ng-template mat-tab-label>
    <mat-icon class="example-tab-icon">thumb_up</mat-icon>
    First
    </ng-template>
    Content 1
  </mat-tab>
  <mat-tab>
    <ng-template mat-tab-label>
    <mat-icon class="example-tab-icon">thumb_up</mat-icon>
    First
    </ng-template>
    Content 1
  </mat-tab>
</mat-tab-group>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};

function ANGULAR_PROPS_TEMPLATE(arg0: string[], arg1: { indent: number }): any {
  throw new Error('Function not implemented.');
}
