import { extendTheme } from '@chakra-ui/react';

// Foundation style overrides
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
import { styles } from './foundations/styles';

// Component style overrides
import { Button } from './components/button';
import { Card } from './components/card';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components: {
    Button,
    Card,
  },
  layerStyles: {
    base: {
      bg: { light: 'white', dark: 'gray.800' },
      borderColor: { light: 'gray.200', dark: 'gray.700' },
      color: { light: 'gray.800', dark: 'whiteAlpha.900' },
    },
    card: {
      bg: { light: 'white', dark: 'gray.800' },
      borderRadius: 'lg',
      boxShadow: 'lg',
      p: 6,
    },
    section: {
      py: [8, 12, 16],
      px: [4, 6, 8],
    },
  },
  textStyles: {
    h1: {
      fontSize: ['3xl', '4xl', '5xl'],
      fontWeight: 'bold',
      lineHeight: 1.2,
      fontFamily: 'heading',
    },
    h2: {
      fontSize: ['2xl', '3xl', '4xl'],
      fontWeight: 'semibold',
      lineHeight: 1.2,
      fontFamily: 'heading',
    },
    h3: {
      fontSize: ['xl', '2xl', '3xl'],
      fontWeight: 'semibold',
      lineHeight: 1.3,
      fontFamily: 'heading',
    },
    h4: {
      fontSize: ['lg', 'xl', '2xl'],
      fontWeight: 'semibold',
      lineHeight: 1.4,
      fontFamily: 'heading',
    },
    body: {
      fontSize: ['md', 'lg'],
      fontWeight: 'normal',
      lineHeight: 1.6,
    },
  },
});

export default theme;