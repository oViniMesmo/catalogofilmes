import styles from './Cabecalho.module.css';
function Cabecalho(){
    return ( 
        <><header className={styles.header}>
            <span className={styles.span}>APP Filmes</span>
        <nav>
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#favoritos">Favoritos</a>
                <a href="#contato">Contato</a>
                
        </nav>
        </header>
        </>
    );
}

export default Cabecalho;