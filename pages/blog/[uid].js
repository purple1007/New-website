import { Client } from '../../lib/prismic-helpers'
import { RichText } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'

export default function Post({ data }) {
  return (
    <React.Fragment>
      <article>
        <header>{RichText.asText(data.title)}</header>
        <RichText render={data.content} />
      </article>
    </React.Fragment>
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