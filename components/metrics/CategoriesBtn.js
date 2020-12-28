import { useColorMode, Button } from '@chakra-ui/react'

const CategoriesBtn = ({ title }) => {
  const { colorMode } = useColorMode()
  const primarytextColor = {
    light: 'lightGray.100',
    dark: 'darkGray.800'
  }
  return (
    <>
      <Button
        as='a'
        color='primary.base'
        variant='outline'
        borderColor='primary.base'
        _hover={{
          bg: 'primary.base',
          color: primarytextColor[colorMode]
        }}
        _active={{
          bg: 'primary.600',
          borderColor: 'primary.600'
        }}
      >
        {title}
      </Button>
    </>
  )
}

export default CategoriesBtn
