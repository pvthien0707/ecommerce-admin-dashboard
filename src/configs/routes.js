import Blank from '@/pages/Blank';
import Dashboard from '@/pages/Dashboard';

const path = {
  home: '/',
  orders: '/orders',
  products: '/products',
  customers: '/customers',
  settings: '/settings',
  stats: '/stats',
};

const publicRoutes = [
  {
    path: path.home,
    component: Dashboard,
  },
  {
    path: path.orders,
    component: Blank,
  },
  {
    path: path.products,
    component: Blank,
  },
  {
    path: path.customers,
    component: Blank,
  },
  {
    path: path.settings,
    component: Blank,
  },
  {
    path: path.stats,
    component: Blank,
  },
];

const privateRoutes = [];

export { path, publicRoutes, privateRoutes };
