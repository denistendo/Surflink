import { Outlet } from 'react-router-dom';
import './PortalLayout.css';

const PortalLayout = () => {
  return (
    <div className="portal-container">
      <main className="portal-content">
        <Outlet />
      </main>
    </div>
  );
};

export default PortalLayout;
