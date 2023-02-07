// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { moduleMetadata } from '@storybook/angular';

import { ChipListComponent } from 'src/app/chip-list/chip-list.component';

//@ts-ignore
import ChipsDocumentation from './Chips-Documentation.mdx'
import { DemoMaterialModule } from 'src/app/material.module';
import { DEFAULT_ANGULAR_CODESANDBOX, previewTemplate } from 'storybook-addon-preview';


//@ts-ignore


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Chips',
  component: ChipListComponent,

  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    Type: { control: 'select', options: ['basic', 'input', 'drag'], table: {disable: true} },  },
    
  decorators: [
    moduleMetadata({
      imports: [DemoMaterialModule],
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


Basic.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<mat-chip-list aria-label="Fish selection" [selectable]="false" >
  <mat-chip color="basic" disableRipple  selected>Basic <mat-icon matChipTrailingIcon>save</mat-icon></mat-chip>
  <mat-chip color="primary" disableRipple  selected>Primary</mat-chip>
  <mat-chip color="accent" disableRipple selected>Accent</mat-chip>
</mat-chip-list>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};






export const Drag = ListTemplate.bind({});
Drag.args = {
  Type: 'drag'
}

Drag.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<mat-chip-list *ngIf="Type === 'drag'"
class="example-chip"
cdkDropList 
cdkDropListOrientation="horizontal"
(cdkDropListDropped)="drop($event)">
  <mat-chip
  class="example-box"
  cdkDrag
  *ngFor="let vegetable of vegetables">
    {{vegetable.name}}
  </mat-chip>
</mat-chip-list>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
    {
      tab: 'TS',
      template: previewTemplate`
import {MatChipInputEvent} from '@angular/material/chips';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss']
})

export class ChipListComponent {
  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
          `,
      language: 'ts',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};

export const Input = ListTemplate.bind({});
Input.args = {
  Type: 'input'
}

Input.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<mat-form-field *ngIf="Type === 'input'" class="example-chip-list">
  <mat-label>Favorite Fruits</mat-label>
  <mat-chip-list #chipList aria-label="Fruit selection">
    <mat-chip *ngFor="let fruit of fruits" selectable
              removable (removed)="remove(fruit)">
      {{fruit.name}}
      <mat-icon matChipRemove>cancel</mat-icon>
    </mat-chip>
    <input placeholder="New fruit..."
            [matChipInputFor]="chipList"
            matChipInputAddOnBlur
            (matChipInputTokenEnd)="add($event)">
  </mat-chip-list>
</mat-form-field>
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
    {
      tab: 'TS',
      template: previewTemplate`
import { Component, Input, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss']
})

export class ChipListComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.input.value = "";
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
          `,
      language: 'ts',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};










