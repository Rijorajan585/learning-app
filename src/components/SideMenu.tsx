import React from 'react';
import { useAppSelector } from '../app/hook';

const SideMenu: React.FC = () => {
  const { roles } = useAppSelector((state) => state.auth);

  return (
    <aside>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          {roles.includes('admin') && <li><a href="/admin">Admin Page</a></li>}
          {roles.includes('superadmin') && <li><a href="/superadmin">Super Admin Page</a></li>}
          {roles.includes('tester') && <li><a href="/tester">Tester Page</a></li>}
          {/* Add more links based on roles */}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
