import { path } from './routes';

const sidebarNav = [
  {
    link: path.home,
    section: 'home',
    icon: <i className="bx bx-home-alt"></i>,
    text: 'Home',
  },
  {
    link: path.orders,
    section: 'orders',
    icon: <i className="bx bx-receipt"></i>,
    text: 'Orders',
  },
  {
    link: path.products,
    section: 'products',
    icon: <i className="bx bx-cube"></i>,
    text: 'Products',
  },
  {
    link: path.customers,
    section: 'customers',
    icon: <i className="bx bx-user"></i>,
    text: 'Customers',
  },
  {
    link: path.stats,
    section: 'stats',
    icon: <i className="bx bx-line-chart"></i>,
    text: 'Stats',
  },
  {
    link: path.settings,
    section: 'settings',
    icon: <i className="bx bx-cog"></i>,
    text: 'Settings',
  },
];

export default sidebarNav;
