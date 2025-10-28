import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home';
import Games from './pages/Game';
import Art from './pages/Art';
import Contact from './pages/Contact';

/*        
<Route path="/contact" element={<Contact />} />
*/

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;