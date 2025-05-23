import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolios';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  if(!localStorage.getItem('lang')){
    localStorage.setItem('lang','English');
  }
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
};
export default App;