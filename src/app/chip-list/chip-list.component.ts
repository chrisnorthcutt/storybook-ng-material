import { Component, Input, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Fruit {
  name: string;
}
export interface Vegetable {
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




@Input()
Type: string[] = ['basic', 'input', 'drag']


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
