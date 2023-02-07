// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MenuComponent } from 'src/app/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { previewTemplate, DEFAULT_ANGULAR_CODESANDBOX } from 'storybook-addon-preview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Menu',
  component: MenuComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    overlapTrigger: { control: 'boolean' },
    hasBackdrop: { control: 'boolean' },
    yPosition: { control: 'select', name:'yPosition', options: ['below', 'above'] },
    Type: { control: 'select', options: ['basic', 'icon', 'nested'], table: {disable: true} },
   
  },
  decorators: [
    moduleMetadata({
      imports: [MatMenuModule,MatIconModule,MatButtonModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  overlapTrigger: false,
  hasBackdrop: true,
  Type: 'basic'
 
  
 
};

Basic.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button mat-button [matMenuTriggerFor]="menu">Menu</button>
<mat-menu #menu="matMenu" yPosition="above" overlapTrigger=${"overlapTrigger"} hasBackdrop=${"hasBackdrop"}>
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
  <button mat-menu-item disabled>Disabled Item</button>
</mat-menu>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};
export const Icon = Template.bind({});
Icon.args = {
  overlapTrigger: false,
  hasBackdrop: true,
  Type: 'icon'
 
  
 
};

Icon.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button mat-icon-button [matMenuTriggerFor]="menuIcon" aria-label="Example icon-button with a menu">
  <mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menuIcon="matMenu" overlapTrigger=${"overlapTrigger"} hasBackdrop=${"hasBackdrop"}>
  <button mat-menu-item>
    <mat-icon>edit</mat-icon>
    <span>Edit</span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon>delete</mat-icon>
    <span>Delete</span>
  </button>
  <button mat-menu-item>
    <mat-icon>visibility</mat-icon>
    <span>View</span>
  </button>
</mat-menu>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};



export const Nested = Template.bind({});
Nested.args = {
  overlapTrigger: false,
  hasBackdrop: true,
  Type: 'nested'
 
  
 
};
Nested.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<button mat-button [matMenuTriggerFor]="animals">Animal index</button>
<mat-menu #animals="matMenu" overlapTrigger=${"overlapTrigger"} hasBackdrop=${"hasBackdrop"}>
  <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
  <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
</mat-menu>

<mat-menu #vertebrates="matMenu">
  <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
  <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
  <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
  <button mat-menu-item>Birds</button>
  <button mat-menu-item>Mammals</button>
</mat-menu>

<mat-menu #invertebrates="matMenu">
  <button mat-menu-item>Insects</button>
  <button mat-menu-item>Molluscs</button>
  <button mat-menu-item>Crustaceans</button>
  <button mat-menu-item>Corals</button>
  <button mat-menu-item>Arachnids</button>
  <button mat-menu-item>Velvet worms</button>
  <button mat-menu-item>Horseshoe crabs</button>
</mat-menu>

<mat-menu #fish="matMenu">
  <button mat-menu-item>Baikal oilfish</button>
  <button mat-menu-item>Bala shark</button>
  <button mat-menu-item>Ballan wrasse</button>
  <button mat-menu-item>Bamboo shark</button>
  <button mat-menu-item>Banded killifish</button>
</mat-menu>

<mat-menu #amphibians="matMenu">
  <button mat-menu-item>Sonoran desert toad</button>
  <button mat-menu-item>Western toad</button>
  <button mat-menu-item>Arroyo toad</button>
  <button mat-menu-item>Yosemite toad</button>
</mat-menu>

<mat-menu #reptiles="matMenu">
  <button mat-menu-item>Banded Day Gecko</button>
  <button mat-menu-item>Banded Gila Monster</button>
  <button mat-menu-item>Black Tree Monitor</button>
  <button mat-menu-item>Blue Spiny Lizard</button>
  <button mat-menu-item disabled>Velociraptor</button>
</mat-menu>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};





function ANGULAR_PROPS_TEMPLATE(arg0: string[], arg1: { indent: number; }): any {
  throw new Error('Function not implemented.');
}

