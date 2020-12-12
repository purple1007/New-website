import NextLink from 'next/link'
import { useColorMode, Heading, Link, Box } from '@chakra-ui/react'
import PreviewParagraph from './PreviewParagraph'
import PostDetail from '../blog/PostDetail'
import { RichText } from 'prismic-reactjs'

const PostPreview = ({ title, slug, date, content, categories }) => {
  const { colorMode } = useColorMode()

  const smalltextColor = {
    light: 'lightGray.500',
    dark: 'darkGray.500'
  }

  const headingtextColor = {
    light: 'lightGray.700',
    dark: 'darkGray.50'
  }

  return (
    <>
      <Box>
        <PostDetail date={date} categories={categories} />
        <NextLink href={`/blog/${slug}`} passHref replace>
          <Link
            _hover={{
              textDecoration: 'none'
            }}
            role='group'
          >
            <Heading
              as='h2'
              fontSize={{
                base: '3xl',
                lg: '4xl'
              }}
              fontWeight='bold'
              transition='all .2s'
              color={headingtextColor[colorMode]}
              _groupHover={{
                color: 'primary.base',
                textDecoration: 'none'
              }}
            >
              {RichText.asText(title)}
            </Heading>
          </Link>
        </NextLink>
        <PreviewParagraph
          textLimit={150}
          content={content}
        />
        <NextLink href={`/blog/${slug}`} passHref replace>
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
