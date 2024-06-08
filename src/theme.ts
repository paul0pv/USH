// theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#3366CC',
    },
    secondary: {
      500: '#FF9900',
    },
    success: {
      500: '#669900',
    },
    background: {
      500: '#F5F5F5',
    },
    text: {
      500: '#333333',
    },
  },
});

export default theme;