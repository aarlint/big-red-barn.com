import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  useColorModeValue,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const MotionBox = motion(Box);

const Gallery = () => {
  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Colors
  const bgColor = useColorModeValue('cream.100', 'charcoal.800');
  const textColor = useColorModeValue('charcoal.800', 'cream.500');
  const headingColor = useColorModeValue('forest.600', 'gold.500');
  
  // Gallery images
  const galleryImages = [
    {
      src: '/images/large/1.jpg',
      alt: 'Big Red Barn exterior view',
      caption: 'The iconic red barn exterior'
    },
    {
      src: '/images/large/2.jpg',
      alt: 'Big Red Barn with white fence',
      caption: 'Rustic charm with white fence'
    },
    {
      src: '/images/large/3.jpg',
      alt: 'Big Red Barn side view',
      caption: 'Side view of the barn'
    },
    {
      src: '/images/large/4.jpg',
      alt: 'Interior of the barn set up for an event',
      caption: 'Interior setup for events'
    },
    {
      src: '/images/large/5.jpg',
      alt: 'Evening event at the barn',
      caption: 'Evening events with beautiful lighting'
    },
    {
      src: '/images/large/6.jpg',
      alt: 'Outdoor area of the barn',
      caption: 'Outdoor space for gatherings'
    }
  ];
  
  // Open image in modal
  const openImage = (index) => {
    setSelectedImage(index);
    onOpen();
  };
  
  // Navigate to next/previous image in modal
  const navigateImage = (direction) => {
    if (direction === 'next') {
      setSelectedImage((prev) => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    } else {
      setSelectedImage((prev) => 
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
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
  
  return (
    <Box
      as="section"
      id="gallery"
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
              Gallery
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="800px" mx="auto">
              Explore our beautiful venue through these images. From rustic interiors to stunning mountain views, the
              Big Red Barn offers a unique setting for your special events.
            </Text>
          </Box>
        </AnimatedSection>
        
        <AnimatedSection animation="staggered">
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
              {galleryImages.map((image, index) => (
                <MotionBox
                  key={index}
                  variants={itemVariants}
                  onClick={() => openImage(index)}
                  cursor="pointer"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.03)' }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width="100%"
                    height="250px"
                    objectFit="cover"
                  />
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionBox>
        </AnimatedSection>
        
        {/* Image Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
          <ModalOverlay bg="blackAlpha.800" />
          <ModalContent bg="transparent" boxShadow="none">
            <ModalCloseButton color="white" size="lg" />
            <ModalBody p={0} position="relative">
              <AnimatePresence mode="wait">
                <MotionBox
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  position="relative"
                >
                  <Image
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    width="100%"
                    maxH="80vh"
                    objectFit="contain"
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="blackAlpha.700"
                    p={4}
                    color="white"
                  >
                    <Text fontSize="lg" fontWeight="medium">
                      {galleryImages[selectedImage].caption}
                    </Text>
                  </Box>
                </MotionBox>
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              <IconButton
                icon={<ChevronLeftIcon boxSize={8} />}
                aria-label="Previous image"
                position="absolute"
                left={4}
                top="50%"
                transform="translateY(-50%)"
                onClick={() => navigateImage('prev')}
                bg="blackAlpha.700"
                color="white"
                _hover={{ bg: 'blackAlpha.800' }}
                size="lg"
                isRound
              />
              <IconButton
                icon={<ChevronRightIcon boxSize={8} />}
                aria-label="Next image"
                position="absolute"
                right={4}
                top="50%"
                transform="translateY(-50%)"
                onClick={() => navigateImage('next')}
                bg="blackAlpha.700"
                color="white"
                _hover={{ bg: 'blackAlpha.800' }}
                size="lg"
                isRound
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default Gallery;