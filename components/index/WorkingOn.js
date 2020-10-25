import { Box } from "@chakra-ui/core";
import SectionTitle from '../metrics/Heading'
import WorkingItemBox from './WorkingItemBox'
import WorkItemList from '../../data/WorkingOnList'


const WorkingOn = () => {
  return (
    <>
    <Box 
      as='section'
      w='full'
      d='flex'
      flexWrap='wrap'
      my='20'
    >
      <SectionTitle>
        What I’m working on 
      </SectionTitle>
      <Box 
        mt='10'
        flexWrap='wrap'>
        {
          WorkItemList.map(( WorkItemList ) => {
            return <WorkingItemBox item={WorkItemList} key={WorkItemList.slug}/>
          })
        }
      </Box>
    </Box>
    </>
  )
};

export default WorkingOn;