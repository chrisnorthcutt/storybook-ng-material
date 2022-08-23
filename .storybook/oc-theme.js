import { create } from '@storybook/theming';

export default create({
  base: 'light',
  colorPrimary: '#2e729f',
  colorSecondary: '#229c8a',

  // UI
  appBg: 'white',
  appContentBg: '#fafafa',
  appBorderColor: '#efefef',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'rgba(0,0,0,.87)',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors

  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'rgba(0,0,0,.87)',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://onecause.com',
  brandImage: 'https://www.onecause.com/wp-content/uploads/2018/11/onecause-logo-tag.svg',
  brandTarget: '_self',
});