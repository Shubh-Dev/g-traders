import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { mobileNavItems, mobileNavItems2 } from '../mobileNavItems';
import MobileNavItem from './MobileNavItem';

const Overlay = ({ toggleMobileMenu }) => (
  <div className="flex top-12 left-0  bg-white border border-gray-300 rounded-r-md rounded-t-md rounded-b-md shadow-lg shadow-md-tr shadow-md-br shadow-primary fixed">
    <div>
      <div className="flex flex-col gap-4 pl-4 pr-10 py-4">
        {mobileNavItems.map((item) => (
          <div key={item.id}>
            <MobileNavItem name={item.name} icon={item.icon} />
          </div>
        ))}

        <div className="border border-bottom-gray w-full" />
      </div>

      <div className="flex flex-col gap-4 pl-4 pr-10 pb-4">
        {mobileNavItems2.map((item) => (
          <div key={item.id}>
            <MobileNavItem name={item.name} icon={item.icon} />
          </div>
        ))}
      </div>
    </div>
    <div className="p-2">
      <AiOutlineClose
        className="text-3xl text-slate-500"
        onClick={toggleMobileMenu}
      />
    </div>
  </div>
);

Overlay.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
};
export default Overlay;
