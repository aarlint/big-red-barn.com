import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  IconButton,
  Avatar,
  Flex,
  useColorModeValue,
  VStack,
  HStack
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const MotionBox = motion(Box);

const Reviews = () => {
  // State for current review
  const [currentReview, setCurrentReview] = useState(0);
  
  // Colors
  const bgColor = useColorModeValue('white', 'charcoal.900');
  const textColor = useColorModeValue('charcoal.800', 'cream.500');
  const headingColor = useColorModeValue('forest.600', 'gold.500');
  const quoteColor = useColorModeValue('gold.500', 'gold.400');
  const cardBgColor = useColorModeValue('cream.50', 'charcoal.800');
  
  // Reviews data
  const reviews = [
    {
      name: 'Sarah & Michael Johnson',
      role: 'Wedding Couple',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      text: 'Our wedding at the Big Red Barn was absolutely magical. The rustic charm combined with the stunning mountain backdrop created the perfect setting for our special day. The staff went above and beyond to ensure everything ran smoothly. We couldn\'t have asked for a more beautiful venue!',
      date: 'June 2024'
    },
    {
      name: 'David Thompson',
      role: 'Corporate Event Planner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      text: 'We hosted our annual company retreat at the Big Red Barn and it was a huge success. The unique venue provided the perfect blend of professional amenities and relaxed atmosphere that encouraged team bonding. The scenic location and excellent service made our event truly memorable.',
      date: 'September 2023'
    },
    {
      name: 'Jennifer & Robert Williams',
      role: 'Anniversary Celebration',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      text: 'We celebrated our 25th wedding anniversary at the Big Red Barn and it was everything we hoped for. The venue\'s rustic elegance provided the perfect backdrop for our celebration. Our guests were impressed by the beautiful setting and the attention to detail. Thank you for making our anniversary so special!',
      date: 'July 2023'
    },
    {
      name: 'The Martinez Family',
      role: 'Family Reunion',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      text: 'Our family reunion at the Big Red Barn was a huge hit with everyone from grandparents to the little ones. The spacious grounds gave the kids plenty of room to play while the adults enjoyed catching up in the beautiful barn. The staff was accommodating and helped us create lasting memories.',
      date: 'August 2023'
    }
  ];
  
  // Navigate to next/previous review
  const navigateReview = (direction) => {
    if (direction === 'next') {
      setCurrentReview((prev) => 
        prev === reviews.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentReview((prev) => 
        prev === 0 ? reviews.length - 1 : prev - 1
      );
    }
  };
  
  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction === 'next' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'next' ? -300 : 300,
      opacity: 0
    })
  };
  
  // Track animation direction
  const [direction, setDirection] = useState('next');
  
  // Handle navigation with direction tracking
  const handleNavigation = (dir) => {
    setDirection(dir);
    navigateReview(dir);
  };
  
  return (
    <Box
      as="section"
      id="reviews"
      py={16}
      bg={bgColor}
      color={textColor}
    >
      <Container maxW="container.xl">
        <AnimatedSection animation="fadeIn">
          <Box textAlign="center" mb={12}>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              fontFamily="heading"
              color={headingColor}
              mb={4}
            >
              What Our Guests Say
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="800px" mx="auto">
              Don't just take our word for it. Here's what some of our past clients have to say about their experience at the Big Red Barn.
            </Text>
          </Box>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeIn" delay={0.2}>
          <Box 
            position="relative" 
            maxW="900px" 
            mx="auto"
            px={{ base: 4, md: 12 }}
            py={8}
          >
            {/* Review Carousel */}
            <Box 
              position="relative" 
              height={{ base: '400px', md: '300px' }}
              overflow="hidden"
            >
              <AnimatePresence custom={direction} mode="wait">
                <MotionBox
                  key={currentReview}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  position="absolute"
                  width="100%"
                >
                  <Box
                    bg={cardBgColor}
                    p={{ base: 6, md: 8 }}
                    borderRadius="lg"
                    boxShadow="lg"
                    position="relative"
                  >
                    <FaQuoteLeft 
                      size={40} 
                      color={quoteColor} 
                      style={{ 
                        position: 'absolute', 
                        top: '20px', 
                        left: '20px', 
                        opacity: 0.3 
                      }} 
                    />
                    
                    <VStack spacing={6} align="center" pt={6}>
                      <Text 
                        fontSize={{ base: 'md', md: 'lg' }} 
                        fontStyle="italic"
                        textAlign="center"
                        zIndex={1}
                      >
                        "{reviews[currentReview].text}"
                      </Text>
                      
                      <VStack spacing={2}>
                        <Avatar 
                          size="lg" 
                          src={reviews[currentReview].image} 
                          name={reviews[currentReview].name}
                          border="2px solid"
                          borderColor={quoteColor}
                        />
                        
                        <Box textAlign="center">
                          <Text fontWeight="bold" fontSize="md">
                            {reviews[currentReview].name}
                          </Text>
                          <Text fontSize="sm" opacity={0.8}>
                            {reviews[currentReview].role} • {reviews[currentReview].date}
                          </Text>
                        </Box>
                      </VStack>
                    </VStack>
                  </Box>
                </MotionBox>
              </AnimatePresence>
            </Box>
            
            {/* Navigation Buttons */}
            <HStack 
              justify="center" 
              spacing={4} 
              mt={6}
            >
              <IconButton
                icon={<ChevronLeftIcon boxSize={6} />}
                aria-label="Previous review"
                onClick={() => handleNavigation('prev')}
                variant="ghost"
                colorScheme="gray"
                size="lg"
                isRound
              />
              
              {/* Indicators */}
              <HStack spacing={2}>
                {reviews.map((_, index) => (
                  <Box
                    key={index}
                    w={2}
                    h={2}
                    borderRadius="full"
                    bg={index === currentReview ? headingColor : 'gray.300'}
                    cursor="pointer"
                    onClick={() => {
                      setDirection(index > currentReview ? 'next' : 'prev');
                      setCurrentReview(index);
                    }}
                  />
                ))}
              </HStack>
              
              <IconButton
                icon={<ChevronRightIcon boxSize={6} />}
                aria-label="Next review"
                onClick={() => handleNavigation('next')}
                variant="ghost"
                colorScheme="gray"
                size="lg"
                isRound
              />
            </HStack>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Reviews;