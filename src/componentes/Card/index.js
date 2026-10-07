import styles from './Card.modules.css';
function Card({id}) {
    <div className={styles.card}>
        <img src={`/imagens/${id}.jpg`} alt={`Imagem do filme ${id}`} />
    </div>
}
export default Card;