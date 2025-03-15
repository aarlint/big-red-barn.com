import React from 'react';
import { 
  IconButton, 
  useColorMode, 
  useColorModeValue, 
  Tooltip,
  Box,
  Flex
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  
  // Colors that change based on color mode
  const iconColor = useColorModeValue('gold.600', 'gold.400');
  const bgColor = useColorModeValue('forest.50', 'charcoal.700');
  const hoverBgColor = useColorModeValue('forest.100', 'charcoal.600');
  
  return (
    <Tooltip
      label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label="Color mode toggle tooltip"
      placement="bottom"
      hasArrow
    >
      <Flex
        as="button"
        onClick={toggleColorMode}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        bg={bgColor}
        p={2}
        borderRadius="full"
        _hover={{ bg: hoverBgColor }}
        boxShadow="md"
        position="relative"
        overflow="hidden"
        w="50px"
        h="50px"
        justifyContent="center"
        alignItems="center"
      >
        <MotionBox
          initial={{ rotate: 0 }}
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          position="absolute"
          display={isDark ? 'none' : 'block'}
        >
          <FaSun size="1.5rem" color={iconColor} />
        </MotionBox>
        
        <MotionBox
          initial={{ rotate: 180 }}
          animate={{ rotate: isDark ? 0 : -180 }}
          transition={{ duration: 0.5 }}
          position="absolute"
          display={isDark ? 'block' : 'none'}
        >
          <FaMoon size="1.5rem" color={iconColor} />
        </MotionBox>
      </Flex>
    </Tooltip>
  );
};

export default DarkModeSwitch;