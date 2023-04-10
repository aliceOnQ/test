import { useParams } from 'react-router-dom';
import _ from 'lodash';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/Container";
import Carousel from "../components/carousel"
import products from "../Json/new.json"
import movie from "../Json/movie.json";
function Category() {
    const { categoryName } = useParams();
    const _products = products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
      );
    

        return (
            <div id="container mainLayout">
                <Header
                    id="layoutHeader"
    
    
    
                />
                 <Carousel movie={movie} 
                 id="layoutcarousel"
    
    
                 
                 />
                <Container products={_products}
                id="layoutContent"
    
    
    
                />
                <Footer
                    id="layoutFooter"
    
    
    
                />
            </div>
        )
    
        }
export default Category;