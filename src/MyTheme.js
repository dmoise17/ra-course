import { createMuiTheme } from '@material-ui/core/styles';

export const MyTheme = createMuiTheme({
  palette: {
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