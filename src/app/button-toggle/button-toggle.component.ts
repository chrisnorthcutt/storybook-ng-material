import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent {
  @Input()
  Options: string[] = ["Option 1", "Option 2", "Option 3"]
  @Input()
  Label: string;
  @Input()
  selectMultiple: boolean;

 
}
