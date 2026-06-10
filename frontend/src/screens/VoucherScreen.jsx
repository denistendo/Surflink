import React, { useState } from 'react';
import { Ticket, ShieldCheck, CreditCard, Phone, ArrowRight, CheckCircle2, AlertCircle, X } from 'lucide-react';
import './VoucherScreen.css';

const VoucherScreen = () => {
  const [voucherCode, setVoucherCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [redeemedDetails, setRedeemedDetails] = useState(null);

  // Payment method simulation states
  const [activePaymentMethod, setActivePaymentMethod] = useState(null); // 'momo' or 'card'
  const [paymentPhone, setPaymentPhone] = useState('');
  const [paymentProvider, setPaymentProvider] = useState('MTN');
  const [paymentCardNum, setPaymentCardNum] = useState('');
  const [paymentCardExpiry, setPaymentCardExpiry] = useState('');
  const [paymentCardCvc, setPaymentCardCvc] = useState('');
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccessCode, setPaymentSuccessCode] = useState('');

  const handleRedeem = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!voucherCode.trim()) {
      setError('Please enter a voucher code');
      return;
    }

    const cleanedCode = voucherCode.trim().toUpperCase();

    // Check if there is a pending session in localStorage with this code
    const storedPending = localStorage.getItem('pending_session');
    if (storedPending) {
      const parsedPending = JSON.parse(storedPending);
      if (parsedPending.voucherCode.toUpperCase() === cleanedCode) {
        setRedeemedDetails(parsedPending);
        setSuccess(true);
        return;
      }
    }

    // Fallback: If it starts with SL- or matches format, let's dynamically redeem a simulated 1 Hour package
    if (cleanedCode.startsWith('SL-') || cleanedCode.length >= 6) {
      const simulatedSession = {
        title: '1 Hour Package (Voucher)',
        durationSec: 3600,
        voucherCode: cleanedCode
      };
      // Save it as pending session
      localStorage.setItem('pending_session', JSON.stringify(simulatedSession));
      setRedeemedDetails(simulatedSession);
      setSuccess(true);
    } else {
      setError('Invalid voucher code. Please check the code and try again.');
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentProcessing(true);
    
    // Simulate API delay
    setTimeout(() => {
      setPaymentProcessing(false);
      
      // Generate a voucher code for purchase
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = 'SL-';
      for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      // Default payment package is "24 Hours (1,500 UGX)" for simplicity
      const purchasedSession = {
        title: '24 Hours Package',
        durationSec: 86400,
        voucherCode: code
      };

      localStorage.setItem('pending_session', JSON.stringify(purchasedSession));
      setPaymentSuccessCode(code);
      setActivePaymentMethod(null);
      
      // Auto fill redeemed details & show redemption success
      setRedeemedDetails(purchasedSession);
      setVoucherCode(code);
      setSuccess(true);
    }, 2000);
  };

  const closePaymentModal = () => {
    setActivePaymentMethod(null);
    setPaymentPhone('');
    setPaymentCardNum('');
    setPaymentCardExpiry('');
    setPaymentCardCvc('');
  };

  return (
    <div className="vs-root">
      {/* Header */}
      <header className="vs-header">
        <img src="/logo.png" alt="Surflink Logo" className="vs-header-logo-img" />
        <span className="vs-header-text">WiFi Portal</span>
      </header>

      {/* Main Content */}
      <main className="vs-main">
        <h1 className="vs-title">Voucher & Payment</h1>
        <p className="vs-subtitle">Redeem a voucher or complete your payment</p>

        {success ? (
          /* Redemption Success Screen */
          <div className="vs-card vs-card-success animate-in">
            <div className="vs-success-icon">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="vs-success-title">Voucher Redeemed!</h2>
            <p className="vs-success-desc">
              Your <strong>{redeemedDetails?.title}</strong> has been loaded successfully.
            </p>
            <div className="vs-success-code-box">
              <span className="vs-success-label">Voucher Code</span>
              <span className="vs-success-code">{redeemedDetails?.voucherCode}</span>
            </div>
            <p className="vs-success-tip">
              Click below to head to your dashboard and initiate your internet connection.
            </p>
            <button 
              className="vs-btn-primary"
              onClick={() => window.location.href = '/dashboard'}
            >
              Go to Dashboard <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          /* Standard Voucher Form and Payment Methods */
          <div className="vs-cards">
            {/* Voucher Card */}
            <div className="vs-card">
              <form onSubmit={handleRedeem}>
                <div className="vs-card-header">
                  <Ticket size={22} className="vs-icon-blue" />
                  <h2 className="vs-card-title">Redeem Voucher</h2>
                </div>
                <p className="vs-card-desc">
                  Enter your voucher code below to activate your internet access.
                </p>

                <div className="vs-input-group">
                  <input
                    type="text"
                    placeholder="Enter voucher code"
                    className="vs-input"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                  />
                </div>

                {error && (
                  <div className="vs-error-msg">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                <button type="submit" className="vs-btn-primary vs-btn-redeem">
                  <ShieldCheck size={18} />
                  <span>Redeem Voucher</span>
                </button>
              </form>
            </div>

            <div className="vs-divider">
              <span>OR PAY WITH</span>
            </div>

            {/* Payment Methods Card */}
            <div className="vs-card">
              <div className="vs-card-header">
                <CreditCard size={22} className="vs-icon-blue" />
                <h2 className="vs-card-title">Payment Methods</h2>
              </div>

              <div className="vs-pay-options">
                {/* Mobile Money */}
                <button 
                  className="vs-pay-btn"
                  onClick={() => setActivePaymentMethod('momo')}
                >
                  <div className="vs-pay-btn-left">
                    <div className="vs-pay-icon-wrap vs-momo-color">
                      <Phone size={18} />
                    </div>
                    <span className="vs-pay-label">Mobile Money</span>
                  </div>
                  <ArrowRight size={18} className="vs-chevron" />
                </button>

                {/* Bank Card */}
                <button 
                  className="vs-pay-btn"
                  onClick={() => setActivePaymentMethod('card')}
                >
                  <div className="vs-pay-btn-left">
                    <div className="vs-pay-icon-wrap vs-card-color">
                      <CreditCard size={18} />
                    </div>
                    <span className="vs-pay-label">Bank Card</span>
                  </div>
                  <ArrowRight size={18} className="vs-chevron" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Payment Modals */}
      {activePaymentMethod && (
        <div className="vs-modal-backdrop">
          <div className="vs-modal animate-in">
            <button className="vs-modal-close" onClick={closePaymentModal} disabled={paymentProcessing}>
              <X size={20} />
            </button>
            
            {activePaymentMethod === 'momo' ? (
              /* Mobile Money Modal Content */
              <form onSubmit={handlePaymentSubmit}>
                <h2 className="vs-modal-title">Mobile Money Payment</h2>
                <p className="vs-modal-desc">
                  Simulate a mobile money payment to purchase a **24 Hours Package (1,500 UGX)**.
                </p>

                <div className="vs-form-group">
                  <label className="vs-form-label">Provider</label>
                  <select 
                    className="vs-select" 
                    value={paymentProvider}
                    onChange={(e) => setPaymentProvider(e.target.value)}
                    disabled={paymentProcessing}
                  >
                    <option value="MTN">MTN Mobile Money</option>
                    <option value="Airtel">Airtel Money</option>
                  </select>
                </div>

                <div className="vs-form-group">
                  <label className="vs-form-label">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. 0772000000"
                    className="vs-input"
                    value={paymentPhone}
                    onChange={(e) => setPaymentPhone(e.target.value)}
                    required
                    disabled={paymentProcessing}
                  />
                </div>

                <button 
                  type="submit" 
                  className="vs-btn-confirm" 
                  disabled={paymentProcessing}
                >
                  {paymentProcessing ? 'Processing Payment...' : 'Pay 1,500 UGX'}
                </button>
              </form>
            ) : (
              /* Bank Card Modal Content */
              <form onSubmit={handlePaymentSubmit}>
                <h2 className="vs-modal-title">Card Payment</h2>
                <p className="vs-modal-desc">
                  Simulate a credit card payment to purchase a **24 Hours Package (1,500 UGX)**.
                </p>

                <div className="vs-form-group">
                  <label className="vs-form-label">Card Number</label>
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="vs-input"
                    value={paymentCardNum}
                    onChange={(e) => setPaymentCardNum(e.target.value)}
                    required
                    disabled={paymentProcessing}
                  />
                </div>

                <div className="vs-form-row">
                  <div className="vs-form-group">
                    <label className="vs-form-label">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="vs-input"
                      value={paymentCardExpiry}
                      onChange={(e) => setPaymentCardExpiry(e.target.value)}
                      required
                      disabled={paymentProcessing}
                    />
                  </div>
                  <div className="vs-form-group">
                    <label className="vs-form-label">CVV</label>
                    <input
                      type="password"
                      placeholder="CVV"
                      className="vs-input"
                      value={paymentCardCvc}
                      onChange={(e) => setPaymentCardCvc(e.target.value)}
                      required
                      disabled={paymentProcessing}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="vs-btn-confirm" 
                  disabled={paymentProcessing}
                >
                  {paymentProcessing ? 'Processing Payment...' : 'Pay 1,500 UGX'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VoucherScreen;
