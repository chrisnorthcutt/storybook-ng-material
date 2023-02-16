import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  colorPrimary: '#48BCAE',
  colorSecondary: '#48BCAE',

  // UI


  appBorderRadius: 4,

  // Typography

  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  
  textColor:  'rgba(255,255,255,0.9)',
  textInverseColor: 'rgba(0,0,0,.87) ',

  // Toolbar default and active colors


  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'rgba(0,0,0,.87)',
  // inputBorderRadius: 4,

  brandTitle: 'Compass Design System',
  brandUrl: 'https://onecause.com',
  brandImage: 'assets/compass_logo_white.svg',
  brandTarget: '_self',
});