import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Skill from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
