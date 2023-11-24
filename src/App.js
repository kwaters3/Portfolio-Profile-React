import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navigation";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/aboutme";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/ContactMe/Contact";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Intro />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
