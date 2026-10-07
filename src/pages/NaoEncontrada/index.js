import {Link} from 'react-router-dom';
import Container from '../../componentes/Container';
import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <Container>
            <h1>Página não encontrada</h1>
            <p>A página que você está procurando não existe.</p>
            <Link to="/">Voltar para a página inicial</Link>
        </Container>
    );
}

export default NaoEncontrada;