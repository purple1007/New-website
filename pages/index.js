import { Layout } from '../components/Layout'
import { Hero } from '../components/index/Hero'
import { WorkingOn } from '../components/index/WorkingOn'
import { WorkExperience } from '../components/index/WorkExperience'

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
