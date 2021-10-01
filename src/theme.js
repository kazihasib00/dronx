import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#7ed857',
    },
    error: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Gemunu Libre'].join(','),
  },
})

export default theme
