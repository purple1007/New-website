
import { useColorMode, Container, Flex } from '@chakra-ui/react'
import { Nav } from './Nav'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  const { colorMode } = useColorMode()

  const primarytextColor = {
    light: 'lightGray.600',
    dark: 'darkGray.100'
  }

  const bgColor = {
    light: 'primary.warmWhite',
    dark: 'darkGray.900'
  }

  return (
    <>
      <Nav />
      <Flex
        as='div'
        bg={bgColor[colorMode]}
        w='full'
        _selection={{
          color: 'white',
          background: 'primary.base'
        }}
      >
        <Container
          as='main'
          flexDirection='column'
          bg={bgColor[colorMode]}
          color={primarytextColor[colorMode]}
          px={6}
          maxW={800}
          centerContent
        >
          {children}
        </Container>
      </Flex>
      <Footer />
    </>
  )
}
