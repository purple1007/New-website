import Layout from '../../components/Layout'
import { useColorMode, Heading, Box, ControlBox } from '@chakra-ui/core'
import { Client } from '../../lib/prismic-helpers'
import { RichText } from 'prismic-reactjs'
import PostDetail from '../../components/blog/PostDetail'
import Prismic from 'prismic-javascript'
import { NextSeo } from 'next-seo'

export default function Post({ data }) {
  const title = RichText.asText(data.title)
  return (
    <>
    <Layout>
    <NextSeo
      title={title}
      />
      <Box
        as='header'
        w='full'
        maxWidth='80%'
        mt={{
          base: 20,
          md: 24
        }}
      >
        <Heading
          as='h1'
          color='primary.base'
          fontSize={{
            base: '4xl',
            md: '5xl'
          }}
          fontWeight='bold'
          mb={3}
          >{title}
        </Heading>
        <PostDetail date={data.date} categories={data.categories} />
      </Box>
      <Box
        as='article'
        mt={{
          base: 16,
          md: 20
          }}
        mb={10}
        maxWidth='80%'
      >
        <RichText render={data.content} />
      </Box>
    </Layout>
    </>
  )
}
const client = Client()
export async function getStaticProps({ params }) {
  const { uid } = params
  const { data } = await client.getByUID('blog-post', uid)
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'blog-post')
  )
  const paths = results.map(post => ({
    params: {
      uid: post.uid,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}