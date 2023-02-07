// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import {
  DEFAULT_ANGULAR_CODESANDBOX,
  previewTemplate,
} from 'storybook-addon-preview';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { within } from '@storybook/testing-library';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from 'src/app/autocomplete/autocomplete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaginatorComponent } from 'src/app/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Paginator',
  component: PaginatorComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
   
  },



  decorators: [
    moduleMetadata({
      imports: [
        MatListModule,
        MatIconModule,
        MatPaginatorModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        FormsModule, ReactiveFormsModule
      ],
    }),
  ],
} as Meta;




// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<PaginatorComponent> = (args: PaginatorComponent) => ({
  props: args,
});





export const Basic = Template.bind({});
Basic.args = {
  
};

Basic.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<mat-paginator 
  [length]="100"
  [pageSize]="10"
  [pageSizeOptions]="[5, 10, 25, 100]"
  aria-label="Select page">
</mat-paginator>

          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
    
  ],
};




