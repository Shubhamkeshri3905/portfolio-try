import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfoilo from './components/Portfoilo';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';

// import Card from './components/Card';
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <Card /> */}
      <SocialLinks/>
      <About/>
      <Portfoilo/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
