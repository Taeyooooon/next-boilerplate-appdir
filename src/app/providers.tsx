'use client'

import React from 'react'
import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'

const rootElement = document.getElementById('__next')

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
})

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}
export default Providers
