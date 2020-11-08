// Prismic API endpoint
export const apiEndpoint = process.env.PRISMIC_URL

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_TOKEN

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === 'page') {
    return '/[uid]'
  }
  return '/'
}
