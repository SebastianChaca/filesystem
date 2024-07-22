import { extendTheme } from '@chakra-ui/react';
// import '@fontsource-variable/open-sans'
// import '@fontsource-variable/raleway'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#018281',
      },
    }),
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'MS Sans Serif' 'Raleway', sans-serif`,
  },
});

export default theme;
