import { NavLink } from 'react-router-dom';
import styles from './Cabecalho.module.css';
function Cabecalho(){
    return ( 
        <><header className={styles.header}>
            <span className={styles.span}>APP Filmes</span>
        <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/favoritos">Favoritos</NavLink>
                <NavLink to="/contato">Contato</NavLink>
        </nav>
        </header>
        </>
    );
}

export default Cabecalho;