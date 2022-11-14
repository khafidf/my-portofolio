import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skill from "./components/Skills";

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
