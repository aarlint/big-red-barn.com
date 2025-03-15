import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  VStack,
  HStack,
  Icon,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Flex,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { FaHeart, FaCalendarAlt, FaUsers, FaUtensils, FaMusic, FaCamera, FaCheckCircle } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import Layout from '../layout/Layout';

const Weddings = () => {
  // Colors
  const bgColor = useColorModeValue('cream.50', 'charcoal.900');
  const textColor = useColorModeValue('charcoal.800', 'cream.500');
  const headingColor = useColorModeValue('forest.600', 'gold.500');
  const accentColor = useColorModeValue('gold.600', 'gold.400');
  const cardBgColor = useColorModeValue('white', 'charcoal.800');
  const statBgColor = useColorModeValue('forest.50', 'charcoal.700');
  const buttonBgColor = useColorModeValue('forest.600', 'forest.500');
  const buttonHoverBgColor = useColorModeValue('forest.700', 'forest.400');
  
  // Wedding packages
  const packages = [
    {
      name: 'Rustic Elegance',
      description: 'Our most popular wedding package, offering the perfect blend of rustic charm and elegant touches.',
      features: [
        'Exclusive use of the barn and grounds for 10 hours',
        'Seating for up to 150 guests',
        'Bridal suite and groom\'s quarters',
        'Tables and chairs included',
        'Basic sound system',
        'Rustic decor elements',
        'On-site coordinator for the day',
        'Parking attendant'
      ],
      price: '$4,500',
      popular: true
    },
    {
      name: 'Intimate Gathering',
      description: 'Perfect for smaller weddings with your closest family and friends in a cozy, intimate setting.',
      features: [
        'Exclusive use of the barn and grounds for 8 hours',
        'Seating for up to 75 guests',
        'Bridal suite access',
        'Tables and chairs included',
        'Basic sound system',
        'Minimal decor package',
        'On-site coordinator for the day'
      ],
      price: '$2,800',
      popular: false
    },
    {
      name: 'Grand Celebration',
      description: 'Our premium package for couples wanting the ultimate wedding experience with all the extras.',
      features: [
        'Exclusive use of the barn and grounds for 12 hours',
        'Seating for up to 200 guests',
        'Bridal suite and groom\'s quarters',
        'Tables, chairs, and premium linens',
        'Professional sound and lighting system',
        'Extensive decor package',
        'On-site coordinator for the day and rehearsal',
        'Parking attendants',
        'Day-after cleanup included',
        'Complimentary engagement photo session on the grounds'
      ],
      price: '$6,200',
      popular: false
    }
  ];
  
  // Wedding stats
  const stats = [
    { label: 'Weddings Hosted', value: '500+', icon: FaHeart, helpText: 'Since 2005' },
    { label: 'Acres of Grounds', value: '5', icon: FaUsers, helpText: 'For ceremonies & photos' },
    { label: 'Guest Capacity', value: '200', icon: FaCalendarAlt, helpText: 'Maximum seating' },
    { label: 'Years of Experience', value: '18', icon: FaCamera, helpText: 'Creating perfect days' }
  ];
  
  // Preferred vendors
  const vendors = [
    { category: 'Catering', companies: ['Mountain Table Catering', 'Rustic Roots Food Co.', 'Elegant Eats'] },
    { category: 'Photography', companies: ['Captured Moments', 'Mission Mountain Photography', 'Forever Frames'] },
    { category: 'Florists', companies: ['Wild Blooms', 'Montana Petals', 'Rustic Arrangements'] },
    { category: 'Music', companies: ['Big Sky Sound', 'Mountain Echo DJs', 'String Quartet Collective'] },
    { category: 'Bakeries', companies: ['Sweet Traditions', 'Flour & Sugar Cakery', 'Montana Made Desserts'] }
  ];
  
  return (
      <Box
        as="section"
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
                Weddings at the Big Red Barn
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="800px" mx="auto">
                Celebrate your special day in the romantic ambiance of our big red barn. 
                Our rustic venue offers the perfect backdrop for the wedding of your dreams.
              </Text>
            </Box>
          </AnimatedSection>
          
          {/* Main Image */}
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <Box
              position="relative"
              height={{ base: '300px', md: '500px' }}
              mb={16}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="xl"
            >
              <Image
                src="/images/wedding/yard.jpg"
                alt="Wedding at the Big Red Barn"
                objectFit="cover"
                width="100%"
                height="100%"
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="blackAlpha.600"
                p={6}
                color="white"
              >
                <Heading
                  as="h2"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight="semibold"
                  fontFamily="heading"
                >
                  Your Dream Wedding Awaits
                </Heading>
              </Box>
            </Box>
          </AnimatedSection>
          
          {/* Why Choose Us */}
          <AnimatedSection animation="fadeIn" delay={0.3}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} mb={20}>
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl' }}
                  fontWeight="semibold"
                  fontFamily="heading"
                  color={headingColor}
                  mb={6}
                >
                  Why Choose the Big Red Barn
                </Heading>
                
                <Text fontSize="lg" mb={4}>
                  The Big Red Barn offers a unique blend of rustic charm and modern amenities, creating the perfect setting for your special day. Our historic barn, set against the stunning backdrop of the Mission Mountains, provides a romantic and memorable venue for weddings of all sizes.
                </Text>
                
                <Text fontSize="lg" mb={4}>
                  From intimate gatherings to grand celebrations, our versatile space can be customized to match your vision. Our experienced team is dedicated to making your wedding day everything you've dreamed of and more.
                </Text>
                
                <List spacing={3} mt={6}>
                  {[
                    'Breathtaking mountain views and photo opportunities',
                    'Flexible indoor and outdoor ceremony options',
                    'Spacious reception area with dance floor',
                    'Dedicated bridal suite and groom\'s quarters',
                    'Experienced on-site coordinator to assist with planning',
                    'Preferred vendor list of trusted local professionals',
                    'Ample parking for guests'
                  ].map((item, index) => (
                    <ListItem key={index} display="flex">
                      <ListIcon as={FaCheckCircle} color={accentColor} mt={1} />
                      <Text>{item}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
              
              <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap={4}
                height={{ base: '400px', xl: '100%' }}
              >
                <GridItem rowSpan={2} colSpan={1}>
                  <Image
                    src="/images/large/4.jpg"
                    alt="Wedding ceremony"
                    borderRadius="lg"
                    boxShadow="md"
                    height="100%"
                    width="100%"
                    objectFit="cover"
                  />
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Image
                    src="/images/large/5.jpg"
                    alt="Wedding reception"
                    borderRadius="lg"
                    boxShadow="md"
                    height="100%"
                    width="100%"
                    objectFit="cover"
                  />
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Image
                    src="/images/large/6.jpg"
                    alt="Wedding details"
                    borderRadius="lg"
                    boxShadow="md"
                    height="100%"
                    width="100%"
                    objectFit="cover"
                  />
                </GridItem>
              </Grid>
            </SimpleGrid>
          </AnimatedSection>
          
          {/* Stats */}
          <AnimatedSection animation="fadeIn" delay={0.4}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6} mb={20}>
              {stats.map((stat, index) => (
                <Box
                  key={index}
                  bg={statBgColor}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                >
                  <Icon as={stat.icon} boxSize={10} color={accentColor} mb={4} />
                  <Stat>
                    <StatLabel fontSize="lg" fontWeight="medium">{stat.label}</StatLabel>
                    <StatNumber fontSize="4xl" fontWeight="bold" color={headingColor}>{stat.value}</StatNumber>
                    <StatHelpText>{stat.helpText}</StatHelpText>
                  </Stat>
                </Box>
              ))}
            </SimpleGrid>
          </AnimatedSection>
          
          {/* Wedding Packages */}
          <AnimatedSection animation="fadeIn" delay={0.5}>
            <Box mb={20}>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="semibold"
                fontFamily="heading"
                color={headingColor}
                textAlign="center"
                mb={4}
              >
                Wedding Packages
              </Heading>
              
              <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto" mb={12}>
                We offer several wedding packages to suit different needs and budgets. 
                All packages can be customized to create your perfect day.
              </Text>
              
              <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
                {packages.map((pkg, index) => (
                  <Box
                    key={index}
                    bg={cardBgColor}
                    p={6}
                    borderRadius="lg"
                    boxShadow="lg"
                    border="2px solid"
                    borderColor={pkg.popular ? accentColor : 'transparent'}
                    position="relative"
                    transform={pkg.popular ? { lg: 'scale(1.05)' } : 'none'}
                    zIndex={pkg.popular ? 1 : 0}
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'translateY(-10px)' }}
                  >
                    {pkg.popular && (
                      <Box
                        position="absolute"
                        top="-12px"
                        right="-12px"
                        bg={accentColor}
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="md"
                        fontWeight="bold"
                        fontSize="sm"
                        transform="rotate(15deg)"
                        boxShadow="md"
                      >
                        Most Popular
                      </Box>
                    )}
                    
                    <VStack spacing={4} align="stretch">
                      <Heading
                        as="h3"
                        fontSize="2xl"
                        fontWeight="bold"
                        fontFamily="heading"
                        color={headingColor}
                      >
                        {pkg.name}
                      </Heading>
                      
                      <Text fontSize="md">{pkg.description}</Text>
                      
                      <Heading
                        as="h4"
                        fontSize="3xl"
                        fontWeight="bold"
                        color={accentColor}
                        mt={2}
                      >
                        {pkg.price}
                      </Heading>
                      
                      <Divider my={4} />
                      
                      <List spacing={3}>
                        {pkg.features.map((feature, idx) => (
                          <ListItem key={idx} display="flex">
                            <ListIcon as={FaCheckCircle} color={accentColor} mt={1} />
                            <Text>{feature}</Text>
                          </ListItem>
                        ))}
                      </List>
                      
                      <Button
                        mt={6}
                        bg={buttonBgColor}
                        color="white"
                        _hover={{ bg: buttonHoverBgColor }}
                        size="lg"
                        width="100%"
                        as="a"
                        href={`mailto:bigredbarnmontana@gmail.com?subject=${pkg.name} Wedding Package Inquiry&body=Please provide details of your event%0D%0A%0D%0AEvent Date:%0D%0A%0D%0AApproximate Number of Guests:%0D%0A%0D%0AAdditional Information:`}
                      >
                        Book by Email
                      </Button>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
              
              <Text fontSize="sm" textAlign="center" mt={8} fontStyle="italic">
                * All packages require a 50% deposit to secure your date. Prices are subject to change for peak season dates.
              </Text>
            </Box>
          </AnimatedSection>
          
          {/* Preferred Vendors */}
          <AnimatedSection animation="fadeIn" delay={0.6}>
            <Box
              bg={cardBgColor}
              p={8}
              borderRadius="lg"
              boxShadow="lg"
              mb={16}
            >
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="semibold"
                fontFamily="heading"
                color={headingColor}
                mb={6}
              >
                Our Preferred Vendors
              </Heading>
              
              <Text fontSize="lg" mb={8}>
                We've partnered with some of the best wedding vendors in the area to help make your planning process easier. 
                While you're welcome to bring in your own vendors, these professionals are familiar with our venue and consistently deliver exceptional service.
              </Text>
              
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {vendors.map((vendor, index) => (
                  <Box key={index}>
                    <HStack mb={4}>
                      <Icon as={getVendorIcon(vendor.category)} color={accentColor} boxSize={6} />
                      <Heading
                        as="h3"
                        fontSize="xl"
                        fontWeight="bold"
                        fontFamily="heading"
                      >
                        {vendor.category}
                      </Heading>
                    </HStack>
                    
                    <List spacing={2}>
                      {vendor.companies.map((company, idx) => (
                        <ListItem key={idx}>
                          <Text>{company}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </SimpleGrid>
              
              <Text fontSize="sm" mt={8} fontStyle="italic">
                * Full vendor information including contact details will be provided in our wedding planning guide after booking.
              </Text>
            </Box>
          </AnimatedSection>
          
          {/* Call to Action */}
          <AnimatedSection animation="fadeIn" delay={0.7}>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="space-between"
              bg={headingColor}
              color="white"
              p={{ base: 8, md: 12 }}
              borderRadius="lg"
              boxShadow="xl"
            >
              <Box mb={{ base: 6, md: 0 }} maxW={{ md: '60%' }}>
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl' }}
                  fontWeight="bold"
                  fontFamily="heading"
                  mb={4}
                >
                  Ready to Start Planning Your Dream Wedding?
                </Heading>
                
                <Text fontSize="lg">
                  Contact us today to schedule a tour of the venue and discuss how we can help make your special day unforgettable.
                </Text>
              </Box>
              
              <Button
                as="a"
                href="mailto:bigredbarnmontana@gmail.com?subject=Wedding Venue Tour Request&body=Hello,%0D%0A%0D%0AI would like to schedule a tour of the Big Red Barn for a potential wedding.%0D%0A%0D%0APreferred dates/times:%0D%0A%0D%0AContact information:%0D%0A%0D%0AAdditional questions:"
                size="lg"
                bg="white"
                color={headingColor}
                _hover={{ bg: 'cream.100' }}
                px={8}
                py={6}
                fontSize="lg"
              >
                Email to Schedule a Tour
              </Button>
            </Flex>
          </AnimatedSection>
        </Container>
      </Box>
  );
};

// Helper function to get icon based on vendor category
const getVendorIcon = (category) => {
  switch (category) {
    case 'Catering':
      return FaUtensils;
    case 'Photography':
      return FaCamera;
    case 'Music':
      return FaMusic;
    case 'Florists':
      return FaHeart;
    default:
      return FaCheckCircle;
  }
};

export default Weddings;