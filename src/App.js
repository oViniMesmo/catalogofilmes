import Banner from './componentes/Banner';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import Container from './componentes/Container';
import './index.css';
function App() {
  return (
  <div className="app">
    <Cabecalho />
    <Banner />
        <p>Bem-vindo ao APP Filmes! Aqui você encontrará informações sobre seus filmes favoritos, incluindo sinopses, trailers e muito mais. Explore nossa coleção e descubra novos títulos para assistir!</p>
    <Rodape />
  </div>
  );
}

export default App;
