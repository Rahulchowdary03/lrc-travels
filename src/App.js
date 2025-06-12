import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetails from './pages/ServiceDetails';
import Layout from './components/Layout';

function App() {
  return (
    <Router basename="/tours-and-travels-website">
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:serviceName" element={<ServiceDetails />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
