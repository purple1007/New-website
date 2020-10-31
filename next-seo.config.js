const title = 'Debby | Web Designer & UI Designer'
const description =
  'Debby is a Web Designer & UI Designer, She also learning front-end development now, And try to create interesting motion &amp; design in website.'

const SEO = {
  title,
  description,
  canonical: 'https://www.debbylin.me/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.debbylin.me/',
    title,
    description,
    images: [
      {
        url: 'https://www.debbylin.me/static/images/og-image.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
}

export default SEO
