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

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Button',

  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes

  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
// const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
//   props: args,
// });

const Template: Story = (args) => ({
  props: args,
  argTypes: {
    Label: { control: 'text' },
    // Color: { control: 'select', defaultValue:'primary', options: ['primary', 'accent', 'warn'] },
    Type: {
      control: 'select',
      options: ['mat-raised-button', 'mat-stroked-button', 'mat-button'],
      table: { disable: true },
    },
    Disabled: { control: 'boolean' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
  },
  template: `
   <p> <button 
    mat-button
    [class]="Type"
    color="primary"
    [disabled]="Disabled">
    <mat-icon *ngIf="iconLeft" style="margin-right: 8px;" >save</mat-icon>
        <span>{{Label}}</span>
        
      <mat-icon *ngIf="iconRight" style="margin-left: 8px;">save</mat-icon>
    </button></p>
    <p><button 
    mat-button
    [class]="Type"
    color="basic"
    [disabled]="Disabled">
    <mat-icon *ngIf="iconLeft" style="margin-right: 8px;" >save</mat-icon>
        <span>{{Label}}</span>
        
      <mat-icon *ngIf="iconRight" style="margin-left: 8px;">save</mat-icon>
    </button></p>
    <p><button 
    mat-button
    [class]="Type"
    color="warn"
    [disabled]="Disabled">
    <mat-icon *ngIf="iconLeft" style="margin-right: 8px;" >save</mat-icon>
        <span>{{Label}}</span>
        
      <mat-icon *ngIf="iconRight" style="margin-left: 8px;">save</mat-icon>
    </button></p>
  `,
});
export const Floating: Story<ButtonComponent> = (args) => ({
  props: args,
  template: `
  <p>  <button mat-fab color="primary" aria-label="Example icon button with a delete icon">
  <mat-icon>delete</mat-icon>
 </button>&nbsp;&nbsp;<button mat-mini-fab color="primary" aria-label="Example icon button with a delete icon">
 <mat-icon>delete</mat-icon>
</button></p>
 <p>  <button mat-fab color="basic" aria-label="Example icon button with a delete icon">
 <mat-icon>delete</mat-icon>
</button>&nbsp;&nbsp;<button mat-mini-fab color="basic" aria-label="Example icon button with a delete icon">
<mat-icon>delete</mat-icon>
</button></p>
<p>  <button mat-fab color="warn" aria-label="Example icon button with a delete icon">
<mat-icon>delete</mat-icon>
</button>&nbsp;&nbsp;<button mat-mini-fab color="warn" aria-label="Example icon button with a delete icon">
<mat-icon>delete</mat-icon>
</button></p>
  `,
});

Floating.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button mat-fab color="primary" aria-label="Example icon button with a delete icon">
  <mat-icon>delete</mat-icon>
</button>

//Mini Fab
<button mat-mini-fab color="primary" aria-label="Example icon button with a delete icon">
  <mat-icon>delete</mat-icon>
</button>
            `,
      language: 'html',
      copy: true,
    },
  ],
};

export const Icon: Story<ButtonComponent> = (args) => ({
  props: args,
  template: `
   <p> <button color="primary" mat-icon-button aria-label="Example icon button with a vertical three dot icon">
   <mat-icon>more_vert</mat-icon>
 </button></p>
 <p> <button color="basic" mat-icon-button aria-label="Example icon button with a vertical three dot icon">
 <mat-icon>more_vert</mat-icon>
</button></p>
<p> <button color="warn" mat-icon-button aria-label="Example icon button with a vertical three dot icon">
<mat-icon>more_vert</mat-icon>
</button></p>
  `,
});

Icon.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button color="primary" mat-icon-button aria-label="Example icon button with a vertical three dot icon">
  <mat-icon>more_vert</mat-icon>
</button>
            `,
      language: 'html',
      copy: true,
    },
  ],
};

export const Raised = Template.bind({});
Raised.args = {
  Label: 'Raised',
  Type: 'mat-raised-button',
  Disabled: false,
  iconLeft: false,
  iconRight: false,
};

Raised.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button 
mat-raised-button
color='primary'
disabled=${'Disabled'}>
  <mat-icon *ngIf=${'iconLeft'} style="margin-right: 8px;" >save</mat-icon>
  <span>${'Label'}</span>
  <mat-icon *ngIf="iconRight" style="margin-left: 8px;">save</mat-icon>
</button>
            `,
      language: 'html',
      copy: true,
    },
  ],
};

export interface PropsOptions {
  indent?: number;
  wrap?: string;
  prefix?: string;
}

export const Stroked = Template.bind({});
Stroked.args = {
  Label: 'Stroked',
  Type: 'mat-stroked-button',
  Disabled: false,
  iconLeft: false,
  iconRight: false,
};

Stroked.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button 
mat-stroked-button
color='primary'
disabled=${'Disabled'}>
  <mat-icon *ngIf=${'iconLeft'} style="margin-right: 8px;" >save</mat-icon>
  <span>${'Label'}</span>
  <mat-icon *ngIf="iconRight" style="margin-left: 8px;">save</mat-icon>
</button>
            `,
      language: 'html',
      copy: true,
    },
  ],
};

export const Basic = Template.bind({});
Basic.args = {
  Label: 'Basic',
  Type: 'mat-button',
  Disabled: false,
  iconLeft: false,
  iconRight: false,
};

Basic.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button 
mat-button
color='primary'
disabled=${'Disabled'}>
  <mat-icon *ngIf=${'iconLeft'} style="margin-right: 8px;" >save</mat-icon>
  <span>${'Label'}</span>  
  <mat-icon *ngIf="iconRight" style="margin-left: 8px;">save</mat-icon>
</button>
            `,
      language: 'html',
      copy: true,
    },
  ],
};