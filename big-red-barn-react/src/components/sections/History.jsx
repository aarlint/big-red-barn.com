import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
  VStack,
  Divider,
  useColorModeValue,
  Icon,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { FaCheckCircle, FaLandmark } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import Layout from '../layout/Layout';

const History = () => {
  // Colors
  const bgColor = useColorModeValue('cream.50', 'charcoal.900');
  const textColor = useColorModeValue('charcoal.800', 'cream.500');
  const headingColor = useColorModeValue('forest.600', 'gold.500');
  const accentColor = useColorModeValue('gold.600', 'gold.400');
  const dividerColor = useColorModeValue('gray.300', 'gray.600');
  const timelineBgColor = useColorModeValue('white', 'charcoal.800');
  
  // Historical milestones
  const milestones = [
    {
      year: '1930s',
      title: 'Original Construction',
      description: 'The Big Red Barn was built by Jesuits for their dairy operation, located across from the historic St. Ignatius Mission Church. It quickly became a central part of the community.'
    },
    {
      year: '1940s-80s',
      title: 'Brown Family Ownership',
      description: 'The barn transitioned to cattle raising under the ownership of the Brown family, continuing its agricultural legacy in the Mission Valley.'
    },
    {
      year: '1993',
      title: 'Arlint Family Purchase',
      description: 'The Arlint family purchased the barn, utilizing the lower floor for livestock and the upper floor for hosting community events and gatherings.'
    },
    {
      year: '1990s-2000s',
      title: 'Theater & Community Hub',
      description: 'Rita Tingey, with her performing arts background, directed local theater productions and community events in the barn, establishing it as a cultural center for St. Ignatius.'
    },
    {
      year: 'Recent Years',
      title: 'Renovation & Restoration',
      description: 'A new roof was installed as part of ongoing restoration efforts to preserve this historic structure for future generations.'
    },
    {
      year: 'Today',
      title: 'Continuing Legacy',
      description: 'The barn is once again a vibrant community hub, hosting events like haunted barn attractions, theater productions, and private event rentals while maintaining its historical significance.'
    }
  ];
  
  // Historical facts
  const historicalFacts = [
    'The barn is located across from the historic St. Ignatius Mission Church, creating a significant historical landmark pairing.',
    'The property is divided by Mission Creek, adding to its rustic charm and scenic beauty.',
    'The barn has a unique two-story structure, with the lower level originally used for livestock and the upper level for events.',
    'Local theater productions were regularly performed in the barn, making it a cultural center for the community.',
    'Rita Tingey has been instrumental in preserving the barn as a vital resource for the St. Ignatius community.',
    'The barn has been standing for over 90 years and continues to be an important part of the local heritage.',
    'The recent roof renovation has ensured the barn will continue to serve the community for many more years.'
  ];
  
  return (
      <Box
        as="section"
        id="history"
        py={16}
        bg={bgColor}
        color={textColor}
      >
        <Container maxW="container.xl">
          {/* Hero Section */}
          <AnimatedSection animation="fadeIn">
            <Box textAlign="center" mb={16}>
              <Heading
                as="h1"
                fontSize={{ base: '4xl', md: '5xl' }}
                fontWeight="bold"
                fontFamily="heading"
                color={headingColor}
                mb={6}
              >
                Our Rich History
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="800px" mx="auto">
                Discover the fascinating story of the Big Red Barn, from its origins as a working barn to its transformation into one of Montana's most cherished event venues.
              </Text>
            </Box>
          </AnimatedSection>
          
          {/* Main Content */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} mb={20}>
            <AnimatedSection animation="slideIn" delay={0.2}>
              <VStack spacing={6} align="start">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl' }}
                  fontWeight="semibold"
                  fontFamily="heading"
                  color={headingColor}
                >
                  Over 90 Years of History
                </Heading>
                
                <Text fontSize="lg">
                  Standing proudly across from the historic St. Ignatius Mission Church for over 90 years, the Big Red Barn has been a silent witness to the changing landscape of Montana and the lives of those who have called this beautiful region home.
                </Text>
                
                <Text fontSize="lg">
                  Originally built in the 1930s by Jesuits for their dairy operation, the barn later transitioned to cattle raising under the Brown family. In 1993, the Arlint family purchased this historic structure, utilizing the lower floor for livestock and the upper floor for hosting community events.
                </Text>
                
                <Text fontSize="lg">
                  Rita Tingey, with her performing arts background, brought new life to the barn by directing local theater productions and community events, establishing it as a cultural center for St. Ignatius. The property, divided by Mission Creek, offers a unique blend of history and natural beauty.
                </Text>
                
                <Text fontSize="lg">
                  Today, with a new roof in place, the barn is once again a vibrant community hub. Plans include haunted barn events, theater productions, and private event rentals. Rita Tingey remains dedicated to restoring the barn as a vital resource for St. Ignatius, ensuring it continues to be a place for gatherings, performances, and celebrations.
                </Text>
              </VStack>
            </AnimatedSection>
            
            <AnimatedSection animation="slideIn" delay={0.4}>
              <Image
                src="/images/large/2.jpg"
                alt="Historic photo of the Big Red Barn"
                borderRadius="lg"
                boxShadow="xl"
                width="100%"
                height="auto"
                objectFit="cover"
              />
            </AnimatedSection>
          </SimpleGrid>
          
          {/* Timeline */}
          <AnimatedSection animation="fadeIn" delay={0.3}>
            <Box mb={20}>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="semibold"
                fontFamily="heading"
                color={headingColor}
                textAlign="center"
                mb={12}
              >
                Timeline of the Big Red Barn
              </Heading>
              
              <VStack spacing={0} position="relative" align="stretch">
                {/* Center line */}
                <Box
                  position="absolute"
                  left="50%"
                  top={0}
                  bottom={0}
                  width="2px"
                  bg={dividerColor}
                  transform="translateX(-50%)"
                  display={{ base: 'none', md: 'block' }}
                />
                
                {milestones.map((milestone, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="fadeIn" 
                    delay={0.1 * index}
                  >
                    <Flex
                      direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                      mb={10}
                      position="relative"
                    >
                      {/* Year marker (desktop) */}
                      <Box
                        position="absolute"
                        left="50%"
                        top="0"
                        transform="translateX(-50%)"
                        width="50px"
                        height="50px"
                        borderRadius="full"
                        bg={accentColor}
                        color="white"
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        fontSize="lg"
                        zIndex={1}
                      >
                        {milestone.year}
                      </Box>
                      
                      {/* Content */}
                      <Box
                        width={{ base: '100%', md: '45%' }}
                        bg={timelineBgColor}
                        p={6}
                        borderRadius="lg"
                        boxShadow="md"
                      >
                        {/* Year marker (mobile) */}
                        <Flex
                          align="center"
                          mb={4}
                          display={{ base: 'flex', md: 'none' }}
                        >
                          <Box
                            width="40px"
                            height="40px"
                            borderRadius="full"
                            bg={accentColor}
                            color="white"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontWeight="bold"
                            mr={4}
                          >
                            {milestone.year}
                          </Box>
                          <Heading
                            as="h3"
                            fontSize="xl"
                            fontWeight="bold"
                            fontFamily="heading"
                          >
                            {milestone.title}
                          </Heading>
                        </Flex>
                        
                        {/* Desktop heading */}
                        <Heading
                          as="h3"
                          fontSize="xl"
                          fontWeight="bold"
                          fontFamily="heading"
                          mb={4}
                          display={{ base: 'none', md: 'block' }}
                        >
                          {milestone.title}
                        </Heading>
                        
                        <Text>{milestone.description}</Text>
                      </Box>
                      
                      {/* Spacer */}
                      <Box width={{ base: '0%', md: '10%' }} />
                    </Flex>
                  </AnimatedSection>
                ))}
              </VStack>
            </Box>
          </AnimatedSection>
          
          {/* Historical Facts */}
          <AnimatedSection animation="fadeIn" delay={0.5}>
            <Box
              bg={timelineBgColor}
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              mb={16}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}
                mb={6}
              >
                <Icon
                  as={FaLandmark}
                  boxSize={12}
                  color={accentColor}
                  mr={{ base: 0, md: 6 }}
                  mb={{ base: 4, md: 0 }}
                />
                
                <Box>
                  <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="semibold"
                    fontFamily="heading"
                    color={headingColor}
                    mb={4}
                  >
                    Interesting Historical Facts
                  </Heading>
                  
                  <Text fontSize="lg" mb={6}>
                    Throughout its long history, the Big Red Barn has accumulated many fascinating stories and unique features. Here are some interesting facts you might not know:
                  </Text>
                  
                  <List spacing={3}>
                    {historicalFacts.map((fact, index) => (
                      <ListItem key={index} display="flex">
                        <ListIcon as={FaCheckCircle} color={accentColor} mt={1} />
                        <Text fontSize="md">{fact}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Flex>
            </Box>
          </AnimatedSection>
          
          {/* Preservation Efforts */}
          <AnimatedSection animation="fadeIn" delay={0.6}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl' }}
                  fontWeight="semibold"
                  fontFamily="heading"
                  color={headingColor}
                  mb={6}
                >
                  Restoration & Future Vision
                </Heading>
                
                <Text fontSize="lg" mb={4}>
                  The recent installation of a new roof marks a significant milestone in our ongoing efforts to preserve and restore the Big Red Barn. This essential improvement ensures that this piece of Montana's agricultural and cultural heritage will continue to stand for generations to come.
                </Text>
                
                <Text fontSize="lg" mb={4}>
                  With the hard work of Scott and Rita Tingey, the barn is being revitalized as a vital community resource. The restoration balances necessary updates for safety and comfort while honoring the historical significance and original character of this remarkable structure.
                </Text>
                
                <Text fontSize="lg">
                  The community's positive response to these restoration efforts highlights the barn's enduring significance to St. Ignatius. When you visit the Big Red Barn, you're not just experiencing a venue – you're participating in the continuing story of a cherished local landmark.
                </Text>
              </Box>
              
              <Image
                src="/images/large/3.jpg"
                alt="Interior of the Big Red Barn"
                borderRadius="lg"
                boxShadow="xl"
                height={{ base: '300px', lg: 'auto' }}
                objectFit="cover"
              />
            </SimpleGrid>
          </AnimatedSection>
        </Container>
      </Box>
  );
};

export default History;