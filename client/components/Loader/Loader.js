import React from 'react';
import PropTypes from 'prop-types';
import cssVars from 'client/styles/variables.scss';
import s from './Loader.scss';

export const Loader = ({ size, color }) => (
  <div className={s.root}>
    <span
      className={s.spinner}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: color,
        borderRightColor: 'transparent',
      }}
    />
  </div>
);

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: 24,
  // Usage of sharing css variables between css and js
  color: cssVars['color-primary'],
};

export default Loader;
