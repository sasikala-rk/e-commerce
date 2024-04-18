import './App.css';import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import Grocery from './pages/grocery';
import DressList from './pages/dresses';
import Electronics from './pages/electronics';


function App() {
  return (<>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/dresses" element={<DressList />} />
        <Route path="/electronics" element={<Electronics />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
