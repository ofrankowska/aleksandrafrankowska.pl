import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

const Icon = ({ svg }) => <SVG src={svg} />;

Icon.propTypes = {
  svg: PropTypes.string.isRequired,
};
export default Icon;
