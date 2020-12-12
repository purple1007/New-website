import { useColorMode, Container, Box, Heading, Link, Text, Flex } from '@chakra-ui/core'
import TopButton from './metrics/TopButton'
import FooterLink from './FooterLink'
import FooterLinkItem from '../data/FooterLinkItem'

const Footer = () => {
  const { colorMode } = useColorMode()

  const bgColor = {
    light: 'lightGray.100',
    dark: '#0f111d'
  }

  const copyrightColor = {
    light: 'lightGray.400',
    dark: 'darkGray.500'
  }

  const headColor = {
    light: 'lightGray.700',
    dark: 'darkGray.100'
  }

  const primarytextColor = {
    light: 'lightGray.600',
    dark: 'darkGray.100'
  }

  return (
    <>
      <Box
        as='footer'
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        w='full'
        d='block'
        id='footer'
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
          centerContent
        >
          <Box
            w={{
              base: 'full',
              lg: '50%'
            }}
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
              href='mailto:info@debbylin.me'
              data-event-category='Footer'
              data-event-action='E-mail'
              _hover={{
                color: 'primary.base',
                textDecoration: 'underline'
              }}
            >
              info@debbylin.me
            </Link>
          </Box>
          <Box
            w={{
              base: 'full',
              lg: '50%'
            }}
          >
            <Heading
              as='h3'
              color={headColor[colorMode]}
              fontWeight='bold'
              fontSize='5xl'
            >
              Find me on
            </Heading>
            <Flex
              flexWrap='wrap'
              mt={[4, 2]}
            >
              {
                FooterLinkItem.map((FooterLinkItem) => {
                  return <FooterLink item={FooterLinkItem} key={FooterLinkItem.url} />
                })
              }
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
          <TopButton />
        </Container>
      </Box>
    </>
  )
}

export default Footer
