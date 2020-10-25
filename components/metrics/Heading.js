import { Flex, Heading, Text } from '@chakra-ui/core';
import styled from '@emotion/styled';


const SectionTitle = ({ children }) => {

  return (
    <>
      <Heading
        as='h2'
        fontSize='3xl'
        fontWeight='normal'
        pl='3'
        position='relative'
        w='full'
        d='block'
        _after={{
          content: '""',
          bg: 'primary.base',
          position: 'absolute',
          left: '0',
          top: '0',
          w: '2px',
          h: '100%'
        }}
      >
      { children }
      </Heading>
    </>
  );
};

export default SectionTitle;