import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from './Page.scss';

const Page = ({ children }) => (
  <Fragment>
    <style global jsx>{s}</style>
    {children}
  </Fragment>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
