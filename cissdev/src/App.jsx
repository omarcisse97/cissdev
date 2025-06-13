import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolios';
import Contact from './components/Contact';
import PortfolioDetails from './components/PortfolioDetails';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingProvider } from './contexts/LoadingContext';
import './App.css';

const App = () => {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'English');
  }
  
  return (
  <LoadingProvider>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/details/:handle" element={<PortfolioDetails  />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </LoadingProvider>
  );
};

export default App;