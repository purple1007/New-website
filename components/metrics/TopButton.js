import NextLink from 'next/link'
import { useColorMode, IconButton, Link } from '@chakra-ui/core'
import { FiChevronUp } from 'react-icons/fi'

const TopButton = () => {
  const { colorMode } = useColorMode()
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
      <NextLink href='' scroll>
        <Link
          id='top'
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
      </NextLink>
    </>
  )
}

export default TopButton
