import { useColorMode, Heading, Text, Link } from '@chakra-ui/core'

const WorkingItemBox = ({ item }) => {
  const { colorMode } = useColorMode()

  const borderColor = {
    light: 'lightGray.200',
    dark: 'darkGray.700'
  }

  const hoverBorder = {
    light: 'lightGray.300',
    dark: '#73162d'
  }

  const hoverShadow = {
    light: '0 0 20px #dadada',
    dark: '0 0 20px #11141f'
  }

  const titleColor = {
    light: 'lightGray.800',
    dark: 'darkGray.100'
  }

  const linkColor = {
    light: 'lightGray.400',
    dark: 'darkGray.500'
  }

  const boxColor = {
    light: 'lightGray.100',
    dark: '#ff18503d'
  }

  return (
    <>
      <Link
        href={item.url}
        isExternal
        display='block'
        w={{
          base: 'full',
          md: '70%',
          lg: '50%'
        }}
        role='group'
        mx='auto'
        p={4}
        minHeight='100%'
        border='1px'
        borderColor={borderColor[colorMode]}
        transition='all .3s'
        _hover={{
          bg: boxColor[colorMode],
          border: hoverBorder[colorMode],
          boxShadow: hoverShadow[colorMode],
          cursor: 'pointer'
        }}
        _focus={{ boxShadow: '0 0 0 0px rgb(0 0 0 / 0%);' }}
      >
        <Heading
          as='h3'
          color={titleColor[colorMode]}
          fontWeight='bold'
          fontSize='lg'
          mb='4'
        >
          {item.title}
        </Heading>

        <Text mb='10'>
          {item.summary}
        </Text>

        <Text
          color={linkColor[colorMode]}
          _groupHover={{
            color: 'primary.base',
            textDecoration: 'underline'
          }}
          _groupFocus={{ boxShadow: '0 0 0 0px rgb(0 0 0 / 0%);' }}
        >
          {item.link}
        </Text>
      </Link>
    </>
  )
}

export default WorkingItemBox
