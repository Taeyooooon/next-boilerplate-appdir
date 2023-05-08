'use client'

import React from 'react'
import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'

const Providers = ({ children }: { children: React.ReactNode }) => {
  let rootElement
  if (typeof window !== 'undefined') {
    rootElement = window.document.body
  }

  const theme = createTheme(
    rootElement !== undefined
      ? {
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
            MuiModal: {
              defaultProps: {
                container: rootElement,
              },
            },
          },
        }
      : {},
  )

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
