import { Outlet } from 'react-router-dom';

import NavMenu from './NavMenu';

const Layout = () => {
  return (
    <div>
      <div>
        <NavMenu />
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
