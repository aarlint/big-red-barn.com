import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

/**
 * Layout component that wraps all pages with header and footer
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered inside the layout
 * @param {boolean} props.noFooter - If true, footer will not be rendered
 * @param {boolean} props.noHeader - If true, header will not be rendered
 */
const Layout = ({ children, noFooter = false, noHeader = false }) => {
  // Colors
  const bgColor = useColorModeValue('cream.50', 'charcoal.900');
  
  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };
  
  return (
    <Box
      minH="100vh"
      bg={bgColor}
      display="flex"
      flexDirection="column"
    >
      {!noHeader && <Header />}
      
      <MotionBox
        as="main"
        flex="1"
        width="100%"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        pt={!noHeader ? { base: '80px', md: '100px' } : 0}
      >
        {children}
      </MotionBox>
      
      {!noFooter && <Footer />}
    </Box>
  );
};

export default Layout;