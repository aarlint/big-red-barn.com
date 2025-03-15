import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Container,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import DarkModeSwitch from '../ui/DarkModeSwitch';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef(null);
  
  // Colors that change based on color mode and scroll state
  const bgColor = useColorModeValue(
    scrolled ? 'rgba(245, 245, 220, 0.8)' : 'rgba(245, 245, 220, 0.6)', // Light background with opacity in light mode
    scrolled ? 'rgba(26, 26, 26, 0.8)' : 'rgba(26, 26, 26, 0.7)' // Keep dark in dark mode even when not scrolled
  );
  const textColor = useColorModeValue(
    scrolled ? 'forest.700' : 'forest.700', // Use dark text in light mode for better legibility
    scrolled ? 'cream.600' : 'cream.600'
  );
  const borderColor = useColorModeValue(
    scrolled ? 'forest.200' : 'transparent',
    scrolled ? 'gray.700' : 'transparent'
  );
  
  // Hover colors for nav items
  const hoverBgColor = useColorModeValue('forest.50', 'whiteAlpha.200');
  const hoverTextColor = useColorModeValue('forest.600', 'gold.400');
  
  // Determine if we should show the mobile menu based on screen size
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  // Navigation items
  const navItems = [
    { name: 'Home', path: '/', sectionId: 'home' },
    { name: 'Gallery', path: '/#gallery', sectionId: 'gallery' },
    { name: 'Events', path: '/#events', sectionId: 'events' },
    { name: 'About', path: '/#about', sectionId: 'about' },
    { name: 'History', path: '/#history', sectionId: 'history' },
    { name: 'Contact', path: '/#contact', sectionId: 'contact' },
  ];
  
  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set up Intersection Observer for scroll spy
  useEffect(() => {
    // Only set up the observer on the home page
    if (location.pathname !== '/') {
      return;
    }

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '-100px 0px -70% 0px', // Adjust these values to control when sections are considered "active"
      threshold: 0 // Trigger when any part of the element is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId || '');
        }
      });
    };

    // Create the observer
    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observerRef.current.observe(section);
    });

    // Special case for home section (which might not have an id)
    const heroSection = document.querySelector('main > div:first-child');
    if (heroSection) {
      heroSection.id = 'home';
      observerRef.current.observe(heroSection);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [location.pathname]);
  
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  };
  
  // Check if a nav item is active
  const isActive = (path) => {
    // If we're not on the home page, use the URL hash
    if (location.pathname !== '/') {
      if (path === '/') {
        return location.pathname === '/' && !location.hash;
      }
      if (path.includes('#')) {
        return location.hash === path.substring(path.indexOf('#'));
      }
      return location.pathname === path;
    }
    
    // On the home page, use the activeSection from Intersection Observer
    if (path === '/') {
      return activeSection === 'home' || !activeSection;
    }
    
    if (path.includes('#')) {
      const sectionId = path.substring(path.indexOf('#') + 1);
      return activeSection === sectionId;
    }
    
    return false;
  };

  // Handle anchor link clicks and home link
  const handleAnchorClick = (e, path) => {
    if (path === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.includes('#')) {
      e.preventDefault();
      const id = path.substring(path.indexOf('#'));
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  // Render nav items
  const renderNavItems = (mobile = false) => {
    return navItems.map((item, index) => (
      <MotionBox
        key={item.name}
        custom={index}
        variants={navItemVariants}
        initial="hidden"
        animate="visible"
      >
        <Box
          as={RouterLink}
          to={item.path}
          px={4}
          py={2}
          rounded="md"
          fontWeight={isActive(item.path) ? 'bold' : 'medium'}
          color={isActive(item.path) ? 'gold.600' : textColor}
          _hover={{
            textDecoration: 'none',
            bg: hoverBgColor,
            color: hoverTextColor,
          }}
          onClick={(e) => {
            if (mobile) onClose();
            handleAnchorClick(e, item.path);
          }}
        >
          {item.name}
        </Box>
      </MotionBox>
    ));
  };
  
  return (
    <MotionFlex
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={bgColor}
      color={textColor}
      borderBottom="1px solid"
      borderColor={borderColor}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      transition="all 0.3s ease"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container maxW="container.xl" py={3}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Flex as={RouterLink} to="/" alignItems="center" _hover={{ textDecoration: 'none' }}>
              <Image 
                src="/icons/barn.png" 
                alt="Big Red Barn" 
                height="40px"
                mr={3}
              />
              <Text
                fontFamily="heading"
                fontWeight="bold"
                fontSize="xl"
                color={textColor}
              >
                The Big Red Barn
              </Text>
            </Flex>
          </MotionBox>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
              {renderNavItems()}
            </HStack>
          )}
          
          {/* Dark Mode Switch and Mobile Menu Button */}
          <HStack spacing={4}>
            <DarkModeSwitch />
            
            {isMobile && (
              <IconButton
                aria-label="Open menu"
                icon={<HamburgerIcon />}
                variant="ghost"
                onClick={onOpen}
              />
            )}
          </HStack>
        </Flex>
      </Container>
      
      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue('cream.50', 'charcoal.900')}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Flex alignItems="center">
              <Image 
                src="/icons/barn.png" 
                alt="Big Red Barn" 
                height="30px"
                mr={3}
              />
              <Text fontFamily="heading">Menu</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {renderNavItems(true)}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionFlex>
  );
};

export default Header;