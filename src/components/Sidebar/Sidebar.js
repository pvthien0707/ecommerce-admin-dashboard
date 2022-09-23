import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import sidebarNav from '@/configs';
import { images } from '@/constants';
import './Sidebar.scss';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItemIndex = sidebarNav.findIndex(
      (item) => item.section === curPath,
    );

    setActiveIndex(curPath.length === 0 ? 0 : activeItemIndex);
  }, [location]);

  const closeSidebar = () => {
    document.querySelector('.main__content').style.transform =
      'scale(1) translateX(0)';

    setTimeout(() => {
      document.body.classList.remove('sidebar-open');
      document.querySelector('.main__content').style = '';
    }, 500);
  };

  return (
    <div className={'sidebar'}>
      <div className={'sidebar__logo'}>
        <img src={images.logo} alt="logo" />
        <div className={'sidebar-close'} onClick={closeSidebar}>
          <i className="bx bx-x"></i>
        </div>
      </div>
      <div className="sidebar-menu">
        {sidebarNav.map((nav, index) => (
          <Link
            key={index}
            to={nav.link}
            className={`sidebar-menu-item ${activeIndex === index && 'active'}`}
            onClick={closeSidebar}
          >
            <div className={'sidebar-menu-item__icon'}>{nav.icon}</div>
            <div className={'sidebar-menu-item__text'}>{nav.text}</div>
          </Link>
        ))}
        <div className="sidebar-menu-item">
          <div className={'sidebar-menu-item__icon'}>
            <i className="bx bx-log-out"></i>
          </div>
          <div className={'sidebar-menu-item__text'}>Log out</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
