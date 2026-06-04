import React from 'react';
import { Clock, Calendar, Zap, Star } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import './PackagesScreen.css';

const PackagesScreen = () => {
  return (
    <div className="pk-root">
      {/* Header */}
      <header className="pk-header">
        <img src="/logo.png" alt="Surflink Logo" className="pk-header-logo-img" />
        <span className="pk-header-text">Surflink</span>
      </header>

      {/* Main Content */}
      <main className="pk-main">
        <h1 className="pk-title">Buy Package</h1>
        <p className="pk-subtitle">Choose an internet package that fits your needs</p>

        <div className="pk-cards">
          {/* Card 1 */}
          <div className="pk-card">
            <div className="pk-card-header">
              <div className="pk-icon-wrap pk-icon-blue">
                <Clock size={20} />
              </div>
              <div className="pk-card-title-col">
                <span className="pk-card-title">1 Hour</span>
                <span className="pk-card-sub">60 minutes</span>
              </div>
            </div>
            <div className="pk-price">UGX 2,000</div>
            <ul className="pk-features">
              <li><Zap size={16} className="pk-feature-icon" /> High-speed access</li>
              <li><Zap size={16} className="pk-feature-icon" /> 1 device</li>
            </ul>
            <button className="pk-btn pk-btn-blue">Buy Now</button>
          </div>

          {/* Card 2 */}
          <div className="pk-card pk-card-popular">
            <div className="pk-badge-popular">
              <Star size={12} fill="currentColor" /> Most Popular
            </div>
            <div className="pk-card-header">
              <div className="pk-icon-wrap pk-icon-green">
                <Calendar size={20} />
              </div>
              <div className="pk-card-title-col">
                <span className="pk-card-title">1 Day</span>
                <span className="pk-card-sub">24 hours</span>
              </div>
            </div>
            <div className="pk-price">UGX 10,000</div>
            <ul className="pk-features">
              <li><Zap size={16} className="pk-feature-icon" /> Unlimited speed</li>
              <li><Zap size={16} className="pk-feature-icon" /> Up to 3 devices</li>
              <li><Zap size={16} className="pk-feature-icon" /> Priority support</li>
            </ul>
            <button className="pk-btn pk-btn-green">Buy Now</button>
          </div>

          {/* Card 3 */}
          <div className="pk-card">
            <div className="pk-card-header">
              <div className="pk-icon-wrap pk-icon-blue">
                <Calendar size={20} />
              </div>
              <div className="pk-card-title-col">
                <span className="pk-card-title">1 Week</span>
                <span className="pk-card-sub">7 days</span>
              </div>
            </div>
            <div className="pk-price">UGX 50,000</div>
            <ul className="pk-features">
              <li><Zap size={16} className="pk-feature-icon" /> Unlimited speed</li>
              <li><Zap size={16} className="pk-feature-icon" /> Up to 5 devices</li>
              <li><Zap size={16} className="pk-feature-icon" /> Priority support</li>
            </ul>
            <button className="pk-btn pk-btn-blue">Buy Now</button>
          </div>
        </div>

        <p className="pk-footer-text">
          All packages include high-speed internet access. No hidden fees.
        </p>
      </main>

      <BottomNav />
    </div>
  );
};

export default PackagesScreen;
