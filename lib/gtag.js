export const GA_TRACKING_ID = 'UA-71294699-1'
export const GTM_ID = 'GTM-W7PPMG8'

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
