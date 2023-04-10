import { Row, Col } from "antd";
import Content from "../Content";
import styles from './Container.module.css';
export default function Container({products}) {
  return (
    <div className={styles.container}>
    <Row gutter={[32, 32]}>
          {products.map(product=>(
              <Col
              key={product.id}
              sm={{span:32}}
              md={{ span: 12 }}
              xl={{ span: 8 }}
            >
            <Content  product={product}/>
            </Col>
          ))}

</Row>
</div>
  );
}
