import { Wifi, ShoppingCart, KeyRound, ClockArrowUp } from 'lucide-react';
import './LandingScreen.css';

const LandingScreen = () => {
  return (
    <div className="landing-screen">
      <div className="brand-header">
        <div className="logo-container">
          <Wifi size={32} color="var(--primary)" />
        </div>
        <h1 className="brand-title">SurfLink</h1>
        <div className="status-badge">
          <span className="status-dot disconnected"></span>
          Not Connected
        </div>
      </div>

      <div className="welcome-text">
        <h2>Welcome to the Network</h2>
        <p className="text-muted">Please select an option to get online and start browsing securely.</p>
      </div>

      <div className="action-cards">
        <button className="glass-panel action-card">
          <div className="card-icon blue-gradient">
            <ShoppingCart size={24} color="#fff" />
          </div>
          <div className="card-content">
            <h3>Buy Internet</h3>
            <p className="text-muted">Pay with Mobile Money</p>
          </div>
        </button>

        <button className="glass-panel action-card">
          <div className="card-icon teal-gradient">
            <KeyRound size={24} color="#fff" />
          </div>
          <div className="card-content">
            <h3>Enter Voucher</h3>
            <p className="text-muted">Use pre-purchased code</p>
          </div>
        </button>

        <button className="glass-panel action-card">
          <div className="card-icon purple-gradient">
            <ClockArrowUp size={24} color="#fff" />
          </div>
          <div className="card-content">
            <h3>Resume Session</h3>
            <p className="text-muted">Continue active time</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
