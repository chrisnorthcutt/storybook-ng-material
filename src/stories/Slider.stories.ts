// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../app/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { previewTemplate, DEFAULT_ANGULAR_CODESANDBOX } from 'storybook-addon-preview';
import { SliderComponent } from 'src/app/slider/slider.component';
import { MatSliderModule } from '@angular/material/slider';



// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Slider',
  component: SliderComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
   
  },
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule,MatSliderModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SliderComponent> = (args: SliderComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};





function ANGULAR_PROPS_TEMPLATE(arg0: string[], arg1: { indent: number; }): any {
  throw new Error('Function not implemented.');
}

