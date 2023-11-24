import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navigation";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/aboutme";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Intro />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
