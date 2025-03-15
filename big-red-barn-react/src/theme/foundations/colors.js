// Yellowstone-inspired color palette
export const colors = {
  // Primary colors
  forest: {
    50: '#E8ECEB',
    100: '#C5CEC9',
    200: '#9EADA4',
    300: '#778D7F',
    400: '#5A7464',
    500: '#3D5C49',
    600: '#2C3E2D', // Deep forest green - primary
    700: '#1E2F1F',
    800: '#0F1F11',
    900: '#001000',
  },
  
  // Secondary colors
  mahogany: {
    50: '#F9F2EE',
    100: '#EDDCCF',
    200: '#E0C3AD',
    300: '#D3A98B',
    400: '#C79673',
    500: '#B07E5A',
    600: '#6B4423', // Rich mahogany brown - secondary
    700: '#5A3A1E',
    800: '#482F18',
    900: '#372512',
  },
  
  // Accent colors
  gold: {
    50: '#FFF9E6',
    100: '#FFEFC0',
    200: '#FFE599',
    300: '#FFDB73',
    400: '#FFD24D',
    500: '#FFC926',
    600: '#D4AF37', // Antique gold - accent
    700: '#BF9B30',
    800: '#AA8829',
    900: '#957522',
  },
  
  // Neutral colors
  charcoal: {
    50: '#F2F2F2',
    100: '#DBDBDB',
    200: '#C4C4C4',
    300: '#ADADAD',
    400: '#969696',
    500: '#808080',
    600: '#666666',
    700: '#4D4D4D',
    800: '#333333', // Charcoal - neutral
    900: '#1A1A1A', // Deep charcoal - dark mode background
  },
  
  stone: {
    50: '#F7F7F7',
    100: '#E6E7E8',
    200: '#D5D7D9',
    300: '#C4C6C9',
    400: '#B3B6BA',
    500: '#A2A5AB',
    600: '#8A8D8F', // Stone gray - neutral
    700: '#6D7072',
    800: '#505355',
    900: '#343638',
  },
  
  cream: {
    50: '#FFFFFE',
    100: '#FDFCF9',
    200: '#FBFAF4',
    300: '#F9F7EF',
    400: '#F7F5EA',
    500: '#F5F2E5',
    600: '#F5F5DC', // Cream - neutral
    700: '#E6E6CE',
    800: '#D8D8C0',
    900: '#C9C9B2',
  },
  
  // Semantic colors
  brand: {
    // Map to our primary colors
    primary: '#2C3E2D', // forest.600
    secondary: '#6B4423', // mahogany.600
    accent: '#D4AF37', // gold.600
  },
  
  // Dark mode specific colors
  darkMode: {
    bg: '#1A1A1A', // charcoal.900
    surface: '#2D2016', // Rich dark brown
    text: '#F5F5DC', // cream.600
    accent: '#BF9B30', // gold.700
  },
};