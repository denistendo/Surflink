import React, { useState } from 'react';
import { Wifi, Clock, Calendar, BarChart2, Smartphone, Ticket, Zap, MessageCircle, HelpCircle, LayoutList, CheckCircle2, Signal } from 'lucide-react';
import './LandingScreen.css';

const packages = [
  {
    id: '1hour',
    icon: Clock,
    label: '1 Hour',
    sub: 'Quick session · Ultra-fast',
    price: '500',
    badge: null,
  },
  {
    id: '24hours',
    icon: Calendar,
    label: '24 Hours',
    sub: 'Full day · Unlimited access',
    price: '2,000',
    badge: 'Popular',
  },
  {
    id: '7days',
    icon: BarChart2,
    label: '7 Days',
    sub: 'Weekly · Best value',
    price: '10,000',
    badge: 'Best Deal',
  },
];

const LandingScreen = () => {
  const [selectedPackage, setSelectedPackage] = useState('24hours');

  return (
    <div className="ls-root">
      {/* Background blobs */}
      <div className="ls-blob ls-blob--1" />
      <div className="ls-blob ls-blob--2" />

      {/* Header */}
      <header className="ls-header">
        <div className="ls-logo">
          <div className="ls-logo-icon">
            <Wifi size={16} strokeWidth={2.5} />
          </div>
          <span className="ls-logo-text">SurfLink</span>
        </div>
        <div className="ls-avatar">
          <img
            src="https://ui-avatars.com/api/?name=SL&background=0ea5e9&color=fff&bold=true&size=80"
            alt="User"
          />
          <span className="ls-avatar-ring" />
        </div>
      </header>

      {/* Hero */}
      <section className="ls-hero">
        <div className="ls-signal-badge">
          <Signal size={12} strokeWidth={2.5} />
          <span>Hotspot Active</span>
          <span className="ls-pulse" />
        </div>
        <h1 className="ls-hero-title">
          Stay <span className="ls-hero-accent">Connected</span>,<br />
          Stay Fast.
        </h1>
        <p className="ls-hero-sub">Premium internet access — simple, instant, reliable.</p>
      </section>

      {/* Main Card */}
      <div className="ls-card">
        <p className="ls-card-label">Choose Your Plan</p>

        <div className="ls-packages">
          {packages.map(({ id, icon: Icon, label, sub, price, badge }) => (
            <button
              key={id}
              className={`ls-pkg${selectedPackage === id ? ' ls-pkg--active' : ''}`}
              onClick={() => setSelectedPackage(id)}
            >
              {badge && <span className="ls-pkg-badge">{badge}</span>}
              <div className={`ls-pkg-icon${selectedPackage === id ? ' ls-pkg-icon--active' : ''}`}>
                <Icon size={18} strokeWidth={2} />
              </div>
              <div className="ls-pkg-info">
                <strong>{label}</strong>
                <span>{sub}</span>
              </div>
              <div className="ls-pkg-right">
                <p className="ls-pkg-price">UGX {price}</p>
                {selectedPackage === id && (
                  <CheckCircle2 size={16} className="ls-pkg-check" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Number */}
        <div className="ls-field">
          <label className="ls-field-label">Mobile Number</label>
          <div className="ls-input-wrap">
            <Smartphone size={17} className="ls-input-icon" strokeWidth={2} />
            <input type="tel" placeholder="07XX XXX XXX" className="ls-input" />
          </div>
        </div>

        <button className="ls-btn-primary">
          <Zap size={17} fill="currentColor" strokeWidth={0} />
          Pay & Connect
        </button>

        <div className="ls-divider"><span>or use a voucher</span></div>

        {/* Voucher */}
        <div className="ls-field">
          <label className="ls-field-label">Voucher Code</label>
          <div className="ls-input-wrap">
            <Ticket size={17} className="ls-input-icon" strokeWidth={2} />
            <input type="text" placeholder="XXXX-XXXX-XXXX" className="ls-input" />
          </div>
        </div>

        <button className="ls-btn-outline">Login with Voucher</button>
      </div>

      {/* Promo Strip */}
      <div className="ls-promo">
        <div className="ls-promo-glow" />
        <div className="ls-promo-inner">
          <div className="ls-promo-icon">
            <Wifi size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="ls-promo-title">5G-Grade Speeds</h3>
            <p className="ls-promo-body">Seamless streaming, calls & browsing — zero throttling.</p>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="ls-fab" aria-label="Chat support">
        <MessageCircle size={22} fill="white" strokeWidth={0} />
      </button>

      {/* Bottom Nav */}
      <nav className="ls-nav">
        {[
          { icon: Wifi, label: 'Connect', active: true },
          { icon: LayoutList, label: 'Packages', active: false },
          { icon: HelpCircle, label: 'Support', active: false },
        ].map(({ icon: Icon, label, active }) => (
          <button key={label} className={`ls-nav-item${active ? ' ls-nav-item--active' : ''}`}>
            <Icon size={20} strokeWidth={active ? 2.5 : 2} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default LandingScreen;
