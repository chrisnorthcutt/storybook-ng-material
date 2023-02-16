// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions'
import { ListComponent } from 'src/app/list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { MarkdownDisplayModule, MarkdownPipe, SanitizePipe } from '@onecause/core';
import { MarkdownDisplayComponent } from '@onecause/core';
import { MarkdownModule } from '@onecause/ngcommon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SanitizeModule } from '@onecause/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  DEFAULT_ANGULAR_CODESANDBOX,
  previewTemplate,
} from 'storybook-addon-preview';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export

const actionsData = {
  markdownChange: action('updateMarkdown'),
};



export default {
  title: 'Base Components/Markdown',
  component: MarkdownDisplayComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  parameters: {  
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  argTypes:{},

  decorators: [
    moduleMetadata({
      imports: [
        MatListModule,
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
        MarkdownDisplayModule,
        MatSnackBarModule,
        SanitizeModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        MarkdownModule

        
        

        
        
      ],
    }),
  ],
} as Meta;



// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args

export const Primary: Story = () => ({
  
  props: {
    markdownChange: actionsData.markdownChange,
    defaultTemplate: '###Hello',
    maxLength: '1200',
    showEditor: true
  },

});


