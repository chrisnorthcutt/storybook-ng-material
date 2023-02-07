import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  previewTemplate,
  DEFAULT_VANILLA_CODESANDBOX,
} from 'storybook-addon-preview';
export default {
  title: 'Base Components/Sidenav',
  component: SidenavComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule, MatSidenavModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
   
  },
} as Meta;

const Template: Story<SidenavComponent> = (args: SidenavComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  Title: 'Shiba Inu',
  Action1: 'Like',
  Action2: 'Subscribe',
  imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
};

Basic.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<mat-drawer-container class="example-container" autosize>
  <mat-drawer #drawer class="example-sidenav" mode="side">
    <p>Auto-resizing sidenav</p>
    <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>
    <button (click)="showFiller = !showFiller" mat-raised-button>
      Toggle extra text
    </button>
  </mat-drawer>

  <div class="example-sidenav-content">
    <button type="button" mat-button (click)="drawer.toggle()">
      Toggle sidenav
    </button>
  </div>
</mat-drawer-container>
    
            `,
      language: 'html',
      copy: true,
    },
  ],
};
