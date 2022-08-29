import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { DemoMaterialModule } from './material.module';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { MatExpansionModule } from '@angular/material/expansion';



import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component' 
import { MetricContainerModule } from './metric-container';
import { ListComponent } from './list/list.component';
import { ButtonComponent } from './button/button.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ChipListComponent } from './chip-list/chip-list.component';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import {MatAccordion} from '@angular/material/expansion';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core/ripple/ripple';

};
@NgModule({
  declarations: [		
    AppComponent,
    ProgressBarComponent,
    StepperComponent,
    CardComponent,
    ListComponent,
    ButtonComponent,
    ButtonToggleComponent,
      ChipListComponent,
      ExpansionPanelComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    DemoMaterialModule,


  ],

  

  providers: [
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
