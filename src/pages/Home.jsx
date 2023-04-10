import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Carousel from "../components/carousel"
import products from "../Json/new.json";
import movie from "../Json/movie.json";

function Home() {
    return (
            <div id="container mainLayout">
                <Header
                    id="layoutHeader"



                />
                <Carousel movie={movie}
                    id="layoutcarousel"



                />
                <Container products={products}
                    ide="layoutContent"



                />
                <Footer
                    id="layoutFooter"



                />
            </div>
    
    )




}
export default Home;