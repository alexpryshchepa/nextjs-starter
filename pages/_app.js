import '@babel/polyfill';
import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import withReduxStore from 'client/core/withReduxStore';
import { appWithTranslation } from 'i18n';
import styles from 'client/styles/global.scss';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('beforeHistoryChange', () => {
  // Dirty fix to update styles on page changes in dev mode
  // Should be fixed in future versions of next.js
  if (process.env.NODE_ENV !== 'production') {
    const links = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]');
    const timestamp = new Date().valueOf();
    links[0].href = `/_next/static/css/styles.chunk.css?v=${timestamp}`;
  }
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <style global jsx>{styles}</style>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default compose(
  withReduxStore,
  appWithTranslation,
)(MyApp);
