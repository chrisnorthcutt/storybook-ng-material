import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ButtonComponent } from 'src/app/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { previewTemplate } from 'storybook-addon-preview';

@Component({
    selector: 'app-launcher', // <--- 1. add selector
    template: `
      <button mat-raised-button color="primary" (click)="launch()"> Launch </button>
    `
})
class LaunchDialogComponent {
    @Input() title = '';
    @Input() description = '';
    @Input() width = '';
    constructor(private _dialog: MatDialog) { }

    launch(): void {
        this._dialog.open(DialogComponent, {
            autoFocus: false,
            width: this.width,
            data: {
                title: this.title,
                description: this.description
            }
        });
    }
}

export default {
    title: 'Base Components/Dialog',
    component: LaunchDialogComponent,
    decorators: [
        moduleMetadata({
            declarations: [DialogComponent], // <--- 2. add component declarations
            imports: [MatDialogModule, BrowserAnimationsModule, MatButtonModule]
        })
    ]
} as Meta;

const Template: Story<LaunchDialogComponent> = (args: LaunchDialogComponent) => ({
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ex et tortor auctor fermentum. Curabitur tristique mauris sed mauris feugiat vestibulum. Quisque felis ex, auctor nec lobortis quis',
    width: '40vw'
};


Default.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button mat-raised-button color="primary" (click)="launch()">Launch</button>
            `,
      language: 'html',
      copy: true,
    },
    {
      tab: 'Dialog HTML',
      template: previewTemplate`
<div class="mat-typography">
  <h1>${"title"}</h1>
  <p>${'description'}</p>
  <button mat-stroked-button color="primary" mat-dialog-close label="Okay">Okay</button>
</div>
            `,
      language: 'html',
      copy: true,
    },
  ],
 
}