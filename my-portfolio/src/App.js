import React, {useEffect} from 'react';
//import './Style.css';
import Welcome from './Components/Welcome/Welcome';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Connect from './Components/Connect/Connect';
import Aos from 'aos';
import "aos/dist/aos.css";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () =>{
  //animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //layout
  return(
    <div>
      <Navbar/>
      <Welcome/>
      <AboutMe/>
      <Projects/>
      <Resume/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
