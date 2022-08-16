import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Services from './pages/services';
import About from "./pages/about";
import Profile from "./pages/profile";
import './App.css';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Router>
    
  );
}

export default App;