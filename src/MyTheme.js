import { createMuiTheme } from '@material-ui/core/styles';

export const MyTheme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '4px'
      },
      label: {
        'padding-right': '6.5px'
      }
    }
  }
});