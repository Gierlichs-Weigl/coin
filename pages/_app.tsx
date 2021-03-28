import * as React from 'react';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

const DynamicHeader = dynamic(() => import('components/Header'), { ssr: false });

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Constellators International</title>
      </Head>
      <DynamicHeader />
      <Component {...pageProps} />
    </>
  );
}
