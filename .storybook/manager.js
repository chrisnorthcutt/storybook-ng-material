import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import ocTheme from './oc-theme';

addons.setConfig({
  theme: ocTheme,
});