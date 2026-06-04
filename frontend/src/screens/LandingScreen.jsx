import React, { useRef, useEffect } from 'react';
import { Wifi, ShoppingCart } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import './LandingScreen.css';

const LandingScreen = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Force blur on mount to prevent any auto-focusing (blinking cursor) before clicking
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }, []);

  return (
    <div className="ls-root">
      {/* Header */}
      <header className="ls-header">
        <img src="/logo.png" alt="Surflink Logo" className="ls-header-logo-img" />
        <span className="ls-header-text">Surflink</span>
      </header>

      {/* Main Content */}
      <main className="ls-main">
        <div className="ls-icon-wrapper">
          <Wifi size={40} className="ls-main-icon" />
        </div>

        <h1 className="ls-title">Connect to WiFi</h1>
        <p className="ls-subtitle">Enter your voucher code to get online</p>

        <div className="ls-form">
          <div className="ls-input-group">
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Enter voucher code" 
              className="ls-input"
              autoFocus={false}
            />
          </div>
          
          <button className="ls-btn-primary">
            Connect
          </button>

          <button className="ls-btn-dashed">
            <ShoppingCart size={20} />
            Buy Internet Package
          </button>
        </div>

        <p className="ls-footer-text">
          Don't have a voucher? Purchase a package below to get started.
        </p>
      </main>

      <BottomNav />
    </div>
  );
};

export default LandingScreen;
