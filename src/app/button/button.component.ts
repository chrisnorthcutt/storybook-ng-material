import { Component, Input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'button[mat-raised-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

// Material Button
export class ButtonRaisedComponent{
  // @Input()
  // Label: string;
  // @Input()
  // Type: string[] = ['mat-raised-button', 'mat-stroked-button', 'mat-button'];
  // @Input()
  // Disabled: boolean;
  // @Input()
  // iconLeft: boolean;
  // @Input()
  // iconRight: boolean;
  @Input()
  color: string;
  @Input()
  disabled: boolean;
}
@Component({
  selector: 'button[mat-stroked-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

// Material Button
export class ButtonStrokedComponent{
  // @Input()
  // Label: string;
  // @Input()
  // Type: string[] = ['mat-raised-button', 'mat-stroked-button', 'mat-button'];
  // @Input()
  // Disabled: boolean;
  // @Input()
  // iconLeft: boolean;
  // @Input()
  // iconRight: boolean;
  @Input()
  color: string;
  @Input()
  disabled: boolean;
}

@Component({
  selector: 'button[mat-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
// Material Button
export class ButtonBasicComponent{
  // @Input()
  // Label: string;
  // @Input()
  // Type: string[] = ['mat-raised-button', 'mat-stroked-button', 'mat-button'];
  // @Input()
  // Disabled: boolean;
  // @Input()
  // iconLeft: boolean;
  // @Input()
  // iconRight: boolean;
  @Input()
  color: string;
  @Input()
  disabled: boolean;
}
