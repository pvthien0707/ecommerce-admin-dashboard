import { Outlet } from 'react-router-dom';

import { Sidebar, TopNavbar } from '@/components';

import './MainLayout.scss';

function MainLayout() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="main__content">
          <TopNavbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
