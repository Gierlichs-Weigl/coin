import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import Header from 'components/Header';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // TODO: header render on server-side leads to a content missmatch warning
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Constellators International</title>
      </Head>
      <Header />
      <div className="mx-2 my-2">
        <Component {...pageProps} />
      </div>
    </>
  );
}
