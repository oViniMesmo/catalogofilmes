import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import Container from './componentes/Container';
import Home from './pages/Home';
import NaoEncontrada from './pages/NaoEncontrada'
import './index.css';



function App() {
  return (
    <BrowserRouter>
  <div className="app">
    <Cabecalho />
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>
    <Rodape />
  </div>
  </BrowserRouter>
  );
}

export default App;
