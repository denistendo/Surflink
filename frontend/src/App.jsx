import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortalLayout from './components/PortalLayout';
import LandingScreen from './screens/LandingScreen';
import DashboardScreen from './screens/DashboardScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PortalLayout />}>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          {/* We will add more routes here, like /buy, /voucher, /resume */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
