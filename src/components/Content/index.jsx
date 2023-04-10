import { Link } from 'react-router-dom';
import styles from './Content.module.css';
export default function Content( { product }) {
    return (
        <div className={styles.item} >
          <Link to={`/products/id/${product.id}`}>
            <img
              style={{width:"95%"}}
              src={product.image}
              alt={product.name}
            />
          </Link>
          <div className={styles.info}>
          <h6 className={styles.category}>
               {product.category}
            </h6>
            <h5 className={styles.name}>{product.name}</h5>
            <p className={styles.description}>
            {product.description}
            </p>
            <span
                  className={styles.textGray}>
                  USD {product.price}.00
               </span>
            </div>
          </div>
    );
  }