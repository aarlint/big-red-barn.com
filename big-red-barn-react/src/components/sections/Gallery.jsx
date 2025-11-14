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
  
  // Gallery images with optimized versions
  const galleryImages = [
    {
      thumbnail: '/images/thumbnails/1-DSC_8126.jpg',
      medium: '/images/medium/1-DSC_8126.jpg',
      large: '/images/large/1-DSC_8126.jpg',
      alt: 'Big Red Barn gallery image 1'
    },
    {
      thumbnail: '/images/thumbnails/2-DSC_8165.jpg',
      medium: '/images/medium/2-DSC_8165.jpg',
      large: '/images/large/2-DSC_8165.jpg',
      alt: 'Big Red Barn gallery image 2'
    },
    {
      thumbnail: '/images/thumbnails/3-DSC_8176.jpg',
      medium: '/images/medium/3-DSC_8176.jpg',
      large: '/images/large/3-DSC_8176.jpg',
      alt: 'Big Red Barn gallery image 3'
    },
    {
      thumbnail: '/images/thumbnails/4-DSC_8191.jpg',
      medium: '/images/medium/4-DSC_8191.jpg',
      large: '/images/large/4-DSC_8191.jpg',
      alt: 'Big Red Barn gallery image 4'
    },
    {
      thumbnail: '/images/thumbnails/5-DSC_8213.jpg',
      medium: '/images/medium/5-DSC_8213.jpg',
      large: '/images/large/5-DSC_8213.jpg',
      alt: 'Big Red Barn gallery image 5'
    },
    {
      thumbnail: '/images/thumbnails/6-DSC_8219.jpg',
      medium: '/images/medium/6-DSC_8219.jpg',
      large: '/images/large/6-DSC_8219.jpg',
      alt: 'Big Red Barn gallery image 6'
    },
    {
      thumbnail: '/images/thumbnails/7-DSC_8255.jpg',
      medium: '/images/medium/7-DSC_8255.jpg',
      large: '/images/large/7-DSC_8255.jpg',
      alt: 'Big Red Barn gallery image 7'
    },
    {
      thumbnail: '/images/thumbnails/8-DSC_8263.jpg',
      medium: '/images/medium/8-DSC_8263.jpg',
      large: '/images/large/8-DSC_8263.jpg',
      alt: 'Big Red Barn gallery image 8'
    },
    {
      thumbnail: '/images/thumbnails/9-DSC_8291.jpg',
      medium: '/images/medium/9-DSC_8291.jpg',
      large: '/images/large/9-DSC_8291.jpg',
      alt: 'Big Red Barn gallery image 9'
    },
    {
      thumbnail: '/images/thumbnails/10-DSC_8324.jpg',
      medium: '/images/medium/10-DSC_8324.jpg',
      large: '/images/large/10-DSC_8324.jpg',
      alt: 'Big Red Barn gallery image 10'
    },
    {
      thumbnail: '/images/thumbnails/11-DSC_8329.jpg',
      medium: '/images/medium/11-DSC_8329.jpg',
      large: '/images/large/11-DSC_8329.jpg',
      alt: 'Big Red Barn gallery image 11'
    },
    {
      thumbnail: '/images/thumbnails/12-DSC_8341.jpg',
      medium: '/images/medium/12-DSC_8341.jpg',
      large: '/images/large/12-DSC_8341.jpg',
      alt: 'Big Red Barn gallery image 12'
    },
    {
      thumbnail: '/images/thumbnails/13-DSC_8350.jpg',
      medium: '/images/medium/13-DSC_8350.jpg',
      large: '/images/large/13-DSC_8350.jpg',
      alt: 'Big Red Barn gallery image 13'
    },
    {
      thumbnail: '/images/thumbnails/14-DSC_8375.jpg',
      medium: '/images/medium/14-DSC_8375.jpg',
      large: '/images/large/14-DSC_8375.jpg',
      alt: 'Big Red Barn gallery image 14'
    },
    {
      thumbnail: '/images/thumbnails/15-DSC_8414.jpg',
      medium: '/images/medium/15-DSC_8414.jpg',
      large: '/images/large/15-DSC_8414.jpg',
      alt: 'Big Red Barn gallery image 15'
    },
    {
      thumbnail: '/images/thumbnails/16-DSC_8419.jpg',
      medium: '/images/medium/16-DSC_8419.jpg',
      large: '/images/large/16-DSC_8419.jpg',
      alt: 'Big Red Barn gallery image 16'
    },
    {
      thumbnail: '/images/thumbnails/17-DSC_8422.jpg',
      medium: '/images/medium/17-DSC_8422.jpg',
      large: '/images/large/17-DSC_8422.jpg',
      alt: 'Big Red Barn gallery image 17'
    },
    {
      thumbnail: '/images/thumbnails/18-DSC_8434.jpg',
      medium: '/images/medium/18-DSC_8434.jpg',
      large: '/images/large/18-DSC_8434.jpg',
      alt: 'Big Red Barn gallery image 18'
    },
    {
      thumbnail: '/images/thumbnails/19-DSC_8437.jpg',
      medium: '/images/medium/19-DSC_8437.jpg',
      large: '/images/large/19-DSC_8437.jpg',
      alt: 'Big Red Barn gallery image 19'
    },
    {
      thumbnail: '/images/thumbnails/20-DSC_8450.jpg',
      medium: '/images/medium/20-DSC_8450.jpg',
      large: '/images/large/20-DSC_8450.jpg',
      alt: 'Big Red Barn gallery image 20'
    },
    {
      thumbnail: '/images/thumbnails/21-DSC_8476.jpg',
      medium: '/images/medium/21-DSC_8476.jpg',
      large: '/images/large/21-DSC_8476.jpg',
      alt: 'Big Red Barn gallery image 21'
    },
    {
      thumbnail: '/images/thumbnails/22-DSC_8504.jpg',
      medium: '/images/medium/22-DSC_8504.jpg',
      large: '/images/large/22-DSC_8504.jpg',
      alt: 'Big Red Barn gallery image 22'
    },
    {
      thumbnail: '/images/thumbnails/23-DSC_8512.jpg',
      medium: '/images/medium/23-DSC_8512.jpg',
      large: '/images/large/23-DSC_8512.jpg',
      alt: 'Big Red Barn gallery image 23'
    },
    {
      thumbnail: '/images/thumbnails/24-DSC_8573.jpg',
      medium: '/images/medium/24-DSC_8573.jpg',
      large: '/images/large/24-DSC_8573.jpg',
      alt: 'Big Red Barn gallery image 24'
    },
    {
      thumbnail: '/images/thumbnails/25-DSC_8578.jpg',
      medium: '/images/medium/25-DSC_8578.jpg',
      large: '/images/large/25-DSC_8578.jpg',
      alt: 'Big Red Barn gallery image 25'
    },
    {
      thumbnail: '/images/thumbnails/26-barn-interior.jpg',
      medium: '/images/medium/26-barn-interior.jpg',
      large: '/images/large/26-barn-interior.jpg',
      alt: 'Big Red Barn interior view'
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
                    src={image.thumbnail}
                    alt={image.alt}
                    width="100%"
                    height="250px"
                    objectFit="cover"
                    loading="lazy"
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
                    src={galleryImages[selectedImage].medium}
                    alt={galleryImages[selectedImage].alt}
                    width="100%"
                    maxH="80vh"
                    objectFit="contain"
                  />
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