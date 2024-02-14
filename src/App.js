import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Pages/Contact';
import AboutUs from './Components/Pages/AboutUs';
import Gallery from './Components/Pages/Gallery';
import Course from './Components/Pages/Course';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/home" element={<Dashboard />}></Route>
          <Route exact path="/aboutUs" element={<AboutUs />}></Route>
          <Route exact path="/course" element={<Course />}></Route>
          <Route exact path="/aboutUs" element={<AboutUs />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
