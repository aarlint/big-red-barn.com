import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  Container, 
  useColorModeValue 
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const NotFoundPage = () => {
  // Colors
  const bgColor = useColorModeValue('cream.50', 'charcoal.900');
  const textColor = useColorModeValue('charcoal.800', 'cream.500');
  const accentColor = useColorModeValue('forest.600', 'gold.500');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  
  return (
    <Layout>
      <Box 
        as="main" 
        bg={bgColor} 
        color={textColor}
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={20}
      >
        <Container maxW="container.md">
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <VStack spacing={8} textAlign="center">
              <Heading 
                as="h1" 
                size="4xl" 
                fontFamily="heading"
                color={accentColor}
              >
                404
              </Heading>
              
              <Heading 
                as="h2" 
                size="xl" 
                fontFamily="heading"
              >
                Page Not Found
              </Heading>
              
              <Text fontSize="lg" maxW="lg">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
              </Text>
              
              <Button
                as={RouterLink}
                to="/"
                size="lg"
                variant="primary"
                mt={4}
              >
                Return Home
              </Button>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;