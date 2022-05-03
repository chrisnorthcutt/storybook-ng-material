import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'core-metric-container',
  templateUrl: './metric-container.component.html',
  styleUrls: ['./metric-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MetricContainerComponent { 

  @Input()
  icon: string
}
