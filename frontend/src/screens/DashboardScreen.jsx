import React from 'react';
import { Wifi, Clock, CalendarDays, Router as RouterIcon, Power } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import './DashboardScreen.css';

const DashboardScreen = () => {
  return (
    <div className="ds-root">
      {/* Header */}
      <header className="ds-header">
        <img src="/logo.png" alt="Surflink Logo" className="ds-header-logo-img" />
        <span className="ds-header-text">Surflink</span>
      </header>

      {/* Main Content */}
      <main className="ds-main">
        <div className="ds-title-row">
          <h1 className="ds-title">My Connection</h1>
          <div className="ds-badge-connected">
            <Wifi size={14} />
            <span>Connected</span>
          </div>
        </div>

        {/* Active Session Card */}
        <div className="ds-card ds-card-primary">
          <div className="ds-card-header">
            <div className="ds-card-title ds-text-green">
              <Clock size={18} />
              <span>Active Session</span>
            </div>
            <span className="ds-card-id">ID: #WFX-7842</span>
          </div>
          <div className="ds-card-body ds-center">
            <span className="ds-time-label">Remaining Time</span>
            <div className="ds-time-value">04:32:18</div>
          </div>
        </div>

        {/* Small Cards Row */}
        <div className="ds-grid">
          <div className="ds-card ds-card-small">
            <div className="ds-card-title">
              <CalendarDays size={18} />
              <span>Expires At</span>
            </div>
            <div className="ds-card-value">6:45 PM</div>
            <div className="ds-card-sub">Today, June 4</div>
          </div>

          <div className="ds-card ds-card-small">
            <div className="ds-card-title">
              <RouterIcon size={18} />
              <span>Network</span>
            </div>
            <div className="ds-card-value">HotSpot_5G</div>
            <div className="ds-card-sub">Excellent signal</div>
          </div>
        </div>

        {/* Usage Card */}
        <div className="ds-card">
          <div className="ds-card-title ds-margin-bottom ds-text-primary">
            <Clock size={18} />
            <span>Usage</span>
          </div>
          <div className="ds-usage-row">
            <span className="ds-usage-label">Data used</span>
            <span className="ds-usage-value">1.2 GB</span>
          </div>
        </div>

        {/* Disconnect Button */}
        <button className="ds-btn-danger">
          <Power size={18} />
          <span>Disconnect</span>
        </button>
      </main>

      <BottomNav />
    </div>
  );
};

export default DashboardScreen;
