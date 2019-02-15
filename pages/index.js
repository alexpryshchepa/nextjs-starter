import React from 'react';
import Home from 'client/pages/Home';

const HomePage = () => <Home />;

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['about'],
});

export default HomePage;
