import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//pages & components
import Nav from './components/Nav';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';


function App() {
  return (
    <div className="App">
      <h2>Guten Morgen</h2>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cars' element={<CarList />} />
          <Route path='/cars/:id' element={<CarDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;