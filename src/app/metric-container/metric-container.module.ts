import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricContainerComponent } from './metric-container.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MetricContainerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MetricContainerComponent
  ]
})
export class MetricContainerModule {

 }
