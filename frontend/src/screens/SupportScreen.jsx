import React, { useState } from 'react';
import { MessageCircle, HelpCircle, Wifi, ChevronDown, ChevronUp, Ticket, Clock } from 'lucide-react';
import './SupportScreen.css';

const FAQS = [
  {
    q: "How do I connect to the WiFi?",
    a: "Connect to the 'Surflink_Hotspot' network, purchase a package or claim the free trial, then click 'Start Connection' on your dashboard.",
    icon: Wifi
  },
  {
    q: "How do I redeem a voucher code?",
    a: "Go to the Voucher screen, enter your voucher code in the input field, click 'Redeem Voucher', then activate it on the dashboard.",
    icon: Ticket
  },
  {
    q: "Why is my countdown timer not running?",
    a: "Vouchers must be activated manually. Go to the Dashboard screen and click the 'Start Connection' button to initiate the countdown.",
    icon: Clock
  }
];

const SupportScreen = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="sp-root">
      {/* Header */}
      <header className="sp-header">
        <img src="/logo.png" alt="Surflink Logo" className="sp-header-logo-img" />
        <span className="sp-header-text">WiFi Portal</span>
      </header>

      {/* Main Content */}
      <main className="sp-main">
        <h1 className="sp-title">Need Help?</h1>
        <p className="sp-subtitle">Get support or browse common questions</p>

        <div className="sp-cards">
          {/* WhatsApp Support Card */}
          <div className="sp-card sp-card-whatsapp">
            <div className="sp-wa-header">
              <div className="sp-wa-icon-wrap">
                <MessageCircle size={28} className="sp-wa-icon" />
              </div>
              <div className="sp-wa-title-col">
                <span className="sp-wa-title">WhatsApp Support</span>
                <span className="sp-wa-sub">Chat with us for quick assistance</span>
              </div>
            </div>
            <a href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer" className="sp-btn-whatsapp">
              <MessageCircle size={20} fill="currentColor" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Frequently Asked Questions Card */}
          <div className="sp-card">
            <div className="sp-faq-header">
              <HelpCircle size={22} className="sp-faq-header-icon" />
              <h2 className="sp-card-title-main">Frequently Asked Questions</h2>
            </div>

            <div className="sp-faqs">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                const Icon = faq.icon;
                return (
                  <div key={idx} className="sp-faq-item">
                    <button className="sp-faq-question" onClick={() => toggleFaq(idx)}>
                      <div className="sp-faq-q-left">
                        <Icon size={18} className="sp-faq-q-icon" />
                        <span>{faq.q}</span>
                      </div>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {isOpen && (
                      <div className="sp-faq-answer animate-in">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportScreen;
