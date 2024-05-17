import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Stats } from "./components/Stats";
import { Wins } from "./components/Wins";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Stats />
      <Wins />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;