import { useState } from "react";
import { Row, Col, Select } from "antd";
import AddToCart from "../AddToCart"
import styles from "./Contentdetail.module.css"
const { Option } = Select;
function ProductDetail({ product }) {
   const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
   return (
      <Row 
         style={{justifyContent: 'center',backgroundColor:'black',height:'450px'}}
      >
         <Col 
            xs={{ span: 24 }} 
            lg={{ span: 8 }} 
         >
            <img
               alt={product.name}
               className={styles.image}
               src={product.image}
            />                          
         </Col>
         <Col 
            xs={{ span: 24 }} 
            lg={{ span: 8 }} 
         >
            <div className={styles.info} >
               <h1 className={styles.name} >
                  {product.name}
               </h1>
               <p className={styles.description}>
                  {product.description}
               </p>
               <div className={styles.wrap}>
               <p className={styles.price} >
                     US${product.price}.00
                  </p>
               <p className={styles.status}>
                     Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                  </p>
                  <div className={styles.qty}>
                     Qty: {"   "}
                     <Select
                         defaultValue={qty}
                         key={qty}                        
                         className={styles.selectStyle}
                         onChange={val => setQty(val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                  </div>
                  <p className={styles.qty}>
                     Total Price:{product.price*qty}
                  </p>
                  <AddToCart />
               </div>
            </div>           
         </Col>
      </Row>         
   );
}

export default ProductDetail;