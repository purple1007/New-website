import { Box, Flex } from '@chakra-ui/react'
import SectionTitle from '../metrics/Heading'
import WorkingItemBox from './WorkingItemBox'
import WorkItemList from '../../data/WorkingOnList'

const WorkingOn = () => {
  return (
    <>
      <Box
        as='section'
        w='full'
        mt={40}
        mb={20}
      >
        <SectionTitle>
          What I’m working on
        </SectionTitle>
        <Flex
          mt='10'
          flexWrap='wrap'
        >
          {
            WorkItemList.map((WorkItemList) => {
              return <WorkingItemBox item={WorkItemList} key={WorkItemList.url} />
            })
          }
        </Flex>
      </Box>
    </>
  )
}

export default WorkingOn
