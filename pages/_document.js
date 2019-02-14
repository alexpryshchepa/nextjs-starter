// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
