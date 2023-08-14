import './App.css';
import './Responsive.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'
import Newsletter from './components/Newsletter';
import NavbarTop from './components/Navbar';
import DBFighterz from './components/DBFighterz';
import Deliverance from './components/Deliverance';
import YoutubeEmbed from './components/YoutubeEmbed';
import Store from './components/Store';



function App() {
  return (
    <div className="App">
      <Header />
      <NavbarTop />
      <Hero />
      <DBFighterz title="Dragon Ball FighterZ" rating="9/10 Steam ">
      </DBFighterz>
      <YoutubeEmbed embedId='n5rMnfqL5Os' />
      <Deliverance title="Dragon Ball Z Budokai Tenkaichi 4" description="Official Release Trailer">
      </Deliverance>
      <YoutubeEmbed embedId='O5CzC1aFVAw' />
      <Store />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
