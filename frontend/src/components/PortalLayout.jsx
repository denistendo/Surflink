import { Outlet } from 'react-router-dom';
import './PortalLayout.css';

const PortalLayout = () => {
  return (
    <>
      <div className="animated-bg"></div>
      <div className="portal-container">
        <main className="portal-content">
          <Outlet />
        </main>
        <footer className="portal-footer">
          <p className="text-muted">© {new Date().getFullYear()} SurfLink. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default PortalLayout;
