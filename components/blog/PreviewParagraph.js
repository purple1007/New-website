import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Text } from '@chakra-ui/react'
/**
 * Component that returns the first paragraph of a post
 */
const PreviewParagraph = ({ textLimit,content }) => {
  const text = RichText.asText(content)
  let limitedText = text.substring(0, textLimit)

  if (text.length > textLimit) {
    // Cut only up to the last word and attach '...' for readability
    limitedText = `${limitedText.substring(0, limitedText.lastIndexOf(' '))}...`
  }

  return <Text mt={2} mb={6}>{limitedText}</Text>
}

export default PreviewParagraph
