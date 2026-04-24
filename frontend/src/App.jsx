import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortalLayout from './components/PortalLayout';
import LandingScreen from './screens/LandingScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PortalLayout />}>
          <Route path="/" element={<LandingScreen />} />
          {/* We will add more routes here, like /buy, /voucher, /resume */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
