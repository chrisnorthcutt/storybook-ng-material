import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { StepperComponent } from '../app/stepper/stepper.component';
import {DemoMaterialModule} from '../app/material.module';




import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
export default {
    title: 'Angular Material/Stepper',
    component: StepperComponent,
    decorators: [
      moduleMetadata({
        imports: [DemoMaterialModule, FormsModule, ReactiveFormsModule]      
      }),
    ],
    argTypes: {

    },
  } as Meta;

  const Template: Story<StepperComponent> = (args: StepperComponent) => ({
    props: args,
  });

  export const Horizontal = Template.bind({});
  