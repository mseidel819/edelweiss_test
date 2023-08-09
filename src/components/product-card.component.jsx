import styles from "./product-card.module.css";
import PropTypes from "prop-types";

const ProductCard = ({ name, author, img }) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.info}>
        <h2 className={styles.name}>
          {name.length ? name : "(missing title)"}
        </h2>
        <span className={styles.author}>{author ? `by: ${author}` : ""}</span>
      </div>

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
