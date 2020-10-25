import NextLink from 'next/link';
import { useColorMode, Button, Flex, Spacer , Icon } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { FiSun, FiMoon } from "react-icons/fi";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navBgColor = {
    light: 'primary.warmWhite',
    dark: 'darkGray.900'
  }

  const primarytextColor = {
    light: 'lightGray.600',
    dark: 'darkGray.200'
  }

  const iconColor = {
    light: 'lightGray.400',
    dark: 'darkGray.500'
  }

  const hoverIconBgColor = {
    light: 'lightGray.100',
    dark: 'darkGray.800'
  }

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        px={8}
        py={3}
        mt={0}
        mx="auto"
      >
        <Flex
          as="div"
          maxWidth="900px"
          width="100%" >
          
          <NextLink href='/' passHref>
            <Button
              as='a'
              color='primary.base'
              fontSize='xl'
              fontWeight='bold'
              p='0'
              variant='ghost'
              _hover={{ 
                bg:'opacity.0',
                color: 'primary.300' }}
              _active={{ bg:'opacity.0' }}
            >
            Debby</Button>
          </NextLink>
          <Spacer />
          <Flex
            as="div"
            justifyContent="between"
            flexDirection="row"
          >
            <NextLink href='/' passHref>
              <Button
                as='a'
                color={ primarytextColor[colorMode] }
                fontSize='base'
                variant='ghost'
                _hover={{ 
                  bg: hoverIconBgColor[colorMode],
                  color: 'primary.300' }}
                _active={{ bg:'opacity.0' }} >
                Works
              </Button>
            </NextLink>

            <NextLink href='/' passHref>
              <Button
                as='a'
                color={ primarytextColor[colorMode] }
                fontSize='base'
                variant='ghost'
                _hover={{ 
                  bg: hoverIconBgColor[colorMode],
                  color: 'primary.300' }}
                _active={{ bg:'opacity.0' }} >
              Blog
              </Button>
            </NextLink>
            
            <Button 
              aria-label="Toggle dark mode"
              onClick={toggleColorMode}
              bg='opacity.0'
              _hover={{ 
                bg: hoverIconBgColor[colorMode] }}
              _active={{ bg: 'opacity.0' }}
              p={3}
            >
              <Icon 
                as={ colorMode === 'dark' ? FiSun : FiMoon }
                color={ iconColor[colorMode] }
              />
            </Button>
            
          </Flex>
        
        </Flex>
      </StickyNav>
    </>
  )
}

export default Nav 