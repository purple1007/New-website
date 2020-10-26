import { useColorMode, Container, Box, Heading, Link, Text, Flex, Button, Icon } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { FiChevronUp } from "react-icons/fi";


const Footer = () => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'lightGray.100',
    dark: '#0f111d'
  }

  const copyrightColor = {
    light: 'lightGray.400',
    dark: 'darkGray.500'
  }

  const iconColor = {
    light: 'lightGray.400',
    dark: 'darkGray.500'
  }

  const iconBorderColor = {
    light: 'lightGray.300',
    dark: 'darkGray.700'
  }

  const hoverIconBgColor = {
    light: 'lightGray.200',
    dark: 'darkGray.800'
  }

  const activeIconBgColor = {
    light: 'lightGray.300',
    dark: 'darkGray.900'
  }

  return (
    <>
    <Box
      as='footer'
      bg={ bgColor[colorMode] }
      w='full'
      d='block'
    >
      <Container 
        maxW='900px'
        flexDirection='row'
        alignItems='flex-start'
        flexWrap='wrap'
        position='relative'
        px={6}
        pt={20}
        pb={10}
        centerContent>
        <Box
          w={{
            base: 'full',
            lg: '50%' }}
          pr={6}
          pb={{
            base: '16',
            lg: '0'
          }}
        >
          <Heading
            as='h3'
            color='primary.base'
            fontWeight='bold'
            fontSize='5xl'
            mb={2}
          >
            Let's talk!
          </Heading>
          <Link
            href='info@debbylin.me'
            _hover={{
              color: 'primary.base',
              textDecoration: 'underline'
            }}
            isExternal
          >
            info@debbylin.me
          </Link>
        </Box>
        <Box
          w={{
            base: 'full',
            lg: '50%' }}
        >
          <Heading
            as='h3'
            fontWeight='bold'
            fontSize='5xl'
          >
            Find me on
          </Heading>
          <Flex 
            mt={2}
          >
            <Link 
              pr={4}
              href='https://dribbble.com/debby'
              _hover={{
                color: 'primary.base',
                textDecoration: 'underline'
              }}
              isExternal 
            >
            Dribbble</Link>
            <Link 
              pr={4}
              href='https://www.instagram.com/debby.design/'
              _hover={{
                color: 'primary.base',
                textDecoration: 'underline'
              }}
              isExternal 
            >
            Instagram</Link>
            <Link 
              pr={4}
              href='https://www.behance.net/debby-design'
              _hover={{
                color: 'primary.base',
                textDecoration: 'underline'
              }}
              isExternal 
            >
            Behance</Link>
            <Link 
              pr={4}
              href='https://github.com/purple1007'
              _hover={{
                color: 'primary.base',
                textDecoration: 'underline'
              }}
              isExternal 
            >
            GitHub</Link>

          </Flex>
        </Box>
        <Text
            as='small'
            color={copyrightColor[colorMode]}
            fontWeight='sm'
            mt={20}
          >
            Copyright © 2020 Debby Lin.
        </Text>
        <Link href='#top' breakout>
        <Button 
          variant='outline'
          d='inline-block'
          position='absolute'
          bottom={10}
          right={6}
          borderColor={ iconBorderColor[colorMode]}
          _hover={{
              bg: hoverIconBgColor[colorMode],
            }}
          _active={{
            bg: activeIconBgColor[colorMode],
          }}
          >
          <Icon 
            as={FiChevronUp}
            color={ iconColor[colorMode] }
            
            />
        </Button>
        </Link>
      </Container>
    </Box>
    </>
  )
}

export default Footer