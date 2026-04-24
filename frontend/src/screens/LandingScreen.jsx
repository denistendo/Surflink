import React, { useState } from 'react';
import { Wifi, Clock, Calendar, BarChart2, Smartphone, Ticket, Zap, MessageCircle, HelpCircle, LayoutList } from 'lucide-react';
import './LandingScreen.css';

const LandingScreen = () => {
  const [selectedPackage, setSelectedPackage] = useState('1hour');

  return (
    <div className="landing-screen">
      {/* Header */}
      <header className="app-header">
        <div className="logo-section">
          <Wifi className="logo-icon" size={24} color="var(--primary)" />
          <span className="logo-text">SurfLink</span>
        </div>
        <div className="user-avatar">
          <img src="https://ui-avatars.com/api/?name=Surflink+User&background=1e293b&color=fff" alt="User" />
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="main-title">SurfLink</h1>
        <p className="subtitle">Fast and reliable internet access</p>
      </div>

      {/* Main Card */}
      <div className="main-card">
        <div className="badge-container">
          <div className="status-badge">
            <span className="status-dot"></span>
            Hotspot Active
          </div>
        </div>

        <h2 className="section-title">Select a Package</h2>

        <div className="packages-list">
          <div 
            className={`package-item ${selectedPackage === '1hour' ? 'selected' : ''}`}
            onClick={() => setSelectedPackage('1hour')}
          >
            <div className="package-icon-wrapper blue">
              <Clock size={20} />
            </div>
            <div className="package-details">
              <h3>1 Hour</h3>
              <p>Ultra-fast browsing</p>
            </div>
            <div className="package-price">UGX 500</div>
          </div>

          <div 
            className={`package-item ${selectedPackage === '24hours' ? 'selected' : ''}`}
            onClick={() => setSelectedPackage('24hours')}
          >
            <div className="package-icon-wrapper light-blue">
              <Calendar size={20} />
            </div>
            <div className="package-details">
              <h3>24 Hours</h3>
              <p>Daily unlimited access</p>
            </div>
            <div className="package-price">UGX<br/>2,000</div>
          </div>

          <div 
            className={`package-item ${selectedPackage === '7days' ? 'selected' : ''}`}
            onClick={() => setSelectedPackage('7days')}
          >
            <div className="package-icon-wrapper light-blue">
              <BarChart2 size={20} />
            </div>
            <div className="package-details">
              <h3>7 Days</h3>
              <p>Best value for power users</p>
            </div>
            <div className="package-price">UGX<br/>10,000</div>
          </div>
        </div>

        <div className="form-group">
          <label>ENTER MOBILE NUMBER</label>
          <div className="input-wrapper">
            <Smartphone className="input-icon" size={20} />
            <input type="tel" placeholder="07XX XXX XXX" />
          </div>
        </div>

        <button className="btn-primary w-full connect-btn">
          Pay & Connect <Zap size={18} fill="currentColor" />
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="form-group">
          <label>ENTER VOUCHER CODE</label>
          <div className="input-wrapper">
            <Ticket className="input-icon" size={20} />
            <input type="text" placeholder="XXXX-XXXX-XXXX" />
          </div>
        </div>

        <button className="btn-outline w-full voucher-btn">
          Login with Voucher
        </button>
      </div>

      {/* Promo Card */}
      <div className="promo-card">
        <div className="promo-image">
           <div className="fake-graphic"></div>
        </div>
        <div className="promo-text">
          <h3>Experience 5G Speeds</h3>
          <p>Enjoy seamless streaming and video calls with SurfLink's advanced network infrastructure.</p>
        </div>
      </div>

      {/* FAB */}
      <button className="fab-button">
        <MessageCircle size={24} color="white" fill="currentColor" />
      </button>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item active">
          <div className="nav-icon-wrapper">
            <Wifi size={22} />
          </div>
          <span>CONNECT</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon-wrapper">
            <LayoutList size={22} />
          </div>
          <span>PACKAGES</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon-wrapper">
            <HelpCircle size={22} />
          </div>
          <span>SUPPORT</span>
        </div>
      </nav>
    </div>
  );
};

export default LandingScreen;
