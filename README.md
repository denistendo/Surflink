🌐 SurfLink

SurfLink is a WiFi hotspot management and billing system designed to provide seamless internet access control, payment integration, and user management for environments such as hostels, schools, and public hotspots.

🚀 Overview

SurfLink allows users to connect to a WiFi network and automatically get redirected to a captive portal where they can:

Purchase internet packages
Pay via mobile money
Login using vouchers
Resume sessions using transaction IDs or voucher codes

The system also provides an admin interface for managing users, payments, vouchers, and staff.

🧩 Features
👤 User Features
Captive portal login system
Buy internet packages (e.g., hourly, daily)
Mobile money payment integration
Voucher-based login
Session resume using:
Voucher code
Transaction ID (TID)
Automatic session expiration
🧑‍💼 Admin Features
Dashboard with analytics (users, revenue, sessions)
Voucher generation and management
Staff account management
Active user monitoring
Payment tracking
🏗️ System Architecture
User → WiFi → Router → SurfLink Portal → Backend API → Database
                                      ↓
                                Payment Gateway
                                      ↓
                                Internet Access
⚙️ Tech Stack
Frontend
React (Vite)
Axios
React Router
Backend
Django
Django REST Framework
Database
PostgreSQL / MySQL
Network Integration
MikroTik Router (Hotspot system)
Payment Integration
MTN Mobile Money
Airtel Money
