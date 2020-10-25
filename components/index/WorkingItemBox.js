import { useColorMode, Box, Heading, Text, Link } from "@chakra-ui/core";

const WorkingItemBox = ({ item }) => {
  const { colorMode } = useColorMode();

  const borderColor = {
    light: 'lightGray.200',
    dark: 'darkGray.700'
  }
  
  const hoverBorder = {
    light: 'lightGray.300',
    dark: '#73162d',
  }

  const hoverShadow = {
    light: '0 0 20px #dadada',
    dark: '0 0 20px #060d25'
  }

  const titleColor = {
    light: 'lightGray.800',
    dark: 'darkGray.100'
  }

  const linkColor = {
    light: 'lightGray.400',
    dark: 'darkGray.500'
  }

  const boxColor = {
    light: 'lightGray.100',
    dark: '#ff18503d'
  }

  return (
    <>
      <Link href={item.url} isExternal>
        <Box
            d='inline-block'
            border='1px'
            transition='all .3s'
            borderColor={ borderColor[colorMode] }
            p={4}
            w={{
              base: 'full',
              lg: '50%' }}
            _hover={{ 
              bg: boxColor[colorMode],
              border: hoverBorder[colorMode],
              boxShadow: hoverShadow[colorMode],
              cursor: 'pointer', 
              }}
            _focus={{ boxShadow: '0 0 0 0px rgb(0 0 0 / 0%);' }}
            >

            <Heading
              as='h3'
              color={titleColor[colorMode]}
              fontWeight='bold'
              fontSize='lg'
              mb='4' >
              {item.title}
            </Heading>

            <Text mb='10'>
            {item.summary}
            </Text>

            <Link
              href={item.url}
              color={linkColor[colorMode]}
              _hover={{
                color: 'primary.base',
                textDecoration: 'underline' }} 
              _focus={{ boxShadow: '0 0 0 0px rgb(0 0 0 / 0%);' }} 
              isExternal
              >
              {item.link}
            </Link>
          
          </Box>
      </Link>
    </>
  ) 
};

export default WorkingItemBox;