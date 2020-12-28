import { Box } from '@chakra-ui/react'
import { WorkTimeline } from '../../data/WorkTimeline'
import { WorkTimeItem } from '../index/WorkTimeItem'
import { SectionTitle } from '../metrics/Heading'

export const WorkExperience = () => {
  return (
    <>
      <Box
        as='section'
        w='full'
        my={20}
      >
        <SectionTitle>
          Full-time Work Experience
        </SectionTitle>
        <Box
          mt={10}
          flexWrap='wrap'
        >
          {
            WorkTimeline.map((WorkTimeline) => {
              return <WorkTimeItem item={WorkTimeline} key={WorkTimeline.time} />
            })
          }
        </Box>
      </Box>
    </>
  )
}
