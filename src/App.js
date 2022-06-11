import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Service from './components/Service/Service';
import Blogs from '../src/components/Blogs/Blogs';
import Contact from '../src/components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Service></Service>
      <Projects></Projects>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
}

export default App;
