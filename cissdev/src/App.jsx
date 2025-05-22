import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

const App = () => {
  if(!localStorage.getItem('lang')){
    localStorage.setItem('lang','English');
  }
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
};
export default App;