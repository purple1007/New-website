import Layout from '../components/Layout'
import { Heading, VStack } from '@chakra-ui/core'
import Prismic from 'prismic-javascript'
import { Client } from '../lib/prismic-helpers'
import PostPreview from '../components/blog/PostPreview'
import { NextSeo } from 'next-seo'

const title = 'Blog | Debby'
const url = 'https://www.debbylin.me/blog'

export default function Blog ({ posts }) {
  return (
    <>
      <Layout>
        <NextSeo
          title={title}
          canonical={url}
          openGraph={{
            title,
            url
          }}
        />
        <Heading
          as='h1'
          fontSize={{
            base: '4xl',
            md: '5xl'
          }}
          color='primary.base'
          fontWeight='normal'
          mt={20}
          mb={10}
          w='full'
        >
          Blog
        </Heading>
        <VStack
          spacing={20}
          mb={32}
        >
          {
            posts.results.map((post) => {
              return (
                <PostPreview
                  title={post.data.title}
                  slug={post.uid}
                  date={post.data.date}
                  categories={post.data.categories}
                  content={post.data.content}
                  key={post.uid}
                />
              )
            })
          }
        </VStack>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const client = Client()
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog-post'),
    {
      orderings: '[my.blog-post.date desc]',
      pageSize: 20
    }
  )
  return {
    props: {
      posts: posts
    }
  }
}
