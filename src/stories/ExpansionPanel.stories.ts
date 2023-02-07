// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';


import { moduleMetadata } from '@storybook/angular';

import { DemoMaterialModule } from 'src/app/material.module';

import { ExpansionPanelComponent } from 'src/app/expansion-panel/expansion-panel.component';
import { DEFAULT_ANGULAR_CODESANDBOX, previewTemplate } from 'storybook-addon-preview';


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Expansion Panel',
  component: ExpansionPanelComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    isProgressive: {control: 'boolean', table:{disable: true}}
  },
  decorators: [
    moduleMetadata({
      imports: [DemoMaterialModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ExpansionPanelComponent> = (args: ExpansionPanelComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  isProgressive: false
}

Basic.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<mat-accordion class="example-headers-align" multi>
<mat-expansion-panel>
  <mat-expansion-panel-header>
    <mat-panel-title>
      Personal data
    </mat-panel-title>
    <mat-panel-description>
      Type your name and age
      <mat-icon>account_circle</mat-icon>
    </mat-panel-description>
  </mat-expansion-panel-header>

  <mat-form-field >
    <mat-label>First name</mat-label>
    <input matInput>
  </mat-form-field>

  <mat-form-field >
    <mat-label>Age</mat-label>
    <input matInput type="number" min="1">
  </mat-form-field>

</mat-expansion-panel>
<mat-expansion-panel>
  <mat-expansion-panel-header>
    <mat-panel-title>
      Destination
    </mat-panel-title>
    <mat-panel-description>
      Type the country name
      <mat-icon>map</mat-icon>
    </mat-panel-description>
  </mat-expansion-panel-header>

  <mat-form-field >
    <mat-label>Country</mat-label>
    <input matInput>
  </mat-form-field>
</mat-expansion-panel>

<mat-expansion-panel>
  <mat-expansion-panel-header>
    <mat-panel-title>
      Day of the trip
    </mat-panel-title>
    <mat-panel-description>
      Inform the date you wish to travel
      <mat-icon>date_range</mat-icon>
    </mat-panel-description>
  </mat-expansion-panel-header>

  <mat-form-field >
    <mat-label>Date</mat-label>
    <input matInput [matDatepicker]="picker" (focus)="picker.open()" readonly>
  </mat-form-field>
  <mat-datepicker #picker></mat-datepicker>
</mat-expansion-panel>
</mat-accordion>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};



export const Progressive = Template.bind({});
Progressive.args = {
  isProgressive: true
}

Progressive.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<mat-accordion class="example-headers-align">
<mat-expansion-panel [expanded]="step === 0" (opened)="setStep(0)" hideToggle>
  <mat-expansion-panel-header>
    <mat-panel-title>
      Personal data
    </mat-panel-title>
    <mat-panel-description>
      Type your name and age
      <mat-icon>account_circle</mat-icon>
    </mat-panel-description>
  </mat-expansion-panel-header>

  <mat-form-field>
    <mat-label>First name</mat-label>
    <input matInput>
  </mat-form-field>

  <mat-form-field>
    <mat-label>Age</mat-label>
    <input matInput type="number" min="1">
  </mat-form-field>
  <mat-action-row>
    <button mat-button color="primary" (click)="nextStep()">Next</button>
  </mat-action-row>
</mat-expansion-panel>

<mat-expansion-panel [expanded]="step === 1" (opened)="setStep(1)" hideToggle>
  <mat-expansion-panel-header>
    <mat-panel-title>
      Destination
    </mat-panel-title>
    <mat-panel-description>
      Type the country name
      <mat-icon>map</mat-icon>
    </mat-panel-description>
  </mat-expansion-panel-header>

  <mat-form-field>
    <mat-label>Country</mat-label>
    <input matInput>
  </mat-form-field>

  <mat-action-row>
    <button mat-button color="warn" (click)="prevStep()">Previous</button>
    <button mat-button color="primary" (click)="nextStep()">Next</button>
  </mat-action-row>
</mat-expansion-panel>

<mat-expansion-panel [expanded]="step === 2" (opened)="setStep(2)" hideToggle>
  <mat-expansion-panel-header>
    <mat-panel-title>
      Day of the trip
    </mat-panel-title>
    <mat-panel-description>
      Inform the date you wish to travel
      <mat-icon>date_range</mat-icon>
    </mat-panel-description>
  </mat-expansion-panel-header>

  <mat-form-field>
    <mat-label>Date</mat-label>
    <input matInput [matDatepicker]="picker" (focus)="picker.open()" readonly>
  </mat-form-field>
  <mat-datepicker #picker></mat-datepicker>

  <mat-action-row>
    <button mat-button color="warn" (click)="prevStep()">Previous</button>
    <button mat-button color="primary" (click)="nextStep()">End</button>
  </mat-action-row>
</mat-expansion-panel>

</mat-accordion>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};

