import { useColorMode, Box, Text } from '@chakra-ui/react'

const WorkTimeItem = ({ item }) => {
  const { colorMode } = useColorMode()

  const timeTextColor = {
    light: 'lightGray.400',
    dark: 'darkGray.500'
  }

  const titleColor = {
    light: 'lightGray.800',
    dark: 'darkGray.100'
  }

  return (
    <>
      <Box
        d='inline-block'
        pb={16}
        pr={{
          base: '0',
          lg: '4'
        }}
        w={{
          base: 'full',
          lg: '50%'
        }}
      >
        <Text
          as='small'
          color={timeTextColor[colorMode]}
          fontSize='sm'
        >
          {item.time}
        </Text>
        <Text
          as='h3'
          fontWeight='bold'
          color={titleColor[colorMode]}
          fontSize='lg'
          my={2}
        >
          {item.title}
        </Text>
        <Text>
          {item.position}
        </Text>
      </Box>
    </>
  )
}

export default WorkTimeItem
