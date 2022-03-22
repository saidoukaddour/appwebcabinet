import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Rendezvous from './pages/Rendezvous';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Accueil/>}>Accueil</Route>
      <Route path="/rendezvous" element={<Rendezvous/>}>RendezVous</Route>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
