export const styles = {
  global: (props) => {
    const { colorMode } = props;
    return {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        fontFamily: 'body',
        color: colorMode === 'dark' ? 'cream.600' : 'charcoal.800',
        bg: colorMode === 'dark' ? 'charcoal.900' : 'cream.100',
        lineHeight: 'base',
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
      },
      '*::placeholder': {
        color: colorMode === 'dark' ? 'whiteAlpha.400' : 'gray.400',
      },
      '*, *::before, &::after': {
        borderColor: colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.200',
        wordWrap: 'break-word',
      },
      // Custom scrollbar for webkit browsers
      '::-webkit-scrollbar': {
        width: '10px',
        height: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: colorMode === 'dark' ? 'gray.800' : 'gray.100',
      },
      '::-webkit-scrollbar-thumb': {
        background: colorMode === 'dark' ? 'gray.600' : 'gray.300',
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: colorMode === 'dark' ? 'gray.500' : 'gray.400',
      },
      // Heading styles
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: 'heading',
        fontWeight: 'semibold',
        lineHeight: 'shorter',
        color: colorMode === 'dark' ? 'cream.500' : 'forest.600',
      },
      // Link styles
      a: {
        color: colorMode === 'dark' ? 'gold.600' : 'forest.600',
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
          color: colorMode === 'dark' ? 'gold.500' : 'forest.700',
        },
      },
      // Image styles
      img: {
        maxWidth: '100%',
        height: 'auto',
      },
    };
  },
};