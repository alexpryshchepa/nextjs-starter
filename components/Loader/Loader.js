import React from 'react';
import PropTypes from 'prop-types';
import s from './Loader.scss';

const Loader = ({ size, color }) => (
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
  color: '#000',
};

export default Loader;
