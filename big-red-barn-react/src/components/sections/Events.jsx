import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  Button,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
import { FaHeart, FaBuilding, FaGlassCheers, FaUsers, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';

const Events = () => {
  // Colors
  const bgColor = useColorModeValue('white', 'charcoal.900');
  const cardBgColor = useColorModeValue('cream.50', 'charcoal.800');
  const textColor = useColorModeValue('charcoal.800', 'cream.500');
  const headingColor = useColorModeValue('forest.600', 'gold.500');
  const iconColor = useColorModeValue('gold.600', 'gold.400');
  const buttonBgColor = useColorModeValue('forest.600', 'forest.500');
  const buttonHoverBgColor = useColorModeValue('forest.700', 'forest.400');
  
  // Event types
  const eventTypes = [
    {
      title: 'Weddings',
      icon: FaHeart,
      description: 'Celebrate your special day in the romantic ambiance of our big red barn.',
      action: 'Book by Email',
      eventType: 'Wedding'
    },
    {
      title: 'Corporate Events',
      icon: FaBuilding,
      description: 'Host your next corporate event in a distinctive venue that will impress your guests.',
      action: 'Book by Email',
      eventType: 'Corporate Event'
    },
    {
      title: 'Private Parties',
      icon: FaGlassCheers,
      description: 'From birthdays to anniversaries, our venue provides the perfect setting for your celebration.',
      action: 'Book by Email',
      eventType: 'Private Party'
    },
    {
      title: 'Reunions',
      icon: FaUsers,
      description: 'Bring family and friends together in our spacious and welcoming environment.',
      action: 'Book by Email',
      eventType: 'Reunion'
    },
    {
      title: 'Graduations',
      icon: FaGraduationCap,
      description: 'Commemorate academic achievements with a memorable celebration at our venue.',
      action: 'Book by Email',
      eventType: 'Graduation'
    },
    {
      title: 'Seasonal Events',
      icon: FaCalendarAlt,
      description: 'From summer gatherings to holiday parties, we offer a versatile space for any season.',
      action: 'Book by Email',
      eventType: 'Other'
    }
  ];
  
  return (
    <Box
      as="section"
      id="events"
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
              Events
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="800px" mx="auto">
              The Big Red Barn is a versatile venue that can host a variety of events. From weddings to corporate retreats,
              we provide a unique and memorable setting for your special occasions.
            </Text>
          </Box>
        </AnimatedSection>
        
        <AnimatedSection animation="staggered" delay={0.2}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {eventTypes.map((event, index) => (
              <Box
                key={index}
                bg={cardBgColor}
                p={6}
                borderRadius="lg"
                boxShadow="md"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
              >
                <VStack spacing={4} align="flex-start">
                  <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg={iconColor}
                    mb={1}
                  >
                    <Icon as={event.icon} boxSize={8} />
                  </Flex>
                  
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="bold"
                    fontFamily="heading"
                  >
                    {event.title}
                  </Heading>
                  
                  <Text>{event.description}</Text>
                  
                  <Button
                    onClick={() => {
                      // Scroll to contact section
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                        
                        // Set the event type in the contact form
                        const eventTypeSelect = document.querySelector('select[name="eventType"]');
                        if (eventTypeSelect) {
                          eventTypeSelect.value = event.eventType;
                          // Trigger change event to update the form state
                          const changeEvent = new Event('change', { bubbles: true });
                          eventTypeSelect.dispatchEvent(changeEvent);
                        }
                      }
                    }}
                    mt={2}
                    bg={buttonBgColor}
                    color="white"
                    _hover={{ bg: buttonHoverBgColor }}
                    size="md"
                  >
                    {event.action}
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Events;