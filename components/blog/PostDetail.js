import { useColorMode, Text } from '@chakra-ui/react'

const PostDetail = ({ date, categories }) => {
  const { colorMode } = useColorMode()

  const smalltextColor = {
    light: 'lightGray.500',
    dark: 'darkGray.500'
  }
  return (
    <>
      <Text
        as='small'
        color={smalltextColor[colorMode]}
        my={2}
        d='block'
      >
        <time>{date}</time>・<span>{categories}</span>
      </Text>
    </>
  )
}

export default PostDetail
