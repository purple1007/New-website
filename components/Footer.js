import { useColorMode, Container, Box, Heading, Link, Text, Flex, IconButton } from '@chakra-ui/core'
import { FiChevronUp } from 'react-icons/fi'
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

  const iconColor = {
    light: 'lightGray.400',
    dark: 'darkGray.500'
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
        bg={bgColor[colorMode]}
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
              href='info@debbylin.me'
              data-event-category='Footer'
              data-event-action='E-mail'
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
              lg: '50%'
            }}
          >
            <Heading
              as='h3'
              fontWeight='bold'
              fontSize='5xl'
            >
              Find me on
            </Heading>
            <Flex mt={2}>
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
          <Link
            href='#top'
            breakout='true'
          >
            <IconButton
              variant='outline'
              icon={<FiChevronUp />}
              size='md'
              color={iconColor[colorMode]}
              position='absolute'
              bottom={10}
              right={6}
              fontSize='20px'
              _hover={{
                bg: hoverIconBgColor[colorMode]
              }}
              _active={{
                bg: activeIconBgColor[colorMode]
              }}
            />
          </Link>
        </Container>
      </Box>
    </>
  )
}

export default Footer
