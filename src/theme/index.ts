import { extendTheme } from 'native-base';
import palette from './colors';
import typography from './fonts';

const customTheme = extendTheme({
  colors: {
    white: palette.WHITE,
    black: palette.BLACK,
    lightText: palette.TEXT_DEFAULT,
    darkText: palette.BLACK,
    primaryBackground: palette.DARK_BLUE,
    primary: palette.PRIMARY_BTN,
    secondary: palette.ORANGE,
    tertiary: palette.MIDNIGHT_BLUE,

    pageBackground: palette.MIDNIGHT_BLUE,
    headerBackground: palette.WHITE,

    ...palette,
  },

  ...typography,

  config: {
    // Changing initialColorMode to 'light'
    initialColorMode: 'light',
  },
});

export type Theme = typeof customTheme;
export default customTheme;
