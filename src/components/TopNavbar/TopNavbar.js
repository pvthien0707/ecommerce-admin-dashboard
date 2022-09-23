import { UserInfo } from '@/components';
import { data } from '@/constants';

import './TopNavbar.scss';

function TopNavbar() {
  const openSidebar = () => {
    document.body.classList.add('sidebar-open');
  };
  return (
    <div className="top-navbar">
      <UserInfo user={data.user} className="" />
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  );
}

export default TopNavbar;
