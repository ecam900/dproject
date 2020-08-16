import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import Head from 'next/head';
import { CSSReset } from '@chakra-ui/core';
import customTheme from '../styles/themes/customTheme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
        <GlobalStyle />
        <Head>
          <title>dProject</title>
        </Head>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;