// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { moduleMetadata } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChipListComponent } from 'src/app/chip-list/chip-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DEFAULT_ANGULAR_CODESANDBOX, previewTemplate } from 'storybook-addon-preview';
//@ts-ignore
import ChipsDocumentation from './Chips-Documentation.mdx'


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
      imports: [MatChipsModule,MatIconModule, MatButtonModule, MatFormFieldModule, BrowserAnimationsModule, NoopAnimationsModule, DragDropModule],
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

//Preview 
Basic.parameters = {
  preview: [
      {
          tab: "Angular",
          template: previewTemplate`<mat-chip-list aria-label="Fish selection">
          <mat-chip>Basic</mat-chip>
          <mat-chip color="primary" selected>Primary</mat-chip>
          <mat-chip color="accent" selected>Accent</mat-chip>
        </mat-chip-list>`,
          language: "ts",
          copy: true,
          codesandbox: DEFAULT_ANGULAR_CODESANDBOX(["@egjs/infinitegrid"]),
      },
  ],
};

export const Drag = ListTemplate.bind({});
Drag.args = {
  Type: 'drag'
}

export const Input = ListTemplate.bind({});
Input.args = {
  Type: 'input'
}










