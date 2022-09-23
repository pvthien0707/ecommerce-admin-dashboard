import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

import { path, publicRoutes } from '@/configs';

import '@/assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import '@/scss/App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={path.home} element={<MainLayout />}>
            {publicRoutes.map((route, index) => {
              const Page = route.component;

              if (route.path === '/') {
                return <Route key={index} index element={<Page />} />;
              }

              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
