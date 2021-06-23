import { typographyVariants } from './typographyVariants';

const colors = {
    background: {
      light: {
        color: '#FFFFFF',
      },
      main: {
        color: '#35B6FF',
      },
    },
    borders: {
      main: {
        color: '#35B6FF',
      },
    },
    primary: {
      main: {
        color: '#000000',
        contrastText: '#fff',
      },
    },
    secondary: {
      main: {
        color: '#0094E8',
        contrastText: '#fff',
      },
    },
    tertiary: {
        main: {
          color: '#FFFFFF',
          contrastText: '#fff',
        },
      },
  
  };
  
  export default {
    colors,
   typographyVariants ,
    breakpoints: {
      xs: 0, // extra small
      sm: 480, // small
      md: 768, // medium
      lg: 992, // large
      xl: 1200, // extra large
    },
    borderRadius: '10px',
    fontFamily: '\'Pattaya\', Roboto',
    transition: '200ms ease-in-out',
  };
  