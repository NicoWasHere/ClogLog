import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { css, Global } from '@emotion/core'

export default () =>{

return (
    <React.Fragment>
    <Helmet>
      <title>Clog Log</title>
      <link rel="shortcut icon" href="https://emojicdn.elk.sh/🎯" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    </Helmet>

    <Global
      styles={css`
        * {
          font-family: -apple-system, BlinkMacSystemFont, Roboto, system-ui, sans-serif;
          color: black;
          font-size: 16px;
          font-weight: 400;
          margin: 0;
          padding: 0;
          outline: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          appearance: none;
        }
        :root {
          --brand: hsl(357, 73%, 45%);
          --gray: hsl(357, 8%, 55%);
        }
      `}
    />

    {isMobile ? <App /> : <NotMobile />}
  </React.Fragment>
  )
    }