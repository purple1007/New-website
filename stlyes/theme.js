import React from 'react';
import { theme as chakraTheme, extendTheme } from '@chakra-ui/core';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

const theme = extendTheme({
  ...chakraTheme,
  config,
  
  font: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
  
});

export default theme;
