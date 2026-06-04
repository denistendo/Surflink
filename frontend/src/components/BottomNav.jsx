import React from 'react';
import { Home, Gauge, ShoppingCart, Ticket, HelpCircle } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Connect' },
    { path: '/dashboard', icon: Gauge, label: 'Dashboard' },
    { path: '/packages', icon: ShoppingCart, label: 'Packages' },
    { path: '/voucher', icon: Ticket, label: 'Voucher' },
    { path: '/support', icon: HelpCircle, label: 'Support' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(({ path, icon: Icon, label }) => {
        const isActive = location.pathname === path;
        return (
          <Link key={path} to={path} className={`bn-item ${isActive ? 'bn-item--active' : ''}`}>
            <Icon size={24} className="bn-icon" />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
