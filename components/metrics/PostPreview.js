import NextLink from 'next/link'
import { useColorMode, Heading, Text, Link, Box } from '@chakra-ui/core'
import PreviewParagraph from './PreviewParagraph'
import { RichText } from 'prismic-reactjs'

const PostPreview = ({ title, slug, date, content }) => {
  const { colorMode } = useColorMode()

  const smalltextColor = {
    light: 'lightGray.500',
    dark: 'darkGray.500'
  }

  return (
    <>
      <Box mb={12}>
        <Text
          as='small'
          color={smalltextColor[colorMode]}
          mb={2}
          d='block'
        >
          <time>{date}</time>・設計
        </Text>
        <NextLink href={`/blog/${slug}`} passHref>
          <Link
            _hover={{
              color: 'primary.base',
              textDecoration: 'none'
            }}
          >
            <Heading
              as='h2'
              fontSize={{
                base: '3xl',
                lg: '4xl'
              }}
              fontWeight='bold'
            >
              {RichText.asText(title)}
            </Heading>
          </Link>
        </NextLink>
        <PreviewParagraph
          textLimit={150}
          content={content}
        />
        <NextLink href={`/blog/${slug}`} passHref>
          <Link
            color={smalltextColor[colorMode]}
            _hover={{
              color: 'primary.base',
              textDecoration: 'none'
            }}
          >
            Read More
          </Link>
        </NextLink>
      </Box>
    </>
  )
}

export default PostPreview
