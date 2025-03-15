import React from 'react';
import { Box } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Gallery from '../components/sections/Gallery';
import Events from '../components/sections/Events';
import About from '../components/sections/About';
import Reviews from '../components/sections/Reviews';
import Contact from '../components/sections/Contact';
import History from '../components/sections/History';

const HomePage = () => {
  return (
    <Layout>
      <Box as="main">
        {/* Hero Section */}
        <Hero />
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Events Section */}
        <Events />
        
        {/* About Section */}
        <About />
        
        {/* Reviews Section */}
        <Reviews />
        
        {/* History Section */}
        <Box id="history">
          <History />
        </Box>
        
        {/* Contact Section */}
        <Contact />
      </Box>
    </Layout>
  );
};

export default HomePage;