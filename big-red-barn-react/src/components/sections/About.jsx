import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Flex,
  VStack,
  HStack,
  Icon
} from '@chakra-ui/react';
import { FaCheckCircle, FaMountain, FaTree, FaHome, FaHistory } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';

const About = () => {
  // Colors
  const bgColor = useColorModeValue('cream.100', 'charcoal.800');
  const textColor = useColorModeValue('charcoal.800', 'cream.500');
  const headingColor = useColorModeValue('forest.600', 'gold.500');
  const iconColor = useColorModeValue('forest.600', 'gold.400');
  const featureBgColor = useColorModeValue('white', 'charcoal.900');
  
  // Features
  const features = [
    {
      icon: FaMountain,
      title: 'Scenic Location',
      description: 'Set against the picturesque backdrop of the Mission Mountains, across from the historic St. Ignatius Mission Church.'
    },
    {
      icon: FaTree,
      title: 'Natural Beauty',
      description: 'The property is divided by Mission Creek, adding to its rustic charm and scenic beauty.'
    },
    {
      icon: FaHome,
      title: 'Historic Structure',
      description: 'A 90+ year old barn with authentic architecture that has been part of the community since the 1930s.'
    },
    {
      icon: FaHistory,
      title: 'Cultural Heritage',
      description: 'Once used for dairy operations by Jesuits and later for theater productions and community events.'
    }
  ];
  
  // Amenities
  const amenities = [
    'Unique two-story barn structure',
    'Upper floor for events and gatherings',
    'Spacious interior for various event types',
    'Historic setting with authentic character',
    'Beautiful outdoor areas with Mission Creek',
    'Scenic views of the Mission Mountains',
    'Located across from the historic St. Ignatius Mission Church',
    'Versatile space for weddings, theater productions, and community events',
    'Rustic charm with recent roof renovation',
    'Convenient location in Saint Ignatius, Montana'
  ];
  
  return (
    <Box
      as="section"
      id="about"
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
              About Our Venue
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="800px" mx="auto">
              Discover what makes the Big Red Barn a unique and cherished venue for special events in Montana.
            </Text>
          </Box>
        </AnimatedSection>
        
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} mb={16}>
          <AnimatedSection animation="slideIn" delay={0.2}>
            <Box>
              <Heading
                as="h3"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="semibold"
                fontFamily="heading"
                mb={6}
              >
                Our Story
              </Heading>
              
              <Text fontSize="lg" mb={4}>
                The Big Red Barn is located in Saint Ignatius, Montana, set against the picturesque backdrop of the Mission Mountains. Originally built over 90 years ago, this historic barn was once used for cattle and theater productions.
              </Text>
              
              <Text fontSize="lg" mb={4}>
                The property is divided by Mission Creek, adding to its rustic charm and scenic beauty. This unique venue offers a combination of history and natural beauty, making it an ideal location for various events.
              </Text>
              
              <Text fontSize="lg">
                Whether you're celebrating a wedding, hosting a corporate retreat, or gathering for a family reunion, our venue provides a perfect blend of Montana's natural splendor and historic architecture that will make your event truly memorable.
              </Text>
            </Box>
          </AnimatedSection>
          
          <AnimatedSection animation="slideIn" delay={0.4}>
            <Image
              src="/images/large/2.jpg"
              alt="The Big Red Barn"
              borderRadius="lg"
              boxShadow="xl"
              objectFit="cover"
              height="100%"
            />
          </AnimatedSection>
        </SimpleGrid>
        
        <AnimatedSection animation="fadeIn" delay={0.3}>
          <Heading
            as="h3"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="semibold"
            fontFamily="heading"
            textAlign="center"
            mb={8}
          >
            What Makes Us Special
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={16}>
            {features.map((feature, index) => (
              <Box
                key={index}
                bg={featureBgColor}
                p={6}
                borderRadius="lg"
                boxShadow="md"
                transition="transform 0.3s ease"
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <VStack spacing={4} align="center" textAlign="center">
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    rounded="full"
                    bg={iconColor}
                    color="white"
                    mb={1}
                  >
                    <Icon as={feature.icon} boxSize={8} />
                  </Flex>
                  
                  <Heading
                    as="h4"
                    fontSize="xl"
                    fontWeight="bold"
                    fontFamily="heading"
                  >
                    {feature.title}
                  </Heading>
                  
                  <Text>{feature.description}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeIn" delay={0.4}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            <Box>
              <Heading
                as="h3"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="semibold"
                fontFamily="heading"
                mb={6}
              >
                Venue Features
              </Heading>
              
              <List spacing={3}>
                {amenities.map((amenity, index) => (
                  <ListItem key={index}>
                    <HStack align="flex-start">
                      <ListIcon as={FaCheckCircle} color={iconColor} mt={1} />
                      <Text fontSize="lg">{amenity}</Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </Box>
            
            <Image
              src="/images/large/3.jpg"
              alt="Barn interior"
              borderRadius="lg"
              boxShadow="xl"
              objectFit="cover"
              height={{ base: '300px', lg: 'auto' }}
            />
          </SimpleGrid>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default About;