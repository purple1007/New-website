
import { useColorMode, Container, Flex } from '@chakra-ui/core'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
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
        w='100%'
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

export default Layout
