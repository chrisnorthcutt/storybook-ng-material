import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CardComponent } from '../app/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  previewTemplate,
  DEFAULT_VANILLA_CODESANDBOX,
} from 'storybook-addon-preview';
export default {
  title: 'Base Components/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule],
    }),
  ],
  argTypes: {
    Title: {
      control: { type: 'text' },
    },
    Action1: {
      control: { type: 'text' },
    },
    Action2: {
      control: { type: 'text' },
    },
    Description: {
      control: { type: 'text' },
    },
    Subtitle: {
      control: { type: 'text' },
    },

    imageSrc: {
        control: {type: 'text'}
    }
  },
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Full = Template.bind({});
Full.args = {
  Title: 'Shiba Inu',
  Action1: 'Like',
  Action2: 'Subscribe',
  imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  Description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
  Subtitle: 'Dog Breed'
};

Full.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>${Full.args.Title}</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src=${'imageSrc'} alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>${Full.args.Action1}</button>
    <button mat-button>${Full.args.Action2}</button>
  </mat-card-actions>
</mat-card>
            `,
      language: 'html',
      copy: true,
    },
  ],
};
