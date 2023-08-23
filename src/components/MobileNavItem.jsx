import React from 'react';
import PropTypes from 'prop-types';

const MobileNavItem = ({ name, icon }) => (
  <div className="flex items-center gap-1">
    <p>{icon}</p>
    <p>{name}</p>
  </div>
);

MobileNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default MobileNavItem;
