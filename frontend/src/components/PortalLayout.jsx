import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
import './PortalLayout.css';

const PortalLayout = () => {
  return (
    <>
      <div className="portal-container">
        <main className="portal-content">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </>
  );
};

export default PortalLayout;
