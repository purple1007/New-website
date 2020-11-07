import Link from 'next/link';
import Layout from '../components/Layout'
import Hero from '../components/index/Hero'
import WorkingOn from '../components/index/WorkingOn'
import WorkExperience from '../components/index/WorkExperience'
import Prismic from 'prismic-javascript'
import { client } from '../lib/prismic-configuration'

export default function Index() {
  return (
    <>
      <Layout>
        <Hero />
        <WorkingOn />
        <WorkExperience />
      </Layout>
    </>
  )
}

// export async function getStaticProps() {
//   const posts = await client.query(
//     Prismic.Predicates.at("document.type", "post"),
//     { orderings: "[my.post.date desc]" }
//   )
//   return {
//     props: {
//       posts,
//     },
//   }
// }