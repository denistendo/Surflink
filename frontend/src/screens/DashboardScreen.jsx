import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, Clock, CalendarDays, Router as RouterIcon, Power, Play, ShoppingCart } from 'lucide-react';
import './DashboardScreen.css';

const DashboardScreen = () => {
  const [activeSession, setActiveSession] = useState(null);
  const [pendingSession, setPendingSession] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const active = localStorage.getItem('active_session');
    const pending = localStorage.getItem('pending_session');

    if (active) {
      const parsedActive = JSON.parse(active);
      const elapsedSec = Math.floor((Date.now() - parsedActive.startTime) / 1000);
      const remaining = parsedActive.durationSec - elapsedSec;
      if (remaining > 0) {
        setActiveSession(parsedActive);
        setTimeLeft(remaining);
      } else {
        localStorage.removeItem('active_session');
      }
    } else if (pending) {
      setPendingSession(JSON.parse(pending));
    }
  }, []);

  // Timer effect for active session
  useEffect(() => {
    if (!activeSession) return;

    const interval = setInterval(() => {
      const elapsedSec = Math.floor((Date.now() - activeSession.startTime) / 1000);
      const remaining = activeSession.durationSec - elapsedSec;
      if (remaining <= 0) {
        setTimeLeft(0);
        setActiveSession(null);
        localStorage.removeItem('active_session');
        clearInterval(interval);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeSession]);

  const handleInitiate = () => {
    if (!pendingSession) return;
    const active = {
      startTime: Date.now(),
      durationSec: pendingSession.durationSec,
      title: pendingSession.title,
      voucherCode: pendingSession.voucherCode
    };
    localStorage.setItem('active_session', JSON.stringify(active));
    localStorage.removeItem('pending_session');
    setActiveSession(active);
    setTimeLeft(pendingSession.durationSec);
    setPendingSession(null);
  };

  const handleDisconnect = () => {
    localStorage.removeItem('active_session');
    setActiveSession(null);
    setTimeLeft(0);
  };

  const formatDuration = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isConnected = !!activeSession;

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
          <div className={`ds-badge ${isConnected ? 'ds-badge-connected' : 'ds-badge-disconnected'}`}>
            {isConnected ? <Wifi size={14} /> : <WifiOff size={14} />}
            <span>{isConnected ? 'Connected' : 'Offline'}</span>
          </div>
        </div>

        {/* Display logic based on session state */}
        {activeSession ? (
          /* Active Session Card */
          <div className="ds-card ds-card-primary animate-in">
            <div className="ds-card-header">
              <div className="ds-card-title ds-text-green">
                <Clock size={18} />
                <span>Active Session ({activeSession.title})</span>
              </div>
              <span className="ds-card-id">Code: {activeSession.voucherCode}</span>
            </div>
            <div className="ds-card-body ds-center">
              <span className="ds-time-label">Remaining Time</span>
              <div className="ds-time-value">{formatDuration(timeLeft)}</div>
            </div>
          </div>
        ) : pendingSession ? (
          /* Pending Activation Card with INITIATE Button */
          <div className="ds-card ds-card-pending animate-in">
            <div className="ds-card-header">
              <div className="ds-card-title ds-text-amber">
                <Clock size={18} />
                <span>Voucher Ready ({pendingSession.title})</span>
              </div>
              <span className="ds-card-id">Code: {pendingSession.voucherCode}</span>
            </div>
            <div className="ds-card-body ds-center">
              <span className="ds-time-label">Session Duration</span>
              <div className="ds-time-value ds-text-muted">{formatDuration(pendingSession.durationSec)}</div>
              
              <button className="ds-btn-initiate" onClick={handleInitiate}>
                <Play size={18} fill="currentColor" />
                <span>Start Connection</span>
              </button>
            </div>
          </div>
        ) : (
          /* No Session Card */
          <div className="ds-card ds-card-none animate-in">
            <div className="ds-card-body ds-center">
              <WifiOff size={48} className="ds-icon-none" />
              <span className="ds-none-title">No Active Session</span>
              <p className="ds-none-desc">
                You are currently offline. Please purchase a package or redeem a voucher to get online.
              </p>
              <button className="ds-btn-buy" onClick={() => window.location.href = '/packages'}>
                <ShoppingCart size={18} />
                <span>View Packages</span>
              </button>
            </div>
          </div>
        )}

        {/* Small Cards Row */}
        {isConnected && (
          <div className="ds-grid">
            <div className="ds-card ds-card-small">
              <div className="ds-card-title">
                <CalendarDays size={18} />
                <span>Expires At</span>
              </div>
              <div className="ds-card-value">
                {new Date(activeSession.startTime + activeSession.durationSec * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className="ds-card-sub">
                {new Date(activeSession.startTime + activeSession.durationSec * 1000).toLocaleDateString([], { month: 'short', day: 'numeric' })}
              </div>
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
        )}

        {/* Usage Card */}
        {isConnected && (
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
        )}

        {/* Disconnect Button */}
        {isConnected && (
          <button className="ds-btn-danger" onClick={handleDisconnect}>
            <Power size={18} />
            <span>Disconnect</span>
          </button>
        )}
      </main>
    </div>
  );
};

export default DashboardScreen;
