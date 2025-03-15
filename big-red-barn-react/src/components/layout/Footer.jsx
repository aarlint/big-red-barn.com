import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Icon,
  Flex,
  Divider,
  Image,
  HStack,
  VStack
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Footer = () => {
  // Colors
  const bgColor = useColorModeValue('cream.100', 'charcoal.900');
  const textColor = useColorModeValue('charcoal.800', 'cream.500');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const accentColor = useColorModeValue('forest.600', 'gold.500');
  const hoverColor = useColorModeValue('forest.700', 'gold.400');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // Footer links
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Events', path: '/#events' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
    { name: 'History', path: '/#history' },
  ];
  
  // Social links
  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com' },
  ];
  
  // Contact info
  const contactInfo = [
    { 
      icon: FaMapMarkerAlt,
      text: '340 Mission Dr, Saint Ignatius, MT',
      url: 'https://maps.google.com/?q=340+Mission+Dr,+Saint+Ignatius,+MT'
    },
    {
      icon: FaPhone,
      text: '509-789-0235',
      url: 'tel:+15097890235'
    },
    {
      icon: FaEnvelope,
      text: 'bigredbarnmontana@gmail.com',
      url: 'mailto:bigredbarnmontana@gmail.com'
    },
  ];
  
  return (
    <MotionBox
      as="footer"
      bg={bgColor}
      color={textColor}
      borderTop="1px solid"
      borderColor={borderColor}
      py={10}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 8, md: 10 }}
          justify="space-between"
          align={{ base: 'center', lg: 'flex-start' }}
        >
          {/* Logo and Tagline */}
          <MotionBox variants={itemVariants} textAlign={{ base: 'center', lg: 'left' }}>
            <Flex direction="column" align={{ base: 'center', lg: 'flex-start' }}>
              <Flex align="center" mb={4}>
                <Image 
                  src="/icons/barn.png" 
                  alt="Big Red Barn" 
                  height="50px"
                  mr={3}
                />
                <Text
                  fontFamily="heading"
                  fontWeight="bold"
                  fontSize="2xl"
                >
                  The Big Red Barn
                </Text>
              </Flex>
              <Text fontSize="md" maxW="300px">
                A historic venue nestled in the heart of Saint Ignatius, Montana, 
                offering a rustic and charming setting for your special events.
              </Text>
            </Flex>
          </MotionBox>
          
          {/* Quick Links */}
          <MotionBox variants={itemVariants}>
            <Text fontWeight="bold" fontSize="lg" mb={4} fontFamily="heading">
              Quick Links
            </Text>
            <Stack as="ul" spacing={2} listStyleType="none" ml={0}>
              {links.map((link) => (
                <Box as="li" key={link.name}>
                  <Link
                    as={RouterLink}
                    to={link.path}
                    color={textColor}
                    _hover={{ color: accentColor, textDecoration: 'none' }}
                    fontWeight="medium"
                    onClick={(e) => {
                      if (link.path.includes('#')) {
                        e.preventDefault();
                        const id = link.path.substring(link.path.indexOf('#'));
                        const element = document.querySelector(id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Stack>
          </MotionBox>
          
          {/* Contact Information */}
          <MotionBox variants={itemVariants}>
            <Text fontWeight="bold" fontSize="lg" mb={4} fontFamily="heading">
              Contact Us
            </Text>
            <VStack align="flex-start" spacing={3}>
              {contactInfo.map((item, index) => (
                <Link 
                  key={index}
                  href={item.url}
                  isExternal
                  color={textColor}
                  _hover={{ color: accentColor, textDecoration: 'none' }}
                >
                  <Flex align="center">
                    <Icon as={item.icon} mr={2} color={accentColor} />
                    <Text>{item.text}</Text>
                  </Flex>
                </Link>
              ))}
            </VStack>
          </MotionBox>
          
          {/* Social Media */}
          <MotionBox variants={itemVariants}>
            <Text fontWeight="bold" fontSize="lg" mb={4} fontFamily="heading">
              Follow Us
            </Text>
            <HStack spacing={4}>
              {socialLinks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.url}
                  isExternal
                  aria-label={`${social.name} link`}
                >
                  <Icon 
                    as={social.icon} 
                    boxSize={6} 
                    color={accentColor}
                    _hover={{ color: hoverColor }}
                    transition="color 0.2s ease"
                  />
                </Link>
              ))}
            </HStack>
          </MotionBox>
        </Stack>
        
        <Divider my={8} borderColor={borderColor} />
        
        {/* Copyright */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          fontSize="sm"
        >
          <Text>
            &copy; {new Date().getFullYear()} The Big Red Barn. All rights reserved.
          </Text>
          <HStack mt={{ base: 4, md: 0 }} spacing={4}>
            <Link href="#" color={textColor} _hover={{ color: accentColor }}>
              Privacy Policy
            </Link>
            <Link href="#" color={textColor} _hover={{ color: accentColor }}>
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Container>
    </MotionBox>
  );
};

export default Footer;