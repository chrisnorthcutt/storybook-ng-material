import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { MetricContainerComponent ,MetricContainerModule } from 'src/app/metric-container';
export default {
    title: 'Base Components/Metric Card',
    component: MetricContainerComponent,
    decorators: [
      moduleMetadata({
        imports: [MetricContainerModule]      
      }),
    ],
    argTypes: {
    },
  } as Meta;
  const Template: Story<MetricContainerComponent> = (args: MetricContainerComponent) => ({
    template: `    <core-metric-container [icon]="icon">
    <div title>{{title}}</div>
    <div metric>{{metric}}</div>
    <div description>{{description}}</div>
</core-metric-container>`,
    props: args,
  });

  export const Basic = Template.bind({});
  Basic.args = {
    title: 'My Metric',
    metric: '100',
    description: "hello", // primary | accent | warn
    icon: "subscriptions",
  };
 


