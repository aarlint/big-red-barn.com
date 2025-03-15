import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  FormErrorMessage,
  useToast,
  Select
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  // Toast for form submission
  const toast = useToast();
  
  // Colors
  const bgColor = useColorModeValue('cream.100', 'charcoal.800');
  const textColor = useColorModeValue('charcoal.800', 'cream.500');
  const headingColor = useColorModeValue('forest.600', 'gold.500');
  const cardBgColor = useColorModeValue('white', 'charcoal.900');
  const inputBgColor = useColorModeValue('white', 'charcoal.700');
  const iconColor = useColorModeValue('forest.600', 'gold.400');
  const buttonBgColor = useColorModeValue('forest.600', 'forest.500');
  const buttonHoverBgColor = useColorModeValue('forest.700', 'forest.400');
  
  // Contact info
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: '340 Mission Dr, Saint Ignatius, MT',
      link: 'https://maps.google.com/?q=340+Mission+Dr,+Saint+Ignatius,+MT'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '509-789-0235',
      link: 'tel:+15097890235'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'bigredbarnmontana@gmail.com',
      link: 'mailto:bigredbarnmontana@gmail.com'
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      content: 'Monday-Friday: 9AM-5PM',
      link: null
    }
  ];
  
  // Event types
  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Private Party',
    'Reunion',
    'Graduation',
    'Other'
  ];
  
  // Listen for programmatic changes to the event type select
  useEffect(() => {
    // Create a MutationObserver to watch for value changes on the select element
    const selectElement = document.querySelector('select[name="eventType"]');
    if (selectElement) {
      // Set up an event listener for the custom change event
      const handleSelectChange = (e) => {
        if (e.target.name === 'eventType') {
          setFormData(prev => ({
            ...prev,
            eventType: e.target.value
          }));
          
          // Clear any error for this field
          if (errors.eventType) {
            setErrors(prev => ({
              ...prev,
              eventType: null
            }));
          }
        }
      };
      
      // Add event listener
      selectElement.addEventListener('change', handleSelectChange);
      
      // Clean up
      return () => {
        selectElement.removeEventListener('change', handleSelectChange);
      };
    }
  }, [errors]); // Re-run if errors change
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Validate phone (optional but must be valid if provided)
    if (formData.phone && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    // Validate event type
    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };
  
  // Handle form submission using mailto
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Create mailto link with form data
    const subject = `${formData.eventType} Inquiry from ${formData.name}`;
    
    let body = `Name: ${formData.name}\n`;
    body += `Email: ${formData.email}\n`;
    
    if (formData.phone) {
      body += `Phone: ${formData.phone}\n`;
    }
    
    body += `Event Type: ${formData.eventType}\n`;
    
    if (formData.date) {
      body += `Preferred Date: ${formData.date}\n`;
    }
    
    body += `\nMessage:\n${formData.message}`;
    
    // Encode the subject and body for the mailto URL
    const mailtoLink = `mailto:bigredbarnmontana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the mailto link
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: 'Opening email client',
      description: 'Your message is being prepared in your email client.',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top'
    });
  };
  
  return (
    <Box
      as="section"
      id="contact"
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
              Contact Us
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="800px" mx="auto">
              Interested in booking our venue or have questions? Fill out the form below to send us an email, and we'll be happy to help you plan your perfect event.
            </Text>
          </Box>
        </AnimatedSection>
        
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          <AnimatedSection animation="slideIn" delay={0.2}>
            <VStack spacing={8} align="stretch">
              <Heading
                as="h3"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="semibold"
                fontFamily="heading"
              >
                Send Us an Email
              </Heading>
              
              <Box as="form" onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                  <FormControl isRequired isInvalid={errors.name}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      bg={inputBgColor}
                      borderColor={useColorModeValue('gray.300', 'gray.600')}
                      _hover={{ borderColor: useColorModeValue('gray.400', 'gray.500') }}
                      _focus={{ borderColor: iconColor }}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                  
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <FormControl isRequired isInvalid={errors.email}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        bg={inputBgColor}
                        borderColor={useColorModeValue('gray.300', 'gray.600')}
                        _hover={{ borderColor: useColorModeValue('gray.400', 'gray.500') }}
                        _focus={{ borderColor: iconColor }}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    
                    <FormControl isInvalid={errors.phone}>
                      <FormLabel>Phone (optional)</FormLabel>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        bg={inputBgColor}
                        borderColor={useColorModeValue('gray.300', 'gray.600')}
                        _hover={{ borderColor: useColorModeValue('gray.400', 'gray.500') }}
                        _focus={{ borderColor: iconColor }}
                      />
                      <FormErrorMessage>{errors.phone}</FormErrorMessage>
                    </FormControl>
                  </SimpleGrid>
                  
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <FormControl isRequired isInvalid={errors.eventType}>
                      <FormLabel>Event Type</FormLabel>
                      <Select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        placeholder="Select event type"
                        bg={inputBgColor}
                        borderColor={useColorModeValue('gray.300', 'gray.600')}
                        _hover={{ borderColor: useColorModeValue('gray.400', 'gray.500') }}
                        _focus={{ borderColor: iconColor }}
                      >
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </Select>
                      <FormErrorMessage>{errors.eventType}</FormErrorMessage>
                    </FormControl>
                    
                    <FormControl>
                      <FormLabel>Preferred Date (optional)</FormLabel>
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        bg={inputBgColor}
                        borderColor={useColorModeValue('gray.300', 'gray.600')}
                        _hover={{ borderColor: useColorModeValue('gray.400', 'gray.500') }}
                        _focus={{ borderColor: iconColor }}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </FormControl>
                  </SimpleGrid>
                  
                  <FormControl isRequired isInvalid={errors.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event and any questions you have..."
                      rows={5}
                      bg={inputBgColor}
                      borderColor={useColorModeValue('gray.300', 'gray.600')}
                      _hover={{ borderColor: useColorModeValue('gray.400', 'gray.500') }}
                      _focus={{ borderColor: iconColor }}
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>
                  
                  <Button
                    type="submit"
                    bg={buttonBgColor}
                    color="white"
                    _hover={{ bg: buttonHoverBgColor }}
                    size="lg"
                    width={{ base: 'full', md: 'auto' }}
                    leftIcon={<FaEnvelope />}
                    mt={2}
                  >
                    Send Email Inquiry
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </AnimatedSection>
          
          <AnimatedSection animation="slideIn" delay={0.4}>
            <VStack spacing={8} align="stretch">
              <Heading
                as="h3"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="semibold"
                fontFamily="heading"
              >
                Contact Information
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    p={5}
                    bg={cardBgColor}
                    borderRadius="lg"
                    boxShadow="md"
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'translateY(-5px)' }}
                  >
                    <HStack spacing={4} align="flex-start">
                      <Box
                        p={2}
                        bg={iconColor}
                        color="white"
                        borderRadius="md"
                      >
                        <Icon as={info.icon} boxSize={5} />
                      </Box>
                      
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold" fontSize="lg">
                          {info.title}
                        </Text>
                        {info.link ? (
                          <Text 
                            as="a" 
                            href={info.link} 
                            color={textColor}
                            _hover={{ color: iconColor, textDecoration: 'underline' }}
                          >
                            {info.content}
                          </Text>
                        ) : (
                          <Text>{info.content}</Text>
                        )}
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </SimpleGrid>
              
              <Box
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                height="300px"
              >
                <iframe
                  title="Big Red Barn Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.5731018865!2d-114.09023!3d47.32024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535c0e0d6e7f8d0f%3A0x215f525d320b885c!2s340%20Mission%20Dr%2C%20St%20Ignatius%2C%20MT%2059865!5e0!3m2!1sen!2sus!4v1616603867536!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </Box>
            </VStack>
          </AnimatedSection>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;