import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTabActive } from '../redux/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ refs }) => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab);

  const [linkNav] = useState(['Home', 'Skills', 'Projects', 'Experiences','Education', 'Contacts']);
  const [statusNav, changeStatusNav] = useState(null);

  // Toggle mobile nav
  const toggleNav = () => {
    changeStatusNav(statusNav === null ? 'active' : null);
  };

  // Handle click on a tab
  const changeTab = (value) => {
    dispatch(changeTabActive(value)); // update Redux activeTab

    // Smooth scroll to section
    if (refs[value] && refs[value].current) {
      refs[value].current.scrollIntoView({ behavior: 'smooth' });
    }

    toggleNav(); // close mobile nav if open
  };

  return (
    <header>
      <div className="logo">
        <img src="/Tahsin logo.png" alt="Logo" /> Portfolio
      </div>

      <nav className={statusNav}>
        {linkNav.map((value) => (
          <span
            key={value}
            className={activeTab === value ? 'active' : ''}
            onClick={() => changeTab(value)}
          >
            {value}
          </span>
        ))}
      </nav>

      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

export default Navbar;
