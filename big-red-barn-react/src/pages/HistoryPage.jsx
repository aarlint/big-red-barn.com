import React from 'react';
import { Box } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import History from '../components/sections/History';

const HistoryPage = () => {
  return (
    <Layout>
      <Box as="main">
        <History />
      </Box>
    </Layout>
  );
};

export default HistoryPage;