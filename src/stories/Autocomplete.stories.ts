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

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Autocomplete',
  component: AutocompleteComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
   autoActiveFirstOption:{control:'boolean'},
   Type: {control: 'select', options: ['detailed', 'basic'], table: {disable: true}}
  },



  decorators: [
    moduleMetadata({
      imports: [
        MatListModule,
        MatIconModule,
        MatBadgeModule,
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
const Template: Story<AutocompleteComponent> = (args: AutocompleteComponent) => ({
  props: args,
});





export const Basic = Template.bind({});
Basic.args = {

  autoActiveFirstOption: false,
  Type: 'basic'
};

Basic.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<form class="example-form">
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Autocomplete</mat-label>
    <input type="text"
            placeholder="Pick one"
            aria-label="Number"
            matInput
            [formControl]="myControl"
            [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{option}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
    {
      tab: 'TS',
      template: previewTemplate`
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'autocomplete-filter-example',
  templateUrl: 'autocomplete-filter-example.html',
  styleUrls: ['autocomplete-filter-example.css'],
})
export class AutocompleteFilterExample implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
          `,
      language: 'ts',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};


export const Detailed = Template.bind({});
Detailed.args = {
  
  autoActiveFirstOption: false,
  Type: 'detailed'
};

Detailed.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<form class="example-form" *ngIf="Type === 'detailed'">
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>State</mat-label>
    <input matInput
            aria-label="State"
            [matAutocomplete]="auto"
            [formControl]="stateCtrl">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let state of filteredStates | async" [value]="state.name">
        <img class="example-option-img" aria-hidden [src]="state.flag" height="25">
        <span>{{state.name}}</span> |
        <small>Population: {{state.population}}</small>
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
    {
      tab: 'TS',
      template: previewTemplate`
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
}

/**
 * @title Autocomplete overview
 */
@Component({
  selector: 'autocomplete-overview-example',
  templateUrl: 'autocomplete-overview-example.html',
  styleUrls: ['autocomplete-overview-example.css'],
})
export class AutocompleteOverviewExample {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }
}
      
          `,
      language: 'ts',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};


