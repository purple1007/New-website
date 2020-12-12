import { extendTheme } from '@chakra-ui/react'

const config = { useSystemColorMode: false }

const Button = {
  baseStyle: {
    _focus: { boxShadow: '0 0 0 0px rgb(0 0 0 / 0%);' }
  }
}

const theme = {
  styles: {
    global: {
      'html,body': {
        fontFamily: 'Open Sans, Noto Sans TC, Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
      },
      body: {
        minWidth: '360px',
        scrollBehavior: 'smooth'
      }
    },
    ...config
  },
  colors: {
    primary: {
      base: '#FF1850',
      500: '#FF3F6D',
      400: '#FF658A',
      300: '#FF658A',
      200: '#FFB2C5',
      100: '#FFD9E2',
      50: '#F9F1F2',
      warmWhite: '#FCFBFA'
    },
    lightGray: {
      900: '#0B0B0B',
      800: '#232323',
      700: '#393939',
      600: '#585858',
      500: '#828282',
      400: '#AFAFAF',
      300: '#D5D5D5',
      200: '#E9E9E9',
      100: '#F2F2F2',
      50: '#F9F9F9'
    },
    darkGray: {
      900: '#161923',
      800: '#19202C',
      700: '#2B3747',
      600: '#485567',
      500: '#6F8095',
      400: '#9EAEBF',
      300: '#CAD5E0',
      200: '#E1E8F0',
      100: '#EDF2F7',
      50: '#F7FAFC'
    }
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  components: {
    Button
  }
}

const customTheme = extendTheme(theme)

export default customTheme
