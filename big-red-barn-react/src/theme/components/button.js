export const Button = {
  // Base styles applied to all button variants
  baseStyle: (props) => {
    const { colorMode } = props;
    return {
      fontWeight: 'semibold',
      borderRadius: 'md',
      _focus: {
        boxShadow: 'outline',
      },
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: 'md',
        bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'forest.50',
      },
      _active: {
        transform: 'translateY(0)',
        boxShadow: 'sm',
        bg: colorMode === 'dark' ? 'whiteAlpha.300' : 'forest.100',
      },
      transition: 'all 0.2s',
    };
  },

  // Sizes for different button sizes
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 2,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 3,
    },
    lg: {
      fontSize: 'lg',
      px: 8,
      py: 4,
    },
  },

  // Different visual styles for buttons
  variants: {
    primary: (props) => {
      const { colorMode } = props;
      return {
        bg: colorMode === 'dark' ? 'forest.500' : 'forest.600',
        color: 'white',
        _hover: {
          bg: colorMode === 'dark' ? 'forest.400' : 'forest.700',
          _disabled: {
            bg: colorMode === 'dark' ? 'forest.500' : 'forest.600',
          },
        },
        _active: {
          bg: colorMode === 'dark' ? 'forest.300' : 'forest.800',
        },
      };
    },
    secondary: (props) => {
      const { colorMode } = props;
      return {
        bg: colorMode === 'dark' ? 'mahogany.500' : 'mahogany.600',
        color: 'white',
        _hover: {
          bg: colorMode === 'dark' ? 'mahogany.400' : 'mahogany.700',
          _disabled: {
            bg: colorMode === 'dark' ? 'mahogany.500' : 'mahogany.600',
          },
        },
        _active: {
          bg: colorMode === 'dark' ? 'mahogany.300' : 'mahogany.800',
        },
      };
    },
    accent: (props) => {
      const { colorMode } = props;
      return {
        bg: colorMode === 'dark' ? 'gold.500' : 'gold.600',
        color: 'charcoal.900',
        _hover: {
          bg: colorMode === 'dark' ? 'gold.400' : 'gold.700',
          _disabled: {
            bg: colorMode === 'dark' ? 'gold.500' : 'gold.600',
          },
        },
        _active: {
          bg: colorMode === 'dark' ? 'gold.300' : 'gold.800',
        },
      };
    },
    outline: (props) => {
      const { colorMode } = props;
      return {
        bg: 'transparent',
        border: '2px solid',
        borderColor: colorMode === 'dark' ? 'cream.600' : 'forest.600',
        color: colorMode === 'dark' ? 'cream.600' : 'forest.600',
        _hover: {
          bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'forest.50',
        },
        _active: {
          bg: colorMode === 'dark' ? 'whiteAlpha.300' : 'forest.100',
        },
      };
    },
    ghost: (props) => {
      const { colorMode } = props;
      return {
        bg: 'transparent',
        color: colorMode === 'dark' ? 'cream.600' : 'forest.600',
        _hover: {
          bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'forest.50',
        },
        _active: {
          bg: colorMode === 'dark' ? 'whiteAlpha.300' : 'forest.100',
        },
      };
    },
    link: (props) => {
      const { colorMode } = props;
      return {
        padding: 0,
        height: 'auto',
        lineHeight: 'normal',
        color: colorMode === 'dark' ? 'gold.500' : 'forest.600',
        _hover: {
          textDecoration: 'underline',
          color: colorMode === 'dark' ? 'gold.400' : 'forest.700',
        },
        _active: {
          color: colorMode === 'dark' ? 'gold.300' : 'forest.800',
        },
      };
    },
  },

  // Default values
  defaultProps: {
    variant: 'primary',
    size: 'md',
    colorScheme: 'forest',
  },
};