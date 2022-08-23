import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  Label: string;
  @Input()
  Type: string[] = ['mat-raised-button', 'mat-stroked-button', 'mat-button'];
  @Input()
  Disabled: boolean;
  @Input()
  iconLeft: boolean;
  @Input()
  iconRight: boolean;
}
