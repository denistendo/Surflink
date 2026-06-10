import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortalLayout from './components/PortalLayout';
import LandingScreen from './screens/LandingScreen';
import DashboardScreen from './screens/DashboardScreen';
import PackagesScreen from './screens/PackagesScreen';
import VoucherScreen from './screens/VoucherScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PortalLayout />}>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/packages" element={<PackagesScreen />} />
          <Route path="/voucher" element={<VoucherScreen />} />
          {/* We will add more routes here, like /buy, /resume */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
