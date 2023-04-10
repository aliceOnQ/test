import { Button } from "antd"
import styles from "./AddToCart.module.css";
export default function AddToCart() {

  return (
    <Button className={styles.btn} >
      Add To Cart
    </Button>
  );
}