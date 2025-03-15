export const Card = {
  // Base styles for all card variants
  baseStyle: (props) => {
    const { colorMode } = props;
    return {
      container: {
        bg: colorMode === 'dark' ? 'charcoal.800' : 'white',
        borderRadius: 'lg',
        boxShadow: colorMode === 'dark' ? 'dark-lg' : 'md',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        border: '1px solid',
        borderColor: colorMode === 'dark' ? 'gray.700' : 'gray.200',
        _hover: {
          transform: 'translateY(-5px)',
          boxShadow: colorMode === 'dark' ? 'dark-xl' : 'lg',
        },
      },
      header: {
        padding: '6',
        borderBottom: '1px solid',
        borderColor: colorMode === 'dark' ? 'gray.700' : 'gray.200',
        fontFamily: 'heading',
      },
      body: {
        padding: '6',
      },
      footer: {
        padding: '6',
        borderTop: '1px solid',
        borderColor: colorMode === 'dark' ? 'gray.700' : 'gray.200',
      },
    };
  },

  // Different sizes for cards
  sizes: {
    sm: {
      container: {
        borderRadius: 'md',
      },
      header: {
        padding: '4',
      },
      body: {
        padding: '4',
      },
      footer: {
        padding: '4',
      },
    },
    md: {
      container: {
        borderRadius: 'lg',
      },
      header: {
        padding: '6',
      },
      body: {
        padding: '6',
      },
      footer: {
        padding: '6',
      },
    },
    lg: {
      container: {
        borderRadius: 'xl',
      },
      header: {
        padding: '8',
      },
      body: {
        padding: '8',
      },
      footer: {
        padding: '8',
      },
    },
  },

  // Different visual variants for cards
  variants: {
    elevated: (props) => {
      const { colorMode } = props;
      return {
        container: {
          boxShadow: colorMode === 'dark' ? 'dark-lg' : 'lg',
        },
      };
    },
    outline: (props) => {
      const { colorMode } = props;
      return {
        container: {
          boxShadow: 'none',
          border: '2px solid',
          borderColor: colorMode === 'dark' ? 'gray.700' : 'gray.200',
        },
      };
    },
    filled: (props) => {
      const { colorMode } = props;
      return {
        container: {
          boxShadow: 'none',
          bg: colorMode === 'dark' ? 'gray.700' : 'gray.100',
        },
      };
    },
    unstyled: {
      container: {
        bg: 'none',
        boxShadow: 'none',
        borderRadius: 0,
      },
      header: {
        padding: 0,
        borderBottom: 'none',
      },
      body: {
        padding: 0,
      },
      footer: {
        padding: 0,
        borderTop: 'none',
      },
    },
    // Rustic variant with wood-like texture
    rustic: (props) => {
      const { colorMode } = props;
      return {
        container: {
          bg: colorMode === 'dark' ? 'mahogany.900' : 'mahogany.50',
          borderColor: colorMode === 'dark' ? 'mahogany.700' : 'mahogany.200',
          boxShadow: colorMode === 'dark' ? 'dark-lg' : 'md',
          position: 'relative',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            background: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 10px, transparent 10px, transparent 20px)',
            pointerEvents: 'none',
            borderRadius: 'lg',
          },
        },
        header: {
          borderColor: colorMode === 'dark' ? 'mahogany.700' : 'mahogany.200',
          color: colorMode === 'dark' ? 'cream.500' : 'mahogany.800',
        },
        footer: {
          borderColor: colorMode === 'dark' ? 'mahogany.700' : 'mahogany.200',
        },
      };
    },
    // Luxury variant with gold accents
    luxury: (props) => {
      const { colorMode } = props;
      return {
        container: {
          bg: colorMode === 'dark' ? 'charcoal.800' : 'cream.50',
          borderColor: colorMode === 'dark' ? 'gold.700' : 'gold.300',
          borderWidth: '2px',
          boxShadow: colorMode === 'dark' ? 'dark-lg' : 'lg',
        },
        header: {
          bg: colorMode === 'dark' ? 'charcoal.700' : 'gold.50',
          color: colorMode === 'dark' ? 'gold.300' : 'mahogany.800',
          borderColor: colorMode === 'dark' ? 'gold.700' : 'gold.300',
        },
        footer: {
          bg: colorMode === 'dark' ? 'charcoal.700' : 'gold.50',
          borderColor: colorMode === 'dark' ? 'gold.700' : 'gold.300',
        },
      };
    },
  },

  // Default values
  defaultProps: {
    variant: 'elevated',
    size: 'md',
  },
};