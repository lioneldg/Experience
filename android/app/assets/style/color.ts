import {ColorsApp, LineColor} from 'app/store/types/color';

export const ShadlineColors = {
  light: {
    text: '#090909',
    textSecondary: '#616161',
    disabled: '#616161',
    accent: '#4f4389',
    separator: '#E7E4F1',
    selector: '#E7E4F1',
    background: '#FAFAFA',
    backgroundMenu: '#FAFAFA',
  },
  dark: {
    text: '#f2f2f2',
    textSecondary: '#BFBFBF',
    disabled: '#616161',
    accent: '#6160A4',
    separator: '#060d0e',
    selector: '#424242',
    background: '#191919',
    backgroundMenu: '#060d0e',
  },
};

export const UtilsColor = {
  red: '#ED315D',
  orange: '#FFC847',
  green: '#06D6A0',
  iosBlue: '#007aff',
  iosGrey: '#A9ADAE',
  iosBackgroundColor: '#EFEFF4',
  blackBackgroundPreview: '#00000085',
  progressBackground: '#A9ADAE',
};

export const LineColors = {
  lineGreen: '#3FCC00',
  lineBlue: '#2980b9',
  lineRed: '#EC2055',
  linePink: '#e3007e',
  lineOrange: '#fda600',
  linePurple: '#6350a0',
};

export function getLineColor(lineColor: LineColor, colors: ColorsApp) {
  if (!lineColor || !colors) return;
  let cl;
  switch (lineColor) {
    case 'red':
      cl = colors.lineRed;
      break;
    case 'green':
      cl = colors.lineGreen;
      break;
    case 'blue':
      cl = colors.lineBlue;
      break;
    case 'pink':
      cl = colors.linePink;
      break;
    case 'orange':
      cl = colors.lineOrange;
      break;
    case 'purple':
      cl = colors.linePurple;
      break;
    default:
      cl = colors.iosGrey;
  }
  return cl;
}
