import styles from "./product-card.module.css";
import PropTypes from "prop-types";

const ProductCard = ({ name, author, img }) => {
  return (
    <div className={styles.product_card}>
      <h2 className={styles.name}>{name}</h2>
      <span className={styles.author}>{author ? `by: ${author}` : ""}</span>

      <img src={img} alt={name} className={styles.product_img} />
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.string,
};

export default ProductCard;
