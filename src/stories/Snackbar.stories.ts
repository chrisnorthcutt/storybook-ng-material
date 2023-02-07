// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../app/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { previewTemplate, DEFAULT_ANGULAR_CODESANDBOX } from 'storybook-addon-preview';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatInputModule } from '@angular/material/input';


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Snackbar',
  component: SnackbarComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    horizontalPosition: { control: 'select', options: ['start', 'end', 'center', 'left', 'right']},
    verticalPosition: { control: 'select', options: ['top', 'bottom']},
    durationInSeconds: {control: 'number'},
    message: {control: 'text'},
    action: {control: 'text'}


  },
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule,MatSnackBarModule,BrowserAnimationsModule, MatIconModule, MatFormFieldModule,MatInputModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SnackbarComponent> = (args: SnackbarComponent) => ({
  props: args,
});




export const Basic = Template.bind({});
Basic.args = {
  message: 'Hello',
  action: 'Ok'
};








function ANGULAR_PROPS_TEMPLATE(arg0: string[], arg1: { indent: number; }): any {
  throw new Error('Function not implemented.');
}

