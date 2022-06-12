import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Service from './components/Service/Service';
import Blogs from '../src/components/Blogs/Blogs';
import Contact from '../src/components/Contact/Contact';
import Footer from '../src/components/Footer/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Service></Service>
      <Projects></Projects>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
