import Layout from '../components/Layout'
import { useColorMode, Heading } from '@chakra-ui/core'
import Prismic from 'prismic-javascript'
import { Client } from '../lib/prismic-helpers'
import PostPreview from '../components/metrics/PostPreview'

export default function Blog ({ posts }) {
  const { colorMode } = useColorMode()

  return (
    <>
      <Layout>
        <Heading
          as='h1'
          fontSize={{
            base: '4xl',
            lg: '5xl'
          }}
          color='primary.base'
          fontWeight='normal'
          mt='20'
          mb='10'
          w='full'
        >
          Blog
        </Heading>
        {
          posts.results.map((post) => {
            return (
              <PostPreview
                title={post.data.title}
                slug={post.uid}
                date={post.data.date}
                content={post.data.content}
                key={post.uid}
              />
            )
          })
        }
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const client = Client()
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog-post'),
    { orderings: '[my.blog-post.date desc]',
      pageSize : 20 }
    )
  return {
    props: {
      posts: posts
    }
  }
}
