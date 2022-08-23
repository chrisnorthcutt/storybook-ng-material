import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  groceryList: string[] = ['Bananas', 'Apple', 'Pears'];
  @Input()
  showHeader: boolean | true;
  @Input()
  headerLabel: string | 'Grocery List';
  @Input()
  selectionList: boolean | false;

  @Input()
  selectionMultiple: boolean | false;

  @Input()
  showAvatar: boolean | false;
}
