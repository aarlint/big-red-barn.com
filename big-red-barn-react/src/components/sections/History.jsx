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
      year: '1910',
      title: 'Original Construction',
      description: 'The Big Red Barn was originally built as part of the Johnson Family Ranch, one of the largest cattle operations in the Saint Ignatius area at the time.'
    },
    {
      year: '1945',
      title: 'Expansion & Renovation',
      description: 'After World War II, the barn was expanded to accommodate the growing ranch operations, adding the distinctive cupola that remains a landmark feature today.'
    },
    {
      year: '1978',
      title: 'Historic Designation',
      description: 'The barn was recognized for its historical significance and added to the Montana Register of Historic Places, ensuring its preservation for future generations.'
    },
    {
      year: '2005',
      title: 'Conversion to Event Venue',
      description: 'The Johnson family converted the barn into an event venue, carefully preserving its historic character while adding modern amenities for comfort and convenience.'
    },
    {
      year: '2018',
      title: 'Major Restoration',
      description: 'A comprehensive restoration project was undertaken to reinforce the structure, update facilities, and enhance the grounds while maintaining the barn\'s authentic rustic charm.'
    },
    {
      year: 'Today',
      title: 'Continuing Legacy',
      description: 'The Big Red Barn continues to be a beloved venue for weddings, events, and gatherings, sharing its rich history and unique character with new generations.'
    }
  ];
  
  // Historical facts
  const historicalFacts = [
    'The original timber used in construction was sourced from the nearby Mission Mountains.',
    'The distinctive red color comes from a traditional milk paint recipe that has been maintained through the years.',
    'During Prohibition, the barn\'s hayloft was rumored to have been used for secret gatherings and celebrations.',
    'The weathervane on top of the cupola is original to the 1945 renovation.',
    'Famous Montana artist Charles M. Russell is said to have visited the barn in the 1920s and sketched it in his notebook.',
    'The barn survived a major fire in 1963 that destroyed several other buildings on the property.',
    'Some of the original stalls and feeding troughs have been preserved and incorporated into the venue\'s rustic decor.'
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
                  A Century of Stories
                </Heading>
                
                <Text fontSize="lg">
                  Standing proudly against the backdrop of the Mission Mountains for over a century, the Big Red Barn has been a silent witness to the changing landscape of Montana and the lives of those who have called this beautiful region home.
                </Text>
                
                <Text fontSize="lg">
                  Originally built in 1910 as part of the Johnson Family Ranch, the barn served as the heart of one of the area's largest cattle operations. Its sturdy timber frame and distinctive red exterior have become an iconic landmark in the Saint Ignatius valley.
                </Text>
                
                <Text fontSize="lg">
                  Through the years, the barn has adapted to changing times while maintaining its historic character. From housing livestock and storing hay to sheltering equipment and eventually welcoming guests for special events, the Big Red Barn has always been a place where memories are made.
                </Text>
                
                <Text fontSize="lg">
                  Today, we are proud to continue the legacy of this historic structure by sharing it with couples, families, and organizations looking for a venue with authentic character and a story to tell.
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
                  Preservation Efforts
                </Heading>
                
                <Text fontSize="lg" mb={4}>
                  Preserving the historical integrity of the Big Red Barn is a labor of love and commitment. Our ongoing preservation efforts ensure that this piece of Montana's agricultural heritage will continue to stand for generations to come.
                </Text>
                
                <Text fontSize="lg" mb={4}>
                  We work with historical preservation experts to maintain the original features of the barn while making necessary updates for safety and comfort. From the hand-hewn beams to the authentic hardware, we strive to honor the craftsmanship of those who built this remarkable structure.
                </Text>
                
                <Text fontSize="lg">
                  When you visit the Big Red Barn, you're not just experiencing a venue – you're stepping into a living piece of history that continues to evolve while respecting its roots.
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