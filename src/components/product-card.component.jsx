import styles from "./product-card.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const ProductCard = ({ name, author, img }) => {
  console.log(img);
  const [imgError, setImgError] = useState(false);

  const handleImgError = () => {
    setImgError(true);
  };

  return (
    <div className={styles.product_card}>
      <div className={styles.info}>
        <h2 className={styles.name}>
          {name.length ? name : "(missing title)"}
        </h2>
        <span className={styles.author}>{author ? `by: ${author}` : ""}</span>
      </div>

      <img
        src={imgError ? "/book-cover-placeholder.png" : img}
        alt={name}
        className={styles.product_img}
        onError={handleImgError}
      />
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.string,
};

export default ProductCard;
