import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Zap, Star, Award, Sparkles, ChevronRight, X, Check } from 'lucide-react';
import './PackagesScreen.css';

const PACKAGES = [
  {
    id: '1h',
    title: '1 Hour',
    sub: '60 minutes access',
    price: '500 UDX',
    features: ['High-speed access', '1 device connected', 'Instant activation'],
    color: 'blue'
  },
  {
    id: '12h',
    title: '12 Hours',
    sub: '12 hours access',
    price: '1,000 UDX',
    features: ['High-speed access', 'Up to 2 devices', 'Instant activation'],
    color: 'green'
  },
  {
    id: '24h',
    title: '24 Hours',
    sub: '24 hours access',
    price: '1,500 UDX',
    features: ['Unlimited speed', 'Up to 3 devices', 'Priority support'],
    color: 'amber'
  },
  {
    id: 'weekly',
    title: 'Weekly',
    sub: '7 days access',
    price: '7,000 UDX',
    features: ['Unlimited speed', 'Up to 5 devices', 'Priority support'],
    color: 'indigo'
  },
  {
    id: 'monthly',
    title: 'Monthly',
    sub: '30 days access',
    price: '2,500 UDX',
    features: ['Unlimited speed', 'Up to 10 devices', '24/7 Priority support'],
    color: 'rose'
  }
];

const PackagesScreen = () => {
  const [trialTimeLeft, setTrialTimeLeft] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');

  useEffect(() => {
    let openedTime = localStorage.getItem('surflink_opened_time');
    if (!openedTime) {
      openedTime = Date.now().toString();
      localStorage.setItem('surflink_opened_time', openedTime);
    }

    const openedTimestamp = parseInt(openedTime, 10);
    const durationMs = 30 * 60 * 1000; // 30 minutes in ms

    const updateTimer = () => {
      const elapsed = Date.now() - openedTimestamp;
      const remaining = durationMs - elapsed;
      if (remaining <= 0) {
        setTrialTimeLeft(0);
      } else {
        setTrialTimeLeft(Math.floor(remaining / 1000));
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBuy = (pkg) => {
    setSelectedPackage(pkg);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'SL-';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setVoucherCode(code);
  };

  const confirmPurchase = () => {
    setShowSuccess(true);
  };

  const closeModals = () => {
    setSelectedPackage(null);
    setShowSuccess(false);
  };

  const showTrial = trialTimeLeft !== null && trialTimeLeft > 0;

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
          {/* Trial Offer Card (only shown at top if active) */}
          {showTrial && (
            <div className="pk-card pk-card-trial">
              <div className="pk-badge-trial">
                <Sparkles size={12} fill="currentColor" /> Limited Offer
              </div>
              <div className="pk-card-header">
                <div className="pk-icon-wrap pk-icon-trial">
                  <Award size={20} />
                </div>
                <div className="pk-card-title-col">
                  <span className="pk-card-title">30 Min Free Trial</span>
                  <span className="pk-card-sub text-danger font-semibold">
                    Expires in: {formatTime(trialTimeLeft)}
                  </span>
                </div>
              </div>
              <div className="pk-price">0 UDX</div>
              <ul className="pk-features">
                <li><Zap size={16} className="pk-feature-icon" /> Free 30 minutes access</li>
                <li><Zap size={16} className="pk-feature-icon" /> 1 device connected</li>
                <li><Zap size={16} className="pk-feature-icon" /> Single use for new systems</li>
              </ul>
              <button 
                className="pk-btn pk-btn-trial"
                onClick={() => handleBuy({ id: 'trial', title: '30 Min Free Trial', price: '0 UDX', isTrial: true })}
              >
                Claim Free Trial
              </button>
            </div>
          )}

          {/* Standard Cards */}
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.id === '24h';
            const iconColorClass = `pk-icon-${pkg.color}`;
            const btnColorClass = `pk-btn-${pkg.color}`;

            return (
              <div key={pkg.id} className={`pk-card ${isPopular ? 'pk-card-popular' : ''}`}>
                {isPopular && (
                  <div className="pk-badge-popular">
                    <Star size={12} fill="currentColor" /> Most Popular
                  </div>
                )}
                <div className="pk-card-header">
                  <div className={`pk-icon-wrap ${iconColorClass}`}>
                    {pkg.id.includes('h') ? <Clock size={20} /> : <Calendar size={20} />}
                  </div>
                  <div className="pk-card-title-col">
                    <span className="pk-card-title">{pkg.title}</span>
                    <span className="pk-card-sub">{pkg.sub}</span>
                  </div>
                </div>
                <div className="pk-price">{pkg.price}</div>
                <ul className="pk-features">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx}>
                      <Zap size={16} className="pk-feature-icon" /> {feat}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`pk-btn ${btnColorClass}`}
                  onClick={() => handleBuy(pkg)}
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>

        <p className="pk-footer-text">
          All packages include high-speed internet access. No hidden fees.
        </p>
      </main>

      {/* Purchase Modal */}
      {selectedPackage && !showSuccess && (
        <div className="pk-modal-backdrop">
          <div className="pk-modal">
            <button className="pk-modal-close" onClick={closeModals}>
              <X size={20} />
            </button>
            <h2 className="pk-modal-title">Confirm Purchase</h2>
            <p className="pk-modal-desc">
              You are about to activate the <strong>{selectedPackage.title}</strong> package.
            </p>
            
            <div className="pk-modal-details">
              <div className="pk-detail-row">
                <span>Package:</span>
                <strong>{selectedPackage.title}</strong>
              </div>
              <div className="pk-detail-row">
                <span>Price:</span>
                <strong className="pk-text-primary">{selectedPackage.price}</strong>
              </div>
            </div>

            {selectedPackage.isTrial ? (
              <p className="pk-modal-info">
                This free trial is only available once per system session. Click Confirm to activate.
              </p>
            ) : (
              <p className="pk-modal-info">
                This is a simulation. Click Confirm to simulate the payment and receive your voucher code.
              </p>
            )}

            <div className="pk-modal-actions">
              <button className="pk-btn-secondary" onClick={closeModals}>Cancel</button>
              <button className="pk-btn-confirm" onClick={confirmPurchase}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="pk-modal-backdrop">
          <div className="pk-modal pk-modal-success animate-in">
            <div className="pk-success-icon-wrap">
              <Check size={32} />
            </div>
            <h2 className="pk-modal-title">Activation Successful!</h2>
            <p className="pk-modal-desc">
              Your package is now active. Use the voucher code below to connect, or click Connect to get online immediately.
            </p>

            <div className="pk-voucher-box">
              <span className="pk-voucher-label">VOUCHER CODE</span>
              <span className="pk-voucher-code">{voucherCode}</span>
            </div>

            <button 
              className="pk-btn-connect" 
              onClick={() => {
                closeModals();
                // We can navigate to dashboard screen
                window.location.href = '/dashboard';
              }}
            >
              Connect to Internet <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackagesScreen;

