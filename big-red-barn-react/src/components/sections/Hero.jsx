import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  useColorModeValue,
  Image,
  VStack,
  HStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import AnimatedSection from '../ui/AnimatedSection';

const MotionBox = motion(Box);

const Hero = () => {
  // Colors
  const bgOverlayColor = useColorModeValue(
    'rgba(0, 0, 0, 0.4)',
    'rgba(0, 0, 0, 0.6)'
  );
  const textColor = 'cream.600';
  const buttonBgColor = useColorModeValue('gold.600', 'gold.500');
  const buttonHoverBgColor = useColorModeValue('gold.700', 'gold.400');
  
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.5,
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  
  return (
    <Box
      as="section"
      id="hero"
      position="relative"
      height="100vh"
      minH="600px"
      maxH="1080px"
      width="100%"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('/images/large/1.jpg')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        zIndex={-2}
      />
      
      {/* Dark Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={bgOverlayColor}
        zIndex={-1}
      />
      
      {/* Content */}
      <Container 
        maxW="container.xl" 
        height="100%" 
        position="relative"
        zIndex={1}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          textAlign="center"
          height="100%"
          color={textColor}
          px={4}
        >
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <VStack spacing={6}>
              <MotionBox
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <Heading
                  as="h1"
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  fontWeight="bold"
                  fontFamily="heading"
                  mb={4}
                >
                  Welcome to the Big Red Barn
                </Heading>
                
                <Text
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  maxW="800px"
                  mb={8}
                >
                  Nestled in the heart of Saint Ignatius, Montana, our historic venue offers a rustic and
                  charming setting for your special events.
                </Text>
              </MotionBox>
              
              <HStack spacing={6}>
                <MotionBox
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Button
                    as={ScrollLink}
                    to="events"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    size="lg"
                    bg={buttonBgColor}
                    color="charcoal.900"
                    _hover={{ bg: buttonHoverBgColor }}
                    fontWeight="bold"
                    px={8}
                  >
                    Explore Events
                  </Button>
                </MotionBox>
                
                <MotionBox
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    as={ScrollLink}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    size="lg"
                    bg="forest.600"
                    color="white"
                    _hover={{ bg: "forest.700" }}
                    fontWeight="bold"
                    px={8}
                  >
                    Book by Email
                  </Button>
                </MotionBox>
                
                <MotionBox
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    as={ScrollLink}
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    size="lg"
                    variant="outline"
                    borderColor="cream.600"
                    color="cream.600"
                    _hover={{ bg: 'whiteAlpha.200' }}
                    fontWeight="bold"
                    px={8}
                  >
                    View Gallery
                  </Button>
                </MotionBox>
              </HStack>
            </VStack>
          </AnimatedSection>
        </Flex>
      </Container>
      
      {/* Scroll Indicator */}
      <Box
        position="absolute"
        bottom="30px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={1}
      >
        <MotionBox
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        >
          <ScrollLink to="gallery" spy={true} smooth={true} offset={-100} duration={500}>
            <Box
              width="30px"
              height="50px"
              border="2px solid"
              borderColor="cream.600"
              borderRadius="full"
              position="relative"
              cursor="pointer"
            >
              <Box
                position="absolute"
                top="8px"
                left="50%"
                transform="translateX(-50%)"
                width="6px"
                height="6px"
                borderRadius="full"
                bg="cream.600"
                animation="scrollDown 1.5s infinite"
              />
            </Box>
          </ScrollLink>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Hero;