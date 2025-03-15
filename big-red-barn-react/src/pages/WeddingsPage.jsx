import React from 'react';
import { Box } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import Weddings from '../components/sections/Weddings';

const WeddingsPage = () => {
  return (
    <Layout>
      <Box as="main">
        <Weddings />
      </Box>
    </Layout>
  );
};

export default WeddingsPage;