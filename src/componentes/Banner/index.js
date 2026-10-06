import styles from './Banner.module.css';

function Banner() {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagens/banner-home.png)` }}
    />
  );
}
export default Banner;