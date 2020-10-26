import { Heading, Text, Flex } from '@chakra-ui/core';

const Hero = () => {
  return (
    <>
      <Flex id='top'></Flex>
      <Heading
        as='h1'
        fontSize={{
          base: '4xl',
          lg:'5xl'
          }}
        color='primary.base'
        fontWeight='normal'
        mt='20'
        mb='10'
        w='full'
      >
        <Text
          as='span' 
          display='block'
          mb='2'
          >
          Hi! I’m Debby.
        </Text>
        <span>I’m a </span>
        <Text 
          fontWeight='bold'
          as='span'>
          Web Designer & UI Designer
        </Text>.
      </Heading>
      <Text
        lineHeight='1.5'
        >
        Hi! I’m Debby. I’m a web designer and a UI designer.<br/>
        I have more than 5 years of experience in graphic design, and 2 years of experience in website design. I like creative colors and layout. Using colors, typography and shapes to build different layouts is fascinating to me.<br/>
        Here you can check out more of my works and hope you like it!<br/>
        If you have any question or just want to talk, welcome to contact me through here ! &#041;
      </Text>
    </>
  )
}

export default Hero