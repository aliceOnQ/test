import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/Contentdetail";
import Carousel from "../components/carousel"
import products from "../Json/new.json";
import movie from "../Json/movie.json";
function Product() {
   const { productId } = useParams();
   const product = products.find(
      (x) => x.id === productId
   );

   return (
      <div id="container mainLayout">
         <Header
            id="layoutHeader"
         />
          <Carousel movie={movie}/>
         <ProductDetail product={product} id="layoutContent"
 />
         <Footer id="layoutFooter" />
      </div>
   );
}

export default Product;