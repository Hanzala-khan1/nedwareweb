import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/servicess/services'
import Contact from './components/contact us/Contact';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      
          {/* <Route exact path='/' element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} /> */}
      <Home/>
      <About/>
      <Services/>
      <Contact/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
