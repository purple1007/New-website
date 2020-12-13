import React from 'react'
import { Link, Elements } from 'prismic-reactjs'
import styles from '../../components/blog/Markdown-style.module.sass'

// -- Function to add unique key to props
const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key })
}

export const HtmlSerializer = function (type, element, children, key) {
  let props = {}
  switch (type) {
    // Don't wrap images in a <p> tag
    case Elements.image:
      props = { src: element.url, alt: element.alt || '' }
      return React.createElement('img', propsWithUniqueKey(props, key))

    case Elements.embed: // Embed
      props = Object.assign({
        className: styles.embedStyle,
        'data-oembed': element.oembed.embed_url,
        'data-oembed-type': element.oembed.type,
        'data-oembed-provider': element.oembed.provider_name
      }, element.label ? { className: element.label } : {})
      const embedHtml = React.createElement('div', { dangerouslySetInnerHTML: { __html: element.oembed.html } })
      return React.createElement('div', propsWithUniqueKey(props, key), embedHtml)

    // Add a class to hyperlinks
    case Elements.hyperlink:
      const targetAttr = element.data.target ? { target: element.data.target } : {}
      const relAttr = element.data.target ? { rel: 'noopener' } : {}
      props = Object.assign({
        className: 'link-class',
        href: element.data.url || linkResolver(element.data)
      }, targetAttr, relAttr)
      return React.createElement('a', propsWithUniqueKey(props, key), children)

    // Return null to stick with the default behavior
    default:
      return null
  }
}
