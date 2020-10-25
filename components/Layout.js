
import NextLink from 'next/link';
import { useColorMode, Container, Flex } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Nav from './Nav'

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  const primarytextColor = {
    light: 'lightGray.600',
    dark: 'darkGray.200'
  }

  const bgColor = {
    light: 'primary.warmWhite',
    dark: 'darkGray.900'
  };

  return (
    <>
      <Nav/>
      <Flex
        as='div'
        bg={ bgColor[colorMode] }
        w='100%'
        >
      <Container
        as="main"
        flexDirection="column"
        bg={ bgColor[colorMode] }
        color={ primarytextColor[colorMode] }
        px={6}
        maxW={800}
        centerContent
      >
      { children }
      </Container>
      </Flex>
    </>
  )
}

export default Layout