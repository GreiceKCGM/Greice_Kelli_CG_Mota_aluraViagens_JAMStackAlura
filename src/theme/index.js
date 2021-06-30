import { typographyVariants } from './typographyVariants';

const colors = {
  background: {
    light: {
      color: '#E5E5E5',
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
  error: {
    main: {
      color: '#dc3545',
      contrastText: '#fff',
    },
  },
  success: {
    main: {
      color: '#28a745',
      contrastText: '#fff',
    },
  },

};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0, // extra small
    sm: 480, // small
    md: 768, // medium
    lg: 992, // large
    xl: 1200, // extra large
  },
  borderRadius: '10px',
  fontFamily: '\'Roboto\', sans-serif',
  transition: '200ms ease-in-out',
};
