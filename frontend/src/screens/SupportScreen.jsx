import React, { useState } from 'react';
import { HelpCircle, Phone, Mail, MessageSquare, ChevronDown, ChevronUp, Search } from 'lucide-react';
import './SupportScreen.css';

const FAQS = [
  {
    q: "How do I activate my internet package?",
    a: "After purchasing a package, you will receive a unique voucher code. Go to the Dashboard screen, click 'Start Connection', and your internet session will begin immediately."
  },
  {
    q: "Where can I find my voucher code?",
    a: "Your voucher code is displayed on the success screen after purchase. It is also visible in the 'Voucher Ready' card on the Dashboard before connection initiation."
  },
  {
    q: "Can I use the same voucher on multiple devices?",
    a: "Vouchers are locked to the number of devices allowed by the specific package. For example, the 1 Hour package allows 1 device, while the 24 Hours package allows up to 3 devices."
  },
  {
    q: "My internet is slow, what should I do?",
    a: "Ensure you are close to a Surflink Hotspot router and that you have line of sight. Try toggling your device's WiFi off and on again to reconnect to the strongest access point."
  }
];

const SupportScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const filteredFaqs = FAQS.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sp-root">
      {/* Header */}
      <header className="sp-header">
        <img src="/logo.png" alt="Surflink Logo" className="sp-header-logo-img" />
        <span className="sp-header-text">WiFi Portal</span>
      </header>

      {/* Main Content */}
      <main className="sp-main">
        <h1 className="sp-title">Customer Support</h1>
        <p className="sp-subtitle">Get help with your connection and packages</p>

        {/* Contact Methods */}
        <div className="sp-cards">
          <div className="sp-card">
            <h2 className="sp-card-title-main">Contact Us</h2>
            <p className="sp-card-desc">Our support team is available 24/7 to assist you.</p>
            
            <div className="sp-contacts">
              <a href="tel:+256700000000" className="sp-contact-item">
                <div className="sp-icon-circle">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="sp-contact-label">Call Support</span>
                  <span className="sp-contact-value">+256 700 000 000</span>
                </div>
              </a>

              <a href="https://wa.me/256700000000" className="sp-contact-item">
                <div className="sp-icon-circle sp-whatsapp">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <span className="sp-contact-label">WhatsApp Chat</span>
                  <span className="sp-contact-value">Chat with support agent</span>
                </div>
              </a>

              <a href="mailto:support@surflink.com" className="sp-contact-item">
                <div className="sp-icon-circle">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="sp-contact-label">Email Us</span>
                  <span className="sp-contact-value">support@surflink.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* FAQ Card */}
          <div className="sp-card">
            <h2 className="sp-card-title-main">Frequently Asked Questions</h2>
            <div className="sp-search-bar">
              <Search size={18} className="sp-search-icon" />
              <input
                type="text"
                placeholder="Search help topics..."
                className="sp-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="sp-faqs">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div key={idx} className="sp-faq-item">
                      <button className="sp-faq-question" onClick={() => toggleFaq(idx)}>
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      {isOpen && (
                        <div className="sp-faq-answer animate-in">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <p className="sp-no-results">No matches found for "{searchQuery}"</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportScreen;
