import React from 'react';
import fetchDocs from 'client/actions/docs';
import About from 'client/pages/About';

const AboutPage = () => <About />;

AboutPage.getInitialProps = async ({ reduxStore }) => {
  if (!reduxStore.getState().docs.isLoaded) {
    await reduxStore.dispatch(fetchDocs());
  }

  return {
    namespacesRequired: ['about'],
  };
};

export default AboutPage;
